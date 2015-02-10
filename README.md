# alstart
Choucroute, knacks, et picon bière

## Features :
- HTML5 Boilerplate .htaccess file
- Bower
- Gruntfile for Sass / Less building & minify
- Knacss
- Basic Schnapsit index.html

## Building :
- npm install
- bower update
- grunt / grunt watch

**If you want to use Less instead of default Sass version, just change:**
`grunt.registerTask('default', ['sass', 'cssmin', 'watch']);`
to
`grunt.registerTask('default', ['less', 'cssmin', 'watch']);`
in Gruntfile.js

## Crédits :

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore
