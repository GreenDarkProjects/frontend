import { Back } from '@/shared'
import { OrderList } from '@/widgets/order-list'

export default function Page() {
    return (
        <section className='pb-24'>
            <Back />
            <OrderList />
        </section>
    )
}
