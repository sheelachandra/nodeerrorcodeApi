var express = require("express");
var app = express();
app.listen(8000);
app.get("/TestServices/:code/", function(req, res) {
 var errorCode = req.params.code;
 const fs = require('fs');
 var rawdata = fs.readFileSync('Errorcodes/completed1.json', 'utf-8');
 var rawnone = JSON.parse(rawdata);
 console.log(rawnone);
 var errdata = fs.readFileSync('Errorcodes/JWF100001.json', 'utf-8');
 var errordata = JSON.parse(errdata);
 var errjwf102000 = fs.readFileSync('Errorcodes/JWF102000.json', 'utf-8');
 var errjwf102000 = JSON.parse(errjwf102000);
 var errjwf100002 = fs.readFileSync('Errorcodes/JWF100002.json', 'utf-8');
 var errjwf100002 = JSON.parse(errjwf100002);
 var errjwf100003 = fs.readFileSync('Errorcodes/JWF100003.json', 'utf-8');
 var errjwf100003 = JSON.parse(errjwf100003);
 var errjwf100004 = fs.readFileSync('Errorcodes/JWF100004.json', 'utf-8');
 var errjwf100004 = JSON.parse(errjwf100004);
 var errjwf100100 = fs.readFileSync('Errorcodes/JWF100100.json', 'utf-8');
 var errjwf100100 = JSON.parse(errjwf100100);
 var errjwf100101 = fs.readFileSync('Errorcodes/JWF100101.json', 'utf-8');
 var errjwf100101 = JSON.parse(errjwf100101);
 var errjwf100300 = fs.readFileSync('Errorcodes/JWF100300.json', 'utf-8');
 var errjwf100300 = JSON.parse(errjwf100300);
 var errjwf100301 = fs.readFileSync('Errorcodes/JWF100301.json', 'utf-8');
 var errjwf100301 = JSON.parse(errjwf100301);
 var errjwf100302 = fs.readFileSync('Errorcodes/JWF100302.json', 'utf-8');
 var errjwf100302 = JSON.parse(errjwf100302);
 var errjwf100303 = fs.readFileSync('Errorcodes/JWF100303.json', 'utf-8');
 var errjwf100303 = JSON.parse(errjwf100303);
 var errjwf000001 = fs.readFileSync('Errorcodes/JWF000001.json', 'utf-8');
 var errjwf000001 = JSON.parse(errjwf000001);
 var errjwf000002 = fs.readFileSync('Errorcodes/JWF000002.json', 'utf-8');
 var errjwf000002 = JSON.parse(errjwf000002);
 var errjwf000003 = fs.readFileSync('Errorcodes/JWF000003.json', 'utf-8');
 var errjwf000003 = JSON.parse(errjwf000003);
 var errjwf000004 = fs.readFileSync('Errorcodes/JWF000004.json', 'utf-8');
 var errjwf000004 = JSON.parse(errjwf000004);
 var errjwf000005 = fs.readFileSync('Errorcodes/JWF000005.json', 'utf-8');
 var errjwf000005 = JSON.parse(errjwf000005);
 var errjwf002000 = fs.readFileSync('Errorcodes/JWF002000.json', 'utf-8');
 var errjwf002000 = JSON.parse(errjwf002000);
 var errjwf002001 = fs.readFileSync('Errorcodes/JWF002001.json', 'utf-8');
 var errjwf002001 = JSON.parse(errjwf002001);
 var errjwf000100 = fs.readFileSync('Errorcodes/JWF000100.json', 'utf-8');
 var errjwf000100 = JSON.parse(errjwf000100);
 var errjwf000101 = fs.readFileSync('Errorcodes/JWF000101.json', 'utf-8');
 var errjwf000101 = JSON.parse(errjwf000101);
 var errjwf000102 = fs.readFileSync('Errorcodes/JWF000102.json', 'utf-8');
 var errjwf000102 = JSON.parse(errjwf000102);
 var errjwf000103 = fs.readFileSync('Errorcodes/JWF000103.json', 'utf-8');
 var errjwf000103 = JSON.parse(errjwf000103);
 var errjwf000104 = fs.readFileSync('Errorcodes/JWF000104.json', 'utf-8');
 var errjwf000104 = JSON.parse(errjwf000104);
 var errjwf000105 = fs.readFileSync('Errorcodes/JWF000105.json', 'utf-8');
 var errjwf000105 = JSON.parse(errjwf000105);
 var errjwf000106 = fs.readFileSync('Errorcodes/JWF000106.json', 'utf-8');
 var errjwf000106 = JSON.parse(errjwf000106);
 var errjwf000300 = fs.readFileSync('Errorcodes/JWF000300.json', 'utf-8');
 var errjwf000300 = JSON.parse(errjwf000300);
 var errjwf000301 = fs.readFileSync('Errorcodes/JWF000301.json', 'utf-8');
 var errjwf000301 = JSON.parse(errjwf000301);
 var errjwf000302 = fs.readFileSync('Errorcodes/JWF000302.json', 'utf-8');
 var errjwf000302 = JSON.parse(errjwf000302);
 var errjwf000303 = fs.readFileSync('Errorcodes/JWF000303.json', 'utf-8');
 var errjwf000303 = JSON.parse(errjwf000303);
 var errjwf000304 = fs.readFileSync('Errorcodes/JWF000304.json', 'utf-8');
 var errjwf000304 = JSON.parse(errjwf000304);
 var errjwf000305 = fs.readFileSync('Errorcodes/JWF000305.json', 'utf-8');
 var errjwf000305 = JSON.parse(errjwf000305);
 var errjwf000306 = fs.readFileSync('Errorcodes/JWF000306.json', 'utf-8');
 var errjwf000306 = JSON.parse(errjwf000306);
 var errjwf000307 = fs.readFileSync('Errorcodes/JWF000307.json', 'utf-8');
 var errjwf000307 = JSON.parse(errjwf000307);
 var errjwf000308 = fs.readFileSync('Errorcodes/JWF000308.json', 'utf-8');
 var errjwf000308 = JSON.parse(errjwf000308);
 var errjwf000309 = fs.readFileSync('Errorcodes/JWF000309.json', 'utf-8');
 var errjwf000309 = JSON.parse(errjwf000309);
 var errjwf000310 = fs.readFileSync('Errorcodes/JWF000310.json', 'utf-8');
 var errjwf000310 = JSON.parse(errjwf000310);
 if (errorCode == "NONE") {
  res.json(rawnone);
 } else if (errorCode == "JWF100001") {
  res.json(errordata);
 } else if (errorCode == "JWF102000") {
  res.json(errjwf102000);
 } else if (errorCode == "JWF100002") {
  res.json(errjwf100002);
 } else if (errorCode == "JWF100003") {
  res.json(errjwf100003);
 } else if (errorCode == "JWF100004") {
  res.json(errjwf100004);
 } else if (errorCode == "JWF100100") {
  res.json(errjwf100100);
 } else if (errorCode == "JWF100101") {
  res.json(errjwf100101);
 } else if (errorCode == "JWF100300") {
  res.json(errjwf100300);
 } else if (errorCode == "JWF100301") {
  res.json(errjwf100301);
 } else if (errorCode == "JWF100302") {
  res.json(errjwf100302);
 } else if (errorCode == "JWF100303") {
  res.json(errjwf100303);
 } else if (errorCode == "JWF000001") {
  res.json(errjwf000001);
 } else if (errorCode == "JWF000002") {
  res.json(errjwf000002);
 } else if (errorCode == "JWF000003") {
  res.json(errjwf000003);
 } else if (errorCode == "JWF000004") {
  res.json(errjwf000004);
 } else if (errorCode == "JWF000005") {
  res.json(errjwf000005);
 } else if (errorCode == "JWF002000") {
  res.json(errjwf002000);
 } else if (errorCode == "JWF002001") {
  res.json(errjwf002001);
 } else if (errorCode == "JWF000100") {
  res.json(errjwf000100);
 } else if (errorCode == "JWF000101") {
  res.json(errjwf000101);
 } else if (errorCode == "JWF000102") {
  res.json(errjwf000102);
 } else if (errorCode == "JWF000103") {
  res.json(errjwf000103);
 } else if (errorCode == "JWF000104") {
  res.json(errjwf000104);
 } else if (errorCode == "JWF000105") {
  res.json(errjwf000105);
 } else if (errorCode == "JWF000106") {
  res.json(errjwf000106);
 } else if (errorCode == "JWF000300") {
  res.json(errjwf000300);
 } else if (errorCode == "JWF000301") {
  res.json(errjwf000301);
 } else if (errorCode == "JWF000302") {
  res.json(errjwf000302);
 } else if (errorCode == "JWF000303") {
  res.json(errjwf000303);
 } else if (errorCode == "JWF000304") {
  res.json(errjwf000304);
 } else if (errorCode == "JWF000305") {
  res.json(errjwf000305);
 } else if (errorCode == "JWF000306") {
  res.json(errjwf000306);
 } else if (errorCode == "JWF000307") {
  res.json(errjwf000307);
 } else if (errorCode == "JWF000308") {
  res.json(errjwf000308);
 } else if (errorCode == "JWF000309") {
  res.json(errjwf000309);
 } else if (errorCode == "JWF000310") {
  res.json(errjwf000310);
 } else {
  res.json("");
 }
});
app.get("/TestServices/httpStatus/:code/", function(req, res) {
 var errorCode = req.params.code;
 var httpStatusCode = req.params.code;
 const fs = require('fs');
 var statusdata = fs.readFileSync('httpStatusCode/err200.json', 'utf-8');
 var statusdata = JSON.parse(statusdata);
 var stserr409 = fs.readFileSync('httpStatusCode/err409.json', 'utf-8');
 var stserr409 = JSON.parse(stserr409);
 var stserr400 = fs.readFileSync('httpStatusCode/err400.json', 'utf-8');
 var stserr400 = JSON.parse(stserr400);
 var stserr401 = fs.readFileSync('httpStatusCode/err401.json', 'utf-8');
 var stserr401 = JSON.parse(stserr401);
 var stserr500 = fs.readFileSync('httpStatusCode/err500.json', 'utf-8');
 var stserr500 = JSON.parse(stserr500);
 var stserr503 = fs.readFileSync('httpStatusCode/err503.json', 'utf-8');
 var stserr503 = JSON.parse(stserr503);
 if (httpStatusCode == "200") {
  res.json(statusdata);
 } else if (httpStatusCode == "409") {
  res.json(stserr409);
 } else if (httpStatusCode == "400") {
  res.json(stserr400);
 } else if (httpStatusCode == "401") {
  res.json(stserr401);
 } else if (httpStatusCode == "500") {
  res.json(stserr500);

 } else if (httpStatusCode == "503") {
  res.json(stserr503);
 } else {
  res.json("");
 }
});