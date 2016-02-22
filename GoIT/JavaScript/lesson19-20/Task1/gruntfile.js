module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/js.js'],
        dest: 'dist/js.min.js'
      },
      css: {
        src: ['styles/*.css'],
        dest: 'dist/css.min.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js.min.js': ['dist/js.min.js']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css.min.css': ['dist/css.min.css']
        }
      }
    },
    watch: {
     sass: {
       files: ['styles/*.scss'],
       tasks: ['sass'],
     }
   }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ["concat", 'uglify', 'sass', "cssmin"]);
};
