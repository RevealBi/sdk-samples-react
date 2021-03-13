import React, { useEffect } from "react";
const $ = window.$;

export const CreateDashboard = (props) => {
  const initBoard = () => {
	var view = new $.ig.RevealView("#createDashboard");
	view.startInEditMode = true;
	view.dashboard = new $.ig.RVDashboard();
	
	view.onDataSourcesRequested = function (callback) {
		var samplesDatasource = new $.ig.RVLocalFileDataSourceItem();
		samplesDatasource.uri = "local:/Samples.xlsx";
		var excelDsi = new $.ig.RVExcelDataSourceItem(samplesDatasource);
		excelDsi.title = "Sample Data";

		var northWindCustomersDatasource = new $.ig.RVWebResourceDataSource();
		northWindCustomersDatasource.id = "northwindCustomersDataSource";
		northWindCustomersDatasource.useAnonymousAuthentication = true;
		northWindCustomersDatasource.url = "http://northwind.servicestack.net/Customers.csv";
		northWindCustomersDatasource.title = "Northwind Customers";

		var northWindOrdersDatasource = new $.ig.RVWebResourceDataSource();
		northWindOrdersDatasource.id = "northwindOrdersDataSource";
		northWindOrdersDatasource.useAnonymousAuthentication = true;
		northWindOrdersDatasource.url = "http://northwind.servicestack.net/query/orders.json";
		northWindOrdersDatasource.title = "Northwind Orders";
		callback(new $.ig.RevealDataSources([northWindCustomersDatasource, northWindOrdersDatasource], [excelDsi], true));
		
	};
  };

  useEffect(() => {
    initBoard();
  }, []);

  return <div id="createDashboard" />;
};
