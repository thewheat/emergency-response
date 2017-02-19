(function() {
  'use strict';

  var app = {
    selectedCountry: "",
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container.add'),
    addCustomDialog: document.querySelector('.dialog-container.add-custom'),
  };

// http://chartsbin.com/view/1983
// Police
// Ambulance
// Fire
app.data = {
"Algeria": ["18","14","14","Civil protection - 14; National gendarmerie - 1055; Counter Terrorist unit - 1548; Support for children - 3033; Traffic police - 123; Mobile phones - 112"],
"Angola": ["113","112","115",""],
"Ascension Island": ["999","999","999",""],
"Benin": ["117","112","118","Support for children - 160"],
"Burundi": ["117","112","118","Support for children - 116"],
"Botswana": ["911","911","911","Police - 999; Ambulance - 997; Fire - 998; Mobile phones - 112"],
"Burkina Faso": ["17","112","18","Water emergency - 1111; Electricity emergency - 1130"],
"Cameroon": ["112","112","112","Police - 117; Ambulance - 119; Fire - 118"],
"Cape Verde": ["132","130","131","Water/electricity emergency - 800 11 33"],
"Central African Republic": ["117","1220","118",""],
"Chad": ["17","2251-4242","18","Ambulance - 2251-1237"],
"Comoros": ["17","772-03-73","18","Ambulance - 773-26-04"],
"Republic of Congo": ["117","","118","Police - 112"],
"Democratic Republic of Congo": ["112","","118",""],
"Djibouti": ["17","19","18",""],
"Egypt": ["122","123","180","Tourist police – 126; Traffic police – 128; Electricity emergency – 121; Gas emergency – 129; Mobile phones - 112"],
"Equatorial Guinea": ["114","112","115","Traffic police - 116"],
"Eritrea": ["113","114","116",""],
"Ethiopia": ["911","911","911","Police - 991; Ambulance - 907; Fire - 939; Traffic police - 945"],
"Gabon": ["1730","1300","18",""],
"Gambia": ["117","116","118","Police - 112; Electricity emergency - 124; Water emergency - 125"],
"Ghana": ["999","999","999","Police - 191; Ambulance - 193; Fire - 192"],
"Guinea": ["122","442-020","1717",""],
"Guinea-Bissau": ["112","112","112","Police - 117; Ambulance - 119; Fire - 118"],
"Ivory Coast": ["111","185","180","Police - 170"],
"Liberia": ["911","911","911",""],
"Kenya": ["112 or 999","112 or 999","112 or 999",""],
"Libya": ["1515","1515","1515","Ambulance - 193"],
"Lesotho": ["123","121","122",""],
"Madagascar": ["117","124","118","Traffic police - 3600"],
"Malawi": ["997","998","999","Police - 990"],
"Mali": ["17","15","18","Ambulance, Fire - 112"],
"Mauritius": ["112","114","115","Police - 999; Fire - 995"],
"Mauritania": ["117","101","118","Gendarmerie - 116; Traffic police - 119"],
"Mayotte": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Morocco": ["19","15","15","Royal gendarmerie - 177; Drugs & alcohol service - 113; Racial discrimination hotline - 114; Non-emergency disturbances - 110; General information - 160; National Freeway call center - 5050; Mobile phones - 112"],
"Mozambique": ["119","117","198",""],
"Namibia": ["112","112","112",""],
"Nigeria": ["112","112","112",""],
"Niger": ["17","15","18",""],
"Réunion": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Rwanda": ["112","912","112","Traffic police - 113"],
"Saint Helena": ["999","911","999",""],
"Sao Tome and Principe": ["112","112","112",""],
"Senegal": ["17","15","18",""],
"Seychelles": ["112 or 999","112 or 999","112 or 999","Police - 133; Ambulance - 151"],
"Sierra Leone": ["019","999","999",""],
"Somalia": ["888","999","555","Traffic police - 777"],
"South Africa": ["10 111","10 177","10 177","Emergency in Cape Town - 107; Mobile phones - 112"],
"Sudan": ["999","999","999","Traffic police - 777 777"],
"South Sudan": ["999","999","999",""],
"Swaziland": ["999","977","933",""],
"Tanzania": ["112","115","114","Police - 999"],
"Togo": ["117","8200","118",""],
"Tristan da Cunha": ["999","911","999",""],
"Tunisia": ["197","190","198","National guard – 193"],
"Uganda": ["112","911","112","Police, Fire - 999"],
"Western Sahara": ["150","150","150",""],
"Zambia": ["999","999","999","Police - 911; Ambulance - 992; Fire - 993; Mobile phones - 112"],
"Zimbabwe": ["999","999","999","Police - 995; Ambulance - 994; Fire - 993; Mobile phones - 112"],
"Antarctica": ["911","911","911","Calls the nearest island/country that has a Police / Emergency system. In case of no response, please try 112 or 999 (try all emergencies numbers shown on this article) until dispatch Antarctica has no emergency call center"],
"Abkhazia": ["102","103","101",""],
"Afghanistan": ["119","112","119",""],
"Akrotiri and Dhekelia": ["112 or 999","112 or 999","112 or 999",""],
"Bahrain": ["999","999","999","Mobile phones - 112"],
"Bangladesh": ["999","199","199","Those numbers are valid for Dhaka and Chittagong only"],
"Bhutan": ["113","112","110",""],
"British Indian Ocean Territory": ["112 or 999","112 or 999","112 or 999",""],
"Brunei": ["993","991","995",""],
"Burma": ["999","999","999","Police - 199; Ambulance - 192; Fire - 191"],
"Cambodia": ["117","119","118","Child helpline - 1280"],
"People's Republic of China": ["110","120","119","Road police - 122; Private ambulance service (Beijing only) - 999. Dialling 112 on a mobile phone plays a bilingual message in English and Chinese about other accessible emergency numbers"],
"Christmas Island": ["000","000","000",""],
"Cocos Islands": ["000","000","000",""],
"East Timor": ["112","112","112",""],
"Hong Kong": ["999","999","999","Deaf fax/SMS - 992; Mobile phones - 112"],
"India": ["100","102","101","Common for Police, medical and fire - 108; Gas leakage - 1906; All emergencies - 112; Blood Requirement - 104; Helpline for women - 181"],
"Indonesia": ["110","118","113","Ambulance - 119; Search & rescue - 115; Natural disasters - 129; Electricity emergency - 123; Mobile phones - 112"],
"Iran": ["110","115","125","Social Emergency - 123; Roads Traffic Information Center - 141; Mobile phones - 112.\n112 is for Relief and rescue organization of Iranian Red Crescent"],
"Iraq": ["112 or 911","112 or 911","112 or 911","Police - 104; Ambulance - 122; Fire - 115"],
"Israel": ["100","101","102","Israel Electric Corporation - 103; Home Front Command - 104; Non-emergency municipal hazards - 106; Mobile phones - 112"],
"Japan": ["110","119","119","Coast guard - 118; Information about emergencies - # 7119 (free call), # 9110 (pay call). 911 redirects to 110"],
"Jordan": ["911","911","911","Mobile phones - 112"],
"Kazakhstan": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas leaks - 104"],
"Kyrgyzstan": ["102","103","101",""],
"Democratic People's Republic of Korea": ["119","119","119","Mobile phones - 112"],
"Republic of Korea": ["112","119","119","National security - 111; Reporting spies - 113; Missing persons - 182; Phone service provider - 114"],
"Kurdistan": ["112 or 911","112 or 911","112 or 911","Police - 104; Ambulance - 122; Fire - 115"],
"Kuwait": ["112","112","112",""],
"Laos": ["191","195","190",""],
"Lebanon": ["112","140","175","Police - 160; Civil defense - 125"],
"Macau": ["999","999","999","Mobile phones - 110 or 112"],
"Maldives": ["119","102","118","Traffic police - 191"],
"Malaysia": ["999","999","999",""],
"Mongolia": ["105","105","105","Police - 102; Ambulance - 103; Fire - 101"],
"Nepal": ["100","102","101","Traffic police - 103; Mobile phones - 112"],
"Oman": ["999","999","999","Mobile phones - 112"],
"Pakistan": ["15","115","16","Ambulance - 1122; Traffic police - 1915; Mobile phones - 112"],
"Philippines": ["911","911","911","National Complaint Hotline - 8888; Child abuse (Bantay Bata) - 163; Motorist assistance - 136 (Metro Manila only)"],
"Qatar": ["999","999","999","Mobile phones - 112"],
"Saudi Arabia": ["112 or 911","112 or 911","112 or 911","Police - 999; Ambulance - 997; Fire - 998; Traffic police - 993"],
"Singapore": ["999","995","995","Mobile phones - 112 or 911; Non-emergency ambulance - 1777; Police hotline - 1800 225 0000; Traffic police - 6547 0000"],
"Sri Lanka": ["119","110","110","Traffic police - 11-269-11-11"],
"Syria": ["112","110","113",""],
"Republic of China (Taiwan)": ["110","119","119","Mobile phones - 112; Domestic violence - 113"],
"Tajikistan": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas leaks - 104"],
"Thailand": ["191","1669","199","911 is planned for universal number in near future; Ambulance (Bangkok only) - 1646; Tourist police - 1155; Traffic control center (Bangkok Metro only) - 1197; Highway patrol - 1193; Mobile Phones - 112"],
"Turkmenistan": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas leaks - 104"],
"United Arab Emirates": ["112","112","112","Police - 999; Ambulance - 998; Fire - 997; Coast guard - 996; Non-emergency police - 901"],
"Uzbekistan": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101"],
"Vietnam": ["113","115","114",""],
"Yemen": ["194","191","191",""],
"Åland Islands": ["112","112","112","Non-emergency police - 018 527 100; Poison control - 09 471 977"],
"Albania": ["112","112","112","Police - 129; Ambulance - 127; Fire - 128; Traffic police – 126; Emergency at sea - 125"],
"Andorra": ["112","112","112","Police - 110; Ambulance, Fire - 118"],
"Armenia": ["112 or 911","112 or 911","112 or 911","Police - 102; Ambulance - 103; Fire - 101; Gas emergency – 104; Traffic police – 177; Search & rescue - 108"],
"Austria": ["112","112","112","Police – 133; Ambulance – 144; Fire – 122; Gas emergency – 128; Mountain rescue – 140; Doctors – 141; Crisis-hotline – 142; Support for children and teens – 147; Non-emergency police - 059 133; Deaf fax/SMS - 0800 133 133; Poisoning Informations Center - 01 406 43 43"],
"Azerbaijan": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas emergency - 104; Traffic police – 126; Electricity emergency - 199"],
"Belarus": ["102","103","101","Fire - 112; Gas emergency – 104"],
"Belgium": ["112","112","112","Police – 101; Ambulance, Fire - 100; Missing children – 116 000; Mental problems hotline – 106; Red Cross – 105. If dialing 112 or 100 for police, the caller is redirected to 101"],
"Bosnia and Herzegovina": ["112","112","112","Police - 122; Ambulance - 124; Fire - 123; Civil protection - 121"],
"Bulgaria": ["112","112","112",""],
"Croatia": ["112","112","112","Police - 192; Ambulance - 194; Fire - 193; Search & rescue at sea – 195; Road help – 1987"],
"Cyprus": ["112 or 199","112 or 199","112 or 199","Fire - 1407; Air/sea rescue - 1441; Anti-drug support - 1410 or 1498; Poison control - 1401"],
"Czech Republic": ["112","112","112","Police – 158; Ambulance – 155; Fire – 150; Municipal police – 156"],
"Denmark": ["112","112","112","Non-emergency police - 114; Helpline for guidance from doctors and nurses - 1813"],
"Estonia": ["112","112","112",""],
"Faroe Islands": ["112","112","112","Non-emergency police - 114"],
"Finland": ["112","112","112","Maritime rescue - 02 04 100"],
"France": ["112","112","112","Police – 17; Hospital-operated ambulance (SAMU) – 15; Fire brigade-operated ambulance, Fire – 18; Homeless - 115; Deaf FAX/SMS - 114; Hotline for beaten children - 119; Missing children - 116 000; Maritime rescue - 196"],
"Georgia": ["112","112","112",""],
"Germany": ["112","112","112","Police - 110"],
"Gibraltar": ["112 or 999","112 or 999","112 or 999","Fire, Ambulance – 190; Police - 199"],
"Greece": ["112","112","112","Police – 100; Ambulance – 166; Fire – 199; Forest fire – 1591; Coast guard – 108; Counter-narcotics – 109; Tourist police – 171; Social aid – 197"],
"Greenland": ["112","112","112","Mobile phones only. From landline phones dial the local police station, hospital or fire brigade"],
"Guernsey": ["112 or 999","112 or 999","112 or 999",""],
"Hungary": ["112","112","112","Police – 107; Ambulance – 104; Fire – 105; Water emergency - 1817"],
"Iceland": ["112 domestically and +354 570 2112 from abroad","112 domestically and +354 570 2112 from abroad","112 domestically and +354 570 2112 from abroad","Non-emergency police (Reykjavík area) – 444 10 00. 911 redirects to 112 on mobile phones"],
"Ireland": ["112 or 999","112 or 999","112 or 999","SMS messages can be sent to 112 after registration by sending a text message with the word 'Register' to 112"],
"Isle of Man": ["112 or 999","112 or 999","112 or 999",""],
"Italy": ["112","112","112","Police – 113; Ambulance – 118; Fire – 115; Forest service – 1515; Customs/Financial police – 117; Coast guard – 1530. 911 redirects to 112"],
"Jersey": ["112 or 999","112 or 999","112 or 999",""],
"Kosovo": ["112","112","112","Police – 192; Ambulance – 194; Fire – 193"],
"Latvia": ["112","112","112","Police – 110; Ambulance – 113; Gas emergency – 114"],
"Lithuania": ["112","112","112",""],
"Liechtenstein": ["112","112","112","Police – 117; Ambulance - 144; Fire - 118"],
"Luxembourg": ["112","112","112","Police – 113"],
"Republic of Macedonia": ["112","112","112","Police – 192; Ambulance – 194; Fire – 193"],
"Malta": ["112","112","112","Helpline - 119"],
"Moldova": ["902","903","901","Police - 112"],
"Monaco": ["112","112","112","Police - 17; Hospital-operated ambulance (SAMU) - 15; Fire brigade-operated ambulance, Fire - 18"],
"Montenegro": ["112","112","112","Police – 122; Ambulance – 124; Fire – 123"],
"Nagorno-Karabakh": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas leaks - 104"],
"Netherlands": ["112","112","112","Text phone – 0800 81 12; Non-emergency police – 0900 88 44 or 0343 578 844; Non-emergency police (text phone) - 0900 18 44; Suicide prevention – 0900 01 13; Animal emergency - 144; Child abuse - 0900 123 12 30; Anti-bullying hotline - 0800 90 50"],
"Northern Cyprus": ["112","112","112","Police - 155; Fire - 199"],
"Norway": ["112","113","110","Emergency at sea - 120; Non-emergency police – 02 800; Child abuse and family violence - 116 111; Text phone - 1412. Nearest health care outside office hours - 116 117; 911 redirects to 112"],
"Poland": ["112","112","112","Police – 997; Ambulance – 999; Fire – 998; Municipal police – 986; Gas emergency – 992; Road help - 981"],
"Portugal": ["112","112","112","Forest fire – 117; Social emergency – 144"],
"Romania": ["112","112","112",""],
"Russia": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas emergency - 104"],
"San Marino": ["112","112","112","Police – 113; Ambulance – 118; Fire – 115"],
"Serbia": ["192","194","193","Civil protection - 1985; 112 redirects to 192. It is possible to dial 112 and get direct connection with the emergency services by pressing 1 for police, 2 for ambulance and 3 for fire on Vip operator mobile phones"],
"Slovakia": ["112","112","112","Police – 158; Ambulance – 155; Fire – 150"],
"Slovenia": ["112","112","112","Police – 113; Road help - 1987; Emergency at sea - 080 18 00"],
"Spain": ["112","112","112","National police - 091; Ambulance - 061; Fire - 080; Local police - 092; Gendarmerie - 062; Coast guard - 902 202 202; Civil protection - 1006; Red Cross - 901 222 222"],
"Sweden": ["112","112","112","Non-emergency police - 114 14; Non-emergency medical advice - 1177; Information during accidents and crises - 113 13"],
"Switzerland": ["112","112","112","Police – 117; Ambulance – 144; Fire – 118; Poison control – 145; Road help – 0800 140 140; Psychological support – 143; Psychological support for teens and children – 147; Rega air rescue – 1414 or by radio on 161.300 MHz; Air Glaciers air-rescue (Valais only) – 1415"],
"Transnistria": ["102","103","101",""],
"Turkey": ["112","112","112","Police – 155; Fire brigade – 110; Gendarmerie – 156; Coast guard – 158; Municipal police - 153; Gas emergency - 187; Electricity emergency - 186; Water emergency - 185; Poison control - 114; Child abuse and family violence - 183; Forest fire - 177"],
"Ukraine": ["112","112","112","Police - 102; Ambulance - 103; Fire - 101; Gas emergency - 104"],
"United Kingdom": ["112 or 999","112 or 999","112 or 999","Non-emergency police - 101; Non-emergency health issues - 111. SMS messages can be sent to 999 after registration by sending a text message with the word 'Register' to 999. 911 redirects to 999 on mobile phones. Report Power Cuts - 105"],
"Vatican City": ["112","112","112","Police – 113; Ambulance – 118; Fire – 115"],
"American Samoa": ["911","911","911",""],
"Australia": ["000","000","000","Mobile phones - 112 or 000; State Emergency Service – 132 500; National relay service - 106; Non-emergency police – 131 444 (NSW, QLD, SA,WA, NT, TAS ACT); Crime Stoppers – 1800 333 000; Threats to national security – 1800 123 400"],
"Cook Islands": ["999","998","996",""],
"Fiji": ["000 or 911","000 or 911","000 or 911","Crime Stoppers - 919"],
"French Polynesia": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Guam": ["911","911","911",""],
"Kiribati": ["999","999","999","Police - 192; Ambulance - 194; Fire - 193"],
"Marshall Islands": ["911","911","911",""],
"Micronesia": ["911","911","911",""],
"Nauru": ["110","111","112",""],
"New Caledonia": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"New Zealand": ["111","111","111","SMS messages can be sent to 111 from registered mobile phones. Traffic - *555 (mobile phones only). 112 and 911 redirect to 111 on mobile phones. Dialling 000 and 999 plays a pre-recorded message advising the caller to call 111. Deaf TTY - 0800 161 610; Deaf fax - 0800 161 616; Crime Stoppers - 0800 555 111"],
"Palau": ["911","911","911",""],
"Papua New Guinea": ["112","111","110",""],
"Samoa": ["999","999","999","Police - 995; Ambulance - 996; Fire - 994"],
"Solomon Islands": ["911 or 999","911 or 999","911 or 999","In cities, local numbers exist which connect more quickly than either 911 or 999"],
"Tonga": ["911","911","911","Police - 922; Ambulance - 933; Fire - 999"],
"Tuvalu": ["911","911","911",""],
"Vanuatu": ["112","112","112",""],
"Antigua and Barbuda": ["911 or 999","911 or 999","911 or 999",""],
"Anguilla": ["911","911","911",""],
"Aruba": ["911","911","911",""],
"Belize": ["911","911","911",""],
"Bermuda": ["911","911","911",""],
"British Virgin Islands": ["911 or 999","911 or 999","911 or 999",""],
"Canada": ["911","911","911","Non-emergency - 311 (some areas only). 112 redirects to 911 on mobile phones"],
"Clipperton Island": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Cuba": ["106","104","105",""],
"Curacao": ["911","912","911",""],
"Dominica": ["999","999","999",""],
"Grenada": ["911","911","911",""],
"Guadeloupe": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Martinique": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Mexico": ["066 or 911","066 or 911","066 or 911","Police - 066; Ambulance - 066; Fire - 066; Information about emergencies - 066"],
"Montserrat": ["911 or 999","911 or 999","911 or 999",""],
"Navassa Island": ["911","911","911",""],
"Saint Kitts and Nevis": ["911","911","911",""],
"Saint Lucia": ["911 or 999","911 or 999","911 or 999",""],
"Saint Pierre and Miquelon": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Saint Vincent and the Grenadines": ["911 or 999","911 or 999","911 or 999",""],
"United States of America": ["911","911","911","Various services available through regional or national N11 codes (e.g.: 311 for non-emergency police or city services) in certain areas. Calling #77 from a mobile phone may reach the highway patrol in some states, but it should not be relied upon (because some phone carriers might not support it for certain service plans).\nSome carriers such as AT&T redirect 1-1-2 to 9-1-1, though it should not be relied on due to the connecting time"],
"United States Virgin Islands": ["911","911","911",""],
"Barbados": ["911","911","911","Police - 211; Ambulance - 511; Fire - 311"],
"The Bahamas": ["911 or 919","911 or 919","911 or 919","Mobile phones - 112"],
"Bonaire": ["911","911","911",""],
"Cayman Islands": ["911","911","911",""],
"Costa Rica": ["911","911","911","Mobile phones - 112"],
"Dominican Republic": ["911","911","911","112 redirects to 911 on mobile phones"],
"Guatemala": ["110","128","122","Police - 120; Fire - 123"],
"El Salvador": ["911","132","913",""],
"Haiti": ["114","116","115","Police - 122"],
"Honduras": ["112","195","198","Police - 911"],
"Jamaica": ["119","110","110",""],
"Nicaragua": ["118","128","115","Fire - 911"],
"Panama": ["911","911","911","Police - 104; Fire - 103"],
"Puerto Rico": ["911","911","911",""],
"Trinidad and Tobago": ["999","990","990","Police - 911"],
"Argentina": ["911","911","911","Police - 101; Ambulance - 107; Fire - 100; Civil defense - 103; Forest fire - 105; Coast guard - 106. 112 redirects to 911 on mobile phones"],
"Bolivia": ["911","911","911","Police - 110; Ambulance - 118; Fire - 119; Civil protection - 114; National police - 120"],
"Brazil": ["190","192","193","Federal highway police - 191; Federal police - 194; Civil police - 197; State highway police - 198; Civil defense - 199; Municipal guard - 153; Human rights - 100; Emergency in Mercosul area - 128. 112 and 911 redirect to 190 on mobile phones"],
"Chile": ["133","131","132","Useful mnemonic is ABC123: Ambulancia (Ambulance) 131, Bomberos (Fire) 132, Carabineros (Police) 133. 911 redirects to 133"],
"Colombia": ["123","123","123","Police - 112; Ambulance - 125; Fire - 119, Anti-kidnapping hotline - 165"],
"Ecuador": ["911","911","911","Police - 101; Ambulance - 131; Fire - 102; Emergency in Guayaquil - 112; Traffic police in Guayaquil - 103"],
"Falkland Islands": ["112 or 999","112 or 999","112 or 999",""],
"French Guiana": ["112","112","112","Police - 17; Ambulance - 15; Fire - 18"],
"Guyana": ["999","999","999","Police - 911; Ambulance - 913; Fire - 912"],
"Paraguay": ["911","911","911","Police - 912; Ambulance - 141; Fire - 132"],
"Peru": ["911","911","911","Police - 105; Ambulance, Fire - 116; Civil defense - 115; Domestic violence - 100"],
"South Georgia and the South Sandwich Islands": ["999","999","999",""],
"Suriname": ["112","112","112","Police - 111; Ambulance - 113; Fire - 110"],
"Uruguay": ["911","911","911","Police - 109; Ambulance - 105; Fire - 104"],
"Venezuela": ["911","911","911",""]
};

// prevent mobile context / long press menu
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};

function findAncestor (el, cls) {
    if(el.classList.contains(cls)) return el;
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}


  document.querySelectorAll('.butAdd').forEach(function(t){
    t.addEventListener('click', function(e) {
      e.preventDefault();
      app.toggleAddDialog(true);
    });
  });
  document.querySelectorAll('.butDelete').forEach(function(t){
    t.addEventListener('click', function(e) {
      e.preventDefault();
      app.deleteCards(true);
      app.getContactCards();
    });
  });
  document.querySelectorAll('.butAddCustom').forEach(function(t){
    t.addEventListener('click', function(e) {
	  	e.preventDefault();
	    app.toggleAddCustomDialog(true);
	  });
  });

  document.querySelector("main.main").addEventListener("mouseup", function(e){
    console.log("mouseup");
    app.toggleMouseDown(false);
  })
  var TIMEOUT = 500;
  document.querySelector("main.main").addEventListener("mousedown", function(e,f){
    console.log("mousedown");
    if(!app.isSelecting()){
      var element = findAncestor(e.target, "card-item");
      if(element && element.classList.contains("custom")){
        if(!app.isMouseDown()){
          app.toggleMouseDown(true);
          if(app.timeout) clearTimeout(app.timeout);

          e.stopPropagation();
          e.preventDefault();
          app.timeout = setTimeout(function(){
            if(app.isLongPress()){
              console.log("long press");
              element.classList.toggle("selected");
              element.classList.add("longpress");
              app.toggleSelection(true);
              app.toggleMouseDown(false);
            }
          },TIMEOUT+1);
        }
      }
    }
  })
  document.querySelector("main.main").addEventListener("touchend", function(e,f){
    var element = findAncestor(e.target, "card-item");
    if(!element) {
      return;
    }
    if(element.classList.contains("longpress")) {
      element.classList.remove("longpress");
    }
  })
  document.querySelector("main.main").addEventListener("click", function(e,f){
    if(!app.isSelecting()) {
      e.stopPropagation();
      return;
    }
    var element = findAncestor(e.target, "card-item");
    if(!element) {
      return;
    }
    if(element.classList.contains("longpress")) {
      element.classList.remove("longpress");
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if(!element.classList.contains("custom")) {
      e.stopPropagation();
      return;
    }

    element.classList.toggle("selected");
    if(document.querySelectorAll(".card-item.selected").length == 0)
      app.toggleSelection(false);
    e.preventDefault();
    e.stopPropagation();
  })

  document.getElementById('butAddCustomNumber').addEventListener('click', function() {
    var name = document.getElementById('addCustomName');
    var phone = document.getElementById('addCustomPhone');
    var select = document.querySelector("input[name=selectAddCustomType]:checked");  
    var type = select ? select.value : "call";
    

    if(!app.customNumbers) app.customNumbers = [];
    app.customNumbers.push({name: name.value, phone: phone.value, type: type});
    app.saveCustomNumbers();
    name.value = phone.value = "";
    app.toggleAddCustomDialog(false);
    app.getContactCards();
  });
  document.getElementById('butAddCountry').addEventListener('click', function() {
    var select = document.getElementById('selectCountry');
    var selected = select.options[select.selectedIndex];
    var key = selected.value;

    app.getContactCards(key);
    app.selectedCountry = key;
    app.saveSelectedCountry();
    app.toggleAddDialog(false);
  });

  document.getElementById('butAddCancel').addEventListener('click', function() {
    app.toggleAddDialog(false);
  });

  document.getElementById('butAddCustomCancel').addEventListener('click', function() {
    app.toggleAddCustomDialog(false);
  });

  app.isLongPress = function(){
    return (app._mouseDownTime &&  ((new Date()).getTime() - app._mouseDownTime > TIMEOUT));
  }  

  app.deleteCards = function(){
    var indices = [];
    document.querySelectorAll(".card-item.selected").forEach(function(item){
      indices.push(item.getAttribute("data-index"));
    });
    indices.reverse().forEach(function(index){
      app.customNumbers.splice(index,1);
    });
    app.saveCustomNumbers();
  }
  app.toggleSelection = function(enable){
    app.toggleSelecting(enable);
    document.querySelectorAll(".butDelete").forEach(function(item){ 
      if(enable){
        item.classList.remove('hidden');
      }
      else{
        item.classList.add('hidden');
        document.querySelectorAll(".card-item.selected").forEach(function(item){ item.classList.remove("selected")});
      }
    })
  };
  app.toggleMouseDown = function(enable){
    app._mouseDownTime = enable ? (new Date()).getTime() : null;
  }
  app.isMouseDown = function(){
    return app._mouseDownTime;
  }
  app.toggleSelecting = function(enable){
    app._selecting = enable;
  }
  app.isSelecting = function(){
    return app._selecting;
  }

  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  app.toggleAddCustomDialog = function(visible) {
    if (visible) {
      app.addCustomDialog.classList.add('dialog-container--visible');
    } else {
      app.addCustomDialog.classList.remove('dialog-container--visible');
    }
  };
  app.createCard = function(number,text, key, fullObject, customNumberIndex){
    var card = app.cardTemplate.cloneNode(true);
    card.classList.remove('cardTemplate');
    card.removeAttribute('hidden');
    card.href = 'tel:' + number;
    if(fullObject){
      if(fullObject.type == "sms")
        card.href = 'sms:' + number;
      else if(fullObject.type == "telegram")
        card.href = 'telegram://' + fullObject.extra;
    }
    if(typeof(customNumberIndex) == "number"){
        card.classList.add("custom");
        card.setAttribute("data-index", customNumberIndex);
    }
    (card.querySelector('.icon') || card).classList.add(app.getIconClass(text) || "misc");
    var displayText = (key ? key + " - " : "") + text;
    card.querySelector('.mdl-card__supporting-text .value').textContent = displayText;
    card.querySelector('.mdl-card__title-text .value').textContent = number;
    if(displayText && number){
      app.container.appendChild(card);
    }
  }
  app.updateContactCards = function(country) {
    var node = app.container;
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }

  	var allNumbersForCountry = app.data[country];
    var numbers = {};
    var names = [];
    for(var i = 0; i < 3; i++){
      var text = app.getText(i);
      var numbersForService = allNumbersForCountry[i].split(/ or /gi);
      for(var j = 0; j < numbersForService.length; j++){
        var number = numbersForService[j];
        if(!numbers[text]) {
          numbers[text] = [];
          names.push(text);
        }
        if(numbers[text].indexOf(number) == -1) numbers[text].push(number);
      }
    }
    var extraServices = allNumbersForCountry[3];
    if(extraServices){
      extraServices.split(/; /gi).forEach(function(extraService){
        var serviceNumber = extraService.split(/ - /gi);
        if(serviceNumber.length == 2){
          if(serviceNumber[0].length > 0 && serviceNumber[1].length > 0){
            var text = serviceNumber[0];
            var number = serviceNumber[1];
            if(!numbers[text]) {
              numbers[text] = [];
              names.push(text);
            }
            if(numbers[text].indexOf(number) == -1) numbers[text].push(number);
          }
        }
      });
    }

    names.sort().forEach(function(name){
      numbers[name].forEach(function(number){
        app.createCard(number, name, country);
      });
    });

    app.customNumbers.forEach(function(customNumber,i){
      app.createCard(customNumber.phone, customNumber.name, "", customNumber, i);
    });

  };
  app.getText = function(i){
  	switch(i){
		case 0:
			return "Police"
		case 1:
			return "Ambulance"
		case 2:
			return "Fire"
		default:
			return "";
  	}
  };
  app.getIconClass = function(description){
  	return description.replace(/ /g, "-").toLowerCase();
  };

  app.getContactCards = function(country) {
    if(!country) {
      country = localStorage.selectedCountry || "";
    }
    if(!country) return;
    app.updateContactCards(country);
  };

  app.saveSelectedCountry = function() {
    localStorage.selectedCountry = app.selectedCountry;
  };

  app.saveCustomNumbers = function() {
    var customNumbers = JSON.stringify(app.customNumbers);
    localStorage.customNumbers = customNumbers;
  };

  var initialData = 'Brunei';

  app.selectedCountry = localStorage.selectedCountry;
  if (!app.selectedCountry) {
    app.selectedCountry = initialData;
    app.saveSelectedCountry();
  }
  app.customNumbers = localStorage.customNumbers;
  if (app.customNumbers) {
    app.customNumbers = JSON.parse(app.customNumbers);
  }
  else{
    app.customNumbers = [];
    app.saveCustomNumbers();
  }

  app.getContactCards();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
