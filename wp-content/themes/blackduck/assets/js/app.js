console.log('app.js loaded');
//accordion
const toggles = document.querySelectorAll(".toggle");

function toggleAccord(e) {
  e.preventDefault();
  if (this.parentNode.classList.contains("active")) {
    this.parentNode.classList.remove("active");
  } else {
    for (i = 0; i < toggles.length; i++) {
      toggles[i].parentNode.classList.remove("active");
    }
    this.parentNode.classList.add("active");
  }
}

for (i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", toggleAccord);
}

const swiper = new Swiper( '.slider-content', {
	slidesPerView: 1,
  	initialSlide: 0,
	// effect: "slides",
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
	grabCursor: true,
	pagination: {
        el: ".swiper-pagination",
		clickable: true,
      },
} );

const swiper2 = new Swiper( '.slider-content2', {
	slidesPerView: 1,
  	initialSlide: 0,
	// effect: "slides",
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
	grabCursor: true,
	pagination: {
        el: ".swiper-pagination2",
		clickable: true,
      },
} );
const cards = document.querySelectorAll(".item-grid");

function flipCard() {
  this.classList.toggle("flip");
  
}
cards.forEach((card) => card.addEventListener("click", flipCard));

console.log(cards)

const menu_items = document.querySelectorAll("a.menu-item");
const currentUrl = window.location.href;
console.log(currentUrl);
console.log(menu_items);
menu_items.forEach(( menu_item => { if (menu_item.getAttribute("href") == window.location.href)  menu_item.classList.add('current') }));
const full_heght = document.body.scrollHeight;
console.log(full_heght);

const back_to_top = document.querySelector(".arrow-back");
console.log(back_to_top);
let windowNextSection = window; 
windowNextSection.addEventListener("scroll",() => {
  if(windowNextSection.scrollY >= full_heght/2 ){
    back_to_top.classList.add("visible");
  }else{   
    back_to_top.classList.remove("visible");
            }

});


// let siteHeader = document.querySelector(".header-top");

// function scrollHeader(el){
//   if(el){
  
//     let windowNextSection = window;
    
//     windowNextSection.addEventListener("scroll", () => {
  
//         if(windowNextSection.scrollY >= 200){
//             siteHeader.classList.add("fixed-header-bg1");
//         }else{
//           siteHeader.classList.remove("fixed-header-bg1");
//         }
  
//         if ( windowNextSection.scrollY >= el.offsetTop) {
//           siteHeader.classList.add("fixed-header");
//         }
//         else{
//             siteHeader.classList.remove("fixed-header");
//         }  
//     });		
//   }
// }

// scrollHeader(scrollMain);







window.addEventListener('scroll', function() {
  if (pageYOffset > 50) {
    document.querySelector('.header-top').classList.add('black')
  } else {
    document.querySelector('.header-top').classList.remove('black')
  }
})

// const controller = new ScrollMagic.Controller();
// 	const sections = document.querySelectorAll('section,header');
// 	const menu = document.querySelector('.header-top');
	
	
// 	sections.forEach((section, index, arr) => {
// 		const trigger = '#' + section.id;
// 		const backgroundColor = window.getComputedStyle(section, null).getPropertyValue('background-color');
	
// 		const textColor = getContrastYIQ(backgroundColor);
	
// 		let previousBackgroundColor = backgroundColor;
// 		let previousTextColor = getContrastYIQ(previousBackgroundColor);
	
	
// 		if (index >= 1) {
// 			previousBackgroundColor = window.getComputedStyle(arr[index - 1], null).getPropertyValue('background-color');
// 			previousTextColor = getContrastYIQ(previousBackgroundColor);
// 		}
	
// 		new ScrollMagic.Scene({
// 			triggerElement: trigger,
// 			triggerHook: "onLeave",
// 			offset: -50,
// 			reverse: true }).
	
// 		on("enter", function () {
// 			menu.classList.remove(previousTextColor);
// 			menu.classList.add(textColor);
	
// 		}).
// 		on("leave", function () {
// 			menu.classList.remove(textColor);menu.classList.add(previousTextColor);
	
// 		}).
// 		addTo(controller);
// 	});
	
// 	// Color contrast helper function
// 	// https://en.wikipedia.org/wiki/YIQ
// 	function getContrastYIQ(rgb) {
// 		rgb = rgb.substring(4, rgb.length - 1).
// 		replace(/ /g, '').
// 		split(',');
// 		const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
// 		return yiq >= 128 ? 'black' : 'white';
// 	}


  const navigation = document.querySelector('.navigation');
  const burger = document.getElementById('burger');
  burger.addEventListener('click', e =>{
    
    if(navigation.classList.contains('active'))
    {
      burger.classList.remove('visible');
      navigation.classList.remove('active');
    }else {
      navigation.classList.add('active');
      burger.classList.add('visible');
  
    }
  
  })
  // const lang_trigger = document.getElementById('current_lang');
  // const lang_menu = document.querySelector('.language-selector');
  // const lang_close = document.getElementById('closelang');
  // lang_trigger.addEventListener('click', e =>{

  //   if(lang_menu.classList.contains('activate')){
  //     lang_menu.classList.remove('activate');
  //   }else {
  //     lang_menu.classList.add('activate');
  //   }
  // })
  // lang_close.addEventListener('click', e =>{
  //   lang_menu.classList.remove('activate');
  // })
  let umtinfos = new Object();
  document.addEventListener("DOMContentLoaded", () => {
    let utm = document.location.search;
    let searchParams = new URLSearchParams(utm);
    // console.log(searchParams);
    // let source = searchParams.get("utm_source");
    // let medium = searchParams.getAll
    // console.log(source);
    for(var pair of searchParams.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
      umtinfos[pair[0]] = pair[1];
   }
   console.log(umtinfos);
  });
  




