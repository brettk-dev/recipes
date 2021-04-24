import { useState } from "react";

import Layout from "./components/Layout";
import RecipeForm from "./components/RecipeForm";

const App = () => {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <Layout>
      <RecipeForm />
      <ul>
        {recipeList.map((r, i) => (
          <li key={i}>{r.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default App;
