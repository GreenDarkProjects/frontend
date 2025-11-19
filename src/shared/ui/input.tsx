'use client'

import { InputProps } from "../types"

export const Input = ({
    value,
    onChange,
    placeholder,
    type = "text",
    error
}: InputProps) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder=" "
                className={`
                    peer
                    w-full
                    border 
                    rounded-2xl 
                    px-5 py-3.5
                    text-base text-black
                    outline-none 
                    bg-transparent
                    transition-colors
                    placeholder-transparent
                    ${error 
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 focus:border-accent'
                    }
                `}
            />
            
            <span className={`
                absolute 
                left-4 
                bg-white 
                px-1 
                pointer-events-none
                leading-none
                transition-all duration-200
                -top-2.5 
                text-sm 
                peer-placeholder-shown:top-5 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2.5 
                peer-focus:text-sm
                ${error 
                    ? 'text-red-500' 
                    : 'text-gray-400 peer-focus:text-accent'
                }
            `}>
                {placeholder}
            </span>

            {error && (
                <div className="mt-1 ml-5 text-xs text-red-500">
                    {error}
                </div>
            )}
        </div>
    )
}