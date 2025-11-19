import { AuthPageType } from "./auth-page.types";

export interface ChangePageButtonProps {
    children: React.ReactNode,
    page: AuthPageType,
    onClick: (page: AuthPageType) => void
}