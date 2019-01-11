var Express = require('express');
var App = Express();

App.get('/', function(req, res) {
    res.end('Hello, World!');
});

App.listen(80, function() {
    console.log('Server is listening on port 80');
});
