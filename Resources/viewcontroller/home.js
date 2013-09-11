function viewController(args) {
	var config = require('config');
	var icons = require('icons');
	var ServiceInvoker = require('lib/ServiceInvoker');
	var style = require('lib/style');
	var streetSelectedID, streetPickerView, areaSelectedID, areaPickerView;

	var win = require('lib/genericWindow').genericWindow({
		title : "Registration of Complaint",
		exit : true
	});

	var mainView = Ti.UI.createScrollView(style.mainView);
	win.add(mainView);

	var loginHolder = Ti.UI.createView(style.verticalView);
	mainView.add(loginHolder);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var areaHolderView = Ti.UI.createView(style.horView);
	loginHolder.add(areaHolderView);

	var areaLabel = Ti.UI.createLabel(style.addEventTextLabel);
	areaLabel.text = 'Area :';
	areaHolderView.add(areaLabel);

	var areaDropDownView = Ti.UI.createView(style.addEventDropDown);

	var areaTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	areaTextBox.text = "Select";
	areaDropDownView.add(areaTextBox);

	var areaObj = [{
		title : "Select",
		id : 0
	}, {
		title : "7H BUS STAND",
		id : "19140"
	}, {
		title : "A.N.W.EXTN",
		id : "19175"
	}, {
		title : "ADAMBAKKAM",
		id : "19220"
	}, {
		title : "AJAX",
		id : "19173"
	}, {
		title : "ALAGAPPA NAGAR 2ND ST",
		id : "43853"
	}, {
		title : "ALANDUR",
		id : "19202"
	}, {
		title : "AMBATTUR",
		id : "19158"
	}, {
		title : "AMBATTUR IND ESTATE",
		id : "19130"
	}, {
		title : "AMBATTUR O.T",
		id : "19119"
	}, {
		title : "AMBATTUR SIDCO ESTATE",
		id : "19122"
	}, {
		title : "ANNA NAGAR",
		id : "19139"
	}, {
		title : "ANNA NAGAR EXTN",
		id : "19167"
	}, {
		title : "ASSISI NAGAR 9TH ST",
		id : "19109"
	}, {
		title : "ATHIPATTU",
		id : "19138"
	}, {
		title : "Abiramapuram",
		id : "188"
	}, {
		title : "Adampakkam",
		id : "250"
	}, {
		title : "Adayar",
		id : "280"
	}, {
		title : "Adyar",
		id : "174"
	}, {
		title : "Alwarpet",
		id : "276"
	}, {
		title : "Ambattur",
		id : "43858"
	}, {
		title : "Ambattur Estate",
		id : "43855"
	}, {
		title : "Aminjikarai",
		id : "241"
	}, {
		title : "Anna Nagar",
		id : "198"
	}, {
		title : "Anna Nagar East",
		id : "258"
	}, {
		title : "Anna Nagar West",
		id : "195"
	}, {
		title : "Anna Nagar West Extn.",
		id : "272"
	}, {
		title : "Anna Nagar West Extn.,",
		id : "43856"
	}, {
		title : "Anna Nagar(Zone 7)",
		id : "46597"
	}, {
		title : "Anna Salai",
		id : "223"
	}, {
		title : "Annai Indra Nagar",
		id : "19150"
	}, {
		title : "Arumbakkam",
		id : "273"
	}, {
		title : "Ashok Nagar",
		id : "201"
	}, {
		title : "Athipet",
		id : "43840"
	}, {
		title : "Ayanavaram",
		id : "209"
	}, {
		title : "BANU NAGAR",
		id : "19182"
	}, {
		title : "Basin Bridge",
		id : "224"
	}, {
		title : "Besant Nagar",
		id : "228"
	}, {
		title : "Broadway",
		id : "225"
	}, {
		title : "C.I.T. Nagar",
		id : "18835"
	}, {
		title : "CHINNA NEELANGARAI",
		id : "43861"
	}, {
		title : "CHOLAPURAM",
		id : "19172"
	}, {
		title : "Central",
		id : "249"
	}, {
		title : "Chepauk",
		id : "237"
	}, {
		title : "Chetpet",
		id : "257"
	}, {
		title : "Chindatripet",
		id : "190"
	}, {
		title : "Chinnasekkadu",
		id : "19147"
	}, {
		title : "Choolai",
		id : "176"
	}, {
		title : "Choolaimedu",
		id : "181"
	}, {
		title : "DUNLOP GROUND",
		id : "19166"
	}, {
		title : "EDYANCHAVADI",
		id : "19133"
	}, {
		title : "ENNORE",
		id : "19151"
	}, {
		title : "ERNAVOOR",
		id : "19155"
	}, {
		title : "Edapalayam",
		id : "179"
	}, {
		title : "Egmore",
		id : "264"
	}, {
		title : "Ekkattuthangal",
		id : "171"
	}, {
		title : "Elephant Gate",
		id : "173"
	}, {
		title : "Erukkencherry",
		id : "206"
	}, {
		title : "GANESH NAGAR 8TH ST",
		id : "43842"
	}, {
		title : "GANGAI NAGAR",
		id : "19135"
	}, {
		title : "Gandhi Nagar",
		id : "187"
	}, {
		title : "Gandhi Salai",
		id : "18362"
	}, {
		title : "George Town",
		id : "238"
	}, {
		title : "Gopalapuram",
		id : "244"
	}, {
		title : "Guindy",
		id : "261"
	}, {
		title : "INJAMBAKKAM",
		id : "19187"
	}, {
		title : "Ice House",
		id : "275"
	}, {
		title : "Indira Nagar",
		id : "18522"
	}, {
		title : "JALADIANPET",
		id : "19211"
	}, {
		title : "Jafferkhanpet",
		id : "202"
	}, {
		title : "Jaladianpet",
		id : "19192"
	}, {
		title : "Jamaliya",
		id : "267"
	}, {
		title : "K.K.Nagar",
		id : "260"
	}, {
		title : "KADAPAKKAM",
		id : "19156"
	}, {
		title : "KALADIPET",
		id : "19178"
	}, {
		title : "KALLIKUPPAM",
		id : "19108"
	}, {
		title : "KAMARAJAPURAM",
		id : "19136"
	}, {
		title : "KARAMBAKKAM",
		id : "19208"
	}, {
		title : "KARAPAKKAM",
		id : "19206"
	}, {
		title : "KATHIRVEDU",
		id : "19121"
	}, {
		title : "KATHIVAKKAM",
		id : "19165"
	}, {
		title : "KAVANKARAI",
		id : "19160"
	}, {
		title : "KK THAZHAI - MADHAVARAM",
		id : "19164"
	}, {
		title : "KORATTUR",
		id : "19127"
	}, {
		title : "KOTTIVAKKAM",
		id : "43848"
	}, {
		title : "KRISHNAPURAM",
		id : "19159"
	}, {
		title : "Kallikuppam",
		id : "43862"
	}, {
		title : "Karambakkam",
		id : "46598"
	}, {
		title : "Kidambakkam",
		id : "232"
	}, {
		title : "Kilpauk",
		id : "271"
	}, {
		title : "Kodambakkam",
		id : "277"
	}, {
		title : "Kodungaiyur",
		id : "234"
	}, {
		title : "Kolathur",
		id : "180"
	}, {
		title : "Komaleeswaranpet",
		id : "177"
	}, {
		title : "Kondithoppu",
		id : "191"
	}, {
		title : "Korattur",
		id : "43845"
	}, {
		title : "Korukkupet",
		id : "208"
	}, {
		title : "Korukupet",
		id : "231"
	}, {
		title : "Kosapet",
		id : "207"
	}, {
		title : "Kottivakkam",
		id : "19198"
	}, {
		title : "Kottur",
		id : "172"
	}, {
		title : "Kotturpuram",
		id : "186"
	}, {
		title : "Koyambedu",
		id : "197"
	}, {
		title : "Kunnur",
		id : "194"
	}, {
		title : "LAKSHMIPURAM - MADHAVARAM",
		id : "19125"
	}, {
		title : "LENIN NAGAR",
		id : "19148"
	}, {
		title : "M.M.D.A.Colony",
		id : "242"
	}, {
		title : "M.T.H.ROAD",
		id : "19174"
	}, {
		title : "MADHAVARAM",
		id : "19117"
	}, {
		title : "MADHAVARAM MILK COLONY",
		id : "19184"
	}, {
		title : "MADHAVARAM Milk Colony",
		id : "19163"
	}, {
		title : "MADIPAKKAM",
		id : "43846"
	}, {
		title : "MADURA METU PALAYAM -MADHAVARAM",
		id : "19161"
	}, {
		title : "MADURAVOYAL",
		id : "19188"
	}, {
		title : "MAHATHMA GANDHI NAGAR",
		id : "43837"
	}, {
		title : "MANALI",
		id : "19105"
	}, {
		title : "MANAPAKKAM",
		id : "19204"
	}, {
		title : "MANGALAPURAM",
		id : "19129"
	}, {
		title : "MANNURPET",
		id : "19152"
	}, {
		title : "MATHUR",
		id : "19145"
	}, {
		title : "MEENAMPAKKAM",
		id : "19186"
	}, {
		title : "MENAMBEDU",
		id : "19157"
	}, {
		title : "MOOLACHATHIRAM - MADHAVARAM",
		id : "19110"
	}, {
		title : "MUGALIVAKKAM",
		id : "19195"
	}, {
		title : "MUGAPAIR WEST",
		id : "19115"
	}, {
		title : "MUGAPPAIR",
		id : "19176"
	}, {
		title : "MUGAPPAIR EAST",
		id : "19124"
	}, {
		title : "MUGAPPAIR WEST",
		id : "19114"
	}, {
		title : "Madipakkam",
		id : "19196"
	}, {
		title : "Mandavelipakkam",
		id : "279"
	}, {
		title : "Mettupalayam",
		id : "170"
	}, {
		title : "Mint",
		id : "205"
	}, {
		title : "Mogappair",
		id : "43863"
	}, {
		title : "Mylapore",
		id : "266"
	}, {
		title : "NANDAMBAKKAM",
		id : "19205"
	}, {
		title : "NANDAMPAKKAM",
		id : "19194"
	}, {
		title : "NANGANALLUR",
		id : "19193"
	}, {
		title : "NEAR 4TH MAIN RD",
		id : "19126"
	}, {
		title : "NEAR HINDU COLONY",
		id : "19207"
	}, {
		title : "NEAR MAIN ROAD",
		id : "19171"
	}, {
		title : "NEELANGARAI",
		id : "19210"
	}, {
		title : "NEELANGARI",
		id : "43843"
	}, {
		title : "NEELANKARAI",
		id : "43844"
	}, {
		title : "NERKUNDRAM",
		id : "19201"
	}, {
		title : "NERKUNRAM",
		id : "19219"
	}, {
		title : "NOLAMBUR",
		id : "19200"
	}, {
		title : "Nammalwarpet",
		id : "255"
	}, {
		title : "Nandanam",
		id : "214"
	}, {
		title : "Nerkundram",
		id : "46596"
	}, {
		title : "Nesapakkam",
		id : "227"
	}, {
		title : "New Washermen Pet",
		id : "251"
	}, {
		title : "Nungambakkam",
		id : "213"
	}, {
		title : "OLD AMBATTUR",
		id : "19177"
	}, {
		title : "ORAGADAM",
		id : "19169"
	}, {
		title : "Old Washermenpet",
		id : "265"
	}, {
		title : "Old Washermenpt",
		id : "233"
	}, {
		title : "Oragadam",
		id : "43838"
	}, {
		title : "Otteri",
		id : "268"
	}, {
		title : "PADI",
		id : "19112"
	}, {
		title : "PADI KUPPAM ROAD",
		id : "19153"
	}, {
		title : "PALAVAKKAM",
		id : "43847"
	}, {
		title : "PALAVANTHANGAL",
		id : "19191"
	}, {
		title : "PALAVANTHANGAL NANGANALLUR",
		id : "19189"
	}, {
		title : "PALLIKARANAI",
		id : "43859"
	}, {
		title : "PATTARAVAKKAM",
		id : "19180"
	}, {
		title : "PERUNGUDI",
		id : "43857"
	}, {
		title : "PONNIAMMANMEDU-MADHAVARAM",
		id : "19146"
	}, {
		title : "PORUR",
		id : "19190"
	}, {
		title : "PUDUR",
		id : "19181"
	}, {
		title : "PUZHAL",
		id : "19120"
	}, {
		title : "PUZHUTHIVAKKAM",
		id : "43849"
	}, {
		title : "Padi",
		id : "43852"
	}, {
		title : "Palavakkam",
		id : "19221"
	}, {
		title : "Pallikaranai",
		id : "19218"
	}, {
		title : "Park Town",
		id : "269"
	}, {
		title : "Parrys",
		id : "204"
	}, {
		title : "Patalam",
		id : "175"
	}, {
		title : "Pattalam",
		id : "270"
	}, {
		title : "Perambur",
		id : "220"
	}, {
		title : "Peravallur",
		id : "253"
	}, {
		title : "Periamet",
		id : "178"
	}, {
		title : "Permbur",
		id : "229"
	}, {
		title : "Perumalpet",
		id : "182"
	}, {
		title : "Perungudi",
		id : "19213"
	}, {
		title : "Pudupet",
		id : "199"
	}, {
		title : "Pudur",
		id : "43836"
	}, {
		title : "Pulianthope",
		id : "189"
	}, {
		title : "Purasaiwakkam",
		id : "193"
	}, {
		title : "Puthagaram",
		id : "19141"
	}, {
		title : "Puzhuthivakkam",
		id : "19199"
	}, {
		title : "R.A.Puram",
		id : "226"
	}, {
		title : "R.K.Nagar",
		id : "185"
	}, {
		title : "RAJAKADAI",
		id : "19132"
	}, {
		title : "RAMAN NAGAR",
		id : "43835"
	}, {
		title : "RAMAPURAM",
		id : "19111"
	}, {
		title : "Raja Annamalai Puram",
		id : "245"
	}, {
		title : "Rangarajapuram",
		id : "219"
	}, {
		title : "Royapettah",
		id : "243"
	}, {
		title : "Royapuram",
		id : "168"
	}, {
		title : "S V NAGAR",
		id : "19170"
	}, {
		title : "S.V.NAGAR",
		id : "19168"
	}, {
		title : "SADAIYANKUPPAM",
		id : "19179"
	}, {
		title : "SATHANGADU",
		id : "19116"
	}, {
		title : "SEMMANCHERI",
		id : "19217"
	}, {
		title : "SEMMANCHERY",
		id : "43854"
	}, {
		title : "SHOLINGANALLUR",
		id : "19209"
	}, {
		title : "SHOZHANGANALLUR",
		id : "43851"
	}, {
		title : "SOZHANGANALLUR",
		id : "43860"
	}, {
		title : "Saidapet",
		id : "222"
	}, {
		title : "Saidapet West",
		id : "218"
	}, {
		title : "Saligarmam",
		id : "278"
	}, {
		title : "Saligramam",
		id : "203"
	}, {
		title : "Sastri Nagar",
		id : "248"
	}, {
		title : "Selavoyal",
		id : "235"
	}, {
		title : "Sembium",
		id : "254"
	}, {
		title : "Seven Wells",
		id : "169"
	}, {
		title : "Shenoy Nagar",
		id : "256"
	}, {
		title : "Shenoy Nagar West",
		id : "274"
	}, {
		title : "Soorapattu",
		id : "19128"
	}, {
		title : "Soorapattu Puthagaram Link Road",
		id : "19142"
	}, {
		title : "Sowcarpet",
		id : "192"
	}, {
		title : "T.Nagar",
		id : "200"
	}, {
		title : "THANGAL",
		id : "19143"
	}, {
		title : "THEEYAMBAKKAM",
		id : "19144"
	}, {
		title : "THILLAI GANGANAGAR",
		id : "19216"
	}, {
		title : "THILLAIGANGA NAGAR",
		id : "19222"
	}, {
		title : "THIRUMANGALAM ROAD",
		id : "19123"
	}, {
		title : "THIRUVALLESWARARNAGAR",
		id : "19185"
	}, {
		title : "THIRUVENGADANAGAR",
		id : "19107"
	}, {
		title : "THORAIPAKKAM",
		id : "19214"
	}, {
		title : "THiRUVENGADANAGAR",
		id : "19149"
	}, {
		title : "TIRUVOTTRIYUR",
		id : "19154"
	}, {
		title : "Taramani",
		id : "217"
	}, {
		title : "Teynampet",
		id : "259"
	}, {
		title : "Tharamani",
		id : "216"
	}, {
		title : "Thirumangalam",
		id : "43841"
	}, {
		title : "Thiruvanmiyur",
		id : "252"
	}, {
		title : "Thousand Lights",
		id : "183"
	}, {
		title : "Tondiarpet",
		id : "263"
	}, {
		title : "Triplicane",
		id : "240"
	}, {
		title : "ULLAGARAM",
		id : "43850"
	}, {
		title : "UTHANDI",
		id : "19203"
	}, {
		title : "Ullagaram",
		id : "19212"
	}, {
		title : "Urur",
		id : "262"
	}, {
		title : "V.O.C Nagar",
		id : "210"
	}, {
		title : "VADAPERUMBAKKAM",
		id : "19134"
	}, {
		title : "VALASARAVAKKAM",
		id : "19215"
	}, {
		title : "VANAGARAM ROAD",
		id : "19113"
	}, {
		title : "VARADHARAJAPURAM",
		id : "19137"
	}, {
		title : "VENKATAPURAM",
		id : "19183"
	}, {
		title : "VIJAYALAKSHMIPURAM",
		id : "19118"
	}, {
		title : "VINAYAGAPURAM - MADHAVARAM",
		id : "19162"
	}, {
		title : "VIVEK NAGAR",
		id : "19106"
	}, {
		title : "Vadapalani",
		id : "215"
	}, {
		title : "Velachery",
		id : "246"
	}, {
		title : "Velachery East",
		id : "184"
	}, {
		title : "Velachery West",
		id : "230"
	}, {
		title : "Vepery",
		id : "239"
	}, {
		title : "Villivakkam",
		id : "211"
	}, {
		title : "Virugambakkam",
		id : "212"
	}, {
		title : "Vyasarpadi",
		id : "221"
	}, {
		title : "WIMCO NAGAR",
		id : "19131"
	}, {
		title : "West Mambalam",
		id : "236"
	}, {
		title : "West Velachery",
		id : "247"
	}];

	var areaData = [];

	for (var i = 0, iLen = areaObj.length; i < iLen; i++) {
		areaData[i] = Ti.UI.createPickerRow({
			title : areaObj[i].title,
			id : areaObj[i].id,
			selectedId : i
		});
	}

	var streetObj = [{
		title : "Select",
		id : 0,
		selectedId : 0
	}];

	// On success getting the value for the street Option Dialog from API.
	var successCallback = function(responseObject) {
		if (responseObject) {
			streetObj = [];

			streetObj = [{
				title : "Select",
				id : 0,
				selectedId : 0
			}];

			var n = responseObject.split("^");
			var idArr = n[0];
			var placesArr = n[1];
			var idArray = idArr.split("+");
			var placeArray = placesArr.split("+");

			for (var i = 0; i < idArray.length; i++) {
				var hasObj = {};
				hasObj.id = idArray[i];
				hasObj.title = placeArray[i];
				hasObj.selectedId = i + 1;
				streetObj.push(hasObj);
			}

			for (var l = 0, ll = streetObj.length; l < ll; l++) {
				streetData[l] = Ti.UI.createPickerRow({
					title : streetObj[l].title,
					id : streetObj[l].id,
					selectedId : streetObj[l].selectedId
				});
			}

		} else {
			config.showAlert(responseObject);
		}
		require('lib/indicator').indicator.hideActivityIndicator();
	};

	var displayErrorMessage = function(responseObject) {
		require('lib/indicator').indicator.hideActivityIndicator();
		Ti.API.info("Failed To Load " + JSON.stringify(responseObject));
	};

	if (config.platform == config.ANDROID) {
		areaPickerView = require('lib/views').getOptionDialog({
			pickerData : areaData
		});
		areaPickerView.selectedIndex = (areaSelectedID) ? areaSelectedID : 0;
		areaPickerView.show();
		areaPickerView.hide();
		areaPickerView.addEventListener('click', function(e) {

			if (e.index > 0) {
				areaTextBox.text = areaObj[e.index].title;
				areaSelectedID = areaData[e.index].selectedId;

				//API Call for setting the value for Street Option Dialog.
				if (Titanium.Network.online) {
					require('lib/indicator').indicator.showActivityIndicator();

					var streetURL = "http://218.248.44.55:8280/pgr/commonyui/egov/loadComboAjax.jsp?tablename=eg_boundary&columnname1=ID_BNDRY&columnname2=name&whereclause=parent=" + areaData[e.index].id + "%20order%20by%20name";

					ServiceInvoker.sendGetRequest({
						callback : successCallback,
						errorCallBack : displayErrorMessage
					}, streetURL);
				}
			} else if (e.index == 0) {
				areaTextBox.text = areaObj[e.index].title;
				areaSelectedID = areaData[e.index].selectedId;

				streetData = [];
				streetData[0] = Ti.UI.createPickerRow({
					title : "Select",
					id : 0,
					selectedId : 0
				});

				streetTextBox.text = "Select";
				streetSelectedID = 0;
			}
		});
	}

	areaDropDownView.addEventListener('click', function(e) {
		if (config.platform == config.ANDROID) {
			if (areaPickerView)
				areaPickerView.show();
		}
	});
	areaHolderView.add(areaDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var streetHolderView = Ti.UI.createView(style.horView);
	loginHolder.add(streetHolderView);

	var streetLabel = Ti.UI.createLabel(style.addEventTextLabel);
	streetLabel.text = 'Street :';
	streetHolderView.add(streetLabel);

	var streetDropDownView = Ti.UI.createView(style.addEventDropDown);

	var streetTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	streetTextBox.text = "Select";
	streetDropDownView.add(streetTextBox);

	var streetData = [];

	for (var c = 0, cl = streetObj.length; c < cl; c++) {
		streetData[c] = Ti.UI.createPickerRow({
			title : streetObj[c].title,
			id : streetObj[c].id,
			selectedId : streetObj[c].selectedId
		});
	}

	if (config.platform == config.ANDROID) {
		streetPickerView = require('lib/views').getOptionDialog({
			pickerData : streetData
		});
		streetPickerView.selectedIndex = (streetSelectedID) ? streetSelectedID : 0;
		streetPickerView.show();
		streetPickerView.hide();
	}

	streetDropDownView.addEventListener('click', function(e) {
		if (config.platform == config.ANDROID) {
			streetPickerView.options = streetData;
			streetPickerView.selectedIndex = (streetSelectedID) ? streetSelectedID : 0;
			streetPickerView.show();

			streetPickerView.addEventListener('click', function(e) {
				if (e.index >= 0) {
					streetTextBox.text = streetData[e.index].title;
					streetSelectedID = streetData[e.index].selectedId;
				}
			});

		}
	});
	streetHolderView.add(streetDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerOneHolderView = Ti.UI.createView(style.horView);
	loginHolder.add(pickerOneHolderView);

	var pickerOneLabel = Ti.UI.createLabel(style.addEventTextLabel);
	pickerOneLabel.text = 'Frequently Filed Complaint Types';
	pickerOneHolderView.add(pickerOneLabel);

	var pickerOneDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerOneDropDownView.applyProperties({
		left : '9%',
		width : '48.9%'
	});

	var pickerOneTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerOneTextBox.text = "Choose";
	pickerOneDropDownView.add(pickerOneTextBox);

	var pickerOneObj = [{
		title : "Choose",
		id : 0
	}, {
		title : "Removal of garbage",
		id : "1"
	}, {
		title : "Mosquito menace",
		id : "18"
	}, {
		title : "Complaints related to property tax",
		id : "43"
	}, {
		title : "Non Burning of Street Lights",
		id : "52"
	}, {
		title : "Stagnation of water",
		id : "69"
	}];

	var pickerOneData = [];

	for (var pickerOne = 0, pickerOne1 = pickerOneObj.length; pickerOne < pickerOne1; pickerOne++) {
		pickerOneData[pickerOne] = Ti.UI.createPickerRow({
			title : pickerOneObj[pickerOne].title,
			id : pickerOneObj[pickerOne].id,
			selectedId : pickerOne
		});
	}

	var pickerOneSelectedID;
	var pickerOnePickerView;

	if (config.platform == config.ANDROID) {
		pickerOnePickerView = require('lib/views').getOptionDialog({
			pickerData : pickerOneData
		});
		pickerOnePickerView.selectedIndex = (pickerOneSelectedID) ? pickerOneSelectedID : 0;
		pickerOnePickerView.show();
		pickerOnePickerView.hide();
		pickerOnePickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerOneTextBox.text = pickerOneData[e.index].title;
				pickerOneSelectedID = pickerOneData[e.index].selectedId;
			}
		});
	}

	pickerOneDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerOnePickerView)
				pickerOnePickerView.show();
		}
	});
	pickerOneHolderView.add(pickerOneDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerTwoHolderView = Ti.UI.createView(style.horView);
	loginHolder.add(pickerTwoHolderView);

	var pickerTwoDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerTwoDropDownView.applyProperties({
		left : '0dp',
		width : '48.9%'
	});

	var pickerTwoTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerTwoTextBox.text = "Health";
	pickerTwoDropDownView.add(pickerTwoTextBox);

	var pickerTwoObj = [{
		title : "Health",
		id : 0
	}, {
		title : "Complaints regarding Cleanliness of Toilets in Shopping complex",
		id : "27"
	}, {
		title : "Complaints regarding Cleanliness of Toilets in Theatre",
		id : "26"
	}, {
		title : "Complaints regarding Dispensary",
		id : "14"
	}, {
		title : "Complaints regarding CDH",
		id : "16"
	}, {
		title : "Complaints regarding CWC",
		id : "15"
	}, {
		title : "Complaints regarding burial ground",
		id : "11"
	}, {
		title : "Complaints regarding public toilets",
		id : "12"
	}, {
		title : "Complaints regarding quality of food in Hotels",
		id : "28"
	}, {
		title : "Complaints regarding unauthorised restaurants",
		id : "13"
	}, {
		title : "Death of Stray Animals",
		id : "31"
	}, {
		title : "Dog menace",
		id : "19"
	}, {
		title : "Flies menace at Kodungaiyur Dumping Ground",
		id : "41"
	}, {
		title : "Flies menace at Perungudi Dumping Ground",
		id : "42"
	}, {
		title : "Illegal slaughtering",
		id : "29"
	}, {
		title : "Improper Sweeping",
		id : "34"
	}, {
		title : "Issue of Birth and Death Certificate",
		id : "21"
	}, {
		title : "Mosquito menace",
		id : "18"
	}, {
		title : "Public Health/Dengue/Malaria/Gastro-enteritis",
		id : "17"
	}, {
		title : "Road Side Eateries",
		id : "32"
	}, {
		title : "Slaughter House",
		id : "23"
	}, {
		title : "Stray Pigs",
		id : "30"
	}, {
		title : "Stray cattle",
		id : "25"
	}, {
		title : "Transfer Station Smell",
		id : "37"
	}, {
		title : "Unauthorised sale of meat and meat product",
		id : "24"
	}, {
		title : "Unhygienic and improper transport of meat and livestock",
		id : "33"
	}, {
		title : "Unsanitary conditions on the road",
		id : "22"
	}];

	var pickerTwoData = [];

	for (var pickerTwo = 0, pickerTwo2 = pickerTwoObj.length; pickerTwo < pickerTwo2; pickerTwo++) {
		pickerTwoData[pickerTwo] = Ti.UI.createPickerRow({
			title : pickerTwoObj[pickerTwo].title,
			id : pickerTwoObj[pickerTwo].id,
			selectedId : pickerTwo
		});
	}

	var pickerTwoSelectedID;
	var pickerTwoPickerView;

	if (config.platform == config.ANDROID) {
		pickerTwoPickerView = require('lib/views').getOptionDialog({
			pickerData : pickerTwoData
		});
		pickerTwoPickerView.selectedIndex = (pickerTwoSelectedID) ? pickerTwoSelectedID : 0;
		pickerTwoPickerView.show();
		pickerTwoPickerView.hide();
		pickerTwoPickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerTwoTextBox.text = pickerTwoData[e.index].title;
				pickerTwoSelectedID = pickerTwoData[e.index].selectedId;
			}
		});
	}

	pickerTwoDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerTwoPickerView)
				pickerTwoPickerView.show();
		}
	});
	pickerTwoHolderView.add(pickerTwoDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerThreeDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerThreeDropDownView.applyProperties({
		left : '1%',
		width : '48.9%'
	});

	var pickerThreeTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerThreeTextBox.text = "General";
	pickerThreeDropDownView.add(pickerThreeTextBox);

	var pickerThreeObj = [{
		title : "General",
		id : 0
	}, {
		title : "Change of address in Electoral Roll",
		id : "92"
	}, {
		title : "Complaints regarding Schools",
		id : "47"
	}, {
		title : "Issue of Colour TV",
		id : "49"
	}, {
		title : "Issue of Voter ID",
		id : "50"
	}, {
		title : "Name Error (Spelling Related)",
		id : "93"
	}, {
		title : "Name not found in Electoral Roll",
		id : "91"
	}, {
		title : "Sanction of financial assistance under Moovalur thirumana thittam",
		id : "48"
	}, {
		title : "Unauthorised Advt. Boards",
		id : "51"
	}];

	var pickerThreeData = [];

	for (var pickerThree = 0, pickerThree3 = pickerThreeObj.length; pickerThree < pickerThree3; pickerThree++) {
		pickerThreeData[pickerThree] = Ti.UI.createPickerRow({
			title : pickerThreeObj[pickerThree].title,
			id : pickerThreeObj[pickerThree].id,
			selectedId : pickerThree
		});
	}

	var pickerThreeSelectedID;
	var pickerThreePickerView;

	if (config.platform == config.ANDROID) {
		pickerThreePickerView = require('lib/views').getOptionDialog({
			pickerData : pickerThreeData
		});
		pickerThreePickerView.selectedIndex = (pickerThreeSelectedID) ? pickerThreeSelectedID : 0;
		pickerThreePickerView.show();
		pickerThreePickerView.hide();
		pickerThreePickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerThreeTextBox.text = pickerThreeData[e.index].title;
				pickerThreeSelectedID = pickerThreeData[e.index].selectedId;
			}
		});
	}

	pickerThreeDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerThreePickerView)
				pickerThreePickerView.show();
		}
	});
	pickerTwoHolderView.add(pickerThreeDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerThreeHolderView = Ti.UI.createView(style.horView);
	loginHolder.add(pickerThreeHolderView);

	var pickerFourDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerFourDropDownView.applyProperties({
		left : '0dp',
		width : '48.9%'
	});

	var pickerFourTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerFourTextBox.text = "Engineering";
	pickerFourDropDownView.add(pickerFourTextBox);

	var pickerFourObj = [{
		title : "Engineering",
		id : 0
	}, {
		title : "Building plan sanction",
		id : "89"
	}, {
		title : "Cleaning of water table",
		id : "68"
	}, {
		title : "Complaints regarding Bridges/Flyovers/Subways",
		id : "81"
	}, {
		title : "Complaints regarding Centre Median",
		id : "82"
	}, {
		title : "Complaints regarding Park",
		id : "78"
	}, {
		title : "Complaints regarding Play grounds",
		id : "79"
	}, {
		title : "Complaints regarding Traffic Island",
		id : "83"
	}, {
		title : "Complaints regarding any other COC Buildings",
		id : "80"
	}, {
		title : "Complaints regarding community hall",
		id : "77"
	}, {
		title : "Covering of Man holes of SWD",
		id : "72"
	}, {
		title : "Damage to the Electric Pole",
		id : "56"
	}, {
		title : "Desilting of Canal",
		id : "66"
	}, {
		title : "Desilting of Drain",
		id : "65"
	}, {
		title : "Disposal of removed silt on the Road",
		id : "70"
	}, {
		title : "Electric Shock due to street light",
		id : "55"
	}, {
		title : "Encroachment on the public property",
		id : "75"
	}, {
		title : "Formation of New Road",
		id : "59"
	}, {
		title : "Illegal draining of sewage to SWD/Open site",
		id : "76"
	}, {
		title : "New Drain Construction",
		id : "63"
	}, {
		title : "New Street light",
		id : "54"
	}, {
		title : "Non Burning of Street Lights",
		id : "52"
	}, {
		title : "Obstruction of Trees",
		id : "10"
	}, {
		title : "Obstruction of water flow",
		id : "67"
	}, {
		title : "Open Air Defunction",
		id : "85"
	}, {
		title : "Over head cable Wires running in Hapazard manner",
		id : "90"
	}, {
		title : "Parking Issue",
		id : "86"
	}, {
		title : "Poor quality of work",
		id : "88"
	}, {
		title : "Pot hole fill up/Repairs to the damage surface",
		id : "58"
	}, {
		title : "Removal of Debris",
		id : "7"
	}, {
		title : "Removal of fallen trees",
		id : "71"
	}, {
		title : "Removal of shops in the footpath",
		id : "62"
	}, {
		title : "Repairs to existing footpath",
		id : "61"
	}, {
		title : "Repairs to the SWD",
		id : "64"
	}, {
		title : "Request to provide footpath",
		id : "60"
	}, {
		title : "Request to relay the Road",
		id : "57"
	}, {
		title : "Shifting of Street light Pole",
		id : "53"
	}, {
		title : "Shifting of garbage bin",
		id : "3"
	}, {
		title : "Slow progress of work",
		id : "87"
	}, {
		title : "Stagnation of water",
		id : "69"
	}, {
		title : "Unauthorised / Illegal construction",
		id : "73"
	}, {
		title : "Unauthorised tree Cutting",
		id : "84"
	}, {
		title : "Violation of DCR/Building bye laws",
		id : "74"
	}];

	var pickerFourData = [];

	for (var pickerFour = 0, pickerFour4 = pickerFourObj.length; pickerFour < pickerFour4; pickerFour++) {
		pickerFourData[pickerFour] = Ti.UI.createPickerRow({
			title : pickerFourObj[pickerFour].title,
			id : pickerFourObj[pickerFour].id,
			selectedId : pickerFour
		});
	}

	var pickerFourSelectedID;
	var pickerFourPickerView;

	if (config.platform == config.ANDROID) {
		pickerFourPickerView = require('lib/views').getOptionDialog({
			pickerData : pickerFourData
		});
		pickerFourPickerView.selectedIndex = (pickerFourSelectedID) ? pickerFourSelectedID : 0;
		pickerFourPickerView.show();
		pickerFourPickerView.hide();
		pickerFourPickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerFourTextBox.text = pickerFourData[e.index].title;
				pickerFourSelectedID = pickerFourData[e.index].selectedId;
			}
		});
	}

	pickerFourDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerFourPickerView)
				pickerFourPickerView.show();
		}
	});
	pickerThreeHolderView.add(pickerFourDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerFiveDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerFiveDropDownView.applyProperties({
		left : '1%',
		width : '48.9%'
	});

	var pickerFiveTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerFiveTextBox.text = "Revenue";
	pickerFiveDropDownView.add(pickerFiveTextBox);

	var pickerFiveObj = [{
		title : "Revenue",
		id : 0
	}, {
		title : "Complaints regarding Voter list",
		id : "45"
	}, {
		title : "Complaints related to issue of all types of license",
		id : "44"
	}, {
		title : "Complaints related to property tax",
		id : "43"
	}, {
		title : "Inclusion, delection of correction in the Voter list",
		id : "46"
	}];

	var pickerFiveData = [];

	for (var pickerFive = 0, pickerFive5 = pickerFiveObj.length; pickerFive < pickerFive5; pickerFive++) {
		pickerFiveData[pickerFive] = Ti.UI.createPickerRow({
			title : pickerFiveObj[pickerFive].title,
			id : pickerFiveObj[pickerFive].id,
			selectedId : pickerFive
		});
	}

	var pickerFiveSelectedID;
	var pickerFivePickerView;

	if (config.platform == config.ANDROID) {
		pickerFivePickerView = require('lib/views').getOptionDialog({
			pickerData : pickerFiveData
		});
		pickerFivePickerView.selectedIndex = (pickerFiveSelectedID) ? pickerFiveSelectedID : 0;
		pickerFivePickerView.show();
		pickerFivePickerView.hide();
		pickerFivePickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerFiveTextBox.text = pickerFiveData[e.index].title;
				pickerFiveSelectedID = pickerFiveData[e.index].selectedId;
			}
		});
	}
	pickerFiveDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerFivePickerView)
				pickerFivePickerView.show();
		}
	});
	pickerThreeHolderView.add(pickerFiveDropDownView);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var pickerSixDropDownView = Ti.UI.createView(style.addEventDropDown);
	pickerSixDropDownView.applyProperties({
		left : '0dp',
		width : '48.9%',
		top : '7dp'
	});

	var pickerSixTextBox = Ti.UI.createLabel(style.addEventDropDownLabel);
	pickerSixTextBox.text = "Solid Waste Management";
	pickerSixDropDownView.add(pickerSixTextBox);

	var pickerSixObj = [{
		title : "Solid Waste Management",
		id : 0
	}, {
		title : "Absenteesim of door to door garbage collector",
		id : "6"
	}, {
		title : "Absenteesim of sweepers",
		id : "5"
	}, {
		title : "Bio Medical waste/Health hazard waste removal",
		id : "9"
	}, {
		title : "Broken Bin",
		id : "35"
	}, {
		title : "Burning of garbage",
		id : "20"
	}, {
		title : "Burning of garbage at Kodungaiyur Dumping Ground",
		id : "39"
	}, {
		title : "Burning of garbage at Perungudi Dumping Ground",
		id : "40"
	}, {
		title : "Garbage lorry with out Net",
		id : "36"
	}, {
		title : "Nuisance by garbage tractors or trucks",
		id : "8"
	}, {
		title : "Over flowing of garbage bins",
		id : "2"
	}, {
		title : "Provision of garbage bin",
		id : "4"
	}, {
		title : "Removal of garbage",
		id : "1"
	}, {
		title : "Spilling of Garbage from lorry",
		id : "38"
	}];

	var pickerSixData = [];

	for (var pickerSix = 0, pickerSix6 = pickerSixObj.length; pickerSix < pickerSix6; pickerSix++) {
		pickerSixData[pickerSix] = Ti.UI.createPickerRow({
			title : pickerSixObj[pickerSix].title,
			id : pickerSixObj[pickerSix].id,
			selectedId : pickerSix
		});
	}

	var pickerSixSelectedID;
	var pickerSixPickerView;

	if (config.platform == config.ANDROID) {
		pickerSixPickerView = require('lib/views').getOptionDialog({
			pickerData : pickerSixData
		});
		pickerSixPickerView.selectedIndex = (pickerSixSelectedID) ? pickerSixSelectedID : 0;
		pickerSixPickerView.show();
		pickerSixPickerView.hide();
		pickerSixPickerView.addEventListener('click', function(e) {
			if (e.index >= 0) {
				pickerSixTextBox.text = pickerSixData[e.index].title;
				pickerSixSelectedID = pickerSixData[e.index].selectedId;
			}
		});
	}

	pickerSixDropDownView.addEventListener('click', function(e) {

		if (config.platform == config.ANDROID) {
			if (pickerSixPickerView)
				pickerSixPickerView.show();
		}
	});
	loginHolder.add(pickerSixDropDownView);

	return win;
}

module.exports = viewController;
