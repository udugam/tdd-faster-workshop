"use strict";

const assert = require('./assert');
const rot13 = require('./rot13');

describe("ROT-13", function() {

    it("doesn't do anything if input is empty", function() {
        assert.equal(rot13.transform(""), "");
    });
    
    it("does convert alphabetic characters", function() {
        assert.equal(rot13.transform("!"), "!");
        assert.equal(rot13.transform("$%^&"), "$%^&");
        
        assert.equal(rot13.transform("12345"), "12345");
        
        assert.equal(rot13.transform("a"), "n");
        assert.equal(rot13.transform("A"), "N");
        assert.equal(rot13.transform("abcdefg"), "nopqrst");
    });
});