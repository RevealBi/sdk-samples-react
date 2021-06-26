const dev_base_url = 'http://localhost:3000/studio-backend/';
const prod_base_url = 'https://samples.revealbi.io/studio-backend/'
const base_url = process.env.NODE_ENV === 'development' ? dev_base_url : prod_base_url;

const router_base_name = process.env.NODE_ENV === 'development' ? '/' : '/studio';
const base_api_url = base_url + "reveal-api/";

export const config = {
    url: {
        REVEAL_API_URL: base_api_url,
        API_URL_DASHBOARDS: base_api_url + 'dashboards',
        API_URL_DATASOURCES: base_api_url + 'dataSources',
    },
    routerBasename: router_base_name
};
