// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./App.js");

describe("App", function() {

	it("uses rot-13 to transform nput to output", function() {
		const app = new App();
		const output = app.run("hello");
		assert.equal(output, "uryyb");
	});

});