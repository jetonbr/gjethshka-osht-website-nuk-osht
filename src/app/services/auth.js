import { request } from "../../utils/axiosInstance"

export const loginService = (data) => {
    try {
        const response = request("POST", 'auth/login', data);
        return response;
    } catch(e) {
        return e;
    }
}

export const registerService = (data) => {
    try {
        const response = request("POST", 'auth/login', data);
        return response;
    } catch(e) {
        return e;
    }
}



