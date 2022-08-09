import Image from "next/image";
import React from "react";
import {
  recipeOne,
  descriptionOne,
  recipeName,
  One,
} from "../../lib/recipeData";

const Hotkeys = ({ recipes }) => {
  return (
    <div>
      <h1>{One.name}</h1>
      <div className="relative h-96 w-full flex">


      <Image className="flex object-cover" layout="fill" src={One.image} alt=""  />      </div>
      <p>{One.description}</p>{" "}
    </div>
  );
};

export default Hotkeys;
