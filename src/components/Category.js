import React from 'react'
import { useGlobalContext } from "../context";

export const Category = () => {
    const { filterData, findAllData } = useGlobalContext();
    // console.log(filterData);
  return (
    <div>
      <div className="category">
        <button onClick={() => findAllData()}>All</button>
        <button onClick={() => filterData("breakfast")}>Breakfast</button>
        <button onClick={() => filterData("lunch")}>Lunch</button>
        <button onClick={() => filterData("shakes")}>Shakes</button>
      </div>
    </div>
  );
};
 