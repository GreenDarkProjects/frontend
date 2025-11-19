import Image from 'next/image';

export const Logo = () => {
    return (
        <div className="h-[20vh] shrink-0 relative">
            <Image 
                src="logo.png"
                alt="logo"
                height={225}
                width={100}
                className="w-full h-full object-contain"
            />
        </div>
    )
}