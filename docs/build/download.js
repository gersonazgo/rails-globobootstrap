var http = require('http'),
    zipper = require('zipper').Zipper,
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
        
        var archive = new zip();
        var variables = fs.readFileSync( resolvePath(__dirname + '/../../lib/variables.less'), 'utf-8' ); 
        var mixins = fs.readFileSync( resolvePath(__dirname + '/../../lib/mixins.less'), 'utf-8' );
        
        for(var i=0; i<json.css.length; i++){
          var css_less = fs.readFileSync( resolvePath(__dirname + '/../../lib/' + json.css[i] + '.less'), 'utf-8' );
          parser.parse(variables + mixins + css_less, function (e, tree) {
              var css = tree.toCSS({ compress: false })
              archive.add(json.css[i] + '.css' , new Buffer(css, "utf8"));
          });
        }
        if(json.js) {
          for(var i=0; i<json.js.length; i++) {
            var javascripts = fs.readFileSync( resolvePath(__dirname + '/../../js/'+ json.js[i]), 'utf-8' );
            archive.add(json.js[i], new Buffer(javascripts, "utf8"));            
          }
        }
        var buffer = archive.toBuffer();
        res.write(buffer);
        res.end();
    });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
