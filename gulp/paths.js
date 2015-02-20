var buildPath 	= global._root + "/";
var publicPath 	= buildPath + "../";
var assetPath 	= publicPath + "assets/";

var paths = {
	build : buildPath,
	public : publicPath,
	assets : assetPath,
	misc : {
		bower 			: buildPath + 'bower_components/',
		bowerJSON 		: buildPath + 'bower.json',
		index 			: publicPath + 'index.html'
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
		css 			: assetPath + "styles/css/",
	}
};

module.exports = paths;