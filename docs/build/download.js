var http = require('http'),
    fs = require("fs"),
    zip = require("node-native-zip"),
    less = require("less"),
    util = require("util"),
    http = require('http'), 
    url = require('url'),
    qs = require('querystring'),
    resolvePath = require('path').resolve;

var  parser = new(less.Parser)({
        paths: [resolvePath(__dirname + '/../../lib')]
})

http.createServer(function (req, res) {
    res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename=bootstrap.zip'});
   var data = '';
   req.on("data", function(chunk) {
        data += chunk;
    });

    req.on("end", function() {

        var json = qs.parse(data);
        var variables = "";
        var archive = new zip();
        for (var variavel in json) {
            if (variavel[0] == "@"){
                variables += (variavel + ": " + json[variavel] + ";\n");
            }
        };
        var mixins = fs.readFileSync( resolvePath(__dirname + '/../../lib/mixins.less'), 'utf-8' );
        
        for(var i=0; i<json.file.length; i++){
          var css_less = fs.readFileSync( resolvePath(__dirname + '/../../lib/' + json.file[i] + '.less'), 'utf-8' );
          parser.parse(mixins + variables + css_less, function (e, tree) {
              var css = tree.toCSS({ compress: false })
              archive.add(json.file[i] + '.css' , new Buffer(css, "utf8"));
          });
        }
        var buffer = archive.toBuffer();
        res.write(buffer);
        res.end();
    });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
