import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useGlobalContext } from "../context";

export const MenuItem = ({ food }) => {
  const { darkMode, upVote, downVote } = useGlobalContext();
  // console.log(upVote);
  return (
    <div className="grid-item" id={darkMode ? "grid-item-DM" : "grid-item-LM"}>
      <img
        src={food.img}
        alt="food"
        style={{ height: "150px", width: "230px" }}
        className="menuimg"
      />
      <div>
        <div className="foodTitles">
          <b>{food.title}</b>
          <p>$ {food.price}</p>
        </div>
        <p>{food.desc}</p>

        <div>
          <button onClick={() => {upVote(food.id)}}>
            <GoChevronUp />
          </button>
          {food.likes ? food.likes : 0} likes
          <button onClick={() => {downVote(food.id)}}>
            <GoChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};
