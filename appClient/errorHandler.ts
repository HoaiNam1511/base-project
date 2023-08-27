import { minimatch } from "minimatch";

const rules: Array<{
    url: string;
    handlers: {
        [key: string]: (error: any) => void;
    };
}> = [
    {
        url: "",
        handlers: {
            500: () => {
                //Handle logic for error 500/Server error
            },
            404: () => {
                //Handle logic for error 404/Not found
            },
            403: () => {
                //Handle logic for error 403/Forbidden
            },
            401: () => {
                //Handle logic for error 402/Unauthorized
            },
            400: () => {
                //Handle logic for error 400/Bad request
            },
        },
    },
];

const errorHandler = (error: any) => {
    //Get url error
    const url = error.response.config.url;
    //Get status error (500, 403...)
    const status = error.response.status;
    //Find error in rules array
    const checkMatchRule = rules.find((rule) => minimatch(url, rule.url));

    if (checkMatchRule) {
        const handler = checkMatchRule.handlers[status];

        handler && handler(error);
    }
};

export default errorHandler;
