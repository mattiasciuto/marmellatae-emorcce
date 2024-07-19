import React from 'react';

export interface RoundedButtonProps{
    label?: string;
    onClick: () => void;
    icon?: string;
}

export default function RoundedButton(
    { icon, label, onClick}: RoundedButtonProps = { icon: "", label: "" , onClick: () => {}} 
){
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            >
            {label && <p>{label}</p>}
            {icon && <img src={icon} alt="icon" />}
        </button>
    );
}