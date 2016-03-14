module.exports = function(grunt) {

  // Project configuration.

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'dist/main.js': 'js/js.js'
            }
        }
    },
    watch: {
        babel: {
            files: ['js/*.js'],
            tasks: ['babel'],
            options: {
              spawn: false,
            },
        },
    }
});

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['babel', 'watch']);

};
