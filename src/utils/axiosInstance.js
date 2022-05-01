import axios from "axios";

export const url = "https://back.tolltref.com/";

const config = {
    baseURL: url,
    headers: {
        'Authorization': '',
        'Content-Type': 'application/json'
    },
}

const api = axios.create(config);

// api.interceptors.request.use(function (config) {
//     let token = localStorage.getItem('token');
//     config.headers["Authorization"] = "Bearer " + token;
//     return config;
// });

// api.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         let res = error.response;
//         if (res.status === 401) {
//             window.location.href = "http://localhost:3000"
//         }
//         console.error(`Looks like there was a problem. Status Code: ` + res.status);
//         return Promise.reject(error);
//     }
// )

export const request = (method, url, data, params, headers) => {
    return api.request({
        method,
        url,
        data,
        params,
        headers
    });
};

export const updateAxiosHeaders = (token) => {
    axios.defaults.headers.common["Authorization"] = token
}
