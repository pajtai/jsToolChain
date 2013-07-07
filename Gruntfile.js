/*global module:false*/
module.exports = function(grunt) {

    "use strict";

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        reveal: {

            livereload: {
                options: {
                    livereload: true,
                    //theme: "simple"
                }
            }
        },

        watch: {
            options: {
                // Start a live reload server on the default port: 35729
                livereload: true
            },
            jade: {
                options: {
                    // We have to keep the same context
                    nospawn: true
                },
                files: ['slides/*.jade'],
                tasks: ["reveal-createBuild", "reveal-deleteTemp"]
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['refresh']
            }
        },

        connect: {
            livereload : {
                options : {
                    port       : 9001,
                    hostname: 'localhost',
                    base       : './build'
                }
            }
        },

        open : {
            reload : {
                path : 'http://localhost:9001/'
            }
        }

    });

    grunt.registerTask("server", "Build and watch task", ["reveal:livereload", "connect", "open", "watch"]);
    grunt.registerTask("refresh", "Build and watch task", ["reveal:livereload", "open"]);
};
