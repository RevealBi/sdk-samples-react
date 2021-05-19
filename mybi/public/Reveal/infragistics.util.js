/*!@license
 * Infragistics.Web.ClientUI Util functions <build_number>
 *
 * Copyright (c) 2011-<year> Infragistics Inc.
 * 
 * util functions that extend the jQuery  namespace 
 * if something is not already available in jQuery, please add it here. 
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *  day.js: https://github.com/iamkun/dayjs
 *
 */

/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed. 
*/
// Inspired by base2 and Prototype
/*global xyz, Class, define, jQuery, ActiveXObject, VBArray, Intl, XDomainRequest, unescape*/ /*jshint -W106*/ /*jshint -W116*/ /*jshint unused:false*/
(function ($) {

    var initializing = false, fnTest = /xyz/.test(function () { xyz(); }) ? /\b_super\b/ : /.*/;
    // The base Class implementation (does nothing)
    this.Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop, doAugment) {
        var doSuper = true,
            _super = this.prototype,
            prototype,
            name;

        if (doAugment) {
            doSuper = false;
        }

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        prototype = new this();
        initializing = false;

        function makeFn(name, fn) {
            return function () {
                var tmp = this._super,
                    ret;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
            };
        }

        // Set these before copying over values from the prop, so we don't overwrite a custom getHashCode implementation.
        if (doAugment) {
            prototype.getType = function () {
                return this.$type;
            };

            prototype.getHashCode = function () {
                if (this.$hashCode !== undefined) {
                    return this.$hashCode;
                }
                this.$hashCode = $.ig.nextHashCode++;
                return this.$hashCode;
            };
        }

        // Copy the properties over onto the new prototype
        for (name in prop) {
            if (prop.hasOwnProperty(name)) {
                // Check if we're overwriting an existing function
                prototype[name] = doSuper && typeof prop[name] === "function" &&
                    typeof _super[name] === "function" && fnTest.test(prop[name]) ?
                    makeFn(name, prop[name]) : prop[name];
            }
        }

        // For some reason, intellisense gets tripped up when we allow the constructors to call the init function. So when the intellisense 
        // object is defined, just use a dummy constructor
        var isForIntellisense =
            window.intellisense &&
            window.intellisense.annotate;

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init) {
                if (!isForIntellisense || Class === $.ig.Type) {
                    this.init.apply(this, arguments);
                }
            }
        }

        if (prop.$type) {
            prop.$type.InstanceConstructor = Class;
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = this.extend;

        if (doAugment) {
            Class.typeName = function () {
                return this.prototype.$type;
            };

            Class.baseType = function () {
                return this.$type.baseType;
            };
        }

        return Class;
    };

    // Expose util as an AMD module, but only for AMD loaders that
    // understand the issues with loading multiple versions of jQuery
    // in a page that all might call define(). The loader will indicate
    // they have special allowances for multiple jQuery versions by
    // specifying define.amd.jQuery = true. Register as a named module,
    // since jQuery can be concatenated with other files that may use define,
    // but not use a proper concatenation script that understands anonymous
    // AMD modules. A named AMD is safest and most robust way to register.
    // Lowercase ig.util is used because AMD module names are derived from
    // file names, and jQuery is normally delivered in a lowercase file name.
    // Do this after creating the global so that if an AMD module wants to call
    // noConflict to hide this version of jQuery, it will work.
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("ig.util", [], function () { return Class; });
    }
    // N.A. 12/8/2015 Bug #210921 In IE8 'console' is 'undefined' and to remove exceptions when console.log is used just create empty function.
    // For the moment editors and notifier are using console.log() function.
    if (!window.console) {
        window.console = { log: function () { } };
    }

}(jQuery));

(function ($) {
    $.ig = $.ig || { _isNamespace: true };
    $.ig.util = $.ig.util || {};

    $.ig.extendNativePrototype = function (proto, propName, val) {
        if ($.ig.useDefineProperty) {
            try {
                Object.defineProperty(proto, propName, {
                    value: val,
                    enumerable: false,
                    configurable: true,
                    writable: true
                });
            } catch (e) { // IE8 has defineProperty defined, but doesn't support setting enumerable to false
                proto[propName] = val;
            }
        } else {
            proto[propName] = val;
        }
    };

    $.ig.nextHashCode = 0;
    $.ig.typeIdentifierCache = {};
    $.ig.nextTypeIdentifier = 0;
    $.ig.Type = Class.extend({
        init: function (identifier, baseType, interfaces, staticInitializer) {
            this.specializationCache = {};
            this._staticInitializer = staticInitializer;
            this._fullName = identifier;
            this.name = identifier;
            var lastDotIndex = this.name.lastIndexOf(".");
            if (lastDotIndex >= 0) {
                this.name = this.name.substr(lastDotIndex + 1);
            }

            this.typeArguments = null;
            this.baseType = null;
            this.interfaces = null;
            if (baseType) {
                this.baseType = baseType;
            }
            if (interfaces) {
                this.interfaces = interfaces;
            }

            if ($.ig.typeIdentifierCache[identifier]) {
                this.identifier = $.ig.typeIdentifierCache[identifier];
            } else {
                this.identifier = $.ig.nextTypeIdentifier++;
                $.ig.typeIdentifierCache[identifier] = this.identifier;
            }

            // rather than always evaluating a function on a type to see if it is an enum
            // we can just cache it once on the type
            if (baseType && $.ig.Enum && baseType == $.ig.Enum.prototype.$type) {
                this.isEnumType = true;
            }
        },
        typeName: function () {
            return this.name;
        },
        fullName: function () {
            return this._fullName;
        },
        getSpecId: function (types) {
            if (types.length === 1) {
                if (!types[0]) {
                    return "undef";
                } else if (types[0] === -1) {
                    return undefined;
                } else if (!types[0].typeName) {
                    return types[0].toString();
                } else if (types[0].stringId) {
                    return types[0].stringId;
                } else {
                    return types[0].identifier.toString();
                }
            }

            var ret = "";
            for (var i = 0; i < types.length; i++) {
                var type = types[i];
                if (!type) {
                    ret += "undef";
                } else if (type == -1) {
                    return undefined;
                } else if (!type.typeName) {
                    ret += type.toString();
                } else if (type.stringId) {
                    ret += type.stringId;
                } else {
                    ret += type.identifier.toString();
                }
            }
            return ret;
        },
        _isGenericType: null,
        isGenericType: function () {
            if (this._isGenericType === null) {
                this._isGenericType = this.name.indexOf("$") >= 0;
            }

            return this._isGenericType;
        },
        isGenericTypeDefinition: function () {
            return this.typeArguments === null && this.isGenericType();
        },
        genericTypeArguments: function () {
            return this.typeArguments;
        },
        _staticInitializer: null,
        _staticFields: null,
        getStaticFields: function (type) {
            if (type === undefined) {
                type = this;
            }

            var t = this;

            while (t != null) {
                if (t === type || t._fullName == type._fullName) {
                    if (t._staticFields == null && t._staticInitializer) {
                        t._staticFields = {};
                        t._staticInitializer.apply(t._staticFields, t.typeArguments);
                    }

                    return t._staticFields;
                }

                t = t.baseType;
            }

            return null;
        },
        specializationCache: null,
        initSelfReferences: function (replacement) {
            var i, j;
            if (replacement) {
                if (this.typeArguments) {
                    var updateCache = false;

                    for (j = 0; j < this.typeArguments.length; j++) {
                        var typeArg = this.typeArguments[j];
                        if (typeArg == -1) {
                            updateCache = true;
                            this.typeArguments[j] = replacement;
                        } else if (typeArg && typeArg.initSelfReferences) {
                            typeArg.initSelfReferences(replacement);
                        }
                    }

                    if (updateCache) {
                        var specId = this.getSpecId(this.typeArguments);
                        var ret = this.specializationCache[specId];

                        if (!ret) {
                            this.specializationCache[specId] = this;
                        }
                    }
                }
            } else {
                if (this.baseType) {
                    this.baseType.initSelfReferences(this);
                }

                if (this.interfaces) {
                    for (i = 0; i < this.interfaces.length; i++) {
                        this.interfaces[i].initSelfReferences(this);
                    }
                }
            }
        },
        specialize: function () {
            var i;
            if (!this.isGenericType()) {
                return this;
            }

            var specId = this.getSpecId(arguments);
            var ret = this.specializationCache[specId];
            if (ret) {
                return ret;
            }
            ret = new $.ig.Type(this._fullName, this.baseType, this.interfaces, this._staticInitializer);

            var placeholders = this.typeArguments;
            var hasPlaceholders = false;

            // Make sure the placeholders are actually numbers. If they are types, we are re-specializing an
            // already specialized type.
            if (placeholders && placeholders.length) {
                /* going back to how it used to be. we shouldn't assume that the number/order of the arguments
                   relates to the typearguments. this may be an interface that has its type information already
                   and either has placeholders or is a closed type
			    // you can have a mixed bag where some are placeholders and others are not and the
			    // placeholder doesn't have to be the first slot
			    for (i = 0; i < placeholders.length; i++) {
			        if (isFinite(placeholders[ i ])) {
			            hasPlaceholders = true;
			            break;
			        }
			    }*/
                hasPlaceholders = true;
            }

            ret.typeArguments = [];
            if (hasPlaceholders) {
                for (i = 0; i < placeholders.length; i++) {

                    // if the argument being provided is a placeholder index and we already have
                    // a placeholder then keep the index we have. otherwise we're taking the index
                    // of the parent type
                    if (isFinite(placeholders[i]) && !isFinite(arguments[placeholders[i]])) {
                        ret.typeArguments[i] = arguments[placeholders[i]];
                    } else {
                        ret.typeArguments[i] = placeholders[i];
                    }
                }
            } else {
                for (i = 0; i < arguments.length; i++) {
                    ret.typeArguments[i] = arguments[i];
                }
            }

            // since the placeholder indexes for the basetype and interfaces implemented are based
            // on the order of the type arguments for the defining types we should pass its typeargs
            // and not the outermost type's type arguments which may be different in number and order
            // than the base type of the base types and interfaces implemented
            if (this.baseType && this.baseType.typeArguments) {
                ret.baseType = this.specialize.apply(this.baseType, ret.typeArguments);
            }

            if (this.interfaces) {
                ret.interfaces = [];
                for (i = 0; i < this.interfaces.length; i++) {
                    ret.interfaces[i] = this.specialize.apply(this.interfaces[i], ret.typeArguments);
                }
            }

            // rather than doing this check in various places we could just cache a field on the type
            if (this._fullName == "Nullable$1" && ret.typeArguments.length == 1) {
                ret.isNullable = true;
            }

            // if this was a self referencing type (e.g. IEquatable<Int32> for Int32 then we won't have the
            // specId yet because we don't know the type argument. we'll update the cache when we update
            // the self references. otherwise other types that use self references (but for a different type)
            // will get and use the wrong type arguments
            if (specId) {
                this.specializationCache[specId] = ret;
                ret.stringId = ret.generateString();
            }

            var _self = this;
            ret.InstanceConstructor = function () {
                _self.InstanceConstructor.apply(this,
                    ret.typeArguments.concat(Array.prototype.slice.call(arguments, 0)));
                return this;
            };
            ret.InstanceConstructor.prototype = this.InstanceConstructor.prototype;

            return ret;
        },
        equals: function (other) {
            if (!(other instanceof $.ig.Type)) {
                return false;
            }
            if (this.identifier !== other.identifier) {
                return false;
            }
            if (this.typeArguments === null && other.typeArguments === null) {
                return true;
            }
            if (this.typeArguments === null && other.typeArguments !== null) {
                return false;
            }
            if (this.typeArguments !== null && other.typeArguments === null) {
                return false;
            }
            if (this.typeArguments.length !== other.typeArguments.length) {
                return false;
            }
            for (var i = 0; i < this.typeArguments.length; i++) {

                //TODO: handle covariance case here.
                //if (!$.ig.util.canAssign(this.typeArguments[ i ], other.typeArguments[ i ])) {
                //    return false;
                //}
                if (!$.ig.Type.prototype.checkEquals(this.typeArguments[i], other.typeArguments[i])) {
                    return false;
                }
            }

            return true;
        },
        checkEquals: function (type1, type2) {
            if (type1 instanceof $.ig.Type) {
                return type1.equals(type2);
            } else if (type2 instanceof $.ig.Type) {
                return type2.equals(type1);
            } else {
                return type1 === type2;
            }
        },

        op_Equality: function (type1, type2) { // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
            return type1.equals(type2);
        },
        op_Inequality: function (type1, type2) { // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
            return !type1.equals(type2);
        },

        generateString: function () {
            if (!this.typeArguments || !this.typeArguments.length) {
                return this.identifier.toString();
            } else {
                var ret = this.identifier.toString() + "[";
                var first = true;
                for (var i = 0; i < this.typeArguments.length; i++) {
                    if (this.typeArguments[i] == undefined) {
                        continue;
                    }
                    if (first) { first = false; } else { ret += ","; }
                    if (this.typeArguments[i].toString) {
                        ret += this.typeArguments[i].toString();
                    } else {
                        ret += this.typeArguments[i].identifier.toString();
                    }
                }
                ret += "]";
                return ret;
            }
        },
        isEnum: function () {
            return this.baseType === $.ig.Enum.prototype.$type;
        },
        isValueType: function () {
            return this.baseType === $.ig.ValueType.prototype.$type;
        },
        isAssignableFrom: function (tOther) {

            // TODO: Unit test and make sure this is right (especially with generics
            if (this === tOther) {
                return true;
            }

            if (tOther.baseType && this.isAssignableFrom(tOther.baseType)) {
                return true;
            }

            if (tOther.interfaces) {
                for (var i = 0; i < tOther.interfaces.length; i++) {
                    if (this.isAssignableFrom(tOther.interfaces[i])) {
                        return true;
                    }
                }
            }

            return false;
        },
        isInstanceOfType: function (value) {
            return $.ig.util.cast(this, value) !== null;
        },
        isPrimitive: function () {
            return this === $.ig.Number.prototype.$type ||
                this === $.ig.Boolean.prototype.$type;
        }
    }, true);

    $.ig.Object = Class.extend({
        init: function () {

        },
        equals: function (other) {
            return this === other;
        },
        $type: new $.ig.Type('Object')
    }, true);

    $.ig.$o = $.ig.Object;
    $.ig.$op = $.ig.Object.prototype;
    $.ig.$ot = $.ig.Object.prototype.$type;

    $.ig.Type.prototype.$type = new $.ig.Type('Type', $.ig.Object.prototype.$type);

    $.ig.IConvertible = Class.extend({
        $type: new $.ig.Type('IConvertible')
    }, true);

    $.ig.IComparable = Class.extend({
        $type: new $.ig.Type('IComparable')
    }, true);

    $.ig.Enum = Class.extend({
		getBox: function (v) {
			if (!this._boxes) {
				this._boxes = {};
			}

			if (!this._boxes[ v ]) {
				this._boxes[ v ] = new this.$type.InstanceConstructor(v);
			}

			return this._boxes[ v ];
		},
        $type: new $.ig.Type('Enum', $.ig.Object.prototype.$type, [$.ig.IConvertible.prototype.$type])
    }, true);
    $.ig.$e = $.ig.Enum;
    $.ig.$ep = $.ig.Enum.prototype;
    $.ig.$et = $.ig.Enum.prototype.$type;

    $.ig.ValueType = Class.extend({
        init: function () {

        },
        $type: new $.ig.Type('ValueType', $.ig.Object.prototype.$type)
    }, true);

    $.ig.util.stringInsert = function (str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    };

    $.ig.Array = Array;
    $.ig.Array.prototype.$type = new $.ig.Type('Array');

    $.ig.extendNativePrototype(Array.prototype, "add", function (item) {
        this[this.length] = item;
    });

    if (!Array.prototype.indexOf) {
        $.ig.extendNativePrototype(Array.prototype, "indexOf", function (item) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == item) {
                    return i;
                }
            }
            return -1;
        });
    }

    $.ig.extendNativePrototype(Array.prototype, "contains", function (item) {
        var index = this.indexOf(item);
        return (index >= 0);
    });

    $.ig.extendNativePrototype(Array.prototype, "insert", function (index, item) {
        this.splice(index, 0, item);
    });

    $.ig.extendNativePrototype(Array.prototype, "removeItem", function (item) {
        var index = this.indexOf(item);
        if (index >= 0) {
            this.splice(index, 1);
            return true;
        }
        return false;
    });

    if (!Array.prototype.lastIndexOf) {
        $.ig.extendNativePrototype(Array.prototype, "lastIndexOf", function (item) {
            for (var i = this.length - 1; i >= 0; i--) {
                if (this[i] == item) {
                    return i;
                }
            }
            return -1;
        });
    }

    if (!Array.prototype.removeAt) {
        $.ig.extendNativePrototype(Array.prototype, "removeAt", function (index) {
            this.splice(index, 1);
        });
    }

    if (!Array.prototype.clear) {
        $.ig.extendNativePrototype(Array.prototype, "clear", function (index) {
            this.splice(0, this.length);
        });
    }

    if (!Array.prototype.removeAllInList) {
        $.ig.extendNativePrototype(Array.prototype, "removeAllInList", function (otherArray) {
            var filteredList = this.filter(function (el) {
                return otherArray.indexOf(el) < 0;
            });
            this.splice(0, this.length);
            for (var i = 0; i < filteredList.length; i++) {
                this[i] = filteredList[i];
            }
        });
    }

    $.ig.util.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

    $.ig.util.replace = function (str, oldValue, newValue) {
        return str.replace(new RegExp($.ig.util.escapeRegExp(oldValue), "g"), newValue);
    };

    $.ig.Dictionary = Class.extend({
        init: function () {
            this.proxy = {};
            this.keysHolder = this.proxy;
            this._count = 0;
        },
        $type: new $.ig.Type('Dictionary', $.ig.Object.prototype.$type),
        proxy: null
    }, true);

    $.ig.Dictionary.prototype.count = function () {
        return this._count;
    };

    $.ig.Dictionary.prototype.item = function (key, value) {
        if (arguments.length === 1) {
            return this.proxy[key];
        }
        else {
            if (!this.proxy[key]) {
                this._count++;
            }
            this.proxy[key] = value;
        }
    };

    $.ig.Dictionary.prototype.add = function (key, value) {
        if (!this.proxy[key]) {
            this._count++;
        }
        this.proxy[key] = value;
    };

    $.ig.Dictionary.prototype.addAll = function (otherDict) {
        var otherKeys = Object.keys(otherDict.proxy);
        var key;
        for (var i = 0; i < otherKeys.length; i++) {
            key = otherKeys[i];
            this.add(key, otherDict.item(key));
        }
    };

    $.ig.Dictionary.prototype.remove = function (key) {
        delete this.proxy[key];
        this._count--;
    };

    $.ig.Dictionary.prototype.get = function (key) {
        return this.proxy[key];
    };

    $.ig.Dictionary.prototype.clear = function () {
        this.proxy = {};
        this.keysHolder = this.proxy;
        this._count = 0;
    };

    $.ig.Dictionary.prototype.containsKey = function (key) {
        return this.keysHolder.hasOwnProperty(key);
    };

    $.ig.truncate = function (val) {
        if (val >= 0) {
            return Math.floor(val);
        } else {
            return Math.ceil(val);
        }
    };

    $.ig.intDivide = function (int1, int2) {
        var result = int1 / int2;
        return $.ig.truncate(result);
    };

    $.ig.util.nullableNotEquals = function (v1, v2) {
        return !$.ig.util.nullableEquals(v1, v2);
    };

    $.ig.util.toNullable = function (t, value) {

        if (value == null) {
            return t._$nullNullable || (t._$nullNullable = new $.ig.Nullable$1(t, value));
        } else if (value.isNullable) {
            return value;
        }

        return new $.ig.Nullable$1(t, value);
    }; 

    $.ig.util.wrapNullable = function (t, value) {
        return $.ig.util.toNullable(t, value);
    };

    $.ig.util.unwrapNullable = function (v) {
        /*jshint eqnull:true */
        if (v == null || !v.isNullable) {
            return v;
        }

        if (!v.hasValue()) {
            return null;
        }

        return v.value();
    };

    $.ig.Nullable = Class.extend({
        getUnderlyingType: function (nullableType) {
            if (nullableType.isGenericType !== undefined && nullableType.isGenericType() &&
                !nullableType.isGenericTypeDefinition() &&
                $.ig.Nullable$1.prototype.$type.typeName() == nullableType.typeName()) {
                return nullableType.genericTypeArguments()[0];
            }

            return null;
        },

        $type: new $.ig.Type("Nullable", $.ig.Object.prototype.$type)
    }, true);

    $.ig.Nullable$1 = Class.extend({
        $t: null,
        init: function ($t, value) {
            this.$t = $t;
            this.$type = this.$type.specialize(this.$t);
            $.ig.Object.prototype.init.call(this);

            if (value !== undefined) {
                this._value = value;
            }
        },
        equals: function (value) {
            return $.ig.util.nullableEquals(this, value);
        },
        getHashCode: function () {
            return this._value === null ? 0 : this._value.getHashCode();
        },
        hasValue: function () {
            return this._value !== null;
        },
        toString: function () {
            return this._value === null ? "" : this._value.toString();
        },
        _value: null,
        value: function (value) {
            if (arguments.length === 1) {
                this._value = value;
                return value;
            } else {
                return this._value;
            }
        },
        getValueOrDefault: function () {
            if (this.hasValue()) {
                return this._value;
            } else {
                return this.getDefaultValue();
            }
        },
        getDefaultValue: function () {
            if ($.ig.util.canAssign($.ig.Number.prototype.$type, this.$t)) {
                return 0;
            } else if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, this.$t)) {
                return false;
            } else if (this.$t.baseType == $.ig.ValueType.prototype.$type) {
                return $.ig.util.createInstance(this.$t);
            } else {
                return null;
            }
        },
        getValueOrDefault1: function (defaultValue) {
            if (this.hasValue()) {
                return this._value;
            } else {
                return defaultValue;
            }
        },
        preIncrement: function () {
            if (!this.hasValue()) {
                return this;
            }

            this._value++;
            return this;
        },
        preDecrement: function () {
            if (!this.hasValue()) {
                return this;
            }

            this._value--;
            return this;
        },
        postIncrement: function () {
            if (!this.hasValue()) {
                return this;
            }

            var originalValue = this._value;
            this._value++;
            return new $.ig.Nullable$1(this.$t, originalValue);
        },
        postDecrement: function () {
            if (!this.hasValue()) {
                return this;
            }

            var originalValue = this._value;
            this._value--;
            return new $.ig.Nullable$1(this.$t, originalValue);
        },
        isNullable: true,
        $type: new $.ig.Type("Nullable$1", $.ig.Object.prototype.$type)
    }, true);



    $.ig.util.nullableEquals = function (v1, v2) {
        /*jshint eqnull:true */
        var v1IsNull = (v1 == null) || (!!v1.isNullable && !v1.hasValue());
        var v2IsNull = (v2 == null) || (!!v2.isNullable && !v2.hasValue());

        if (v1IsNull && v2IsNull) {
            return true;
        }
        if (v1IsNull != v2IsNull) {
            return false;
        }

        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }

        return val1 == val2;
    };

    $.ig.$currDefinitions = null;
    $.ig.$allDefinitions = [];

    $.ig.util.getDefinedNameAndNamespace = function (name) {
        var ns = $.ig;
        var nParts = name.split('.');
        if (nParts.length != 1) {
            for (var i = 0; i < nParts.length - 1; i++) {
                var nsName = nParts[i];
                if (!ns[nsName]) {
                    ns[nsName] = {};
                }

                ns = ns[nsName];
            }

            name = nParts[nParts.length - 1];
        }

        return { name: name, namespace: ns };
    };

    $.ig.util.bulkDefine = function (toDefine) {
        var i = 0, curr = null, els = null;
        for (i = 0; i < toDefine.length; i++) {
            curr = toDefine[i];
            els = curr.split(':');
            curr = els[0];
            var info = $.ig.util.getDefinedNameAndNamespace(curr);

            info.namespace[info.name] = info.namespace[info.name] || Class.extend({ $type: new $.ig.Type(curr, $.ig.Object.prototype.$type), $placeholder: true }, true);
            if (els.length > 1 && $.ig.$currDefinitions) {
                $.ig.$currDefinitions[els[1]] = info.namespace[info.name];
                $.ig.$currDefinitions['$' + els[1]] = info.namespace[info.name].prototype;
                $.ig.$currDefinitions['$_' + curr] = els[1];
            }
            if ($.ig.$allDefinitions && $.ig.$allDefinitions.indexOf($.ig.$currDefinitions) < 0) {
                $.ig.$allDefinitions.push($.ig.$currDefinitions);
            }
        }
    };

    $.ig.util.defType = function (name, baseName, definition) {
        var els = null, i, currDefs, shortName;
        els = name.split(':');
        name = els[0];

        var info = $.ig.util.getDefinedNameAndNamespace(name);

        var result = info.namespace[info.name];

        if (!result || result.prototype.$placeholder) {
            var baseInfo = $.ig.util.getDefinedNameAndNamespace(baseName);
            result = baseInfo.namespace[baseInfo.name].extend(definition);
            info.namespace[info.name] = result;
        }

        if (els.length > 1 && $.ig.$currDefinitions) {
            $.ig.$currDefinitions[els[1]] = result;
            $.ig.$currDefinitions['$' + els[1]] = result.prototype;
            $.ig.$currDefinitions['$_' + name] = els[1];

            if ($.ig.$allDefinitions) {
                for (i = 0; i < $.ig.$allDefinitions.length; i++) {
                    currDefs = $.ig.$allDefinitions[i];
                    if (currDefs['$_' + name] !== undefined) {
                        shortName = currDefs['$_' + name];
                        currDefs[shortName] = result;
                        currDefs['$' + shortName] = result.prototype;
                    }
                }
            }
        }

        return result;
    };

    $.ig.extendNativePrototype(Function.prototype, "invoke", function () {
        return this.apply(null, arguments);
    });

    $.ig.extendNativePrototype(Function.prototype, "runOn", function (target) {
        var self = this;
        var ret = function () {
            return self.apply(target, arguments);
        };
        ret.original = this;
        ret.target = target;
        return ret;
    });

    Math.log10 = function (n) {
        return Math.log(n) / Math.log(10);
    };

    Math.logBase = function (n, n2) {
        return Math.log(n) / Math.log(n2);
    };

    Math.sign = function (n) {
        if (n < 0) {
            return -1;
        } else if (n > 0) {
            return 1;
        }
        else {
            return 0;
        }
    };

    $.ig.util.isNaN = function (v) {
        return v !== v || v == "NaN"; // http://us6.campaign-archive1.com/?u=2cc20705b76fa66ab84a6634f&id=43bf7f05e9
    };

    Number.isInfinity = function (n) { return n === Infinity || n === -Infinity; };

    $.ig.Date = Class.extend({
        init: function () {
            return new Date();
        },
        fromOADate: function (value) {
            var result = new Date(+(new Date(1899, 11, 30)) + Math.round(value * 86400000));

            if (result.dst && result.dst()) {
                return $.ig.Date.prototype.addHours(result, -1);
            }

            return result;
        },
        fromValues: function (year, month, day, hour, minute, second, millisecond) {
            return new Date(year, month - 1, day, hour, minute, second, millisecond);
        },
        fromTicks: function (ticks) {
            return new Date(ticks);
        },
        addSeconds: function (value, seconds) {
            return $.ig.Date.prototype.addDays(value, seconds / 86400);
        },
        addMinutes: function (value, minutes) {
            return $.ig.Date.prototype.addDays(value, minutes / 1440);
        },
        addHours: function (value, hours) {
            return $.ig.Date.prototype.addDays(value, hours / 24);
        },
        addDays: function (value, days) {
            var result = new Date(+value + (days * 86400000));

            // Correct for any daylight saving time shifts
            if (value.dst) {
                if (!value.dst()) {
                    if (result.dst()) {
                        result = new Date(+result - 3600000);
                    }
                } else {
                    if (!result.dst()) {
                        result = new Date(+result + 3600000);
                    }
                }
            }

            return result;
        },
        addMonths: function (value, num) {

            var result = new Date(value.getTime());
            var currentMonth = result.getMonth() + result.getFullYear() * 12;
            result.setMonth(result.getMonth() + num);
            var diff = result.getMonth() + result.getFullYear() * 12 - currentMonth;

            // If don't get the right number, set date to
            // last day of previous month
            if (diff != num) {
                result.setDate(0);
            }
            return result;
        },
        addYears: function (value, num) {
            var result = new Date(value.getTime());
            result.setFullYear(result.getFullYear() + num);
            return result;
        },
        daysInMonth: function (year, month) {
            switch (month) {
                case 1: return 31; // Jan
                case 2: return $.ig.Date.prototype.isLeapYear(year) ? 29 : 28; // Feb
                case 3: return 31; // Mar
                case 4: return 30; // Apr
                case 5: return 31; // May
                case 6: return 30; // Jun
                case 7: return 31; // Jul
                case 8: return 31; // Aug
                case 9: return 30; // Sep
                case 10: return 31; // Oct
                case 11: return 30; // Nov
                case 12: return 31; // Dec
            }

            // TODO: throw error here?
            return 0;
        },
        isLeapYear: function (year) {
            return year % 4 === 0 && year % 100 !== 0;
        },
        toFileTime: function (value) {
            return (value - new Date(1600, 11, 31, 19, 0, 0, 0)) * 10000;
        },
        fromFileTime: function (value) {

            // TODO: Test this
            return (value / 10000) + new Date(1600, 11, 31, 19, 0, 0, 0);
        },
        tryParse: function (s) {
            var date = new Date(s);
            if (date == null || $.ig.util.isNaN(+date)) {

                // IE8 does not support this format, so parse it manually
                var r = /(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2}))?/.exec(s);
                if (r) {
                    if (r[4]) {
                        return {
                            p1: new Date(+r[1], +r[2] - 1, +r[3],
                                +r[4], +r[5], +r[6]), ret: true
                        };
                    } else {
                        return { p1: new Date(+r[1], +r[2] - 1, +r[3]), ret: true };
                    }
                }

                return { p1: null, ret: false };
            }

            // TODO: Use the current date separator/date format here here?
            if (date.getFullYear() < 1930 && /\d+\/\d+\/\d\d(?!\d)/.test(s)) {
                date.setFullYear(date.getFullYear() + 100);
            }

            return { p1: date, ret: true };
        },
        parseExact: function (s, format, provider) {
            // TODO: Use the format and provider
            var r = $.ig.Date.prototype.tryParse(s);

            if (!r.ret) {
                throw new $.ig.FormatException("Unknown date format");
            }

            return r.p1;
        },
        toLocalTime: function (value) {

            // TODO: Implement
            return value;
        },
        toUniversalTime: function (value) {

            // TODO: Implement
            return value;
        },
        getMonth: function (value) {
            return value.getMonth() + 1;
        },
        today: function (value) {
            var r = new Date();
            r.setHours(0, 0, 0, 0);
            return r;
        },
        getTimeOfDay: function (value) {
            return (value.getHours() * 3600000) +
                (value.getMinutes() * 60000) +
                (value.getSeconds() * 1000) +
                value.getMilliseconds();
        },
        getDate: function (value) {
            return new Date(value - $.ig.Date.prototype.getTimeOfDay(value));
        },
        _requiresISOCorrection: !isNaN(+new Date("2000-01-01T00:00:00")) &&
            new Date("2000-01-01T00:00:00").getHours() !== 0,
        _requiresISODateCorrection: !isNaN(new Date("2000-01-01")) &&
            new Date("2000-01-01").getHours() !== 0,
        parse: function (s, provider) {
            provider = provider || $.ig.CultureInfo.prototype.currentCulture(); // TODO: Use the provider below
            var result;

            var isoTest = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.| )?(\d*)?/.exec(s);
            if (isoTest) {
                result = $.ig.Date.prototype.parseExact(isoTest[1]);
                if (isoTest[2]) {
                    var ms = Number("0." + isoTest[2]) * 1000;
                    result = new Date(+result + ms);
                }

                if (!$.ig.Date.prototype._requiresISOCorrection) {
                    return result;
                }
            } else {
                result = $.ig.Date.prototype.parseExact(s);
                if (!$.ig.Date.prototype._requiresISODateCorrection) {
                    return result;
                }
            }

            return new Date(result.getUTCFullYear(), result.getUTCMonth(), result.getUTCDate(),
                result.getUTCHours(), result.getUTCMinutes(),
                result.getUTCSeconds(), result.getUTCMilliseconds());
        },
        _longDateFormatOptions: {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        },
        toLongDateString: function (value) {
            return value.toLocaleString($.ig.CultureInfo.prototype.currentCulture().name(),
                this._longDateFormatOptions).replace(/\u200E/g, "");
        },
        _longTimeFormatOptions: { hour: "numeric", minute: "numeric", second: "numeric" },
        toLongTimeString: function (value) {
            return value.toLocaleString($.ig.CultureInfo.prototype.currentCulture().name(),
                this._longTimeFormatOptions).replace(/\u200E/g, "");
        },
        $type: new $.ig.Type("Date", $.ig.Object.$type)
    }, true);

    $.ig.extendNativePrototype(Date.prototype, "toOADate", function () {
        var result = (this - new Date(1899, 11, 30)) / 86400000;

        if (this.dst && this.dst()) {
            return result + (1 / 24);
        }

        return result;
    });

    $.ig.Date.prototype.now = function () {
        return new Date();
    };
    $.ig.Date.prototype.minValue = function () {
        return new Date(1, 1, 1, 0, 0, 0, 0);
    };
    $.ig.Date.prototype.maxValue = function () {
        return new Date(9999, 12, 31, 23, 59, 59, 0.9999999);
    };
    $.ig.Date.prototype.fromMilliseconds = function (value) {
        return value;
    };

    $.ig.Date.prototype.toString = function (value, provider) {
        return $.ig.Date.prototype.toStringFormat(value, "s", provider);
    };

    // This polyfill for IE8 was written by Douglas Crockford, obtained from here:
    // https://github.com/douglascrockford/JSON-js/blob/master/json2.js
    if (!Date.prototype.toISOString) {
        // Here we rely on JSON serialization for dates because it matches
        // the ISO standard. However, we check if JSON serializer is present
        // on a page and define our own .toJSON method only if necessary
        if (!Date.prototype.toJSON) {
            Date.prototype.toJSON = function (key) {
                function f(n) {
                    // Format integers to have at least two digits.
                    return n < 10 ? "0" + n : n;
                }

                return this.getUTCFullYear() + "-" +
                    f(this.getUTCMonth() + 1) + "-" +
                    f(this.getUTCDate()) + "T" +
                    f(this.getUTCHours()) + ":" +
                    f(this.getUTCMinutes()) + ":" +
                    f(this.getUTCSeconds()) + "Z";
            };
        }

        Date.prototype.toISOString = Date.prototype.toJSON;
    }

    $.ig.Date.prototype.dayJSValidateLocale = function (locale) {
        if (locale == null) {
            return null;
        }
        locale = locale.toLowerCase();
        var supportedLocales = ["de", "en", "es", "fr", "it", "ja", "ko", "ms", "nl", "pt", "ru", "zh-cn", "zh-tw"];
        var validLocale = supportedLocales.includes(locale);
        if (!validLocale) {
            locale = locale.split('-')[0];
            validLocale = supportedLocales.includes(locale);
        }
        if (validLocale) {
            return locale;
        }
        else {
            return null;
        }
    }

    $.ig.Date.prototype.dayJSLoadLocaleFile = function (locale) {
        locale = $.ig.Date.prototype.dayJSValidateLocale(locale);
        if (locale == null) {
            return;
        }
        if (locale != null) {
            var dayjsScriptPath = (function () {
                var path = null;
                var scripts = document.getElementsByTagName('script');
                for (var i = 0; i < scripts.length; i++) {
                    var scriptTag = scripts[i];
                    if (scriptTag.src.contains("/dayjs.min.js")) {
                        path = scriptTag.src;
                        break;
                    }
                }
                if (path == null) return null;
                var lastSlash = path.lastIndexOf('/');
                return lastSlash < 0 ? "" : path.substring(0, lastSlash + 1);

            })();
            if (dayjsScriptPath == null) return;

            var loadLocaleScript = function () {
                var file = dayjsScriptPath + "locale/" + locale + ".js";
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = file;
                script.async = false; // by default, it is async (unlike scripts that are directly written in html). We need it to be synchronous so we don't load any page element before having the appropriate texts.
                document.body.appendChild(script);
            }

            if (document.body == null) {
                document.addEventListener('DOMContentLoaded', loadLocaleScript);
            }
            else {
                loadLocaleScript();
            }
        }
    }

    $.ig.Date.prototype.dayJSLocalizedStringFormat = function (dt, format, provider) {
        var locale = null;
        if (provider != null) {
            locale = $.ig.Date.prototype.dayJSValidateLocale(provider.name());
        }
        // Convert format to dayjs format:
        format = format.replace('DD', '$$$$'); // replace with some char different of 'd' to then replace with 'd', because 'd' changes to 'D'
        format = format.replace('D', '$$$');
        format = format.replace('dd', 'DD');
        format = format.replace('d', 'D');
        format = format.replace('$$$$', 'dddd');
        format = format.replace('$$$', 'ddd');
        format = format.replace('yyyy', 'YYYY');
        format = format.replace('yy', 'YY');
        format = format.replace('tt', 'A');
        format = format.replace('Z', '[Z]');

        if (locale != null) {
            return dayjs(dt).locale(locale).format(format);
        }
        else {
            return dayjs(dt).format(format);
        }
    };

    $.ig.Date.prototype.toStringFormat = function (dt, format, provider) {
        return $.ig.Date.prototype.dayJSLocalizedStringFormat(dt, format, provider);
    }

    // LuisP: Date localization was made with dayjs library. I kept this method commented as a reference, in case we need to return to it.
    /*
    $.ig.Date.prototype.toStringFormat = function (dt, format, provider) {
        //TODO: please someone make this better that works with localization
        var mn = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
        ];

        var dow = [
          "Sunday", "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday"
        ];

        format = format.replace('a', "tt");

        var militaryHours = dt.getHours();
        var hours = militaryHours % 12;
        if (militaryHours == 0 || militaryHours == 12)
            hours = 12;

        format = format.replace('HH', this.pad(militaryHours, 2));
        format = format.replace('hh', this.pad(hours, 2));
        format = format.replace('H', militaryHours);
        format = format.replace('h', hours);
        format = format.replace('ss', this.pad(dt.getSeconds(), 2));
        format = format.replace('s', dt.getSeconds());
        format = format.replace('dd', this.pad(dt.getDate(), 2));
        format = format.replace('d', dt.getDate());
        format = format.replace('mm', this.pad(dt.getMinutes(), 2));
        format = format.replace('m', dt.getMinutes());
        format = format.replace('MMMM', mn[dt.getMonth()]);
        format = format.replace('MMM', mn[dt.getMonth()].substring(0, 3));
        format = format.replace('MM', this.pad(dt.getMonth() + 1, 2));
        format = format.replace(/M(?![ao])/, dt.getMonth() + 1); // Avoid changing March, May, Monday
        format = format.replace('yyyy', dt.getFullYear());
        format = format.replace('YYYY', dt.getFullYear());
        format = format.replace('yy', (dt.getFullYear() + "").substring(2));
        format = format.replace('YY', (dt.getFullYear() + "").substring(2));
        format = format.replace('DD', dow[dt.getDay()]);
        format = format.replace(/D(?!e)/, dow[dt.getDay()].substring(0, 3)); // Avoid changing December

        var tt = militaryHours >= 12 ? "PM" : "AM";
        format = format.replace('tt', tt);

        return format;
    };
    */

    $.ig.Date.prototype.pad = function (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    $.ig.util.canAssignSimple = function (targetType, type) {
        if (targetType === type || $.ig.Type.prototype.checkEquals(targetType, type)) {
            return true;
        }
        if (type.interfaces) {
            for (var i = 0; i < type.interfaces.length; i++) {
                if ($.ig.util.canAssignSimple(targetType, type.interfaces[i])) {
                    return true;
                }
            }
        }
        if (type.baseType) {
            return $.ig.util.canAssignSimple(targetType, type.baseType);
        }

        return false;
    };

    $.ig.util.getValue = function (v) {
        if (v !== null && v.$type && v.$type.isEnum && v.$type.isEnum()) {
            return v.$value();
        }

        return v;
    };

	if (!String.prototype.getHashCode) {
		String.prototype.getHashCode = function () {
			var hash = 0, i, chr, len;
			if (this.length === 0) {
				return hash;
			}
			for (i = 0, len = this.length; i < len; i++) {
				chr = this.charCodeAt(i);
				/*jslint bitwise: true */
				hash = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}

			return hash;
		};
	}
	
    String.prototype.contains = function (s) {
        return this.indexOf(s) > -1;
    };

    $.ig.util.cast = function (targetType, obj) {
        if (obj === undefined || obj === null) {
            return null;
        }

        if (targetType === Array) {
            return (obj instanceof Array) ? obj : null;
        }

        if (targetType === String) {
            targetType = $.ig.String.prototype.$type;
        }

        var type = obj;

        if (obj.$type) {
            type = obj.$type;
        } else if (typeof obj === "number") {
            type = targetType === Number ? Number : $.ig.Number.prototype.$type;
        } else if (typeof obj === "string") {
            type = $.ig.String.prototype.$type;
        } else if (typeof obj === "boolean") {
            type = $.ig.Boolean.prototype.$type;
        } else if (obj instanceof Date) {
            type = $.ig.Date.prototype.$type;
        }

        if ($.ig.util.canAssignSimple(targetType, type)) {
            return obj;
        }

        if (targetType.name === "Nullable$1" && type.name !== "Nullable$1") {
            targetType = $.ig.Nullable.prototype.getUnderlyingType(targetType);
            if ($.ig.util.canAssignSimple(targetType, type)) {
                return $.ig.util.toNullable(targetType, obj);
            }

            return $.ig.util.toNullable(targetType, null);
        }

        return null;
    };

    String.prototype.equals = function (other) {
        return this == other;
    };

    $.ig.util.createGuid = function () {
        /*jslint bitwise: true */
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() +
            S4() + S4()).toLowerCase();
    };

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (str) {
            return str.length > 0 && this.substring(this.length - str.length, this.length) === str;
        };
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.substr(position, searchString.length) === searchString;
        };
    }

    $.ig.Number = Class.extend({
        $type: new $.ig.Type("Number", $.ig.Object.prototype.$type,
            [$.ig.IConvertible.prototype.$type, $.ig.IComparable.prototype.$type])
    }, true);

    $.ig.CultureInfo = Class.extend({
        _name: null,
        _isInvariant: false,
        init: function (name) {
            this._name = name;
        },
        clone: function () {
            var copy = new $.ig.CultureInfo(this._name);
            for (var attr in this) {
                if (this.hasOwnProperty(attr)) {
                    copy[attr] = this[attr];
                }
            }

            if (copy._dateTimeFormat) {
                copy._dateTimeFormat = copy._dateTimeFormat.clone();
            }

            if (copy._numberFormat) {
                copy._numberFormat = copy._numberFormat.clone();
            }

            return copy;
        },
        compareInfo: function () {

            // TODO:
            return new $.ig.CompareInfo();
        },
        getFormat: function ($t) {
            if ($t === $.ig.NumberFormatInfo.prototype.$type) {
                return this.numberFormat();
            }

            if ($t === $.ig.DateTimeFormat.prototype.$type) {
                return this.dateTimeFormat();
            }

            throw new Error("Unknown format type");
        },
        name: function () {
            return this._name;
        },
        calendar: function () {

            // TODO
            return new $.ig.Calendar();
        },
        dateTimeFormat: function (value) {
            if (arguments.length === 1) {
                this._dateTimeFormat = value;
            }

            if (!this._dateTimeFormat) {
                this._dateTimeFormat = new $.ig.DateTimeFormat(this._name, this._isInvariant);
            }

            return this._dateTimeFormat;
        },
        numberFormat: function (value) {
            if (arguments.length === 1) {
                this._numberFormat = value;
            }

            if (!this._numberFormat) {
                this._numberFormat = new $.ig.NumberFormatInfo(this._name, this._isInvariant);
            }

            return this._numberFormat;
        },
        twoLetterISOLanguageName: function () {
            if (this._name.length > 2 && this._name[2] == "-") {
                return this._name.substr(0, 2);
            }

            // TODO
            return "";
        },
        getCultureInfo: function (lcid) {
            var name = globalInfo[lcid];
            if (name) {
                if (name === "invariant") {
                    return $.ig.CultureInfo.prototype.invariantCulture();
                }

                return new $.ig.CultureInfo(name);
            }

            // TODO: throw error here?
            return $.ig.CultureInfo.prototype.invariantCulture();
        },
        $type: new $.ig.Type("CultureInfo", $.ig.Object.prototype.$type)
    }, true);

    $.ig.CultureInfo.prototype.currentCulture = function () {
        return $.ig.Thread.prototype.currentThread().currentCulture();
    };

    $.ig.CultureInfo.prototype.invariantCulture = function () {
        if (this._cachedInvariant) {
            return this._cachedInvariant;
        }

        // TODO: Make a true invariant culture
        /*jshint -W093 */
        this._cachedInvariant = new $.ig.CultureInfo("en-US");
        this._cachedInvariant._isInvariant = true;
        return this._cachedInvariant;
    };

	$.ig.util.getDefaultValue = function ($t) {
		if ($t === Number || $t == $.ig.Number.prototype.$type ||
			$t.baseType === $.ig.Enum.prototype.$type) {
			return 0;
		}

		if ($t == Boolean || $t == $.ig.Boolean.prototype.$type) {
			return false;
		}

		if ($t.baseType === $.ig.ValueType.prototype.$type) {
			return $.ig.util.createInstance($t);
		}

		return null;
	};

	$.ig.util.castObjTo$t = function ($t, v) {

		var shouldWrap = false;
		if ($t.isNullable) {
			$t = $t.typeArguments[ 0 ];
			shouldWrap = true;
		}

		if (v !== null && $t.isEnumType) {
			v = v.$value();
		}

		return shouldWrap ? $.ig.util.toNullable($t, v) : v;
	};

	$.ig.util.getBoxIfEnum = function ($t, v) {
		if (v !== null && $t) { // TODO: Remove the $t check here and fix the null ref issue
			if ($t.isNullable) {
				$t = $t.typeArguments[ 0 ];
			}

			if ($t.isEnumType) {
				return $t.InstanceConstructor.prototype.getBox(v);
			}
		}

		return v;
	};

    $.ig.util.getCursorPosition = function (el) {
        var caretOffset = 0;
        if (typeof window.getSelection !== "undefined") {
            var sel = window.getSelection();
            if (sel == null || sel.rangeCount == 0)
                return -1;
            var range = sel.getRangeAt(0);
            var selected = $.ig.util.getLengthOfRange(range);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(el);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = $.ig.util.getLengthOfRange(preCaretRange) - selected;
        }
        return caretOffset;
    };

    $.ig.util.getLengthOfRange = function (range) {

        return $.ig.util.replace(range.toString(), "\r\n", " ").length;
    };

    $.ig.util.getCursorRange = function (el) {
        var selectionRange = [];
        var caretOffset = 0;
        if (typeof window.getSelection !== "undefined") {
            var sel = window.getSelection();
            if (sel == null || sel.rangeCount == 0) {
                selectionRange.push(0);
                selectionRange.push(0);
            }
            else {
                var range = sel.getRangeAt(0);
                var selected = $.ig.util.getLengthOfRange(range);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(el);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = $.ig.util.getLengthOfRange(preCaretRange) - selected;
                selectionRange.push(caretOffset);
                selectionRange.push($.ig.util.getLengthOfRange(preCaretRange));
            }

        }
        return selectionRange;
    };

    $.ig.util.getCurrentSelectionRect = function () {

        var sel = window.getSelection();
        if (sel != null && sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);
            if (range != null) {
                range = range.cloneRange();
                if (range.getClientRects) {
                    // range.collapse(true);
                    if (range.getClientRects().length > 0) {
                        return range.getClientRects()[0];
                    }
                }
            }
        }

        return null;
    };

    $.ig.util.getCaretRectForPosition = function (el, pos) {
        var d = $.ig.util.getCaretData(el, pos);
        var range = document.createRange();
        if (range != null && d.node != null) {
            range.setStart(d.node, d.position);
            range.collapse(true);
            if (range.getClientRects) {
                // range.collapse(true);
                if (range.getClientRects().length > 0) {
                    return range.getClientRects()[0];
                }
            }
        }

        return null;
    }

    $.ig.util.getAllTextnodes = function (el) {
        var n, a = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        while (n = walk.nextNode()) a.push(n);
        return a;
    };

    $.ig.util.getCaretData = function (el, position) {
        var node; nodes = $.ig.util.getAllTextnodes(el);
        for (var n = 0; n < nodes.length; n++) {
            if (position > nodes[n].nodeValue.length && nodes[n + 1]) {
                // remove amount from the position, go to next node
                position -= nodes[n].nodeValue.length;
            } else {
                node = nodes[n];
                break;
            }
        }
        // you'll need the node and the position (offset) to set the caret
        return { node: node, position: position };
    };

    $.ig.util.setCaretPosition = function (el, pos) {
        var d = $.ig.util.getCaretData(el, pos);
        var sel = window.getSelection(),
            range = document.createRange();
        if (range != null && d.node != null) {
            range.setStart(d.node, d.position);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    $.ig.util.setSelection = function (el, pos, len) {
        var start = $.ig.util.getCaretData(el, pos);
        var end = $.ig.util.getCaretData(el, pos + len);
        var sel = window.getSelection();
        var range = document.createRange();

        if (range != null) {
            if (start.node != null) {
                range.setStart(start.node, start.position);
            }

            if (len > 0 && end != null) {
                range.setEnd(end.node, end.position);
            }
            else {
                range.collapse(true);
            }

            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    $.ig.util.getTextPositionFromCaretPosition = function (el) {
        var nodes = $.ig.util.getAllTextnodes(el);
        var sel = window.getSelection();
        var cumTextLen = 0;
        for (var n = 0; n < nodes.length; n++) {
            var currNode = nodes[n];
            if (currNode != sel.anchorNode) {
                cumTextLen += currNode.nodeValue.length;
            } else {
                cumTextLen += sel.anchorOffset;
                break;
            }
        }

        return cumTextLen;
    };
    /*
    $.ig.util.copyImageToClipboard = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth != 0 ? img.naturalWidth : img.clientWidth;
        canvas.height = img.naturalHeight != 0 ? img.naturalHeight : img.clientHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(function (blob) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]);
        });
    }
    */
    $.ig.util.getMobileOS = function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var os = '';

        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            os = "ios";

        }
        else if (userAgent.match(/Android/i)) {

            os = "android";
        }
		else if (userAgent.match(/Mac/i)) {

            os = "macos";
        }
        else {
            os = "desktop";
        }

        return os;
    }

    $.ig.util.isAndroid = function () {
        var os = $.ig.util.getMobileOS();
        return os == "android";
    }

    $.ig.util.isIOS = function () {
        var os = $.ig.util.getMobileOS();
        return os == "ios";
    }
	 $.ig.util.isMacOS = function () {
        var os = $.ig.util.getMobileOS();
        return os == "macos";
    }

	 $.ig.util.isWindows = function () {
        var os = $.ig.util.getMobileOS();
        return os == "desktop";
    }

	 $.ig.util.isFirefox = function () {
        var ua = navigator.userAgent;
        return  /Firefox\W\d/.test(ua);
    }

    $.ig.util.isSupportedBrowser = function() {
        var ua = navigator.userAgent;
        //Edge = ed, EdgeChromium = edc, IE = ie9:ie10:ie11:ie, Firefox = ff, Chrome = gc, Safari = sa, Opera = op 
        var supportedOptions = ["edc", "ff", "gc", "sa", "op"];
        var browser = /Edge\/\d+/.test(ua) ? 'ed': /Edg\/\d+/.test(ua) ? 'edc' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'gc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : '';

        for (var n = 0; n < supportedOptions.length; n++) {
            var currBrow = supportedOptions[n];
            if (currBrow == browser) {
                return true;
            } 
        }
        return false;
    }

    $.ig.util.defType("Thread", "Object", {
        init: function () {
        },
        currentThread: function () {
            if (!this._currentThread) {
                this._currentThread = new $.ig.Thread();
            }

            return this._currentThread;
        },
        currentCulture: function (value) {
            if (arguments.length === 1) {
                this._currentCulture = value;
            }

            if (!this._currentCulture) {
                var currentLocale = navigator.language || navigator.userLanguage;
                this._currentCulture = new $.ig.CultureInfo(currentLocale);
            }

            return this._currentCulture;
        },
        $type: new $.ig.Type("Thread", $.ig.Object.prototype.$type)
    }, true);
})(jQuery);