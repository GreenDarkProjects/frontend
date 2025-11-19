import { AuthPageType } from "./auth-page.types";

export interface CodePageProps {
    onNavigate: (page: AuthPageType) => void;
    type: 'reset' | 'submit'
}