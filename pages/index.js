import { useState } from "react";


export default function Home() {
  const [recipes, setRecipes] = useState();
  const [query, setQuery] = useState();
  
  return (
    <div>
      <p>The recipe app</p>
      <input type="text" />
    </div>
  );
}
