"use strict";

export default class TimeResponse {

    constructor({ task, time }) {
        this.task = task;
        this.time = time;
    }

    get [Symbol.toStringTag]() {
        return 'TimeResponse';
    }

    toString() {
        return `${this.task} took ${this.time} ms`;
    }
}
