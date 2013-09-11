var genericWindow = function(args) {
	args = args || {};
	var config = require('config');
	var icons = require('icons');
	var style = require('lib/style');

	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		navBarHidden : true,
		exitOnClose : (args.exit) ? true : false
	});

	if (config.platform == config.ANDROID) {
		win.orientationModes = [Titanium.UI.PORTRAIT];
	}

	var navBar = Titanium.UI.createView(style.winNavBarStyle);
	var headerTitle = Ti.UI.createLabel(style.headerLabelStyle);
	headerTitle.text = args.title;
	navBar.add(headerTitle);
	win.add(navBar);

	return win;
};

exports.genericWindow = genericWindow;
