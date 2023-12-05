import React, { useState } from 'react'
import { MenuItem } from './MenuItem'
import { useGlobalContext } from '../context';

export const Menu = () => { 
    const { menu, assignSortedData } = useGlobalContext();
    const [sortType,setSorttype] = useState("price")
    // console.log(menu);
    // console.log(Object.keys(menu));


    
      const sortArray = (type) => {
        const types = {
          price: "price",
          likes: "likes"
        };
        const sortProperty = types[type];
        const sorted = [...menu].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
        assignSortedData(sorted);
      };

      // sortArray(sortType);





  return (
    <>
      <div style={{ textAlign: "center" }}>
        sort based on
        <select
          onChange={(e) => {
            setSorttype(e.target.value);
            sortArray(sortType);
          }}
        >
          <option value="price">likes</option>
          <option value="likes">price</option>
        </select>
        <br />
      </div>
      <div className="grid-container">
        {/* <select></select> */}
        {Object.keys(menu).map((food) => {
          return <MenuItem key={menu[food].id} food={menu[food]} />;
        })}
      </div>
    </>
  );
}
