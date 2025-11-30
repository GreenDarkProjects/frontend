'use client'

import { Button, ErrorMessage, ErrorType, extractError, Input, Titles } from "@/shared"
import { AuthStepProps, RegForm } from "../types"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ChangePageButton } from "./change-page-button"
import { useState } from "react"
import { reg } from "../api"

export const Registration = ({
    onNavigate
}: AuthStepProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState('');

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

    const onSubmit: SubmitHandler<RegForm> = async (data) => {
        try {
            setIsLoading(true);
            setServerError('');

            console.log(data);

            const { secondPassword, ...requestData } = data;

            await reg(requestData);

            onNavigate('code', 'submit');
        } catch(e: unknown) {
            const message = extractError(e as ErrorType);

            setServerError(message);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full flex flex-col">
            <Titles center className="mb-6">
                Регистрация
            </Titles>

            {
                serverError != '' && (
                    <div className="mb-4 min-h-5"> 
                        <ErrorMessage message={serverError} />
                    </div>
                )
            }
            
            
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
                className="w-full mt-10"
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
            >
                Зарегистрироваться
            </Button>
        </div>
    )
}