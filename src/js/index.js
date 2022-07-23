import "../css/index.css";
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger,CSSPlugin);

const scroller = document.querySelector('#myFullPage');

const loaclScroll = Scrollbar.init(scroller, {
	damping: .5,
	alwaysShowTracks: true,
	delegateTo: document,
});

ScrollTrigger.scrollerProxy("#myFullPage", {
	scrollTop(value) {
		if (arguments.length) {
			loaclScroll.scrollTop = value;
		}
		return loaclScroll.scrollTop;
	}
});

loaclScroll.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scroller });


gsap.utils.toArray(".s4-section").forEach((panel, i) => {
	gsap.timeline({
		defaults: { ease: 'slow(0.7, 0.7, false)' },
		scrollTrigger: {
			trigger: panel,
			// start: ()=> `+=${panel.offsetLeft+panel.offsetWidth}`,
			start:"top top",
			end:"200% bottom",
			scrub:true,
			pin:panel,
			pinnedContainer:"#myFullPage",
		},
		defaults:{duration:1}
	})
})

gsap.utils.toArray(".section").forEach((panel, i) => {
	gsap.timeline({
		scrollTrigger: {
			trigger: panel,
			start: "top bottom",
			end: "+=100%",
			scrub:true,
		},
		defaults:{duration:1}
	}).fromTo(".index-section-two-top > *",{opacity:0,y:-100},{opacity:1,y:0,stagger:{each:.5}})
	.fromTo(".section-two-bottom-part-one > * ",{opacity:0,y:-100},{opacity:1,y:0},"-=.8")
	.fromTo(".section-two-bottom-part-two > * ",{opacity:0,y:100},{opacity:1,y:0},"-=.8")
	.fromTo(".s5-header ",{opacity:0,x:100},{opacity:1,x:0})
	.fromTo(".s5-subHeader ",{opacity:0,x:-100},{opacity:1,x:0},"-=1")
	.fromTo(".s5-pargraph ",{opacity:0,y:100},{opacity:1,y:0},"-=1")
	.fromTo(".s6-header ",{opacity:0,x:100},{opacity:1,x:0})
	.fromTo(".s6-sub-header ",{opacity:0,x:-100},{opacity:1,x:0},"-=1")
	.fromTo(".s6-paragraph",{opacity:0,y:100},{opacity:1,y:0},"-=1")
});






const sectionTwo = document.querySelector(".index-section-two");
const sectionThree = document.querySelector(".index-section-three");
const indexCompilerContainer = document.querySelector('.index-section-one-center-content');
const indexCompiler = document.querySelector("#index-page-compiler");
const silderControls = document.querySelectorAll('.s3-slider-controls-item');
const sliderItems = document.querySelectorAll('.s3-slider-item ');
const sliderContainer = document.querySelector('.s3-slider-container');
const frontEndCompiler = document.querySelector('#frontEndCompiler');
const mobileBoxOne = document.querySelector(".mobile-s2-box:nth-child(1)");
const mobileBoxTwo = document.querySelector(".mobile-s2-box:nth-child(2)");
const validInput = document.querySelector('#input-valid-two');
const InValidInput = document.querySelector('#input-invalid-two');
const bakEndFormOne = document.querySelector('.s-4-part-two-col-1 > .s4-form');
const loadingFormOne = document.querySelector('.s4-form:nth-of-type(1) > .form-loading');
const loadingFormTwo = document.querySelector('.s-4-part-two-col-3 .form-loading');
const backEndContentOne = document.querySelector(".s4-form:nth-of-type(1)  > .mobile-container");
const backEndContentTwo = document.querySelector(".s-4-part-two-col-3 .mobile-container");
const seoItems = document.querySelectorAll('.seo-bottom-item');
const commentProfiles = document.querySelectorAll(".s7-profile-item");
const commentItems =document.querySelectorAll('.comment-item');


const indexCompilerText = `<!DOCTYPE html>\n<html> \n<head> \n <title>PHP</title> \n</head> \n<body> \n<?php \n$employees = array(‘John’, ‘Michelle’, ‘Mari’, ‘Luke’, ‘Nellie’); \n$total = count($employees); \n?> \n<ul> \n<?php $i = 0; ?> \n<?php while ($i < $total) { ?> \n<li><?php echo $employees[$i] ?></li> \n<?php  ++$i ?> \n<?php }  ?> \n</ul> \n</body> \n</html>`;
const forntCompilerText = String(mobileBoxOne.outerHTML);
frontEndCompiler.innerText = forntCompilerText;


let content = "";
let currentLetter = 0;
let timer;

let frontCompilerLetter = "";
let forntLetterIndex = 0;
let forntTimer;
const frontEndArrayStyles = "responsive p-1 rounded justify-between dir-rtl ";
const constantFrontTextPartOne = ` "> \n \t <div class="mobile-box-s-one">\n \t <div class="mobile-box-profile">\n \t <img src="./assets/images/Profiles/download(2).png" alt="">\n \t </div>\n \t <div class="mobile-box-prof-text">\n \t <p>۱۶:۵۴</p>\n \t <small>۷ مهر</small>\n \t </div>\n \t </div>\n \t <div class="mobile-box-s-two">\n \t <p>روشن وب داتیس</p> \n \t </div>\n \t <div class="mobile-box-s-three">\n \t <button>منتظر تماس باشید</button>\n \t </div>\n</div>`;
const constantFrontTextTwo = `<div class="mobile-s2-box `;

let startSeoItem=0;
let currentSeoItem = seoItems.length-1;
let SEOid;
let prevStep = 1;

document.body.onload = function () {
    textWrite();
	setInterval(changeAutoSlide,4000);
    setInterval(showAutoComment,5000);
	showFrontCompiler();
	showBackeEnd(validInput, "********", loadingFormOne, backEndContentOne, 1000);
	showBackeEnd(InValidInput, "********", loadingFormTwo, backEndContentTwo, 3000);
	seoAnimation();
}

function textWrite() {

	if (currentLetter != 0) {
		clearTimeout(timer);
	}

	currentLetter++;
	content = indexCompilerText.slice(0, currentLetter);
	indexCompiler.innerText = content;

	if (indexCompilerContainer.scrollHeight >= indexCompilerContainer.clientHeight) {
		indexCompilerContainer.scrollTop = indexCompilerContainer.scrollHeight - indexCompilerContainer.clientHeight;
	}

	if (currentLetter == indexCompilerText.length) {
		currentLetter = 0;
		return;
	}
	timer = setTimeout(textWrite, 100);
}

function changeAutoSlide() {

    const activeSlide = document.querySelector('.active-slide');
    let indexActive = activeSlide.getAttribute("data-index");
    silderControls[indexActive].classList.remove('active-slide');
    sliderItems[indexActive].classList.remove('active-slide-image');

    indexActive++;

    indexActive = indexActive>=silderControls.length ? 0 : indexActive;
    
    silderControls[indexActive].classList.add('active-slide');
    sliderItems[indexActive].classList.add('active-slide-image');
    sliderContainer.style.transform = `translateX(${indexActive * 25}%)`;

}

silderControls.forEach(item => {
    item.addEventListener('click', (event) => {
        const current = Number(event.target.getAttribute('data-index'));
        changeSlide(current);
    });
});

function changeSlide(number) {

    const active = document.querySelector('.active-slide');
    const index = active.getAttribute('data-index');
    if (active && index) {
        active.classList.remove('active-slide');
        sliderItems[index].classList.remove('active-slide-image');
    }

    silderControls[number].classList.add('active-slide');
    const indexTwo = Number(silderControls[number].getAttribute('data-index'));
    sliderItems[indexTwo].classList.add('active-slide-image');
    sliderContainer.style.transform = `translateX(${indexTwo * 25}%)`;
}

function showFrontCompiler() {

    if (forntLetterIndex != 0) {
        clearTimeout(forntTimer);
    }

    if(forntLetterIndex==0){
        mobileBoxOne.className="";
        mobileBoxTwo.className="";
    }

    forntLetterIndex++;
    frontCompilerLetter = frontEndArrayStyles.slice(0, forntLetterIndex);
    

    frontEndCompiler.innerText = constantFrontTextTwo + frontCompilerLetter + constantFrontTextPartOne;

    if(frontCompilerLetter.endsWith(" ")){
        let classRes=frontCompilerLetter.trim();
        mobileBoxOne.className="mobile-s2-box "+classRes;
        mobileBoxTwo.className="mobile-s2-box "+classRes;
    }

    if (frontCompilerLetter.length == frontEndArrayStyles.length) {
        forntLetterIndex = 0;
        return;
    }

    forntTimer = setTimeout(showFrontCompiler, 400);
}

function showBackeEnd(element, textInput, loadingEl, backEl, time) {

    let textMessage = "";
    let count = 0;
    let timerOne;
    let timerTwo;
    let iterationCount = 0;

    if (iterationCount != 0) {
        backEl.classList.remove('show-backend')
        clearTimeout(timerTwo);
    }


    timerOne = setInterval(function () {

        if (count == textInput.length) {


            iterationCount++;

            clearInterval(timerOne);

            loadingEl.classList.add('show-loading');

            timerTwo = setTimeout(() => {
                loadingEl.classList.remove('show-loading');
                textMessage = "";
                element.value = textMessage;
                count = 0;
                backEl.classList.add('show-backend')
                bakEndFormOne.innerHTML = backEl.outerHTML;

            }, time);

        }
        count++;
        textMessage = textInput.slice(0, count);
        element.value = textMessage;
    }, 500);
}

function seoAnimation() {
    seoItems.forEach(elem => {
        elem.style.transition = "none";
        elem.style.transform = "translateY(0)";
    });
    SEOid = setInterval(() => {
        if (startSeoItem > seoItems.length - 2) {
            clearInterval(SEOid);
            startSeoItem = 0;
            prevStep = 1;
            return
        }

        seoItems[currentSeoItem].style.transition = `all .5s ease`;
        seoItems[currentSeoItem].style.transform = `translateY(-${(prevStep) * 100}%)`;
        seoItems[(currentSeoItem - prevStep)].style.transition = `all .5s ease`;
        seoItems[(currentSeoItem - prevStep)].style.transform = `translateY(100%)`;

        prevStep++;
        startSeoItem++;
    }, 2000)
}

commentProfiles.forEach(element=>{
    element.addEventListener('click',(event)=>{
        const activeUser=document.querySelector('.active-user');
        const activeComment = document.querySelector('.show-comment');

        if(activeUser && activeComment){
            activeUser.classList.remove('active-user');
            activeComment.classList.remove('show-comment');
        }

        const index = parseInt(event.currentTarget.getAttribute('data-index')) || 0;
        event.currentTarget.classList.add('active-user');
        showComment(index);
    })
});

function showAutoComment(){
    const activeUser=document.querySelector('.active-user');
    let activeIndex=activeUser.getAttribute('data-index');
    activeUser.classList.remove('active-user');
    commentItems[activeIndex].classList.remove('show-comment');
    activeIndex++;
    activeIndex = activeIndex >= commentProfiles.length ? 0 : activeIndex;
    commentProfiles[activeIndex].classList.add('active-user');
    commentItems[activeIndex].classList.add('show-comment');
}

function showComment(number=0){
    commentItems[number].classList.add('show-comment');
}