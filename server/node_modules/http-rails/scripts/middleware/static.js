const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");

module.exports = (dir) => {
    var folder = fs.readdirSync(dir).map((e) => "/" + e);
    return async (req, res, next) => {
      if (req.pathname == "/") req.pathname = "/index.html";
  
      if (folder.includes(req.pathname)) {
        res.sendFile(path.join(dir, req.pathname));
        return;
      }
      next();
    };
  };