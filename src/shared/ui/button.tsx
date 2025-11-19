'use client'

import { ButtonProps } from "../types"

export const Button = ({
    children,
    className="",
    onClick
}: ButtonProps) => {
    return (
        <button
            className={`
                p-3 
                text-black font-bold text-[16px] 
                rounded-full
                bg-accent
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}