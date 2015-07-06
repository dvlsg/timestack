"use strict";

let now;
if (process && process.hrtime && process.hrtime instanceof Function) {
    now = () => {
        let time = process.hrtime();
        return ((time[0] * 1e9 + time[1]) / 1e6);
    };
}
else {
    now = () => {
        return new Date().getTime();
    };
}

export default class Stopwatch {

    constructor() {
        this.reset();
    }

    get [Symbol.toStringTag]() {
        return 'Stopwatch';
    }

    reset() {
        this.startTime = null;
        this.stopTime = null;
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.stopTime = null;
            this.startTime = now();
        }
    }

    stop() {
        if (this.running) {
            this.running = false;
            this.stopTime = now();
        }
    }

    get duration() {
        if (!this.running && this.startTime && this.stopTime)
            return this.stopTime - this.startTime;
    }
}
