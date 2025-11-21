import { IAddress } from "../types"

export const AddressCard = ({
    city,
    street,
    house,
    apartment,
    entrance,
    floor,
}: IAddress) => {
    return (
        <div className="w-full flex items-start gap-3 p-4 rounded-2xl bg-white border border-bg1 shadow-sm">
            {/* Иконка */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-bg1 text-text1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>

            {/* Информация */}
            <div className="flex flex-col grow pt-0.5">
                <span className="text-[10px] font-bold text-textBg uppercase tracking-wide mb-0.5">
                    {city}
                </span>
                
                <h3 className="text-text1 font-bold text-[15px] leading-snug mb-1.5">
                    {street}, д. {house}
                </h3>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-text1/80">
                    {apartment && <span>кв. {apartment}</span>}
                    {entrance && (
                        <>
                            <span className="text-bg1">•</span>
                            <span>под. {entrance}</span>
                        </>
                    )}
                    {floor && (
                        <>
                            <span className="text-bg1">•</span>
                            <span>эт. {floor}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}