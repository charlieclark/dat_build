var gulp 			= require('gulp');
var paths 			= require("./paths");
var plugins 		= require("./plugins");

//load vendor scripts from vendor_config
gulp.task('vendor_scripts', function() {
	
	//deleting cached version of module - kinda hacky 
	delete require.cache[ paths.js.vendor_config ];

	console.log( paths.js.vendor_config )

	
	var vendorScripts 	= require( paths.js.vendor_config );
	var desktopScripts 	= plugins.underscore.map( vendorScripts['desktop'], function( s ){ return paths.js.base + s } );

	console.log(desktopScripts);
	
	return gulp.src( desktopScripts )
		.pipe( plugins.concat( 'vendor.js' ) )
		.pipe( gulp.dest(  paths.js.compiled ) )
		.pipe( plugins.uglify() )
		.pipe( plugins.rename('vendor.min.js') )
		.pipe( gulp.dest( paths.js.min ) )
		.pipe( plugins.livereload() )
});