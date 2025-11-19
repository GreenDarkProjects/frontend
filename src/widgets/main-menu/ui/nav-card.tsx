import Link from "next/link";
import { NavCardProps } from "../types";

export const NavCard = ({
    big=false,
    icon: Icon,
    text,
    href
}: NavCardProps) => {
    return (
        <Link
            href={href}
            className={`h-32 w-full flex flex-col items-start justify-start gap-2.5 rounded-xl p-3.5 ${big ? 'col-span-2 bg-accent' : 'bg-bg1'}`}
        >
            <Icon />
            <p>{text}</p>
        </Link>
    )
}