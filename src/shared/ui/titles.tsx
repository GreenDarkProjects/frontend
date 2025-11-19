import { TitlesProps } from '../types'

export const Titles = ({
    children,
    center = false,
    className=""
}: TitlesProps) => {
    return (
        <h2
            className={`text-text1 text-[36px] font-bold ${center ? 'text-center' : ''} ${className}`}
        >
            {children}
        </h2>
    )
}
