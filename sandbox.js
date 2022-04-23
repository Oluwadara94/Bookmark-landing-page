// F
// S
// H

// declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels;

window.onload=function() {
    // when the page loads, grab the li elements
    tabLinks = document.getElementById("tabs").getElementsByTagName("a");
	// Now get all the tab panel container divs
	tabPanels = document.getElementById("containers").getElementsByTagName("section");
	
	// activate the _first_ one
    displayPanel(tabLinks[0]);
   
    // attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() { 
			displayPanel(this); 
			return false;
		}
        tabLinks[i].onfocus = function() { 
			displayPanel(this); 
			return false;
		}
    }
}

function displayPanel(tabToActivate) {
    // go through all the <li> elements
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
			// if it's the one to activate, change its class
            tabLinks[i].classList.add("active");
			// and display the corresponding panel
			tabPanels[i].style.display = "flex";
        } else {
			// remove the active class on the link
        	tabLinks[i].classList.remove("active");
			// hide the panel
			tabPanels[i].style.display = "none";
        }
	}
}

function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
} 

const email = document.getElementById('email');
const submit = document.getElementById('submit');
const errMsg = document.querySelector('fieldset');
const form = document.querySelector('.form');
const valEm = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(form.innerHTML);

// Email Validation

const emVal = function (e) {

	e.preventDefault();
	
	if (!valEm.test(email.value)){
		console.log('you have entered an invalid email')
		errMsg.removeAttribute('class', 'fieldset2');
		errMsg.setAttribute('class', 'fieldset1');
		// errMsg.innerHTML += `<em style="color: white;">Whoops! make sure it's an email...</em>`;

		// form.innerHTML += `<img src="images/icon-error.svg" alt="">`
	} else {
		console.log('You are good to go')
		errMsg.removeAttribute('class', 'fieldset1');
		errMsg.setAttribute('class', 'fieldset2');
		localSave();
	}
}


submit.addEventListener('click', emVal);

// Local Storage

function localSave(){
	let key = -1;
	submit.onclick = function(){
		key = localStorage.length + 1;
		const mail = email.value;
		// to ensure that our the function is returning the correct value
		console.log(key, mail);

		if (key && mail){
			localStorage.setItem(key, mail);
			email.value = ''
		}
	}
	return key;
}

// Mobile menu

let menu = document.querySelector('#abtn');
const dpNav = document.querySelector('.nav-con');
const menuIcon = document.querySelector('#a');

// function toggleMenu () {
// 	if (menu.style.display === 'block'){
// 		menu.style.display = 'none';
// 		menuIcon.src = 'images/icon-hamburger.svg';
// 	} else {
// 		menu.style.display = 'block';
// 		menuIcon.src = 'images/icon-close.svg';
// 	}
// }

menu.addEventListener('click', toggleMenu);

function toggleMenu () {
	// console.log(dpNav.style.display = 'flex');
	if (menuIcon.getAttribute('src') == 'images/icon-hamburger.svg'){
		menuIcon.setAttribute('src','images/icon-close.svg');
		dpNav.style.display = 'flex'
	} else {
		menuIcon.setAttribute('src', 'images/icon-hamburger.svg');
		dpNav.style.display = 'none'
	}
}