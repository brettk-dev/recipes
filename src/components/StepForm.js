import { useState } from "react";

const StepForm = ({ className, onAdd }) => {
  const [description, setDescription] = useState("");

  const reset = () => {
    setDescription("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd(description);

    reset();
  };

  return (
    <form className={`d-flex ${className}`} onSubmit={handleSubmit}>
      <div>
        <label className="d-block" htmlFor="descrption">
          Description
        </label>
        <input
          type="text"
          name="descrption"
          id="descrption"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </div>

      <button type="submit">+</button>
    </form>
  );
};

export default StepForm;
