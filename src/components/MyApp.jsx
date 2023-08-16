import React from "react";
import { gsap } from "gsap";
import "../App.css";
import { useEffect } from "react";
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
const MyApp = () => {
  

  return (
    <>
      <div id="main">
        <h1>Everything</h1>
        <h1>
          TO <span>Book now</span> Sell
        </h1>
        <h1>Anything</h1>
        <img
          id="left-img"
          src="https://images.unsplash.com/photo-1446388356081-508ba00ad58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt
        />
        <img
          id="right-img"
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80"
          alt
        />
        <h5>Scroll Down ∨</h5>
      </div>
    </>
  );
};

export default MyApp;
