"use strict";

import Stopwatch from './stopwatch.js';
import TimeResponse from './time-response.js';

export default class StopwatchWrapper {

    constructor(description = "(UNKNOWN)") {
        this.sw = new Stopwatch();
        this.description = description;
        this.sw.start();
    }

    get [Symbol.toStringTag]() {
        return 'StopwatchWrapper';
    }

    stop() {
        if (this.sw) {
            this.sw.stop();
            return new TimeResponse({
                task: this.description,
                time: this.sw.duration
            });
        }
    }
}
