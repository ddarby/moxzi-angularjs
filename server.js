var PORT = Number(process.env.PORT || 5000);

var http = require('http');
var compression = require('compression');
var express = require('express');
var app = express();

app.use(compression());

app.use(
    '/lib',
    express.static(__dirname + '/node_modules')
);

app.use(
    express.static(__dirname + '/app')
);

app.use(
    '/bootstrap',
    express.static(__dirname + '/bootstrap3')
);


app.get(
    '/test', 
    function (req, res) {
        res.sendFile(__dirname + '/app/index.html');
    }
);

function init() {
    var host,
        port;
    host = server.address().address;
    port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
}

var server = app.listen(
    PORT,
    init
);
