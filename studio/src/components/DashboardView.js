import React, { useState, useEffect } from "react";
import { Prompt, useParams } from 'react-router-dom';
import { backend } from "../backend/Backend";
const RevealApi = window.RevealApi;
const $ = window.$;

export const DashboardView = (props) => {
	const [, setRevealView] = useState(null);
	const [hasPendingChanges, setHasPendingChanges] = useState(false);
	const { dashboardId } = useParams();

	useEffect(() => {
		const initView = () => {
			if (dashboardId == null || dashboardId === "__new" || dashboardId === "newdashboard") {
				if (!props.readOnly) {
					var view = new RevealApi.RevealView("#rvDashboardView");
					view.startInEditMode = true;
					view.dashboard = new RevealApi.RVDashboard();
					installRevealView(view);
				}
			} else {
				RevealApi.RevealUtility.loadDashboard(dashboardId, (dashboard) => {
					var view = new RevealApi.RevealView("#rvDashboardView");
					view.dashboard = dashboard;
					view.canEdit = !props.readOnly;
					view.canSaveAs = !props.readOnly;
					installRevealView(view);
				}, (error) => console.log(error));
			}	
		};
		
		const loadDataSources = (onSuccess, onError) => {
			backend.dataSources(onSuccess, onError)
		}
		const installRevealView = (view) => {
			view.onDataSourcesRequested = function (callback) {
				loadDataSources((result) => {
					callback(new $.ig.RevealDataSources(result.dataSources, result.dataSourceItems, result.showDataSourcesInDashboard));
				}, (error) => {
						console.log("Error getting data sources: " + error);
				});
			};			
			view.dashboard.onHasPendingChangesChanged = (newValue) => {
				setHasPendingChanges(newValue);
			}
			view.onSave = function(rv, saveEvent) {
				if (saveEvent.saveAs || saveEvent.isNew) {
					var name = prompt("Dashboard name: ", saveEvent.name);
					if (name != null) {
						saveEvent.name = name;
						saveEvent.dashboardId = RevealApi.RevealUtility.generateUID();
					} else {
						return;
					}
				}
				saveEvent.saveFinished();
			};
			view.onVisualizationLinkingDashboard = function(title, url, callback) {
				if (url.startsWith("id:")) {
					callback(url.substring("id:".length));
				}
			};
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.GoogleAnalytics);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.GoogleBigQuery);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.MicrosoftSqlServer);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.MySql);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Postgres);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Sybase);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.Oracle);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.AzureSqlServer);
			view.addDataSourceEnabledProviders.push(RevealApi.RVProviderType.AzureSynapse);
			setRevealView(view);
		}
		initView();
	}, [dashboardId, props]);

	return <>
			<div id="rvDashboardView" className="Reveal-Dashboard-View"/>
			<Prompt when={hasPendingChanges} message="There are unsaved changes, are you sure?"/>
		</>;
};
