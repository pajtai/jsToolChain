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
                    //theme: "simple"
                }
            }
        },

        watch: {
            options: {
                // Start a live reload server on the default port: 35729
                livereload: true,
                // We have to keep the same context
                nospawn: true
            },
            jade: {
                files: ['slides/*.jade', 'Gruntfile.js'],
                tasks: ["reveal-createBuild", "reveal-deleteTemp"]
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
};
