var express = require('express');
var app = express();

app.get('/users/:password', function (req, res) {
    var pw = req.params.password;
    if (pw == "123") {
        res.status(200).json({'code' : 200});
        var ip = req.connection.address();
        console.log(ip);
        console.log('success');
    }
    else {
        res.status(400).json({ 'code' : 400});
        console.log('fail');
    }
});

app.listen(80, function () {
    console.log('server is running ... ');
});
