"use strict";

module.exports = {
    transform: function(input) {
        return input.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    }
};
    
    