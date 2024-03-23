const ScrollLottie = (obj) => {

    let anim = lottie.loadAnimation({
     container: document.querySelector(obj.target), 
     renderer: 'svg',
     loop: false,
     autoplay: false,
     path: obj.path 
   });
   
   let timeObj = {currentFrame: 0}
   let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";
   ScrollTrigger.create({
     trigger: obj.target,
       scrub: 1,
       pin: false,
       start: "top center",
       pinSpacing: false,
       end:'bottom center', 
       onUpdate: self => {
        if(obj.duration) {
         gsap.to(timeObj, {
          duration: obj.duration,
          currentFrame:(Math.floor((self.progress) *  (anim.totalFrames - 0.5))),
          onUpdate: () => {
           anim.goToAndStop(timeObj.currentFrame, true)
          },
          ease: 'expo'
         })
        } else {
          anim.goToAndStop((self.progress) *  (anim.totalFrames - 0.5), true)
        }
       }
   });  
   
  //  gsap.to(".animation-run", {
  //         scrollTrigger: {
  //             trigger: ".animation-run",
  //             start: 'top top',
  //             end: 'bottom center',
  //             pin: true,
  //             scrub: 1
  //         }
  //     });
            
  
  }