import React from "react";
import "./textfield.styles.css";



const TextField = ({label}) => {
return (
        <div className="textfield" id="textfield">
            <label className='textfield-label' htmlFor="textfield">{label}</label>
        </div>
);
};

export default TextField;
