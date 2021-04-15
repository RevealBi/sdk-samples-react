import React, { useState, useEffect } from "react";
import { Prompt, useParams } from 'react-router-dom';
import { config } from '../Constants';
const $ = window.$;

export const DashboardView = (props) => {
	const [revealView, setRevealView] = useState(null);
	const [hasPendingChanges, setHasPendingChanges] = useState(false);
	let { dashboardId } = useParams();

	const initView = () => {
		if (dashboardId == null || dashboardId == "__new") {
			var view = new $.ig.RevealView("#rvDashboardView");
			view.startInEditMode = true;
			view.dashboard = new $.ig.RVDashboard();
			installRevealView(view);
		} else {
			$.ig.RevealUtility.loadDashboard(dashboardId, (dashboard) => {
				var view = new $.ig.RevealView("#rvDashboardView");
				view.dashboard = dashboard;
				installRevealView(view);
			}, (error) => console.log(error));
		}	
	};

	const loadDataSources = (onSuccess, onError) => {
		fetch(config.url.API_URL_DATASOURCES)
			.then(res => res.json())
			.then(onSuccess, onError)
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
			if (saveEvent.saveAs || saveEvent.name == "New Dashboard") {
				var name = prompt("Dashboard name: ", saveEvent.name);
				if (name != null) {
					//workaround to change the title in the UI
					saveEvent.serializeWithNewName(name, function(blob) {}, function(error){});
					
					saveEvent.name = name;
					saveEvent._dashboardId = name;
				}
			}
			saveEvent.saveFinished();
		};
		setRevealView(view);
	}
	useEffect(() => {
		initView();
	}, []);

	return <>
			<div id="rvDashboardView" className="Reveal-Dashboard-View"/>
			<Prompt when={hasPendingChanges} message="There are unsaved changes, are you sure?"/>
		</>;
};
