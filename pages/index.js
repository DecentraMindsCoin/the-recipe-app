import { useEffect, useState } from "react";
import Axios from "axios";
import Recipes from "../components/Recipes";
import { recipeList, allFilters } from "../lib/recipeData";
import Image from "next/image";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import Filters from "../components/Filters";

export default function Home() {
  const [recipes, setRecipes] = useState(recipeList);
  const [query, setQuery] = useState("");
  const [filters, setFilter] = useState(allFilters);
  const [comments, setComments] = useState()
    const handleQuery = () => {
    useEffect((e) => {
      e.preventDefault();
      setRecipes(recipes);
      setQuery(query);
    });
  };

  console.log(recipes);
  console.log(query);
  return (
    <div>
      <Header />
      <div className="align-items-center justify-center flex-row max-w-2xl mx-auto ">
        <form onSubmit={handleQuery} className="flex">
          <input
            value={query}
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            className="py-2 px-4 hover:outline-green-500 hover:shadow-xl hover:shadow-green-500  outline-none border-2 w-full flex rounded-full cursor pointer my-10"
          />

          <button type="submit" value="Search">
            <p
              className=" bg-black text-white font-bold px-4 py-2 rounded-tr-xl"
              onClick={handleQuery}
            >
              Button
            </p>
          </button>
        </form>
        <div className="w-full h-full flex overflow-x-scroll ">
          {filters.map((item) => {
            return (
              <div
                key={item.id}
                className="w-40 h-40 mx-1 object-cover relative border-4 border-green-500 rounded-xl"
              >
             <Image
                  src={item.url}
                  alt=""
                  layout="fill"
                  className="px-5 absolute flex object-cover"
                /> 
                
              </div>
            );
          })}
        </div>
        {recipes.map((r) => {
          return (
            <div key={r.id} className="py-20 mx-4 space-y-6">
              <h2 className="font-bold text-3xl">{r.name}</h2>
              <p className="text-lg">{r.description}</p>
              <div className="relative h-full w-full flex border-8 rounded-xl border-green-500">
                <Image
                  width={1000}
                  height={700}
                  src={r.image}
                  alt=""
                  className="object-cover absolute"
                />
              </div>
              <div className="w-full flex justify-between items-center font-bold">
                <div className="flex space-x-3">
                  <p>{r.likes}</p>
                  <p>{r.adds}</p>
                </div>
                <div className="bg-green-500 px-5 py-2">+</div>
              </div>
              <div>
                <button></button>
                {!comments && <div><p>comments</p><textarea value={comments} placeholder="leave comment" className="w-full h-20 border-gray-300 border-2 px-3 py-2 "  /></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
