import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as authRepository from "../localstorage/access-token-repository";
import jwtDecode from "jwt-decode";

export function loginRequest(formData : CredentialsDTO){
    const headers = {
        "Content-Type" : "application/x-www-form-urlencoded",
        Authorization : "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const body = QueryString.stringify({...formData, grant_type : "password"});

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: body,
        headers
    }
    return requestBackend(config);
}

export function logout(){
    authRepository.remove();
}

export function saveAccessToken(token : string){
    authRepository.save(token);
}

export function getAccessToken(){
    return authRepository.get();
}

export function getAccessTokenPayloadDTO() : AccessTokenPayloadDTO | undefined{
    try{
        const token = authRepository.get();
        return token == null ? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
    }catch(error){
        return undefined;
    }
}

export function isAuthenticated() : boolean {
    const token = getAccessTokenPayloadDTO();
    if(token && token.exp * 1000 > Date.now()){
        return true;
    }
    return false;
}