var express = require('express');
var app = express();

app.get('/users/:password', function (req, res) {
    var pw = req.params.password;
    if (pw == "123") {
        res.status(200).json();
        var ip = req.connection.address();
        console.log(ip);
        console.log('success');
    }
    else {
        res.status(400).json();
        console.log('fail');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
