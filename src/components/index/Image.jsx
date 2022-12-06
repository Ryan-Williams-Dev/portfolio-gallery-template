import { motion } from "framer-motion";

export default function Image({ url, percentage }) {
  return (
    <motion.img
      className="image"
      src={url}
      draggable="false"
      // style={{
      //   objectPosition: `${percentage + 100}% center`,
      //   transitionDuration: 1200,
      //   animationFillMode: "forwards",
      // }}

      animate={{
        objectPosition: `${percentage + 100}% center`,
      }}
      transition={{
        ease: "linear",
      }}
    />
  );
}
