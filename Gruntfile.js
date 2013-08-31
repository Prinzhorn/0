module.exports = function(grunt) {
	//Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json') ,
		jshint: {
			options: {
				smarttabs: false,
				curly: true,
				immed: true,
				latedef: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				globals: {
					window: true,
					document: true
				}
			},
			all: ['0.js']
		},
		uglify: {
			options: {
				banner: '/*! 0 lightbox <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) https://github.com/Prinzhorn/0 | Free to use under terms of MIT license */\n'
			},

			all: {
				files: {
					'0.min.js': '0.js'
				}
			}
		}
	});

	//Dependencies.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Tasks.
	grunt.registerTask('default', ['jshint', 'uglify']);
	grunt.registerTask('travis', ['jshint']);
};