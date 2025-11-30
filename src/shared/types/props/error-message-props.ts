import { HTMLAttributes } from "react";

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
    message?: string;
}