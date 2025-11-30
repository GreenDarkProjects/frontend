import { $api } from "@/shared";
import { RegForm } from "../types";

type RegisterRequest = Omit<RegForm, 'secondPassword'>;

export const reg = async (data: RegisterRequest) => {
    return $api.post('/auth/reg', data);
}