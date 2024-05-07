const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");
const railRes = require("./res");
const railReq = require("./req");

class rail {
    constructor(options = {}) {
      this.version = "0.1.0";
      this.warning = true;
      Object.keys(options).forEach((key) => {
        this[key] = options[key];
      });
  
      this.setup();
    }
  
    //routing method
    routing = require("./routing.js")

    async setup() {
      this.routes = [];
      this.statusFunc = {};
      this.server = http.createServer(async (req, res) => {
        // Routing
        await this.routing(req, res,this);
      });
    }
    listen(port, callback) {
      this.server.listen(port, callback);
    }
    get(route, code,middleware=((req,res,next)=>{next()})) {
      this.routes.push({ route: route, code: code, type: "GET",middleware });
    }
    status(status, code) {
      this.statusFunc[status] = code;
    }
    use(code) {
      this.routes.push({ route: "", code: code, type: "use" });
    }
    spoof(route, newRoute) {
      this.routes.push({ route: route, type: "spoof", newRoute: newRoute });
    }
  }
  module.exports = rail