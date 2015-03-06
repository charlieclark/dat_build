var buildPath 	= global._root + "/";
var publicPath 	= buildPath + "../public/";
var releasePath = buildPath + "../release/";
var destPath 	= global._release ? releasePath : publicPath;
var assetPath 	= destPath + "assets/";
var gulpPath 	= buildPath + "gulp/";


var paths = {

	buildPath 			: buildPath,
	publicPath			: publicPath,
	releasePath			: releasePath,
	destPath			: destPath,
	assetPath 			: assetPath,
	gulpPath 			: gulpPath,

	build : {
		bower 			: buildPath + 'bower_components/',
		bowerJSON 		: buildPath + 'bower.json',
		templates	 	: buildPath + "templates/",
	},

	public : {	
		templates 		: destPath + 'templates/',
		index 			: destPath + 'index.html'
	},

	js : {
		base 			: assetPath + "js/",
		user 			: assetPath + "js/user/",
		vendor_config 	: assetPath + "js/user/vendor_config.js",
		lib 			: assetPath + "js/lib/",
		bower 			: assetPath + "js/lib/bower",
		compiled 		: assetPath + "js/compiled/",
		min 			: assetPath + "js/min/"
	},

	styles : {
		icons 			: assetPath + "icons/*.svg",
		sass 			: assetPath + "styles/sass/",
		fonts 			: assetPath + "styles/fonts/",
		css 			: assetPath + "styles/css/"		
	},

	//misc
	noop : gulpPath + "other/noop.js"
};


module.exports = paths;