import Image from 'next/image';

export const Logo = () => {
    return (
        <div className="h-[20vh] shrink-0 relative flex flex-col justify-center items-center min-w-full w-full">
            <Image 
                src="/logo-top.png"
                alt="logo"
                height={225}
                width={100}
                className="w-full h-[60%] object-contain"
            />
            <Image 
                src="/logo-bottom.png"
                alt="logo"
                height={225}
                width={100}
                className="w-full h-[40%] object-contain"
            />
        </div>
    )
}