import "../css/fullpage.min.css"
import fullpage from 'fullpage.js';
import "../css/index.css";

var fullPageInstance = new fullpage('#myFullpage', {

    autoScrolling:false,


    lockAnchors: false,
	anchors:['one', 'two','three','four','five'],
	navigation: true,
	

    css3: true,
	scrollingSpeed: 1200,
	autoScrolling: true,
	fitToSection: true,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	scrollOverflow: true,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

    credits: { enabled: false},
})