'use client'

import { Button } from "@/shared"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const NoOrders = () => {
    const router = useRouter();
    
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image 
                width={100}
                height={100}
                alt="Нет заказов"
                src='no-orders.png'
                className="mb-9 w-full! h-auto!"
            />
            <Button
                onClick={() => router.push('/orders/create')}
            >
                Добавить заказ
            </Button>
        </div>
    )
}