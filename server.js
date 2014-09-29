var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('*', function(req, res) {
    res.sendStatus(200);
});

app.listen(port);
console.log('Mocking 200OK on port ' + port);
