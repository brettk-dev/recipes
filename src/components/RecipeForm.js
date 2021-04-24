import { useState } from "react";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const resetForm = () => {
    setName("");
    setIngredients([]);
    setSteps([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      name,
      ingredients,
      steps,
    });

    resetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ display: "block" }}>
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
      </form>

      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((i) => (
            <li key={i}>{i}</li>
          ))}
          <li>[NEW INGREDIENT FORM]</li>
        </ul>
      </div>

      <div>
        <h2>Steps</h2>
        <ul>
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
          <li>[NEW STEP FORM]</li>
        </ul>
      </div>
    </>
  );
};

export default RecipeForm;
