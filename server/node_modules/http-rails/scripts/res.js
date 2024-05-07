const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");

const contentTypes = require("./contentTypes")

class railRes {
    constructor(proxy) {
      this.res = proxy;
      this.headers = {};
      this.sent = false;
      this.status = 200;
    }
    send(data) {
      this.res.writeHead(this.status, this.headers);
      this.res.end(data);
      this.sent = true;
    }
    sendFile(file) {
      this.setFileType(path.extname(file).replaceAll(".", ""));
      this.send(fs.readFileSync(file));
    }
    assignHeaders(headers) {
      Object.assign(this.headers, headers);
    }
    setFileType(extension) {
      if (contentTypes[extension])
        this.headers["Content-Type"] = contentTypes[extension];
    }
  }
module.exports = railRes