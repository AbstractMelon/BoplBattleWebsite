const http = require("http");
var url = require("url");
const path = require("path");
const fs = require("fs");
const railRes = require("../res");

module.exports = (options={}) => {
    /**
     * @param {railRes} res
     */
    return async (req, res, next) => {
        res.assignHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000
        })
        next();
    };
  };