"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$toStringTag = require("babel-runtime/core-js/symbol/to-string-tag")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});

var TimeResponse = (function () {
    function TimeResponse(_ref) {
        var task = _ref.task;
        var time = _ref.time;

        _classCallCheck(this, TimeResponse);

        this.task = task;
        this.time = time;
    }

    _createClass(TimeResponse, [{
        key: "toString",
        value: function toString() {
            return this.task + " took " + this.time + " ms";
        }
    }, {
        key: _Symbol$toStringTag,
        get: function get() {
            return 'TimeResponse';
        }
    }]);

    return TimeResponse;
})();

exports["default"] = TimeResponse;
module.exports = exports["default"];