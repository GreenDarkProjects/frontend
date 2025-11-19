'use client'

import { UpdateProfile } from '@/features/update-profile'
import { Button, Titles } from '@/shared'
import { OrderHistory } from '@/widgets/order-history'
import Link from 'next/link'

export default function Page() {
    return (
        <div>
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

            <Button variants='red' onClick={() => console.log()} className='w-full'>
                Выйти
            </Button>
        </div>
    )
}
