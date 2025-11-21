import { Button } from "@/shared"

export const Logout = () => {
    return (
        <Button variants='red' onClick={() => console.log()} className='w-full'>
            Выйти
        </Button>
    )
}