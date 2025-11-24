import { ChangeEvent } from "react"
import { InputProps } from "./input-props"

export interface SelectOption {
    value: string | number
    label: string
}

export interface SelectProps extends Omit<InputProps, 'onChange' | 'type'> {
    options: SelectOption[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
