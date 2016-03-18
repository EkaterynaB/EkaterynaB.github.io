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
          dest: 'dist/css',
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
     },
     imagemin: {
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'img/',                   // Src matches are relative to this path
            src: ['*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'dist/img/'                  // Destination path prefix
          }]
        }
    },
    copy: {
      main: {
          expand: true,
          cwd: 'styles/core/font',
          src: '**',
          dest: 'dist/css/font',
          flatten: true,
          filter: 'isFile',
      },
    },
      });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ["concat", 'uglify', 'sass', "cssmin, imagemin, copy"]);
};
