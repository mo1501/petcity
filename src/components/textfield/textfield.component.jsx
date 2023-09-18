import React from "react";
import "./textfield.styles.css";
import { ReactComponent as MailVector } from '../../assets/images-svgs/mail-vector.svg';
import { ReactComponent as PasswordVector } from '../../assets/images-svgs/lock-vector.svg';
import { ReactComponent as EyeVector } from '../../assets/images-svgs/eye-vector.svg';
import { useState } from 'react';




const TextField = ({ isAuthForm, type, label }) => {
    

    return (
        <div className="input-field">

            {isAuthForm && type === 'email' ? <MailVector className='icon-vector' /> : <PasswordVector className='icon-vector' />}
            <input className="textfield" id="textfield" placeholder={label} type={type} />

            {isAuthForm && type === 'password' && <EyeVector className='icon-vector' />}

        </div>
    );
};

export default TextField;
