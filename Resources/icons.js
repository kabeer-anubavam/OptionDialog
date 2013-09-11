var icons = new Object();
var config = require('config');

icons.navBarBG = config.getImagePath('navBg.png');
icons.bgImage = config.getImagePath('bg.png');
icons.loginButton = config.getImagePath('loginButton.png');
icons.checkBoxOn = config.getImagePath('checkBoxOn.png');
icons.checkBoxOff = config.getImagePath('checkBoxOff.png');
icons.inboxButton = config.getImagePath('inboxButton.png');
icons.logoutButton = config.getImagePath('logoutButton.png');
icons.backButton = config.getImagePath('back.png');

icons.leftArrow = config.getImagePath('leftArrow.png');
icons.rightArrow = config.getImagePath('rightArrow.png');
icons.submitButton = config.getImagePath('submitButton.png');
icons.calendarBg = config.getImagePath('calendarBg.png');

icons.saveButton = config.getImagePath('saveButton.png');
icons.cancelButton = config.getImagePath('cancelButton.png');
icons.refresh = config.getImagePath('refresh.png');

icons.tableRightArrow = config.getImagePath('tableRightArrow.png');
icons.rejectButton = config.getImagePath('rejectButton.png');
icons.acceptButton = config.getImagePath('acceptButton.png');

icons.dropDown = config.getImagePath("dropdowns.png");
icons.pdf = config.getImagePath('pdf.png');

icons.unreadMailBg = config.getImagePath('unreadMailBg.png');
icons.noInternet = config.getImagePath('noInternet.png');
icons.readMailBg = config.getImagePath('readBg.png');

module.exports = icons;
