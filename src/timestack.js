"use strict";

import StopwatchWrapper from './stopwatch-wrapper.js';

let STACK = Symbol('stack');

export default class Timestack {

    constructor() {
        this[STACK] = [];
    }

    get length() {
        return this[STACK].length;
    }

    push(description) {
        this[STACK].push(new StopwatchWrapper(description));
    }

    pop() {
        if (this[STACK].length > 0)
            return this[STACK].pop().stop();
    }
}
