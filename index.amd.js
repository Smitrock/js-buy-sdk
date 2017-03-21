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
define(['exports'], function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
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

var slicedToArray$1 = function () {
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













var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
The MIT License (MIT)
Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.


*/
function join() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return fields.join(' ');
}

function isObject(value) {
  return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === '[object Object]';
}

function deepFreezeCopyExcept(predicate, structure) {
  if (predicate(structure)) {
    return structure;
  } else if (isObject(structure)) {
    return Object.freeze(Object.keys(structure).reduce(function (copy, key) {
      copy[key] = deepFreezeCopyExcept(predicate, structure[key]);

      return copy;
    }, {}));
  } else if (Array.isArray(structure)) {
    return Object.freeze(structure.map(function (item) {
      return deepFreezeCopyExcept(predicate, item);
    }));
  } else {
    return structure;
  }
}

function schemaForType(typeBundle, typeName) {
  var type = typeBundle.types[typeName];

  if (type) {
    return type;
  }

  throw new Error("No type of " + typeName + " found in schema");
}

var classCallCheck$$1 = function classCallCheck$$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$$1 = function () {
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

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits$$1 = function inherits$$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn$$1 = function possibleConstructorReturn$$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray$$1 = function () {
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

var toConsumableArray$$1 = function toConsumableArray$$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var VariableDefinition = function () {
  function VariableDefinition(name, type, defaultValue) {
    classCallCheck$$1(this, VariableDefinition);

    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
    Object.freeze(this);
  }

  createClass$$1(VariableDefinition, [{
    key: 'toInputValueString',
    value: function toInputValueString() {
      return '$' + this.name;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var defaultValueString = this.defaultValue ? ' = ' + formatInputValue(this.defaultValue) : '';

      return '$' + this.name + ':' + this.type + defaultValueString;
    }
  }]);
  return VariableDefinition;
}();

function isVariable(value) {
  return value instanceof VariableDefinition;
}

function variable(name, type, defaultValue) {
  return new VariableDefinition(name, type, defaultValue);
}

var Enum = function () {
  function Enum(key) {
    classCallCheck$$1(this, Enum);

    this.key = key;
  }

  createClass$$1(Enum, [{
    key: "toString",
    value: function toString() {
      return this.key;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.key.valueOf();
    }
  }]);
  return Enum;
}();

var Scalar = function () {
  function Scalar(value) {
    classCallCheck$$1(this, Scalar);

    this.value = value;
  }

  createClass$$1(Scalar, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value.valueOf();
    }
  }, {
    key: "unwrapped",
    get: function get$$1() {
      return this.value;
    }
  }]);
  return Scalar;
}();

function formatInputValue(value) {
  if (VariableDefinition.prototype.isPrototypeOf(value)) {
    return value.toInputValueString();
  } else if (Enum.prototype.isPrototypeOf(value)) {
    return String(value);
  } else if (Scalar.prototype.isPrototypeOf(value)) {
    return JSON.stringify(value.valueOf());
  } else if (Array.isArray(value)) {
    return '[' + join.apply(undefined, toConsumableArray$$1(value.map(formatInputValue))) + ']';
  } else if (isObject(value)) {
    return formatObject(value, '{', '}');
  } else {
    return JSON.stringify(value);
  }
}

function formatObject(value) {
  var openChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var closeChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var argPairs = Object.keys(value).map(function (key) {
    return key + ': ' + formatInputValue(value[key]);
  });

  return '' + openChar + join.apply(undefined, toConsumableArray$$1(argPairs)) + closeChar;
}

function formatArgs(args) {
  if (!Object.keys(args).length) {
    return '';
  }

  return ' (' + formatObject(args) + ')';
}

// eslint-disable-next-line no-empty-function
var noop = function noop() {};

function parseFieldCreationArgs(creationArgs) {
  var callback = noop;
  var options = {};
  var selectionSet = null;

  if (creationArgs.length === 2) {
    if (typeof creationArgs[1] === 'function') {
      var _creationArgs = slicedToArray$$1(creationArgs, 2);

      options = _creationArgs[0];
      callback = _creationArgs[1];
    } else {
      var _creationArgs2 = slicedToArray$$1(creationArgs, 2);

      options = _creationArgs2[0];
      selectionSet = _creationArgs2[1];
    }
  } else if (creationArgs.length === 1) {
    // SelectionSet is defined before this function is called since it's
    // called by SelectionSet
    // eslint-disable-next-line no-use-before-define
    if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
      selectionSet = creationArgs[0];
    } else if (typeof creationArgs[0] === 'function') {
      callback = creationArgs[0];
    } else {
      options = creationArgs[0];
    }
  }

  return { options: options, selectionSet: selectionSet, callback: callback };
}

var emptyArgs = Object.freeze({});

var Field = function () {
  function Field(name, options, selectionSet) {
    classCallCheck$$1(this, Field);

    this.name = name;
    this.alias = options.alias || null;
    this.responseKey = this.alias || this.name;
    this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
    this.selectionSet = selectionSet;
    Object.freeze(this);
  }

  createClass$$1(Field, [{
    key: 'toString',
    value: function toString() {
      var aliasPrefix = this.alias ? this.alias + ': ' : '';

      return '' + aliasPrefix + this.name + formatArgs(this.args) + this.selectionSet;
    }
  }]);
  return Field;
}();

// This is an interface that defines a usage, and simplifies type checking
var Spread = function Spread() {
  classCallCheck$$1(this, Spread);
};

var InlineFragment = function (_Spread) {
  inherits$$1(InlineFragment, _Spread);

  function InlineFragment(typeName, selectionSet) {
    classCallCheck$$1(this, InlineFragment);

    var _this = possibleConstructorReturn$$1(this, (InlineFragment.__proto__ || Object.getPrototypeOf(InlineFragment)).call(this));

    _this.typeName = typeName;
    _this.selectionSet = selectionSet;
    Object.freeze(_this);
    return _this;
  }

  createClass$$1(InlineFragment, [{
    key: 'toString',
    value: function toString() {
      return '... on ' + this.typeName + this.selectionSet;
    }
  }]);
  return InlineFragment;
}(Spread);

var FragmentSpread = function (_Spread2) {
  inherits$$1(FragmentSpread, _Spread2);

  function FragmentSpread(fragmentDefinition) {
    classCallCheck$$1(this, FragmentSpread);

    var _this2 = possibleConstructorReturn$$1(this, (FragmentSpread.__proto__ || Object.getPrototypeOf(FragmentSpread)).call(this));

    _this2.name = fragmentDefinition.name;
    _this2.selectionSet = fragmentDefinition.selectionSet;
    Object.freeze(_this2);
    return _this2;
  }

  createClass$$1(FragmentSpread, [{
    key: 'toString',
    value: function toString() {
      return '...' + this.name;
    }
  }]);
  return FragmentSpread;
}(Spread);

var FragmentDefinition = function () {
  function FragmentDefinition(name, typeName, selectionSet) {
    classCallCheck$$1(this, FragmentDefinition);

    this.name = name;
    this.typeName = typeName;
    this.selectionSet = selectionSet;
    this.spread = new FragmentSpread(this);
    Object.freeze(this);
  }

  createClass$$1(FragmentDefinition, [{
    key: 'toString',
    value: function toString() {
      return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet;
    }
  }]);
  return FragmentDefinition;
}();

function selectionsHaveIdField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === 'id';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function selectionsHaveTypenameField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === '__typename';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function indexSelectionsByResponseKey(selections) {
  function assignOrPush(obj, key, value) {
    if (Array.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [value];
    }
  }
  var unfrozenObject = selections.reduce(function (acc, selection) {
    if (selection.responseKey) {
      assignOrPush(acc, selection.responseKey, selection);
    } else {
      var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);

      responseKeys.forEach(function (responseKey) {
        assignOrPush(acc, responseKey, selection);
      });
    }

    return acc;
  }, {});

  Object.keys(unfrozenObject).forEach(function (key) {
    Object.freeze(unfrozenObject[key]);
  });

  return Object.freeze(unfrozenObject);
}

var SelectionSet = function () {
  function SelectionSet(typeBundle, type, builderFunction) {
    classCallCheck$$1(this, SelectionSet);

    if (typeof type === 'string') {
      this.typeSchema = schemaForType(typeBundle, type);
    } else {
      this.typeSchema = type;
    }

    noop(this.typeSchema.name);

    this.typeBundle = typeBundle;
    this.selections = [];
    if (builderFunction) {
      // eslint-disable-next-line no-use-before-define
      builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
    }

    if (this.typeSchema.implementsNode || this.typeSchema.name === 'Node') {
      if (!selectionsHaveIdField(this.selections)) {
        this.selections.unshift(new Field('id', {}, new SelectionSet(typeBundle, 'ID')));
      }
    }

    if (this.typeSchema.kind === 'INTERFACE') {
      if (!selectionsHaveTypenameField(this.selections)) {
        this.selections.unshift(new Field('__typename', {}, new SelectionSet(typeBundle, 'String')));
      }
    }

    this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
    Object.freeze(this.selections);
    Object.freeze(this);
  }

  createClass$$1(SelectionSet, [{
    key: 'toString',
    value: function toString() {
      if (this.typeSchema.kind === 'SCALAR' || this.typeSchema.kind === 'ENUM') {
        return '';
      } else {
        return ' { ' + join(this.selections) + ' }';
      }
    }
  }]);
  return SelectionSet;
}();

var SelectionSetBuilder = function () {
  function SelectionSetBuilder(typeBundle, typeSchema, selections) {
    classCallCheck$$1(this, SelectionSetBuilder);

    this.typeBundle = typeBundle;
    this.typeSchema = typeSchema;
    this.selections = selections;
  }

  createClass$$1(SelectionSetBuilder, [{
    key: 'hasSelectionWithName',
    value: function hasSelectionWithName(name) {
      return this.selections.some(function (field) {
        return field.name === name;
      });
    }
  }, {
    key: 'add',
    value: function add(selectionOrFieldName) {
      var selection = void 0;

      if (Object.prototype.toString.call(selectionOrFieldName) === '[object String]') {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
      } else {
        selection = selectionOrFieldName;
      }

      if (selection.name && this.hasSelectionWithName(selection.name)) {
        throw new Error('The field \'' + selection.name + '\' has already been added');
      }
      this.selections.push(selection);
    }
  }, {
    key: 'field',
    value: function field(name) {
      for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        creationArgs[_key2 - 1] = arguments[_key2];
      }

      var parsedArgs = parseFieldCreationArgs(creationArgs);
      var options = parsedArgs.options,
          callback = parsedArgs.callback;
      var selectionSet = parsedArgs.selectionSet;

      if (!selectionSet) {
        if (!this.typeSchema.fieldBaseTypes[name]) {
          throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
        }

        var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);

        selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
      }

      return new Field(name, options, selectionSet);
    }
  }, {
    key: 'inlineFragmentOn',
    value: function inlineFragmentOn(typeName) {
      var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var selectionSet = void 0;

      if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
        selectionSet = builderFunctionOrSelectionSet;
      } else {
        selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
      }

      return new InlineFragment(typeName, selectionSet);
    }

    /**
     * will add a field to be queried to the current query node.
     *
     * @param {String}    name The name of the field to add to the query
     * @param {Object}    [args] Arguments for the field to query
     * @param {Function}  [callback] Callback which will return a new query node for the field added
     */

  }, {
    key: 'addField',
    value: function addField(name) {
      for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        creationArgs[_key3 - 1] = arguments[_key3];
      }

      this.add.apply(this, [name].concat(creationArgs));
    }

    /**
     * will add a connection to be queried to the current query node.
     *
     * @param {String}    name The name of the connection to add to the query
     * @param {Object}    [args] Arguments for the connection query eg. { first: 10 }
     * @param {Function|SelectionSet}  [callback|selectionSet] Either pass a callback which will return a new
     *                                                         SelectionSet. Or pass an existing SelectionSet.
     */

  }, {
    key: 'addConnection',
    value: function addConnection(name) {
      for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        creationArgs[_key4 - 1] = arguments[_key4];
      }

      var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs),
          options = _parseFieldCreationAr.options,
          callback = _parseFieldCreationAr.callback,
          selectionSet = _parseFieldCreationAr.selectionSet;

      this.add(name, options, function (connection) {
        connection.add('pageInfo', {}, function (pageInfo) {
          pageInfo.add('hasNextPage');
          pageInfo.add('hasPreviousPage');
        });
        connection.add('edges', {}, function (edges) {
          edges.add('cursor');
          edges.addField('node', {}, selectionSet || callback); // This is bad. Don't do this
        });
      });
    }
  }, {
    key: 'addInlineFragmentOn',
    value: function addInlineFragmentOn(typeName) {
      var fieldTypeCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
    }
  }, {
    key: 'addFragment',
    value: function addFragment(fragmentSpread) {
      this.add(fragmentSpread);
    }
  }]);
  return SelectionSetBuilder;
}();

function parseArgs(args) {
  var name = void 0;
  var variables = void 0;
  var selectionSetCallback = void 0;

  if (args.length === 3) {
    var _args = slicedToArray$$1(args, 3);

    name = _args[0];
    variables = _args[1];
    selectionSetCallback = _args[2];
  } else if (args.length === 2) {
    if (Object.prototype.toString.call(args[0]) === '[object String]') {
      name = args[0];
      variables = null;
    } else if (Array.isArray(args[0])) {
      variables = args[0];
      name = null;
    }

    selectionSetCallback = args[1];
  } else {
    selectionSetCallback = args[0];
    name = null;
  }

  return { name: name, variables: variables, selectionSetCallback: selectionSetCallback };
}

var VariableDefinitions = function () {
  function VariableDefinitions(variableDefinitions) {
    classCallCheck$$1(this, VariableDefinitions);

    this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray$$1(variableDefinitions)) : [];
    Object.freeze(this.variableDefinitions);
    Object.freeze(this);
  }

  createClass$$1(VariableDefinitions, [{
    key: 'toString',
    value: function toString() {
      if (this.variableDefinitions.length === 0) {
        return '';
      }

      return ' (' + join(this.variableDefinitions) + ') ';
    }
  }]);
  return VariableDefinitions;
}();

var Operation = function () {
  function Operation(typeBundle, operationType) {
    classCallCheck$$1(this, Operation);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _parseArgs = parseArgs(args),
        name = _parseArgs.name,
        variables = _parseArgs.variables,
        selectionSetCallback = _parseArgs.selectionSetCallback;

    this.typeBundle = typeBundle;
    this.name = name;
    this.variableDefinitions = new VariableDefinitions(variables);
    this.operationType = operationType;
    if (operationType === 'query') {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
    } else {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
    }
    Object.freeze(this);
  }

  createClass$$1(Operation, [{
    key: 'toString',
    value: function toString() {
      var nameString = this.name ? ' ' + this.name : '';

      return '' + this.operationType + nameString + this.variableDefinitions + this.selectionSet;
    }
  }, {
    key: 'isAnonymous',
    get: function get$$1() {
      return !this.name;
    }
  }]);
  return Operation;
}();

var Query = function (_Operation) {
  inherits$$1(Query, _Operation);

  function Query(typeBundle) {
    var _ref;

    classCallCheck$$1(this, Query);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn$$1(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this, typeBundle, 'query'].concat(args)));
  }

  return Query;
}(Operation);

var Mutation = function (_Operation) {
  inherits$$1(Mutation, _Operation);

  function Mutation(typeBundle) {
    var _ref;

    classCallCheck$$1(this, Mutation);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn$$1(this, (_ref = Mutation.__proto__ || Object.getPrototypeOf(Mutation)).call.apply(_ref, [this, typeBundle, 'mutation'].concat(args)));
  }

  return Mutation;
}(Operation);

function isAnonymous(operation) {
  return operation.isAnonymous;
}

function hasAnonymousOperations(operations) {
  return operations.some(isAnonymous);
}

function hasDuplicateOperationNames(operations) {
  var names = operations.map(function (operation) {
    return operation.name;
  });

  return names.reduce(function (hasDuplicates, name, index) {
    return hasDuplicates || names.indexOf(name) !== index;
  }, false);
}

function extractOperation(typeBundle, operationType) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (Operation.prototype.isPrototypeOf(args[0])) {
    return args[0];
  }

  if (operationType === 'query') {
    return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
  } else {
    return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
  }
}

function isInvalidOperationCombination(operations) {
  if (operations.length === 1) {
    return false;
  }

  return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
}

function fragmentNameIsNotUnique(existingDefinitions, name) {
  return existingDefinitions.some(function (definition) {
    return definition.name === name;
  });
}

var Document = function () {
  function Document(typeBundle) {
    classCallCheck$$1(this, Document);

    this.typeBundle = typeBundle;
    this.definitions = [];
  }

  createClass$$1(Document, [{
    key: 'toString',
    value: function toString() {
      return join(this.definitions);
    }
  }, {
    key: 'addOperation',
    value: function addOperation(operationType) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var operation = extractOperation.apply(undefined, [this.typeBundle, operationType].concat(args));

      if (isInvalidOperationCombination(this.operations.concat(operation))) {
        throw new Error('All operations must be named on a multi-operation document');
      }

      this.definitions.push(operation);
    }

    /**
     * will add a query to the document
     *
     * @param {Query|String} [query|queryName] Either an instance of a query
     * object, or the name of a query. Both are optional.
     * @param {Function} [callback] The query builder callback. If a query
     * instance is passed, this callback will be ignored.
     */

  }, {
    key: 'addQuery',
    value: function addQuery() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.addOperation.apply(this, ['query'].concat(args));
    }

    /**
     * will add a mutation to the document
     *
     * @param {Mutation|String} [mutation|mutationName] Either an instance of a mutation
     * object, or the name of a mutation. Both are optional.
     * @param {Function} [callback] The mutation builder callback. If a mutation
     * instance is passed, this callback will be ignored.
     */

  }, {
    key: 'addMutation',
    value: function addMutation() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.addOperation.apply(this, ['mutation'].concat(args));
    }
  }, {
    key: 'defineFragment',
    value: function defineFragment(name, onType, builderFunction) {
      if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
        throw new Error('All fragments must be named on a multi-fragment document');
      }

      var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
      var fragment = new FragmentDefinition(name, onType, selectionSet);

      this.definitions.push(fragment);

      return fragment.spread;
    }
  }, {
    key: 'operations',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return Operation.prototype.isPrototypeOf(definition);
      });
    }
  }, {
    key: 'fragmentDefinitions',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return FragmentDefinition.prototype.isPrototypeOf(definition);
      });
    }
  }]);
  return Document;
}();

var GraphModel = function GraphModel(attrs) {
  var _this = this;

  classCallCheck$$1(this, GraphModel);

  this.attrs = attrs;

  Object.keys(this.attrs).filter(function (key) {
    return !(key in _this);
  }).forEach(function (key) {
    var descriptor = void 0;

    if (attrs[key] === null) {
      descriptor = {
        get: function get$$1() {
          return null;
        }
      };
    } else {
      descriptor = {
        get: function get$$1() {
          return this.attrs[key].valueOf();
        }
      };
    }
    Object.defineProperty(_this, key, descriptor);
  });
};

var ClassRegistry = function () {
  function ClassRegistry() {
    classCallCheck$$1(this, ClassRegistry);

    this.classStore = {};
  }

  createClass$$1(ClassRegistry, [{
    key: 'registerClassForType',
    value: function registerClassForType(constructor, type) {
      this.classStore[type] = constructor;
    }
  }, {
    key: 'unregisterClassForType',
    value: function unregisterClassForType(type) {
      delete this.classStore[type];
    }
  }, {
    key: 'classForType',
    value: function classForType(type) {
      return this.classStore[type] || GraphModel;
    }
  }]);
  return ClassRegistry;
}();

function isValue(arg) {
  return Object.prototype.toString.call(arg) !== '[object Null]' && Object.prototype.toString.call(arg) !== '[object Undefined]';
}

function isNodeContext(context) {
  return context.selection.selectionSet.typeSchema.implementsNode;
}

function isConnection(context) {
  return context.selection.selectionSet.typeSchema.name.endsWith('Connection');
}

function nearestNode(context) {
  if (context == null) {
    return null;
  } else if (isNodeContext(context)) {
    return context;
  } else {
    return nearestNode(context.parent);
  }
}

function contextsFromRoot(context) {
  if (context.parent) {
    return contextsFromRoot(context.parent).concat(context);
  } else {
    return [context];
  }
}

function contextsFromNearestNode(context) {
  if (context.selection.selectionSet.typeSchema.implementsNode) {
    return [context];
  } else {
    return contextsFromNearestNode(context.parent).concat(context);
  }
}

function addNextFieldTo(currentSelection, contextChain, cursor, path) {
  // There are always at least two. When we start, it's the root context, and the first set
  var nextContext = contextChain.shift();

  path.push(nextContext.selection.responseKey);

  if (contextChain.length) {
    currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function (newSelection) {
      addNextFieldTo(newSelection, contextChain, cursor, path);
    });
  } else {
    var edgesField = nextContext.selection.selectionSet.selections.find(function (field) {
      return field.name === 'edges';
    });
    var nodeField = edgesField.selectionSet.selections.find(function (field) {
      return field.name === 'node';
    });
    var first = variable('first', 'Int', nextContext.selection.args.first);
    var options = {
      alias: nextContext.selection.alias,
      args: Object.assign({}, nextContext.selection.args, { after: cursor, first: first })
    };

    currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
  }
}

function nextPageQueryAndPath(context, cursor) {
  var nearestNodeContext = nearestNode(context);
  var path = [];

  if (nearestNodeContext) {
    return function () {
      var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
      var nodeId = nearestNodeContext.responseData.id;
      var contextChain = contextsFromNearestNode(context);
      var first = contextChain[contextChain.length - 1].selection.args.first;

      var query = new Query(context.selection.selectionSet.typeBundle, [variable('first', 'Int', first)], function (root) {
        path.push('node');
        root.add('node', { args: { id: nodeId } }, function (node) {
          node.addInlineFragmentOn(nodeType.name, function (fragment) {
            addNextFieldTo(fragment, contextChain.slice(1), cursor, path);
          });
        });
      });

      return [query, path];
    };
  } else {
    return function () {
      var contextChain = contextsFromRoot(context);
      var first = contextChain[contextChain.length - 1].selection.args.first;

      var query = new Query(context.selection.selectionSet.typeBundle, [variable('first', 'Int', first)], function (root) {
        addNextFieldTo(root, contextChain.slice(1), cursor, path);
      });

      return [query, path];
    };
  }
}

function hasNextPage(connection, edge) {
  if (edge !== connection.edges[connection.edges.length - 1]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasNextPage;
}

function hasPreviousPage(connection, edge) {
  if (edge !== connection.edges[0]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasPreviousPage;
}

function transformConnections(context, value) {
  if (isConnection(context)) {
    if (!(value.pageInfo && value.pageInfo.hasOwnProperty('hasNextPage') && value.pageInfo.hasOwnProperty('hasPreviousPage'))) {
      throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
    }

    return value.edges.map(function (edge) {
      return Object.assign(edge.node, {
        nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
        hasNextPage: hasNextPage(value, edge),
        hasPreviousPage: hasPreviousPage(value, edge)
      });
    });
  } else {
    return value;
  }
}

/* eslint-disable no-warning-comments */
var DecodingContext = function () {
  function DecodingContext(selection, responseData) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    classCallCheck$$1(this, DecodingContext);

    this.selection = selection;
    this.responseData = responseData;
    this.parent = parent;
    Object.freeze(this);
  }

  createClass$$1(DecodingContext, [{
    key: 'contextForObjectProperty',
    value: function contextForObjectProperty(responseKey) {
      var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
      var nextSelection = nestedSelections && nestedSelections[0];
      var nextContext = void 0;

      // fragment spreads operate inside the current context, so we recurse to get the proper
      // selection set, but retain the current response context
      if (Spread.prototype.isPrototypeOf(nextSelection)) {
        nextContext = new DecodingContext(nextSelection, this.responseData, this.parent);
      } else {
        nextContext = new DecodingContext(nextSelection, this.responseData[responseKey], this);
      }

      if (!nextSelection) {
        throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
      }

      if (Field.prototype.isPrototypeOf(nextSelection)) {
        return nextContext;
      } else {
        return nextContext.contextForObjectProperty(responseKey);
      }
    }
  }, {
    key: 'contextForArrayItem',
    value: function contextForArrayItem(item) {
      return new DecodingContext(this.selection, item, this.parent);
    }
  }]);
  return DecodingContext;
}();

function decodeArrayItems(context, transformers) {
  return context.responseData.map(function (item) {
    return decodeContext(context.contextForArrayItem(item), transformers);
  });
}

function decodeObjectValues(context, transformers) {
  return Object.keys(context.responseData).reduce(function (acc, responseKey) {
    acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);

    return acc;
  }, {});
}

function runTransformers(transformers, context, value) {
  return transformers.reduce(function (acc, transformer) {
    return transformer(context, acc);
  }, value);
}

function decodeContext(context, transformers) {
  var value = context.responseData;

  if (Array.isArray(value)) {
    value = decodeArrayItems(context, transformers);
  } else if (isObject(value)) {
    value = decodeObjectValues(context, transformers);
  }

  return runTransformers(transformers, context, value);
}

function generateRefetchQueries(context, value) {
  if (isNodeContext(context)) {
    value.refetchQuery = function () {
      return new Query(context.selection.selectionSet.typeBundle, function (root) {
        root.add('node', { args: { id: context.responseData.id } }, function (node) {
          node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
        });
      });
    };
  }

  return value;
}

function transformPojosToClassesWithRegistry(classRegistry) {
  return function transformPojosToClasses(context, value) {
    if (isObject(value)) {
      var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);

      return new Klass(value);
    } else {
      return value;
    }
  };
}

function transformScalars(context, value) {
  if (isValue(value)) {
    if (context.selection.selectionSet.typeSchema.kind === 'SCALAR') {
      return new Scalar(value);
    } else if (context.selection.selectionSet.typeSchema.kind === 'ENUM') {
      return new Enum(value);
    }
  }

  return value;
}

function recordTypeInformation(context, value) {
  if (isValue(value)) {
    if (value.__typename) {
      value.type = schemaForType(context.selection.selectionSet.typeBundle, value.__typename);
    } else {
      value.type = context.selection.selectionSet.typeSchema;
    }
  }

  return value;
}

function defaultTransformers(_ref) {
  var _ref$classRegistry = _ref.classRegistry,
      classRegistry = _ref$classRegistry === undefined ? new ClassRegistry() : _ref$classRegistry;

  return [transformScalars, generateRefetchQueries, transformConnections, recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
}

function decode(selection, responseData) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var transformers = options.transformers || defaultTransformers(options);
  var context = new DecodingContext(selection, responseData);

  return decodeContext(context, transformers);
}

function httpFetcher(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function fetcher(graphQLParams) {
    return fetch(url, _extends({
      body: JSON.stringify(graphQLParams),
      method: 'POST',
      mode: 'cors'
    }, options, {
      headers: _extends({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, options.headers)
    })).then(function (response) {
      return response.json();
    });
  };
}

var Client$2 = function () {
  function Client(typeBundle, _ref) {
    var url = _ref.url,
        fetcherOptions = _ref.fetcherOptions,
        fetcher = _ref.fetcher,
        _ref$registry = _ref.registry,
        registry = _ref$registry === undefined ? new ClassRegistry() : _ref$registry;
    classCallCheck$$1(this, Client);

    this.typeBundle = typeBundle;
    this.classRegistry = registry;

    if (url && fetcher) {
      throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
    }

    if (url) {
      this.fetcher = httpFetcher(url, fetcherOptions);
    } else if (fetcher) {
      if (fetcherOptions) {
        throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
      }

      this.fetcher = fetcher;
    } else {
      throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.');
    }
  }

  createClass$$1(Client, [{
    key: 'document',
    value: function document() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Document, [null].concat([this.typeBundle], args)))();
    }
  }, {
    key: 'query',
    value: function query() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
    }
  }, {
    key: 'mutation',
    value: function mutation() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
    }
  }, {
    key: 'send',
    value: function send(operationOrDocument) {
      var _this = this;

      var variableValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var otherProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var graphQLParams = { query: operationOrDocument.toString() };

      if (variableValues) {
        graphQLParams.variables = variableValues;
      }

      Object.assign(graphQLParams, otherProperties);

      var operation = void 0;

      if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
        operation = operationOrDocument;
      } else {
        var document = operationOrDocument;

        if (document.operations.length === 1) {
          operation = document.operations[0];
        } else if (otherProperties.operationName) {
          operation = document.operations.find(function (documentOperation) {
            return documentOperation.name === otherProperties.operationName;
          });
        } else {
          throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ');
        }
      }

      return this.fetcher(graphQLParams).then(function (response) {
        if (response.data) {
          response.model = decode(operation, response.data, { classRegistry: _this.classRegistry });
        }

        return response;
      });
    }
  }, {
    key: 'fetchNextPage',
    value: function fetchNextPage(nodeOrNodes, options) {
      var node = void 0;

      if (Array.isArray(nodeOrNodes)) {
        node = nodeOrNodes[nodeOrNodes.length - 1];
      } else {
        node = nodeOrNodes;
      }

      var _node$nextPageQueryAn = node.nextPageQueryAndPath(),
          _node$nextPageQueryAn2 = slicedToArray$$1(_node$nextPageQueryAn, 2),
          query = _node$nextPageQueryAn2[0],
          path = _node$nextPageQueryAn2[1];

      return this.send(query, options).then(function (response) {
        response.model = path.reduce(function (object, key) {
          return object[key];
        }, response.model);

        return response;
      });
    }
  }]);
  return Client;
}();

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

var Boolean$1 = {
  "name": "Boolean",
  "kind": "SCALAR"
};
Object.freeze(Boolean$1.fieldBaseTypes);
Object.freeze(Boolean$1.possibleTypes);
var Boolean$1$1 = Object.freeze(Boolean$1);

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

var String$1 = {
  "name": "String",
  "kind": "SCALAR"
};
Object.freeze(String$1.fieldBaseTypes);
Object.freeze(String$1.possibleTypes);
var String$1$1 = Object.freeze(String$1);

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

var Mutation$1 = {
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
Object.freeze(Mutation$1.fieldBaseTypes);
Object.freeze(Mutation$1.possibleTypes);
var Mutation$1$1 = Object.freeze(Mutation$1);

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
Types.types["Boolean"] = Boolean$1$1;
Types.types["LineItemConnection"] = LineItemConnection$1;
Types.types["PageInfo"] = PageInfo$1;
Types.types["LineItemEdge"] = LineItemEdge$1;
Types.types["String"] = String$1$1;
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
Types.types["Mutation"] = Mutation$1$1;
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

function addFields(object, objectFields) {
  objectFields.forEach(function (field) {
    if (isString(field)) {
      object.add(field);
    } else {
      var _field = slicedToArray$1(field, 2),
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
    classCallCheck$1(this, ProductHelpers);
  }

  createClass$1(ProductHelpers, [{
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
  createClass$1(Config, [{
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

    classCallCheck$1(this, Config);

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

    paginatedModels.push.apply(paginatedModels, toConsumableArray$1(model));

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
    var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client$2;
    classCallCheck$1(this, Client);

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

  createClass$1(Client, [{
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

Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=index.amd.js.map
