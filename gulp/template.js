var gulp            = require('gulp');
var paths           = require("./paths");
var plugins         = require("./plugins");
var config         	= require("./config");

gulp.task('template', ['build_template'], function() {

	var sources = gulp.src( [
		paths.js.compiled + "vendor.js",
		paths.js.compiled + "bundle.js",
		paths.styles.css + "**/*" 
	], { read: false } );
	
	return gulp.src( paths.public.templates + "**.html" )
		.pipe( plugins.consolidate('underscore', config) )
		.pipe( gulp.dest( paths.destPath ) )
		.pipe( plugins.inject(sources, { relative: true }) )
		.pipe( plugins.injectStr.prepend( config.templateMessage ))
	    .pipe( gulp.dest( paths.destPath ) )
	    .pipe( plugins.livereload() );
});


gulp.task('build_template', function() { 

	var exists = plugins.fs.existsSync( paths.public.templates );

	if( !exists ){
		return gulp.src( paths.build.templates + "html/**.html" )
			.pipe( gulp.dest( paths.public.templates ) )
	} 

	return false;
});