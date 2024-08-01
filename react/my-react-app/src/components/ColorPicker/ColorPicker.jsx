import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("");

  function updateColor(event) {
    setColor(event.target.value);
  }

  return (
    <div className={styles.colorPicker}>
      <h1>Color Picker</h1>
      <div className={styles.colorContainer} style={{ backgroundColor: color }}>
        <p>Selected Color:</p>
        <p>{color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" onChange={updateColor} />
    </div>
  );
}

export default ColorPicker;
