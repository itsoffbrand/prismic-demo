"use client";
import { ReactNode, useRef } from "react";
import { useAnimateInView } from ".";
import gsap from "gsap";

export const Alpha = ({ children }: { children: ReactNode }) => {
  const anim = {
    el: useRef(null),
    a: useRef(null),
  };

  const { ref } = useAnimateInView((intersecting) => {
    if (intersecting) {
      anim.a.value = gsap.to(anim.el.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 0.2,
      });
    } else {
      if (anim.a.value?.kill) anim.a.value.kill();

      gsap.set(anim.el.current, {
        autoAlpha: 0,
        duration: 1,
      });
    }
  });

  return (
    <div className="overflow-clip" ref={ref}>
      <div className="invisible" ref={anim.el}>
        {children}
      </div>
    </div>
  );
};
