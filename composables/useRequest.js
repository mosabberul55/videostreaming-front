const createRequest = async (url, method, body = null) => {
    const config = useRuntimeConfig();
    const { data, status, error, refresh, clear } = await useFetch(url, {
        baseURL: config.public.baseURL,
        onRequest({ request, options }) {
            options.method = method;

            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken()}`,
                Accept: 'application/json',
            };

            if (body) {
                options.body = body;
                options.headers.contentType = 'multipart/form-data'
            }
        },
        onRequestError({}) {
            // Handle the request errors
        },
        onResponse({}) {
            // Handle the response object

        },
        onResponseError({}) {
            // Handle the response errors
        }
    });

    return {data, status, error, refresh, clear};
}

export const getData = async (url) => {
    return createRequest(url, 'GET');
};

export const postData = async (url, body) => {
    return createRequest(url, 'POST', body);
};
export const putData = async (url, body) => {
    return createRequest(url, 'PUT', body);
};

export const deleteData = async (url) => {
    return createRequest(url, 'DELETE');
};
