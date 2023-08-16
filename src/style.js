import { gsap } from "gsap";

var tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav h4,#nav button", {
  y: -100,
  duration: 1,
  delay: 0.7,
  opacity: 0,
  stagger: 0.2, //0.25 // controls the staggering amount
});

tl.from("#main h1", {
  y: 100,
  opacity: 0,
});

tl.from("#main>img", {
  scale: 0,
  opacity: 0,
  stagger: 0.5,
});

tl.from("h5", {
  scale: 0,
  opacity: 0,
});

tl.to("h5", {
  y: 20,
  repeat: -1,
  duration: 1,
  yoyo: true, // yoyo: true, // if you want a smooth repetition
});

tl.to("#main>img", {
  x: 10,
  repeat: -1,
  duration: 1,
  yoyo: true, // yoyo: true, // if you want a smooth repetition
});
