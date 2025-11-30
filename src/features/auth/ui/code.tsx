'use client'

import { Button, Titles } from "@/shared"
import { CodeFormState, CodePageProps } from "../types"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { OtpInput } from "@/shared/ui/opt-input";

export const CodePage = ({
    onNavigate,
    type
}: CodePageProps) => {
    
    const { control, handleSubmit, formState: { errors } } = useForm<CodeFormState>({
        defaultValues: {
            code: ""
        }
    });

    const onSubmit: SubmitHandler<CodeFormState> = (data) => {
        console.log(data.code);
    }

    return (
        <div className="w-full flex flex-col px-4 pb-6">
            <Titles center className="mb-6">
                Введите код для {type === 'reset' ? 'сброса пароля' : 'подтверждения почты'}
            </Titles>

            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col flex-1"
            >
                <div className="mb-8">
                    <Controller
                        name="code"
                        control={control}
                        rules={{ 
                            required: true, 
                            minLength: { value: 6, message: "Введите все 6 символов" } 
                        }}
                        render={({ field, fieldState }) => (
                            <OtpInput 
                                length={6}
                                value={field.value}
                                onChange={field.onChange}
                                error={!!fieldState.error}
                            />
                        )}
                    />
                    {errors.code && (
                        <p className="text-red-500 text-xs text-center mt-2">
                            Код должен состоять из 6 символов
                        </p>
                    )}
                </div>

                <Button 
                    className="mt-10 w-full"
                    onClick={handleSubmit(onSubmit)}
                >
                    Подтвердить
                </Button>
            </form>
        </div>
    )
}