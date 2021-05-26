import { config } from '../Constants';

const dashboards = (onSuccess, onError) => {
    executeGet(config.url.API_URL_DASHBOARDS, onSuccess, onError);
}

const executeGet = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('get'), true, true, onSuccess, onError);
}

const executeFetch = (url, fetchParameters, parseResult, redirectIfNotAuthorized, onSuccess, onError) => {
    fetch(url, fetchParameters).then(result => {
        if (result.type === 'opaqueredirect' || result.status === 401 || result.status === 403) {
            if (redirectIfNotAuthorized) {
                window.location.pathname = config.frontendLoginUrl;
            } else {
                onSuccess(result);
            }
        } else if (result.ok) {
            if (parseResult) {
                result.json().then(onSuccess, onError);
            } else {
                onSuccess(result);
            }
        } else {
            onError(result.statusText);
        }
    }).catch(e => {
        if (e.status === 401 || e.status === 403) {
            if (redirectIfNotAuthorized) {
                window.location.pathname = config.frontendLoginUrl;
            } else {
                onError(e);
            }
        } else {
            onError(e);
        }
    });
}

const fetchParameters = (method, includeSession = true, contentType = null, body = null) => {
    var headers = {};
    var params = {
        method: method,
        redirect: 'manual'
    };
    if (contentType) {
        headers['Content-Type'] = contentType;
    }
    params.headers = headers;
    if (body != null) {
        params.body = body;
    }
    return params;
}
export const backend = {
    dashboards: dashboards,
}