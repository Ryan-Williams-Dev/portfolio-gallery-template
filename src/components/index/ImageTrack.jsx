import imageLinks from "../../data/imageTrackImages";
import Image from "./Image";

function ImageTrack({ percentage }) {
  return (
    <div
      className="image-track"
      style={{
        transform: `translate(${percentage}%, -50%)`,
        transitionDuration: 1200,
        animationFillMode: "forwards",
      }}
    >
      {imageLinks.map((image) => (
        <Image url={image} percentage={percentage} />
      ))}
    </div>
  );
}

export default ImageTrack;
