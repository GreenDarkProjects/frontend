'use client'

import { useRef, ClipboardEvent, KeyboardEvent } from "react"

interface OtpInputProps {
    length?: number;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
}

export const OtpInput = ({ 
    length = 6, 
    value = "", 
    onChange,
    error
}: OtpInputProps) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const charArray = Array.from({ length }, (_, i) => value[i] || "");

    const focusInput = (index: number) => {
        inputRefs.current[index]?.focus();
    };

    const handleChange = (index: number, char: string) => {
        if (!/^[a-zA-Z0-9]*$/.test(char)) return;

        const newChar = char.slice(-1);
        const newOtp = [...charArray];
        newOtp[index] = newChar;
        
        const newValue = newOtp.join("");
        onChange(newValue);

        if (newChar && index < length - 1) {
            focusInput(index + 1);
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            if (!charArray[index] && index > 0) {
                const newOtp = [...charArray];
                newOtp[index - 1] = "";
                onChange(newOtp.join(""));
                focusInput(index - 1);
            }
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, length);
        if (/^[a-zA-Z0-9]+$/.test(pastedData)) {
            onChange(pastedData);
            focusInput(Math.min(pastedData.length, length - 1));
        }
    };

    return (
        <div className="flex gap-2 justify-center w-full">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    maxLength={1}
                    value={charArray[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`
                        w-11 h-14 
                        text-center text-2xl font-bold uppercase
                        border rounded-xl 
                        outline-none transition-colors
                        bg-transparent
                        ${error 
                            ? 'border-red-500 text-red-500' 
                            : 'border-gray-300 focus:border-[#A8C97F] text-black'
                        }
                    `}
                />
            ))}
        </div>
    )
}