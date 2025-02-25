"use client";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// useGSAP(
//   () => {
//     // gsap code here...
//     // gsap.to(".box", { x: 360 }); // <-- automatically reverted
//   },
//   { scope: container },
// ); // <-- scope is for selector text (optional)

// ////////////////////////

const defaultCallback = (isIntersecting) => {
  if (isIntersecting) {
    console.log("intersecting");
  } else {
    console.log("not intersecting");
  }
};

export const useAnimateInView = (cb = defaultCallback) => {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    threshold: 0.1,
    onChange: (isIntersecting) => {
      cb(isIntersecting);
    },
  });

  return { ref, target: entry?.target };
};

export const useInView = (cb = defaultCallback) => {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
  });

  return { ref, inView };
};

// ////////////////////////
