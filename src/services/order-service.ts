import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { OrderDTO } from "../models/order";

export function findById(id: number){
    const config : AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }
    return requestBackend(config);
}

export function post(order : OrderDTO){
    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/orders`,
        withCredentials: true,
        data: order
    }
    return requestBackend(config);
}