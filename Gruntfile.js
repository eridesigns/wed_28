'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'assets/css/build/theme.min.css': [
            'assets/css/production/layout/theme.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/build/theme.min.js': [
            'assets/js/production/**/*.js'
          ]
        },
        options: {
          sourceMap: 'assets/js/build/app.min.js.map',
          sourceMappingURL: '/assets/js/build/app.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'assets/css/production/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'assets/js/production/**/*.js'
        ],
        tasks: ['uglify']
      },
      html: {
        files: [
          '*.html'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/build/app.min.css',
        'assets/js/build/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
