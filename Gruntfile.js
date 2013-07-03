/*global module:false*/
module.exports = function(grunt) {

    "use strict";

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        reveal: {

            livereload: {
                slides:"test/slides.jade"
            }
        }
    });

    grunt.registerTask("server", "Build and watch task", ["reveal:livereload"]);
};
