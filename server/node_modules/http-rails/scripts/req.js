const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");

class railReq {
    constructor(proxy, urlParts) {
      this.req = proxy;
      this.urlParts = urlParts;
      this.url = this.req.url;
      this.path = this.urlParts.path;
      this.pathname = this.urlParts.pathname;
      this.method = this.req.method;
      this.headers = this.req.headers;
  
      //query parser
      this.query = {};
      try {
        let url = this.req.url
        if (url.includes("?")) {
          let query = url.split("?")[1];
          query = query.split("&");
          query.forEach((e) => {
            let ee = e.split("=");
            this.query[decodeURIComponent(ee[0])] = decodeURIComponent(ee[1]);
          });
        }
      } catch (err) {
        console.warn(err);
      }
    }
}
module.exports = railReq