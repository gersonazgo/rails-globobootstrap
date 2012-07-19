var http = require('http'),
    fs = require("fs"),
    zip = require("node-native-zip"),
    less = require("less"),
    util = require("util"),
    qs = require('querystring'),
    resolvePath = require('path').resolve

http.createServer(function (req, res) {
    res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Cache-Control': 'no-cache',
            'Content-Disposition': 'attachment; filename=bootstrap.zip'
    });
   var data = '';
   req.on("data", function(chunk) {
        data += chunk;
    });
    req.on("end", function() {
        var post = qs.parse(data);
        var archive = new BootstrapZipBuilder();
        for (var variable in post) {
            if (variable[0] == "@"){
                archive.setVariable(variable, post[variable])
            }
        }
       
        if(post.css) {
          post.css = (post.css.constructor == Array ? post.css : [post.css])  
          for(var i=0; i<post.css.length; i++){
            archive.addLessCss(post.css[i])
          }
        }
        
        if(post.js) {
          post.js = (post.js.constructor == Array ? post.js : [post.js])
          for(var i=0; i<post.js.length; i++) {
              archive.addJavascript(post.js[i])
          }
        }
        var buffer = archive.toBuffer()
        res.write(buffer)
        res.end()
    });

}).listen(1337, '0.0.0.0');
console.log('Server running...');


BootstrapZipBuilder = function(){
    this.pathBootstrap = resolvePath(__dirname + '/../../');
    this.variables = fs.readFileSync( this.pathBootstrap + '/lib/variables.less', 'utf-8' );
    this.mixins = fs.readFileSync( this.pathBootstrap + '/lib/mixins.less', 'utf-8' );
}
BootstrapZipBuilder.prototype = new zip()
BootstrapZipBuilder.prototype.addLessCss = function(name){
    var addCSS = this;
    var content = this.mixins + this.variables  + this.readCSSLess(name);
    console.info('antes do parse:' + name)
    parser.parse(content, function (e, tree) {
        if (e) { return console.log(e) }
        try {
          var css = tree.toCSS({ compress: false })
          addCSS.add(name + '.css', new Buffer(css, "utf8")) 
          console.log('css file: ' + name + '.css' ) 
        } catch(e) {
          console.log(e)
        }
        
    });
}
BootstrapZipBuilder.prototype.addJavascript = function(name){
    var content = this.readJavascript(name)
    this.add( name + '.js', new Buffer(content, "utf8") )
}
BootstrapZipBuilder.prototype.setVariable = function(name, value){
        this.variables += ( name + ": " + value + ";\n" )
}
BootstrapZipBuilder.prototype.readJavascript = function(name){
    console.log('js file: ' + name);
    return fs.readFileSync( this.pathBootstrap + '/js/'+ name + '.js', 'utf-8' )
}
BootstrapZipBuilder.prototype.readCSSLess = function(name){
    return fs.readFileSync( this.pathBootstrap + '/lib/'+ name + '.less', 'utf-8' )
}

var parser = new(less.Parser)({
        paths: [resolvePath(__dirname + '/../../lib')]
})
