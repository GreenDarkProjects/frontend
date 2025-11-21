import { IOrder } from "../../../widgets/order-history/types";

export const OrderCard = ({
    address,
    packages,
    time,
    summ
}: IOrder) => {
    return (
        <div className="w-full bg-white rounded-2xl p-4 border border-bg1 shadow-sm active:scale-[0.98] transition-transform duration-200 touch-manipulation select-none">
            <div className="flex justify-between items-start gap-3 mb-3">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-textBg uppercase tracking-wide mb-0.5">
                        Адрес
                    </span>
                    <h3 className="text-text1 font-bold text-[15px] leading-snug">
                        {address}
                    </h3>
                </div>
                <div className="bg-bg1 px-2.5 py-1.5 rounded-lg shrink-0">
                    <span className="text-xs font-bold text-text1 whitespace-nowrap">
                        {time}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-bg1">
                <div className="flex items-center gap-2 bg-bg1/50 px-3 py-1.5 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text1">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                    <span className="text-text1 font-bold text-sm">
                        {packages} шт.
                    </span>
                </div>

                <span className="text-accent font-black text-xl leading-none">
                    {summ} ₽
                </span>
            </div>
        </div>
    );
};