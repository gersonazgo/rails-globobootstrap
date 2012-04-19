var http = require('http');
var zipper = require('zipper').Zipper;
var fs = require("fs");
var zip = require("node-native-zip");
var less = require("less")


var  parser = new(less.Parser)({
        paths: [__dirname + '/../lib'],
        filename: 'bootstrap.less'
})

http.createServer(function (req, res) {

    var archive = new zip();
    var css_less = fs.readFileSync( __dirname + '/../lib/bootstrap.less', 'utf-8');
    parser.parse(css_less, function (e, tree) {
        var css = tree.toCSS({ compress: false })
        archive.add("bootstrap.css", new Buffer(css, "utf8"));
        var buffer = archive.toBuffer();
        res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename=bootstrap.zip'});
        res.write(buffer);
        res.end();
    });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
