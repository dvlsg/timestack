"use strict";

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _stopwatchWrapperJs = require('./stopwatch-wrapper.js');

var _stopwatchWrapperJs2 = _interopRequireDefault(_stopwatchWrapperJs);

var STACK = _Symbol('stack');
var CALLBACK = _Symbol('callback');

var Timestack = (function () {
    function Timestack() {
        var callback = arguments.length <= 0 || arguments[0] === undefined ? function (x) {
            return x;
        } : arguments[0];

        _classCallCheck(this, Timestack);

        this[STACK] = [];
        this[CALLBACK] = callback;
    }

    _createClass(Timestack, [{
        key: 'push',
        value: function push(description) {
            this[STACK].push(new _stopwatchWrapperJs2['default'](description));
        }
    }, {
        key: 'pop',
        value: function pop() {
            if (this[STACK].length > 0) return this[CALLBACK](this[STACK].pop().stop());
        }
    }, {
        key: 'length',
        get: function get() {
            return this[STACK].length;
        }
    }]);

    return Timestack;
})();

exports['default'] = Timestack;
module.exports = exports['default'];