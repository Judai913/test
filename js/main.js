

// about section tabs


(() =>{
            const aboutSection = document.querySelector(".about-section"),
            tabsContainer = document.querySelector(".about-tabs");
            console.log( aboutSection );
            tabsContainer.addEventListener("click", (event) =>{

                // if event.target contains 'tab-item' class and not contains 'active' class
                if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active") ){  
                    const target = event.target.getAttribute("data-target");
              
                    // console.log(target);
                    // deactivate existing active 'tab-item'
      
                    tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                    // activate new 'tab-item'
            
                    event.target.classList.add("active","outer-shadow");
                    // deactivate existing active 'tab-content'
                    aboutSection.querySelector(".tab-content.active").classList.remove("active");
                    // activate new 'tab-content'
                    
                    aboutSection.querySelector(`.${target}`).classList.add("active");
                }
            })
})();

// first-try-start

// (() =>{
//     const aboutSection = document.querySelector(".about-section"),
//     tabsContainer = document.querySelector(".about-tags");

//     document.addEventListener("click", (event) =>{
//         // if event.target contains 'tab-item' class and not contains 'active' class
//         if(event.target.classList.contains("tab-item") &&
//           !event.target.classList.contains("active")){  
//             const target = event.target.getAttribute("data-target");
//             // console.log(target);
//             // deactivate existing active 'tab-item'
//             tabsContainer.querySelectorbyc(".active").classList.remove("outer-shadow", "active");
//             // activate new 'tab-item'
//             event.target.classList.add("active","outer-shadow");
//             // deactivate existing active 'tab-content'
//             aboutSection.querySelector(".tab-content.active").classList.remove("active");
//             // activate new 'tab-content'
//             aboutSection.querySelector(target).classList.add("active");
//         }
//     })
// })();

// first-try-end

// (() =>{
//         let  _aboutsection = document.querySelector("about-section"),
//         tabsContainer = document.querySelector("about-tags");

//         tabsContainer.addEventListener("click", (newevent) =>{
//             // if event.target contains 'tab-item' class and not contains 'active' class
//             if(newevent.classList.contains("tab-item") &&
//             !newevent.classList.contains("active")){
//                 const target = newevent.getAttribute("data-target");
//                 // console.log(target);
//                 // deactivate existing active 'tab-item'
//                 tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
//                 // activate new 'tab-item'
//                 newevent.target.classList.add("active","outer-shadow");
//                 // deactivate existing active 'tab-content'
//                 _aboutsection.querySelector(".tab-content.active").classList.remove("active");
//                 // activate new 'tab-content'
//                 // _aboutsection.querySelector().classList.add("active");
//             }
//         })
// })();




// const tabitem = document.querySelectorAll(".tab-item")
// // const

// // console.log(tabitem[0]);

// // tabitem[0].style.color = 'red';

// tabitem[1].classList.add('outer-shadow', 'active');

// function myFunction() {
//     tabitem[2].classList.add('outer-shadow', 'active');
//   }





// if (){
//     tabitem[2].classList.add('outer-shadow', 'active');
// }





// tabitem[2].classList.add('outer-shadow', 'active');






// if(event.target.classList.contains("tab-item") &&
// !event.target.classList.contains("active")){  
//   const target = event.target.getAttribute("data-target");
//   // console.log(target);
//   // deactivate existing active 'tab-item'
//   tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
//   // activate new 'tab-item'
//   event.target.classList.add("active","outer-shadow");
//   // deactivate existing active 'tab-content'
//   aboutSection.querySelector(".tab-content.active").classList.remove("active");
//   // activate new 'tab-content'
//   aboutSection.querySelector(target).classList.add("active");
// }