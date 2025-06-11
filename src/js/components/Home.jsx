/*la logica del switchPurpleLogic es muy mala, fue lo que se me ocurrio en ese momento.
Ademas, tampoco funciona como se espera, porque cuando esta activo Purple, aunque booly===true,
al colorActivo pasar a ser "rojo", se eliminan las clases luz, purple y activo del ultimo <div>,
entonces es imposible que en el switch colorActivo === "purple"
*/

import { useState } from "react";
import { Button } from "./Button";

import "../../styles/Home.css";

function Home() {
  const [colorActivo, setColorActivo] = useState("");
  

  const switchColor = (color) =>{
    setColorActivo (prev => prev === color ? "" : color);
  }

  const switchPurpleLogic = (booly) =>{
    if(booly){
        colorActivo === "purple" ? 
        switchColor("rojo") : colorActivo === "rojo" ? 
        switchColor("amarillo") : colorActivo === "amarillo" ? 
        switchColor("verde") : switchColor("purple")

    }
    else{
        colorActivo === "rojo" ? 
        switchColor("amarillo") : (colorActivo === "amarillo") ?
        switchColor("verde") : switchColor("rojo")
    }
  }

  return (
    <>
    <div className="stick"></div>
    <div className="generalContainer">
      <div className="container">  

        <div 
          className={`luz rojo ${colorActivo==="rojo" ? "activo" : ""}`} 
          onClick={()=> switchColor("rojo")}>
        </div>

        <div 
          className={`luz amarillo ${colorActivo === "amarillo" ? "activo" : ""}`} 
          onClick={() => switchColor("amarillo")}>
        </div>

        <div 
          className={`luz verde ${colorActivo === "verde" ? "activo" : ""}`} 
          onClick={() => switchColor("verde")}>
        </div>

        <div 
          className={`${colorActivo === "purple" ? "luz purple activo" : ""}`}> 
        </div>

    </div>

    <div className="botonera">
    <Button 
      name="Switch" 
      onClick={() => colorActivo === "purple" ? switchPurpleLogic(true) : switchPurpleLogic(false) }/>

    <Button 
      name="Purple!" 
      onClick={() => ( switchColor("purple"))}/>
    </div>

    </div>
    </>
  );
}

export default Home;
