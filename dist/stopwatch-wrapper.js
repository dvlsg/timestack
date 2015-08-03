"use strict";

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol$toStringTag = require('babel-runtime/core-js/symbol/to-string-tag')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _stopwatchJs = require('./stopwatch.js');

var _stopwatchJs2 = _interopRequireDefault(_stopwatchJs);

var _timeResponseJs = require('./time-response.js');

var _timeResponseJs2 = _interopRequireDefault(_timeResponseJs);

var StopwatchWrapper = (function () {
    function StopwatchWrapper() {
        var description = arguments.length <= 0 || arguments[0] === undefined ? "(UNKNOWN)" : arguments[0];

        _classCallCheck(this, StopwatchWrapper);

        this.sw = new _stopwatchJs2['default']();
        this.description = description;
        this.sw.start();
    }

    _createClass(StopwatchWrapper, [{
        key: 'stop',
        value: function stop() {
            if (this.sw) {
                this.sw.stop();
                return new _timeResponseJs2['default']({
                    task: this.description,
                    time: this.sw.duration
                });
            }
        }
    }, {
        key: _Symbol$toStringTag,
        get: function get() {
            return 'StopwatchWrapper';
        }
    }]);

    return StopwatchWrapper;
})();

exports['default'] = StopwatchWrapper;
module.exports = exports['default'];