/*
The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var GraphQLJSClient = _interopDefault(require('@shopify/graphql-js-client'));

var Checkout = {
  "name": "Checkout",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "createdAt": "DateTime",
    "customAttributes": "Attribute",
    "id": "ID",
    "lineItems": "LineItemConnection",
    "note": "String",
    "ready": "Boolean",
    "requiresShipping": "Boolean",
    "shippingAddress": "MailingAddress",
    "shippingLine": "ShippingRate",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};
Object.freeze(Checkout.fieldBaseTypes);
Object.freeze(Checkout.possibleTypes);
var Checkout$1 = Object.freeze(Checkout);

var ID = {
  "name": "ID",
  "kind": "SCALAR"
};
Object.freeze(ID.fieldBaseTypes);
Object.freeze(ID.possibleTypes);
var ID$1 = Object.freeze(ID);

var Boolean = {
  "name": "Boolean",
  "kind": "SCALAR"
};
Object.freeze(Boolean.fieldBaseTypes);
Object.freeze(Boolean.possibleTypes);
var Boolean$1 = Object.freeze(Boolean);

var LineItemConnection = {
  "name": "LineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "LineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(LineItemConnection.fieldBaseTypes);
Object.freeze(LineItemConnection.possibleTypes);
var LineItemConnection$1 = Object.freeze(LineItemConnection);

var PageInfo = {
  "name": "PageInfo",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "hasNextPage": "Boolean",
    "hasPreviousPage": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(PageInfo.fieldBaseTypes);
Object.freeze(PageInfo.possibleTypes);
var PageInfo$1 = Object.freeze(PageInfo);

var LineItemEdge = {
  "name": "LineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "LineItem"
  },
  "implementsNode": false
};
Object.freeze(LineItemEdge.fieldBaseTypes);
Object.freeze(LineItemEdge.possibleTypes);
var LineItemEdge$1 = Object.freeze(LineItemEdge);

var String = {
  "name": "String",
  "kind": "SCALAR"
};
Object.freeze(String.fieldBaseTypes);
Object.freeze(String.possibleTypes);
var String$1 = Object.freeze(String);

var LineItem = {
  "name": "LineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": false
};
Object.freeze(LineItem.fieldBaseTypes);
Object.freeze(LineItem.possibleTypes);
var LineItem$1 = Object.freeze(LineItem);

var ProductVariant = {
  "name": "ProductVariant",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "available": "Boolean",
    "id": "ID",
    "image": "Image",
    "price": "Money",
    "product": "Product",
    "selectedOptions": "SelectedOption",
    "title": "String",
    "weight": "Float",
    "weightUnit": "WeightUnit"
  },
  "implementsNode": true
};
Object.freeze(ProductVariant.fieldBaseTypes);
Object.freeze(ProductVariant.possibleTypes);
var ProductVariant$1 = Object.freeze(ProductVariant);

var Float = {
  "name": "Float",
  "kind": "SCALAR"
};
Object.freeze(Float.fieldBaseTypes);
Object.freeze(Float.possibleTypes);
var Float$1 = Object.freeze(Float);

var WeightUnit = {
  "name": "WeightUnit",
  "kind": "ENUM"
};
Object.freeze(WeightUnit.fieldBaseTypes);
Object.freeze(WeightUnit.possibleTypes);
var WeightUnit$1 = Object.freeze(WeightUnit);

var Money = {
  "name": "Money",
  "kind": "SCALAR"
};
Object.freeze(Money.fieldBaseTypes);
Object.freeze(Money.possibleTypes);
var Money$1 = Object.freeze(Money);

var Image = {
  "name": "Image",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "altText": "String",
    "id": "ID",
    "src": "URL"
  },
  "implementsNode": false
};
Object.freeze(Image.fieldBaseTypes);
Object.freeze(Image.possibleTypes);
var Image$1 = Object.freeze(Image);

var URL = {
  "name": "URL",
  "kind": "SCALAR"
};
Object.freeze(URL.fieldBaseTypes);
Object.freeze(URL.possibleTypes);
var URL$1 = Object.freeze(URL);

var Int = {
  "name": "Int",
  "kind": "SCALAR"
};
Object.freeze(Int.fieldBaseTypes);
Object.freeze(Int.possibleTypes);
var Int$1 = Object.freeze(Int);

var CropRegion = {
  "name": "CropRegion",
  "kind": "ENUM"
};
Object.freeze(CropRegion.fieldBaseTypes);
Object.freeze(CropRegion.possibleTypes);
var CropRegion$1 = Object.freeze(CropRegion);

var SelectedOption = {
  "name": "SelectedOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};
Object.freeze(SelectedOption.fieldBaseTypes);
Object.freeze(SelectedOption.possibleTypes);
var SelectedOption$1 = Object.freeze(SelectedOption);

var Product = {
  "name": "Product",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "collections": "CollectionConnection",
    "createdAt": "DateTime",
    "descriptionHtml": "String",
    "descriptionPlainSummary": "String",
    "handle": "String",
    "id": "ID",
    "images": "ImageConnection",
    "options": "ProductOption",
    "productType": "String",
    "publishedAt": "DateTime",
    "tags": "String",
    "title": "String",
    "updatedAt": "DateTime",
    "variants": "ProductVariantConnection",
    "vendor": "String"
  },
  "implementsNode": true
};
Object.freeze(Product.fieldBaseTypes);
Object.freeze(Product.possibleTypes);
var Product$1 = Object.freeze(Product);

var CollectionConnection = {
  "name": "CollectionConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CollectionEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(CollectionConnection.fieldBaseTypes);
Object.freeze(CollectionConnection.possibleTypes);
var CollectionConnection$1 = Object.freeze(CollectionConnection);

var CollectionEdge = {
  "name": "CollectionEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Collection"
  },
  "implementsNode": false
};
Object.freeze(CollectionEdge.fieldBaseTypes);
Object.freeze(CollectionEdge.possibleTypes);
var CollectionEdge$1 = Object.freeze(CollectionEdge);

var Collection = {
  "name": "Collection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "descriptionHtml": "String",
    "descriptionPlainSummary": "String",
    "handle": "String",
    "id": "ID",
    "image": "Image",
    "products": "ProductConnection",
    "title": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};
Object.freeze(Collection.fieldBaseTypes);
Object.freeze(Collection.possibleTypes);
var Collection$1 = Object.freeze(Collection);

var DateTime = {
  "name": "DateTime",
  "kind": "SCALAR"
};
Object.freeze(DateTime.fieldBaseTypes);
Object.freeze(DateTime.possibleTypes);
var DateTime$1 = Object.freeze(DateTime);

var ProductConnection = {
  "name": "ProductConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ProductConnection.fieldBaseTypes);
Object.freeze(ProductConnection.possibleTypes);
var ProductConnection$1 = Object.freeze(ProductConnection);

var ProductEdge = {
  "name": "ProductEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Product"
  },
  "implementsNode": false
};
Object.freeze(ProductEdge.fieldBaseTypes);
Object.freeze(ProductEdge.possibleTypes);
var ProductEdge$1 = Object.freeze(ProductEdge);

var Node = {
  "name": "Node",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "id": "ID"
  },
  "possibleTypes": ["Checkout", "Collection", "CreditCardPaymentRequest", "Product", "ProductOption", "ProductVariant", "ShopPolicy"]
};
Object.freeze(Node.fieldBaseTypes);
Object.freeze(Node.possibleTypes);
var Node$1 = Object.freeze(Node);

var ImageConnection = {
  "name": "ImageConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ImageEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ImageConnection.fieldBaseTypes);
Object.freeze(ImageConnection.possibleTypes);
var ImageConnection$1 = Object.freeze(ImageConnection);

var ImageEdge = {
  "name": "ImageEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Image"
  },
  "implementsNode": false
};
Object.freeze(ImageEdge.fieldBaseTypes);
Object.freeze(ImageEdge.possibleTypes);
var ImageEdge$1 = Object.freeze(ImageEdge);

var ProductOption = {
  "name": "ProductOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "id": "ID",
    "name": "String",
    "values": "String"
  },
  "implementsNode": true
};
Object.freeze(ProductOption.fieldBaseTypes);
Object.freeze(ProductOption.possibleTypes);
var ProductOption$1 = Object.freeze(ProductOption);

var ProductVariantConnection = {
  "name": "ProductVariantConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ProductVariantConnection.fieldBaseTypes);
Object.freeze(ProductVariantConnection.possibleTypes);
var ProductVariantConnection$1 = Object.freeze(ProductVariantConnection);

var ProductVariantEdge = {
  "name": "ProductVariantEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "ProductVariant"
  },
  "implementsNode": false
};
Object.freeze(ProductVariantEdge.fieldBaseTypes);
Object.freeze(ProductVariantEdge.possibleTypes);
var ProductVariantEdge$1 = Object.freeze(ProductVariantEdge);

var Attribute = {
  "name": "Attribute",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "key": "String",
    "value": "String"
  },
  "implementsNode": false
};
Object.freeze(Attribute.fieldBaseTypes);
Object.freeze(Attribute.possibleTypes);
var Attribute$1 = Object.freeze(Attribute);

var MailingAddress = {
  "name": "MailingAddress",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "countryCode": "String",
    "firstName": "String",
    "formatted": "String",
    "id": "ID",
    "lastName": "String",
    "latitude": "Float",
    "longitude": "Float",
    "name": "String",
    "phone": "String",
    "province": "String",
    "provinceCode": "String",
    "zip": "String"
  },
  "implementsNode": false
};
Object.freeze(MailingAddress.fieldBaseTypes);
Object.freeze(MailingAddress.possibleTypes);
var MailingAddress$1 = Object.freeze(MailingAddress);

var ShippingRate = {
  "name": "ShippingRate",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "handle": "String",
    "price": "Money",
    "title": "String"
  },
  "implementsNode": false
};
Object.freeze(ShippingRate.fieldBaseTypes);
Object.freeze(ShippingRate.possibleTypes);
var ShippingRate$1 = Object.freeze(ShippingRate);

var CreditCardPaymentRequest = {
  "name": "CreditCardPaymentRequest",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Money",
    "checkout": "Checkout",
    "creditCard": "CreditCard",
    "errorMessage": "String",
    "id": "ID",
    "idempotencyKey": "String",
    "test": "Boolean",
    "transaction": "Transaction"
  },
  "implementsNode": true
};
Object.freeze(CreditCardPaymentRequest.fieldBaseTypes);
Object.freeze(CreditCardPaymentRequest.possibleTypes);
var CreditCardPaymentRequest$1 = Object.freeze(CreditCardPaymentRequest);

var Transaction = {
  "name": "Transaction",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Money",
    "kind": "TransactionKind",
    "status": "TransactionStatus",
    "test": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(Transaction.fieldBaseTypes);
Object.freeze(Transaction.possibleTypes);
var Transaction$1 = Object.freeze(Transaction);

var TransactionKind = {
  "name": "TransactionKind",
  "kind": "ENUM"
};
Object.freeze(TransactionKind.fieldBaseTypes);
Object.freeze(TransactionKind.possibleTypes);
var TransactionKind$1 = Object.freeze(TransactionKind);

var TransactionStatus = {
  "name": "TransactionStatus",
  "kind": "ENUM"
};
Object.freeze(TransactionStatus.fieldBaseTypes);
Object.freeze(TransactionStatus.possibleTypes);
var TransactionStatus$1 = Object.freeze(TransactionStatus);

var CreditCard = {
  "name": "CreditCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "brand": "String",
    "expiryMonth": "Int",
    "expiryYear": "Int",
    "firstDigits": "String",
    "firstName": "String",
    "lastDigits": "String",
    "lastName": "String",
    "maskedNumber": "String"
  },
  "implementsNode": false
};
Object.freeze(CreditCard.fieldBaseTypes);
Object.freeze(CreditCard.possibleTypes);
var CreditCard$1 = Object.freeze(CreditCard);

var QueryRoot = {
  "name": "QueryRoot",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "node": "Node",
    "shop": "Shop"
  },
  "implementsNode": false
};
Object.freeze(QueryRoot.fieldBaseTypes);
Object.freeze(QueryRoot.possibleTypes);
var QueryRoot$1 = Object.freeze(QueryRoot);

var Customer = {
  "name": "Customer",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "acceptsMarketing": "Boolean",
    "address": "MailingAddress",
    "addresses": "MailingAddressConnection",
    "createdAt": "DateTime",
    "defaultAddress": "MailingAddress",
    "displayName": "String",
    "email": "String",
    "firstName": "String",
    "id": "ID",
    "lastName": "String",
    "order": "Order",
    "orders": "OrderConnection",
    "updatedAt": "DateTime"
  },
  "implementsNode": false
};
Object.freeze(Customer.fieldBaseTypes);
Object.freeze(Customer.possibleTypes);
var Customer$1 = Object.freeze(Customer);

var MailingAddressConnection = {
  "name": "MailingAddressConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "MailingAddressEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(MailingAddressConnection.fieldBaseTypes);
Object.freeze(MailingAddressConnection.possibleTypes);
var MailingAddressConnection$1 = Object.freeze(MailingAddressConnection);

var MailingAddressEdge = {
  "name": "MailingAddressEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "MailingAddress"
  },
  "implementsNode": false
};
Object.freeze(MailingAddressEdge.fieldBaseTypes);
Object.freeze(MailingAddressEdge.possibleTypes);
var MailingAddressEdge$1 = Object.freeze(MailingAddressEdge);

var OrderConnection = {
  "name": "OrderConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "OrderEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(OrderConnection.fieldBaseTypes);
Object.freeze(OrderConnection.possibleTypes);
var OrderConnection$1 = Object.freeze(OrderConnection);

var OrderEdge = {
  "name": "OrderEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Order"
  },
  "implementsNode": false
};
Object.freeze(OrderEdge.fieldBaseTypes);
Object.freeze(OrderEdge.possibleTypes);
var OrderEdge$1 = Object.freeze(OrderEdge);

var Order = {
  "name": "Order",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cancelReason": "OrderCancelReason",
    "cancelledAt": "DateTime",
    "createdAt": "DateTime",
    "currencyCode": "CurrencyCode",
    "customerUrl": "URL",
    "displayFinancialStatus": "OrderDisplayFinancialStatus",
    "displayFulfillmentStatus": "OrderDisplayFulfillmentStatus",
    "id": "ID",
    "lineItems": "LineItemConnection",
    "orderNumber": "Int",
    "processedAt": "DateTime",
    "shippingAddress": "MailingAddress",
    "subtotalPrice": "Money",
    "totalPrice": "Money",
    "totalRefunded": "Money",
    "totalShippingPrice": "Money",
    "totalTax": "Money",
    "updatedAt": "DateTime"
  },
  "implementsNode": false
};
Object.freeze(Order.fieldBaseTypes);
Object.freeze(Order.possibleTypes);
var Order$1 = Object.freeze(Order);

var OrderCancelReason = {
  "name": "OrderCancelReason",
  "kind": "ENUM"
};
Object.freeze(OrderCancelReason.fieldBaseTypes);
Object.freeze(OrderCancelReason.possibleTypes);
var OrderCancelReason$1 = Object.freeze(OrderCancelReason);

var CurrencyCode = {
  "name": "CurrencyCode",
  "kind": "ENUM"
};
Object.freeze(CurrencyCode.fieldBaseTypes);
Object.freeze(CurrencyCode.possibleTypes);
var CurrencyCode$1 = Object.freeze(CurrencyCode);

var OrderDisplayFulfillmentStatus = {
  "name": "OrderDisplayFulfillmentStatus",
  "kind": "ENUM"
};
Object.freeze(OrderDisplayFulfillmentStatus.fieldBaseTypes);
Object.freeze(OrderDisplayFulfillmentStatus.possibleTypes);
var OrderDisplayFulfillmentStatus$1 = Object.freeze(OrderDisplayFulfillmentStatus);

var OrderDisplayFinancialStatus = {
  "name": "OrderDisplayFinancialStatus",
  "kind": "ENUM"
};
Object.freeze(OrderDisplayFinancialStatus.fieldBaseTypes);
Object.freeze(OrderDisplayFinancialStatus.possibleTypes);
var OrderDisplayFinancialStatus$1 = Object.freeze(OrderDisplayFinancialStatus);

var OrderSortKeys = {
  "name": "OrderSortKeys",
  "kind": "ENUM"
};
Object.freeze(OrderSortKeys.fieldBaseTypes);
Object.freeze(OrderSortKeys.possibleTypes);
var OrderSortKeys$1 = Object.freeze(OrderSortKeys);

var Shop = {
  "name": "Shop",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "billingAddress": "MailingAddress",
    "collections": "CollectionConnection",
    "currencyCode": "CurrencyCode",
    "description": "String",
    "moneyFormat": "String",
    "name": "String",
    "primaryDomain": "Domain",
    "privacyPolicy": "ShopPolicy",
    "products": "ProductConnection",
    "refundPolicy": "ShopPolicy",
    "termsOfService": "ShopPolicy"
  },
  "implementsNode": false
};
Object.freeze(Shop.fieldBaseTypes);
Object.freeze(Shop.possibleTypes);
var Shop$1 = Object.freeze(Shop);

var Domain = {
  "name": "Domain",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "host": "String",
    "sslEnabled": "Boolean",
    "url": "URL"
  },
  "implementsNode": false
};
Object.freeze(Domain.fieldBaseTypes);
Object.freeze(Domain.possibleTypes);
var Domain$1 = Object.freeze(Domain);

var ShopPolicy = {
  "name": "ShopPolicy",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "body": "String",
    "id": "ID",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};
Object.freeze(ShopPolicy.fieldBaseTypes);
Object.freeze(ShopPolicy.possibleTypes);
var ShopPolicy$1 = Object.freeze(ShopPolicy);

var CollectionSortKeys = {
  "name": "CollectionSortKeys",
  "kind": "ENUM"
};
Object.freeze(CollectionSortKeys.fieldBaseTypes);
Object.freeze(CollectionSortKeys.possibleTypes);
var CollectionSortKeys$1 = Object.freeze(CollectionSortKeys);

var ProductSortKeys = {
  "name": "ProductSortKeys",
  "kind": "ENUM"
};
Object.freeze(ProductSortKeys.fieldBaseTypes);
Object.freeze(ProductSortKeys.possibleTypes);
var ProductSortKeys$1 = Object.freeze(ProductSortKeys);

var Mutation = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdatePayload",
    "checkoutCreate": "CheckoutCreatePayload",
    "checkoutShippingAddressUpdate": "CheckoutShippingAddressUpdatePayload",
    "checkoutShippingLineUpdate": "CheckoutShippingLineUpdatePayload",
    "customerAccessTokenCreate": "CustomerAccessTokenCreatePayload",
    "customerAccessTokenDelete": "CustomerAccessTokenDeletePayload",
    "customerAccessTokenRenew": "CustomerAccessTokenRenewPayload",
    "customerActivate": "CustomerActivatePayload",
    "customerAddressCreate": "CustomerAddressCreatePayload",
    "customerAddressDelete": "CustomerAddressDeletePayload",
    "customerAddressUpdate": "CustomerAddressUpdatePayload",
    "customerCreate": "CustomerCreatePayload",
    "customerRecover": "CustomerRecoverPayload",
    "customerReset": "CustomerResetPayload",
    "customerUpdate": "CustomerUpdatePayload"
  },
  "implementsNode": false
};
Object.freeze(Mutation.fieldBaseTypes);
Object.freeze(Mutation.possibleTypes);
var Mutation$1 = Object.freeze(Mutation);

var CustomerAccessTokenCreatePayload = {
  "name": "CustomerAccessTokenCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customerAccessToken": "CustomerAccessToken",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenCreatePayload.fieldBaseTypes);
Object.freeze(CustomerAccessTokenCreatePayload.possibleTypes);
var CustomerAccessTokenCreatePayload$1 = Object.freeze(CustomerAccessTokenCreatePayload);

var UserError = {
  "name": "UserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};
Object.freeze(UserError.fieldBaseTypes);
Object.freeze(UserError.possibleTypes);
var UserError$1 = Object.freeze(UserError);

var CustomerAccessToken = {
  "name": "CustomerAccessToken",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "accessToken": "String",
    "expiresAt": "DateTime"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessToken.fieldBaseTypes);
Object.freeze(CustomerAccessToken.possibleTypes);
var CustomerAccessToken$1 = Object.freeze(CustomerAccessToken);

var CustomerAccessTokenCreateInput = {
  "name": "CustomerAccessTokenCreateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAccessTokenCreateInput.fieldBaseTypes);
Object.freeze(CustomerAccessTokenCreateInput.possibleTypes);
var CustomerAccessTokenCreateInput$1 = Object.freeze(CustomerAccessTokenCreateInput);

var CustomerAccessTokenRenewPayload = {
  "name": "CustomerAccessTokenRenewPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customerAccessToken": "CustomerAccessToken",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenRenewPayload.fieldBaseTypes);
Object.freeze(CustomerAccessTokenRenewPayload.possibleTypes);
var CustomerAccessTokenRenewPayload$1 = Object.freeze(CustomerAccessTokenRenewPayload);

var CustomerAccessTokenRenewInput = {
  "name": "CustomerAccessTokenRenewInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAccessTokenRenewInput.fieldBaseTypes);
Object.freeze(CustomerAccessTokenRenewInput.possibleTypes);
var CustomerAccessTokenRenewInput$1 = Object.freeze(CustomerAccessTokenRenewInput);

var CustomerAccessTokenDeletePayload = {
  "name": "CustomerAccessTokenDeletePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "deletedAccessToken": "String",
    "deletedCustomerAccessTokenId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenDeletePayload.fieldBaseTypes);
Object.freeze(CustomerAccessTokenDeletePayload.possibleTypes);
var CustomerAccessTokenDeletePayload$1 = Object.freeze(CustomerAccessTokenDeletePayload);

var CustomerAccessTokenDeleteInput = {
  "name": "CustomerAccessTokenDeleteInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAccessTokenDeleteInput.fieldBaseTypes);
Object.freeze(CustomerAccessTokenDeleteInput.possibleTypes);
var CustomerAccessTokenDeleteInput$1 = Object.freeze(CustomerAccessTokenDeleteInput);

var CustomerActivatePayload = {
  "name": "CustomerActivatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerActivatePayload.fieldBaseTypes);
Object.freeze(CustomerActivatePayload.possibleTypes);
var CustomerActivatePayload$1 = Object.freeze(CustomerActivatePayload);

var CustomerActivateInput = {
  "name": "CustomerActivateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerActivateInput.fieldBaseTypes);
Object.freeze(CustomerActivateInput.possibleTypes);
var CustomerActivateInput$1 = Object.freeze(CustomerActivateInput);

var CustomerCreatePayload = {
  "name": "CustomerCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerCreatePayload.fieldBaseTypes);
Object.freeze(CustomerCreatePayload.possibleTypes);
var CustomerCreatePayload$1 = Object.freeze(CustomerCreatePayload);

var CustomerCreateInput = {
  "name": "CustomerCreateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerCreateInput.fieldBaseTypes);
Object.freeze(CustomerCreateInput.possibleTypes);
var CustomerCreateInput$1 = Object.freeze(CustomerCreateInput);

var CustomerAddressCreatePayload = {
  "name": "CustomerAddressCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customerAddress": "MailingAddress",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressCreatePayload.fieldBaseTypes);
Object.freeze(CustomerAddressCreatePayload.possibleTypes);
var CustomerAddressCreatePayload$1 = Object.freeze(CustomerAddressCreatePayload);

var CustomerAddressCreateInput = {
  "name": "CustomerAddressCreateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAddressCreateInput.fieldBaseTypes);
Object.freeze(CustomerAddressCreateInput.possibleTypes);
var CustomerAddressCreateInput$1 = Object.freeze(CustomerAddressCreateInput);

var MailingAddressInput = {
  "name": "MailingAddressInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(MailingAddressInput.fieldBaseTypes);
Object.freeze(MailingAddressInput.possibleTypes);
var MailingAddressInput$1 = Object.freeze(MailingAddressInput);

var CustomerAddressDeletePayload = {
  "name": "CustomerAddressDeletePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "deletedCustomerAddressId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressDeletePayload.fieldBaseTypes);
Object.freeze(CustomerAddressDeletePayload.possibleTypes);
var CustomerAddressDeletePayload$1 = Object.freeze(CustomerAddressDeletePayload);

var CustomerAddressDeleteInput = {
  "name": "CustomerAddressDeleteInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAddressDeleteInput.fieldBaseTypes);
Object.freeze(CustomerAddressDeleteInput.possibleTypes);
var CustomerAddressDeleteInput$1 = Object.freeze(CustomerAddressDeleteInput);

var CustomerAddressUpdatePayload = {
  "name": "CustomerAddressUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customerAddress": "MailingAddress",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressUpdatePayload.fieldBaseTypes);
Object.freeze(CustomerAddressUpdatePayload.possibleTypes);
var CustomerAddressUpdatePayload$1 = Object.freeze(CustomerAddressUpdatePayload);

var CustomerAddressUpdateInput = {
  "name": "CustomerAddressUpdateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerAddressUpdateInput.fieldBaseTypes);
Object.freeze(CustomerAddressUpdateInput.possibleTypes);
var CustomerAddressUpdateInput$1 = Object.freeze(CustomerAddressUpdateInput);

var CustomerRecoverPayload = {
  "name": "CustomerRecoverPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerRecoverPayload.fieldBaseTypes);
Object.freeze(CustomerRecoverPayload.possibleTypes);
var CustomerRecoverPayload$1 = Object.freeze(CustomerRecoverPayload);

var CustomerRecoverInput = {
  "name": "CustomerRecoverInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerRecoverInput.fieldBaseTypes);
Object.freeze(CustomerRecoverInput.possibleTypes);
var CustomerRecoverInput$1 = Object.freeze(CustomerRecoverInput);

var CustomerResetPayload = {
  "name": "CustomerResetPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerResetPayload.fieldBaseTypes);
Object.freeze(CustomerResetPayload.possibleTypes);
var CustomerResetPayload$1 = Object.freeze(CustomerResetPayload);

var CustomerResetInput = {
  "name": "CustomerResetInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerResetInput.fieldBaseTypes);
Object.freeze(CustomerResetInput.possibleTypes);
var CustomerResetInput$1 = Object.freeze(CustomerResetInput);

var CustomerUpdatePayload = {
  "name": "CustomerUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "clientMutationId": "String",
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerUpdatePayload.fieldBaseTypes);
Object.freeze(CustomerUpdatePayload.possibleTypes);
var CustomerUpdatePayload$1 = Object.freeze(CustomerUpdatePayload);

var CustomerUpdateInput = {
  "name": "CustomerUpdateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CustomerUpdateInput.fieldBaseTypes);
Object.freeze(CustomerUpdateInput.possibleTypes);
var CustomerUpdateInput$1 = Object.freeze(CustomerUpdateInput);

var CheckoutAttributesUpdatePayload = {
  "name": "CheckoutAttributesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "clientMutationId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutAttributesUpdatePayload.fieldBaseTypes);
Object.freeze(CheckoutAttributesUpdatePayload.possibleTypes);
var CheckoutAttributesUpdatePayload$1 = Object.freeze(CheckoutAttributesUpdatePayload);

var CheckoutAttributesUpdateInput = {
  "name": "CheckoutAttributesUpdateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CheckoutAttributesUpdateInput.fieldBaseTypes);
Object.freeze(CheckoutAttributesUpdateInput.possibleTypes);
var CheckoutAttributesUpdateInput$1 = Object.freeze(CheckoutAttributesUpdateInput);

var AttributeInput = {
  "name": "AttributeInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(AttributeInput.fieldBaseTypes);
Object.freeze(AttributeInput.possibleTypes);
var AttributeInput$1 = Object.freeze(AttributeInput);

var CheckoutCreatePayload = {
  "name": "CheckoutCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "clientMutationId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCreatePayload.fieldBaseTypes);
Object.freeze(CheckoutCreatePayload.possibleTypes);
var CheckoutCreatePayload$1 = Object.freeze(CheckoutCreatePayload);

var CheckoutCreateInput = {
  "name": "CheckoutCreateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CheckoutCreateInput.fieldBaseTypes);
Object.freeze(CheckoutCreateInput.possibleTypes);
var CheckoutCreateInput$1 = Object.freeze(CheckoutCreateInput);

var LineItemInput = {
  "name": "LineItemInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(LineItemInput.fieldBaseTypes);
Object.freeze(LineItemInput.possibleTypes);
var LineItemInput$1 = Object.freeze(LineItemInput);

var CheckoutShippingAddressUpdatePayload = {
  "name": "CheckoutShippingAddressUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "clientMutationId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutShippingAddressUpdatePayload.fieldBaseTypes);
Object.freeze(CheckoutShippingAddressUpdatePayload.possibleTypes);
var CheckoutShippingAddressUpdatePayload$1 = Object.freeze(CheckoutShippingAddressUpdatePayload);

var CheckoutShippingAddressUpdateInput = {
  "name": "CheckoutShippingAddressUpdateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CheckoutShippingAddressUpdateInput.fieldBaseTypes);
Object.freeze(CheckoutShippingAddressUpdateInput.possibleTypes);
var CheckoutShippingAddressUpdateInput$1 = Object.freeze(CheckoutShippingAddressUpdateInput);

var CheckoutShippingLineUpdatePayload = {
  "name": "CheckoutShippingLineUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "clientMutationId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutShippingLineUpdatePayload.fieldBaseTypes);
Object.freeze(CheckoutShippingLineUpdatePayload.possibleTypes);
var CheckoutShippingLineUpdatePayload$1 = Object.freeze(CheckoutShippingLineUpdatePayload);

var CheckoutShippingLineUpdateInput = {
  "name": "CheckoutShippingLineUpdateInput",
  "kind": "INPUT_OBJECT"
};
Object.freeze(CheckoutShippingLineUpdateInput.fieldBaseTypes);
Object.freeze(CheckoutShippingLineUpdateInput.possibleTypes);
var CheckoutShippingLineUpdateInput$1 = Object.freeze(CheckoutShippingLineUpdateInput);

var __Schema = {
  "name": "__Schema",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "directives": "__Directive",
    "mutationType": "__Type",
    "queryType": "__Type",
    "subscriptionType": "__Type",
    "types": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Schema.fieldBaseTypes);
Object.freeze(__Schema.possibleTypes);
var __Schema$1 = Object.freeze(__Schema);

var __Type = {
  "name": "__Type",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "enumValues": "__EnumValue",
    "fields": "__Field",
    "inputFields": "__InputValue",
    "interfaces": "__Type",
    "kind": "__TypeKind",
    "name": "String",
    "ofType": "__Type",
    "possibleTypes": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Type.fieldBaseTypes);
Object.freeze(__Type.possibleTypes);
var __Type$1 = Object.freeze(__Type);

var __TypeKind = {
  "name": "__TypeKind",
  "kind": "ENUM"
};
Object.freeze(__TypeKind.fieldBaseTypes);
Object.freeze(__TypeKind.possibleTypes);
var __TypeKind$1 = Object.freeze(__TypeKind);

var __Field = {
  "name": "__Field",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "args": "__InputValue",
    "deprecationReason": "String",
    "description": "String",
    "isDeprecated": "Boolean",
    "name": "String",
    "type": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Field.fieldBaseTypes);
Object.freeze(__Field.possibleTypes);
var __Field$1 = Object.freeze(__Field);

var __InputValue = {
  "name": "__InputValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "defaultValue": "String",
    "description": "String",
    "name": "String",
    "type": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__InputValue.fieldBaseTypes);
Object.freeze(__InputValue.possibleTypes);
var __InputValue$1 = Object.freeze(__InputValue);

var __EnumValue = {
  "name": "__EnumValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "deprecationReason": "String",
    "description": "String",
    "isDeprecated": "Boolean",
    "name": "String"
  },
  "implementsNode": false
};
Object.freeze(__EnumValue.fieldBaseTypes);
Object.freeze(__EnumValue.possibleTypes);
var __EnumValue$1 = Object.freeze(__EnumValue);

var __Directive = {
  "name": "__Directive",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "args": "__InputValue",
    "description": "String",
    "locations": "__DirectiveLocation",
    "name": "String",
    "onField": "Boolean",
    "onFragment": "Boolean",
    "onOperation": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(__Directive.fieldBaseTypes);
Object.freeze(__Directive.possibleTypes);
var __Directive$1 = Object.freeze(__Directive);

var __DirectiveLocation = {
  "name": "__DirectiveLocation",
  "kind": "ENUM"
};
Object.freeze(__DirectiveLocation.fieldBaseTypes);
Object.freeze(__DirectiveLocation.possibleTypes);
var __DirectiveLocation$1 = Object.freeze(__DirectiveLocation);

var Types = {
  types: {}
};
Types.types["Checkout"] = Checkout$1;
Types.types["ID"] = ID$1;
Types.types["Boolean"] = Boolean$1;
Types.types["LineItemConnection"] = LineItemConnection$1;
Types.types["PageInfo"] = PageInfo$1;
Types.types["LineItemEdge"] = LineItemEdge$1;
Types.types["String"] = String$1;
Types.types["LineItem"] = LineItem$1;
Types.types["ProductVariant"] = ProductVariant$1;
Types.types["Float"] = Float$1;
Types.types["WeightUnit"] = WeightUnit$1;
Types.types["Money"] = Money$1;
Types.types["Image"] = Image$1;
Types.types["URL"] = URL$1;
Types.types["Int"] = Int$1;
Types.types["CropRegion"] = CropRegion$1;
Types.types["SelectedOption"] = SelectedOption$1;
Types.types["Product"] = Product$1;
Types.types["CollectionConnection"] = CollectionConnection$1;
Types.types["CollectionEdge"] = CollectionEdge$1;
Types.types["Collection"] = Collection$1;
Types.types["DateTime"] = DateTime$1;
Types.types["ProductConnection"] = ProductConnection$1;
Types.types["ProductEdge"] = ProductEdge$1;
Types.types["Node"] = Node$1;
Types.types["ImageConnection"] = ImageConnection$1;
Types.types["ImageEdge"] = ImageEdge$1;
Types.types["ProductOption"] = ProductOption$1;
Types.types["ProductVariantConnection"] = ProductVariantConnection$1;
Types.types["ProductVariantEdge"] = ProductVariantEdge$1;
Types.types["Attribute"] = Attribute$1;
Types.types["MailingAddress"] = MailingAddress$1;
Types.types["ShippingRate"] = ShippingRate$1;
Types.types["CreditCardPaymentRequest"] = CreditCardPaymentRequest$1;
Types.types["Transaction"] = Transaction$1;
Types.types["TransactionKind"] = TransactionKind$1;
Types.types["TransactionStatus"] = TransactionStatus$1;
Types.types["CreditCard"] = CreditCard$1;
Types.types["QueryRoot"] = QueryRoot$1;
Types.types["Customer"] = Customer$1;
Types.types["MailingAddressConnection"] = MailingAddressConnection$1;
Types.types["MailingAddressEdge"] = MailingAddressEdge$1;
Types.types["OrderConnection"] = OrderConnection$1;
Types.types["OrderEdge"] = OrderEdge$1;
Types.types["Order"] = Order$1;
Types.types["OrderCancelReason"] = OrderCancelReason$1;
Types.types["CurrencyCode"] = CurrencyCode$1;
Types.types["OrderDisplayFulfillmentStatus"] = OrderDisplayFulfillmentStatus$1;
Types.types["OrderDisplayFinancialStatus"] = OrderDisplayFinancialStatus$1;
Types.types["OrderSortKeys"] = OrderSortKeys$1;
Types.types["Shop"] = Shop$1;
Types.types["Domain"] = Domain$1;
Types.types["ShopPolicy"] = ShopPolicy$1;
Types.types["CollectionSortKeys"] = CollectionSortKeys$1;
Types.types["ProductSortKeys"] = ProductSortKeys$1;
Types.types["Mutation"] = Mutation$1;
Types.types["CustomerAccessTokenCreatePayload"] = CustomerAccessTokenCreatePayload$1;
Types.types["UserError"] = UserError$1;
Types.types["CustomerAccessToken"] = CustomerAccessToken$1;
Types.types["CustomerAccessTokenCreateInput"] = CustomerAccessTokenCreateInput$1;
Types.types["CustomerAccessTokenRenewPayload"] = CustomerAccessTokenRenewPayload$1;
Types.types["CustomerAccessTokenRenewInput"] = CustomerAccessTokenRenewInput$1;
Types.types["CustomerAccessTokenDeletePayload"] = CustomerAccessTokenDeletePayload$1;
Types.types["CustomerAccessTokenDeleteInput"] = CustomerAccessTokenDeleteInput$1;
Types.types["CustomerActivatePayload"] = CustomerActivatePayload$1;
Types.types["CustomerActivateInput"] = CustomerActivateInput$1;
Types.types["CustomerCreatePayload"] = CustomerCreatePayload$1;
Types.types["CustomerCreateInput"] = CustomerCreateInput$1;
Types.types["CustomerAddressCreatePayload"] = CustomerAddressCreatePayload$1;
Types.types["CustomerAddressCreateInput"] = CustomerAddressCreateInput$1;
Types.types["MailingAddressInput"] = MailingAddressInput$1;
Types.types["CustomerAddressDeletePayload"] = CustomerAddressDeletePayload$1;
Types.types["CustomerAddressDeleteInput"] = CustomerAddressDeleteInput$1;
Types.types["CustomerAddressUpdatePayload"] = CustomerAddressUpdatePayload$1;
Types.types["CustomerAddressUpdateInput"] = CustomerAddressUpdateInput$1;
Types.types["CustomerRecoverPayload"] = CustomerRecoverPayload$1;
Types.types["CustomerRecoverInput"] = CustomerRecoverInput$1;
Types.types["CustomerResetPayload"] = CustomerResetPayload$1;
Types.types["CustomerResetInput"] = CustomerResetInput$1;
Types.types["CustomerUpdatePayload"] = CustomerUpdatePayload$1;
Types.types["CustomerUpdateInput"] = CustomerUpdateInput$1;
Types.types["CheckoutAttributesUpdatePayload"] = CheckoutAttributesUpdatePayload$1;
Types.types["CheckoutAttributesUpdateInput"] = CheckoutAttributesUpdateInput$1;
Types.types["AttributeInput"] = AttributeInput$1;
Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload$1;
Types.types["CheckoutCreateInput"] = CheckoutCreateInput$1;
Types.types["LineItemInput"] = LineItemInput$1;
Types.types["CheckoutShippingAddressUpdatePayload"] = CheckoutShippingAddressUpdatePayload$1;
Types.types["CheckoutShippingAddressUpdateInput"] = CheckoutShippingAddressUpdateInput$1;
Types.types["CheckoutShippingLineUpdatePayload"] = CheckoutShippingLineUpdatePayload$1;
Types.types["CheckoutShippingLineUpdateInput"] = CheckoutShippingLineUpdateInput$1;
Types.types["__Schema"] = __Schema$1;
Types.types["__Type"] = __Type$1;
Types.types["__TypeKind"] = __TypeKind$1;
Types.types["__Field"] = __Field$1;
Types.types["__InputValue"] = __InputValue$1;
Types.types["__EnumValue"] = __EnumValue$1;
Types.types["__Directive"] = __Directive$1;
Types.types["__DirectiveLocation"] = __DirectiveLocation$1;
Types.queryType = "QueryRoot";
Types.mutationType = "Mutation";
Types.subscriptionType = null;
Object.freeze(Types.types);
var types = Object.freeze(Types);

function base64Encode(string) {
  if (typeof btoa === 'function') {
    return btoa(string);
  } else if (typeof Buffer === 'function') {
    return Buffer.from(string).toString('base64');
  } else {
    throw new Error('No native way to base64 encode');
  }
}

if (typeof fetch === 'undefined') {
  global.fetch = require('node-fetch');
}

function createGid(type, id) {
  return "gid://shopify/" + type + "/" + id;
}

function optionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['id', 'name', 'values'];

  return function (parentSelection, fieldName) {
    parentSelection.add(fieldName, function (option) {
      fields.forEach(function (field) {
        option.add(field);
      });
    });
  };
}

function imageConnectionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['id', 'src', 'altText'];

  return function (parentSelection, fieldName) {
    parentSelection.addConnection(fieldName, { args: { first: 250 } }, function (image) {
      fields.forEach(function (field) {
        image.add(field);
      });
    });
  };
}

function selectedOptionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['name', 'value'];

  return function (parentSelection, fieldName) {
    parentSelection.add(fieldName, function (selectedOption) {
      fields.forEach(function (field) {
        selectedOption.add(field);
      });
    });
  };
}

function imageQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['id', 'src', 'altText'];

  return function (parentSelection, fieldName) {
    parentSelection.add(fieldName, function (image) {
      fields.forEach(function (field) {
        image.add(field);
      });
    });
  };
}

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function addFields(object, objectFields) {
  objectFields.forEach(function (field) {
    if (isString(field)) {
      object.add(field);
    } else {
      var _field = slicedToArray(field, 2),
          fieldName = _field[0],
          builder = _field[1];

      builder(object, fieldName);
    }
  });
}

var defaultFields$1 = ['id', 'title', 'price', 'weight', ['image', imageQuery()], ['selectedOptions', selectedOptionQuery()]];

function variantConnectionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields$1;

  return function (parentSelection, fieldName) {
    parentSelection.addConnection(fieldName, { args: { first: 250 } }, function (variant) {
      addFields(variant, fields);
    });
  };
}

var defaultFields = ['id', 'createdAt', 'updatedAt', 'descriptionHtml', 'descriptionPlainSummary', 'handle', 'productType', 'title', 'vendor', 'tags', 'publishedAt', ['options', optionQuery()], ['images', imageConnectionQuery()], ['variants', variantConnectionQuery()]];

function productQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields;

  return function (client, id) {
    return client.query(function (root) {
      root.add('node', { args: { id: createGid('Product', id) } }, function (node) {
        node.addInlineFragmentOn('Product', function (product) {
          addFields(product, fields);
        });
      });
    });
  };
}

var defaultFields$2 = ['id', 'createdAt', 'updatedAt', 'descriptionHtml', 'descriptionPlainSummary', 'handle', 'productType', 'title', 'vendor', 'tags', 'publishedAt', ['options', optionQuery()], ['images', imageConnectionQuery()], ['variants', variantConnectionQuery()]];

function productConnectionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields$2;

  return function (client) {
    return client.query(function (root) {
      root.add('shop', function (shop) {
        shop.addConnection('products', { args: { first: 20 } }, function (products) {
          addFields(products, fields);
        });
      });
    });
  };
}

var defaultFields$3 = ['id', 'handle', 'updatedAt', 'title', ['image', imageQuery()]];

function collectionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields$3;

  return function (client, id) {
    return client.query(function (root) {
      root.add('node', { args: { id: createGid('Collection', id) } }, function (node) {
        node.addInlineFragmentOn('Collection', function (collection) {
          addFields(collection, fields);
        });
      });
    });
  };
}

var defaultFields$4 = ['id', 'handle', 'updatedAt', 'title', ['image', imageQuery()]];

function collectionConnectionQuery() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields$4;

  return function (client) {
    return client.query(function (root) {
      root.add('shop', function (shop) {
        shop.addConnection('collections', { args: { first: 20 } }, function (collections) {
          addFields(collections, fields);
        });
      });
    });
  };
}

var ProductHelpers = function () {
  function ProductHelpers() {
    classCallCheck(this, ProductHelpers);
  }

  createClass(ProductHelpers, [{
    key: "variantForOptions",
    value: function variantForOptions(product, options) {
      return product.variants.find(function (variant) {
        return variant.selectedOptions.every(function (selectedOption) {
          return options[selectedOption.name] === selectedOption.value.valueOf();
        });
      });
    }
  }]);
  return ProductHelpers;
}();

var Config = function () {
  createClass(Config, [{
    key: 'requiredProperties',


    /**
     * Properties that must be set on initializations
     * @attribute requiredProperties
     * @default ['storefrontAccessToken', 'domain']
     * @type Array
     * @private
     */
    get: function get() {
      return ['storefrontAccessToken', 'domain'];
    }
  }]);

  function Config(attrs) {
    var _this = this;

    classCallCheck(this, Config);

    this.requiredProperties.forEach(function (key) {
      if (attrs.hasOwnProperty(key)) {
        _this[key] = attrs[key];
      } else {
        throw new Error('new Config() requires the option \'' + key + '\'');
      }
    });
  }

  return Config;
}();

function fetchAllPages(paginatedModels, client) {
  return client.fetchNextPage(paginatedModels).then(function (_ref) {
    var model = _ref.model;

    paginatedModels.push.apply(paginatedModels, toConsumableArray(model));

    if (!model[model.length - 1].hasNextPage.valueOf()) {
      return paginatedModels;
    }

    return fetchAllPages(paginatedModels, client);
  });
}

function fetchAllProductResources(product, client) {
  var promises = [];
  var images = product.images;
  var variants = product.variants;

  if (images && images.length && images[images.length - 1].hasNextPage.valueOf()) {
    promises.push(fetchAllPages(product.images, client));
  }

  if (variants && variants.length && variants[variants.length - 1].hasNextPage.valueOf()) {
    promises.push(fetchAllPages(product.variants, client));
  }

  return promises;
}

var Client = function () {
  function Client(config) {
    var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GraphQLJSClient;
    classCallCheck(this, Client);

    var apiUrl = 'https://' + config.domain + '/api/graphql';
    var authHeader = 'Basic ' + base64Encode(config.storefrontAccessToken);

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

  createClass(Client, [{
    key: 'fetchAllProducts',
    value: function fetchAllProducts() {
      var _this = this;

      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : productConnectionQuery();

      return this.graphQLClient.send(query(this.graphQLClient)).then(function (_ref2) {
        var model = _ref2.model;

        var promises = model.shop.products.reduce(function (promiseAcc, product) {
          // Fetch the rest of the images and variants for this product
          return promiseAcc.concat(fetchAllProductResources(product, _this.graphQLClient));
        }, []);

        return Promise.all(promises).then(function () {
          return model.shop.products;
        });
      });
    }
  }, {
    key: 'fetchProduct',
    value: function fetchProduct(id) {
      var _this2 = this;

      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : productQuery();

      return this.graphQLClient.send(query(this.graphQLClient, id)).then(function (_ref3) {
        var model = _ref3.model;

        // Fetch the rest of the images and variants for this product
        var promises = fetchAllProductResources(model.node, _this2.graphQLClient);

        return Promise.all(promises).then(function () {
          return model.node;
        });
      });
    }
  }, {
    key: 'fetchAllCollections',
    value: function fetchAllCollections() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : collectionConnectionQuery();

      return this.graphQLClient.send(query(this.graphQLClient)).then(function (response) {
        return response.model.shop.collections;
      });
    }
  }, {
    key: 'fetchCollection',
    value: function fetchCollection(id) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : collectionQuery();

      return this.graphQLClient.send(query(this.graphQLClient, id)).then(function (response) {
        return response.model.node;
      });
    }
  }]);
  return Client;
}();

exports['default'] = Client;
exports.Config = Config;
//# sourceMappingURL=dev.js.map
