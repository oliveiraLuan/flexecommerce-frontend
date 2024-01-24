import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { ProductDTO } from "../models/product";

export function findPageRequest(page : number, name : string, size = 12, sort = "name"){
    const config : AxiosRequestConfig = {
        method : "GET",
        url: "/products",
        params : {
            page,
            name,
            size,
            sort
        }
    }

    return requestBackend(config);
}

export function deleteById(productId : number){
    const config: AxiosRequestConfig = {
        method :  "DELETE",
        url: `/products/${productId}`,
        withCredentials: true
    }
    return requestBackend(config);
}

export function findById(id: number){
    return requestBackend({url: `/products/${id}`})
}

export function updateRequest(obj : ProductDTO){
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${obj.id}`,
        withCredentials: true,
        data: obj
    }
    return requestBackend(config);
}