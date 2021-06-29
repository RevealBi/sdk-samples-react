# Reveal BI - [RevealBI](https://revealbi.io/) UpMedia Browser
This is a sample React application that shows how to use the Reveal BI SDK for Web, including a homepage with the list of dashboards.

## Showing thumbnails (preview icons) for dashboards
With the May-2021 release we're introducing a new JS component, in addition to $.ig.RevealView (that allows displaying and editing a dashboard) you can now use $.ig.RevealDashboardThumbnailView.

You can use it to display a list/grid of dashboards like this one:

<img width="1200" alt="thumbnails image" src="https://user-images.githubusercontent.com/14890904/119543797-72309600-bd67-11eb-9831-ee9d2239f02e.png">

The way you use it is pretty similar to the way you use RevealView, you need to create a new instance of RevealDashboardThumbnailView passing the id of the element what will contain it, usually a div element:

```javascript
var thumbnailView = new $.ig.RevealDashboardThumbnailView("#myDashboardThumbnail");
```
with a div like this:
```html
<div id="myDashboardThumbnail"/>
```

Once created you need to set the dashboard definition to it, so it can render it:
```javascript
thumbnailView.dashboardInfo = dashboardInfo;
```
In dashboardInfo you need to set a "summary" of the dashboard, a reduced version of the dashboard document that only includes the minimum information required by the thumbnail to be rendered (layout, visualizations list and theme).

But, how to get this summary for a given dashboard? This is something you need to do server side. 
For the Java SDK, there are some base classes you can extend to provide this information, we recommend taking a look at [sdk-samples-java](https://github.com/RevealBi/sdk-samples-java#returning-the-list-of-dashboards). For the .NET SDK, you can take a look at the UpMedia backend project: [Samples.Web.UpMedia.Backend](https://github.com/RevealBi/sdk-samples-aspnetcore/tree/main/Reveal.Sdk.Samples.Web.UpMedia.Backend).

Following the instructions there, your server will expose an endpoint at "/reveal-api/dashboards", that will return a list of all dashboards the current user has access to, including the required summary to render the "preview" components.

As a reference, this is a simplified version of the JSON document, returned by the server, with the summary for the Campaigns dashboard:
```json
{
	"Title": "Campaigns",
	"UseAutoLayout": false,
	"DataSources": [],
	"Widgets": [{
		"ColumnSpan": 15,
		"VisualizationSettings": {
			"VisualizationType": "INDICATOR_TARGET"
		},
		"RowSpan": 13,
		"Title": "Spend vs Budget"
	}]
}
```

If you're running one of the upmedia-backend projects ([upmedia-backend-tomcat](https://github.com/RevealBi/sdk-samples-java/tree/main/upmedia-backend-tomcat), [upmedia-backend-spring](https://github.com/RevealBi/sdk-samples-java/tree/main/upmedia-backend-spring) or [Samples.Web.UpMedia.Backend](https://github.com/RevealBi/sdk-samples-aspnetcore/tree/main/Reveal.Sdk.Samples.Web.UpMedia.Backend)), you can access http://localhost:8080/upmedia-backend/reveal-api/dashboards to get a list of all dashboards, and that list will include an "info" attribute for each dashboard with this summary:

<img width="306" alt="image" src="https://user-images.githubusercontent.com/14890904/119552035-a8bede80-bd70-11eb-8f7e-7851fc4b48e5.png">

In this React application, you can take a look at [DashboardsRepository.js](src/components/DashboardsRepository.js), we get the list of dashboards using that endpoint (/reveal-api/dashboards through backend.dashboards() function), then iterate them creating a [RevealDashboardThumbnail](src/components/RevealDashboardThumbnail.js) component for each of them:
```javascript
<RevealDashboardThumbnail title={d.info.Title} id={d.id} summary={d.info}/>
```

In [RevealDashboardThumbnail](src/components/RevealDashboardThumbnail.js) component, we pass the summary property to the RevealDashboardThumbnailView class:
```javascript
var thumbnailView = new RevealApi.RevealDashboardThumbnailView("#" + divId);
thumbnailView.dashboardInfo = props.summary;
```

Regarding the div used to hold the thumbnail, you can see we're creating it using the style class "Reveal-Thumbnail-View":
```html
<div id={divId} className="Reveal-Thumbnail-View"/>
```
With the CSS class being defined this way:
```css
.Reveal-Thumbnail-View {
  position: relative;
  height: 200px;
}
```

