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
var fullh = vh * 90;  /* used to be 140 */ 
var circleH; 
var circleW; 
var imageMoveUp = 0; 
var fullM = 0;

// var to control animation length (controls where it ends) 
var bottom = 'bottom bottom';

// variables for the lengths of each step of the animation
var ani1 = "0"; 
var ani2 = "<"; 
var ani3 = "2"; 
var ani4 = "<"; 
var ani5 = ">"; 
var ani6 = ">"; 
var ani7 = ">";
var ani8 = "<";  


// variables to select mobile or ipad view 
var x = window.matchMedia("(max-width: 580px)")
var y = window.matchMedia("(max-width: 1024px)")

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

  } else if (y.matches) {
    circleH = vw * 40; 
    circleW = vw * 35; 
    full = 0; 
    half = 0; 
    full2 = 0; 
    fullh = 0; 
    imageMove = 0; 
    imageMoveUp = 0; 
    
    //controls how long the animation sequence lasts 
    bottom = 'top top'
     
    // resets the animation steps to all happen at once (basically deleting the animation)
    ani1 = "0"; 
    ani2 = "<"; 
    ani3 = "<"; 
    ani4 = "<"; 
    ani5 = "<"; 
    ani6 = "<"; 
    ani7 = "<";
    ani8 = "<";  
    
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
      end: bottom, 
      scrub: true 
  }
});


tl.to(".movingText1", {duration: 1, ease: 'linear', x: -full}, ani1); 
tl.to(".movingText2", {duration: 1, ease: 'linear', x: -half}, ani2);
tl.to(".movingText2", {duration: 1, ease: 'linear', x: -full2}, ani3);
tl.to(".movingText3", {duration: 1, ease: 'linear', x: -half}, ani4);
tl.to(".movingText3", {duration: 1, ease: 'linear', x: -half}, ani5);
tl.to("#firstImage", {duration: 2, ease: 'linear', x: -imageMove}, ani6);
//tl.to("#firstImage", {duration: 2, ease: 'linear', y: -imageMoveUp}, "<-1");
tl.to(".subsection2", {duration: 4, ease: 'linear', y: -fullh}, ani7);
//tl.to(".orangeNumberSection", {duration: 2, ease: 'linear', y: -fullM}, "<");
tl.to("#stickyLogo", {duration: 1, ease: 'linear', opacity: 1}, ani8);



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

//Brian
function popUpB() {
  document.querySelector('#brian').style.display = "block"; 
}
function popDownB() {
  document.querySelector('#brian').style.display = "none"; 
}

//Mark 
function popUp6() {
  document.querySelector('#mark').style.display = "block"; 
}
function popDown6() {
  document.querySelector('#mark').style.display = "none"; 
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