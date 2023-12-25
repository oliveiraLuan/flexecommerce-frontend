import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findUser(){

    const config : AxiosRequestConfig = {
        url : `/users/me`,
        withCredentials: true
    }

    return requestBackend(config);
}