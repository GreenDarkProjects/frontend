'use client'

import { Button, Input, Titles } from "@/shared"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { AuthStepProps, LoginForm } from "../types"
import { ChangePageButton } from "./change-page-button"

export const Login = ({
    onNavigate
}: AuthStepProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        console.log(data);
    }

    return (
        <div className="w-full flex flex-col">
            <Titles center className="mb-6">Войти</Titles>
            <form className="grid grid-cols-1 gap-3 mb-2.5">
                <Controller
                    name="login"
                    control={control}
                    rules={{ required: "Заполните логин/почту" }}
                    render={({ field, fieldState }) => (
                        <Input 
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}   
                            placeholder="Логин/email"
                        />
                    )}
                />

                <Controller 
                    name="password"
                    control={control}
                    rules={{ required: "Заполните пароль" }}
                    render={({ field, fieldState }) => (
                        <Input 
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message} 
                            placeholder="Пароль"
                        />
                    )}
                />
            </form>

            <div className="grid grid-cols-1 gap-2.5">
                <ChangePageButton 
                    onClick={(p) => onNavigate(p)}
                    page="reg"
                >
                    Регистрация
                </ChangePageButton>

                <ChangePageButton 
                    onClick={(p) => onNavigate(p)}
                    page="reset-password"
                >
                    Забыли пароль?
                </ChangePageButton>
            </div>

            <Button 
                className="w-full mt-10"
                onClick={handleSubmit(onSubmit)}
            >
                Войти
            </Button>
        </div>
    )
}