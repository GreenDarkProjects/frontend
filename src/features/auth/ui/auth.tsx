'use client'

import { Login } from "./login"
import React, { useState } from "react"
import { AuthPageType } from "../types"
import { Registration } from "./reg"
import { Logo } from "@/shared"
import { ResetPassword } from "./reset-password"
import { CodePage } from "./code"

export const Auth = () => {
    const [page, setPage] = useState<AuthPageType>('login');
    const [codeType, setCodeType] = useState<'reset' | 'submit'>('submit');

    const handleNavigate = (newPage: AuthPageType, type?: 'reset' | 'submit') => {
        if (type) {
            setCodeType(type);
        }
        setPage(newPage);
    };

    const pages: Record<AuthPageType, React.ReactNode> = {
        'login': <Login onNavigate={handleNavigate} />,
        'reg': <Registration onNavigate={handleNavigate} />,
        'reset-password': <ResetPassword onNavigate={handleNavigate} />,
        'code': <CodePage type={codeType} onNavigate={handleNavigate} />
    }

    return (
        <section className="h-full flex flex-col">
            <Logo />
            <div className="flex-1 min-h-screen pb-10">
                {pages[page]}
            </div>
        </section>
    )
}