# Reveal BI - [RevealBI](https://revealbi.io/) Studio React Application
This is a sample React application that shows how to use the Reveal BI SDK for Web, including how to create/save dashboards and create data sources.

## Usage
This sample is intended to be used along [studio-backend-tomcat](https://github.com/RevealBi/sdk-samples-java/tree/main/studio-backend-tomcat).

If you're not familiar with React, running:
```sh
npm install
```
and then 
```sh
npm start
```
is enough to have the server running at http://localhost:3000, please be sure to also have the backend server (Tomcat) running in localhost at port 8080.

## How it works

### Getting data sources list from the server
This sample gets the list of data sources to display to the end user from the server, instead of having a hard-coded list client side as the rest of the examples do.
You can take a look at [DashboardView.js](src/components/DashboardView.js), when configuring the `RevealView` object we're configuring the `onDataSourcesRequested` event as follows:
```javascript
view.onDataSourcesRequested = function (callback) {
  loadDataSources((result) => {
    callback(new $.ig.RevealDataSources(result.dataSources, result.dataSourceItems, result.showDataSourcesInDashboard));
  }, (error) => {
      console.log("Error getting data sources: " + error);
  });
};	
```

The loadDataSources function is simply delegating the call to the [backend](src/backend/Backend.js) component, which is basically fetching the list of data sources from `/reveal-api/dataSources` endpoint:
```javascript
const dataSources = (onSuccess, onError) => {
  executeGet(config.url.API_URL_DATASOURCES, onSuccess, onError);
}
```
You can take a look at [Constants.js](src/Constants.js) to see how the different endpoints are configured, including support for development and production environments.

### Enabling creation of data sources
Also in [DashboardView.js](src/components/DashboardView.js), you can see we're configuring a list of data providers to be enabled for creation of new data sources:
```javascript
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.GoogleAnalytics);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.GoogleBigQuery);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.MicrosoftSqlServer);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.MySql);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Postgres);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Sybase);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Oracle);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.AzureSqlServer);
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.AzureSynapse);
```
Setting that list of enabled providers enables the "+ Data Source" button in the UI, displaying all items enabled, like this:
<img width="298" alt="image" src="https://user-images.githubusercontent.com/14890904/123553755-86472900-d753-11eb-830a-a3a956897c53.png">

You don't need to enable all of them, if you only want to allow the creation of MS SQL Server data sources, then just add this line:
```javascript
view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.MicrosoftSqlServer);
```

### Configuration client-side to avoid CORS errors
In [setupProxy.js](src/setupProxy.js) we're enabling a proxy in the React application, so calls to the backend (running for example at port 8080 instead of 3000) are routed through the React app (at port 3000) and that way avoiding errors due to CORS policies.

When deploying your application to a production environment you don't need to use such proxy, unless your backend is hosted in a separate domain.

The creation of data sources for OAuth providers (like Google Analytics) relies on both backend and frontend being hosted in the same domain (so no CORS restrictions are applied) because the login page is opened in a new window and there's some communication happening between both windows to check when the authentication is completed.

