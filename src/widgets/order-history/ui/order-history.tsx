"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import { ORDER_ITEMS } from "../config/order-items"
import { OrderCard } from "@/entities/orders/ui/order-card";

export const OrderHistory = () => {
    return (
        <div className="flex flex-col mb-4.5">
            <div className="flex justify-between items-end mb-3">
                <p className="text-[18px] font-bold text-text1 leading-none">
                    История заказов
                </p>
                <Link 
                    href='orders' 
                    className="text-sm font-medium text-accent hover:opacity-80 transition-opacity leading-none"
                >
                    Посмотреть все
                </Link>
            </div>

            <Swiper
                modules={[FreeMode]}
                freeMode={true}
                spaceBetween={12}
                slidesPerView={'auto'}
                className="w-full pb-4!"
            >
                {ORDER_ITEMS.map((o, idx) => (
                    <SwiperSlide key={idx} className="w-[85%]! sm:w-[320px]!">
                        <OrderCard {...o} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}