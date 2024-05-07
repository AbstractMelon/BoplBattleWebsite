const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");
const railRes = require("./res");
const railReq = require("./req");
const railClass = require("./rail")

/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ServerResponse} res 
 * @param {railClass} rail 
 * @returns 
 */
module.exports = async(req, res,rail)=>{
    let urlParts = url.parse(req.url);
    let args = [new railReq(req, urlParts), new railRes(res)];

    //Loop through all items in the routes array
    for (let i = 0; i < rail.routes.length; i++) {

      //Use Middleware
      if (rail.routes[i].type == "use") {
        let done = false;
        await rail.routes[i].code(...args, () => {
          done = true;
        });
        if (done !== true) {
          return;
        }
        continue;
      }

      //GET method
      if (rail.routes[i].route == urlParts.pathname && rail.routes[i].type == req.method) {
        let done = false;
        rail.routes[i].middleware(...args, () => {
            done = true;
        })
        if (done !== true) {
            return;
        }
        await rail.routes[i].code(...args);
        return;
      }

      //spoof method
      if (rail.routes[i].route == urlParts.pathname && rail.routes[i].type == "spoof") {
        let parts = req.url.split("?");
        parts[0] = rail.routes[i].newRoute;
        req.url = parts.join("?");
        rail.routing(req, res);
        return;
      }

    }

    //404
    if (rail.statusFunc["404"]) {
      rail.statusFunc["404"](...args);
    }
  }