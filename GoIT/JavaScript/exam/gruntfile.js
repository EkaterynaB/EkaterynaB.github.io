module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
    options: {
      separator: ';',
    },
      dist: {
        src: ['src/js/libs/jquery.min.js',
        'src/js/libs/*.js',
         'src/js/*.js'],
        dest: 'dist/js/js.min.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/js.min.js': ['dist/js/js.min.js']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.min.css'
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
          'dist/css/style.min.css': ['dist/css/style.min.css']
        }
      }
    },
    watch: {
         sass: {
           files: ['src/styles/*.scss'],
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
          files: [
              {
                  expand: true,
                  cwd: 'src/styles/core/font',
                  src: '**',
                  dest: 'dist/css/font',
                  flatten: true,
                  filter: 'isFile'
              },
              {
                  expand: true,
                  cwd: 'src/js/ie',
                  src: '**',
                  dest: 'dist/js/ie',
                  flatten: true,
                  filter: 'isFile'
              }
          ],
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
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
};
