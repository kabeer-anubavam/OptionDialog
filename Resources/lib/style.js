var config = require('config');
var icons = require('icons');

var style = {
	winNavBarStyle : {
		left : '0dp',
		top : '0dp',
		height : config.actionbarHeight,
		width : Ti.UI.FILL,
		backgroundImage : icons.navBarBG,
	},
	mainView : {
		backgroundImage : icons.bgImage,
		height : Ti.UI.FILL,
		top : '48dp',
		layout : 'vertical'
	},
	headerLabelStyle : {
		font : {
			fontFamily : "Arial",
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		color : '#FFFFFF',
		width : '230dp',
		height : '30dp',
		wordWrap : false,
		ellipsize : true,
		textAlign : 'center'
	},
	titleLabelStyle : {
		top : '15dp',
		font : {
			fontFamily : "Arial",
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		color : '#000000',
		width : '230dp',
		height : '30dp',
		wordWrap : false,
		ellipsize : true,
		textAlign : 'center'
	},
	addEventTextLabel : {
		width : "41%",
		left : '0dp',
		color : '#2d2d2d',
		returnKeyType : Titanium.UI.RETURNKEY_NEXT,
		font : {
			fontFamily : "Arial",
			fontWeight : 'normal',
			fontSize : '15dp'
		}
	},
	addEventDropDown : {
		width : '53%',
		height : '35dp',
		left : '5%',
		backgroundImage : icons.dropDown
	},

	addEventDropDownLabel : {
		width : '80%',
		left : '5%',
		color : '#2d2d2d',
		font : {
			fontFamily : "Arial",
			fontWeight : 'normal',
			fontSize : '14dp'
		}
	},
	addEventTextBox : {
		width : '54%',
		height : '35dp',
		paddingLeft : 6,
		color : '#2d2d2d',
		backgroundColor : '#FFE5E6',
		left : '5%',
		font : {
			fontFamily : "Arial",
			fontWeight : 'normal',
			fontSize : '14dp'
		}
	},
	addEventValidationLabel : {
		width : '54%',
		height : Ti.UI.SIZE,
		textAlign : 'left',
		color : 'red',
		left : '45%',
		font : {
			fontFamily : "Arial",
			fontWeight : 'normal',
			fontSize : '10dp'
		}
	},
	addEventTextArea : {
		width : '54%',
		height : '55dp',
		paddingLeft : 6,
		backgroundColor : '#FFE5E6',
		left : '5%',
		font : {
			fontFamily : "Arial",
			fontWeight : 'normal',
			fontSize : '14dp'
		}
	},
	verticalView : {
		layout : 'vertical',
		width : "90%",
		height : Ti.UI.SIZE
	},
	horView : {
		top : '7dp',
		height : Ti.UI.SIZE,
		layout : 'horizontal'
	},

	horizontalView : {
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'horizontal'
	}
};

module.exports = style;
