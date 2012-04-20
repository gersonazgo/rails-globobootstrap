var http = require('http'),
    fs = require("fs"),
    zip = require("node-native-zip"),
    less = require("less"),
    util = require("util"),
    http = require('http'),
    qs = require('querystring'),
    resolvePath = require('path').resolve;

http.createServer(function (req, res) {
    res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename=bootstrap.zip'
    });
   var data = '';
   req.on("data", function(chunk) {
        data += chunk;
    });
    req.on("end", function() {
        var post = qs.parse(data);
        archive = new BootstrapZipBuilder();
        for (var variable in post) {
            if (variable[0] == "@"){
                archive.setVariable(variable, post[variable])
            }
        }
        for(var i=0; i<post.css.length; i++){
            archive.addLessCss(post.css[i])
        }
        for(var i=0; i<post.js.length; i++) {
            archive.addJavascript(post.js[i])
        }
        var buffer = archive.toBuffer();
        res.write(buffer);
        res.end();
    });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


BootstrapZipBuilder = function(){
    this.pathBootstrap = resolvePath(__dirname + '/../../');
    this.variables = fs.readFileSync( this.pathBootstrap + '/lib/variables.less', 'utf-8' );
    this.mixins = fs.readFileSync( this.pathBootstrap + '/lib/mixins.less', 'utf-8' );
}
BootstrapZipBuilder.prototype = new zip()
BootstrapZipBuilder.prototype.addLessCss = function(name){
    var that = this;
    var content = this.mixins + this.variables + this.readCSSLess(name);
    parser.parse(content, function (e, tree) {
        var css = tree.toCSS({ compress: false })
        that.add(name + '.css', new Buffer(css, "utf8"));
    });
}
BootstrapZipBuilder.prototype.addJavascript = function(name){
    var content = this.readJavascript(name);
    this.add( name, new Buffer(content, "utf8") );
}
BootstrapZipBuilder.prototype.setVariable = function(name, value){
        this.variaveis += ( name + ": " + value + ";\n" );
}
BootstrapZipBuilder.prototype.readJavascript = function(name){
    return fs.readFileSync( this.pathBootstrap + '/js/'+ name, 'utf-8' );
}
BootstrapZipBuilder.prototype.readCSSLess = function(name){
    return fs.readFileSync( this.pathBootstrap + '/lib/'+ name + '.less', 'utf-8' );
}

var parser = new(less.Parser)({
        paths: [resolvePath(__dirname + '/../../lib')]
})
