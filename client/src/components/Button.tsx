import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export default function GreenButton({ text, onClick } : ButtonProps) {
    return (
        <button
            onClick = {onClick}
            style = {{
                backgroundColor: "green",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
        >
            {text}
        </button>
    );
}