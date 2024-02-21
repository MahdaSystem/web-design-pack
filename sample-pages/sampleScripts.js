
// For Network Setting
function _wifiDHCPCheck() {
	if (document.getElementById("wifiDHCP").checked == true){
		disableElementsAt("wifiStaticIPCol");
		document.getElementById("wifiManualDNS").checked = false;
		document.getElementById("wifiManualDNS").dispatchEvent(new Event('input'));
	} else {
		enableElementsAt("wifiStaticIPCol");
		document.getElementById("wifiManualDNS").checked = true;
		document.getElementById("wifiManualDNS").dispatchEvent(new Event('input'));
	}
}
function _wifiManualDNSCheck() {
	if (document.getElementById("wifiManualDNS").checked == true){
		enableElementsAt("wifiStaticDNSCol");
	} else {
		disableElementsAt("wifiStaticDNSCol");
	}
}