"use client";
import { ReactNode, useEffect, useRef } from "react";
import { useAnimateInView, useInView } from ".";
import gsap from "gsap";

export const MaskImage = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const anim = {
    el: useRef(null),
    a: useRef(null),
  };

  const { ref, target } = useAnimateInView((visible) => {
    if (visible) {
      if (!target) return;
      anim.a.value = gsap.to(target, {
        autoAlpha: 1,
        delay: 0.2,
      });
    } else {
      if (!target) return;
      if (anim.a.value?.kill) anim.a.value.kill();
      gsap.set(target, { autoAlpha: 0 });
    }
  });

  return (
    <div className={" " + " " + className} ref={ref}>
      {children}
    </div>
  );
};
