var ms = require('ms');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function parseRegion(val) {
    if(/^[0-9]*$/.test(val) === true) {
        return val;
    }

    return ms(val);
}

module.exports = exports.getRandomDate = function (val, ref) {
    var direction;
    var region;
    var refMs;
    var range = [];
    
    if(ref) {
        try {
            refMs = new Date(ref).getTime();
        } catch(e) {
            throw new Error(e);
        }
    }

    var curr = refMs || new Date().getTime();

    if(/\+|\-/.test(val[0])) {
        direction = val[0];
        region = parseRegion(val.slice(1).trim());
    } else {
        region = parseRegion(val.trim());
    }
    
    switch (direction) {
        case '+':
            range = [curr, curr + region];
            break;
        case '-':
            range = [curr - region, curr];
            break;
        default:
            range = [curr - region, curr + region];
    }

    return getRandomInt(range[0], range[1]);

}
