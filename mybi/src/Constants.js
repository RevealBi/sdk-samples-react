const dev_base_url = 'http://localhost:8080/mybi/';
const prod_base_url = 'http://revealcdb01.eastus.cloudapp.azure.com:8081/mybi/'
const base_url = process.env.NODE_ENV === 'development' ? dev_base_url : prod_base_url;
const base_reveal_url = base_url + "reveal-api/";
const base_api_url = base_url + "api/";
const dev_frontend_path = '';
const prod_frontend_path = ''; //should be /mybi
const frontend_path = process.env.NODE_ENV === 'development' ? dev_frontend_path : prod_frontend_path;

export const config = {
    url: {
        REVEAL_API_URL: base_reveal_url,
        API_URL_LOGIN: base_api_url + 'login',
        API_URL_DASHBOARDS: base_api_url + 'dashboards',
        API_URL_DATASOURCES: base_api_url + 'dataSources',
    },
    frontendLoginUrl: frontend_path + '/login'
};
