"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$toStringTag = require("babel-runtime/core-js/symbol/to-string-tag")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
var now = undefined;
if (process && process.hrtime && process.hrtime instanceof Function) {
    now = function () {
        var time = process.hrtime();
        return (time[0] * 1e9 + time[1]) / 1e6;
    };
} else {
    now = function () {
        return new Date().getTime();
    };
}

var Stopwatch = (function () {
    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        this.reset();
    }

    _createClass(Stopwatch, [{
        key: "reset",
        value: function reset() {
            this.startTime = null;
            this.stopTime = null;
            this.running = false;
        }
    }, {
        key: "start",
        value: function start() {
            if (!this.running) {
                this.running = true;
                this.stopTime = null;
                this.startTime = now();
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.running) {
                this.running = false;
                this.stopTime = now();
            }
        }
    }, {
        key: _Symbol$toStringTag,
        get: function get() {
            return 'Stopwatch';
        }
    }, {
        key: "duration",
        get: function get() {
            if (!this.running && this.startTime && this.stopTime) return this.stopTime - this.startTime;
        }
    }]);

    return Stopwatch;
})();

exports["default"] = Stopwatch;
module.exports = exports["default"];