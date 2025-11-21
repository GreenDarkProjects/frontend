'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ChangePasswordFrom } from "../types/change-password-form"
import { Back, Button, Input, Titles } from "@/shared";

export const ChangePassword = () => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<ChangePasswordFrom>({
        defaultValues: {
            oldPassword: '',
            password: '',
            secondPassword: ''
        }
    });

    const password = watch('password');

    const onSubmit: SubmitHandler<ChangePasswordFrom> = (data) => {
        console.log(data);
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <Back />
            <form className="grid grid-cols-1 gap-5 w-full">
                <Titles center>Смена пароля</Titles>
                <Controller 
                    name="oldPassword"
                    control={control}
                    rules={{ 
                        required: 'Заполните пароль',
                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Старый пароль"
                        />
                    )}
                />
                <Controller 
                    name="password"
                    control={control}
                    rules={{ 
                        required: 'Заполните пароль',
                        minLength: {
                            value: 6,
                            message: 'Для пароля нужно минимум 6 символов'
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Новый пароль"
                        />
                    )}
                />

                <Controller 
                    name="secondPassword"
                    control={control}
                    rules={{ 
                        required: 'Введите пароль повторно',
                        validate: (value) => {
                            if(value !== password) {
                                return 'Пароли не совпадают';
                            }

                            return true
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Повторный пароль"
                        />
                    )}
                />

                <Button 
                    className="w-full mt-auto"
                    onClick={handleSubmit(onSubmit)}
                >
                    Изменить пароль
                </Button>
            </form>
        </div>
    )
}