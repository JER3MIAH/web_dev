import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [payment, setPayment] = useState("");

  function updateName(event) {
    setName(event.target.value);
  }

  function updateCount(event) {
    setCount(event.target.value);
  }
  function updateType(event) {
    setType(event.target.value);
  }
  function updatePaymentMethod(event) {
    setPayment(event.target.value);
  }

  const paymentTypes = {
    prePayment: "Pre-pay",
    payOnDelivery: "Payment on Delivery",
  };

  const textStyle = {
    color: "white",
  };

  return (
    <div>
      <p style={textStyle}>Name: {name}</p>
      <input type="text" onChange={updateName} />
      <br />
      <p style={textStyle}>Count: {count}</p>
      <input type="number" onChange={updateCount} />
      <p style={textStyle}>Card Type: {type}</p>
      <select name="Card types" onChange={updateType}>
        <option value="">Select an option</option>
        <option value="Master card">Master card</option>
        <option value="Verve">Verve</option>
        <option value="Gift card">Gift card</option>
      </select>
      <br />
      <p style={textStyle}>Payment type: {payment}</p>
      <label style={textStyle}>
        <input
          type="radio"
          value={paymentTypes.prePayment}
          checked={payment === paymentTypes.prePayment}
          onChange={updatePaymentMethod}
        />
        Pre-pay
      </label>
      <br />
      <label style={textStyle}>
        <input
          type="radio"
          value={paymentTypes.payOnDelivery}
          checked={payment === paymentTypes.payOnDelivery}
          onChange={updatePaymentMethod}
        />
        Pay on delivery
      </label>
    </div>
  );
}

export default MyComponent;
