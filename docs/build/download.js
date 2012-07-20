var http = require('http'),
    fs = require("fs"),
    zip = require("node-zip"),
    less = require("less"),
    util = require("util"),
    qs = require('querystring'),
    resolvePath = require('path').resolve

http.createServer(function (req, res) {
    res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Cache-Control': 'no-cache',
            'Content-Disposition': 'attachment; filename=bootstrap.zip'
    })
   var data = ''
   req.on("data", function(chunk) {
        data += chunk
    })
    req.on("end", function() {
        var post = qs.parse(data)
        var archive = new BootstrapZipBuilder()
        for (var filename in archive.files) {
          archive.remove(filename)
        }
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
          archive.folder('css')
          archive.generateSingleCSS()
        }
        
        if(post.js) {
          post.js = (post.js.constructor == Array ? post.js : [post.js])
          for(var i=0; i<post.js.length; i++) {
              archive.addJavascript(post.js[i])
          }
          archive.folder('js')
        }
        
        var zipfile = archive.generate({base64:true,compression:'STORE'})
        res.write(new Buffer(zipfile, 'base64'))
        archive.remove('js')
        archive.remove('css')
        res.end()
    })

}).listen(1337, '0.0.0.0')
console.log('Server running...')

BootstrapZipBuilder = function(){
    this.pathBootstrap = resolvePath(__dirname + '/../../')
    this.variables = fs.readFileSync(this.pathBootstrap + '/lib/variables.less', 'utf-8')
    this.mixins = fs.readFileSync(this.pathBootstrap + '/lib/mixins.less', 'utf-8')
    this.cssContent = this.variables + this.mixins
}
BootstrapZipBuilder.prototype = new JSZip()
BootstrapZipBuilder.prototype.addLessCss = function(name){
    var self = this
    this.cssContent += this.readCSSLess(name)
    parser.parse(this.variables + this.mixins + this.readCSSLess(name), function (e, tree) {
      if (e) { return console.log(e) }
      try {
        var css = tree.toCSS({ compress: false })
        self.file('css/' + name  + '.css', css)
        console.log(name + ' generated')
      } catch(e) {
        console.log(e)
      }
    })
}
BootstrapZipBuilder.prototype.generateSingleCSS = function() {
  var self = this
  parser.parse(this.cssContent, function (e, tree) {
      if (e) { return console.log(e) }
      try {
        var css = tree.toCSS({ compress: false })
        self.file('bootstrap.css', css)
        console.log('bootstrap.css generated')

        css = tree.toCSS({ compress: true })
        self.file('bootstrap.min.css', css)
        console.log('bootstrap.min.css generated')
      } catch(e) {
        console.log(e)
      }
  })
}
BootstrapZipBuilder.prototype.addJavascript = function(name){
    var content = this.readJavascript(name)
    this.file('js/'+ name + '.js', content)
}
BootstrapZipBuilder.prototype.setVariable = function(name, value){
        this.variables += ( name + ": " + value + ";\n" )
}
BootstrapZipBuilder.prototype.readJavascript = function(name){
    console.log('js file: ' + name + '.js')
    return fs.readFileSync(this.pathBootstrap + '/js/'+ name + '.js', 'utf-8')
}
BootstrapZipBuilder.prototype.readCSSLess = function(name){
    return fs.readFileSync(this.pathBootstrap + '/lib/'+ name + '.less', 'utf-8')
}

var parser = new(less.Parser)({
        paths: [resolvePath(__dirname + '/../../lib')]
})
