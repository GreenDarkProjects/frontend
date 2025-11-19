export interface InputProps {
    placeholder: string;
    value: string;
    onChange: () => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'date',
    error?: string;
}