"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 6e3;
class MyRequest {
  constructor(config) {
    this.timeout = (config == null ? void 0 : config.timeout) || TIME_OUT;
    this.header = (config == null ? void 0 : config.header) || {};
    this.baseUrl = (config == null ? void 0 : config.baseUrl) || "";
  }
  request(url, method, data, header) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: this.baseUrl + url,
        method: method ? method : void 0,
        data: data ? data : void 0,
        timeout: this.timeout,
        header: { ...this.header, ...header },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  get(url, header) {
    return this.request(url, "GET", null, header);
  }
  post(url, params, header) {
    return this.request(url, "POST", params, header);
  }
}
exports.MyRequest = MyRequest;
