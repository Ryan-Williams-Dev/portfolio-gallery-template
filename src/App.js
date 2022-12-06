import Index from "./pages/Index";
import "./app.css";
import { useState } from "react";

function App() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) {
      return;
    }

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);
  };

  const handleOnUp = (e) => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };
  return (
    <div
      className="App"
      onMouseDown={(e) => handleOnDown(e)}
      onMouseMove={(e) => handleOnMove(e)}
      onMouseUp={(e) => handleOnUp(e)}
      onTouchStart={(e) => handleOnDown(e.touches[0])}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      onTouchEnd={(e) => handleOnUp(e.touches[0])}
    >
      <Index percentage={percentage} />
    </div>
  );
}

export default App;
