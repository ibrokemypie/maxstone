module.exports = function(grunt) {

  grunt.initConfig({
	uglify: {
    	my_target: {
        	files: { 'dist/vendor.js': require('wiredep')().js
		}   }   },
	cssmin: {
		 minify: {
        	files: { 'dist/vendor.css': ['src/*.css']
		}   }   },
  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-wiredep');
grunt.registerTask('default', ['cssmin', 'uglify']);
};