import { useState } from "react";
import Axios from "axios"
import Hotkeys from "../components/hotkeys";

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
      <h1 className="text-pink-500 font-bold" onClick={getRecipes}>The recipe app</h1>
      <input type="text" className="border-2  rounded-full cursor pointer" />
      <Hotkeys />
    </div>
  );
}
