"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _express["default"]();
var PORT = 4000;
app.get('/', function (req, res) {
  res.send('Test');
});
app.listen(PORT, function () {
  return console.log('STARTED');
});