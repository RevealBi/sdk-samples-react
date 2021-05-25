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

But, how to get this summary for a given dashboard? This is something you need to do server side. In short, for the Java SDK you need to do this:
```java
RVDashboardSummary summary = RVSerializationUtilities.getDashboardSummary(in);
Map<String, Object> json = summary.toJson();
```
The value of that map (json) is what you need client side to render the thumbnail.
