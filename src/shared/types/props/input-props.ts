import { ChangeEvent } from "react";

export interface InputProps {
    placeholder: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'date',
    error?: string;
}