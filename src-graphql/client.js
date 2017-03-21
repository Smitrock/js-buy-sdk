import GraphQLJSClient from '@shopify/graphql-js-client';
import types from '../types';
import base64Encode from './base64encode';
import './isomorphic-fetch';
import productQuery from './product-query';
import productConnectionQuery from './product-connection-query';
import collectionQuery from './collection-query';
import collectionConnectionQuery from './collection-connection-query';
import ProductHelpers from './product-helpers';
import checkoutQuery from './checkout-query';
import fetchAllPages from './fetch-all-pages';

function fetchAllProductResources(product, client) {
  const promises = [];
  const images = product.images;
  const variants = product.variants;

  if (images && images.length && images[images.length - 1].hasNextPage.valueOf()) {
    promises.push(fetchAllPages(images, client));
  }

  if (variants && variants.length && variants[variants.length - 1].hasNextPage.valueOf()) {
    promises.push(fetchAllPages(variants, client));
  }

  return promises;
}

export default class Client {
  constructor(config, GraphQLClientClass = GraphQLJSClient) {
    const apiUrl = `https://${config.domain}/api/graphql`;
    const authHeader = `Basic ${base64Encode(config.storefrontAccessToken)}`;

    this.graphQLClient = new GraphQLClientClass(types, {
      url: apiUrl,
      fetcherOptions: {
        headers: {
          Authorization: authHeader
        }
      }
    });

    this.Product = {};
    this.Product.Helpers = new ProductHelpers();
  }

  fetchAllProducts(query = productConnectionQuery()) {
    const rootQuery = this.graphQLClient.query((root) => {
      root.add('shop', (shop) => {
        query(shop, 'products');
      });
    });

    return this.graphQLClient.send(rootQuery).then(({model}) => {
      const promises = model.shop.products.reduce((promiseAcc, product) => {
        // Fetch the rest of the images and variants for this product
        return promiseAcc.concat(fetchAllProductResources(product, this.graphQLClient));
      }, []);

      return Promise.all(promises).then(() => {
        return model.shop.products;
      });
    });
  }

  fetchProduct(id, query = productQuery()) {
    const rootQuery = this.graphQLClient.query((root) => {
      query(root, 'node', id);
    });

    return this.graphQLClient.send(rootQuery).then(({model}) => {
      // Fetch the rest of the images and variants for this product
      const promises = fetchAllProductResources(model.node, this.graphQLClient);

      return Promise.all(promises).then(() => {
        return model.node;
      });
    });
  }

  fetchAllCollections(query = collectionConnectionQuery()) {
    const rootQuery = this.graphQLClient.query((root) => {
      root.add('shop', (shop) => {
        query(shop, 'collections');
      });
    });

    return this.graphQLClient.send(rootQuery).then((response) => {
      return response.model.shop.collections;
    });
  }

  fetchCollection(id, query = collectionQuery()) {
    const rootQuery = this.graphQLClient.query((root) => {
      query(root, 'node', id);
    });

    return this.graphQLClient.send(rootQuery).then((response) => {
      return response.model.node;
    });
  }

  createCheckout(input, query = checkoutQuery()) {
    const mutation = this.graphQLClient.mutation((root) => {
      root.add('checkoutCreate', {args: {input}}, (checkoutCreate) => {
        checkoutCreate.add('userErrors', (userErrors) => {
          userErrors.add('message');
          userErrors.add('field');
        });
        query(checkoutCreate, 'checkout');
      });
    });

    return this.graphQLClient.send(mutation).then((result) => {
      // Paginate on line items
      const promises = [];
      const lineItems = result.model.checkoutCreate.checkout.lineItems;

      if (lineItems && lineItems.length && lineItems[lineItems.length - 1].hasNextPage.valueOf()) {
        promises.push(fetchAllPages(lineItems, this.graphQLClient));
      }

      return Promise.all(promises).then(() => {
        return result.model.checkoutCreate.checkout;
      });
    });
  }
}
