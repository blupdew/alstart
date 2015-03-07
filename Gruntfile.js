module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './assets/css/style.css': './assets/css/style.scss'
            }
          }
        },
        less: {
          files: {
            './assets/css/style.css': './assets/css/style.less'
            }
          },
        cssmin: {
            minify: {
                expand: true,
                cwd: './assets/css/',
                src: ['style.css'],
                dest: './assets/css/',
                ext: '.min.css'
            }
        },
        concat: {
            jsfiles: {
                src: './assets/js/*.js',
                dest: './assets/js/prod.js'
            }
        },
        uglify: {
            jsfiles: {
                src: './assets/js/prod.js',
                dest: './assets/js/prod.min.js'
            }
        },
        watch: {
            files: ['./assets/css/style.scss'],
            tasks: ['sass', 'cssmin'],
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Uncomment to go the LESS way, and remove grunt-sass line
    /*
    grunt.loadNpmTasks('grunt-contrib-less');
    */

    //Uncomment to activate concat & uglify jsfiles
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    */

    // LESS ALTERNATIVE
    /*
    grunt.registerTask('default', ['less', 'cssmin', 'watch']);
    */

    // Build Sass, concat & uglify Js ALTERNATIVE
    /*
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'watch']);
    */

    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);


};
