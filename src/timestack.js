"use strict";

import StopwatchWrapper from './stopwatch-wrapper.js';

let STACK = Symbol('stack');
let CALLBACK = Symbol('callback');

export default class Timestack {

    constructor(callback: Function = x => x) {
        this[STACK] = [];
        this[CALLBACK] = callback;
    }

    get length() {
        return this[STACK].length;
    }

    push(description) {
        this[STACK].push(new StopwatchWrapper(description));
    }

    pop() {
        if (this[STACK].length > 0)
            return this[CALLBACK](this[STACK].pop().stop());
    }
}
