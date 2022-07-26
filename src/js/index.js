import "../css/index.css";
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

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
const commentItems = document.querySelectorAll('.comment-item');
const mobileFrame = document.querySelector("#mobile-frame");
const loadSpeedElement = document.querySelectorAll('.load-speed');


gsap.registerPlugin(ScrollTrigger, CSSPlugin);

gsap.to('.overlay-index', { y: "-100vh", delay: 1.5 })
gsap.to('.index-overlay-1', { y: "-100vh", delay: .5 })
gsap.to('.index-overlay-2', { y: "-100vh", delay: .7 })
gsap.to('.index-overlay-3', { y: "-100vh", delay: .9 })
gsap.fromTo(".index-right-circle-one", { x: "-30rem", opacity: 0 }, { x: 0, opacity: 1, delay: .8 })
gsap.fromTo(".index-right-circle-two", { x: "30rem", opacity: 0 }, { x: 0, opacity: 1, delay: 1 })
gsap.fromTo(".index-section-one-content", { x: "30rem", opacity: 0 }, { x: 0, opacity: 1, delay: 1.5 })
gsap.fromTo(".profile-index-left-container", { x: "-30rem", opacity: 0 }, { x: 0, opacity: 1, delay: 2 })
gsap.fromTo(".polygan-index-left-containe", { y: "2rem", opacity: 0 }, { y: 0, opacity: 1, delay: 2.5 });


const scroller = document.querySelector('#myFullPage');

const loaclScroll = Scrollbar.init(scroller, {
    damping: .5,
    alwaysShowTracks: false,
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


const tlOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.index-section-two',
        start: "top top",
        end: "100% bottom",
        scrub: true,
        once: true,

        snap: { snapTo: [0.5], duration: 1, delay: 0 },
        onEnter(self) {
            tlOne.play();
        },
        onLeaveBack: self => self.disable()
    },
    paused: true,
});
tlOne.fromTo(".s2-header", { opacity: 0, y: "-100%" }, { opacity: 1, y: 0 })
    .fromTo(".s2-paragraph", { opacity: 0, y: "100%" }, { opacity: 1, y: 0 })
    .fromTo(".section-two-bottom-part-one > .section-two-bottom-item", { opacity: 0, y: -100 }, { opacity: 1, y: 0, stagger: .3 })
    .fromTo(".section-two-bottom-part-two > .section-two-bottom-item ", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: .3 });


const tlTwo = gsap.timeline({
    paused: true,
    defaults: {
        ease: "circ.out"
    },
    scrollTrigger: {
        trigger: ".index-section-three",
        start: "top top",
        end: "200% top",
        scrub: true,
        pin: true,
        fastScrollEnd: true,
        once: true,
        markers: true,
        toggleActions: "none none none none",
        onEnter() {
            tlTwo.play();
        },
        refreshPriority:1
    },
    onComplete() {
        setInterval(changeAutoSlide, 4000);
    }
});
tlTwo.fromTo(".section-three-right > .s3-overlay", { y: "-100%", opacity: 0 }, { opacity: 1, y: 0 }, ">")
    .fromTo(".section-three-right > .s3-overlay", { y: 0, opacity: 1 }, { opacity: 0, y: "-100%" }, ">")
    .fromTo(".section-three-right >*:not(.s3-overlay)", { y: "-100%", opacity: 0 }, { opacity: 1, y: 0, stagger: .3 }, ">")
    .fromTo(".section-trhee-circle-three ", { x: "100%", opacity: 0 }, { opacity: 1, x: 0 })
    .fromTo(".section-trhee-circle-two ", { x: "-100%", opacity: 0 }, { opacity: 1, x: 0 })
    .fromTo(".section-trhee-circle-one ", { x: "-100%", opacity: 0 }, {
        opacity: 1, x: 0, onComplete: () => {
            if (tlTwo.scrollTrigger) {
                tlTwo.scrollTrigger.kill(true);
                ScrollTrigger.refresh(true);
            }
            tlTwo.progress(1);
            const elem = document.querySelector('.index-section-three');
            loaclScroll.scrollTop = elem.offsetTop - (innerHeight / 2 - elem.offsetHeight / 2)
        }
    })


const tlThree = gsap.timeline({
    paused: true,
    scrollTrigger: {
        trigger: ".index-s4-part-one",
        start: "top top",
        end: "200% top",
        scrub: true,
        pin: true,
        fastScrollEnd: true,
        once: true,
        toggleActions: "none none none none",
        onEnter(self) {
            tlThree.play();
        },
        refreshPriority:1
    },
    onComplete() {
        showFrontCompiler();
    },
})
tlThree.fromTo('.index-s4-part-1-right>*:not(.s4-front-end-compiler)', { y: "-100%", opacity: 0 }, { y: 0, opacity: 1, stagger: .5 })
    .fromTo('.s4-front-end-compiler', { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.index-s4-part-1-left', { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.section-four-circle-four', { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.section-four-circle-five', { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.section-four-circle-six', { x: "-100%", opacity: 0 }, {
        x: 0, opacity: 1, onComplete: () => {
            if (tlThree.scrollTrigger) {
                tlThree.scrollTrigger.kill(true);
                ScrollTrigger.refresh(true);
            }
            tlThree.progress(1);
            const elem = document.querySelector(".index-s4-part-one");
            loaclScroll.scrollTop = elem.offsetTop - (innerHeight / 2 - elem.offsetHeight / 2);

        }
    });


const tlFour = gsap.timeline({
    paused: true,
    scrollTrigger: {
        trigger: ".index-s4-part-two",
        start: "top top",
        end: "200% bottom",
        scrub: true,
        pin: true,
        fastScrollEnd: true,
        once: true,
        toggleActions: "none none none none",
        onEnter(self) {
            tlFour.play();
        },
        refreshPriority:1
    },
    onComplete() {
        showBackeEnd(validInput, "********", loadingFormOne, backEndContentOne, 1000);
        showBackeEnd(InValidInput, "********", loadingFormTwo, backEndContentTwo, 3000);
        loadSpeed();
    },
})
tlFour.fromTo('.backend-title', { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.s-4-part-two-left > *', { x: "-100%", opacity: 0 }, { x: 0, opacity: 1, stagger: .5 })
    .fromTo('.s4-form', { y: "100%", opacity: 0 }, { y: 0, opacity: 1, stagger: .5 })
    .fromTo('.section-four-circle-one', { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.section-four-circle-two', { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.section-four-circle-three', { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 ,onComplete:()=>{
        if (tlFour.scrollTrigger) {
            tlFour.scrollTrigger.kill(true);
            ScrollTrigger.refresh(true);
        }
        tlFour.progress(1);
        const elem = document.querySelector(".index-s4-part-two");
        loaclScroll.scrollTop = elem.offsetTop - (innerHeight / 2 - elem.offsetHeight / 2);
    }});



const tlFive = gsap.timeline({
    paused: true,
    scrollTrigger: {
        trigger: ".index-s4-part-three",
        start: "top top",
        end: "200% bottom",
        scrub: true,
        pin: true,
        fastScrollEnd: true,
        once: true,
        toggleActions: "none none none none",
        onEnter(self) {
            tlFive.play();
        },
        refreshPriority:1
    },
    onComplete() {
        seoAnimation();
    }
})
tlFive.fromTo(".seo-bottom-item", { opacity: 0 }, { opacity: 1, stagger: .6 })
    .fromTo(".seo-optimize-descibtion ", { top: "-100%", opacity: 0 }, { top: "50%", opacity: 1 ,onComplete:()=>{
        if (tlFive.scrollTrigger) {
            tlFive.scrollTrigger.kill(true);
            ScrollTrigger.refresh(true);
        }
        tlFive.progress(1);
        const elem = document.querySelector(".index-s4-part-three");
        loaclScroll.scrollTop = elem.offsetTop - (innerHeight / 2 - elem.offsetHeight / 2);
    }});



const tlSix = gsap.timeline({
    paused: true,
    defaults: {
        ease: "Elastic.easeOut.config(0.3, 0.3)"
    },
    scrollTrigger: {
        trigger: '.index-section-five',
        start: "center bottom",
        end: "100% bottom",
        scrub: true,
        once: true,
        preventOverlaps:true,
        onEnter(self) {
            tlSix.play();
        },
        onLeaveBack: self => self.disable()
    },
});
tlSix.fromTo(".index-s5-circle-one", { opacity: 0, x: "100%" }, { opacity: 1, x: 0 })
    .fromTo(".index-s5-circle-two", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0 })
    .fromTo(".s5-header ", { opacity: 0, x: "100%" }, { opacity: 1, x: 0 })
    .fromTo(".s5-subHeader ", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0 })
    .fromTo(".s5-pargraph ", { opacity: 0, y: "-100%" }, { opacity: 1, y: 0 });
const tlSeven = gsap.timeline({
    paused: true,

    defaults: {
        ease: "Elastic.easeOut.config(0.3, 0.3)"
    },

    scrollTrigger: {
        trigger: '.index-section-six',
        start: "center bottom",
        end: "100% bottom",
        scrub: true,
        once: true,

        onEnter(self) {
            tlSeven.play();
        },
        onLeaveBack: self => self.disable()
    },
});
tlSeven.fromTo(".s6-circle-four ", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0, delay: 0 })
    .fromTo(".s6-circle-one ", { opacity: 0, x: "100%" }, { opacity: 1, x: 0, delay: 1 })
    .fromTo(".s6-circle-two ", { opacity: 0, y: "-100%" }, { opacity: 1, y: 0, delay: .8 })
    .fromTo(".s6-circle-three ", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0, delay: .6 })
    .fromTo(".s6-top", { opacity: 0, x: "100%" }, { opacity: 1, x: 0 })
    .fromTo(".s6-paragraph", { opacity: 0, y: "100%" }, { opacity: 1, y: 0 });

const tlEight = gsap.timeline({
    paused: true,

    defaults: {
        ease: "Elastic.easeOut.config(0.3, 0.3)"
    },

    scrollTrigger: {
        trigger: '.index-section-seven',
        start: "center bottom",
        end: "100% bottom",
        scrub: true,
        once: true,

        onEnter(self) {
            tlEight.play();
        },
        onLeaveBack: self => self.disable()
    },

    onComplete() {
        setInterval(showAutoComment, 5000);
    }
});

tlEight.fromTo(".s7-top", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s7-bottom-right > *", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1, stagger: .5 })
    .fromTo(".s7-bottom-left", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(".s7-circle-one", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s7-circle-two", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(".s7-circle-three", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(".s7-circle-four", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 });

const tlNine = gsap.timeline({
    paused: true,

    defaults: {
        duration: 1.5,
        ease: "Elastic.easeOut.config(0.3, 0.3)"
    },

    scrollTrigger: {
        trigger: '.index-page-footer',
        start: "center bottom",
        end: "100% bottom",
        scrub: true,
        once: true,

        onEnter(self) {
            tlNine.play();
        },
        onLeaveBack: self => self.disable()
    },
});

tlNine.fromTo('.index-footer-section-one', { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo('.index-footer-section-two', { y: "100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo('.index-footer-section-three', { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo('.footer-circle-one', { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo('.footer-circle-two', { y: "100%", opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo('.footer-circle-three', { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.footer-circle-four', { x: "100%", opacity: 0 }, { x: 0, opacity: 1 });

const indexCompilerText = `<!DOCTYPE html>\n<html> \n<head> \n <title>PHP</title> \n</head> \n<body> \n<?php \n$employees = array(‘John’, ‘Michelle’, ‘Mari’, ‘Luke’, ‘Nellie’); \n$total = count($employees); \n?> \n<ul> \n<?php $i = 0; ?> \n<?php while ($i < $total) { ?> \n<li><?php echo $employees[$i] ?></li> \n<?php  ++$i ?> \n<?php }  ?> \n</ul> \n</body> \n</html>`;
const forntCompilerText = String(mobileBoxOne.outerHTML);
frontEndCompiler.innerText = forntCompilerText;


let content = "";
let currentLetter = 0;
let timer;

let frontCompilerLetter = "";
let forntLetterIndex = 0;
let forntTimer;
const frontEndArrayStyles = "p-1 responsive flex rounded justify-between ";
const constantFrontTextPartOne = ` "> \n \t <div class="mobile-box-s-one">\n \t <div class="mobile-box-profile">\n \t <img src="./assets/images/Profiles/download(2).png" alt="">\n \t </div>\n \t <div class="mobile-box-prof-text">\n \t <p>۱۶:۵۴</p>\n \t <small>۷ مهر</small>\n \t </div>\n \t </div>\n \t <div class="mobile-box-s-two">\n \t <p>روشن وب داتیس</p> \n \t </div>\n \t <div class="mobile-box-s-three">\n \t <button>منتظر تماس باشید</button>\n \t </div>\n</div>`;
const constantFrontTextTwo = `<div class="mobile-s2-box `;

let startSeoItem = 0;
let currentSeoItem = seoItems.length - 1;
let SEOid;
let prevStep = 1;

document.body.onload = function () {
    textWrite();
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

    indexActive = indexActive >= silderControls.length ? 0 : indexActive;

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

    if (forntLetterIndex == 0) {
        mobileBoxOne.className = "";
        mobileBoxTwo.className = "";
    }

    forntLetterIndex++;
    frontCompilerLetter = frontEndArrayStyles.slice(0, forntLetterIndex);


    frontEndCompiler.innerText = constantFrontTextTwo + frontCompilerLetter + "   |" + constantFrontTextPartOne;

    if (frontCompilerLetter.endsWith(" ")) {
        let classRes = frontCompilerLetter.trim();
        mobileFrame.className = "mobile-frame " + classRes;
        mobileBoxOne.className = "mobile-s2-box " + classRes;
        mobileBoxTwo.className = "mobile-s2-box " + classRes;
    }

    if (frontCompilerLetter.length == frontEndArrayStyles.length) {
        forntLetterIndex = 0;
        return;
    }

    forntTimer = setTimeout(showFrontCompiler, 1000);
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
        if (startSeoItem >= seoItems.length - 1) {
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
    }, 1500)
}

commentProfiles.forEach(element => {
    element.addEventListener('click', (event) => {
        const activeUser = document.querySelector('.active-user');
        const activeComment = document.querySelector('.show-comment');

        if (activeUser && activeComment) {
            activeUser.classList.remove('active-user');
            activeComment.classList.remove('show-comment');
        }

        const index = parseInt(event.currentTarget.getAttribute('data-index')) || 0;
        event.currentTarget.classList.add('active-user');
        showComment(index);
    })
});

function showAutoComment() {
    const activeUser = document.querySelector('.active-user');
    let activeIndex = activeUser.getAttribute('data-index');
    activeUser.classList.remove('active-user');
    commentItems[activeIndex].classList.remove('show-comment');
    activeIndex++;
    activeIndex = activeIndex >= commentProfiles.length ? 0 : activeIndex;
    commentProfiles[activeIndex].classList.add('active-user');
    commentItems[activeIndex].classList.add('show-comment');
}

function showComment(number = 0) {
    commentItems[number].classList.add('show-comment');
}


function loadSpeed() {
    loadSpeedElement.forEach((item, i) => {
        item.innerText = '0';
        setInterval(() => {
            updateCounter(item)
        }, 150)

    })
}

function updateCounter(element) {
    const target = parseInt(element.getAttribute('data-speed'));
    let counter = parseInt(element.innerText);
    if (counter < target) {
        element.innerText = counter + 1;
    }
    else {
        element.innerText = target;
    }
}
