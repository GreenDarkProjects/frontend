'use client'

import { Logout } from '@/features/logout'
import { UpdateProfile } from '@/features/update-profile'
import { Button, Titles } from '@/shared'
import { OrderHistory } from '@/widgets/order-history'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();

    return (
        <div className='pb-24'>
            <Titles center className='mb-4.5'>Профиль</Titles>
            <OrderHistory />
            <UpdateProfile />

            <div className='grid grid-cols-1 gap-3'>
                <Button onClick={() => router.push('/profile/change-password')}>
                    Сменить пароль
                </Button>

                <Logout />
            </div>
        </div>
    )
}
