var buildPath 	= global._root + "/";
var publicPath 	= buildPath + "../";
var assetPath 	= publicPath + "assets/";
var gulpPath 	= buildPath + "gulp/";

var paths = {
	build 	: buildPath,
	public 	: publicPath,
	assets 	: assetPath,
	gulp 	: gulpPath,
	misc : {
		bower 			: buildPath + 'bower_components/',
		bowerJSON 		: buildPath + 'bower.json',
		templates	 	: buildPath + "templates/",
		index 			: publicPath + 'index.html',
		icons 			: assetPath + "icons/*.svg",
		noop			: gulpPath + "noop.js"
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
		sass 			: assetPath + "styles/sass/",
		fonts 			: assetPath + "styles/fonts/",
		css 			: assetPath + "styles/css/"		
	}
};

module.exports = paths;