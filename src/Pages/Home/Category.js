import React from "react";
import MenuSelectedFoods from "./MenuSelectedFoods";

const Category = ({ category, setId }) => {
  // console.log(category._id)
  const { _id, name } = category;

  const loadCategoryWiseFoods = (id) => {
    setId(id);
  };
  // shadow-xl  hover:bg-orange-200 hover:scale-105
  return (
    <div>
      <div
        onClick={() => loadCategoryWiseFoods(_id)}
        className="card bg-base-100 mx-2 pb-2 px-2 mb-2 cursor-pointer hover:text-red-600"
      >
        <figure className="px-2 pt-2">
          <img
            className="h-20 w-20 rounded-full"
            src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg"
            alt="burger"
          />
        </figure>
        <p className="text-sm mt-3 font-bold">{name}</p>
      </div>
    </div>
  );
};

export default Category;
