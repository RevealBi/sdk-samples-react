import { config } from '../Constants';

const sessionInfo = 
    localStorage.getItem("sessionData") ? 
    JSON.parse(localStorage.getItem("sessionData")) : 
    {
        sessionId : null,
        displayName: null,
        emailAddress: null
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
                    setSessionData(json.sessionId, json.emailAddress, json.displayName);
                    onSuccess(json);
                } else {
                    onError(json.message ? json.message : "Login failed");
                }
            }, onError);
        },
        onError
    );    
}

const oauthLogin = (provider, accessToken, onSuccess, onError) => {
    executeFetch(
        config.url.API_URL_LOGIN, 
        fetchParameters(
            'post', 
            false,
            'application/json', 
            JSON.stringify({
                provider: provider,
                accessToken: accessToken
            })
        ),
        false,
        (result) => {            
            result.json().then((json) => {
                if (json.succeeded) {
                    setSessionData(json.sessionId, json.emailAddress, json.displayName);
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

const setSessionData = (sessionId, emailAddress, displayName) => {
    if (sessionId == null) {
        return;
    }
    sessionInfo.sessionId = sessionId;
    sessionInfo.emailAddress = emailAddress;
    sessionInfo.displayName = displayName;
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

const exportDashboard = (dashboardId, onSuccess, onError) => {
    const errorHandler = (e) => {
        if (onError) {
            onError(e);
        }
    }
    executeFetch(config.url.API_URL_DASHBOARDS + "/export/" + dashboardId, fetchParameters('get'), false, (result) => {
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

const uploadDashboards = (formData, onSuccess) => {
    executeFetch(config.url.API_URL_DASHBOARDS + "/upload", fetchParameters('post', true, null, formData), false, 
        () => {
            if (onSuccess) {
                onSuccess();
            } else {
                console.log("upload ok");
            }
        }, 
        (e) => {
            console.log("upload failed: " + e);
        }
    )
}

const executeGet = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('get'), true, onSuccess, onError);
}

const executeDelete = (url, onSuccess, onError) => {
    executeFetch(url, fetchParameters('delete'), false, onSuccess, onError);
}

const executeFetch = (url, fetchParameters, parseResult, onSuccess, onError) => {
    fetch(url, fetchParameters).then(result => {
        if (result.type === 'opaqueredirect' || result.status === 401) {
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
        if (e.status === 401) {
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
    oauthLogin: oauthLogin,
    logout: logout,
    dashboards: dashboards,
    dataSources: dataSources,
    deleteDashboard: deleteDashboard,
    exportDashboard: exportDashboard,
    uploadDashboards: uploadDashboards,
    getSessionHeaders: getSessionHeaders
}