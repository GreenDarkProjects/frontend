'use client'

import { ButtonProps } from "../types"

export const Button = ({
    children,
    className = "",
    onClick,
    variants = "green",
    isLoading = false,
    disabled,
}: ButtonProps) => {
    
    // Определяем, когда кнопка заблокирована
    const isButtonDisabled = isLoading || disabled;

    return (
        <button
            disabled={isButtonDisabled}
            onClick={onClick}
            className={`
                flex items-center justify-center gap-2 
                p-3 
                text-black font-bold text-[16px] 
                rounded-full
                transition-all duration-200
                
                /* Стили для заблокированной кнопки (прозрачность и курсор) */
                disabled:opacity-70 disabled:cursor-not-allowed
                
                ${variants === "green" ? 'bg-accent' : 'bg-red-500 text-white'}
                ${className}
            `}
        >
            {isLoading ? (
                /* SVG Loader (Спиннер) */
                <svg 
                    className="animate-spin h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                    ></circle>
                    <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            ) : (
                children
            )}
        </button>
    )
}