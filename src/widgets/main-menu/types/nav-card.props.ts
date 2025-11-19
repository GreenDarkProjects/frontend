import { ElementType } from "react";

export interface NavCardProps {
    icon: ElementType,
    text: string,
    href: string,
    big?: boolean
}