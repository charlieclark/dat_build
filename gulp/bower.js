var gulp            = require('gulp');
var paths           = require("./paths");
var plugins         = require("./plugins");

var _ = plugins.underscore;

//bower install / update
gulp.task('bower_update', function(cb) {
	
	plugins.runSequence(
		'bower_build',
		'bower_clear',
		'bower_clean',
		cb
	);
});

//run bower
gulp.task('bower_build', function(cb) {

  	return plugins.bower()
});

//clean libs folder
gulp.task('bower_clear', function(cb) {
	
	plugins.del( paths.js.bower + "*.js", {
		force : true
	}, cb);
});  

//filter bower files and move
gulp.task('bower_clean', function(cb) {
	
	return gulp.src(plugins.mainBowerFiles())
		.pipe( plugins.filter('**/*.js') )
        .pipe( gulp.dest( paths.js.bower ) );
});

gulp.task('bower_bourbon', function(cb) {

	var bourbonPaths = {
		'bourbon' : "bourbon/app/assets/stylesheets/",
		'neat' : "neat/app/assets/stylesheets/",
		'base' : "bitters/app/assets/stylesheets/"
	}

	_.each( bourbonPaths, function( value, key ){

		var dest = paths.styles.sass + key;
		var src = paths.build.bower + value;
		var exists = plugins.fs.existsSync( dest );

		if(!exists){
			gulp.src( src + "**/*" )
				.pipe( gulp.dest( dest ) )
		}
	});
});