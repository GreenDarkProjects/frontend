import { AddressIcon, HomeIcon, OrderIcon, ProfileIcon } from "../icons";
import { BottomMenuItem } from "../types";

export const BOTTOM_MENU_ITEMS: BottomMenuItem[] = [
    {
        icon: HomeIcon,
        link: '/home'
    },
    {
        icon: OrderIcon,
        link: '/orders'
    },
    {
        icon: AddressIcon,
        link: '/addresses'
    },
    {
        icon: ProfileIcon,
        link: '/profile'
    }
]