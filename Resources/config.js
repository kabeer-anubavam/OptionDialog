var config = new Object();
config.baseUrl = "http://184.106.219.43/webservices?";
config.platform = Titanium.Platform.osname;
config.actionbarHeight = '44dp';

//Constant varaibles
config.ANDROID = "android";

config.getImagePath = function(imagePath) {
	if (Titanium.Platform.osname == config.ANDROID)
		return "../images/" + imagePath;
	else if (Titanium.Platform.osname == config.IPHONE)
		return "images/" + imagePath;
};

config.getImagePathInner = function(imagePath) {
	if (Titanium.Platform.osname == config.ANDROID)
		return "images/" + imagePath;
	else if (Titanium.Platform.osname == config.IPHONE)
		return "images/" + imagePath;
};

module.exports = config;

