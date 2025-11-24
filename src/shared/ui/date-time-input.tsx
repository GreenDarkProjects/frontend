'use client'

import { IMaskInput } from "react-imask"
import IMask from "imask"
import { InputProps } from "../types"

export const DateTimeInput = ({
    value,
    onChange,
    placeholder,
    error
}: InputProps) => {
    return (
        <div className="relative w-full">
            <IMaskInput
                mask="d.m.Y H:M"
                blocks={{
                    d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
                    m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
                    Y: { mask: IMask.MaskedRange, from: 2024, to: 2035, maxLength: 4 },
                    H: { mask: IMask.MaskedRange, from: 0, to: 23, maxLength: 2 },
                    M: { mask: IMask.MaskedRange, from: 0, to: 59, maxLength: 2 }
                }}
                lazy={false}
                value={String(value || '')}
                unmask={false}
                onAccept={(value: string) => onChange({ target: { value } } as any)}
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