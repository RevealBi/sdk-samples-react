import { config } from '../Constants';

const sessionInfo = 
    localStorage.getItem("sessionData") ? 
    JSON.parse(localStorage.getItem("sessionData")) : 
    {
        sessionId : null
    };

const dashboards = (onSuccess, onError) => {
    executeGet(config.url.API_URL_DASHBOARDS, onSuccess, onError);
}

const dataSources = (onSuccess, onError) => {
    executeGet(config.url.API_URL_DATASOURCES, onSuccess, onError);
}

const deleteDashboard = (dashboardId, onSuccess, onError) => {
    executeDelete(config.url.API_URL_DASHBOARDS + "/" + dashboardId, onSuccess, onError);
}

const login = (username, password, onSuccess, onError) => {
    executeFetch(
        config.url.API_URL_LOGIN, 
        fetchParameters(
            'post', 
            false,
            'application/json', 
            JSON.stringify({
                username: username,
                password: password
            })
        ),
        false,
        (result) => {            
            result.json().then((json) => {
                if (json.succeeded) {
                    setSessionId(json.sessionId);
                    onSuccess(json);
                } else {
                    onError(json.message ? json.message : "Login failed");
                }
            }, onError);
        },
        onError
    );
}

const getSessionHeaders = () => {
    if (sessionInfo.sessionId == null) {
        return {};
    }
    return {
        'Shiro-Session-Id': sessionInfo.sessionId
    }
}

const setSessionId = (sessionId) => {
    if (sessionId == null) {
        return;
    }
    sessionInfo.sessionId = sessionId;
    localStorage.setItem("sessionData", JSON.stringify(sessionInfo));
}

const logout = (onSuccess, onError) => {
    localStorage.removeItem("sessionData");
    executeFetch(
        config.url.API_URL_LOGIN, 
        fetchParameters('delete'),
        true,
        onSuccess,
        onError
    );
}

const executeGet = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('get'), true, onSuccess, onError);
}

const executeDelete = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('delete'), false, onSuccess, onError);
}

const executeFetch = (url, fetchParameters, parseResult, onSuccess, onError) => {
    fetch(url, fetchParameters).then(result => {
        if (result.type === 'opaqueredirect' || result.status == 401) {
            window.location.pathname = config.frontendLoginUrl;
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
        if (e.status == 401) {
            window.location.pathname = config.frontendLoginUrl;
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
    if (includeSession && sessionInfo.sessionId != null) {
        headers['Shiro-Session-Id'] = sessionInfo.sessionId;
    }
    params.headers = headers;
    if (body != null) {
        params.body = body;
    }
    return params;
}
export const backend = {
    login: login,
    logout: logout,
    dashboards: dashboards,
    dataSources: dataSources,
    deleteDashboard: deleteDashboard,
    getSessionHeaders: getSessionHeaders
}