import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../Icons/Vector';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

//VectorContainer
//spawns and places the svg image onto the site
const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    height: 100%;
}
`
//Bounce
//Note: has to be before the Ball because that is where the animation is called
//from + to: makes the ball grow and shrink
//Note: the translateX by 50% keeps the ball centered 
const Bounce = keyframes`
from{ transform: translateX(-50%) scale(0.5); }
to{ transform: translateX(-50&) scale(1); }
`

//Ball
//creates the ball that is at the start of the animation of the svg
const Ball = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: ${props => props.theme.text};
animation: ${Bounce} 0.5s linear infinite alternate;
`

//gsap.registerPlugin(ScrollTrigger): instantiates the plugin
//ref: ref is assigned below in the main return statement inside the VectorContainer
//ballRef: ref is assigned with Ball container
//useLayoutEffect : animation control
//onUpdate: used to draw the svg
//onToggle: used to update the ball
const DrawSvg = () => {
const ref = useRef(null);
const ballRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  let element = ref.current;

  let svg =  document.getElementsByClassName("svg-path")[0];

  const length = svg.getTotalLength();
  //console.log(length);

//start positioning of svg drawing
svg.style.strokeDasharray = length;
  
//hide svg before scrolling start
svg.style.strokeDashoffset = length;

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: element,
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "bottom bottom",
      //markers: true, //uncomment to see the markers
      onUpdate: (self) => {
        const draw = length * self.progress;
        svg.style.strokeDashoffset = length - draw;
        //console.log(self);
      },
      onToggle: self => {
        if(self.isActive) {
          //console.log("Scrolling is active");
          ballRef.current.style.display = 'none';
        } else {
          //console.log("Scrolling is not active");
          ballRef.current.style.display = 'inline-block';
        }
      }

    }
  })

  return () => {  
    if(tl) tl.kill(); //this turns off the ball when scroller-start passes the start
  };
}, [])

  return (
    <>
      <Ball ref={ballRef}/>
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
    
  )
}

export default DrawSvg