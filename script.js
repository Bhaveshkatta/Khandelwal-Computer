var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+ 30 + "px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "#000", 
    height:"110px", 
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000", 
    scrollTrigger: {
        trigger:("#main"),
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end:"top -70%",
        scrub: 2
    }
})


gsap.from("#about-us, #about-us-in",{
    y:90,
    opacity:0, 
    duration:1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
      onUpdate: self => {
        // Remove the rotation on update
        card.style.transform = `scale(${self.progress * 0.8 + 1})`;
      },
    },
  });

  tl.fromTo(card, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });

  card.addEventListener('mouseenter', () => {
    // Add the rotation on hover
    card.style.transform = 'rotate3d(-1,1,0,20deg)';
  });

  card.addEventListener('mouseleave', () => {
    // Remove the rotation on mouse leave
    card.style.transform = '';
  });
});


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})