'use client'

import { Button } from "@/shared";
import { useRouter } from "next/navigation";
import { OrderSuccessProps } from "../types/order-success-props";

export const OrderSuccess = ({
    id
}: OrderSuccessProps) => {
    const router = useRouter();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-5 text-center">
            <div className="w-24 h-24 rounded-full bg-[#98d675]/20 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#98d675" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <h1 className="text-2xl font-bold text-black mb-3">
                Ваш заказ №{id}<br/>был принят
            </h1>

            <p className="text-gray-500 text-base mb-10 max-w-[300px]">
                Благодарим за выбор нашей компании. Курьеры приедут к назначенному времени
            </p>

            <Button
                className="w-full"
                onClick={() => router.push('/home')}
            >
                На главную
            </Button>
        </div>
    )
}