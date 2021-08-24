const timeline = gsap.timeline({defaults: {duration: 1}});
const timeline2 = gsap.timeline({defaults: {duration: 1}});

timeline.delay(2)
timeline
    // .from('.letters', {duration: 0.5, x: '300px'})
    .from('.letters', {duration: 1.5, scale: 0, transformOrigin: 'center'})
    .from('.letters', {duration: 1.5, transformOrigin: 'center'}, "-=1.5")
    .from('.letters', {duration: 2.5, rotation: 360, transformOrigin: 'center', ease: "expo.out"}, "-=1.5")
    .from('.dot', {duration: 2, rotation: 720, x: '-300px', y: '-200px'}, "-=2.5")

    timeline2.delay(4.5)
    timeline2
        .from('.logo', {duration: 3, scale: 0, transformOrigin: 'center', ease: 'elastic'})
