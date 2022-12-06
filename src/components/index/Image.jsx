export default function Image({ url, percentage }) {
  return (
    <img
      className="image"
      src={url}
      draggable="false"
      style={{
        objectPosition: `${percentage + 100}% center`,
        transitionDuration: 1200,
        animationFillMode: "forwards",
      }}
    />
  );
}
