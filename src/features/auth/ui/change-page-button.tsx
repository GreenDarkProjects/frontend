import { ChangePageButtonProps } from "../types"

export const ChangePageButton = ({
    children,
    page,
    onClick
}: ChangePageButtonProps) => {
    return (
        <button
            onClick={() => onClick(page)}
            className="text-accent font-bold text-[12px] flex items-start ml-4"
        >
            {children}
        </button>
    )
}