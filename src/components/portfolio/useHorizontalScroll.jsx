// hooks/useHorizontalScroll.js
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

export function useHorizontalScroll(itemsLength, containerWidth) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -containerWidth * (itemsLength - 1)]
  );

  return { ref, x, scrollYProgress };
}
