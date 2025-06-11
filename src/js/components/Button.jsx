import React from "react";


export const Button = ({name, onClick}) =>{
    return (
        <div>
            <button className="btn btn-primary" onClick={onClick}>{name}</button>
        </div>
    );
};