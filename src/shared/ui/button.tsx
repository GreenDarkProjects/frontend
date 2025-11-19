'use client'

import { ButtonProps } from "../types"

export const Button = ({
    children,
    className="",
    onClick,
    variants="green"
}: ButtonProps) => {
    return (
        <button
            className={`
                p-3 
                text-black font-bold text-[16px] 
                rounded-full
                ${variants === "green" ? 'bg-accent' : 'bg-red-500 text-white'}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}