'use client'

import { Login } from "./login"
import React, { useState } from "react"
import { AuthPageType } from "../types"
import { Registration } from "./reg"
import { Logo } from "@/shared"

export const Auth = () => {
    const [page, setPage] = useState<AuthPageType>('login');

    const pages: Record<AuthPageType, React.ReactNode> = {
        'login': <Login onNavigate={setPage} />,
        'reg': <Registration onNavigate={setPage} />
    }

    return (
        <section className="h-full flex flex-col">
            <Logo />
            <div className="flex-1 min-h-0">
                {pages[page]}
            </div>
        </section>
    )
} 