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

//// 1. ��û�� url�� ��ü�� ����� ���� url �����
//var url = require('url');
//// 2. ��û�� url �߿� Query String �� ��ü�� ����� ���� querystring ��� ���
//var querystring = require('querystring');

//var server = http.createServer(function (request, response) {
//    // 3. �ܼ�ȭ�鿡 �α� ���� �κ��� ���
//    console.log('--- log start ---');
//    // 4. ���������� ��û�� �ּҸ� parsing �Ͽ� ��üȭ �� ���
//    var parsedUrl = url.parse(request.url);
//    console.log(parsedUrl);
//    // 5. ��üȭ�� url �߿� Query String �κи� ���� ��üȭ �� ���
//    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
//    if (parsedQuery["id"] == "xorud1541" && parsedQuery["pw"] == "Secret091!")
//    {
//        console.log(parsedQuery);
//    }
//    // 6. �ܼ�ȭ�鿡 �α� ���� �κ��� ���
//    console.log('--- log end ---');

//    response.writeHead(200, { 'Content-Type': 'text/html' });
//    response.end('Hello node.js!!');
//});

//server.listen(8080, function () {
//    console.log('Server is running...');
//});