import { isAxiosError } from 'axios'; // Если используете axios, лучше импортировать этот гард

export interface ErrorType {
    message: string[] | string;
    error?: string;
    statusCode?: number;
}

/**
 * Достаёт человекочитаемое сообщение из ошибки (axios/fetch/Error/строка).
 */
export const extractError = (e: unknown): string => {
    if (!e) return 'Неизвестная ошибка';

    // 1. Обработка Axios ошибки
    // Проверяем, есть ли response.data (стандартная структура axios)
    if (isRecord(e) && isRecord(e.response) && isRecord(e.response.data)) {
        const data = e.response.data;

        // NestJS часто возвращает массив сообщений при ошибках валидации (class-validator)
        if (Array.isArray(data.message) && data.message.length > 0) {
            return data.message[0];
        }

        // Обычное сообщение от сервера NestJS
        if (typeof data.message === 'string') {
            return data.message;
        }

        // Иногда поле называется error
        if (typeof data.error === 'string') {
            return data.error;
        }
        
        // Если сервер вернул просто строку в body
        if (typeof data === 'string') {
            return data;
        }
    }

    // 2. Обработка стандартной ошибки (Error) или типизированной ErrorType
    if (isRecord(e) && 'message' in e) {
        if (Array.isArray(e.message) && e.message.length > 0) {
            return String(e.message[0]);
        }
        if (typeof e.message === 'string') {
            return e.message;
        }
    }

    // 3. Если ошибка пришла просто строкой
    if (typeof e === 'string') {
        return e;
    }

    // 4. Фолбэк
    return 'Ошибка сервера';
};

// Type Guard для проверки, является ли значение объектом
function isRecord(v: unknown): v is Record<string, any> {
    return typeof v === 'object' && v !== null;
}