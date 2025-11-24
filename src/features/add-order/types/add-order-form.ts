export interface AddOrderForm {
    address: string;
    apartment: number;
    entrance: number;
    floor: number;
    dateAndTime: string;
    amountOfGarage: number;
    payment: string;
    comment?: string;
};