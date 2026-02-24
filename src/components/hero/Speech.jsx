import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer w-[50%] flex items-end gap-[8px] justify-between"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-full bg-white bubble text-[#555] p-[24px] text-[18px] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] rounded-r-[0px]">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet lerinat consectetur adipisicing. ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
    </motion.div>
  );
};

export default Speech;