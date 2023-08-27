const getBody = async (request: Request): Promise<any> => {
    let body = null;

    try {
        body = await request.formData();
    } catch (err) {}

    try {
        body = await request.json();
    } catch (err) {}

    return body;
};

const isFormData = (body: any) => body instanceof FormData;

export const bodyConfig = async (request: Request): Promise<RequestInit> => {
    const body = await getBody(request);

    const config: RequestInit = {};

    if (body) {
        //Type request of body is form data
        if (isFormData(body)) {
            config.body = body;
        }
        //Type request of body is json
        else {
            config.body = JSON.stringify(body);
            config.headers = {
                "Content-Type": "Application/json",
            };
        }
    }
    return config;
};
