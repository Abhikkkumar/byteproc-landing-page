import React from "react";
import "./numbers.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Numbers() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
  });
  function NumberAnimation({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      reset: !inView, // Reset the animation when not in view
      number: inView ? n : 0, // Start the animation when in view
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <div className="numbers row row-cols-lg-4 row-cols-md-2 row-cols-1">
      <div className="col" ref={ref}>
        <div className="n-container">
          <p className="text">Happy Clients</p>
          {/* <p className="actualNumber">200+</p> */}
          <p className="actualNumber">
            <NumberAnimation n={200} inView={inView} />+
          </p>
        </div>
      </div>
      <div className="col" ref={ref}>
        <div className="n-container">
          <p className="text">Tech Teams</p>
          <p className="actualNumber">
            <NumberAnimation n={20} inView={inView} />+
          </p>
        </div>
      </div>

      <div className="col" ref={ref}>
        <div className="n-container ">
          <p className="text">IT Problems Solved</p>
          <p className="actualNumber">
            <NumberAnimation n={1000} inView={inView} />+
          </p>
        </div>
      </div>
      <div className="col" ref={ref}>
        <div className="n-container ">
          <p className="text">Training</p>
          <p className="actualNumber">
            <NumberAnimation n={500} inView={inView} />+
          </p>
        </div>
      </div>
    </div>
  );
}
