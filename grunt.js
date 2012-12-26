module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-dox');

  // ==========================================================================
  // Project configuration
  // ==========================================================================

  grunt.initConfig({

    dox: {
      files: {
        src: 'components/aura-express/lib/**/*.js',
        dest: 'docs'
      }
    },

    server: {
      port: 8899,
      base: './'
    },

    lint: {
      files: ['components/aura-express/**/*.js']
    },

    watch: {
      files: ['<config:lint.files>'],
      tasks: ['lint']
    }
  });

  // default build task
  grunt.registerTask('default', 'server watch');

};
