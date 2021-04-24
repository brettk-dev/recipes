import { useState } from "react";

import IngredientForm from "./IngredientForm";
import StepForm from "./StepForm";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const resetForm = () => {
    setName("");
    setIngredients([]);
    setSteps([]);
  };

  const saveRecipe = () => {
    console.log({
      name,
      ingredients,
      steps,
    });

    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    saveRecipe();
  };

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const addStep = (step) => {
    setSteps([...steps, step]);
  };

  const removeStep = (index) => {
    setSteps([...steps.slice(0, index), ...steps.slice(index + 1)]);
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

      <div className="w-max-c">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((i) => (
            <li key={i}>
              <div className="d-flex">
                <div className="flex-1">
                  {i.qty} {i.unit} - {i.name}
                </div>
                <button
                  type="button"
                  className="ml-2"
                  onClick={() => removeIngredient(i)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <IngredientForm className="ml-5" onAdd={addIngredient} />
      </div>

      <div className="w-max-c">
        <h2>Steps</h2>
        <ol>
          {steps.map((s, i) => (
            <li key={i}>
              <div className="d-flex">
                <span className="flex-1">{s}</span>
                <button
                  type="button"
                  className="ml-2"
                  onClick={() => removeStep(i)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ol>
        <StepForm className="ml-5" onAdd={addStep} />
      </div>

      <button type="button" onClick={() => saveRecipe()}>
        Save Recipe
      </button>
    </>
  );
};

export default RecipeForm;
