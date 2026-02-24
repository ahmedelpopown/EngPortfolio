// components/ListItem.jsx
import { memo } from "react";
import { motion } from "motion/react";

const itemVariants = {
  hidden: i => ({
    opacity: 0,
    y: 120,
    scale: 0.95
  }),
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 90,
      damping: 18
    }
  })
};

const ListItem = ({ item, index }) => {
  return (
    <motion.article
      className="pItem"
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="pImg">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="pText">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </motion.article>
  );
};

export default memo(ListItem);
