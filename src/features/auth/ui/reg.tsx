'use client'

import { Button, Input, Titles } from "@/shared"
import { AuthStepProps, RegForm } from "../types"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ChangePageButton } from "./change-page-button"

export const Registration = ({
    onNavigate
}: AuthStepProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<RegForm>({
        defaultValues: {
            login: '',
            name: '',
            email: '',
            password: '',
            secondPassword: ''
        }
    });

    const password = watch('password');

    const onSubmit: SubmitHandler<RegForm> = (data) => {
        console.log(data);
    }

    return (
        <div className="w-full h-full flex flex-col">
            <Titles center className="mb-6">
                Регистрация
            </Titles>
            
            <form className="grid grid-cols-1 gap-3 mb-2.5">
                <Controller 
                    name="login"
                    control={control}
                    rules={{ 
                        required: 'Заполните логин',
                        minLength: {
                            value: 3,
                            message: 'Для логина нужно минимум 3 символа'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Для логина нужно не более 20 символов'
                        }

                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Логин"
                        />
                    )}
                />

                <Controller 
                    name="name"
                    control={control}
                    rules={{ 
                        required: 'Заполните имя',
                        minLength: {
                            value: 2,
                            message: 'Для имени нужно минимум 2 символа'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Для имени нужно не более 50 символов'
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Ваше имя"
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
                            placeholder="Пароль"
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
            </form>

            <div className="grid grid-cols-1 gap-2.5">
                <ChangePageButton 
                    onClick={(p) => onNavigate(p)}
                    page="login"
                >
                    Есть аккаунт? Войдите
                </ChangePageButton>
            </div>

            <Button 
                className="w-full mt-auto"
                onClick={handleSubmit(onSubmit)}
            >
                Зарегистрироваться
            </Button>
        </div>
    )
}