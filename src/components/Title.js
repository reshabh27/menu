import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useGlobalContext } from '../context';

export const Title = () => {
  const {darkMode,changeMode} = useGlobalContext();
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>OUR MENU </h1>
      </div>
      <button onClick={() => changeMode()} style={{fontSize: "40px",borderRadius:'60px',float:'right'}}>{darkMode ? <CiLight /> : <MdDarkMode />}</button>
      <br /><br />
    </div>
  );
}
