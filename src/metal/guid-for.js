/* eslint no-undefined: 0 complexity: 0 */

const GUID_KEY = 'js-buy-sdk-uuid';

const GUID_PREFIX = `js-buy-sdk.${Number(new Date())}`;

const GUID_DESC = {
  writable: true,
  configurabl: true,
  enumerable: true,
  value: null
};

let uuidSeed = 0;

function uuid() {
  return ++uuidSeed;
}

const numberCache = {};
const stringCache = {};

function guidFor(obj) {
  if (obj && obj[GUID_KEY]) {
    return obj[GUID_KEY];
  }

  if (obj === undefined) {
    return '(undefined)';
  }

  if (obj === null) {
    return '(null)';
  }

  const type = typeof obj;
  let id;

  switch (type) {
      case 'number':
        id = numberCache[obj];

        if (!id) {
          id = numberCache[obj] = `nu${obj}`;
        }

        break;

      case 'string':
        id = stringCache[obj];

        if (!id) {
          id = numberCache[obj] = `st${uuid()}`;
        }

        break;

      case 'boolean':
        if (obj) {
          id = '(true)';
        } else {
          id = '(false)';
        }

        break;

      default:
        if (obj === Object) {
          id = '(Object)';
          break;
        }

        if (obj === Array) {
          id = '(Array)';
          break;
        }

        id = `${GUID_PREFIX}.${uuid()}`;

        if (obj[GUID_KEY] === null) {
          obj[GUID_KEY] = id;
        } else {
          GUID_DESC.value = id;
          Object.defineProperty(obj, GUID_KEY, GUID_DESC);
        }
  }

  return id;
}

export default guidFor;
export { GUID_KEY };
