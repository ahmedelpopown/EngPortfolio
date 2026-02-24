import { animate, useInView } from "motion/react"
import { useEffect, useRef, useState, memo } from "react"

 
const Counter = memo(({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const ref = useRef();
  const isInView = useInView(ref);
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Only animate once when coming into view
    if (!isInView || hasAnimatedRef.current) return;

    // Throttle state updates to reduce re-renders (max 30fps instead of 60fps)
    let lastUpdate = 0;
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (value) => {
        const now = Date.now();
        // Update state max 30fps (every 33ms) instead of 60fps
        if (now - lastUpdate > 33) {
          setCount(Math.floor(value));
          lastUpdate = now;
        }
      },
      onComplete: () => {
        hasAnimatedRef.current = true;
        setCount(to); // Ensure final value is set
      }
    });

    animationRef.current = animation;

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [isInView, from, to]); // Only re-run when isInView changes from false to true

  return (
    // counter
    <div className=" counter flex flex-col gap-[8px]" ref={ref}>
      <h1 className="text-[#dd4c62] text-[48px]">{count}+</h1>
      <p className="text-[13px]">{text}+</p>
    </div>
  );
});

Counter.displayName = 'Counter';

export default Counter
