function loaderAnimation(){
    var tl = gsap.timeline()

tl.from("#logo",{
    scale:0,
    duration:0.5,
    delay:0.5,
})
tl.to("#logo",{
    x:-120,
    rotate:-360
})
tl.to("#loader h2 span",{
    opacity:1,
    duration:1.3,
    stagger:0.1
})
// tl.to("#logo",{
//     rotate:180,
//     duration:0.6,
//     // delay:0.2
// })
// tl.to("#logo",{
//     rotate:720,
//     duration:0.6,
//     delay:1.3
// })
tl.to("#loader, #loader img, #loader h2 span",{
    opacity:0,
    // height:"-1000%",
    zIndex:"-1",
    duration:1,

})
tl.from("#page1",{
    opacity:1,
    // height:"-1000%",
    zindex:99,
    duration:1,

})

}
loaderAnimation()

var tl1 = gsap.timeline()

tl1.from("#landing .vid-container1 .vid-info h3, #landing .vid-container1 .vid-info h1",{
    y:500,
    delay:4,
    stagger:0.5,
    duration:1
})
tl1.from("#landing .vid-container1 .vid-info .learn-more",{
   scale:0,
   duration:0.4
})
// tl1.to("#landing .vid-container2",{
//     y:100,
//     delay:5,
//     zindex:99
//  })
tl1.from("#landing .vid-container2 .vid-info h3, #landing .vid-container1 .vid-info h1",{
    y:500,
    delay:4,
    stagger:0.5,
    duration:1
})
tl1.from("#landing .vid-container2 .vid-info .learn-more",{
   scale:0,
   duration:0.4
})