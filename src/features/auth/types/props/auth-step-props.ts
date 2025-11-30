import { AuthPageType } from "./auth-page.types";

export interface AuthStepProps {
    onNavigate: (page: AuthPageType, type?: 'reset' | 'submit') => void;
} 