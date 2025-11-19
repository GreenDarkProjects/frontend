'use client'

import { useRouter } from "next/navigation"

export const Back = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            className="absolute top-10 left-[15px]"
        >
            <svg viewBox="0 0 32.5061 19.9828" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32.506142" height="19.982788" fill="none">
                <path id="Стрелка 2" d="M0 -1.5L31 -1.5L31 1.5L0 1.5L0 -1.5ZM28.8787 0L21.4541 -7.42462C20.8601 -8.01859 20.8601 -8.95197 21.4541 -9.54594C22.048 -10.1399 22.9814 -10.1399 23.5754 -9.54594L32.0607 -1.06066C32.6546 -0.46669 32.6546 0.46669 32.0607 1.06066L23.5754 9.54594C22.9814 10.1399 22.048 10.1399 21.4541 9.54594C20.8601 8.95197 20.8601 8.01859 21.4541 7.42462L28.8787 0Z" fill="rgb(0,0,0)" fillRule="nonzero" transform="matrix(-1,0,0,-1,32.5061,9.99139)" />
            </svg>
        </button>
    )
}