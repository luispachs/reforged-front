type HTTPConfigType = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?:string|FormData;
    headers?:Record<string,string>;
}

export type {
    HTTPConfigType
}