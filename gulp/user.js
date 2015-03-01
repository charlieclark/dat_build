var gulp 			= require('gulp');
var paths 			= require("./paths");
var plugins 		= require("./plugins");

gulp.task('user_scripts_min', ['browserify_nowatch'], function() {

	return gulp.src( paths.js.compiled + 'bundle.js' )
		.pipe( plugins.uglify() )
		.pipe( plugins.rename('bundle.min.js') )
		.pipe( gulp.dest( paths.js.min ) )
});

gulp.task('browserify_watch', function(){
  
  browserifyWrap(true);
});

gulp.task('browserify_nowatch', function(){
  
  browserifyWrap(false);
});

function browserifyWrap( watch ){

	var b = plugins.browserify(paths.js.user + 'app.js', {
		 debug : true,
		 paths: [ paths.js.user ]
	});

	if(watch){
		b = plugins.watchify(b);
		b.on('update', function(){

			bundle(b);
		});
	}

	bundle(b);
};

function bundle(b){

	b.bundle()
		.on('error', function(err){
			gulp.src( paths.misc.noop )
				.pipe( plugins.notify("your JS broke idiot" + err) );
	    })
		.pipe( plugins.source('bundle.js') )
		.pipe( gulp.dest( paths.js.compiled ) )
		.pipe( plugins.livereload() );
};