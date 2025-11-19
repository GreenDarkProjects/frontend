import { Logo } from "@/shared"
import { NAV_ITEMS } from "../config/nav-items"
import { NavCard } from "./nav-card"

export const MainMenu = () => {
    return (
        <div className="pb-24">
            <Logo />
            <div className="grid grid-cols-2 gap-2.5 mt-8">
                {NAV_ITEMS.map((item, idx) => (
                    <NavCard {...item} key={idx} />
                ))}
            </div>
        </div>
    )
}