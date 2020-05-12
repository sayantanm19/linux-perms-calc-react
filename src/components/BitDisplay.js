import React from "react";

import AnimatedNumber from "animated-number-react";

function BitDisplay({ bit }) {
  let formatValue = (value) => value.toFixed(0);
  let animationDuration = 100;

  return (
    <div>
      <AnimatedNumber
        className="bit-display"
        value={bit}
        formatValue={formatValue}
        duration={animationDuration}
      />
    </div>
  );
}

export default BitDisplay;
