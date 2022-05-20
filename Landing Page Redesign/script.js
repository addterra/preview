// register scroll trigger
gsap.registerPlugin(ScrollTrigger); 


//variables 
var vh = (window.innerHeight)/100;
var vw = (window.innerWidth)/100;
// size of circle menu 
var tenvw = vw * 14; 
var half = vw * 50; 
var imageMove = vw * 50; 
var full = vw * 100; 
var full2 = vw * 100; 
var fullh = vh * 140; 
var circleH; 
var circleW; 
var imageMoveUp = 0; 
var fullM = 0;
// circle menu for phone screen 

var x = window.matchMedia("(max-width: 580px)")

function myFunction(x) {
  if (x.matches) { // If media query matches
    circleH = vw * 60; 
    circleW = vw * 45; 
    imageMove = 0; 
    imageMoveUp = 0; 
    full = 0; 
    half = 0; 
    full2 = 0; 
    fullh = 0; 
    fullM = vh * 200;

  } else {
    circleH = vw * 14;
    circleW = vw * 14; 
  }
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/// circle menu animation 
// menu opens
function menuIn() {
  gsap.to("#circle_menu", {duration: 1.5, ease: 'back', x: -circleW, y: circleH});
  gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 0});
};

// menu closes
function menuOut() {
  gsap.to("#circle_menu", {duration: 2, ease: 'back', x: circleW, y: -circleH});
  gsap.to("#menuIcon", {duration: 0.5, ease: 'power 1', opacity: 1});
};


// scroll trigger for text and image movement in the first section 

var tl = gsap.timeline( {
  scrollTrigger: {  
      trigger: ".section2",
      start: 'top top-=200',
      end: 'bottom bottom', 
      scrub: true 
  }
});

tl.to(".movingText1", {duration: 0.5, ease: 'linear', x: -full}); 
tl.to(".movingText2", {duration: 0.5, ease: 'linear', x: -half}, "<");
tl.to(".movingText2", {duration: 0.5, ease: 'linear', x: -full2}, 1);
tl.to(".movingText3", {duration: 0.5, ease: 'linear', x: -half}, "<");
tl.to(".movingText3", {duration: 0.5, ease: 'linear', x: -half});
tl.to("#firstImage", {duration: 1, ease: 'linear', x: -imageMove});
//tl.to("#firstImage", {duration: 2, ease: 'linear', y: -imageMoveUp}, "<-1");
tl.to(".subsection2", {duration: 2, ease: 'linear', y: -fullh});
//tl.to(".orangeNumberSection", {duration: 2, ease: 'linear', y: -fullM}, "<");
tl.to("#stickyLogo", {duration: 0.5, ease: 'linear', opacity: 1}, "<");



// advisor popups: functions to open and close 

//TJ
function popUp1() {
    document.querySelector('#TJ').style.display = "block"; 
}
function popDown1() {
    document.querySelector('#TJ').style.display = "none"; 
}

//Rick
function popUp2() {
  document.querySelector('#rick').style.display = "block"; 
}
function popDown2() {
  document.querySelector('#rick').style.display = "none"; 
}

//Jorhena 
function popUp3() {
  document.querySelector('#jor').style.display = "block"; 
}
function popDown3() {
  document.querySelector('#jor').style.display = "none"; 
}

//Matt
function popUp4() {
  document.querySelector('#matt').style.display = "block"; 
}
function popDown4() {
  document.querySelector('#matt').style.display = "none"; 
}

//Vita 
function popUp5() {
  document.querySelector('#vita').style.display = "block"; 
}
function popDown5() {
  document.querySelector('#vita').style.display = "none"; 
}


//
// text slider code 

const _C = document.querySelector('.slider'), 
      N = _C.children.length;

let i = 0, x0 = null, locked = false, w;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) {
  x0 = unify(e).clientX;
	_C.classList.toggle('smooth', !(locked = true))
};

function drag(e) {
	e.preventDefault();
	
	if(locked) 		
		_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
};

function move(e) {
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx), 
				f = +(s*dx/w).toFixed(2);

    if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
			_C.style.setProperty('--i', i -= s);
			f = 1 - f
      // circle nav code
      document.querySelector(`.navCircle1`).style.backgroundColor = "white";
      document.querySelector(`.navCircle2`).style.backgroundColor = "white";
      document.querySelector(`.navCircle3`).style.backgroundColor = "white";
      document.querySelector(`.navCircle${i+1}`).style.backgroundColor = "rgba(0, 0, 0, 0.185)";

		}
		
    _C.style.setProperty('--tx', '0px');
		_C.style.setProperty('--f', f);
    _C.classList.toggle('smooth', !(locked = false));
    x0 = null

  }
};

function size() { w = window.innerWidth };

size();
_C.style.setProperty('--n', N);

addEventListener('resize', size, false);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mousemove', drag, false);
_C.addEventListener('touchmove', drag, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);



// function to change slider buttons accuratley

