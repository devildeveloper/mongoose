// The default error messages. Change these for your mongoose instance:
//
// var mongoose = require('mongoose');
// mongoose.set('error messages', yourObject);
//
// mongoose.setErrorMessages -> mongoose.plugin() to pass values
// each schema should allow setting custom error msgs
//
// Any messages not defined will fall back to the default.
// May be called multiple times safely.
//

var merge = require('../utils').merge;

var msg = module.exports = exports = {};

msg.general = {};
msg.general.default = "Validator failed for path `{PATH}` with value `{VALUE}`";
msg.general.required = "Path `{PATH}` is required.";

msg.Number = {};
msg.Number.min = "Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).";
msg.Number.max = "Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).";

msg.String = {};
msg.String.enum = "`{VALUE}` is not a valid enum value for path `{PATH}`.";
msg.String.match = "Path `{PATH}` is invalid ({VALUE}).";


