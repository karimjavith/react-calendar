/**
 * @link https://reactjs.org/docs/javascript-environment-requirements.html
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
"use strict";

var realFetch = require("node-fetch");
module.exports = function(url, options) {
  if (/^\/\//.test(url)) {
    url = "https:" + url;
  }
  return realFetch.call(this, url, options);
};
if (!global.fetch) {
  global.fetch = module.exports;
  global.Response = realFetch.Response;
  global.Headers = realFetch.Headers;
  global.Request = realFetch.Request;
}
