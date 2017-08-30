module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      browserify: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        options: {
          // 'es2015'はES2015→ES5への変換、'react'はjsxのコンパイル
          transform: [['babelify', { presets: ['es2015'] }]]
        },
        src: ['src/app.js'],
        dest: 'dist/app.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};

