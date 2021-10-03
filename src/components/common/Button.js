import React from 'react';
import './Button.scss';

const Button = ({ onClick, buttonText, isSecondary }) => {
    const className = 'button ' + (isSecondary ? 'secondary' : '');

    return (
        <button className={className} onClick={onClick}>{buttonText}</button>
    )
}

export default Button;