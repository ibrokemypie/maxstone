module.exports = function(grunt) {

  grunt.initConfig({
	uglify: {
    	my_target: {
        	files: { 'dist/vendor.min.js': require('wiredep')().js
		}   }   },
	cssmin: {
		 minify: {
		 	options: {
		 		'inline': ['all'],
		 		'processImport': true,
		 		'rebase': true
		 	},
        	files: { 'dist/vendor.min.css': ['**/*.css', '!**/*.min.css']
		}   }   },
	svgmin: {
			dist: {
				files: [{
					src: 'src/header.svg',
					dest: 'dist/header.min.svg'
				}]

		}
	},
  });

grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-wiredep');
grunt.registerTask('default', ['cssmin', 'uglify', 'svgmin']);
};