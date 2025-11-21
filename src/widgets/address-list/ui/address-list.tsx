import { AddressCard, IAddress, NoAddress } from "@/entities/addresses"
import { Loader } from "@/shared";

export const AddressList = () => {
    const addresses: IAddress[] = [
        {
            city: 'Кемерово',
            street: 'пр. Октябрский',
            house: '67а',
            apartment: '71',
            entrance: '5',
            floor: '5'
        }
    ];
    const isLoading = false;

    if(isLoading) {
        return (
            <div className="flex h-full w-full justify-center items-center">
                <Loader />
            </div>
        )
    }
    
    if(!addresses || addresses.length === 0){
        return <NoAddress />
    }

    return (
        <div className="mt-10 grid grid-cols-1 gap-5">
            {addresses.map((address, idx) => (
                <AddressCard {...address} key={idx} />
            ))}
        </div>
    )
}