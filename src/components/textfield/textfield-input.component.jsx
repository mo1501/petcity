import React from "react";
import "./textfield-input.styles.css";





const TextFieldInput = ({ type, label, name, value, id, onChange }) => {


    return (



        <input className="textfield-input" id={id} placeholder={label} type={type} name={name} defaultValue={value} onChange={onChange} />




    );
};

export default TextFieldInput;
