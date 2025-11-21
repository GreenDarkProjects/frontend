import { NoOrders, OrderCard } from "@/entities/orders";
import { Loader } from "@/shared";
import { ORDER_ITEMS } from "@/widgets/order-history/config/order-items";
import { IOrder } from "@/widgets/order-history/types";

export const OrderList = () => {
    const orders: IOrder[] = ORDER_ITEMS;

    const isLoading = false;

    if (isLoading) {
        return (
            <div className="flex h-full w-full justify-center items-center">
                <Loader />
            </div>
        )
    }


    if(!orders || orders.length === 0) {
        return <NoOrders />
    }

    return (
        <div className="mt-10 grid grid-cols-1 gap-5">
            {orders.map((order, idx) => (
                <OrderCard {...order} key={idx} />
            ))}
        </div>
    )
}