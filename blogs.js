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