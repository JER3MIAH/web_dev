import Button from "./components/Button/Button";
import Count from "./components/Count/Count";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count clickCount={count} />
      <div>
        <Button
          title="Decrement"
          onTap={() => {
            setCount(count - 1);
          }}
        />
        <Button
          title="Reset"
          onTap={() => {
            setCount(0);
          }}
        />
        <Button
          title="Increment"
          onTap={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </>
  );
}

export default App;
