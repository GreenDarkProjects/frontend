import { OrderSuccess } from '@/widgets/order-success';

interface PageProps {
    params: Promise<{
        id: string;
    }>
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    return (
        <OrderSuccess
            id={id}
        />
    )
}
