import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 2)}>Count {count} Me</button>
    </div>
  );
}

export default HookCounter;
