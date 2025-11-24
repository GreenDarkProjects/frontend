'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BOTTOM_MENU_ITEMS } from "../config/bottom-menu.config"

export const BottomMenu = () => {
    const pathname = usePathname()

    if (pathname === '/') {
        return null
    }

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full h-[83px] bg-white z-40" />

            <div className="
                fixed bottom-4
                left-[38px] right-[38px]
                z-50 
                rounded-full bg-[#EAEAEA] 
                shadow-[0_12px_24px_-6px_#98d675] 
                px-8 py-4
            ">
                <div className="flex items-center justify-between">
                    {BOTTOM_MENU_ITEMS.map((item) => {
                        const isActive = item.link === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.link)

                        return (
                            <Link 
                                key={item.link} 
                                href={item.link} 
                                className="relative flex flex-col items-center justify-center"
                            >
                                <item.icon className="w-8 h-8 text-[#444444]" />
                                {isActive && (
                                    <span className="absolute -bottom-2 w-full h-[3px] bg-[#98d675] rounded-full" />
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}