module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine_nodejs: {
      options: {
        specNameSuffix: "_spec.js", // also accepts an array
        helperNameSuffix: "_helper.js",
        useHelpers: false,
        stopOnFailure: false,
        // configure one or more built-in reporters
        reporters: {
          console: {
            colors: true,
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|3|(4|true)
            listStyle: "indent", // "flat"|"indent"
            activity: false
          }
        }
      },
      all_specs: {
        // target specific options
        options: {
          useHelpers: true
        },
        // spec files
        specs: [
          "spec/**"
        ],
        helpers: [
          "test/helpers/**"
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
  grunt.registerTask('default', 'jasmine_nodejs');
};
