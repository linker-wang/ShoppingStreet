"use strict";
const service_request = require("./request.js");
const request1 = new service_request.MyRequest({
  baseUrl: "http://123.207.32.32:7888/api/hy66"
});
exports.request1 = request1;
