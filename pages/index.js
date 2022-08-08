import { useState } from "react";
import Axios from "axios"
 
export default function Home() {
  


  const [recipes, setRecipes] = useState();
  const [query, setQuery] = useState();

  const url = `https://api.edamam.com/search?q=chicken&=app_id=${process.env.YOUR_APP_ID}&app_key=${process.env.YOUR_APP_KEY}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    console.log(result.data)
  }
  
  return (
    <div>
      <h1 onClick={getRecipes}>The recipe app</h1>
      <input type="text" />
    </div>
  );
}
