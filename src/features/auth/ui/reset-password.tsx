import { Button, Input, Titles } from "@/shared"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { AuthStepProps, ResetPasswordForm } from "../types"
import { ChangePageButton } from "./change-page-button";

export const ResetPassword = ({
    onNavigate
}: AuthStepProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<ResetPasswordForm>({
        defaultValues: {
            email: '',
            password: '',
            secondPassword: ''
        }
    });

    const password = watch('password');

    const onSubmit: SubmitHandler<ResetPasswordForm> = (data) => {
        onNavigate('code');
    }
    return (
        <div className="w-full flex flex-col">
            <Titles center className="mb-6">
                Сброс пароля
            </Titles>

            <form className="grid grid-cols-1 gap-3 mb-2.5">
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
                    Вспомнили пароль? Войдите
                </ChangePageButton>
            </div>

            <Button 
                className="w-full mt-10"
                onClick={handleSubmit(onSubmit)}
            >
                Восстановить пароль
            </Button>
        </div>
    )
}