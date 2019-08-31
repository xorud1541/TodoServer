var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
    var url = req.url;
    console.log(url);
    console.log('Hello!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//var http = require('http');

//// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
//var url = require('url');
//// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
//var querystring = require('querystring');

//var server = http.createServer(function (request, response) {
//    // 3. 콘솔화면에 로그 시작 부분을 출력
//    console.log('--- log start ---');
//    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
//    var parsedUrl = url.parse(request.url);
//    console.log(parsedUrl);
//    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
//    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
//    if (parsedQuery["id"] == "xorud1541" && parsedQuery["pw"] == "Secret091!")
//    {
//        console.log(parsedQuery);
//    }
//    // 6. 콘솔화면에 로그 종료 부분을 출력
//    console.log('--- log end ---');

//    response.writeHead(200, { 'Content-Type': 'text/html' });
//    response.end('Hello node.js!!');
//});

//server.listen(8080, function () {
//    console.log('Server is running...');
//});