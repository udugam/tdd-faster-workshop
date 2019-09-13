"use strict";

const rot13 = require("./rot13");

module.exports = class App {

    run(input) {
        return rot13.transform(input);
    }
};