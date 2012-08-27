#!/usr/bin/env node
var hogan = require('hogan.js')
var fs    = require('fs')
var cjson = require('cjson') , prod  = process.argv[2] == 'production', title = 'Globo.com Bootstrap'
var langchoose = process.argv[3] || "pt-br"
var count = 0

red   = '\033[31m';
blue  = '\033[34m';
reset = '\033[0m';

var language = cjson.load(__dirname + '/languages/'+langchoose+'.json')
var pages = fs.readdirSync(__dirname + '/../templates/pages')
var template = fs.readFileSync(__dirname + '/../templates/layout.mustache', 'utf-8'),
strings = [],
words = [],
unused = []

context = {
     name: "Layout",
     title: title,
     _i: function (k) { 
       if (language[context.name][k]) {
        return language[context.name][k]  
       } else {
         if(strings.indexOf(k) == -1) {
          console.log(blue + 'Missing translation in Layout for: ' + red + k + reset)
          count++
         }
         strings.push(k)
         return k
       } 
     }  
  }
template = hogan.compile(template,{sectionTags: [{o: '_i', c: 'i'}]})
var translated_keys = {}
var keys = {}

pages.forEach(function(name){
  
  var nicename = name
    .replace(/\.mustache/, '')
    .replace(/\-.*/, '')
    .replace(/(.)/, function ($1) { return $1.toUpperCase() })
  var page = fs.readFileSync(__dirname  + '/../templates/pages/' + name, 'utf-8')
    , page_context = {}
  page_context[name.replace(/\.mustache$/, '')] = 'active'
  page_context.production = prod
  page_context.title = nicename,
  page_context.name = nicename,
  page_context._i = function (k) { 
      words.push(k)
      if(language['Pages']) {
        if (language['Pages'][k]) {
          return language['Pages'][k]  
        } else {
          if(strings.indexOf(k) == -1) {
            console.log(blue + 'Missing translation in page '+ nicename +' for: ' + red + k + reset)
            count++
            translated_keys['Pages'] = {}
            keys[k] = ""
            translated_keys['Pages'] = keys
          } 
          strings.push(k)
          return k
        }
      } else {
        console.log(red + "missing key for "+ name +": " + k + reset);
      }
   } 
  if (page_context.title == 'Index') {
    page_context.title = title
  } else {
    page_context.title += ' · ' + title
  }
  page = hogan.compile(page, { sectionTags: [{o:'_i', c:'i'}] })
  page = page.render(page_context)
  full_page = template.render(context, {
    body: page,
  })
  fs.writeFileSync(__dirname + '/../' + name.replace(/mustache$/, 'html'), full_page, 'utf-8')
})
fs.writeFileSync(__dirname + '/languages/template.json', JSON.stringify(translated_keys), 'utf-8')
console.log(blue + "The json from missing translation files(insert the keys at language file located at docs/build/languages): \n" + reset + JSON.stringify(translated_keys))
console.log(red + "There's  "+ count +" words for translate")
/*for(pages in language['Pages']) {
  if(words.indexOf(pages)==-1) {
     unused.push(pages)   
  }
}
console.log(red + 'unused keys: \n' + reset + unused.join(red + '\n ') + reset)*/
