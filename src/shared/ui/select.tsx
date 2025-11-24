'use client'

import { useEffect, useRef, useState } from "react"

interface SelectOption {
    value: string | number
    label: string
}

interface SelectProps {
    value: string | number
    onChange: (value: string | number) => void
    options: SelectOption[]
    placeholder: string
    error?: string
}

export const Select = ({
    value,
    onChange,
    options,
    placeholder,
    error
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectedOption = options.find(opt => opt.value === value)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (newValue: string | number) => {
        onChange(newValue)
        setIsOpen(false)
    }

    return (
        <div ref={containerRef} className="relative w-full">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    relative
                    w-full
                    border 
                    rounded-2xl 
                    px-5 py-3.5
                    text-base text-black
                    bg-white
                    cursor-pointer
                    transition-colors
                    flex items-center justify-between
                    ${error 
                        ? 'border-red-500'
                        : isOpen ? 'border-accent' : 'border-gray-200'
                    }
                `}
            >
                <span className="invisible">Placeholder</span>
                {selectedOption && (
                    <span className="absolute left-5">{selectedOption.label}</span>
                )}
                
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <span className={`
                absolute 
                left-4 
                bg-white 
                px-1 
                pointer-events-none
                leading-none
                transition-all duration-200
                z-10
                ${(value || isOpen)
                    ? '-top-2.5 text-sm' 
                    : 'top-4 text-base'
                }
                ${error 
                    ? 'text-red-500' 
                    : isOpen ? 'text-accent' : 'text-gray-400'
                }
            `}>
                {placeholder}
            </span>

            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-lg z-50 overflow-hidden max-h-[200px] overflow-y-auto">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className={`
                                px-5 py-3 
                                cursor-pointer 
                                transition-colors 
                                text-base
                                hover:bg-gray-50
                                ${option.value === value ? 'bg-gray-50 text-accent font-medium' : 'text-black'}
                            `}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}

            {error && (
                <div className="mt-1 ml-5 text-xs text-red-500">
                    {error}
                </div>
            )}
        </div>
    )
}