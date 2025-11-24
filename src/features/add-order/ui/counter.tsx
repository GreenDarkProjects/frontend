'use client'

interface CounterProps {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
    label: string
    error?: string
}

export const Counter = ({
    value,
    onChange,
    min = 1,
    max = 6,
    label,
    error
}: CounterProps) => {
    const handleDecrement = () => {
        if (value > min) onChange(value - 1)
    }

    const handleIncrement = () => {
        if (value < max) onChange(value + 1)
    }

    return (
        <div className="relative w-full">
            <div className={`
                w-full
                border 
                rounded-2xl 
                px-5 py-3.5
                flex items-center justify-between
                text-base text-black
                bg-white
                transition-colors
                ${error 
                    ? 'border-red-500'
                    : 'border-gray-200'
                }
            `}>
                <button 
                    type="button"
                    onClick={handleDecrement}
                    disabled={value <= min}
                    className="w-8 h-8 flex items-center justify-center text-accent disabled:text-gray-300 transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <span className="font-medium text-lg">{value}</span>

                <button 
                    type="button"
                    onClick={handleIncrement}
                    disabled={value >= max}
                    className="w-8 h-8 flex items-center justify-center text-accent disabled:text-gray-300 transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            
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
                ${error 
                    ? 'text-red-500' 
                    : 'text-gray-400'
                }
            `}>
                {label}
            </span>

            {error && (
                <div className="mt-1 ml-5 text-xs text-red-500">
                    {error}
                </div>
            )}
        </div>
    )
}