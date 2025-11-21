import { AddressesIcon, CartIcon, OrdersIcon, ReviewsIcon, TechIcon } from "../icons";
import { NavCardProps } from "../types";

export const NAV_ITEMS: NavCardProps[] = [
    {
        icon: CartIcon,
        text: 'Добавить заказ',
        href: '/orders/add',
        big: true
    },
    {
        icon: OrdersIcon,
        text: 'Мои заказы',
        href: '/orders'
    },
    {
        icon: AddressesIcon,
        text: 'Мои адреса',
        href: '/address'
    },
    {
        icon: TechIcon,
        text: 'Техническая поддержка',
        href: 'http://t.me/TundaAndrey'
    },
    {
        icon: ReviewsIcon,
        text: 'Отзывы',
        href: '/reviews'
    }
]