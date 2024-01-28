let timeline = gsap.timeline()

timeline.from("#nav h3", { 
    opacity: 0,
    y: -50,
    duration: 1,
    delay:0.4,
    stagger:0.3
 });

timeline.from("#main h1", {
    x: -500,
    opacity: 0,
    duration:0.8,
    stagger: 0.3
})

timeline.from("img", {
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

timeline.from(".fts h3", {
  delay: 0.5,
  duration: 0.5,
  opacity:0,
  y: 100,
});