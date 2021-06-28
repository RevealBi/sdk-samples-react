import { config } from '../Constants';

const dashboards = (onSuccess, onError) => {
    executeGet(config.url.API_URL_DASHBOARDS, onSuccess, onError);
}

const dataSources = (onSuccess, onError) => {
    executeGet(config.url.API_URL_DATASOURCES, onSuccess, onError);
}

const deleteDashboard = (dashboardId, onSuccess, onError) => {
    executeDelete(config.url.API_URL_DASHBOARDS + "/" + dashboardId, onSuccess, onError);
}

const exportDashboard = (dashboardId, onSuccess, onError) => {
    const errorHandler = (e) => {
        if (onError) {
            onError(e);
        }
    }
    executeFetch(config.url.API_URL_DASHBOARDS + "/export/" + dashboardId, fetchParameters('get'), false, true, (result) => {
        result.blob().then((blob) => {        
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', dashboardId + '.rdash');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            if (onSuccess) {
                onSuccess();
            }
        }, errorHandler);
    }, errorHandler);
}

const executeGet = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('get'), true, true, onSuccess, onError);
}
const executeDelete = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('delete'), false, true, onSuccess, onError);
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
    dataSources: dataSources,
    deleteDashboard: deleteDashboard,
    exportDashboard: exportDashboard
}