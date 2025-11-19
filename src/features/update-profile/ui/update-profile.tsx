'use client'

import { Controller, useForm } from "react-hook-form"
import { UpdateProfileForm } from "../types/update-profile-form"
import { Input, Button } from "@/shared"

export const UpdateProfile = () => {
    const {
        control,
        handleSubmit,
        formState: { isDirty }
    } = useForm<UpdateProfileForm>({
        defaultValues: {
            name: 'Андрей',
            email: 'andrey228@yandex.ru'
        }
    })

    const onSubmit = (data: UpdateProfileForm) => {
        console.log(data)
    }

    return (
        <form className="grid grid-cols-1 gap-5 mb-10">
            <Controller
                name="name"
                control={control}
                rules={{ required: "Заполните имя" }}
                render={({ field, fieldState }) => (
                    <Input 
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}   
                        placeholder="Имя"
                    />
                )}
            />

            <Controller 
                name="email"
                control={control}
                rules={{ 
                    required: 'Заполните email',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Некорректный формат почты"
                    }
                }}
                render={({ field, fieldState }) => (
                    <Input 
                        type="email"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                        placeholder="Email"
                    />
                )}
            />

            {isDirty && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Button onClick={handleSubmit(onSubmit)} className="w-full">
                        Применить изменения
                    </Button>
                </div>
            )}
        </form>
    )
}