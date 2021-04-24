import { useState } from "react";

const IngredientForm = ({ className, onAdd }) => {
  const [qty, setQty] = useState(1);
  const [unit, setUnit] = useState("");
  const [name, setName] = useState("");

  const reset = () => {
    setQty(1);
    setUnit("");
    setName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      qty,
      unit,
      name,
    });

    reset();
  };

  return (
    <form className={`d-flex ${className}`} onSubmit={handleSubmit}>
      <div>
        <label className="d-block" htmlFor="qty">
          Qty
        </label>
        <input
          type="number"
          inputMode="decimal"
          name="qty"
          id="qty"
          style={{ width: "32px" }}
          value={qty}
          onChange={(e) => setQty(Number(e.currentTarget.value))}
        />
      </div>

      <div>
        <label className="d-block" htmlFor="unit">
          Unit
        </label>
        <input
          type="text"
          name="unit"
          id="unit"
          style={{ width: "32px" }}
          value={unit}
          onChange={(e) => setUnit(e.currentTarget.value)}
        />
      </div>

      <div>
        <label className="d-block" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      <button type="submit">+</button>
    </form>
  );
};

export default IngredientForm;
