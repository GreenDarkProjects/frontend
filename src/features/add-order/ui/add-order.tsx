'use client'

import { Back, Button, Input, Logo, Select } from "@/shared"
import { DateTimeInput } from "@/shared/ui/date-time-input"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { AddOrderForm } from "../types"
import { INIT_TOTAL_COST, PAYMENT_METHODS } from "../config"
import { Counter } from "./counter"

export const AddOrder = () => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<AddOrderForm>({
        defaultValues: {
            address: '',
            apartment: 1,
            entrance: 1,
            floor: 1,
            dateAndTime: '',
            amountOfGarage: 1,
            payment: 'cash',
            comment: null
        }
    })

    const amountOfGarage = watch('amountOfGarage')
    const bagsCost = amountOfGarage * 10
    const totalCost = INIT_TOTAL_COST + bagsCost

    const onSubmit: SubmitHandler<AddOrderForm> = (data) => {
        console.log({ ...data, totalCost })
    }

    return (
        <section className="pb-24">
            <Logo />
            <Back />

            <form className="mt-3 grid grid-cols-1 gap-4 mb-6">
                <Controller 
                    name="address"
                    control={control}
                    rules={{ 
                        required: 'Заполните адрес',
                    }}
                    render={({ field, fieldState }) => (
                        <Input 
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Адрес"
                        />
                    )}
                />

                <div className="grid grid-cols-3 gap-2">
                    <Controller 
                        name="apartment"
                        control={control}
                        rules={{ 
                            required: 'Заполните квартиру',
                        }}
                        render={({ field, fieldState }) => (
                            <Input 
                                type="text"
                                value={field.value.toString()}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                                error={fieldState.error?.message}
                                placeholder="Квартира"
                            />
                        )}
                    />

                    <Controller 
                        name="entrance"
                        control={control}
                        rules={{ 
                            required: 'Заполните подъезд',
                        }}
                        render={({ field, fieldState }) => (
                            <Input 
                                type="number"
                                value={field.value.toString()}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                placeholder="Подъезд"
                            />
                        )}
                    />

                    <Controller 
                        name="floor"
                        control={control}
                        rules={{ 
                            required: 'Заполните этаж',
                        }}
                        render={({ field, fieldState }) => (
                            <Input 
                                type="number"
                                value={field.value.toString()}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                placeholder="Этаж"
                            />
                        )}
                    />
                </div>

                <Controller 
                    name="dateAndTime"
                    control={control}
                    rules={{ 
                        required: 'Выберите время',
                        minLength: {
                            value: 16,
                            message: 'Введите полную дату'
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <DateTimeInput
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Дата и время (ДД.ММ.ГГГГ ЧЧ:ММ)"
                        />
                    )}
                />
                
                <Controller 
                    name="payment"
                    control={control}
                    rules={{ required: 'Выберите способ оплаты' }}
                    render={({ field, fieldState }) => (
                        <Select 
                            options={PAYMENT_METHODS}
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            placeholder="Способ оплаты"
                        />
                    )}
                />

                <Controller 
                    name="amountOfGarage"
                    control={control}
                    rules={{ 
                        required: 'Укажите количество',
                    }}
                    render={({ field, fieldState }) => (
                        <Counter 
                            value={field.value}
                            onChange={field.onChange}
                            min={1}
                            max={6}
                            label="Количество мусора"
                            error={fieldState.error?.message}
                        />
                    )}
                />
            </form>

            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] space-y-4 mb-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <p>Стоимость услуг</p>
                        <p className="font-medium text-black">{INIT_TOTAL_COST} ₽</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <p>Доп. пакеты ({amountOfGarage} шт)</p>
                        <p className="font-medium text-black">{bagsCost} ₽</p>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="flex items-end justify-between">
                    <p className="text-lg font-bold text-black mb-1">Итого</p>
                    <p className="text-3xl font-bold text-[#98d675] leading-none">
                        {totalCost} ₽
                    </p>
                </div>

                <div className="pt-2">
                    <Button onClick={handleSubmit(onSubmit)} className="w-full">
                        Заказать
                    </Button>
                </div>
            </div>
        </section>
    )
}