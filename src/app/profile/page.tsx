'use client'

import { Logout } from '@/features/logout'
import { UpdateProfile } from '@/features/update-profile'
import { Button, Titles } from '@/shared'
import { OrderHistory } from '@/widgets/order-history'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='pb-24'>
            <Titles center className='mb-4.5'>Профиль</Titles>
            <OrderHistory />
            <UpdateProfile />

            <Button className='w-full mb-9' onClick={() => console.log()}>
                <Link href='/address' className='w-full'>
                        Просмотр или добавление адреса
                </Link>
            </Button>

            <Button className='w-full mb-[60px]' onClick={() => console.log()}>
                <Link href='profile/change-password'>
                    Сменить пароль
                </Link>
            </Button>

            <Logout />
        </div>
    )
}
