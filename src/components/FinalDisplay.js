import React from "react";

import BitDisplay from "./BitDisplay";

function FinalDisplay({ specialBit, userBit, groupBit, otherBit }) {
  return (
    <div>
      <h1>Octal Notation</h1>
      <div className="final-display">
        <BitDisplay bit={specialBit} />
        <BitDisplay bit={userBit} />
        <BitDisplay bit={groupBit} />
        <BitDisplay bit={otherBit} />
        {/* <OtherBit bit={groupBit} />
        <GroupBit bit={otherBit} /> */}
      </div>
      <p>
        <b>Example:</b> chmod {specialBit}
        {userBit}
        {groupBit}
        {otherBit} &lt;filepath&gt;
      </p>
    </div>
  );
}

export default FinalDisplay;
