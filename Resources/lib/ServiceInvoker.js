/**
 * Module to invoke backend web service
 */
var config = require('config');
exports.sendPostRequest = function(_args, _url) {
	if (Titanium.Network.online) {
		sendRequest("POST", _args, _url);
	} else {
		require('lib/indicator').indicator.hideActivityIndicator();
		config.noInternetAlert();
	}
};

exports.sendGetRequest = function(_args, _url) {
	if (Titanium.Network.online) {
		Ti.API.info('_url =====>  ' + _url);
		sendRequest("GET", _args, _url);
	} else {
		require('lib/indicator').indicator.hideActivityIndicator();
		config.noInternetAlert();
	}
};

function sendRequest(_requestType, _args, _url) {
	var xhr = Titanium.Network.createHTTPClient({
		onload : function() {
			_args.callback(this.responseText);
		},
		onerror : function() {
			_args.errorCallBack(this.responseText);
		},
		timeout : 30000
	});

	xhr.open(_requestType, _url);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	if (_requestType == 'GET') {
		xhr.send();
	} else {
		Ti.API.info("Sending URL :" + _url);
		Ti.API.info("Sending request :" + _url + " with data: " + JSON.stringify(_args.data));
		xhr.send({
			data : JSON.stringify(_args.data)
		});
	}
}