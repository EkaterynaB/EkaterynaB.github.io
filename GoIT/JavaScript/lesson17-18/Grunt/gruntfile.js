module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'dist/js.min.js'
      },
      css: {
        src: ['css/*.css'],
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
      css: {
        files: ['css/*.css'],
        tasks: ['concat','cssmin']
      },
      js: {
        files: ['js/*.js'],
        tasks: ['concat','uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};
