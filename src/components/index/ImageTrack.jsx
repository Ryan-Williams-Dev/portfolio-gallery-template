import imageLinks from "../../data/imageTrackImages";
import Image from "./Image";
import { motion } from "framer-motion";

function ImageTrack({ percentage }) {
  return (
    <motion.div
      className="image-track"
      animate={{
        transform: `translate(${percentage}%, -50%)`,
      }}
      transition={{
        ease: "linear",
      }}
    >
      {imageLinks.map((image) => (
        <Image url={image} percentage={percentage} />
      ))}
    </motion.div>
  );
}

export default ImageTrack;
