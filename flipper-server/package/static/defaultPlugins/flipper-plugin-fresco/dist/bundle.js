"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugins/public/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "plugins/public/node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols2;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols2 = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols2.length; i++) {
            if (propIsEnumerable.call(from, symbols2[i])) {
              to[symbols2[i]] = from[symbols2[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// plugins/public/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "plugins/public/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// plugins/public/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "plugins/public/node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = Function.call.bind(Object.prototype.hasOwnProperty);
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// plugins/public/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "plugins/public/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    var ReactIs = require("react-is");
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var checkPropTypes = require_checkPropTypes();
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x3, y3) {
        if (x3 === y3) {
          return x3 !== 0 || 1 / x3 === 1 / y3;
        } else {
          return x3 !== x3 && y3 !== y3;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value2) {
            var type = getPreciseType(value2);
            if (type === "symbol") {
              return String(value2);
            }
            return value2;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
              return null;
            }
          }
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value2) {
        var type = getPreciseType(value2);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// plugins/public/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "plugins/public/node_modules/prop-types/index.js"(exports, module2) {
    if (true) {
      ReactIs = require("react-is");
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// plugins/public/node_modules/react-motion/lib/mapToZero.js
var require_mapToZero = __commonJS({
  "plugins/public/node_modules/react-motion/lib/mapToZero.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = mapToZero;
    function mapToZero(obj) {
      var ret = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          ret[key] = 0;
        }
      }
      return ret;
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/stripStyle.js
var require_stripStyle = __commonJS({
  "plugins/public/node_modules/react-motion/lib/stripStyle.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = stripStyle;
    function stripStyle(style) {
      var ret = {};
      for (var key in style) {
        if (!Object.prototype.hasOwnProperty.call(style, key)) {
          continue;
        }
        ret[key] = typeof style[key] === "number" ? style[key] : style[key].val;
      }
      return ret;
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/stepper.js
var require_stepper = __commonJS({
  "plugins/public/node_modules/react-motion/lib/stepper.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = stepper;
    var reusedTuple = [0, 0];
    function stepper(secondPerFrame, x3, v, destX, k2, b, precision) {
      var Fspring = -k2 * (x3 - destX);
      var Fdamper = -b * v;
      var a2 = Fspring + Fdamper;
      var newV = v + a2 * secondPerFrame;
      var newX = x3 + newV * secondPerFrame;
      if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
        reusedTuple[0] = destX;
        reusedTuple[1] = 0;
        return reusedTuple;
      }
      reusedTuple[0] = newX;
      reusedTuple[1] = newV;
      return reusedTuple;
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/performance-now/lib/performance-now.js
var require_performance_now = __commonJS({
  "plugins/public/node_modules/performance-now/lib/performance-now.js"(exports, module2) {
    (function() {
      var getNanoSeconds, hrtime, loadTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module2.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module2.exports = function() {
          return (getNanoSeconds() - loadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        loadTime = getNanoSeconds();
      } else if (Date.now) {
        module2.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module2.exports = function() {
          return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
      }
    }).call(exports);
  }
});

// plugins/public/node_modules/raf/node_modules/performance-now/lib/performance-now.js
var require_performance_now2 = __commonJS({
  "plugins/public/node_modules/raf/node_modules/performance-now/lib/performance-now.js"(exports, module2) {
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module2.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module2.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module2.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module2.exports = function() {
          return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
      }
    }).call(exports);
  }
});

// plugins/public/node_modules/raf/index.js
var require_raf = __commonJS({
  "plugins/public/node_modules/raf/index.js"(exports, module2) {
    var now = require_performance_now2();
    var root = typeof window === "undefined" ? global : window;
    var vendors = ["moz", "webkit"];
    var suffix = "AnimationFrame";
    var raf = root["request" + suffix];
    var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
    for (i = 0; !raf && i < vendors.length; i++) {
      raf = root[vendors[i] + "Request" + suffix];
      caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
    }
    var i;
    if (!raf || !caf) {
      last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
      raf = function(callback) {
        if (queue.length === 0) {
          var _now = now(), next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            queue.length = 0;
            for (var i2 = 0; i2 < cp.length; i2++) {
              if (!cp[i2].cancelled) {
                try {
                  cp[i2].callback(last);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id,
          callback,
          cancelled: false
        });
        return id;
      };
      caf = function(handle) {
        for (var i2 = 0; i2 < queue.length; i2++) {
          if (queue[i2].handle === handle) {
            queue[i2].cancelled = true;
          }
        }
      };
    }
    var last;
    var id;
    var queue;
    var frameDuration;
    module2.exports = function(fn) {
      return raf.call(root, fn);
    };
    module2.exports.cancel = function() {
      caf.apply(root, arguments);
    };
    module2.exports.polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf;
      object.cancelAnimationFrame = caf;
    };
  }
});

// plugins/public/node_modules/react-motion/lib/shouldStopAnimation.js
var require_shouldStopAnimation = __commonJS({
  "plugins/public/node_modules/react-motion/lib/shouldStopAnimation.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = shouldStopAnimation;
    function shouldStopAnimation(currentStyle, style, currentVelocity) {
      for (var key in style) {
        if (!Object.prototype.hasOwnProperty.call(style, key)) {
          continue;
        }
        if (currentVelocity[key] !== 0) {
          return false;
        }
        var styleValue = typeof style[key] === "number" ? style[key] : style[key].val;
        if (currentStyle[key] !== styleValue) {
          return false;
        }
      }
      return true;
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/Motion.js
var require_Motion = __commonJS({
  "plugins/public/node_modules/react-motion/lib/Motion.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _extends66 = Object.assign || function(target) {
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
    var _createClass45 = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck45(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits45(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require("react");
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    var Motion2 = function(_React$Component) {
      _inherits45(Motion3, _React$Component);
      _createClass45(Motion3, null, [{
        key: "propTypes",
        value: {
          defaultStyle: _propTypes2["default"].objectOf(_propTypes2["default"].number),
          style: _propTypes2["default"].objectOf(_propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].object])).isRequired,
          children: _propTypes2["default"].func.isRequired,
          onRest: _propTypes2["default"].func
        },
        enumerable: true
      }]);
      function Motion3(props) {
        var _this = this;
        _classCallCheck45(this, Motion3);
        _React$Component.call(this, props);
        this.wasAnimating = false;
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyle = null;
        this.clearUnreadPropStyle = function(destStyle) {
          var dirty = false;
          var _state = _this.state;
          var currentStyle = _state.currentStyle;
          var currentVelocity = _state.currentVelocity;
          var lastIdealStyle = _state.lastIdealStyle;
          var lastIdealVelocity = _state.lastIdealVelocity;
          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }
            var styleValue = destStyle[key];
            if (typeof styleValue === "number") {
              if (!dirty) {
                dirty = true;
                currentStyle = _extends66({}, currentStyle);
                currentVelocity = _extends66({}, currentVelocity);
                lastIdealStyle = _extends66({}, lastIdealStyle);
                lastIdealVelocity = _extends66({}, lastIdealVelocity);
              }
              currentStyle[key] = styleValue;
              currentVelocity[key] = 0;
              lastIdealStyle[key] = styleValue;
              lastIdealVelocity[key] = 0;
            }
          }
          if (dirty) {
            _this.setState({ currentStyle, currentVelocity, lastIdealStyle, lastIdealVelocity });
          }
        };
        this.startAnimationIfNecessary = function() {
          _this.animationID = _raf2["default"](function(timestamp) {
            var propsStyle = _this.props.style;
            if (_shouldStopAnimation2["default"](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
              if (_this.wasAnimating && _this.props.onRest) {
                _this.props.onRest();
              }
              _this.animationID = null;
              _this.wasAnimating = false;
              _this.accumulatedTime = 0;
              return;
            }
            _this.wasAnimating = true;
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            for (var key in propsStyle) {
              if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
                continue;
              }
              var styleValue = propsStyle[key];
              if (typeof styleValue === "number") {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
                var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
                for (var i = 0; i < framesToCatchUp; i++) {
                  var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }
                var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];
                newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyle: newCurrentStyle,
              currentVelocity: newCurrentVelocity,
              lastIdealStyle: newLastIdealStyle,
              lastIdealVelocity: newLastIdealVelocity
            });
            _this.unreadPropStyle = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      Motion3.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyle = _props.defaultStyle;
        var style = _props.style;
        var currentStyle = defaultStyle || _stripStyle2["default"](style);
        var currentVelocity = _mapToZero2["default"](currentStyle);
        return {
          currentStyle,
          currentVelocity,
          lastIdealStyle: currentStyle,
          lastIdealVelocity: currentVelocity
        };
      };
      Motion3.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      Motion3.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyle != null) {
          this.clearUnreadPropStyle(this.unreadPropStyle);
        }
        this.unreadPropStyle = props.style;
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      Motion3.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      Motion3.prototype.render = function render() {
        var renderedChildren = this.props.children(this.state.currentStyle);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return Motion3;
    }(_react2["default"].Component);
    exports["default"] = Motion2;
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/StaggeredMotion.js
var require_StaggeredMotion = __commonJS({
  "plugins/public/node_modules/react-motion/lib/StaggeredMotion.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _extends66 = Object.assign || function(target) {
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
    var _createClass45 = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck45(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits45(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require("react");
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
      for (var i = 0; i < currentStyles.length; i++) {
        if (!_shouldStopAnimation2["default"](currentStyles[i], styles[i], currentVelocities[i])) {
          return false;
        }
      }
      return true;
    }
    var StaggeredMotion = function(_React$Component) {
      _inherits45(StaggeredMotion2, _React$Component);
      _createClass45(StaggeredMotion2, null, [{
        key: "propTypes",
        value: {
          defaultStyles: _propTypes2["default"].arrayOf(_propTypes2["default"].objectOf(_propTypes2["default"].number)),
          styles: _propTypes2["default"].func.isRequired,
          children: _propTypes2["default"].func.isRequired
        },
        enumerable: true
      }]);
      function StaggeredMotion2(props) {
        var _this = this;
        _classCallCheck45(this, StaggeredMotion2);
        _React$Component.call(this, props);
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyles = null;
        this.clearUnreadPropStyle = function(unreadPropStyles) {
          var _state = _this.state;
          var currentStyles = _state.currentStyles;
          var currentVelocities = _state.currentVelocities;
          var lastIdealStyles = _state.lastIdealStyles;
          var lastIdealVelocities = _state.lastIdealVelocities;
          var someDirty = false;
          for (var i = 0; i < unreadPropStyles.length; i++) {
            var unreadPropStyle = unreadPropStyles[i];
            var dirty = false;
            for (var key in unreadPropStyle) {
              if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
                continue;
              }
              var styleValue = unreadPropStyle[key];
              if (typeof styleValue === "number") {
                if (!dirty) {
                  dirty = true;
                  someDirty = true;
                  currentStyles[i] = _extends66({}, currentStyles[i]);
                  currentVelocities[i] = _extends66({}, currentVelocities[i]);
                  lastIdealStyles[i] = _extends66({}, lastIdealStyles[i]);
                  lastIdealVelocities[i] = _extends66({}, lastIdealVelocities[i]);
                }
                currentStyles[i][key] = styleValue;
                currentVelocities[i][key] = 0;
                lastIdealStyles[i][key] = styleValue;
                lastIdealVelocities[i][key] = 0;
              }
            }
          }
          if (someDirty) {
            _this.setState({ currentStyles, currentVelocities, lastIdealStyles, lastIdealVelocities });
          }
        };
        this.startAnimationIfNecessary = function() {
          _this.animationID = _raf2["default"](function(timestamp) {
            var destStyles = _this.props.styles(_this.state.lastIdealStyles);
            if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
              _this.animationID = null;
              _this.accumulatedTime = 0;
              return;
            }
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var newLastIdealStyles = [];
            var newLastIdealVelocities = [];
            var newCurrentStyles = [];
            var newCurrentVelocities = [];
            for (var i = 0; i < destStyles.length; i++) {
              var destStyle = destStyles[i];
              var newCurrentStyle = {};
              var newCurrentVelocity = {};
              var newLastIdealStyle = {};
              var newLastIdealVelocity = {};
              for (var key in destStyle) {
                if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
                  continue;
                }
                var styleValue = destStyle[key];
                if (typeof styleValue === "number") {
                  newCurrentStyle[key] = styleValue;
                  newCurrentVelocity[key] = 0;
                  newLastIdealStyle[key] = styleValue;
                  newLastIdealVelocity[key] = 0;
                } else {
                  var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
                  var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
                  for (var j = 0; j < framesToCatchUp; j++) {
                    var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                    newLastIdealStyleValue = _stepper[0];
                    newLastIdealVelocityValue = _stepper[1];
                  }
                  var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  var nextIdealX = _stepper2[0];
                  var nextIdealV = _stepper2[1];
                  newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                  newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                  newLastIdealStyle[key] = newLastIdealStyleValue;
                  newLastIdealVelocity[key] = newLastIdealVelocityValue;
                }
              }
              newCurrentStyles[i] = newCurrentStyle;
              newCurrentVelocities[i] = newCurrentVelocity;
              newLastIdealStyles[i] = newLastIdealStyle;
              newLastIdealVelocities[i] = newLastIdealVelocity;
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyles: newCurrentStyles,
              currentVelocities: newCurrentVelocities,
              lastIdealStyles: newLastIdealStyles,
              lastIdealVelocities: newLastIdealVelocities
            });
            _this.unreadPropStyles = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      StaggeredMotion2.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyles = _props.defaultStyles;
        var styles = _props.styles;
        var currentStyles = defaultStyles || styles().map(_stripStyle2["default"]);
        var currentVelocities = currentStyles.map(function(currentStyle) {
          return _mapToZero2["default"](currentStyle);
        });
        return {
          currentStyles,
          currentVelocities,
          lastIdealStyles: currentStyles,
          lastIdealVelocities: currentVelocities
        };
      };
      StaggeredMotion2.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      StaggeredMotion2.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyles != null) {
          this.clearUnreadPropStyle(this.unreadPropStyles);
        }
        this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      StaggeredMotion2.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      StaggeredMotion2.prototype.render = function render() {
        var renderedChildren = this.props.children(this.state.currentStyles);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return StaggeredMotion2;
    }(_react2["default"].Component);
    exports["default"] = StaggeredMotion;
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/mergeDiff.js
var require_mergeDiff = __commonJS({
  "plugins/public/node_modules/react-motion/lib/mergeDiff.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = mergeDiff;
    function mergeDiff(prev, next, onRemove) {
      var prevKeyIndex = {};
      for (var i = 0; i < prev.length; i++) {
        prevKeyIndex[prev[i].key] = i;
      }
      var nextKeyIndex = {};
      for (var i = 0; i < next.length; i++) {
        nextKeyIndex[next[i].key] = i;
      }
      var ret = [];
      for (var i = 0; i < next.length; i++) {
        ret[i] = next[i];
      }
      for (var i = 0; i < prev.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
          var fill = onRemove(i, prev[i]);
          if (fill != null) {
            ret.push(fill);
          }
        }
      }
      return ret.sort(function(a2, b) {
        var nextOrderA = nextKeyIndex[a2.key];
        var nextOrderB = nextKeyIndex[b.key];
        var prevOrderA = prevKeyIndex[a2.key];
        var prevOrderB = prevKeyIndex[b.key];
        if (nextOrderA != null && nextOrderB != null) {
          return nextKeyIndex[a2.key] - nextKeyIndex[b.key];
        } else if (prevOrderA != null && prevOrderB != null) {
          return prevKeyIndex[a2.key] - prevKeyIndex[b.key];
        } else if (nextOrderA != null) {
          for (var i2 = 0; i2 < next.length; i2++) {
            var pivot = next[i2].key;
            if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
              continue;
            }
            if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
              return -1;
            } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
              return 1;
            }
          }
          return 1;
        }
        for (var i2 = 0; i2 < next.length; i2++) {
          var pivot = next[i2].key;
          if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
            continue;
          }
          if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
            return 1;
          } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
            return -1;
          }
        }
        return -1;
      });
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/TransitionMotion.js
var require_TransitionMotion = __commonJS({
  "plugins/public/node_modules/react-motion/lib/TransitionMotion.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _extends66 = Object.assign || function(target) {
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
    var _createClass45 = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck45(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits45(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _mergeDiff = require_mergeDiff();
    var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require("react");
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
      var cUnreadPropStyles = unreadPropStyles;
      if (cUnreadPropStyles == null) {
        return mergedPropsStyles.map(function(mergedPropsStyle, i) {
          return {
            key: mergedPropsStyle.key,
            data: mergedPropsStyle.data,
            style: plainStyles[i]
          };
        });
      }
      return mergedPropsStyles.map(function(mergedPropsStyle, i) {
        for (var j = 0; j < cUnreadPropStyles.length; j++) {
          if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
            return {
              key: cUnreadPropStyles[j].key,
              data: cUnreadPropStyles[j].data,
              style: plainStyles[i]
            };
          }
        }
        return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
      });
    }
    function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
      if (mergedPropsStyles.length !== destStyles.length) {
        return false;
      }
      for (var i = 0; i < mergedPropsStyles.length; i++) {
        if (mergedPropsStyles[i].key !== destStyles[i].key) {
          return false;
        }
      }
      for (var i = 0; i < mergedPropsStyles.length; i++) {
        if (!_shouldStopAnimation2["default"](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
          return false;
        }
      }
      return true;
    }
    function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
      var newMergedPropsStyles = _mergeDiff2["default"](oldMergedPropsStyles, destStyles, function(oldIndex, oldMergedPropsStyle) {
        var leavingStyle = willLeave(oldMergedPropsStyle);
        if (leavingStyle == null) {
          didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
          return null;
        }
        if (_shouldStopAnimation2["default"](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
          didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
          return null;
        }
        return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
      });
      var newCurrentStyles = [];
      var newCurrentVelocities = [];
      var newLastIdealStyles = [];
      var newLastIdealVelocities = [];
      for (var i = 0; i < newMergedPropsStyles.length; i++) {
        var newMergedPropsStyleCell = newMergedPropsStyles[i];
        var foundOldIndex = null;
        for (var j = 0; j < oldMergedPropsStyles.length; j++) {
          if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
            foundOldIndex = j;
            break;
          }
        }
        if (foundOldIndex == null) {
          var plainStyle = willEnter(newMergedPropsStyleCell);
          newCurrentStyles[i] = plainStyle;
          newLastIdealStyles[i] = plainStyle;
          var velocity = _mapToZero2["default"](newMergedPropsStyleCell.style);
          newCurrentVelocities[i] = velocity;
          newLastIdealVelocities[i] = velocity;
        } else {
          newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
          newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
          newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
          newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
        }
      }
      return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
    }
    var TransitionMotion = function(_React$Component) {
      _inherits45(TransitionMotion2, _React$Component);
      _createClass45(TransitionMotion2, null, [{
        key: "propTypes",
        value: {
          defaultStyles: _propTypes2["default"].arrayOf(_propTypes2["default"].shape({
            key: _propTypes2["default"].string.isRequired,
            data: _propTypes2["default"].any,
            style: _propTypes2["default"].objectOf(_propTypes2["default"].number).isRequired
          })),
          styles: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].arrayOf(_propTypes2["default"].shape({
            key: _propTypes2["default"].string.isRequired,
            data: _propTypes2["default"].any,
            style: _propTypes2["default"].objectOf(_propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].object])).isRequired
          }))]).isRequired,
          children: _propTypes2["default"].func.isRequired,
          willEnter: _propTypes2["default"].func,
          willLeave: _propTypes2["default"].func,
          didLeave: _propTypes2["default"].func
        },
        enumerable: true
      }, {
        key: "defaultProps",
        value: {
          willEnter: function willEnter(styleThatEntered) {
            return _stripStyle2["default"](styleThatEntered.style);
          },
          willLeave: function willLeave() {
            return null;
          },
          didLeave: function didLeave() {
          }
        },
        enumerable: true
      }]);
      function TransitionMotion2(props) {
        var _this = this;
        _classCallCheck45(this, TransitionMotion2);
        _React$Component.call(this, props);
        this.unmounting = false;
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyles = null;
        this.clearUnreadPropStyle = function(unreadPropStyles) {
          var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
          var mergedPropsStyles = _mergeAndSync[0];
          var currentStyles = _mergeAndSync[1];
          var currentVelocities = _mergeAndSync[2];
          var lastIdealStyles = _mergeAndSync[3];
          var lastIdealVelocities = _mergeAndSync[4];
          for (var i = 0; i < unreadPropStyles.length; i++) {
            var unreadPropStyle = unreadPropStyles[i].style;
            var dirty = false;
            for (var key in unreadPropStyle) {
              if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
                continue;
              }
              var styleValue = unreadPropStyle[key];
              if (typeof styleValue === "number") {
                if (!dirty) {
                  dirty = true;
                  currentStyles[i] = _extends66({}, currentStyles[i]);
                  currentVelocities[i] = _extends66({}, currentVelocities[i]);
                  lastIdealStyles[i] = _extends66({}, lastIdealStyles[i]);
                  lastIdealVelocities[i] = _extends66({}, lastIdealVelocities[i]);
                  mergedPropsStyles[i] = {
                    key: mergedPropsStyles[i].key,
                    data: mergedPropsStyles[i].data,
                    style: _extends66({}, mergedPropsStyles[i].style)
                  };
                }
                currentStyles[i][key] = styleValue;
                currentVelocities[i][key] = 0;
                lastIdealStyles[i][key] = styleValue;
                lastIdealVelocities[i][key] = 0;
                mergedPropsStyles[i].style[key] = styleValue;
              }
            }
          }
          _this.setState({
            currentStyles,
            currentVelocities,
            mergedPropsStyles,
            lastIdealStyles,
            lastIdealVelocities
          });
        };
        this.startAnimationIfNecessary = function() {
          if (_this.unmounting) {
            return;
          }
          _this.animationID = _raf2["default"](function(timestamp) {
            if (_this.unmounting) {
              return;
            }
            var propStyles = _this.props.styles;
            var destStyles = typeof propStyles === "function" ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
            if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
              _this.animationID = null;
              _this.accumulatedTime = 0;
              return;
            }
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
            var newMergedPropsStyles = _mergeAndSync2[0];
            var newCurrentStyles = _mergeAndSync2[1];
            var newCurrentVelocities = _mergeAndSync2[2];
            var newLastIdealStyles = _mergeAndSync2[3];
            var newLastIdealVelocities = _mergeAndSync2[4];
            for (var i = 0; i < newMergedPropsStyles.length; i++) {
              var newMergedPropsStyle = newMergedPropsStyles[i].style;
              var newCurrentStyle = {};
              var newCurrentVelocity = {};
              var newLastIdealStyle = {};
              var newLastIdealVelocity = {};
              for (var key in newMergedPropsStyle) {
                if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
                  continue;
                }
                var styleValue = newMergedPropsStyle[key];
                if (typeof styleValue === "number") {
                  newCurrentStyle[key] = styleValue;
                  newCurrentVelocity[key] = 0;
                  newLastIdealStyle[key] = styleValue;
                  newLastIdealVelocity[key] = 0;
                } else {
                  var newLastIdealStyleValue = newLastIdealStyles[i][key];
                  var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
                  for (var j = 0; j < framesToCatchUp; j++) {
                    var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                    newLastIdealStyleValue = _stepper[0];
                    newLastIdealVelocityValue = _stepper[1];
                  }
                  var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  var nextIdealX = _stepper2[0];
                  var nextIdealV = _stepper2[1];
                  newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                  newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                  newLastIdealStyle[key] = newLastIdealStyleValue;
                  newLastIdealVelocity[key] = newLastIdealVelocityValue;
                }
              }
              newLastIdealStyles[i] = newLastIdealStyle;
              newLastIdealVelocities[i] = newLastIdealVelocity;
              newCurrentStyles[i] = newCurrentStyle;
              newCurrentVelocities[i] = newCurrentVelocity;
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyles: newCurrentStyles,
              currentVelocities: newCurrentVelocities,
              lastIdealStyles: newLastIdealStyles,
              lastIdealVelocities: newLastIdealVelocities,
              mergedPropsStyles: newMergedPropsStyles
            });
            _this.unreadPropStyles = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      TransitionMotion2.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyles = _props.defaultStyles;
        var styles = _props.styles;
        var willEnter = _props.willEnter;
        var willLeave = _props.willLeave;
        var didLeave = _props.didLeave;
        var destStyles = typeof styles === "function" ? styles(defaultStyles) : styles;
        var oldMergedPropsStyles = void 0;
        if (defaultStyles == null) {
          oldMergedPropsStyles = destStyles;
        } else {
          oldMergedPropsStyles = defaultStyles.map(function(defaultStyleCell) {
            for (var i = 0; i < destStyles.length; i++) {
              if (destStyles[i].key === defaultStyleCell.key) {
                return destStyles[i];
              }
            }
            return defaultStyleCell;
          });
        }
        var oldCurrentStyles = defaultStyles == null ? destStyles.map(function(s2) {
          return _stripStyle2["default"](s2.style);
        }) : defaultStyles.map(function(s2) {
          return _stripStyle2["default"](s2.style);
        });
        var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function(s2) {
          return _mapToZero2["default"](s2.style);
        }) : defaultStyles.map(function(s2) {
          return _mapToZero2["default"](s2.style);
        });
        var _mergeAndSync3 = mergeAndSync(
          willEnter,
          willLeave,
          didLeave,
          oldMergedPropsStyles,
          destStyles,
          oldCurrentStyles,
          oldCurrentVelocities,
          oldCurrentStyles,
          oldCurrentVelocities
        );
        var mergedPropsStyles = _mergeAndSync3[0];
        var currentStyles = _mergeAndSync3[1];
        var currentVelocities = _mergeAndSync3[2];
        var lastIdealStyles = _mergeAndSync3[3];
        var lastIdealVelocities = _mergeAndSync3[4];
        return {
          currentStyles,
          currentVelocities,
          lastIdealStyles,
          lastIdealVelocities,
          mergedPropsStyles
        };
      };
      TransitionMotion2.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      TransitionMotion2.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyles) {
          this.clearUnreadPropStyle(this.unreadPropStyles);
        }
        var styles = props.styles;
        if (typeof styles === "function") {
          this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
        } else {
          this.unreadPropStyles = styles;
        }
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      TransitionMotion2.prototype.componentWillUnmount = function componentWillUnmount() {
        this.unmounting = true;
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      TransitionMotion2.prototype.render = function render() {
        var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
        var renderedChildren = this.props.children(hydratedStyles);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return TransitionMotion2;
    }(_react2["default"].Component);
    exports["default"] = TransitionMotion;
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/presets.js
var require_presets = __commonJS({
  "plugins/public/node_modules/react-motion/lib/presets.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
      noWobble: { stiffness: 170, damping: 26 },
      gentle: { stiffness: 120, damping: 14 },
      wobbly: { stiffness: 180, damping: 12 },
      stiff: { stiffness: 210, damping: 20 }
    };
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/spring.js
var require_spring = __commonJS({
  "plugins/public/node_modules/react-motion/lib/spring.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _extends66 = Object.assign || function(target) {
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
    exports["default"] = spring2;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _presets = require_presets();
    var _presets2 = _interopRequireDefault(_presets);
    var defaultConfig = _extends66({}, _presets2["default"].noWobble, {
      precision: 0.01
    });
    function spring2(val, config) {
      return _extends66({}, defaultConfig, config, { val });
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/reorderKeys.js
var require_reorderKeys = __commonJS({
  "plugins/public/node_modules/react-motion/lib/reorderKeys.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = reorderKeys;
    var hasWarned = false;
    function reorderKeys() {
      if (true) {
        if (!hasWarned) {
          hasWarned = true;
          console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.");
        }
      }
    }
    module2.exports = exports["default"];
  }
});

// plugins/public/node_modules/react-motion/lib/react-motion.js
var require_react_motion = __commonJS({
  "plugins/public/node_modules/react-motion/lib/react-motion.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _interopRequire(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    }
    var _Motion = require_Motion();
    exports.Motion = _interopRequire(_Motion);
    var _StaggeredMotion = require_StaggeredMotion();
    exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
    var _TransitionMotion = require_TransitionMotion();
    exports.TransitionMotion = _interopRequire(_TransitionMotion);
    var _spring = require_spring();
    exports.spring = _interopRequire(_spring);
    var _presets = require_presets();
    exports.presets = _interopRequire(_presets);
    var _stripStyle = require_stripStyle();
    exports.stripStyle = _interopRequire(_stripStyle);
    var _reorderKeys = require_reorderKeys();
    exports.reorderKeys = _interopRequire(_reorderKeys);
  }
});

// plugins/public/node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "plugins/public/node_modules/object-keys/isArguments.js"(exports, module2) {
    "use strict";
    var toStr = Object.prototype.toString;
    module2.exports = function isArguments(value2) {
      var str = toStr.call(value2);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value2 !== null && typeof value2 === "object" && typeof value2.length === "number" && value2.length >= 0 && toStr.call(value2.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// plugins/public/node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "plugins/public/node_modules/object-keys/implementation.js"(exports, module2) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k2 in window) {
          try {
            if (!excludedKeys["$" + k2] && has.call(window, k2) && window[k2] !== null && typeof window[k2] === "object") {
              try {
                equalsConstructorPrototype(window[k2]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k2 = 0; k2 < dontEnums.length; ++k2) {
            if (!(skipConstructor && dontEnums[k2] === "constructor") && has.call(object, dontEnums[k2])) {
              theKeys.push(dontEnums[k2]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module2.exports = keysShim;
  }
});

// plugins/public/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "plugins/public/node_modules/object-keys/index.js"(exports, module2) {
    "use strict";
    var slice6 = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice6.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module2.exports = keysShim;
  }
});

// plugins/public/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "plugins/public/node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// plugins/public/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "plugins/public/node_modules/has-tostringtag/shams.js"(exports, module2) {
    "use strict";
    var hasSymbols = require_shams();
    module2.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// plugins/public/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "plugins/public/node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// plugins/public/node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "plugins/public/node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice6 = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice6.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice6.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice6.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty3 = function Empty4() {
        };
        Empty3.prototype = target.prototype;
        bound.prototype = new Empty3();
        Empty3.prototype = null;
      }
      return bound;
    };
  }
});

// plugins/public/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "plugins/public/node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation2();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// plugins/public/node_modules/has/src/index.js
var require_src = __commonJS({
  "plugins/public/node_modules/has/src/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    module2.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// plugins/public/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "plugins/public/node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x3) {
      return x3.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value2;
      if (name === "%AsyncFunction%") {
        value2 = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value2 = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value2 = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value2 = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value2 = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value2;
      return value2;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number2, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value2 = INTRINSICS[intrinsicName];
        if (value2 === needsEval) {
          value2 = doEval(intrinsicName);
        }
        if (typeof value2 === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value: value2
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value2 = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value2 = INTRINSICS[intrinsicRealName];
        } else if (value2 != null) {
          if (!(part in value2)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value2, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value2 = desc.get;
            } else {
              value2 = value2[part];
            }
          } else {
            isOwn = hasOwn(value2, part);
            value2 = value2[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value2;
          }
        }
      }
      return value2;
    };
  }
});

// plugins/public/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "plugins/public/node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// plugins/public/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "plugins/public/node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// plugins/public/node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "plugins/public/node_modules/is-arguments/index.js"(exports, module2) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value2) {
      if (hasToStringTag && value2 && typeof value2 === "object" && Symbol.toStringTag in value2) {
        return false;
      }
      return $toString(value2) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value2) {
      if (isStandardArguments(value2)) {
        return true;
      }
      return value2 !== null && typeof value2 === "object" && typeof value2.length === "number" && value2.length >= 0 && $toString(value2) !== "[object Array]" && $toString(value2.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module2.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// plugins/public/node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "plugins/public/node_modules/define-properties/index.js"(exports, module2) {
    "use strict";
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var arePropertyDescriptorsSupported = function() {
      var obj = {};
      try {
        origDefineProperty(obj, "x", { enumerable: false, value: obj });
        for (var _ in obj) {
          return false;
        }
        return obj.x === obj;
      } catch (e) {
        return false;
      }
    };
    var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
    var defineProperty = function(object, name, value2, predicate) {
      if (name in object && (!isFunction(predicate) || !predicate())) {
        return;
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value: value2,
          writable: true
        });
      } else {
        object[name] = value2;
      }
    };
    var defineProperties = function(object, map5) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map5);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map5));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map5[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module2.exports = defineProperties;
  }
});

// plugins/public/node_modules/object-is/implementation.js
var require_implementation3 = __commonJS({
  "plugins/public/node_modules/object-is/implementation.js"(exports, module2) {
    "use strict";
    var numberIsNaN = function(value2) {
      return value2 !== value2;
    };
    module2.exports = function is(a2, b) {
      if (a2 === 0 && b === 0) {
        return 1 / a2 === 1 / b;
      }
      if (a2 === b) {
        return true;
      }
      if (numberIsNaN(a2) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// plugins/public/node_modules/object-is/polyfill.js
var require_polyfill = __commonJS({
  "plugins/public/node_modules/object-is/polyfill.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation3();
    module2.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// plugins/public/node_modules/object-is/shim.js
var require_shim = __commonJS({
  "plugins/public/node_modules/object-is/shim.js"(exports, module2) {
    "use strict";
    var getPolyfill = require_polyfill();
    var define = require_define_properties();
    module2.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// plugins/public/node_modules/object-is/index.js
var require_object_is = __commonJS({
  "plugins/public/node_modules/object-is/index.js"(exports, module2) {
    "use strict";
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind(getPolyfill(), Object);
    define(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = polyfill;
  }
});

// plugins/public/node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "plugins/public/node_modules/is-regex/index.js"(exports, module2) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module2.exports = hasToStringTag ? function isRegex(value2) {
      if (!value2 || typeof value2 !== "object") {
        return false;
      }
      var descriptor = gOPD(value2, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value2, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value2) {
      if (!value2 || typeof value2 !== "object" && typeof value2 !== "function") {
        return false;
      }
      return $toString(value2) === regexClass;
    };
  }
});

// plugins/public/node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "plugins/public/node_modules/regexp.prototype.flags/implementation.js"(exports, module2) {
    "use strict";
    var $Object = Object;
    var $TypeError = TypeError;
    module2.exports = function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    };
  }
});

// plugins/public/node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "plugins/public/node_modules/regexp.prototype.flags/polyfill.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    var $TypeError = TypeError;
    module2.exports = function getPolyfill() {
      if (!supportsDescriptors) {
        throw new $TypeError("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      if (/a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof /a/.dotAll === "boolean") {
          return descriptor.get;
        }
      }
      return implementation;
    };
  }
});

// plugins/public/node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "plugins/public/node_modules/regexp.prototype.flags/shim.js"(exports, module2) {
    "use strict";
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex = /a/;
    module2.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto2 = getProto(regex);
      var descriptor = gOPD(proto2, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto2, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// plugins/public/node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "plugins/public/node_modules/regexp.prototype.flags/index.js"(exports, module2) {
    "use strict";
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(implementation);
    define(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = flagsBound;
  }
});

// plugins/public/node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "plugins/public/node_modules/is-date-object/index.js"(exports, module2) {
    "use strict";
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value2) {
      try {
        getDay.call(value2);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isDateObject(value2) {
      if (typeof value2 !== "object" || value2 === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value2) : toStr.call(value2) === dateClass;
    };
  }
});

// plugins/public/node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "plugins/public/node_modules/deep-equal/index.js"(exports, module2) {
    var objectKeys = require_object_keys();
    var isArguments = require_is_arguments();
    var is = require_object_is();
    var isRegex = require_is_regex();
    var flags = require_regexp_prototype();
    var isDate = require_is_date_object();
    var getTime = Date.prototype.getTime;
    function deepEqual(actual, expected, options) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      return objEquiv(actual, expected, opts);
    }
    function isUndefinedOrNull(value2) {
      return value2 === null || value2 === void 0;
    }
    function isBuffer(x3) {
      if (!x3 || typeof x3 !== "object" || typeof x3.length !== "number") {
        return false;
      }
      if (typeof x3.copy !== "function" || typeof x3.slice !== "function") {
        return false;
      }
      if (x3.length > 0 && typeof x3[0] !== "number") {
        return false;
      }
      return true;
    }
    function objEquiv(a2, b, opts) {
      var i, key;
      if (typeof a2 !== typeof b) {
        return false;
      }
      if (isUndefinedOrNull(a2) || isUndefinedOrNull(b)) {
        return false;
      }
      if (a2.prototype !== b.prototype) {
        return false;
      }
      if (isArguments(a2) !== isArguments(b)) {
        return false;
      }
      var aIsRegex = isRegex(a2);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if (aIsRegex || bIsRegex) {
        return a2.source === b.source && flags(a2) === flags(b);
      }
      if (isDate(a2) && isDate(b)) {
        return getTime.call(a2) === getTime.call(b);
      }
      var aIsBuffer = isBuffer(a2);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a2.length !== b.length) {
          return false;
        }
        for (i = 0; i < a2.length; i++) {
          if (a2[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      if (typeof a2 !== typeof b) {
        return false;
      }
      try {
        var ka2 = objectKeys(a2);
        var kb = objectKeys(b);
      } catch (e) {
        return false;
      }
      if (ka2.length !== kb.length) {
        return false;
      }
      ka2.sort();
      kb.sort();
      for (i = ka2.length - 1; i >= 0; i--) {
        if (ka2[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka2.length - 1; i >= 0; i--) {
        key = ka2[i];
        if (!deepEqual(a2[key], b[key], opts)) {
          return false;
        }
      }
      return true;
    }
    module2.exports = deepEqual;
  }
});

// plugins/public/node_modules/global/window.js
var require_window = __commonJS({
  "plugins/public/node_modules/global/window.js"(exports, module2) {
    var win;
    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }
    module2.exports = win;
  }
});

// plugins/public/fresco/index.tsx
var fresco_exports = {};
__export(fresco_exports, {
  Component: () => Component5,
  plugin: () => plugin
});
module.exports = __toCommonJS(fresco_exports);
var import_flipper_plugin5 = require("flipper-plugin");
var import_react65 = __toESM(require("react"));

// plugins/public/fresco/ImagesCacheOverview.tsx
var import_flipper_plugin2 = require("flipper-plugin");
var import_antd2 = require("antd");

// plugins/public/fresco/MultipleSelect.tsx
var import_react = __toESM(require("react"));
var import_flipper_plugin = require("flipper-plugin");
var import_antd = require("antd");
var import_icons = require("@ant-design/icons");
var MultipleSelect = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.handleOnChange = (option, event) => {
      this.props.onChange(option, event.target.checked);
    };
    this.menu = () => {
      return /* @__PURE__ */ import_react.default.createElement(import_antd.Menu, null, Array.from(this.props.options).map((option, index) => /* @__PURE__ */ import_react.default.createElement(import_antd.Menu.Item, { key: index, disabled: true }, /* @__PURE__ */ import_react.default.createElement(
        import_antd.Checkbox,
        {
          onChange: (e) => this.handleOnChange(option, e),
          checked: this.props.selected.has(option)
        }
      ), " ", option)));
    };
  }
  render() {
    return /* @__PURE__ */ import_react.default.createElement(import_flipper_plugin.Layout.Container, null, /* @__PURE__ */ import_react.default.createElement(import_antd.Dropdown, { overlay: this.menu }, /* @__PURE__ */ import_react.default.createElement(import_antd.Button, null, "Surfaces ", /* @__PURE__ */ import_react.default.createElement(import_icons.DownOutlined, null))));
  }
};

// plugins/public/fresco/ImagesCacheOverview.tsx
var import_react2 = __toESM(require("react"));
var import_icons2 = require("@ant-design/icons");
function toMB(bytes) {
  return Math.floor(bytes / (1024 * 1024));
}
function toKB(bytes) {
  return Math.floor(bytes / 1024);
}
function formatMB(bytes) {
  return `${toMB(bytes)}MB`;
}
function formatKB(bytes) {
  return `${Math.floor(bytes / 1024)}KB`;
}
function Toggle(props) {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
    import_antd2.Switch,
    {
      onClick: () => {
        props.onClick && props.onClick(!props.toggled);
      },
      checked: props.toggled
    }
  ), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Typography.Text, null, props.label));
}
var ImagesCacheOverview = class extends import_react2.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      selectedImage: null,
      size: 150
    };
    this.onImageSelected = (selectedImage) => {
      this.setState({ selectedImage });
      this.props.onImageSelected(selectedImage);
    };
    this.onEnableDebugOverlayToggled = () => {
      this.props.onEnableDebugOverlay(!this.props.isDebugOverlayEnabled);
    };
    this.onEnableAutoRefreshToggled = () => {
      this.props.onEnableAutoRefresh(!this.props.isAutoRefreshEnabled);
    };
    this.onSurfaceOptionsChange = (selectedItem, checked) => {
      const { allSurfacesOption, surfaceOptions } = this.props;
      const selectedSurfaces = /* @__PURE__ */ new Set([...this.props.selectedSurfaces]);
      if (checked && selectedItem === allSurfacesOption) {
        this.props.onChangeSurface(surfaceOptions);
        return;
      }
      if (!checked && selectedSurfaces.size === 1) {
        return;
      }
      if (selectedItem !== allSurfacesOption) {
        selectedSurfaces.delete(allSurfacesOption);
        if (checked) {
          selectedSurfaces.add(selectedItem);
        } else {
          selectedSurfaces.delete(selectedItem);
        }
      }
      if (surfaceOptions.size - selectedSurfaces.size === 1 && !selectedSurfaces.has(allSurfacesOption)) {
        selectedSurfaces.add(allSurfacesOption);
      }
      this.props.onChangeSurface(selectedSurfaces);
    };
  }
  render() {
    const hasImages = this.props.images.reduce(
      (c2, cacheInfo) => c2 + cacheInfo.imageIds.length,
      0
    ) > 0;
    return /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.ScrollContainer, null, /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Toolbar, null, /* @__PURE__ */ import_react2.default.createElement(
      import_antd2.Button,
      {
        icon: /* @__PURE__ */ import_react2.default.createElement(import_icons2.DeleteFilled, null),
        onClick: this.props.onTrimMemory
      },
      "Trim Memory"
    ), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Button, { onClick: this.props.onRefresh }, "Refresh"), /* @__PURE__ */ import_react2.default.createElement(
      MultipleSelect,
      {
        selected: this.props.selectedSurfaces,
        options: this.props.surfaceOptions,
        onChange: this.onSurfaceOptionsChange,
        label: "Surfaces"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      Toggle,
      {
        onClick: this.onEnableAutoRefreshToggled,
        toggled: this.props.isAutoRefreshEnabled,
        label: "Auto Refresh"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      Toggle,
      {
        onClick: this.onEnableDebugOverlayToggled,
        toggled: this.props.isDebugOverlayEnabled,
        label: "Show Debug Overlay"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      Toggle,
      {
        toggled: this.props.coldStartFilter,
        onClick: this.props.onColdStartChange,
        label: "Show Cold Start Images"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      Toggle,
      {
        toggled: this.props.isLeakTrackingEnabled,
        onClick: this.props.onTrackLeaks,
        label: "Track Leaks"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      Toggle,
      {
        toggled: this.props.showDiskImages,
        onClick: this.props.onShowDiskImages,
        label: "Show Disk Images"
      }
    )), !hasImages ? /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Container, { pad: true }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Empty, null)) : /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.ScrollContainer, null, this.props.images.map((data, index) => {
      const maxSize = data.maxSizeBytes;
      const subtitle = maxSize ? `${formatMB(data.sizeBytes)} / ${formatMB(maxSize)}` : formatMB(data.sizeBytes);
      const onClear = data.clearKey !== void 0 ? () => this.props.onClear(data.clearKey) : void 0;
      return /* @__PURE__ */ import_react2.default.createElement(
        ImageGrid,
        {
          key: index,
          title: data.cacheType,
          subtitle,
          images: data.imageIds,
          onImageSelected: this.onImageSelected,
          selectedImage: this.state.selectedImage,
          imagesMap: this.props.imagesMap,
          events: this.props.events,
          onClear
        }
      );
    })));
  }
};
var ImageGrid = class extends import_react2.PureComponent {
  render() {
    const { images, onImageSelected, selectedImage } = this.props;
    if (images.length === 0) {
      return null;
    }
    const ROW_SIZE = 6;
    const imageRows = Array(Math.ceil(images.length / ROW_SIZE)).fill(0).map((_, index) => index * ROW_SIZE).map((begin) => images.slice(begin, begin + ROW_SIZE));
    return /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Container, { gap: true }, /* @__PURE__ */ import_react2.default.createElement(
      ImageGridHeader,
      {
        key: "header",
        title: this.props.title,
        subtitle: this.props.subtitle,
        onClear: this.props.onClear
      }
    ), /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Container, { pad: true }, imageRows.map((row, rowIndex) => /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Container, { pad: true, key: rowIndex }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Row, { key: rowIndex, align: "middle", gutter: [8, 24] }, row.map((imageId, colIndex) => /* @__PURE__ */ import_react2.default.createElement(import_antd2.Col, { key: colIndex, span: 24 / ROW_SIZE }, /* @__PURE__ */ import_react2.default.createElement(
      ImageItem,
      {
        imageId,
        image: this.props.imagesMap[imageId],
        key: imageId,
        selected: selectedImage != null && selectedImage === imageId,
        onSelected: onImageSelected,
        numberOfRequests: this.props.events.filter(
          (e) => e.imageIds.includes(imageId)
        ).length
      }
    ))))))));
  }
};
ImageGrid.Content = import_flipper_plugin2.styled.div({
  paddingLeft: 15
});
var _ImageGridHeader = class extends import_react2.PureComponent {
  render() {
    return /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Horizontal, { gap: true, pad: true, grow: true, borderBottom: true }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Typography.Title, null, this.props.title), /* @__PURE__ */ import_react2.default.createElement(_ImageGridHeader.Subtitle, null, this.props.subtitle), this.props.onClear ? /* @__PURE__ */ import_react2.default.createElement(import_antd2.Button, { onClick: this.props.onClear }, "Clear Cache") : null);
  }
};
var ImageGridHeader = _ImageGridHeader;
ImageGridHeader.Subtitle = import_flipper_plugin2.styled.span({
  fontSize: 22,
  fontWeight: 300
});
var _ImageItem = class extends import_react2.PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = () => {
      this.props.onSelected(this.props.imageId);
    };
  }
  render() {
    const { image, selected, size, numberOfRequests } = this.props;
    return /* @__PURE__ */ import_react2.default.createElement(import_flipper_plugin2.Layout.Container, { onClick: this.onClick, gap: true }, numberOfRequests > 0 && image != null && /* @__PURE__ */ import_react2.default.createElement(_ImageItem.EventBadge, { count: numberOfRequests }), image != null ? /* @__PURE__ */ import_react2.default.createElement(import_antd2.Image, { src: image.data, preview: false }) : /* @__PURE__ */ import_react2.default.createElement(import_antd2.Skeleton.Image, null), /* @__PURE__ */ import_react2.default.createElement(_ImageItem.SelectedHighlight, { selected }), image != null && /* @__PURE__ */ import_react2.default.createElement(_ImageItem.HoverOverlay, { selected, size }, /* @__PURE__ */ import_react2.default.createElement(_ImageItem.MemoryLabel, null, formatKB(image.sizeBytes)), /* @__PURE__ */ import_react2.default.createElement(_ImageItem.SizeLabel, null, image.width, "\xD7", image.height)));
  }
};
var ImageItem = _ImageItem;
ImageItem.defaultProps = {
  size: 150
};
ImageItem.SelectedHighlight = import_flipper_plugin2.styled.div((props) => ({
  borderColor: import_flipper_plugin2.theme.primaryColor,
  borderStyle: "solid",
  borderWidth: props.selected ? 3 : 0,
  borderRadius: 4,
  boxShadow: props.selected ? `inset 0 0 0 1px ${import_flipper_plugin2.theme.white}` : "none",
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0
}));
ImageItem.HoverOverlay = (0, import_flipper_plugin2.styled)(import_flipper_plugin2.Layout.Container)((props) => ({
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.8)",
  bottom: props.selected ? 4 : 0,
  fontSize: props.size > 100 ? 16 : 11,
  justifyContent: "center",
  left: props.selected ? 4 : 0,
  opacity: 0,
  position: "absolute",
  right: props.selected ? 4 : 0,
  top: props.selected ? 4 : 0,
  overflow: "hidden",
  transition: ".1s opacity",
  "&:hover": {
    opacity: 1
  }
}));
ImageItem.MemoryLabel = import_flipper_plugin2.styled.span({
  fontWeight: 600,
  marginBottom: 6
});
ImageItem.SizeLabel = import_flipper_plugin2.styled.span({
  fontWeight: 300
});
ImageItem.EventBadge = (0, import_flipper_plugin2.styled)(import_antd2.Badge)({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1
});

// plugins/public/fresco/ImagesMemoryOverview.tsx
var import_flipper_plugin3 = require("flipper-plugin");
var import_antd3 = require("antd");
var import_react63 = __toESM(require("react"));

// plugins/public/node_modules/react-vis/es/plot/series/abstract-series.js
var import_prop_types3 = __toESM(require_prop_types());

// plugins/public/node_modules/d3-voronoi/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-voronoi/src/point.js
function x(d) {
  return d[0];
}
function y(d) {
  return d[1];
}

// plugins/public/node_modules/d3-voronoi/src/RedBlackTree.js
function RedBlackTree() {
  this._ = null;
}
function RedBlackNode(node) {
  node.U = node.C = node.L = node.R = node.P = node.N = null;
}
RedBlackTree.prototype = {
  constructor: RedBlackTree,
  insert: function(after, node) {
    var parent, grandpa, uncle;
    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N)
        after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L)
          after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;
    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },
  remove: function(node) {
    if (node.N)
      node.N.P = node.P;
    if (node.P)
      node.P.N = node.N;
    node.N = node.P = null;
    var parent = node.U, sibling, left2 = node.L, right2 = node.R, next, red;
    if (!left2)
      next = right2;
    else if (!right2)
      next = left2;
    else
      next = RedBlackFirst(right2);
    if (parent) {
      if (parent.L === node)
        parent.L = next;
      else
        parent.R = next;
    } else {
      this._ = next;
    }
    if (left2 && right2) {
      red = next.C;
      next.C = node.C;
      next.L = left2;
      left2.U = next;
      if (next !== right2) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right2;
        right2.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }
    if (node)
      node.U = parent;
    if (red)
      return;
    if (node && node.C) {
      node.C = false;
      return;
    }
    do {
      if (node === this._)
        break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);
    if (node)
      node.C = false;
  }
};
function RedBlackRotateLeft(tree, node) {
  var p = node, q = node.R, parent = p.U;
  if (parent) {
    if (parent.L === p)
      parent.L = q;
    else
      parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R)
    p.R.U = p;
  q.L = p;
}
function RedBlackRotateRight(tree, node) {
  var p = node, q = node.L, parent = p.U;
  if (parent) {
    if (parent.L === p)
      parent.L = q;
    else
      parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L)
    p.L.U = p;
  q.R = p;
}
function RedBlackFirst(node) {
  while (node.L)
    node = node.L;
  return node;
}
var RedBlackTree_default = RedBlackTree;

// plugins/public/node_modules/d3-voronoi/src/Edge.js
function createEdge(left2, right2, v0, v1) {
  var edge = [null, null], index = edges.push(edge) - 1;
  edge.left = left2;
  edge.right = right2;
  if (v0)
    setEdgeEnd(edge, left2, right2, v0);
  if (v1)
    setEdgeEnd(edge, right2, left2, v1);
  cells[left2.index].halfedges.push(index);
  cells[right2.index].halfedges.push(index);
  return edge;
}
function createBorderEdge(left2, v0, v1) {
  var edge = [v0, v1];
  edge.left = left2;
  return edge;
}
function setEdgeEnd(edge, left2, right2, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left2;
    edge.right = right2;
  } else if (edge.left === right2) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}
function clipEdge(edge, x05, y05, x12, y12) {
  var a2 = edge[0], b = edge[1], ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t02 = 0, t12 = 1, dx = bx - ax, dy = by - ay, r;
  r = x05 - ax;
  if (!dx && r > 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r < t02)
      return;
    if (r < t12)
      t12 = r;
  } else if (dx > 0) {
    if (r > t12)
      return;
    if (r > t02)
      t02 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r > t12)
      return;
    if (r > t02)
      t02 = r;
  } else if (dx > 0) {
    if (r < t02)
      return;
    if (r < t12)
      t12 = r;
  }
  r = y05 - ay;
  if (!dy && r > 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r < t02)
      return;
    if (r < t12)
      t12 = r;
  } else if (dy > 0) {
    if (r > t12)
      return;
    if (r > t02)
      t02 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r > t12)
      return;
    if (r > t02)
      t02 = r;
  } else if (dy > 0) {
    if (r < t02)
      return;
    if (r < t12)
      t12 = r;
  }
  if (!(t02 > 0) && !(t12 < 1))
    return true;
  if (t02 > 0)
    edge[0] = [ax + t02 * dx, ay + t02 * dy];
  if (t12 < 1)
    edge[1] = [ax + t12 * dx, ay + t12 * dy];
  return true;
}
function connectEdge(edge, x05, y05, x12, y12) {
  var v1 = edge[1];
  if (v1)
    return true;
  var v0 = edge[0], left2 = edge.left, right2 = edge.right, lx = left2[0], ly = left2[1], rx = right2[0], ry = right2[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
  if (ry === ly) {
    if (fx < x05 || fx >= x12)
      return;
    if (lx > rx) {
      if (!v0)
        v0 = [fx, y05];
      else if (v0[1] >= y12)
        return;
      v1 = [fx, y12];
    } else {
      if (!v0)
        v0 = [fx, y12];
      else if (v0[1] < y05)
        return;
      v1 = [fx, y05];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0)
          v0 = [(y05 - fb) / fm, y05];
        else if (v0[1] >= y12)
          return;
        v1 = [(y12 - fb) / fm, y12];
      } else {
        if (!v0)
          v0 = [(y12 - fb) / fm, y12];
        else if (v0[1] < y05)
          return;
        v1 = [(y05 - fb) / fm, y05];
      }
    } else {
      if (ly < ry) {
        if (!v0)
          v0 = [x05, fm * x05 + fb];
        else if (v0[0] >= x12)
          return;
        v1 = [x12, fm * x12 + fb];
      } else {
        if (!v0)
          v0 = [x12, fm * x12 + fb];
        else if (v0[0] < x05)
          return;
        v1 = [x05, fm * x05 + fb];
      }
    }
  }
  edge[0] = v0;
  edge[1] = v1;
  return true;
}
function clipEdges(x05, y05, x12, y12) {
  var i = edges.length, edge;
  while (i--) {
    if (!connectEdge(edge = edges[i], x05, y05, x12, y12) || !clipEdge(edge, x05, y05, x12, y12) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
      delete edges[i];
    }
  }
}

// plugins/public/node_modules/d3-voronoi/src/Cell.js
function createCell(site) {
  return cells[site.index] = {
    site,
    halfedges: []
  };
}
function cellHalfedgeAngle(cell, edge) {
  var site = cell.site, va = edge.left, vb = edge.right;
  if (site === vb)
    vb = va, va = site;
  if (vb)
    return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va)
    va = edge[1], vb = edge[0];
  else
    va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}
function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}
function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}
function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m), array4 = new Array(m);
      for (j = 0; j < m; ++j)
        index[j] = j, array4[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i2, j2) {
        return array4[j2] - array4[i2];
      });
      for (j = 0; j < m; ++j)
        array4[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j)
        halfedges[j] = array4[j];
    }
  }
}
function clipCells(x05, y05, x12, y12) {
  var nCells = cells.length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start, startX, startY, end, endX, endY, cover = true;
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(
            site,
            end,
            Math.abs(endX - x05) < epsilon && y12 - endY > epsilon ? [x05, Math.abs(startX - x05) < epsilon ? startY : y12] : Math.abs(endY - y12) < epsilon && x12 - endX > epsilon ? [Math.abs(startY - y12) < epsilon ? startX : x12, y12] : Math.abs(endX - x12) < epsilon && endY - y05 > epsilon ? [x12, Math.abs(startX - x12) < epsilon ? startY : y05] : Math.abs(endY - y05) < epsilon && endX - x05 > epsilon ? [Math.abs(startY - y05) < epsilon ? startX : x05, y05] : null
          )) - 1);
          ++nHalfedges;
        }
      }
      if (nHalfedges)
        cover = false;
    }
  }
  if (cover) {
    var dx, dy, d2, dc = Infinity;
    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x05;
        dy = site[1] - y05;
        d2 = dx * dx + dy * dy;
        if (d2 < dc)
          dc = d2, cover = cell;
      }
    }
    if (cover) {
      var v00 = [x05, y05], v01 = [x05, y12], v11 = [x12, y12], v10 = [x12, y05];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

// plugins/public/node_modules/d3-voronoi/src/Circle.js
var circlePool = [];
var firstCircle;
function Circle() {
  RedBlackNode(this);
  this.x = this.y = this.arc = this.site = this.cy = null;
}
function attachCircle(arc) {
  var lArc = arc.P, rArc = arc.N;
  if (!lArc || !rArc)
    return;
  var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
  if (lSite === rSite)
    return;
  var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2)
    return;
  var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x3 = (cy * ha - ay * hc) / d, y3 = (ax * hc - cx * ha) / d;
  var circle2 = circlePool.pop() || new Circle();
  circle2.arc = arc;
  circle2.site = cSite;
  circle2.x = x3 + bx;
  circle2.y = (circle2.cy = y3 + by) + Math.sqrt(x3 * x3 + y3 * y3);
  arc.circle = circle2;
  var before = null, node = circles._;
  while (node) {
    if (circle2.y < node.y || circle2.y === node.y && circle2.x <= node.x) {
      if (node.L)
        node = node.L;
      else {
        before = node.P;
        break;
      }
    } else {
      if (node.R)
        node = node.R;
      else {
        before = node;
        break;
      }
    }
  }
  circles.insert(before, circle2);
  if (!before)
    firstCircle = circle2;
}
function detachCircle(arc) {
  var circle2 = arc.circle;
  if (circle2) {
    if (!circle2.P)
      firstCircle = circle2.N;
    circles.remove(circle2);
    circlePool.push(circle2);
    RedBlackNode(circle2);
    arc.circle = null;
  }
}

// plugins/public/node_modules/d3-voronoi/src/Beach.js
var beachPool = [];
function Beach() {
  RedBlackNode(this);
  this.edge = this.site = this.circle = null;
}
function createBeach(site) {
  var beach = beachPool.pop() || new Beach();
  beach.site = site;
  return beach;
}
function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}
function removeBeach(beach) {
  var circle2 = beach.circle, x3 = circle2.x, y3 = circle2.cy, vertex = [x3, y3], previous = beach.P, next = beach.N, disappearing = [beach];
  detachBeach(beach);
  var lArc = previous;
  while (lArc.circle && Math.abs(x3 - lArc.circle.x) < epsilon && Math.abs(y3 - lArc.circle.cy) < epsilon) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }
  disappearing.unshift(lArc);
  detachCircle(lArc);
  var rArc = next;
  while (rArc.circle && Math.abs(x3 - rArc.circle.x) < epsilon && Math.abs(y3 - rArc.circle.cy) < epsilon) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }
  disappearing.push(rArc);
  detachCircle(rArc);
  var nArcs = disappearing.length, iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }
  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function addBeach(site) {
  var x3 = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = beaches._;
  while (node) {
    dxl = leftBreakPoint(node, directrix) - x3;
    if (dxl > epsilon)
      node = node.L;
    else {
      dxr = x3 - rightBreakPoint(node, directrix);
      if (dxr > epsilon) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }
  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);
  if (!lArc && !rArc)
    return;
  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }
  if (!rArc) {
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }
  detachCircle(lArc);
  detachCircle(rArc);
  var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function leftBreakPoint(arc, directrix) {
  var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
  if (!pby2)
    return rfocx;
  var lArc = arc.P;
  if (!lArc)
    return -Infinity;
  site = lArc.site;
  var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
  if (!plby2)
    return lfocx;
  var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
  if (aby2)
    return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
  return (rfocx + lfocx) / 2;
}
function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc)
    return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

// plugins/public/node_modules/d3-voronoi/src/Diagram.js
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;
function triangleArea(a2, b, c2) {
  return (a2[0] - c2[0]) * (b[1] - a2[1]) - (a2[0] - b[0]) * (c2[1] - a2[1]);
}
function lexicographic(a2, b) {
  return b[1] - a2[1] || b[0] - a2[0];
}
function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(), x3, y3, circle2;
  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree_default();
  circles = new RedBlackTree_default();
  while (true) {
    circle2 = firstCircle;
    if (site && (!circle2 || site[1] < circle2.y || site[1] === circle2.y && site[0] < circle2.x)) {
      if (site[0] !== x3 || site[1] !== y3) {
        addBeach(site);
        x3 = site[0], y3 = site[1];
      }
      site = sites.pop();
    } else if (circle2) {
      removeBeach(circle2.arc);
    } else {
      break;
    }
  }
  sortCellHalfedges();
  if (extent) {
    var x05 = +extent[0][0], y05 = +extent[0][1], x12 = +extent[1][0], y12 = +extent[1][1];
    clipEdges(x05, y05, x12, y12);
    clipCells(x05, y05, x12, y12);
  }
  this.edges = edges;
  this.cells = cells;
  beaches = circles = edges = cells = null;
}
Diagram.prototype = {
  constructor: Diagram,
  polygons: function() {
    var edges2 = this.edges;
    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) {
        return cellHalfedgeStart(cell, edges2[i]);
      });
      polygon.data = cell.site.data;
      return polygon;
    });
  },
  triangles: function() {
    var triangles = [], edges2 = this.edges;
    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length))
        return;
      var site = cell.site, halfedges, j = -1, m, s0, e1 = edges2[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
      while (++j < m) {
        s0 = s1;
        e1 = edges2[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });
    return triangles;
  },
  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },
  find: function(x3, y3, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
    while (!(cell = that.cells[i1]))
      if (++i1 >= n)
        return null;
    var dx = x3 - cell.site[0], dy = y3 - cell.site[1], d2 = dx * dx + dy * dy;
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right))
          return;
        var vx = x3 - v[0], vy = y3 - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2)
          d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);
    that._found = i0;
    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

// plugins/public/node_modules/d3-voronoi/src/voronoi.js
function voronoi_default() {
  var x3 = x, y3 = y, extent = null;
  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s2 = [Math.round(x3(d, i, data) / epsilon) * epsilon, Math.round(y3(d, i, data) / epsilon) * epsilon];
      s2.index = i;
      s2.data = d;
      return s2;
    }), extent);
  }
  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };
  voronoi.links = function(data) {
    return voronoi(data).links();
  };
  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };
  voronoi.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default(+_), voronoi) : x3;
  };
  voronoi.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default(+_), voronoi) : y3;
  };
  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };
  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };
  return voronoi;
}

// plugins/public/node_modules/react-vis/es/plot/series/abstract-series.js
var import_react5 = require("react");

// plugins/public/node_modules/react-vis/es/animation.js
var import_react3 = __toESM(require("react"));
var import_prop_types = __toESM(require_prop_types());

// plugins/public/node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// plugins/public/node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a2 = this.opacity;
  a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
  return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
}
function hex(value2) {
  value2 = Math.max(0, Math.min(255, Math.round(value2) || 0));
  return (value2 < 16 ? "0" : "") + value2.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s2 = max2 - min2, l = (max2 + min2) / 2;
  if (s2) {
    if (r === max2)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max2)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a2 = this.opacity;
    a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
    return (a2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a2 === 1 ? ")" : ", " + a2 + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// plugins/public/node_modules/d3-color/src/math.js
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// plugins/public/node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix)
    return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a2 * (A * cosh + B * sinh)),
      255 * (l + a2 * (C * cosh + D * sinh)),
      255 * (l + a2 * (E * cosh)),
      this.opacity
    );
  }
}));

// plugins/public/node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// plugins/public/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// plugins/public/node_modules/d3-interpolate/src/constant.js
function constant_default2(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y3) {
  return a2 = Math.pow(a2, y3), b = Math.pow(b, y3) - a2, y3 = 1 / y3, function(t) {
    return Math.pow(a2 + t * b, y3);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default2(isNaN(a2) ? b : a2);
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y3) : constant_default2(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default2(isNaN(a2) ? b : a2);
}

// plugins/public/node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb2(start, end) {
    var r = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// plugins/public/node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c2[i] = a2[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x3) {
  return ArrayBuffer.isView(x3) && !(x3 instanceof DataView);
}

// plugins/public/node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x3 = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x3[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c2[i] = x3[i](t);
    return c2;
  };
}

// plugins/public/node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// plugins/public/node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// plugins/public/node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c2 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c2[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c2[k2] = i[k2](t);
    return c2;
  };
}

// plugins/public/node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// plugins/public/node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c2 = color(b)) ? (b = c2, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}

// plugins/public/node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// plugins/public/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y3) {
    y3 = +y3;
    function cubehelix3(start, end) {
      var h = hue2((start = cubehelix(start)).h, (end = cubehelix(end)).h), s2 = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s2(t);
        start.l = l(Math.pow(t, y3));
        start.opacity = opacity(t);
        return start + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// plugins/public/node_modules/react-vis/es/animation.js
var import_react_motion = __toESM(require_react_motion());
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function(target) {
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var ANIMATION_PROPTYPES = import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  stiffness: import_prop_types.default.number,
  nonAnimatedProps: import_prop_types.default.arrayOf(import_prop_types.default.string),
  damping: import_prop_types.default.number
}), import_prop_types.default.bool]);
var propTypes = {
  animatedProps: import_prop_types.default.arrayOf(import_prop_types.default.string).isRequired,
  animation: ANIMATION_PROPTYPES,
  onStart: import_prop_types.default.func,
  onEnd: import_prop_types.default.func
};
function getAnimationStyle() {
  var animationStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : import_react_motion.presets.noWobble;
  if (typeof animationStyle === "string") {
    return import_react_motion.presets[animationStyle] || import_react_motion.presets.noWobble;
  }
  var damping = animationStyle.damping, stiffness = animationStyle.stiffness;
  return _extends({
    damping: damping || import_react_motion.presets.noWobble.damping,
    stiffness: stiffness || import_react_motion.presets.noWobble.stiffness
  }, animationStyle);
}
function extractAnimatedPropValues(props) {
  var animatedProps4 = props.animatedProps, otherProps = _objectWithoutProperties(props, ["animatedProps"]);
  return animatedProps4.reduce(function(result, animatedPropName) {
    if (otherProps.hasOwnProperty(animatedPropName)) {
      result[animatedPropName] = otherProps[animatedPropName];
    }
    return result;
  }, {});
}
var Animation = function(_PureComponent) {
  _inherits(Animation2, _PureComponent);
  function Animation2(props) {
    _classCallCheck(this, Animation2);
    var _this = _possibleConstructorReturn(this, (Animation2.__proto__ || Object.getPrototypeOf(Animation2)).call(this, props));
    _this._motionEndHandler = function() {
      if (_this.props.onEnd) {
        _this.props.onEnd();
      }
    };
    _this._renderChildren = function(_ref) {
      var i = _ref.i;
      var children = _this.props.children;
      var interpolator = _this._interpolator;
      var child = import_react3.default.Children.only(children);
      var interpolatedProps = interpolator ? interpolator(i) : interpolator;
      var data = interpolatedProps && interpolatedProps.data || null;
      if (data && child.props._data) {
        data = data.map(function(row, index) {
          var correspondingCell = child.props._data[index];
          return _extends({}, row, {
            parent: correspondingCell.parent,
            children: correspondingCell.children
          });
        });
      }
      return import_react3.default.cloneElement(child, _extends({}, child.props, interpolatedProps, {
        data: data || child.props.data || null,
        _animation: Math.random()
      }));
    };
    _this._updateInterpolator(props);
    return _this;
  }
  _createClass(Animation2, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(props) {
      this._updateInterpolator(this.props, props);
      if (props.onStart) {
        props.onStart();
      }
    }
  }, {
    key: "_updateInterpolator",
    value: function _updateInterpolator(oldProps, newProps) {
      this._interpolator = value_default(extractAnimatedPropValues(oldProps), newProps ? extractAnimatedPropValues(newProps) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var animationStyle = getAnimationStyle(this.props.animation);
      var defaultStyle = { i: 0 };
      var style = { i: (0, import_react_motion.spring)(1, animationStyle) };
      var key = Math.random();
      return import_react3.default.createElement(
        import_react_motion.Motion,
        _extends({ defaultStyle, style, key }, { onRest: this._motionEndHandler }),
        this._renderChildren
      );
    }
  }]);
  return Animation2;
}(import_react3.PureComponent);
Animation.propTypes = propTypes;
Animation.displayName = "Animation";
var animation_default = Animation;
var AnimationPropType = ANIMATION_PROPTYPES;

// plugins/public/node_modules/d3-array/src/ascending.js
function ascending_default(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// plugins/public/node_modules/d3-array/src/bisector.js
function bisector_default(compare) {
  if (compare.length === 1)
    compare = ascendingComparator(compare);
  return {
    left: function(a2, x3, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a2.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a2[mid], x3) < 0)
          lo = mid + 1;
        else
          hi = mid;
      }
      return lo;
    },
    right: function(a2, x3, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a2.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a2[mid], x3) > 0)
          hi = mid;
        else
          lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x3) {
    return ascending_default(f(d), x3);
  };
}

// plugins/public/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisect_default = bisectRight;

// plugins/public/node_modules/d3-array/src/extent.js
function extent_default(values, valueof) {
  var n = values.length, i = -1, value2, min2, max2;
  if (valueof == null) {
    while (++i < n) {
      if ((value2 = values[i]) != null && value2 >= value2) {
        min2 = max2 = value2;
        while (++i < n) {
          if ((value2 = values[i]) != null) {
            if (min2 > value2)
              min2 = value2;
            if (max2 < value2)
              max2 = value2;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value2 = valueof(values[i], i, values)) != null && value2 >= value2) {
        min2 = max2 = value2;
        while (++i < n) {
          if ((value2 = valueof(values[i], i, values)) != null) {
            if (min2 > value2)
              min2 = value2;
            if (max2 < value2)
              max2 = value2;
          }
        }
      }
    }
  }
  return [min2, max2];
}

// plugins/public/node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// plugins/public/node_modules/d3-array/src/range.js
function range_default(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}

// plugins/public/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function ticks_default(start, stop, count2) {
  var reverse, i = -1, n, ticks, step;
  stop = +stop, start = +start, count2 = +count2;
  if (start === stop && count2 > 0)
    return [start];
  if (reverse = stop < start)
    n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count2)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n)
      ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n)
      ticks[i] = (start - i) / step;
  }
  if (reverse)
    ticks.reverse();
  return ticks;
}
function tickIncrement(start, stop, count2) {
  var step = (stop - start) / Math.max(0, count2), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count2) {
  var step0 = Math.abs(stop - start) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start ? -step1 : step1;
}

// plugins/public/node_modules/d3-array/src/threshold/sturges.js
function sturges_default(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}

// plugins/public/node_modules/d3-array/src/max.js
function max_default(values, valueof) {
  var n = values.length, i = -1, value2, max2;
  if (valueof == null) {
    while (++i < n) {
      if ((value2 = values[i]) != null && value2 >= value2) {
        max2 = value2;
        while (++i < n) {
          if ((value2 = values[i]) != null && value2 > max2) {
            max2 = value2;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value2 = valueof(values[i], i, values)) != null && value2 >= value2) {
        max2 = value2;
        while (++i < n) {
          if ((value2 = valueof(values[i], i, values)) != null && value2 > max2) {
            max2 = value2;
          }
        }
      }
    }
  }
  return max2;
}

// plugins/public/node_modules/d3-array/src/min.js
function min_default(values, valueof) {
  var n = values.length, i = -1, value2, min2;
  if (valueof == null) {
    while (++i < n) {
      if ((value2 = values[i]) != null && value2 >= value2) {
        min2 = value2;
        while (++i < n) {
          if ((value2 = values[i]) != null && min2 > value2) {
            min2 = value2;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value2 = valueof(values[i], i, values)) != null && value2 >= value2) {
        min2 = value2;
        while (++i < n) {
          if ((value2 = valueof(values[i], i, values)) != null && min2 > value2) {
            min2 = value2;
          }
        }
      }
    }
  }
  return min2;
}

// plugins/public/node_modules/d3-array/src/sum.js
function sum_default(values, valueof) {
  var n = values.length, i = -1, value2, sum2 = 0;
  if (valueof == null) {
    while (++i < n) {
      if (value2 = +values[i])
        sum2 += value2;
    }
  } else {
    while (++i < n) {
      if (value2 = +valueof(values[i], i, values))
        sum2 += value2;
    }
  }
  return sum2;
}

// plugins/public/node_modules/d3-collection/src/map.js
var prefix = "$";
function Map2() {
}
Map2.prototype = map2.prototype = {
  constructor: Map2,
  has: function(key) {
    return prefix + key in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value2) {
    this[prefix + key] = value2;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this)
      if (property[0] === prefix)
        delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this)
      if (property[0] === prefix)
        keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this)
      if (property[0] === prefix)
        values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this)
      if (property[0] === prefix)
        entries.push({ key: property.slice(1), value: this[property] });
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this)
      if (property[0] === prefix)
        ++size;
    return size;
  },
  empty: function() {
    for (var property in this)
      if (property[0] === prefix)
        return false;
    return true;
  },
  each: function(f) {
    for (var property in this)
      if (property[0] === prefix)
        f(this[property], property.slice(1), this);
  }
};
function map2(object, f) {
  var map5 = new Map2();
  if (object instanceof Map2)
    object.each(function(value2, key2) {
      map5.set(key2, value2);
    });
  else if (Array.isArray(object)) {
    var i = -1, n = object.length, o;
    if (f == null)
      while (++i < n)
        map5.set(i, object[i]);
    else
      while (++i < n)
        map5.set(f(o = object[i], i, object), o);
  } else if (object)
    for (var key in object)
      map5.set(key, object[key]);
  return map5;
}
var map_default = map2;

// plugins/public/node_modules/d3-collection/src/nest.js
function nest_default() {
  var keys = [], sortKeys = [], sortValues, rollup, nest;
  function apply(array4, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null)
        array4.sort(sortValues);
      return rollup != null ? rollup(array4) : array4;
    }
    var i = -1, n = array4.length, key = keys[depth++], keyValue, value2, valuesByKey = map_default(), values, result = createResult();
    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value2 = array4[i]) + "")) {
        values.push(value2);
      } else {
        valuesByKey.set(keyValue, [value2]);
      }
    }
    valuesByKey.each(function(values2, key2) {
      setResult(result, key2, apply(values2, depth, createResult, setResult));
    });
    return result;
  }
  function entries(map5, depth) {
    if (++depth > keys.length)
      return map5;
    var array4, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length)
      array4 = map5.entries();
    else
      array4 = [], map5.each(function(v, k2) {
        array4.push({ key: k2, values: entries(v, depth) });
      });
    return sortKey != null ? array4.sort(function(a2, b) {
      return sortKey(a2.key, b.key);
    }) : array4;
  }
  return nest = {
    object: function(array4) {
      return apply(array4, 0, createObject, setObject);
    },
    map: function(array4) {
      return apply(array4, 0, createMap, setMap);
    },
    entries: function(array4) {
      return entries(apply(array4, 0, createMap, setMap), 0);
    },
    key: function(d) {
      keys.push(d);
      return nest;
    },
    sortKeys: function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    },
    sortValues: function(order) {
      sortValues = order;
      return nest;
    },
    rollup: function(f) {
      rollup = f;
      return nest;
    }
  };
}
function createObject() {
  return {};
}
function setObject(object, key, value2) {
  object[key] = value2;
}
function createMap() {
  return map_default();
}
function setMap(map5, key, value2) {
  map5.set(key, value2);
}

// plugins/public/node_modules/d3-collection/src/set.js
function Set2() {
}
var proto = map_default.prototype;
Set2.prototype = set.prototype = {
  constructor: Set2,
  has: proto.has,
  add: function(value2) {
    value2 += "";
    this[prefix + value2] = value2;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};
function set(object, f) {
  var set2 = new Set2();
  if (object instanceof Set2)
    object.each(function(value2) {
      set2.add(value2);
    });
  else if (object) {
    var i = -1, n = object.length;
    if (f == null)
      while (++i < n)
        set2.add(object[i]);
    else
      while (++i < n)
        set2.add(f(object[i], i, object));
  }
  return set2;
}
var set_default = set;

// plugins/public/node_modules/d3-scale/src/array.js
var array2 = Array.prototype;
var map3 = array2.map;
var slice2 = array2.slice;

// plugins/public/node_modules/d3-scale/src/ordinal.js
var implicit = { name: "implicit" };
function ordinal(range) {
  var index = map_default(), domain = [], unknown = implicit;
  range = range == null ? [] : slice2.call(range);
  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit)
        return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = map_default();
    var i = -1, n = _.length, d, key;
    while (++i < n)
      if (!index.has(key = (d = _[i]) + ""))
        index.set(key, domain.push(d));
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice2.call(_), scale) : range.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal().domain(domain).range(range).unknown(unknown);
  };
  return scale;
}

// plugins/public/node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, range = [0, 1], step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = range[1] < range[0], start = range[reverse - 0], stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range_default(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return rescale();
}
function pointish(scale) {
  var copy2 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy2());
  };
  return scale;
}
function point() {
  return pointish(band().paddingInner(1));
}

// plugins/public/node_modules/d3-scale/src/constant.js
function constant_default4(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-scale/src/number.js
function number_default3(x3) {
  return +x3;
}

// plugins/public/node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function deinterpolateLinear(a2, b) {
  return (b -= a2 = +a2) ? function(x3) {
    return (x3 - a2) / b;
  } : constant_default4(b);
}
function deinterpolateClamp(deinterpolate2) {
  return function(a2, b) {
    var d = deinterpolate2(a2 = +a2, b = +b);
    return function(x3) {
      return x3 <= a2 ? 0 : x3 >= b ? 1 : d(x3);
    };
  };
}
function reinterpolateClamp(reinterpolate2) {
  return function(a2, b) {
    var r = reinterpolate2(a2 = +a2, b = +b);
    return function(t) {
      return t <= 0 ? a2 : t >= 1 ? b : r(t);
    };
  };
}
function bimap(domain, range, deinterpolate2, reinterpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = deinterpolate2(d1, d0), r0 = reinterpolate2(r1, r0);
  else
    d0 = deinterpolate2(d0, d1), r0 = reinterpolate2(r0, r1);
  return function(x3) {
    return r0(d0(x3));
  };
}
function polymap(domain, range, deinterpolate2, reinterpolate2) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = deinterpolate2(domain[i], domain[i + 1]);
    r[i] = reinterpolate2(range[i], range[i + 1]);
  }
  return function(x3) {
    var i2 = bisect_default(domain, x3, 1, j) - 1;
    return r[i2](d[i2](x3));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
}
function continuous(deinterpolate2, reinterpolate2) {
  var domain = unit, range = unit, interpolate = value_default, clamp = false, piecewise, output, input;
  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x3) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate2) : deinterpolate2, interpolate)))(+x3);
  }
  scale.invert = function(y3) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate2) : reinterpolate2)))(+y3);
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = map3.call(_, number_default3), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice2.call(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = slice2.call(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  return rescale();
}

// plugins/public/node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x3) {
  return Math.abs(x3 = Math.round(x3)) >= 1e21 ? x3.toLocaleString("en").replace(/,/g, "") : x3.toString(10);
}
function formatDecimalParts(x3, p) {
  if ((i = (x3 = p ? x3.toExponential(p - 1) : x3.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x3.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x3.slice(i + 1)
  ];
}

// plugins/public/node_modules/d3-format/src/exponent.js
function exponent_default(x3) {
  return x3 = formatDecimalParts(Math.abs(x3)), x3 ? x3[1] : NaN;
}

// plugins/public/node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value2, width) {
    var i = value2.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value2.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// plugins/public/node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value2) {
    return value2.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// plugins/public/node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// plugins/public/node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// plugins/public/node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x3, p) {
  var d = formatDecimalParts(x3, p);
  if (!d)
    return x3 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x3, Math.max(0, p + i - 1))[0];
}

// plugins/public/node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x3, p) {
  var d = formatDecimalParts(x3, p);
  if (!d)
    return x3 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// plugins/public/node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": function(x3, p) {
    return (x3 * 100).toFixed(p);
  },
  "b": function(x3) {
    return Math.round(x3).toString(2);
  },
  "c": function(x3) {
    return x3 + "";
  },
  "d": formatDecimal_default,
  "e": function(x3, p) {
    return x3.toExponential(p);
  },
  "f": function(x3, p) {
    return x3.toFixed(p);
  },
  "g": function(x3, p) {
    return x3.toPrecision(p);
  },
  "o": function(x3) {
    return Math.round(x3).toString(8);
  },
  "p": function(x3, p) {
    return formatRounded_default(x3 * 100, p);
  },
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": function(x3) {
    return Math.round(x3).toString(16).toUpperCase();
  },
  "x": function(x3) {
    return Math.round(x3).toString(16);
  }
};

// plugins/public/node_modules/d3-format/src/identity.js
function identity_default2(x3) {
  return x3;
}

// plugins/public/node_modules/d3-format/src/locale.js
var map4 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map4.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map4.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "-" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes_default[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value2) {
      var valuePrefix = prefix2, valueSuffix = suffix, i, n, c2;
      if (type === "c") {
        valueSuffix = formatType(value2) + valueSuffix;
        value2 = "";
      } else {
        value2 = +value2;
        var valueNegative = value2 < 0 || 1 / value2 < 0;
        value2 = isNaN(value2) ? nan : formatType(Math.abs(value2), precision);
        if (trim)
          value2 = formatTrim_default(value2);
        if (valueNegative && +value2 === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value2.length;
          while (++i < n) {
            if (c2 = value2.charCodeAt(i), 48 > c2 || c2 > 57) {
              valueSuffix = (c2 === 46 ? decimal + value2.slice(i + 1) : value2.slice(i)) + valueSuffix;
              value2 = value2.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value2 = group(value2, Infinity);
      var length = valuePrefix.length + value2.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value2 = group(padding + value2, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value2 = valuePrefix + value2 + valueSuffix + padding;
          break;
        case "=":
          value2 = valuePrefix + padding + value2 + valueSuffix;
          break;
        case "^":
          value2 = padding.slice(0, length = padding.length >> 1) + valuePrefix + value2 + valueSuffix + padding.slice(length);
          break;
        default:
          value2 = padding + valuePrefix + value2 + valueSuffix;
          break;
      }
      return numerals(value2);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value2) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value2) / 3))) * 3, k2 = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
    return function(value3) {
      return f(k2 * value3) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// plugins/public/node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// plugins/public/node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// plugins/public/node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value2) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value2) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// plugins/public/node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max2) {
  step = Math.abs(step), max2 = Math.abs(max2) - step;
  return Math.max(0, exponent_default(max2) - exponent_default(step)) + 1;
}

// plugins/public/node_modules/d3-scale/src/tickFormat.js
function tickFormat_default(domain, count2, specifier) {
  var start = domain[0], stop = domain[domain.length - 1], step = tickStep(start, stop, count2 == null ? 10 : count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value2 = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value2)))
        specifier.precision = precision;
      return formatPrefix(specifier, value2);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// plugins/public/node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d = domain();
    return ticks_default(d[0], d[d.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    return tickFormat_default(domain(), count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null)
      count2 = 10;
    var d = domain(), i0 = 0, i1 = d.length - 1, start = d[i0], stop = d[i1], step;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    step = tickIncrement(start, stop, count2);
    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count2);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count2);
    }
    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous(deinterpolateLinear, number_default);
  scale.copy = function() {
    return copy(scale, linear2());
  };
  return linearish(scale);
}

// plugins/public/node_modules/d3-scale/src/nice.js
function nice_default(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x05 = domain[i0], x12 = domain[i1], t;
  if (x12 < x05) {
    t = i0, i0 = i1, i1 = t;
    t = x05, x05 = x12, x12 = t;
  }
  domain[i0] = interval.floor(x05);
  domain[i1] = interval.ceil(x12);
  return domain;
}

// plugins/public/node_modules/d3-scale/src/log.js
function deinterpolate(a2, b) {
  return (b = Math.log(b / a2)) ? function(x3) {
    return Math.log(x3 / a2) / b;
  } : constant_default4(b);
}
function reinterpolate(a2, b) {
  return a2 < 0 ? function(t) {
    return -Math.pow(-b, t) * Math.pow(-a2, 1 - t);
  } : function(t) {
    return Math.pow(b, t) * Math.pow(a2, 1 - t);
  };
}
function pow10(x3) {
  return isFinite(x3) ? +("1e" + x3) : x3 < 0 ? 0 : x3;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x3) {
    return Math.pow(base, x3);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x3) {
    return Math.log(x3) / base;
  });
}
function reflect(f) {
  return function(x3) {
    return -f(-x3);
  };
}
function log() {
  var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]), domain = scale.domain, base = 10, logs = logp(10), pows = powp(10);
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0)
      logs = reflect(logs), pows = reflect(pows);
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function(count2) {
    var d = domain(), u = d[0], v = d[d.length - 1], r;
    if (r = v < u)
      i = u, u = v, v = i;
    var i = logs(u), j = logs(v), p, k2, t, n = count2 == null ? 10 : +count2, z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0)
        for (; i < j; ++i) {
          for (k2 = 1, p = pows(i); k2 < base; ++k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i < j; ++i) {
          for (k2 = base - 1, p = pows(i); k2 >= 1; --k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
    } else {
      z = ticks_default(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = function(count2, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format(specifier);
    if (count2 === Infinity)
      return specifier;
    if (count2 == null)
      count2 = 10;
    var k2 = Math.max(1, base * count2 / scale.ticks().length);
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = function() {
    return domain(nice_default(domain(), {
      floor: function(x3) {
        return pows(Math.floor(logs(x3)));
      },
      ceil: function(x3) {
        return pows(Math.ceil(logs(x3)));
      }
    }));
  };
  scale.copy = function() {
    return copy(scale, log().base(base));
  };
  return scale;
}

// plugins/public/node_modules/d3-scale/src/pow.js
function raise(x3, exponent) {
  return x3 < 0 ? -Math.pow(-x3, exponent) : Math.pow(x3, exponent);
}
function pow() {
  var exponent = 1, scale = continuous(deinterpolate2, reinterpolate2), domain = scale.domain;
  function deinterpolate2(a2, b) {
    return (b = raise(b, exponent) - (a2 = raise(a2, exponent))) ? function(x3) {
      return (raise(x3, exponent) - a2) / b;
    } : constant_default4(b);
  }
  function reinterpolate2(a2, b) {
    b = raise(b, exponent) - (a2 = raise(a2, exponent));
    return function(t) {
      return raise(a2 + b * t, 1 / exponent);
    };
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };
  scale.copy = function() {
    return copy(scale, pow().exponent(exponent));
  };
  return linearish(scale);
}
function sqrt() {
  return pow().exponent(0.5);
}

// plugins/public/node_modules/d3-time/src/interval.js
var t0 = new Date();
var t1 = new Date();
function newInterval(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? new Date() : new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0))
      return range;
    do
      range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };
  interval.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count2(t0, t1));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }
  return interval;
}

// plugins/public/node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start, end) {
  return end - start;
});
millisecond.every = function(k2) {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k2);
  }, function(start, end) {
    return (end - start) / k2;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// plugins/public/node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

// plugins/public/node_modules/d3-time/src/second.js
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// plugins/public/node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// plugins/public/node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// plugins/public/node_modules/d3-time/src/day.js
var day = newInterval(function(date2) {
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setDate(date2.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date2) {
  return date2.getDate() - 1;
});
var day_default = day;
var days = day.range;

// plugins/public/node_modules/d3-time/src/week.js
function weekday(i) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// plugins/public/node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// plugins/public/node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var year_default = year;
var years = year.range;

// plugins/public/node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// plugins/public/node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// plugins/public/node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// plugins/public/node_modules/d3-time/src/utcWeek.js
function utcWeekday(i) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// plugins/public/node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// plugins/public/node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// plugins/public/node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y3, m, d) {
  return { y: y3, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format2;
      if (!(date2 instanceof Date))
        date2 = new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null)
            c2 = specifier.charAt(++i);
          else
            pad2 = c2 === "e" ? " " : "0";
          if (format2 = formats2[c2])
            c2 = format2(date2, pad2);
          string.push(c2);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay_default.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c2, parse;
    while (i < n) {
      if (j >= m)
        return -1;
      c2 = specifier.charCodeAt(i++);
      if (c2 === 37) {
        c2 = specifier.charAt(i++);
        parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
        if (!parse || (j = parse(d, string, j)) < 0)
          return -1;
      } else if (c2 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value2, fill, width) {
  var sign2 = value2 < 0 ? "-" : "", string = (sign2 ? -value2 : value2) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  var map5 = {}, i = -1, n = names.length;
  while (++i < n)
    map5[names[i].toLowerCase()] = i;
  return map5;
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + day_default.count(year_default(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year_default(d) - 1, d), p, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year_default(d), d) + (year_default(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year_default(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay_default.count(utcYear_default(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear_default(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear_default(d), d) + (utcYear_default(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear_default(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// plugins/public/node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// plugins/public/node_modules/d3-scale/src/time.js
var durationSecond2 = 1e3;
var durationMinute2 = durationSecond2 * 60;
var durationHour2 = durationMinute2 * 60;
var durationDay2 = durationHour2 * 24;
var durationWeek2 = durationDay2 * 7;
var durationMonth = durationDay2 * 30;
var durationYear = durationDay2 * 365;
function date(t) {
  return new Date(t);
}
function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2) {
  var scale = continuous(deinterpolateLinear, number_default), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  var tickIntervals = [
    [second2, 1, durationSecond2],
    [second2, 5, 5 * durationSecond2],
    [second2, 15, 15 * durationSecond2],
    [second2, 30, 30 * durationSecond2],
    [minute2, 1, durationMinute2],
    [minute2, 5, 5 * durationMinute2],
    [minute2, 15, 15 * durationMinute2],
    [minute2, 30, 30 * durationMinute2],
    [hour2, 1, durationHour2],
    [hour2, 3, 3 * durationHour2],
    [hour2, 6, 6 * durationHour2],
    [hour2, 12, 12 * durationHour2],
    [day2, 1, durationDay2],
    [day2, 2, 2 * durationDay2],
    [week, 1, durationWeek2],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function tickFormat(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  function tickInterval(interval, start, stop, step) {
    if (interval == null)
      interval = 10;
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval, i = bisector_default(function(i2) {
        return i2[2];
      }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year2;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond2;
      }
    }
    return step == null ? interval : interval.every(step);
  }
  scale.invert = function(y3) {
    return new Date(invert(y3));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(map3.call(_, number)) : domain().map(date);
  };
  scale.ticks = function(interval, step) {
    var d = domain(), t02 = d[0], t12 = d[d.length - 1], r = t12 < t02, t;
    if (r)
      t = t02, t02 = t12, t12 = t;
    t = tickInterval(interval, t02, t12, step);
    t = t ? t.range(t02, t12 + 1) : [];
    return r ? t.reverse() : t;
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat : format2(specifier);
  };
  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain(nice_default(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2));
  };
  return scale;
}
function time_default() {
  return calendar(year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, millisecond_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
}

// plugins/public/node_modules/d3-scale/src/utcTime.js
function utcTime_default() {
  return calendar(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, millisecond_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
}

// plugins/public/node_modules/d3-scale/src/colors.js
function colors_default(s2) {
  return s2.match(/.{6}/g).map(function(x3) {
    return "#" + x3;
  });
}

// plugins/public/node_modules/d3-scale/src/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// plugins/public/node_modules/d3-scale/src/category20b.js
var category20b_default = colors_default("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

// plugins/public/node_modules/d3-scale/src/category20c.js
var category20c_default = colors_default("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

// plugins/public/node_modules/d3-scale/src/category20.js
var category20_default = colors_default("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

// plugins/public/node_modules/d3-scale/src/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// plugins/public/node_modules/d3-scale/src/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var rainbow = cubehelix();

// plugins/public/node_modules/d3-scale/src/viridis.js
function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// plugins/public/node_modules/react-vis/es/utils/scales-utils.js
var import_prop_types2 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/utils/react-utils.js
var import_react4 = __toESM(require("react"));
var _slicedToArray = function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"])
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var _React$version$split = import_react4.default.version.split(".");
var _React$version$split2 = _slicedToArray(_React$version$split, 2);
var major = _React$version$split2[0];
var minor = _React$version$split2[1];
var versionHigherThanThirteen = Number(minor) > 13 || Number(major) > 13;
var isReactDOMSupported = function isReactDOMSupported2() {
  return versionHigherThanThirteen;
};
var getDOMNode = function getDOMNode2(ref) {
  if (!isReactDOMSupported()) {
    return ref && ref.getDOMNode();
  }
  return ref;
};
var USED_MESSAGES = {};
var HIDDEN_PROCESSES = {
  test: true,
  production: true
};
function warning(message) {
  var onlyShowMessageOnce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (global.process && HIDDEN_PROCESSES["development"]) {
    return;
  }
  if (!onlyShowMessageOnce || !USED_MESSAGES[message]) {
    console.warn(message);
    USED_MESSAGES[message] = true;
  }
}

// plugins/public/node_modules/react-vis/es/utils/data-utils.js
function getUniquePropertyValues(arr, accessor) {
  var setOfValues = new Set(arr.map(accessor));
  return Array.from(setOfValues);
}
function addValueToArray(arr, value2) {
  var result = [].concat(arr);
  if (result[0] > value2) {
    result[0] = value2;
  }
  if (result[result.length - 1] < value2) {
    result[result.length - 1] = value2;
  }
  return result;
}
function transformValueToString(value2) {
  return Object.prototype.toString.call(value2) === "[object Date]" ? value2.toDateString() : value2;
}

// plugins/public/node_modules/react-vis/es/utils/scales-utils.js
var _extends2 = Object.assign || function(target) {
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
var _slicedToArray2 = function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"])
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var _SCALE_FUNCTIONS;
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function _defineProperty(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
var LINEAR_SCALE_TYPE = "linear";
var ORDINAL_SCALE_TYPE = "ordinal";
var CATEGORY_SCALE_TYPE = "category";
var LITERAL_SCALE_TYPE = "literal";
var LOG_SCALE_TYPE = "log";
var TIME_SCALE_TYPE = "time";
var TIME_UTC_SCALE_TYPE = "time-utc";
var SCALE_FUNCTIONS = (_SCALE_FUNCTIONS = {}, _defineProperty(_SCALE_FUNCTIONS, LINEAR_SCALE_TYPE, linear2), _defineProperty(_SCALE_FUNCTIONS, ORDINAL_SCALE_TYPE, point), _defineProperty(_SCALE_FUNCTIONS, CATEGORY_SCALE_TYPE, ordinal), _defineProperty(_SCALE_FUNCTIONS, LITERAL_SCALE_TYPE, literalScale), _defineProperty(_SCALE_FUNCTIONS, LOG_SCALE_TYPE, log), _defineProperty(_SCALE_FUNCTIONS, TIME_SCALE_TYPE, time_default), _defineProperty(_SCALE_FUNCTIONS, TIME_UTC_SCALE_TYPE, utcTime_default), _SCALE_FUNCTIONS);
var XYPLOT_ATTR = ["color", "fill", "opacity", "stroke"];
function toTitleCase(str) {
  return "" + str[0].toUpperCase() + str.slice(1);
}
function _getSmallestDistanceIndex(values, scaleObject) {
  var scaleFn = getScaleFnFromScaleObject(scaleObject);
  var result = 0;
  if (scaleFn) {
    var nextValue = void 0;
    var currentValue = scaleFn(values[0]);
    var distance = Infinity;
    var nextDistance = void 0;
    for (var i = 1; i < values.length; i++) {
      nextValue = scaleFn(values[i]);
      nextDistance = Math.abs(nextValue - currentValue);
      if (nextDistance < distance) {
        distance = nextDistance;
        result = i;
      }
      currentValue = nextValue;
    }
  }
  return result;
}
function addInvertFunctionToOrdinalScaleObject(scale) {
  if (scale.invert) {
    return;
  }
  scale.invert = function invert(value2) {
    var _scale$range = scale.range(), _scale$range2 = _slicedToArray2(_scale$range, 2), lower = _scale$range2[0], upper = _scale$range2[1];
    var start = Math.min(lower, upper);
    var stop = Math.max(lower, upper);
    if (value2 < start + scale.padding() * scale.step()) {
      return scale.domain()[0];
    }
    if (value2 > stop - scale.padding() * scale.step()) {
      return scale.domain()[scale.domain().length - 1];
    }
    var index = Math.floor((value2 - start - scale.padding() * scale.step()) / scale.step());
    return scale.domain()[index];
  };
}
function getScaleFnFromScaleObject(scaleObject) {
  if (!scaleObject) {
    return null;
  }
  var type = scaleObject.type, domain = scaleObject.domain, range = scaleObject.range;
  var modDomain = domain[0] === domain[1] ? domain[0] === 0 ? [-1, 0] : [-domain[0], domain[0]] : domain;
  if (type === LITERAL_SCALE_TYPE) {
    return literalScale(range[0]);
  }
  var scale = SCALE_FUNCTIONS[type]().domain(modDomain).range(range);
  if (type === ORDINAL_SCALE_TYPE) {
    scale.padding(0.5);
    addInvertFunctionToOrdinalScaleObject(scale);
  }
  return scale;
}
function getDomainByAccessor(allData, accessor, accessor0, type) {
  var domain = void 0;
  var values = allData.reduce(function(data, d) {
    var value2 = accessor(d);
    var value0 = accessor0(d);
    if (_isDefined(value2)) {
      data.push(value2);
    }
    if (_isDefined(value0)) {
      data.push(value0);
    }
    return data;
  }, []);
  if (!values.length) {
    return [];
  }
  if (type !== ORDINAL_SCALE_TYPE && type !== CATEGORY_SCALE_TYPE) {
    domain = extent_default(values);
  } else {
    domain = set_default(values).values();
  }
  return domain;
}
function _createScaleObjectForValue(attr, value2, type, accessor, accessor0) {
  if (type === LITERAL_SCALE_TYPE) {
    return {
      type: LITERAL_SCALE_TYPE,
      domain: [],
      range: [value2],
      distance: 0,
      attr,
      baseValue: void 0,
      isValue: true,
      accessor,
      accessor0
    };
  }
  if (typeof value2 === "undefined") {
    return null;
  }
  return {
    type: CATEGORY_SCALE_TYPE,
    range: [value2],
    domain: [],
    distance: 0,
    attr,
    baseValue: void 0,
    isValue: true,
    accessor,
    accessor0
  };
}
function _createScaleObjectForFunction(_ref) {
  var domain = _ref.domain, range = _ref.range, type = _ref.type, distance = _ref.distance, attr = _ref.attr, baseValue = _ref.baseValue, accessor = _ref.accessor, accessor0 = _ref.accessor0;
  return {
    domain,
    range,
    type,
    distance,
    attr,
    baseValue,
    isValue: false,
    accessor,
    accessor0
  };
}
function _collectScaleObjectFromProps(props, attr) {
  var value2 = props[attr], fallbackValue = props["_" + attr + "Value"], range = props[attr + "Range"], _props$ = props[attr + "Distance"], distance = _props$ === void 0 ? 0 : _props$, baseValue = props[attr + "BaseValue"], _props$2 = props[attr + "Type"], type = _props$2 === void 0 ? LINEAR_SCALE_TYPE : _props$2, noFallBack = props[attr + "NoFallBack"], _props$3 = props["get" + toTitleCase(attr)], accessor = _props$3 === void 0 ? function(d) {
    return d[attr];
  } : _props$3, _props$4 = props["get" + toTitleCase(attr) + "0"], accessor0 = _props$4 === void 0 ? function(d) {
    return d[attr + "0"];
  } : _props$4;
  var domain = props[attr + "Domain"];
  if (!noFallBack && typeof value2 !== "undefined") {
    return _createScaleObjectForValue(attr, value2, props[attr + "Type"], accessor, accessor0);
  }
  if (typeof baseValue !== "undefined") {
    domain = addValueToArray(domain, baseValue);
  }
  if (!range || !domain || !domain.length) {
    return _createScaleObjectForValue(attr, fallbackValue, props[attr + "Type"], accessor, accessor0);
  }
  return _createScaleObjectForFunction({
    domain,
    range,
    type,
    distance,
    attr,
    baseValue,
    accessor,
    accessor0
  });
}
function _computeLeftDomainAdjustment(values) {
  if (values.length > 1) {
    return (values[1] - values[0]) / 2;
  }
  if (values.length === 1) {
    return values[0] - 0.5;
  }
  return 0;
}
function _computeRightDomainAdjustment(values) {
  if (values.length > 1) {
    return (values[values.length - 1] - values[values.length - 2]) / 2;
  }
  if (values.length === 1) {
    return values[0] - 0.5;
  }
  return 0;
}
function _computeScaleDistance(values, domain, bestDistIndex, scaleFn) {
  if (values.length > 1) {
    var i = Math.max(bestDistIndex, 1);
    return Math.abs(scaleFn(values[i]) - scaleFn(values[i - 1]));
  }
  if (values.length === 1) {
    return Math.abs(scaleFn(domain[1]) - scaleFn(domain[0]));
  }
  return 0;
}
function _normalizeValues(data, values, accessor0, type) {
  if (type === TIME_SCALE_TYPE && values.length === 1) {
    var attr0 = accessor0(data[0]);
    return [attr0].concat(_toConsumableArray(values));
  }
  return values;
}
function _getScaleDistanceAndAdjustedDomain(data, scaleObject) {
  var domain = scaleObject.domain, type = scaleObject.type, accessor = scaleObject.accessor, accessor0 = scaleObject.accessor0;
  var uniqueValues = getUniquePropertyValues(data, accessor);
  var values = _normalizeValues(data, uniqueValues, accessor0, type);
  var index = _getSmallestDistanceIndex(values, scaleObject);
  var adjustedDomain = [].concat(domain);
  adjustedDomain[0] -= _computeLeftDomainAdjustment(values);
  adjustedDomain[domain.length - 1] += _computeRightDomainAdjustment(values);
  if (type === LOG_SCALE_TYPE && domain[0] <= 0) {
    adjustedDomain[0] = Math.min(domain[1] / 10, 1);
  }
  var adjustedScaleFn = getScaleFnFromScaleObject(_extends2({}, scaleObject, {
    domain: adjustedDomain
  }));
  var distance = _computeScaleDistance(values, adjustedDomain, index, adjustedScaleFn);
  return {
    domain0: adjustedDomain[0],
    domainN: adjustedDomain[adjustedDomain.length - 1],
    distance
  };
}
function _isScaleAdjustmentPossible(props, scaleObject) {
  var attr = scaleObject.attr;
  var _props$_adjustBy = props._adjustBy, adjustBy = _props$_adjustBy === void 0 ? [] : _props$_adjustBy, _props$_adjustWhat = props._adjustWhat, adjustWhat = _props$_adjustWhat === void 0 ? [] : _props$_adjustWhat;
  return adjustWhat.length && adjustBy.length && adjustBy.indexOf(attr) !== -1;
}
function _adjustContinuousScale(props, scaleObject) {
  var allSeriesData = props._allData, _props$_adjustWhat2 = props._adjustWhat, adjustWhat = _props$_adjustWhat2 === void 0 ? [] : _props$_adjustWhat2;
  var domainLength = scaleObject.domain.length;
  var domain = scaleObject.domain;
  var scaleDomain0 = domain[0];
  var scaleDomainN = domain[domainLength - 1];
  var scaleDistance = scaleObject.distance;
  allSeriesData.forEach(function(data, index) {
    if (adjustWhat.indexOf(index) === -1) {
      return;
    }
    if (data && data.length) {
      var _getScaleDistanceAndA = _getScaleDistanceAndAdjustedDomain(data, scaleObject), domain0 = _getScaleDistanceAndA.domain0, domainN = _getScaleDistanceAndA.domainN, distance = _getScaleDistanceAndA.distance;
      scaleDomain0 = Math.min(scaleDomain0, domain0);
      scaleDomainN = Math.max(scaleDomainN, domainN);
      scaleDistance = Math.max(scaleDistance, distance);
    }
  });
  scaleObject.domain = [scaleDomain0].concat(_toConsumableArray(domain.slice(1, -1)), [scaleDomainN]);
  scaleObject.distance = scaleDistance;
  return scaleObject;
}
function _adjustCategoricalScale(scaleObject) {
  var scaleFn = getScaleFnFromScaleObject(scaleObject);
  var domain = scaleObject.domain, range = scaleObject.range;
  if (domain.length > 1) {
    scaleObject.distance = Math.abs(scaleFn(domain[1]) - scaleFn(domain[0]));
  } else {
    scaleObject.distance = Math.abs(range[1] - range[0]);
  }
  return scaleObject;
}
function getScaleObjectFromProps(props, attr) {
  var scaleObject = _collectScaleObjectFromProps(props, attr);
  if (!scaleObject) {
    return null;
  }
  if (!_isScaleAdjustmentPossible(props, scaleObject)) {
    return scaleObject;
  }
  var type = scaleObject.type;
  if (type === ORDINAL_SCALE_TYPE || type === CATEGORY_SCALE_TYPE) {
    return _adjustCategoricalScale(scaleObject);
  }
  return _adjustContinuousScale(props, scaleObject);
}
function getAttributeScale(props, attr) {
  var scaleObject = getScaleObjectFromProps(props, attr);
  return getScaleFnFromScaleObject(scaleObject);
}
function _getAttrValue(d, accessor) {
  return accessor(d.data ? d.data : d);
}
function _isDefined(value2) {
  return typeof value2 !== "undefined";
}
function _padDomain(domain, padding) {
  if (!domain) {
    return domain;
  }
  if (isNaN(parseFloat(domain[0])) || isNaN(parseFloat(domain[1]))) {
    return domain;
  }
  var _domain = _slicedToArray2(domain, 2), min2 = _domain[0], max2 = _domain[1];
  var domainPadding = (max2 - min2) * (padding * 0.01);
  return [min2 - domainPadding, max2 + domainPadding];
}
function getAttributeFunctor(props, attr) {
  var scaleObject = getScaleObjectFromProps(props, attr);
  if (scaleObject) {
    var scaleFn = getScaleFnFromScaleObject(scaleObject);
    return function(d) {
      return scaleFn(_getAttrValue(d, scaleObject.accessor));
    };
  }
  return null;
}
function getAttr0Functor(props, attr) {
  var scaleObject = getScaleObjectFromProps(props, attr);
  if (scaleObject) {
    var domain = scaleObject.domain;
    var _scaleObject$baseValu = scaleObject.baseValue, baseValue = _scaleObject$baseValu === void 0 ? domain[0] : _scaleObject$baseValu;
    var scaleFn = getScaleFnFromScaleObject(scaleObject);
    return function(d) {
      var value2 = _getAttrValue(d, scaleObject.accessor0);
      return scaleFn(_isDefined(value2) ? value2 : baseValue);
    };
  }
  return null;
}
function getAttributeValue(props, attr) {
  var scaleObject = getScaleObjectFromProps(props, attr);
  if (scaleObject) {
    if (!scaleObject.isValue && props["_" + attr + "Value"] === void 0) {
      warning("[React-vis] Cannot use data defined " + attr + " for this series type. Using fallback value instead.");
    }
    return props["_" + attr + "Value"] || scaleObject.range[0];
  }
  return null;
}
function getScalePropTypesByAttribute(attr) {
  var _ref2;
  return _ref2 = {}, _defineProperty(_ref2, "_" + attr + "Value", import_prop_types2.default.any), _defineProperty(_ref2, attr + "Domain", import_prop_types2.default.array), _defineProperty(_ref2, "get" + toTitleCase(attr), import_prop_types2.default.func), _defineProperty(_ref2, "get" + toTitleCase(attr) + "0", import_prop_types2.default.func), _defineProperty(_ref2, attr + "Range", import_prop_types2.default.array), _defineProperty(_ref2, attr + "Type", import_prop_types2.default.oneOf(Object.keys(SCALE_FUNCTIONS))), _defineProperty(_ref2, attr + "Distance", import_prop_types2.default.number), _defineProperty(_ref2, attr + "BaseValue", import_prop_types2.default.any), _ref2;
}
function extractScalePropsFromProps(props, attributes) {
  var result = {};
  Object.keys(props).forEach(function(key) {
    var attr = attributes.find(function(a2) {
      var isPlainSet = key.indexOf(a2) === 0;
      var isUnderscoreSet = key.indexOf("_" + a2) === 0;
      var usesGet = key.indexOf("get" + toTitleCase(a2)) === 0;
      return isPlainSet || isUnderscoreSet || usesGet;
    });
    if (!attr) {
      return;
    }
    result[key] = props[key];
  });
  return result;
}
function getMissingScaleProps(props, data, attributes) {
  var result = {};
  attributes.forEach(function(attr) {
    if (!props["get" + toTitleCase(attr)]) {
      result["get" + toTitleCase(attr)] = function(d) {
        return d[attr];
      };
    }
    if (!props["get" + toTitleCase(attr) + "0"]) {
      result["get" + toTitleCase(attr) + "0"] = function(d) {
        return d[attr + "0"];
      };
    }
    if (!props[attr + "Domain"]) {
      result[attr + "Domain"] = getDomainByAccessor(data, props["get" + toTitleCase(attr)] || result["get" + toTitleCase(attr)], props["get" + toTitleCase(attr) + "0"] || result["get" + toTitleCase(attr) + "0"], props[attr + "Type"]);
      if (props[attr + "Padding"]) {
        result[attr + "Domain"] = _padDomain(result[attr + "Domain"], props[attr + "Padding"]);
      }
    }
  });
  return result;
}
function literalScale(defaultValue) {
  function scale(d) {
    if (d === void 0) {
      return defaultValue;
    }
    return d;
  }
  function response() {
    return scale;
  }
  scale.domain = response;
  scale.range = response;
  scale.unknown = response;
  scale.copy = response;
  return scale;
}
function getFontColorFromBackground(background) {
  if (background) {
    return hsl(background).l > 0.57 ? "#222" : "#fff";
  }
  return null;
}
function getXYPlotValues(props, children) {
  var XYPlotScales = XYPLOT_ATTR.reduce(function(prev, attr) {
    var domain = props[attr + "Domain"], range = props[attr + "Range"], type = props[attr + "Type"];
    if (domain && range && type) {
      return _extends2({}, prev, _defineProperty({}, attr, SCALE_FUNCTIONS[type]().domain(domain).range(range)));
    }
    return prev;
  }, {});
  return children.map(function(child) {
    return XYPLOT_ATTR.reduce(function(prev, attr) {
      if (child.props && child.props[attr] !== void 0) {
        var scaleInput = child.props[attr];
        var scale = XYPlotScales[attr];
        var fallbackValue = scale ? scale(scaleInput) : scaleInput;
        return _extends2({}, prev, _defineProperty({}, "_" + attr + "Value", fallbackValue));
      }
      return prev;
    }, {});
  });
}
var OPTIONAL_SCALE_PROPS = ["Padding"];
var OPTIONAL_SCALE_PROPS_REGS = OPTIONAL_SCALE_PROPS.map(function(str) {
  return new RegExp(str + "$", "i");
});
function getOptionalScaleProps(props) {
  return Object.keys(props).reduce(function(acc, prop) {
    var propIsNotOptional = OPTIONAL_SCALE_PROPS_REGS.every(function(reg) {
      return !prop.match(reg);
    });
    if (propIsNotOptional) {
      return acc;
    }
    acc[prop] = props[prop];
    return acc;
  }, {});
}

// plugins/public/node_modules/react-vis/es/plot/series/abstract-series.js
var _createClass2 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends3 = Object.assign || function(target) {
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
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn2(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var propTypes2 = _extends3({}, getScalePropTypesByAttribute("x"), getScalePropTypesByAttribute("y"), getScalePropTypesByAttribute("size"), getScalePropTypesByAttribute("opacity"), getScalePropTypesByAttribute("color"), {
  width: import_prop_types3.default.number,
  height: import_prop_types3.default.number,
  data: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.object, import_prop_types3.default.array])),
  onValueMouseOver: import_prop_types3.default.func,
  onValueMouseOut: import_prop_types3.default.func,
  onValueClick: import_prop_types3.default.func,
  onValueRightClick: import_prop_types3.default.func,
  onSeriesMouseOver: import_prop_types3.default.func,
  onSeriesMouseOut: import_prop_types3.default.func,
  onSeriesClick: import_prop_types3.default.func,
  onSeriesRightClick: import_prop_types3.default.func,
  onNearestX: import_prop_types3.default.func,
  onNearestXY: import_prop_types3.default.func,
  style: import_prop_types3.default.object,
  animation: AnimationPropType,
  stack: import_prop_types3.default.bool
});
var defaultProps = {
  className: "",
  stack: false,
  style: {}
};
var AbstractSeries = function(_PureComponent) {
  _inherits2(AbstractSeries2, _PureComponent);
  function AbstractSeries2() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck2(this, AbstractSeries2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn2(this, (_ref = AbstractSeries2.__proto__ || Object.getPrototypeOf(AbstractSeries2)).call.apply(_ref, [this].concat(args))), _this), _this._seriesClickHandler = function(event) {
      var onSeriesClick = _this.props.onSeriesClick;
      if (onSeriesClick) {
        onSeriesClick({ event });
      }
    }, _this._seriesMouseOutHandler = function(event) {
      var onSeriesMouseOut = _this.props.onSeriesMouseOut;
      if (onSeriesMouseOut) {
        onSeriesMouseOut({ event });
      }
    }, _this._seriesMouseOverHandler = function(event) {
      var onSeriesMouseOver = _this.props.onSeriesMouseOver;
      if (onSeriesMouseOver) {
        onSeriesMouseOver({ event });
      }
    }, _this._seriesRightClickHandler = function(event) {
      var onSeriesRightClick = _this.props.onSeriesRightClick;
      if (onSeriesRightClick) {
        onSeriesRightClick({ event });
      }
    }, _this._valueClickHandler = function(d, event) {
      var _this$props = _this.props, onValueClick = _this$props.onValueClick, onSeriesClick = _this$props.onSeriesClick;
      if (onValueClick) {
        onValueClick(d, { event });
      }
      if (onSeriesClick) {
        onSeriesClick({ event });
      }
    }, _this._valueMouseOutHandler = function(d, event) {
      var _this$props2 = _this.props, onValueMouseOut = _this$props2.onValueMouseOut, onSeriesMouseOut = _this$props2.onSeriesMouseOut;
      if (onValueMouseOut) {
        onValueMouseOut(d, { event });
      }
      if (onSeriesMouseOut) {
        onSeriesMouseOut({ event });
      }
    }, _this._valueMouseOverHandler = function(d, event) {
      var _this$props3 = _this.props, onValueMouseOver = _this$props3.onValueMouseOver, onSeriesMouseOver = _this$props3.onSeriesMouseOver;
      if (onValueMouseOver) {
        onValueMouseOver(d, { event });
      }
      if (onSeriesMouseOver) {
        onSeriesMouseOver({ event });
      }
    }, _this._valueRightClickHandler = function(d, event) {
      var _this$props4 = _this.props, onValueRightClick = _this$props4.onValueRightClick, onSeriesRightClick = _this$props4.onSeriesRightClick;
      if (onValueRightClick) {
        onValueRightClick(d, { event });
      }
      if (onSeriesRightClick) {
        onSeriesRightClick({ event });
      }
    }, _temp), _possibleConstructorReturn2(_this, _ret);
  }
  _createClass2(AbstractSeries2, [{
    key: "onParentMouseMove",
    value: function onParentMouseMove(event) {
      var _props = this.props, onNearestX = _props.onNearestX, onNearestXY = _props.onNearestXY, data = _props.data;
      if (!onNearestX && !onNearestXY || !data) {
        return;
      }
      if (onNearestXY) {
        this._handleNearestXY(event);
      } else {
        this._handleNearestX(event);
      }
    }
  }, {
    key: "onParentTouchMove",
    value: function onParentTouchMove(e) {
      e.preventDefault();
      this.onParentMouseMove(e);
    }
  }, {
    key: "onParentTouchStart",
    value: function onParentTouchStart(e) {
      e.preventDefault();
    }
  }, {
    key: "_getAttr0Functor",
    value: function _getAttr0Functor(attr) {
      return getAttr0Functor(this.props, attr);
    }
  }, {
    key: "_getAttributeFunctor",
    value: function _getAttributeFunctor(attr) {
      return getAttributeFunctor(this.props, attr);
    }
  }, {
    key: "_getAttributeValue",
    value: function _getAttributeValue(attr) {
      return getAttributeValue(this.props, attr);
    }
  }, {
    key: "_getScaleDistance",
    value: function _getScaleDistance(attr) {
      var scaleObject = getScaleObjectFromProps(this.props, attr);
      return scaleObject ? scaleObject.distance : 0;
    }
  }, {
    key: "_getXYCoordinateInContainer",
    value: function _getXYCoordinateInContainer(event) {
      var _props2 = this.props, _props2$marginTop = _props2.marginTop, marginTop = _props2$marginTop === void 0 ? 0 : _props2$marginTop, _props2$marginLeft = _props2.marginLeft, marginLeft = _props2$marginLeft === void 0 ? 0 : _props2$marginLeft;
      var evt = event.nativeEvent, currentTarget = event.currentTarget;
      var rect = currentTarget.getBoundingClientRect();
      var x3 = evt.clientX;
      var y3 = evt.clientY;
      if (evt.type === "touchmove") {
        x3 = evt.touches[0].pageX;
        y3 = evt.touches[0].pageY;
      }
      return {
        x: x3 - rect.left - currentTarget.clientLeft - marginLeft,
        y: y3 - rect.top - currentTarget.clientTop - marginTop
      };
    }
  }, {
    key: "_handleNearestX",
    value: function _handleNearestX(event) {
      var _props3 = this.props, onNearestX = _props3.onNearestX, data = _props3.data;
      var minDistance = Number.POSITIVE_INFINITY;
      var value2 = null;
      var valueIndex = null;
      var coordinate = this._getXYCoordinateInContainer(event);
      var xScaleFn = this._getAttributeFunctor("x");
      data.forEach(function(item, i) {
        var currentCoordinate = xScaleFn(item);
        var newDistance = Math.abs(coordinate.x - currentCoordinate);
        if (newDistance < minDistance) {
          minDistance = newDistance;
          value2 = item;
          valueIndex = i;
        }
      });
      if (!value2) {
        return;
      }
      onNearestX(value2, {
        innerX: xScaleFn(value2),
        index: valueIndex,
        event: event.nativeEvent
      });
    }
  }, {
    key: "_handleNearestXY",
    value: function _handleNearestXY(event) {
      var _props4 = this.props, onNearestXY = _props4.onNearestXY, data = _props4.data;
      var coordinate = this._getXYCoordinateInContainer(event);
      var xScaleFn = this._getAttributeFunctor("x");
      var yScaleFn = this._getAttributeFunctor("y");
      var voronoiInstance = voronoi_default().x(xScaleFn).y(yScaleFn);
      var foundPoint = voronoiInstance(data).find(coordinate.x, coordinate.y);
      var value2 = foundPoint.data;
      if (!value2) {
        return;
      }
      onNearestXY(value2, {
        innerX: foundPoint[0],
        innerY: foundPoint[1],
        index: foundPoint.index,
        event: event.nativeEvent
      });
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig() {
      return {};
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return true;
    }
  }]);
  return AbstractSeries2;
}(import_react5.PureComponent);
AbstractSeries.displayName = "AbstractSeries";
AbstractSeries.propTypes = propTypes2;
AbstractSeries.defaultProps = defaultProps;
var abstract_series_default = AbstractSeries;

// plugins/public/node_modules/react-vis/es/plot/series/arc-series.js
var import_react7 = __toESM(require("react"));
var import_prop_types4 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/utils/series-utils.js
var import_react6 = __toESM(require("react"));

// plugins/public/node_modules/react-vis/es/theme.js
var DISCRETE_COLOR_RANGE = ["#12939A", "#79C7E3", "#1A3177", "#FF9833", "#EF5D28"];
var EXTENDED_DISCRETE_COLOR_RANGE = ["#19CDD7", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77", "#4DC19C", "#776E57", "#12939A", "#17B8BE", "#F6D18A", "#B7885E", "#FFCB99", "#F89570", "#829AE3", "#E79FD5", "#1E96BE", "#89DAC1", "#B3AD9E"];
var CONTINUOUS_COLOR_RANGE = ["#EF5D28", "#FF9833"];
var SIZE_RANGE = [1, 10];
var OPACITY_TYPE = "literal";
var DEFAULT_OPACITY = 1;
var DEFAULT_SIZE = 5;
var DEFAULT_COLOR = DISCRETE_COLOR_RANGE[0];

// plugins/public/node_modules/react-vis/es/utils/series-utils.js
var _extends4 = Object.assign || function(target) {
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
function _defineProperty2(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function isSeriesChild(child) {
  var prototype = child.type.prototype;
  return prototype instanceof abstract_series_default;
}
function getSeriesChildren(children) {
  return import_react6.default.Children.toArray(children).filter(function(child) {
    return child && isSeriesChild(child);
  });
}
function collectSeriesTypesInfo(children) {
  var result = {};
  children.filter(isSeriesChild).forEach(function(child) {
    var displayName = child.type.displayName;
    var cluster = child.props.cluster;
    if (!result[displayName]) {
      result[displayName] = {
        sameTypeTotal: 0,
        sameTypeIndex: 0,
        clusters: /* @__PURE__ */ new Set()
      };
    }
    result[displayName].clusters.add(cluster);
    result[displayName].sameTypeTotal++;
  });
  return result;
}
function seriesHasAngleRadius() {
  var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  if (!data) {
    return false;
  }
  return data.some(function(row) {
    return row.radius && row.angle;
  });
}
function prepareData(data) {
  if (!seriesHasAngleRadius(data)) {
    return data;
  }
  return data.map(function(row) {
    return _extends4({}, row, {
      x: row.radius * Math.cos(row.angle),
      y: row.radius * Math.sin(row.angle)
    });
  });
}
function getStackedData(children, attr) {
  var areSomeSeriesStacked = children.some(function(series) {
    return series && series.props.stack;
  });
  var latestAttrPositions = {};
  return children.reduce(function(accumulator, series, seriesIndex) {
    if (!series) {
      accumulator.push(null);
      return accumulator;
    }
    var seriesType = series.type.displayName;
    var _series$props = series.props, data = _series$props.data, _series$props$cluster = _series$props.cluster, cluster = _series$props$cluster === void 0 ? "default" : _series$props$cluster, stack = _series$props.stack;
    var preppedData = prepareData(data, attr);
    if (!attr || !preppedData || !preppedData.length || areSomeSeriesStacked && !stack) {
      accumulator.push(preppedData);
      return accumulator;
    }
    var attr0 = attr + "0";
    var baseAttr = attr === "y" ? "x" : "y";
    accumulator.push(preppedData.map(function(d, dIndex) {
      var _extends210, _latestAttrPositions$2;
      if (!latestAttrPositions[cluster]) {
        latestAttrPositions[cluster] = {};
      }
      if (!latestAttrPositions[cluster][seriesType]) {
        latestAttrPositions[cluster][seriesType] = {};
      }
      var prevD = latestAttrPositions[cluster][seriesType][d[baseAttr]];
      if (!prevD) {
        var _latestAttrPositions$;
        latestAttrPositions[cluster][seriesType][d[baseAttr]] = (_latestAttrPositions$ = {}, _defineProperty2(_latestAttrPositions$, attr0, d[attr0]), _defineProperty2(_latestAttrPositions$, attr, d[attr]), _latestAttrPositions$);
        return _extends4({}, d);
      }
      var nextD = _extends4({}, d, (_extends210 = {}, _defineProperty2(_extends210, attr0, prevD[attr]), _defineProperty2(_extends210, attr, prevD[attr] + d[attr] - (d[attr0] || 0)), _extends210));
      latestAttrPositions[cluster][seriesType][d[baseAttr]] = (_latestAttrPositions$2 = {}, _defineProperty2(_latestAttrPositions$2, attr0, nextD[attr0]), _defineProperty2(_latestAttrPositions$2, attr, nextD[attr]), _latestAttrPositions$2);
      return nextD;
    }));
    return accumulator;
  }, []);
}
function getSeriesPropsFromChildren(children) {
  var result = [];
  var seriesTypesInfo = collectSeriesTypesInfo(children);
  var seriesIndex = 0;
  var _opacityValue = DEFAULT_OPACITY;
  children.forEach(function(child) {
    var props = void 0;
    if (isSeriesChild(child)) {
      var seriesTypeInfo = seriesTypesInfo[child.type.displayName];
      var _colorValue = DISCRETE_COLOR_RANGE[seriesIndex % DISCRETE_COLOR_RANGE.length];
      props = _extends4({}, seriesTypeInfo, {
        seriesIndex,
        _colorValue,
        _opacityValue
      });
      seriesTypeInfo.sameTypeIndex++;
      seriesIndex++;
      if (child.props.cluster) {
        props.cluster = child.props.cluster;
        props.clusters = Array.from(seriesTypeInfo.clusters);
        props.sameTypeTotal = props.clusters.length;
        props.sameTypeIndex = props.clusters.indexOf(child.props.cluster);
      }
    }
    result.push(props);
  });
  return result;
}
function getRadialDomain(data) {
  return data.reduce(function(res, row) {
    return Math.max(row.radius, res);
  }, 0);
}
var ANIMATED_SERIES_PROPS = ["xRange", "xDomain", "x", "yRange", "yDomain", "y", "colorRange", "colorDomain", "color", "opacityRange", "opacityDomain", "opacity", "strokeRange", "strokeDomain", "stroke", "fillRange", "fillDomain", "fill", "width", "height", "marginLeft", "marginTop", "marginRight", "marginBottom", "data", "angleDomain", "angleRange", "angle", "radiusDomain", "radiusRange", "radius", "innerRadiusDomain", "innerRadiusRange", "innerRadius"];
function getStackParams(props) {
  var _stackBy = props._stackBy, valuePosAttr = props.valuePosAttr, cluster = props.cluster;
  var _props$sameTypeTotal = props.sameTypeTotal, sameTypeTotal = _props$sameTypeTotal === void 0 ? 1 : _props$sameTypeTotal, _props$sameTypeIndex = props.sameTypeIndex, sameTypeIndex = _props$sameTypeIndex === void 0 ? 0 : _props$sameTypeIndex;
  if (_stackBy === valuePosAttr && !cluster) {
    sameTypeTotal = 1;
    sameTypeIndex = 0;
  }
  return { sameTypeTotal, sameTypeIndex };
}

// plugins/public/node_modules/d3-shape/src/index.js
var src_exports = {};
__export(src_exports, {
  arc: () => arc_default,
  area: () => area_default,
  areaRadial: () => areaRadial_default,
  curveBasis: () => basis_default2,
  curveBasisClosed: () => basisClosed_default2,
  curveBasisOpen: () => basisOpen_default,
  curveBundle: () => bundle_default,
  curveCardinal: () => cardinal_default,
  curveCardinalClosed: () => cardinalClosed_default,
  curveCardinalOpen: () => cardinalOpen_default,
  curveCatmullRom: () => catmullRom_default,
  curveCatmullRomClosed: () => catmullRomClosed_default,
  curveCatmullRomOpen: () => catmullRomOpen_default,
  curveLinear: () => linear_default,
  curveLinearClosed: () => linearClosed_default,
  curveMonotoneX: () => monotoneX,
  curveMonotoneY: () => monotoneY,
  curveNatural: () => natural_default,
  curveStep: () => step_default,
  curveStepAfter: () => stepAfter,
  curveStepBefore: () => stepBefore,
  line: () => line_default,
  lineRadial: () => lineRadial_default,
  linkHorizontal: () => linkHorizontal,
  linkRadial: () => linkRadial,
  linkVertical: () => linkVertical,
  pie: () => pie_default,
  pointRadial: () => pointRadial_default,
  radialArea: () => areaRadial_default,
  radialLine: () => lineRadial_default,
  stack: () => stack_default,
  stackOffsetDiverging: () => diverging_default,
  stackOffsetExpand: () => expand_default,
  stackOffsetNone: () => none_default,
  stackOffsetSilhouette: () => silhouette_default,
  stackOffsetWiggle: () => wiggle_default,
  stackOrderAppearance: () => appearance_default,
  stackOrderAscending: () => ascending_default2,
  stackOrderDescending: () => descending_default3,
  stackOrderInsideOut: () => insideOut_default,
  stackOrderNone: () => none_default2,
  stackOrderReverse: () => reverse_default,
  symbol: () => symbol_default,
  symbolCircle: () => circle_default,
  symbolCross: () => cross_default2,
  symbolDiamond: () => diamond_default,
  symbolSquare: () => square_default,
  symbolStar: () => star_default,
  symbolTriangle: () => triangle_default,
  symbolWye: () => wye_default,
  symbols: () => symbols
});

// plugins/public/node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon3 = 1e-6;
var tauEpsilon = tau - epsilon3;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x3, y3) {
    this._ += "M" + (this._x0 = this._x1 = +x3) + "," + (this._y0 = this._y1 = +y3);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x3, y3) {
    this._ += "L" + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  quadraticCurveTo: function(x12, y12, x3, y3) {
    this._ += "Q" + +x12 + "," + +y12 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x3, y3) {
    this._ += "C" + +x12 + "," + +y12 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x12, y12, x22, y22, r) {
    x12 = +x12, y12 = +y12, x22 = +x22, y22 = +y22, r = +r;
    var x05 = this._x1, y05 = this._y1, x21 = x22 - x12, y21 = y22 - y12, x01 = x05 - x12, y01 = y05 - y12, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else if (!(l01_2 > epsilon3))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon3) || !r) {
      this._ += "L" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else {
      var x20 = x22 - x05, y20 = y22 - y05, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon3) {
        this._ += "L" + (x12 + t01 * x01) + "," + (y12 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x12 + t21 * x21) + "," + (this._y1 = y12 + t21 * y21);
    }
  },
  arc: function(x3, y3, r, a0, a1, ccw) {
    x3 = +x3, y3 = +y3, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x05 = x3 + dx, y05 = y3 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x05 + "," + y05;
    } else if (Math.abs(this._x1 - x05) > epsilon3 || Math.abs(this._y1 - y05) > epsilon3) {
      this._ += "L" + x05 + "," + y05;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x3 - dx) + "," + (y3 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x05) + "," + (this._y1 = y05);
    } else if (da > epsilon3) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x3 + r * Math.cos(a1)) + "," + (this._y1 = y3 + r * Math.sin(a1));
    }
  },
  rect: function(x3, y3, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x3) + "," + (this._y0 = this._y1 = +y3) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// plugins/public/node_modules/d3-shape/src/constant.js
function constant_default5(x3) {
  return function constant2() {
    return x3;
  };
}

// plugins/public/node_modules/d3-shape/src/math.js
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt2 = Math.sqrt;
var epsilon4 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;
function acos(x3) {
  return x3 > 1 ? 0 : x3 < -1 ? pi2 : Math.acos(x3);
}
function asin(x3) {
  return x3 >= 1 ? halfPi : x3 <= -1 ? -halfPi : Math.asin(x3);
}

// plugins/public/node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x05, y05, x12, y12, x22, y22, x3, y3) {
  var x10 = x12 - x05, y10 = y12 - y05, x32 = x3 - x22, y32 = y3 - y22, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon4)
    return;
  t = (x32 * (y05 - y22) - y32 * (x05 - x22)) / t;
  return [x05 + t * x10, y05 + t * y10];
}
function cornerTangents(x05, y05, x12, y12, r1, rc, cw) {
  var x01 = x05 - x12, y01 = y05 - y12, lo = (cw ? rc : -rc) / sqrt2(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x05 + ox, y11 = y05 + oy, x10 = x12 + ox, y10 = y12 + oy, x004 = (x11 + x10) / 2, y004 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt2(max(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x004, dy0 = cy0 - y004, dx1 = cx1 - x004, dy1 = cy1 - y004;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default5(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path_default();
    if (r1 < r0)
      r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon4))
      context.moveTo(0, 0);
    else if (da > tau2 - epsilon4) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon4) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon4 && (padRadius ? +padRadius.apply(this, arguments) : sqrt2(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t02, t12;
      if (rp > epsilon4) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon4)
          p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon4)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon4) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x004 = r0 * cos(a00), y004 = r0 * sin(a00), oc;
        if (da < pi2 && (oc = intersect(x01, y01, x004, y004, x11, y11, x10, y10))) {
          var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt2(ax * ax + ay * ay) * sqrt2(bx * bx + by * by))) / 2), lc = sqrt2(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }
      if (!(da1 > epsilon4))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon4) {
        t02 = cornerTangents(x004, y004, x01, y01, r1, rc1, cw);
        t12 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc1 < rc)
          context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r1, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), !cw);
          context.arc(t12.cx, t12.cy, rc1, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon4) || !(da0 > epsilon4))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon4) {
        t02 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t12 = cornerTangents(x01, y01, x004, y004, r0, -rc0, cw);
        context.lineTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc0 < rc)
          context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r0, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), cw);
          context.arc(t12.cx, t12.cy, rc0, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi2 / 2;
    return [cos(a2) * r, sin(a2) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default5(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default5(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default5(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default5(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default5(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default5(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default5(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

// plugins/public/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x3, y3);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// plugins/public/node_modules/d3-shape/src/point.js
function x2(p) {
  return p[0];
}
function y2(p) {
  return p[1];
}

// plugins/public/node_modules/d3-shape/src/line.js
function line_default() {
  var x3 = x2, y3 = y2, defined = constant_default5(true), context = null, curve = linear_default, output = null;
  function line(data) {
    var i, n = data.length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x3(d, i, data), +y3(d, i, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default5(+_), line) : x3;
  };
  line.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default5(+_), line) : y3;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default5(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// plugins/public/node_modules/d3-shape/src/area.js
function area_default() {
  var x05 = x2, x12 = null, y05 = constant_default5(0), y12 = y2, defined = constant_default5(true), context = null, curve = linear_default, output = null;
  function area(data) {
    var i, j, k2, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x05(d, i, data), y0z[i] = +y05(d, i, data);
        output.point(x12 ? +x12(d, i, data) : x0z[i], y12 ? +y12(d, i, data) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x05 = typeof _ === "function" ? _ : constant_default5(+_), x12 = null, area) : x05;
  };
  area.x0 = function(_) {
    return arguments.length ? (x05 = typeof _ === "function" ? _ : constant_default5(+_), area) : x05;
  };
  area.x1 = function(_) {
    return arguments.length ? (x12 = _ == null ? null : typeof _ === "function" ? _ : constant_default5(+_), area) : x12;
  };
  area.y = function(_) {
    return arguments.length ? (y05 = typeof _ === "function" ? _ : constant_default5(+_), y12 = null, area) : y05;
  };
  area.y0 = function(_) {
    return arguments.length ? (y05 = typeof _ === "function" ? _ : constant_default5(+_), area) : y05;
  };
  area.y1 = function(_) {
    return arguments.length ? (y12 = _ == null ? null : typeof _ === "function" ? _ : constant_default5(+_), area) : y12;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x05).y(y05);
  };
  area.lineY1 = function() {
    return arealine().x(x05).y(y12);
  };
  area.lineX1 = function() {
    return arealine().x(x12).y(y05);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default5(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// plugins/public/node_modules/d3-shape/src/descending.js
function descending_default2(a2, b) {
  return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// plugins/public/node_modules/d3-shape/src/identity.js
function identity_default3(d) {
  return d;
}

// plugins/public/node_modules/d3-shape/src/pie.js
function pie_default() {
  var value2 = identity_default3, sortValues = descending_default2, sort = null, startAngle = constant_default5(0), endAngle = constant_default5(tau2), padAngle = constant_default5(0);
  function pie(data) {
    var i, n = data.length, j, k2, sum2 = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau2, Math.max(-tau2, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value2(data[i], i, data)) > 0) {
        sum2 += v;
      }
    }
    if (sortValues != null)
      index.sort(function(i2, j2) {
        return sortValues(arcs[i2], arcs[j2]);
      });
    else if (sort != null)
      index.sort(function(i2, j2) {
        return sort(data[i2], data[j2]);
      });
    for (i = 0, k2 = sum2 ? (da - n * pa) / sum2 : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k2 : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value2 = typeof _ === "function" ? _ : constant_default5(+_), pie) : value2;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default5(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default5(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default5(+_), pie) : padAngle;
  };
  return pie;
}

// plugins/public/node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}

// plugins/public/node_modules/d3-shape/src/lineRadial.js
function lineRadial(l) {
  var c2 = l.curve;
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  l.curve = function(_) {
    return arguments.length ? c2(curveRadial(_)) : c2()._curve;
  };
  return l;
}
function lineRadial_default() {
  return lineRadial(line_default().curve(curveRadialLinear));
}

// plugins/public/node_modules/d3-shape/src/areaRadial.js
function areaRadial_default() {
  var a2 = area_default().curve(curveRadialLinear), c2 = a2.curve, x05 = a2.lineX0, x12 = a2.lineX1, y05 = a2.lineY0, y12 = a2.lineY1;
  a2.angle = a2.x, delete a2.x;
  a2.startAngle = a2.x0, delete a2.x0;
  a2.endAngle = a2.x1, delete a2.x1;
  a2.radius = a2.y, delete a2.y;
  a2.innerRadius = a2.y0, delete a2.y0;
  a2.outerRadius = a2.y1, delete a2.y1;
  a2.lineStartAngle = function() {
    return lineRadial(x05());
  }, delete a2.lineX0;
  a2.lineEndAngle = function() {
    return lineRadial(x12());
  }, delete a2.lineX1;
  a2.lineInnerRadius = function() {
    return lineRadial(y05());
  }, delete a2.lineY0;
  a2.lineOuterRadius = function() {
    return lineRadial(y12());
  }, delete a2.lineY1;
  a2.curve = function(_) {
    return arguments.length ? c2(curveRadial(_)) : c2()._curve;
  };
  return a2;
}

// plugins/public/node_modules/d3-shape/src/pointRadial.js
function pointRadial_default(x3, y3) {
  return [(y3 = +y3) * Math.cos(x3 -= Math.PI / 2), y3 * Math.sin(x3)];
}

// plugins/public/node_modules/d3-shape/src/array.js
var slice3 = Array.prototype.slice;

// plugins/public/node_modules/d3-shape/src/link/index.js
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link(curve) {
  var source = linkSource, target = linkTarget, x3 = x2, y3 = y2, context = null;
  function link2() {
    var buffer, argv = slice3.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv);
    if (!context)
      context = buffer = path_default();
    curve(context, +x3.apply(this, (argv[0] = s2, argv)), +y3.apply(this, argv), +x3.apply(this, (argv[0] = t, argv)), +y3.apply(this, argv));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  link2.source = function(_) {
    return arguments.length ? (source = _, link2) : source;
  };
  link2.target = function(_) {
    return arguments.length ? (target = _, link2) : target;
  };
  link2.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default5(+_), link2) : x3;
  };
  link2.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default5(+_), link2) : y3;
  };
  link2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, link2) : context;
  };
  return link2;
}
function curveHorizontal(context, x05, y05, x12, y12) {
  context.moveTo(x05, y05);
  context.bezierCurveTo(x05 = (x05 + x12) / 2, y05, x05, y12, x12, y12);
}
function curveVertical(context, x05, y05, x12, y12) {
  context.moveTo(x05, y05);
  context.bezierCurveTo(x05, y05 = (y05 + y12) / 2, x12, y05, x12, y12);
}
function curveRadial2(context, x05, y05, x12, y12) {
  var p0 = pointRadial_default(x05, y05), p1 = pointRadial_default(x05, y05 = (y05 + y12) / 2), p2 = pointRadial_default(x12, y05), p3 = pointRadial_default(x12, y12);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}
function linkHorizontal() {
  return link(curveHorizontal);
}
function linkVertical() {
  return link(curveVertical);
}
function linkRadial() {
  var l = link(curveRadial2);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

// plugins/public/node_modules/d3-shape/src/symbol/circle.js
var circle_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi2);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau2);
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/cross.js
var cross_default2 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw: function(context, size) {
    var y3 = Math.sqrt(size / tan30_2), x3 = y3 * tan30;
    context.moveTo(0, -y3);
    context.lineTo(x3, 0);
    context.lineTo(0, y3);
    context.lineTo(-x3, 0);
    context.closePath();
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = Math.sin(pi2 / 10) / Math.sin(7 * pi2 / 10);
var kx = Math.sin(tau2 / 10) * kr;
var ky = -Math.cos(tau2 / 10) * kr;
var star_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka), x3 = kx * r, y3 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x3, y3);
    for (var i = 1; i < 5; ++i) {
      var a2 = tau2 * i / 5, c2 = Math.cos(a2), s2 = Math.sin(a2);
      context.lineTo(s2 * r, -c2 * r);
      context.lineTo(c2 * x3 - s2 * y3, s2 * x3 + c2 * y3);
    }
    context.closePath();
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw: function(context, size) {
    var w = Math.sqrt(size), x3 = -w / 2;
    context.rect(x3, x3, w, w);
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);
var triangle_default = {
  draw: function(context, size) {
    var y3 = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y3 * 2);
    context.lineTo(-sqrt3 * y3, -y3);
    context.lineTo(sqrt3 * y3, -y3);
    context.closePath();
  }
};

// plugins/public/node_modules/d3-shape/src/symbol/wye.js
var c = -0.5;
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a), x05 = r / 2, y05 = r * k, x12 = x05, y12 = r * k + r, x22 = -x12, y22 = y12;
    context.moveTo(x05, y05);
    context.lineTo(x12, y12);
    context.lineTo(x22, y22);
    context.lineTo(c * x05 - s * y05, s * x05 + c * y05);
    context.lineTo(c * x12 - s * y12, s * x12 + c * y12);
    context.lineTo(c * x22 - s * y22, s * x22 + c * y22);
    context.lineTo(c * x05 + s * y05, c * y05 - s * x05);
    context.lineTo(c * x12 + s * y12, c * y12 - s * x12);
    context.lineTo(c * x22 + s * y22, c * y22 - s * x22);
    context.closePath();
  }
};

// plugins/public/node_modules/d3-shape/src/symbol.js
var symbols = [
  circle_default,
  cross_default2,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
function symbol_default() {
  var type = constant_default5(circle_default), size = constant_default5(64), context = null;
  function symbol() {
    var buffer;
    if (!context)
      context = buffer = path_default();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant_default5(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default5(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}

// plugins/public/node_modules/d3-shape/src/noop.js
function noop_default() {
}

// plugins/public/node_modules/d3-shape/src/curve/basis.js
function point2(that, x3, y3) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x3) / 6,
    (that._y0 + 4 * that._y1 + y3) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function basis_default2(context) {
  return new Basis(context);
}

// plugins/public/node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x3, this._y2 = y3;
        break;
      case 1:
        this._point = 2;
        this._x3 = x3, this._y3 = y3;
        break;
      case 2:
        this._point = 3;
        this._x4 = x3, this._y4 = y3;
        this._context.moveTo((this._x0 + 4 * this._x1 + x3) / 6, (this._y0 + 4 * this._y1 + y3) / 6);
        break;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function basisClosed_default2(context) {
  return new BasisClosed(context);
}

// plugins/public/node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x05 = (this._x0 + 4 * this._x1 + x3) / 6, y05 = (this._y0 + 4 * this._y1 + y3) / 6;
        this._line ? this._context.lineTo(x05, y05) : this._context.moveTo(x05, y05);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// plugins/public/node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, j = x3.length - 1;
    if (j > 0) {
      var x05 = x3[0], y05 = y3[0], dx = x3[j] - x05, dy = y3[j] - y05, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x3[i] + (1 - this._beta) * (x05 + t * dx),
          this._beta * y3[i] + (1 - this._beta) * (y05 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// plugins/public/node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x3, y3) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x3),
    that._y2 + that._k * (that._y1 - y3),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        this._x1 = x3, this._y1 = y3;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// plugins/public/node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// plugins/public/node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// plugins/public/node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x3, y3) {
  var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon4) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y12 = (y12 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon4) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x3 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y3 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// plugins/public/node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// plugins/public/node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// plugins/public/node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point)
      this._context.lineTo(x3, y3);
    else
      this._point = 1, this._context.moveTo(x3, y3);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// plugins/public/node_modules/d3-shape/src/curve/monotone.js
function sign(x3) {
  return x3 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t02, t12) {
  var x05 = that._x0, y05 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x05) / 3;
  that._context.bezierCurveTo(x05 + dx, y05 + dx * t02, x12 - dx, y12 - dx * t12, x12, y12);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    var t12 = NaN;
    x3 = +x3, y3 = +y3;
    if (x3 === this._x1 && y3 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t12 = slope3(this, x3, y3)), t12);
        break;
      default:
        point5(this, this._t0, t12 = slope3(this, x3, y3));
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x3, y3) {
  MonotoneX.prototype.point.call(this, y3, x3);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x3, y3) {
    this._context.moveTo(y3, x3);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x3, y3) {
    this._context.lineTo(y3, x3);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x3, y3) {
    this._context.bezierCurveTo(y12, x12, y22, x22, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// plugins/public/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, n = x3.length;
    if (n) {
      this._line ? this._context.lineTo(x3[0], y3[0]) : this._context.moveTo(x3[0], y3[0]);
      if (n === 2) {
        this._context.lineTo(x3[1], y3[1]);
      } else {
        var px = controlPoints(x3), py = controlPoints(y3);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x3[i1], y3[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
function controlPoints(x3) {
  var i, n = x3.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x3[0] + 2 * x3[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x3[i] + 2 * x3[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x3[n - 1] + x3[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x3[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x3[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// plugins/public/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y3);
          this._context.lineTo(x3, y3);
        } else {
          var x12 = this._x * (1 - this._t) + x3 * this._t;
          this._context.lineTo(x12, this._y);
          this._context.lineTo(x12, y3);
        }
        break;
      }
    }
    this._x = x3, this._y = y3;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// plugins/public/node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n = series.length) > 1))
    return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

// plugins/public/node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0)
    o[n] = n;
  return o;
}

// plugins/public/node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stack_default() {
  var keys = constant_default5([]), order = none_default2, offset = none_default, value2 = stackValue;
  function stack(data) {
    var kz = keys.apply(this, arguments), i, m = data.length, n = kz.length, sz = new Array(n), oz;
    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value2(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }
    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default5(slice3.call(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value2 = typeof _ === "function" ? _ : constant_default5(+_), stack) : value2;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default5(slice3.call(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// plugins/public/node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, n, j = 0, m = series[0].length, y3; j < m; ++j) {
    for (y3 = i = 0; i < n; ++i)
      y3 += series[i][j][1] || 0;
    if (y3)
      for (i = 0; i < n; ++i)
        series[i][j][1] /= y3;
  }
  none_default(series, order);
}

// plugins/public/node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}

// plugins/public/node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y3 = 0; i < n; ++i)
      y3 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y3 / 2;
  }
  none_default(series, order);
}

// plugins/public/node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y3 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y3;
    if (s1)
      y3 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y3;
  none_default(series, order);
}

// plugins/public/node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a2, b) {
    return peaks[a2] - peaks[b];
  });
}
function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n)
    if ((vi = +series[i][1]) > vj)
      vj = vi, j = i;
  return j;
}

// plugins/public/node_modules/d3-shape/src/order/ascending.js
function ascending_default2(series) {
  var sums = series.map(sum);
  return none_default2(series).sort(function(a2, b) {
    return sums[a2] - sums[b];
  });
}
function sum(series) {
  var s2 = 0, i = -1, n = series.length, v;
  while (++i < n)
    if (v = +series[i][1])
      s2 += v;
  return s2;
}

// plugins/public/node_modules/d3-shape/src/order/descending.js
function descending_default3(series) {
  return ascending_default2(series).reverse();
}

// plugins/public/node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n = series.length, i, j, sums = series.map(sum), order = appearance_default(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }
  return bottoms.reverse().concat(tops);
}

// plugins/public/node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// plugins/public/node_modules/react-vis/es/plot/series/arc-series.js
var _createClass3 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends5 = Object.assign || function(target) {
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
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn3(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName = "rv-xy-plot__series rv-xy-plot__series--arc";
var ATTRIBUTES = ["radius", "angle"];
var defaultProps2 = _extends5({}, abstract_series_default.defaultProps, {
  center: { x: 0, y: 0 },
  arcClassName: "",
  className: "",
  style: {},
  padAngle: 0
});
function modifyRow(row) {
  var radius = row.radius, angle = row.angle, angle0 = row.angle0;
  var truedAngle = -1 * angle + Math.PI / 2;
  var truedAngle0 = -1 * angle0 + Math.PI / 2;
  return _extends5({}, row, {
    x: radius * Math.cos(truedAngle),
    y: radius * Math.sin(truedAngle),
    angle: truedAngle,
    angle0: truedAngle0
  });
}
var ArcSeries = function(_AbstractSeries) {
  _inherits3(ArcSeries2, _AbstractSeries);
  function ArcSeries2(props) {
    _classCallCheck3(this, ArcSeries2);
    var _this = _possibleConstructorReturn3(this, (ArcSeries2.__proto__ || Object.getPrototypeOf(ArcSeries2)).call(this, props));
    var scaleProps = _this._getAllScaleProps(props);
    _this.state = { scaleProps };
    return _this;
  }
  _createClass3(ArcSeries2, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ scaleProps: this._getAllScaleProps(nextProps) });
    }
  }, {
    key: "_getAllScaleProps",
    value: function _getAllScaleProps(props) {
      var defaultScaleProps = this._getDefaultScaleProps(props);
      var userScaleProps = extractScalePropsFromProps(props, ATTRIBUTES);
      var missingScaleProps = getMissingScaleProps(_extends5({}, defaultScaleProps, userScaleProps), props.data, ATTRIBUTES);
      return _extends5({}, defaultScaleProps, userScaleProps, missingScaleProps);
    }
  }, {
    key: "_getDefaultScaleProps",
    value: function _getDefaultScaleProps(props) {
      var innerWidth = props.innerWidth, innerHeight = props.innerHeight;
      var radius = Math.min(innerWidth / 2, innerHeight / 2);
      return {
        radiusRange: [0, radius],
        _radiusValue: radius,
        angleType: "literal"
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, arcClassName = _props.arcClassName, animation = _props.animation, className = _props.className, center2 = _props.center, data = _props.data, disableSeries = _props.disableSeries, hideSeries = _props.hideSeries, marginLeft = _props.marginLeft, marginTop = _props.marginTop, padAngle = _props.padAngle, style = _props.style;
      if (!data) {
        return null;
      }
      if (animation) {
        var cloneData = data.map(function(d) {
          return _extends5({}, d);
        });
        return import_react7.default.createElement(
          "g",
          { className: "rv-xy-plot__series--arc__animation-wrapper" },
          import_react7.default.createElement(
            animation_default,
            _extends5({}, this.props, {
              animatedProps: ANIMATED_SERIES_PROPS,
              data: cloneData
            }),
            import_react7.default.createElement(ArcSeries2, _extends5({}, this.props, {
              animation: null,
              disableSeries: true,
              data: cloneData
            }))
          ),
          import_react7.default.createElement(ArcSeries2, _extends5({}, this.props, {
            animation: null,
            hideSeries: true,
            style: { stroke: "red" }
          }))
        );
      }
      var scaleProps = this.state.scaleProps;
      var radiusDomain = scaleProps.radiusDomain;
      var radius = getAttributeFunctor(scaleProps, "radius");
      var radius0 = getAttr0Functor(scaleProps, "radius");
      var angle = getAttributeFunctor(scaleProps, "angle");
      var angle0 = getAttr0Functor(scaleProps, "angle");
      var fill = this._getAttributeFunctor("fill") || this._getAttributeFunctor("color");
      var stroke = this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color");
      var opacity = this._getAttributeFunctor("opacity");
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      return import_react7.default.createElement(
        "g",
        {
          className: predefinedClassName + " " + className,
          onMouseOver: this._seriesMouseOverHandler,
          onMouseOut: this._seriesMouseOutHandler,
          onClick: this._seriesClickHandler,
          onContextMenu: this._seriesRightClickHandler,
          opacity: hideSeries ? 0 : 1,
          pointerEvents: disableSeries ? "none" : "all",
          transform: "translate(" + (marginLeft + x3(center2)) + "," + (marginTop + y3(center2)) + ")"
        },
        data.map(function(row, i) {
          var noRadius = radiusDomain[1] === radiusDomain[0];
          var arcArg = {
            innerRadius: noRadius ? 0 : radius0(row),
            outerRadius: radius(row),
            startAngle: angle0(row) || 0,
            endAngle: angle(row)
          };
          var arcedData = arc_default().padAngle(padAngle);
          var rowStyle = row.style || {};
          var rowClassName = row.className || "";
          return import_react7.default.createElement("path", {
            style: _extends5({
              opacity: opacity && opacity(row),
              stroke: stroke && stroke(row),
              fill: fill && fill(row)
            }, style, rowStyle),
            onClick: function onClick(e) {
              return _this2._valueClickHandler(modifyRow(row), e);
            },
            onContextMenu: function onContextMenu(e) {
              return _this2._valueRightClickHandler(modifyRow(row), e);
            },
            onMouseOver: function onMouseOver(e) {
              return _this2._valueMouseOverHandler(modifyRow(row), e);
            },
            onMouseOut: function onMouseOut(e) {
              return _this2._valueMouseOutHandler(modifyRow(row), e);
            },
            key: i,
            className: predefinedClassName + "-path " + arcClassName + " " + rowClassName,
            d: arcedData(arcArg)
          });
        })
      );
    }
  }]);
  return ArcSeries2;
}(abstract_series_default);
ArcSeries.propTypes = _extends5({}, abstract_series_default.propTypes, getScalePropTypesByAttribute("radius"), getScalePropTypesByAttribute("angle"), {
  center: import_prop_types4.default.shape({
    x: import_prop_types4.default.number,
    y: import_prop_types4.default.number
  }),
  arcClassName: import_prop_types4.default.string,
  padAngle: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.number])
});
ArcSeries.defaultProps = defaultProps2;
ArcSeries.displayName = "ArcSeries";
var arc_series_default = ArcSeries;

// plugins/public/node_modules/react-vis/es/plot/series/area-series.js
var import_react8 = __toESM(require("react"));
var import_prop_types5 = __toESM(require_prop_types());
var _extends6 = Object.assign || function(target) {
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
var _createClass4 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn4(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName2 = "rv-xy-plot__series rv-xy-plot__series--line";
var AreaSeries = function(_AbstractSeries) {
  _inherits4(AreaSeries2, _AbstractSeries);
  function AreaSeries2() {
    _classCallCheck4(this, AreaSeries2);
    return _possibleConstructorReturn4(this, (AreaSeries2.__proto__ || Object.getPrototypeOf(AreaSeries2)).apply(this, arguments));
  }
  _createClass4(AreaSeries2, [{
    key: "_renderArea",
    value: function _renderArea(data, x3, y05, y3, curve, getNull4) {
      var area = area_default();
      if (curve !== null) {
        if (typeof curve === "string" && src_exports[curve]) {
          area = area.curve(src_exports[curve]);
        } else if (typeof curve === "function") {
          area = area.curve(curve);
        }
      }
      area = area.defined(getNull4);
      area = area.x(x3).y0(y05).y1(y3);
      return area(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, animation = _props.animation, className = _props.className, curve = _props.curve, data = _props.data, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style;
      if (this.props.nullAccessor) {
        warning("nullAccessor has been renamed to getNull", true);
      }
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react8.default.createElement(
          animation_default,
          _extends6({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react8.default.createElement(AreaSeries2, _extends6({}, this.props, { animation: null }))
        );
      }
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var y05 = this._getAttr0Functor("y");
      var stroke = this._getAttributeValue("stroke") || this._getAttributeValue("color");
      var fill = this._getAttributeValue("fill") || this._getAttributeValue("color");
      var newOpacity = this._getAttributeValue("opacity");
      var opacity = Number.isFinite(newOpacity) ? newOpacity : DEFAULT_OPACITY;
      var getNull4 = this.props.nullAccessor || this.props.getNull;
      var d = this._renderArea(data, x3, y05, y3, curve, getNull4);
      return import_react8.default.createElement("path", {
        d,
        className: predefinedClassName2 + " " + className,
        transform: "translate(" + marginLeft + "," + marginTop + ")",
        onMouseOver: this._seriesMouseOverHandler,
        onMouseOut: this._seriesMouseOutHandler,
        onClick: this._seriesClickHandler,
        onContextMenu: this._seriesRightClickHandler,
        style: _extends6({
          opacity,
          stroke,
          fill
        }, style)
      });
    }
  }]);
  return AreaSeries2;
}(abstract_series_default);
AreaSeries.displayName = "AreaSeries";
AreaSeries.propTypes = _extends6({}, abstract_series_default.propTypes, {
  getNull: import_prop_types5.default.func
});
AreaSeries.defaultProps = _extends6({}, abstract_series_default.defaultProps, {
  getNull: function getNull() {
    return true;
  }
});

// plugins/public/node_modules/react-vis/es/plot/borders.js
var import_react9 = __toESM(require("react"));
var import_prop_types6 = __toESM(require_prop_types());
var _extends7 = Object.assign || function(target) {
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
var propTypes3 = {
  style: import_prop_types6.default.shape({
    bottom: import_prop_types6.default.object,
    left: import_prop_types6.default.object,
    right: import_prop_types6.default.object,
    top: import_prop_types6.default.object
  }),
  marginTop: import_prop_types6.default.number,
  marginBottom: import_prop_types6.default.number,
  marginLeft: import_prop_types6.default.number,
  marginRight: import_prop_types6.default.number,
  innerWidth: import_prop_types6.default.number,
  innerHeight: import_prop_types6.default.number
};
var CLASSES = {
  bottom: "rv-xy-plot__borders-bottom",
  container: "rv-xy-plot__borders",
  left: "rv-xy-plot__borders-left",
  right: "rv-xy-plot__borders-right",
  top: "rv-xy-plot__borders-top"
};
function Borders(props) {
  var marginTop = props.marginTop, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, innerWidth = props.innerWidth, innerHeight = props.innerHeight, style = props.style, className = props.className;
  var height = innerHeight + marginTop + marginBottom;
  var width = innerWidth + marginLeft + marginRight;
  return import_react9.default.createElement(
    "g",
    { className: CLASSES.container + " " + className },
    import_react9.default.createElement("rect", {
      className: CLASSES.bottom + " " + className + "-bottom",
      style: _extends7({}, style.all, style.bottom),
      x: 0,
      y: height - marginBottom,
      width,
      height: marginBottom
    }),
    import_react9.default.createElement("rect", {
      className: CLASSES.left + " " + className + "-left",
      style: _extends7({}, style.all, style.left),
      x: 0,
      y: 0,
      width: marginLeft,
      height
    }),
    import_react9.default.createElement("rect", {
      className: CLASSES.right + " " + className + "-right",
      style: _extends7({}, style.all, style.right),
      x: width - marginRight,
      y: 0,
      width: marginRight,
      height
    }),
    import_react9.default.createElement("rect", {
      className: CLASSES.top + " " + className + "-top",
      style: _extends7({}, style.all, style.top),
      x: 0,
      y: 0,
      width,
      height: marginTop
    })
  );
}
Borders.displayName = "Borders";
Borders.defaultProps = {
  className: "",
  style: {
    all: {},
    bottom: {},
    left: {},
    right: {},
    top: {}
  }
};
Borders.propTypes = propTypes3;
Borders.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/plot/chart-label.js
var import_react10 = __toESM(require("react"));
var import_prop_types7 = __toESM(require_prop_types());
var _createClass5 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn5(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ChartLabel = function(_React$PureComponent) {
  _inherits5(ChartLabel2, _React$PureComponent);
  function ChartLabel2() {
    _classCallCheck5(this, ChartLabel2);
    return _possibleConstructorReturn5(this, (ChartLabel2.__proto__ || Object.getPrototypeOf(ChartLabel2)).apply(this, arguments));
  }
  _createClass5(ChartLabel2, [{
    key: "render",
    value: function render() {
      var _props = this.props, innerHeight = _props.innerHeight, innerWidth = _props.innerWidth, marginBottom = _props.marginBottom, marginLeft = _props.marginLeft, marginRight = _props.marginRight, marginTop = _props.marginTop, className = _props.className, includeMargin = _props.includeMargin, style = _props.style, text = _props.text, xPercent = _props.xPercent, yPercent = _props.yPercent;
      var width = innerWidth + (includeMargin ? marginLeft + marginRight : 0);
      var height = innerHeight + (includeMargin ? marginTop + marginBottom : 0);
      var xPos = width * xPercent + (includeMargin ? 0 : marginLeft);
      var yPos = height * yPercent + (includeMargin ? marginLeft : 0);
      return import_react10.default.createElement(
        "g",
        {
          transform: "translate(" + xPos + ", " + yPos + ")",
          className: "rv-xy-plot__axis__title " + className
        },
        import_react10.default.createElement(
          "text",
          style,
          text
        )
      );
    }
  }], [{
    key: "requiresSVG",
    get: function get() {
      return true;
    }
  }]);
  return ChartLabel2;
}(import_react10.default.PureComponent);
ChartLabel.displayName = "ChartLabel";
ChartLabel.propTypes = {
  className: import_prop_types7.default.string,
  includeMargin: import_prop_types7.default.bool,
  style: import_prop_types7.default.object,
  text: import_prop_types7.default.string.isRequired,
  xPercent: import_prop_types7.default.number.isRequired,
  yPercent: import_prop_types7.default.number.isRequired
};
ChartLabel.defaultProps = {
  className: "",
  includeMargin: true,
  text: "",
  xPercent: 0,
  yPercent: 0,
  style: {}
};

// plugins/public/node_modules/react-vis/es/plot/circular-grid-lines.js
var import_react11 = __toESM(require("react"));
var import_prop_types8 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/utils/axis-utils.js
var ORIENTATION = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom",
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal"
};
var DIRECTION = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal"
};
function getTicksTotalFromSize(size) {
  if (size < 700) {
    if (size > 300) {
      return 10;
    }
    return 5;
  }
  return 20;
}
function getTickValues(scale, tickTotal, tickValues) {
  return !tickValues ? scale.ticks ? scale.ticks(tickTotal) : scale.domain() : tickValues;
}
function generateFit(axisStart, axisEnd) {
  if (axisStart.x === axisEnd.x) {
    return {
      left: axisStart.y,
      right: axisEnd.y,
      slope: 0,
      offset: axisStart.x
    };
  }
  var slope = (axisStart.y - axisEnd.y) / (axisStart.x - axisEnd.x);
  return {
    left: axisStart.x,
    right: axisEnd.x,
    slope,
    offset: axisStart.y - slope * axisStart.x
  };
}
function generatePoints(_ref) {
  var axisStart = _ref.axisStart, axisEnd = _ref.axisEnd, numberOfTicks = _ref.numberOfTicks, axisDomain = _ref.axisDomain;
  var _generateFit = generateFit(axisStart, axisEnd), left2 = _generateFit.left, right2 = _generateFit.right, slope = _generateFit.slope, offset = _generateFit.offset;
  var pointSlope = (right2 - left2) / numberOfTicks;
  var axisScale = linear2().domain([left2, right2]).range(axisDomain);
  var slopeVertical = axisStart.x === axisEnd.x;
  return {
    slope: slopeVertical ? Infinity : slope,
    points: range_default(left2, right2 + pointSlope, pointSlope).map(function(val) {
      if (slopeVertical) {
        return { y: val, x: slope * val + offset, text: axisScale(val) };
      }
      return { x: val, y: slope * val + offset, text: axisScale(val) };
    }).slice(0, numberOfTicks + 1)
  };
}
function getAxisAngle(axisStart, axisEnd) {
  if (axisStart.x === axisEnd.x) {
    return axisEnd.y > axisStart.y ? Math.PI / 2 : 3 * Math.PI / 2;
  }
  return Math.atan((axisEnd.y - axisStart.y) / (axisEnd.x - axisStart.x));
}

// plugins/public/node_modules/react-vis/es/plot/circular-grid-lines.js
var _extends8 = Object.assign || function(target) {
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
var _createClass6 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn6(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var animatedProps = ["xRange", "yRange", "xDomain", "yDomain", "width", "height", "marginLeft", "marginTop", "marginRight", "marginBottom", "tickTotal"];
var CircularGridLines = function(_PureComponent) {
  _inherits6(CircularGridLines2, _PureComponent);
  function CircularGridLines2() {
    _classCallCheck6(this, CircularGridLines2);
    return _possibleConstructorReturn6(this, (CircularGridLines2.__proto__ || Object.getPrototypeOf(CircularGridLines2)).apply(this, arguments));
  }
  _createClass6(CircularGridLines2, [{
    key: "_getDefaultProps",
    value: function _getDefaultProps() {
      var _props = this.props, innerWidth = _props.innerWidth, innerHeight = _props.innerHeight, marginTop = _props.marginTop, marginLeft = _props.marginLeft;
      return {
        left: marginLeft,
        top: marginTop,
        width: innerWidth,
        height: innerHeight,
        style: {},
        tickTotal: getTicksTotalFromSize(Math.min(innerWidth, innerHeight))
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props, animation = _props2.animation, centerX = _props2.centerX, centerY = _props2.centerY;
      if (animation) {
        return import_react11.default.createElement(
          animation_default,
          _extends8({}, this.props, { animatedProps }),
          import_react11.default.createElement(CircularGridLines2, _extends8({}, this.props, { animation: null }))
        );
      }
      var props = _extends8({}, this._getDefaultProps(), this.props);
      var tickTotal = props.tickTotal, tickValues = props.tickValues, marginLeft = props.marginLeft, marginTop = props.marginTop, rRange = props.rRange, style = props.style;
      var xScale = getAttributeScale(props, "x");
      var yScale = getAttributeScale(props, "y");
      var values = getTickValues(xScale, tickTotal, tickValues);
      return import_react11.default.createElement(
        "g",
        {
          transform: "translate(" + (xScale(centerX) + marginLeft) + "," + (yScale(centerY) + marginTop) + ")",
          className: "rv-xy-plot__circular-grid-lines"
        },
        values.reduce(function(res, value2, index) {
          var radius = xScale(value2);
          if (rRange && (radius < rRange[0] || radius > rRange[1])) {
            return res;
          }
          return res.concat([import_react11.default.createElement("circle", _extends8({ cx: 0, cy: 0, r: radius }, {
            key: index,
            className: "rv-xy-plot__circular-grid-lines__line",
            style
          }))]);
        }, [])
      );
    }
  }]);
  return CircularGridLines2;
}(import_react11.PureComponent);
CircularGridLines.displayName = "CircularGridLines";
CircularGridLines.propTypes = {
  centerX: import_prop_types8.default.number,
  centerY: import_prop_types8.default.number,
  width: import_prop_types8.default.number,
  height: import_prop_types8.default.number,
  top: import_prop_types8.default.number,
  left: import_prop_types8.default.number,
  rRange: import_prop_types8.default.arrayOf(import_prop_types8.default.number),
  style: import_prop_types8.default.object,
  tickValues: import_prop_types8.default.arrayOf(import_prop_types8.default.number),
  tickTotal: import_prop_types8.default.number,
  animation: AnimationPropType,
  marginTop: import_prop_types8.default.number,
  marginBottom: import_prop_types8.default.number,
  marginLeft: import_prop_types8.default.number,
  marginRight: import_prop_types8.default.number,
  innerWidth: import_prop_types8.default.number,
  innerHeight: import_prop_types8.default.number
};
CircularGridLines.defaultProps = {
  centerX: 0,
  centerY: 0
};
CircularGridLines.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/plot/series/contour-series.js
var import_react12 = __toESM(require("react"));
var import_prop_types9 = __toESM(require_prop_types());

// plugins/public/node_modules/d3-contour/src/array.js
var array3 = Array.prototype;
var slice4 = array3.slice;

// plugins/public/node_modules/d3-contour/src/ascending.js
function ascending_default3(a2, b) {
  return a2 - b;
}

// plugins/public/node_modules/d3-contour/src/area.js
function area_default2(ring) {
  var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n)
    area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
}

// plugins/public/node_modules/d3-contour/src/constant.js
function constant_default6(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-contour/src/contains.js
function contains_default(ring, hole) {
  var i = -1, n = hole.length, c2;
  while (++i < n)
    if (c2 = ringContains(ring, hole[i]))
      return c2;
  return 0;
}
function ringContains(ring, point6) {
  var x3 = point6[0], y3 = point6[1], contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi4 = ring[i], xi = pi4[0], yi = pi4[1], pj = ring[j], xj = pj[0], yj = pj[1];
    if (segmentContains(pi4, pj, point6))
      return 0;
    if (yi > y3 !== yj > y3 && x3 < (xj - xi) * (y3 - yi) / (yj - yi) + xi)
      contains = -contains;
  }
  return contains;
}
function segmentContains(a2, b, c2) {
  var i;
  return collinear(a2, b, c2) && within(a2[i = +(a2[0] === b[0])], c2[i], b[i]);
}
function collinear(a2, b, c2) {
  return (b[0] - a2[0]) * (c2[1] - a2[1]) === (c2[0] - a2[0]) * (b[1] - a2[1]);
}
function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

// plugins/public/node_modules/d3-contour/src/noop.js
function noop_default2() {
}

// plugins/public/node_modules/d3-contour/src/contours.js
var cases = [
  [],
  [[[1, 1.5], [0.5, 1]]],
  [[[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [0.5, 1]]],
  [[[1, 0.5], [1.5, 1]]],
  [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
  [[[1, 0.5], [1, 1.5]]],
  [[[1, 0.5], [0.5, 1]]],
  [[[0.5, 1], [1, 0.5]]],
  [[[1, 1.5], [1, 0.5]]],
  [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [1, 0.5]]],
  [[[0.5, 1], [1.5, 1]]],
  [[[1, 1.5], [1.5, 1]]],
  [[[0.5, 1], [1, 1.5]]],
  []
];
function contours_default() {
  var dx = 1, dy = 1, threshold2 = sturges_default, smooth = smoothLinear;
  function contours(values) {
    var tz = threshold2(values);
    if (!Array.isArray(tz)) {
      var domain = extent_default(values), start = domain[0], stop = domain[1];
      tz = tickStep(start, stop, tz);
      tz = range_default(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(ascending_default3);
    }
    return tz.map(function(value2) {
      return contour(values, value2);
    });
  }
  function contour(values, value2) {
    var polygons = [], holes = [];
    isorings(values, value2, function(ring) {
      smooth(ring, values, value2);
      if (area_default2(ring) > 0)
        polygons.push([ring]);
      else
        holes.push(ring);
    });
    holes.forEach(function(hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains_default((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value: value2,
      coordinates: polygons
    };
  }
  function isorings(values, value2, callback) {
    var fragmentByStart = new Array(), fragmentByEnd = new Array(), x3, y3, t02, t12, t2, t3;
    x3 = y3 = -1;
    t12 = values[0] >= value2;
    cases[t12 << 1].forEach(stitch);
    while (++x3 < dx - 1) {
      t02 = t12, t12 = values[x3 + 1] >= value2;
      cases[t02 | t12 << 1].forEach(stitch);
    }
    cases[t12 << 0].forEach(stitch);
    while (++y3 < dy - 1) {
      x3 = -1;
      t12 = values[y3 * dx + dx] >= value2;
      t2 = values[y3 * dx] >= value2;
      cases[t12 << 1 | t2 << 2].forEach(stitch);
      while (++x3 < dx - 1) {
        t02 = t12, t12 = values[y3 * dx + dx + x3 + 1] >= value2;
        t3 = t2, t2 = values[y3 * dx + x3 + 1] >= value2;
        cases[t02 | t12 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t12 | t2 << 3].forEach(stitch);
    }
    x3 = -1;
    t2 = values[y3 * dx] >= value2;
    cases[t2 << 2].forEach(stitch);
    while (++x3 < dx - 1) {
      t3 = t2, t2 = values[y3 * dx + x3 + 1] >= value2;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);
    function stitch(line) {
      var start = [line[0][0] + x3, line[0][1] + y3], end = [line[1][0] + x3, line[1][1] + y3], startIndex = index(start), endIndex = index(end), f, g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = { start: f.start, end: g.end, ring: f.ring.concat(g.ring) };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = { start: g.start, end: f.end, ring: g.ring.concat(f.ring) };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = { start: startIndex, end: endIndex, ring: [start, end] };
      }
    }
  }
  function index(point6) {
    return point6[0] * 2 + point6[1] * (dx + 1) * 4;
  }
  function smoothLinear(ring, values, value2) {
    ring.forEach(function(point6) {
      var x3 = point6[0], y3 = point6[1], xt = x3 | 0, yt = y3 | 0, v0, v1 = values[yt * dx + xt];
      if (x3 > 0 && x3 < dx && xt === x3) {
        v0 = values[yt * dx + xt - 1];
        point6[0] = x3 + (value2 - v0) / (v1 - v0) - 0.5;
      }
      if (y3 > 0 && y3 < dy && yt === y3) {
        v0 = values[(yt - 1) * dx + xt];
        point6[1] = y3 + (value2 - v0) / (v1 - v0) - 0.5;
      }
    });
  }
  contours.contour = contour;
  contours.size = function(_) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 > 0) || !(_1 > 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };
  contours.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default6(slice4.call(_)) : constant_default6(_), contours) : threshold2;
  };
  contours.smooth = function(_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop_default2, contours) : smooth === smoothLinear;
  };
  return contours;
}

// plugins/public/node_modules/d3-contour/src/blur.js
function blurX(source, target, r) {
  var n = source.width, m = source.height, w = (r << 1) + 1;
  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }
      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }
        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
}
function blurY(source, target, r) {
  var n = source.width, m = source.height, w = (r << 1) + 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }
      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }
        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}

// plugins/public/node_modules/d3-contour/src/density.js
function defaultX(d) {
  return d[0];
}
function defaultY(d) {
  return d[1];
}
function defaultWeight() {
  return 1;
}
function density_default() {
  var x3 = defaultX, y3 = defaultY, weight = defaultWeight, dx = 960, dy = 500, r = 20, k2 = 2, o = r * 3, n = dx + o * 2 >> k2, m = dy + o * 2 >> k2, threshold2 = constant_default6(20);
  function density(data) {
    var values0 = new Float32Array(n * m), values1 = new Float32Array(n * m);
    data.forEach(function(d, i, data2) {
      var xi = +x3(d, i, data2) + o >> k2, yi = +y3(d, i, data2) + o >> k2, wi = +weight(d, i, data2);
      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        values0[xi + yi * n] += wi;
      }
    });
    blurX({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k2);
    blurY({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k2);
    blurX({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k2);
    blurY({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k2);
    blurX({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k2);
    blurY({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k2);
    var tz = threshold2(values0);
    if (!Array.isArray(tz)) {
      var stop = max_default(values0);
      tz = tickStep(0, stop, tz);
      tz = range_default(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }
    return contours_default().thresholds(tz).size([n, m])(values0).map(transform);
  }
  function transform(geometry) {
    geometry.value *= Math.pow(2, -2 * k2);
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }
  function transformPolygon(coordinates) {
    coordinates.forEach(transformRing);
  }
  function transformRing(coordinates) {
    coordinates.forEach(transformPoint);
  }
  function transformPoint(coordinates) {
    coordinates[0] = coordinates[0] * Math.pow(2, k2) - o;
    coordinates[1] = coordinates[1] * Math.pow(2, k2) - o;
  }
  function resize() {
    o = r * 3;
    n = dx + o * 2 >> k2;
    m = dy + o * 2 >> k2;
    return density;
  }
  density.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default6(+_), density) : x3;
  };
  density.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default6(+_), density) : y3;
  };
  density.weight = function(_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : constant_default6(+_), density) : weight;
  };
  density.size = function(_) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 >= 0) && !(_0 >= 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };
  density.cellSize = function(_) {
    if (!arguments.length)
      return 1 << k2;
    if (!((_ = +_) >= 1))
      throw new Error("invalid cell size");
    return k2 = Math.floor(Math.log(_) / Math.LN2), resize();
  };
  density.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default6(slice4.call(_)) : constant_default6(_), density) : threshold2;
  };
  density.bandwidth = function(_) {
    if (!arguments.length)
      return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0))
      throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };
  return density;
}

// plugins/public/node_modules/d3-geo/src/adder.js
function adder_default() {
  return new Adder();
}
function Adder() {
  this.reset();
}
Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = this.t = 0;
  },
  add: function(y3) {
    add(temp, y3, this.t);
    add(this, temp.s, this.s);
    if (this.s)
      this.t += temp.t;
    else
      this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var temp = new Adder();
function add(adder, a2, b) {
  var x3 = adder.s = a2 + b, bv = x3 - a2, av = x3 - bv;
  adder.t = a2 - av + (b - bv);
}

// plugins/public/node_modules/d3-geo/src/math.js
var pi3 = Math.PI;
var halfPi2 = pi3 / 2;
var quarterPi = pi3 / 4;
var tau3 = pi3 * 2;
var degrees = 180 / pi3;
var radians = pi3 / 180;
var abs2 = Math.abs;
var sqrt4 = Math.sqrt;

// plugins/public/node_modules/d3-geo/src/noop.js
function noop() {
}

// plugins/public/node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n)
      streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n)
      streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n)
    coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n)
    streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

// plugins/public/node_modules/d3-geo/src/identity.js
function identity_default4(x3) {
  return x3;
}

// plugins/public/node_modules/d3-geo/src/path/area.js
var areaSum = adder_default();
var areaRingSum = adder_default();
var x00;
var y00;
var x0;
var y0;
var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop;
    areaSum.add(abs2(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaPointFirst(x3, y3) {
  areaStream.point = areaPoint;
  x00 = x0 = x3, y00 = y0 = y3;
}
function areaPoint(x3, y3) {
  areaRingSum.add(y0 * x3 - x0 * y3);
  x0 = x3, y0 = y3;
}
function areaRingEnd() {
  areaPoint(x00, y00);
}
var area_default3 = areaStream;

// plugins/public/node_modules/d3-geo/src/path/bounds.js
var x02 = Infinity;
var y02 = x02;
var x1 = -x02;
var y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[x02, y02], [x1, y1]];
    x1 = y1 = -(y02 = x02 = Infinity);
    return bounds;
  }
};
function boundsPoint(x3, y3) {
  if (x3 < x02)
    x02 = x3;
  if (x3 > x1)
    x1 = x3;
  if (y3 < y02)
    y02 = y3;
  if (y3 > y1)
    y1 = y3;
}
var bounds_default = boundsStream;

// plugins/public/node_modules/d3-geo/src/path/centroid.js
var X0 = 0;
var Y0 = 0;
var Z0 = 0;
var X1 = 0;
var Y1 = 0;
var Z1 = 0;
var X2 = 0;
var Y2 = 0;
var Z2 = 0;
var x002;
var y002;
var x03;
var y03;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x3, y3) {
  X0 += x3;
  Y0 += y3;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x3, y3) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x03 = x3, y03 = y3);
}
function centroidPointLine(x3, y3) {
  var dx = x3 - x03, dy = y3 - y03, z = sqrt4(dx * dx + dy * dy);
  X1 += z * (x03 + x3) / 2;
  Y1 += z * (y03 + y3) / 2;
  Z1 += z;
  centroidPoint(x03 = x3, y03 = y3);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x3, y3) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x002 = x03 = x3, y002 = y03 = y3);
}
function centroidPointRing(x3, y3) {
  var dx = x3 - x03, dy = y3 - y03, z = sqrt4(dx * dx + dy * dy);
  X1 += z * (x03 + x3) / 2;
  Y1 += z * (y03 + y3) / 2;
  Z1 += z;
  z = y03 * x3 - x03 * y3;
  X2 += z * (x03 + x3);
  Y2 += z * (y03 + y3);
  Z2 += z * 3;
  centroidPoint(x03 = x3, y03 = y3);
}
var centroid_default = centroidStream;

// plugins/public/node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._context.closePath();
    this._point = NaN;
  },
  point: function(x3, y3) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x3, y3);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x3, y3);
        break;
      }
      default: {
        this._context.moveTo(x3 + this._radius, y3);
        this._context.arc(x3, y3, this._radius, 0, tau3);
        break;
      }
    }
  },
  result: noop
};

// plugins/public/node_modules/d3-geo/src/path/measure.js
var lengthSum = adder_default();
var lengthRing;
var x003;
var y003;
var x04;
var y04;
var lengthStream = {
  point: noop,
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing)
      lengthPoint(x003, y003);
    lengthStream.point = noop;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};
function lengthPointFirst(x3, y3) {
  lengthStream.point = lengthPoint;
  x003 = x04 = x3, y003 = y04 = y3;
}
function lengthPoint(x3, y3) {
  x04 -= x3, y04 -= y3;
  lengthSum.add(sqrt4(x04 * x04 + y04 * y04));
  x04 = x3, y04 = y3;
}
var measure_default = lengthStream;

// plugins/public/node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius)
      this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._string.push("Z");
    this._point = NaN;
  },
  point: function(x3, y3) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x3, ",", y3);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x3, ",", y3);
        break;
      }
      default: {
        if (this._circle == null)
          this._circle = circle(this._radius);
        this._string.push("M", x3, ",", y3, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// plugins/public/node_modules/d3-geo/src/path/index.js
function path_default2(projection, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path2(object) {
    if (object) {
      if (typeof pointRadius === "function")
        contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object) {
    stream_default(object, projectionStream(area_default3));
    return area_default3.result();
  };
  path2.measure = function(object) {
    stream_default(object, projectionStream(measure_default));
    return measure_default.result();
  };
  path2.bounds = function(object) {
    stream_default(object, projectionStream(bounds_default));
    return bounds_default.result();
  };
  path2.centroid = function(object) {
    stream_default(object, projectionStream(centroid_default));
    return centroid_default.result();
  };
  path2.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity_default4) : (projection = _).stream, path2) : projection;
  };
  path2.context = function(_) {
    if (!arguments.length)
      return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function")
      contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_) {
    if (!arguments.length)
      return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path2;
  };
  return path2.projection(projection).context(context);
}

// plugins/public/node_modules/react-vis/es/plot/series/contour-series.js
var _extends9 = Object.assign || function(target) {
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
var _createClass7 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn7(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName3 = "rv-xy-plot__series rv-xy-plot__series--contour";
function getDomain(data) {
  return data.reduce(function(acc, row) {
    return {
      min: Math.min(acc.min, row.value),
      max: Math.max(acc.max, row.value)
    };
  }, { min: Infinity, max: -Infinity });
}
var ContourSeries = function(_AbstractSeries) {
  _inherits7(ContourSeries2, _AbstractSeries);
  function ContourSeries2() {
    _classCallCheck7(this, ContourSeries2);
    return _possibleConstructorReturn7(this, (ContourSeries2.__proto__ || Object.getPrototypeOf(ContourSeries2)).apply(this, arguments));
  }
  _createClass7(ContourSeries2, [{
    key: "render",
    value: function render() {
      var _props = this.props, animation = _props.animation, bandwidth = _props.bandwidth, className = _props.className, colorRange = _props.colorRange, data = _props.data, innerHeight = _props.innerHeight, innerWidth = _props.innerWidth, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style;
      if (!data || !innerWidth || !innerHeight) {
        return null;
      }
      if (animation) {
        return import_react12.default.createElement(
          animation_default,
          _extends9({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react12.default.createElement(ContourSeries2, _extends9({}, this.props, { animation: null }))
        );
      }
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var contouredData = density_default().x(function(d) {
        return x3(d);
      }).y(function(d) {
        return y3(d);
      }).size([innerWidth, innerHeight]).bandwidth(bandwidth)(data);
      var geo = path_default2();
      var _getDomain = getDomain(contouredData), min2 = _getDomain.min, max2 = _getDomain.max;
      var colorScale = linear2().domain([min2, max2]).range(colorRange || CONTINUOUS_COLOR_RANGE);
      return import_react12.default.createElement(
        "g",
        {
          className: predefinedClassName3 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        contouredData.map(function(polygon, index) {
          return import_react12.default.createElement("path", {
            className: "rv-xy-plot__series--contour-line",
            key: "rv-xy-plot__series--contour-line-" + index,
            d: geo(polygon),
            style: _extends9({
              fill: colorScale(polygon.value)
            }, style)
          });
        })
      );
    }
  }]);
  return ContourSeries2;
}(abstract_series_default);
ContourSeries.propTypes = _extends9({}, abstract_series_default.propTypes, {
  animation: import_prop_types9.default.bool,
  bandwidth: import_prop_types9.default.number,
  className: import_prop_types9.default.string,
  marginLeft: import_prop_types9.default.number,
  marginTop: import_prop_types9.default.number,
  style: import_prop_types9.default.object
});
ContourSeries.defaultProps = _extends9({}, abstract_series_default.defaultProps, {
  bandwidth: 40,
  style: {}
});

// plugins/public/node_modules/react-vis/es/plot/crosshair.js
var import_react13 = __toESM(require("react"));
var import_prop_types10 = __toESM(require_prop_types());
var _extends10 = Object.assign || function(target) {
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
var _createClass8 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn8(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function defaultTitleFormat(values) {
  var value2 = getFirstNonEmptyValue(values);
  if (value2) {
    return {
      title: "x",
      value: transformValueToString(value2.x)
    };
  }
}
function defaultItemsFormat(values) {
  return values.map(function(v, i) {
    if (v) {
      return { value: v.y, title: i };
    }
  });
}
function getFirstNonEmptyValue(values) {
  return (values || []).find(function(v) {
    return Boolean(v);
  });
}
var Crosshair = function(_PureComponent) {
  _inherits8(Crosshair2, _PureComponent);
  function Crosshair2() {
    _classCallCheck8(this, Crosshair2);
    return _possibleConstructorReturn8(this, (Crosshair2.__proto__ || Object.getPrototypeOf(Crosshair2)).apply(this, arguments));
  }
  _createClass8(Crosshair2, [{
    key: "_renderCrosshairItems",
    value: function _renderCrosshairItems() {
      var _props = this.props, values = _props.values, itemsFormat = _props.itemsFormat;
      var items = itemsFormat(values);
      if (!items) {
        return null;
      }
      return items.filter(function(i) {
        return i;
      }).map(function renderValue(item, i) {
        return import_react13.default.createElement(
          "div",
          { className: "rv-crosshair__item", key: "item" + i },
          import_react13.default.createElement(
            "span",
            { className: "rv-crosshair__item__title" },
            item.title
          ),
          ": ",
          import_react13.default.createElement(
            "span",
            { className: "rv-crosshair__item__value" },
            item.value
          )
        );
      });
    }
  }, {
    key: "_renderCrosshairTitle",
    value: function _renderCrosshairTitle() {
      var _props2 = this.props, values = _props2.values, titleFormat = _props2.titleFormat, style = _props2.style;
      var titleItem = titleFormat(values);
      if (!titleItem) {
        return null;
      }
      return import_react13.default.createElement(
        "div",
        { className: "rv-crosshair__title", key: "title", style: style.title },
        import_react13.default.createElement(
          "span",
          { className: "rv-crosshair__title__title" },
          titleItem.title
        ),
        ": ",
        import_react13.default.createElement(
          "span",
          { className: "rv-crosshair__title__value" },
          titleItem.value
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props, children = _props3.children, className = _props3.className, values = _props3.values, marginTop = _props3.marginTop, marginLeft = _props3.marginLeft, innerWidth = _props3.innerWidth, innerHeight = _props3.innerHeight, style = _props3.style;
      var value2 = getFirstNonEmptyValue(values);
      if (!value2) {
        return null;
      }
      var x3 = getAttributeFunctor(this.props, "x");
      var innerLeft = x3(value2);
      var _props$orientation = this.props.orientation, orientation = _props$orientation === void 0 ? innerLeft > innerWidth / 2 ? "left" : "right" : _props$orientation;
      var left2 = marginLeft + innerLeft;
      var top = marginTop;
      var innerClassName = "rv-crosshair__inner rv-crosshair__inner--" + orientation;
      return import_react13.default.createElement(
        "div",
        {
          className: "rv-crosshair " + className,
          style: { left: left2 + "px", top: top + "px" }
        },
        import_react13.default.createElement("div", {
          className: "rv-crosshair__line",
          style: _extends10({ height: innerHeight + "px" }, style.line)
        }),
        import_react13.default.createElement(
          "div",
          { className: innerClassName },
          children ? children : import_react13.default.createElement(
            "div",
            { className: "rv-crosshair__inner__content", style: style.box },
            import_react13.default.createElement(
              "div",
              null,
              this._renderCrosshairTitle(),
              this._renderCrosshairItems()
            )
          )
        )
      );
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        titleFormat: defaultTitleFormat,
        itemsFormat: defaultItemsFormat,
        style: {
          line: {},
          title: {},
          box: {}
        }
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        className: import_prop_types10.default.string,
        values: import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string, import_prop_types10.default.object])),
        series: import_prop_types10.default.object,
        innerWidth: import_prop_types10.default.number,
        innerHeight: import_prop_types10.default.number,
        marginLeft: import_prop_types10.default.number,
        marginTop: import_prop_types10.default.number,
        orientation: import_prop_types10.default.oneOf(["left", "right"]),
        itemsFormat: import_prop_types10.default.func,
        titleFormat: import_prop_types10.default.func,
        style: import_prop_types10.default.shape({
          line: import_prop_types10.default.object,
          title: import_prop_types10.default.object,
          box: import_prop_types10.default.object
        })
      };
    }
  }]);
  return Crosshair2;
}(import_react13.PureComponent);
Crosshair.displayName = "Crosshair";

// plugins/public/node_modules/react-vis/es/plot/series/custom-svg-series.js
var import_react14 = __toESM(require("react"));
var import_prop_types11 = __toESM(require_prop_types());
var _createClass9 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends11 = Object.assign || function(target) {
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
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn9(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _toConsumableArray2(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var predefinedClassName4 = "rv-xy-plot__series rv-xy-plot__series--custom-svg-wrapper";
var DEFAULT_STYLE = {
  stroke: "blue",
  fill: "blue"
};
function predefinedComponents(type) {
  var size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  var style = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_STYLE;
  switch (type) {
    case "diamond":
      return import_react14.default.createElement("polygon", {
        style,
        points: "0 0 " + size / 2 + " " + size / 2 + " 0 " + size + " " + -size / 2 + " " + size / 2 + " 0 0"
      });
    case "star":
      var starPoints = [].concat(_toConsumableArray2(new Array(5))).map(function(c2, index) {
        var angle = index / 5 * Math.PI * 2;
        var innerAngle = angle + Math.PI / 10;
        var outerAngle = angle - Math.PI / 10;
        var innerRadius = size / 2.61;
        return "\n        " + Math.cos(outerAngle) * size + " " + Math.sin(outerAngle) * size + "\n        " + Math.cos(innerAngle) * innerRadius + " " + Math.sin(innerAngle) * innerRadius + "\n      ";
      }).join(" ");
      return import_react14.default.createElement("polygon", {
        points: starPoints,
        x: "0",
        y: "0",
        height: size,
        width: size,
        style
      });
    case "square":
      return import_react14.default.createElement("rect", {
        x: "" + -size / 2,
        y: "" + -size / 2,
        height: size,
        width: size,
        style
      });
    default:
    case "circle":
      return import_react14.default.createElement("circle", { cx: "0", cy: "0", r: size / 2, style });
  }
}
function getInnerComponent(_ref) {
  var customComponent = _ref.customComponent, defaultType = _ref.defaultType, positionInPixels = _ref.positionInPixels, positionFunctions = _ref.positionFunctions, style = _ref.style, propsSize = _ref.propsSize;
  var size = customComponent.size;
  var aggStyle = _extends11({}, style, customComponent.style || {});
  var innerComponent = customComponent.customComponent;
  if (!innerComponent && typeof defaultType === "string") {
    return predefinedComponents(defaultType, size || propsSize, aggStyle);
  }
  if (!innerComponent) {
    return defaultType(customComponent, positionInPixels, aggStyle);
  }
  if (typeof innerComponent === "string") {
    return predefinedComponents(innerComponent || defaultType, size, aggStyle);
  }
  return innerComponent(customComponent, positionInPixels, aggStyle);
}
var CustomSVGSeries = function(_AbstractSeries) {
  _inherits9(CustomSVGSeries2, _AbstractSeries);
  function CustomSVGSeries2() {
    _classCallCheck9(this, CustomSVGSeries2);
    return _possibleConstructorReturn9(this, (CustomSVGSeries2.__proto__ || Object.getPrototypeOf(CustomSVGSeries2)).apply(this, arguments));
  }
  _createClass9(CustomSVGSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, customComponent = _props.customComponent, data = _props.data, innerHeight = _props.innerHeight, innerWidth = _props.innerWidth, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style, size = _props.size;
      if (!data || !innerWidth || !innerHeight) {
        return null;
      }
      if (animation) {
        return import_react14.default.createElement(
          animation_default,
          _extends11({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react14.default.createElement(CustomSVGSeries2, _extends11({}, this.props, { animation: false }))
        );
      }
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var contents = data.map(function(seriesComponent, index) {
        var positionInPixels = {
          x: x3(seriesComponent),
          y: y3(seriesComponent)
        };
        var innerComponent = getInnerComponent({
          customComponent: seriesComponent,
          positionInPixels,
          defaultType: customComponent,
          positionFunctions: { x: x3, y: y3 },
          style,
          propsSize: size
        });
        return import_react14.default.createElement(
          "g",
          {
            className: "rv-xy-plot__series--custom-svg",
            key: "rv-xy-plot__series--custom-svg-" + index,
            transform: "translate(" + positionInPixels.x + "," + positionInPixels.y + ")",
            onMouseEnter: function onMouseEnter(e) {
              return _this2._valueMouseOverHandler(seriesComponent, e);
            },
            onMouseLeave: function onMouseLeave(e) {
              return _this2._valueMouseOutHandler(seriesComponent, e);
            }
          },
          innerComponent
        );
      });
      return import_react14.default.createElement(
        "g",
        {
          className: predefinedClassName4 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        contents
      );
    }
  }]);
  return CustomSVGSeries2;
}(abstract_series_default);
CustomSVGSeries.propTypes = {
  animation: import_prop_types11.default.bool,
  className: import_prop_types11.default.string,
  customComponent: import_prop_types11.default.oneOfType([import_prop_types11.default.string, import_prop_types11.default.func]),
  data: import_prop_types11.default.arrayOf(import_prop_types11.default.shape({
    x: import_prop_types11.default.oneOfType([import_prop_types11.default.string, import_prop_types11.default.number]).isRequired,
    y: import_prop_types11.default.oneOfType([import_prop_types11.default.string, import_prop_types11.default.number]).isRequired
  })).isRequired,
  marginLeft: import_prop_types11.default.number,
  marginTop: import_prop_types11.default.number,
  style: import_prop_types11.default.object,
  size: import_prop_types11.default.number,
  onValueMouseOver: import_prop_types11.default.func,
  onValueMouseOut: import_prop_types11.default.func
};
CustomSVGSeries.defaultProps = _extends11({}, abstract_series_default.defaultProps, {
  animation: false,
  customComponent: "circle",
  style: {},
  size: 2
});

// plugins/public/node_modules/react-vis/es/plot/axis/decorative-axis.js
var import_react16 = __toESM(require("react"));
var import_prop_types12 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/plot/axis/decorative-axis-ticks.js
var import_react15 = __toESM(require("react"));
var _extends12 = Object.assign || function(target) {
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
function decorativeAxisTick(props) {
  var axisDomain = props.axisDomain, numberOfTicks = props.numberOfTicks, axisStart = props.axisStart, axisEnd = props.axisEnd, tickValue2 = props.tickValue, tickSize = props.tickSize, style = props.style;
  var _generatePoints = generatePoints({
    axisStart,
    axisEnd,
    numberOfTicks,
    axisDomain
  }), points = _generatePoints.points;
  var tickAngle = getAxisAngle(axisStart, axisEnd) + Math.PI / 2;
  return points.map(function(point6, index) {
    var tickProps = _extends12({
      x1: 0,
      y1: 0,
      x2: tickSize * Math.cos(tickAngle),
      y2: tickSize * Math.sin(tickAngle)
    }, style.ticks);
    var textProps = _extends12({
      x: tickSize * Math.cos(tickAngle),
      y: tickSize * Math.sin(tickAngle),
      textAnchor: "start"
    }, style.text);
    return import_react15.default.createElement(
      "g",
      {
        key: index,
        transform: "translate(" + point6.x + ", " + point6.y + ")",
        className: "rv-xy-plot__axis__tick"
      },
      import_react15.default.createElement("line", _extends12({}, tickProps, { className: "rv-xy-plot__axis__tick__line" })),
      import_react15.default.createElement(
        "text",
        _extends12({}, textProps, { className: "rv-xy-plot__axis__tick__text" }),
        tickValue2(point6.text)
      )
    );
  });
}

// plugins/public/node_modules/react-vis/es/plot/axis/decorative-axis.js
var _extends13 = Object.assign || function(target) {
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
var _createClass10 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn10(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits10(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName5 = "rv-xy-manipulable-axis rv-xy-plot__axis";
var animatedProps2 = ["xRange", "yRange", "xDomain", "yDomain", "width", "height", "marginLeft", "marginTop", "marginRight", "marginBottom", "tickSize", "tickTotal", "tickSizeInner", "tickSizeOuter"];
var DecorativeAxis = function(_AbstractSeries) {
  _inherits10(DecorativeAxis2, _AbstractSeries);
  function DecorativeAxis2() {
    _classCallCheck10(this, DecorativeAxis2);
    return _possibleConstructorReturn10(this, (DecorativeAxis2.__proto__ || Object.getPrototypeOf(DecorativeAxis2)).apply(this, arguments));
  }
  _createClass10(DecorativeAxis2, [{
    key: "render",
    value: function render() {
      var _props = this.props, animation = _props.animation, className = _props.className, marginLeft = _props.marginLeft, marginTop = _props.marginTop, axisStart = _props.axisStart, axisEnd = _props.axisEnd, axisDomain = _props.axisDomain, numberOfTicks = _props.numberOfTicks, tickValue2 = _props.tickValue, tickSize = _props.tickSize, style = _props.style;
      if (animation) {
        return import_react16.default.createElement(
          animation_default,
          _extends13({}, this.props, { animatedProps: animatedProps2 }),
          import_react16.default.createElement(DecorativeAxis2, _extends13({}, this.props, { animation: null }))
        );
      }
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      return import_react16.default.createElement(
        "g",
        {
          className: predefinedClassName5 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        import_react16.default.createElement("line", _extends13({}, _extends13({
          x1: x3({ x: axisStart.x }),
          x2: x3({ x: axisEnd.x }),
          y1: y3({ y: axisStart.y }),
          y2: y3({ y: axisEnd.y })
        }, style.line), {
          className: "rv-xy-plot__axis__line"
        })),
        import_react16.default.createElement(
          "g",
          { className: "rv-xy-manipulable-axis__ticks" },
          decorativeAxisTick({
            axisDomain,
            axisEnd: { x: x3(axisEnd), y: y3(axisEnd) },
            axisStart: { x: x3(axisStart), y: y3(axisStart) },
            numberOfTicks,
            tickValue: tickValue2,
            tickSize,
            style
          })
        )
      );
    }
  }]);
  return DecorativeAxis2;
}(abstract_series_default);
var DEFAULT_FORMAT = format(".2r");
DecorativeAxis.defaultProps = {
  className: "",
  numberOfTicks: 10,
  tickValue: function tickValue(d) {
    return DEFAULT_FORMAT(d);
  },
  tickSize: 5,
  style: {
    line: {
      strokeWidth: 1
    },
    ticks: {
      strokeWidth: 2
    },
    text: {}
  }
};
DecorativeAxis.propTypes = _extends13({}, abstract_series_default.propTypes, {
  axisDomain: import_prop_types12.default.arrayOf(import_prop_types12.default.number).isRequired,
  axisEnd: import_prop_types12.default.shape({
    x: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    y: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string])
  }).isRequired,
  axisStart: import_prop_types12.default.shape({
    x: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    y: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string])
  }).isRequired,
  className: import_prop_types12.default.string,
  numberOfTicks: import_prop_types12.default.number,
  tickValue: import_prop_types12.default.func,
  tickSize: import_prop_types12.default.number,
  style: import_prop_types12.default.shape({
    line: import_prop_types12.default.object,
    ticks: import_prop_types12.default.object,
    text: import_prop_types12.default.object
  })
});
DecorativeAxis.displayName = "DecorativeAxis";
var decorative_axis_default = DecorativeAxis;

// plugins/public/node_modules/react-vis/es/plot/gradient-defs.js
var import_react17 = __toESM(require("react"));
var import_prop_types13 = __toESM(require_prop_types());
var predefinedClassName6 = "rv-gradient-defs";
function GradientDefs(props) {
  var className = props.className;
  return import_react17.default.createElement(
    "defs",
    { className: predefinedClassName6 + " " + className },
    props.children
  );
}
GradientDefs.displayName = "GradientDefs";
GradientDefs.requiresSVG = true;
GradientDefs.propTypes = {
  className: import_prop_types13.default.string
};
GradientDefs.defaultProps = {
  className: ""
};

// plugins/public/node_modules/react-vis/es/plot/grid-lines.js
var import_react18 = __toESM(require("react"));
var import_prop_types14 = __toESM(require_prop_types());
var _extends14 = Object.assign || function(target) {
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
var _createClass11 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty3(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn11(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits11(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var VERTICAL = DIRECTION.VERTICAL;
var HORIZONTAL = DIRECTION.HORIZONTAL;
var propTypes4 = {
  direction: import_prop_types14.default.oneOf([VERTICAL, HORIZONTAL]),
  attr: import_prop_types14.default.string.isRequired,
  width: import_prop_types14.default.number,
  height: import_prop_types14.default.number,
  top: import_prop_types14.default.number,
  left: import_prop_types14.default.number,
  style: import_prop_types14.default.object,
  tickValues: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])),
  tickTotal: import_prop_types14.default.number,
  animation: AnimationPropType,
  marginTop: import_prop_types14.default.number,
  marginBottom: import_prop_types14.default.number,
  marginLeft: import_prop_types14.default.number,
  marginRight: import_prop_types14.default.number,
  innerWidth: import_prop_types14.default.number,
  innerHeight: import_prop_types14.default.number
};
var defaultProps3 = {
  direction: VERTICAL
};
var animatedProps3 = ["xRange", "yRange", "xDomain", "yDomain", "width", "height", "marginLeft", "marginTop", "marginRight", "marginBottom", "tickTotal"];
var GridLines = function(_PureComponent) {
  _inherits11(GridLines2, _PureComponent);
  function GridLines2() {
    _classCallCheck11(this, GridLines2);
    return _possibleConstructorReturn11(this, (GridLines2.__proto__ || Object.getPrototypeOf(GridLines2)).apply(this, arguments));
  }
  _createClass11(GridLines2, [{
    key: "_getDefaultProps",
    value: function _getDefaultProps() {
      var _props = this.props, innerWidth = _props.innerWidth, innerHeight = _props.innerHeight, marginTop = _props.marginTop, marginLeft = _props.marginLeft, direction = _props.direction;
      return {
        left: marginLeft,
        top: marginTop,
        width: innerWidth,
        height: innerHeight,
        tickTotal: getTicksTotalFromSize(direction === VERTICAL ? innerWidth : innerHeight)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props, animation = _props2.animation, className = _props2.className;
      if (animation) {
        return import_react18.default.createElement(
          animation_default,
          _extends14({}, this.props, { animatedProps: animatedProps3 }),
          import_react18.default.createElement(GridLines2, _extends14({}, this.props, { animation: null }))
        );
      }
      var props = _extends14({}, this._getDefaultProps(), this.props);
      var attr = props.attr, direction = props.direction, width = props.width, height = props.height, style = props.style, tickTotal = props.tickTotal, tickValues = props.tickValues, top = props.top, left2 = props.left;
      var isVertical = direction === VERTICAL;
      var tickXAttr = isVertical ? "y" : "x";
      var tickYAttr = isVertical ? "x" : "y";
      var length = isVertical ? height : width;
      var scale = getAttributeScale(props, attr);
      var values = getTickValues(scale, tickTotal, tickValues);
      return import_react18.default.createElement(
        "g",
        {
          transform: "translate(" + left2 + "," + top + ")",
          className: "rv-xy-plot__grid-lines " + className
        },
        values.map(function(v, i) {
          var _pathProps;
          var pos = scale(v);
          var pathProps = (_pathProps = {}, _defineProperty3(_pathProps, tickYAttr + "1", pos), _defineProperty3(_pathProps, tickYAttr + "2", pos), _defineProperty3(_pathProps, tickXAttr + "1", 0), _defineProperty3(_pathProps, tickXAttr + "2", length), _pathProps);
          return import_react18.default.createElement("line", _extends14({}, pathProps, {
            key: i,
            className: "rv-xy-plot__grid-lines__line",
            style
          }));
        })
      );
    }
  }]);
  return GridLines2;
}(import_react18.PureComponent);
GridLines.displayName = "GridLines";
GridLines.defaultProps = defaultProps3;
GridLines.propTypes = propTypes4;
GridLines.requiresSVG = true;
var grid_lines_default = GridLines;

// plugins/public/node_modules/react-vis/es/plot/series/heatmap-series.js
var import_react19 = __toESM(require("react"));
var _extends15 = Object.assign || function(target) {
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
var _createClass12 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn12(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits12(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName7 = "rv-xy-plot__series rv-xy-plot__series--heatmap";
var HeatmapSeries = function(_AbstractSeries) {
  _inherits12(HeatmapSeries2, _AbstractSeries);
  function HeatmapSeries2() {
    _classCallCheck12(this, HeatmapSeries2);
    return _possibleConstructorReturn12(this, (HeatmapSeries2.__proto__ || Object.getPrototypeOf(HeatmapSeries2)).apply(this, arguments));
  }
  _createClass12(HeatmapSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, data = _props.data, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react19.default.createElement(
          animation_default,
          _extends15({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react19.default.createElement(HeatmapSeries2, _extends15({}, this.props, { animation: null }))
        );
      }
      var _rectStyle$style = _extends15({ rectStyle: {} }, style), rectStyle = _rectStyle$style.rectStyle;
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var opacity = this._getAttributeFunctor("opacity");
      var fill = this._getAttributeFunctor("fill") || this._getAttributeFunctor("color");
      var stroke = this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color");
      var xDistance = this._getScaleDistance("x");
      var yDistance = this._getScaleDistance("y");
      return import_react19.default.createElement(
        "g",
        {
          className: predefinedClassName7 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        data.map(function(d, i) {
          var attrs = _extends15({
            style: _extends15({
              stroke: stroke && stroke(d),
              fill: fill && fill(d),
              opacity: opacity && opacity(d)
            }, style)
          }, rectStyle, {
            x: x3(d) - xDistance / 2,
            y: y3(d) - yDistance / 2,
            width: xDistance,
            height: yDistance,
            key: i,
            onClick: function onClick(e) {
              return _this2._valueClickHandler(d, e);
            },
            onContextMenu: function onContextMenu(e) {
              return _this2._valueRightClickHandler(d, e);
            },
            onMouseOver: function onMouseOver(e) {
              return _this2._valueMouseOverHandler(d, e);
            },
            onMouseOut: function onMouseOut(e) {
              return _this2._valueMouseOutHandler(d, e);
            }
          });
          return import_react19.default.createElement("rect", attrs);
        })
      );
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === "x" || attr === "y";
      return { isDomainAdjustmentNeeded };
    }
  }]);
  return HeatmapSeries2;
}(abstract_series_default);
HeatmapSeries.propTypes = _extends15({}, abstract_series_default.propTypes);
HeatmapSeries.displayName = "HeatmapSeries";

// plugins/public/node_modules/react-vis/es/plot/series/hexbin-series.js
var import_react20 = __toESM(require("react"));
var import_prop_types15 = __toESM(require_prop_types());

// plugins/public/node_modules/d3-hexbin/src/hexbin.js
var thirdPi = Math.PI / 3;
var angles = [0, thirdPi, 2 * thirdPi, 3 * thirdPi, 4 * thirdPi, 5 * thirdPi];
function pointX(d) {
  return d[0];
}
function pointY(d) {
  return d[1];
}
function hexbin_default() {
  var x05 = 0, y05 = 0, x12 = 1, y12 = 1, x3 = pointX, y3 = pointY, r, dx, dy;
  function hexbin(points) {
    var binsById = {}, bins = [], i, n = points.length;
    for (i = 0; i < n; ++i) {
      if (isNaN(px = +x3.call(null, point6 = points[i], i, points)) || isNaN(py = +y3.call(null, point6, i, points)))
        continue;
      var point6, px, py, pj = Math.round(py = py / dy), pi4 = Math.round(px = px / dx - (pj & 1) / 2), py1 = py - pj;
      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi4, pi22 = pi4 + (px < pi4 ? -1 : 1) / 2, pj2 = pj + (py < pj ? -1 : 1), px2 = px - pi22, py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2)
          pi4 = pi22 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
      }
      var id = pi4 + "-" + pj, bin = binsById[id];
      if (bin)
        bin.push(point6);
      else {
        bins.push(bin = binsById[id] = [point6]);
        bin.x = (pi4 + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }
    return bins;
  }
  function hexagon(radius) {
    var x06 = 0, y06 = 0;
    return angles.map(function(angle) {
      var x13 = Math.sin(angle) * radius, y13 = -Math.cos(angle) * radius, dx2 = x13 - x06, dy2 = y13 - y06;
      x06 = x13, y06 = y13;
      return [dx2, dy2];
    });
  }
  hexbin.hexagon = function(radius) {
    return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
  };
  hexbin.centers = function() {
    var centers = [], j = Math.round(y05 / dy), i = Math.round(x05 / dx);
    for (var y4 = j * dy; y4 < y12 + r; y4 += dy, ++j) {
      for (var x4 = i * dx + (j & 1) * dx / 2; x4 < x12 + dx / 2; x4 += dx) {
        centers.push([x4, y4]);
      }
    }
    return centers;
  };
  hexbin.mesh = function() {
    var fragment = hexagon(r).slice(0, 4).join("l");
    return hexbin.centers().map(function(p) {
      return "M" + p + "m" + fragment;
    }).join("");
  };
  hexbin.x = function(_) {
    return arguments.length ? (x3 = _, hexbin) : x3;
  };
  hexbin.y = function(_) {
    return arguments.length ? (y3 = _, hexbin) : y3;
  };
  hexbin.radius = function(_) {
    return arguments.length ? (r = +_, dx = r * 2 * Math.sin(thirdPi), dy = r * 1.5, hexbin) : r;
  };
  hexbin.size = function(_) {
    return arguments.length ? (x05 = y05 = 0, x12 = +_[0], y12 = +_[1], hexbin) : [x12 - x05, y12 - y05];
  };
  hexbin.extent = function(_) {
    return arguments.length ? (x05 = +_[0][0], y05 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], hexbin) : [[x05, y05], [x12, y12]];
  };
  return hexbin.radius(1);
}

// plugins/public/node_modules/react-vis/es/plot/series/hexbin-series.js
var _extends16 = Object.assign || function(target) {
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
var _createClass13 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn13(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits13(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _toConsumableArray3(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var predefinedClassName8 = "rv-xy-plot__series rv-xy-plot__series--hexbin";
function getColorDomain(_ref, hexes) {
  var countDomain = _ref.countDomain;
  if (countDomain) {
    return countDomain;
  }
  return [0, Math.max.apply(Math, _toConsumableArray3(hexes.map(function(row) {
    return row.length;
  })))];
}
var HexbinSeries = function(_AbstractSeries) {
  _inherits13(HexbinSeries2, _AbstractSeries);
  function HexbinSeries2() {
    _classCallCheck13(this, HexbinSeries2);
    return _possibleConstructorReturn13(this, (HexbinSeries2.__proto__ || Object.getPrototypeOf(HexbinSeries2)).apply(this, arguments));
  }
  _createClass13(HexbinSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, colorRange = _props.colorRange, data = _props.data, innerHeight = _props.innerHeight, innerWidth = _props.innerWidth, marginLeft = _props.marginLeft, marginTop = _props.marginTop, radius = _props.radius, sizeHexagonsWithCount = _props.sizeHexagonsWithCount, style = _props.style, xOffset = _props.xOffset, yOffset = _props.yOffset;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react20.default.createElement(
          animation_default,
          _extends16({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react20.default.createElement(HexbinSeries2, _extends16({}, this.props, { animation: null }))
        );
      }
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var hex2 = hexbin_default().x(function(d) {
        return x3(d) + xOffset;
      }).y(function(d) {
        return y3(d) + yOffset;
      }).radius(radius).size([innerWidth, innerHeight]);
      var hexagonPath = hex2.hexagon();
      var hexes = hex2(data);
      var countDomain = getColorDomain(this.props, hexes);
      var color2 = linear2().domain(countDomain).range(colorRange);
      var size = linear2().domain(countDomain).range([0, radius]);
      return import_react20.default.createElement(
        "g",
        {
          className: predefinedClassName8 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        hexes.map(function(d, i) {
          var attrs = {
            style,
            d: sizeHexagonsWithCount ? hex2.hexagon(size(d.length)) : hexagonPath,
            fill: color2(d.length),
            transform: "translate(" + d.x + ", " + d.y + ")",
            key: i,
            onClick: function onClick(e) {
              return _this2._valueClickHandler(d, e);
            },
            onContextMenu: function onContextMenu(e) {
              return _this2._valueRightClickHandler(d, e);
            },
            onMouseOver: function onMouseOver(e) {
              return _this2._valueMouseOverHandler(d, e);
            },
            onMouseOut: function onMouseOut(e) {
              return _this2._valueMouseOutHandler(d, e);
            }
          };
          return import_react20.default.createElement("path", attrs);
        })
      );
    }
  }]);
  return HexbinSeries2;
}(abstract_series_default);
HexbinSeries.propTypes = _extends16({}, abstract_series_default.propTypes, {
  radius: import_prop_types15.default.number
});
HexbinSeries.defaultProps = {
  radius: 20,
  colorRange: CONTINUOUS_COLOR_RANGE,
  xOffset: 0,
  yOffset: 0
};
HexbinSeries.displayName = "HexbinSeries";

// plugins/public/node_modules/react-vis/es/plot/highlight.js
var import_react21 = __toESM(require("react"));
var import_prop_types16 = __toESM(require_prop_types());
var _extends17 = Object.assign || function(target) {
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
var _createClass14 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn14(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits14(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function getLocs(evt) {
  var xLoc = evt.type === "touchstart" ? evt.pageX : evt.offsetX;
  var yLoc = evt.type === "touchstart" ? evt.pageY : evt.offsetY;
  return { xLoc, yLoc };
}
var Highlight = function(_AbstractSeries) {
  _inherits14(Highlight2, _AbstractSeries);
  function Highlight2() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck14(this, Highlight2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn14(this, (_ref = Highlight2.__proto__ || Object.getPrototypeOf(Highlight2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      brushArea: { top: 0, right: 0, bottom: 0, left: 0 },
      brushing: false,
      startLocX: 0,
      startLocY: 0,
      dragArea: null
    }, _temp), _possibleConstructorReturn14(_this, _ret);
  }
  _createClass14(Highlight2, [{
    key: "_getDrawArea",
    value: function _getDrawArea(xLoc, yLoc) {
      var _state = this.state, startLocX = _state.startLocX, startLocY = _state.startLocY;
      var _props = this.props, enableX = _props.enableX, enableY = _props.enableY, highlightWidth = _props.highlightWidth, highlightHeight = _props.highlightHeight, innerWidth = _props.innerWidth, innerHeight = _props.innerHeight, marginLeft = _props.marginLeft, marginRight = _props.marginRight, marginBottom = _props.marginBottom, marginTop = _props.marginTop;
      var plotHeight = innerHeight + marginTop + marginBottom;
      var plotWidth = innerWidth + marginLeft + marginRight;
      var touchWidth = highlightWidth || plotWidth;
      var touchHeight = highlightHeight || plotHeight;
      return {
        bottom: enableY ? Math.max(startLocY, yLoc) : touchHeight,
        right: enableX ? Math.max(startLocX, xLoc) : touchWidth,
        left: enableX ? Math.min(xLoc, startLocX) : 0,
        top: enableY ? Math.min(yLoc, startLocY) : 0
      };
    }
  }, {
    key: "_getDragArea",
    value: function _getDragArea(xLoc, yLoc) {
      var _props2 = this.props, enableX = _props2.enableX, enableY = _props2.enableY;
      var _state2 = this.state, startLocX = _state2.startLocX, startLocY = _state2.startLocY, dragArea = _state2.dragArea;
      return {
        bottom: dragArea.bottom + (enableY ? yLoc - startLocY : 0),
        left: dragArea.left + (enableX ? xLoc - startLocX : 0),
        right: dragArea.right + (enableX ? xLoc - startLocX : 0),
        top: dragArea.top + (enableY ? yLoc - startLocY : 0)
      };
    }
  }, {
    key: "_clickedOutsideDrag",
    value: function _clickedOutsideDrag(xLoc, yLoc) {
      var _props3 = this.props, enableX = _props3.enableX, enableY = _props3.enableY;
      var _state3 = this.state, dragArea = _state3.dragArea, _state3$brushArea = _state3.brushArea, left2 = _state3$brushArea.left, right2 = _state3$brushArea.right, top = _state3$brushArea.top, bottom = _state3$brushArea.bottom;
      var clickedOutsideDragX = dragArea && (xLoc < left2 || xLoc > right2);
      var clickedOutsideDragY = dragArea && (yLoc < top || yLoc > bottom);
      if (enableX && enableY) {
        return clickedOutsideDragX || clickedOutsideDragY;
      }
      if (enableX) {
        return clickedOutsideDragX;
      }
      if (enableY) {
        return clickedOutsideDragY;
      }
      return true;
    }
  }, {
    key: "_convertAreaToCoordinates",
    value: function _convertAreaToCoordinates(brushArea) {
      var _props4 = this.props, enableX = _props4.enableX, enableY = _props4.enableY, marginLeft = _props4.marginLeft, marginTop = _props4.marginTop;
      var xScale = getAttributeScale(this.props, "x");
      var yScale = getAttributeScale(this.props, "y");
      if (enableX && enableY) {
        return {
          bottom: yScale.invert(brushArea.bottom),
          left: xScale.invert(brushArea.left - marginLeft),
          right: xScale.invert(brushArea.right - marginLeft),
          top: yScale.invert(brushArea.top)
        };
      }
      if (enableY) {
        return {
          bottom: yScale.invert(brushArea.bottom - marginTop),
          top: yScale.invert(brushArea.top - marginTop)
        };
      }
      if (enableX) {
        return {
          left: xScale.invert(brushArea.left - marginLeft),
          right: xScale.invert(brushArea.right - marginLeft)
        };
      }
      return {};
    }
  }, {
    key: "startBrushing",
    value: function startBrushing(e) {
      var _this2 = this;
      var _props5 = this.props, onBrushStart = _props5.onBrushStart, onDragStart = _props5.onDragStart, drag = _props5.drag;
      var dragArea = this.state.dragArea;
      var _getLocs = getLocs(e.nativeEvent), xLoc = _getLocs.xLoc, yLoc = _getLocs.yLoc;
      var startArea = function startArea2(dragging, resetDrag) {
        var emptyBrush = {
          bottom: yLoc,
          left: xLoc,
          right: xLoc,
          top: yLoc
        };
        _this2.setState({
          dragging,
          brushArea: dragArea && !resetDrag ? dragArea : emptyBrush,
          brushing: !dragging,
          startLocX: xLoc,
          startLocY: yLoc
        });
      };
      var clickedOutsideDrag = this._clickedOutsideDrag(xLoc, yLoc);
      if (drag && !dragArea || !drag || clickedOutsideDrag) {
        startArea(false, clickedOutsideDrag);
        if (onBrushStart) {
          onBrushStart(e);
        }
        return;
      }
      if (drag && dragArea) {
        startArea(true, clickedOutsideDrag);
        if (onDragStart) {
          onDragStart(e);
        }
      }
    }
  }, {
    key: "stopBrushing",
    value: function stopBrushing(e) {
      var _state4 = this.state, brushing = _state4.brushing, dragging = _state4.dragging, brushArea = _state4.brushArea;
      if (!brushing && !dragging) {
        return;
      }
      var _props6 = this.props, onBrushEnd = _props6.onBrushEnd, onDragEnd = _props6.onDragEnd, drag = _props6.drag;
      var noHorizontal = Math.abs(brushArea.right - brushArea.left) < 5;
      var noVertical = Math.abs(brushArea.top - brushArea.bottom) < 5;
      var isNulled = noVertical || noHorizontal;
      this.setState({
        brushing: false,
        dragging: false,
        brushArea: drag ? brushArea : { top: 0, right: 0, bottom: 0, left: 0 },
        startLocX: 0,
        startLocY: 0,
        dragArea: drag && !isNulled && brushArea
      });
      if (brushing && onBrushEnd) {
        onBrushEnd(!isNulled ? this._convertAreaToCoordinates(brushArea) : null);
      }
      if (drag && onDragEnd) {
        onDragEnd(!isNulled ? this._convertAreaToCoordinates(brushArea) : null);
      }
    }
  }, {
    key: "onBrush",
    value: function onBrush(e) {
      var _props7 = this.props, onBrush2 = _props7.onBrush, onDrag = _props7.onDrag, drag = _props7.drag;
      var _state5 = this.state, brushing = _state5.brushing, dragging = _state5.dragging;
      var _getLocs2 = getLocs(e.nativeEvent), xLoc = _getLocs2.xLoc, yLoc = _getLocs2.yLoc;
      if (brushing) {
        var brushArea = this._getDrawArea(xLoc, yLoc);
        this.setState({ brushArea });
        if (onBrush2) {
          onBrush2(this._convertAreaToCoordinates(brushArea));
        }
      }
      if (drag && dragging) {
        var _brushArea = this._getDragArea(xLoc, yLoc);
        this.setState({ brushArea: _brushArea });
        if (onDrag) {
          onDrag(this._convertAreaToCoordinates(_brushArea));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _props8 = this.props, color2 = _props8.color, className = _props8.className, highlightHeight = _props8.highlightHeight, highlightWidth = _props8.highlightWidth, highlightX = _props8.highlightX, highlightY = _props8.highlightY, innerWidth = _props8.innerWidth, innerHeight = _props8.innerHeight, marginLeft = _props8.marginLeft, marginRight = _props8.marginRight, marginTop = _props8.marginTop, marginBottom = _props8.marginBottom, opacity = _props8.opacity;
      var _state$brushArea = this.state.brushArea, left2 = _state$brushArea.left, right2 = _state$brushArea.right, top = _state$brushArea.top, bottom = _state$brushArea.bottom;
      var leftPos = 0;
      if (highlightX) {
        var xScale = getAttributeScale(this.props, "x");
        leftPos = xScale(highlightX);
      }
      var topPos = 0;
      if (highlightY) {
        var yScale = getAttributeScale(this.props, "y");
        topPos = yScale(highlightY);
      }
      var plotWidth = marginLeft + marginRight + innerWidth;
      var plotHeight = marginTop + marginBottom + innerHeight;
      var touchWidth = highlightWidth || plotWidth;
      var touchHeight = highlightHeight || plotHeight;
      return import_react21.default.createElement(
        "g",
        {
          transform: "translate(" + leftPos + ", " + topPos + ")",
          className: className + " rv-highlight-container"
        },
        import_react21.default.createElement("rect", {
          className: "rv-mouse-target",
          fill: "black",
          opacity: "0",
          x: "0",
          y: "0",
          width: Math.max(touchWidth, 0),
          height: Math.max(touchHeight, 0),
          onMouseDown: function onMouseDown(e) {
            return _this3.startBrushing(e);
          },
          onMouseMove: function onMouseMove(e) {
            return _this3.onBrush(e);
          },
          onMouseUp: function onMouseUp(e) {
            return _this3.stopBrushing(e);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this3.stopBrushing(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            e.preventDefault();
            _this3.stopBrushing(e);
          },
          onTouchCancel: function onTouchCancel(e) {
            e.preventDefault();
            _this3.stopBrushing(e);
          },
          onContextMenu: function onContextMenu(e) {
            return e.preventDefault();
          },
          onContextMenuCapture: function onContextMenuCapture(e) {
            return e.preventDefault();
          }
        }),
        import_react21.default.createElement("rect", {
          className: "rv-highlight",
          pointerEvents: "none",
          opacity,
          fill: color2,
          x: left2,
          y: top,
          width: Math.min(Math.max(0, right2 - left2), touchWidth),
          height: Math.min(Math.max(0, bottom - top), touchHeight)
        })
      );
    }
  }]);
  return Highlight2;
}(abstract_series_default);
Highlight.displayName = "HighlightOverlay";
Highlight.defaultProps = {
  color: "rgb(77, 182, 172)",
  className: "",
  enableX: true,
  enableY: true,
  opacity: 0.3
};
Highlight.propTypes = _extends17({}, abstract_series_default.propTypes, {
  enableX: import_prop_types16.default.bool,
  enableY: import_prop_types16.default.bool,
  highlightHeight: import_prop_types16.default.number,
  highlightWidth: import_prop_types16.default.number,
  highlightX: import_prop_types16.default.oneOfType([import_prop_types16.default.string, import_prop_types16.default.number]),
  highlightY: import_prop_types16.default.oneOfType([import_prop_types16.default.string, import_prop_types16.default.number]),
  onBrushStart: import_prop_types16.default.func,
  onDragStart: import_prop_types16.default.func,
  onBrush: import_prop_types16.default.func,
  onDrag: import_prop_types16.default.func,
  onBrushEnd: import_prop_types16.default.func,
  onDragEnd: import_prop_types16.default.func
});
var highlight_default = Highlight;

// plugins/public/node_modules/react-vis/es/plot/hint.js
var import_react22 = __toESM(require("react"));
var import_prop_types17 = __toESM(require_prop_types());
var _extends18 = Object.assign || function(target) {
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
var _createClass15 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn15(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits15(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ALIGN = {
  AUTO: "auto",
  LEFT: "left",
  RIGHT: "right",
  LEFT_EDGE: "leftEdge",
  RIGHT_EDGE: "rightEdge",
  BOTTOM: "bottom",
  TOP: "top",
  BOTTOM_EDGE: "bottomEdge",
  TOP_EDGE: "topEdge"
};
var ORIENTATION2 = {
  BOTTOM_LEFT: "bottomleft",
  BOTTOM_RIGHT: "bottomright",
  TOP_LEFT: "topleft",
  TOP_RIGHT: "topright"
};
function defaultFormat(value2) {
  return Object.keys(value2).map(function getProp(key) {
    return { title: key, value: transformValueToString(value2[key]) };
  });
}
var Hint = function(_PureComponent) {
  _inherits15(Hint2, _PureComponent);
  function Hint2() {
    _classCallCheck15(this, Hint2);
    return _possibleConstructorReturn15(this, (Hint2.__proto__ || Object.getPrototypeOf(Hint2)).apply(this, arguments));
  }
  _createClass15(Hint2, [{
    key: "_getAlign",
    value: function _getAlign(x3, y3) {
      var _props = this.props, innerWidth = _props.innerWidth, innerHeight = _props.innerHeight, orientation = _props.orientation, _props$align = _props.align, horizontal = _props$align.horizontal, vertical = _props$align.vertical;
      var align = orientation ? this._mapOrientationToAlign(orientation) : { horizontal, vertical };
      if (horizontal === ALIGN.AUTO) {
        align.horizontal = x3 > innerWidth / 2 ? ALIGN.LEFT : ALIGN.RIGHT;
      }
      if (vertical === ALIGN.AUTO) {
        align.vertical = y3 > innerHeight / 2 ? ALIGN.TOP : ALIGN.BOTTOM;
      }
      return align;
    }
  }, {
    key: "_getAlignClassNames",
    value: function _getAlignClassNames(align) {
      var orientation = this.props.orientation;
      var orientationClass = orientation ? "rv-hint--orientation-" + orientation : "";
      return orientationClass + " rv-hint--horizontalAlign-" + align.horizontal + "\n     rv-hint--verticalAlign-" + align.vertical;
    }
  }, {
    key: "_getAlignStyle",
    value: function _getAlignStyle(align, x3, y3) {
      return _extends18({}, this._getXCSS(align.horizontal, x3), this._getYCSS(align.vertical, y3));
    }
  }, {
    key: "_getCSSBottom",
    value: function _getCSSBottom(y3) {
      if (y3 === void 0 || y3 === null) {
        return {
          bottom: 0
        };
      }
      var _props2 = this.props, innerHeight = _props2.innerHeight, marginBottom = _props2.marginBottom;
      return {
        bottom: marginBottom + innerHeight - y3
      };
    }
  }, {
    key: "_getCSSLeft",
    value: function _getCSSLeft(x3) {
      if (x3 === void 0 || x3 === null) {
        return {
          left: 0
        };
      }
      var marginLeft = this.props.marginLeft;
      return {
        left: marginLeft + x3
      };
    }
  }, {
    key: "_getCSSRight",
    value: function _getCSSRight(x3) {
      if (x3 === void 0 || x3 === null) {
        return {
          right: 0
        };
      }
      var _props3 = this.props, innerWidth = _props3.innerWidth, marginRight = _props3.marginRight;
      return {
        right: marginRight + innerWidth - x3
      };
    }
  }, {
    key: "_getCSSTop",
    value: function _getCSSTop(y3) {
      if (y3 === void 0 || y3 === null) {
        return {
          top: 0
        };
      }
      var marginTop = this.props.marginTop;
      return {
        top: marginTop + y3
      };
    }
  }, {
    key: "_getPositionInfo",
    value: function _getPositionInfo() {
      var _props4 = this.props, value2 = _props4.value, getAlignStyle = _props4.getAlignStyle;
      var x3 = getAttributeFunctor(this.props, "x")(value2);
      var y3 = getAttributeFunctor(this.props, "y")(value2);
      var align = this._getAlign(x3, y3);
      return {
        position: getAlignStyle ? getAlignStyle(align, x3, y3) : this._getAlignStyle(align, x3, y3),
        positionClassName: this._getAlignClassNames(align)
      };
    }
  }, {
    key: "_getXCSS",
    value: function _getXCSS(horizontal, x3) {
      switch (horizontal) {
        case ALIGN.LEFT_EDGE:
          return this._getCSSLeft(null);
        case ALIGN.RIGHT_EDGE:
          return this._getCSSRight(null);
        case ALIGN.LEFT:
          return this._getCSSRight(x3);
        case ALIGN.RIGHT:
        default:
          return this._getCSSLeft(x3);
      }
    }
  }, {
    key: "_getYCSS",
    value: function _getYCSS(verticalAlign, y3) {
      switch (verticalAlign) {
        case ALIGN.TOP_EDGE:
          return this._getCSSTop(null);
        case ALIGN.BOTTOM_EDGE:
          return this._getCSSBottom(null);
        case ALIGN.BOTTOM:
          return this._getCSSTop(y3);
        case ALIGN.TOP:
        default:
          return this._getCSSBottom(y3);
      }
    }
  }, {
    key: "_mapOrientationToAlign",
    value: function _mapOrientationToAlign(orientation) {
      switch (orientation) {
        case ORIENTATION2.BOTTOM_LEFT:
          return {
            horizontal: ALIGN.LEFT,
            vertical: ALIGN.BOTTOM
          };
        case ORIENTATION2.BOTTOM_RIGHT:
          return {
            horizontal: ALIGN.RIGHT,
            vertical: ALIGN.BOTTOM
          };
        case ORIENTATION2.TOP_LEFT:
          return {
            horizontal: ALIGN.LEFT,
            vertical: ALIGN.TOP
          };
        case ORIENTATION2.TOP_RIGHT:
          return {
            horizontal: ALIGN.RIGHT,
            vertical: ALIGN.TOP
          };
        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props5 = this.props, value2 = _props5.value, format2 = _props5.format, children = _props5.children, style = _props5.style, className = _props5.className;
      var _getPositionInfo2 = this._getPositionInfo(), position = _getPositionInfo2.position, positionClassName = _getPositionInfo2.positionClassName;
      return import_react22.default.createElement(
        "div",
        {
          className: "rv-hint " + positionClassName + " " + className,
          style: _extends18({}, style, position, {
            position: "absolute"
          })
        },
        children ? children : import_react22.default.createElement(
          "div",
          { className: "rv-hint__content", style: style.content },
          format2(value2).map(function(formattedProp, i) {
            return import_react22.default.createElement(
              "div",
              { key: "rv-hint" + i, style: style.row },
              import_react22.default.createElement(
                "span",
                { className: "rv-hint__title", style: style.title },
                formattedProp.title
              ),
              ": ",
              import_react22.default.createElement(
                "span",
                { className: "rv-hint__value", style: style.value },
                formattedProp.value
              )
            );
          })
        )
      );
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        format: defaultFormat,
        align: {
          horizontal: ALIGN.AUTO,
          vertical: ALIGN.AUTO
        },
        style: {}
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        marginTop: import_prop_types17.default.number,
        marginLeft: import_prop_types17.default.number,
        innerWidth: import_prop_types17.default.number,
        innerHeight: import_prop_types17.default.number,
        scales: import_prop_types17.default.object,
        value: import_prop_types17.default.object,
        format: import_prop_types17.default.func,
        style: import_prop_types17.default.object,
        className: import_prop_types17.default.string,
        align: import_prop_types17.default.shape({
          horizontal: import_prop_types17.default.oneOf([ALIGN.AUTO, ALIGN.LEFT, ALIGN.RIGHT, ALIGN.LEFT_EDGE, ALIGN.RIGHT_EDGE]),
          vertical: import_prop_types17.default.oneOf([ALIGN.AUTO, ALIGN.BOTTOM, ALIGN.TOP, ALIGN.BOTTOM_EDGE, ALIGN.TOP_EDGE])
        }),
        getAlignStyle: import_prop_types17.default.func,
        orientation: import_prop_types17.default.oneOf([ORIENTATION2.BOTTOM_LEFT, ORIENTATION2.BOTTOM_RIGHT, ORIENTATION2.TOP_LEFT, ORIENTATION2.TOP_RIGHT])
      };
    }
  }]);
  return Hint2;
}(import_react22.PureComponent);
Hint.displayName = "Hint";
Hint.ORIENTATION = ORIENTATION2;
Hint.ALIGN = ALIGN;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-bar-series.js
var import_react24 = __toESM(require("react"));

// plugins/public/node_modules/react-vis/es/plot/series/bar-series.js
var import_react23 = __toESM(require("react"));
var import_prop_types18 = __toESM(require_prop_types());
var _extends19 = Object.assign || function(target) {
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
var _createClass16 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty4(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck16(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn16(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits16(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName9 = "rv-xy-plot__series rv-xy-plot__series--bar";
var BarSeries = function(_AbstractSeries) {
  _inherits16(BarSeries2, _AbstractSeries);
  function BarSeries2() {
    _classCallCheck16(this, BarSeries2);
    return _possibleConstructorReturn16(this, (BarSeries2.__proto__ || Object.getPrototypeOf(BarSeries2)).apply(this, arguments));
  }
  _createClass16(BarSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, data = _props.data, linePosAttr = _props.linePosAttr, lineSizeAttr = _props.lineSizeAttr, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style, valuePosAttr = _props.valuePosAttr, valueSizeAttr = _props.valueSizeAttr, barWidth = _props.barWidth;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react23.default.createElement(
          animation_default,
          _extends19({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react23.default.createElement(BarSeries2, _extends19({}, this.props, { animation: null }))
        );
      }
      var _getStackParams = getStackParams(this.props), sameTypeTotal = _getStackParams.sameTypeTotal, sameTypeIndex = _getStackParams.sameTypeIndex;
      var distance = this._getScaleDistance(linePosAttr);
      var lineFunctor = this._getAttributeFunctor(linePosAttr);
      var valueFunctor = this._getAttributeFunctor(valuePosAttr);
      var value0Functor = this._getAttr0Functor(valuePosAttr);
      var fillFunctor = this._getAttributeFunctor("fill") || this._getAttributeFunctor("color");
      var strokeFunctor = this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color");
      var opacityFunctor = this._getAttributeFunctor("opacity");
      var halfSpace = distance / 2 * barWidth;
      return import_react23.default.createElement(
        "g",
        {
          className: predefinedClassName9 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        data.map(function(d, i) {
          var _attrs;
          var totalSpaceAvailable = halfSpace * 2;
          var totalSpaceCenter = lineFunctor(d);
          var totalSpaceStartingPoint = totalSpaceCenter - halfSpace;
          var spaceTakenByInterBarsPixels = (sameTypeTotal - 1) / sameTypeTotal;
          var spacePerBar = totalSpaceAvailable / sameTypeTotal - spaceTakenByInterBarsPixels;
          var barStartingPoint = totalSpaceStartingPoint + spacePerBar * sameTypeIndex + sameTypeIndex;
          var attrs = (_attrs = {
            style: _extends19({
              opacity: opacityFunctor && opacityFunctor(d),
              stroke: strokeFunctor && strokeFunctor(d),
              fill: fillFunctor && fillFunctor(d)
            }, style)
          }, _defineProperty4(_attrs, linePosAttr, barStartingPoint), _defineProperty4(_attrs, lineSizeAttr, spacePerBar), _defineProperty4(_attrs, valuePosAttr, Math.min(value0Functor(d), valueFunctor(d))), _defineProperty4(_attrs, valueSizeAttr, Math.abs(-value0Functor(d) + valueFunctor(d))), _defineProperty4(_attrs, "onClick", function onClick(e) {
            return _this2._valueClickHandler(d, e);
          }), _defineProperty4(_attrs, "onContextMenu", function onContextMenu(e) {
            return _this2._valueRightClickHandler(d, e);
          }), _defineProperty4(_attrs, "onMouseOver", function onMouseOver(e) {
            return _this2._valueMouseOverHandler(d, e);
          }), _defineProperty4(_attrs, "onMouseOut", function onMouseOut(e) {
            return _this2._valueMouseOutHandler(d, e);
          }), _defineProperty4(_attrs, "key", i), _attrs);
          return import_react23.default.createElement("rect", attrs);
        })
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return _extends19({}, abstract_series_default.propTypes, {
        linePosAttr: import_prop_types18.default.string,
        valuePosAttr: import_prop_types18.default.string,
        lineSizeAttr: import_prop_types18.default.string,
        valueSizeAttr: import_prop_types18.default.string,
        cluster: import_prop_types18.default.string,
        barWidth: import_prop_types18.default.number
      });
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        barWidth: 0.85
      };
    }
  }]);
  return BarSeries2;
}(abstract_series_default);
BarSeries.displayName = "BarSeries";
var bar_series_default = BarSeries;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-bar-series.js
var _extends20 = Object.assign || function(target) {
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
var _createClass17 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck17(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn17(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits17(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalBarSeries = function(_AbstractSeries) {
  _inherits17(HorizontalBarSeries2, _AbstractSeries);
  function HorizontalBarSeries2() {
    _classCallCheck17(this, HorizontalBarSeries2);
    return _possibleConstructorReturn17(this, (HorizontalBarSeries2.__proto__ || Object.getPrototypeOf(HorizontalBarSeries2)).apply(this, arguments));
  }
  _createClass17(HorizontalBarSeries2, [{
    key: "render",
    value: function render() {
      return import_react24.default.createElement(bar_series_default, _extends20({}, this.props, {
        linePosAttr: "y",
        valuePosAttr: "x",
        lineSizeAttr: "height",
        valueSizeAttr: "width"
      }));
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === "y";
      var zeroBaseValue = attr === "x";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }]);
  return HorizontalBarSeries2;
}(abstract_series_default);
HorizontalBarSeries.displayName = "HorizontalBarSeries";

// plugins/public/node_modules/react-vis/es/plot/series/bar-series-canvas.js
var import_prop_types19 = __toESM(require_prop_types());
var _extends21 = Object.assign || function(target) {
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
var _createClass18 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck18(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn18(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits18(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function getScaleDistance(props, attr) {
  var scaleObject = getScaleObjectFromProps(props, attr);
  return scaleObject ? scaleObject.distance : 0;
}
var BarSeriesCanvas = function(_AbstractSeries) {
  _inherits18(BarSeriesCanvas2, _AbstractSeries);
  function BarSeriesCanvas2() {
    _classCallCheck18(this, BarSeriesCanvas2);
    return _possibleConstructorReturn18(this, (BarSeriesCanvas2.__proto__ || Object.getPrototypeOf(BarSeriesCanvas2)).apply(this, arguments));
  }
  _createClass18(BarSeriesCanvas2, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      var data = props.data, linePosAttr = props.linePosAttr, lineSizeAttr = props.lineSizeAttr, valuePosAttr = props.valuePosAttr, marginTop = props.marginTop, marginBottom = props.marginBottom;
      if (!data || data.length === 0) {
        return;
      }
      var distance = getScaleDistance(props, linePosAttr);
      var line = getAttributeFunctor(props, linePosAttr);
      var value2 = getAttributeFunctor(props, valuePosAttr);
      var value0 = getAttr0Functor(props, valuePosAttr);
      var fill = getAttributeFunctor(props, "fill") || getAttributeFunctor(props, "color");
      var stroke = getAttributeFunctor(props, "stroke") || getAttributeFunctor(props, "color");
      var opacity = getAttributeFunctor(props, "opacity");
      var halfSpace = distance / 2 * 0.85;
      var totalSpaceAvailable = halfSpace * 2;
      var _getStackParams = getStackParams(props), sameTypeTotal = _getStackParams.sameTypeTotal, sameTypeIndex = _getStackParams.sameTypeIndex;
      data.forEach(function(row) {
        var totalSpaceCenter = line(row);
        var totalSpaceStartingPoint = totalSpaceCenter - halfSpace;
        var spaceTakenByInterBarsPixels = (sameTypeTotal - 1) / sameTypeTotal;
        var lineSize = totalSpaceAvailable / sameTypeTotal - spaceTakenByInterBarsPixels;
        var fillColor = rgb(fill(row));
        var strokeColor = rgb(stroke(row));
        var rowOpacity = opacity(row) || DEFAULT_OPACITY;
        var linePos = totalSpaceStartingPoint + lineSize * sameTypeIndex + sameTypeIndex;
        var valuePos = Math.min(value0(row), value2(row));
        var x3 = valuePosAttr === "x" ? valuePos : linePos;
        var y3 = valuePosAttr === "y" ? valuePos : linePos;
        var valueSize = Math.abs(-value0(row) + value2(row));
        var height = lineSizeAttr === "height" ? lineSize : valueSize;
        var width = lineSizeAttr === "width" ? lineSize : valueSize;
        ctx.beginPath();
        ctx.rect(x3 + marginBottom, y3 + marginTop, width, height);
        ctx.fillStyle = "rgba(" + fillColor.r + ", " + fillColor.g + ", " + fillColor.b + ", " + rowOpacity + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + rowOpacity + ")";
        ctx.stroke();
      });
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return BarSeriesCanvas2;
}(abstract_series_default);
BarSeriesCanvas.displayName = "BarSeriesCanvas";
BarSeriesCanvas.defaultProps = _extends21({}, abstract_series_default.defaultProps, {
  linePosAttr: import_prop_types19.default.string.isRequired,
  valuePosAttr: import_prop_types19.default.string.isRequired,
  lineSizeAttr: import_prop_types19.default.string.isRequired,
  valueSizeAttr: import_prop_types19.default.string.isRequired
});
BarSeriesCanvas.propTypes = _extends21({}, abstract_series_default.propTypes);
var bar_series_canvas_default = BarSeriesCanvas;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-bar-series-canvas.js
var _extends22 = Object.assign || function(target) {
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
var _createClass19 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck19(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn19(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits19(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalBarSeriesCanvas = function(_AbstractSeries) {
  _inherits19(HorizontalBarSeriesCanvas3, _AbstractSeries);
  function HorizontalBarSeriesCanvas3() {
    _classCallCheck19(this, HorizontalBarSeriesCanvas3);
    return _possibleConstructorReturn19(this, (HorizontalBarSeriesCanvas3.__proto__ || Object.getPrototypeOf(HorizontalBarSeriesCanvas3)).apply(this, arguments));
  }
  _createClass19(HorizontalBarSeriesCanvas3, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === "y";
      var zeroBaseValue = attr === "x";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      bar_series_canvas_default.renderLayer(_extends22({}, props, {
        linePosAttr: "y",
        valuePosAttr: "x",
        lineSizeAttr: "height",
        valueSizeAttr: "width"
      }), ctx);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return HorizontalBarSeriesCanvas3;
}(abstract_series_default);
HorizontalBarSeriesCanvas.displayName = "HorizontalBarSeriesCanvas";
HorizontalBarSeriesCanvas.propTypes = _extends22({}, abstract_series_default.propTypes);

// plugins/public/node_modules/react-vis/es/plot/horizontal-grid-lines.js
var import_react25 = __toESM(require("react"));
var import_prop_types20 = __toESM(require_prop_types());
var _extends23 = Object.assign || function(target) {
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
var HORIZONTAL2 = DIRECTION.HORIZONTAL;
var propTypes5 = _extends23({}, grid_lines_default.propTypes, {
  direction: import_prop_types20.default.oneOf([HORIZONTAL2])
});
var defaultProps4 = {
  direction: HORIZONTAL2,
  attr: "y"
};
function HorizontalGridLines(props) {
  return import_react25.default.createElement(grid_lines_default, props);
}
HorizontalGridLines.displayName = "HorizontalGridLines";
HorizontalGridLines.propTypes = propTypes5;
HorizontalGridLines.defaultProps = defaultProps4;
HorizontalGridLines.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-rect-series.js
var import_react27 = __toESM(require("react"));

// plugins/public/node_modules/react-vis/es/plot/series/rect-series.js
var import_react26 = __toESM(require("react"));
var import_prop_types21 = __toESM(require_prop_types());
var _extends24 = Object.assign || function(target) {
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
var _createClass20 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty5(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck20(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn20(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits20(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName10 = "rv-xy-plot__series rv-xy-plot__series--rect";
var RectSeries = function(_AbstractSeries) {
  _inherits20(RectSeries2, _AbstractSeries);
  function RectSeries2() {
    _classCallCheck20(this, RectSeries2);
    return _possibleConstructorReturn20(this, (RectSeries2.__proto__ || Object.getPrototypeOf(RectSeries2)).apply(this, arguments));
  }
  _createClass20(RectSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, data = _props.data, linePosAttr = _props.linePosAttr, lineSizeAttr = _props.lineSizeAttr, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style, valuePosAttr = _props.valuePosAttr, valueSizeAttr = _props.valueSizeAttr;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react26.default.createElement(
          animation_default,
          _extends24({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react26.default.createElement(RectSeries2, _extends24({}, this.props, { animation: null }))
        );
      }
      var lineFunctor = this._getAttributeFunctor(linePosAttr);
      var line0Functor = this._getAttr0Functor(linePosAttr);
      var valueFunctor = this._getAttributeFunctor(valuePosAttr);
      var value0Functor = this._getAttr0Functor(valuePosAttr);
      var fillFunctor = this._getAttributeFunctor("fill") || this._getAttributeFunctor("color");
      var strokeFunctor = this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color");
      var opacityFunctor = this._getAttributeFunctor("opacity");
      return import_react26.default.createElement(
        "g",
        {
          className: predefinedClassName10 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        data.map(function(d, i) {
          var _attrs;
          var attrs = (_attrs = {
            style: _extends24({
              opacity: opacityFunctor && opacityFunctor(d),
              stroke: strokeFunctor && strokeFunctor(d),
              fill: fillFunctor && fillFunctor(d)
            }, style)
          }, _defineProperty5(_attrs, linePosAttr, line0Functor(d)), _defineProperty5(_attrs, lineSizeAttr, Math.abs(lineFunctor(d) - line0Functor(d))), _defineProperty5(_attrs, valuePosAttr, Math.min(value0Functor(d), valueFunctor(d))), _defineProperty5(_attrs, valueSizeAttr, Math.abs(-value0Functor(d) + valueFunctor(d))), _defineProperty5(_attrs, "onClick", function onClick(e) {
            return _this2._valueClickHandler(d, e);
          }), _defineProperty5(_attrs, "onContextMenu", function onContextMenu(e) {
            return _this2._valueRightClickHandler(d, e);
          }), _defineProperty5(_attrs, "onMouseOver", function onMouseOver(e) {
            return _this2._valueMouseOverHandler(d, e);
          }), _defineProperty5(_attrs, "onMouseOut", function onMouseOut(e) {
            return _this2._valueMouseOutHandler(d, e);
          }), _defineProperty5(_attrs, "key", i), _attrs);
          return import_react26.default.createElement("rect", attrs);
        })
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return _extends24({}, abstract_series_default.propTypes, {
        linePosAttr: import_prop_types21.default.string,
        valuePosAttr: import_prop_types21.default.string,
        lineSizeAttr: import_prop_types21.default.string,
        valueSizeAttr: import_prop_types21.default.string
      });
    }
  }]);
  return RectSeries2;
}(abstract_series_default);
RectSeries.displayName = "RectSeries";
var rect_series_default = RectSeries;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-rect-series.js
var _extends25 = Object.assign || function(target) {
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
var _createClass21 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck21(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn21(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits21(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalRectSeries = function(_AbstractSeries) {
  _inherits21(HorizontalRectSeries2, _AbstractSeries);
  function HorizontalRectSeries2() {
    _classCallCheck21(this, HorizontalRectSeries2);
    return _possibleConstructorReturn21(this, (HorizontalRectSeries2.__proto__ || Object.getPrototypeOf(HorizontalRectSeries2)).apply(this, arguments));
  }
  _createClass21(HorizontalRectSeries2, [{
    key: "render",
    value: function render() {
      return import_react27.default.createElement(rect_series_default, _extends25({}, this.props, {
        linePosAttr: "y",
        valuePosAttr: "x",
        lineSizeAttr: "height",
        valueSizeAttr: "width"
      }));
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = false;
      var zeroBaseValue = attr === "x";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }]);
  return HorizontalRectSeries2;
}(abstract_series_default);
HorizontalRectSeries.displayName = "HorizontalRectSeries";

// plugins/public/node_modules/react-vis/es/plot/series/rect-series-canvas.js
var import_prop_types22 = __toESM(require_prop_types());
var _extends26 = Object.assign || function(target) {
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
var _createClass22 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck22(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn22(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits22(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var RectSeriesCanvas = function(_AbstractSeries) {
  _inherits22(RectSeriesCanvas2, _AbstractSeries);
  function RectSeriesCanvas2() {
    _classCallCheck22(this, RectSeriesCanvas2);
    return _possibleConstructorReturn22(this, (RectSeriesCanvas2.__proto__ || Object.getPrototypeOf(RectSeriesCanvas2)).apply(this, arguments));
  }
  _createClass22(RectSeriesCanvas2, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      var data = props.data, linePosAttr = props.linePosAttr, lineSizeAttr = props.lineSizeAttr, marginLeft = props.marginLeft, marginTop = props.marginTop, valuePosAttr = props.valuePosAttr;
      if (!data || data.length === 0) {
        return;
      }
      var line = getAttributeFunctor(props, linePosAttr);
      var line0 = getAttr0Functor(props, linePosAttr);
      var value2 = getAttributeFunctor(props, valuePosAttr);
      var value0 = getAttr0Functor(props, valuePosAttr);
      var fill = getAttributeFunctor(props, "fill") || getAttributeFunctor(props, "color");
      var stroke = getAttributeFunctor(props, "stroke") || getAttributeFunctor(props, "color");
      var opacity = getAttributeFunctor(props, "opacity");
      data.forEach(function(row) {
        var fillColor = rgb(fill(row));
        var strokeColor = rgb(stroke(row));
        var rowOpacity = opacity(row) || DEFAULT_OPACITY;
        var linePos = line0(row);
        var valuePos = Math.min(value0(row), value2(row));
        var x3 = valuePosAttr === "x" ? valuePos : linePos;
        var y3 = valuePosAttr === "y" ? valuePos : linePos;
        var lineSize = Math.abs(line(row) - line0(row));
        var valueSize = Math.abs(-value0(row) + value2(row));
        var height = lineSizeAttr === "height" ? lineSize : valueSize;
        var width = lineSizeAttr === "width" ? lineSize : valueSize;
        ctx.beginPath();
        ctx.rect(x3 + marginLeft, y3 + marginTop, width, height);
        ctx.fillStyle = "rgba(" + fillColor.r + ", " + fillColor.g + ", " + fillColor.b + ", " + rowOpacity + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + rowOpacity + ")";
        ctx.stroke();
      });
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return RectSeriesCanvas2;
}(abstract_series_default);
RectSeriesCanvas.displayName = "RectSeriesCanvas";
RectSeriesCanvas.defaultProps = _extends26({}, abstract_series_default.defaultProps, {
  linePosAttr: import_prop_types22.default.string.isRequired,
  valuePosAttr: import_prop_types22.default.string.isRequired,
  lineSizeAttr: import_prop_types22.default.string.isRequired,
  valueSizeAttr: import_prop_types22.default.string.isRequired
});
RectSeriesCanvas.propTypes = _extends26({}, abstract_series_default.propTypes);
var rect_series_canvas_default = RectSeriesCanvas;

// plugins/public/node_modules/react-vis/es/plot/series/horizontal-rect-series-canvas.js
var _extends27 = Object.assign || function(target) {
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
var _createClass23 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck23(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn23(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits23(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalRectSeriesCanvas = function(_AbstractSeries) {
  _inherits23(HorizontalRectSeriesCanvas3, _AbstractSeries);
  function HorizontalRectSeriesCanvas3() {
    _classCallCheck23(this, HorizontalRectSeriesCanvas3);
    return _possibleConstructorReturn23(this, (HorizontalRectSeriesCanvas3.__proto__ || Object.getPrototypeOf(HorizontalRectSeriesCanvas3)).apply(this, arguments));
  }
  _createClass23(HorizontalRectSeriesCanvas3, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = false;
      var zeroBaseValue = attr === "x";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      rect_series_canvas_default.renderLayer(_extends27({}, props, {
        linePosAttr: "y",
        valuePosAttr: "x",
        lineSizeAttr: "height",
        valueSizeAttr: "width"
      }), ctx);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return HorizontalRectSeriesCanvas3;
}(abstract_series_default);
HorizontalRectSeriesCanvas.displayName = "HorizontalRectSeriesCanvas";
HorizontalRectSeriesCanvas.propTypes = _extends27({}, abstract_series_default.propTypes);

// plugins/public/node_modules/react-vis/es/plot/series/label-series.js
var import_react28 = __toESM(require("react"));
var import_prop_types23 = __toESM(require_prop_types());
var _extends28 = Object.assign || function(target) {
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
var _createClass24 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck24(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn24(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits24(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName11 = "rv-xy-plot__series rv-xy-plot__series--label";
var getTextAnchor = function getTextAnchor2(labelAnchorX, leftOfMiddle) {
  return labelAnchorX ? labelAnchorX : leftOfMiddle ? "start" : "end";
};
var getDominantBaseline = function getDominantBaseline2(labelAnchorY, aboveMiddle) {
  return labelAnchorY ? labelAnchorY : aboveMiddle ? "text-before-edge" : "text-after-edge";
};
var LabelSeries = function(_AbstractSeries) {
  _inherits24(LabelSeries2, _AbstractSeries);
  function LabelSeries2() {
    _classCallCheck24(this, LabelSeries2);
    return _possibleConstructorReturn24(this, (LabelSeries2.__proto__ || Object.getPrototypeOf(LabelSeries2)).apply(this, arguments));
  }
  _createClass24(LabelSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, allowOffsetToBeReversed = _props.allowOffsetToBeReversed, className = _props.className, data = _props.data, _data = _props._data, getLabel5 = _props.getLabel, marginLeft = _props.marginLeft, marginTop = _props.marginTop, rotation = _props.rotation, style = _props.style, xRange = _props.xRange, yRange = _props.yRange, labelAnchorX = _props.labelAnchorX, labelAnchorY = _props.labelAnchorY;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react28.default.createElement(
          animation_default,
          _extends28({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react28.default.createElement(LabelSeries2, _extends28({}, this.props, { animation: null, _data: data }))
        );
      }
      var xFunctor = this._getAttributeFunctor("x");
      var yFunctor = this._getAttributeFunctor("y");
      return import_react28.default.createElement(
        "g",
        {
          className: predefinedClassName11 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")",
          style
        },
        data.reduce(function(res, d, i) {
          var markStyle = d.style, xOffset = d.xOffset, yOffset = d.yOffset;
          if (!getLabel5(d)) {
            return res;
          }
          var xVal = xFunctor(d);
          var yVal = yFunctor(d);
          var leftOfMiddle = xVal < (xRange[1] - xRange[0]) / 2;
          var aboveMiddle = yVal < Math.abs(yRange[1] - yRange[0]) / 2;
          var x3 = xVal + (allowOffsetToBeReversed && leftOfMiddle ? -1 : 1) * (xOffset || 0);
          var y3 = yVal + (allowOffsetToBeReversed && aboveMiddle ? -1 : 1) * (yOffset || 0);
          var hasRotationValueSet = d.rotation === 0 || d.rotation;
          var labelRotation = hasRotationValueSet ? d.rotation : rotation;
          var attrs = _extends28({
            dominantBaseline: getDominantBaseline(labelAnchorY, aboveMiddle),
            className: "rv-xy-plot__series--label-text",
            key: i,
            onClick: function onClick(e) {
              return _this2._valueClickHandler(d, e);
            },
            onContextMenu: function onContextMenu(e) {
              return _this2._valueRightClickHandler(d, e);
            },
            onMouseOver: function onMouseOver(e) {
              return _this2._valueMouseOverHandler(d, e);
            },
            onMouseOut: function onMouseOut(e) {
              return _this2._valueMouseOutHandler(d, e);
            },
            textAnchor: getTextAnchor(labelAnchorX, leftOfMiddle),
            x: x3,
            y: y3,
            transform: "rotate(" + labelRotation + "," + x3 + "," + y3 + ")"
          }, markStyle);
          var textContent = getLabel5(_data ? _data[i] : d);
          return res.concat([import_react28.default.createElement(
            "text",
            attrs,
            textContent
          )]);
        }, [])
      );
    }
  }]);
  return LabelSeries2;
}(abstract_series_default);
LabelSeries.propTypes = {
  animation: import_prop_types23.default.bool,
  allowOffsetToBeReversed: import_prop_types23.default.bool,
  className: import_prop_types23.default.string,
  data: import_prop_types23.default.arrayOf(import_prop_types23.default.shape({
    x: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
    y: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
    angle: import_prop_types23.default.number,
    radius: import_prop_types23.default.number,
    label: import_prop_types23.default.string,
    xOffset: import_prop_types23.default.number,
    yOffset: import_prop_types23.default.number,
    style: import_prop_types23.default.object
  })).isRequired,
  marginLeft: import_prop_types23.default.number,
  marginTop: import_prop_types23.default.number,
  rotation: import_prop_types23.default.number,
  style: import_prop_types23.default.object,
  xRange: import_prop_types23.default.arrayOf(import_prop_types23.default.number),
  yRange: import_prop_types23.default.arrayOf(import_prop_types23.default.number),
  labelAnchorX: import_prop_types23.default.string,
  labelAnchorY: import_prop_types23.default.string
};
LabelSeries.defaultProps = _extends28({}, abstract_series_default.defaultProps, {
  animation: false,
  rotation: 0,
  getLabel: function getLabel(d) {
    return d.label;
  }
});
LabelSeries.displayName = "LabelSeries";
var label_series_default = LabelSeries;

// plugins/public/node_modules/react-vis/es/plot/series/line-mark-series.js
var import_react31 = __toESM(require("react"));
var import_prop_types26 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/plot/series/line-series.js
var import_react29 = __toESM(require("react"));
var import_prop_types24 = __toESM(require_prop_types());
var _extends29 = Object.assign || function(target) {
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
var _createClass25 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck25(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn25(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits25(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName12 = "rv-xy-plot__series rv-xy-plot__series--line";
var STROKE_STYLES = {
  dashed: "6, 2",
  solid: null
};
var LineSeries = function(_AbstractSeries) {
  _inherits25(LineSeries2, _AbstractSeries);
  function LineSeries2() {
    _classCallCheck25(this, LineSeries2);
    return _possibleConstructorReturn25(this, (LineSeries2.__proto__ || Object.getPrototypeOf(LineSeries2)).apply(this, arguments));
  }
  _createClass25(LineSeries2, [{
    key: "_renderLine",
    value: function _renderLine(data, x3, y3, curve, getNull4) {
      var line = line_default();
      if (curve !== null) {
        if (typeof curve === "string" && src_exports[curve]) {
          line = line.curve(src_exports[curve]);
        } else if (typeof curve === "function") {
          line = line.curve(curve);
        }
      }
      line = line.defined(getNull4);
      line = line.x(x3).y(y3);
      return line(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, animation = _props.animation, className = _props.className, data = _props.data;
      if (this.props.nullAccessor) {
        warning("nullAccessor has been renamed to getNull", true);
      }
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react29.default.createElement(
          animation_default,
          _extends29({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react29.default.createElement(LineSeries2, _extends29({}, this.props, { animation: null }))
        );
      }
      var _props2 = this.props, curve = _props2.curve, marginLeft = _props2.marginLeft, marginTop = _props2.marginTop, strokeDasharray = _props2.strokeDasharray, strokeStyle = _props2.strokeStyle, strokeWidth = _props2.strokeWidth, style = _props2.style;
      var x3 = this._getAttributeFunctor("x");
      var y3 = this._getAttributeFunctor("y");
      var stroke = this._getAttributeValue("stroke") || this._getAttributeValue("color");
      var newOpacity = this._getAttributeValue("opacity");
      var opacity = Number.isFinite(newOpacity) ? newOpacity : DEFAULT_OPACITY;
      var getNull4 = this.props.nullAccessor || this.props.getNull;
      var d = this._renderLine(data, x3, y3, curve, getNull4);
      return import_react29.default.createElement("path", {
        d,
        className: predefinedClassName12 + " " + className,
        transform: "translate(" + marginLeft + "," + marginTop + ")",
        onMouseOver: this._seriesMouseOverHandler,
        onMouseOut: this._seriesMouseOutHandler,
        onClick: this._seriesClickHandler,
        onContextMenu: this._seriesRightClickHandler,
        style: _extends29({
          opacity,
          strokeDasharray: STROKE_STYLES[strokeStyle] || strokeDasharray,
          strokeWidth,
          stroke
        }, style)
      });
    }
  }]);
  return LineSeries2;
}(abstract_series_default);
LineSeries.displayName = "LineSeries";
LineSeries.propTypes = _extends29({}, abstract_series_default.propTypes, {
  strokeStyle: import_prop_types24.default.oneOf(Object.keys(STROKE_STYLES)),
  curve: import_prop_types24.default.oneOfType([import_prop_types24.default.string, import_prop_types24.default.func]),
  getNull: import_prop_types24.default.func
});
LineSeries.defaultProps = _extends29({}, abstract_series_default.defaultProps, {
  strokeStyle: "solid",
  style: {},
  opacity: 1,
  curve: null,
  className: "",
  getNull: function getNull2() {
    return true;
  }
});
var line_series_default = LineSeries;

// plugins/public/node_modules/react-vis/es/plot/series/mark-series.js
var import_react30 = __toESM(require("react"));
var import_prop_types25 = __toESM(require_prop_types());
var _extends30 = Object.assign || function(target) {
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
var _createClass26 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck26(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn26(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits26(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName13 = "rv-xy-plot__series rv-xy-plot__series--mark";
var DEFAULT_STROKE_WIDTH = 1;
var MarkSeries = function(_AbstractSeries) {
  _inherits26(MarkSeries2, _AbstractSeries);
  function MarkSeries2() {
    _classCallCheck26(this, MarkSeries2);
    return _possibleConstructorReturn26(this, (MarkSeries2.__proto__ || Object.getPrototypeOf(MarkSeries2)).apply(this, arguments));
  }
  _createClass26(MarkSeries2, [{
    key: "_renderCircle",
    value: function _renderCircle(d, i, strokeWidth, style, scalingFunctions) {
      var _this2 = this;
      var fill = scalingFunctions.fill, opacity = scalingFunctions.opacity, size = scalingFunctions.size, stroke = scalingFunctions.stroke, x3 = scalingFunctions.x, y3 = scalingFunctions.y;
      var attrs = {
        r: size ? size(d) : DEFAULT_SIZE,
        cx: x3(d),
        cy: y3(d),
        style: _extends30({
          opacity: opacity ? opacity(d) : DEFAULT_OPACITY,
          stroke: stroke && stroke(d),
          fill: fill && fill(d),
          strokeWidth: strokeWidth || DEFAULT_STROKE_WIDTH
        }, style),
        key: i,
        onClick: function onClick(e) {
          return _this2._valueClickHandler(d, e);
        },
        onContextMenu: function onContextMenu(e) {
          return _this2._valueRightClickHandler(d, e);
        },
        onMouseOver: function onMouseOver(e) {
          return _this2._valueMouseOverHandler(d, e);
        },
        onMouseOut: function onMouseOut(e) {
          return _this2._valueMouseOutHandler(d, e);
        }
      };
      return import_react30.default.createElement("circle", attrs);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _props = this.props, animation = _props.animation, className = _props.className, data = _props.data, marginLeft = _props.marginLeft, marginTop = _props.marginTop, strokeWidth = _props.strokeWidth, style = _props.style;
      if (this.props.nullAccessor) {
        warning("nullAccessor has been renamed to getNull", true);
      }
      var getNull4 = this.props.nullAccessor || this.props.getNull;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react30.default.createElement(
          animation_default,
          _extends30({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react30.default.createElement(MarkSeries2, _extends30({}, this.props, { animation: null }))
        );
      }
      var scalingFunctions = {
        fill: this._getAttributeFunctor("fill") || this._getAttributeFunctor("color"),
        opacity: this._getAttributeFunctor("opacity"),
        size: this._getAttributeFunctor("size"),
        stroke: this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color"),
        x: this._getAttributeFunctor("x"),
        y: this._getAttributeFunctor("y")
      };
      return import_react30.default.createElement(
        "g",
        {
          className: predefinedClassName13 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        data.map(function(d, i) {
          return getNull4(d) && _this3._renderCircle(d, i, strokeWidth, style, scalingFunctions);
        })
      );
    }
  }]);
  return MarkSeries2;
}(abstract_series_default);
MarkSeries.displayName = "MarkSeries";
MarkSeries.propTypes = _extends30({}, abstract_series_default.propTypes, {
  getNull: import_prop_types25.default.func,
  strokeWidth: import_prop_types25.default.number
});
MarkSeries.defaultProps = {
  getNull: function getNull3() {
    return true;
  }
};
var mark_series_default = MarkSeries;

// plugins/public/node_modules/react-vis/es/plot/series/line-mark-series.js
var _createClass27 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends31 = Object.assign || function(target) {
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
function _classCallCheck27(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn27(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits27(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var propTypes6 = _extends31({}, line_series_default.propTypes, {
  lineStyle: import_prop_types26.default.object,
  markStyle: import_prop_types26.default.object
});
var LineMarkSeries = function(_AbstractSeries) {
  _inherits27(LineMarkSeries2, _AbstractSeries);
  function LineMarkSeries2() {
    _classCallCheck27(this, LineMarkSeries2);
    return _possibleConstructorReturn27(this, (LineMarkSeries2.__proto__ || Object.getPrototypeOf(LineMarkSeries2)).apply(this, arguments));
  }
  _createClass27(LineMarkSeries2, [{
    key: "render",
    value: function render() {
      var _props = this.props, lineStyle = _props.lineStyle, markStyle = _props.markStyle, style = _props.style;
      return import_react31.default.createElement(
        "g",
        { className: "rv-xy-plot__series rv-xy-plot__series--linemark" },
        import_react31.default.createElement(line_series_default, _extends31({}, this.props, { style: _extends31({}, style, lineStyle) })),
        import_react31.default.createElement(mark_series_default, _extends31({}, this.props, { style: _extends31({}, style, markStyle) }))
      );
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return _extends31({}, line_series_default.defaultProps, {
        lineStyle: {},
        markStyle: {}
      });
    }
  }]);
  return LineMarkSeries2;
}(abstract_series_default);
LineMarkSeries.displayName = "LineMarkSeries";
LineMarkSeries.propTypes = propTypes6;
var line_mark_series_default = LineMarkSeries;

// plugins/public/node_modules/react-vis/es/plot/series/mark-series-canvas.js
var _extends32 = Object.assign || function(target) {
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
var _createClass28 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck28(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn28(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits28(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var MarkSeriesCanvas = function(_AbstractSeries) {
  _inherits28(MarkSeriesCanvas2, _AbstractSeries);
  function MarkSeriesCanvas2() {
    _classCallCheck28(this, MarkSeriesCanvas2);
    return _possibleConstructorReturn28(this, (MarkSeriesCanvas2.__proto__ || Object.getPrototypeOf(MarkSeriesCanvas2)).apply(this, arguments));
  }
  _createClass28(MarkSeriesCanvas2, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      var data = props.data, marginLeft = props.marginLeft, marginTop = props.marginTop;
      var x3 = getAttributeFunctor(props, "x");
      var y3 = getAttributeFunctor(props, "y");
      var size = getAttributeFunctor(props, "size") || function(p) {
        return DEFAULT_SIZE;
      };
      var fill = getAttributeFunctor(props, "fill") || getAttributeFunctor(props, "color");
      var stroke = getAttributeFunctor(props, "stroke") || getAttributeFunctor(props, "color");
      var opacity = getAttributeFunctor(props, "opacity");
      data.forEach(function(row) {
        var fillColor = rgb(fill(row));
        var strokeColor = rgb(stroke(row));
        var rowOpacity = opacity(row) || DEFAULT_OPACITY;
        ctx.beginPath();
        ctx.arc(x3(row) + marginLeft, y3(row) + marginTop, size(row), 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(" + fillColor.r + ", " + fillColor.g + ", " + fillColor.b + ", " + rowOpacity + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + rowOpacity + ")";
        ctx.stroke();
      });
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return MarkSeriesCanvas2;
}(abstract_series_default);
MarkSeriesCanvas.displayName = "MarkSeriesCanvas";
MarkSeriesCanvas.propTypes = _extends32({}, abstract_series_default.propTypes);
var mark_series_canvas_default = MarkSeriesCanvas;

// plugins/public/node_modules/react-vis/es/plot/series/line-series-canvas.js
var import_prop_types27 = __toESM(require_prop_types());
var import_react32 = __toESM(require("react"));
var _extends33 = Object.assign || function(target) {
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
var _createClass29 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck29(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn29(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits29(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var LineSeriesCanvas = function(_AbstractSeries) {
  _inherits29(LineSeriesCanvas2, _AbstractSeries);
  function LineSeriesCanvas2() {
    _classCallCheck29(this, LineSeriesCanvas2);
    return _possibleConstructorReturn29(this, (LineSeriesCanvas2.__proto__ || Object.getPrototypeOf(LineSeriesCanvas2)).apply(this, arguments));
  }
  _createClass29(LineSeriesCanvas2, [{
    key: "render",
    value: function render() {
      return import_react32.default.createElement("div", null);
    }
  }], [{
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      var curve = props.curve, data = props.data, marginLeft = props.marginLeft, marginTop = props.marginTop, strokeWidth = props.strokeWidth, strokeDasharray = props.strokeDasharray;
      if (!data || data.length === 0) {
        return;
      }
      var x3 = getAttributeFunctor(props, "x");
      var y3 = getAttributeFunctor(props, "y");
      var stroke = getAttributeValue(props, "stroke") || getAttributeValue(props, "color");
      var strokeColor = rgb(stroke);
      var newOpacity = getAttributeValue(props, "opacity");
      var opacity = Number.isFinite(newOpacity) ? newOpacity : DEFAULT_OPACITY;
      var line = line_default().x(function(row) {
        return x3(row) + marginLeft;
      }).y(function(row) {
        return y3(row) + marginTop;
      });
      if (typeof curve === "string" && src_exports[curve]) {
        line = line.curve(src_exports[curve]);
      } else if (typeof curve === "function") {
        line = line.curve(curve);
      }
      ctx.beginPath();
      ctx.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + opacity + ")";
      ctx.lineWidth = strokeWidth;
      if (strokeDasharray) {
        ctx.setLineDash(strokeDasharray);
      }
      line.context(ctx)(data);
      ctx.stroke();
      ctx.closePath();
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return LineSeriesCanvas2;
}(abstract_series_default);
LineSeriesCanvas.displayName = "LineSeriesCanvas";
LineSeriesCanvas.defaultProps = _extends33({}, abstract_series_default.defaultProps, {
  strokeWidth: 2
});
LineSeriesCanvas.propTypes = _extends33({}, abstract_series_default.propTypes, {
  strokeWidth: import_prop_types27.default.number
});
var line_series_canvas_default = LineSeriesCanvas;

// plugins/public/node_modules/react-vis/es/plot/series/line-mark-series-canvas.js
var _extends34 = Object.assign || function(target) {
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
var _createClass30 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck30(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn30(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits30(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var LineMarkSeriesCanvas = function(_AbstractSeries) {
  _inherits30(LineMarkSeriesCanvas2, _AbstractSeries);
  function LineMarkSeriesCanvas2() {
    _classCallCheck30(this, LineMarkSeriesCanvas2);
    return _possibleConstructorReturn30(this, (LineMarkSeriesCanvas2.__proto__ || Object.getPrototypeOf(LineMarkSeriesCanvas2)).apply(this, arguments));
  }
  _createClass30(LineMarkSeriesCanvas2, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      line_series_canvas_default.renderLayer(props, ctx);
      mark_series_canvas_default.renderLayer(props, ctx);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return LineMarkSeriesCanvas2;
}(abstract_series_default);
LineMarkSeriesCanvas.displayName = "LineMarkSeriesCanvas";
LineMarkSeriesCanvas.propTypes = _extends34({}, abstract_series_default.propTypes);

// plugins/public/node_modules/react-vis/es/plot/series/polygon-series.js
var import_react33 = __toESM(require("react"));
var _extends35 = Object.assign || function(target) {
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
var _createClass31 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck31(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn31(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits31(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName14 = "rv-xy-plot__series rv-xy-plot__series--polygon";
var DEFAULT_COLOR2 = "#12939A";
var generatePath = function generatePath2(data, xFunctor, yFunctor) {
  return data.reduce(function(res, row, i) {
    return res + " " + (i ? "L" : "M") + xFunctor(row) + " " + yFunctor(row);
  }, "") + " Z";
};
var PolygonSeries = function(_AbstractSeries) {
  _inherits31(PolygonSeries2, _AbstractSeries);
  function PolygonSeries2() {
    _classCallCheck31(this, PolygonSeries2);
    return _possibleConstructorReturn31(this, (PolygonSeries2.__proto__ || Object.getPrototypeOf(PolygonSeries2)).apply(this, arguments));
  }
  _createClass31(PolygonSeries2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, animation = _props.animation, color2 = _props.color, className = _props.className, data = _props.data, marginLeft = _props.marginLeft, marginTop = _props.marginTop, style = _props.style;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react33.default.createElement(
          animation_default,
          _extends35({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react33.default.createElement(PolygonSeries2, _extends35({}, this.props, { animation: null }))
        );
      }
      var xFunctor = this._getAttributeFunctor("x");
      var yFunctor = this._getAttributeFunctor("y");
      return import_react33.default.createElement("path", {
        className: predefinedClassName14 + " " + className,
        onMouseOver: function onMouseOver(e) {
          return _this2._seriesMouseOverHandler(data, e);
        },
        onMouseOut: function onMouseOut(e) {
          return _this2._seriesMouseOutHandler(data, e);
        },
        onClick: this._seriesClickHandler,
        onContextMenu: this._seriesRightClickHandler,
        fill: color2 || DEFAULT_COLOR2,
        style,
        d: generatePath(data, xFunctor, yFunctor),
        transform: "translate(" + marginLeft + "," + marginTop + ")"
      });
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return _extends35({}, abstract_series_default.propTypes);
    }
  }]);
  return PolygonSeries2;
}(abstract_series_default);
PolygonSeries.displayName = "PolygonSeries";
var polygon_series_default = PolygonSeries;

// plugins/public/node_modules/react-vis/es/plot/series/vertical-bar-series.js
var import_react34 = __toESM(require("react"));
var _extends36 = Object.assign || function(target) {
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
var _createClass32 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck32(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn32(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits32(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var VerticalBarSeries = function(_AbstractSeries) {
  _inherits32(VerticalBarSeries2, _AbstractSeries);
  function VerticalBarSeries2() {
    _classCallCheck32(this, VerticalBarSeries2);
    return _possibleConstructorReturn32(this, (VerticalBarSeries2.__proto__ || Object.getPrototypeOf(VerticalBarSeries2)).apply(this, arguments));
  }
  _createClass32(VerticalBarSeries2, [{
    key: "render",
    value: function render() {
      return import_react34.default.createElement(bar_series_default, _extends36({}, this.props, {
        linePosAttr: "x",
        valuePosAttr: "y",
        lineSizeAttr: "width",
        valueSizeAttr: "height"
      }));
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === "x";
      var zeroBaseValue = attr === "y";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }]);
  return VerticalBarSeries2;
}(abstract_series_default);
VerticalBarSeries.displayName = "VerticalBarSeries";

// plugins/public/node_modules/react-vis/es/plot/series/vertical-bar-series-canvas.js
var _extends37 = Object.assign || function(target) {
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
var _createClass33 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck33(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn33(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits33(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalBarSeriesCanvas2 = function(_AbstractSeries) {
  _inherits33(HorizontalBarSeriesCanvas3, _AbstractSeries);
  function HorizontalBarSeriesCanvas3() {
    _classCallCheck33(this, HorizontalBarSeriesCanvas3);
    return _possibleConstructorReturn33(this, (HorizontalBarSeriesCanvas3.__proto__ || Object.getPrototypeOf(HorizontalBarSeriesCanvas3)).apply(this, arguments));
  }
  _createClass33(HorizontalBarSeriesCanvas3, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === "x";
      var zeroBaseValue = attr === "y";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      bar_series_canvas_default.renderLayer(_extends37({}, props, {
        linePosAttr: "x",
        valuePosAttr: "y",
        lineSizeAttr: "width",
        valueSizeAttr: "height"
      }), ctx);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return HorizontalBarSeriesCanvas3;
}(abstract_series_default);
HorizontalBarSeriesCanvas2.displayName = "HorizontalBarSeriesCanvas";
HorizontalBarSeriesCanvas2.propTypes = _extends37({}, abstract_series_default.propTypes);

// plugins/public/node_modules/react-vis/es/plot/vertical-grid-lines.js
var import_react35 = __toESM(require("react"));
var import_prop_types28 = __toESM(require_prop_types());
var _extends38 = Object.assign || function(target) {
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
var VERTICAL2 = DIRECTION.VERTICAL;
var propTypes7 = _extends38({}, grid_lines_default.propTypes, {
  direction: import_prop_types28.default.oneOf([VERTICAL2])
});
var defaultProps5 = {
  direction: VERTICAL2,
  attr: "x"
};
function VerticalGridLines(props) {
  return import_react35.default.createElement(grid_lines_default, props);
}
VerticalGridLines.displayName = "VerticalGridLines";
VerticalGridLines.propTypes = propTypes7;
VerticalGridLines.defaultProps = defaultProps5;
VerticalGridLines.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/plot/series/vertical-rect-series.js
var import_react36 = __toESM(require("react"));
var _extends39 = Object.assign || function(target) {
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
var _createClass34 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck34(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn34(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits34(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var VerticalRectSeries = function(_AbstractSeries) {
  _inherits34(VerticalRectSeries2, _AbstractSeries);
  function VerticalRectSeries2() {
    _classCallCheck34(this, VerticalRectSeries2);
    return _possibleConstructorReturn34(this, (VerticalRectSeries2.__proto__ || Object.getPrototypeOf(VerticalRectSeries2)).apply(this, arguments));
  }
  _createClass34(VerticalRectSeries2, [{
    key: "render",
    value: function render() {
      return import_react36.default.createElement(rect_series_default, _extends39({}, this.props, {
        linePosAttr: "x",
        valuePosAttr: "y",
        lineSizeAttr: "width",
        valueSizeAttr: "height"
      }));
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = false;
      var zeroBaseValue = attr === "y";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }]);
  return VerticalRectSeries2;
}(abstract_series_default);
VerticalRectSeries.displayName = "VerticalRectSeries";
var vertical_rect_series_default = VerticalRectSeries;

// plugins/public/node_modules/react-vis/es/plot/series/vertical-rect-series-canvas.js
var _extends40 = Object.assign || function(target) {
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
var _createClass35 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck35(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn35(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits35(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HorizontalRectSeriesCanvas2 = function(_AbstractSeries) {
  _inherits35(HorizontalRectSeriesCanvas3, _AbstractSeries);
  function HorizontalRectSeriesCanvas3() {
    _classCallCheck35(this, HorizontalRectSeriesCanvas3);
    return _possibleConstructorReturn35(this, (HorizontalRectSeriesCanvas3.__proto__ || Object.getPrototypeOf(HorizontalRectSeriesCanvas3)).apply(this, arguments));
  }
  _createClass35(HorizontalRectSeriesCanvas3, [{
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "getParentConfig",
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = false;
      var zeroBaseValue = attr === "y";
      return {
        isDomainAdjustmentNeeded,
        zeroBaseValue
      };
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(props, ctx) {
      rect_series_canvas_default.renderLayer(_extends40({}, props, {
        linePosAttr: "x",
        valuePosAttr: "y",
        lineSizeAttr: "width",
        valueSizeAttr: "height"
      }), ctx);
    }
  }, {
    key: "requiresSVG",
    get: function get() {
      return false;
    }
  }, {
    key: "isCanvas",
    get: function get() {
      return true;
    }
  }]);
  return HorizontalRectSeriesCanvas3;
}(abstract_series_default);
HorizontalRectSeriesCanvas2.displayName = "HorizontalRectSeriesCanvas";
HorizontalRectSeriesCanvas2.propTypes = _extends40({}, abstract_series_default.propTypes);

// plugins/public/node_modules/react-vis/es/plot/voronoi.js
var import_react37 = __toESM(require("react"));
var import_prop_types29 = __toESM(require_prop_types());
var _extends41 = Object.assign || function(target) {
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
var NOOP = function NOOP2(f) {
  return f;
};
function getNodeIndex(evt) {
  var _evt$nativeEvent = evt.nativeEvent, pageX = _evt$nativeEvent.pageX, pageY = _evt$nativeEvent.pageY;
  var target = document.elementFromPoint(pageX, pageY);
  if (!target) {
    return -1;
  }
  var parentNode = target.parentNode;
  return Array.prototype.indexOf.call(parentNode.childNodes, target);
}
function getExtent(_ref) {
  var innerWidth = _ref.innerWidth, innerHeight = _ref.innerHeight, marginLeft = _ref.marginLeft, marginTop = _ref.marginTop;
  return [[marginLeft, marginTop], [innerWidth + marginLeft, innerHeight + marginTop]];
}
function Voronoi(props) {
  var className = props.className, extent = props.extent, nodes = props.nodes, onBlur = props.onBlur, _onClick = props.onClick, _onMouseUp = props.onMouseUp, _onMouseDown = props.onMouseDown, onHover = props.onHover, polygonStyle = props.polygonStyle, style = props.style, x3 = props.x, y3 = props.y;
  var voronoiInstance = voronoi_default().x(x3 || getAttributeFunctor(props, "x")).y(y3 || getAttributeFunctor(props, "y")).extent(extent || getExtent(props));
  var polygons = voronoiInstance.polygons(nodes);
  var handleTouchEvent = function handleTouchEvent2(handler) {
    return function(evt) {
      evt.preventDefault();
      var index = getNodeIndex(evt);
      if (index > -1 && index < polygons.length) {
        var d = polygons[index];
        handler(d.data);
      }
    };
  };
  return import_react37.default.createElement(
    "g",
    {
      className: className + " rv-voronoi",
      style,
      onTouchEnd: handleTouchEvent(_onMouseUp),
      onTouchStart: handleTouchEvent(_onMouseDown),
      onTouchMove: handleTouchEvent(onHover),
      onTouchCancel: handleTouchEvent(onBlur)
    },
    polygons.map(function(d, i) {
      return import_react37.default.createElement("path", {
        className: "rv-voronoi__cell " + (d.data && d.data.className || ""),
        d: "M" + d.join("L") + "Z",
        onClick: function onClick() {
          return _onClick(d.data);
        },
        onMouseUp: function onMouseUp() {
          return _onMouseUp(d.data);
        },
        onMouseDown: function onMouseDown() {
          return _onMouseDown(d.data);
        },
        onMouseOver: function onMouseOver() {
          return onHover(d.data);
        },
        onMouseOut: function onMouseOut() {
          return onBlur(d.data);
        },
        fill: "none",
        style: _extends41({
          pointerEvents: "all"
        }, polygonStyle, d.data && d.data.style),
        key: i
      });
    })
  );
}
Voronoi.requiresSVG = true;
Voronoi.displayName = "Voronoi";
Voronoi.defaultProps = {
  className: "",
  onBlur: NOOP,
  onClick: NOOP,
  onHover: NOOP,
  onMouseDown: NOOP,
  onMouseUp: NOOP
};
Voronoi.propTypes = {
  className: import_prop_types29.default.string,
  extent: import_prop_types29.default.arrayOf(import_prop_types29.default.arrayOf(import_prop_types29.default.number)),
  nodes: import_prop_types29.default.arrayOf(import_prop_types29.default.object).isRequired,
  onBlur: import_prop_types29.default.func,
  onClick: import_prop_types29.default.func,
  onHover: import_prop_types29.default.func,
  onMouseDown: import_prop_types29.default.func,
  onMouseUp: import_prop_types29.default.func,
  x: import_prop_types29.default.func,
  y: import_prop_types29.default.func
};
var voronoi_default2 = Voronoi;

// plugins/public/node_modules/react-vis/es/plot/series/whisker-series.js
var import_react38 = __toESM(require("react"));
var import_prop_types30 = __toESM(require_prop_types());
var _createClass36 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends42 = Object.assign || function(target) {
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
function _classCallCheck36(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn36(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits36(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName15 = "rv-xy-plot__series rv-xy-plot__series--whisker";
var DEFAULT_STROKE_WIDTH2 = 1;
var DEFAULT_CROSS_BAR_WIDTH = 6;
var renderWhiskerMark = function renderWhiskerMark2(whiskerMarkProps) {
  return function(d, i) {
    var crossBarWidth = whiskerMarkProps.crossBarWidth, opacityFunctor = whiskerMarkProps.opacityFunctor, sizeFunctor = whiskerMarkProps.sizeFunctor, strokeFunctor = whiskerMarkProps.strokeFunctor, strokeWidth = whiskerMarkProps.strokeWidth, style = whiskerMarkProps.style, valueClickHandler = whiskerMarkProps.valueClickHandler, valueMouseOutHandler = whiskerMarkProps.valueMouseOutHandler, valueMouseOverHandler = whiskerMarkProps.valueMouseOverHandler, valueRightClickHandler = whiskerMarkProps.valueRightClickHandler, xFunctor = whiskerMarkProps.xFunctor, yFunctor = whiskerMarkProps.yFunctor;
    var r = sizeFunctor ? sizeFunctor(d) : 0;
    var cx = xFunctor(d);
    var cy = yFunctor(d);
    var positiveXVariance = xFunctor({ x: d.x + d.xVariance / 2 });
    var negativeXVariance = xFunctor({ x: d.x - d.xVariance / 2 });
    var positiveYVariance = yFunctor({ y: d.y + d.yVariance / 2 });
    var negativeYVariance = yFunctor({ y: d.y - d.yVariance / 2 });
    var hasXWhiskers = positiveXVariance && cx + r < positiveXVariance;
    var hasYWhiskers = positiveYVariance && cy - r > positiveYVariance;
    if (!hasXWhiskers && !hasYWhiskers) {
      return null;
    }
    var styleAttr = _extends42({
      opacity: opacityFunctor ? opacityFunctor(d) : DEFAULT_OPACITY,
      stroke: strokeFunctor && strokeFunctor(d),
      strokeWidth: strokeWidth || DEFAULT_STROKE_WIDTH2
    }, style);
    var crossBarExtension = crossBarWidth / 2;
    var rightLineAttrs = {
      x1: cx + r,
      y1: cy,
      x2: positiveXVariance,
      y2: cy,
      style: styleAttr
    };
    var leftLineAttrs = {
      x1: cx - r,
      y1: cy,
      x2: negativeXVariance,
      y2: cy,
      style: styleAttr
    };
    var rightCrossBarAttrs = {
      x1: positiveXVariance,
      y1: cy - crossBarExtension,
      x2: positiveXVariance,
      y2: cy + crossBarExtension,
      style: styleAttr
    };
    var leftCrossBarAttrs = {
      x1: negativeXVariance,
      y1: cy - crossBarExtension,
      x2: negativeXVariance,
      y2: cy + crossBarExtension,
      style: styleAttr
    };
    var upperLineAttrs = {
      x1: cx,
      y1: cy - r,
      x2: cx,
      y2: positiveYVariance,
      style: styleAttr
    };
    var lowerLineAttrs = {
      x1: cx,
      y1: cy + r,
      x2: cx,
      y2: negativeYVariance,
      style: styleAttr
    };
    var upperCrossBarAttrs = {
      x1: cx - crossBarExtension,
      y1: positiveYVariance,
      x2: cx + crossBarExtension,
      y2: positiveYVariance,
      style: styleAttr
    };
    var lowerCrossBarAttrs = {
      x1: cx - crossBarExtension,
      y1: negativeYVariance,
      x2: cx + crossBarExtension,
      y2: negativeYVariance,
      style: styleAttr
    };
    return import_react38.default.createElement(
      "g",
      {
        className: "mark-whiskers",
        key: i,
        onClick: function onClick(e) {
          return valueClickHandler(d, e);
        },
        onContextMenu: function onContextMenu(e) {
          return valueRightClickHandler(d, e);
        },
        onMouseOver: function onMouseOver(e) {
          return valueMouseOverHandler(d, e);
        },
        onMouseOut: function onMouseOut(e) {
          return valueMouseOutHandler(d, e);
        }
      },
      hasXWhiskers ? import_react38.default.createElement(
        "g",
        { className: "x-whiskers" },
        import_react38.default.createElement("line", rightLineAttrs),
        import_react38.default.createElement("line", leftLineAttrs),
        import_react38.default.createElement("line", rightCrossBarAttrs),
        import_react38.default.createElement("line", leftCrossBarAttrs)
      ) : null,
      hasYWhiskers ? import_react38.default.createElement(
        "g",
        { className: "y-whiskers" },
        import_react38.default.createElement("line", upperLineAttrs),
        import_react38.default.createElement("line", lowerLineAttrs),
        import_react38.default.createElement("line", upperCrossBarAttrs),
        import_react38.default.createElement("line", lowerCrossBarAttrs)
      ) : null
    );
  };
};
var WhiskerSeries = function(_AbstractSeries) {
  _inherits36(WhiskerSeries2, _AbstractSeries);
  function WhiskerSeries2() {
    _classCallCheck36(this, WhiskerSeries2);
    return _possibleConstructorReturn36(this, (WhiskerSeries2.__proto__ || Object.getPrototypeOf(WhiskerSeries2)).apply(this, arguments));
  }
  _createClass36(WhiskerSeries2, [{
    key: "render",
    value: function render() {
      var _props = this.props, animation = _props.animation, className = _props.className, crossBarWidth = _props.crossBarWidth, data = _props.data, marginLeft = _props.marginLeft, marginTop = _props.marginTop, strokeWidth = _props.strokeWidth, style = _props.style;
      if (!data) {
        return null;
      }
      if (animation) {
        return import_react38.default.createElement(
          animation_default,
          _extends42({}, this.props, { animatedProps: ANIMATED_SERIES_PROPS }),
          import_react38.default.createElement(WhiskerSeries2, _extends42({}, this.props, { animation: null }))
        );
      }
      var whiskerMarkProps = {
        crossBarWidth,
        opacityFunctor: this._getAttributeFunctor("opacity"),
        sizeFunctor: this._getAttributeFunctor("size"),
        strokeFunctor: this._getAttributeFunctor("stroke") || this._getAttributeFunctor("color"),
        strokeWidth,
        style,
        xFunctor: this._getAttributeFunctor("x"),
        yFunctor: this._getAttributeFunctor("y"),
        valueClickHandler: this._valueClickHandler,
        valueRightClickHandler: this._valueRightClickHandler,
        valueMouseOverHandler: this._valueMouseOverHandler,
        valueMouseOutHandler: this._valueMouseOutHandler
      };
      return import_react38.default.createElement(
        "g",
        {
          className: predefinedClassName15 + " " + className,
          transform: "translate(" + marginLeft + "," + marginTop + ")"
        },
        data.map(renderWhiskerMark(whiskerMarkProps))
      );
    }
  }]);
  return WhiskerSeries2;
}(abstract_series_default);
WhiskerSeries.displayName = "WhiskerSeries";
WhiskerSeries.propTypes = _extends42({}, abstract_series_default.propTypes, {
  strokeWidth: import_prop_types30.default.number
});
WhiskerSeries.defaultProps = _extends42({}, abstract_series_default.defaultProps, {
  crossBarWidth: DEFAULT_CROSS_BAR_WIDTH,
  size: 0,
  strokeWidth: DEFAULT_STROKE_WIDTH2
});

// plugins/public/node_modules/react-vis/es/plot/xy-plot.js
var import_react40 = __toESM(require("react"));
var import_prop_types33 = __toESM(require_prop_types());
var import_deep_equal = __toESM(require_deep_equal());

// plugins/public/node_modules/react-vis/es/utils/chart-utils.js
var import_prop_types31 = __toESM(require_prop_types());
var _extends43 = Object.assign || function(target) {
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
function getInnerDimensions(props, defaultMargins) {
  var margin = props.margin, width = props.width, height = props.height;
  var marginProps = _extends43({}, defaultMargins, typeof margin === "number" ? {
    left: margin,
    right: margin,
    top: margin,
    bottom: margin
  } : margin);
  var _marginProps$left = marginProps.left, marginLeft = _marginProps$left === void 0 ? 0 : _marginProps$left, _marginProps$top = marginProps.top, marginTop = _marginProps$top === void 0 ? 0 : _marginProps$top, _marginProps$right = marginProps.right, marginRight = _marginProps$right === void 0 ? 0 : _marginProps$right, _marginProps$bottom = marginProps.bottom, marginBottom = _marginProps$bottom === void 0 ? 0 : _marginProps$bottom;
  return {
    marginLeft,
    marginTop,
    marginRight,
    marginBottom,
    innerHeight: height - marginBottom - marginTop,
    innerWidth: width - marginLeft - marginRight
  };
}
function getRadialLayoutMargin(width, height, radius) {
  var marginX = width / 2 - radius;
  var marginY = height / 2 - radius;
  return {
    bottom: marginY,
    left: marginX,
    right: marginX,
    top: marginY
  };
}
var MarginPropType = import_prop_types31.default.oneOfType([import_prop_types31.default.shape({
  left: import_prop_types31.default.number,
  top: import_prop_types31.default.number,
  right: import_prop_types31.default.number,
  bottom: import_prop_types31.default.number
}), import_prop_types31.default.number]);
var DEFAULT_MARGINS = {
  left: 40,
  right: 10,
  top: 10,
  bottom: 40
};

// plugins/public/node_modules/react-vis/es/plot/series/canvas-wrapper.js
var import_react39 = __toESM(require("react"));
var import_prop_types32 = __toESM(require_prop_types());
var _createClass37 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends44 = Object.assign || function(target) {
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
function _classCallCheck37(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn37(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits37(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var MAX_DRAWS = 30;
function engageDrawLoop(ctx, height, width, layers) {
  var drawIteration = 0;
  var drawCycle = setInterval(function() {
    if (!ctx) {
      clearInterval(drawCycle);
      return;
    }
    drawLayers(ctx, height, width, layers, drawIteration);
    if (drawIteration > MAX_DRAWS) {
      clearInterval(drawCycle);
    }
    drawIteration += 1;
  }, 1);
}
function drawLayers(ctx, height, width, layers, drawIteration) {
  ctx.clearRect(0, 0, width, height);
  layers.forEach(function(layer) {
    var interpolator = layer.interpolator, newProps = layer.newProps, animation = layer.animation;
    var interpolatedProps = animation ? interpolator ? interpolator(drawIteration / MAX_DRAWS) : interpolator : function() {
      return {};
    };
    layer.renderLayer(_extends44({}, newProps, interpolatedProps), ctx);
  });
}
function buildLayers(newChildren, oldChildren) {
  return newChildren.map(function(child, index) {
    var oldProps = oldChildren[index] ? oldChildren[index].props : {};
    var newProps = child.props;
    var oldAnimatedProps = extractAnimatedPropValues(_extends44({}, oldProps, {
      animatedProps: ANIMATED_SERIES_PROPS
    }));
    var newAnimatedProps = newProps ? extractAnimatedPropValues(_extends44({}, newProps, {
      animatedProps: ANIMATED_SERIES_PROPS
    })) : null;
    var interpolator = value_default(oldAnimatedProps, newAnimatedProps);
    return {
      renderLayer: child.type.renderLayer,
      newProps: child.props,
      animation: child.props.animation,
      interpolator
    };
  });
}
var CanvasWrapper = function(_Component) {
  _inherits37(CanvasWrapper2, _Component);
  function CanvasWrapper2() {
    _classCallCheck37(this, CanvasWrapper2);
    return _possibleConstructorReturn37(this, (CanvasWrapper2.__proto__ || Object.getPrototypeOf(CanvasWrapper2)).apply(this, arguments));
  }
  _createClass37(CanvasWrapper2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ctx = this.canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      var pixelRatio = this.props.pixelRatio;
      if (!ctx) {
        return;
      }
      ctx.scale(pixelRatio, pixelRatio);
      this.drawChildren(null, this.props, ctx);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      this.drawChildren(oldProps, this.props, this.canvas.getContext("2d"));
    }
  }, {
    key: "drawChildren",
    value: function drawChildren(oldProps, newProps, ctx) {
      var children = newProps.children, innerHeight = newProps.innerHeight, innerWidth = newProps.innerWidth, marginBottom = newProps.marginBottom, marginLeft = newProps.marginLeft, marginRight = newProps.marginRight, marginTop = newProps.marginTop;
      if (!ctx) {
        return;
      }
      var childrenShouldAnimate = children.find(function(child) {
        return child.props.animation;
      });
      var height = innerHeight + marginTop + marginBottom;
      var width = innerWidth + marginLeft + marginRight;
      var layers = buildLayers(newProps.children, oldProps ? oldProps.children : []);
      if (!childrenShouldAnimate) {
        drawLayers(ctx, height, width, layers);
        return;
      }
      engageDrawLoop(ctx, height, width, layers);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _props = this.props, innerHeight = _props.innerHeight, innerWidth = _props.innerWidth, marginBottom = _props.marginBottom, marginLeft = _props.marginLeft, marginRight = _props.marginRight, marginTop = _props.marginTop, pixelRatio = _props.pixelRatio;
      var height = innerHeight + marginTop + marginBottom;
      var width = innerWidth + marginLeft + marginRight;
      return import_react39.default.createElement(
        "div",
        { style: { left: 0, top: 0 }, className: "rv-xy-canvas" },
        import_react39.default.createElement("canvas", {
          className: "rv-xy-canvas-element",
          height: height * pixelRatio,
          width: width * pixelRatio,
          style: {
            height: height + "px",
            width: width + "px"
          },
          ref: function ref(_ref) {
            return _this2.canvas = _ref;
          }
        }),
        this.props.children
      );
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        pixelRatio: window && window.devicePixelRatio || 1
      };
    }
  }]);
  return CanvasWrapper2;
}(import_react39.Component);
CanvasWrapper.displayName = "CanvasWrapper";
CanvasWrapper.propTypes = {
  marginBottom: import_prop_types32.default.number.isRequired,
  marginLeft: import_prop_types32.default.number.isRequired,
  marginRight: import_prop_types32.default.number.isRequired,
  marginTop: import_prop_types32.default.number.isRequired,
  innerHeight: import_prop_types32.default.number.isRequired,
  innerWidth: import_prop_types32.default.number.isRequired,
  pixelRatio: import_prop_types32.default.number.isRequired
};
var canvas_wrapper_default = CanvasWrapper;

// plugins/public/node_modules/react-vis/es/plot/xy-plot.js
var _createClass38 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends45 = Object.assign || function(target) {
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
function _toConsumableArray4(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function _defineProperty6(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck38(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn38(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits38(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ATTRIBUTES2 = ["x", "y", "radius", "angle", "color", "fill", "stroke", "opacity", "size"];
function cleanseData(data) {
  return data.map(function(series) {
    if (!Array.isArray(series)) {
      return series;
    }
    return series.map(function(row) {
      return _extends45({}, row, { parent: null });
    });
  });
}
function checkIfMixinsAreEqual(nextScaleMixins, scaleMixins, hasTreeStructure) {
  var newMixins = _extends45({}, nextScaleMixins, {
    _allData: hasTreeStructure ? cleanseData(nextScaleMixins._allData) : nextScaleMixins._allData
  });
  var oldMixins = _extends45({}, scaleMixins, {
    _allData: hasTreeStructure ? cleanseData(scaleMixins._allData) : scaleMixins._allData
  });
  return (0, import_deep_equal.default)(newMixins, oldMixins);
}
var XYPlot = function(_React$Component) {
  _inherits38(XYPlot2, _React$Component);
  _createClass38(XYPlot2, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        className: ""
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        animation: AnimationPropType,
        className: import_prop_types33.default.string,
        dontCheckIfEmpty: import_prop_types33.default.bool,
        height: import_prop_types33.default.number.isRequired,
        margin: MarginPropType,
        onClick: import_prop_types33.default.func,
        onDoubleClick: import_prop_types33.default.func,
        onMouseDown: import_prop_types33.default.func,
        onMouseUp: import_prop_types33.default.func,
        onMouseEnter: import_prop_types33.default.func,
        onMouseLeave: import_prop_types33.default.func,
        onMouseMove: import_prop_types33.default.func,
        onTouchStart: import_prop_types33.default.func,
        onTouchMove: import_prop_types33.default.func,
        onTouchEnd: import_prop_types33.default.func,
        onTouchCancel: import_prop_types33.default.func,
        onWheel: import_prop_types33.default.func,
        stackBy: import_prop_types33.default.oneOf(ATTRIBUTES2),
        style: import_prop_types33.default.object,
        width: import_prop_types33.default.number.isRequired
      };
    }
  }]);
  function XYPlot2(props) {
    _classCallCheck38(this, XYPlot2);
    var _this = _possibleConstructorReturn38(this, (XYPlot2.__proto__ || Object.getPrototypeOf(XYPlot2)).call(this, props));
    _initialiseProps.call(_this);
    var stackBy = props.stackBy;
    var children = getSeriesChildren(props.children);
    var data = getStackedData(children, stackBy);
    _this.state = {
      scaleMixins: _this._getScaleMixins(data, props),
      data
    };
    return _this;
  }
  _createClass38(XYPlot2, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = getSeriesChildren(nextProps.children);
      var nextData = getStackedData(children, nextProps.stackBy);
      var scaleMixins = this.state.scaleMixins;
      var nextScaleMixins = this._getScaleMixins(nextData, nextProps);
      if (!checkIfMixinsAreEqual(nextScaleMixins, scaleMixins, nextProps.hasTreeStructure)) {
        this.setState({
          scaleMixins: nextScaleMixins,
          data: nextData
        });
      }
    }
  }, {
    key: "_getClonedChildComponents",
    value: function _getClonedChildComponents() {
      var _this2 = this;
      var props = this.props;
      var animation = this.props.animation;
      var _state = this.state, scaleMixins = _state.scaleMixins, data = _state.data;
      var dimensions = getInnerDimensions(this.props, DEFAULT_MARGINS);
      var children = import_react40.default.Children.toArray(this.props.children);
      var seriesProps = getSeriesPropsFromChildren(children);
      var XYPlotValues = getXYPlotValues(props, children);
      return children.map(function(child, index) {
        var dataProps = null;
        if (seriesProps[index]) {
          var seriesIndex = seriesProps[index].seriesIndex;
          dataProps = { data: data[seriesIndex] };
        }
        return import_react40.default.cloneElement(child, _extends45({}, dimensions, {
          animation
        }, dataProps && child.type.prototype && child.type.prototype.render ? {
          ref: function ref(_ref) {
            return _this2["series" + seriesProps[index].seriesIndex] = _ref;
          }
        } : {}, seriesProps[index], scaleMixins, child.props, XYPlotValues[index], dataProps));
      });
    }
  }, {
    key: "_getDefaultScaleProps",
    value: function _getDefaultScaleProps(props) {
      var _getInnerDimensions = getInnerDimensions(props, DEFAULT_MARGINS), innerWidth = _getInnerDimensions.innerWidth, innerHeight = _getInnerDimensions.innerHeight;
      var colorRanges = ["color", "fill", "stroke"].reduce(function(acc, attr) {
        var range = props[attr + "Type"] === "category" ? EXTENDED_DISCRETE_COLOR_RANGE : CONTINUOUS_COLOR_RANGE;
        return _extends45({}, acc, _defineProperty6({}, attr + "Range", range));
      }, {});
      return _extends45({
        xRange: [0, innerWidth],
        yRange: [innerHeight, 0]
      }, colorRanges, {
        opacityType: OPACITY_TYPE,
        sizeRange: SIZE_RANGE
      });
    }
  }, {
    key: "_getScaleMixins",
    value: function _getScaleMixins(data, props) {
      var _ref2;
      var filteredData = data.filter(function(d) {
        return d;
      });
      var allData = (_ref2 = []).concat.apply(_ref2, _toConsumableArray4(filteredData));
      var defaultScaleProps = this._getDefaultScaleProps(props);
      var optionalScaleProps = getOptionalScaleProps(props);
      var userScaleProps = extractScalePropsFromProps(props, ATTRIBUTES2);
      var missingScaleProps = getMissingScaleProps(_extends45({}, defaultScaleProps, optionalScaleProps, userScaleProps), allData, ATTRIBUTES2);
      var children = getSeriesChildren(props.children);
      var zeroBaseProps = {};
      var adjustBy = /* @__PURE__ */ new Set();
      var adjustWhat = /* @__PURE__ */ new Set();
      children.forEach(function(child, index) {
        if (!child || !data[index]) {
          return;
        }
        ATTRIBUTES2.forEach(function(attr) {
          var _child$type$getParent = child.type.getParentConfig(attr, child.props), isDomainAdjustmentNeeded = _child$type$getParent.isDomainAdjustmentNeeded, zeroBaseValue = _child$type$getParent.zeroBaseValue;
          if (isDomainAdjustmentNeeded) {
            adjustBy.add(attr);
            adjustWhat.add(index);
          }
          if (zeroBaseValue) {
            var specifiedDomain = props[attr + "Domain"];
            zeroBaseProps[attr + "BaseValue"] = specifiedDomain ? specifiedDomain[0] : 0;
          }
        });
      });
      return _extends45({}, defaultScaleProps, zeroBaseProps, userScaleProps, missingScaleProps, {
        _allData: data,
        _adjustBy: Array.from(adjustBy),
        _adjustWhat: Array.from(adjustWhat),
        _stackBy: props.stackBy
      });
    }
  }, {
    key: "_isPlotEmpty",
    value: function _isPlotEmpty() {
      var data = this.state.data;
      return !data || !data.length || !data.some(function(series) {
        return series && series.some(function(d) {
          return d;
        });
      });
    }
  }, {
    key: "renderCanvasComponents",
    value: function renderCanvasComponents(components, props) {
      var componentsToRender = components.filter(function(c2) {
        return c2 && !c2.type.requiresSVG && c2.type.isCanvas;
      });
      if (componentsToRender.length === 0) {
        return null;
      }
      var _componentsToRender$ = componentsToRender[0].props, marginLeft = _componentsToRender$.marginLeft, marginTop = _componentsToRender$.marginTop, marginBottom = _componentsToRender$.marginBottom, marginRight = _componentsToRender$.marginRight, innerHeight = _componentsToRender$.innerHeight, innerWidth = _componentsToRender$.innerWidth;
      return import_react40.default.createElement(
        canvas_wrapper_default,
        {
          innerHeight,
          innerWidth,
          marginLeft,
          marginTop,
          marginBottom,
          marginRight
        },
        componentsToRender
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, className = _props.className, dontCheckIfEmpty = _props.dontCheckIfEmpty, style = _props.style, width = _props.width, height = _props.height;
      if (!dontCheckIfEmpty && this._isPlotEmpty()) {
        return import_react40.default.createElement("div", {
          className: "rv-xy-plot " + className,
          style: _extends45({
            width: width + "px",
            height: height + "px"
          }, this.props.style)
        });
      }
      var components = this._getClonedChildComponents();
      return import_react40.default.createElement(
        "div",
        {
          style: {
            width: width + "px",
            height: height + "px"
          },
          className: "rv-xy-plot " + className
        },
        import_react40.default.createElement(
          "svg",
          {
            className: "rv-xy-plot__inner",
            width,
            height,
            style,
            onClick: this._clickHandler,
            onDoubleClick: this._doubleClickHandler,
            onMouseDown: this._mouseDownHandler,
            onMouseUp: this._mouseUpHandler,
            onMouseMove: this._mouseMoveHandler,
            onMouseLeave: this._mouseLeaveHandler,
            onMouseEnter: this._mouseEnterHandler,
            onTouchStart: this._mouseDownHandler,
            onTouchMove: this._touchMoveHandler,
            onTouchEnd: this._touchEndHandler,
            onTouchCancel: this._touchCancelHandler,
            onWheel: this._wheelHandler
          },
          components.filter(function(c2) {
            return c2 && c2.type.requiresSVG;
          })
        ),
        this.renderCanvasComponents(components, this.props),
        components.filter(function(c2) {
          return c2 && !c2.type.requiresSVG && !c2.type.isCanvas;
        })
      );
    }
  }]);
  return XYPlot2;
}(import_react40.default.Component);
var _initialiseProps = function _initialiseProps2() {
  var _this3 = this;
  this._clickHandler = function(event) {
    var onClick = _this3.props.onClick;
    if (onClick) {
      onClick(event);
    }
  };
  this._doubleClickHandler = function(event) {
    var onDoubleClick = _this3.props.onDoubleClick;
    if (onDoubleClick) {
      onDoubleClick(event);
    }
  };
  this._mouseDownHandler = function(event) {
    var _props2 = _this3.props, onMouseDown = _props2.onMouseDown, children = _props2.children;
    if (onMouseDown) {
      onMouseDown(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentMouseDown) {
        component.onParentMouseDown(event);
      }
    });
  };
  this._mouseEnterHandler = function(event) {
    var _props3 = _this3.props, onMouseEnter = _props3.onMouseEnter, children = _props3.children;
    if (onMouseEnter) {
      onMouseEnter(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentMouseEnter) {
        component.onParentMouseEnter(event);
      }
    });
  };
  this._mouseLeaveHandler = function(event) {
    var _props4 = _this3.props, onMouseLeave = _props4.onMouseLeave, children = _props4.children;
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentMouseLeave) {
        component.onParentMouseLeave(event);
      }
    });
  };
  this._mouseMoveHandler = function(event) {
    var _props5 = _this3.props, onMouseMove = _props5.onMouseMove, children = _props5.children;
    if (onMouseMove) {
      onMouseMove(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentMouseMove) {
        component.onParentMouseMove(event);
      }
    });
  };
  this._mouseUpHandler = function(event) {
    var _props6 = _this3.props, onMouseUp = _props6.onMouseUp, children = _props6.children;
    if (onMouseUp) {
      onMouseUp(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentMouseUp) {
        component.onParentMouseUp(event);
      }
    });
  };
  this._touchCancelHandler = function(event) {
    var onTouchCancel = _this3.props.onTouchCancel;
    if (onTouchCancel) {
      onTouchCancel(event);
    }
  };
  this._touchEndHandler = function(event) {
    var onTouchEnd = _this3.props.onTouchEnd;
    if (onTouchEnd) {
      onTouchEnd(event);
    }
  };
  this._touchMoveHandler = function(event) {
    var _props7 = _this3.props, onTouchMove = _props7.onTouchMove, children = _props7.children;
    if (onTouchMove) {
      onTouchMove(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentTouchMove) {
        component.onParentTouchMove(event);
      }
    });
  };
  this._touchStartHandler = function(event) {
    var _props8 = _this3.props, onTouchStart = _props8.onTouchStart, children = _props8.children;
    if (onTouchStart) {
      onTouchStart(event);
    }
    var seriesChildren = getSeriesChildren(children);
    seriesChildren.forEach(function(child, index) {
      var component = _this3["series" + index];
      if (component && component.onParentTouchStart) {
        component.onParentTouchStart(event);
      }
    });
  };
  this._wheelHandler = function(event) {
    var onWheel = _this3.props.onWheel;
    if (onWheel) {
      onWheel(event);
    }
  };
};
XYPlot.displayName = "XYPlot";
var xy_plot_default = XYPlot;

// plugins/public/node_modules/react-vis/es/plot/axis/x-axis.js
var import_react45 = __toESM(require("react"));
var import_prop_types38 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/plot/axis/axis.js
var import_react44 = __toESM(require("react"));
var import_prop_types37 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/plot/axis/axis-line.js
var import_react41 = __toESM(require("react"));
var import_prop_types34 = __toESM(require_prop_types());
var _extends46 = Object.assign || function(target) {
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
var LEFT = ORIENTATION.LEFT;
var RIGHT = ORIENTATION.RIGHT;
var TOP = ORIENTATION.TOP;
var BOTTOM = ORIENTATION.BOTTOM;
var propTypes8 = {
  height: import_prop_types34.default.number.isRequired,
  style: import_prop_types34.default.object,
  orientation: import_prop_types34.default.oneOf([LEFT, RIGHT, TOP, BOTTOM]).isRequired,
  width: import_prop_types34.default.number.isRequired
};
var defaultProps6 = {
  style: {}
};
function AxisLine(_ref) {
  var orientation = _ref.orientation, width = _ref.width, height = _ref.height, style = _ref.style;
  var lineProps = void 0;
  if (orientation === LEFT) {
    lineProps = {
      x1: width,
      x2: width,
      y1: 0,
      y2: height
    };
  } else if (orientation === RIGHT) {
    lineProps = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: height
    };
  } else if (orientation === TOP) {
    lineProps = {
      x1: 0,
      x2: width,
      y1: height,
      y2: height
    };
  } else {
    lineProps = {
      x1: 0,
      x2: width,
      y1: 0,
      y2: 0
    };
  }
  return import_react41.default.createElement("line", _extends46({}, lineProps, { className: "rv-xy-plot__axis__line", style }));
}
AxisLine.defaultProps = defaultProps6;
AxisLine.displayName = "AxisLine";
AxisLine.propTypes = propTypes8;
var axis_line_default = AxisLine;

// plugins/public/node_modules/react-vis/es/plot/axis/axis-ticks.js
var import_react42 = __toESM(require("react"));
var import_prop_types35 = __toESM(require_prop_types());
var _extends47 = Object.assign || function(target) {
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
var _createClass39 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty7(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck39(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn39(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits39(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var LEFT2 = ORIENTATION.LEFT;
var RIGHT2 = ORIENTATION.RIGHT;
var TOP2 = ORIENTATION.TOP;
var BOTTOM2 = ORIENTATION.BOTTOM;
var propTypes9 = {
  height: import_prop_types35.default.number.isRequired,
  orientation: import_prop_types35.default.oneOf([LEFT2, RIGHT2, TOP2, BOTTOM2]).isRequired,
  style: import_prop_types35.default.object,
  width: import_prop_types35.default.number.isRequired
};
var defaultProps7 = {
  style: {}
};
function _getTickFormatFn(scale, tickTotal, tickFormat) {
  return !tickFormat ? scale.tickFormat ? scale.tickFormat(tickTotal) : function(v) {
    return v;
  } : tickFormat;
}
var AxisTicks = function(_React$Component) {
  _inherits39(AxisTicks2, _React$Component);
  function AxisTicks2() {
    _classCallCheck39(this, AxisTicks2);
    return _possibleConstructorReturn39(this, (AxisTicks2.__proto__ || Object.getPrototypeOf(AxisTicks2)).apply(this, arguments));
  }
  _createClass39(AxisTicks2, [{
    key: "_areTicksWrapped",
    value: function _areTicksWrapped() {
      var orientation = this.props.orientation;
      return orientation === LEFT2 || orientation === TOP2;
    }
  }, {
    key: "_getTickContainerPropsGetterFn",
    value: function _getTickContainerPropsGetterFn() {
      if (this._isAxisVertical()) {
        return function(pos) {
          return { transform: "translate(0, " + pos + ")" };
        };
      }
      return function(pos) {
        return { transform: "translate(" + pos + ", 0)" };
      };
    }
  }, {
    key: "_getTickLabelProps",
    value: function _getTickLabelProps() {
      var _props = this.props, orientation = _props.orientation, tickLabelAngle = _props.tickLabelAngle, tickSize = _props.tickSize, _props$tickSizeOuter = _props.tickSizeOuter, tickSizeOuter = _props$tickSizeOuter === void 0 ? tickSize : _props$tickSizeOuter, _props$tickPadding = _props.tickPadding, tickPadding = _props$tickPadding === void 0 ? tickSize : _props$tickPadding;
      var textAnchor = void 0;
      if (orientation === LEFT2 || orientation === BOTTOM2 && tickLabelAngle) {
        textAnchor = "end";
      } else if (orientation === RIGHT2 || orientation === TOP2 && tickLabelAngle) {
        textAnchor = "start";
      } else {
        textAnchor = "middle";
      }
      var isVertical = this._isAxisVertical();
      var wrap = this._areTicksWrapped() ? -1 : 1;
      var labelOffset = wrap * (tickSizeOuter + tickPadding);
      var transform = (isVertical ? "translate(" + labelOffset + ", 0)" : "translate(0, " + labelOffset + ")") + (tickLabelAngle ? " rotate(" + tickLabelAngle + ")" : "");
      var dy = orientation === TOP2 || tickLabelAngle ? "0" : orientation === BOTTOM2 ? "0.72em" : "0.32em";
      return {
        textAnchor,
        dy,
        transform
      };
    }
  }, {
    key: "_getTickLineProps",
    value: function _getTickLineProps() {
      var _ref;
      var _props2 = this.props, tickSize = _props2.tickSize, _props2$tickSizeOuter = _props2.tickSizeOuter, tickSizeOuter = _props2$tickSizeOuter === void 0 ? tickSize : _props2$tickSizeOuter, _props2$tickSizeInner = _props2.tickSizeInner, tickSizeInner = _props2$tickSizeInner === void 0 ? tickSize : _props2$tickSizeInner;
      var isVertical = this._isAxisVertical();
      var tickXAttr = isVertical ? "y" : "x";
      var tickYAttr = isVertical ? "x" : "y";
      var wrap = this._areTicksWrapped() ? -1 : 1;
      return _ref = {}, _defineProperty7(_ref, tickXAttr + "1", 0), _defineProperty7(_ref, tickXAttr + "2", 0), _defineProperty7(_ref, tickYAttr + "1", -wrap * tickSizeInner), _defineProperty7(_ref, tickYAttr + "2", wrap * tickSizeOuter), _ref;
    }
  }, {
    key: "_isAxisVertical",
    value: function _isAxisVertical() {
      var orientation = this.props.orientation;
      return orientation === LEFT2 || orientation === RIGHT2;
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props, attr = _props3.attr, orientation = _props3.orientation, width = _props3.width, height = _props3.height, style = _props3.style, tickFormat = _props3.tickFormat, tickTotal = _props3.tickTotal, tickValues = _props3.tickValues;
      var x3 = orientation === LEFT2 ? width : 0;
      var y3 = orientation === TOP2 ? height : 0;
      var scale = getAttributeScale(this.props, attr);
      var values = getTickValues(scale, tickTotal, tickValues);
      var tickFormatFn = _getTickFormatFn(scale, tickTotal, tickFormat);
      var translateFn = this._getTickContainerPropsGetterFn();
      var pathProps = this._getTickLineProps();
      var textProps = this._getTickLabelProps();
      var ticks = values.map(function(v, i) {
        var pos = scale(v);
        var labelNode = tickFormatFn(v, i, scale, tickTotal);
        var shouldRenderAsOwnNode = import_react42.default.isValidElement(labelNode) && !["tspan", "textPath"].includes(labelNode.type);
        var shouldAddProps = labelNode && typeof labelNode.type !== "string";
        return import_react42.default.createElement(
          "g",
          _extends47({
            key: i
          }, translateFn(pos, 0), {
            className: "rv-xy-plot__axis__tick",
            style
          }),
          import_react42.default.createElement("line", _extends47({}, pathProps, {
            className: "rv-xy-plot__axis__tick__line",
            style: _extends47({}, style, style.line)
          })),
          shouldRenderAsOwnNode ? import_react42.default.cloneElement(labelNode, shouldAddProps ? _extends47({}, textProps, {
            containerWidth: width,
            tickCount: values.length
          }) : void 0) : import_react42.default.createElement(
            "text",
            _extends47({}, textProps, {
              className: "rv-xy-plot__axis__tick__text",
              style: _extends47({}, style, style.text)
            }),
            labelNode
          )
        );
      });
      return import_react42.default.createElement(
        "g",
        {
          transform: "translate(" + x3 + ", " + y3 + ")",
          className: "rv-xy-plot__axis__ticks"
        },
        ticks
      );
    }
  }]);
  return AxisTicks2;
}(import_react42.default.Component);
AxisTicks.defaultProps = defaultProps7;
AxisTicks.displayName = "AxisTicks";
AxisTicks.propTypes = propTypes9;
AxisTicks.requiresSVG = true;
var axis_ticks_default = AxisTicks;

// plugins/public/node_modules/react-vis/es/plot/axis/axis-title.js
var import_react43 = __toESM(require("react"));
var import_prop_types36 = __toESM(require_prop_types());
var _extends48 = Object.assign || function(target) {
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
function _defineProperty8(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
var ADJUSTMENT_FOR_TEXT_SIZE = 16;
var MARGIN = 6;
var LEFT3 = ORIENTATION.LEFT;
var RIGHT3 = ORIENTATION.RIGHT;
var TOP3 = ORIENTATION.TOP;
var BOTTOM3 = ORIENTATION.BOTTOM;
var defaultProps8 = {
  position: "end"
};
var transformation = function transformation2(width, height) {
  var _ref;
  return _ref = {}, _defineProperty8(_ref, LEFT3, {
    end: {
      x: ADJUSTMENT_FOR_TEXT_SIZE,
      y: MARGIN,
      rotation: -90,
      textAnchor: "end"
    },
    middle: {
      x: ADJUSTMENT_FOR_TEXT_SIZE,
      y: height / 2 - MARGIN,
      rotation: -90,
      textAnchor: "middle"
    },
    start: {
      x: ADJUSTMENT_FOR_TEXT_SIZE,
      y: height - MARGIN,
      rotation: -90,
      textAnchor: "start"
    }
  }), _defineProperty8(_ref, RIGHT3, {
    end: {
      x: ADJUSTMENT_FOR_TEXT_SIZE * -0.5,
      y: MARGIN,
      rotation: -90,
      textAnchor: "end"
    },
    middle: {
      x: ADJUSTMENT_FOR_TEXT_SIZE * -0.5,
      y: height / 2 - MARGIN,
      rotation: -90,
      textAnchor: "middle"
    },
    start: {
      x: ADJUSTMENT_FOR_TEXT_SIZE * -0.5,
      y: height - MARGIN,
      rotation: -90,
      textAnchor: "start"
    }
  }), _defineProperty8(_ref, TOP3, {
    start: {
      x: MARGIN,
      y: ADJUSTMENT_FOR_TEXT_SIZE,
      rotation: 0,
      textAnchor: "start"
    },
    middle: {
      x: width / 2 - MARGIN,
      y: ADJUSTMENT_FOR_TEXT_SIZE,
      rotation: 0,
      textAnchor: "middle"
    },
    end: {
      x: width - MARGIN,
      y: ADJUSTMENT_FOR_TEXT_SIZE,
      rotation: 0,
      textAnchor: "end"
    }
  }), _defineProperty8(_ref, BOTTOM3, {
    start: {
      x: MARGIN,
      y: -MARGIN,
      rotation: 0,
      textAnchor: "start"
    },
    middle: {
      x: width / 2 - MARGIN,
      y: -MARGIN,
      rotation: 0,
      textAnchor: "middle"
    },
    end: {
      x: width - MARGIN,
      y: -MARGIN,
      rotation: 0,
      textAnchor: "end"
    }
  }), _ref;
};
var propTypes10 = {
  width: import_prop_types36.default.number.isRequired,
  height: import_prop_types36.default.number.isRequired,
  orientation: import_prop_types36.default.oneOf([LEFT3, RIGHT3, TOP3, BOTTOM3]).isRequired,
  style: import_prop_types36.default.object,
  title: import_prop_types36.default.string.isRequired
};
function AxisTitle(_ref2) {
  var orientation = _ref2.orientation, position = _ref2.position, width = _ref2.width, height = _ref2.height, style = _ref2.style, title = _ref2.title;
  var outerGroupTranslateX = orientation === LEFT3 ? width : 0;
  var outerGroupTranslateY = orientation === TOP3 ? height : 0;
  var outerGroupTransform = "translate(" + outerGroupTranslateX + ", " + outerGroupTranslateY + ")";
  var _transformation$orien = transformation(width, height)[orientation][position], x3 = _transformation$orien.x, y3 = _transformation$orien.y, rotation = _transformation$orien.rotation, textAnchor = _transformation$orien.textAnchor;
  var innerGroupTransform = "translate(" + x3 + ", " + y3 + ") rotate(" + rotation + ")";
  return import_react43.default.createElement(
    "g",
    { transform: outerGroupTransform, className: "rv-xy-plot__axis__title" },
    import_react43.default.createElement(
      "g",
      { style: _extends48({ textAnchor }, style), transform: innerGroupTransform },
      import_react43.default.createElement(
        "text",
        { style },
        title
      )
    )
  );
}
AxisTitle.displayName = "AxisTitle";
AxisTitle.propTypes = propTypes10;
AxisTitle.defaultProps = defaultProps8;
var axis_title_default = AxisTitle;

// plugins/public/node_modules/react-vis/es/plot/axis/axis.js
var _extends49 = Object.assign || function(target) {
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
var _createClass40 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck40(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn40(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits40(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var defaultAnimatedProps = ["xRange", "yRange", "xDomain", "yDomain", "width", "height", "marginLeft", "marginTop", "marginRight", "marginBottom", "tickSize", "tickTotal", "tickSizeInner", "tickSizeOuter"];
var LEFT4 = ORIENTATION.LEFT;
var RIGHT4 = ORIENTATION.RIGHT;
var TOP4 = ORIENTATION.TOP;
var BOTTOM4 = ORIENTATION.BOTTOM;
var propTypes11 = {
  orientation: import_prop_types37.default.oneOf([LEFT4, RIGHT4, TOP4, BOTTOM4]),
  attr: import_prop_types37.default.string.isRequired,
  attrAxis: import_prop_types37.default.string,
  width: import_prop_types37.default.number,
  height: import_prop_types37.default.number,
  top: import_prop_types37.default.number,
  left: import_prop_types37.default.number,
  title: import_prop_types37.default.string,
  style: import_prop_types37.default.object,
  className: import_prop_types37.default.string,
  hideTicks: import_prop_types37.default.bool,
  hideLine: import_prop_types37.default.bool,
  on0: import_prop_types37.default.bool,
  tickLabelAngle: import_prop_types37.default.number,
  tickSize: import_prop_types37.default.number,
  tickSizeInner: import_prop_types37.default.number,
  tickSizeOuter: import_prop_types37.default.number,
  tickPadding: import_prop_types37.default.number,
  tickValues: import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string])),
  tickFormat: import_prop_types37.default.func,
  tickTotal: import_prop_types37.default.number,
  marginTop: import_prop_types37.default.number,
  marginBottom: import_prop_types37.default.number,
  marginLeft: import_prop_types37.default.number,
  marginRight: import_prop_types37.default.number,
  innerWidth: import_prop_types37.default.number,
  innerHeight: import_prop_types37.default.number
};
var defaultProps9 = {
  className: "",
  on0: false,
  style: {},
  tickSize: 6,
  tickPadding: 8,
  orientation: BOTTOM4
};
var predefinedClassName16 = "rv-xy-plot__axis";
var VERTICAL_CLASS_NAME = "rv-xy-plot__axis--vertical";
var HORIZONTAL_CLASS_NAME = "rv-xy-plot__axis--horizontal";
var Axis = function(_PureComponent) {
  _inherits40(Axis2, _PureComponent);
  function Axis2() {
    _classCallCheck40(this, Axis2);
    return _possibleConstructorReturn40(this, (Axis2.__proto__ || Object.getPrototypeOf(Axis2)).apply(this, arguments));
  }
  _createClass40(Axis2, [{
    key: "_getDefaultAxisProps",
    value: function _getDefaultAxisProps() {
      var _props = this.props, innerWidth = _props.innerWidth, innerHeight = _props.innerHeight, marginTop = _props.marginTop, marginBottom = _props.marginBottom, marginLeft = _props.marginLeft, marginRight = _props.marginRight, orientation = _props.orientation;
      if (orientation === BOTTOM4) {
        return {
          tickTotal: getTicksTotalFromSize(innerWidth),
          top: innerHeight + marginTop,
          left: marginLeft,
          width: innerWidth,
          height: marginBottom
        };
      } else if (orientation === TOP4) {
        return {
          tickTotal: getTicksTotalFromSize(innerWidth),
          top: 0,
          left: marginLeft,
          width: innerWidth,
          height: marginTop
        };
      } else if (orientation === LEFT4) {
        return {
          tickTotal: getTicksTotalFromSize(innerHeight),
          top: marginTop,
          left: 0,
          width: marginLeft,
          height: innerHeight
        };
      }
      return {
        tickTotal: getTicksTotalFromSize(innerHeight),
        top: marginTop,
        left: marginLeft + innerWidth,
        width: marginRight,
        height: innerHeight
      };
    }
  }, {
    key: "render",
    value: function render() {
      var animation = this.props.animation;
      if (animation) {
        var animatedProps4 = animation.nonAnimatedProps ? defaultAnimatedProps.filter(function(prop) {
          return animation.nonAnimatedProps.indexOf(prop) < 0;
        }) : defaultAnimatedProps;
        return import_react44.default.createElement(
          animation_default,
          _extends49({}, this.props, { animatedProps: animatedProps4 }),
          import_react44.default.createElement(Axis2, _extends49({}, this.props, { animation: null }))
        );
      }
      var props = _extends49({}, this._getDefaultAxisProps(), this.props);
      var attrAxis = props.attrAxis, className = props.className, height = props.height, hideLine = props.hideLine, hideTicks = props.hideTicks, left2 = props.left, marginTop = props.marginTop, on0 = props.on0, orientation = props.orientation, position = props.position, style = props.style, title = props.title, top = props.top, width = props.width;
      var isVertical = [LEFT4, RIGHT4].indexOf(orientation) > -1;
      var axisClassName = isVertical ? VERTICAL_CLASS_NAME : HORIZONTAL_CLASS_NAME;
      var leftPos = left2;
      var topPos = top;
      if (on0) {
        var scale = getAttributeScale(props, attrAxis);
        if (isVertical) {
          leftPos = scale(0);
        } else {
          topPos = marginTop + scale(0);
        }
      }
      return import_react44.default.createElement(
        "g",
        {
          transform: "translate(" + leftPos + "," + topPos + ")",
          className: predefinedClassName16 + " " + axisClassName + " " + className,
          style
        },
        !hideLine && import_react44.default.createElement(axis_line_default, {
          height,
          width,
          orientation,
          style: _extends49({}, style, style.line)
        }),
        !hideTicks && import_react44.default.createElement(axis_ticks_default, _extends49({}, props, { style: _extends49({}, style, style.ticks) })),
        title ? import_react44.default.createElement(axis_title_default, {
          position,
          title,
          height,
          width,
          style: _extends49({}, style, style.title),
          orientation
        }) : null
      );
    }
  }]);
  return Axis2;
}(import_react44.PureComponent);
Axis.displayName = "Axis";
Axis.propTypes = propTypes11;
Axis.defaultProps = defaultProps9;
Axis.requiresSVG = true;
var axis_default = Axis;

// plugins/public/node_modules/react-vis/es/plot/axis/x-axis.js
var _extends50 = Object.assign || function(target) {
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
var TOP5 = ORIENTATION.TOP;
var BOTTOM5 = ORIENTATION.BOTTOM;
var propTypes12 = _extends50({}, axis_default.propTypes, {
  orientation: import_prop_types38.default.oneOf([TOP5, BOTTOM5])
});
var defaultProps10 = {
  orientation: BOTTOM5,
  attr: "x",
  attrAxis: "y"
};
function XAxis(props) {
  return import_react45.default.createElement(axis_default, props);
}
XAxis.displayName = "XAxis";
XAxis.propTypes = propTypes12;
XAxis.defaultProps = defaultProps10;
XAxis.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/plot/axis/y-axis.js
var import_react46 = __toESM(require("react"));
var import_prop_types39 = __toESM(require_prop_types());
var _extends51 = Object.assign || function(target) {
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
var LEFT5 = ORIENTATION.LEFT;
var RIGHT5 = ORIENTATION.RIGHT;
var propTypes13 = _extends51({}, axis_default.propTypes, {
  orientation: import_prop_types39.default.oneOf([LEFT5, RIGHT5])
});
var defaultProps11 = {
  orientation: LEFT5,
  attr: "y",
  attrAxis: "x"
};
function YAxis(props) {
  return import_react46.default.createElement(axis_default, props);
}
YAxis.displayName = "YAxis";
YAxis.propTypes = propTypes13;
YAxis.defaultProps = defaultProps11;
YAxis.requiresSVG = true;

// plugins/public/node_modules/react-vis/es/legends/continuous-color-legend.js
var import_react47 = __toESM(require("react"));
var import_prop_types40 = __toESM(require_prop_types());
var propTypes14 = {
  className: import_prop_types40.default.string,
  height: import_prop_types40.default.number,
  endColor: import_prop_types40.default.string,
  endTitle: import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string]).isRequired,
  midColor: import_prop_types40.default.string,
  midTitle: import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string]),
  startColor: import_prop_types40.default.string,
  startTitle: import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string]).isRequired,
  width: import_prop_types40.default.number
};
var defaultProps12 = {
  className: "",
  startColor: CONTINUOUS_COLOR_RANGE[0],
  endColor: CONTINUOUS_COLOR_RANGE[1]
};
function ContinuousColorLegend(_ref) {
  var startColor = _ref.startColor, midColor = _ref.midColor, endColor = _ref.endColor, startTitle = _ref.startTitle, midTitle = _ref.midTitle, endTitle = _ref.endTitle, height = _ref.height, width = _ref.width, className = _ref.className;
  var colors = [startColor];
  if (midColor) {
    colors.push(midColor);
  }
  colors.push(endColor);
  return import_react47.default.createElement(
    "div",
    {
      className: "rv-continuous-color-legend " + className,
      style: { width, height }
    },
    import_react47.default.createElement("div", {
      className: "rv-gradient",
      style: { background: "linear-gradient(to right, " + colors.join(",") + ")" }
    }),
    import_react47.default.createElement(
      "div",
      { className: "rv-legend-titles" },
      import_react47.default.createElement(
        "span",
        { className: "rv-legend-titles__left" },
        startTitle
      ),
      import_react47.default.createElement(
        "span",
        { className: "rv-legend-titles__right" },
        endTitle
      ),
      midTitle ? import_react47.default.createElement(
        "span",
        { className: "rv-legend-titles__center" },
        midTitle
      ) : null
    )
  );
}
ContinuousColorLegend.displayName = "ContinuousColorLegend";
ContinuousColorLegend.propTypes = propTypes14;
ContinuousColorLegend.defaultProps = defaultProps12;

// plugins/public/node_modules/react-vis/es/legends/continuous-size-legend.js
var import_react48 = __toESM(require("react"));
var import_prop_types41 = __toESM(require_prop_types());
var propTypes15 = {
  className: import_prop_types41.default.string,
  circlesTotal: import_prop_types41.default.number,
  endSize: import_prop_types41.default.number,
  endTitle: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]).isRequired,
  height: import_prop_types41.default.number,
  startSize: import_prop_types41.default.number,
  startTitle: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]).isRequired,
  width: import_prop_types41.default.number
};
var defaultProps13 = {
  circlesTotal: 10,
  className: "",
  endSize: 20,
  startSize: 2
};
function ContinuousSizeLegend(_ref) {
  var startTitle = _ref.startTitle, endTitle = _ref.endTitle, startSize = _ref.startSize, endSize = _ref.endSize, circlesTotal = _ref.circlesTotal, height = _ref.height, width = _ref.width, className = _ref.className;
  var circles2 = [];
  var step = (endSize - startSize) / (circlesTotal - 1);
  for (var i = 0; i < circlesTotal; i++) {
    var size = step * i + startSize;
    circles2.push(import_react48.default.createElement("div", {
      key: i,
      className: "rv-bubble",
      style: {
        width: size,
        height: size,
        borderRadius: size / 2
      }
    }));
    circles2.push(" ");
  }
  return import_react48.default.createElement(
    "div",
    {
      className: "rv-continuous-size-legend " + className,
      style: { width, height }
    },
    import_react48.default.createElement(
      "div",
      { className: "rv-bubbles", style: { height: endSize } },
      circles2,
      import_react48.default.createElement("div", { className: "rv-spacer" })
    ),
    import_react48.default.createElement(
      "div",
      { className: "rv-legend-titles" },
      import_react48.default.createElement(
        "span",
        { className: "rv-legend-titles__left" },
        startTitle
      ),
      import_react48.default.createElement(
        "span",
        { className: "rv-legend-titles__right" },
        endTitle
      )
    )
  );
}
ContinuousSizeLegend.displayName = "ContinuousSizeLegend";
ContinuousSizeLegend.propTypes = propTypes15;
ContinuousSizeLegend.defaultProps = defaultProps13;

// plugins/public/node_modules/react-vis/es/legends/discrete-color-legend.js
var import_react50 = __toESM(require("react"));
var import_prop_types43 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/legends/discrete-color-legend-item.js
var import_react49 = __toESM(require("react"));
var import_prop_types42 = __toESM(require_prop_types());
var _extends52 = Object.assign || function(target) {
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
var STROKE_STYLES2 = {
  dashed: "6, 2",
  solid: null
};
function DiscreteColorLegendItem(_ref) {
  var color2 = _ref.color, strokeDasharray = _ref.strokeDasharray, strokeStyle = _ref.strokeStyle, strokeWidth = _ref.strokeWidth, disabled = _ref.disabled, onClick = _ref.onClick, orientation = _ref.orientation, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, title = _ref.title;
  var className = "rv-discrete-color-legend-item " + orientation;
  if (disabled) {
    className += " disabled";
  }
  if (onClick) {
    className += " clickable";
  }
  var strokeDasharrayStyle = STROKE_STYLES2[strokeStyle] || strokeDasharray;
  return import_react49.default.createElement(
    "div",
    { className, onClick, onMouseEnter, onMouseLeave },
    import_react49.default.createElement(
      "svg",
      { className: "rv-discrete-color-legend-item__color", height: 2, width: 14 },
      import_react49.default.createElement("path", {
        className: "rv-discrete-color-legend-item__color__path",
        d: "M 0, 1 L 14, 1",
        style: _extends52({}, strokeWidth ? { strokeWidth } : {}, strokeDasharrayStyle ? { strokeDasharray: strokeDasharrayStyle } : {}, {
          stroke: disabled ? null : color2
        })
      })
    ),
    import_react49.default.createElement(
      "span",
      { className: "rv-discrete-color-legend-item__title" },
      title
    )
  );
}
DiscreteColorLegendItem.propTypes = {
  color: import_prop_types42.default.string.isRequired,
  disabled: import_prop_types42.default.bool,
  title: import_prop_types42.default.oneOfType([import_prop_types42.default.string, import_prop_types42.default.element]).isRequired,
  onClick: import_prop_types42.default.func,
  onMouseEnter: import_prop_types42.default.func,
  onMouseLeave: import_prop_types42.default.func,
  orientation: import_prop_types42.default.oneOf(["vertical", "horizontal"]).isRequired,
  strokeDasharray: import_prop_types42.default.string,
  strokeWidth: import_prop_types42.default.number,
  strokeStyle: import_prop_types42.default.oneOf(Object.keys(STROKE_STYLES2))
};
DiscreteColorLegendItem.defaultProps = {
  disabled: false,
  strokeStyle: "solid"
};
DiscreteColorLegendItem.displayName = "DiscreteColorLegendItem";
var discrete_color_legend_item_default = DiscreteColorLegendItem;

// plugins/public/node_modules/react-vis/es/legends/discrete-color-legend.js
var _extends53 = Object.assign || function(target) {
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
function DiscreteColorLegend(_ref) {
  var className = _ref.className, colors = _ref.colors, height = _ref.height, items = _ref.items, onItemClick = _ref.onItemClick, onItemMouseEnter = _ref.onItemMouseEnter, onItemMouseLeave = _ref.onItemMouseLeave, orientation = _ref.orientation, style = _ref.style, width = _ref.width;
  return import_react50.default.createElement(
    "div",
    {
      className: "rv-discrete-color-legend " + orientation + " " + className,
      style: _extends53({ width, height }, style)
    },
    items.map(function(item, i) {
      return import_react50.default.createElement(discrete_color_legend_item_default, {
        title: item.title ? item.title : item,
        color: item.color ? item.color : colors[i % colors.length],
        strokeDasharray: item.strokeDasharray,
        strokeStyle: item.strokeStyle,
        strokeWidth: item.strokeWidth,
        disabled: Boolean(item.disabled),
        orientation,
        key: i,
        onClick: onItemClick ? function(e) {
          return onItemClick(item, i, e);
        } : null,
        onMouseEnter: onItemMouseEnter ? function(e) {
          return onItemMouseEnter(item, i, e);
        } : null,
        onMouseLeave: onItemMouseEnter ? function(e) {
          return onItemMouseLeave(item, i, e);
        } : null
      });
    })
  );
}
DiscreteColorLegend.displayName = "DiscreteColorLegendItem";
DiscreteColorLegend.propTypes = {
  className: import_prop_types43.default.string,
  items: import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.shape({
    title: import_prop_types43.default.oneOfType([import_prop_types43.default.string, import_prop_types43.default.element]).isRequired,
    color: import_prop_types43.default.string,
    disabled: import_prop_types43.default.bool
  }), import_prop_types43.default.string.isRequired, import_prop_types43.default.element])).isRequired,
  onItemClick: import_prop_types43.default.func,
  onItemMouseEnter: import_prop_types43.default.func,
  onItemMouseLeave: import_prop_types43.default.func,
  height: import_prop_types43.default.number,
  width: import_prop_types43.default.number,
  orientation: import_prop_types43.default.oneOf(["vertical", "horizontal"])
};
DiscreteColorLegend.defaultProps = {
  className: "",
  colors: DISCRETE_COLOR_RANGE,
  orientation: "vertical"
};
var discrete_color_legend_default = DiscreteColorLegend;

// plugins/public/node_modules/react-vis/es/legends/searchable-discrete-color-legend.js
var import_react51 = __toESM(require("react"));
var import_prop_types44 = __toESM(require_prop_types());
var _extends54 = Object.assign || function(target) {
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
var propTypes16 = _extends54({}, discrete_color_legend_default.propTypes, {
  searchText: import_prop_types44.default.string,
  onSearchChange: import_prop_types44.default.func,
  searchPlaceholder: import_prop_types44.default.string,
  searchFn: import_prop_types44.default.func
});
var defaultProps14 = {
  className: "",
  searchText: "",
  searchFn: function searchFn(items, s2) {
    return items.filter(function(item) {
      return String(item.title || item).toLowerCase().indexOf(s2) !== -1;
    });
  }
};
function SearchableDiscreteColorLegend(props) {
  var className = props.className, colors = props.colors, height = props.height, items = props.items, onItemClick = props.onItemClick, onSearchChange = props.onSearchChange, orientation = props.orientation, searchFn2 = props.searchFn, searchPlaceholder = props.searchPlaceholder, searchText = props.searchText, width = props.width;
  var onChange = onSearchChange ? function(_ref) {
    var value2 = _ref.target.value;
    return onSearchChange(value2);
  } : null;
  var filteredItems = searchFn2(items, searchText);
  return import_react51.default.createElement(
    "div",
    { className: "rv-search-wrapper " + className, style: { width, height } },
    import_react51.default.createElement(
      "form",
      { className: "rv-search-wrapper__form" },
      import_react51.default.createElement("input", {
        type: "search",
        placeholder: searchPlaceholder,
        className: "rv-search-wrapper__form__input",
        value: searchText,
        onChange
      })
    ),
    import_react51.default.createElement(
      "div",
      { className: "rv-search-wrapper__contents" },
      import_react51.default.createElement(discrete_color_legend_default, {
        colors,
        items: filteredItems,
        onItemClick,
        orientation
      })
    )
  );
}
SearchableDiscreteColorLegend.propTypes = propTypes16;
SearchableDiscreteColorLegend.defaultProps = defaultProps14;
SearchableDiscreteColorLegend.displayName = "SearchableDiscreteColorLegend";

// plugins/public/node_modules/react-vis/es/parallel-coordinates/index.js
var import_react52 = __toESM(require("react"));
var import_prop_types45 = __toESM(require_prop_types());
var _createClass41 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends55 = Object.assign || function(target) {
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
function _defineProperty9(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _classCallCheck41(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn41(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits41(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var predefinedClassName17 = "rv-parallel-coordinates-chart";
var DEFAULT_FORMAT2 = format(".2r");
function getAxes(props) {
  var animation = props.animation, domains = props.domains, style = props.style, tickFormat = props.tickFormat;
  return domains.map(function(domain, index) {
    var sortedDomain = domain.domain;
    var domainTickFormat = function domainTickFormat2(t) {
      return domain.tickFormat ? domain.tickFormat(t) : tickFormat(t);
    };
    return import_react52.default.createElement(decorative_axis_default, {
      animation,
      key: index + "-axis",
      axisStart: { x: domain.name, y: 0 },
      axisEnd: { x: domain.name, y: 1 },
      axisDomain: sortedDomain,
      numberOfTicks: 5,
      tickValue: domainTickFormat,
      style: style.axes
    });
  });
}
function getLabels(props) {
  var domains = props.domains, style = props.style;
  return domains.map(function(domain, index) {
    return {
      x: domain.name,
      y: 1.1,
      label: domain.name,
      style
    };
  });
}
function getLines(props) {
  var animation = props.animation, brushFilters = props.brushFilters, colorRange = props.colorRange, domains = props.domains, data = props.data, style = props.style, showMarks = props.showMarks;
  var scales = domains.reduce(function(acc, _ref) {
    var domain = _ref.domain, name = _ref.name;
    acc[name] = linear2().domain(domain).range([0, 1]);
    return acc;
  }, {});
  return data.map(function(row, rowIndex) {
    var withinFilteredRange = true;
    var mappedData = domains.map(function(domain, index) {
      var getValue = domain.getValue, name = domain.name;
      var yVal = scales[name](getValue ? getValue(row) : row[name]);
      var filter = brushFilters[name];
      if (filter && (yVal < filter.min || yVal > filter.max)) {
        withinFilteredRange = false;
      }
      return { x: name, y: yVal };
    });
    var selectedName = predefinedClassName17 + "-line";
    var unselectedName = selectedName + " " + predefinedClassName17 + "-line-unselected";
    var lineProps = {
      animation,
      className: withinFilteredRange ? selectedName : unselectedName,
      key: rowIndex + "-polygon",
      data: mappedData,
      color: row.color || colorRange[rowIndex % colorRange.length],
      style: _extends55({}, style.lines, row.style || {})
    };
    if (!withinFilteredRange) {
      lineProps.style = _extends55({}, lineProps.style, style.deselectedLineStyle);
    }
    return showMarks ? import_react52.default.createElement(line_mark_series_default, lineProps) : import_react52.default.createElement(line_series_default, lineProps);
  });
}
var ParallelCoordinates = function(_Component) {
  _inherits41(ParallelCoordinates2, _Component);
  function ParallelCoordinates2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck41(this, ParallelCoordinates2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn41(this, (_ref2 = ParallelCoordinates2.__proto__ || Object.getPrototypeOf(ParallelCoordinates2)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      brushFilters: {}
    }, _temp), _possibleConstructorReturn41(_this, _ret);
  }
  _createClass41(ParallelCoordinates2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var brushFilters = this.state.brushFilters;
      var _props = this.props, animation = _props.animation, brushing = _props.brushing, className = _props.className, children = _props.children, colorRange = _props.colorRange, data = _props.data, domains = _props.domains, height = _props.height, hideInnerMostValues = _props.hideInnerMostValues, margin = _props.margin, onMouseLeave = _props.onMouseLeave, onMouseEnter = _props.onMouseEnter, showMarks = _props.showMarks, style = _props.style, tickFormat = _props.tickFormat, width = _props.width;
      var axes = getAxes({
        domains,
        animation,
        hideInnerMostValues,
        style,
        tickFormat
      });
      var lines = getLines({
        animation,
        brushFilters,
        colorRange,
        domains,
        data,
        showMarks,
        style
      });
      var labelSeries = import_react52.default.createElement(label_series_default, {
        animation: true,
        key: className,
        className: predefinedClassName17 + "-label",
        data: getLabels({ domains, style: style.labels })
      });
      var _getInnerDimensions = getInnerDimensions(this.props, DEFAULT_MARGINS), marginLeft = _getInnerDimensions.marginLeft, marginRight = _getInnerDimensions.marginRight;
      return import_react52.default.createElement(
        xy_plot_default,
        {
          height,
          width,
          margin,
          dontCheckIfEmpty: true,
          className: className + " " + predefinedClassName17,
          onMouseLeave,
          onMouseEnter,
          xType: "ordinal",
          yDomain: [0, 1]
        },
        children,
        axes.concat(lines).concat(labelSeries),
        brushing && domains.map(function(d) {
          var trigger = function trigger2(row) {
            _this2.setState({
              brushFilters: _extends55({}, brushFilters, _defineProperty9({}, d.name, row ? { min: row.bottom, max: row.top } : null))
            });
          };
          return import_react52.default.createElement(highlight_default, {
            key: d.name,
            drag: true,
            highlightX: d.name,
            onBrushEnd: trigger,
            onDragEnd: trigger,
            highlightWidth: (width - marginLeft - marginRight) / domains.length,
            enableX: false
          });
        })
      );
    }
  }]);
  return ParallelCoordinates2;
}(import_react52.Component);
ParallelCoordinates.displayName = "ParallelCoordinates";
ParallelCoordinates.propTypes = {
  animation: AnimationPropType,
  brushing: import_prop_types45.default.bool,
  className: import_prop_types45.default.string,
  colorType: import_prop_types45.default.string,
  colorRange: import_prop_types45.default.arrayOf(import_prop_types45.default.string),
  data: import_prop_types45.default.arrayOf(import_prop_types45.default.object).isRequired,
  domains: import_prop_types45.default.arrayOf(import_prop_types45.default.shape({
    name: import_prop_types45.default.string.isRequired,
    domain: import_prop_types45.default.arrayOf(import_prop_types45.default.number).isRequired,
    tickFormat: import_prop_types45.default.func
  })).isRequired,
  height: import_prop_types45.default.number.isRequired,
  margin: MarginPropType,
  style: import_prop_types45.default.shape({
    axes: import_prop_types45.default.object,
    labels: import_prop_types45.default.object,
    lines: import_prop_types45.default.object
  }),
  showMarks: import_prop_types45.default.bool,
  tickFormat: import_prop_types45.default.func,
  width: import_prop_types45.default.number.isRequired
};
ParallelCoordinates.defaultProps = {
  className: "",
  colorType: "category",
  colorRange: DISCRETE_COLOR_RANGE,
  style: {
    axes: {
      line: {},
      ticks: {},
      text: {}
    },
    labels: {
      fontSize: 10,
      textAnchor: "middle"
    },
    lines: {
      strokeWidth: 1,
      strokeOpacity: 1
    },
    deselectedLineStyle: {
      strokeOpacity: 0.1
    }
  },
  tickFormat: DEFAULT_FORMAT2
};

// plugins/public/node_modules/react-vis/es/radar-chart/index.js
var import_react53 = __toESM(require("react"));
var import_prop_types46 = __toESM(require_prop_types());
var _extends56 = Object.assign || function(target) {
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
var predefinedClassName18 = "rv-radar-chart";
var DEFAULT_FORMAT3 = format(".2r");
function getAxes2(props) {
  var animation = props.animation, domains = props.domains, startingAngle = props.startingAngle, style = props.style, tickFormat = props.tickFormat, hideInnerMostValues = props.hideInnerMostValues;
  return domains.map(function(domain, index) {
    var angle = index / domains.length * Math.PI * 2 + startingAngle;
    var sortedDomain = domain.domain;
    var domainTickFormat = function domainTickFormat2(t) {
      if (hideInnerMostValues && t === sortedDomain[0]) {
        return "";
      }
      return domain.tickFormat ? domain.tickFormat(t) : tickFormat(t);
    };
    return import_react53.default.createElement(decorative_axis_default, {
      animation,
      key: index + "-axis",
      axisStart: { x: 0, y: 0 },
      axisEnd: {
        x: getCoordinate(Math.cos(angle)),
        y: getCoordinate(Math.sin(angle))
      },
      axisDomain: sortedDomain,
      numberOfTicks: 5,
      tickValue: domainTickFormat,
      style: style.axes
    });
  });
}
function getCoordinate(axisEndPoint) {
  var epsilon5 = 1e-12;
  if (Math.abs(axisEndPoint) <= epsilon5) {
    axisEndPoint = 0;
  } else if (axisEndPoint > 0) {
    if (Math.abs(axisEndPoint - 0.5) <= epsilon5) {
      axisEndPoint = 0.5;
    }
  } else if (axisEndPoint < 0) {
    if (Math.abs(axisEndPoint + 0.5) <= epsilon5) {
      axisEndPoint = -0.5;
    }
  }
  return axisEndPoint;
}
function getLabels2(props) {
  var domains = props.domains, startingAngle = props.startingAngle, style = props.style;
  return domains.map(function(_ref, index) {
    var name = _ref.name;
    var angle = index / domains.length * Math.PI * 2 + startingAngle;
    var radius = 1.2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      label: name,
      style
    };
  });
}
function getPolygons(props) {
  var animation = props.animation, colorRange = props.colorRange, domains = props.domains, data = props.data, style = props.style, startingAngle = props.startingAngle, onSeriesMouseOver = props.onSeriesMouseOver, onSeriesMouseOut = props.onSeriesMouseOut;
  var scales = domains.reduce(function(acc, _ref2) {
    var domain = _ref2.domain, name = _ref2.name;
    acc[name] = linear2().domain(domain).range([0, 1]);
    return acc;
  }, {});
  return data.map(function(row, rowIndex) {
    var mappedData = domains.map(function(_ref3, index) {
      var name = _ref3.name, getValue = _ref3.getValue;
      var dataPoint = getValue ? getValue(row) : row[name];
      var angle = index / domains.length * Math.PI * 2 + startingAngle;
      var radius = Math.max(scales[name](dataPoint), 0);
      return { x: radius * Math.cos(angle), y: radius * Math.sin(angle), name: row.name };
    });
    return import_react53.default.createElement(polygon_series_default, {
      animation,
      className: predefinedClassName18 + "-polygon",
      key: rowIndex + "-polygon",
      data: mappedData,
      style: _extends56({
        stroke: row.color || row.stroke || colorRange[rowIndex % colorRange.length],
        fill: row.color || row.fill || colorRange[rowIndex % colorRange.length]
      }, style.polygons),
      onSeriesMouseOver,
      onSeriesMouseOut
    });
  });
}
function getPolygonPoints(props) {
  var animation = props.animation, domains = props.domains, data = props.data, startingAngle = props.startingAngle, style = props.style, onValueMouseOver = props.onValueMouseOver, onValueMouseOut = props.onValueMouseOut;
  if (!onValueMouseOver) {
    return;
  }
  var scales = domains.reduce(function(acc, _ref4) {
    var domain = _ref4.domain, name = _ref4.name;
    acc[name] = linear2().domain(domain).range([0, 1]);
    return acc;
  }, {});
  return data.map(function(row, rowIndex) {
    var mappedData = domains.map(function(_ref5, index) {
      var name = _ref5.name, getValue = _ref5.getValue;
      var dataPoint = getValue ? getValue(row) : row[name];
      var angle = index / domains.length * Math.PI * 2 + startingAngle;
      var radius = Math.max(scales[name](dataPoint), 0);
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        domain: name,
        value: dataPoint,
        dataName: row.name
      };
    });
    return import_react53.default.createElement(mark_series_default, {
      animation,
      className: predefinedClassName18 + "-polygonPoint",
      key: rowIndex + "-polygonPoint",
      data: mappedData,
      size: 10,
      style: _extends56({}, style.polygons, {
        fill: "transparent",
        stroke: "transparent"
      }),
      onValueMouseOver,
      onValueMouseOut
    });
  });
}
function RadarChart(props) {
  var animation = props.animation, className = props.className, children = props.children, colorRange = props.colorRange, data = props.data, domains = props.domains, height = props.height, hideInnerMostValues = props.hideInnerMostValues, margin = props.margin, onMouseLeave = props.onMouseLeave, onMouseEnter = props.onMouseEnter, startingAngle = props.startingAngle, style = props.style, tickFormat = props.tickFormat, width = props.width, renderAxesOverPolygons = props.renderAxesOverPolygons, onValueMouseOver = props.onValueMouseOver, onValueMouseOut = props.onValueMouseOut, onSeriesMouseOver = props.onSeriesMouseOver, onSeriesMouseOut = props.onSeriesMouseOut;
  var axes = getAxes2({
    domains,
    animation,
    hideInnerMostValues,
    startingAngle,
    style,
    tickFormat
  });
  var polygons = getPolygons({
    animation,
    colorRange,
    domains,
    data,
    startingAngle,
    style,
    onSeriesMouseOver,
    onSeriesMouseOut
  });
  var polygonPoints = getPolygonPoints({
    animation,
    colorRange,
    domains,
    data,
    startingAngle,
    style,
    onValueMouseOver,
    onValueMouseOut
  });
  var labelSeries = import_react53.default.createElement(label_series_default, {
    animation,
    key: className,
    className: predefinedClassName18 + "-label",
    data: getLabels2({ domains, style: style.labels, startingAngle })
  });
  return import_react53.default.createElement(
    xy_plot_default,
    {
      height,
      width,
      margin,
      dontCheckIfEmpty: true,
      className: className + " " + predefinedClassName18,
      onMouseLeave,
      onMouseEnter,
      xDomain: [-1, 1],
      yDomain: [-1, 1]
    },
    children,
    !renderAxesOverPolygons && axes.concat(polygons).concat(labelSeries).concat(polygonPoints),
    renderAxesOverPolygons && polygons.concat(labelSeries).concat(axes).concat(polygonPoints)
  );
}
RadarChart.displayName = "RadarChart";
RadarChart.propTypes = {
  animation: AnimationPropType,
  className: import_prop_types46.default.string,
  colorType: import_prop_types46.default.string,
  colorRange: import_prop_types46.default.arrayOf(import_prop_types46.default.string),
  data: import_prop_types46.default.arrayOf(import_prop_types46.default.object).isRequired,
  domains: import_prop_types46.default.arrayOf(import_prop_types46.default.shape({
    name: import_prop_types46.default.string.isRequired,
    domain: import_prop_types46.default.arrayOf(import_prop_types46.default.number).isRequired,
    tickFormat: import_prop_types46.default.func
  })).isRequired,
  height: import_prop_types46.default.number.isRequired,
  hideInnerMostValues: import_prop_types46.default.bool,
  margin: MarginPropType,
  startingAngle: import_prop_types46.default.number,
  style: import_prop_types46.default.shape({
    axes: import_prop_types46.default.object,
    labels: import_prop_types46.default.object,
    polygons: import_prop_types46.default.object
  }),
  tickFormat: import_prop_types46.default.func,
  width: import_prop_types46.default.number.isRequired,
  renderAxesOverPolygons: import_prop_types46.default.bool,
  onValueMouseOver: import_prop_types46.default.func,
  onValueMouseOut: import_prop_types46.default.func,
  onSeriesMouseOver: import_prop_types46.default.func,
  onSeriesMouseOut: import_prop_types46.default.func
};
RadarChart.defaultProps = {
  className: "",
  colorType: "category",
  colorRange: DISCRETE_COLOR_RANGE,
  hideInnerMostValues: true,
  startingAngle: Math.PI / 2,
  style: {
    axes: {
      line: {},
      ticks: {},
      text: {}
    },
    labels: {
      fontSize: 10,
      textAnchor: "middle"
    },
    polygons: {
      strokeWidth: 0.5,
      strokeOpacity: 1,
      fillOpacity: 0.1
    }
  },
  tickFormat: DEFAULT_FORMAT3,
  renderAxesOverPolygons: false
};

// plugins/public/node_modules/react-vis/es/radial-chart/index.js
var import_react54 = __toESM(require("react"));
var import_prop_types47 = __toESM(require_prop_types());
var _extends57 = Object.assign || function(target) {
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
var predefinedClassName19 = "rv-radial-chart";
var DEFAULT_RADIUS_MARGIN = 15;
function getWedgesToRender(_ref) {
  var data = _ref.data, getAngle3 = _ref.getAngle;
  var pie = pie_default().sort(null).value(getAngle3);
  var pieData = pie(data).reverse();
  return pieData.map(function(row, index) {
    return _extends57({}, row.data, {
      angle0: row.startAngle,
      angle: row.endAngle,
      radius0: row.data.innerRadius || 0,
      radius: row.data.radius || 1,
      color: row.data.color || index
    });
  });
}
function generateLabels(mappedData, accessors) {
  var labelsRadiusMultiplier = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.1;
  var getLabel5 = accessors.getLabel, getSubLabel2 = accessors.getSubLabel;
  return mappedData.reduce(function(res, row) {
    var angle = row.angle, angle0 = row.angle0, radius = row.radius;
    var centeredAngle = (angle + angle0) / 2;
    var updatedAngle = -1 * centeredAngle + Math.PI / 2;
    var newLabels = [];
    if (getLabel5(row)) {
      newLabels.push({
        angle: updatedAngle,
        radius: radius * labelsRadiusMultiplier,
        label: getLabel5(row)
      });
    }
    if (getSubLabel2(row)) {
      newLabels.push({
        angle: updatedAngle,
        radius: radius * labelsRadiusMultiplier,
        label: getSubLabel2(row),
        style: { fontSize: 10 },
        yOffset: 12
      });
    }
    return res.concat(newLabels);
  }, []);
}
function getMaxRadius(width, height) {
  return Math.min(width, height) / 2 - DEFAULT_RADIUS_MARGIN;
}
function RadialChart(props) {
  var animation = props.animation, className = props.className, children = props.children, colorType = props.colorType, data = props.data, getAngle3 = props.getAngle, getLabel5 = props.getLabel, getSubLabel2 = props.getSubLabel, height = props.height, hideRootNode = props.hideRootNode, innerRadius = props.innerRadius, labelsAboveChildren = props.labelsAboveChildren, labelsRadiusMultiplier = props.labelsRadiusMultiplier, labelsStyle = props.labelsStyle, margin = props.margin, onMouseLeave = props.onMouseLeave, onMouseEnter = props.onMouseEnter, radius = props.radius, showLabels = props.showLabels, style = props.style, width = props.width;
  var mappedData = getWedgesToRender({
    data,
    height,
    hideRootNode,
    width,
    getAngle: getAngle3
  });
  var radialDomain = getRadialDomain(mappedData);
  var arcProps = _extends57({
    colorType
  }, props, {
    animation,
    radiusDomain: [0, radialDomain],
    data: mappedData,
    radiusNoFallBack: true,
    style,
    arcClassName: "rv-radial-chart__series--pie__slice"
  });
  if (radius) {
    arcProps.radiusDomain = [0, 1];
    arcProps.radiusRange = [innerRadius || 0, radius];
    arcProps.radiusType = "linear";
  }
  var maxRadius = radius ? radius : getMaxRadius(width, height);
  var defaultMargin = getRadialLayoutMargin(width, height, maxRadius);
  var labels = generateLabels(mappedData, {
    getLabel: getLabel5,
    getSubLabel: getSubLabel2
  }, labelsRadiusMultiplier);
  return import_react54.default.createElement(
    xy_plot_default,
    {
      height,
      width,
      margin: _extends57({}, margin, defaultMargin),
      className: className + " " + predefinedClassName19,
      onMouseLeave,
      onMouseEnter,
      xDomain: [-radialDomain, radialDomain],
      yDomain: [-radialDomain, radialDomain]
    },
    import_react54.default.createElement(arc_series_default, _extends57({}, arcProps, { getAngle: function getAngle4(d) {
      return d.angle;
    } })),
    showLabels && !labelsAboveChildren && import_react54.default.createElement(label_series_default, { data: labels, style: labelsStyle }),
    children,
    showLabels && labelsAboveChildren && import_react54.default.createElement(label_series_default, { data: labels, style: labelsStyle })
  );
}
RadialChart.displayName = "RadialChart";
RadialChart.propTypes = {
  animation: AnimationPropType,
  className: import_prop_types47.default.string,
  colorType: import_prop_types47.default.string,
  data: import_prop_types47.default.arrayOf(import_prop_types47.default.shape({
    angle: import_prop_types47.default.number,
    className: import_prop_types47.default.string,
    label: import_prop_types47.default.string,
    radius: import_prop_types47.default.number,
    style: import_prop_types47.default.object
  })).isRequired,
  getAngle: import_prop_types47.default.func,
  getAngle0: import_prop_types47.default.func,
  padAngle: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.number]),
  getRadius: import_prop_types47.default.func,
  getRadius0: import_prop_types47.default.func,
  getLabel: import_prop_types47.default.func,
  height: import_prop_types47.default.number.isRequired,
  labelsAboveChildren: import_prop_types47.default.bool,
  labelsStyle: import_prop_types47.default.object,
  margin: MarginPropType,
  onValueClick: import_prop_types47.default.func,
  onValueMouseOver: import_prop_types47.default.func,
  onValueMouseOut: import_prop_types47.default.func,
  showLabels: import_prop_types47.default.bool,
  style: import_prop_types47.default.object,
  subLabel: import_prop_types47.default.func,
  width: import_prop_types47.default.number.isRequired
};
RadialChart.defaultProps = {
  className: "",
  colorType: "category",
  colorRange: DISCRETE_COLOR_RANGE,
  padAngle: 0,
  getAngle: function getAngle(d) {
    return d.angle;
  },
  getAngle0: function getAngle0(d) {
    return d.angle0;
  },
  getRadius: function getRadius(d) {
    return d.radius;
  },
  getRadius0: function getRadius0(d) {
    return d.radius0;
  },
  getLabel: function getLabel2(d) {
    return d.label;
  },
  getSubLabel: function getSubLabel(d) {
    return d.subLabel;
  }
};

// plugins/public/node_modules/react-vis/es/sankey/index.js
var import_react56 = __toESM(require("react"));
var import_prop_types48 = __toESM(require_prop_types());

// plugins/public/node_modules/d3-sankey/src/align.js
function targetDepth(d) {
  return d.target.depth;
}
function left(node) {
  return node.depth;
}
function right(node, n) {
  return n - 1 - node.height;
}
function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}
function center(node) {
  return node.targetLinks.length ? node.depth : node.sourceLinks.length ? min_default(node.sourceLinks, targetDepth) - 1 : 0;
}

// plugins/public/node_modules/d3-sankey/src/constant.js
function constant(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-sankey/src/sankey.js
function ascendingSourceBreadth(a2, b) {
  return ascendingBreadth(a2.source, b.source) || a2.index - b.index;
}
function ascendingTargetBreadth(a2, b) {
  return ascendingBreadth(a2.target, b.target) || a2.index - b.index;
}
function ascendingBreadth(a2, b) {
  return a2.y0 - b.y0;
}
function value(d) {
  return d.value;
}
function nodeCenter(node) {
  return (node.y0 + node.y1) / 2;
}
function weightedSource(link2) {
  return nodeCenter(link2.source) * link2.value;
}
function weightedTarget(link2) {
  return nodeCenter(link2.target) * link2.value;
}
function defaultId(d) {
  return d.index;
}
function defaultNodes(graph) {
  return graph.nodes;
}
function defaultLinks(graph) {
  return graph.links;
}
function find(nodeById, id) {
  var node = nodeById.get(id);
  if (!node)
    throw new Error("missing: " + id);
  return node;
}
function sankey_default() {
  var x05 = 0, y05 = 0, x12 = 1, y12 = 1, dx = 24, py = 8, id = defaultId, align = justify, nodes = defaultNodes, links = defaultLinks, iterations = 32;
  function sankey() {
    var graph = { nodes: nodes.apply(null, arguments), links: links.apply(null, arguments) };
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeBreadths(graph, iterations);
    computeLinkBreadths(graph);
    return graph;
  }
  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };
  sankey.nodeId = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), sankey) : id;
  };
  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
  };
  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };
  sankey.nodePadding = function(_) {
    return arguments.length ? (py = +_, sankey) : py;
  };
  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : constant(_), sankey) : nodes;
  };
  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : constant(_), sankey) : links;
  };
  sankey.size = function(_) {
    return arguments.length ? (x05 = y05 = 0, x12 = +_[0], y12 = +_[1], sankey) : [x12 - x05, y12 - y05];
  };
  sankey.extent = function(_) {
    return arguments.length ? (x05 = +_[0][0], x12 = +_[1][0], y05 = +_[0][1], y12 = +_[1][1], sankey) : [[x05, y05], [x12, y12]];
  };
  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };
  function computeNodeLinks(graph) {
    graph.nodes.forEach(function(node, i) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    var nodeById = map_default(graph.nodes, id);
    graph.links.forEach(function(link2, i) {
      link2.index = i;
      var source = link2.source, target = link2.target;
      if (typeof source !== "object")
        source = link2.source = find(nodeById, source);
      if (typeof target !== "object")
        target = link2.target = find(nodeById, target);
      source.sourceLinks.push(link2);
      target.targetLinks.push(link2);
    });
  }
  function computeNodeValues(graph) {
    graph.nodes.forEach(function(node) {
      node.value = Math.max(
        sum_default(node.sourceLinks, value),
        sum_default(node.targetLinks, value)
      );
    });
  }
  function computeNodeDepths(graph) {
    var nodes2, next, x3;
    for (nodes2 = graph.nodes, next = [], x3 = 0; nodes2.length; ++x3, nodes2 = next, next = []) {
      nodes2.forEach(function(node) {
        node.depth = x3;
        node.sourceLinks.forEach(function(link2) {
          if (next.indexOf(link2.target) < 0) {
            next.push(link2.target);
          }
        });
      });
    }
    for (nodes2 = graph.nodes, next = [], x3 = 0; nodes2.length; ++x3, nodes2 = next, next = []) {
      nodes2.forEach(function(node) {
        node.height = x3;
        node.targetLinks.forEach(function(link2) {
          if (next.indexOf(link2.source) < 0) {
            next.push(link2.source);
          }
        });
      });
    }
    var kx2 = (x12 - x05 - dx) / (x3 - 1);
    graph.nodes.forEach(function(node) {
      node.x1 = (node.x0 = x05 + Math.max(0, Math.min(x3 - 1, Math.floor(align.call(null, node, x3)))) * kx2) + dx;
    });
  }
  function computeNodeBreadths(graph) {
    var columns = nest_default().key(function(d) {
      return d.x0;
    }).sortKeys(ascending_default).entries(graph.nodes).map(function(d) {
      return d.values;
    });
    initializeNodeBreadth();
    resolveCollisions();
    for (var alpha = 1, n = iterations; n > 0; --n) {
      relaxRightToLeft(alpha *= 0.99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }
    function initializeNodeBreadth() {
      var ky2 = min_default(columns, function(nodes2) {
        return (y12 - y05 - (nodes2.length - 1) * py) / sum_default(nodes2, value);
      });
      columns.forEach(function(nodes2) {
        nodes2.forEach(function(node, i) {
          node.y1 = (node.y0 = i) + node.value * ky2;
        });
      });
      graph.links.forEach(function(link2) {
        link2.width = link2.value * ky2;
      });
    }
    function relaxLeftToRight(alpha2) {
      columns.forEach(function(nodes2) {
        nodes2.forEach(function(node) {
          if (node.targetLinks.length) {
            var dy = (sum_default(node.targetLinks, weightedSource) / sum_default(node.targetLinks, value) - nodeCenter(node)) * alpha2;
            node.y0 += dy, node.y1 += dy;
          }
        });
      });
    }
    function relaxRightToLeft(alpha2) {
      columns.slice().reverse().forEach(function(nodes2) {
        nodes2.forEach(function(node) {
          if (node.sourceLinks.length) {
            var dy = (sum_default(node.sourceLinks, weightedTarget) / sum_default(node.sourceLinks, value) - nodeCenter(node)) * alpha2;
            node.y0 += dy, node.y1 += dy;
          }
        });
      });
    }
    function resolveCollisions() {
      columns.forEach(function(nodes2) {
        var node, dy, y3 = y05, n2 = nodes2.length, i;
        nodes2.sort(ascendingBreadth);
        for (i = 0; i < n2; ++i) {
          node = nodes2[i];
          dy = y3 - node.y0;
          if (dy > 0)
            node.y0 += dy, node.y1 += dy;
          y3 = node.y1 + py;
        }
        dy = y3 - py - y12;
        if (dy > 0) {
          y3 = node.y0 -= dy, node.y1 -= dy;
          for (i = n2 - 2; i >= 0; --i) {
            node = nodes2[i];
            dy = node.y1 + py - y3;
            if (dy > 0)
              node.y0 -= dy, node.y1 -= dy;
            y3 = node.y0;
          }
        }
      });
    }
  }
  function computeLinkBreadths(graph) {
    graph.nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetBreadth);
      node.targetLinks.sort(ascendingSourceBreadth);
    });
    graph.nodes.forEach(function(node) {
      var y06 = node.y0, y13 = y06;
      node.sourceLinks.forEach(function(link2) {
        link2.y0 = y06 + link2.width / 2, y06 += link2.width;
      });
      node.targetLinks.forEach(function(link2) {
        link2.y1 = y13 + link2.width / 2, y13 += link2.width;
      });
    });
  }
  return sankey;
}

// plugins/public/node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function horizontalSource(d) {
  return [d.source.x1, d.y0];
}
function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}
function sankeyLinkHorizontal_default() {
  return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}

// plugins/public/node_modules/react-vis/es/sankey/sankey-link.js
var import_react55 = __toESM(require("react"));
var _extends58 = Object.assign || function(target) {
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
var DEFAULT_LINK_COLOR = DISCRETE_COLOR_RANGE[1];
var DEFAULT_LINK_OPACITY = 0.7;
function SankeyLink(props) {
  var animation = props.animation, data = props.data, node = props.node, opacity = props.opacity, color2 = props.color, strokeWidth = props.strokeWidth, style = props.style, onLinkClick = props.onLinkClick, onLinkMouseOver = props.onLinkMouseOver, onLinkMouseOut = props.onLinkMouseOut;
  if (animation) {
    return import_react55.default.createElement(
      animation_default,
      _extends58({}, props, { animatedProps: ANIMATED_SERIES_PROPS }),
      import_react55.default.createElement(SankeyLink, _extends58({}, props, { animation: null }))
    );
  }
  return import_react55.default.createElement("path", _extends58({
    d: data
  }, style, {
    className: "rv-sankey__link",
    opacity: Number.isFinite(opacity) ? opacity : DEFAULT_LINK_OPACITY,
    stroke: color2 || DEFAULT_LINK_COLOR,
    onClick: function onClick(e) {
      return onLinkClick(node, e);
    },
    onMouseOver: function onMouseOver(e) {
      return onLinkMouseOver(node, e);
    },
    onMouseOut: function onMouseOut(e) {
      return onLinkMouseOut(node, e);
    },
    strokeWidth,
    fill: "none"
  }));
}
SankeyLink.displayName = "SankeyLink";
SankeyLink.requiresSVG = true;
var sankey_link_default = SankeyLink;

// plugins/public/node_modules/react-vis/es/sankey/index.js
var _extends59 = Object.assign || function(target) {
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
function _toConsumableArray5(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var NOOP3 = function NOOP4(f) {
  return f;
};
var ALIGNMENTS = {
  justify,
  center,
  left,
  right
};
var DEFAULT_MARGINS2 = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 20
};
function Sankey(props) {
  var align = props.align, animation = props.animation, children = props.children, className = props.className, hasVoronoi = props.hasVoronoi, height = props.height, hideLabels = props.hideLabels, labelRotation = props.labelRotation, layout = props.layout, links = props.links, linkOpacity = props.linkOpacity, margin = props.margin, nodePadding = props.nodePadding, nodes = props.nodes, nodeWidth = props.nodeWidth, onValueClick = props.onValueClick, onValueMouseOver = props.onValueMouseOver, onValueMouseOut = props.onValueMouseOut, onLinkClick = props.onLinkClick, onLinkMouseOver = props.onLinkMouseOver, onLinkMouseOut = props.onLinkMouseOut, style = props.style, width = props.width;
  var nodesCopy = [].concat(_toConsumableArray5(new Array(nodes.length))).map(function(e, i) {
    return _extends59({}, nodes[i]);
  });
  var linksCopy = [].concat(_toConsumableArray5(new Array(links.length))).map(function(e, i) {
    return _extends59({}, links[i]);
  });
  var _getInnerDimensions = getInnerDimensions({
    margin,
    height,
    width
  }, DEFAULT_MARGINS2), marginLeft = _getInnerDimensions.marginLeft, marginTop = _getInnerDimensions.marginTop, marginRight = _getInnerDimensions.marginRight, marginBottom = _getInnerDimensions.marginBottom;
  var sankeyInstance = sankey_default().extent([[marginLeft, marginTop], [width - marginRight, height - marginBottom - marginTop]]).nodeWidth(nodeWidth).nodePadding(nodePadding).nodes(nodesCopy).links(linksCopy).nodeAlign(ALIGNMENTS[align]).iterations(layout);
  sankeyInstance(nodesCopy);
  var nWidth = sankeyInstance.nodeWidth();
  var path2 = sankeyLinkHorizontal_default();
  return import_react56.default.createElement(
    xy_plot_default,
    _extends59({}, props, { yType: "literal", className: "rv-sankey " + className }),
    linksCopy.map(function(link2, i) {
      return import_react56.default.createElement(sankey_link_default, {
        style: style.links,
        data: path2(link2),
        opacity: link2.opacity || linkOpacity,
        color: link2.color,
        onLinkClick,
        onLinkMouseOver,
        onLinkMouseOut,
        strokeWidth: Math.max(link2.width, 1),
        node: link2,
        nWidth,
        key: "link-" + i
      });
    }),
    import_react56.default.createElement(vertical_rect_series_default, {
      animation,
      className: className + " rv-sankey__node",
      data: nodesCopy.map(function(node) {
        return _extends59({}, node, {
          y: node.y1 - marginTop,
          y0: node.y0 - marginTop,
          x: node.x1,
          x0: node.x0,
          color: node.color || DISCRETE_COLOR_RANGE[0],
          sourceLinks: null,
          targetLinks: null
        });
      }),
      style: style.rects,
      onValueClick,
      onValueMouseOver,
      onValueMouseOut,
      colorType: "literal"
    }),
    !hideLabels && import_react56.default.createElement(label_series_default, {
      animation,
      className,
      rotation: labelRotation,
      labelAnchorY: "text-before-edge",
      data: nodesCopy.map(function(node, i) {
        return _extends59({
          x: node.x0 + (node.x0 < width / 2 ? nWidth + 10 : -10),
          y: (node.y0 + node.y1) / 2 - marginTop,
          label: node.name,
          style: _extends59({
            textAnchor: node.x0 < width / 2 ? "start" : "end",
            dy: "-.5em"
          }, style.labels)
        }, nodes[i]);
      })
    }),
    hasVoronoi && import_react56.default.createElement(voronoi_default2, {
      className: "rv-sankey__voronoi",
      extent: [[-marginLeft, -marginTop], [width + marginRight, height + marginBottom]],
      nodes: nodesCopy,
      onClick: onValueClick,
      onHover: onValueMouseOver,
      onBlur: onValueMouseOut,
      x: function x3(d) {
        return d.x0 + (d.x1 - d.x0) / 2;
      },
      y: function y3(d) {
        return d.y0 + (d.y1 - d.y0) / 2;
      }
    }),
    children
  );
}
Sankey.defaultProps = {
  align: "justify",
  className: "",
  hasVoronoi: false,
  hideLabels: false,
  labelRotation: 0,
  layout: 50,
  margin: DEFAULT_MARGINS2,
  nodePadding: 10,
  nodeWidth: 10,
  onValueMouseOver: NOOP3,
  onValueClick: NOOP3,
  onValueMouseOut: NOOP3,
  onLinkClick: NOOP3,
  onLinkMouseOver: NOOP3,
  onLinkMouseOut: NOOP3,
  style: {
    links: {},
    rects: {},
    labels: {}
  }
};
Sankey.propTypes = {
  align: import_prop_types48.default.oneOf(["justify", "left", "right", "center"]),
  className: import_prop_types48.default.string,
  hasVoronoi: import_prop_types48.default.bool,
  height: import_prop_types48.default.number.isRequired,
  hideLabels: import_prop_types48.default.bool,
  labelRotation: import_prop_types48.default.number,
  layout: import_prop_types48.default.number,
  links: import_prop_types48.default.arrayOf(import_prop_types48.default.shape({
    source: import_prop_types48.default.oneOfType([import_prop_types48.default.number, import_prop_types48.default.object]).isRequired,
    target: import_prop_types48.default.oneOfType([import_prop_types48.default.number, import_prop_types48.default.object]).isRequired
  })).isRequired,
  margin: MarginPropType,
  nodePadding: import_prop_types48.default.number,
  nodes: import_prop_types48.default.arrayOf(import_prop_types48.default.object).isRequired,
  nodeWidth: import_prop_types48.default.number,
  onValueMouseOver: import_prop_types48.default.func,
  onValueClick: import_prop_types48.default.func,
  onValueMouseOut: import_prop_types48.default.func,
  onLinkClick: import_prop_types48.default.func,
  onLinkMouseOver: import_prop_types48.default.func,
  onLinkMouseOut: import_prop_types48.default.func,
  style: import_prop_types48.default.shape({
    links: import_prop_types48.default.object,
    rects: import_prop_types48.default.object,
    labels: import_prop_types48.default.object
  }),
  width: import_prop_types48.default.number.isRequired
};

// plugins/public/node_modules/react-vis/es/sunburst/index.js
var import_react57 = __toESM(require("react"));
var import_prop_types49 = __toESM(require_prop_types());

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum2 = 0, children = node.children, i = children && children.length;
  if (!i)
    sum2 = 1;
  else
    while (--i >= 0)
      sum2 += children[i].value;
  node.value = sum2;
}
function count_default() {
  return this.eachAfter(count);
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children)
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
    }
  } while (next.length);
  return this;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children)
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
  }
  return this;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children)
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default2(value2) {
  return this.eachAfter(function(node) {
    var sum2 = +value2(node.data) || 0, children = node.children, i = children && children.length;
    while (--i >= 0)
      sum2 += children[i].value;
    node.value = sum2;
  });
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default3(end) {
  var start = this, ancestor = leastCommonAncestor(start, end), nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k2 = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k2, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a2, b) {
  if (a2 === b)
    return a2;
  var aNodes = a2.ancestors(), bNodes = b.ancestors(), c2 = null;
  a2 = aNodes.pop();
  b = bNodes.pop();
  while (a2 === b) {
    c2 = a2;
    a2 = aNodes.pop();
    b = bNodes.pop();
  }
  return c2;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// plugins/public/node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
  var root = new Node(data), valued = +data.value && (root.value = data.value), node, nodes = [root], child, childs, i, n;
  if (children == null)
    children = defaultChildren;
  while (node = nodes.pop()) {
    if (valued)
      node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function defaultChildren(d) {
  return d.children;
}
function copyData(node) {
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  sum: sum_default2,
  sort: sort_default,
  path: path_default3,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy
};

// plugins/public/node_modules/d3-hierarchy/src/array.js
var slice5 = Array.prototype.slice;
function shuffle(array4) {
  var m = array4.length, t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array4[m];
    array4[m] = array4[i];
    array4[i] = t;
  }
  return array4;
}

// plugins/public/node_modules/d3-hierarchy/src/pack/enclose.js
function enclose_default(circles2) {
  var i = 0, n = (circles2 = shuffle(slice5.call(circles2))).length, B2 = [], p, e;
  while (i < n) {
    p = circles2[i];
    if (e && enclosesWeak(e, p))
      ++i;
    else
      e = encloseBasis(B2 = extendBasis(B2, p)), i = 0;
  }
  return e;
}
function extendBasis(B2, p) {
  var i, j;
  if (enclosesWeakAll(p, B2))
    return [p];
  for (i = 0; i < B2.length; ++i) {
    if (enclosesNot(p, B2[i]) && enclosesWeakAll(encloseBasis2(B2[i], p), B2)) {
      return [B2[i], p];
    }
  }
  for (i = 0; i < B2.length - 1; ++i) {
    for (j = i + 1; j < B2.length; ++j) {
      if (enclosesNot(encloseBasis2(B2[i], B2[j]), p) && enclosesNot(encloseBasis2(B2[i], p), B2[j]) && enclosesNot(encloseBasis2(B2[j], p), B2[i]) && enclosesWeakAll(encloseBasis3(B2[i], B2[j], p), B2)) {
        return [B2[i], B2[j], p];
      }
    }
  }
  throw new Error();
}
function enclosesNot(a2, b) {
  var dr = a2.r - b.r, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a2, b) {
  var dr = a2.r - b.r + 1e-6, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a2, B2) {
  for (var i = 0; i < B2.length; ++i) {
    if (!enclosesWeak(a2, B2[i])) {
      return false;
    }
  }
  return true;
}
function encloseBasis(B2) {
  switch (B2.length) {
    case 1:
      return encloseBasis1(B2[0]);
    case 2:
      return encloseBasis2(B2[0], B2[1]);
    case 3:
      return encloseBasis3(B2[0], B2[1], B2[2]);
  }
}
function encloseBasis1(a2) {
  return {
    x: a2.x,
    y: a2.y,
    r: a2.r
  };
}
function encloseBasis2(a2, b) {
  var x12 = a2.x, y12 = a2.y, r1 = a2.r, x22 = b.x, y22 = b.y, r2 = b.r, x21 = x22 - x12, y21 = y22 - y12, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x12 + x22 + x21 / l * r21) / 2,
    y: (y12 + y22 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}
function encloseBasis3(a2, b, c2) {
  var x12 = a2.x, y12 = a2.y, r1 = a2.r, x22 = b.x, y22 = b.y, r2 = b.r, x3 = c2.x, y3 = c2.y, r3 = c2.r, a22 = x12 - x22, a3 = x12 - x3, b2 = y12 - y22, b3 = y12 - y3, c22 = r2 - r1, c3 = r3 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d2 = d1 - x22 * x22 - y22 * y22 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a22 * b3, xa = (b2 * d3 - b3 * d2) / (ab * 2) - x12, xb = (b3 * c22 - b2 * c3) / ab, ya = (a3 * d2 - a22 * d3) / (ab * 2) - y12, yb = (a22 * c3 - a3 * c22) / ab, A2 = xb * xb + yb * yb - 1, B2 = 2 * (r1 + xa * xb + ya * yb), C2 = xa * xa + ya * ya - r1 * r1, r = -(A2 ? (B2 + Math.sqrt(B2 * B2 - 4 * A2 * C2)) / (2 * A2) : C2 / B2);
  return {
    x: x12 + xa + xb * r,
    y: y12 + ya + yb * r,
    r
  };
}

// plugins/public/node_modules/d3-hierarchy/src/pack/siblings.js
function place(b, a2, c2) {
  var dx = b.x - a2.x, x3, a22, dy = b.y - a2.y, y3, b2, d2 = dx * dx + dy * dy;
  if (d2) {
    a22 = a2.r + c2.r, a22 *= a22;
    b2 = b.r + c2.r, b2 *= b2;
    if (a22 > b2) {
      x3 = (d2 + b2 - a22) / (2 * d2);
      y3 = Math.sqrt(Math.max(0, b2 / d2 - x3 * x3));
      c2.x = b.x - x3 * dx - y3 * dy;
      c2.y = b.y - x3 * dy + y3 * dx;
    } else {
      x3 = (d2 + a22 - b2) / (2 * d2);
      y3 = Math.sqrt(Math.max(0, a22 / d2 - x3 * x3));
      c2.x = a2.x + x3 * dx - y3 * dy;
      c2.y = a2.y + x3 * dy + y3 * dx;
    }
  } else {
    c2.x = a2.x + c2.r;
    c2.y = a2.y;
  }
}
function intersects(a2, b) {
  var dr = a2.r + b.r - 1e-6, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
  var a2 = node._, b = node.next._, ab = a2.r + b.r, dx = (a2.x * b.r + b.x * a2.r) / ab, dy = (a2.y * b.r + b.y * a2.r) / ab;
  return dx * dx + dy * dy;
}
function Node2(circle2) {
  this._ = circle2;
  this.next = null;
  this.previous = null;
}
function packEnclose(circles2) {
  if (!(n = circles2.length))
    return 0;
  var a2, b, c2, n, aa, ca, i, j, k2, sj, sk;
  a2 = circles2[0], a2.x = 0, a2.y = 0;
  if (!(n > 1))
    return a2.r;
  b = circles2[1], a2.x = -b.r, b.x = a2.r, b.y = 0;
  if (!(n > 2))
    return a2.r + b.r;
  place(b, a2, c2 = circles2[2]);
  a2 = new Node2(a2), b = new Node2(b), c2 = new Node2(c2);
  a2.next = c2.previous = b;
  b.next = a2.previous = c2;
  c2.next = b.previous = a2;
  pack:
    for (i = 3; i < n; ++i) {
      place(a2._, b._, c2 = circles2[i]), c2 = new Node2(c2);
      j = b.next, k2 = a2.previous, sj = b._.r, sk = a2._.r;
      do {
        if (sj <= sk) {
          if (intersects(j._, c2._)) {
            b = j, a2.next = b, b.previous = a2, --i;
            continue pack;
          }
          sj += j._.r, j = j.next;
        } else {
          if (intersects(k2._, c2._)) {
            a2 = k2, a2.next = b, b.previous = a2, --i;
            continue pack;
          }
          sk += k2._.r, k2 = k2.previous;
        }
      } while (j !== k2.next);
      c2.previous = a2, c2.next = b, a2.next = b.previous = b = c2;
      aa = score(a2);
      while ((c2 = c2.next) !== b) {
        if ((ca = score(c2)) < aa) {
          a2 = c2, aa = ca;
        }
      }
      b = a2.next;
    }
  a2 = [b._], c2 = b;
  while ((c2 = c2.next) !== b)
    a2.push(c2._);
  c2 = enclose_default(a2);
  for (i = 0; i < n; ++i)
    a2 = circles2[i], a2.x -= c2.x, a2.y -= c2.y;
  return c2.r;
}

// plugins/public/node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function")
    throw new Error();
  return f;
}

// plugins/public/node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default7(x3) {
  return function() {
    return x3;
  };
}

// plugins/public/node_modules/d3-hierarchy/src/pack/index.js
function defaultRadius(d) {
  return Math.sqrt(d.value);
}
function pack_default() {
  var radius = null, dx = 1, dy = 1, padding = constantZero;
  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }
  pack.radius = function(x3) {
    return arguments.length ? (radius = optional(x3), pack) : radius;
  };
  pack.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], pack) : [dx, dy];
  };
  pack.padding = function(x3) {
    return arguments.length ? (padding = typeof x3 === "function" ? x3 : constant_default7(+x3), pack) : padding;
  };
  return pack;
}
function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}
function packChildren(padding, k2) {
  return function(node) {
    if (children = node.children) {
      var children, i, n = children.length, r = padding(node) * k2 || 0, e;
      if (r)
        for (i = 0; i < n; ++i)
          children[i].r += r;
      e = packEnclose(children);
      if (r)
        for (i = 0; i < n; ++i)
          children[i].r -= r;
      node.r = e + r;
    }
  };
}
function translateChild(k2) {
  return function(node) {
    var parent = node.parent;
    node.r *= k2;
    if (parent) {
      node.x = parent.x + k2 * node.x;
      node.y = parent.y + k2 * node.y;
    }
  };
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/round.js
function round_default2(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x05, y05, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (x12 - x05) / parent.value;
  while (++i < n) {
    node = nodes[i], node.y0 = y05, node.y1 = y12;
    node.x0 = x05, node.x1 = x05 += node.value * k2;
  }
}

// plugins/public/node_modules/d3-hierarchy/src/partition.js
function partition_default() {
  var dx = 1, dy = 1, padding = 0, round = false;
  function partition(root) {
    var n = root.height + 1;
    root.x0 = root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round)
      root.eachBefore(round_default2);
    return root;
  }
  function positionNode(dy2, n) {
    return function(node) {
      if (node.children) {
        dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
      }
      var x05 = node.x0, y05 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
      if (x12 < x05)
        x05 = x12 = (x05 + x12) / 2;
      if (y12 < y05)
        y05 = y12 = (y05 + y12) / 2;
      node.x0 = x05;
      node.y0 = y05;
      node.x1 = x12;
      node.y1 = y12;
    };
  }
  partition.round = function(x3) {
    return arguments.length ? (round = !!x3, partition) : round;
  };
  partition.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], partition) : [dx, dy];
  };
  partition.padding = function(x3) {
    return arguments.length ? (padding = +x3, partition) : padding;
  };
  return partition;
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x05, y05, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (y12 - y05) / parent.value;
  while (++i < n) {
    node = nodes[i], node.x0 = x05, node.x1 = x12;
    node.y0 = y05, node.y1 = y05 += node.value * k2;
  }
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x05, y05, x12, y12) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value2 = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n) {
    dx = x12 - x05, dy = y12 - y05;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value2 * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice)
      dice_default(row, x05, y05, x12, value2 ? y05 += dy * sumValue / value2 : y12);
    else
      slice_default(row, x05, y05, value2 ? x05 += dx * sumValue / value2 : x12, y12);
    value2 -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom8(ratio) {
  function squarify(parent, x05, y05, x12, y12) {
    squarifyRatio(ratio, parent, x05, y05, x12, y12);
  }
  squarify.ratio = function(x3) {
    return custom8((x3 = +x3) > 1 ? x3 : 1);
  };
  return squarify;
}(phi);

// plugins/public/node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root) {
    root.x0 = root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round)
      root.eachBefore(round_default2);
    return root;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth], x05 = node.x0 + p, y05 = node.y0 + p, x12 = node.x1 - p, y12 = node.y1 - p;
    if (x12 < x05)
      x05 = x12 = (x05 + x12) / 2;
    if (y12 < y05)
      y05 = y12 = (y05 + y12) / 2;
    node.x0 = x05;
    node.y0 = y05;
    node.x1 = x12;
    node.y1 = y12;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x05 += paddingLeft(node) - p;
      y05 += paddingTop(node) - p;
      x12 -= paddingRight(node) - p;
      y12 -= paddingBottom(node) - p;
      if (x12 < x05)
        x05 = x12 = (x05 + x12) / 2;
      if (y12 < y05)
        y05 = y12 = (y05 + y12) / 2;
      tile(node, x05, y05, x12, y12);
    }
  }
  treemap.round = function(x3) {
    return arguments.length ? (round = !!x3, treemap) : round;
  };
  treemap.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x3) {
    return arguments.length ? (tile = required(x3), treemap) : tile;
  };
  treemap.padding = function(x3) {
    return arguments.length ? treemap.paddingInner(x3).paddingOuter(x3) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x3) {
    return arguments.length ? (paddingInner = typeof x3 === "function" ? x3 : constant_default7(+x3), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x3) {
    return arguments.length ? treemap.paddingTop(x3).paddingRight(x3).paddingBottom(x3).paddingLeft(x3) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x3) {
    return arguments.length ? (paddingTop = typeof x3 === "function" ? x3 : constant_default7(+x3), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x3) {
    return arguments.length ? (paddingRight = typeof x3 === "function" ? x3 : constant_default7(+x3), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x3) {
    return arguments.length ? (paddingBottom = typeof x3 === "function" ? x3 : constant_default7(+x3), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x3) {
    return arguments.length ? (paddingLeft = typeof x3 === "function" ? x3 : constant_default7(+x3), treemap) : paddingLeft;
  };
  return treemap;
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x05, y05, x12, y12) {
  var nodes = parent.children, i, n = nodes.length, sum2, sums = new Array(n + 1);
  for (sums[0] = sum2 = i = 0; i < n; ++i) {
    sums[i + 1] = sum2 += nodes[i].value;
  }
  partition(0, n, parent.value, x05, y05, x12, y12);
  function partition(i2, j, value2, x06, y06, x13, y13) {
    if (i2 >= j - 1) {
      var node = nodes[i2];
      node.x0 = x06, node.y0 = y06;
      node.x1 = x13, node.y1 = y13;
      return;
    }
    var valueOffset = sums[i2], valueTarget = value2 / 2 + valueOffset, k2 = i2 + 1, hi = j - 1;
    while (k2 < hi) {
      var mid = k2 + hi >>> 1;
      if (sums[mid] < valueTarget)
        k2 = mid + 1;
      else
        hi = mid;
    }
    if (valueTarget - sums[k2 - 1] < sums[k2] - valueTarget && i2 + 1 < k2)
      --k2;
    var valueLeft = sums[k2] - valueOffset, valueRight = value2 - valueLeft;
    if (x13 - x06 > y13 - y06) {
      var xk = (x06 * valueRight + x13 * valueLeft) / value2;
      partition(i2, k2, valueLeft, x06, y06, xk, y13);
      partition(k2, j, valueRight, xk, y06, x13, y13);
    } else {
      var yk = (y06 * valueRight + y13 * valueLeft) / value2;
      partition(i2, k2, valueLeft, x06, y06, x13, yk);
      partition(k2, j, valueRight, x06, yk, x13, y13);
    }
  }
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/sliceDice.js
function sliceDice_default(parent, x05, y05, x12, y12) {
  (parent.depth & 1 ? slice_default : dice_default)(parent, x05, y05, x12, y12);
}

// plugins/public/node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom9(ratio) {
  function resquarify(parent, x05, y05, x12, y12) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i, j = -1, n, m = rows.length, value2 = parent.value;
      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i)
          row.value += nodes[i].value;
        if (row.dice)
          dice_default(row, x05, y05, x12, y05 += (y12 - y05) * row.value / value2);
        else
          slice_default(row, x05, y05, x05 += (x12 - x05) * row.value / value2, y12);
        value2 -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x05, y05, x12, y12);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x3) {
    return custom9((x3 = +x3) > 1 ? x3 : 1);
  };
  return resquarify;
}(phi);

// plugins/public/node_modules/react-vis/es/sunburst/index.js
var _extends60 = Object.assign || function(target) {
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
var predefinedClassName20 = "rv-sunburst";
var LISTENERS_TO_OVERWRITE = ["onValueMouseOver", "onValueMouseOut", "onValueClick", "onValueRightClick", "onSeriesMouseOver", "onSeriesMouseOut", "onSeriesClick", "onSeriesRightClick"];
function getNodesToRender(_ref) {
  var data = _ref.data, height = _ref.height, hideRootNode = _ref.hideRootNode, width = _ref.width, getSize3 = _ref.getSize;
  var partitionFunction = partition_default();
  var structuredInput = hierarchy(data).sum(getSize3);
  var radius = Math.min(width, height) / 2 - 10;
  var x3 = linear2().range([0, 2 * Math.PI]);
  var y3 = sqrt().range([0, radius]);
  return partitionFunction(structuredInput).descendants().reduce(function(res, cell, index) {
    if (hideRootNode && index === 0) {
      return res;
    }
    return res.concat([_extends60({
      angle0: Math.max(0, Math.min(2 * Math.PI, x3(cell.x0))),
      angle: Math.max(0, Math.min(2 * Math.PI, x3(cell.x1))),
      radius0: Math.max(0, y3(cell.y0)),
      radius: Math.max(0, y3(cell.y1)),
      depth: cell.depth,
      parent: cell.parent
    }, cell.data)]);
  }, []);
}
function buildLabels(mappedData, accessors) {
  var getAngle3 = accessors.getAngle, getAngle03 = accessors.getAngle0, getLabel5 = accessors.getLabel, getRadius02 = accessors.getRadius0;
  return mappedData.filter(getLabel5).map(function(row) {
    var truedAngle = -1 * getAngle3(row) + Math.PI / 2;
    var truedAngle0 = -1 * getAngle03(row) + Math.PI / 2;
    var angle = (truedAngle0 + truedAngle) / 2;
    var rotateLabels = !row.dontRotateLabel;
    var rotAngle = -angle / (2 * Math.PI) * 360;
    return _extends60({}, row, {
      children: null,
      angle: null,
      radius: null,
      x: getRadius02(row) * Math.cos(angle),
      y: getRadius02(row) * Math.sin(angle),
      style: _extends60({
        textAnchor: rotAngle > 90 ? "end" : "start"
      }, row.labelStyle),
      rotation: rotateLabels ? rotAngle > 90 ? rotAngle + 180 : rotAngle === 90 ? 90 : rotAngle : null
    });
  });
}
var NOOP5 = function NOOP6() {
};
function Sunburst(props) {
  var getAngle3 = props.getAngle, getAngle03 = props.getAngle0, animation = props.animation, className = props.className, children = props.children, data = props.data, height = props.height, hideRootNode = props.hideRootNode, getLabel5 = props.getLabel, width = props.width, getSize3 = props.getSize, colorType = props.colorType;
  var mappedData = getNodesToRender({
    data,
    height,
    hideRootNode,
    width,
    getSize: getSize3
  });
  var radialDomain = getRadialDomain(mappedData);
  var margin = getRadialLayoutMargin(width, height, radialDomain);
  var labelData = buildLabels(mappedData, {
    getAngle: getAngle3,
    getAngle0: getAngle03,
    getLabel: getLabel5,
    getRadius0: function getRadius02(d) {
      return d.radius0;
    }
  });
  var hofBuilder = function hofBuilder2(f) {
    return function(e, i) {
      return f ? f(mappedData[e.index], i) : NOOP5;
    };
  };
  return import_react57.default.createElement(
    xy_plot_default,
    {
      height,
      hasTreeStructure: true,
      width,
      className: predefinedClassName20 + " " + className,
      margin,
      xDomain: [-radialDomain, radialDomain],
      yDomain: [-radialDomain, radialDomain]
    },
    import_react57.default.createElement(arc_series_default, _extends60({
      colorType
    }, props, {
      animation,
      radiusDomain: [0, radialDomain],
      data: animation ? mappedData.map(function(row, index) {
        return _extends60({}, row, {
          parent: null,
          children: null,
          index
        });
      }) : mappedData,
      _data: animation ? mappedData : null,
      arcClassName: predefinedClassName20 + "__series--radial__arc"
    }, LISTENERS_TO_OVERWRITE.reduce(function(acc, propName) {
      var prop = props[propName];
      acc[propName] = animation ? hofBuilder(prop) : prop;
      return acc;
    }, {}))),
    labelData.length > 0 && import_react57.default.createElement(label_series_default, { data: labelData, getLabel: getLabel5 }),
    children
  );
}
Sunburst.displayName = "Sunburst";
Sunburst.propTypes = {
  animation: AnimationPropType,
  getAngle: import_prop_types49.default.func,
  getAngle0: import_prop_types49.default.func,
  className: import_prop_types49.default.string,
  colorType: import_prop_types49.default.string,
  data: import_prop_types49.default.object.isRequired,
  height: import_prop_types49.default.number.isRequired,
  hideRootNode: import_prop_types49.default.bool,
  getLabel: import_prop_types49.default.func,
  onValueClick: import_prop_types49.default.func,
  onValueMouseOver: import_prop_types49.default.func,
  onValueMouseOut: import_prop_types49.default.func,
  getSize: import_prop_types49.default.func,
  width: import_prop_types49.default.number.isRequired,
  padAngle: import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.number])
};
Sunburst.defaultProps = {
  getAngle: function getAngle2(d) {
    return d.angle;
  },
  getAngle0: function getAngle02(d) {
    return d.angle0;
  },
  className: "",
  colorType: "literal",
  getColor: function getColor(d) {
    return d.color;
  },
  hideRootNode: false,
  getLabel: function getLabel3(d) {
    return d.label;
  },
  getSize: function getSize(d) {
    return d.size;
  },
  padAngle: 0
};

// plugins/public/node_modules/react-vis/es/treemap/index.js
var import_react61 = __toESM(require("react"));
var import_prop_types51 = __toESM(require_prop_types());

// plugins/public/node_modules/react-vis/es/treemap/treemap-dom.js
var import_react59 = __toESM(require("react"));

// plugins/public/node_modules/react-vis/es/treemap/treemap-leaf.js
var import_react58 = __toESM(require("react"));
var import_prop_types50 = __toESM(require_prop_types());
var _extends61 = Object.assign || function(target) {
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
var ANIMATED_PROPS = ["colorRange", "colorDomain", "color", "opacityRange", "opacityDomain", "opacity", "x0", "x1", "y0", "y1", "r"];
function TreemapLeaf(props) {
  var animation = props.animation, getLabel5 = props.getLabel, mode = props.mode, node = props.node, onLeafClick = props.onLeafClick, onLeafMouseOver = props.onLeafMouseOver, onLeafMouseOut = props.onLeafMouseOut, r = props.r, scales = props.scales, x05 = props.x0, x12 = props.x1, y05 = props.y0, y12 = props.y1, style = props.style;
  if (animation) {
    return import_react58.default.createElement(
      animation_default,
      _extends61({}, props, { animatedProps: ANIMATED_PROPS }),
      import_react58.default.createElement(TreemapLeaf, _extends61({}, props, { animation: null }))
    );
  }
  var useCirclePacking = mode === "circlePack";
  var background = scales.color(node);
  var opacity = scales.opacity(node);
  var color2 = getFontColorFromBackground(background);
  var data = node.data;
  var title = getLabel5(data);
  var leafStyle = _extends61({
    top: useCirclePacking ? y05 - r : y05,
    left: useCirclePacking ? x05 - r : x05,
    width: useCirclePacking ? r * 2 : x12 - x05,
    height: useCirclePacking ? r * 2 : y12 - y05,
    background,
    opacity,
    color: color2
  }, style, node.data.style);
  return import_react58.default.createElement(
    "div",
    {
      className: "rv-treemap__leaf " + (useCirclePacking ? "rv-treemap__leaf--circle" : ""),
      onMouseEnter: function onMouseEnter(event) {
        return onLeafMouseOver(node, event);
      },
      onMouseLeave: function onMouseLeave(event) {
        return onLeafMouseOut(node, event);
      },
      onClick: function onClick(event) {
        return onLeafClick(node, event);
      },
      style: leafStyle
    },
    import_react58.default.createElement(
      "div",
      { className: "rv-treemap__leaf__content" },
      title
    )
  );
}
TreemapLeaf.propTypes = {
  animation: AnimationPropType,
  height: import_prop_types50.default.number.isRequired,
  mode: import_prop_types50.default.string,
  node: import_prop_types50.default.object.isRequired,
  onLeafClick: import_prop_types50.default.func,
  onLeafMouseOver: import_prop_types50.default.func,
  onLeafMouseOut: import_prop_types50.default.func,
  scales: import_prop_types50.default.object.isRequired,
  width: import_prop_types50.default.number.isRequired,
  r: import_prop_types50.default.number.isRequired,
  x0: import_prop_types50.default.number.isRequired,
  x1: import_prop_types50.default.number.isRequired,
  y0: import_prop_types50.default.number.isRequired,
  y1: import_prop_types50.default.number.isRequired
};
var treemap_leaf_default = TreemapLeaf;

// plugins/public/node_modules/react-vis/es/treemap/treemap-dom.js
var _extends62 = Object.assign || function(target) {
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
function TreemapDOM(props) {
  var animation = props.animation, className = props.className, height = props.height, hideRootNode = props.hideRootNode, getLabel5 = props.getLabel, mode = props.mode, nodes = props.nodes, width = props.width, scales = props.scales, style = props.style;
  var useCirclePacking = mode === "circlePack";
  return import_react59.default.createElement(
    "div",
    {
      className: "rv-treemap " + (useCirclePacking ? "rv-treemap-circle-packed" : "") + " " + className,
      style: { height, width }
    },
    nodes.map(function(node, index) {
      if (hideRootNode && !index) {
        return null;
      }
      var nodeProps = _extends62({
        animation,
        node,
        getLabel: getLabel5
      }, props, {
        x0: useCirclePacking ? node.x : node.x0,
        x1: useCirclePacking ? node.x : node.x1,
        y0: useCirclePacking ? node.y : node.y0,
        y1: useCirclePacking ? node.y : node.y1,
        r: useCirclePacking ? node.r : 1,
        scales,
        style
      });
      return import_react59.default.createElement(treemap_leaf_default, _extends62({}, nodeProps, { key: "leaf-" + index }));
    })
  );
}
TreemapDOM.displayName = "TreemapDOM";
var treemap_dom_default = TreemapDOM;

// plugins/public/node_modules/react-vis/es/treemap/treemap-svg.js
var import_react60 = __toESM(require("react"));
var _extends63 = Object.assign || function(target) {
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
var _createClass42 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck42(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn42(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits42(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var MARGIN_ADJUST = 1.2;
var TreemapSVG = function(_React$Component) {
  _inherits42(TreemapSVG2, _React$Component);
  function TreemapSVG2() {
    _classCallCheck42(this, TreemapSVG2);
    return _possibleConstructorReturn42(this, (TreemapSVG2.__proto__ || Object.getPrototypeOf(TreemapSVG2)).apply(this, arguments));
  }
  _createClass42(TreemapSVG2, [{
    key: "getCircularNodes",
    value: function getCircularNodes() {
      var _props = this.props, animation = _props.animation, hideRootNode = _props.hideRootNode, nodes = _props.nodes, onLeafMouseOver = _props.onLeafMouseOver, onLeafMouseOut = _props.onLeafMouseOut, onLeafClick = _props.onLeafClick, scales = _props.scales, style = _props.style;
      var _nodes$reduce = nodes.reduce(function(acc, node, index) {
        if (!index && hideRootNode) {
          return acc;
        }
        var x3 = node.x, y3 = node.y, r = node.r;
        return {
          maxY: Math.max(y3 + r, acc.maxY),
          minY: Math.min(y3 - r, acc.minY),
          maxX: Math.max(x3 + MARGIN_ADJUST * r, acc.maxX),
          minX: Math.min(x3 - MARGIN_ADJUST * r, acc.minX),
          rows: acc.rows.concat([{
            x: x3,
            y: y3,
            size: r,
            color: scales.color(node)
          }])
        };
      }, {
        rows: [],
        maxY: -Infinity,
        minY: Infinity,
        maxX: -Infinity,
        minX: Infinity
      }), rows = _nodes$reduce.rows, minY = _nodes$reduce.minY, maxY = _nodes$reduce.maxY, minX = _nodes$reduce.minX, maxX = _nodes$reduce.maxX;
      return {
        updatedNodes: import_react60.default.createElement(mark_series_default, {
          animation,
          className: "rv-treemap__leaf rv-treemap__leaf--circle",
          onSeriesMouseEnter: onLeafMouseOver,
          onSeriesMouseLeave: onLeafMouseOut,
          onSeriesClick: onLeafClick,
          data: rows,
          colorType: "literal",
          getColor: function getColor3(d) {
            return d.color;
          },
          sizeType: "literal",
          getSize: function getSize3(d) {
            return d.size;
          },
          style
        }),
        minY,
        maxY,
        minX,
        maxX
      };
    }
  }, {
    key: "getNonCircularNodes",
    value: function getNonCircularNodes() {
      var _props2 = this.props, animation = _props2.animation, hideRootNode = _props2.hideRootNode, nodes = _props2.nodes, onLeafMouseOver = _props2.onLeafMouseOver, onLeafMouseOut = _props2.onLeafMouseOut, onLeafClick = _props2.onLeafClick, scales = _props2.scales, style = _props2.style;
      var color2 = scales.color;
      return nodes.reduce(function(acc, node, index) {
        if (!index && hideRootNode) {
          return acc;
        }
        var x05 = node.x0, x12 = node.x1, y12 = node.y1, y05 = node.y0;
        var x3 = x05;
        var y3 = y05;
        var nodeHeight = y12 - y05;
        var nodeWidth = x12 - x05;
        acc.maxY = Math.max(y3 + nodeHeight, acc.maxY);
        acc.minY = Math.min(y3, acc.minY);
        acc.maxX = Math.max(x3 + nodeWidth, acc.maxX);
        acc.minX = Math.min(x3, acc.minX);
        var data = [{ x: x3, y: y3 }, { x: x3, y: y3 + nodeHeight }, { x: x3 + nodeWidth, y: y3 + nodeHeight }, { x: x3 + nodeWidth, y: y3 }];
        acc.updatedNodes = acc.updatedNodes.concat([import_react60.default.createElement(polygon_series_default, {
          animation,
          className: "rv-treemap__leaf",
          key: index,
          color: color2(node),
          type: "literal",
          onSeriesMouseEnter: onLeafMouseOver,
          onSeriesMouseLeave: onLeafMouseOut,
          onSeriesClick: onLeafClick,
          data,
          style: _extends63({}, style, node.style)
        })]);
        return acc;
      }, {
        updatedNodes: [],
        maxY: -Infinity,
        minY: Infinity,
        maxX: -Infinity,
        minX: Infinity
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props, className = _props3.className, height = _props3.height, mode = _props3.mode, nodes = _props3.nodes, width = _props3.width;
      var useCirclePacking = mode === "circlePack";
      var _ref = useCirclePacking ? this.getCircularNodes() : this.getNonCircularNodes(), minY = _ref.minY, maxY = _ref.maxY, minX = _ref.minX, maxX = _ref.maxX, updatedNodes = _ref.updatedNodes;
      var labels = nodes.reduce(function(acc, node) {
        if (!node.data.title) {
          return acc;
        }
        return acc.concat(_extends63({}, node.data, {
          x: node.x0 || node.x,
          y: node.y0 || node.y,
          label: "" + node.data.title
        }));
      }, []);
      return import_react60.default.createElement(
        xy_plot_default,
        _extends63({
          className: "rv-treemap " + (useCirclePacking ? "rv-treemap-circle-packed" : "") + " " + className,
          width,
          height,
          yDomain: [maxY, minY],
          xDomain: [minX, maxX],
          colorType: "literal",
          hasTreeStructure: true
        }, this.props),
        updatedNodes,
        import_react60.default.createElement(label_series_default, { data: labels })
      );
    }
  }]);
  return TreemapSVG2;
}(import_react60.default.Component);
TreemapSVG.displayName = "TreemapSVG";
var treemap_svg_default = TreemapSVG;

// plugins/public/node_modules/react-vis/es/treemap/index.js
var _createClass43 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends64 = Object.assign || function(target) {
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
function _classCallCheck43(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn43(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits43(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var TREEMAP_TILE_MODES = {
  squarify: squarify_default,
  resquarify: resquarify_default,
  slice: slice_default,
  dice: dice_default,
  slicedice: sliceDice_default,
  binary: binary_default
};
var TREEMAP_LAYOUT_MODES = ["circlePack", "partition", "partition-pivot"];
var NOOP7 = function NOOP8(d) {
  return d;
};
var ATTRIBUTES3 = ["opacity", "color"];
var DEFAULT_MARGINS3 = {
  left: 40,
  right: 10,
  top: 10,
  bottom: 40
};
function _getScaleFns(props) {
  var data = props.data;
  var allData = data.children || [];
  var compatibleProps = _extends64({}, props, getMissingScaleProps(props, allData, ATTRIBUTES3), {
    _allData: allData
  });
  return {
    opacity: getAttributeFunctor(compatibleProps, "opacity"),
    color: getAttributeFunctor(compatibleProps, "color")
  };
}
var Treemap = function(_React$Component) {
  _inherits43(Treemap2, _React$Component);
  function Treemap2(props) {
    _classCallCheck43(this, Treemap2);
    var _this = _possibleConstructorReturn43(this, (Treemap2.__proto__ || Object.getPrototypeOf(Treemap2)).call(this, props));
    _this.state = _extends64({
      scales: _getScaleFns(props)
    }, getInnerDimensions(props, props.margin));
    return _this;
  }
  _createClass43(Treemap2, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState(_extends64({
        scales: _getScaleFns(props)
      }, getInnerDimensions(props, props.margin)));
    }
  }, {
    key: "_getNodesToRender",
    value: function _getNodesToRender() {
      var _state = this.state, innerWidth = _state.innerWidth, innerHeight = _state.innerHeight;
      var _props = this.props, data = _props.data, mode = _props.mode, padding = _props.padding, sortFunction2 = _props.sortFunction, getSize3 = _props.getSize;
      if (!data) {
        return [];
      }
      if (mode === "partition" || mode === "partition-pivot") {
        var partitionFunction = partition_default().size(mode === "partition-pivot" ? [innerHeight, innerWidth] : [innerWidth, innerHeight]).padding(padding);
        var _structuredInput = hierarchy(data).sum(getSize3).sort(function(a2, b) {
          return sortFunction2(a2, b, getSize3);
        });
        var mappedNodes = partitionFunction(_structuredInput).descendants();
        if (mode === "partition-pivot") {
          return mappedNodes.map(function(node) {
            return _extends64({}, node, {
              x0: node.y0,
              x1: node.y1,
              y0: node.x0,
              y1: node.x1
            });
          });
        }
        return mappedNodes;
      }
      if (mode === "circlePack") {
        var packingFunction = pack_default().size([innerWidth, innerHeight]).padding(padding);
        var _structuredInput2 = hierarchy(data).sum(getSize3).sort(function(a2, b) {
          return sortFunction2(a2, b, getSize3);
        });
        return packingFunction(_structuredInput2).descendants();
      }
      var tileFn = TREEMAP_TILE_MODES[mode];
      var treemapingFunction = treemap_default(tileFn).tile(tileFn).size([innerWidth, innerHeight]).padding(padding);
      var structuredInput = hierarchy(data).sum(getSize3).sort(function(a2, b) {
        return sortFunction2(a2, b, getSize3);
      });
      return treemapingFunction(structuredInput).descendants();
    }
  }, {
    key: "render",
    value: function render() {
      var renderMode = this.props.renderMode;
      var scales = this.state.scales;
      var nodes = this._getNodesToRender();
      var TreemapElement = renderMode === "SVG" ? treemap_svg_default : treemap_dom_default;
      return import_react61.default.createElement(TreemapElement, _extends64({}, this.props, { nodes, scales }));
    }
  }]);
  return Treemap2;
}(import_react61.default.Component);
Treemap.displayName = "Treemap";
Treemap.propTypes = {
  animation: AnimationPropType,
  className: import_prop_types51.default.string,
  data: import_prop_types51.default.object.isRequired,
  height: import_prop_types51.default.number.isRequired,
  hideRootNode: import_prop_types51.default.bool,
  margin: MarginPropType,
  mode: import_prop_types51.default.oneOf(Object.keys(TREEMAP_TILE_MODES).concat(TREEMAP_LAYOUT_MODES)),
  onLeafClick: import_prop_types51.default.func,
  onLeafMouseOver: import_prop_types51.default.func,
  onLeafMouseOut: import_prop_types51.default.func,
  useCirclePacking: import_prop_types51.default.bool,
  padding: import_prop_types51.default.number.isRequired,
  sortFunction: import_prop_types51.default.func,
  width: import_prop_types51.default.number.isRequired,
  getSize: import_prop_types51.default.func,
  getColor: import_prop_types51.default.func
};
Treemap.defaultProps = {
  className: "",
  colorRange: CONTINUOUS_COLOR_RANGE,
  _colorValue: DEFAULT_COLOR,
  data: {
    children: []
  },
  hideRootNode: false,
  margin: DEFAULT_MARGINS3,
  mode: "squarify",
  onLeafClick: NOOP7,
  onLeafMouseOver: NOOP7,
  onLeafMouseOut: NOOP7,
  opacityType: OPACITY_TYPE,
  _opacityValue: DEFAULT_OPACITY,
  padding: 1,
  sortFunction: function sortFunction(a2, b, accessor) {
    if (!accessor) {
      return 0;
    }
    return accessor(a2) - accessor(b);
  },
  getSize: function getSize2(d) {
    return d.size;
  },
  getColor: function getColor2(d) {
    return d.color;
  },
  getLabel: function getLabel4(d) {
    return d.title;
  }
};
var treemap_default2 = Treemap;

// plugins/public/node_modules/react-vis/es/make-vis-flexible.js
var import_react62 = __toESM(require("react"));
var import_window = __toESM(require_window());
var _extends65 = Object.assign || function(target) {
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
var _createClass44 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _objectWithoutProperties2(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck44(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn44(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits44(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var CONTAINER_REF = "container";
var resizeSubscribers = [];
var DEBOUNCE_DURATION = 100;
var timeoutId = null;
function debounceEmitResize() {
  import_window.default.clearTimeout(timeoutId);
  timeoutId = import_window.default.setTimeout(emitResize, DEBOUNCE_DURATION);
}
function emitResize() {
  resizeSubscribers.forEach(function(cb) {
    return cb();
  });
}
function subscribeToDebouncedResize(cb) {
  resizeSubscribers.push(cb);
  if (resizeSubscribers.length === 1) {
    import_window.default.addEventListener("resize", debounceEmitResize);
  }
  return function unsubscribe() {
    removeSubscriber(cb);
    if (resizeSubscribers.length === 0) {
      import_window.default.clearTimeout(timeoutId);
      import_window.default.removeEventListener("resize", debounceEmitResize);
    }
  };
}
function removeSubscriber(cb) {
  var index = resizeSubscribers.indexOf(cb);
  if (index > -1) {
    resizeSubscribers.splice(index, 1);
  }
}
function getDisplayName(Component6) {
  return Component6.displayName || Component6.name || "Component";
}
function makeFlexible(Component6, isWidthFlexible, isHeightFlexible) {
  var ResultClass = function(_React$Component) {
    _inherits44(ResultClass2, _React$Component);
    _createClass44(ResultClass2, null, [{
      key: "propTypes",
      get: function get() {
        var _Component$propTypes = Component6.propTypes, height = _Component$propTypes.height, width = _Component$propTypes.width, otherPropTypes = _objectWithoutProperties2(_Component$propTypes, ["height", "width"]);
        return otherPropTypes;
      }
    }]);
    function ResultClass2(props) {
      _classCallCheck44(this, ResultClass2);
      var _this = _possibleConstructorReturn44(this, (ResultClass2.__proto__ || Object.getPrototypeOf(ResultClass2)).call(this, props));
      _this._onResize = function() {
        var containerElement = getDOMNode(_this[CONTAINER_REF]);
        var offsetHeight = containerElement.offsetHeight, offsetWidth = containerElement.offsetWidth;
        var newHeight = _this.state.height === offsetHeight ? {} : { height: offsetHeight };
        var newWidth = _this.state.width === offsetWidth ? {} : { width: offsetWidth };
        _this.setState(_extends65({}, newHeight, newWidth));
      };
      _this.state = {
        height: 0,
        width: 0
      };
      return _this;
    }
    _createClass44(ResultClass2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._onResize();
        this.cancelSubscription = subscribeToDebouncedResize(this._onResize);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        this._onResize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelSubscription();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _state = this.state, height = _state.height, width = _state.width;
        var props = _extends65({}, this.props, {
          animation: height === 0 && width === 0 ? null : this.props.animation
        });
        var updatedDimensions = _extends65({}, isHeightFlexible ? { height } : {}, isWidthFlexible ? { width } : {});
        return import_react62.default.createElement(
          "div",
          {
            ref: function ref(_ref) {
              return _this2[CONTAINER_REF] = _ref;
            },
            style: { width: "100%", height: "100%" }
          },
          import_react62.default.createElement(Component6, _extends65({}, updatedDimensions, props))
        );
      }
    }]);
    return ResultClass2;
  }(import_react62.default.Component);
  ResultClass.displayName = "Flexible" + getDisplayName(Component6);
  return ResultClass;
}
function makeHeightFlexible(component) {
  return makeFlexible(component, false, true);
}
function makeVisFlexible(component) {
  return makeFlexible(component, true, true);
}
function makeWidthFlexible(component) {
  return makeFlexible(component, true, false);
}
var FlexibleWidthXYPlot = makeWidthFlexible(xy_plot_default);
var FlexibleHeightXYPlot = makeHeightFlexible(xy_plot_default);
var FlexibleXYPlot = makeVisFlexible(xy_plot_default);

// plugins/public/fresco/ImagesMemoryOverview.tsx
var DISK_IMAGES = "Disk images";
var CACHES_TO_DISPLAY = /* @__PURE__ */ new Set([
  "On screen bitmaps",
  "Bitmap memory cache",
  DISK_IMAGES
]);
var STYLE = {
  stroke: "white",
  strokeWidth: "1px",
  strokeOpacity: 0.25
};
var ImagesMemoryOverview = class extends import_react63.PureComponent {
  constructor() {
    super(...arguments);
    this.nodeLabel = (size, cache) => {
      if (cache == DISK_IMAGES) {
        return "";
      }
      const sizeKb = toKB(size);
      if (sizeKb < 100) {
        return "";
      } else if (sizeKb < 1e3) {
        return formatKB(size);
      } else {
        return formatMB(size);
      }
    };
    this.filterCachesToDisplay = (images) => {
      return images.filter(
        (cacheInfo) => CACHES_TO_DISPLAY.has(cacheInfo.cacheType)
      );
    };
    this.freeSpaceNodes = () => {
      const imagesList = [];
      this.filterCachesToDisplay(this.props.images).forEach((cache) => {
        if (cache.maxSizeBytes) {
          imagesList.push({
            cacheType: `Free space - ${cache.cacheType}`,
            sizeBytes: cache.maxSizeBytes - cache.sizeBytes,
            imageIds: []
          });
        }
      });
      return imagesList;
    };
    this.constructTreemapData = () => {
      return {
        title: "",
        size: 0,
        style: STYLE,
        children: this.filterCachesToDisplay(this.props.images).concat(this.freeSpaceNodes()).map((cacheInfo) => {
          return {
            size: toKB(cacheInfo.sizeBytes),
            style: STYLE,
            title: `${cacheInfo.cacheType} (${formatMB(cacheInfo.sizeBytes)})`,
            value: toKB(cacheInfo.sizeBytes),
            children: cacheInfo.imageIds.filter((imageId) => this.props.imagesMap[imageId] != null).map((imageId) => {
              const image = this.props.imagesMap[imageId];
              return {
                size: toKB(image.sizeBytes),
                style: STYLE,
                title: this.nodeLabel(image.sizeBytes, cacheInfo.cacheType),
                value: toKB(image.sizeBytes),
                children: []
              };
            })
          };
        })
      };
    };
  }
  render() {
    const hasImages = this.props.images.reduce(
      (c2, cacheInfo) => c2 + cacheInfo.imageIds.length,
      0
    ) > 0;
    return /* @__PURE__ */ import_react63.default.createElement(import_flipper_plugin3.Layout.ScrollContainer, null, !hasImages ? /* @__PURE__ */ import_react63.default.createElement(import_flipper_plugin3.Layout.Container, { pad: true }, /* @__PURE__ */ import_react63.default.createElement(import_antd3.Empty, null)) : /* @__PURE__ */ import_react63.default.createElement(
      treemap_default2,
      {
        ...{
          animation: true,
          colorType: "literal",
          colorRange: ["#88572C"],
          data: this.constructTreemapData(),
          mode: "resquarify",
          renderMode: "SVG",
          padding: 30,
          height: 900,
          width: 900,
          margin: 15,
          hideRootNode: true,
          getSize: (d) => d.value,
          getColor: (d) => d.hex,
          style: STYLE
        }
      }
    ));
  }
};

// plugins/public/fresco/index.tsx
var import_flipper = require("flipper");
var import_antd4 = require("antd");

// plugins/public/fresco/ImagesSidebar.tsx
var import_react64 = __toESM(require("react"));
var import_flipper_plugin4 = require("flipper-plugin");
var DataDescriptionKey = import_flipper_plugin4.styled.span({
  color: import_flipper_plugin4.theme.textColorPrimary
});
var WordBreakFlexColumn = (0, import_flipper_plugin4.styled)(import_flipper_plugin4.Layout.Container)({
  wordBreak: "break-all"
});
var ImagesSidebar = class extends import_react64.Component {
  render() {
    return /* @__PURE__ */ import_react64.default.createElement("div", null, this.renderUri(), this.props.events.map((e) => /* @__PURE__ */ import_react64.default.createElement(EventDetails, { key: e.eventId, event: e })));
  }
  renderUri() {
    if (!this.props.image) {
      return null;
    }
    if (!this.props.image.uri) {
      return null;
    }
    return /* @__PURE__ */ import_react64.default.createElement(import_flipper_plugin4.Panel, { title: "Sources", pad: true }, /* @__PURE__ */ import_react64.default.createElement(WordBreakFlexColumn, null, /* @__PURE__ */ import_react64.default.createElement("span", null, "URI", /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(
      import_flipper_plugin4.DataDescription,
      {
        type: "string",
        value: this.props.image.uri,
        setValue: null
      }
    ))));
  }
};
var EventDetails = class extends import_react64.Component {
  render() {
    const { event } = this.props;
    return /* @__PURE__ */ import_react64.default.createElement(import_flipper_plugin4.Panel, { title: requestHeader(event), pad: true }, /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Attribution"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(import_flipper_plugin4.DataInspector, { data: event.attribution })), /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Time start"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(
      import_flipper_plugin4.DataDescription,
      {
        type: "number",
        value: event.startTime,
        setValue: null
      }
    )), /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Time end"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(
      import_flipper_plugin4.DataDescription,
      {
        type: "number",
        value: event.endTime,
        setValue: null
      }
    )), /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Source"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(import_flipper_plugin4.DataDescription, { type: "string", value: event.source, setValue: null })), /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Requested on cold start"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(
      import_flipper_plugin4.DataDescription,
      {
        type: "boolean",
        value: event.coldStart,
        setValue: null
      }
    )), this.renderViewportData());
  }
  renderViewportData() {
    const viewport = this.props.event.viewport;
    if (!viewport) {
      return null;
    }
    return /* @__PURE__ */ import_react64.default.createElement("p", null, /* @__PURE__ */ import_react64.default.createElement(DataDescriptionKey, null, "Viewport"), /* @__PURE__ */ import_react64.default.createElement("span", { key: "sep" }, ": "), /* @__PURE__ */ import_react64.default.createElement(
      import_flipper_plugin4.DataDescription,
      {
        type: "string",
        value: `${viewport.width}x${viewport.height}`,
        setValue: null
      }
    ));
  }
};
function requestHeader(event) {
  const date2 = new Date(event.startTime);
  const dateString = `${date2.toTimeString().split(" ")[0]}.${`000${date2.getMilliseconds()}`.substr(
    -3
  )}`;
  return `${event.viewport ? "Request" : "Prefetch"} at ${dateString}`;
}

// plugins/public/fresco/ImagePool.tsx
var maxInflightRequests = 10;
var ImagePool = class {
  constructor(fetchImage, onPoolUpdated) {
    this.cache = {};
    this.requested = {};
    this.queued = [];
    this.inFlightRequests = 0;
    this.updateNotificationScheduled = false;
    this._notify = () => {
      this.updateNotificationScheduled = false;
      this.onPoolUpdated(this.getImages());
    };
    this.fetchImage = fetchImage;
    this.onPoolUpdated = onPoolUpdated;
  }
  getImages() {
    return { ...this.cache };
  }
  fetchImages(ids) {
    for (const id of ids) {
      if (!this.cache[id] && !this.requested[id]) {
        this.requested[id] = true;
        if (this.inFlightRequests < maxInflightRequests) {
          this.inFlightRequests++;
          this.fetchImage(id);
        } else {
          this.queued.unshift(id);
        }
      }
    }
  }
  clear() {
    this.cache = {};
    this.requested = {};
  }
  _fetchCompleted(image) {
    this.cache[image.imageId] = image;
    delete this.requested[image.imageId];
    if (this.queued.length > 0) {
      const popped = this.queued.pop();
      this.fetchImage(popped);
    } else {
      this.inFlightRequests--;
    }
    if (!this.updateNotificationScheduled) {
      this.updateNotificationScheduled = true;
      window.setTimeout(this._notify, 1e3);
    }
  }
};

// plugins/public/fresco/index.tsx
var surfaceDefaultText = "SELECT ALL SURFACES";
var debugLog = (...args) => {
  if (!(0, import_flipper.isProduction)()) {
    console.log(...args);
  }
};
function plugin(client) {
  const selectedSurfaces = (0, import_flipper_plugin5.createState)(
    /* @__PURE__ */ new Set([surfaceDefaultText])
  );
  const currentSelectedImage = (0, import_flipper_plugin5.createState)(null);
  const isDebugOverlayEnabled = (0, import_flipper_plugin5.createState)(false);
  const isAutoRefreshEnabled = (0, import_flipper_plugin5.createState)(false);
  const currentImages = (0, import_flipper_plugin5.createState)([]);
  const coldStartFilter = (0, import_flipper_plugin5.createState)(false);
  const imagePool = (0, import_flipper_plugin5.createState)(null);
  const surfaceList = (0, import_flipper_plugin5.createState)(/* @__PURE__ */ new Set(), {
    persist: "surfaceList"
  });
  const images = (0, import_flipper_plugin5.createState)([], { persist: "images" });
  const events = (0, import_flipper_plugin5.createState)([], { persist: "events" });
  const imagesMap = (0, import_flipper_plugin5.createState)({}, { persist: "imagesMap" });
  const isLeakTrackingEnabled = (0, import_flipper_plugin5.createState)(false, {
    persist: "isLeakTrackingEnabled"
  });
  const showDiskImages = (0, import_flipper_plugin5.createState)(false, {
    persist: "showDiskImages"
  });
  const nextEventId = (0, import_flipper_plugin5.createState)(0, { persist: "nextEventId" });
  client.onConnect(() => {
    init();
  });
  client.onDestroy(() => {
    imagePool?.get()?.clear();
  });
  client.onMessage("closeable_reference_leak_event", (event) => {
    if (isLeakTrackingEnabled) {
      client.showNotification({
        id: event.identityHashCode,
        title: `Leaked CloseableReference: ${event.className}`,
        message: /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.Layout.Container, null, /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, null, "CloseableReference leaked for "), /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, { code: true }, event.className), /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, null, "(identity hashcode: ", event.identityHashCode, ")."), /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, { strong: true }, "Stacktrace:"), /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, { code: true }, event.stacktrace || "<unavailable>")),
        severity: "error",
        category: "closeablereference_leak"
      });
    }
  });
  client.onExport(async () => {
    const [responseImages, responseEvents] = await Promise.all([
      client.send("listImages", { showDiskImages: showDiskImages.get() }),
      client.send("getAllImageEventsInfo", {})
    ]);
    const levels = responseImages.levels;
    const newEvents = responseEvents.events;
    images.set([...images.get(), ...levels]);
    newEvents.forEach((event, index) => {
      if (!event) {
        return;
      }
      const { attribution } = event;
      if (attribution && attribution instanceof Array && attribution.length > 0) {
        const surface = attribution[0] ? attribution[0].trim() : void 0;
        if (surface && surface.length > 0) {
          surfaceList.set(/* @__PURE__ */ new Set([...surfaceList.get(), surface]));
        }
      }
      events.set([{ ...event, eventId: index }, ...events.get()]);
    });
    const idSet = levels.reduce((acc, level) => {
      level.imageIds.forEach((id) => {
        acc.add(id);
      });
      return acc;
    }, /* @__PURE__ */ new Set());
    const imageDataList = [];
    for (const id of idSet) {
      try {
        const imageData = await client.send("getImage", {
          imageId: id
        });
        imageDataList.push(imageData);
      } catch (e) {
        console.warn("[fresco] getImage failed:", e);
      }
    }
    const imagesMapCopy = { ...imagesMap.get() };
    imageDataList.forEach((data) => {
      imagesMapCopy[data.imageId] = data;
    });
    imagesMap.set(imagesMapCopy);
  });
  client.onMessage("debug_overlay_event", (event) => {
    isDebugOverlayEnabled.set(event.enabled);
  });
  client.onMessage("events", (event) => {
    debugLog("Received events", event);
    const { attribution } = event;
    if (attribution instanceof Array && attribution.length > 0) {
      const surface = attribution[0] ? attribution[0].trim() : void 0;
      if (surface && surface.length > 0) {
        surfaceList.update((draft) => draft = /* @__PURE__ */ new Set([...draft, surface]));
      }
    }
    events.update((draft) => {
      draft.unshift({
        eventId: nextEventId.get(),
        ...event
      });
    });
    nextEventId.set(nextEventId.get() + 1);
  });
  function onClear(type) {
    client.send("clear", { type });
    setTimeout(() => updateCaches("onClear"), 1e3);
  }
  function onTrimMemory() {
    client.send("trimMemory", {});
    setTimeout(() => updateCaches("onTrimMemory"), 1e3);
  }
  function onEnableDebugOverlay(enabled) {
    client.send("enableDebugOverlay", { enabled });
  }
  function onEnableAutoRefresh(enabled) {
    isAutoRefreshEnabled.set(enabled);
    if (enabled) {
      setTimeout(() => onAutoRefresh());
    }
  }
  function onAutoRefresh() {
    updateCaches("auto-refresh");
    if (isAutoRefreshEnabled.get()) {
      setTimeout(() => onAutoRefresh(), 1e3);
    }
  }
  function getImage(imageId) {
    if (!client.isConnected) {
      debugLog(`Cannot fetch image ${imageId}: disconnected`);
      return;
    }
    debugLog(`<- getImage requested for ${imageId}`);
    client.send("getImage", { imageId }).then((image) => {
      debugLog(`-> getImage ${imageId} returned`);
      imagePool.get()?._fetchCompleted(image);
    }).catch((e) => console.error("[fresco] getImage failed:", e));
  }
  function onImageSelected(selectedImage) {
    currentSelectedImage.set(selectedImage);
  }
  function onSurfaceChange(surfaces) {
    updateImagesOnUI(images.get(), surfaces, coldStartFilter.get());
  }
  function onColdStartChange(checked) {
    updateImagesOnUI(images.get(), selectedSurfaces.get(), checked);
  }
  function onTrackLeaks(checked) {
    client.logger.track("usage", "fresco:onTrackLeaks", {
      enabled: checked
    });
    isLeakTrackingEnabled.set(checked);
  }
  function onShowDiskImages(checked) {
    client.logger.track("usage", "fresco:onShowDiskImages", {
      enabled: checked
    });
    showDiskImages.set(checked);
    updateCaches("refresh");
  }
  function init() {
    debugLog("init()");
    if (client.isConnected) {
      updateCaches("init");
    } else {
      debugLog(`not connected)`);
    }
    imagePool.set(
      new ImagePool(getImage, (images2) => imagesMap.set(images2))
    );
    const filteredImages = filterImages(
      images.get(),
      events.get(),
      selectedSurfaces.get(),
      coldStartFilter.get()
    );
    images.set(filteredImages);
  }
  function filterImages(images2, events2, surfaces, coldStart) {
    if (!surfaces || surfaces.has(surfaceDefaultText) && !coldStart) {
      return images2;
    }
    const imageList = images2.map((image) => {
      const imageIdList = image.imageIds.filter((imageID) => {
        const filteredEvents = events2.filter((event) => {
          const output = event.attribution && event.attribution.length > 0 && event.imageIds && event.imageIds.includes(imageID);
          if (surfaces.has(surfaceDefaultText)) {
            return output && coldStart && event.coldStart;
          }
          return (!coldStart || coldStart && event.coldStart) && output && surfaces.has(event.attribution[0]);
        });
        return filteredEvents.length > 0;
      });
      return { ...image, imageIds: imageIdList };
    });
    return imageList;
  }
  function updateImagesOnUI(newImages, surfaces, coldStart) {
    const filteredImages = filterImages(
      newImages,
      events.get(),
      surfaces,
      coldStart
    );
    selectedSurfaces.set(surfaces);
    images.set(filteredImages);
    coldStartFilter.set(coldStart);
  }
  function updateCaches(reason) {
    debugLog(`Requesting images list (reason=${reason})`);
    client.send("listImages", {
      showDiskImages: showDiskImages.get()
    }).then((response) => {
      response.levels.forEach(
        (data) => imagePool?.get()?.fetchImages(data.imageIds)
      );
      images.set(response.levels);
      updateImagesOnUI(
        images.get(),
        selectedSurfaces.get(),
        coldStartFilter.get()
      );
    }).catch((e) => console.error("[fresco] listImages failed:", e));
  }
  return {
    selectedSurfaces,
    currentSelectedImage,
    isDebugOverlayEnabled,
    isAutoRefreshEnabled,
    currentImages,
    coldStartFilter,
    surfaceList,
    images,
    events,
    imagesMap,
    isLeakTrackingEnabled,
    showDiskImages,
    nextEventId,
    imagePool,
    onSurfaceChange,
    onColdStartChange,
    onClear,
    onTrimMemory,
    updateCaches,
    onEnableDebugOverlay,
    onEnableAutoRefresh,
    onImageSelected,
    onTrackLeaks,
    onShowDiskImages
  };
}
function Component5() {
  const instance = (0, import_flipper_plugin5.usePlugin)(plugin);
  let selectedSurfaces = (0, import_flipper_plugin5.useValue)(instance.selectedSurfaces);
  const isDebugOverlayEnabled = (0, import_flipper_plugin5.useValue)(instance.isDebugOverlayEnabled);
  const isAutoRefreshEnabled = (0, import_flipper_plugin5.useValue)(instance.isAutoRefreshEnabled);
  const coldStartFilter = (0, import_flipper_plugin5.useValue)(instance.coldStartFilter);
  const surfaceList = (0, import_flipper_plugin5.useValue)(instance.surfaceList);
  const images = (0, import_flipper_plugin5.useValue)(instance.images);
  const events = (0, import_flipper_plugin5.useValue)(instance.events);
  const imagesMap = (0, import_flipper_plugin5.useValue)(instance.imagesMap);
  const isLeakTrackingEnabled = (0, import_flipper_plugin5.useValue)(instance.isLeakTrackingEnabled);
  const showDiskImages = (0, import_flipper_plugin5.useValue)(instance.showDiskImages);
  const options = [...surfaceList].reduce(
    (acc, item) => {
      return [...acc, item];
    },
    [surfaceDefaultText]
  );
  if (selectedSurfaces.has(surfaceDefaultText)) {
    selectedSurfaces = new Set(options);
  }
  return /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.Tabs, { defaultActiveKey: "images", grow: true }, /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.Tab, { tab: "Images", key: "images" }, /* @__PURE__ */ import_react65.default.createElement(
    ImagesCacheOverview,
    {
      allSurfacesOption: surfaceDefaultText,
      surfaceOptions: new Set(options),
      selectedSurfaces,
      onChangeSurface: instance.onSurfaceChange,
      coldStartFilter,
      onColdStartChange: instance.onColdStartChange,
      images,
      onClear: instance.onClear,
      onTrimMemory: instance.onTrimMemory,
      onRefresh: () => instance.updateCaches("refresh"),
      onEnableDebugOverlay: instance.onEnableDebugOverlay,
      onEnableAutoRefresh: instance.onEnableAutoRefresh,
      isDebugOverlayEnabled,
      isAutoRefreshEnabled,
      onImageSelected: instance.onImageSelected,
      imagesMap,
      events,
      isLeakTrackingEnabled,
      onTrackLeaks: instance.onTrackLeaks,
      showDiskImages,
      onShowDiskImages: instance.onShowDiskImages
    }
  ), /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.DetailSidebar, null, /* @__PURE__ */ import_react65.default.createElement(Sidebar, null))), /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.Tab, { tab: "Memory", key: "memory" }, /* @__PURE__ */ import_react65.default.createElement(ImagesMemoryOverview, { images, imagesMap })));
}
function Sidebar() {
  const instance = (0, import_flipper_plugin5.usePlugin)(plugin);
  const events = (0, import_flipper_plugin5.useValue)(instance.events);
  const imagesMap = (0, import_flipper_plugin5.useValue)(instance.imagesMap);
  const currentSelectedImage = (0, import_flipper_plugin5.useValue)(instance.currentSelectedImage);
  if (currentSelectedImage == null) {
    return /* @__PURE__ */ import_react65.default.createElement(import_flipper_plugin5.Layout.Container, { pad: true }, /* @__PURE__ */ import_react65.default.createElement(import_antd4.Typography.Text, null, "Select an image to see the events associated with it."));
  }
  const maybeImage = imagesMap[currentSelectedImage];
  const filteredEvents = events.filter(
    (e) => e.imageIds.includes(currentSelectedImage)
  );
  return /* @__PURE__ */ import_react65.default.createElement(ImagesSidebar, { image: maybeImage, events: filteredEvents });
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/