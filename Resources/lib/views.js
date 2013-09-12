var style = require('lib/style');
var config = require('config');
var icons = require('icons');

exports.getOptionDialog = function(args) {
	var opts = {
		selectedIndex : 0,
		options : args
	};

	var optDialog = Ti.UI.createOptionDialog(opts);

	return optDialog;
};
