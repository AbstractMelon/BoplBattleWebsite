const contentTypes = require("./scripts/contentTypes");
const cors = require("./scripts/middleware/cors");
const _static = require("./scripts/middleware/static");
const rail = require("./scripts/rail");
const railReq = require("./scripts/req");
const railRes = require("./scripts/res");

var rails = { foo: 42 };

//built in functions
rails.railReq = railReq
rails.railRes = railRes
rails.contentTypes = contentTypes
rails.rail = rail

//middleware
rails.static = _static
rails.cors = cors

//export it
var callableRails = Object.assign(rail, rails);
module.exports = callableRails