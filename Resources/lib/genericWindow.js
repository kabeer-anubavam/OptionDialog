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

	if (args.back) {
		var leftNavView = Ti.UI.createView(style.leftNavButton);
		navBar.add(leftNavView);

		var backButton = Ti.UI.createImageView({
			image : icons.backButton
		});
		leftNavView.add(backButton);

		leftNavView.addEventListener('click', function(e) {
			win.close();
		});
	}

	return win;
};

exports.genericWindow = genericWindow;
