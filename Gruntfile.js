module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './css/style.css': './css/style.scss'
            }
          }
        },
        less: {
          files: {
            './css/style.css': './css/style.less'
            }
          },
        cssmin: {
            minify: {
                expand: true,
                cwd: './css/',
                src: ['style.css'],
                dest: './css/',
                ext: '.min.css'
            }
        },
        concat: {
            jsfiles: {
                src: './js/*.js',
                dest: './js/prod.js'
            }
        },
        uglify: {
            jsfiles: {
                src: './js/prod.js',
                dest: './js/prod.min.js'
            }
        },
        watch: {
            files: ['./css/style.scss'],
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
