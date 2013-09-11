var platform = Ti.Platform.osname;
var interval;
exports.indicator = new function () {
    this.indWin = null;
    this.actInd = null;
    this.showCount = 0;

    this.hideActivityIndicator = function () {
     

        if (this.showCount > 0) {
            this.showCount--;
        }
        if (this.showCount == 0) {
            this.actInd.hide();
            this.actInd = null;
            if (platform == 'iphone') {
                this.indWin.close({
                    opacity: 0,
                    duration: 500
                });
                this.indWin = null;
            }
        }
    };

    this.showActivityIndicator = function () {
        if (this.showCount == 0) {
            
            if (platform == 'iphone') {
                this.indWin = Titanium.UI.createWindow({
                    navBarHidden: true,
                    height: Ti.Platform.displayCaps.platformHeight,
                    width: Ti.Platform.displayCaps.platformWidth
                });
                var wrappr = Titanium.UI.createView({
                    height: Ti.Platform.displayCaps.platformHeight,
                    width: Ti.Platform.displayCaps.platformWidth,
                    backgroundColor: '#000',
                    opacity: 0.6
                });
                this.indWin.add(wrappr);
                var indView = Titanium.UI.createView({
                    height: "200",
                    width: "200",
                    backgroundColor: '#000',
                    borderRadius: '15',
                    opacity: 0.8
                });
                this.indWin.add(indView);
                this.actInd = Ti.UI.createActivityIndicator({
                    font: {
                        fontFamily: 'Helvetica Neue',
                        fontSize: 26,
                        fontWeight: 'bold'
                    },
                    style: (Ti.Platform.name === 'iPhone OS' ? Titanium.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG_DARK),
                    height: Ti.UI.SIZE,
                    width: Ti.UI.SIZE
                });
                this.indWin.add(this.actInd);
                var message = Titanium.UI.createLabel({
                    text: "Loading...",
                    color: '#fff',
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    font: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    },
                    bottom: "40"
                });
                indView.add(message);
            } else {
                this.actInd = Ti.UI.Android.createProgressIndicator({
                    message: "Loading...",
                    location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG, // display in dialog
                    type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT // display a spinner
                });

            }
            if (platform == 'iphone') {
                this.indWin.open();
            }
            this.actInd.show();

        }
        this.showCount++;
    };
};