/*!@license
* Infragistics.Web.ClientUI ..\..\..\JSNative\infragistics.sharedUI.js <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*/
(function ($) {
$.ig = $.ig || {};
var $$t = {}
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"CloudFileNavController:a",
"RPViewControllerBase:b",
"ViewControllerScreenBase:c",
"ViewControllerBase:d",
"CPViewController:e",
"ViewController:f",
"Object:g",
"Type:h",
"Boolean:i",
"ValueType:j",
"Void:k",
"IConvertible:l",
"IFormatProvider:m",
"Number:n",
"String:o",
"IComparable:p",
"Number:q",
"IComparable$1:r",
"IEquatable$1:s",
"Number:t",
"Number:u",
"Number:v",
"Number:w",
"NumberStyles:x",
"Enum:y",
"Array:z",
"IList:aa",
"ICollection:ab",
"IEnumerable:ac",
"IEnumerator:ad",
"NotSupportedException:ae",
"Error:af",
"Number:ag",
"String:ah",
"StringComparison:ai",
"RegExp:aj",
"CultureInfo:ak",
"DateTimeFormatInfo:al",
"Calendar:am",
"Date:an",
"Number:ao",
"DayOfWeek:ap",
"DateTimeKind:aq",
"CalendarWeekRule:ar",
"NumberFormatInfo:as",
"CompareInfo:at",
"CompareOptions:au",
"IEnumerable$1:av",
"IEnumerator$1:aw",
"IDisposable:ax",
"StringSplitOptions:ay",
"Number:az",
"Number:a0",
"Number:a1",
"Number:a2",
"Number:a3",
"Number:a4",
"Assembly:a5",
"Stream:a6",
"SeekOrigin:a7",
"RuntimeTypeHandle:a8",
"MethodInfo:a9",
"MethodBase:ba",
"MemberInfo:bb",
"ParameterInfo:bc",
"TypeCode:bd",
"ConstructorInfo:be",
"PropertyInfo:bf",
"Array:bg",
"Array:bh",
"CompareCallback:bi",
"MulticastDelegate:bj",
"IntPtr:bk",
"CPViewBase:bl",
"NativePanel:bm",
"View:bn",
"InteractiveView:bo",
"CPTimer:bp",
"AnimationHelperBase:bq",
"Timer:br",
"window:bs",
"Callback:bt",
"JSDate:bu",
"AnimationTickBlock:bv",
"Math:bw",
"JQueryObject:bx",
"Element:by",
"ElementAttributeCollection:bz",
"ElementCollection:b0",
"WebStyle:b1",
"ElementNodeType:b2",
"document:b3",
"EventListener:b4",
"IElementEventHandler:b5",
"ElementEventHandler:b6",
"ElementAttribute:b7",
"JQueryPosition:b8",
"JQueryCallback:b9",
"JQueryEvent:ca",
"JQueryTouchEventObject:cb",
"JQueryUICallback:cc",
"Script:cd",
"TouchPoints:ce",
"UIEventManager:cf",
"CPPoint:cg",
"PointExecutionBlock:ch",
"KeyboardKeys:ci",
"CPLayoutParams:cj",
"CPLayoutParamsBase:ck",
"JQuery:cl",
"JQueryDeferred:cm",
"JQueryPromise:cn",
"Action:co",
"Action$1:cp",
"CanvasElement:cq",
"CanvasContext:cr",
"AnimationHelperDelegate:cs",
"SizeChangeBlock:ct",
"AnimationHelper:cu",
"ExecutionBlock:cv",
"ExecutionBoolBlock:cw",
"CPNavigationViewController:cx",
"CPNavigationBar:cy",
"CPLabel:cz",
"TextAlignment:c0",
"JSHelperUtility:c1",
"PathIconLabelButton:c2",
"PathIconButton:c3",
"CPInteractionView:c4",
"CPView:c5",
"CPInteractionViewMode:c6",
"CPInteractionHighlight:c7",
"CPInteractionDrawingViewBase:c8",
"AnimatableDrawingView:c9",
"DrawingViewBase:da",
"CanvasContext:db",
"CanvasContext2D:dc",
"TextMetrics:dd",
"ImageData:de",
"Gradient:df",
"ColorUtility:dg",
"CPMathUtility:dh",
"CPRect:di",
"CPSize:dj",
"NativeColorUtility:dk",
"CPStrokeCap:dl",
"CPStrokeJoin:dm",
"ImageElement:dn",
"CircleRenderInfo:dp",
"PathIconView:dq",
"PathIconRenderInfo:dr",
"PathIcon:ds",
"PathIconPart:dt",
"NativeUIUtility:du",
"CPCellPath:dv",
"CPRowPath:dw",
"CPGridViewFixedColumnDirection:dx",
"PathCommandType:dy",
"NativeStringUtility:dz",
"Dictionary:d0",
"Dictionary:d1",
"PathCommand:d2",
"UIUtility:d3",
"UIPathIcons:d4",
"PathIconsBase:d5",
"NativeDictionaryUtility:d6",
"PathIconLabelLocation:d7",
"ThemeManager:d8",
"UIThemeHelper:d9",
"DefaultUITheme:ea",
"ViewControllerModalPresentationStyle:eb",
"CPTextView:ec",
"InputView:ed",
"KeyboardType:ee",
"CPScrollView:ef",
"CPScrollViewBase:eg",
"ScrollEventProcessorDelegate:eh",
"ScrollEventProcessor:ei",
"RoundButton:ej",
"RoundedView:ek",
"RoundeViewDrawingInfo:el",
"CPGridViewCellSetupDelegate:em",
"CPGridViewCellBase:en",
"CPGridView:eo",
"CPGridViewLayoutEngine:ep",
"CPGridViewDatasourceHelper:eq",
"CPGridViewColumnDefinition:er",
"CPColumnWidth:es",
"CreateNewCellBlock:et",
"CPGridViewCell:eu",
"CPGridViewTextLabelCell:ev",
"CPGridViewHeaderCell:ew",
"CPGridViewValueColumnDefinition:ex",
"CPGridViewRowSeparatorCell:ey",
"CreateCellBlock:ez",
"CPGridViewSectionHeaderCell:e0",
"CPGridViewRowHeightBlock:e1",
"CPGridSectionInfo:e2",
"CPColumnInfo:e3",
"CPGridViewCellsPanel:e4",
"CPGridViewCellsPanelBase:e5",
"CPCellType:e6",
"CPGridViewAnimationType:e7",
"CPGridViewSelectionType:e8",
"CPPopupManager:e9",
"CPPopupContainerView:fa",
"CPPopupManagerBase:fb",
"CPPopupContainerBackgroundView:fc",
"CPPopupAnimatorDelegate:fd",
"ObjectBlock:fe",
"CPPopupMessageBoxManager:ff",
"CPPopupPosition:fg",
"CPPopupHeader:fh",
"CPGridViewIconCell:fi",
"CPGridViewOverflowCell:fj",
"CPPopupFooter:fk",
"CPPopupSeciton:fl",
"CPPopupListManager:fm",
"CPImageView:fn",
"CPPopupBackgroundView:fo",
"CPPopupBackgroundViewInfo:fp",
"CPPopupListView:fq",
"CPPopupListViewColumn:fr",
"CPPopupListViewCellBase:fs",
"CPPopupListItemBase:ft",
"CancellableObjectBlock:fu",
"CPGridViewSingleFieldMultiColumnDataSourceHelper:fv",
"CPPopupNotificationMessageManager:fw",
"CloudFileManager:fx",
"TokenState:fy",
"OAuthTokenStateCallback:fz",
"CloudError:f0",
"IRequestFactory:f1",
"IRequest:f2",
"IOAuthRequest:f3",
"Token:f4",
"BackingStoreObjectBase:f5",
"CPJSONObject:f6",
"JSDictionary:f7",
"NativeJSONUtility:f8",
"NativeRequestUtility:f9",
"WebRequest:ga",
"JSAjaxBeforeSendRequestBlock:gb",
"SessionTask:gc",
"SessionDelegate:gd",
"URLRequest:ge",
"SessionHTTPMethod:gf",
"SessionContentType:gg",
"SessionResponseType:gh",
"SessionTaskType:gi",
"SessionType:gj",
"JSAjaxSuccessReponseBlock:gk",
"JSAjaxErrorReponseBlock:gl",
"CloudAccountUserInfo:gm",
"CloudProviderType:gn",
"CloudProviderTypeUtility:go",
"BoxAccountUserInfo:gp",
"GoogleAccountUserInfo:gq",
"MicrosoftAccountUserInfo:gr",
"SharePointAccountUserInfo:gs",
"DropboxAccountUserInfo:gt",
"InfragisticsAccountUserInfo:gu",
"SearchCapabilities:gv",
"DropboxFileManager:gw",
"Request:gx",
"RequestBase:gy",
"RequestSuccessBlock:gz",
"RequestErrorBlock:g0",
"RequestCompletionDelegate:g1",
"CloudFile:g2",
"Nullable$1:g3",
"CloudFilesBlock:g4",
"CloudErrorBlock:g5",
"DropboxGetFilesRequest:g6",
"DropboxRequestBase:g7",
"OAuthRequestBase:g8",
"SessionRequestBase:g9",
"SessionRequestProgressUpdateBlock:ha",
"SessionRequestFileDownloadedBlock:hb",
"NativeXmlProxy:hc",
"OAuthProvider:hd",
"DropboxOAuthProvider:he",
"DropboxFile:hf",
"DateUtility:hg",
"NativeDateUtility:hh",
"DropboxSearchFilesRequest:hi",
"SearchQuery:hj",
"ProgressFileBlock:hk",
"FileDownloadedBlock:hl",
"DropboxDownloadFileRequest:hm",
"CloudFileBlock:hn",
"DropboxGetMetadataRequest:ho",
"DropboxWriteMode:hp",
"DropboxStartUploadSessionRequest:hq",
"DropboxAppendV2UploadSessionRequest:hr",
"DropboxFinishUploadSessionRequest:hs",
"DropboxCreateFolderRequest:ht",
"DropboxDeleteRequest:hu",
"CloudAccountUserInfoBlock:hv",
"DropboxGetAccountInfo:hw",
"DropboxDownloadLinkRequest:hx",
"GoogleFileManager:hy",
"GoogleGetFilesRequest:hz",
"GoogleRequestBase:h0",
"GoogleOAuthProvider:h1",
"GoogleFile:h2",
"RequestsLocalizationKeys:h3",
"NativeRequestLocalizeUtil:h4",
"GoogleSearchFilesRequest:h5",
"GoogleDownloadFileRequest:h6",
"GoogleGetMetadataRequest:h7",
"GoogleCreateUploadSessionRequest:h8",
"GoogleCreateOverwriteSessionRequest:h9",
"GoogleUploadDataChunkRequest:ia",
"GoogleCreateFolderRequest:ib",
"GoogleTrashFileRequest:ic",
"GoogleDeleteFileRequest:id",
"GoogleGetAccountInfo:ie",
"GoogleGetFileRequest:ig",
"GoogleDownloadLinkRequest:ih",
"BoxFileManager:ii",
"BoxGetFilesRequest:ij",
"BoxRequestBase:ik",
"BoxOAuthProvider:il",
"BoxFile:im",
"BoxSearchFilesRequest:io",
"ArrayUtility:ip",
"BoxDownloadFileRequest:iq",
"BoxGetMetadataRequest:ir",
"BoxGetFolderInfoRequest:is",
"NotImplementedException:it",
"BoxCreateFolderRequest:iu",
"BoxDeleteFolderRequest:iv",
"BoxDeleteFileRequest:iw",
"BoxGetAccountInfo:ix",
"BoxDownloadLinkRequest:iy",
"SharePointFileManager:iz",
"SharePointGetSitesRequest:i0",
"SharePointRequestBase:i1",
"SharePointOAuthProvider:i2",
"MicrosoftOAuthProvider:i3",
"SharePointSite:i4",
"SharePointReadListItemsRequest:i5",
"SharePointItem:i6",
"SharePointReadLibraryFolderRequest:i7",
"SharePointFolder:i8",
"SharePointFile:i9",
"SharePointGetListsRequest:ja",
"SharePointList:jb",
"SharePointListBase:jc",
"SharePointLibrary:jd",
"SharePointSearchFilesRequest:je",
"MicrosoftFileManager:jf",
"MicrosoftGetFilesRequest:jg",
"MicrosoftRequestBase:jh",
"MicrosoftFile:ji",
"MicrosoftDownloadFileRequest:jj",
"MicrosoftCreateUploadSessionRequest:jk",
"MicrosoftUploadDataChunkRequest:jl",
"MicrosoftGetMetadataRequest:jm",
"MicrosoftSearchFilesRequest:jn",
"MicrosoftGetAccountInfo:jo",
"MicrosoftDownloadLinkRequest:jp",
"CPGridViewSingleFieldDynamicColumnDataSourceHelper:jq",
"Dashboard:jr",
"IDashboardModelObject:js",
"Array:jt",
"CloneListUtils:ju",
"CloneUtils:jv",
"NativeTypedDictionary:jw",
"List$1:jx",
"IList$1:jy",
"ICollection$1:jz",
"IArray:j0",
"IArrayList:j1",
"Func$3:j2",
"Comparer$1:j3",
"IComparer:j4",
"IComparer$1:j5",
"DefaultComparer$1:j6",
"Comparison$1:j7",
"ReadOnlyCollection$1:j8",
"Predicate$1:j9",
"JsonUtility:ka",
"NativeDataLayerUtility:kb",
"Widget:kc",
"DataSpec:kd",
"BaseDataSourceItem:ke",
"CompositeDataSourceItem:kf",
"DataSourceItem:kg",
"DataSpecBindings:kh",
"UrlBinding:ki",
"Binding:kj",
"BindingSource:kk",
"DashboardGlobalFilterBindingOperatorType:kl",
"BindingTarget:km",
"FieldBindingSource:kn",
"ParameterBindingSource:ko",
"DashboardEnumDeserialization:kp",
"DashboardActionParameterSourceType:kq",
"DashboardActionTargetType:kr",
"DashboardActionTriggerType:ks",
"DashboardAggregationType:kt",
"DashboardBandColorType:ku",
"DashboardBandType:kv",
"DashboardBoundValueType:kw",
"DashboardChartType:kx",
"DashboardContentModeType:ky",
"DashboardDataType:kz",
"DashboardDateAggregationType:k0",
"DashboardDateRuleType:k1",
"DashboardFilterEnumType:k2",
"DashboardFontSizeType:k3",
"DashboardGaugeViewType:k4",
"DashboardGlobalVariableValueType:k5",
"DashboardHeatMapLocationType:k6",
"DashboardLabelDisplayMode:k7",
"DashboardMapLocationType:k8",
"DashboardMapVisualizationType:k9",
"DashboardNegativeFormatType:la",
"DashboardNumberFormattingType:lb",
"DashboardNumberRuleType:lc",
"DashboardShapeType:ld",
"DashboardSortingType:le",
"DashboardStringRuleType:lf",
"DashboardTextAlignment:lg",
"DashboardTimeRuleType:lh",
"DashboardTreeMapLayoutEnumType:li",
"DashboardTrendlineType:lj",
"DashboardXmlaDimensionEnumType:lk",
"DashboardXmlaElementType:ll",
"DataBasedGlobalFilterBindingTarget:lm",
"DateGlobalFilterBindingTarget:ln",
"GlobalVariableBindingTarget:lo",
"DashboardEnumSerialization:lp",
"VisualizationSettings:lq",
"ActionsModel:lr",
"Action:ls",
"ActionParameter:lt",
"ResourceDataSpec:lu",
"TabularDataSpec:lv",
"SummarizationSpec:lw",
"SummarizationDateField:lx",
"SummarizationDimensionField:ly",
"SummarizationBaseField:lz",
"SummarizationRegularField:l0",
"SummarizationValueField:l1",
"FormattingSpec:l2",
"ConditionalFormattingSpec:l3",
"Bound:l4",
"ConditionalFormattingBand:l5",
"BandBase:l6",
"Filter:l7",
"FilterValue:l8",
"DateFormattingSpec:l9",
"NumberFormattingSpec:ma",
"DateTimeFilter:mb",
"DateRange:mc",
"NumberFilter:md",
"StringFilter:me",
"TimeFilter:mf",
"XmlaDateFilter:mg",
"XmlaRegularFilter:mh",
"XmlaFilterRule:mi",
"XmlaNumberFilterRule:mj",
"XmlaStringFilterRule:mk",
"Field:ml",
"QuickFilter:mm",
"XmlaDataSpec:mn",
"XmlaDimension:mo",
"XmlaDimensionElement:mp",
"XmlaFilter:mq",
"XmlaHierarchyLevel:mr",
"XmlaHierarchy:ms",
"XmlaSet:mt",
"XmlaMeasure:mu",
"AssetVisualizationSettings:mv",
"ChartVisualizationSettings:mw",
"FinancialSettings:mx",
"DIYVisualizationSettings:my",
"GaugeVisualizationSettings:mz",
"GaugeBand:m0",
"GridVisualizationSettings:m1",
"GridVisualizationStyle:m2",
"VisualizationColumnStyle:m3",
"HeatMapVisualizationSettings:m4",
"MapBaseVisualizationSettings:m5",
"HeatMapLayersSettings:m6",
"MapVisualizationSettings:m7",
"SingleRowVisualizationSettings:m8",
"TreeMapVisualizationSettings:m9",
"CompositeDataSource:na",
"BaseDataSource:nb",
"DataSetItem:nc",
"DataSource:nd",
"DateGlobalFilter:ne",
"GlobalFilter:nf",
"TabularGlobalFilter:ng",
"DataSourceBasedGlobalFilter:nh",
"GlobalFilterSelectedItem:ni",
"XmlaGlobalFilter:nj",
"GlobalVariable:nk",
"RPGetDashboardModelRequest:nl",
"RPRequestBase:nm",
"DashboardViewController:nn",
"FlowLayoutViewDataSource:no",
"FlowLayoutDataSource:np",
"FlowLayoutItemView:nq",
"FlowlayoutItemInfo:nr",
"FlowLayoutView:ns",
"FlowLayoutViewCaptureViewDelegate:nt",
"FlowLayoutViewCaptureView:nu",
"FlowLayoutDefinition:nv",
"FlowLayoutDirection:nw",
"FlowLayoutManager:nx",
"FlowLayoutResizeHandleLocation:ny",
"FlowLayoutViewEditDelegate:nz",
"FlowLayoutItemViewDelegate:n0",
"FlowLayoutResizeHandleView:n1",
"DashboardTheme:n2",
"DashboardThemeManager:n3",
"WidgetWrapper:n4",
"VisualizationHelper:n5",
"VisualizationType:n6",
"BaseVisualization:n7",
"IDataTableResult:n8",
"IDataTable:n9",
"TableColumn:oa",
"TableCell:ob",
"ConditionalFormat:oc",
"DataColumn:od",
"HierarchyCell:oe",
"TooltipDrillFooter:of",
"DataTableResultHelper:og",
"MinMaxRange:oh",
"NativeUtility:oi",
"TextInstructions:oj",
"RectRotationBounds:ok",
"TextHorizontalAlignment:ol",
"TextVerticalAlignment:om",
"ChartsUtility:on",
"FormatSettingsNegativeNumberMode:oo",
"FormatSettingsNumberType:op",
"KeyedObject:oq",
"CombinedDataItemType:or",
"CategoryDataItemType:os",
"RangeCategoryDataItemType:ot",
"ScatterDataItemType:ou",
"FinancialDataItemType:ov",
"MCCanvas:ow",
"SnapshotBase:ox",
"Layer:oy",
"SnapshotView:oz",
"BaseView:o0",
"AnimationManagerDelegate:o1",
"CrosshairsVisibility:o2",
"HighlightMode:o3",
"TooltipPinLocation:o4",
"AnimationManager:o5",
"AnimationManagerBase:o6",
"SnapshotViewEventManager:o7",
"ZoomType:o8",
"GestureState:o9",
"AdornmentSnapshot:pa",
"DataValueInfo:pb",
"DataInfo:pc",
"DateValueInfo:pd",
"IDataProcessorCallback:pe",
"JSONObject:pf",
"PivotDimensionColumn:pg",
"FieldTableColumn:ph",
"CategoryChartVisualization:pi",
"ChartBaseVisualization:pj",
"ChartBase:pk",
"ScrollableBaseView:pl",
"SharedScrollableBaseView:pm",
"AnimatedSnapshotView:pn",
"JSWidgetOptions:po",
"ChartAnimationBlock:pp",
"CustomScrollViewerDelegate:pq",
"CustomScrollHelper:pr",
"LegendLocation:ps",
"SeriesSnapshotBase:pt",
"LegendSnapshotBase:pu",
"ChartAxisMode:pv",
"SeriesObject:pw",
"TrendlineType:px",
"XAxisLocation:py",
"YAxisLocation:pz",
"MCTrendCalculators:p0",
"ItemLayoutInfo:p1",
"ItemPath:p2",
"TooltipItem:p3",
"TooltipPopupItem:p4",
"TooltipPopupViewCell:p5",
"ISecondaryAxisFormatting:p6",
"CategoryChart:p7",
"CategoryChartBase:p8",
"CartesianChartBase:p9",
"SeriesSnapshot:qa",
"AxisLocation:qb",
"YMajorAxisLinesLayer:qc",
"CalculatedLayer:qd",
"AxisLineLayer:qe",
"CategoryXAxisLayer:qf",
"NumericYAxisLayer:qg",
"CategoryChartLayer:qh",
"TrendlineLayer:qi",
"XAxisTitleLayer:qj",
"YAxisTitleLayer:qk",
"MarkerLayer:ql",
"TextMarkerLayer:qm",
"LegendLayer:qn",
"BarChartVisualization:qo",
"BarChart:qp",
"XMajorAxisLinesLayer:qq",
"CategoryYAxisLayer:qr",
"NumericXAxisLayer:qs",
"BarChartLayer:qt",
"BarTextMarkerLayer:qu",
"ScatterChartVisualization:qv",
"ScatterChart:qw",
"ScatterSeriesSnapshot:qx",
"ScatterChartLayer:qy",
"FinancialChartVisualization:qz",
"CompositeChartVisualization:q0",
"DoughnutChartVisualization:q1",
"PieChartVisualization:q2",
"SliceBaseVisualization:q3",
"SliceChartBase:q4",
"SliceChartSnapshot:q5",
"OthersThresholdType:q6",
"SliceLabelType:q7",
"SliceBase:q8",
"PieChart:q9",
"PieChartLabelLocation:ra",
"PieChartSnapshot:rb",
"ExplodedDisplayStyle:rc",
"PieChartSlice:rd",
"PieChartLayer:re",
"PieChartLabelLayer:rf",
"SliceLegendLayer:rg",
"FunnelChartVisualization:rh",
"FunnelChart:ri",
"FunnelChartLabelLocation:rj",
"FunnelChartSnapshot:rk",
"FunnelChartDisplayMode:rl",
"FunnelChartSlice:rm",
"FunnelChartLayer:rn",
"FunnelChartLabelLayer:ro",
"PolarChartVisualization:rp",
"RadialBaseVisualization:rq",
"PolarChart:rr",
"PolarSeriesSnapshot:rs",
"RadiusAxisLocation:rt",
"Orientation:ru",
"AngleAxisLabelOrientation:rv",
"PolarAxisLayer:rw",
"PolarScatterChartLayer:rx",
"RadiusAxisLabelLayer:ry",
"AngleAxisLabelLayer:rz",
"RadialChartVisualization:r0",
"RadialChart:r1",
"RadialChartLayer:r2",
"RadialGaugeVisualization:r3",
"BaseGaugeVisualization:r4",
"RPGaugeBase:r5",
"RPGaugeSnapshot:r6",
"GaugeShape:r7",
"RPGauge:r8",
"RPGaugeLayer:r9",
"BulletGraphVisualization:sa",
"BulletGraphCell:sb",
"RPBulletGauge:sc",
"RPBulletGaugeLayer:sd",
"BulletGraphData:se",
"LabelGaugeVisualization:sf",
"RPLabelGauge:sg",
"RPLabelGaugeLayer:sh",
"GridVisualization:si",
"GridVisualizationDataSourceHelper:sj",
"GridVisualizationColumn:sk",
"TreeMapVisualization:sl",
"Treemap:sm",
"TreemapSnapshot:sn",
"TreemapLayout:so",
"TreemapData:sp",
"TreemapCalculatorContext:sq",
"TreemapLayer:sr",
"TreemapItem:ss",
"TreeMapItemData:st",
"SingleRowVisualization:su",
"SingleRowVisualizationColumn:sv",
"SingleRowVisualizationCell:sw",
"DynamicDashboardThumbnailPopupListItem:sx",
"DashboardLayoutDescription:sy",
"DashboardItemLayoutDescription:sz",
"DynamicDashboardThumbnailPopupCell:s0",
"DynamicDashboardThumbnail:s1",
"RandomNumberGenerator:s2",
"NativeRandomUtility:s3",
"RPLoadDataForAllWidgetsRequest:s4",
"DataTableResult:s5",
"ClientDataTable:s6",
"ComputedColumn:s7",
"PivotMeasureColumn:s8",
"PivotDateDimensionColumn:s9",
"PivotAdhocColumn:ta",
"XmlaHierarchyColumn:tb",
"WidgetView:tc",
"RPGetFilesRequest:td",
"RPCloudFile:te",
"RPCloudFileManager:tf",
"RPDownloadDashboardRequest:tg",
"GridVisualizationCell:th",
"GridVisualizationHeaderCell:ti",
"AbstractEnumerable:tj",
"Func$1:tk",
"AbstractEnumerator:tl",
"GenericEnumerable$1:tm",
"GenericEnumerator$1:tn"]);
/*<BeginType Name="Infragistics.VisualizationType" />*/

$.ig.util.defType('VisualizationType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "AreaChart";
			case 1: return "BarChart";
			case 2: return "BubbleChart";
			case 3: return "CandlestickChart";
			case 4: return "ColumnChart";
			case 5: return "CompositeChart";
			case 6: return "DoughnutChart";
			case 7: return "FunnelChart";
			case 8: return "LineChart";
			case 9: return "OHLC_Chart";
			case 10: return "PieChart";
			case 11: return "PolarLineChart";
			case 12: return "RadialLineChart";
			case 13: return "ScatterChart";
			case 14: return "SplineChart";
			case 15: return "SplineAreaChart";
			case 16: return "StackedAreaChart";
			case 17: return "StackedBarChart";
			case 18: return "StackedColumnChart";
			case 19: return "StepAreaChart";
			case 20: return "StepLineChart";
			case 21: return "RadialGauge";
			case 22: return "BulletGraph";
			case 23: return "LinearGauge";
			case 24: return "LabelGauge";
			case 25: return "Grid";
			case 26: return "TreeMap";
			case 27: return "Image";
			case 28: return "JSExtension";
			case 29: return "Map";
			case 30: return "HeatMap";
			case 31: return "SingleRow";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('VisualizationType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.VisualizationType" />*/

/*<BeginType Name="Infragistics.RPViewControllerBase" />*/

$.ig.util.defType('RPViewControllerBase', 'ViewControllerScreenBase', {
	init: function () {
		$.ig.ViewControllerScreenBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.RPViewControllerBase::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RPViewControllerBase::HasNavBar()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RPViewControllerBase::UseScrollView()" />*/
	useScrollView: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RPViewControllerBase::UseScrollView()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.RPViewControllerBase::LocalizeText(System.String)" />*/
	localizeText: function (key) {
		return key;
	}
	/*<EndMethod Name="System.String Infragistics.RPViewControllerBase::LocalizeText(System.String)" />*/
	,
	$type: new $.ig.Type('RPViewControllerBase', $.ig.ViewControllerScreenBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPViewControllerBase" />*/

/*<BeginType Name="Infragistics.CloudFileNavController" />*/

$.ig.util.defType('CloudFileNavController', 'RPViewControllerBase', {
	__grid: null,
	__dsh: null,
	__manager: null,
	__getFilesRequest: null,
	__file: null,
	__emptyLabel: null,
	init: function (manager, file) {
		$.ig.RPViewControllerBase.prototype.init.call(this);
		this.__manager = manager;
		this.__file = file;
	},
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::SetCloudFileManager(Infragistics.CloudFileManager)" />*/
	setCloudFileManager: function (manager) {
		this.__manager = manager;
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::SetCloudFileManager(Infragistics.CloudFileManager)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.RPViewControllerBase.prototype.loadSubviews.call(this);
		this.title((this.__file != null) ? this.__file.name() : $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle(this.__manager.getProviderType()));
		this.__grid = new $.ig.CPGridView();
		this.__grid._headerHeight = 0;
		this.__grid._rowSeparatorHeight = 0;
		this.__grid._rowSpacing = this.__grid._columnSpacing = $.ig.NativeUIUtility.prototype.utility().densify(10);
		this.__grid.setScrollBarVisiblitity(false, true);
		this.__grid._sectionHeaderHeight = 0;
		this.addSubview(this.__grid);
		this.__dsh = new $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper(2, new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return new $.ig.CPGridViewIconCell(identifier);
		}), $.ig.NativeUIUtility.prototype.utility().densify(225), 0.25);
		this.__dsh._sectionKey = "IsFolder";
		this.__grid.setDataSource(this.__dsh);
		var signOutButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton("Sign out", null, function (x, y) {
			$self.signOut();
		});
		this.addRightBarButtonItem(signOutButton);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::SignOut()" />*/
	signOut: function () {
		this.navigationController().presentingViewController().dismissViewController(true, null);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::SignOut()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::ViewWillDisappear(System.Boolean)" />*/
	viewWillDisappear: function (animated) {
		$.ig.RPViewControllerBase.prototype.viewWillDisappear.call(this, animated);
		if (this.__getFilesRequest != null) {
			this.__getFilesRequest.cancel();
			this.__getFilesRequest = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::ViewWillDisappear(System.Boolean)" />*/
	,
	__isVCLoaded: false,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::Loaded()" />*/
	loaded: function () {
		$.ig.RPViewControllerBase.prototype.loaded.call(this);
		this.__isVCLoaded = true;
		this.refreshFiles(true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::Loaded()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::RefreshFiles(System.Boolean)" />*/
	refreshFiles: function (showLoadingIndicator) {
		var $self = this;
		if (this.__getFilesRequest == null && this.__isVCLoaded) {
			this.__getFilesRequest = this.__manager.getFilesFromCloudFolder(this.__file, function (files) {
				$self.gotFiles(files);
			}, function (e) {
				$self.__getFilesRequest = null;
			});
			this.__getFilesRequest.execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::RefreshFiles(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::GotFiles(Infragistics.CPList)" />*/
	gotFiles: function (files) {
		this.__getFilesRequest = null;
		if (files != null && files.length > 0) {
			this.__grid.isHidden(false);
			files = $.ig.NativeUIUtility.prototype.utility().sortListAlpha(files, "Name", true);
			this.__dsh.data(files);
			if (this.__emptyLabel != null) {
				this.view().removeSubview(this.__emptyLabel);
				this.__emptyLabel = null;
			}
		} else {
			this.__grid.isHidden(true);
			this.__dsh.data(null);
			if (this.__emptyLabel == null) {
				this.__emptyLabel = new $.ig.CPLabel();
				this.__emptyLabel.setTextAlignment($.ig.TextAlignment.prototype.center);
				this.__emptyLabel.setTextWrapping(true);
				this.__emptyLabel.setText(this.resolveNoContentString());
				this.addSubview(this.__emptyLabel);
				if (this.view().currentWidth() > 0 && this.view().currentHeight() > 0) {
					this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
				}
			}
		}
		this.__grid.updateData(true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::GotFiles(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CloudFileNavController::ResolveNoContentString()" />*/
	resolveNoContentString: function () {
		return "Hmm.. There doesn't appear to be any content.";
	}
	/*<EndMethod Name="System.String Infragistics.CloudFileNavController::ResolveNoContentString()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.RPViewControllerBase.prototype.layoutSubviews.call(this, w, h);
		this.layout(w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::Layout(System.Int32, System.Int32)" />*/
	layout: function (w, h) {
		this.measureView(this.__grid, 0, 0, w, h);
		if (this.__emptyLabel != null) {
			var lw = this._editBoxWidth;
			this.__emptyLabel.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
			this.__emptyLabel.calculateSizeToFit1(lw);
			var lh = this.__emptyLabel.getCalculatedHeight();
			this.measureView(this.__emptyLabel, $.ig.intDivide(w, 2) - $.ig.intDivide(lw, 2), $.ig.intDivide(h, 2) - $.ig.intDivide(lh, 2), lw, lh);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::Layout(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::CloudFileClicked(Infragistics.CloudFile)" />*/
	cloudFileClicked: function (file) {
		if (file.isFolder()) {
			this.navigate(this.__manager, file);
		} else {
			this.getDashboardRequest(file.pathIdentifier()).execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::CloudFileClicked(Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.CloudFileNavController::GetDashboardModelRequest(System.String)" />*/
	getDashboardModelRequest: function (dashboardId) {
		var $self = this;
		var request = new $.ig.RPGetDashboardModelRequest(dashboardId, function (r, o) {
			$self.openDashboardViewController(dashboardId, o);
		}, function (r, e) {
		});
		return request;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.CloudFileNavController::GetDashboardModelRequest(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::OpenDashboardViewController(System.String, Infragistics.ReportPlus.DashboardModel.Dashboard)" />*/
	openDashboardViewController: function (dashboardID, dashboard) {
		var vc = new $.ig.DashboardViewController(dashboardID, dashboard);
		this.navigationController().pushViewController(vc, true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::OpenDashboardViewController(System.String, Infragistics.ReportPlus.DashboardModel.Dashboard)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::Navigate(Infragistics.CloudFileManager, Infragistics.CloudFile)" />*/
	navigate: function (manager, file) {
		var vc = new $.ig.CloudFileNavController(manager, file);
		this.navigationController().pushViewController(vc, true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::Navigate(Infragistics.CloudFileManager, Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var file = cell.data();
		this.cloudFileClicked(file);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CloudFileNavController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CloudFileNavController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var file = cell.data();
		var iconCell = cell;
		cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		iconCell.textLabel().setText(file.name());
		iconCell.setIcon(file.isFolder() ? $.ig.UIPathIcons.prototype.icons().getFolderIcon() : $.ig.UIPathIcons.prototype.icons().getFileIcon());
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.CloudFileNavController::GetDashboardRequest(System.String)" />*/
	getDashboardRequest: function (dashboardId) {
		return this.getDashboardModelRequest(dashboardId);
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.CloudFileNavController::GetDashboardRequest(System.String)" />*/
	,
	$type: new $.ig.Type('CloudFileNavController', $.ig.RPViewControllerBase.prototype.$type, [$.ig.CPGridViewCellSetupDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CloudFileNavController" />*/

/*<BeginType Name="Infragistics.DashboardTheme" />*/

$.ig.util.defType('DashboardTheme', 'BackingStoreObjectBase', {
	init: function (json) {
		$.ig.BackingStoreObjectBase.prototype.init1.call(this, 1, json);
	},
	/*<BeginProperty Name="System.String Infragistics.DashboardTheme::ThemeName()" />*/
	themeName: function () {
		return this.resolveStringForKey("Name");
	}
	/*<EndProperty Name="System.String Infragistics.DashboardTheme::ThemeName()" />*/
	,
	__chartColors: null,
	/*<BeginProperty Name=" Infragistics.DashboardTheme::ChartColors()" />*/
	chartColors: function () {
		if (this.__chartColors == null) {
			var list = this.resolveListForKey("Palette");
			var count = list.length;
			this.__chartColors = new Array(count);
			for (var i = 0; i < count; i++) {
				this.__chartColors[i] = list[i];
			}
		}
		return this.__chartColors;
	}
	/*<EndProperty Name=" Infragistics.DashboardTheme::ChartColors()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::CFRedColor()" />*/
	cFRedColor: function () {
		return this.resolveColorIntForKey("CFRedColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::CFRedColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::CFYellowColor()" />*/
	cFYellowColor: function () {
		return this.resolveColorIntForKey("CFYellowColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::CFYellowColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::CFGreenColor()" />*/
	cFGreenColor: function () {
		return this.resolveColorIntForKey("CFGreenColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::CFGreenColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::DashboardBackgroundColor()" />*/
	dashboardBackgroundColor: function () {
		return this.resolveColorIntForKey("DashboardBackgroundColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::DashboardBackgroundColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::WidgetBackgroundColor()" />*/
	widgetBackgroundColor: function () {
		return this.resolveColorIntForKey("WidgetBackgroundColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::WidgetBackgroundColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::ForegroundColor()" />*/
	foregroundColor: function () {
		return this.resolveColorIntForKey("ForegroundColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::ForegroundColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::OutlineColor()" />*/
	outlineColor: function () {
		return this.resolveColorIntForKey("OutlineColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::OutlineColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::GridAltRowColor()" />*/
	gridAltRowColor: function () {
		return this.resolveColorIntForKey("GridAltRowColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::GridAltRowColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::SingleRowSideBarColor()" />*/
	singleRowSideBarColor: function () {
		return this.resolveColorIntForKey("SingleRowSideBarColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::SingleRowSideBarColor()" />*/
	,
	/*<BeginProperty Name="System.ColorInt Infragistics.DashboardTheme::SingleRowBackgroundColor()" />*/
	singleRowBackgroundColor: function () {
		return this.resolveColorIntForKey("SingleRowBackgroundColor");
	}
	/*<EndProperty Name="System.ColorInt Infragistics.DashboardTheme::SingleRowBackgroundColor()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.DashboardTheme::ValueFontFile()" />*/
	valueFontFile: function () {
		return this.resolveStringForKey("ValueFontFile");
	}
	/*<EndProperty Name="System.String Infragistics.DashboardTheme::ValueFontFile()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.DashboardTheme::FontFileCopy()" />*/
	fontFileCopy: function () {
		return this.resolveStringForKey("CopyFontFile");
	}
	/*<EndProperty Name="System.String Infragistics.DashboardTheme::FontFileCopy()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.DashboardTheme::FontFileCopyBold()" />*/
	fontFileCopyBold: function () {
		return this.resolveStringForKey("CopyBoldFontFile");
	}
	/*<EndProperty Name="System.String Infragistics.DashboardTheme::FontFileCopyBold()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeL()" />*/
	valueFontSizeL: function () {
		return this.resolveIntegerForKey("ValueFontSizeL");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeL()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeM()" />*/
	valueFontSizeM: function () {
		return this.resolveIntegerForKey("ValueFontSizeM");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeM()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeS()" />*/
	valueFontSizeS: function () {
		return this.resolveIntegerForKey("ValueFontSizeS");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::ValueFontSizeS()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::HeaderFontSize()" />*/
	headerFontSize: function () {
		return this.resolveIntegerForKey("HeaderFontSize");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::HeaderFontSize()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::CopyFontSize()" />*/
	copyFontSize: function () {
		return this.resolveIntegerForKey("CopyFontSize");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::CopyFontSize()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::GaugeFontSize()" />*/
	gaugeFontSize: function () {
		return this.resolveIntegerForKey("GaugeFontSize");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::GaugeFontSize()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::DashboardPadding()" />*/
	dashboardPadding: function () {
		return this.resolveIntegerForKey("DashboardPadding");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::DashboardPadding()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetPadding()" />*/
	widgetPadding: function () {
		return this.resolveIntegerForKey("WidgetPadding");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetPadding()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetMargin()" />*/
	widgetMargin: function () {
		return this.resolveIntegerForKey("WidgetMargin");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetMargin()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetShadowSize()" />*/
	widgetShadowSize: function () {
		return this.resolveIntegerForKey("WidgetShadowSize");
	}
	/*<EndProperty Name="System.Int32 Infragistics.DashboardTheme::WidgetShadowSize()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DashboardTheme::ResolveNativeFont(System.String)" />*/
	resolveNativeFont: function (font) {
		return $.ig.ThemeManager.prototype.currentTheme().regularFont();
	}
	/*<EndMethod Name="System.String Infragistics.DashboardTheme::ResolveNativeFont(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DashboardTheme::ResolveNativeColor(System.ColorInt)" />*/
	resolveNativeColor: function (color) {
		return $.ig.ColorUtility.prototype.convertToNative(color);
	}
	/*<EndMethod Name="System.String Infragistics.DashboardTheme::ResolveNativeColor(System.ColorInt)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardTheme::ResolveNativeSize(System.Int32)" />*/
	resolveNativeSize: function (size) {
		return $.ig.NativeUIUtility.prototype.utility().densify(size);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardTheme::ResolveNativeSize(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DashboardTheme::GetBrushAtIndex(System.Int32, System.Int32, System.Double)" />*/
	getBrushAtIndex: function (index, offset, percentChange) {
		var colors = this.chartColors();
		var count = colors.length;
		if (offset < 0) {
			offset = 0;
		}
		var normalizedOffset = offset;
		while (normalizedOffset >= count) {
			normalizedOffset = normalizedOffset - count;
		}
		var percentLevel = 1;
		var normalizedIndex = normalizedOffset + index;
		while (normalizedIndex >= count) {
			percentLevel -= percentChange;
			normalizedIndex = normalizedIndex - count;
		}
		var color = colors[normalizedIndex];
		if (percentLevel < 1) {
			if (percentLevel < 0.05000000074505806) {
				percentLevel = 0.05000000074505806;
			}
			var colorOffset = 1 - percentLevel;
			color = $.ig.ColorUtility.prototype.lightenOrDarkenColor(color, colorOffset);
		}
		return this.resolveNativeColor(color);
	}
	/*<EndMethod Name="System.String Infragistics.DashboardTheme::GetBrushAtIndex(System.Int32, System.Int32, System.Double)" />*/
	,
	$type: new $.ig.Type('DashboardTheme', $.ig.BackingStoreObjectBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DashboardTheme" />*/

/*<BeginType Name="Infragistics.DashboardThemeManager" />*/

$.ig.util.defType('DashboardThemeManager', 'Object', {
	/*<BeginMethod Name="Infragistics.DashboardThemeManager Infragistics.DashboardThemeManager::Manager()" />*/
	manager: function () {
		if ($.ig.DashboardThemeManager.prototype.__manager == null) {
			$.ig.DashboardThemeManager.prototype.__manager = new $.ig.DashboardThemeManager();
		}
		return $.ig.DashboardThemeManager.prototype.__manager;
	}
	/*<EndMethod Name="Infragistics.DashboardThemeManager Infragistics.DashboardThemeManager::Manager()" />*/
	,
	__jsonLookup: null,
	__themes: null,
	__themeNames: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__themeNames = (function () {
			var $ret = new $.ig.Array();
			$ret.add("Admirable");
			$ret.add("Amethyst");
			$ret.add("Blackberry");
			$ret.add("Chocolate Bar");
			$ret.add("Circus");
			$ret.add("Coral Reef");
			$ret.add("Dark");
			$ret.add("Earth");
			$ret.add("Empowered");
			$ret.add("Hot Air Balloon");
			$ret.add("Indigo");
			$ret.add("Lemon Lime Dark");
			$ret.add("Lemon Lime Light");
			$ret.add("Miami Day");
			$ret.add("Miami Night");
			$ret.add("Plum Pudding");
			$ret.add("Rocky Mountain");
			$ret.add("Sky");
			$ret.add("Steel");
			$ret.add("Tans");
			$ret.add("The Blues");
			$ret.add("The Board");
			$ret.add("Traffic Light");
			$ret.add("Tropical Island");
			$ret.add("Vintage Clay");
			return $ret;
		}());
		this.__themes = new $.ig.Dictionary(0);
		this.__jsonLookup = new $.ig.Dictionary(0);
		this.__jsonLookup.item("Admirable", "{\"HeaderFontSize\":18,\"CFYellowColor\":-472320,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-1118482,\"Palette\":[-16737793,-10066330,-8180388,-14572587,-16659455,-18147,-13421773,-6710887],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Admirable\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10066330,\"CFGreenColor\":-15817714,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2881527}");
		this.__jsonLookup.item("Amethyst", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1529335,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-1316618,\"Palette\":[-7306060,-8497258,-8753025,-7591479,-11062163,-3906561,-11336836,-8427381],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Amethyst\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10066330,\"CFGreenColor\":-10118654,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-47863}");
		this.__jsonLookup.item("Blackberry", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1844895,\"DashboardPadding\":3,\"OutlineColor\":-11382447,\"WidgetMargin\":1,\"GridAltRowColor\":-10865842,\"Palette\":[-3028033,-6649193,-10933433,-9294016,-2177618,-10532991,-6388542,-9013644],\"CopyFontFile\":\"NewCicle-Fina\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Blackberry\",\"DashboardBackgroundColor\":-14671840,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-16777216,\"WidgetPadding\":8,\"ForegroundColor\":-3688295,\"CFGreenColor\":-13991930,\"SingleRowBackgroundColor\":-10066330,\"SingleRowSideBarColor\":-13421773,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-5298068}");
		this.__jsonLookup.item("Chocolate Bar", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1387980,\"DashboardPadding\":3,\"OutlineColor\":-5997715,\"WidgetMargin\":1,\"GridAltRowColor\":-12244966,\"Palette\":[-1542110,-1596670,-2929885,-8700373,-6439341,-1516973,-3505405,-7061217],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Chocolate Bar\",\"DashboardBackgroundColor\":-13299455,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-14480895,\"WidgetPadding\":8,\"ForegroundColor\":-3104110,\"CFGreenColor\":-7370201,\"SingleRowBackgroundColor\":-10471127,\"SingleRowSideBarColor\":-12245222,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2597822}");
		this.__jsonLookup.item("Circus", "{\"HeaderFontSize\":18,\"CFYellowColor\":-537856,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-6776169,\"Palette\":[-13267306,-119529,-11500020,-23271,-3688821,-15512959,-9265503,-14067367],\"CopyFontFile\":\"Georgia\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Circus\",\"DashboardBackgroundColor\":-2041923,\"CopyBoldFontFile\":\"Georgia-Bold\",\"WidgetBackgroundColor\":-988454,\"WidgetPadding\":8,\"ForegroundColor\":-16777216,\"CFGreenColor\":-11429119,\"SingleRowBackgroundColor\":-2566185,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-1551066}");
		this.__jsonLookup.item("Coral Reef", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1643257,\"DashboardPadding\":3,\"OutlineColor\":-1842205,\"WidgetMargin\":1,\"GridAltRowColor\":-1842205,\"Palette\":[-38037,-11612732,-11181200,-16735040,-7347755,-3672987,-16735040,-2401934],\"CopyFontFile\":\"Futurist\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Coral Reef\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-16777216,\"CFGreenColor\":-16735595,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-589552}");
		this.__jsonLookup.item("Dark", "{\"HeaderFontSize\":18,\"CFYellowColor\":-602842,\"DashboardPadding\":3,\"OutlineColor\":-13092808,\"WidgetMargin\":1,\"GridAltRowColor\":-13092808,\"Palette\":[-6401640,-8750470,-12409355,-34669,-11309570,-3431,-823508,-16141664],\"CopyFontFile\":\"OpenSans\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Dark\",\"DashboardBackgroundColor\":-12303292,\"CopyBoldFontFile\":\"OpenSans-Bold\",\"WidgetBackgroundColor\":-14408151,\"WidgetPadding\":8,\"ForegroundColor\":-4144960,\"CFGreenColor\":-16725933,\"SingleRowBackgroundColor\":-13355979,\"SingleRowSideBarColor\":-11184297,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-3389342}");
		this.__jsonLookup.item("Earth", "{\"HeaderFontSize\":18,\"CFYellowColor\":-2118320,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-3028297,\"Palette\":[-6191248,-11835039,-6568006,-2176343,-4814235,-9205893,-8557218,-4871265],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Earth\",\"DashboardBackgroundColor\":-396050,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10863329,\"CFGreenColor\":-6568006,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-8700332}");
		this.__jsonLookup.item("Empowered", "{\"HeaderFontSize\":18,\"CFYellowColor\":-537856,\"DashboardPadding\":3,\"OutlineColor\":-3618877,\"WidgetMargin\":1,\"GridAltRowColor\":-3618877,\"Palette\":[-10396068,-34048,-10515787,-7046557,-2436664,-15512959,-9265503,-1551066],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Empowered\",\"DashboardBackgroundColor\":-725015,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-9277069,\"CFGreenColor\":-11429119,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-1551066}");
		this.__jsonLookup.item("Hot Air Balloon", "{\"HeaderFontSize\":18,\"CFYellowColor\":-211941,\"DashboardPadding\":3,\"OutlineColor\":-1907998,\"WidgetMargin\":1,\"GridAltRowColor\":-1907998,\"Palette\":[-12627531,-5389269,-1218237,-9028953,-223707,-2476945,-16537100,-16742021],\"CopyFontFile\":\"OpenSans\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Hot Air Balloon\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"OpenSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-11711155,\"CFGreenColor\":-10772934,\"SingleRowBackgroundColor\":-1118482,\"SingleRowSideBarColor\":-6184543,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2281167}");
		this.__jsonLookup.item("Indigo", "{\"HeaderFontSize\":18,\"CFYellowColor\":-472320,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-1118482,\"Palette\":[-9092711,-11756591,-13077347,-11243905,-9948530,-4432897,-14596512,-13672061],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Indigo\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10066330,\"CFGreenColor\":-15817714,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2881527}");
		this.__jsonLookup.item("Lemon Lime Dark", "{\"HeaderFontSize\":18,\"CFYellowColor\":-468906,\"DashboardPadding\":3,\"OutlineColor\":-11250861,\"WidgetMargin\":1,\"GridAltRowColor\":-11250861,\"Palette\":[-256,-5120768,-13463798,-198856,-16493312,-9126,-3281407,-1245878],\"CopyFontFile\":\"MyriadPro-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Lemon Lime Dark\",\"DashboardBackgroundColor\":-14671840,\"CopyBoldFontFile\":\"MyriadPro-Bold\",\"WidgetBackgroundColor\":-16777216,\"WidgetPadding\":8,\"ForegroundColor\":-3355444,\"CFGreenColor\":-7219152,\"SingleRowBackgroundColor\":-10066330,\"SingleRowSideBarColor\":-13421773,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-4980725}");
		this.__jsonLookup.item("Lemon Lime Light", "{\"HeaderFontSize\":18,\"CFYellowColor\":-30463,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-1773600,\"Palette\":[-1125622,-7488989,-11623638,-204256,-12293887,-9202843,-16747951,-3619328],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Lemon Lime Light\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10066330,\"CFGreenColor\":-10118654,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-10118654}");
		this.__jsonLookup.item("Miami Day", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1986034,\"DashboardPadding\":3,\"OutlineColor\":-12303292,\"WidgetMargin\":1,\"GridAltRowColor\":-12303292,\"Palette\":[-15820915,-2934911,-12266022,-6362791,-10205072,-4292688,-8924180,-13667448],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Miami Day\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-6776169,\"CFGreenColor\":-12937840,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2934911}");
		this.__jsonLookup.item("Miami Night", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1986034,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-10066330,\"Palette\":[-15820915,-2934911,-12266022,-6362791,-10205072,-4292688,-8924180,-13667448],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Miami Night\",\"DashboardBackgroundColor\":-16777216,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-16777216,\"WidgetPadding\":8,\"ForegroundColor\":-3618105,\"CFGreenColor\":-12937840,\"SingleRowBackgroundColor\":-11579826,\"SingleRowSideBarColor\":-14211803,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2934911}");
		this.__jsonLookup.item("Plum Pudding", "{\"HeaderFontSize\":18,\"CFYellowColor\":-2632878,\"DashboardPadding\":3,\"OutlineColor\":-2894380,\"WidgetMargin\":1,\"GridAltRowColor\":-1644569,\"Palette\":[-6517607,-6112069,-2894380,-6315877,-8890259,-11129271,-9755565,-9414547],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Plum Pudding\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10997686,\"CFGreenColor\":-9468031,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-5745071}");
		this.__jsonLookup.item("Rocky Mountain", "{\"HeaderFontSize\":18,\"CFYellowColor\":-10929,\"DashboardPadding\":3,\"OutlineColor\":-1907998,\"WidgetMargin\":1,\"GridAltRowColor\":-1907998,\"Palette\":[-10842935,-6501275,-30107,-6982195,-18611,-1023342,-10177034,-6190977],\"CopyFontFile\":\"OpenSans\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Rocky Mountain\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"OpenSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-11711155,\"CFGreenColor\":-8271996,\"SingleRowBackgroundColor\":-789517,\"SingleRowSideBarColor\":-4144960,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-1348759}");
		this.__jsonLookup.item("Sky", "{\"HeaderFontSize\":18,\"CFYellowColor\":-3814120,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-2167568,\"Palette\":[-7434862,-12694942,-10902596,-10174010,-4466215,-6767376,-13927498,-5125926],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Sky\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-16777216,\"CFGreenColor\":-10174010,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2666974}");
		this.__jsonLookup.item("Steel", "{\"HeaderFontSize\":18,\"CFYellowColor\":-3819007,\"DashboardPadding\":3,\"OutlineColor\":-6776169,\"WidgetMargin\":1,\"GridAltRowColor\":-2825245,\"Palette\":[-13816531,-11612732,-16741490,-6118758,-7622486,-7609387,-16735040,-9013644],\"CopyFontFile\":\"Futurist\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Steel\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-16777216,\"CFGreenColor\":-8659705,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-6881271}");
		this.__jsonLookup.item("Tans", "{\"HeaderFontSize\":18,\"CFYellowColor\":-2781428,\"DashboardPadding\":3,\"OutlineColor\":-8295846,\"WidgetMargin\":1,\"GridAltRowColor\":-792099,\"Palette\":[-2449288,-5675173,-3688295,-8295846,-869988,-5206936,-3766678,-3106976],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Tans\",\"DashboardBackgroundColor\":-725015,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-8295846,\"CFGreenColor\":-10714858,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-6673115}");
		this.__jsonLookup.item("The Blues", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1529335,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-1446412,\"Palette\":[-16226377,-9789236,-7288070,-9403236,-16695178,-6833708,-12938040,-9260843],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"The Blues\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-10066330,\"CFGreenColor\":-10118654,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-47863}");
		this.__jsonLookup.item("The Board", "{\"HeaderFontSize\":18,\"CFYellowColor\":-1844895,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-9806242,\"Palette\":[-6073770,-8885398,-16741490,-7046557,-2436664,-5941691,-9265503,-9013644],\"CopyFontFile\":\"NewCicle-Fina\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"The Board\",\"DashboardBackgroundColor\":-13357780,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-13357780,\"WidgetPadding\":8,\"ForegroundColor\":-3688295,\"CFGreenColor\":-8946351,\"SingleRowBackgroundColor\":-9805986,\"SingleRowSideBarColor\":-11581625,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2003350}");
		this.__jsonLookup.item("Traffic Light", "{\"HeaderFontSize\":18,\"CFYellowColor\":-30463,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-792099,\"Palette\":[-10118654,-3619327,-30463,-131072,-12293888,-6684672,-8650752,-3317759],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Traffic Light\",\"DashboardBackgroundColor\":-1,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-8295846,\"CFGreenColor\":-10118654,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-2881527}");
		this.__jsonLookup.item("Tropical Island", "{\"HeaderFontSize\":18,\"CFYellowColor\":-150209,\"DashboardPadding\":3,\"OutlineColor\":-3355444,\"WidgetMargin\":1,\"GridAltRowColor\":-1508871,\"Palette\":[-14189185,-12597044,-11601409,-16725603,-11671354,-16232,-28340,-38815],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Tropical Island\",\"DashboardBackgroundColor\":-1250068,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-1,\"WidgetPadding\":8,\"ForegroundColor\":-6710887,\"CFGreenColor\":-5775271,\"SingleRowBackgroundColor\":-1381654,\"SingleRowSideBarColor\":-6710887,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":2,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-38815}");
		this.__jsonLookup.item("Vintage Clay", "{\"HeaderFontSize\":18,\"CFYellowColor\":-150209,\"DashboardPadding\":3,\"OutlineColor\":-10066330,\"WidgetMargin\":1,\"GridAltRowColor\":-10066330,\"Palette\":[-954296,-12484475,-2929885,-331588,-3748949,-8735068,-5918683,-2762355],\"CopyFontFile\":\"Crescent-Regular\",\"ValueFontSizeL\":142,\"GaugeFontSize\":30,\"Name\":\"Vintage Clay\",\"DashboardBackgroundColor\":-14340303,\"CopyBoldFontFile\":\"PTSans-Bold\",\"WidgetBackgroundColor\":-14340303,\"WidgetPadding\":8,\"ForegroundColor\":-331588,\"CFGreenColor\":-14828863,\"SingleRowBackgroundColor\":-11379875,\"SingleRowSideBarColor\":-14933210,\"ValueFontSizeS\":24,\"ValueFontFile\":\"OpenSans\",\"AndroidDashboardPadding\":15,\"WidgetShadowSize\":0,\"CopyFontSize\":12,\"ValueFontSizeM\":50,\"CFRedColor\":-38815}");
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.DashboardThemeManager::GetThemeNames()" />*/
	getThemeNames: function () {
		return $.ig.DashboardThemeManager.prototype.manager().__themeNames;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.DashboardThemeManager::GetThemeNames()" />*/
	,
	/*<BeginMethod Name="Infragistics.DashboardTheme Infragistics.DashboardThemeManager::GetThemeForName(System.String)" />*/
	getThemeForName: function (name) {
		var manager = $.ig.DashboardThemeManager.prototype.manager();
		if (!$.ig.NativeDictionaryUtility.prototype.containsKey(manager.__themes, name)) {
			if (!$.ig.NativeDictionaryUtility.prototype.containsKey(manager.__jsonLookup, name)) {
				name = "Hot Air Balloon";
			}
			manager.__themes.item(name, new $.ig.DashboardTheme($.ig.CPJSONObject.prototype.createFromString(manager.__jsonLookup.item(name))));
		}
		return manager.__themes.item(name);
	}
	/*<EndMethod Name="Infragistics.DashboardTheme Infragistics.DashboardThemeManager::GetThemeForName(System.String)" />*/
	,
	$type: new $.ig.Type('DashboardThemeManager', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DashboardThemeManager" />*/

/*<BeginType Name="Infragistics.DashboardViewController" />*/

$.ig.util.defType('DashboardViewController', 'RPViewControllerBase', {
	__flowLayout: null,
	__dashboard: null,
	__widgets: null,
	__dashboardId: null,
	__changeThemeButton: null,
	__doneButton: null,
	__editButton: null,
	__minimizeButton: null,
	__refreshButton: null,
	__titleLabel: null,
	__topSeparator: null,
	__barButtons: null,
	__allButtons: null,
	__newMode: false,
	init: function (dashbaordId, dashboard) {
		$.ig.RPViewControllerBase.prototype.init.call(this);
		this.__newMode = true;
		this.__dashboardId = dashbaordId;
		this.__dashboard = dashboard;
		this.__widgets = new $.ig.Array();
		var count = this.__dashboard.widgets().length;
		for (var i = 0; i < count; i++) {
			var widget = this.__dashboard.widgets()[i];
			this.__widgets.add(new $.ig.WidgetWrapper(widget, dashboard.themeName()));
		}
	},
	/*<BeginProperty Name="System.Boolean Infragistics.DashboardViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return !this.__newMode;
	}
	/*<EndProperty Name="System.Boolean Infragistics.DashboardViewController::HasNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.RPViewControllerBase.prototype.viewDidLoad.call(this);
		this.__flowLayout = new $.ig.FlowLayoutView();
		this.__flowLayout.setDataSource(this);
		this.__flowLayout.setEditDelegate(this);
		this.__flowLayout.setItemDelegate(this);
		this.addSubview(this.__flowLayout);
		this.title(this.__dashboard.title());
		this.loadDataFromAllWidgets(false);
		this.__changeThemeButton = this.createBarButton("Theme", null, function (x, y) {
			$self.showThemePicker();
		});
		this.__editButton = this.createBarButton("Edit", null, function (x, y) {
			$self.enterEditMode();
		});
		this.__refreshButton = this.createBarButton("Refresh", null, function (x, y) {
			$self.refresh();
		});
		this.__doneButton = this.createBarButton("Done", null, function (x, y) {
			$self.exitEditMode();
		});
		this.__minimizeButton = this.createBarButton("Minimize", null, function (x, y) {
			$self.minimize();
		});
		if (this.__newMode) {
			this.__titleLabel = new $.ig.PathIconLabelButton(1);
			this.__titleLabel.addClickHandler(function (x, y) {
				$self.closeDashboardViewer();
			});
			this.__titleLabel.setText(this.__dashboard.title());
			this.__titleLabel.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
			this.addSubview(this.__titleLabel);
			this.__topSeparator = new $.ig.CPViewBase();
			this.addSubview(this.__topSeparator);
		}
		this.applyCurrentTheme();
		this.updateNavBars();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::CloseDashboardViewer()" />*/
	closeDashboardViewer: function () {
		this.navigationController().popViewController(true);
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::CloseDashboardViewer()" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIconLabelButton Infragistics.DashboardViewController::CreateBarButton(System.String, Infragistics.PathIcon, Infragistics.PointExecutionBlock)" />*/
	createBarButton: function (text, icon, action) {
		if (this.__newMode) {
			var button = new $.ig.PathIconLabelButton(1);
			button.setIcon(icon);
			button.setText(text);
			button.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
			button.addClickHandler(action);
			if (this.__allButtons == null) {
				this.__allButtons = new $.ig.Array();
			}
			this.__allButtons.add(button);
			return button;
		} else {
			return $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(text, icon, action);
		}
	}
	/*<EndMethod Name="Infragistics.PathIconLabelButton Infragistics.DashboardViewController::CreateBarButton(System.String, Infragistics.PathIcon, Infragistics.PointExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ClearBarButtons()" />*/
	clearBarButtons: function () {
		if (this.__newMode) {
			if (this.__barButtons != null) {
				var count = this.__barButtons.length;
				for (var i = 0; i < count; i++) {
					var button = this.__barButtons[i];
					this.view().removeSubview(button);
				}
				this.__barButtons.clear();
			}
		} else {
			this.clearRightBarItems();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ClearBarButtons()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::AddBarButton(Infragistics.PathIconLabelButton)" />*/
	addBarButton: function (button) {
		if (this.__newMode) {
			if (this.__barButtons == null) {
				this.__barButtons = new $.ig.Array();
			}
			this.__barButtons.add(button);
			this.addSubview(button);
		} else {
			this.addRightBarButtonItem(button);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::AddBarButton(Infragistics.PathIconLabelButton)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::EnterEditMode()" />*/
	enterEditMode: function () {
		this.__flowLayout.isEditable(true);
		this.updateNavBars();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::EnterEditMode()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ExitEditMode()" />*/
	exitEditMode: function () {
		this.__flowLayout.isEditable(false);
		this.updateNavBars();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ExitEditMode()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::Refresh()" />*/
	refresh: function () {
		this.loadDataFromAllWidgets(true);
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::Refresh()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::UpdateNavBars()" />*/
	updateNavBars: function () {
		this.clearBarButtons();
		if (this.__flowLayout.isMaximized()) {
			this.addBarButton(this.__minimizeButton);
		} else {
			if (this.__flowLayout.isEditable()) {
				this.addBarButton(this.__doneButton);
				this.addBarButton(this.__changeThemeButton);
			} else {
				this.addBarButton(this.__editButton);
				this.addBarButton(this.__refreshButton);
			}
		}
		if (this.__newMode) {
			if (this.view().currentHeight() > 0) {
				this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::UpdateNavBars()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ShowThemePicker()" />*/
	showThemePicker: function () {
		var $self = this;
		var themeNames = $.ig.DashboardThemeManager.prototype.getThemeNames();
		var items = new $.ig.Array();
		var count = themeNames.length;
		for (var i = 0; i < count; i++) {
			var themeName = themeNames[i];
			items.add(new $.ig.DynamicDashboardThumbnailPopupListItem(this.__dashboard, themeName, themeName, function (o) {
				$self.applyNewTheme(o);
				return true;
			}));
		}
		$.ig.CPPopupManager.prototype.showGrid1(this.__changeThemeButton, items, 2, null);
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ShowThemePicker()" />*/
	,
	__loadWidgetsDataRequest: null,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::GetDataFromAllWidgetsFromServer()" />*/
	getDataFromAllWidgetsFromServer: function () {
		var $self = this;
		if (this.__loadWidgetsDataRequest != null) {
			this.__loadWidgetsDataRequest.cancel();
		}
		this.__loadWidgetsDataRequest = new $.ig.RPLoadDataForAllWidgetsRequest(this.__dashboardId, function (r, o) {
			$self.processDataFromServer(o);
		}, function (r, e) {
		});
		this.__loadWidgetsDataRequest.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::GetDataFromAllWidgetsFromServer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ProcessDataFromServer(Infragistics.CPList)" />*/
	processDataFromServer: function (dataResult) {
		var count = dataResult.length;
		for (var i = 0; i < count; i++) {
			var data = dataResult[i];
			this.widgetDataReceived(i, data);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ProcessDataFromServer(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::WidgetDataReceived(System.Int32, Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	widgetDataReceived: function (index, data) {
		var w = this.__widgets[index];
		w._data = data;
		var cell = this.__flowLayout.getVisibleCell(index);
		if (cell != null) {
			cell.dataReceived();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::WidgetDataReceived(System.Int32, Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	/*<BeginProperty Name="Infragistics.DashboardTheme Infragistics.DashboardViewController::Theme()" />*/
	theme: function () {
		return $.ig.DashboardThemeManager.prototype.getThemeForName(this.__dashboard.themeName());
	}
	/*<EndProperty Name="Infragistics.DashboardTheme Infragistics.DashboardViewController::Theme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ApplyCurrentTheme()" />*/
	applyCurrentTheme: function () {
		var currentTheme = this.theme();
		this.view().setBackgroundColor(currentTheme.resolveNativeColor(currentTheme.dashboardBackgroundColor()));
		if (this.__newMode) {
			this.__titleLabel.setFont(35, currentTheme.resolveNativeFont(currentTheme.fontFileCopy()));
			this.__titleLabel.setColor(currentTheme.resolveNativeColor(currentTheme.foregroundColor()));
			this.__topSeparator.setBackgroundColor(currentTheme.resolveNativeColor(currentTheme.foregroundColor()));
			if (this.__allButtons != null) {
				var count = this.__allButtons.length;
				for (var i = 0; i < count; i++) {
					this.applyThemeToButton(this.__allButtons[i], currentTheme);
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ApplyCurrentTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ApplyThemeToButton(Infragistics.PathIconLabelButton, Infragistics.DashboardTheme)" />*/
	applyThemeToButton: function (button, theme) {
		button.setColor(theme.resolveNativeColor(theme.foregroundColor()));
		button.setFont(16, theme.resolveNativeFont(theme.fontFileCopy()));
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ApplyThemeToButton(Infragistics.PathIconLabelButton, Infragistics.DashboardTheme)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ApplyNewTheme(System.String)" />*/
	applyNewTheme: function (themeName) {
		this.__dashboard.themeName(themeName);
		this.applyCurrentTheme();
		var count = this.__widgets.length;
		for (var i = 0; i < count; i++) {
			var w = this.__widgets[i];
			w._themeName = themeName;
			var cell = this.__flowLayout.getVisibleCell(i);
			if (cell != null) {
				cell.themeUpdated();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ApplyNewTheme(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.RPViewControllerBase.prototype.layoutSubviews.call(this, w, h);
		var dbPadding = this.theme().resolveNativeSize(this.theme().dashboardPadding());
		var top = dbPadding;
		if (this.__newMode) {
			this.__titleLabel.calculateSizeToFit();
			var tlh = this.__titleLabel.getCalculatedHeight();
			var tlw = this.__titleLabel.getCalculatedWidth();
			var tlp = $.ig.NativeUIUtility.prototype.utility().densify(10);
			this.measureView(this.__titleLabel, tlp, tlp, tlw, tlh);
			this.layoutBarButtons(tlp, w, tlh);
			top = tlh + tlp * 2;
			var sepHeight = $.ig.NativeUIUtility.prototype.utility().densify(1);
			this.measureView(this.__topSeparator, 0, top, $.ig.intDivide(w, 2), sepHeight);
			top += sepHeight;
		}
		this.measureView(this.__flowLayout, dbPadding, top, w - dbPadding * 2, h - top - dbPadding);
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::LayoutBarButtons(System.Int32, System.Int32, System.Int32)" />*/
	layoutBarButtons: function (top, w, h) {
		if (this.__barButtons != null) {
			var buttonPadding = $.ig.NativeUIUtility.prototype.utility().densify(5);
			var left = w - buttonPadding;
			var count = this.__barButtons.length;
			for (var i = 0; i < count; i++) {
				var button = this.__barButtons[i];
				button.calculateSizeToFit();
				var bh = button.getCalculatedHeight();
				var bw = button.getCalculatedWidth();
				left -= bw;
				this.measureView(button, left, top + ($.ig.intDivide(h, 2) - $.ig.intDivide(bh, 2)), bw, bh);
				left -= buttonPadding;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::LayoutBarButtons(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.FlowLayoutItemView Infragistics.DashboardViewController::GetCell(Infragistics.FlowLayoutView, System.Int32)" />*/
	getCell: function (flowLayout, index) {
		var w = this.__widgets[index];
		var identifier = $.ig.VisualizationHelper.prototype.uniqueIdentifier(w._widgetType);
		var cell = flowLayout.dequeueReusableCell(identifier);
		if (cell == null) {
			cell = new $.ig.WidgetView(w._widgetType, identifier);
		}
		cell.setWidget(w);
		return cell;
	}
	/*<EndMethod Name="Infragistics.FlowLayoutItemView Infragistics.DashboardViewController::GetCell(Infragistics.FlowLayoutView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfHorizontalBlocksInFlowLayoutViewport()" />*/
	numberOfHorizontalBlocksInFlowLayoutViewport: function () {
		return 60;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfHorizontalBlocksInFlowLayoutViewport()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfVerticalBlocksInFlowLayoutViewport()" />*/
	numberOfVerticalBlocksInFlowLayoutViewport: function () {
		return 60;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfVerticalBlocksInFlowLayoutViewport()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfItemsInFlowLayout()" />*/
	numberOfItemsInFlowLayout: function () {
		return this.__dashboard.widgets().length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::NumberOfItemsInFlowLayout()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::HorizontalBlocksForItemInFlowLayout(System.Int32)" />*/
	horizontalBlocksForItemInFlowLayout: function (index) {
		return (this.__dashboard.widgets()[index]).columnSpan();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::HorizontalBlocksForItemInFlowLayout(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::VerticalBlocksForItemInFlowLayout(System.Int32)" />*/
	verticalBlocksForItemInFlowLayout: function (index) {
		return (this.__dashboard.widgets()[index]).rowSpan();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::VerticalBlocksForItemInFlowLayout(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::NewWidthForFlowLayoutItem(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	newWidthForFlowLayoutItem: function (flowLayout, width, index) {
		width = Math.max(width, 10);
		(this.__dashboard.widgets()[index]).columnSpan(width);
		return width;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::NewWidthForFlowLayoutItem(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::NewHeightForFlowLayoutItem(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	newHeightForFlowLayoutItem: function (flowLayout, height, index) {
		height = Math.max(height, 10);
		(this.__dashboard.widgets()[index]).rowSpan(height);
		return height;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::NewHeightForFlowLayoutItem(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DashboardViewController::MoveFlowLayoutItemTo(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	moveFlowLayoutItemTo: function (flowLayout, from, to) {
		var widget = this.__dashboard.widgets()[from];
		this.__dashboard.widgets().removeAt(from);
		this.__dashboard.widgets().insert(to, widget);
		var wrapper = this.__widgets[from];
		this.__widgets.removeAt(from);
		this.__widgets.insert(to, wrapper);
		return to;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DashboardViewController::MoveFlowLayoutItemTo(Infragistics.FlowLayoutView, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DashboardViewController::IsFlowLayoutItemResizable(Infragistics.FlowLayoutView, System.Int32)" />*/
	isFlowLayoutItemResizable: function (flowLayout, index) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.DashboardViewController::IsFlowLayoutItemResizable(Infragistics.FlowLayoutView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DashboardViewController::IsFlowLayoutItemMovable(Infragistics.FlowLayoutView, System.Int32)" />*/
	isFlowLayoutItemMovable: function (flowLayout, index) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.DashboardViewController::IsFlowLayoutItemMovable(Infragistics.FlowLayoutView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::ItemClickedAtPoint(Infragistics.FlowLayoutView, System.Int32, System.Int32, System.Int32)" />*/
	itemClickedAtPoint: function (flowLayout, index, x, y) {
		this.__flowLayout.maximizeItem(index, true);
		this.updateNavBars();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::ItemClickedAtPoint(Infragistics.FlowLayoutView, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::Minimize()" />*/
	minimize: function () {
		this.__flowLayout.minimize(true);
		this.updateNavBars();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::Minimize()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DashboardViewController::LoadDataFromAllWidgets(System.Boolean)" />*/
	loadDataFromAllWidgets: function (refresh) {
		this.getDataFromAllWidgetsFromServer();
	}
	/*<EndMethod Name="System.Void Infragistics.DashboardViewController::LoadDataFromAllWidgets(System.Boolean)" />*/
	,
	$type: new $.ig.Type('DashboardViewController', $.ig.RPViewControllerBase.prototype.$type, [$.ig.FlowLayoutViewDataSource.prototype.$type, $.ig.FlowLayoutViewEditDelegate.prototype.$type, $.ig.FlowLayoutItemViewDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.DashboardViewController" />*/

/*<BeginType Name="Infragistics.DynamicDashboardThumbnail" />*/

$.ig.util.defType('DynamicDashboardThumbnail', 'DrawingViewBase', {
	__model: null,
	__def: null,
	__theme: null,
	__data: null,
	__itemSize: 0,
	__itemSpacing: 0,
	init: function () {
		$.ig.DrawingViewBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::SetModel(Infragistics.ReportPlus.DashboardModel.DashboardLayoutDescription)" />*/
	setModel: function (model) {
		this.__model = model;
		this.__def = $.ig.FlowLayoutManager.prototype.buildFlowLayoutDefinition(this, false, $.ig.FlowLayoutDirection.prototype.portrait);
		this.__theme = $.ig.DashboardThemeManager.prototype.getThemeForName(model.themeName());
		this.__data = new $.ig.Array();
		for (var i = 0; i < this.__def._numberOfItems; i++) {
			this.__data.add(this.generateData(50));
		}
		if (this.currentHeight() > 0 && this.currentWidth() > 0) {
			this.render1(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::SetModel(Infragistics.ReportPlus.DashboardModel.DashboardLayoutDescription)" />*/
	,
	/*<BeginMethod Name=" Infragistics.DynamicDashboardThumbnail::GenerateData(System.Int32)" />*/
	generateData: function (count) {
		var generator = new $.ig.RandomNumberGenerator(0);
		var data = new Array(count);
		for (var i = 0; i < count; i++) {
			data[i] = generator.next(25, 100);
		}
		return data;
	}
	/*<EndMethod Name=" Infragistics.DynamicDashboardThumbnail::GenerateData(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.DrawingViewBase.prototype.sizeChanged.call(this, w, h);
		if (this.__def != null) {
			this.render1(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfHorizontalBlocksInFlowLayoutViewport()" />*/
	numberOfHorizontalBlocksInFlowLayoutViewport: function () {
		return 60;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfHorizontalBlocksInFlowLayoutViewport()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfVerticalBlocksInFlowLayoutViewport()" />*/
	numberOfVerticalBlocksInFlowLayoutViewport: function () {
		return 60;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfVerticalBlocksInFlowLayoutViewport()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfItemsInFlowLayout()" />*/
	numberOfItemsInFlowLayout: function () {
		return this.__model.items().length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::NumberOfItemsInFlowLayout()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::HorizontalBlocksForItemInFlowLayout(System.Int32)" />*/
	horizontalBlocksForItemInFlowLayout: function (index) {
		return (this.__model.items()[index]).columnSpan();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::HorizontalBlocksForItemInFlowLayout(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::VerticalBlocksForItemInFlowLayout(System.Int32)" />*/
	verticalBlocksForItemInFlowLayout: function (index) {
		return (this.__model.items()[index]).rowSpan();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::VerticalBlocksForItemInFlowLayout(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.DynamicDashboardThumbnail::ResolveDrawingInfo()" />*/
	resolveDrawingInfo: function () {
		return $.ig.DrawingViewBase.prototype.resolveDrawingInfo.call(this);
	}
	/*<EndMethod Name="System.Object Infragistics.DynamicDashboardThumbnail::ResolveDrawingInfo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::Draw(System.CanvasContext, System.Int32, System.Int32, System.Object)" />*/
	draw: function (canvas, w, h, info) {
		$.ig.DrawingViewBase.prototype.draw.call(this, canvas, w, h, info);
		if (this.__def != null) {
			var baseSize = Math.min(w, h);
			var padding = (baseSize * 0.02);
			this.__itemSpacing = 2;
			this.__itemSize = (baseSize * 0.03);
			var fontSize = $.ig.truncate((baseSize * 0.03));
			var dw = w;
			var dh = h;
			this.drawRect(canvas, 0, 0, dw, dh, this.__theme.dashboardBackgroundColor(), 0, 0);
			var blockWidth = (dw / this.__def._numberOfHorizontalBlocks);
			var blockHeight = dh / this.__def._numberOfVerticalBlocks;
			var widgetPadding = Math.min(this.__theme.widgetPadding() * (baseSize / 1000), this.__theme.widgetPadding());
			var count = this.__def._items.length;
			for (var i = 0; i < count; i++) {
				var itemInfo = this.__def._items[i];
				var item = this.__model.items()[i];
				var iw = (blockWidth * itemInfo._width) - widgetPadding * 2;
				var ih = (blockHeight * itemInfo._height) - widgetPadding * 2;
				var ix = (blockWidth * itemInfo._column) + widgetPadding;
				var iy = (blockHeight * itemInfo._row) + widgetPadding;
				this.drawRect(canvas, ix, iy, iw, ih, this.__theme.widgetBackgroundColor(), 0, 0);
				this.drawTitle(canvas, ix + padding, iy + padding, iw, padding, item.title(), fontSize);
				this.drawItem(canvas, ix, iy + padding * 2, iw, ih - padding * 2, padding, item, this.__data[i]);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::Draw(System.CanvasContext, System.Int32, System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawTitle(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.String, System.Single)" />*/
	drawTitle: function (canvas, x, y, w, h, title, fontSize) {
		this.drawText1(canvas, title, x, y, w, h, this.__theme.foregroundColor(), $.ig.NativeUtility.prototype.utility().getDefaultFont(), fontSize);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawTitle(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.String, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawItem(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	drawItem: function (canvas, x, y, w, h, padding, item, data) {
		if (item.type().equals("CHART")) {
			switch (item.chartType()) {
				case $.ig.DashboardChartType.prototype.area:
					{
						this.drawAxis(canvas, x, y, w, h, padding);
						this.drawAreaSeries(canvas, x + padding, y + padding, w - padding * 2, h - padding * 2, padding, item, data);
					}
					break;
				case $.ig.DashboardChartType.prototype.bar:
					{
						this.drawAxis(canvas, x, y, w, h, padding);
						this.drawBarSeries(canvas, x + padding, y + padding, w - padding * 2, h - padding * 2, padding, item, data);
					}
					break;
				case $.ig.DashboardChartType.prototype.bubble:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.candlestick:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.column:
					{
						this.drawAxis(canvas, x, y, w, h, padding);
						this.drawColumnSeries(canvas, x + padding, y + padding, w - padding * 2, h - padding * 2, padding, item, data);
					}
					break;
				case $.ig.DashboardChartType.prototype.composite:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.doughnut:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.funnel:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.line:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.oHLC:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.pie:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.polarArea:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.polarLines:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.polarScatter:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.radialColumns:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.radialLines:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.radialPie:
					{
						this.drawRadialAxis(canvas, x, y, w, h, padding);
					}
					break;
				case $.ig.DashboardChartType.prototype.scatter:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.spline:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.splineArea:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.stackedArea:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.stackedBar:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.stackedColumn:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.stepArea:
					{
					}
					break;
				case $.ig.DashboardChartType.prototype.stepLine:
					{
					}
					break;
			}
		} else if (item.type().equals("GRID")) {
		} else if (item.type().equals("TREE_MAP")) {
		} else if (item.type().equals("IMAGE")) {
		} else if (item.type().equals("JS_EXTENSION")) {
		} else if (item.type().equals("GAUGE")) {
			switch (item.gaugeType()) {
				case $.ig.DashboardGaugeViewType.prototype.bulletGraph:
					{
					}
					break;
				case $.ig.DashboardGaugeViewType.prototype.circular:
					{
						this.drawRadialGauge(canvas, x, y, w, h, padding, item, data);
					}
					break;
				case $.ig.DashboardGaugeViewType.prototype.linear:
					{
					}
					break;
				case $.ig.DashboardGaugeViewType.prototype.singleValue:
					{
					}
					break;
			}
		} else if (item.type().equals("MAP")) {
		} else if (item.type().equals("HEAT_MAP")) {
		} else if (item.type().equals("SINGLE_ROW")) {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawItem(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawAxis(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawAxis: function (canvas, x, y, w, h, padding) {
		this.drawComplexLine(canvas, x + padding, y + padding, x + padding, y + (h - padding), x + (w - padding), y + (h - padding), this.__theme.outlineColor(), 1);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawAxis(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawRadialAxis(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawRadialAxis: function (canvas, x, y, w, h, padding) {
		var min = Math.min(w, h) - padding * 2;
		var bx = x + w / 2;
		var by = y + h / 2;
		var r = min / 2;
		this.drawCircle(canvas, bx, by, r, 0, this.__theme.outlineColor(), 1);
		this.drawCircle(canvas, bx, by, (r * 0.5), 0, this.__theme.outlineColor(), 1);
		this.drawCircle(canvas, bx, by, (r * 0.1), 0, this.__theme.outlineColor(), 1);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawRadialAxis(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::CalculateNumberOfPoints(System.Int32, System.Double)" />*/
	calculateNumberOfPoints: function (availPoints, availSpace) {
		var itemSize = this.__itemSize;
		var totalSize = itemSize + this.__itemSpacing;
		var numberOfPoints = (availSpace / (totalSize));
		return Math.min($.ig.truncate(Math.ceil(numberOfPoints)), availPoints);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DynamicDashboardThumbnail::CalculateNumberOfPoints(System.Int32, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DynamicDashboardThumbnail::CalculateItemSize(System.Int32, System.Double)" />*/
	calculateItemSize: function (numberOfPoints, availSpace) {
		var totalSize = (availSpace / numberOfPoints);
		return totalSize - this.__itemSpacing;
	}
	/*<EndMethod Name="System.Double Infragistics.DynamicDashboardThumbnail::CalculateItemSize(System.Int32, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.DynamicDashboardThumbnail::ResolveBrushes(System.Int32, System.Int32)" />*/
	resolveBrushes: function (start, seriesCount) {
		seriesCount = Math.max(1, seriesCount);
		var brushes = new Array(seriesCount);
		if (start < 0) {
			start = 0;
		}
		var brushIndex = start;
		var brushCount = this.__theme.chartColors().length;
		for (var i = 0; i < seriesCount; i++) {
			if (brushIndex >= brushCount) {
				brushIndex = 0;
			}
			brushes[i] = this.__theme.chartColors()[brushIndex];
			brushIndex++;
		}
		return brushes;
	}
	/*<EndMethod Name=" Infragistics.DynamicDashboardThumbnail::ResolveBrushes(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawColumnSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	drawColumnSeries: function (canvas, x, y, w, h, padding, item, data) {
		var numberOfPoints = this.calculateNumberOfPoints(data.length, w);
		var itemSize = this.calculateItemSize(numberOfPoints, w);
		var startBrush = Math.max(0, item.brushOffset());
		var left = x + this.__itemSpacing;
		var series = 0;
		var brushes = this.resolveBrushes(startBrush, item.seriesCount());
		for (var i = 0; i < numberOfPoints; i++) {
			var val = data[i];
			var percent = val / 100;
			var top = (y + (h * (1 - percent)));
			this.drawRect(canvas, left, top, itemSize, y + (h - top - this.__itemSpacing), brushes[series], 0, 0);
			left += this.__itemSpacing + itemSize;
			series++;
			if (series >= item.seriesCount()) {
				series = 0;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawColumnSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawAreaSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	drawAreaSeries: function (canvas, x, y, w, h, padding, item, data) {
		var numberOfPoints = this.calculateNumberOfPoints(data.length, w);
		var itemSize = this.calculateItemSize(numberOfPoints, w);
		var left = x + this.__itemSpacing;
		var series = 0;
		this.saveCanvas(canvas);
		for (var i = 0; i < numberOfPoints; i++) {
			var val = data[i];
			var percent = val / 100;
			var top = (y + (h * (1 - percent)));
			if (i == 0) {
				this.moveTo(canvas, left + this.__itemSize / 2, top);
			} else {
				this.lineTo(canvas, left + this.__itemSize / 2, top);
			}
			left += this.__itemSpacing + itemSize;
			series++;
			if (series >= item.seriesCount()) {
				series = 0;
			}
		}
		this.restoreCanvas(canvas);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawAreaSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawBarSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	drawBarSeries: function (canvas, x, y, w, h, padding, item, data) {
		h -= this.__itemSpacing;
		var numberOfPoints = this.calculateNumberOfPoints(data.length, h);
		var itemSize = this.calculateItemSize(numberOfPoints, h);
		var startBrush = Math.max(0, item.brushOffset());
		var top = y + this.__itemSpacing;
		var series = 0;
		var brushes = this.resolveBrushes(startBrush, item.seriesCount());
		for (var i = 0; i < numberOfPoints; i++) {
			var val = data[i];
			var percent = val / 100;
			var itemWidth = (w * percent);
			this.drawRect(canvas, x + this.__itemSpacing, top, itemWidth, itemSize, brushes[series], 0, 0);
			top += this.__itemSpacing + itemSize;
			series++;
			if (series >= item.seriesCount()) {
				series = 0;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawBarSeries(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawRadialGauge(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	drawRadialGauge: function (canvas, x, y, w, h, padding, item, data) {
		var min = Math.min(w, h);
		var bw = min;
		var bh = min / 2;
		var bx = x + (w / 2 - bw / 2);
		var by = y + (h / 2 - bh / 2);
		this.drawSlice(canvas, bx, by, bw, bh, 180, 360, 0.8, 0.95, this.__theme.outlineColor(), 0, 0);
		this.drawSlice(canvas, bx, by, bw, bh, 180, 180 + (180 * data[0] / 100), 0.8, 0.95, this.__theme.cFGreenColor(), 0, 0);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnail::DrawRadialGauge(System.CanvasContext, System.Double, System.Double, System.Double, System.Double, System.Double, Infragistics.ReportPlus.DashboardModel.DashboardItemLayoutDescription, )" />*/
	,
	$type: new $.ig.Type('DynamicDashboardThumbnail', $.ig.DrawingViewBase.prototype.$type, [$.ig.FlowLayoutDataSource.prototype.$type])
}, true);

/*<EndType Name="Infragistics.DynamicDashboardThumbnail" />*/

/*<BeginType Name="Infragistics.DynamicDashboardThumbnailPopupListItem" />*/

$.ig.util.defType('DynamicDashboardThumbnailPopupListItem', 'CPPopupListItemBase', {
	_model: null,
	init: function (dashboard, theme, itemTag, actionItem) {
		$.ig.CPPopupListItemBase.prototype.init.call(this, 0, itemTag, actionItem);
		this._model = new $.ig.DashboardLayoutDescription();
		this._model.themeName(theme);
		var count = dashboard.widgets().length;
		for (var i = 0; i < count; i++) {
			var w = dashboard.widgets()[i];
			var item = new $.ig.DashboardItemLayoutDescription();
			item.type(w.visualizationSettings().visualizationType());
			item.rowSpan(w.rowSpan());
			item.columnSpan(w.columnSpan());
			item.isTitleVisible(w.isTitleVisible());
			item.title(w.title());
			if (item.type().equals("CHART")) {
				var settings = w.visualizationSettings();
				item.chartType(settings.chartType());
				if (!$.ig.NativeDataLayerUtility.prototype.isNullInt(settings.brushOffsetIndex())) {
					item.brushOffset($.ig.NativeDataLayerUtility.prototype.unwrapInt(settings.brushOffsetIndex()));
				}
			} else if (item.type().equals("GAUGE")) {
				var settings1 = w.visualizationSettings();
				item.gaugeType(settings1.viewType());
			}
			this._model.items().add(item);
		}
	},
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupListItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	calculateSizeToFit: function (measureLabel) {
		this._calculatedHeight = $.ig.NativeUIUtility.prototype.utility().densify(150);
		this._calculatedWidth = $.ig.NativeUIUtility.prototype.utility().densify(225);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupListItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.DynamicDashboardThumbnailPopupListItem::CreateNewCell(System.String)" />*/
	createNewCell: function (identifier) {
		return new $.ig.DynamicDashboardThumbnailPopupCell(identifier);
	}
	/*<EndMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.DynamicDashboardThumbnailPopupListItem::CreateNewCell(System.String)" />*/
	,
	$type: new $.ig.Type('DynamicDashboardThumbnailPopupListItem', $.ig.CPPopupListItemBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DynamicDashboardThumbnailPopupListItem" />*/

/*<BeginType Name="Infragistics.DynamicDashboardThumbnailPopupCell" />*/

$.ig.util.defType('DynamicDashboardThumbnailPopupCell', 'CPPopupListViewCellBase', {
	__thumnail: null,
	init: function (identifier) {
		$.ig.CPPopupListViewCellBase.prototype.init.call(this, identifier);
		this.__thumnail = new $.ig.DynamicDashboardThumbnail();
		this.addSubview(this.__thumnail);
	},
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	processItem: function (item) {
		$.ig.CPPopupListViewCellBase.prototype.processItem.call(this, item);
		var thumbnailItem = item;
		this.__thumnail.setModel(thumbnailItem._model);
		this.textLabel().setText(thumbnailItem._model.themeName());
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPPopupListViewCellBase.prototype.sizeChanged.call(this, w, h);
		var padding = $.ig.truncate(((Math.min(w, h)) * 0.05));
		var top = padding;
		this.textLabel().calculateSizeToFit();
		var lh = this.textLabel().getCalculatedHeight();
		this.measureView1(this.textLabel(), padding, top, w - padding * 2, lh, 1);
		top += lh + padding;
		this.measureView1(this.__thumnail, padding, top, w - padding * 2, h - top - padding, 1);
	}
	/*<EndMethod Name="System.Void Infragistics.DynamicDashboardThumbnailPopupCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('DynamicDashboardThumbnailPopupCell', $.ig.CPPopupListViewCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DynamicDashboardThumbnailPopupCell" />*/

/*<BeginType Name="Infragistics.RPRequestBase" />*/

$.ig.util.defType('RPRequestBase', 'SessionRequestBase', {
	init: function (key, success, error) {
		$.ig.SessionRequestBase.prototype.init1.call(this, 1, key, success, error);
	},
	/*<BeginMethod Name="System.String Infragistics.RPRequestBase::ResolveBaseURL()" />*/
	resolveBaseURL: function () {
		return window.location.protocol + '//' + window.location.host + '/';
	}
	/*<EndMethod Name="System.String Infragistics.RPRequestBase::ResolveBaseURL()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RPRequestBase::IsEnterprise()" />*/
	isEnterprise: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RPRequestBase::IsEnterprise()" />*/
	,
	$type: new $.ig.Type('RPRequestBase', $.ig.SessionRequestBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPRequestBase" />*/

/*<BeginType Name="Infragistics.RPGetFilesRequest" />*/

$.ig.util.defType('RPGetFilesRequest', 'RPRequestBase', {
	__folder: null,
	init: function (folder, success, error) {
		$.ig.RPRequestBase.prototype.init.call(this, "RPGetFiles", success, error);
		this.__folder = folder;
	},
	/*<BeginMethod Name="System.String Infragistics.RPGetFilesRequest::ResolveAction()" />*/
	resolveAction: function () {
		return this.isEnterprise() ? "api/navigate/GetFolderContent" : "api/repository/GetFolderContent";
	}
	/*<EndMethod Name="System.String Infragistics.RPGetFilesRequest::ResolveAction()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.RPGetFilesRequest::ResolveParams()" />*/
	resolveParams: function () {
		var p = new $.ig.Dictionary(0);
		p.item("id", this.__folder == null ? "0" : this.__folder);
		return p;
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.RPGetFilesRequest::ResolveParams()" />*/
	,
	/*<BeginMethod Name="Infragistics.SessionHTTPMethod Infragistics.RPGetFilesRequest::ResolveHTTPMethod()" />*/
	resolveHTTPMethod: function () {
		return $.ig.SessionHTTPMethod.prototype.gET;
	}
	/*<EndMethod Name="Infragistics.SessionHTTPMethod Infragistics.RPGetFilesRequest::ResolveHTTPMethod()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.RPGetFilesRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	processJSONResponse: function (response) {
		var files = new $.ig.Array();
		var entries = response.resolveListForKey("Dashboards");
		var count = entries.length;
		for (var i = 0; i < count; i++) {
			files.add(new $.ig.RPCloudFile($.ig.CPJSONObject.prototype.createFromJSONObject(entries[i]), this.isEnterprise()));
		}
		entries = response.resolveListForKey("Folders");
		count = entries.length;
		for (var i1 = 0; i1 < count; i1++) {
			files.add(new $.ig.RPCloudFile($.ig.CPJSONObject.prototype.createFromJSONObject(entries[i1]), this.isEnterprise()));
		}
		return files;
	}
	/*<EndMethod Name="System.Object Infragistics.RPGetFilesRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RPGetFilesRequest::Error(Infragistics.CloudError)" />*/
	error: function (error) {
		$.ig.RPRequestBase.prototype.error.call(this, error);
	}
	/*<EndMethod Name="System.Void Infragistics.RPGetFilesRequest::Error(Infragistics.CloudError)" />*/
	,
	$type: new $.ig.Type('RPGetFilesRequest', $.ig.RPRequestBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPGetFilesRequest" />*/

/*<BeginType Name="Infragistics.RPGetDashboardModelRequest" />*/

$.ig.util.defType('RPGetDashboardModelRequest', 'RPRequestBase', {
	__dashboardId: null,
	init: function (id, success, error) {
		$.ig.RPRequestBase.prototype.init.call(this, "GetDashboardModel", success, error);
		this.__dashboardId = id;
	},
	/*<BeginMethod Name="System.String Infragistics.RPGetDashboardModelRequest::ResolveAction()" />*/
	resolveAction: function () {
		return "api/dashboard/" + this.__dashboardId;
	}
	/*<EndMethod Name="System.String Infragistics.RPGetDashboardModelRequest::ResolveAction()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.RPGetDashboardModelRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	processJSONResponse: function (response) {
		return new $.ig.Dashboard(2, response.jSONObject());
	}
	/*<EndMethod Name="System.Object Infragistics.RPGetDashboardModelRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RPGetDashboardModelRequest::Error(Infragistics.CloudError)" />*/
	error: function (error) {
		$.ig.RPRequestBase.prototype.error.call(this, error);
	}
	/*<EndMethod Name="System.Void Infragistics.RPGetDashboardModelRequest::Error(Infragistics.CloudError)" />*/
	,
	$type: new $.ig.Type('RPGetDashboardModelRequest', $.ig.RPRequestBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPGetDashboardModelRequest" />*/

/*<BeginType Name="Infragistics.RPLoadDataForAllWidgetsRequest" />*/

$.ig.util.defType('RPLoadDataForAllWidgetsRequest', 'RPRequestBase', {
	__dashboardId: null,
	init: function (id, success, error) {
		$.ig.RPRequestBase.prototype.init.call(this, "GetAllDashboardData", success, error);
		this.__dashboardId = id;
	},
	/*<BeginMethod Name="System.String Infragistics.RPLoadDataForAllWidgetsRequest::ResolveAction()" />*/
	resolveAction: function () {
		return "api/dashboard/data/" + this.__dashboardId;
	}
	/*<EndMethod Name="System.String Infragistics.RPLoadDataForAllWidgetsRequest::ResolveAction()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.RPLoadDataForAllWidgetsRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	processJSONResponse: function (response) {
		var data = new $.ig.Array();
		var entries = response.resolveListForKey("Values");
		var count = entries.length;
		for (var i = 0; i < count; i++) {
			data.add(new $.ig.DataTableResult(1, $.ig.CPJSONObject.prototype.createFromJSONObject(entries[i]).jSONObject()));
		}
		return data;
	}
	/*<EndMethod Name="System.Object Infragistics.RPLoadDataForAllWidgetsRequest::ProcessJSONResponse(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RPLoadDataForAllWidgetsRequest::Error(Infragistics.CloudError)" />*/
	error: function (error) {
		$.ig.RPRequestBase.prototype.error.call(this, error);
	}
	/*<EndMethod Name="System.Void Infragistics.RPLoadDataForAllWidgetsRequest::Error(Infragistics.CloudError)" />*/
	,
	$type: new $.ig.Type('RPLoadDataForAllWidgetsRequest', $.ig.RPRequestBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPLoadDataForAllWidgetsRequest" />*/

/*<BeginType Name="Infragistics.RPCloudFile" />*/

$.ig.util.defType('RPCloudFile', 'CloudFile', {
	__isEnterprise: false,
	init: function (json, isEnterprise) {
		$.ig.CloudFile.prototype.init1.call(this, 1, json);
		this.__isEnterprise = isEnterprise;
	},
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::Author()" />*/
	author: function () {
		return "";
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::Author()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RPCloudFile::IsFolder()" />*/
	isFolder: function () {
		if (this.__isEnterprise) {
			return this.resolveStringForKey("Type").equals("Folder");
		}
		return this.resolveIntegerForKey("Type") == 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RPCloudFile::IsFolder()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RPCloudFile::IsInTrash()" />*/
	isInTrash: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RPCloudFile::IsInTrash()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::MimeType()" />*/
	mimeType: function () {
		return "rplus";
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::MimeType()" />*/
	,
	/*<BeginProperty Name="System.Nullable Infragistics.RPCloudFile::ModifiedDate()" />*/
	modifiedDate: function () {
		return $.ig.util.toNullable($.ig.Date.prototype.$type, $.ig.DateUtility.prototype.now());
	}
	/*<EndProperty Name="System.Nullable Infragistics.RPCloudFile::ModifiedDate()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::EmbedUrl()" />*/
	embedUrl: function () {
		return null;
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::EmbedUrl()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::DownloadUrl()" />*/
	downloadUrl: function () {
		return null;
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::DownloadUrl()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::Name()" />*/
	name: function () {
		return this.resolveStringForKey("Name");
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::Name()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::PathIdentifier()" />*/
	pathIdentifier: function () {
		var val = this.resolveIntegerForKey("Id");
		return val.toString();
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::PathIdentifier()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.RPCloudFile::Size()" />*/
	size: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int64 Infragistics.RPCloudFile::Size()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.RPCloudFile::OpenUrl()" />*/
	openUrl: function () {
		return null;
	}
	/*<EndProperty Name="System.String Infragistics.RPCloudFile::OpenUrl()" />*/
	,
	$type: new $.ig.Type('RPCloudFile', $.ig.CloudFile.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPCloudFile" />*/

/*<BeginType Name="Infragistics.RPCloudFileManager" />*/

$.ig.util.defType('RPCloudFileManager', 'CloudFileManager', {
	init: function () {
		$.ig.CloudFileManager.prototype.init.call(this, null);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.RPCloudFileManager::CanAddFileInFolder(System.String)" />*/
	canAddFileInFolder: function (fileId) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.RPCloudFileManager::CanAddFileInFolder(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RPCloudFileManager::CanDeleteFile(System.String)" />*/
	canDeleteFile: function (fileId) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.RPCloudFileManager::CanDeleteFile(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::CreateFolder(System.String, System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	createFolder: function (newFolderName, remoteParentFolderId, successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::CreateFolder(System.String, System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DeleteFile(System.String, Infragistics.RequestSuccessBlock, Infragistics.CloudErrorBlock)" />*/
	deleteFile: function (fileId, successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DeleteFile(System.String, Infragistics.RequestSuccessBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DeleteFilePermanent(System.String, Infragistics.RequestSuccessBlock, Infragistics.CloudErrorBlock)" />*/
	deleteFilePermanent: function (fileId, successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DeleteFilePermanent(System.String, Infragistics.RequestSuccessBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DownloadFile(System.String, Infragistics.ProgressFileBlock, Infragistics.FileDownloadedBlock, Infragistics.CloudErrorBlock)" />*/
	downloadFile: function (file, handler, downloadHandler, errorHandler) {
		return this.downloadFile1(file, null, handler, downloadHandler, errorHandler);
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DownloadFile(System.String, Infragistics.ProgressFileBlock, Infragistics.FileDownloadedBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DownloadFile(System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.FileDownloadedBlock, Infragistics.CloudErrorBlock)" />*/
	downloadFile1: function (file, mimeType, handler, downloadHandler, errorHandler) {
		var request = new $.ig.RPDownloadDashboardRequest(file, null, function (r, error) {
			if (errorHandler != null) {
				errorHandler(error);
			}
		}, function (r, bytes, total) {
			if (handler != null) {
				handler(bytes, total);
			}
		}, function (r, f) {
			if (downloadHandler != null) {
				downloadHandler(f);
			}
		});
		return request;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::DownloadFile(System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.FileDownloadedBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetAccountInfo(Infragistics.CloudAccountUserInfoBlock, Infragistics.CloudErrorBlock)" />*/
	getAccountInfo: function (successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetAccountInfo(Infragistics.CloudAccountUserInfoBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetDownloadLink(System.String, Infragistics.RequestSuccessBlock, Infragistics.RequestErrorBlock)" />*/
	getDownloadLink: function (fileId, successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetDownloadLink(System.String, Infragistics.RequestSuccessBlock, Infragistics.RequestErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFileByName(System.String, System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	getFileByName: function (fileName, remoteFolderId, handler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFileByName(System.String, System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFilesFromCloudFolder(Infragistics.CloudFile, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	getFilesFromCloudFolder: function (file, handler, errorHandler) {
		var pathId = (file == null) ? null : file.pathIdentifier();
		return this.getFilesInFolder(pathId, handler, errorHandler);
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFilesFromCloudFolder(Infragistics.CloudFile, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFilesInFolder(System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	getFilesInFolder: function (folder, handler, errorHandler) {
		var request = new $.ig.RPGetFilesRequest(folder, function (r, o) {
			if (handler != null) {
				handler(o);
			}
		}, function (r, e) {
			if (errorHandler != null) {
				errorHandler(e);
			}
		});
		return request;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetFilesInFolder(System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetMetadata(System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	getMetadata: function (path, handler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetMetadata(System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetParentForFile(System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	getParentForFile: function (fileId, successHandler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::GetParentForFile(System.String, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.CloudProviderType Infragistics.RPCloudFileManager::GetProviderType()" />*/
	getProviderType: function () {
		return $.ig.CloudProviderType.prototype.infragistics;
	}
	/*<EndMethod Name="Infragistics.CloudProviderType Infragistics.RPCloudFileManager::GetProviderType()" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::OverwriteFile(System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	overwriteFile: function (localFilePath, remoteFileId, progress, success, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::OverwriteFile(System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::SearchFiles(System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	searchFiles: function (searchText, handler, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::SearchFiles(System.String, Infragistics.CloudFilesBlock, Infragistics.CloudErrorBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::UploadFile(System.String, System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	uploadFile: function (fileName, localFilePath, remoteFolderId, progress, success, errorHandler) {
		return null;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.RPCloudFileManager::UploadFile(System.String, System.String, System.String, Infragistics.ProgressFileBlock, Infragistics.CloudFileBlock, Infragistics.CloudErrorBlock)" />*/
	,
	$type: new $.ig.Type('RPCloudFileManager', $.ig.CloudFileManager.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPCloudFileManager" />*/

/*<BeginType Name="Infragistics.RPDownloadDashboardRequest" />*/

$.ig.util.defType('RPDownloadDashboardRequest', 'RPRequestBase', {
	init: function (fileId, success, error, progress, downloaded) {
		$.ig.RPRequestBase.prototype.init.call(this, "RPDownloadDashboard", success, error);
	},
	/*<BeginMethod Name="System.String Infragistics.RPDownloadDashboardRequest::ResolveAction()" />*/
	resolveAction: function () {
		return "api/repository/GetDashboard";
	}
	/*<EndMethod Name="System.String Infragistics.RPDownloadDashboardRequest::ResolveAction()" />*/
	,
	$type: new $.ig.Type('RPDownloadDashboardRequest', $.ig.RPRequestBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPDownloadDashboardRequest" />*/

/*<BeginType Name="Infragistics.BaseVisualization" />*/

$.ig.util.defType('BaseVisualization', 'CPViewBase', {
	init: function () {
		this._tooltipRect = new $.ig.CPRect();
		$.ig.CPViewBase.prototype.init.call(this);
	},
	_widgetWrapper: null,
	_tooltipRect: null,
	/*<BeginMethod Name="System.String Infragistics.BaseVisualization::GetTooltipTitle(System.Object)" />*/
	getTooltipTitle: function (tooltipsObject) {
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.BaseVisualization::GetTooltipTitle(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.BaseVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.BaseVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.BaseVisualization::GetLabelColumnIndex()" />*/
	getLabelColumnIndex: function () {
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.BaseVisualization::GetLabelColumnIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::CreateAndDisplayTooltip(System.Object)" />*/
	createAndDisplayTooltip: function (item) {
		var $self = this;
		if (item != null) {
			var data = this._widgetWrapper._data;
			if (data != null) {
				var title = this.getTooltipTitle(item);
				var items = this.extractToolTipInfo(item);
				var canDrillUp = this.canDrillUp(data, this.getLabelColumnIndex());
				var canDrillDown = this.canDrillDown(data, this.getLabelColumnIndex());
				var tooltipPoint = this.getTooltipOriginPoint();
				var footer = null;
				if (canDrillUp || canDrillDown) {
					footer = new $.ig.TooltipDrillFooter(canDrillUp, canDrillDown, function (x1, y1) {
						$self.drillUp();
					}, function (x1, y1) {
						$self.drillDown();
					});
				}
				$.ig.CPPopupManager.prototype.showList2(this, null, items, this.toolTipPreferredPopupLocation(), new $.ig.CPPopupHeader(title), $.ig.truncate(tooltipPoint._x), $.ig.truncate(tooltipPoint._y), footer, null);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::CreateAndDisplayTooltip(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPPopupPosition Infragistics.BaseVisualization::ToolTipPreferredPopupLocation()" />*/
	toolTipPreferredPopupLocation: function () {
		return $.ig.CPPopupPosition.prototype.above;
	}
	/*<EndMethod Name="Infragistics.CPPopupPosition Infragistics.BaseVisualization::ToolTipPreferredPopupLocation()" />*/
	,
	/*<BeginMethod Name="Infragistics.NativePoint Infragistics.BaseVisualization::GetTooltipOriginPoint()" />*/
	getTooltipOriginPoint: function () {
		return new $.ig.CPPoint(1, this._tooltipRect._x, this._tooltipRect._y);
	}
	/*<EndMethod Name="Infragistics.NativePoint Infragistics.BaseVisualization::GetTooltipOriginPoint()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::SetWidget(Infragistics.WidgetWrapper)" />*/
	setWidget: function (w) {
		this._widgetWrapper = w;
		this.applySettings();
		this.applyTheme();
		if (w._data != null) {
			this.dataUpdated();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::SetWidget(Infragistics.WidgetWrapper)" />*/
	,
	/*<BeginProperty Name="Infragistics.DashboardTheme Infragistics.BaseVisualization::Theme()" />*/
	theme: function () {
		return $.ig.DashboardThemeManager.prototype.getThemeForName(this._widgetWrapper._themeName);
	}
	/*<EndProperty Name="Infragistics.DashboardTheme Infragistics.BaseVisualization::Theme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::ThemeUpdated()" />*/
	themeUpdated: function () {
		this.applyTheme();
		if (this._widgetWrapper != null && this._widgetWrapper._data != null) {
			this.reloadData();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::ThemeUpdated()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::ApplyTheme()" />*/
	applyTheme: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::ApplySettings()" />*/
	applySettings: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::ApplySettings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::DataUpdated()" />*/
	dataUpdated: function () {
		this.reloadData();
		this._widgetWrapper._alreadyLoaded = true;
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::DataUpdated()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::ReloadData()" />*/
	reloadData: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::ReloadData()" />*/
	,
	/*<BeginProperty Name="System.Single Infragistics.BaseVisualization::VisualizationAnimationDuration()" />*/
	visualizationAnimationDuration: function () {
		return $.ig.BaseVisualization.prototype.aNIMATION_DURATION;
	}
	/*<EndProperty Name="System.Single Infragistics.BaseVisualization::VisualizationAnimationDuration()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.BaseVisualization::ResolveLabelColumnIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String)" />*/
	resolveLabelColumnIndex: function (data, fieldName) {
		var labelColIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, fieldName);
		if (labelColIndex != -1) {
			if ($.ig.DataTableResultHelper.prototype.getColumnTypeAtIndex(data, labelColIndex) == $.ig.DashboardDataType.prototype.number) {
				var index = $.ig.DataTableResultHelper.prototype.resolveFirstNonNumericColumn(data);
				if (index != -1) {
					labelColIndex = index;
				}
			}
		} else {
			labelColIndex = $.ig.DataTableResultHelper.prototype.resolveFirstNonNumericColumn(data);
			if (labelColIndex == -1) {
				labelColIndex = $.ig.DataTableResultHelper.prototype.resolveFirstNumericColumn(data);
			}
		}
		return labelColIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.BaseVisualization::ResolveLabelColumnIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.BaseVisualization::ResolveLabels(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	resolveLabels: function (data, labelColumnIndex) {
		var labelColumnCells = $.ig.DataTableResultHelper.prototype.getCellsForColumnAtIndex(data, labelColumnIndex);
		var labelColumnValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, labelColumnIndex);
		var labelColumnLabels = $.ig.DataTableResultHelper.prototype.getLabelsForColumnAtIndex(data, labelColumnIndex);
		var rowCount = $.ig.DataTableResultHelper.prototype.getRowCount(data);
		var labels = null;
		if (labels == null && labelColumnCells != null) {
			labels = new Array(rowCount);
			for (var i = 0; i < rowCount; i++) {
				labels[i] = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(data, i, labelColumnIndex);
			}
		}
		if (labels == null && labelColumnValues != null) {
			labels = new Array(rowCount);
			for (var i1 = 0; i1 < rowCount; i1++) {
				labels[i1] = $.ig.NativeUtility.prototype.utility().convertNumberToString(labelColumnValues[i1], 0, false);
			}
		}
		var type = data.table().getColumn(labelColumnIndex).type();
		var isDateLabel = type == $.ig.DashboardDataType.prototype.date || type == $.ig.DashboardDataType.prototype.dateTime || type == $.ig.DashboardDataType.prototype.time;
		if (labels == null && labelColumnLabels != null) {
			labels = new Array(rowCount);
			for (var i2 = 0; i2 < rowCount; i2++) {
				if (isDateLabel) {
					labels[i2] = $.ig.DateUtility.prototype.formatDateToRFC3339UTC($.ig.util.toNullable($.ig.Date.prototype.$type, labelColumnLabels[i2]));
				} else {
					labels[i2] = labelColumnLabels[i2];
				}
			}
		}
		return labels;
	}
	/*<EndMethod Name=" Infragistics.BaseVisualization::ResolveLabels(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.BaseVisualization::MaxNumberOfSeries()" />*/
	maxNumberOfSeries: function () {
		return 50;
	}
	/*<EndProperty Name="System.Int32 Infragistics.BaseVisualization::MaxNumberOfSeries()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BaseVisualization::CanDrillUp(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	canDrillUp: function (data, column) {
		var spec = this._widgetWrapper._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, spec) !== null) {
			var tabularSpec = spec;
			if (tabularSpec.summarizationSpec() != null && !$.ig.NativeDataLayerUtility.prototype.isNullInt(tabularSpec.summarizationSpec().adHocFields()) && tabularSpec.summarizationSpec().adHocFields().value() > 0) {
				var tableColumn = $.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, column);
				if ($.ig.util.cast($.ig.PivotDimensionColumn.prototype.$type, tableColumn) !== null) {
					var dimColumn = tableColumn;
					return dimColumn.dimensionField().drillDownElements().length > 0;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BaseVisualization::CanDrillUp(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BaseVisualization::CanDrillDown(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	canDrillDown: function (data, column) {
		var spec = this._widgetWrapper._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, spec) !== null) {
			var tabularSpec = spec;
			if (tabularSpec.summarizationSpec() != null && !$.ig.NativeDataLayerUtility.prototype.isNullInt(tabularSpec.summarizationSpec().adHocFields()) && tabularSpec.summarizationSpec().adHocFields().value() > 0) {
				var tableColumn = $.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, column);
				if ($.ig.util.cast($.ig.PivotDimensionColumn.prototype.$type, tableColumn) !== null) {
					var dimColumn = tableColumn;
					return dimColumn.dimensionField().drillDownElements().length < tabularSpec.summarizationSpec().adHocFields().value();
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BaseVisualization::CanDrillDown(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::DrillUp()" />*/
	drillUp: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::DrillUp()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseVisualization::DrillDown()" />*/
	drillDown: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseVisualization::DrillDown()" />*/
	,
	$type: new $.ig.Type('BaseVisualization', $.ig.CPViewBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BaseVisualization" />*/

/*<BeginType Name="Infragistics.BulletGraphCell" />*/

$.ig.util.defType('BulletGraphCell', 'CPGridViewCell', {
	__item: null,
	__label: null,
	__bandColor: 0,
	__bandIndicatorWidth: 0,
	__bulletHeight: 0,
	__bulletY: 0,
	__bulletGauge: null,
	init: function (identifier) {
		$.ig.CPGridViewCell.prototype.init.call(this, identifier);
		this.__bulletGauge = new $.ig.RPBulletGauge();
		this.addSubview(this.__bulletGauge);
		this.__label = new $.ig.CPLabel();
		this.addSubview(this.__label);
		this.__bandIndicatorWidth = $.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH;
	},
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphCell::SetItem(Infragistics.MinMaxRange, Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings, Infragistics.DashboardTheme, Infragistics.ReportPlus.DashboardModel.NumberFormattingSpec, System.Boolean)" />*/
	setItem: function (range, settings, theme, formattingSpec, animate) {
		this.__item = this.data();
		this.__label.setText(this.__item._displayValue);
		this.__label.setTextColor($.ig.ColorUtility.prototype.convertToNative(theme.foregroundColor()));
		this.__label.setFont(theme.copyFontSize(), $.ig.NativeUIUtility.prototype.utility().resolveNativeFont(theme.fontFileCopy()));
		var band = $.ig.DataTableResultHelper.prototype.findBandInList(settings.gaugeBands(), this.__item._value, range);
		this.__bandColor = $.ig.VisualizationHelper.prototype.resolveBandColor(band.color(), theme);
		if (this.__bandColor != -1) {
			this.__bulletGauge.valueColor($.ig.ColorUtility.prototype.convertToNative(this.__bandColor));
		}
		this.__bulletGauge.fontName($.ig.NativeUIUtility.prototype.utility().resolveNativeDrawingFont(theme.valueFontFile()));
		this.__bulletGauge.nonValueColor($.ig.ColorUtility.prototype.convertToNative(theme.outlineColor()));
		this.__bulletGauge.bandColor($.ig.ColorUtility.prototype.convertToNative(theme.widgetBackgroundColor()));
		this.__bulletGauge.bandWidth($.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH);
		this.__bulletGauge.min(range._min);
		this.__bulletGauge.max(range._max);
		this.__bulletGauge.value(0);
		this.__bulletGauge.targetValue(this.__item._targetValue);
		this.__bulletGauge.valueFormatCurrencySymbol(formattingSpec.currencySymbol());
		this.__bulletGauge.valueFormatFractionDigits(formattingSpec.decimalDigits());
		this.__bulletGauge.valueFormatNegativeMode(formattingSpec.negativeFormat() == $.ig.DashboardNegativeFormatType.prototype.parenthesis ? $.ig.FormatSettingsNegativeNumberMode.prototype.parens : $.ig.FormatSettingsNegativeNumberMode.prototype.minus);
		this.__bulletGauge.valueFormatShowGroupingSeparator(formattingSpec.showGroupingSeparator());
		this.__bulletGauge.valueFormatType($.ig.VisualizationHelper.prototype.resolveFormattingType(formattingSpec.formatType()));
		this.__bulletGauge.valueFormatUseMKFormatting(formattingSpec.applyMkFormat());
		if (settings.gaugeBands() != null) {
			var largestRange = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(settings.gaugeBands()[0], range, range);
			var middleRange = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(settings.gaugeBands()[1], range, range);
			this.__bulletGauge.firstBandValue(middleRange._min);
			this.__bulletGauge.secondBandValue(largestRange._min);
		}
		this.updateValueOnItem(animate);
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphCell::SetItem(Infragistics.MinMaxRange, Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings, Infragistics.DashboardTheme, Infragistics.ReportPlus.DashboardModel.NumberFormattingSpec, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphCell::UpdateValueOnItem(System.Boolean)" />*/
	updateValueOnItem: function (canAnimate) {
		var $self = this;
		if (!canAnimate) {
			this.__bulletGauge.value(this.__item._value);
			this.__bulletGauge.update(false);
		} else {
			this.__bulletGauge.animate(function () {
				$self.__bulletGauge.value($self.__item._value);
			}, $.ig.BaseVisualization.prototype.aNIMATION_DURATION);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphCell::UpdateValueOnItem(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCell.prototype.sizeChanged.call(this, w, h);
		this.__label.calculateSizeToFit();
		var padding = $.ig.truncate((h * 0.1));
		var labelHeight = this.__label.getCalculatedHeight();
		this.__bulletY = padding + labelHeight;
		this.__bulletHeight = h - this.__bulletY;
		this.measureView(this.__label, 0, padding, this.__label.getCalculatedWidth(), labelHeight);
		this.measureView(this.__bulletGauge, 0, this.__bulletY, w, this.__bulletHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.NativePoint Infragistics.BulletGraphCell::GetBulletValuePoint()" />*/
	getBulletValuePoint: function () {
		return new $.ig.CPPoint(1, this.__bulletGauge.getValueX(), (this.__bulletY + ($.ig.intDivide(this.__bulletHeight, 2))));
	}
	/*<EndMethod Name="Infragistics.NativePoint Infragistics.BulletGraphCell::GetBulletValuePoint()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BulletGraphCell::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BulletGraphCell::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BulletGraphCell::HandleMouseDown(System.Int32, System.Int32)" />*/
	handleMouseDown: function (x, y) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BulletGraphCell::HandleMouseDown(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('BulletGraphCell', $.ig.CPGridViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BulletGraphCell" />*/

/*<BeginType Name="Infragistics.BulletGraphVisualization" />*/

$.ig.util.defType('BulletGraphVisualization', 'BaseVisualization', {
	__range: null,
	__grid: null,
	__firstBandLabel: null,
	__secondBandLabel: null,
	__thirdBandLabel: null,
	__firstBandIndicator: null,
	__secondBandIndicator: null,
	__thirdBandIndicator: null,
	__hasDataLoaded: false,
	__dsh: null,
	__maxHeight: 0,
	__minHeight: 0,
	__numberOfRowsInView: 0,
	__formattingSpec: null,
	/*<BeginProperty Name="Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings Infragistics.BulletGraphVisualization::Settings()" />*/
	settings: function () {
		return this._widgetWrapper._widget.visualizationSettings();
	}
	/*<EndProperty Name="Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings Infragistics.BulletGraphVisualization::Settings()" />*/
	,
	init: function () {
		this.__hasDataLoaded = false;
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__grid = new $.ig.CPGridView();
		this.__grid._headerHeight = 0;
		this.__grid.name("BulletGraphView");
		this.__grid._selectionType = $.ig.CPGridViewSelectionType.prototype.none;
		this.__grid._rowSeparatorHeight = 0;
		this.__maxHeight = $.ig.NativeUIUtility.prototype.utility().densify(70);
		this.__minHeight = $.ig.NativeUIUtility.prototype.utility().densify(50);
		this.__numberOfRowsInView = 10;
		this.__dsh = new $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper(0, new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return new $.ig.BulletGraphCell(identifier);
		}));
		this.__dsh._numberOfColumns = 1;
		this.addSubview(this.__grid);
		this.__thirdBandIndicator = new $.ig.CPView();
		this.addSubview(this.__thirdBandIndicator);
		this.__thirdBandLabel = new $.ig.CPLabel();
		this.__thirdBandLabel.setText("1.50");
		this.addSubview(this.__thirdBandLabel);
		this.__secondBandIndicator = new $.ig.CPView();
		this.addSubview(this.__secondBandIndicator);
		this.__secondBandLabel = new $.ig.CPLabel();
		this.addSubview(this.__secondBandLabel);
		this.__firstBandIndicator = new $.ig.CPView();
		this.addSubview(this.__firstBandIndicator);
		this.__firstBandLabel = new $.ig.CPLabel();
		this.addSubview(this.__firstBandLabel);
	},
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::ReloadData()" />*/
	reloadData: function () {
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		this.resetChart();
		var data = this._widgetWrapper._data;
		if (data != null) {
			var valueColIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().valueColumnName());
			var targetColumnIndex = this.settings().targetColumnName() != null ? $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().targetColumnName()) : -1;
			var labelColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().labelColumnName());
			if (valueColIndex == -1) {
				valueColIndex = $.ig.DataTableResultHelper.prototype.resolveFirstNumericColumn(data);
			}
			var list = new $.ig.Array();
			if (valueColIndex != -1) {
				this.styleFooterLabels();
				this.__formattingSpec = $.ig.DataTableResultHelper.prototype.resolveNumberSpec($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, valueColIndex));
				this.__range = $.ig.DataTableResultHelper.prototype.findMinMax(data, valueColIndex, false);
				if (this.settings().minimum() != null && !$.ig.NativeDataLayerUtility.prototype.isNullDouble(this.settings().minimum().value())) {
					this.__range._min = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(this.settings().minimum().value());
				}
				if (this.settings().maximum() != null && !$.ig.NativeDataLayerUtility.prototype.isNullDouble(this.settings().maximum().value())) {
					this.__range._max = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(this.settings().maximum().value());
				}
				var colCount = $.ig.DataTableResultHelper.prototype.getColumnCount(data);
				if (labelColumnIndex == -1) {
					for (var i = 0; i < colCount; i++) {
						if (i != valueColIndex) {
							labelColumnIndex = i;
							break;
						}
					}
				}
				var rowCount = $.ig.DataTableResultHelper.prototype.getRowCount(data);
				for (var i1 = 0; i1 < rowCount; i1++) {
					var bulletData = new $.ig.BulletGraphData();
					if (valueColIndex != -1) {
						var value = $.ig.DataTableResultHelper.prototype.getCellValue(data, i1, valueColIndex);
						if (typeof value === 'number') {
							bulletData._value = value;
						} else {
							continue;
						}
						bulletData._formattedValue = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(data, i1, valueColIndex);
					}
					if (targetColumnIndex != -1) {
						var value1 = $.ig.DataTableResultHelper.prototype.getCellValue(data, i1, targetColumnIndex);
						if (typeof value1 === 'number') {
							bulletData._targetValue = value1;
						} else {
							bulletData._targetValue = -1;
						}
						bulletData._targetFormattedValue = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(data, i1, targetColumnIndex);
					} else {
						bulletData._targetValue = -1;
					}
					if (labelColumnIndex != -1) {
						bulletData._displayValue = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(data, i1, labelColumnIndex);
					}
					list.add(bulletData);
				}
				this.__dsh.data(list);
				this.__grid.setDataSource(this.__dsh);
				this.__hasDataLoaded = true;
				this.sizeChanged(this.currentWidth(), this.currentHeight());
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::StyleFooterLabels()" />*/
	styleFooterLabels: function () {
		var largeBandColor = $.ig.VisualizationHelper.prototype.resolveBandColor((this.settings().gaugeBands()[0]).color(), this.theme());
		this.__thirdBandIndicator.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(largeBandColor));
		this.__thirdBandLabel.setTextColor($.ig.ColorUtility.prototype.convertToNative(largeBandColor));
		this.__thirdBandLabel.setFont(this.theme().copyFontSize(), $.ig.NativeUIUtility.prototype.utility().resolveNativeFont(this.theme().valueFontFile()));
		var middleBandColor = $.ig.VisualizationHelper.prototype.resolveBandColor((this.settings().gaugeBands()[1]).color(), this.theme());
		this.__secondBandIndicator.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(middleBandColor));
		this.__secondBandLabel.setTextColor($.ig.ColorUtility.prototype.convertToNative(middleBandColor));
		this.__secondBandLabel.setFont(this.theme().copyFontSize(), $.ig.NativeUIUtility.prototype.utility().resolveNativeFont(this.theme().valueFontFile()));
		var smallBandColor = $.ig.VisualizationHelper.prototype.resolveBandColor((this.settings().gaugeBands()[2]).color(), this.theme());
		this.__firstBandIndicator.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(smallBandColor));
		this.__firstBandLabel.setTextColor($.ig.ColorUtility.prototype.convertToNative(smallBandColor));
		this.__firstBandLabel.setFont(this.theme().copyFontSize(), $.ig.NativeUIUtility.prototype.utility().resolveNativeFont(this.theme().valueFontFile()));
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::StyleFooterLabels()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		var bandIndicatorAreaHeight = 0;
		if (this.settings().gaugeBands() != null && this.__range != null) {
			var largestRange = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(this.settings().gaugeBands()[0], this.__range, this.__range);
			this.__thirdBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(largestRange._max, this.__formattingSpec.applyMkFormat(), $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
			var middleRange = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(this.settings().gaugeBands()[1], new $.ig.MinMaxRange(this.__range._min, largestRange._min), this.__range);
			this.__secondBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(middleRange._max, this.__formattingSpec.applyMkFormat(), $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
			this.__firstBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(middleRange._min, this.__formattingSpec.applyMkFormat(), $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
			this.__thirdBandLabel.calculateSizeToFit();
			var labelHeight = this.__thirdBandLabel.getCalculatedHeight();
			var padding = $.ig.truncate((labelHeight * 0.35));
			var bandIndicatorHeight = (labelHeight + (padding * 2));
			bandIndicatorAreaHeight = bandIndicatorHeight + padding;
			var firstBandPercentage = (middleRange._min - this.__range._min) / (this.__range._max - this.__range._min);
			var firstBandIndicatorX = $.ig.truncate((firstBandPercentage * w));
			this.measureView(this.__firstBandIndicator, firstBandIndicatorX - ($.ig.intDivide($.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH, 2)), h - bandIndicatorHeight, $.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH, bandIndicatorHeight);
			var secondBandPercentage = (largestRange._min - this.__range._min) / (this.__range._max - this.__range._min);
			var secondBandIndicatorX = $.ig.truncate((secondBandPercentage * w));
			this.measureView(this.__secondBandIndicator, secondBandIndicatorX - ($.ig.intDivide($.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH, 2)), h - bandIndicatorHeight, $.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH, bandIndicatorHeight);
			var thirdBandIndicatorX = w - $.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH;
			this.measureView(this.__thirdBandIndicator, thirdBandIndicatorX, h - bandIndicatorHeight, $.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH, bandIndicatorHeight);
			this.__thirdBandLabel.calculateSizeToFit1(thirdBandIndicatorX - secondBandIndicatorX);
			this.__secondBandLabel.calculateSizeToFit1(secondBandIndicatorX - firstBandIndicatorX);
			this.__firstBandLabel.calculateSizeToFit1(firstBandIndicatorX);
			if (this.__thirdBandLabel.getCalculatedWidth() + (2 * padding) >= (thirdBandIndicatorX - secondBandIndicatorX) || this.__secondBandLabel.getCalculatedWidth() + (2 * padding) >= (secondBandIndicatorX - firstBandIndicatorX) || this.__firstBandIndicator.getCalculatedWidth() + (2 * padding) >= firstBandIndicatorX) {
				if (!this.__formattingSpec.applyMkFormat()) {
					this.__thirdBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(largestRange._max, true, $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
					this.__secondBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(middleRange._max, true, $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
					this.__firstBandLabel.setText($.ig.ChartsUtility.prototype.labelForValue(middleRange._min, true, $.ig.VisualizationHelper.prototype.resolveNegativeFormatType(this.__formattingSpec.negativeFormat()), $.ig.VisualizationHelper.prototype.resolveFormattingType(this.__formattingSpec.formatType()), this.__formattingSpec.decimalDigits(), this.__formattingSpec.showGroupingSeparator(), this.__formattingSpec.currencySymbol()));
					this.__thirdBandLabel.calculateSizeToFit1(thirdBandIndicatorX - secondBandIndicatorX);
					this.__secondBandLabel.calculateSizeToFit1(secondBandIndicatorX - firstBandIndicatorX);
					this.__firstBandLabel.calculateSizeToFit1(firstBandIndicatorX);
				}
			}
			this.measureView(this.__firstBandLabel, firstBandIndicatorX - this.__firstBandLabel.getCalculatedWidth() - padding, h - labelHeight - padding, this.__firstBandLabel.getCalculatedWidth(), labelHeight);
			this.measureView(this.__secondBandLabel, secondBandIndicatorX - this.__secondBandLabel.getCalculatedWidth() - padding, h - labelHeight - padding, this.__secondBandLabel.getCalculatedWidth(), labelHeight);
			this.measureView(this.__thirdBandLabel, thirdBandIndicatorX - this.__thirdBandLabel.getCalculatedWidth() - padding, h - labelHeight - padding, this.__thirdBandLabel.getCalculatedWidth(), labelHeight);
		}
		this.__grid._rowHeight = Math.max(this.__minHeight, Math.min($.ig.intDivide(h, this.__numberOfRowsInView), this.__maxHeight));
		this.measureView(this.__grid, 0, 0, w, h - bandIndicatorAreaHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::ResetChart()" />*/
	resetChart: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::ResetChart()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.BulletGraphVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		var items = new $.ig.Array();
		if ($.ig.util.cast($.ig.BulletGraphData.prototype.$type, tooltipsObject) !== null) {
			var data = tooltipsObject;
			items.add(new $.ig.TooltipPopupItem("Value", data._formattedValue, null, null));
			if (data._targetValue != -1) {
				items.add(new $.ig.TooltipPopupItem("Target", data._targetFormattedValue, null, null));
			}
		}
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.BulletGraphVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.BulletGraphVisualization::GetTooltipTitle(System.Object)" />*/
	getTooltipTitle: function (tooltipsObject) {
		if ($.ig.util.cast($.ig.BulletGraphData.prototype.$type, tooltipsObject) !== null) {
			var data = tooltipsObject;
			return data._displayValue;
		}
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.BulletGraphVisualization::GetTooltipTitle(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPPopupPosition Infragistics.BulletGraphVisualization::ToolTipPreferredPopupLocation()" />*/
	toolTipPreferredPopupLocation: function () {
		return $.ig.CPPopupPosition.prototype.right;
	}
	/*<EndMethod Name="Infragistics.CPPopupPosition Infragistics.BulletGraphVisualization::ToolTipPreferredPopupLocation()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var bulletCell = cell;
		var nPoint = bulletCell.getBulletValuePoint();
		var point = cell.translatePoint(new $.ig.CPPoint(1, nPoint._x, nPoint._y), this);
		this._tooltipRect = new $.ig.CPRect(1, point._x, point._y, 0, 0);
		this.createAndDisplayTooltip(cell.data());
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.BulletGraphVisualization::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.BulletGraphVisualization::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BulletGraphVisualization::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var bulletCell = cell;
		bulletCell.setItem(this.__range, this.settings(), this.theme(), this.__formattingSpec, !this._widgetWrapper._alreadyLoaded);
	}
	/*<EndMethod Name="System.Void Infragistics.BulletGraphVisualization::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('BulletGraphVisualization', $.ig.BaseVisualization.prototype.$type, [$.ig.CPGridViewCellSetupDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.BulletGraphVisualization" />*/

/*<BeginType Name="Infragistics.BulletGraphData" />*/

$.ig.util.defType('BulletGraphData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_value: 0,
	_targetValue: 0,
	_displayValue: null,
	_formattedValue: null,
	_targetFormattedValue: null,
	$type: new $.ig.Type('BulletGraphData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BulletGraphData" />*/

/*<BeginType Name="Infragistics.ChartBaseVisualization" />*/

$.ig.util.defType('ChartBaseVisualization', 'BaseVisualization', {
	_chart: null,
	_brushOffsetIndex: 0,
	_labelColumnIndex: 0,
	_valueColumnIndex: null,
	init: function () {
		$.ig.BaseVisualization.prototype.init.call(this);
		this._chart = this.createChart();
		this.addSubview(this._chart);
	},
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.ChartBaseVisualization::GetChart()" />*/
	getChart: function () {
		return this._chart;
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.ChartBaseVisualization::GetChart()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetLabelColIndex()" />*/
	getLabelColIndex: function () {
		return this._labelColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetLabelColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetValueColIndex(System.Int32)" />*/
	getValueColIndex: function (index) {
		return this._valueColumnIndex[index];
	}
	/*<EndMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetValueColIndex(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::HandleClick(System.Int32, System.Int32)" />*/
	handleClick: function (x, y) {
		this.createAndDisplayTooltip(this.getTooltipItemsAtPoint(x, y));
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::HandleClick(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ChartBaseVisualization::HandleMouseDown(System.Int32, System.Int32)" />*/
	handleMouseDown: function (x, y) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ChartBaseVisualization::HandleMouseDown(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ChartBaseVisualization::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ChartBaseVisualization::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetLabelColumnIndex()" />*/
	getLabelColumnIndex: function () {
		return this.resolveLabelColumnIndex(this._widgetWrapper._data, this.settings().labelField());
	}
	/*<EndMethod Name="System.Int32 Infragistics.ChartBaseVisualization::GetLabelColumnIndex()" />*/
	,
	/*<BeginMethod Name="Infragistics.NativePoint Infragistics.ChartBaseVisualization::GetTooltipOriginPoint()" />*/
	getTooltipOriginPoint: function () {
		var layoutX = 0;
		var layoutY = 0;
		if (this._widgetWrapper._widgetType == $.ig.VisualizationType.prototype.barChart || this._widgetWrapper._widgetType == $.ig.VisualizationType.prototype.stackedBarChart) {
			layoutX = (this._tooltipRect._x + this._tooltipRect._width);
			layoutY = (this._tooltipRect._y + (this._tooltipRect._height / 2));
		} else {
			layoutX = (this._tooltipRect._x + (this._tooltipRect._width / 2));
			layoutY = this._tooltipRect._y;
		}
		return new $.ig.CPPoint(1, layoutX, layoutY);
	}
	/*<EndMethod Name="Infragistics.NativePoint Infragistics.ChartBaseVisualization::GetTooltipOriginPoint()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ChartBaseVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		if ($.ig.util.cast($.ig.Array.prototype.$type, tooltipsObject) !== null) {
			var tooltips = tooltipsObject;
			if (tooltips.length > 0) {
				var items = new $.ig.Array();
				var tooltipItem = tooltips[0];
				var bounds = tooltipItem._bounds;
				var smallestY = $.ig.truncate(tooltipItem._bounds._y);
				var largestX = $.ig.truncate((tooltipItem._bounds._x + tooltipItem._bounds._width));
				for (var i = 0; i < tooltips.length; i++) {
					tooltipItem = tooltips[i];
					var columnName = tooltipItem._title;
					var formattedValue = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(this._widgetWrapper._data, columnName));
					items.add(new $.ig.TooltipPopupItem(columnName, formattedValue, null, null));
					if (this._widgetWrapper._widgetType != $.ig.VisualizationType.prototype.barChart && tooltipItem._bounds._y < smallestY) {
						smallestY = $.ig.truncate(tooltipItem._bounds._y);
						bounds = tooltipItem._bounds;
					} else if (this._widgetWrapper._widgetType == $.ig.VisualizationType.prototype.barChart && tooltipItem._bounds._x + tooltipItem._bounds._width > largestX) {
						largestX = $.ig.truncate((tooltipItem._bounds._x + tooltipItem._bounds._width));
						bounds = tooltipItem._bounds;
					}
				}
				this._tooltipRect = bounds;
				return items;
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ChartBaseVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ChartBaseVisualization::GetTooltipItemsAtPoint(System.Int32, System.Int32)" />*/
	getTooltipItemsAtPoint: function (x, y) {
		return this._chart.getItemsAtPoint(x, y);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ChartBaseVisualization::GetTooltipItemsAtPoint(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ChartBaseVisualization::GetTooltipTitle(System.Object)" />*/
	getTooltipTitle: function (tooltipsObject) {
		if ($.ig.util.cast($.ig.Array.prototype.$type, tooltipsObject) !== null) {
			var tooltips = tooltipsObject;
			if (tooltips.length > 0) {
				var tooltipItem = tooltips[0];
				this._labelColumnIndex = this.resolveLabelColumnIndex(this._widgetWrapper._data, this.settings().labelField());
				return $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, this._labelColumnIndex);
			}
		}
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.ChartBaseVisualization::GetTooltipTitle(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.ChartBaseVisualization::CreateChart()" />*/
	createChart: function () {
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.ChartBaseVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.BaseVisualization.prototype.sizeChanged.call(this, w, h);
		this.measureView(this._chart, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings Infragistics.ChartBaseVisualization::Settings()" />*/
	settings: function () {
		return this._widgetWrapper._widget.visualizationSettings();
	}
	/*<EndProperty Name="Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings Infragistics.ChartBaseVisualization::Settings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ResetChart()" />*/
	resetChart: function () {
		this._chart.removeAllSeries();
		this._chart.clearLabels();
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ResetChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
		this._chart.fontColor(this.theme().resolveNativeColor(this.theme().foregroundColor()));
		this._chart.markerStrokeColor(this.theme().resolveNativeColor(this.theme().widgetBackgroundColor()));
		this._chart.primaryAxisLineColor(this._chart.fontColor());
		this._chart.labelMaxFontSize($.ig.truncate((this.theme().copyFontSize() * 0.85)));
		this._chart.labelMinFontSize($.ig.truncate((this.theme().copyFontSize() * 0.5)));
		this._chart.majorAxisLineThickness(0);
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplySettings()" />*/
	applySettings: function () {
		$.ig.BaseVisualization.prototype.applySettings.call(this);
		this.applyChartSettings(this.settings());
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplySettings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	applyChartSettings: function (settings) {
		this._chart.legendLocation(settings.showLegends() ? $.ig.LegendLocation.prototype.top : $.ig.LegendLocation.prototype.none);
		this._brushOffsetIndex = ($.ig.NativeDataLayerUtility.prototype.isNullInt(settings.brushOffsetIndex())) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(settings.brushOffsetIndex());
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ReloadData()" />*/
	reloadData: function () {
		var $self = this;
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		this.resetChart();
		var data = this._widgetWrapper._data;
		if (data != null) {
			this._labelColumnIndex = this.resolveLabelColumnIndex(data, this.settings().labelField());
			if (this._widgetWrapper._alreadyLoaded) {
				this.processData(data, this._labelColumnIndex);
				this._chart.update(true);
			} else {
				this._chart.animate(function () {
					$self.processData(data, $self._labelColumnIndex);
					$self.setAxisLabels();
				}, this.visualizationAnimationDuration());
			}
		} else {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	processData: function (data, labelColumnIndex) {
		var settings = this.settings();
		var labels = this.resolveLabels(data, labelColumnIndex);
		var foundSeries = 0;
		if (settings.series() != null && settings.series().length > 0) {
			var seriesCount = settings.series().length;
			this._valueColumnIndex = new Array(seriesCount);
			for (var i = 0; i < seriesCount; i++) {
				var fieldName = settings.series()[i];
				var colIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, fieldName);
				this._valueColumnIndex[i] = colIndex;
				if (colIndex != -1) {
					this.processColumn($.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, colIndex), labels, fieldName, $.ig.DataTableResultHelper.prototype.getNameForColumnAtIndex(data, colIndex), foundSeries);
					if (foundSeries == 0) {
						this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, colIndex));
					}
					foundSeries++;
				}
			}
		}
		if (foundSeries == 0) {
			this._valueColumnIndex = new Array(0);
			var colCount = Math.min(data.table().columnCount(), this.maxNumberOfSeries());
			for (var i1 = 0; i1 < colCount; i1++) {
				var col = data.table().getDataColumn(i1);
				var colType = col._type;
				if (colType == $.ig.DashboardDataType.prototype.number && i1 != labelColumnIndex) {
					this._valueColumnIndex = $.ig.ArrayUtility.prototype.addToArray1(i1, this._valueColumnIndex);
					this.processColumn(col._values, labels, i1.toString(), col._name, foundSeries);
					if (foundSeries == 0) {
						this.applyFormattingForColumn(data.table().columns()[i1]);
					}
					foundSeries++;
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	processColumn: function (data, labels, key, title, index) {
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	setTrendLine: function (seriesKey, brush) {
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyFormattingForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	applyFormattingForColumn: function (col) {
		var spec = $.ig.DataTableResultHelper.prototype.resolveNumberSpec(col);
		this._chart.primaryAxisValueFormatFractionDigits(spec.decimalDigits());
		this._chart.primaryAxisValueFormatNegativeMode(spec.negativeFormat() == $.ig.DashboardNegativeFormatType.prototype.parenthesis ? $.ig.FormatSettingsNegativeNumberMode.prototype.parens : $.ig.FormatSettingsNegativeNumberMode.prototype.minus);
		this._chart.primaryAxisValueFormatType($.ig.VisualizationHelper.prototype.resolveFormattingType(spec.formatType()));
		this._chart.primaryAxisValueFormatUseMKFormatting(spec.applyMkFormat());
		this._chart.primaryAxisValueFormatCurrencySymbol(spec.currencySymbol() == null ? "$" : spec.currencySymbol());
		this._chart.primaryAxisValueFormatShowGroupingSeparator(spec.showGroupingSeparator());
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyFormattingForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyFormattingSecondaryAxisForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	applyFormattingSecondaryAxisForColumn: function (col) {
		if ($.ig.util.cast($.ig.ISecondaryAxisFormatting.prototype.$type, this._chart) !== null) {
			var cartesianBaseChart = this._chart;
			var spec = $.ig.DataTableResultHelper.prototype.resolveNumberSpec(col);
			cartesianBaseChart.useSecondaryFormatForSecondaryAxis(true);
			cartesianBaseChart.secondaryAxisValueFormatFractionDigits(spec.decimalDigits());
			cartesianBaseChart.secondaryAxisValueFormatNegativeMode(spec.negativeFormat() == $.ig.DashboardNegativeFormatType.prototype.parenthesis ? $.ig.FormatSettingsNegativeNumberMode.prototype.parens : $.ig.FormatSettingsNegativeNumberMode.prototype.minus);
			cartesianBaseChart.secondaryAxisValueFormatType($.ig.VisualizationHelper.prototype.resolveFormattingType(spec.formatType()));
			cartesianBaseChart.secondaryAxisValueFormatUseMKFormatting(spec.applyMkFormat());
			cartesianBaseChart.secondaryAxisValueFormatCurrencySymbol(spec.currencySymbol() == null ? "$" : spec.currencySymbol());
			cartesianBaseChart.secondaryAxisValueFormatShowGroupingSeparator(spec.showGroupingSeparator());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::ApplyFormattingSecondaryAxisForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	,
	/*<BeginMethod Name="System.ColorInt Infragistics.ChartBaseVisualization::ResolveBrushForSeriesIndex(System.Int32)" />*/
	resolveBrushForSeriesIndex: function (index) {
		var brushIndex = this._brushOffsetIndex + index;
		if (brushIndex == -1) {
			brushIndex = 0;
		}
		var currentTheme = this.theme();
		if (brushIndex >= currentTheme.chartColors().length) {
			brushIndex = brushIndex % currentTheme.chartColors().length;
		}
		var color = currentTheme.chartColors()[brushIndex];
		return color;
	}
	/*<EndMethod Name="System.ColorInt Infragistics.ChartBaseVisualization::ResolveBrushForSeriesIndex(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ChartBaseVisualization::SetAxisLabels()" />*/
	setAxisLabels: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.ChartBaseVisualization::SetAxisLabels()" />*/
	,
	$type: new $.ig.Type('ChartBaseVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ChartBaseVisualization" />*/

/*<BeginType Name="Infragistics.CategoryChartVisualization" />*/

$.ig.util.defType('CategoryChartVisualization', 'ChartBaseVisualization', {
	_isStacked: false,
	init: function () {
		$.ig.ChartBaseVisualization.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.CategoryChartVisualization::CreateChart()" />*/
	createChart: function () {
		this._chart = new $.ig.CategoryChart();
		return this._chart;
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.CategoryChartVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	applyCategoryChartSettings: function (settings) {
		var categoryChart = this._chart;
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.leftAxisMaxValue())) {
			categoryChart.leftAxisMax($.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.leftAxisMaxValue()));
		}
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.leftAxisMinValue())) {
			var val = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.leftAxisMinValue());
			if (val != 0) {
				categoryChart.leftAxisMin(val);
			}
		}
		categoryChart.yAxisLeftIsLogarithmic(settings.leftAxisLogarithmic());
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.rightAxisMaxValue())) {
			categoryChart.rightAxisMax($.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.rightAxisMaxValue()));
		}
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.rightAxisMinValue())) {
			var val1 = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.rightAxisMinValue());
			if (val1 != 0) {
				categoryChart.rightAxisMin(val1);
			}
		}
		categoryChart.yAxisRightIsLogarithmic(settings.rightAxisLogarithmic());
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::ApplyChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	applyChartSettings: function (settings) {
		$.ig.ChartBaseVisualization.prototype.applyChartSettings.call(this, settings);
		this.applyCategoryChartSettings(settings);
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::ApplyChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::ResetCategoryChart()" />*/
	resetCategoryChart: function () {
		var categoryChart = this._chart;
		this._isStacked = false;
		categoryChart.yAxisLeftTitle(null);
		categoryChart.yAxisRightTitle(null);
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::ResetCategoryChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::ResetChart()" />*/
	resetChart: function () {
		$.ig.ChartBaseVisualization.prototype.resetChart.call(this);
		this.resetCategoryChart();
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::ResetChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	processColumn: function (data, labels, key, title, index) {
		var color = this.resolveBrushForSeriesIndex(index);
		this.addSeries(data, labels, key, title, color);
		this.setTrendLine(key, color);
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	setTrendLine: function (seriesKey, brush) {
		var trendlineType = this.settings().trendlineType();
		if (trendlineType != $.ig.DashboardTrendlineType.prototype.none) {
			brush = $.ig.ColorUtility.prototype.darkenColor(brush, 0.2);
			var categoryChart = this._chart;
			categoryChart.addTrendline1(seriesKey, $.ig.VisualizationHelper.prototype.resolveTrendlineType(trendlineType), $.ig.NativeColorUtility.prototype.convertIntToNativeColor(brush));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CategoryChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	addSeries: function (data, labels, key, title, color) {
		var type = this._widgetWrapper._widgetType;
		this._isStacked = type == $.ig.VisualizationType.prototype.stackedAreaChart || type == $.ig.VisualizationType.prototype.stackedColumnChart;
		var categoryChart = this._chart;
		if (this._isStacked && categoryChart.getSeriesCount() > 0) {
			categoryChart.stack100ModeEnabled(this.isStackMode100Enabled(this.settings().isPercentageDistributed(), type));
			categoryChart.addStackWithValuesTo(categoryChart.getSeriesKeyAt(0), data, $.ig.ColorUtility.prototype.convertToNative(color), title, key);
		} else {
			var categoryType = $.ig.CategoryDataItemType.prototype.column;
			if (type == $.ig.VisualizationType.prototype.areaChart || type == $.ig.VisualizationType.prototype.stackedAreaChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.area;
			} else if (type == $.ig.VisualizationType.prototype.lineChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.line;
			} else if (type == $.ig.VisualizationType.prototype.splineChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.spline;
			} else if (type == $.ig.VisualizationType.prototype.splineAreaChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.splineArea;
			} else if (type == $.ig.VisualizationType.prototype.stepLineChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.stepLine;
			} else if (type == $.ig.VisualizationType.prototype.stepAreaChart) {
				categoryType = $.ig.CategoryDataItemType.prototype.stepArea;
			}
			categoryChart.addSeriesFromValues(data, labels, categoryType, $.ig.ColorUtility.prototype.convertToNative(color), $.ig.YAxisLocation.prototype.left, title, key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CategoryChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CategoryChartVisualization::IsStackMode100Enabled(System.Nullable, Infragistics.VisualizationType)" />*/
	isStackMode100Enabled: function (isPercentageDistributed, visType) {
		if (visType == $.ig.VisualizationType.prototype.stackedAreaChart || visType == $.ig.VisualizationType.prototype.stackedColumnChart || visType == $.ig.VisualizationType.prototype.stackedBarChart) {
			if ($.ig.NativeDataLayerUtility.prototype.isNullBool(isPercentageDistributed)) {
				return visType == $.ig.VisualizationType.prototype.stackedAreaChart ? true : false;
			} else {
				return $.ig.NativeDataLayerUtility.prototype.toBool($.ig.util.unwrapNullable(isPercentageDistributed));
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CategoryChartVisualization::IsStackMode100Enabled(System.Nullable, Infragistics.VisualizationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CategoryChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		if (!this._isStacked) {
			return $.ig.ChartBaseVisualization.prototype.extractToolTipInfo.call(this, tooltipsObject);
		} else {
			if ($.ig.util.cast($.ig.Array.prototype.$type, tooltipsObject) !== null) {
				var tooltips = tooltipsObject;
				if (tooltips.length > 0) {
					var items = new $.ig.Array();
					var tooltipItem = tooltips[0];
					var bounds = tooltipItem._bounds;
					var smallestY = $.ig.truncate(tooltipItem._bounds._y);
					var largestX = $.ig.truncate(tooltipItem._bounds._x);
					for (var i = 0; i < tooltips.length; i++) {
						tooltipItem = tooltips[i];
						if (this._widgetWrapper._widgetType != $.ig.VisualizationType.prototype.stackedBarChart && tooltipItem._bounds._y < smallestY) {
							smallestY = $.ig.truncate(tooltipItem._bounds._y);
							bounds = tooltipItem._bounds;
						} else if (this._widgetWrapper._widgetType == $.ig.VisualizationType.prototype.stackedBarChart && tooltipItem._bounds._x > largestX) {
							largestX = $.ig.truncate(tooltipItem._bounds._x);
							bounds = tooltipItem._bounds;
						}
						var colIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(this._widgetWrapper._data, tooltipItem._seriesKey);
						var formattedValue = $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, colIndex);
						if (this.isStackMode100Enabled(this.settings().isPercentageDistributed(), this._widgetWrapper._widgetType)) {
							formattedValue = formattedValue + " (" + tooltipItem._percentage + ")";
						}
						items.add(new $.ig.TooltipPopupItem(tooltipItem._seriesKey, formattedValue, null, null));
					}
					this._tooltipRect = bounds;
					return items;
				}
			}
			return null;
		}
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CategoryChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	$type: new $.ig.Type('CategoryChartVisualization', $.ig.ChartBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CategoryChartVisualization" />*/

/*<BeginType Name="Infragistics.BarChartVisualization" />*/

$.ig.util.defType('BarChartVisualization', 'CategoryChartVisualization', {
	init: function () {
		$.ig.CategoryChartVisualization.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.BarChartVisualization::CreateChart()" />*/
	createChart: function () {
		this._chart = new $.ig.BarChart();
		return this._chart;
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.BarChartVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BarChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	applyCategoryChartSettings: function (settings) {
		var barChart = this._chart;
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.leftAxisMaxValue())) {
			barChart.bottomAxisMax($.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.leftAxisMaxValue()));
		}
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.leftAxisMinValue())) {
			var val = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.leftAxisMinValue());
			if (val != 0) {
				barChart.bottomAxisMin(val);
			}
		}
		barChart.bottomXAxisIsLogarithmic(settings.leftAxisLogarithmic());
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.rightAxisMaxValue())) {
			barChart.topAxisMax($.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.rightAxisMaxValue()));
		}
		if (!$.ig.NativeDataLayerUtility.prototype.isNullDouble(settings.rightAxisMinValue())) {
			var val1 = $.ig.NativeDataLayerUtility.prototype.unwrapDouble(settings.rightAxisMinValue());
			if (val1 != 0) {
				barChart.topAxisMin(val1);
			}
		}
		barChart.topXAxisIsLogarithmic(settings.rightAxisLogarithmic());
	}
	/*<EndMethod Name="System.Void Infragistics.BarChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BarChartVisualization::ResetCategoryChart()" />*/
	resetCategoryChart: function () {
		var barChart = this._chart;
		this._isStacked = false;
		barChart.xAxisBottomTitle(null);
		barChart.xAxisTopTitle(null);
	}
	/*<EndMethod Name="System.Void Infragistics.BarChartVisualization::ResetCategoryChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BarChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	addSeries: function (data, labels, key, title, color) {
		var type = this._widgetWrapper._widgetType;
		this._isStacked = type == $.ig.VisualizationType.prototype.stackedBarChart;
		var barChart = this._chart;
		if (this._isStacked && barChart.getSeriesCount() > 0) {
			barChart.stack100ModeEnabled(this.isStackMode100Enabled(this.settings().isPercentageDistributed(), type));
			barChart.addStackWithValuesTo(barChart.getSeriesKeyAt(0), data, $.ig.ColorUtility.prototype.convertToNative(color), title, key);
		} else {
			barChart.addSeriesFromValues(data, labels, $.ig.CategoryDataItemType.prototype.column, $.ig.ColorUtility.prototype.convertToNative(color), $.ig.YAxisLocation.prototype.left, title, key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BarChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	,
	$type: new $.ig.Type('BarChartVisualization', $.ig.CategoryChartVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BarChartVisualization" />*/

/*<BeginType Name="Infragistics.CompositeChartVisualization" />*/

$.ig.util.defType('CompositeChartVisualization', 'CategoryChartVisualization', {
	_leftValueColumnIndex: 0,
	_rightValueColumnIndex: 0,
	init: function () {
		$.ig.CategoryChartVisualization.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.CompositeChartVisualization::GetLeftValueColIndex()" />*/
	getLeftValueColIndex: function () {
		return this._leftValueColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CompositeChartVisualization::GetLeftValueColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CompositeChartVisualization::GetRightValueColIndex()" />*/
	getRightValueColIndex: function () {
		return this._rightValueColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CompositeChartVisualization::GetRightValueColIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CompositeChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	applyCategoryChartSettings: function (settings) {
		var categoryChart = this._chart;
		categoryChart.alignNumericAxesByZero(false);
	}
	/*<EndMethod Name="System.Void Infragistics.CompositeChartVisualization::ApplyCategoryChartSettings(Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CompositeChartVisualization::ProcessCompositeColumn(, , Infragistics.CategoryDataItemType, Infragistics.YAxisLocation, System.String, System.String, System.Int32)" />*/
	processCompositeColumn: function (data, labels, type, yAxisLocation, key, title, index) {
		var color = this.resolveBrushForSeriesIndex(index);
		var categoryChart = this._chart;
		categoryChart.addSeriesFromValues(data, labels, type, $.ig.ColorUtility.prototype.convertToNative(color), yAxisLocation, title, key);
	}
	/*<EndMethod Name="System.Void Infragistics.CompositeChartVisualization::ProcessCompositeColumn(, , Infragistics.CategoryDataItemType, Infragistics.YAxisLocation, System.String, System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CompositeChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	processData: function (data, labelColumnIndex) {
		var settings = this.settings();
		var labels = this.resolveLabels(data, labelColumnIndex);
		var foundSeries = 0;
		var leftFormatted = false;
		var rightFormatted = false;
		for (var i = 0; i < settings.leftAxisFields().length; i++) {
			var fieldName = settings.leftAxisFields()[i];
			this._leftValueColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, fieldName);
			if (this._leftValueColumnIndex != -1) {
				this.processCompositeColumn($.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._leftValueColumnIndex), labels, $.ig.CategoryDataItemType.prototype.column, $.ig.YAxisLocation.prototype.left, this._leftValueColumnIndex.toString(), $.ig.DataTableResultHelper.prototype.getNameForColumnAtIndex(data, this._leftValueColumnIndex), foundSeries);
				if (!leftFormatted) {
					this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this._leftValueColumnIndex));
					leftFormatted = true;
				}
				foundSeries++;
			}
		}
		var yAxisLocation = settings.singleAxisMode() ? $.ig.YAxisLocation.prototype.left : $.ig.YAxisLocation.prototype.right;
		for (var i1 = 0; i1 < settings.rightAxisFields().length; i1++) {
			var fieldName1 = settings.rightAxisFields()[i1];
			this._rightValueColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, fieldName1);
			if (this._rightValueColumnIndex != -1) {
				this.processCompositeColumn($.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._rightValueColumnIndex), labels, $.ig.CategoryDataItemType.prototype.line, yAxisLocation, this._rightValueColumnIndex.toString(), $.ig.DataTableResultHelper.prototype.getNameForColumnAtIndex(data, this._rightValueColumnIndex), foundSeries);
				if (!settings.singleAxisMode() && !rightFormatted) {
					this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this._rightValueColumnIndex));
					rightFormatted = true;
				}
				foundSeries++;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CompositeChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	$type: new $.ig.Type('CompositeChartVisualization', $.ig.CategoryChartVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CompositeChartVisualization" />*/

/*<BeginType Name="Infragistics.FinancialChartVisualization" />*/

$.ig.util.defType('FinancialChartVisualization', 'CategoryChartVisualization', {
	__financialType: 0,
	_highColumnIndex: 0,
	_lowColumnIndex: 0,
	_openColumnIndex: 0,
	_closeColumnIndex: 0,
	init: function (type) {
		$.ig.CategoryChartVisualization.prototype.init.call(this);
		this.__financialType = type;
	},
	/*<BeginMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetHighColIndex()" />*/
	getHighColIndex: function () {
		return this._highColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetHighColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetLowColIndex()" />*/
	getLowColIndex: function () {
		return this._lowColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetLowColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetOpenColIndex()" />*/
	getOpenColIndex: function () {
		return this._openColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetOpenColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetCloseColIndex()" />*/
	getCloseColIndex: function () {
		return this._closeColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.FinancialChartVisualization::GetCloseColIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FinancialChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	processData: function (data, labelColumnIndex) {
		var settings = this.settings();
		var labels = this.resolveLabels(data, labelColumnIndex);
		this._highColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, settings.financial().financialHighField());
		this._lowColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, settings.financial().financialLowField());
		this._openColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, settings.financial().financialOpenField());
		this._closeColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, settings.financial().financialCloseField());
		var highColumnValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._highColumnIndex);
		var lowColumnValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._lowColumnIndex);
		var openColumnValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._openColumnIndex);
		var closeColumnValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._closeColumnIndex);
		var financialChart = this._chart;
		financialChart.addFinancialSeries(openColumnValues, highColumnValues, lowColumnValues, closeColumnValues, new Array(0), labels, this.__financialType, $.ig.ColorUtility.prototype.convertToNative(this.theme().cFGreenColor()), $.ig.ColorUtility.prototype.convertToNative(this.theme().cFRedColor()), $.ig.YAxisLocation.prototype.left, $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, labelColumnIndex), "financial");
	}
	/*<EndMethod Name="System.Void Infragistics.FinancialChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.FinancialChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		if ($.ig.util.cast($.ig.Array.prototype.$type, tooltipsObject) !== null) {
			var tooltips = tooltipsObject;
			var items = new $.ig.Array();
			var tooltipItem = tooltips[0];
			this._tooltipRect = tooltipItem._bounds;
			var smallestY = $.ig.truncate(tooltipItem._bounds._y);
			for (var i = 0; i < tooltips.length; i++) {
				tooltipItem = tooltips[i];
				var columnName = tooltipItem._seriesKey;
				var formattedValue = tooltipItem._valueFormatted;
				if (tooltipItem._bounds._y < smallestY) {
					smallestY = $.ig.truncate(tooltipItem._bounds._y);
					this._tooltipRect = tooltipItem._bounds;
				}
				items.add(new $.ig.TooltipPopupItem(columnName, formattedValue, null, null));
			}
			return items;
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.FinancialChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	$type: new $.ig.Type('FinancialChartVisualization', $.ig.CategoryChartVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FinancialChartVisualization" />*/

/*<BeginType Name="Infragistics.RadialBaseVisualization" />*/

$.ig.util.defType('RadialBaseVisualization', 'ChartBaseVisualization', {
	init: function () {
		$.ig.ChartBaseVisualization.prototype.init.call(this);
	},
	$type: new $.ig.Type('RadialBaseVisualization', $.ig.ChartBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RadialBaseVisualization" />*/

/*<BeginType Name="Infragistics.PolarChartVisualization" />*/

$.ig.util.defType('PolarChartVisualization', 'RadialBaseVisualization', {
	init: function () {
		$.ig.RadialBaseVisualization.prototype.init.call(this);
	},
	_xColumnIndex: 0,
	_yColumnIndex: 0,
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.PolarChartVisualization::CreateChart()" />*/
	createChart: function () {
		return new $.ig.PolarChart();
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.PolarChartVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.PolarChartVisualization::GetXColIndex()" />*/
	getXColIndex: function () {
		return this._xColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.PolarChartVisualization::GetXColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.PolarChartVisualization::GetYColIndex()" />*/
	getYColIndex: function () {
		return this._yColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.PolarChartVisualization::GetYColIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolarChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	processData: function (data, labelColumnIndex) {
		this._xColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().xAxisField());
		this._yColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().yAxisField());
		if (this._xColumnIndex == -1 || this._yColumnIndex == -1) {
			this._xColumnIndex = $.ig.DataTableResultHelper.prototype.resolveFirstNumericColumn(data);
			this._yColumnIndex = $.ig.DataTableResultHelper.prototype.resolveNextNumericColumn(data, this._xColumnIndex + 1);
		}
		if (this._xColumnIndex != -1 && this._yColumnIndex != -1) {
			var radiusValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._xColumnIndex);
			var angleValues = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this._yColumnIndex);
			var markerSizeValues = new Array(0);
			var labels = this.resolveLabels(data, labelColumnIndex);
			this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this._yColumnIndex));
			this.applyFormattingSecondaryAxisForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this._xColumnIndex));
			var title = $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, labelColumnIndex);
			var index = $.ig.NativeDataLayerUtility.prototype.isNullInt(this.settings().brushOffsetIndex()) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(this.settings().brushOffsetIndex());
			var key = "polar";
			if (index >= this.theme().chartColors().length) {
				index = (this.theme().chartColors().length - 1) % index;
			}
			var color = this.theme().chartColors()[index];
			var polarChart = this._chart;
			polarChart.addSeries_1(radiusValues, angleValues, markerSizeValues, labels, $.ig.ScatterDataItemType.prototype.scatterLine, $.ig.NativeColorUtility.prototype.convertIntToNativeColor(color), title, key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolarChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	$type: new $.ig.Type('PolarChartVisualization', $.ig.RadialBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PolarChartVisualization" />*/

/*<BeginType Name="Infragistics.RadialChartVisualization" />*/

$.ig.util.defType('RadialChartVisualization', 'RadialBaseVisualization', {
	init: function () {
		$.ig.RadialBaseVisualization.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.RadialChartVisualization::CreateChart()" />*/
	createChart: function () {
		return new $.ig.RadialChart();
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.RadialChartVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RadialChartVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	processColumn: function (data, labels, key, title, index) {
		var color = this.resolveBrushForSeriesIndex(index);
		this.addSeries(data, labels, key, title, color);
		this.setTrendLine(key, color);
	}
	/*<EndMethod Name="System.Void Infragistics.RadialChartVisualization::ProcessColumn(, , System.String, System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RadialChartVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	setTrendLine: function (seriesKey, brush) {
		var trendlineType = this.settings().trendlineType();
		if (trendlineType != $.ig.DashboardTrendlineType.prototype.none) {
			brush = $.ig.ColorUtility.prototype.darkenColor(brush, 0.2);
			var radialChart = this._chart;
			radialChart.addTrendline1(seriesKey, $.ig.VisualizationHelper.prototype.resolveTrendlineType(trendlineType), $.ig.NativeColorUtility.prototype.convertIntToNativeColor(brush));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RadialChartVisualization::SetTrendLine(System.String, System.ColorInt)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RadialChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	addSeries: function (data, labels, key, title, color) {
		var radialChart = this._chart;
		radialChart.addSeries_1(data, labels, $.ig.CategoryDataItemType.prototype.line, $.ig.NativeColorUtility.prototype.convertIntToNativeColor(color), $.ig.NativeColorUtility.prototype.convertIntToNativeColor(color), title, key);
	}
	/*<EndMethod Name="System.Void Infragistics.RadialChartVisualization::AddSeries(, , System.String, System.String, System.ColorInt)" />*/
	,
	$type: new $.ig.Type('RadialChartVisualization', $.ig.RadialBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RadialChartVisualization" />*/

/*<BeginType Name="Infragistics.ScatterChartVisualization" />*/

$.ig.util.defType('ScatterChartVisualization', 'ChartBaseVisualization', {
	__scatterChart: null,
	__xColumnLabel: null,
	__yColumnLabel: null,
	__radiusColumnLabel: null,
	__xColumnIndex: 0,
	__yColumnIndex: 0,
	__radiusColumnIndex: 0,
	__hasValidColumns: false,
	__scatterType: 0,
	init: function (scatterType) {
		$.ig.ChartBaseVisualization.prototype.init.call(this);
		this.__scatterType = scatterType;
	},
	/*<BeginMethod Name="Infragistics.ChartBase Infragistics.ScatterChartVisualization::CreateChart()" />*/
	createChart: function () {
		this.__scatterChart = new $.ig.ScatterChart();
		this.__scatterChart.minBubbleRadius(5);
		this.__scatterChart.maxBubbleRadius(50);
		this.__scatterChart.useRadiusScale(true);
		return this.__scatterChart;
	}
	/*<EndMethod Name="Infragistics.ChartBase Infragistics.ScatterChartVisualization::CreateChart()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetXColIndex()" />*/
	getXColIndex: function () {
		return this.__xColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetXColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetYColIndex()" />*/
	getYColIndex: function () {
		return this.__yColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetYColIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetRadiusColIndex()" />*/
	getRadiusColIndex: function () {
		return this.__radiusColumnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ScatterChartVisualization::GetRadiusColIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ScatterChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	processData: function (data, labelColumnIndex) {
		this.__hasValidColumns = false;
		this.__xColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().xAxisField());
		this.__yColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().yAxisField());
		this.__radiusColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().zAxisField());
		if (this.__xColumnIndex == -1 || this.__yColumnIndex == -1) {
			this.__xColumnIndex = $.ig.DataTableResultHelper.prototype.resolveFirstNumericColumn(data);
			this.__yColumnIndex = $.ig.DataTableResultHelper.prototype.resolveNextNumericColumn(data, this.__xColumnIndex + 1);
			if (this.__scatterType == $.ig.ScatterDataItemType.prototype.bubble || this.__radiusColumnIndex == -1) {
				this.__radiusColumnIndex = $.ig.DataTableResultHelper.prototype.resolveNextNumericColumn(data, this.__xColumnIndex + 2);
			}
		}
		if (this.__xColumnIndex != -1 && this.__yColumnIndex != -1) {
			this.__hasValidColumns = true;
			this.__xColumnLabel = $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, this.__xColumnIndex);
			this.__yColumnLabel = $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, this.__yColumnIndex);
			if (this.__radiusColumnIndex != -1) {
				this.__radiusColumnLabel = $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, this.__radiusColumnIndex);
			}
			var xArray = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this.__xColumnIndex);
			var yArray = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this.__yColumnIndex);
			var rArray = new Array(0);
			var labelArray = this.resolveLabels(data, labelColumnIndex);
			if (this.__radiusColumnIndex != -1) {
				rArray = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, this.__radiusColumnIndex);
			}
			this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this.__yColumnIndex));
			this.applyFormattingSecondaryAxisForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, this.__xColumnIndex));
			var index = $.ig.NativeDataLayerUtility.prototype.isNullInt(this.settings().brushOffsetIndex()) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(this.settings().brushOffsetIndex());
			if (index >= this.theme().chartColors().length) {
				index = (this.theme().chartColors().length - 1) % index;
			}
			var color = this.theme().chartColors()[index];
			this.__scatterChart.addSeries_1(xArray, yArray, rArray, labelArray, this.__scatterType, $.ig.ColorUtility.prototype.convertToNative(color), $.ig.XAxisLocation.prototype.bottom, $.ig.YAxisLocation.prototype.left, $.ig.DataTableResultHelper.prototype.getLabelForColumnAtIndex(data, labelColumnIndex), "scatter");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ScatterChartVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ScatterChartVisualization::SetAxisLabels()" />*/
	setAxisLabels: function () {
		if (this.__hasValidColumns) {
			this.__scatterChart.xAxisBottomTitle(this.__xColumnLabel);
			this.__scatterChart.yAxisLeftTitle(this.__yColumnLabel);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ScatterChartVisualization::SetAxisLabels()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ScatterChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	extractToolTipInfo: function (tooltipsObject) {
		if ($.ig.util.cast($.ig.Array.prototype.$type, tooltipsObject) !== null) {
			var tooltips = tooltipsObject;
			var items = new $.ig.Array();
			if (tooltips.length > 0) {
				var tooltipItem = tooltips[0];
				this._tooltipRect = tooltipItem._bounds;
				items.add(new $.ig.TooltipPopupItem(this.__xColumnLabel, $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, this.__xColumnIndex), null, null));
				items.add(new $.ig.TooltipPopupItem(this.__yColumnLabel, $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, this.__yColumnIndex), null, null));
				if (this.__scatterType == $.ig.ScatterDataItemType.prototype.bubble && this.__radiusColumnIndex != -1) {
					items.add(new $.ig.TooltipPopupItem(this.__radiusColumnLabel, $.ig.DataTableResultHelper.prototype.getCellFormattedValue(this._widgetWrapper._data, tooltipItem._index, this.__radiusColumnIndex), null, null));
				}
				return items;
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ScatterChartVisualization::ExtractToolTipInfo(System.Object)" />*/
	,
	$type: new $.ig.Type('ScatterChartVisualization', $.ig.ChartBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ScatterChartVisualization" />*/

/*<BeginType Name="Infragistics.SliceBaseVisualization" />*/

$.ig.util.defType('SliceBaseVisualization', 'BaseVisualization', {
	__baseChart: null,
	/*<BeginMethod Name="Infragistics.SliceChartBase Infragistics.SliceBaseVisualization::CreateChart()" />*/
	createChart: function () {
	}
	/*<EndMethod Name="Infragistics.SliceChartBase Infragistics.SliceBaseVisualization::CreateChart()" />*/
	,
	init: function () {
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__baseChart = this.createChart();
		this.addSubview(this.__baseChart);
	},
	/*<BeginProperty Name="System.Int32 Infragistics.SliceBaseVisualization::MaxNumberOfSlices()" />*/
	maxNumberOfSlices: function () {
		return 20;
	}
	/*<EndProperty Name="System.Int32 Infragistics.SliceBaseVisualization::MaxNumberOfSlices()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.BaseVisualization.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__baseChart, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
		var currentTheme = this.theme();
		this.__baseChart.fontColor(currentTheme.resolveNativeColor(currentTheme.foregroundColor()));
		this.__baseChart.labelMaxFontSize(currentTheme.copyFontSize());
		this.__baseChart.labelMinFontSize($.ig.truncate((currentTheme.copyFontSize() * 0.9)));
		this.__baseChart.othersSliceColor(currentTheme.resolveNativeColor(currentTheme.outlineColor()));
		this.__baseChart.applyColorsToNonVisibleSlices(false);
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplyTheme()" />*/
	,
	/*<BeginProperty Name="Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings Infragistics.SliceBaseVisualization::Settings()" />*/
	settings: function () {
		return this._widgetWrapper._widget.visualizationSettings();
	}
	/*<EndProperty Name="Infragistics.ReportPlus.DashboardModel.ChartVisualizationSettings Infragistics.SliceBaseVisualization::Settings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplySettings()" />*/
	applySettings: function () {
		$.ig.BaseVisualization.prototype.applySettings.call(this);
		var vizSettings = this.settings();
		this.__baseChart.legendLocation(vizSettings.showLegends() ? $.ig.LegendLocation.prototype.top : $.ig.LegendLocation.prototype.none);
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplySettings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplyFormattingForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	applyFormattingForColumn: function (col) {
		var spec = $.ig.DataTableResultHelper.prototype.resolveNumberSpec(col);
		this.__baseChart.valueFormatFractionDigits(spec.decimalDigits());
		this.__baseChart.valueFormatNegativeMode(spec.negativeFormat() == $.ig.DashboardNegativeFormatType.prototype.parenthesis ? $.ig.FormatSettingsNegativeNumberMode.prototype.parens : $.ig.FormatSettingsNegativeNumberMode.prototype.minus);
		this.__baseChart.valueFormatType($.ig.VisualizationHelper.prototype.resolveFormattingType(spec.formatType()));
		this.__baseChart.valueFormatUseMKFormatting(spec.applyMkFormat());
		this.__baseChart.valueFormatCurrencySymbol(spec.currencySymbol() == null ? "$" : spec.currencySymbol());
		this.__baseChart.valueFormatShowGroupingSeparator(spec.showGroupingSeparator());
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::ApplyFormattingForColumn(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::ReloadData()" />*/
	reloadData: function () {
		var $self = this;
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		this.__baseChart.clearData();
		var data = this._widgetWrapper._data;
		if (data != null) {
			var settings = this.settings();
			var labelColumnIndex = this.resolveLabelColumnIndex(data, settings.labelField());
			var valueColumnIndex = -1;
			if (settings.series() != null && settings.series().length > 0) {
				var seriesCount = settings.series().length;
				for (var i = 0; i < seriesCount; i++) {
					var fieldName = settings.series()[i];
					var colIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, fieldName);
					if (colIndex < 0) {
						continue;
					}
					valueColumnIndex = colIndex;
					break;
				}
			}
			if (valueColumnIndex == -1) {
				var colCount = Math.min($.ig.DataTableResultHelper.prototype.getColumnCount(data), this.maxNumberOfSeries());
				for (var i1 = 0; i1 < colCount; i1++) {
					var colType = $.ig.DataTableResultHelper.prototype.getColumnTypeAtIndex(data, i1);
					if (colType != $.ig.DashboardDataType.prototype.number) {
						continue;
					}
					if (i1 == labelColumnIndex) {
						continue;
					}
					valueColumnIndex = i1;
					break;
				}
			}
			if (labelColumnIndex == -1 || valueColumnIndex == -1) {
			}
			this.applyFormattingForColumn($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, valueColumnIndex));
			var labelType = $.ig.SliceLabelType.prototype.value;
			switch (settings.labelDisplayMode()) {
				case $.ig.DashboardLabelDisplayMode.prototype.value:
					labelType = $.ig.SliceLabelType.prototype.value;
					break;
				case $.ig.DashboardLabelDisplayMode.prototype.percentage:
					labelType = $.ig.SliceLabelType.prototype.percentage;
					break;
				case $.ig.DashboardLabelDisplayMode.prototype.valueAndPercentage:
					labelType = $.ig.SliceLabelType.prototype.valueAndPercentage;
					break;
			}
			this.__baseChart.labelType(labelType);
			if (this._widgetWrapper._alreadyLoaded) {
				this.processData(data, labelColumnIndex, valueColumnIndex);
				this.__baseChart.update(true);
			} else {
				this.__baseChart.animate(function () {
					$self.processData(data, labelColumnIndex, valueColumnIndex);
				}, this.visualizationAnimationDuration());
			}
		} else {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SliceBaseVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	processData: function (data, labelColIndex, valueColIndex) {
		var labels = this.resolveLabels(data, labelColIndex);
		var vals = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, valueColIndex);
		var maxCount = this.maxNumberOfSlices();
		if (vals.length >= maxCount) {
			vals = new Array(maxCount);
			for (var i = 0; i < maxCount; i++) {
				vals[i] = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(data, valueColIndex)[i];
			}
		}
		this.__baseChart.setRawData(vals, labels);
		var count = vals.length;
		var colors = new $.ig.Array();
		var offset = $.ig.NativeDataLayerUtility.prototype.isNullInt(this.settings().brushOffsetIndex()) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(this.settings().brushOffsetIndex());
		for (var i1 = 0; i1 < count; i1++) {
			colors.add(this.theme().getBrushAtIndex(i1, offset, 0.20000000298023224));
		}
		this.__baseChart.setColors(colors);
	}
	/*<EndMethod Name="System.Void Infragistics.SliceBaseVisualization::ProcessData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SliceBaseVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SliceBaseVisualization" />*/

/*<BeginType Name="Infragistics.PieChartVisualization" />*/

$.ig.util.defType('PieChartVisualization', 'SliceBaseVisualization', {
	init: function () {
		$.ig.SliceBaseVisualization.prototype.init.call(this);
	},
	__chart: null,
	/*<BeginMethod Name="Infragistics.SliceChartBase Infragistics.PieChartVisualization::CreateChart()" />*/
	createChart: function () {
		this.__chart = new $.ig.PieChart();
		this.__chart.labelLocation($.ig.PieChartLabelLocation.prototype.outsideCorner);
		this.__chart.explodedSliceDisplayStyle($.ig.ExplodedDisplayStyle.prototype.awayFromCenter);
		return this.__chart;
	}
	/*<EndMethod Name="Infragistics.SliceChartBase Infragistics.PieChartVisualization::CreateChart()" />*/
	,
	$type: new $.ig.Type('PieChartVisualization', $.ig.SliceBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PieChartVisualization" />*/

/*<BeginType Name="Infragistics.DoughnutChartVisualization" />*/

$.ig.util.defType('DoughnutChartVisualization', 'PieChartVisualization', {
	init: function () {
		$.ig.PieChartVisualization.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.SliceChartBase Infragistics.DoughnutChartVisualization::CreateChart()" />*/
	createChart: function () {
		var chart = $.ig.PieChartVisualization.prototype.createChart.call(this);
		chart.innerExtent(0.6);
		return chart;
	}
	/*<EndMethod Name="Infragistics.SliceChartBase Infragistics.DoughnutChartVisualization::CreateChart()" />*/
	,
	$type: new $.ig.Type('DoughnutChartVisualization', $.ig.PieChartVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DoughnutChartVisualization" />*/

/*<BeginType Name="Infragistics.FunnelChartVisualization" />*/

$.ig.util.defType('FunnelChartVisualization', 'SliceBaseVisualization', {
	init: function () {
		$.ig.SliceBaseVisualization.prototype.init.call(this);
	},
	__chart: null,
	/*<BeginMethod Name="Infragistics.SliceChartBase Infragistics.FunnelChartVisualization::CreateChart()" />*/
	createChart: function () {
		this.__chart = new $.ig.FunnelChart();
		return this.__chart;
	}
	/*<EndMethod Name="Infragistics.SliceChartBase Infragistics.FunnelChartVisualization::CreateChart()" />*/
	,
	$type: new $.ig.Type('FunnelChartVisualization', $.ig.SliceBaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FunnelChartVisualization" />*/

/*<BeginType Name="Infragistics.MinMaxRange" />*/

$.ig.util.defType('MinMaxRange', 'Object', {
	_min: 0,
	_max: 0,
	init: function (minVal, maxVal) {
		$.ig.Object.prototype.init.call(this);
		this._min = minVal;
		this._max = maxVal;
	},
	$type: new $.ig.Type('MinMaxRange', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.MinMaxRange" />*/

/*<BeginType Name="Infragistics.DataTableResultHelper" />*/

$.ig.util.defType('DataTableResultHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveColumnIndexForFieldName(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String)" />*/
	resolveColumnIndexForFieldName: function (data, fieldName) {
		if (fieldName != null) {
			var count = data.table().columns().length;
			for (var i = 0; i < count; i++) {
				var colName = (data.table().columns()[i]).name();
				if (colName.toLowerCase().equals(fieldName.toLowerCase())) {
					return i;
				}
			}
			for (var i1 = 0; i1 < count; i1++) {
				var colName1 = (data.table().columns()[i1]).name();
				if (colName1.toLowerCase().contains(fieldName.toLowerCase())) {
					return i1;
				}
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveColumnIndexForFieldName(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveFirstNonNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	resolveFirstNonNumericColumn: function (data) {
		var count = data.table().columns().length;
		for (var i = 0; i < count; i++) {
			if ((data.table().columns()[i]).type() != $.ig.DashboardDataType.prototype.number) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveFirstNonNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveFirstNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	resolveFirstNumericColumn: function (data) {
		var count = data.table().columns().length;
		for (var i = 0; i < count; i++) {
			if ((data.table().columns()[i]).type() == $.ig.DashboardDataType.prototype.number) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveFirstNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveNextNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	resolveNextNumericColumn: function (data, startingIndex) {
		var count = data.table().columns().length;
		for (var i = startingIndex; i < count; i++) {
			if ((data.table().columns()[i]).type() == $.ig.DashboardDataType.prototype.number) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::ResolveNextNumericColumn(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::FindMinMax(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Boolean)" />*/
	findMinMax: function (data, colIndex, excludeLastRow) {
		if ($.ig.DataTableResultHelper.prototype.getColumnCount(data) > colIndex) {
			var col = data.table().columns()[colIndex];
			if (col.type() != $.ig.DashboardDataType.prototype.number) {
				return null;
			}
			var max = -1.7976931348623157E+308;
			var min = 1.7976931348623157E+308;
			var rowCount = data.table().rowCount();
			for (var i = 0; i < rowCount; i++) {
				if (excludeLastRow && i == rowCount - 1) {
					continue;
				}
				var number = data.table().getValue(i, colIndex);
				if ($.ig.util.isNaN(number)) {
					continue;
				}
				min = Math.min(number, min);
				max = Math.max(number, max);
			}
			if (min == max && min > 0) {
				min = 0;
			}
			return new $.ig.MinMaxRange(min, max);
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::FindMinMax(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::FindMinMaxWithBounds(Infragistics.ReportPlus.DataLayer.IDataTableResult, Infragistics.ReportPlus.DashboardModel.Bound, Infragistics.ReportPlus.DashboardModel.Bound, System.Int32)" />*/
	findMinMaxWithBounds: function (data, min, max, colIndex) {
		if ($.ig.DataTableResultHelper.prototype.getColumnCount(data) > colIndex) {
			if ($.ig.DataTableResultHelper.prototype.getColumnTypeAtIndex(data, colIndex) != $.ig.DashboardDataType.prototype.number) {
				return null;
			}
			var isMaxNull = max == null || $.ig.NativeDataLayerUtility.prototype.isNullDouble(max.value());
			var isMinNull = min == null || $.ig.NativeDataLayerUtility.prototype.isNullDouble(min.value());
			var minVal = (isMinNull) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapDouble(min.value());
			var maxVal = (isMaxNull) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapDouble(max.value());
			var areEqual = (isMinNull && isMaxNull) || (minVal == maxVal);
			if ((isMinNull || min.valueType() != $.ig.DashboardBoundValueType.prototype.numberValue) || (isMaxNull || max.valueType() != $.ig.DashboardBoundValueType.prototype.numberValue) || areEqual) {
				var dataRange = $.ig.DataTableResultHelper.prototype.findMinMax(data, colIndex, false);
				if (areEqual) {
					return dataRange;
				}
				if (min.valueType() == $.ig.DashboardBoundValueType.prototype.numberValue && !isMinNull) {
					dataRange._min = minVal;
				}
				if (max.valueType() == $.ig.DashboardBoundValueType.prototype.numberValue && !isMaxNull) {
					dataRange._max = maxVal;
				}
				return dataRange;
			} else {
				return new $.ig.MinMaxRange(minVal, maxVal);
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::FindMinMaxWithBounds(Infragistics.ReportPlus.DataLayer.IDataTableResult, Infragistics.ReportPlus.DashboardModel.Bound, Infragistics.ReportPlus.DashboardModel.Bound, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.ReportPlus.DashboardModel.NumberFormattingSpec Infragistics.DataTableResultHelper::ResolveNumberSpec(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	resolveNumberSpec: function (col) {
		var spec = null;
		if (col.formatting() != null && col.type() == $.ig.DashboardDataType.prototype.number) {
			spec = col.formatting();
		}
		if (spec == null) {
			spec = new $.ig.NumberFormattingSpec(0);
			spec.formatType($.ig.DashboardNumberFormattingType.prototype.number);
			spec.decimalDigits(2);
			spec.currencySymbol("$");
			spec.applyMkFormat(true);
		}
		return spec;
	}
	/*<EndMethod Name="Infragistics.ReportPlus.DashboardModel.NumberFormattingSpec Infragistics.DataTableResultHelper::ResolveNumberSpec(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	,
	/*<BeginMethod Name="Infragistics.ReportPlus.DashboardModel.BandBase Infragistics.DataTableResultHelper::FindBandInList(System.Collections.ArrayList, System.Double, Infragistics.MinMaxRange)" />*/
	findBandInList: function (bands, val, range) {
		if (bands == null || range == null) {
			return null;
		}
		var min = range._min;
		var a, b;
		a = bands[0];
		b = bands[1];
		var ar = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(a, range, range);
		var br = $.ig.DataTableResultHelper.prototype.resolveRangeForBand(b, new $.ig.MinMaxRange(min, ar._min), range);
		var cr = new $.ig.MinMaxRange(min, br._min);
		if (val < cr._max) {
			return bands[2];
		} else if (val < br._max) {
			return bands[1];
		} else {
			return bands[0];
		}
	}
	/*<EndMethod Name="Infragistics.ReportPlus.DashboardModel.BandBase Infragistics.DataTableResultHelper::FindBandInList(System.Collections.ArrayList, System.Double, Infragistics.MinMaxRange)" />*/
	,
	/*<BeginMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::ResolveRangeForBand(Infragistics.ReportPlus.DashboardModel.BandBase, Infragistics.MinMaxRange, Infragistics.MinMaxRange)" />*/
	resolveRangeForBand: function (band, bandRange, fullRange) {
		var min = bandRange._min;
		var max = bandRange._max;
		var delta = fullRange._max - fullRange._min;
		if ($.ig.NativeDataLayerUtility.prototype.isNullDouble(band.value())) {
			return new $.ig.MinMaxRange(min, max);
		} else if (band.type() == $.ig.DashboardBandType.prototype.percentage) {
			return new $.ig.MinMaxRange(($.ig.NativeDataLayerUtility.prototype.unwrapDouble(band.value()) * delta / 100) + min, max);
		} else {
			return new $.ig.MinMaxRange($.ig.NativeDataLayerUtility.prototype.unwrapDouble(band.value()), max);
		}
	}
	/*<EndMethod Name="Infragistics.MinMaxRange Infragistics.DataTableResultHelper::ResolveRangeForBand(Infragistics.ReportPlus.DashboardModel.BandBase, Infragistics.MinMaxRange, Infragistics.MinMaxRange)" />*/
	,
	/*<BeginMethod Name="Infragistics.ReportPlus.DataLayer.DataColumn Infragistics.DataTableResultHelper::GetDataColumnForIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getDataColumnForIndex: function (data, index) {
		return data.table().getDataColumn(index);
	}
	/*<EndMethod Name="Infragistics.ReportPlus.DataLayer.DataColumn Infragistics.DataTableResultHelper::GetDataColumnForIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DataTableResultHelper::GetLabelForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getLabelForColumnAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getDataColumnForIndex(data, index)._label;
	}
	/*<EndMethod Name="System.String Infragistics.DataTableResultHelper::GetLabelForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.DataTableResultHelper::GetCellsForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getCellsForColumnAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getDataColumnForIndex(data, index)._cells;
	}
	/*<EndMethod Name=" Infragistics.DataTableResultHelper::GetCellsForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.DataTableResultHelper::GetLabelsForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getLabelsForColumnAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getDataColumnForIndex(data, index)._labels;
	}
	/*<EndMethod Name=" Infragistics.DataTableResultHelper::GetLabelsForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DataTableResultHelper::GetNameForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getNameForColumnAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getDataColumnForIndex(data, index)._name;
	}
	/*<EndMethod Name="System.String Infragistics.DataTableResultHelper::GetNameForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.DataTableResultHelper::GetValuesForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getValuesForColumnAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getDataColumnForIndex(data, index)._values;
	}
	/*<EndMethod Name=" Infragistics.DataTableResultHelper::GetValuesForColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DataTableResultHelper::GetCellFormattedValue(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	getCellFormattedValue: function (data, row, column) {
		return data.table().getFormattedValue(row, column);
	}
	/*<EndMethod Name="System.String Infragistics.DataTableResultHelper::GetCellFormattedValue(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.DataTableResultHelper::GetCellValue(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	getCellValue: function (data, row, column) {
		return data.table().getCell(row, column).value();
	}
	/*<EndMethod Name="System.Object Infragistics.DataTableResultHelper::GetCellValue(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.ReportPlus.DataLayer.TableColumn Infragistics.DataTableResultHelper::GetColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getColumnAtIndex: function (data, index) {
		return (data.table().columns()[index]);
	}
	/*<EndMethod Name="Infragistics.ReportPlus.DataLayer.TableColumn Infragistics.DataTableResultHelper::GetColumnAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.ReportPlus.DashboardModel.DashboardDataType Infragistics.DataTableResultHelper::GetColumnTypeAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	getColumnTypeAtIndex: function (data, index) {
		return $.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, index).type();
	}
	/*<EndMethod Name="Infragistics.ReportPlus.DashboardModel.DashboardDataType Infragistics.DataTableResultHelper::GetColumnTypeAtIndex(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::GetRowCount(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	getRowCount: function (data) {
		return data.table().rowCount();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::GetRowCount(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DataTableResultHelper::GetColumnCount(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	getColumnCount: function (data) {
		return data.table().columnCount();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DataTableResultHelper::GetColumnCount(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	$type: new $.ig.Type('DataTableResultHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DataTableResultHelper" />*/

/*<BeginType Name="Infragistics.BaseGaugeVisualization" />*/

$.ig.util.defType('BaseGaugeVisualization', 'BaseVisualization', {
	__baseGauge: null,
	init: function () {
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__baseGauge = this.createGauge();
		this.addSubview(this.__baseGauge);
	},
	/*<BeginMethod Name="Infragistics.RPGaugeBase Infragistics.BaseGaugeVisualization::CreateGauge()" />*/
	createGauge: function () {
	}
	/*<EndMethod Name="Infragistics.RPGaugeBase Infragistics.BaseGaugeVisualization::CreateGauge()" />*/
	,
	/*<BeginProperty Name="Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings Infragistics.BaseGaugeVisualization::Settings()" />*/
	settings: function () {
		return this._widgetWrapper._widget.visualizationSettings();
	}
	/*<EndProperty Name="Infragistics.ReportPlus.DashboardModel.GaugeVisualizationSettings Infragistics.BaseGaugeVisualization::Settings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.BaseVisualization.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__baseGauge, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
		this.__baseGauge.labelMaxFontSize(this.theme().valueFontSizeL());
		this.__baseGauge.fontName($.ig.NativeUIUtility.prototype.utility().resolveNativeDrawingFont(this.theme().valueFontFile()));
		this.__baseGauge.textColor($.ig.ColorUtility.prototype.convertToNative(this.theme().foregroundColor()));
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::ReloadData()" />*/
	reloadData: function () {
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		this.resetGauge();
		var data = this._widgetWrapper._data;
		if (data != null) {
			var valColIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(data, this.settings().valueColumnName());
			if (valColIndex != -1) {
				this.applyGaugeFormatting($.ig.DataTableResultHelper.prototype.getColumnAtIndex(data, valColIndex));
				this.setGaugeWithColumn(valColIndex, !this._widgetWrapper._alreadyLoaded);
			} else {
			}
		} else {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::ResetGauge()" />*/
	resetGauge: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::ResetGauge()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	setGaugeWithColumn: function (colIndex, aniamte) {
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BaseGaugeVisualization::ApplyGaugeFormatting(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	applyGaugeFormatting: function (valColumn) {
		var spec = $.ig.DataTableResultHelper.prototype.resolveNumberSpec(valColumn);
		this.__baseGauge.valueFormatFractionDigits(spec.decimalDigits());
		this.__baseGauge.valueFormatNegativeMode(spec.negativeFormat() == $.ig.DashboardNegativeFormatType.prototype.parenthesis ? $.ig.FormatSettingsNegativeNumberMode.prototype.parens : $.ig.FormatSettingsNegativeNumberMode.prototype.minus);
		this.__baseGauge.valueFormatType($.ig.VisualizationHelper.prototype.resolveFormattingType(spec.formatType()));
		this.__baseGauge.valueFormatUseMKFormatting(spec.applyMkFormat());
		this.__baseGauge.valueFormatCurrencySymbol(spec.currencySymbol() == null ? "$" : spec.currencySymbol());
		this.__baseGauge.valueFormatShowGroupingSeparator(spec.showGroupingSeparator());
	}
	/*<EndMethod Name="System.Void Infragistics.BaseGaugeVisualization::ApplyGaugeFormatting(Infragistics.ReportPlus.DataLayer.TableColumn)" />*/
	,
	$type: new $.ig.Type('BaseGaugeVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BaseGaugeVisualization" />*/

/*<BeginType Name="Infragistics.LabelGaugeVisualization" />*/

$.ig.util.defType('LabelGaugeVisualization', 'BaseGaugeVisualization', {
	init: function () {
		$.ig.BaseGaugeVisualization.prototype.init.call(this);
	},
	__gauge: null,
	/*<BeginMethod Name="Infragistics.RPGaugeBase Infragistics.LabelGaugeVisualization::CreateGauge()" />*/
	createGauge: function () {
		this.__gauge = new $.ig.RPLabelGauge();
		return this.__gauge;
	}
	/*<EndMethod Name="Infragistics.RPGaugeBase Infragistics.LabelGaugeVisualization::CreateGauge()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LabelGaugeVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseGaugeVisualization.prototype.applyTheme.call(this);
		this.__gauge.labelMinFontSize(this.theme().valueFontSizeS());
	}
	/*<EndMethod Name="System.Void Infragistics.LabelGaugeVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LabelGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	setGaugeWithColumn: function (colIndex, animate) {
		var $self = this;
		this.__gauge.value(0);
		var number = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(this._widgetWrapper._data, colIndex)[0];
		var shape = $.ig.GaugeShape.prototype.none;
		if (this.settings().gaugeBands() != null) {
			var range = $.ig.DataTableResultHelper.prototype.findMinMaxWithBounds(this._widgetWrapper._data, this.settings().minimum(), this.settings().maximum(), colIndex);
			var band = $.ig.DataTableResultHelper.prototype.findBandInList(this.settings().gaugeBands(), number, range);
			if (band != null) {
				this.__gauge.valueColor(this.theme().resolveNativeColor($.ig.VisualizationHelper.prototype.resolveBandColor(band.color(), this.theme())));
				shape = this.convertModelShapeToGaugeShape(band.shape());
			}
		}
		if (animate) {
			this.__gauge.animate(function () {
				$self.__gauge.value(number);
				$self.__gauge.shape(shape);
			}, this.visualizationAnimationDuration());
		} else {
			this.__gauge.value(number);
			this.__gauge.shape(shape);
			this.__gauge.update(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.LabelGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.GaugeShape Infragistics.LabelGaugeVisualization::ConvertModelShapeToGaugeShape(Infragistics.ReportPlus.DashboardModel.DashboardShapeType)" />*/
	convertModelShapeToGaugeShape: function (modelShape) {
		switch (modelShape) {
			case $.ig.DashboardShapeType.prototype.dash: return $.ig.GaugeShape.prototype.dash;
			case $.ig.DashboardShapeType.prototype.circle: return $.ig.GaugeShape.prototype.circle;
			case $.ig.DashboardShapeType.prototype.arrowUp: return $.ig.GaugeShape.prototype.arrowUp;
			case $.ig.DashboardShapeType.prototype.arrowDown: return $.ig.GaugeShape.prototype.arrowDown;
			case $.ig.DashboardShapeType.prototype.arrowLeft: return $.ig.GaugeShape.prototype.arrowLeft;
			case $.ig.DashboardShapeType.prototype.arrowRight: return $.ig.GaugeShape.prototype.arrowRight;
			default: return $.ig.GaugeShape.prototype.none;
		}
	}
	/*<EndMethod Name="Infragistics.GaugeShape Infragistics.LabelGaugeVisualization::ConvertModelShapeToGaugeShape(Infragistics.ReportPlus.DashboardModel.DashboardShapeType)" />*/
	,
	$type: new $.ig.Type('LabelGaugeVisualization', $.ig.BaseGaugeVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LabelGaugeVisualization" />*/

/*<BeginType Name="Infragistics.RadialGaugeVisualization" />*/

$.ig.util.defType('RadialGaugeVisualization', 'BaseGaugeVisualization', {
	init: function () {
		$.ig.BaseGaugeVisualization.prototype.init.call(this);
	},
	__gauge: null,
	/*<BeginMethod Name="Infragistics.RPGaugeBase Infragistics.RadialGaugeVisualization::CreateGauge()" />*/
	createGauge: function () {
		this.__gauge = new $.ig.RPGauge();
		return this.__gauge;
	}
	/*<EndMethod Name="Infragistics.RPGaugeBase Infragistics.RadialGaugeVisualization::CreateGauge()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RadialGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	setGaugeWithColumn: function (colIndex, animate) {
		var $self = this;
		var range = $.ig.DataTableResultHelper.prototype.findMinMaxWithBounds(this._widgetWrapper._data, this.settings().minimum(), this.settings().maximum(), colIndex);
		var number = $.ig.DataTableResultHelper.prototype.getValuesForColumnAtIndex(this._widgetWrapper._data, colIndex)[0];
		this.__gauge.value(range._min);
		var band = $.ig.DataTableResultHelper.prototype.findBandInList(this.settings().gaugeBands(), number, range);
		this.__gauge.min(range._min);
		this.__gauge.max(range._max);
		if (animate) {
			this.__gauge.animate(function () {
				$self.__gauge.valueColor($self.theme().resolveNativeColor($.ig.VisualizationHelper.prototype.resolveBandColor(band.color(), $self.theme())));
				$self.__gauge.value(number);
			}, this.visualizationAnimationDuration());
		} else {
			this.__gauge.valueColor(this.theme().resolveNativeColor($.ig.VisualizationHelper.prototype.resolveBandColor(band.color(), this.theme())));
			this.__gauge.value(number);
			this.__gauge.update(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RadialGaugeVisualization::SetGaugeWithColumn(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('RadialGaugeVisualization', $.ig.BaseGaugeVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RadialGaugeVisualization" />*/

/*<BeginType Name="Infragistics.GridVisualization" />*/

$.ig.util.defType('GridVisualization', 'BaseVisualization', {
	__col: null,
	__dsh: null,
	__gridView: null,
	init: function () {
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__gridView = new $.ig.CPGridView();
		this.addSubview(this.__gridView);
		this.__dsh = new $.ig.GridVisualizationDataSourceHelper();
		this.__gridView.setDataSource(this.__dsh);
	},
	/*<BeginMethod Name="System.Void Infragistics.GridVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
	}
	/*<EndMethod Name="System.Void Infragistics.GridVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.GridVisualization::ReloadData()" />*/
	reloadData: function () {
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		var data = this._widgetWrapper._data;
		if (data != null) {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.GridVisualization::ReloadData()" />*/
	,
	$type: new $.ig.Type('GridVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GridVisualization" />*/

/*<BeginType Name="Infragistics.GridVisualizationCell" />*/

$.ig.util.defType('GridVisualizationCell', 'CPGridViewCell', {
	init: function (identifier) {
		$.ig.CPGridViewCell.prototype.init.call(this, identifier);
	},
	$type: new $.ig.Type('GridVisualizationCell', $.ig.CPGridViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GridVisualizationCell" />*/

/*<BeginType Name="Infragistics.GridVisualizationColumn" />*/

$.ig.util.defType('GridVisualizationColumn', 'CPGridViewColumnDefinition', {
	init: function () {
		$.ig.CPGridViewColumnDefinition.prototype.init.call(this, 0, "Col");
	},
	$type: new $.ig.Type('GridVisualizationColumn', $.ig.CPGridViewColumnDefinition.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GridVisualizationColumn" />*/

/*<BeginType Name="Infragistics.GridVisualizationDataSourceHelper" />*/

$.ig.util.defType('GridVisualizationDataSourceHelper', 'CPGridViewDatasourceHelper', {
	init: function () {
		$.ig.CPGridViewDatasourceHelper.prototype.init.call(this);
	},
	__dataTable: null,
	/*<BeginMethod Name="System.Int32 Infragistics.GridVisualizationDataSourceHelper::GetNumberOfRowsInSection(System.Int32)" />*/
	getNumberOfRowsInSection: function (section) {
		return this.__dataTable.table().rowCount();
	}
	/*<EndMethod Name="System.Int32 Infragistics.GridVisualizationDataSourceHelper::GetNumberOfRowsInSection(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.GridVisualizationDataSourceHelper::SetDataTable(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	setDataTable: function (data) {
		this.__dataTable = data;
	}
	/*<EndMethod Name="System.Void Infragistics.GridVisualizationDataSourceHelper::SetDataTable(Infragistics.ReportPlus.DataLayer.IDataTableResult)" />*/
	,
	$type: new $.ig.Type('GridVisualizationDataSourceHelper', $.ig.CPGridViewDatasourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GridVisualizationDataSourceHelper" />*/

/*<BeginType Name="Infragistics.GridVisualizationHeaderCell" />*/

$.ig.util.defType('GridVisualizationHeaderCell', 'CPGridViewHeaderCell', {
	init: function (identifier) {
		$.ig.CPGridViewHeaderCell.prototype.init.call(this, identifier);
	},
	$type: new $.ig.Type('GridVisualizationHeaderCell', $.ig.CPGridViewHeaderCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GridVisualizationHeaderCell" />*/

/*<BeginType Name="Infragistics.SingleRowVisualization" />*/

$.ig.util.defType('SingleRowVisualization', 'BaseVisualization', {
	__gridView: null,
	__dsh: null,
	__col: null,
	init: function () {
		var $self = this;
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__gridView = new $.ig.CPGridView();
		this.__gridView._headerHeight = 0;
		this.__gridView._rowSeparatorHeight = 0;
		this.__gridView._rowSpacing = $.ig.NativeUIUtility.prototype.utility().densify(5);
		this.addSubview(this.__gridView);
		this.__col = new $.ig.SingleRowVisualizationColumn();
		this.__dsh = new $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper(0, this.__col);
		this.__gridView.setDataSource(this.__dsh);
		this.__dsh._rowHeightListener = function (r, s) {
			return $self.resolveHeightForRow(r);
		};
	},
	/*<BeginMethod Name="System.Void Infragistics.SingleRowVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
		this.__col._theme = this.theme();
	}
	/*<EndMethod Name="System.Void Infragistics.SingleRowVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SingleRowVisualization::ResolveHeightForRow(System.Int32)" />*/
	resolveHeightForRow: function (row) {
		return 50;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SingleRowVisualization::ResolveHeightForRow(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SingleRowVisualization::ReloadData()" />*/
	reloadData: function () {
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		var data = this._widgetWrapper._data;
		if (data != null) {
			var list = new $.ig.Array();
			var count = $.ig.DataTableResultHelper.prototype.getColumnCount(data);
			for (var i = 0; i < count; i++) {
				list.add(data.table().getDataColumn(i));
			}
			this.__dsh.data(list);
		} else {
			this.__dsh.data(null);
		}
		this.__gridView.updateData(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SingleRowVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SingleRowVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.BaseVisualization.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__gridView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SingleRowVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SingleRowVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SingleRowVisualization" />*/

/*<BeginType Name="Infragistics.SingleRowVisualizationCell" />*/

$.ig.util.defType('SingleRowVisualizationCell', 'CPGridViewCell', {
	_theme: null,
	__colorArea: null,
	__secondLabel: null,
	init: function (identifier) {
		$.ig.CPGridViewCell.prototype.init.call(this, identifier);
		this.__colorArea = new $.ig.CPViewBase();
		this.addSubview(this.__colorArea);
		this.__secondLabel = new $.ig.CPLabel();
		this.__secondLabel.setTextAlignment($.ig.TextAlignment.prototype.right);
		this.addSubview(this.__secondLabel);
	},
	/*<BeginMethod Name="System.Void Infragistics.SingleRowVisualizationCell::SetData(Infragistics.ReportPlus.DataLayer.DataColumn)" />*/
	setData: function (dataCol) {
		this.textLabel().setText(dataCol._label);
		if (dataCol._type == $.ig.DashboardDataType.prototype.number) {
			this.__secondLabel.setText($.ig.NativeUtility.prototype.utility().convertNumberToString(dataCol._values[0], 0, false));
		} else if (dataCol._cells != null) {
			this.__secondLabel.setText((dataCol._cells[0]).formattedValue());
		} else if (dataCol._labels != null && dataCol._type == $.ig.DashboardDataType.prototype.string1) {
			this.__secondLabel.setText(dataCol._labels[0]);
		}
		if (this.currentHeight() > 0) {
			this.sizeChanged(this.currentWidth(), this.currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SingleRowVisualizationCell::SetData(Infragistics.ReportPlus.DataLayer.DataColumn)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SingleRowVisualizationCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCell.prototype.sizeChanged.call(this, w, h);
		this.setBackgroundColor(this._theme.resolveNativeColor(this._theme.singleRowBackgroundColor()));
		this.textLabel().setTextColor(this._theme.resolveNativeColor(this._theme.foregroundColor()));
		this.__secondLabel.setTextColor(this._theme.resolveNativeColor(this._theme.foregroundColor()));
		this.__colorArea.setBackgroundColor(this._theme.resolveNativeColor(this._theme.singleRowSideBarColor()));
		var fontSize = $.ig.truncate((this._theme.copyFontSize() * 0.95));
		this.textLabel().setFont(fontSize, this._theme.resolveNativeFont(this._theme.valueFontFile()));
		this.__secondLabel.setFont($.ig.truncate((fontSize * 1.5)), this._theme.resolveNativeFont(this._theme.valueFontFile()));
		var colorAreaWidth = $.ig.NativeUIUtility.prototype.utility().densify(10);
		this.measureView(this.__colorArea, 0, 0, colorAreaWidth, h);
		var padding = $.ig.NativeUIUtility.prototype.utility().densify(5);
		var left = padding + colorAreaWidth;
		this.textLabel().calculateSizeToFit();
		var titleWidth = this.textLabel().getCalculatedWidth();
		var titleHeight = this.textLabel().getCalculatedHeight();
		this.__secondLabel.calculateSizeToFit();
		var valueLabelHeight = this.__secondLabel.getCalculatedHeight();
		this.measureView(this.textLabel(), left, $.ig.intDivide(h, 2) - $.ig.intDivide(titleHeight, 2), titleWidth, titleHeight);
		left += titleWidth + padding;
		this.measureView(this.__secondLabel, left, $.ig.intDivide(h, 2) - $.ig.intDivide(valueLabelHeight, 2), w - (left + padding), valueLabelHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SingleRowVisualizationCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SingleRowVisualizationCell', $.ig.CPGridViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SingleRowVisualizationCell" />*/

/*<BeginType Name="Infragistics.SingleRowVisualizationColumn" />*/

$.ig.util.defType('SingleRowVisualizationColumn', 'CPGridViewColumnDefinition', {
	init: function () {
		$.ig.CPGridViewColumnDefinition.prototype.init.call(this, 0, "singleCell");
	},
	_theme: null,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SingleRowVisualizationColumn::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath, Infragistics.CPGridViewDatasourceHelper)" />*/
	getCell: function (gridView, path, dsh) {
		var cell = gridView.dequeueReusableCellWithIdentifier("cell");
		if (cell == null) {
			cell = new $.ig.SingleRowVisualizationCell("cell");
		}
		cell._theme = this._theme;
		cell.setData(dsh.resolveDataObjectForRow(path));
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SingleRowVisualizationColumn::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath, Infragistics.CPGridViewDatasourceHelper)" />*/
	,
	$type: new $.ig.Type('SingleRowVisualizationColumn', $.ig.CPGridViewColumnDefinition.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SingleRowVisualizationColumn" />*/

/*<BeginType Name="Infragistics.TooltipPopupItem" />*/

$.ig.util.defType('TooltipPopupItem', 'CPPopupListItemBase', {
	_seriesTitle: null,
	_formattedValue: null,
	init: function (title, value, itemTag, actionItem) {
		$.ig.CPPopupListItemBase.prototype.init.call(this, 0, itemTag, actionItem);
		this._seriesTitle = title;
		this._formattedValue = value;
	},
	/*<BeginMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.TooltipPopupItem::CreateNewCell(System.String)" />*/
	createNewCell: function (identifier) {
		return new $.ig.TooltipPopupViewCell(identifier);
	}
	/*<EndMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.TooltipPopupItem::CreateNewCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TooltipPopupItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	calculateSizeToFit: function (measureLabel) {
		measureLabel.setFont($.ig.ThemeManager.prototype.currentTheme().resolveCellFontSize(), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		measureLabel.setText(this._seriesTitle + this._formattedValue);
		measureLabel.calculateSizeToFit();
		this._calculatedHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		this._calculatedWidth = measureLabel.getCalculatedWidth() + $.ig.truncate(((this._calculatedHeight * 0.2) * 3));
	}
	/*<EndMethod Name="System.Void Infragistics.TooltipPopupItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	,
	$type: new $.ig.Type('TooltipPopupItem', $.ig.CPPopupListItemBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TooltipPopupItem" />*/

/*<BeginType Name="Infragistics.TooltipPopupViewCell" />*/

$.ig.util.defType('TooltipPopupViewCell', 'CPPopupListViewCellBase', {
	__valueLabel: null,
	init: function (identifier) {
		$.ig.CPPopupListViewCellBase.prototype.init.call(this, identifier);
		this.__valueLabel = new $.ig.CPLabel();
		this.addSubview(this.__valueLabel);
	},
	/*<BeginMethod Name="System.Void Infragistics.TooltipPopupViewCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	processItem: function (item) {
		$.ig.CPPopupListViewCellBase.prototype.processItem.call(this, item);
		var listItem = item;
		this.textLabel().setText(listItem._seriesTitle);
		this.textLabel().setTextAlignment($.ig.TextAlignment.prototype.left);
		this.__valueLabel.setText(listItem._formattedValue);
		this.__valueLabel.setTextAlignment($.ig.TextAlignment.prototype.right);
	}
	/*<EndMethod Name="System.Void Infragistics.TooltipPopupViewCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TooltipPopupViewCell::LayoutCenterContentArea(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	layoutCenterContentArea: function (x, y, w, h) {
		$.ig.CPPopupListViewCellBase.prototype.layoutCenterContentArea.call(this, x, y, w, h);
		this.__valueLabel.setFont(this.fontSize(), this.font());
		this.__valueLabel.calculateSizeToFit();
		var vh = this.__valueLabel.getCalculatedHeight();
		this.measureView(this.__valueLabel, x, y + ($.ig.intDivide((h - vh), 2)), w - this.padding(), vh);
	}
	/*<EndMethod Name="System.Void Infragistics.TooltipPopupViewCell::LayoutCenterContentArea(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.TooltipPopupViewCell::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.TooltipPopupViewCell::HandlesUIInteraction()" />*/
	,
	$type: new $.ig.Type('TooltipPopupViewCell', $.ig.CPPopupListViewCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TooltipPopupViewCell" />*/

/*<BeginType Name="Infragistics.TooltipDrillFooter" />*/

$.ig.util.defType('TooltipDrillFooter', 'CPPopupFooter', {
	__drillUpButton: null,
	__drillDownButton: null,
	init: function (canDrillUp, canDrillDown, drillUpBlock, drillDownBlock) {
		$.ig.CPPopupFooter.prototype.init.call(this);
		this.sectionBackgroundColor($.ig.ColorUtility.prototype.convertToNative($.ig.ThemeManager.prototype.currentTheme().popupHeaderColor()));
		this.__drillUpButton = new $.ig.PathIconLabelButton(1);
		this.__drillUpButton.setText("Drill Up");
		this.__drillUpButton.setIcon($.ig.UIPathIcons.prototype.icons().getArrowUpIcon());
		this.__drillUpButton.setOutlineOnly(false);
		this.__drillUpButton.labelLocation($.ig.PathIconLabelLocation.prototype.bottom);
		this.addSubview(this.__drillUpButton);
		this.__drillDownButton = new $.ig.PathIconLabelButton(1);
		this.__drillDownButton.setText("Drill Down");
		this.__drillDownButton.setIcon($.ig.UIPathIcons.prototype.icons().getArrowDownIcon());
		this.__drillDownButton.setOutlineOnly(false);
		this.__drillDownButton.labelLocation($.ig.PathIconLabelLocation.prototype.bottom);
		this.addSubview(this.__drillDownButton);
		this.__drillUpButton.addClickHandler(drillUpBlock);
		this.__drillDownButton.addClickHandler(drillDownBlock);
		if (!canDrillUp) {
			this.__drillUpButton.disable();
		}
		if (!canDrillDown) {
			this.__drillDownButton.disable();
		}
	},
	/*<BeginMethod Name="System.Void Infragistics.TooltipDrillFooter::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPPopupFooter.prototype.sizeChanged.call(this, w, h);
		var padding = $.ig.truncate((h * 0.1));
		var areaWidth = $.ig.intDivide((w - (padding * 2)), 2);
		var areaHeight = h - (padding * 2);
		var iconSize = $.ig.truncate((h * 0.5));
		this.measureView(this.__drillUpButton, padding, padding, areaWidth, areaHeight);
		this.measureView(this.__drillDownButton, padding + areaWidth, padding, areaWidth, areaHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.TooltipDrillFooter::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.TooltipDrillFooter::GetCalculatedHeight()" />*/
	getCalculatedHeight: function () {
		return $.ig.NativeUIUtility.prototype.utility().densify(60);
	}
	/*<EndMethod Name="System.Int32 Infragistics.TooltipDrillFooter::GetCalculatedHeight()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.TooltipDrillFooter::GetCalculatedWidth()" />*/
	getCalculatedWidth: function () {
		return $.ig.NativeUIUtility.prototype.utility().densify(60) * 2;
	}
	/*<EndMethod Name="System.Int32 Infragistics.TooltipDrillFooter::GetCalculatedWidth()" />*/
	,
	$type: new $.ig.Type('TooltipDrillFooter', $.ig.CPPopupFooter.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TooltipDrillFooter" />*/

/*<BeginType Name="Infragistics.TreeMapItemData" />*/

$.ig.util.defType('TreeMapItemData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_label: null,
	_children: null,
	_value: 0,
	_row: 0,
	$type: new $.ig.Type('TreeMapItemData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TreeMapItemData" />*/

/*<BeginType Name="Infragistics.TreeMapVisualization" />*/

$.ig.util.defType('TreeMapVisualization', 'BaseVisualization', {
	__treemap: null,
	__treeMapData: null,
	init: function () {
		$.ig.BaseVisualization.prototype.init.call(this);
		this.__treemap = new $.ig.Treemap();
		this.addSubview(this.__treemap);
	},
	/*<BeginProperty Name="Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings Infragistics.TreeMapVisualization::Settings()" />*/
	settings: function () {
		return this._widgetWrapper._widget.visualizationSettings();
	}
	/*<EndProperty Name="Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings Infragistics.TreeMapVisualization::Settings()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TreeMapVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.BaseVisualization.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__treemap, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.TreeMapVisualization::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TreeMapVisualization::ApplyTheme()" />*/
	applyTheme: function () {
		$.ig.BaseVisualization.prototype.applyTheme.call(this);
		var theme = this.theme();
		this.__treemap.setColors(this.getColorsArrayWithSettings(this.settings()));
		this.__treemap.textColor($.ig.ColorUtility.prototype.convertToNative(theme.widgetBackgroundColor()));
		this.__treemap.strokeColor($.ig.ColorUtility.prototype.convertToNative(theme.widgetBackgroundColor()));
		this.__treemap.labelHeightPercent(0.5);
		this.__treemap.parentChildFontRatio(0.15);
	}
	/*<EndMethod Name="System.Void Infragistics.TreeMapVisualization::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.TreeMapVisualization::GetColorsArrayWithSettings(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	getColorsArrayWithSettings: function (settings) {
		var brushOffsetIndex = ($.ig.NativeDataLayerUtility.prototype.isNullInt(settings.brushOffsetIndex())) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(settings.brushOffsetIndex());
		if (brushOffsetIndex == -1) {
			brushOffsetIndex = 0;
		}
		var colors = new $.ig.Array();
		for (var i = 0; i < this.theme().chartColors().length; i++) {
			var brushIndex = brushOffsetIndex + i;
			if (brushIndex >= this.theme().chartColors().length) {
				brushIndex = brushIndex % this.theme().chartColors().length;
			}
			var color = this.theme().chartColors()[brushIndex];
			var nativeColor = $.ig.ColorUtility.prototype.convertToNative(color);
			colors.add(nativeColor);
		}
		return colors;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.TreeMapVisualization::GetColorsArrayWithSettings(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.TreeMapVisualization::MinimumSettingsAvailable(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	minimumSettingsAvailable: function (settings) {
		var hasPivot = this._widgetWrapper.numberOfValues() > 0;
		return (hasPivot || $.ig.DataTableResultHelper.prototype.resolveFirstNonNumericColumn(this._widgetWrapper._data) > -1) && $.ig.DataTableResultHelper.prototype.resolveFirstNumericColumn(this._widgetWrapper._data) > -1;
	}
	/*<EndMethod Name="System.Boolean Infragistics.TreeMapVisualization::MinimumSettingsAvailable(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.TreeMapVisualization::TreeMapDataHasMinimumSettingsAvailable(Infragistics.CPList)" />*/
	treeMapDataHasMinimumSettingsAvailable: function (treeMapData) {
		if (treeMapData.length > 0) {
			if ((treeMapData[0])._label != null) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.TreeMapVisualization::TreeMapDataHasMinimumSettingsAvailable(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.TreemapLayout Infragistics.TreeMapVisualization::GetTreemapLayoutSettings(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	getTreemapLayoutSettings: function (settings) {
		switch (settings.layout()) {
			case $.ig.DashboardTreeMapLayoutEnumType.prototype.squarified: return $.ig.TreemapLayout.prototype.squarified;
			case $.ig.DashboardTreeMapLayoutEnumType.prototype.sliceAndDice: return $.ig.TreemapLayout.prototype.sliceAndDice;
			case $.ig.DashboardTreeMapLayoutEnumType.prototype.strip: return $.ig.TreemapLayout.prototype.strip;
			default: return $.ig.TreemapLayout.prototype.squarified;
		}
	}
	/*<EndMethod Name="Infragistics.TreemapLayout Infragistics.TreeMapVisualization::GetTreemapLayoutSettings(Infragistics.ReportPlus.DashboardModel.TreeMapVisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TreeMapVisualization::ReloadData()" />*/
	reloadData: function () {
		$.ig.BaseVisualization.prototype.reloadData.call(this);
		var settings = this.settings();
		if (this.minimumSettingsAvailable(settings)) {
			this.__treeMapData = this.buildVisualizationData(this._widgetWrapper._data, settings.labelColumnName(), settings.valueColumnName(), settings.showDetails());
			if (this.__treeMapData != null && this.treeMapDataHasMinimumSettingsAvailable(this.__treeMapData)) {
				this.__treemap.layout(this.getTreemapLayoutSettings(settings));
				this.__treemap.update(true);
			} else {
			}
		} else {
			this.__treeMapData = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.TreeMapVisualization::ReloadData()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.TreeMapVisualization::BuildVisualizationData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String, System.String, System.Boolean)" />*/
	buildVisualizationData: function (tabularData, labelColumn, valueColumn, showDetails) {
		var data = new $.ig.Array();
		var count = $.ig.DataTableResultHelper.prototype.getRowCount(this._widgetWrapper._data);
		var hasColumns = this._widgetWrapper.hasRowsColumnsAndValuesInPivot();
		var childrenValueIndex = (hasColumns && showDetails) ? this._widgetWrapper.getIndexValueField(valueColumn) : -1;
		var colCount = $.ig.DataTableResultHelper.prototype.getColumnCount(this._widgetWrapper._data);
		var columns = tabularData.table().columns();
		var labelColumnIndex = this.resolveLabelColumnIndex(this._widgetWrapper._data, labelColumn);
		var valueColumnIndex = $.ig.DataTableResultHelper.prototype.resolveColumnIndexForFieldName(this._widgetWrapper._data, valueColumn);
		var hasPivot = this._widgetWrapper.numberOfValues() > 0;
		var labels = this.resolveLabels(this._widgetWrapper._data, labelColumnIndex);
		if (childrenValueIndex < 0) {
			if (labelColumnIndex < 0 || valueColumnIndex < 0) {
				return null;
			}
		}
		for (var i = 0; i < count; i++) {
			if (hasPivot && i == count - 1) {
				continue;
			}
			var itemData = new $.ig.TreeMapItemData();
			itemData._label = labels[i].toString();
			if (childrenValueIndex >= 0) {
				var children = new $.ig.Array();
				for (var c = this._widgetWrapper.numberOfDimensionColumns(); c < colCount - this._widgetWrapper.numberOfValues(); c++) {
					var value = $.ig.DataTableResultHelper.prototype.getCellValue(this._widgetWrapper._data, i, c);
					if (value == null) {
						continue;
					}
					var childItemData = new $.ig.TreeMapItemData();
					childItemData._value = value;
					var tuple = $.ig.NativeStringUtility.prototype.split($.ig.DataTableResultHelper.prototype.getColumnAtIndex(this._widgetWrapper._data, c).name(), "\n");
					var tupleList = new $.ig.Array();
					for (var j = 0; j < tuple.length; j++) {
						tupleList.add(tuple[j]);
					}
					if (tuple.length > 1 && this._widgetWrapper.numberOfValues() > 1) {
						tupleList.removeAt(tupleList.length - 1);
					}
					childItemData._label = this.joinString(tupleList, "-");
					children.add(childItemData);
				}
				itemData._children = children;
				var totalValue = $.ig.DataTableResultHelper.prototype.getCellValue(this._widgetWrapper._data, i, colCount - this._widgetWrapper.numberOfValues() + childrenValueIndex);
				itemData._value = totalValue;
			} else {
				var value1 = $.ig.DataTableResultHelper.prototype.getCellValue(this._widgetWrapper._data, i, valueColumnIndex);
				itemData._value = value1;
			}
			itemData._row = i;
			if ($.ig.util.isNaN(itemData._value) || itemData._value < 0) {
				continue;
			}
			data.add(itemData);
		}
		return data;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.TreeMapVisualization::BuildVisualizationData(Infragistics.ReportPlus.DataLayer.IDataTableResult, System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.TreeMapVisualization::JoinString(Infragistics.CPList, System.String)" />*/
	joinString: function (stringList, separator) {
		var outputString = "";
		for (var i = 0; i < stringList.length; i++) {
			outputString += stringList[i];
			if (i < stringList.length - 1) {
				outputString += separator;
			}
		}
		return outputString;
	}
	/*<EndMethod Name="System.String Infragistics.TreeMapVisualization::JoinString(Infragistics.CPList, System.String)" />*/
	,
	$type: new $.ig.Type('TreeMapVisualization', $.ig.BaseVisualization.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TreeMapVisualization" />*/

/*<BeginType Name="Infragistics.VisualizationHelper" />*/

$.ig.util.defType('VisualizationHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.VisualizationType Infragistics.VisualizationHelper::ResolveType(Infragistics.ReportPlus.DashboardModel.VisualizationSettings)" />*/
	resolveType: function (settings) {
		var t = $.ig.VisualizationType.prototype.areaChart;
		var settingName = settings.visualizationType();
		if (settingName.equals("CHART")) {
			switch ((settings).chartType()) {
				case $.ig.DashboardChartType.prototype.area:
					t = $.ig.VisualizationType.prototype.areaChart;
					break;
				case $.ig.DashboardChartType.prototype.bar:
					t = $.ig.VisualizationType.prototype.barChart;
					break;
				case $.ig.DashboardChartType.prototype.bubble:
					t = $.ig.VisualizationType.prototype.bubbleChart;
					break;
				case $.ig.DashboardChartType.prototype.candlestick:
					t = $.ig.VisualizationType.prototype.candlestickChart;
					break;
				case $.ig.DashboardChartType.prototype.column:
					t = $.ig.VisualizationType.prototype.columnChart;
					break;
				case $.ig.DashboardChartType.prototype.composite:
					t = $.ig.VisualizationType.prototype.compositeChart;
					break;
				case $.ig.DashboardChartType.prototype.doughnut:
					t = $.ig.VisualizationType.prototype.doughnutChart;
					break;
				case $.ig.DashboardChartType.prototype.funnel:
					t = $.ig.VisualizationType.prototype.funnelChart;
					break;
				case $.ig.DashboardChartType.prototype.line:
					t = $.ig.VisualizationType.prototype.lineChart;
					break;
				case $.ig.DashboardChartType.prototype.oHLC:
					t = $.ig.VisualizationType.prototype.oHLC_Chart;
					break;
				case $.ig.DashboardChartType.prototype.pie:
					t = $.ig.VisualizationType.prototype.pieChart;
					break;
				case $.ig.DashboardChartType.prototype.polarLines:
				case $.ig.DashboardChartType.prototype.polarArea:
				case $.ig.DashboardChartType.prototype.polarScatter:
					t = $.ig.VisualizationType.prototype.polarLineChart;
					break;
				case $.ig.DashboardChartType.prototype.radialLines:
				case $.ig.DashboardChartType.prototype.radialColumns:
				case $.ig.DashboardChartType.prototype.radialPie:
					t = $.ig.VisualizationType.prototype.radialLineChart;
					break;
				case $.ig.DashboardChartType.prototype.scatter:
					t = $.ig.VisualizationType.prototype.scatterChart;
					break;
				case $.ig.DashboardChartType.prototype.spline:
					t = $.ig.VisualizationType.prototype.splineChart;
					break;
				case $.ig.DashboardChartType.prototype.splineArea:
					t = $.ig.VisualizationType.prototype.splineAreaChart;
					break;
				case $.ig.DashboardChartType.prototype.stackedArea:
					t = $.ig.VisualizationType.prototype.stackedAreaChart;
					break;
				case $.ig.DashboardChartType.prototype.stackedBar:
					t = $.ig.VisualizationType.prototype.stackedBarChart;
					break;
				case $.ig.DashboardChartType.prototype.stackedColumn:
					t = $.ig.VisualizationType.prototype.stackedColumnChart;
					break;
				case $.ig.DashboardChartType.prototype.stepArea:
					t = $.ig.VisualizationType.prototype.stepAreaChart;
					break;
				case $.ig.DashboardChartType.prototype.stepLine:
					t = $.ig.VisualizationType.prototype.stepLineChart;
					break;
			}
		} else if (settingName.equals("GAUGE")) {
			switch ((settings).viewType()) {
				case $.ig.DashboardGaugeViewType.prototype.bulletGraph:
					t = $.ig.VisualizationType.prototype.bulletGraph;
					break;
				case $.ig.DashboardGaugeViewType.prototype.circular:
					t = $.ig.VisualizationType.prototype.radialGauge;
					break;
				case $.ig.DashboardGaugeViewType.prototype.linear:
					t = $.ig.VisualizationType.prototype.linearGauge;
					break;
				case $.ig.DashboardGaugeViewType.prototype.singleValue:
					t = $.ig.VisualizationType.prototype.labelGauge;
					break;
			}
		} else if (settingName.equals("GRID")) {
			t = $.ig.VisualizationType.prototype.grid;
		} else if (settingName.equals("TREE_MAP")) {
			t = $.ig.VisualizationType.prototype.treeMap;
		} else if (settingName.equals("IMAGE")) {
			t = $.ig.VisualizationType.prototype.image;
		} else if (settingName.equals("JS_EXTENSION")) {
			t = $.ig.VisualizationType.prototype.jSExtension;
		} else if (settingName.equals("MAP")) {
			t = $.ig.VisualizationType.prototype.map;
		} else if (settingName.equals("HEAT_MAP")) {
			t = $.ig.VisualizationType.prototype.heatMap;
		} else if (settingName.equals("SINGLE_ROW")) {
			t = $.ig.VisualizationType.prototype.singleRow;
		}
		return t;
	}
	/*<EndMethod Name="Infragistics.VisualizationType Infragistics.VisualizationHelper::ResolveType(Infragistics.ReportPlus.DashboardModel.VisualizationSettings)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.VisualizationHelper::UniqueIdentifier(Infragistics.VisualizationType)" />*/
	uniqueIdentifier: function (type) {
		var val = null;
		switch (type) {
			case $.ig.VisualizationType.prototype.areaChart:
				val = "Area";
				break;
			case $.ig.VisualizationType.prototype.barChart:
				val = "Bar";
				break;
			case $.ig.VisualizationType.prototype.bubbleChart:
				val = "Bubble";
				break;
			case $.ig.VisualizationType.prototype.candlestickChart:
				val = "Candle";
				break;
			case $.ig.VisualizationType.prototype.columnChart:
				val = "Column";
				break;
			case $.ig.VisualizationType.prototype.compositeChart:
				val = "Composite";
				break;
			case $.ig.VisualizationType.prototype.doughnutChart:
				val = "Doughnut";
				break;
			case $.ig.VisualizationType.prototype.funnelChart:
				val = "Funnel";
				break;
			case $.ig.VisualizationType.prototype.lineChart:
				val = "Line";
				break;
			case $.ig.VisualizationType.prototype.oHLC_Chart:
				val = "OHLC";
				break;
			case $.ig.VisualizationType.prototype.pieChart:
				val = "PIE";
				break;
			case $.ig.VisualizationType.prototype.polarLineChart:
				val = "Polar";
				break;
			case $.ig.VisualizationType.prototype.radialLineChart:
				val = "Radial";
				break;
			case $.ig.VisualizationType.prototype.scatterChart:
				val = "Scatter";
				break;
			case $.ig.VisualizationType.prototype.splineChart:
				val = "Spline";
				break;
			case $.ig.VisualizationType.prototype.splineAreaChart:
				val = "SplineArea";
				break;
			case $.ig.VisualizationType.prototype.stackedAreaChart:
				val = "StackArea";
				break;
			case $.ig.VisualizationType.prototype.stackedBarChart:
				val = "StackBar";
				break;
			case $.ig.VisualizationType.prototype.stackedColumnChart:
				val = "StackCol";
				break;
			case $.ig.VisualizationType.prototype.stepAreaChart:
				val = "StepArea";
				break;
			case $.ig.VisualizationType.prototype.stepLineChart:
				val = "StepLine";
				break;
			case $.ig.VisualizationType.prototype.radialGauge:
				val = "RadialGauge";
				break;
			case $.ig.VisualizationType.prototype.bulletGraph:
				val = "BulletGraph";
				break;
			case $.ig.VisualizationType.prototype.linearGauge:
				val = "LinearGauge";
				break;
			case $.ig.VisualizationType.prototype.labelGauge:
				val = "LabelGauge";
				break;
			case $.ig.VisualizationType.prototype.grid:
				val = "Grid";
				break;
			case $.ig.VisualizationType.prototype.treeMap:
				val = "TreeMap";
				break;
			case $.ig.VisualizationType.prototype.image:
				val = "Image";
				break;
			case $.ig.VisualizationType.prototype.jSExtension:
				val = "JSExt";
				break;
			case $.ig.VisualizationType.prototype.map:
				val = "Map";
				break;
			case $.ig.VisualizationType.prototype.heatMap:
				val = "HeatMap";
				break;
			case $.ig.VisualizationType.prototype.singleRow:
				val = "SingleRow";
				break;
		}
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.VisualizationHelper::UniqueIdentifier(Infragistics.VisualizationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.BaseVisualization Infragistics.VisualizationHelper::CreateVisualization(Infragistics.VisualizationType)" />*/
	createVisualization: function (type) {
		var viz = null;
		switch (type) {
			case $.ig.VisualizationType.prototype.areaChart:
			case $.ig.VisualizationType.prototype.columnChart:
			case $.ig.VisualizationType.prototype.lineChart:
			case $.ig.VisualizationType.prototype.stackedAreaChart:
			case $.ig.VisualizationType.prototype.stackedColumnChart:
			case $.ig.VisualizationType.prototype.splineAreaChart:
			case $.ig.VisualizationType.prototype.splineChart:
			case $.ig.VisualizationType.prototype.stepAreaChart:
			case $.ig.VisualizationType.prototype.stepLineChart:
				viz = new $.ig.CategoryChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.barChart:
			case $.ig.VisualizationType.prototype.stackedBarChart:
				viz = new $.ig.BarChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.bubbleChart:
				viz = new $.ig.ScatterChartVisualization($.ig.ScatterDataItemType.prototype.bubble);
				break;
			case $.ig.VisualizationType.prototype.candlestickChart:
				viz = new $.ig.FinancialChartVisualization($.ig.FinancialDataItemType.prototype.candlestick);
				break;
			case $.ig.VisualizationType.prototype.compositeChart:
				viz = new $.ig.CompositeChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.doughnutChart:
				viz = new $.ig.DoughnutChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.funnelChart:
				viz = new $.ig.FunnelChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.oHLC_Chart:
				viz = new $.ig.FinancialChartVisualization($.ig.FinancialDataItemType.prototype.ohlc);
				break;
			case $.ig.VisualizationType.prototype.pieChart:
				viz = new $.ig.PieChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.polarLineChart:
				viz = new $.ig.PolarChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.radialLineChart:
				viz = new $.ig.RadialChartVisualization();
				break;
			case $.ig.VisualizationType.prototype.scatterChart:
				viz = new $.ig.ScatterChartVisualization($.ig.ScatterDataItemType.prototype.scatter);
				break;
			case $.ig.VisualizationType.prototype.radialGauge:
				viz = new $.ig.RadialGaugeVisualization();
				break;
			case $.ig.VisualizationType.prototype.bulletGraph:
			case $.ig.VisualizationType.prototype.linearGauge:
				viz = new $.ig.BulletGraphVisualization();
				break;
			case $.ig.VisualizationType.prototype.labelGauge:
				viz = new $.ig.LabelGaugeVisualization();
				break;
			case $.ig.VisualizationType.prototype.grid:
				viz = new $.ig.GridVisualization();
				break;
			case $.ig.VisualizationType.prototype.treeMap:
				viz = new $.ig.TreeMapVisualization();
				break;
			case $.ig.VisualizationType.prototype.image: break;
			case $.ig.VisualizationType.prototype.jSExtension: break;
			case $.ig.VisualizationType.prototype.map: break;
			case $.ig.VisualizationType.prototype.heatMap: break;
			case $.ig.VisualizationType.prototype.singleRow:
				viz = new $.ig.SingleRowVisualization();
				break;
		}
		return viz;
	}
	/*<EndMethod Name="Infragistics.BaseVisualization Infragistics.VisualizationHelper::CreateVisualization(Infragistics.VisualizationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.TrendlineType Infragistics.VisualizationHelper::ResolveTrendlineType(Infragistics.ReportPlus.DashboardModel.DashboardTrendlineType)" />*/
	resolveTrendlineType: function (type) {
		var trendType = $.ig.TrendlineType.prototype.linearFit;
		switch (type) {
			case $.ig.DashboardTrendlineType.prototype.cubicFit: return $.ig.TrendlineType.prototype.cubicFit;
			case $.ig.DashboardTrendlineType.prototype.cumulativeAverage: return $.ig.TrendlineType.prototype.cubicFit;
			case $.ig.DashboardTrendlineType.prototype.exponentialAverage: return $.ig.TrendlineType.prototype.exponentialMovingAverage;
			case $.ig.DashboardTrendlineType.prototype.exponentialFit: return $.ig.TrendlineType.prototype.exponentialFit;
			case $.ig.DashboardTrendlineType.prototype.linearFit: return $.ig.TrendlineType.prototype.linearFit;
			case $.ig.DashboardTrendlineType.prototype.logarithmicFit: return $.ig.TrendlineType.prototype.logarithmicFit;
			case $.ig.DashboardTrendlineType.prototype.modifiedAverage: return $.ig.TrendlineType.prototype.modifiedMovingAverage;
			case $.ig.DashboardTrendlineType.prototype.powerLawFit: return $.ig.TrendlineType.prototype.powerLawFit;
			case $.ig.DashboardTrendlineType.prototype.quadraticFit: return $.ig.TrendlineType.prototype.quadraticFit;
			case $.ig.DashboardTrendlineType.prototype.quarticFit: return $.ig.TrendlineType.prototype.quarticFit;
			case $.ig.DashboardTrendlineType.prototype.simpleAverage: return $.ig.TrendlineType.prototype.simpleMovingAverage;
			case $.ig.DashboardTrendlineType.prototype.weightedAverage: return $.ig.TrendlineType.prototype.weightedMovingAverage;
		}
		return trendType;
	}
	/*<EndMethod Name="Infragistics.TrendlineType Infragistics.VisualizationHelper::ResolveTrendlineType(Infragistics.ReportPlus.DashboardModel.DashboardTrendlineType)" />*/
	,
	/*<BeginMethod Name="System.ColorInt Infragistics.VisualizationHelper::ResolveBandColor(Infragistics.ReportPlus.DashboardModel.DashboardBandColorType, Infragistics.DashboardTheme)" />*/
	resolveBandColor: function (bandColor, theme) {
		switch (bandColor) {
			case $.ig.DashboardBandColorType.prototype.green:
			case $.ig.DashboardBandColorType.prototype.blue:
				return theme.cFGreenColor();
			case $.ig.DashboardBandColorType.prototype.red:
			case $.ig.DashboardBandColorType.prototype.gray:
				return theme.cFRedColor();
			case $.ig.DashboardBandColorType.prototype.yellow: return theme.cFYellowColor();
			case $.ig.DashboardBandColorType.prototype.none: return $.ig.ColorUtility.prototype.createColor(0, 255, 255, 255);
			case $.ig.DashboardBandColorType.prototype.white: return $.ig.ColorUtility.prototype.createColor(255, 255, 255, 255);
		}
		return -1;
	}
	/*<EndMethod Name="System.ColorInt Infragistics.VisualizationHelper::ResolveBandColor(Infragistics.ReportPlus.DashboardModel.DashboardBandColorType, Infragistics.DashboardTheme)" />*/
	,
	/*<BeginMethod Name="Infragistics.FormatSettingsNumberType Infragistics.VisualizationHelper::ResolveFormattingType(Infragistics.ReportPlus.DashboardModel.DashboardNumberFormattingType)" />*/
	resolveFormattingType: function (modelType) {
		switch (modelType) {
			case $.ig.DashboardNumberFormattingType.prototype.none:
			case $.ig.DashboardNumberFormattingType.prototype.number:
				return $.ig.FormatSettingsNumberType.prototype.number;
			case $.ig.DashboardNumberFormattingType.prototype.currency: return $.ig.FormatSettingsNumberType.prototype.currency;
			case $.ig.DashboardNumberFormattingType.prototype.percent: return $.ig.FormatSettingsNumberType.prototype.percent;
		}
		return $.ig.FormatSettingsNumberType.prototype.number;
	}
	/*<EndMethod Name="Infragistics.FormatSettingsNumberType Infragistics.VisualizationHelper::ResolveFormattingType(Infragistics.ReportPlus.DashboardModel.DashboardNumberFormattingType)" />*/
	,
	/*<BeginMethod Name="Infragistics.FormatSettingsNegativeNumberMode Infragistics.VisualizationHelper::ResolveNegativeFormatType(Infragistics.ReportPlus.DashboardModel.DashboardNegativeFormatType)" />*/
	resolveNegativeFormatType: function (modelType) {
		switch (modelType) {
			case $.ig.DashboardNegativeFormatType.prototype.empty:
			case $.ig.DashboardNegativeFormatType.prototype.minusSign:
				return $.ig.FormatSettingsNegativeNumberMode.prototype.minus;
			case $.ig.DashboardNegativeFormatType.prototype.parenthesis: return $.ig.FormatSettingsNegativeNumberMode.prototype.parens;
		}
		return $.ig.FormatSettingsNegativeNumberMode.prototype.minus;
	}
	/*<EndMethod Name="Infragistics.FormatSettingsNegativeNumberMode Infragistics.VisualizationHelper::ResolveNegativeFormatType(Infragistics.ReportPlus.DashboardModel.DashboardNegativeFormatType)" />*/
	,
	$type: new $.ig.Type('VisualizationHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.VisualizationHelper" />*/

/*<BeginType Name="Infragistics.WidgetWrapper" />*/

$.ig.util.defType('WidgetWrapper', 'Object', {
	_widget: null,
	_themeName: null,
	_widgetType: 0,
	_alreadyLoaded: false,
	init: function (w, theme) {
		$.ig.Object.prototype.init.call(this);
		this._widget = w;
		this._themeName = theme;
		this._widgetType = $.ig.VisualizationHelper.prototype.resolveType(w.visualizationSettings());
	},
	_data: null,
	/*<BeginMethod Name="System.Boolean Infragistics.WidgetWrapper::HasRowsColumnsAndValuesInPivot()" />*/
	hasRowsColumnsAndValuesInPivot: function () {
		var dataSpec = this._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, dataSpec) !== null) {
			var tabularSpec = dataSpec;
			var summarizationSpec = tabularSpec.summarizationSpec();
			if (summarizationSpec != null) {
				return summarizationSpec.rows().length > 0 && summarizationSpec.columns().length > 0 && this.visibileValuesInSummarizationSpec(summarizationSpec).length > 0;
			}
		} else if ($.ig.util.cast($.ig.XmlaDataSpec.prototype.$type, dataSpec) !== null) {
			var xmlaSpec = dataSpec;
			return xmlaSpec.rows().length > 0 && xmlaSpec.columns().length > 0 && this.visibleValuesInXmlaSpec(xmlaSpec).length > 0;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.WidgetWrapper::HasRowsColumnsAndValuesInPivot()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.WidgetWrapper::NumberOfDimensionColumns()" />*/
	numberOfDimensionColumns: function () {
		var dataSpec = this._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, dataSpec) !== null) {
			var tabularSpec = dataSpec;
			var summarizationSpec = tabularSpec.summarizationSpec();
			if (summarizationSpec != null) {
				var adHocFields = ($.ig.NativeDataLayerUtility.prototype.isNullInt(summarizationSpec.adHocFields())) ? 0 : $.ig.NativeDataLayerUtility.prototype.unwrapInt(summarizationSpec.adHocFields());
				adHocFields = adHocFields > summarizationSpec.rows().length ? summarizationSpec.rows().length : adHocFields;
				if (adHocFields > 0) {
					return summarizationSpec.rows().length - adHocFields + 1;
				} else {
					return summarizationSpec.rows().length;
				}
			}
		} else if ($.ig.util.cast($.ig.XmlaDataSpec.prototype.$type, dataSpec) !== null) {
			var xmlaSpec = dataSpec;
			return xmlaSpec.rows().length < 1 ? 1 : xmlaSpec.rows().length;
		}
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.WidgetWrapper::NumberOfDimensionColumns()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.WidgetWrapper::NumberOfValues()" />*/
	numberOfValues: function () {
		var dataSpec = this._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, dataSpec) !== null) {
			var tabularSpec = dataSpec;
			var summarizationSpec = tabularSpec.summarizationSpec();
			if (summarizationSpec != null) {
				return this.visibileValuesInSummarizationSpec(summarizationSpec).length;
			}
		} else if ($.ig.util.cast($.ig.XmlaDataSpec.prototype.$type, dataSpec) !== null) {
			var xmlaSpec = dataSpec;
			return this.visibleValuesInXmlaSpec(xmlaSpec).length;
		}
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.WidgetWrapper::NumberOfValues()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.WidgetWrapper::GetIndexValueField(System.String)" />*/
	getIndexValueField: function (fieldName) {
		var dataSpec = this._widget.dataSpec();
		if ($.ig.util.cast($.ig.TabularDataSpec.prototype.$type, dataSpec) !== null) {
			var tabularSpec = dataSpec;
			var summarizationSpec = tabularSpec.summarizationSpec();
			if (summarizationSpec != null) {
				var visibleValues = this.visibileValuesInSummarizationSpec(summarizationSpec);
				for (var i = 0; i < visibleValues.length; i++) {
					if ((visibleValues[i]).fieldName() == fieldName) {
						return i;
					}
				}
			}
		} else if ($.ig.util.cast($.ig.XmlaDataSpec.prototype.$type, dataSpec) !== null) {
			var xmlaSpec = dataSpec;
			var visibleMeasures = this.visibleValuesInXmlaSpec(xmlaSpec);
			for (var i1 = 0; i1 < visibleMeasures.length; i1++) {
				if ((visibleMeasures[i1]).uniqueName() == fieldName) {
					return i1;
				}
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.WidgetWrapper::GetIndexValueField(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.WidgetWrapper::VisibileValuesInSummarizationSpec(Infragistics.ReportPlus.DashboardModel.SummarizationSpec)" />*/
	visibileValuesInSummarizationSpec: function (spec) {
		var values = new $.ig.Array();
		for (var i = 0; i < spec.values().length; i++) {
			if (!(spec.values()[i]).isHidden()) {
				values.add(spec.values()[i]);
			}
		}
		return values;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.WidgetWrapper::VisibileValuesInSummarizationSpec(Infragistics.ReportPlus.DashboardModel.SummarizationSpec)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.WidgetWrapper::VisibleValuesInXmlaSpec(Infragistics.ReportPlus.DashboardModel.XmlaDataSpec)" />*/
	visibleValuesInXmlaSpec: function (xmlaSpec) {
		var values = new $.ig.Array();
		for (var i = 0; i < xmlaSpec.measures().length; i++) {
			if (!(xmlaSpec.measures()[i]).isHidden()) {
				values.add(xmlaSpec.measures()[i]);
			}
		}
		return values;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.WidgetWrapper::VisibleValuesInXmlaSpec(Infragistics.ReportPlus.DashboardModel.XmlaDataSpec)" />*/
	,
	$type: new $.ig.Type('WidgetWrapper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.WidgetWrapper" />*/

/*<BeginType Name="Infragistics.WidgetView" />*/

$.ig.util.defType('WidgetView', 'FlowLayoutItemView', {
	__viz: null,
	__background: null,
	__widget: null,
	__titleLabel: null,
	__errorLabel: null,
	init: function (type, identifier) {
		$.ig.FlowLayoutItemView.prototype.init.call(this, identifier);
		this.__background = new $.ig.CPViewBase();
		this.addSubview(this.__background);
		this.__titleLabel = new $.ig.CPLabel();
		this.__titleLabel.clipToBounds(true);
		this.addSubview(this.__titleLabel);
		this.__viz = $.ig.VisualizationHelper.prototype.createVisualization(type);
		if (this.__viz != null) {
			this.addSubview(this.__viz);
		} else {
			this.__errorLabel = new $.ig.CPLabel();
			this.addSubview(this.__errorLabel);
		}
	},
	/*<BeginMethod Name="System.Void Infragistics.WidgetView::SetWidget(Infragistics.WidgetWrapper)" />*/
	setWidget: function (w) {
		this.__widget = w;
		if (w._widget.isTitleVisible()) {
			this.__titleLabel.isHidden(false);
			this.__titleLabel.setText(w._widget.title());
		} else {
			this.__titleLabel.isHidden(true);
		}
		if (this.__viz == null) {
			this.__errorLabel.setText("Missing Visualization: " + $.ig.VisualizationHelper.prototype.uniqueIdentifier(w._widgetType));
		}
		if (this.__viz != null) {
			this.__viz.setWidget(w);
		}
		this.applyTheme();
		if (this.currentHeight() != 0) {
			this.sizeChanged(this.currentWidth(), this.currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.WidgetView::SetWidget(Infragistics.WidgetWrapper)" />*/
	,
	/*<BeginMethod Name="Infragistics.BaseVisualization Infragistics.WidgetView::GetViz()" />*/
	getViz: function () {
		return this.__viz;
	}
	/*<EndMethod Name="Infragistics.BaseVisualization Infragistics.WidgetView::GetViz()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.WidgetView::DataReceived()" />*/
	dataReceived: function () {
		if (this.__viz != null) {
			this.__viz.dataUpdated();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.WidgetView::DataReceived()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.WidgetView::ThemeUpdated()" />*/
	themeUpdated: function () {
		if (this.__viz != null) {
			this.__viz.themeUpdated();
		}
		this.applyTheme();
	}
	/*<EndMethod Name="System.Void Infragistics.WidgetView::ThemeUpdated()" />*/
	,
	/*<BeginProperty Name="Infragistics.DashboardTheme Infragistics.WidgetView::Theme()" />*/
	theme: function () {
		return $.ig.DashboardThemeManager.prototype.getThemeForName(this.__widget._themeName);
	}
	/*<EndProperty Name="Infragistics.DashboardTheme Infragistics.WidgetView::Theme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.WidgetView::ApplyTheme()" />*/
	applyTheme: function () {
		this.__background.setBackgroundColor(this.theme().resolveNativeColor(this.theme().widgetBackgroundColor()));
		this.__titleLabel.setFont(this.theme().headerFontSize(), this.theme().resolveNativeFont(this.theme().fontFileCopy()));
		this.__titleLabel.setTextColor(this.theme().resolveNativeColor(this.theme().foregroundColor()));
		if (this.__errorLabel != null) {
			this.__errorLabel.setTextColor(this.theme().resolveNativeColor(this.theme().foregroundColor()));
		}
		if (this.currentWidth() != 0 && this.currentHeight() != 0) {
			this.sizeChanged(this.currentWidth(), this.currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.WidgetView::ApplyTheme()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.WidgetView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.FlowLayoutItemView.prototype.sizeChanged.call(this, w, h);
		var padding = this.theme().resolveNativeSize(this.theme().widgetPadding());
		var margin = this.theme().resolveNativeSize(this.theme().widgetShadowSize());
		var top = margin;
		var left = margin;
		var vW = w - margin * 2;
		var vH = h - margin;
		this.measureView(this.__background, top, left, vW, vH - top);
		top += padding;
		left += padding;
		vW -= padding * 2;
		vH -= padding;
		if (this.__widget != null && this.__widget._widget.isTitleVisible()) {
			top += margin;
			this.__titleLabel.calculateSizeToFit1(vW);
			var lh = this.__titleLabel.getCalculatedHeight();
			this.measureView(this.__titleLabel, left + padding, top, vW - padding, lh);
			top += margin + lh;
		}
		if (this.__viz != null) {
			this.measureView(this.__viz, left, top, vW, vH - top);
		} else if (this.__errorLabel != null) {
			this.__errorLabel.setFont(this.theme().copyFontSize(), this.theme().resolveNativeFont(this.theme().fontFileCopy()));
			this.__errorLabel.calculateSizeToFit1(vW);
			var lw = this.__errorLabel.getCalculatedWidth();
			var lh1 = this.__errorLabel.getCalculatedHeight();
			this.measureView(this.__errorLabel, left + ($.ig.intDivide(vW, 2) - $.ig.intDivide(lw, 2)), top + ($.ig.intDivide((vH - top), 2) - $.ig.intDivide(lh1, 2)), vW, lh1);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.WidgetView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('WidgetView', $.ig.FlowLayoutItemView.prototype.$type)
}, true);

/*<EndType Name="Infragistics.WidgetView" />*/

/*<BeginStatics Name="Infragistics.VisualizationType" />*/

$.ig.VisualizationType.prototype.areaChart = 0;
$.ig.VisualizationType.prototype.barChart = 1;
$.ig.VisualizationType.prototype.bubbleChart = 2;
$.ig.VisualizationType.prototype.candlestickChart = 3;
$.ig.VisualizationType.prototype.columnChart = 4;
$.ig.VisualizationType.prototype.compositeChart = 5;
$.ig.VisualizationType.prototype.doughnutChart = 6;
$.ig.VisualizationType.prototype.funnelChart = 7;
$.ig.VisualizationType.prototype.lineChart = 8;
$.ig.VisualizationType.prototype.oHLC_Chart = 9;
$.ig.VisualizationType.prototype.pieChart = 10;
$.ig.VisualizationType.prototype.polarLineChart = 11;
$.ig.VisualizationType.prototype.radialLineChart = 12;
$.ig.VisualizationType.prototype.scatterChart = 13;
$.ig.VisualizationType.prototype.splineChart = 14;
$.ig.VisualizationType.prototype.splineAreaChart = 15;
$.ig.VisualizationType.prototype.stackedAreaChart = 16;
$.ig.VisualizationType.prototype.stackedBarChart = 17;
$.ig.VisualizationType.prototype.stackedColumnChart = 18;
$.ig.VisualizationType.prototype.stepAreaChart = 19;
$.ig.VisualizationType.prototype.stepLineChart = 20;
$.ig.VisualizationType.prototype.radialGauge = 21;
$.ig.VisualizationType.prototype.bulletGraph = 22;
$.ig.VisualizationType.prototype.linearGauge = 23;
$.ig.VisualizationType.prototype.labelGauge = 24;
$.ig.VisualizationType.prototype.grid = 25;
$.ig.VisualizationType.prototype.treeMap = 26;
$.ig.VisualizationType.prototype.image = 27;
$.ig.VisualizationType.prototype.jSExtension = 28;
$.ig.VisualizationType.prototype.map = 29;
$.ig.VisualizationType.prototype.heatMap = 30;
$.ig.VisualizationType.prototype.singleRow = 31;
/*<EndStatics Name="Infragistics.VisualizationType" />*/

/*<BeginStatics Name="Infragistics.DashboardThemeManager" />*/

$.ig.DashboardThemeManager.prototype.__manager = null;
/*<EndStatics Name="Infragistics.DashboardThemeManager" />*/

/*<BeginStatics Name="Infragistics.BaseVisualization" />*/

$.ig.BaseVisualization.prototype.aNIMATION_DURATION = 0.5;
/*<EndStatics Name="Infragistics.BaseVisualization" />*/

/*<BeginStatics Name="Infragistics.BulletGraphVisualization" />*/

$.ig.BulletGraphVisualization.prototype.bAND_INDICATOR_WIDTH = $.ig.NativeUIUtility.prototype.utility().densify(2);
/*<EndStatics Name="Infragistics.BulletGraphVisualization" />*/


} (jQuery));

