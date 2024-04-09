/*
	Sepehr-Common Scripts v0.3 | By Morteza Rastegar (qwerty13)
	github.com/qwerty13
*/

// Variables
var webVersion = "1.0.1";
var webName = "Sepehr";


// AJAX Lazy Load Page Components
document.addEventListener("DOMContentLoaded", () => {
	// loadJS('../js/sepehr-translate.js', function(){ /* Do Something */ });
	loadCSS('../css/negara.css', function(){ /* Do Something */ });
});

// Global Interval Variable to Handle Page AJAX Data Refresh
var pageInterval = null;


function printWebName() {
	document.write(webName);
}
function printWebVersion() {
	document.write(webVersion);
}
function printWebFooter() {
	document.write('\
	<div class="docs-footer container grid-lg" id="copyright">\
		<p>'+ webName + ' Version ' + webVersion + '</p>\
		<p><a href="https://mortezarastegar.ir" target="_blank">Morteza Rastegar</a>.</p>\
	</div>\
	');
}
function loadJS(url, implementationCode = null, location = document.head) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
function loadCSS(url, implementationCode = null, location = document.head) {
    var cssTag = document.createElement('link');
    cssTag.rel = "stylesheet";
    cssTag.href = url;

    cssTag.onload = implementationCode;
    cssTag.onreadystatechange = implementationCode;

    location.appendChild(cssTag);
};

// disableInitialTransition(500);
function disableInitialTransition(disableTimeout) {
	var notransitionStyle = document.createElement('style');
	notransitionStyle.id = 'noTrCSS';
	notransitionStyle.textContent = '.notransition * { transition: none !important; }';
	document.head.appendChild(notransitionStyle);
	document.addEventListener("DOMContentLoaded", () => {
		document.body.classList.add("notransition");
	});
	window.addEventListener("load", () => {
		setTimeout(() => {
			document.body.classList.remove("notransition");
			document.getElementById('noTrCSS').remove();
		}, disableTimeout);
	});
}
const isEmpty = inputObject => {
	return Object.keys(inputObject).length === 0;
};
function checkInputValues(divToCheck = document) {
	let inputs = divToCheck.querySelectorAll('input,textarea,select');
	let isValid = true;
	inputs.forEach(input => {
		if (input.hasAttribute('required') && input.value == '' && !input.hasAttribute('hidden') && !input.disabled == true) {
			console.error(input.id + " is empty!");
			showToast(getTranslate("Check Empty Inputs!"), "error");
			isValid = false;
		}
		if (input.type == 'number' && input.hasAttribute('required') && (Number(input.value) < (input.min || -999999999999) || Number(input.value) > (input.max || 999999999999))) {
			console.error(input.id + " range is invalid!");
			showToast(getTranslate("Check Input Ranges!"), "error");
			isValid = false;
		}
		if (input.type == 'text' && input.hasAttribute('required') && (input.value.length < (input.minLength || -999999999999) || input.value.length > (input.maxLength || 999999999999))) {
			console.error(input.id + " range is invalid!");
			showToast(getTranslate("Check Input Length!"), "error");
			isValid = false;
		}
		if (input.hasAttribute('pattern') && !(input.checkValidity())) {
			console.error(input.id + " is invalid!");
			showToast(getTranslate("Check Input Validity!"), "error");
			isValid = false;
		}
	});
	return isValid;
}
function disableElementsAt(divId) {
	if (document.getElementById(divId) == null) return;
	var nodes = document.querySelectorAll('#'+divId+' *');
	for(var i = 0; i < nodes.length; i++){
		try { nodes[i].setAttribute("disabled", "") } catch(err) {}
	}
}
function enableElementsAt(divId) {
	if (document.getElementById(divId) == null) return;
	var nodes = document.querySelectorAll('#'+divId+' *');
	for(var i = 0; i < nodes.length; i++){
		try { nodes[i].removeAttribute("disabled") } catch(err) {}
	}
}
function _normalizeNumberInput(element) {
	element.value = Number(element.value)<=Number(element.max) ? Number(element.value)>=Number(element.min) ? element.value : element.min : element.max;
}



function showToast(message, bgColor = 'primary', timeout = 6000) {
	if (document.getElementById("myToast") != null)
		document.getElementById("myToast").remove();
	var myToast = document.createElement("div");
	myToast.id = "myToast";
	myToast.className = "columns text-center p-fixed column col-4 col-sm-12 col-md-9 col-lg-7 col-xl-6 col-mx-auto";
	myToast.style	  = "z-index: 1000; bottom: 2rem; left: 50%; transform: translateX(-50%); margin: 0 auto;";
	myToast.innerHTML = '<div class="column col-12">\
							<div class="toast toast-' + bgColor + '">\
								<button onClick="hideToast();" class="btn btn-clear float-right"></button>\
								<p><span style="vertical-align: text-bottom;"><i class="n-icon n-icon-message-square"></i></span> &nbsp'+ message +'</p>\
							</div>\
						</div>';
	document.body.appendChild(myToast);
	if (timeout > 0)
		setTimeout(function(){ hideToast() }, timeout);
}
function hideToast() {
	if (document.getElementById("myToast") != null)
		document.getElementById("myToast").remove();
}


function showNavs(enabledAccordion) {
	const darkmode = new Darkmode({autoMatchOsTheme: false});

	let text = '\
				<div class="docs-brand">\
					<a class="docs-logo" href="index.html">\
						<img class="darkmode-white" src="../img/logoType.svg">\
					</a>\
					<a class="docs-logo" href="index.html">\
						<h2>'+webName+'</h2>\
						<small class="label label-secondary text-bold">Demo</small>\
					</a>\
				<div class="d-flex" style="margin-top: 1rem;">\
					<code class="label label-rounded p-centered" style="margin:0 auto; padding:0.2rem; width: 100%">\
						<span class="p-centered" id="userSpec" style="margin:0 0.4rem;">\
							<i class="n-icon n-icon-user-2"></i> guest\
						</span>\
					</code>\
				</div>\
				<div class="d-flex" style="margin-top: 0.4rem;">\
					<a class="btn btn-primary btn-sm" style="border-radius: 5rem; width: 100%;" href="login.html">Login</a>\
				</div>\
			</div>\
			<div class="docs-nav">\
				<div class="accordion-container" id="accordionMenus">\
					<div class="accordion">\
						<input id="accordion-appearance" type="checkbox" name="docs-accordion-checkbox" '+ (enabledAccordion.indexOf('accordion-appearance') !== -1 ? 'checked':'') +' hidden>\
						<label class="accordion-header c-hand" for="accordion-appearance">\
							<i class="icon n-icon n-icon-chevron-right mr-1"></i>\
							Appearance\
						</label>\
						<div class="accordion-body" style="padding: 0 0.5rem;">\
							<div class="btns d-flex p-centered" style="margin-top: 0.3rem; margin-bottom: 0.3rem;">\
								<div class="btn-group btn-group-block" style="direction: ltr;">\
								<button class="btn '+(myLanguage=="fa"?'btn-primary':'')+'" onclick="changeLanguage(\'fa\');">فارسی</button>\
								<button class="btn '+(myLanguage=="en"?'btn-primary':'')+'" onclick="changeLanguage(\'en\');">English</button>\
								</div>\
							</div>\
							<div class="btns d-flex p-centered" style="margin-top: 0.3rem; margin-bottom: 0.3rem;">\
								<div class="btn-group btn-group-block" style="direction: ltr;">\
									<button class="btn btn-secondary btn-darkmode" title="Toggle Darkmode" id="darkToggle"></button>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="accordion">\
						<input id="accordion-tools" type="checkbox" name="docs-accordion-checkbox" '+ (enabledAccordion.indexOf('accordion-tools') !== -1 ? 'checked':'') +' hidden>\
						<label class="accordion-header c-hand" for="accordion-tools">\
							<i class="icon n-icon n-icon-chevron-right mr-1"></i>\
							Tools\
						</label>\
						<div class="accordion-body" style="padding: 0 0.5rem;">\
							<div class="btns d-flex p-centered" style="margin-top: 0.3rem; margin-bottom: 0.3rem;">\
								<div class="btn-group btn-group-block">\
									<button class="btn btn-secondary" title="Export Page Settings" onclick=""><i class="n-icon n-icon-monitor-up"></i> Export</button>\
								</div>\
							</div>\
							<div class="btns d-flex p-centered" style="margin-top: 0.3rem; margin-bottom: 0.3rem;">\
								<div class="btn-group btn-group-block">\
									<button class="btn btn-secondary" title="Import Page Settings" onclick=""><i class="n-icon n-icon-monitor-down"></i> Import</button>\
								</div>\
							</div>\
						</div>\
					</div>\
					\
					<div class="accordion">\
						<input id="accordion-views" type="checkbox" name="docs-accordion-checkbox" '+ (enabledAccordion.indexOf('accordion-views') !== -1 ? 'checked':'') +' hidden>\
						<label class="accordion-header c-hand" for="accordion-views">\
							<i class="icon n-icon n-icon-chevron-right mr-1"></i>\
							View\
						</label>\
						<div class="accordion-body">\
							<ul class="menu menu-nav">\
								<li class="menu-item"><a href="#"><i class="n-icon n-icon-info"></i> Info</a></li>\
								<li class="menu-item"><a href="#"><i class="n-icon n-icon-history"></i> Files</a></li>\
								<li class="menu-item"><a href="#"><i class="n-icon n-icon-phone-call"></i> Contact Us</a></li>\
							</ul>\
						</div>\
					</div>\
					<div class="accordion">\
						<input id="accordion-settings" type="checkbox" name="docs-accordion-checkbox" '+ (enabledAccordion.indexOf('accordion-settings') !== -1 ? 'checked':'') +' hidden>\
						<label class="accordion-header c-hand" for="accordion-settings">\
							<i class="icon n-icon n-icon-chevron-right mr-1"></i>\
							Settings\
						</label>\
						<div class="accordion-body">\
							<ul class="menu menu-nav">\
							<li class="menu-item"><a href="net_settings.html"><i class="n-icon n-icon-network"></i> Network</a></li>\
							<li class="menu-item"><a href="#"><i class="n-icon n-icon-hard-drive"></i> Hardware</a></li>\
							<li class="menu-item"><a href="#"><i class="n-icon n-icon-calendar-clock"></i> Date & Time</a></li>\
							</ul>\
						</div>\
					</div>\
				</div>\
			</div>\
			';
	document.write(text);
	
	document.getElementById("darkToggle").onclick = function() { darkmode.toggle(); }
}

function SendRequest(Method, Address, Data = null, OnLoad = null, OnError = null, isAsync = true, checkInput = true) {
	if (checkInput == true) {
		if (Method == 'PUT') if (checkInputValues() == false) return;
	}

	var request = new XMLHttpRequest();
	request.open(Method, Address, isAsync);
	request.setRequestHeader("Content-Type", "application/json");
	if (OnLoad == null)
		OnLoad = function () {
			console.log("Response:", this.responseText);
		};
	request.onload = OnLoad;
	var OnRSC = function () {
		if (this.status == 401) { showToast(getTranslate("You are not authorized to do this!"), "error"); }
		if (this.status == 403) { showToast(getTranslate("Permission denied!"), "error"); }
	};
	request.onreadystatechange = OnRSC;
	if (OnError == null)
		OnError = function () {
			showToast(getTranslate("Failed to connect to server!"), "error");
		};
	request.onerror = OnError;
	request.onloadstart = (event) => { disableElementsAt("btnZone"); }
	request.onloadend = (event) => { enableElementsAt("btnZone"); }
	if (Data) console.log(Data);
	request.send(Data);
}