


const API_URL = "http://localhost:8080";

export class HttpRequestError extends Error {
    constructor(response) {
        super(`Network response was not ok: ${response.status} ${response.statusText}`);
        this.response = response;
    }
}

const fetchData = async (url, requestOptions) => {
    const apiUrl = `${API_URL}${url}`;

    const allRequestOptions = {credentials: "include", ...requestOptions};

    try {
        const response = await fetch(apiUrl, allRequestOptions);
        if (!response.ok) {
            throw new HttpRequestError(response);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const apiGet = (url, params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params || {}).filter(([_, value]) => value != null)
    );

    const apiUrl = `${url}?${new URLSearchParams(filteredParams)}`;
    const requestOptions = {
        method: "GET",
    };

    return fetchData(apiUrl, requestOptions);
};

export const apiPost = (url, data) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetchData(url, requestOptions);
};

export const apiPut = (url, data) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetchData(url, requestOptions);
};

export const apiDelete = (url) => {
    const requestOptions = {
        method: "DELETE",
    };

    return fetchData(url, requestOptions);
};

export function calculate (price,vat){
    return price + ((price/100) * vat)
};
