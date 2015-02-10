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
        watch: {
            files: ['./css/style.scss'],
            tasks: ['sass', 'cssmin'],
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};
