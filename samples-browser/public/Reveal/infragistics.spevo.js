/*!@license
* Infragistics.Web.ClientUI ..\..\..\..\JSNative\infragistics.spevo.js <build_number>
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
"NativeSPEvoLocalizeUtil:a",
"Object:b",
"Type:c",
"Boolean:d",
"ValueType:e",
"Void:f",
"IConvertible:g",
"IFormatProvider:h",
"Number:i",
"String:j",
"IComparable:k",
"Number:l",
"IComparable$1:m",
"IEquatable$1:n",
"Number:o",
"Number:p",
"Number:q",
"Number:r",
"NumberStyles:s",
"Enum:t",
"Array:u",
"IList:v",
"ICollection:w",
"IEnumerable:x",
"IEnumerator:y",
"NotSupportedException:z",
"Error:aa",
"Number:ab",
"String:ac",
"StringComparison:ad",
"RegExp:ae",
"CultureInfo:af",
"DateTimeFormatInfo:ag",
"Calendar:ah",
"Date:ai",
"Number:aj",
"DayOfWeek:ak",
"DateTimeKind:al",
"CalendarWeekRule:am",
"NumberFormatInfo:an",
"CompareInfo:ao",
"CompareOptions:ap",
"IEnumerable$1:aq",
"IEnumerator$1:ar",
"IDisposable:as",
"StringSplitOptions:at",
"Number:au",
"Number:av",
"Number:aw",
"Number:ax",
"Number:ay",
"Number:az",
"Assembly:a0",
"Stream:a1",
"SeekOrigin:a2",
"RuntimeTypeHandle:a3",
"MethodInfo:a4",
"MethodBase:a5",
"MemberInfo:a6",
"ParameterInfo:a7",
"TypeCode:a8",
"ConstructorInfo:a9",
"PropertyInfo:ba",
"Script:bb",
"SPEvoBaseViewController:bc",
"ViewControllerScreenBase:bd",
"ViewControllerBase:be",
"CPViewController:bf",
"ViewController:bg",
"Array:bh",
"Array:bi",
"CompareCallback:bj",
"MulticastDelegate:bk",
"IntPtr:bl",
"CPViewBase:bm",
"NativePanel:bn",
"View:bo",
"InteractiveView:bp",
"CPTimer:bq",
"AnimationHelperBase:br",
"Timer:bs",
"window:bt",
"Callback:bu",
"JSDate:bv",
"AnimationTickBlock:bw",
"Math:bx",
"JQueryObject:by",
"Element:bz",
"ElementAttributeCollection:b0",
"ElementCollection:b1",
"WebStyle:b2",
"ElementNodeType:b3",
"document:b4",
"EventListener:b5",
"IElementEventHandler:b6",
"ElementEventHandler:b7",
"ElementAttribute:b8",
"JQueryPosition:b9",
"JQueryCallback:ca",
"JQueryEvent:cb",
"JQueryTouchEventObject:cc",
"JQueryUICallback:cd",
"TouchPoints:ce",
"UIEventManager:cf",
"CPPoint:cg",
"PointExecutionBlock:ch",
"KeyboardKeys:ci",
"CPLayoutParams:cj",
"CPLayoutParamsBase:ck",
"CPCursors:cl",
"JQuery:cm",
"JQueryDeferred:cn",
"JQueryPromise:co",
"Action:cp",
"Action$1:cq",
"CanvasElement:cr",
"CanvasContext:cs",
"AnimationHelperDelegate:ct",
"SizeChangeBlock:cu",
"ArrayUtility:cv",
"ColorUtility:cw",
"CPMathUtility:cx",
"CPRect:cy",
"CPSize:cz",
"NativeColorUtility:c0",
"AnimationHelper:c1",
"AnimationType:c2",
"ExecutionBlock:c3",
"ExecutionBoolBlock:c4",
"CPNavigationViewController:c5",
"CPNavigationBar:c6",
"CPView:c7",
"CPLabel:c8",
"TextAlignment:c9",
"JSHelperUtility:da",
"PathIconLabelButton:db",
"PathIconButton:dc",
"CPInteractionView:dd",
"CPInteractionViewMode:de",
"CPInteractionHighlight:df",
"CPInteractionDrawingViewBase:dg",
"AnimatableDrawingView:dh",
"DrawingViewBase:di",
"CanvasContext:dj",
"CanvasContext2D:dk",
"TextMetrics:dl",
"ImageData:dm",
"Gradient:dn",
"CPStrokeCap:dp",
"CPStrokeJoin:dq",
"ImageElement:dr",
"CircleRenderInfo:ds",
"PathIconView:dt",
"PathIconRenderInfo:du",
"PathIcon:dv",
"PathIconPart:dw",
"NativeUIUtility:dx",
"CPCellPath:dy",
"CPRowPath:dz",
"CPGridViewFixedColumnDirection:d0",
"PathCommandType:d1",
"NativeStringUtility:d2",
"Dictionary:d3",
"Dictionary:d4",
"PathCommand:d5",
"UIUtility:d6",
"ThemeManager:d7",
"UIThemeHelper:d8",
"DefaultUITheme:d9",
"UIPathIcons:ea",
"PathIconsBase:eb",
"NativeDictionaryUtility:ec",
"PathIconLabelLocation:ed",
"CPNavBarButtonPanel:ee",
"ViewControllerModalPresentationStyle:ef",
"CPTextView:eg",
"InputView:eh",
"KeyboardType:ei",
"CPPopupManager:ej",
"CPPopupManagerBase:ek",
"CPPopupContainerView:el",
"CPPopupContainerBackgroundView:em",
"CPPopupAnimatorDelegate:en",
"ObjectBlock:eo",
"CPStringUtility:ep",
"CPPopupMessageBoxManager:eq",
"CPMessageBoxView:er",
"CPSplitButton:es",
"CPPopupPosition:et",
"CPPopupHeader:eu",
"CPGridViewIconCell:ev",
"CPGridViewOverflowCell:ew",
"CPGridViewTextLabelCell:ex",
"CPGridViewCellBase:ey",
"CPGridView:ez",
"CPScrollView:e0",
"CPScrollViewBase:e1",
"ScrollEventProcessorDelegate:e2",
"ScrollEventProcessor:e3",
"UpdateValueBlock:e4",
"CPScrollBarView:e5",
"CPScrollBarThumbView:e6",
"DoubleObjectBlock:e7",
"CPGridViewLayoutEngine:e8",
"CPGridViewCellAnimator:e9",
"CPGridViewDatasourceHelper:fa",
"CPSectionSortType:fb",
"CPGridViewColumnDefinition:fc",
"CPColumnWidth:fd",
"CPGridViewCellSetupDelegate:fe",
"CreateNewCellBlock:ff",
"CPGridViewCell:fg",
"CPGridViewHeaderCell:fh",
"CPGridViewValueColumnDefinition:fi",
"CPGridViewRowSeparatorCell:fj",
"CreateCellBlock:fk",
"CPGridViewSectionHeaderCell:fl",
"CPGridViewRowHeightBlock:fm",
"CPGridSectionInfo:fn",
"CPColumnInfo:fo",
"CPGridViewCellsPanel:fp",
"CPGridViewCellsPanelBase:fq",
"ItemValueChangedBlock:fr",
"GridColumnResizeHandle:fs",
"CPCellType:ft",
"CPGridViewSelectionType:fu",
"CPGridViewCellSectionExpansionAnimator:fv",
"CPGridViewCellSectionCollapseAnimator:fw",
"CPReorderCellPopupManager:fx",
"CPPopupFooter:fy",
"CPPopupSeciton:fz",
"CPPopupListManager:f0",
"CPLocalPopupManager:f1",
"CPPopupContentContainerView:f2",
"CPImageView:f3",
"CPPopupBackgroundView:f4",
"CPPopupBackgroundViewInfo:f5",
"CPPopupListView:f6",
"CPPopupListViewColumn:f7",
"CPPopupListViewCellBase:f8",
"CPPopupListItemBase:f9",
"CancellableObjectBlock:ga",
"CPGridViewSingleFieldMultiColumnDataSourceHelper:gb",
"CPPopupListContainerView:gc",
"CPModalDialogPopupManager:gd",
"CPModalDialogContentView:ge",
"CPContentPopupManager:gf",
"CPGridViewTextBoxCell:gg",
"CPTextEditorPopupManager:gh",
"CPPopupNotificationMessageManager:gi",
"CPMaximizePopupManager:gj",
"RoundButton:gk",
"RoundedView:gl",
"RoundeViewDrawingInfo:gm",
"NativeEMLocalizeUtil:gn",
"AddSharePointO365ViewController:go",
"NativeRequestUtility:gp",
"WebRequest:gq",
"JSDictionary:gr",
"JSAjaxBeforeSendRequestBlock:gs",
"SessionTask:gt",
"SessionDelegate:gu",
"CloudError:gv",
"URLRequest:gw",
"SessionHTTPMethod:gx",
"SessionContentType:gy",
"SessionResponseType:gz",
"SessionTaskType:g0",
"SessionType:g1",
"CPJSONObject:g2",
"NativeJSONUtility:g3",
"JSAjaxSuccessReponseBlock:g4",
"JSAjaxErrorReponseBlock:g5",
"MaterialEditBox:g6",
"CPPasswordBox:g7",
"PasswordInputView:g8",
"EMLocalizationKeys:g9",
"AddSharePointViewController:ha",
"EMContentIcons:hb",
"EMIcons:hc",
"EMTask:hd",
"BackingStoreObjectBase:he",
"EMMember:hf",
"CPMemoryStateManager:hg",
"InfragisticsUpdateTasksRequest:hh",
"InfragisticsAddOrUpdateTasksRequest:hi",
"InfragisticsAPIRequestBase:hj",
"SessionRequestBase:hk",
"Request:hl",
"RequestBase:hm",
"IRequest:hn",
"RequestSuccessBlock:ho",
"RequestErrorBlock:hp",
"SessionRequestProgressUpdateBlock:hq",
"SessionRequestFileDownloadedBlock:hr",
"NativeXmlProxy:hs",
"EMTaskManager:ht",
"CPWeakObject:hu",
"CPNavigatorManager:hv",
"CPNavigatorDelegate:hw",
"Console:hx",
"GoogleAnalyticsHelper:hy",
"SPEvoGoogleAnalyticsContants:hz",
"EMGoogleAnalyticsConstants:h0",
"CloudProviderTypeUtility:h1",
"CloudProviderType:h2",
"CloudAccountUserInfo:h3",
"BoxAccountUserInfo:h4",
"GoogleAccountUserInfo:h5",
"MicrosoftAccountUserInfo:h6",
"SharePointAccountUserInfo:h7",
"SharePointUser:h8",
"DropboxAccountUserInfo:h9",
"InfragisticsAccountUserInfo:ia",
"SearchCapabilities:ib",
"DropboxFileManager:ic",
"CloudFileManager:id",
"TokenState:ie",
"OAuthTokenStateCallback:ig",
"IRequestFactory:ih",
"IOAuthRequest:ii",
"Token:ij",
"CloudFilesBlock:ik",
"CloudErrorBlock:il",
"CloudFile:im",
"Nullable$1:io",
"CloudFileBlock:ip",
"ProgressFileBlock:iq",
"FileDownloadedBlock:ir",
"SearchQuery:is",
"CloudAccountUserInfoBlock:it",
"CloudFilePermissionsBlock:iu",
"CloudFilePermissions:iv",
"GenericCloudFile:iw",
"DateUtility:ix",
"NativeDateUtility:iy",
"NativeNullableUtility:iz",
"DropboxGetFilesRequest:i0",
"DropboxRequestBase:i1",
"OAuthRequestBase:i2",
"OAuthProvider:i3",
"DropboxOAuthProvider:i4",
"DropboxFile:i5",
"DropboxSearchFilesRequest:i6",
"DropboxDownloadFileRequest:i7",
"DropboxGetMetadataRequest:i8",
"DropboxWriteMode:i9",
"DropboxStartUploadSessionRequest:ja",
"DropboxAppendV2UploadSessionRequest:jb",
"DropboxFinishUploadSessionRequest:jc",
"DropboxCreateFolderRequest:jd",
"DropboxDeleteRequest:je",
"DropboxGetAccountInfo:jf",
"DropboxDownloadLinkRequest:jg",
"DropboxCopyFileRequest:jh",
"DropboxFileRequest:ji",
"DropboxMoveFileRequest:jj",
"GoogleFileManager:jk",
"GoogleGetFilesRequest:jl",
"GoogleRequestBase:jm",
"GoogleOAuthProvider:jn",
"GoogleFile:jo",
"RequestsLocalizationKeys:jp",
"NativeRequestLocalizeUtil:jq",
"GoogleSearchFilesRequest:jr",
"GoogleDownloadFileRequest:js",
"GoogleGetMetadataRequest:jt",
"GoogleCreateUploadSessionRequest:ju",
"GoogleCreateOverwriteSessionRequest:jv",
"GoogleUploadDataChunkRequest:jw",
"GoogleCreateFolderRequest:jx",
"GoogleTrashFileRequest:jy",
"GoogleDeleteFileRequest:jz",
"GoogleGetAccountInfo:j0",
"GoogleGetFileRequest:j1",
"GoogleDownloadLinkRequest:j2",
"GoogleFileRequest:j3",
"GoogleCopyFileRequest:j4",
"GoogleMoveFileRequest:j5",
"BoxFileManager:j6",
"BoxGetFilesRequest:j7",
"BoxRequestBase:j8",
"BoxOAuthProvider:j9",
"BoxFile:ka",
"BoxSearchFilesRequest:kb",
"BoxDownloadFileRequest:kc",
"BoxGetMetadataRequest:kd",
"BoxGetFolderInfoRequest:ke",
"NotImplementedException:kf",
"BoxCreateFolderRequest:kg",
"BoxDeleteFolderRequest:kh",
"BoxDeleteFileRequest:ki",
"BoxGetAccountInfo:kj",
"BoxDownloadLinkRequest:kk",
"BoxFileRequest:kl",
"BoxCopyFileRequest:km",
"BoxMoveFileRequest:kn",
"SharePointFileManager:ko",
"SharePointLibrary:kp",
"SharePointListBase:kq",
"SharePointFolder:kr",
"SharePointFileBase:ks",
"SharePointGetSitesRequest:kt",
"SharePointRequestBase:ku",
"SharePointOAuthProvider:kv",
"MicrosoftOAuthProvider:kw",
"SharePointSite:kx",
"SharePointReadListItemsRequest:ky",
"SharePointItem:kz",
"SharePointReadLibraryFolderRequest:k0",
"SharePointFile:k1",
"SharePointGetListsRequest:k2",
"SharePointList:k3",
"SharePointFileRequest:k4",
"SharePointCopyFileRequest:k5",
"SharePointMoveFileRequest:k6",
"SharePointGenericRequest:k7",
"GenericRequest:k8",
"SharePointSearchFilesRequest:k9",
"SharePointSearchQuery:la",
"SharePointProviderUtility:lb",
"SharePointCreateFileRequest:lc",
"SharePointUpdateFileRequest:ld",
"SharePointDeleteRequest:le",
"SharePointDownloadLinkRequest:lf",
"MicrosoftRequestBase:lg",
"SharePointGetFilePermissions:lh",
"SPPermissions:li",
"PermissionKind:lj",
"SharePointShareObject:lk",
"MicrosoftFileManager:ll",
"MicrosoftGetFilesRequest:lm",
"MicrosoftFile:ln",
"MicrosoftDownloadFileRequest:lo",
"MicrosoftCreateUploadSessionRequest:lp",
"MicrosoftUploadDataChunkRequest:lq",
"MicrosoftGetMetadataRequest:lr",
"MicrosoftSearchFilesRequest:ls",
"MicrosoftDeleteDriveItemRequest:lt",
"MicrosoftGetAccountInfo:lu",
"MicrosoftDownloadLinkRequest:lv",
"MicrosoftFileRequest:lw",
"MicrosoftCopyFileRequest:lx",
"MicrosoftMoveFileRequest:ly",
"ProviderBase:lz",
"ProviderLocal:l0",
"ProviderTokenState:l1",
"ProviderReportPlus:l2",
"ReportPlusFileManager:l3",
"ReportPlusGetFilesRequest:l4",
"ReportPlusRequestBase:l5",
"ReportPlusFile:l6",
"ProviderInfragisticsWebProxy:l7",
"InfragisticsWebCloudFileManager:l8",
"InfragisticsGetFilesInFolder:l9",
"CloudFileNavigationViewController:ma",
"CPCheckedStateDelegate:mb",
"CPGridViewCheckBoxCell:mc",
"CPGridViewCheckBoxEditMode:md",
"CPCheckedState:me",
"CloudFolderSelectionDelegate:mf",
"CloudFileSelectionAction:mg",
"CloudFileRemovedDelegate:mh",
"CloudFileSelectedCell:mi",
"CloudFileUtility:mj",
"EMUserFileManager:mk",
"EMUserFileDelegate:ml",
"EMUserFile:mm",
"EMRepository:mn",
"EMTeam:mo",
"EMBoard:mp",
"EMBoardSection:mq",
"EMBoardWidgetBase:mr",
"EMBoardWidgetContentBase:ms",
"EMBoardWidgetItemBase:mt",
"EMBoardContentWidget:mu",
"EMBoardWidgetContentFile:mv",
"EMBoardWidgetContentLink:mw",
"EMBoardTasksWidget:mx",
"EMTasksDelegate:my",
"EMBoardNotesWidget:mz",
"EMBoardGoalsWidget:m0",
"EMpersonalRepository:m1",
"EMPersonalBoard:m2",
"EMTokenState:m3",
"EMTokenStateRefreshFactory:m4",
"InfragisticsRefreshTokenRequest:m5",
"InfragisticsGetUserFileRequest:m6",
"EMSocketManager:m7",
"EMBoardManager:m8",
"EMBoardDelegate:m9",
"CPKeyedObject:na",
"InfragisticsGetBoardRequest:nb",
"EMUtility:nc",
"EMSignInManager:nd",
"SignInChooseAccountViewController:ne",
"InteractiveLabel:nf",
"InterativeLabelCanvas:ng",
"WordRenderInfo:nh",
"InteractiveLabelRenderInfo:ni",
"InteractionTrigger:nj",
"RoundIconButton:nk",
"SPEvoTheme:nl",
"InfragisticsUpdatePersonalBoardRequest:nm",
"InfragisticsAddOrUpdateBoardRequest:nn",
"EMTasksManager:no",
"InfragisticsGetTasksRequest:np",
"InfragisticsSearchTasksRequest:nq",
"CloudFileSelectionManager:nr",
"CloudFileSelectionMode:ns",
"CloudFileSelectionType:nt",
"RPDashboardSelectorColumn:nu",
"RPDashboardSelectorLargeCell:nv",
"DynamicDashboardThumbnail:nw",
"FlowLayoutDataSource:nx",
"Dashboard:ny",
"IDashboardModelObject:nz",
"Array:n0",
"CloneListUtils:n1",
"CloneUtils:n2",
"NativeTypedDictionary:n3",
"List$1:n4",
"IList$1:n5",
"ICollection$1:n6",
"IArray:n7",
"IArrayList:n8",
"Func$3:n9",
"Comparer$1:oa",
"IComparer:ob",
"IComparer$1:oc",
"DefaultComparer$1:od",
"Comparison$1:oe",
"ReadOnlyCollection$1:of",
"Predicate$1:og",
"JsonUtility:oh",
"NativeDataLayerUtility:oi",
"StringBuilder:oj",
"Environment:ok",
"Widget:ol",
"DataSpec:om",
"BaseDataSourceItem:on",
"CompositeDataSourceItem:oo",
"DataSourceItem:op",
"DataSpecBindings:oq",
"UrlBinding:or",
"Binding:os",
"BindingSource:ot",
"DashboardGlobalFilterBindingOperatorType:ou",
"BindingTarget:ov",
"FieldBindingSource:ow",
"ParameterBindingSource:ox",
"DashboardEnumDeserialization:oy",
"DashboardActionParameterSourceType:oz",
"DashboardActionTargetType:o0",
"DashboardActionTriggerType:o1",
"DashboardAggregationType:o2",
"DashboardBandColorType:o3",
"DashboardBandType:o4",
"DashboardBoundValueType:o5",
"DashboardChartType:o6",
"DashboardContentModeType:o7",
"DashboardDataType:o8",
"DashboardDateAggregationType:o9",
"DashboardDateRuleType:pa",
"DashboardFilterEnumType:pb",
"DashboardFontSizeType:pc",
"DashboardGaugeViewType:pd",
"DashboardGlobalVariableValueType:pe",
"DashboardHeatMapLocationType:pf",
"DashboardLabelDisplayMode:pg",
"DashboardMapLocationType:ph",
"DashboardMapVisualizationType:pi",
"DashboardNegativeFormatType:pj",
"DashboardNumberFormattingType:pk",
"DashboardNumberRuleType:pl",
"DashboardShapeType:pm",
"DashboardSortingType:pn",
"DashboardStringRuleType:po",
"DashboardTextAlignment:pp",
"DashboardTimeRuleType:pq",
"DashboardTreeMapLayoutEnumType:pr",
"DashboardTrendlineType:ps",
"DashboardXmlaDimensionEnumType:pt",
"DashboardXmlaElementType:pu",
"DataBasedGlobalFilterBindingTarget:pv",
"DateGlobalFilterBindingTarget:pw",
"GlobalVariableBindingTarget:px",
"DashboardEnumSerialization:py",
"VisualizationSettings:pz",
"ActionsModel:p0",
"Action:p1",
"ActionParameter:p2",
"ResourceDataSpec:p3",
"TabularDataSpec:p4",
"SummarizationSpec:p5",
"SummarizationDateField:p6",
"SummarizationDimensionField:p7",
"SummarizationBaseField:p8",
"SummarizationRegularField:p9",
"SummarizationValueField:qa",
"FormattingSpec:qb",
"ConditionalFormattingSpec:qc",
"Bound:qd",
"ConditionalFormattingBand:qe",
"BandBase:qf",
"Filter:qg",
"FilterValue:qh",
"DateFormattingSpec:qi",
"NumberFormattingSpec:qj",
"DateTimeFilter:qk",
"DateRange:ql",
"NumberFilter:qm",
"StringFilter:qn",
"TimeFilter:qo",
"XmlaDateFilter:qp",
"XmlaRegularFilter:qq",
"XmlaFilterRule:qr",
"XmlaNumberFilterRule:qs",
"XmlaStringFilterRule:qt",
"AdHocExpandedElement:qu",
"Field:qv",
"QuickFilter:qw",
"XmlaDataSpec:qx",
"XmlaDimension:qy",
"XmlaDimensionElement:qz",
"XmlaFilter:q0",
"XmlaHierarchyLevel:q1",
"XmlaHierarchy:q2",
"XmlaSet:q3",
"XmlaMeasure:q4",
"AssetVisualizationSettings:q5",
"ChartVisualizationSettings:q6",
"FinancialSettings:q7",
"DIYVisualizationSettings:q8",
"GaugeVisualizationSettings:q9",
"GaugeBand:ra",
"GridVisualizationSettings:rb",
"GridVisualizationStyle:rc",
"VisualizationColumnStyle:rd",
"HeatMapVisualizationSettings:re",
"MapBaseVisualizationSettings:rf",
"HeatMapLayersSettings:rg",
"MapVisualizationSettings:rh",
"SingleRowVisualizationSettings:ri",
"TreeMapVisualizationSettings:rj",
"CompositeDataSource:rk",
"BaseDataSource:rl",
"DataSetItem:rm",
"DataSource:rn",
"AdHocHierarchyGlobalFilter:ro",
"HierarchicalGlobalFilter:rp",
"TabularGlobalFilter:rq",
"DataSourceBasedGlobalFilter:rr",
"GlobalFilter:rs",
"GlobalFilterSelectedItem:rt",
"AdHocHierarchyGlobalFilterField:ru",
"DateGlobalFilter:rv",
"ParameterBasedHierarchyGlobalFilter:rw",
"ParameterMapping:rx",
"ParentChildHierarchyGlobalFilter:ry",
"XmlaGlobalFilter:rz",
"GlobalVariable:r0",
"FlowLayoutManager:r1",
"FlowLayoutDefinition:r2",
"FlowLayoutDirection:r3",
"FlowlayoutItemInfo:r4",
"DashboardThemeManager:r5",
"DashboardTheme:r6",
"RandomNumberGenerator:r7",
"NativeRandomUtility:r8",
"VizIcons:r9",
"RPDatasourceStore:sa",
"RPDatasource:sb",
"RPDatasourceType:sc",
"RPDatasourceHelper:sd",
"CredentialsOAuthURLRequest:se",
"CredentialsRequestBase:sf",
"ProviderFilter:sg",
"GoogleProviderFilter:sh",
"DropBoxProviderFilter:si",
"DropBoxLegacyProviderFilter:sj",
"BoxProviderFilter:sk",
"NativeRPUILocalizeUtil:sl",
"EMDataSourceIcons:sm",
"ProviderPopupItem:sn",
"RPDashboardSelectorCell:so",
"CPGridViewSingleFieldDynamicColumnDataSourceHelper:sp",
"CPDynamicColumnGridView:sq",
"CPPopupListItem:sr",
"CPPopupListViewCell:ss",
"SPEvoSelectorButton:st",
"SPEvoProviderPopupItem:su",
"SPEvoProviderPopupCell:sv",
"SPEvoBoardSelectorViewController:sw",
"SPEvoBarSelectorBaseViewController:sx",
"SPEvoSelectorViewController:sy",
"SPEvoSelectorDepth:sz",
"SPEvoAddItemDataSourceHelper:s0",
"SPEvoBoardNavigatorDataSourceHelper:s1",
"EMTeamNavigatorDataSourceHelper:s2",
"EMTeamItemNavigatorCell:s3",
"EMMainNavIcons:s4",
"EMTeamCell:s5",
"CPGridViewExpandableCell:s6",
"EMTeamIconView:s7",
"SPEvoBoardSectionSelectorViewController:s8",
"SPEvoBoardSectionWidgetSelectorViewController:s9",
"InfragisticsShareFileRequest:ta",
"ProgressHelper:tb",
"ProgressDisplayView:tc",
"ProgressView:td",
"EMErrorPopupManager:te",
"InfragisticsDownloadFileRequest:tf",
"DashboardViewController:tg",
"RPViewControllerBase:th",
"FlowLayoutViewDataSource:ti",
"FlowLayoutItemView:tj",
"FlowLayoutView:tk",
"FlowLayoutViewCaptureViewDelegate:tl",
"FlowLayoutViewCaptureView:tm",
"FlowLayoutResizeHandleLocation:tn",
"FlowLayoutViewEditDelegate:to",
"FlowLayoutItemViewDelegate:tp",
"UndoRedo:tq",
"IUndoRedo:tr",
"RPStack:ts",
"Array:tt",
"IUndoRedoTransaction:tu",
"IUndoRedoItem:tv",
"IUndoRedoTransactionObserver:tw",
"TransactonClosedMetadata:tx",
"UndoRedoTransaction:ty",
"IUndoRedoItemsCollection:tz",
"UndoRedoException:t0",
"UndoRedoItem:t1",
"UndoRedoStorage:t2",
"WidgetWrapper:t3",
"VisualizationHelper:t4",
"VisualizationType:t5",
"RPEditorBaseSettingsProvider:t6",
"RPEditorSettingsBaseCell:t7",
"RPEditorSettingsInfo:t8",
"RPEditorSettingsDisplayValueType:t9",
"IDataTableResult:ua",
"IDataTable:ub",
"TableColumn:uc",
"TableCell:ud",
"DataColumn:ue",
"HierarchyCell:uf",
"DataTableResultHelper:ug",
"PivotMeasureColumn:uh",
"FieldTableColumn:ui",
"MinMaxRange:uj",
"IHierarchyColumn:uk",
"RPEditorChartSettingsProvider:ul",
"CPSelectableReorderableItem:um",
"CPSelectableReorderableListView:un",
"CPSelectableReorderableCell:uo",
"CPReorderHandleView:up",
"RPEditorGaugeSettingsProvider:uq",
"BaseVisualization:ur",
"TooltipDrillFooter:us",
"TooltipPopupItem:ut",
"TooltipPopupViewCell:uu",
"ResourceResult:uv",
"CategoryChartVisualization:uw",
"ChartBaseVisualization:ux",
"GestureState:uy",
"BarChartVisualization:uz",
"ScatterChartVisualization:u0",
"FinancialChartVisualization:u1",
"CompositeChartVisualization:u2",
"DoughnutChartVisualization:u3",
"PieChartVisualization:u4",
"SliceBaseVisualization:u5",
"FunnelChartVisualization:u6",
"PolarChartVisualization:u7",
"RadialBaseVisualization:u8",
"RadialChartVisualization:u9",
"RadialGaugeVisualization:va",
"BaseGaugeVisualization:vb",
"BulletGraphVisualization:vc",
"BulletGraphData:vd",
"BulletGraphCell:ve",
"LabelGaugeVisualization:vf",
"GridVisualization:vg",
"GridVisualizationColumnSortDelegate:vh",
"GridVisualizationCellDelegate:vi",
"GridVisualizationDataSourceHelper:vj",
"GridColumnSortInfo:vk",
"IAdHocDataTable:vl",
"RowHierarchyInfo:vm",
"GridVisualizationColumn:vn",
"GridVisualizationHeaderCell:vo",
"GridSortIconView:vp",
"GridSortPopupItem:vq",
"GridSortPopupViewCell:vr",
"AnimatedLabel:vs",
"GridVisualizationCell:vt",
"DataTableResult:vu",
"ClientDataTable:vv",
"DataTableBase:vw",
"ComputedColumn:vx",
"PivotDimensionColumn:vy",
"PivotDateDimensionColumn:vz",
"PivotAdhocColumn:v0",
"XmlaHierarchyColumn:v1",
"InMemoryDataTable:v2",
"Sorter:v3",
"AdHocClientDataTable:v4",
"AdHocUtility:v5",
"CPGridRowExpansionAnimator:v6",
"CPGridRowCollapseAnimator:v7",
"TreeMapVisualization:v8",
"TreeMapItemData:v9",
"AssetVisualization:wa",
"NativeAssetView:wb",
"JSExtensionVisualization:wc",
"CPJSExtensionBrowser:wd",
"MapVisualization:we",
"CPGoogleMap:wf",
"CPGoogleMapBase:wg",
"JSGoogleMapBounds:wh",
"JSLatLng:wi",
"LatLng:wj",
"JSGeocoder:wk",
"Action$2:wl",
"JSGeocoderResponse:wm",
"JSGeocoderGeometry:wn",
"InfoWindow:wo",
"NativeMap:wp",
"JSGoogleMapEvent:wq",
"GoogleMapType:wr",
"JSMapTypeId:ws",
"GoogleMapGeoLocation:wt",
"GoogleMapMarker:wu",
"GoogleMapMarkerIcon:wv",
"JSGoogleMapMarker:ww",
"JSHeatmapLayer:wx",
"SingleRowVisualization:wy",
"SingleRowDataSourceHelper:wz",
"SingleRowVisualizationCell:w0",
"DashboardModelUtils:w1",
"ReportPlusGetDataPayload:w2",
"WidgetDelegate:w3",
"ReportPlusGetWidgetDataRequest:w4",
"ReportPlusDataRequestBase:w5",
"ReportPlusResourceResult:w6",
"ReportPlusGetDataError:w7",
"ReportPlusError:w8",
"ReportPlusErrorCode:w9",
"ApplyFiltersBlock:xa",
"FilterInfoSnapshot:xb",
"GlobalFiltersView:xc",
"FiltersGridViewBase:xd",
"FiltersGridCell:xe",
"FilterGridDSH:xf",
"CPGridViewSingleRowSingleFieldDataSourceHelper:xg",
"BaseDataResult:xh",
"FiltersUtility:xi",
"GlobalFilterValuesResult:xj",
"HierarchicalGlobalFilterValue:xk",
"GlobalFilterValue:xl",
"DateFilterEditorViewController:xm",
"DateFilterGridCell:xn",
"FilterEditorGridCell:xo",
"FilterEditorCellInfo:xp",
"DatePickerViewController:xq",
"CPDatePicker:xr",
"CPDatePickerCell:xs",
"FilterSettingsEditorViewController:xt",
"GlobalFilterEditorViewController:xu",
"FilterEditorViewController:xv",
"SearchFiltersGridCell:xw",
"FilterEditorGridDSH:xx",
"FilterEditorGridHeaderCell:xy",
"QuickFiltersView:xz",
"ValuesResult:x0",
"HierarchicalFilterValue:x1",
"QuickFilterEditorViewController:x2",
"RPNavigationHelper:x3",
"RPNavigationPartType:x4",
"ExportSlidesViewController:x5",
"SlideEditorCell:x6",
"SlideInfo:x7",
"DynamicDashboardThumbnailPopupListItem:x8",
"DynamicDashboardThumbnailPopupCell:x9",
"ReportPlusGetDataRequest:ya",
"WidgetView:yb",
"WidgetHeaderView:yc",
"RPDashboardEditorViewController:yd",
"RPEditorAreaColumn:ye",
"RPEditorDataAreaContainer:yf",
"RPEditorContainerAreaBase:yg",
"RPEditorViewBase:yh",
"RPEditorHeaderView:yi",
"RPEditorDataView:yj",
"RPEditorFieldAreaView:yk",
"CPTabbedView:yl",
"RPEditorFieldListView:ym",
"RPEditorFieldCell:yn",
"DataLayerContextManager:yo",
"RPEditorPivotView:yp",
"RPEditorPivotDSH:yq",
"RPEditorBasePivotWrapper:yr",
"RPEditorSummarizationDimensionPivot:ys",
"RPEditorBaseDimensionPivot:yt",
"RPEditorXMLADimensionPivot:yu",
"RPEditorSummarizationValuesPivot:yv",
"RPEditorBaseValuesPivot:yw",
"RPEditorFiltersView:yx",
"RPEditorFiltersDSH:yy",
"RPEditorBaseFilterWrapper:yz",
"RPEditorFilterSectionHeaderCell:y0",
"RPEditorGlobalFilterWrapper:y1",
"RPEditorFieldFilterWrapper:y2",
"RPEditorXMLAFilterWrapper:y3",
"RPEditorAreaCell:y4",
"RPEditorVisualizationAreaContainer:y5",
"RPEditorVisualizationView:y6",
"RPEditorVizPickerView:y7",
"VisualizationStore:y8",
"RPEditorVisualizationSettingsContainerView:y9",
"RPEditorSettingsView:za",
"RPEditorSettingsDSH:zb",
"RPEditorSettingsStringCell:zc",
"RPEditorSettingsBoolCell:zd",
"RPEditorSettingsColorCell:ze",
"RPEditorSettingsIconCell:zf",
"ChangeVisualizationFooter:zg",
"ServiceNames:zh",
"ServiceProvider:zi",
"EntitiesRepository:zj",
"GenericAccountStorage:zk",
"DataSourceStorage:zl",
"CategoryStorageManager:zm",
"StorageManager:zn",
"DataSourceSecurityStorage:zo",
"SelectCredentialsFactory:zp",
"SelectCredentials:zq",
"DataSourceContext:zr",
"AccountMetadata:zs",
"ConnectionVerifier:zt",
"CreateGenericCredentials:zu",
"TaskHandle:zv",
"DataLayerAsyncBlock:zw",
"EmptyAccountMetadata:zx",
"SelectOAuthCredentials:zy",
"RPImportDataSourcesViewController:zz",
"RPImportDataSourceCell:z0",
"RPSelectCredentialsViewController:z1",
"CPSwitch:z2",
"RPAddNewGenericCredentialsViewController:z3",
"GenericCredentialFormMetadata:z4",
"FormMetadata:z5",
"FieldControlTypes:z6",
"FieldMetadata:z7",
"ValidValues:z8",
"ValueMetadata:z9",
"FieldScope:aaa",
"CredentialDataContext:aab",
"FormDataContext:aac",
"FormBuilder:aad",
"FormFieldFactory:aae",
"CPSegmentControl:aaf",
"FormContentView:aag",
"LabeledControl:aah",
"RPDatasourceSelectorViewController:aai",
"RPDatasourceSelectorCell:aaj",
"RPActionableDatasource:aak",
"RPDatasourceAction:aal",
"RPDatasourceSpreadsheetViewController:aam",
"RPCreateDataSourceViewController:aan",
"DataSourceFormMetadataFactory:aao",
"ProviderMetadata:aap",
"MetadataItem:aaq",
"Dictionary:aar",
"DataSourceFormMetadata:aas",
"PropertyDescriptor:aat",
"PropertyDescriptorType:aau",
"ValueDescriptor:aav",
"NotSupportedFormMetadata:aaw",
"DataSourceFromDataContext:aax",
"RPCloudFileNavigatorViewController:aay",
"InfragisticsUnlinkProviderRequest:aaz",
"ReportPlusUpsertDashboardRequest:aa0",
"CPAnnotationViewController:aa1",
"AnnotationCanvasDelegate:aa2",
"CPAnnotationBase:aa3",
"CPAnnotationVisualDelegate:aa4",
"CPAnnotationVisual:aa5",
"AnnotationMode:aa6",
"CPRectAnnotation:aa7",
"CPCircleAnnotation:aa8",
"CPLineAnnotation:aa9",
"CPArrowAnnotation:aba",
"CPFreeFormPenAnnotation:abb",
"CPLabelAnnotation:abc",
"CPMultilineTextView:abd",
"MultilineInputView:abe",
"AnnotationDelegate:abf",
"ReportPlusOldTheme:abg",
"AnnotationCanvas:abh",
"AnnotationSelectionViewDelegate:abi",
"AnnotationSelectionView:abj",
"AnnotationResizeHandleLocation:abk",
"CPImageAnnotation:abl",
"AnnotationDrawingView:abm",
"AnnotationToolbarButtonLocation:abn",
"AnnotationToolbar:abo",
"CPPopupSliderItem:abp",
"CPPopupSliderViewCell:abq",
"CPSlider:abr",
"CloudFileShoppingCartViewController:abs",
"CloudFilePreviewViewController:abt",
"WebHostView:abu",
"SPEvoSearchResultsErrorCellDelegate:abv",
"SPEvoSearchResultsErrorCell:abw",
"SPEvoSearchResultsSectionInfo:abx",
"SPEvoSearchResultsSectionInfoState:aby",
"SPEvoSearchResultsLoadingCell:abz",
"SPEvoSearchResultsNoResultsCell:ab0",
"SPEvoSearchResultsDataSourceHelper:ab1",
"SPEvoSearchFilterGroup:ab2",
"SPEvoSearchFilterOption:ab3",
"SPEvoSearchFilterResultType:ab4",
"SPEvoSearchFilterModificationDate:ab5",
"SPEvoSearchFilterType:ab6",
"SPEvoSearchFilterTokenValue:ab7",
"SPEvoSearchFilterLocationTokenValue:ab8",
"SPEvoSearchOptions:ab9",
"SPEvoSearchOptionsToSearchQueryMapper:aca",
"SPEvoSearchPresenterModel:acb",
"SPEvoSearchFiltersDelegate:acc",
"SPEvoSearchFiltersPresenter:acd",
"SPEvoSearchFiltersPresenterImpl:ace",
"SPEvoSearchFiltersManager:acf",
"SPEvoSearchFilterGroupUtility:acg",
"SPEvoSearchPresenterDelegate:ach",
"SPEvoSearchPresenter:aci",
"SPEvoSearchPresenterImpl:acj",
"SPEvoSearchResultsPresenter:ack",
"SPEvoSearchResultsPresenterDelegate:acl",
"SPEvoSearchResultsViewController:acm",
"SPEvoSearchResultsView:acn",
"SPEvoSearchFiltersTokensContainerView:aco",
"SPEvoSearchFilterTokenView:acp",
"SPEvoSearchViewController:acq",
"SPEvoSearchFiltersViewDelegate:acr",
"SPEvoSearchFiltersView:acs",
"SPEvoSearchFiltersData:act",
"SPEvoFiltersDataSourceHelper:acu",
"SPEvoSearchEmptyView:acv",
"SPEvoLocalizationKeys:acw",
"SPEvoAddSectionCellAnimator:acx",
"SPEvoRemoveSectionCellAnimator:acy",
"SPEvoBoardSectionContentWidgetHeaderCell:acz",
"SPEvoBoardSectionWidgetHeaderCellBase:ac0",
"SPEvoAddContentLinkViewController:ac1",
"InfragisticsToolsScraperRequest:ac2",
"SPEvoBoardSectionEmptyWidgetCell:ac3",
"EMEmptyStateView:ac4",
"SPEvoBoardSectionGoalsWidgetHeaderCell:ac5",
"SPEvoBoardSectionNotesWidgetHeaderCell:ac6",
"SPEvoBoardSectionTasksWidgetHeaderCell:ac7",
"SPEvoBoardSectionView:ac8",
"SPEvoBoardWidgetDataSourceHelper:ac9",
"SPEvoBoardSectionWidgetColumn:ada",
"SPEvoContentWidgetDashboardCell:adb",
"SPEvoContentWidgetFileCell:adc",
"SPEvoContentWidgetLinkCell:add",
"SPEvoTaskWidgetCell:ade",
"CPObjectDelegate:adf",
"SPEvoTaskViewerViewController:adg",
"SPEvoTaskViewer:adh",
"SPEvoTaskViewerBase:adi",
"SPEvoTaskView:adj",
"SPEvoTaskActivityView:adk",
"SPEvoTaskDetailsView:adl",
"SPEvoTaskDSH:adm",
"SPEvoTaskDetailsCell:adn",
"EMTeamMemberPopupItem:ado",
"EMTeamMemberPopupCell:adp",
"SPEvoTaskStatePopupItem:adq",
"SPEVotaskStatePopupCell:adr",
"SPEvoTasksListView:ads",
"SPEvoAddNewTaskInfo:adt",
"SPEvoTaskInsertView:adu",
"SPEvoTasksDSH:adv",
"InfragisticsReorderTasksRequest:adw",
"InfragisticsInsertTasksRequest:adx",
"InfragisticsDeleteTasksRequest:ady",
"SPEvoAnalyticsUtility:adz",
"SPEvoBoardSectionDSH:ad0",
"SPEvoBoardAddSectionButtonView:ad1",
"SPEvoBoardsRootViewController:ad2",
"EMTeamsRootNavigatorViewController:ad3",
"EMNavigationPageViewController:ad4",
"EMRootViewController:ad5",
"EMToolbar:ad6",
"EMNavBarBase:ad7",
"EMNavBarButtonBase:ad8",
"EMNavigationBarItem:ad9",
"EMToolbarButton:aea",
"EMSideNavBar:aeb",
"CPNavigationView:aec",
"EMSideNavBarButton:aed",
"EMCreateTeamViewController:aee",
"EMBaseViewController:aef",
"EMTeamNameTextBox:aeg",
"CPColorListView:aeh",
"ColorInfo:aei",
"CPColorColumn:aej",
"CPColorCell:aek",
"GoogleGetEmailAddressesRequest:ael",
"InfragisticsGetTeamRequest:aem",
"InfragisticsAddOrUpdateTeamRequest:aen",
"EMTeamMembersViewController:aeo",
"EMTeamMemberCell:aep",
"EMInviteTeamMemberCell:aeq",
"MicrosoftGetEmailAddressesRequest:aer",
"EMTeamsNavigatorViewController:aes",
"EMTeamNavigatorView:aet",
"InfragisticsDeleteTeamMemberRequest:aeu",
"InfragisticsDeleteTeamRequest:aev",
"SPEvoRootViewController:aew",
"SPEvoHomeViewController:aex",
"SPEvoPersonalBoardView:aey",
"SPEvoBoardView:aez",
"SPEvoCloudProvidersListView:ae0",
"CombindedProviderInfo:ae1",
"SPEvoBoardNavigatorView:ae2",
"InfragisticsDeleteTeamBoardRequest:ae3",
"CPGridViewInsertRowAnimator:ae4",
"SPEvoSettingsViewController:ae5",
"SPEvoWorkspacesViewController:ae6",
"SPEvoNotificationsViewController:ae7",
"SPEvoBoardViewController:ae8",
"SPEvoBoardsViewController:ae9",
"SPSignInManager:afa",
"AbstractEnumerable:afb",
"Func$1:afc",
"AbstractEnumerator:afd",
"GenericEnumerable$1:afe",
"GenericEnumerator$1:aff"]);
/*<BeginType Name="Infragistics.SPEvoSelectorDepth" />*/

$.ig.util.defType('SPEvoSelectorDepth', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Board";
			case 1: return "Team";
			case 2: return "Section";
			case 3: return "ContentWidget";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('SPEvoSelectorDepth', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSelectorDepth" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsSectionInfoState" />*/

$.ig.util.defType('SPEvoSearchResultsSectionInfoState', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "SearchResultsSectionInfoStateLoading";
			case 1: return "SearchResultsSectionInfoStateError";
			case 2: return "SearchResultsSectionInfoStateNoResults";
			case 3: return "SearchResultsSectionInfoStateResults";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('SPEvoSearchResultsSectionInfoState', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsSectionInfoState" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterModificationDate" />*/

$.ig.util.defType('SPEvoSearchFilterModificationDate', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "NotSet";
			case 1: return "Past24Hours";
			case 2: return "PastWeek";
			case 3: return "PastMonth";
			case 4: return "PastSixMonths";
			case 5: return "PastYear";
			case 6: return "Earlier";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('SPEvoSearchFilterModificationDate', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterModificationDate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterResultType" />*/

$.ig.util.defType('SPEvoSearchFilterResultType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "NotSet";
			case 1: return "Files";
			case 2: return "Documents";
			case 3: return "Spreadsheets";
			case 4: return "Presentations";
			case 5: return "PDF";
			case 6: return "Images";
			case 7: return "Visualizations";
			case 8: return "Sites";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('SPEvoSearchFilterResultType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterResultType" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterType" />*/

$.ig.util.defType('SPEvoSearchFilterType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "ResultType";
			case 1: return "Location";
			case 2: return "ModificationDate";
			case 3: return "ModifiedBy";
			case 4: return "Keywords";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('SPEvoSearchFilterType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterType" />*/

/*<BeginType Name="Infragistics.CloudFileSelectionAction" />*/

$.ig.util.defType('CloudFileSelectionAction', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Copy";
			case 1: return "Move";
			case 2: return "Select";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('CloudFileSelectionAction', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFileSelectionAction" />*/

/*<BeginType Name="Infragistics.CloudFileSelectionType" />*/

$.ig.util.defType('CloudFileSelectionType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Files";
			case 1: return "Folders";
			case 2: return "Both";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('CloudFileSelectionType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFileSelectionType" />*/

/*<BeginType Name="Infragistics.CloudFileSelectionMode" />*/

$.ig.util.defType('CloudFileSelectionMode', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Optional";
			case 1: return "Never";
			case 2: return "Always";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('CloudFileSelectionMode', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFileSelectionMode" />*/

/*<BeginType Name="Infragistics.NativeSPEvoLocalizeUtil" />*/

$.ig.util.defType('NativeSPEvoLocalizeUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.NativeSPEvoLocalizeUtil::Localize(System.String)" />*/
	localize: function (val) {
		var dictionary = "$.ig.spevo.strings";
		var language = $.ig.NativeSPEvoLocalizeUtil.prototype.getLanguage();
		if (language != "en") {
			var altDictionary = dictionary + "_" + language;
			if (eval(altDictionary) != null) {
				dictionary = altDictionary;
			}
		}
		dictionary = dictionary + "[val]";
		var text = eval(dictionary);
		if (text == null) {
			text = val;
		}
		return text;
	}
	/*<EndMethod Name="System.String Infragistics.NativeSPEvoLocalizeUtil::Localize(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeSPEvoLocalizeUtil::GetLanguage()" />*/
	getLanguage: function () {
		var language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
		return language.split("-")[0];
	}
	/*<EndMethod Name="System.String Infragistics.NativeSPEvoLocalizeUtil::GetLanguage()" />*/
	,
	$type: new $.ig.Type('NativeSPEvoLocalizeUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeSPEvoLocalizeUtil" />*/

/*<BeginType Name="Infragistics.SPEvoBaseViewController" />*/

$.ig.util.defType('SPEvoBaseViewController', 'ViewControllerScreenBase', {
	init: function () {
		$.ig.ViewControllerScreenBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.SPEvoBaseViewController::LocalizeText(System.String)" />*/
	localizeText: function (key) {
		return $.ig.NativeEMLocalizeUtil.prototype.localize(key);
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoBaseViewController::LocalizeText(System.String)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoBaseViewController::UseScrollView()" />*/
	useScrollView: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoBaseViewController::UseScrollView()" />*/
	,
	$type: new $.ig.Type('SPEvoBaseViewController', $.ig.ViewControllerScreenBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBaseViewController" />*/

/*<BeginType Name="Infragistics.AddSharePointO365ViewController" />*/

$.ig.util.defType('AddSharePointO365ViewController', 'SPEvoBaseViewController', {
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointO365ViewController::EnterCredentials()" />*/
	enterCredentials: function () {
		var sharePointUrl = $.ig.NativeRequestUtility.prototype.utility().uRLEncodeString(this.__sharePointUrlTextView.getText());
		window.location.href = '/Link/LinkSharePoint?url=' + sharePointUrl;
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointO365ViewController::EnterCredentials()" />*/
	,
	__enterCredentialsButton: null,
	__sharePointUrlTextView: null,
	init: function () {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.AddSharePointO365ViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AddSharePointO365ViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.AddSharePointO365ViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AddSharePointO365ViewController::HasNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointO365ViewController::Setup()" />*/
	setup: function () {
		$.ig.SPEvoBaseViewController.prototype.setup.call(this);
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointO365ViewController::Setup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointO365ViewController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.loadSubviews.call(this);
		this.title(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointAddPortal));
		this.__sharePointUrlTextView = new $.ig.MaterialEditBox(false);
		this.__sharePointUrlTextView.setHintText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointSiteURL));
		this.__sharePointUrlTextView.registerTextChanged(function () {
			$self.textChanged();
		});
		this.addSubview(this.__sharePointUrlTextView);
		this.registerTextBox(this.__sharePointUrlTextView.editor());
		this.__enterCredentialsButton = new $.ig.PathIconLabelButton(1);
		this.__enterCredentialsButton.addClickHandler(function (x, y) {
			$self.enterCredentials();
		});
		this.__enterCredentialsButton.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointEnterCredentials));
		this.__enterCredentialsButton.clipToBounds(true);
		this.__enterCredentialsButton.setBackgroundColor($.ig.ColorUtility.prototype.createNativeColor(255, 190, 230, 197));
		this.__enterCredentialsButton.setColor($.ig.ColorUtility.prototype.createNativeColor(255, 255, 255, 255));
		this.__enterCredentialsButton.setTextAlignment($.ig.TextAlignment.prototype.center);
		this.__enterCredentialsButton.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		$.ig.ThemeManager.prototype.currentTheme().applyButtonShadowToView(this.__enterCredentialsButton);
		this.addSubview(this.__enterCredentialsButton);
		this.__enterCredentialsButton.disable();
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointO365ViewController::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointO365ViewController::TextChanged()" />*/
	textChanged: function () {
		var url = this.__sharePointUrlTextView.getText();
		if (url.length > 0 && $.ig.NativeRequestUtility.prototype.utility().isValidUrl(url)) {
			this.__enterCredentialsButton.enable();
			this.__enterCredentialsButton.setBackgroundColor($.ig.ColorUtility.prototype.createNativeColor(255, 84, 214, 106));
		} else {
			this.__enterCredentialsButton.disable();
			this.__enterCredentialsButton.setBackgroundColor($.ig.ColorUtility.prototype.createNativeColor(255, 190, 230, 197));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointO365ViewController::TextChanged()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointO365ViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.__sharePointUrlTextView.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
		this.__sharePointUrlTextView.calculateSizeToFit();
		var eh = this.__sharePointUrlTextView.getCalculatedHeight();
		var top = $.ig.intDivide(h, 2) - $.ig.intDivide(eh, 2) - this._padding;
		this.measureView(this.__sharePointUrlTextView, $.ig.intDivide(w, 2) - $.ig.intDivide(this._editBoxWidth, 2), top, this._editBoxWidth, eh);
		this.__enterCredentialsButton.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
		this.__enterCredentialsButton.calculateSizeToFit();
		var bh = this.__enterCredentialsButton.getCalculatedHeight();
		top += eh + this._padding;
		this.measureView(this.__enterCredentialsButton, $.ig.intDivide(w, 2) - $.ig.intDivide(this._editBoxWidth, 2), top, this._editBoxWidth, bh);
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointO365ViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('AddSharePointO365ViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AddSharePointO365ViewController" />*/

/*<BeginType Name="Infragistics.AddSharePointViewController" />*/

$.ig.util.defType('AddSharePointViewController', 'SPEvoBaseViewController', {
	__defaultSharePointButton: null,
	__customSharePointButton: null,
	__onPremisesSharePointButton: null,
	__orLabel: null,
	__orLabel2: null,
	init: function () {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.AddSharePointViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AddSharePointViewController::HasNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::Setup()" />*/
	setup: function () {
		$.ig.SPEvoBaseViewController.prototype.setup.call(this);
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::Setup()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.AddSharePointViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AddSharePointViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.loadSubviews.call(this);
		this.title(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointAddPortal));
		this.__defaultSharePointButton = new $.ig.PathIconLabelButton(1);
		this.__defaultSharePointButton.addClickHandler(function (x, y) {
			$self.addDefaultSharePoint();
		});
		this.__defaultSharePointButton.setIcon($.ig.EMContentIcons.prototype.icons().getOffice365LightIcon());
		this.__defaultSharePointButton.setOutlineOnly(false);
		this.__defaultSharePointButton.clipToBounds(true);
		this.__defaultSharePointButton.setBackgroundColor($.ig.ColorUtility.prototype.createNativeColor(255, 213, 77, 51));
		this.__defaultSharePointButton.setColor($.ig.ColorUtility.prototype.createNativeColor(255, 255, 255, 255));
		this.__defaultSharePointButton.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointDefaultSite));
		this.__defaultSharePointButton.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		$.ig.ThemeManager.prototype.currentTheme().applyButtonShadowToView(this.__defaultSharePointButton);
		this.addSubview(this.__defaultSharePointButton);
		this.__orLabel = new $.ig.CPLabel();
		this.__orLabel.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointOr));
		this.__orLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.addSubview(this.__orLabel);
		this.__customSharePointButton = new $.ig.PathIconLabelButton(1);
		this.__customSharePointButton.addClickHandler(function (x, y) {
			$self.addCustomSharePoint();
		});
		this.__customSharePointButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeActionColor());
		this.__customSharePointButton.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointCustomSite));
		this.__customSharePointButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.addSubview(this.__customSharePointButton);
		if (this.hasOnPremisesSharePointButton()) {
			this.__orLabel2 = new $.ig.CPLabel();
			this.__orLabel2.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointOr));
			this.__orLabel2.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
			this.addSubview(this.__orLabel2);
			this.__onPremisesSharePointButton = new $.ig.PathIconLabelButton(1);
			this.__onPremisesSharePointButton.addClickHandler(function (x, y) {
				$self.addOnPremisesSharePoint($self.__onPremisesSharePointButton);
			});
			this.__onPremisesSharePointButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeActionColor());
			this.__onPremisesSharePointButton.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.sharePointOnPremisesSite));
			this.__onPremisesSharePointButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
			this.addSubview(this.__onPremisesSharePointButton);
		}
		var closeButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		});
		this.addRightBarButtonItem(closeButton);
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::AddDefaultSharePoint()" />*/
	addDefaultSharePoint: function () {
		window.location.href = '/Link/LinkSharePoint';
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::AddDefaultSharePoint()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::AddCustomSharePoint()" />*/
	addCustomSharePoint: function () {
		var vc = new $.ig.AddSharePointO365ViewController();
		this.navigationController().pushViewController(vc, true);
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::AddCustomSharePoint()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		var stackedElementsHeight = 0;
		this.__defaultSharePointButton.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
		this.__defaultSharePointButton.calculateSizeToFit();
		var bw = this.__defaultSharePointButton.getCalculatedWidth() + $.ig.intDivide(this._padding, 2);
		var bh = this.__defaultSharePointButton.getCalculatedHeight() + $.ig.intDivide(this._padding, 4);
		this.__defaultSharePointButton.setIconSize($.ig.truncate((this._smallFontSize * 1.8)));
		this.__orLabel.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
		this.__orLabel.calculateSizeToFit();
		var orw = this.__orLabel.getCalculatedWidth();
		var orh = this.__orLabel.getCalculatedHeight();
		this.__customSharePointButton.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
		this.__customSharePointButton.calculateSizeToFit();
		var b2w = this.__customSharePointButton.getCalculatedWidth();
		var b2h = this.__customSharePointButton.getCalculatedHeight();
		stackedElementsHeight = bh + orh + b2h + 2 * this._padding;
		var or2w = 0;
		var or2h = 0;
		var b3w = 0;
		var b3h = 0;
		if (this.hasOnPremisesSharePointButton()) {
			this.__orLabel2.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
			this.__orLabel2.calculateSizeToFit();
			or2w = this.__orLabel2.getCalculatedWidth();
			or2h = this.__orLabel2.getCalculatedHeight();
			this.__onPremisesSharePointButton.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
			this.__onPremisesSharePointButton.calculateSizeToFit();
			b3w = this.__onPremisesSharePointButton.getCalculatedWidth();
			b3h = this.__onPremisesSharePointButton.getCalculatedHeight();
			stackedElementsHeight += or2h + b3h + 2 * this._padding;
		}
		var top = $.ig.intDivide(h, 2) - $.ig.intDivide(stackedElementsHeight, 2);
		this.measureView(this.__defaultSharePointButton, $.ig.intDivide(w, 2) - $.ig.intDivide(bw, 2), top, bw, bh);
		top += bh + this._padding;
		this.measureView(this.__orLabel, $.ig.intDivide(w, 2) - $.ig.intDivide(orw, 2), top, orw, orh);
		top += orh + this._padding;
		this.measureView(this.__customSharePointButton, $.ig.intDivide(w, 2) - $.ig.intDivide(b2w, 2), top, b2w, b2h);
		if (this.hasOnPremisesSharePointButton()) {
			top += b2h + this._padding;
			this.measureView(this.__orLabel2, $.ig.intDivide(w, 2) - $.ig.intDivide(or2w, 2), top, or2w, or2h);
			top += or2h + this._padding;
			this.measureView(this.__onPremisesSharePointButton, $.ig.intDivide(w, 2) - $.ig.intDivide(b3w, 2), top, b3w, b3h);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.AddSharePointViewController::HasOnPremisesSharePointButton()" />*/
	hasOnPremisesSharePointButton: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AddSharePointViewController::HasOnPremisesSharePointButton()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::AddOnPremisesSharePoint(Infragistics.CPView)" />*/
	addOnPremisesSharePoint: function (sender) {
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::AddOnPremisesSharePoint(Infragistics.CPView)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AddSharePointViewController::OnAddSharePointFinish(System.Object)" />*/
	onAddSharePointFinish: function (providerIdObj) {
		var providerId = providerIdObj;
		$.ig.CPNavigatorManager.prototype.popToRoot(false);
		$.ig.CPNavigatorManager.prototype.pushPathPart(providerId, true);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryProviders, $.ig.EMGoogleAnalyticsConstants.prototype.actionCreate, $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.sharePoint));
	}
	/*<EndMethod Name="System.Void Infragistics.AddSharePointViewController::OnAddSharePointFinish(System.Object)" />*/
	,
	$type: new $.ig.Type('AddSharePointViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AddSharePointViewController" />*/

/*<BeginType Name="Infragistics.CloudFolderSelectionDelegate" />*/

$.ig.util.defType('CloudFolderSelectionDelegate', 'Object', {
	$type: new $.ig.Type('CloudFolderSelectionDelegate', null)
}, true);

/*<EndType Name="Infragistics.CloudFolderSelectionDelegate" />*/

/*<BeginType Name="Infragistics.CloudFileRemovedDelegate" />*/

$.ig.util.defType('CloudFileRemovedDelegate', 'Object', {
	$type: new $.ig.Type('CloudFileRemovedDelegate', null)
}, true);

/*<EndType Name="Infragistics.CloudFileRemovedDelegate" />*/

/*<BeginType Name="Infragistics.CloudFileNavigationViewController" />*/

$.ig.util.defType('CloudFileNavigationViewController', 'SPEvoBaseViewController', {
	__gridView: null,
	__manager: null,
	__selectionManager: null,
	__copyMoveSelectionManager: null,
	__selectionDelegate: null,
	__floatingButton: null,
	__selectButton: null,
	__closeButton: null,
	__providerPicker: null,
	__getFilesRequest: null,
	__getMetaDataRequest: null,
	__rootPath: null,
	__rootName: null,
	__boardId: null,
	__rootFile: null,
	__selectedFile: null,
	__emptyLabel: null,
	__provider: null,
	init: function (initNumber, provider, selectionManager) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__manager = $.ig.CloudProviderTypeUtility.prototype.createFileManagerForProvider(provider);
		this.__rootPath = this.__manager.rootPath();
		this.__rootName = provider.title();
		this.__selectionManager = selectionManager;
		this.__provider = provider;
	},
	init1: function (initNumber, provider, rootName, path, boardId, selectionManager) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__manager = $.ig.CloudProviderTypeUtility.prototype.createFileManagerForProvider(provider);
		this.__rootName = rootName;
		this.__rootPath = path;
		this.__selectionManager = selectionManager;
		this.__provider = provider;
		this.__boardId = boardId;
	},
	/*<BeginProperty Name="System.String Infragistics.CloudFileNavigationViewController::Path()" />*/
	path: function () {
		return this.__rootPath;
	}
	/*<EndProperty Name="System.String Infragistics.CloudFileNavigationViewController::Path()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetCloudFileManager(Infragistics.CloudFileManager)" />*/
	setCloudFileManager: function (manager) {
		this.__manager = manager;
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetCloudFileManager(Infragistics.CloudFileManager)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFileNavigationViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFileNavigationViewController::HasNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.loadSubviews.call(this);
		var dsh = new $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper(0, new $.ig.RPDashboardSelectorColumn(this));
		dsh._sectionKey = "SectionKey";
		dsh._sectionHeaderCellGenerator = function (g, path) {
			return $self.createSectionHeaderCell(g, path._sectionIndex);
		};
		this.__gridView = new $.ig.CPDynamicColumnGridView(1, dsh);
		this.view().addSubview(this.__gridView);
		this.setupNavBar();
		this.ensureFloatingButton();
		this.ensureSelectionMode();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::LoadSubviews()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFileNavigationViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFileNavigationViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetupNavBarButtons()" />*/
	setupNavBarButtons: function () {
		var $self = this;
		if (this.__selectionManager == null || this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.select) {
			this.__providerPicker = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.CloudFileUtility.prototype.resolveIconForProvider(this.__manager.getProviderType()), function (x, y) {
				$self.showPickerPopup();
			});
			this.addLeftBarButtonItem(this.__providerPicker);
		}
		$.ig.SPEvoBaseViewController.prototype.setupNavBarButtons.call(this);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetupNavBarButtons()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetupNavBar()" />*/
	setupNavBar: function () {
		this.title(this.__rootName);
		this.ensureRightBarButtons();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetupNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureRightBarButtons()" />*/
	ensureRightBarButtons: function () {
		var $self = this;
		if (this.__closeButton == null && (this.__selectionManager == null || this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.select)) {
			this.__closeButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
				$self.close();
			});
			this.addRightBarButtonItem(this.__closeButton);
		}
		if (this.__selectButton == null && this.__selectionManager != null && this.__selectionManager.mode() == $.ig.CloudFileSelectionMode.prototype.optional && this.isSelectionEnabledInCurrentLocation()) {
			this.__selectButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getSelectIcon(), function (x, y) {
				$self.enterSelectMode(true);
			});
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureRightBarButtons()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::IsSelectionEnabledInCurrentLocation()" />*/
	isSelectionEnabledInCurrentLocation: function () {
		if (this.__rootFile == null && this.__provider.provider() == $.ig.CloudProviderType.prototype.googleProvider) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::IsSelectionEnabledInCurrentLocation()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureFloatingButton()" />*/
	ensureFloatingButton: function () {
		var $self = this;
		if (this.__floatingButton == null && this.__selectionManager != null && this.__selectionManager.mode() != $.ig.CloudFileSelectionMode.prototype.never) {
			if (this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.select) {
				var reviewSelectedBlock = function () {
					if ($self.__selectionManager._selectedFiles.length > 0) {
						var vc = new $.ig.CloudFileShoppingCartViewController($self.__selectionManager, $self);
						var nav = new $.ig.CPNavigationViewController(1, vc);
						$.ig.CPPopupManager.prototype.showNavigationControllerPopup($self.__floatingButton, null, nav, $.ig.CPPopupPosition.prototype.above, null, null);
					}
				};
				var reviewSelected = new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getDrawerIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.reviewSelectedItems), "", function (o) {
					reviewSelectedBlock();
					return true;
				});
				var clearSelection = new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getCloseIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.clearSelection), "", function (o) {
					$self.__selectionManager.clearFileSelection();
					$self.updateFloatingButton();
					$self.__gridView.refreshGrid();
					return true;
				});
				var popupItems = new $.ig.Array();
				popupItems.add(reviewSelected);
				popupItems.add(clearSelection);
				var cancelBlock = function () {
					$self.__selectionManager.clearFileSelection();
					$self.updateFloatingButton();
					$self.exitSelectMode(true);
				};
				this.__floatingButton = new $.ig.SPEvoSelectorButton(cancelBlock, reviewSelectedBlock, function () {
					$.ig.CloudFileNavigationViewController.prototype.internalPinFiles($self.__selectionManager.getSelectedFiles(), $self.__floatingButton.confirmButton(), function () {
						if ($self.__selectionManager != null) {
							$self.__selectionManager.clearFileSelection();
							$self.updateFloatingButton();
							$self.exitSelectMode(true);
						}
					}, $.ig.CPPopupPosition.prototype.auto, false);
				}, popupItems, $.ig.EMIcons.prototype.icons().getContentIcon());
			} else {
				this.__floatingButton = new $.ig.CPSplitButton(this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.move ? this.localizeText($.ig.EMLocalizationKeys.prototype.moveHere) : this.localizeText($.ig.EMLocalizationKeys.prototype.copyHere), this.localizeText($.ig.EMLocalizationKeys.prototype.cancel), function () {
					$self.moveOrCopyClicked();
				}, function () {
					$self.close();
				}, $.ig.ThemeManager.prototype.currentTheme().confirmColor());
				if (!this.__selectionDelegate.isValidDestination(this.__provider.provider(), this.__rootFile)) {
					this.__floatingButton.confirmButton().disable();
				}
			}
			if (this.__floatingButton != null) {
				this.view().addSubview(this.__floatingButton);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureFloatingButton()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::MoveOrCopyClicked()" />*/
	moveOrCopyClicked: function () {
		if (this.__selectionDelegate != null && this.__selectionManager != null) {
			this.__selectionDelegate.cloudFolderSelected(this.__rootFile, this.__selectionManager.action());
		}
		this.close();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::MoveOrCopyClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ShowPickerPopup()" />*/
	showPickerPopup: function () {
		var $self = this;
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		var providers = userFile.providers();
		var count = providers.length;
		var items = new $.ig.Array();
		for (var i = 0; i < count; i++) {
			var provider = providers[i];
			items.add(new $.ig.SPEvoProviderPopupItem(provider, (provider.uniqueId().equals(this.__provider.uniqueId())), function (o) {
				$self.navigateToProvider(((o).uniqueId()));
				return true;
			}));
		}
		$.ig.CPPopupManager.prototype.showList3(this.__providerPicker, this.__providerPicker, items, $.ig.CPPopupPosition.prototype.auto, this.localizeText($.ig.EMLocalizationKeys.prototype.selectConnection), null);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ShowPickerPopup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::NavigateToProvider(System.String)" />*/
	navigateToProvider: function (providerId) {
		var vcs = new $.ig.Array();
		vcs.add(new $.ig.CloudFileNavigationViewController(0, $.ig.EMUserFileManager.prototype.getUserFile().resolveProviderForID(providerId), this.__selectionManager));
		this.navigationController().setViewControllers(vcs, false);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::NavigateToProvider(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetCurrentProvider(Infragistics.ProviderBase)" />*/
	setCurrentProvider: function (provider) {
		this.__providerPicker.setIcon($.ig.CloudFileUtility.prototype.resolveIconForProvider(provider.provider()));
		this.__providerPicker.update();
		this.navigationController().refreshButtons();
		var vc = new $.ig.CloudFileNavigationViewController(0, this.__provider, this.__selectionManager);
		var vcs = new $.ig.Array();
		vcs.add(vc);
		this.navigationController().setViewControllers(vcs, false);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::SetCurrentProvider(Infragistics.ProviderBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::InternalPinFiles(Infragistics.CPList, Infragistics.CPViewBase, Infragistics.ExecutionBlock, Infragistics.CPPopupPosition, System.Boolean)" />*/
	internalPinFiles: function (files, relView, action, position, triggeredFromCell) {
		var mode = triggeredFromCell ? "Simple" : "Multi";
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryFileNavigation, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinStarted, "SelectMode: " + mode);
		$.ig.CloudFileNavigationViewController.prototype.pinFiles(files, relView, function () {
			$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryFileNavigation, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinCompleted, "");
		}, position);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::InternalPinFiles(Infragistics.CPList, Infragistics.CPViewBase, Infragistics.ExecutionBlock, Infragistics.CPPopupPosition, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::PinFiles(Infragistics.CPList, Infragistics.CPViewBase, Infragistics.ExecutionBlock, Infragistics.CPPopupPosition)" />*/
	pinFiles: function (files, relView, action, position) {
		var nav = new $.ig.CPNavigationViewController(1, new $.ig.SPEvoBoardSelectorViewController($.ig.SPEvoSelectorDepth.prototype.contentWidget, function (bId, w) {
			$.ig.CloudFileNavigationViewController.prototype.addFilesToContentWidget(files, bId, w);
			if (action != null) {
				action();
			}
		}));
		$.ig.CPPopupManager.prototype.showNavigationControllerPopup(relView, relView, nav, position, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pinToBoard), null);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::PinFiles(Infragistics.CPList, Infragistics.CPViewBase, Infragistics.ExecutionBlock, Infragistics.CPPopupPosition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::AddFilesToContentWidget(Infragistics.CPList, System.String, Infragistics.EMBoardContentWidget)" />*/
	addFilesToContentWidget: function (files, boardId, widget) {
		var count = files.length;
		for (var i = 0; i < count; i++) {
			var file = files[i];
			$.ig.CloudFileNavigationViewController.prototype.givePermissions(boardId, file);
			widget.addFile(file);
		}
		var message;
		if (count == 1) {
			var file1 = files[0];
			message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.itemPinnedNotificationMessage);
			message = $.ig.NativeStringUtility.prototype.replace(message, "%@", file1.name());
		} else {
			message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.itemsPinnedNotificationMessage);
			message = $.ig.NativeStringUtility.prototype.replace(message, "%@", count.toString());
		}
		$.ig.EMBoardManager.prototype.updateBoardById(boardId, message);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::AddFilesToContentWidget(Infragistics.CPList, System.String, Infragistics.EMBoardContentWidget)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::GivePermissions(System.String, Infragistics.GenericCloudFile)" />*/
	givePermissions: function (boardId, file) {
		var request = new $.ig.InfragisticsShareFileRequest(boardId, file.providerId(), file.pathIdentifier(), function (r2, result) {
		}, function (r2, e) {
		});
		request.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::GivePermissions(System.String, Infragistics.GenericCloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::UpdateFloatingButton()" />*/
	updateFloatingButton: function () {
		if (this.__floatingButton != null && this.__selectionManager != null && this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.select) {
			(this.__floatingButton).updateItemsCount(this.__selectionManager._selectedFiles.length);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::UpdateFloatingButton()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::RemoveSelectedCloudFile(Infragistics.CloudFileSelectedCell)" />*/
	removeSelectedCloudFile: function (cell) {
		this.updateFloatingButton();
		this.__gridView.refreshGrid();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::RemoveSelectedCloudFile(Infragistics.CloudFileSelectedCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnterSelectMode(System.Boolean)" />*/
	enterSelectMode: function (animate) {
		if (this.__floatingButton != null) {
			this.__floatingButton.isHidden(false);
			this.updateFloatingButton();
		}
		if (this.__gridView.hasData()) {
			if (this.__selectionManager.mode() == $.ig.CloudFileSelectionMode.prototype.optional) {
				this.__selectionManager.editMode(true);
				this.clearRightBarItems();
				this.addRightBarButtonItem(this.__closeButton);
				this.__gridView.refreshGrid();
			}
			this.updateLayout(null, animate);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnterSelectMode(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ExitSelectMode(System.Boolean)" />*/
	exitSelectMode: function (animate) {
		var $self = this;
		if (this.__gridView.hasData()) {
			this.clearRightBarItems();
			this.addRightBarButtonItem(this.__closeButton);
			if (this.__selectButton != null) {
				this.addRightBarButtonItem(this.__selectButton);
			}
			if (this.__selectionManager.editMode()) {
				this.__selectionManager.editMode(false);
				this.__gridView.refreshGrid();
			}
			this.updateLayout(function (finished) {
				if ($self.__floatingButton != null) {
					$self.__floatingButton.isHidden(true);
				}
			}, animate);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ExitSelectMode(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::UpdateLayout(Infragistics.ExecutionBoolBlock, System.Boolean)" />*/
	updateLayout: function (finished, animate) {
		var $self = this;
		var editMode = (this.__selectionManager != null) ? this.__selectionManager.editMode() : false;
		if (animate) {
			this.view().animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
				$self.layout($self.view().currentWidth(), $self.view().currentHeight(), editMode);
			}, finished);
		} else {
			this.layout(this.view().currentWidth(), this.view().currentHeight(), editMode);
			if (finished != null) {
				finished(true);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::UpdateLayout(Infragistics.ExecutionBoolBlock, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewWillDisappear(System.Boolean)" />*/
	viewWillDisappear: function (animated) {
		$.ig.SPEvoBaseViewController.prototype.viewWillDisappear.call(this, animated);
		$.ig.ProgressHelper.prototype.hideProgress(this.view(), false);
		if (this.__getFilesRequest != null) {
			this.__getFilesRequest.cancel();
			this.__getFilesRequest = null;
		}
		if (this.__getMetaDataRequest != null) {
			this.__getMetaDataRequest.cancel();
			this.__getMetaDataRequest = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewWillDisappear(System.Boolean)" />*/
	,
	__isVCLoaded: false,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Loaded()" />*/
	loaded: function () {
		$.ig.SPEvoBaseViewController.prototype.loaded.call(this);
		this.__isVCLoaded = true;
		this.refreshFiles(true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Loaded()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::RefreshFiles(System.Boolean)" />*/
	refreshFiles: function (showLoadingIndicator) {
		var $self = this;
		if (this.__rootName == null && this.__getMetaDataRequest == null) {
			this.__getMetaDataRequest = this.__manager.getMetadata(this.__rootPath, function (file) {
				$self.__rootName = file.name();
				$self.title($self.__rootName);
				$self.__getMetaDataRequest = null;
			}, function (e) {
				$self.__getMetaDataRequest = null;
			});
			if (this.__getMetaDataRequest != null) {
				this.__getMetaDataRequest.execute();
			}
		}
		if (this.__getFilesRequest == null && this.__isVCLoaded) {
			if (showLoadingIndicator) {
				$.ig.ProgressHelper.prototype.showProgress1(this.view());
			}
			this.__getFilesRequest = this.__manager.getFilesInFolder(this.__rootPath, function (files) {
				$self.gotFiles(files);
			}, function (e) {
				$.ig.EMUtility.prototype.handleError($self.view(), $self.__getFilesRequest, e);
				$self.__getFilesRequest = null;
			});
			this.__getFilesRequest.execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::RefreshFiles(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewWillAppear(System.Boolean)" />*/
	viewWillAppear: function (animated) {
		$.ig.SPEvoBaseViewController.prototype.viewWillAppear.call(this, animated);
		if (this.__gridView != null && !this.__gridView.hasData()) {
			this.refreshFiles(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewWillAppear(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureSelectionMode()" />*/
	ensureSelectionMode: function () {
		if (this.__selectionManager != null && this.__gridView != null) {
			if (this.__selectionManager.editMode()) {
				this.enterSelectMode(false);
			} else {
				this.exitSelectMode(false);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::EnsureSelectionMode()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::GotFiles(Infragistics.CPList)" />*/
	gotFiles: function (files) {
		this.__getFilesRequest = null;
		if (files != null && files.length > 0) {
			this.__gridView.isHidden(false);
			files = $.ig.NativeUIUtility.prototype.utility().sortListAlpha(files, "Name", true);
			if (this.__emptyLabel != null) {
				this.view().removeSubview(this.__emptyLabel);
				this.__emptyLabel = null;
			}
		} else {
			this.__gridView.isHidden(true);
			if (this.__emptyLabel == null) {
				this.__emptyLabel = new $.ig.CPLabel();
				this.__emptyLabel.setTextAlignment($.ig.TextAlignment.prototype.center);
				this.__emptyLabel.setTextWrapping(true);
				this.__emptyLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeMainTitleColor());
				this.__emptyLabel.setText(this.resolveNoContentString());
				this.view().addSubview(this.__emptyLabel);
				if (this.view().currentWidth() > 0 && this.view().currentHeight() > 0) {
					this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
				}
			}
		}
		this.__gridView.setData(files);
		this.ensureSelectionMode();
		$.ig.ProgressHelper.prototype.hideProgress(this.view(), true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::GotFiles(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CloudFileNavigationViewController::ResolveNoContentString()" />*/
	resolveNoContentString: function () {
		return this.localizeText($.ig.EMLocalizationKeys.prototype.noFilesFoundText);
	}
	/*<EndMethod Name="System.String Infragistics.CloudFileNavigationViewController::ResolveNoContentString()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.layout(w, h, this.__selectionManager != null ? this.__selectionManager.editMode() : false);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Layout(System.Int32, System.Int32, System.Boolean)" />*/
	layout: function (w, h, editMode) {
		var selectorButtonHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		if (this.__floatingButton != null) {
			var selectorButtonWidth = $.ig.truncate((selectorButtonHeight * 5.77));
			var width = w - this._padding * 2;
			if (width < selectorButtonWidth) {
				selectorButtonWidth = width;
			}
			var selectorButtonTop = (editMode) ? h - selectorButtonHeight - this._padding : h;
			this.view().measureView(this.__floatingButton, $.ig.intDivide(w, 2) - $.ig.intDivide(selectorButtonWidth, 2), selectorButtonTop, selectorButtonWidth, selectorButtonHeight);
		}
		var prevInset = this.__gridView.grid()._bottomInset;
		var newInset = (editMode) ? selectorButtonHeight + this._padding * 2 : 0;
		if (prevInset != newInset) {
			this.__gridView.grid()._bottomInset = newInset;
			this.__gridView.refreshGrid();
		}
		this.view().measureView(this.__gridView, 0, 0, w, h);
		if (this.__emptyLabel != null) {
			var lw = this._editBoxWidth;
			this.__emptyLabel.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().lightFont());
			this.__emptyLabel.calculateSizeToFit1(lw);
			var lh = this.__emptyLabel.getCalculatedHeight();
			this.view().measureView(this.__emptyLabel, $.ig.intDivide(w, 2) - $.ig.intDivide(lw, 2), $.ig.intDivide(h, 2) - $.ig.intDivide(lh, 2), lw, lh);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Layout(System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CloudFileClicked(Infragistics.CPGridViewCellBase, Infragistics.CloudFile)" />*/
	cloudFileClicked: function (cell, file) {
		if (file.isFolder()) {
			this.navigate(this.__manager, file);
		} else {
			if (file.type().equals($.ig.CloudFile.prototype.typeDashboard)) {
				$.ig.CloudFileNavigationViewController.prototype.openDashboard(cell, file);
			} else {
				$.ig.CloudFileNavigationViewController.prototype.openFile(cell, file, this.__boardId);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CloudFileClicked(Infragistics.CPGridViewCellBase, Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Navigate(Infragistics.CloudFileManager, Infragistics.CloudFile)" />*/
	navigate: function (manager, file) {
		var newController = new $.ig.CloudFileNavigationViewController(1, this.__provider, file.name(), file.pathIdentifier(), this.__boardId, this.__selectionManager);
		newController.__rootFile = file;
		newController.__selectionDelegate = this.__selectionDelegate;
		this.navigationController().pushViewController(newController, true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::Navigate(Infragistics.CloudFileManager, Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var file = cell.data();
		var cbCell = cell;
		if (cbCell.editMode() == $.ig.CPGridViewCheckBoxEditMode.prototype.none || file.isFolder()) {
			this.cloudFileClicked(cell, file);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::FileHasOverflowOptions(Infragistics.CloudFile)" />*/
	fileHasOverflowOptions: function (file) {
		return file.moveEnabled() || file.copyEnabled() || file.pinEnabled();
	}
	/*<EndMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::FileHasOverflowOptions(Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CloudFileNavigationViewController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		var $self = this;
		var items = new $.ig.Array();
		if ((cell.data()).pinEnabled()) {
			items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getContentIcon(), this.localizeText($.ig.EMLocalizationKeys.prototype.pinToBoard), cell.data(), function (o) {
				var files = new $.ig.Array();
				files.add($self.convertToGenericCloudFile(o));
				$.ig.CloudFileNavigationViewController.prototype.internalPinFiles(files, cell, null, $.ig.CPPopupPosition.prototype.left, true);
				return true;
			}));
		}
		if ((cell.data()).copyEnabled()) {
			items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getCopyIcon(), this.localizeText($.ig.EMLocalizationKeys.prototype.copy), cell.data(), function (o) {
				$self.showFileSelector(true, o, cell);
				return true;
			}));
		}
		if ((cell.data()).moveEnabled()) {
			items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getMoveIcon(), this.localizeText($.ig.EMLocalizationKeys.prototype.move), cell.data(), function (o) {
				$self.showFileSelector(false, o, cell);
				return true;
			}));
		}
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CloudFileNavigationViewController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ShowFileSelector(System.Boolean, Infragistics.CloudFile, Infragistics.CPViewBase)" />*/
	showFileSelector: function (copy, file, cell) {
		this.__selectedFile = file;
		this.__copyMoveSelectionManager = new $.ig.CloudFileSelectionManager($.ig.CloudFileSelectionMode.prototype.always, $.ig.CloudFileSelectionType.prototype.folders, copy ? $.ig.CloudFileSelectionAction.prototype.copy : $.ig.CloudFileSelectionAction.prototype.move);
		var fileController = new $.ig.CloudFileNavigationViewController(0, this.__provider, this.__copyMoveSelectionManager);
		fileController.__selectionDelegate = this;
		var nav = new $.ig.CPNavigationViewController(1, fileController);
		$.ig.CPPopupManager.prototype.showNavigationControllerPopup(cell, cell, nav, $.ig.CPPopupPosition.prototype.right, copy ? this.localizeText($.ig.EMLocalizationKeys.prototype.copy) : this.localizeText($.ig.EMLocalizationKeys.prototype.move), null);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ShowFileSelector(System.Boolean, Infragistics.CloudFile, Infragistics.CPViewBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::FileNavigationCancelButtonPressed()" />*/
	fileNavigationCancelButtonPressed: function () {
		this.dismissViewController(true, null);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::FileNavigationCancelButtonPressed()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewDidAppear(System.Boolean)" />*/
	viewDidAppear: function (animated) {
		$.ig.SPEvoBaseViewController.prototype.viewDidAppear.call(this, animated);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.cloudFileNavigationScreen);
		this.ensureSelectionMode();
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::ViewDidAppear(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var file = cell.data();
		var cbCell = cell;
		cbCell.checkedStateDelegate(this);
		cbCell.editMode((this.__selectionManager != null && this.__selectionManager.editMode() && this.__selectionManager.action() == $.ig.CloudFileSelectionAction.prototype.select) ? $.ig.CPGridViewCheckBoxEditMode.prototype.checkBoxHitArea : $.ig.CPGridViewCheckBoxEditMode.prototype.none);
		$.ig.CloudFileUtility.prototype.setupCloudFileCell(file, cbCell);
		if (this.__selectionManager != null) {
			if (this.__selectionManager.action() != $.ig.CloudFileSelectionAction.prototype.select) {
				cbCell.setOverflowVisiblity(false);
			} else {
				cbCell.setOverflowVisiblity(this.fileHasOverflowOptions(file));
			}
			if ((file.isFolder() && this.__selectionManager.selectionType() == $.ig.CloudFileSelectionType.prototype.files) || (!file.isFolder() && this.__selectionManager.selectionType() == $.ig.CloudFileSelectionType.prototype.folders)) {
				cbCell.disable();
			} else {
				cbCell.enable();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	cellCheckedStateChanged: function (cell, isChecked) {
		var file = cell.data();
		if (this.__selectionManager != null) {
			this.__selectionManager.fileSelectionChanged(this.convertToGenericCloudFile(file), isChecked == $.ig.CPCheckedState.prototype.checked);
			this.updateFloatingButton();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	,
	/*<BeginMethod Name="Infragistics.GenericCloudFile Infragistics.CloudFileNavigationViewController::ConvertToGenericCloudFile(Infragistics.CloudFile)" />*/
	convertToGenericCloudFile: function (file) {
		return this.__manager.convertToGenericCloudFile(file, $.ig.EMUserFileManager.prototype.getUserFile().identifier());
	}
	/*<EndMethod Name="Infragistics.GenericCloudFile Infragistics.CloudFileNavigationViewController::ConvertToGenericCloudFile(Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPCheckedState Infragistics.CloudFileNavigationViewController::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	isCellChecked: function (cell) {
		if (this.__selectionManager != null) {
			return this.__selectionManager.isFileSelected(cell.data()) ? $.ig.CPCheckedState.prototype.checked : $.ig.CPCheckedState.prototype.notChecked;
		}
		return $.ig.CPCheckedState.prototype.notSet;
	}
	/*<EndMethod Name="Infragistics.CPCheckedState Infragistics.CloudFileNavigationViewController::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::IsValidDestination(Infragistics.CloudProviderType, Infragistics.CloudFile)" />*/
	isValidDestination: function (provider, folder) {
		if (folder == null) {
			return provider != $.ig.CloudProviderType.prototype.googleProvider && provider != $.ig.CloudProviderType.prototype.sharePoint && provider != $.ig.CloudProviderType.prototype.microsoft;
		}
		return folder.isValidDestination();
	}
	/*<EndMethod Name="System.Boolean Infragistics.CloudFileNavigationViewController::IsValidDestination(Infragistics.CloudProviderType, Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CloudFolderSelected(Infragistics.CloudFile, Infragistics.CloudFileSelectionAction)" />*/
	cloudFolderSelected: function (newFolder, movementType) {
		var $self = this;
		var copyingFile = movementType == $.ig.CloudFileSelectionAction.prototype.copy;
		var filePath;
		var destinationPath;
		if (this.__manager.getProviderType() == $.ig.CloudProviderType.prototype.sharePoint && newFolder == null) {
			this.dismissViewController(true, null);
			return;
		}
		destinationPath = newFolder != null ? newFolder.resolveDestinationPathWithFile(this.__selectedFile) : "";
		filePath = this.__selectedFile.resolveFilePath();
		$.ig.ProgressHelper.prototype.showProgress1(this.view());
		var successHandler = function (result) {
			$.ig.ProgressHelper.prototype.hideProgress($self.view(), false);
			if ((newFolder != null && $self.__rootPath == newFolder.pathIdentifier()) || !copyingFile) {
				$self.refreshFiles(true);
			}
		};
		var errorHandler = function (error) {
			var cError = error;
			$.ig.ProgressHelper.prototype.hideProgress($self.view(), false);
			$.ig.CPPopupManager.prototype.alert($self.view(), cError.errorMessage(), null, $self.localizeText($.ig.EMLocalizationKeys.prototype.ok), error, null);
		};
		if (copyingFile) {
			this.__manager.copyFile(this.__selectedFile.pathIdentifier(), filePath, destinationPath, null, successHandler, errorHandler);
		} else {
			this.__manager.moveFile(this.__selectedFile.pathIdentifier(), filePath, destinationPath, null, successHandler, errorHandler);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::CloudFolderSelected(Infragistics.CloudFile, Infragistics.CloudFileSelectionAction)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.CloudFileNavigationViewController::CreateSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	createSectionHeaderCell: function (grid, section) {
		var cell = grid.dequeueReusableCellWithIdentifier("s");
		if (cell == null) {
			cell = new $.ig.CPGridViewExpandableCell("s");
		}
		cell.textLabel().setText($.ig.NativeEMLocalizeUtil.prototype.localize(this.__gridView.dataSourceHelper().resolveSectionKey(section)));
		cell.isExpanded(!this.__gridView.dataSourceHelper().isSectionCollapsed(section));
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.CloudFileNavigationViewController::CreateSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenFile(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	openFile: function (relativeView, file, boardId) {
		if (file.isFolder()) {
			$.ig.CloudFileNavigationViewController.prototype.openFolder(relativeView, file, boardId);
		} else {
			if (file.type().equals($.ig.CloudFile.prototype.typeDashboard)) {
				$.ig.CloudFileNavigationViewController.prototype.openDashboard(relativeView, file);
			} else {
				$.ig.CloudFileNavigationViewController.prototype.openOrDownloadFile(relativeView, file, boardId);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenFile(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenOrDownloadFile(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	openOrDownloadFile: function (relativeView, file, boardId) {
		if ($.ig.util.cast($.ig.GenericCloudFile.prototype.$type, file) !== null) {
			var gfile = file;
			if (gfile.userId() == null || gfile.pathIdentifier() == null || $.ig.NativeStringUtility.prototype.startsWith(gfile.pathIdentifier(), "LibFile:") || $.ig.NativeStringUtility.prototype.startsWith(gfile.pathIdentifier(), "LibFolder:") && !$.ig.NativeStringUtility.prototype.endsWith(gfile.pathIdentifier(), "RootFolder")) {
				var popupId = $.ig.CPPopupManager.prototype.showPopup(relativeView, new $.ig.EMErrorPopupManager("This pin is using the old format.", "There was a bug in the old format and we didn't have the right information to share the file.\nTo get rid of this screen you'll need to share the file again.\n\nDon't worry the file still will be open using the old functionality.", "Got it!", null, null, null));
				$.ig.CPPopupManager.prototype.subscribeToBeNotifiedWhenPopupCloses(popupId, function () {
					$.ig.CloudFileUtility.prototype.openFile(relativeView, file);
				});
				return;
			}
			if ($.ig.EMUserFileManager.prototype.getUserFile().resolveProviderForID(gfile.providerId()) == null) {
				var matching = $.ig.EMUserFileManager.prototype.getUserFile().getProvidersOfType(gfile.providerType());
				if (matching.length == 0) {
					$.ig.CloudFileNavigationViewController.prototype.downloadAndOpenFile(gfile, boardId);
				} else {
					$.ig.CloudFileNavigationViewController.prototype.downloadAndOpenFile(gfile, boardId);
				}
				return;
			}
		}
		$.ig.CloudFileUtility.prototype.openFile(relativeView, file);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenOrDownloadFile(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::DownloadAndOpenFile(Infragistics.GenericCloudFile, System.String)" />*/
	downloadAndOpenFile: function (gfile, boardId) {
		var fileSize = gfile.size();
		$.ig.CloudFileNavigationViewController.prototype._lastProgressUpdated = 0;
		var updateDelta = $.ig.intDivide(fileSize, 100);
		var progressView = $.ig.NativeUIUtility.prototype.utility().getRootParent($.ig.EMUtility.prototype.rootView());
		var progressHelper = $.ig.ProgressHelper.prototype.showProgress(progressView, null, function () {
			$.ig.ProgressHelper.prototype.hideProgress(progressView, true);
			$.ig.CloudFileNavigationViewController.prototype.__downloadRequest.cancel();
		}, true, fileSize <= 0);
		$.ig.CloudFileNavigationViewController.prototype.__downloadRequest = new $.ig.InfragisticsDownloadFileRequest(boardId, gfile.providerId(), gfile.userId(), gfile.pathIdentifier(), gfile.name(), gfile.mimeType(), function (r, o) {
		}, function (r, e) {
			$.ig.ProgressHelper.prototype.hideProgress(progressView, true);
		}, function (r, bytes, total) {
			if (fileSize > 0 && (bytes - $.ig.CloudFileNavigationViewController.prototype._lastProgressUpdated) > updateDelta) {
				progressHelper.updateProgress(bytes / fileSize);
				$.ig.CloudFileNavigationViewController.prototype._lastProgressUpdated = bytes;
			}
		}, function (r, filePath) {
			var moved = false;
			var newFilePath = $.ig.NativeRequestUtility.prototype.utility().createUniqueTempDir() + "/" + gfile.name();
			if (newFilePath != null) {
				moved = $.ig.NativeRequestUtility.prototype.utility().moveFile(filePath, newFilePath);
			}
			if (moved) {
				filePath = newFilePath;
			}
			$.ig.NativeUIUtility.prototype.utility().openUrl(filePath);
			$.ig.ProgressHelper.prototype.hideProgress(progressView, true);
		});
		$.ig.NativeUIUtility.prototype.utility().downloadUrl($.ig.CloudFileNavigationViewController.prototype.__downloadRequest.resolveURL());
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::DownloadAndOpenFile(Infragistics.GenericCloudFile, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenFolder(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	openFolder: function (relativeView, file, boardId) {
		var gcf = file;
		if (gcf != null) {
			var provider = $.ig.EMUserFileManager.prototype.getUserFile().resolveProviderForID(gcf.providerId());
			if (provider == null) {
				provider = new $.ig.ProviderInfragisticsWebProxy(gcf);
			}
			var vc = new $.ig.CloudFileNavigationViewController(1, provider, file.name(), file.pathIdentifier(), boardId, null);
			$.ig.CPPopupManager.prototype.showModalDialog(relativeView, vc, true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenFolder(Infragistics.CPViewBase, Infragistics.CloudFile, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenDashboard(Infragistics.CPViewBase, Infragistics.CloudFile)" />*/
	openDashboard: function (relativeView, file) {
		var json = file.resolveJSONForKey("model");
		if (!json.containsKey("Title")) {
			json = file.resolveJSONForKey("store");
		}
		var parentId = file.resolveStringForKey("parent");
		var dashboard = new $.ig.Dashboard(2, json.jSONObject());
		$.ig.CPPopupManager.prototype.showFullScreenModalDialog(relativeView, new $.ig.DashboardViewController(parentId, file.pathIdentifier(), dashboard, false), true);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileNavigationViewController::OpenDashboard(Infragistics.CPViewBase, Infragistics.CloudFile)" />*/
	,
	$type: new $.ig.Type('CloudFileNavigationViewController', $.ig.SPEvoBaseViewController.prototype.$type, [$.ig.CPGridViewCellSetupDelegate.prototype.$type, $.ig.CPCheckedStateDelegate.prototype.$type, $.ig.CloudFolderSelectionDelegate.prototype.$type, $.ig.CloudFileRemovedDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CloudFileNavigationViewController" />*/

/*<BeginType Name="Infragistics.CloudFilePreviewViewController" />*/

$.ig.util.defType('CloudFilePreviewViewController', 'SPEvoBaseViewController', {
	__webHostView: null,
	__cloudFile: null,
	init: function (cloudFile) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__cloudFile = cloudFile;
	},
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFilePreviewViewController::UseScrollView()" />*/
	useScrollView: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFilePreviewViewController::UseScrollView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFilePreviewViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.__webHostView = new $.ig.WebHostView();
		this.__webHostView.setURL(this.__cloudFile.embedUrl());
		this.addSubview(this.__webHostView);
		this.addRightBarButtonItem($.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		}));
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFilePreviewViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFilePreviewViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.measureView(this.__webHostView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFilePreviewViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFilePreviewViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFilePreviewViewController::HasNavBar()" />*/
	,
	$type: new $.ig.Type('CloudFilePreviewViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFilePreviewViewController" />*/

/*<BeginType Name="Infragistics.CloudFileSelectionManager" />*/

$.ig.util.defType('CloudFileSelectionManager', 'Object', {
	_selectedFiles: null,
	__lookup: null,
	__mode: 0,
	__type: 0,
	__action: 0,
	init: function (mode, type, action) {
		$.ig.Object.prototype.init.call(this);
		this.__lookup = new $.ig.Dictionary(0);
		this.editMode(false);
		this._selectedFiles = new $.ig.Array();
		this.__mode = mode;
		this.__type = type;
		this.__action = action;
	},
	/*<BeginProperty Name="Infragistics.CloudFileSelectionMode Infragistics.CloudFileSelectionManager::Mode()" />*/
	mode: function () {
		return this.__mode;
	}
	/*<EndProperty Name="Infragistics.CloudFileSelectionMode Infragistics.CloudFileSelectionManager::Mode()" />*/
	,
	/*<BeginProperty Name="Infragistics.CloudFileSelectionType Infragistics.CloudFileSelectionManager::SelectionType()" />*/
	selectionType: function () {
		return this.__type;
	}
	/*<EndProperty Name="Infragistics.CloudFileSelectionType Infragistics.CloudFileSelectionManager::SelectionType()" />*/
	,
	/*<BeginProperty Name="Infragistics.CloudFileSelectionAction Infragistics.CloudFileSelectionManager::Action()" />*/
	action: function () {
		return this.__action;
	}
	/*<EndProperty Name="Infragistics.CloudFileSelectionAction Infragistics.CloudFileSelectionManager::Action()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CloudFileSelectionManager::ResolveKey(Infragistics.CloudFile)" />*/
	resolveKey: function (file) {
		return file.pathIdentifier();
	}
	/*<EndMethod Name="System.String Infragistics.CloudFileSelectionManager::ResolveKey(Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileSelectionManager::FileSelectionChanged(Infragistics.GenericCloudFile, System.Boolean)" />*/
	fileSelectionChanged: function (file, isSelected) {
		var key = this.resolveKey(file);
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(this.__lookup, key)) {
			if (!isSelected) {
				this.__lookup.remove(key);
				this._selectedFiles.removeItem(key);
			}
		} else {
			if (isSelected) {
				this.__lookup.item(key, file);
				this._selectedFiles.add(key);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileSelectionManager::FileSelectionChanged(Infragistics.GenericCloudFile, System.Boolean)" />*/
	,
	__editMode: false,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFileSelectionManager::EditMode()" />*/
	editMode: function (value) {
		if (arguments.length === 1) {
			if (this.__editMode != value) {
				this.__editMode = value;
				this._selectedFiles.clear();
				this.__lookup = new $.ig.Dictionary(0);
			}
			return value;
		} else {
			if (this.__mode == $.ig.CloudFileSelectionMode.prototype.always) {
				return true;
			} else if (this.__mode == $.ig.CloudFileSelectionMode.prototype.never) {
				return false;
			} else {
				return this.__editMode;
			}
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFileSelectionManager::EditMode()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CloudFileSelectionManager::IsFileSelected(Infragistics.CloudFile)" />*/
	isFileSelected: function (file) {
		var key = this.resolveKey(file);
		return ($.ig.NativeDictionaryUtility.prototype.containsKey(this.__lookup, key));
	}
	/*<EndMethod Name="System.Boolean Infragistics.CloudFileSelectionManager::IsFileSelected(Infragistics.CloudFile)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CloudFileSelectionManager::GetSelectedFiles()" />*/
	getSelectedFiles: function () {
		var files = new $.ig.Array();
		var count = this._selectedFiles.length;
		for (var i = 0; i < count; i++) {
			var key = this._selectedFiles[i];
			files.add(this.__lookup.item(key));
		}
		return files;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CloudFileSelectionManager::GetSelectedFiles()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileSelectionManager::RemoveFile(Infragistics.GenericCloudFile)" />*/
	removeFile: function (file) {
		var key = this.resolveKey(file);
		$.ig.NativeDictionaryUtility.prototype.removeValue(this.__lookup, key);
		this._selectedFiles.removeItem(key);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileSelectionManager::RemoveFile(Infragistics.GenericCloudFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileSelectionManager::ClearFileSelection()" />*/
	clearFileSelection: function () {
		this._selectedFiles.clear();
		this.__lookup = new $.ig.Dictionary(0);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileSelectionManager::ClearFileSelection()" />*/
	,
	$type: new $.ig.Type('CloudFileSelectionManager', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFileSelectionManager" />*/

/*<BeginType Name="Infragistics.CloudFileShoppingCartViewController" />*/

$.ig.util.defType('CloudFileShoppingCartViewController', 'SPEvoBaseViewController', {
	__selectionManager: null,
	__gridView: null,
	__removedDelegate: null,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFileShoppingCartViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFileShoppingCartViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CloudFileShoppingCartViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CloudFileShoppingCartViewController::HasNavBar()" />*/
	,
	init: function (selectionManager, removedDelegate) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__selectionManager = selectionManager;
		this.__removedDelegate = removedDelegate;
	},
	/*<BeginMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.loadSubviews.call(this);
		this.title($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.selectedItems));
		this.__gridView = new $.ig.CPDynamicColumnGridView(0, null, function (identifier) {
			var cell = new $.ig.CloudFileSelectedCell(identifier);
			cell.delegate($self);
			return cell;
		});
		this.view().addSubview(this.__gridView);
		this.__gridView.setData(this.__selectionManager.getSelectedFiles());
		var closeButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		});
		this.addRightBarButtonItem(closeButton);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.measureView(this.__gridView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::RemoveSelectedCloudFile(Infragistics.CloudFileSelectedCell)" />*/
	removeSelectedCloudFile: function (cell) {
		var file = cell.data();
		this.__selectionManager.removeFile(file);
		this.__gridView.dataSourceHelper().data().removeItem(file);
		this.__gridView.dataSourceHelper().invalidateData();
		this.__gridView.refreshGrid();
		if (this.__removedDelegate != null) {
			this.__removedDelegate.removeSelectedCloudFile(cell);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileShoppingCartViewController::RemoveSelectedCloudFile(Infragistics.CloudFileSelectedCell)" />*/
	,
	$type: new $.ig.Type('CloudFileShoppingCartViewController', $.ig.SPEvoBaseViewController.prototype.$type, [$.ig.CloudFileRemovedDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CloudFileShoppingCartViewController" />*/

/*<BeginType Name="Infragistics.CloudFileSelectedCell" />*/

$.ig.util.defType('CloudFileSelectedCell', 'CPGridViewIconCell', {
	__removeButton: null,
	_providerIcon: null,
	/*<BeginProperty Name="Infragistics.PathIconView Infragistics.CloudFileSelectedCell::ProviderIcon()" />*/
	providerIcon: function (value) {
		if (arguments.length === 1) {
			this._providerIcon = value;
			return value;
		} else {
			return this._providerIcon;
		}
	}
	/*<EndProperty Name="Infragistics.PathIconView Infragistics.CloudFileSelectedCell::ProviderIcon()" />*/
	,
	_delegate: null,
	/*<BeginProperty Name="Infragistics.CloudFileRemovedDelegate Infragistics.CloudFileSelectedCell::Delegate()" />*/
	delegate: function (value) {
		if (arguments.length === 1) {
			this._delegate = value;
			return value;
		} else {
			return this._delegate;
		}
	}
	/*<EndProperty Name="Infragistics.CloudFileRemovedDelegate Infragistics.CloudFileSelectedCell::Delegate()" />*/
	,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewIconCell.prototype.init.call(this, identifier);
		this.__removeButton = new $.ig.PathIconLabelButton(1);
		this.__removeButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__removeButton.addClickHandler(function (x, y) {
			$self.delegate().removeSelectedCloudFile($self);
		});
		this.__removeButton.setIcon($.ig.EMIcons.prototype.icons().getCloseIcon());
		this.addSubview(this.__removeButton);
		this.providerIcon(new $.ig.PathIconView());
		this.providerIcon()._desaturatePercent = 0.3;
		this.providerIcon()._outlineOnly = false;
		this.addSubview(this.providerIcon());
	},
	/*<BeginMethod Name="System.Void Infragistics.CloudFileSelectedCell::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewIconCell.prototype.dataSet.call(this);
		var file = this.data();
		var icon = $.ig.CloudFileUtility.prototype.resolveProviderIconForFile(file);
		this.providerIcon().setIcon(icon);
		$.ig.CloudFileUtility.prototype.setupCloudFileCell(file, this);
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileSelectedCell::DataSet()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CloudFileSelectedCell::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CloudFileSelectedCell::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CloudFileSelectedCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	layoutRightContentArea: function (x, y, itemSize) {
		var left = x + this.padding();
		var iconSize = $.ig.truncate((itemSize * 0.8));
		var providerIconSize = $.ig.truncate((itemSize * 0.6));
		var diff = itemSize - providerIconSize;
		this.measureView(this.providerIcon(), left + $.ig.intDivide(diff, 2), y + $.ig.intDivide(diff, 2), providerIconSize, providerIconSize);
		left += itemSize;
		this.__removeButton.setIconSize(itemSize);
		this.measureView(this.__removeButton, left, 0, this.currentWidth() - left, this.currentHeight());
	}
	/*<EndMethod Name="System.Void Infragistics.CloudFileSelectedCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CloudFileSelectedCell::NumberOfItemsInRightContentArea()" />*/
	numberOfItemsInRightContentArea: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CloudFileSelectedCell::NumberOfItemsInRightContentArea()" />*/
	,
	$type: new $.ig.Type('CloudFileSelectedCell', $.ig.CPGridViewIconCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CloudFileSelectedCell" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsErrorCellDelegate" />*/

$.ig.util.defType('SPEvoSearchResultsErrorCellDelegate', 'Object', {
	$type: new $.ig.Type('SPEvoSearchResultsErrorCellDelegate', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsErrorCellDelegate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsErrorCell" />*/

$.ig.util.defType('SPEvoSearchResultsErrorCell', 'CPGridViewIconCell', {
	__retryButton: null,
	_delegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsErrorCellDelegate Infragistics.SPEvoSearchResultsErrorCell::Delegate()" />*/
	delegate: function (value) {
		if (arguments.length === 1) {
			this._delegate = value;
			return value;
		} else {
			return this._delegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsErrorCellDelegate Infragistics.SPEvoSearchResultsErrorCell::Delegate()" />*/
	,
	__sectionInfo: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsSectionInfo Infragistics.SPEvoSearchResultsErrorCell::SectionInfo()" />*/
	sectionInfo: function (value) {
		if (arguments.length === 1) {
			this.__sectionInfo = value;
			this.textLabel().setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.error) + ": " + this.__sectionInfo.errorMessage());
			return value;
		} else {
			return this.__sectionInfo;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsSectionInfo Infragistics.SPEvoSearchResultsErrorCell::SectionInfo()" />*/
	,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewIconCell.prototype.init.call(this, identifier);
		this.__retryButton = new $.ig.PathIconLabelButton(1);
		this.__retryButton.setText("Retry");
		this.__retryButton.highlightMode($.ig.CPInteractionViewMode.prototype.highlight);
		this.__retryButton.addClickHandler(function (x, y) {
			$self.delegate().searchResultsCellRetryButtonClicked($self);
		});
		this.addSubview(this.__retryButton);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchResultsErrorCell::HasRightContent()" />*/
	hasRightContent: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchResultsErrorCell::HasRightContent()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsErrorCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	layoutRightContentArea: function (x, y, itemSize) {
		$.ig.CPGridViewIconCell.prototype.layoutRightContentArea.call(this, x, y, itemSize);
		this.__retryButton.setFont(this.fontSize(), this.font());
		this.__retryButton.calculateSizeToFit();
		var retryButtonHeight = this.__retryButton.getCalculatedHeight();
		var retryButtonWidth = this.__retryButton.getCalculatedWidth();
		this.measureView(this.__retryButton, x + $.ig.intDivide(itemSize, 2) - $.ig.intDivide(retryButtonWidth, 2), y + $.ig.intDivide(itemSize, 2) - $.ig.intDivide(retryButtonHeight, 2), retryButtonWidth, retryButtonHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsErrorCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsErrorCell', $.ig.CPGridViewIconCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsErrorCell" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsLoadingCell" />*/

$.ig.util.defType('SPEvoSearchResultsLoadingCell', 'CPGridViewCell', {
	__progressIcon: null,
	init: function (identifier) {
		$.ig.CPGridViewCell.prototype.init.call(this, identifier);
		this.__progressIcon = new $.ig.ProgressDisplayView(true, null, null);
		this.addSubview(this.__progressIcon);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::OnAttached()" />*/
	onAttached: function () {
		$.ig.CPGridViewCell.prototype.onAttached.call(this);
		this.__progressIcon.start();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::OnAttached()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::OnDetached()" />*/
	onDetached: function () {
		$.ig.CPGridViewCell.prototype.onDetached.call(this);
		this.__progressIcon.stop();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::OnDetached()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCell.prototype.sizeChanged.call(this, w, h);
		var iconSize = $.ig.truncate((h * 0.5));
		var padding = $.ig.truncate((h * 0.25));
		var left = padding;
		this.measureView(this.__progressIcon, $.ig.intDivide(w, 2) - $.ig.intDivide(iconSize, 2), $.ig.intDivide(h, 2) - $.ig.intDivide(iconSize, 2), iconSize, iconSize);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsLoadingCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsLoadingCell', $.ig.CPGridViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsLoadingCell" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsNoResultsCell" />*/

$.ig.util.defType('SPEvoSearchResultsNoResultsCell', 'CPGridViewIconCell', {
	init: function (identifier) {
		$.ig.CPGridViewIconCell.prototype.init.call(this, identifier);
		this.textLabel().setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.noResults));
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
	},
	$type: new $.ig.Type('SPEvoSearchResultsNoResultsCell', $.ig.CPGridViewIconCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsNoResultsCell" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsDataSourceHelper" />*/

$.ig.util.defType('SPEvoSearchResultsDataSourceHelper', 'CPGridViewSingleFieldDynamicColumnDataSourceHelper', {
	__fetchNextPage: null,
	_errorCellDelegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsErrorCellDelegate Infragistics.SPEvoSearchResultsDataSourceHelper::ErrorCellDelegate()" />*/
	errorCellDelegate: function (value) {
		if (arguments.length === 1) {
			this._errorCellDelegate = value;
			return value;
		} else {
			return this._errorCellDelegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsErrorCellDelegate Infragistics.SPEvoSearchResultsDataSourceHelper::ErrorCellDelegate()" />*/
	,
	init: function (columnDefinition) {
		$.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.init.call(this, 0, columnDefinition);
		this.alwaysDisplaySectionHeaders(true);
		this.supportsStretchRows(true);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoSearchResultsDataSourceHelper::GetNumberOfSectionsInGrid()" />*/
	getNumberOfSectionsInGrid: function () {
		return this._sectionData.count();
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoSearchResultsDataSourceHelper::GetNumberOfSectionsInGrid()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoSearchResultsDataSourceHelper::ResolveRowCount(System.Int32)" />*/
	resolveRowCount: function (section) {
		var sectionInfo = this.data()[section];
		var isLoading = sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading;
		var hasError = sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError;
		var hasNoResults = sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults;
		if (isLoading || hasError) {
			return 1;
		}
		if (hasNoResults) {
			if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
				return this._numberOfColumns * 2;
			}
			return 1;
		}
		var dataCount = sectionInfo.data().length;
		if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
			dataCount += this._numberOfColumns;
		}
		return dataCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoSearchResultsDataSourceHelper::ResolveRowCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsDataSourceHelper::ProcessSections()" />*/
	processSections: function () {
		if (this._rawData != null) {
			var count = this._rawData.length;
			for (var sectionIndex = 0; sectionIndex < count; sectionIndex++) {
				var sectionInfo = this._rawData[sectionIndex];
				var val = sectionIndex.toString();
				this._sectionData.item(val, sectionInfo.data() == null ? new $.ig.Array() : sectionInfo.data());
				this._sectionKeys.add(val);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsDataSourceHelper::ProcessSections()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	isStretchRow: function (row, section) {
		var sectionInfo = this.data()[section];
		var showWarning = sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0 && row == 0;
		if (sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading || sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults || sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError || showWarning) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchResultsDataSourceHelper::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	getCell: function (gridView, path) {
		var sectionInfo = this.data()[path._sectionIndex];
		switch (sectionInfo.state()) {
			case $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading:
				{
					if (path._rowIndex == 0 && path._columnIndex == 0) {
						return this.getLoadingCell(gridView);
					}
					break;
				}
			case $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults:
				{
					if (path._rowIndex == 0 && path._columnIndex == 0) {
						if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
							return this.getWarningCell(gridView, sectionInfo);
						}
						return this.getNoResultsCell(gridView);
					}
					if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
						path = this.normalizePath(path);
						if (path == null) {
							return null;
						}
						path._rowIndex -= this._numberOfColumns;
						path = this.deNormalizePath(path);
					}
					return this.getNoResultsCell(gridView);
				}
			case $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError:
				{
					if (path._rowIndex == 0 && path._columnIndex == 0) {
						return this.getErrorCell(gridView, sectionInfo);
					}
					break;
				}
			case $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateResults:
				{
					if (path._rowIndex == 0 && path._columnIndex == 0) {
						if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
							return this.getWarningCell(gridView, sectionInfo);
						}
						return $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.getCell.call(this, gridView, path);
					}
					if (sectionInfo.warningMessage() != null && sectionInfo.warningMessage().length > 0) {
						path = this.normalizePath(path);
						if (path == null) {
							return null;
						}
						path._rowIndex -= this._numberOfColumns;
						path = this.deNormalizePath(path);
					}
					if (this.isSharePointLastCell(path)) {
						if (this.hasMoreToFetch(sectionInfo)) {
							this.__fetchNextPage(sectionInfo);
							return this.getLoadingCell(gridView);
						}
					}
					return $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.getCell.call(this, gridView, path);
				}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchResultsDataSourceHelper::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchResultsLoadingCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetLoadingCell(Infragistics.CPGridView)" />*/
	getLoadingCell: function (gridView) {
		var cellIdentifier = "LoadingCell";
		var loadingCell = gridView.dequeueReusableCellWithIdentifier(cellIdentifier);
		if (loadingCell == null) {
			loadingCell = new $.ig.SPEvoSearchResultsLoadingCell(cellIdentifier);
		}
		return loadingCell;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchResultsLoadingCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetLoadingCell(Infragistics.CPGridView)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchResultsNoResultsCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetNoResultsCell(Infragistics.CPGridView)" />*/
	getNoResultsCell: function (gridView) {
		var cellIdentifier = "NoResultsCell";
		var noResultsCell = gridView.dequeueReusableCellWithIdentifier(cellIdentifier);
		if (noResultsCell == null) {
			noResultsCell = new $.ig.SPEvoSearchResultsNoResultsCell(cellIdentifier);
		}
		return noResultsCell;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchResultsNoResultsCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetNoResultsCell(Infragistics.CPGridView)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchResultsErrorCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetErrorCell(Infragistics.CPGridView, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	getErrorCell: function (gridView, sectionInfo) {
		var cellIdentifier = "ErrorCell";
		var errorCell = gridView.dequeueReusableCellWithIdentifier(cellIdentifier);
		if (errorCell == null) {
			errorCell = new $.ig.SPEvoSearchResultsErrorCell(cellIdentifier);
			errorCell.delegate(this.errorCellDelegate());
		}
		errorCell.sectionInfo(sectionInfo);
		return errorCell;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchResultsErrorCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetErrorCell(Infragistics.CPGridView, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewIconCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetWarningCell(Infragistics.CPGridView, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	getWarningCell: function (gridView, sectionInfo) {
		var cellIdentifier = "WarningCell";
		var warningCell = gridView.dequeueReusableCellWithIdentifier(cellIdentifier);
		if (warningCell == null) {
			warningCell = new $.ig.CPGridViewIconCell(cellIdentifier);
		}
		warningCell.textLabel().setText(sectionInfo.warningMessage());
		warningCell.setIcon(null);
		return warningCell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewIconCell Infragistics.SPEvoSearchResultsDataSourceHelper::GetWarningCell(Infragistics.CPGridView, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::IsSharePointLastCell(Infragistics.CPCellPath)" />*/
	isSharePointLastCell: function (path) {
		var actualPath = this.normalizePath(path);
		if (actualPath == null) {
			return false;
		}
		var sectionInfo = this.data()[path._sectionIndex];
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		var provider = userFile.resolveProviderForID(sectionInfo.providerId());
		return provider.provider() == $.ig.CloudProviderType.prototype.sharePoint && actualPath._rowIndex == sectionInfo.data().length - 1;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::IsSharePointLastCell(Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsDataSourceHelper::RegisterActionForFetchNextPage(Infragistics.ObjectBlock)" />*/
	registerActionForFetchNextPage: function (o) {
		this.__fetchNextPage = o;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsDataSourceHelper::RegisterActionForFetchNextPage(Infragistics.ObjectBlock)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::HasMoreToFetch(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	hasMoreToFetch: function (sectionInfo) {
		return this.__fetchNextPage != null && !sectionInfo.isLoadingNextPage() && sectionInfo.hasMoreItems();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsDataSourceHelper::HasMoreToFetch(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsDataSourceHelper', $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsDataSourceHelper" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterGroup" />*/

$.ig.util.defType('SPEvoSearchFilterGroup', 'Object', {
	init: function (title, type) {
		$.ig.Object.prototype.init.call(this);
		this.title(title);
		this.type(type);
	},
	_title: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterGroup::Title()" />*/
	title: function (value) {
		if (arguments.length === 1) {
			this._title = value;
			return value;
		} else {
			return this._title;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterGroup::Title()" />*/
	,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::SelectedOptions()" />*/
	selectedOptions: function () {
		var selectedOps = new $.ig.Array();
		var options = this.filterOptions();
		var count = this.filterOptions().length;
		for (var i = 0; i < count; i++) {
			if ((options[i]).isSelected()) {
				selectedOps.add(options[i]);
			}
		}
		return selectedOps;
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::SelectedOptions()" />*/
	,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::EnabledOptions()" />*/
	enabledOptions: function () {
		var enabledOps = new $.ig.Array();
		var options = this.filterOptions();
		var count = this.filterOptions().length;
		for (var i = 0; i < count; i++) {
			if ((options[i]).isEnabled()) {
				enabledOps.add(options[i]);
			}
		}
		return enabledOps;
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::EnabledOptions()" />*/
	,
	_type: 0,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterGroup::Type()" />*/
	type: function (value) {
		if (arguments.length === 1) {
			this._type = value;
			return value;
		} else {
			return this._type;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterGroup::Type()" />*/
	,
	_filterOptions: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::FilterOptions()" />*/
	filterOptions: function (value) {
		if (arguments.length === 1) {
			this._filterOptions = value;
			return value;
		} else {
			return this._filterOptions;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::FilterOptions()" />*/
	,
	_disabledByProviders: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::DisabledByProviders()" />*/
	disabledByProviders: function (value) {
		if (arguments.length === 1) {
			this._disabledByProviders = value;
			return value;
		} else {
			return this._disabledByProviders;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterGroup::DisabledByProviders()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasSelectedOptions()" />*/
	hasSelectedOptions: function () {
		return this.selectedOptions().length > 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasSelectedOptions()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasEnabledOptions()" />*/
	hasEnabledOptions: function () {
		return this.enabledOptions().length > 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasEnabledOptions()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasChanges()" />*/
	hasChanges: function () {
		var hasChanges = false;
		for (var i = 0; !hasChanges && i < this.filterOptions().length; i++) {
			var option = this.filterOptions()[i];
			hasChanges = option.hasChanges();
		}
		return hasChanges;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterGroup::HasChanges()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFilterGroup', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterGroup" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterOption" />*/

$.ig.util.defType('SPEvoSearchFilterOption', 'Object', {
	__commitedSelected: false,
	__commitedEnabled: false,
	__commitedAuthorValue: null,
	__commitedResultType: 0,
	__commitedModificationDate: 0,
	__commitedProviderType: 0,
	init: function (initNumber, group, title, icon, providerId, providerType) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
				case 2:
					this.init2.apply(this, arguments);
					break;
				case 3:
					this.init3.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SPEvoSearchFilterOption.prototype.init3.call(this, 3, group, title, icon);
		this.providerId(providerId);
		this.providerType(providerType);
	},
	init1: function (initNumber, group, title, icon, date) {
		$.ig.SPEvoSearchFilterOption.prototype.init3.call(this, 3, group, title, icon);
		this.modificationDate(date);
	},
	init2: function (initNumber, group, title, icon, rtpye) {
		$.ig.SPEvoSearchFilterOption.prototype.init3.call(this, 3, group, title, icon);
		this.resultType(rtpye);
	},
	init3: function (initNumber, group, title, icon) {
		$.ig.Object.prototype.init.call(this);
		this.group(group);
		this.title(title);
		this.icon(icon);
		this.isEnabled(true);
		this.isSelected(false);
		this.resultType($.ig.SPEvoSearchFilterResultType.prototype.notSet);
		this.modificationDate($.ig.SPEvoSearchFilterModificationDate.prototype.notSet);
		this.providerType($.ig.CloudProviderType.prototype.notSet);
		this.modifiedByValue(null);
		this.__commitedAuthorValue = null;
		this.__commitedResultType = $.ig.SPEvoSearchFilterResultType.prototype.notSet;
		this.__commitedProviderType = $.ig.CloudProviderType.prototype.notSet;
		this.__commitedModificationDate = $.ig.SPEvoSearchFilterModificationDate.prototype.notSet;
		this.acceptChanges();
	},
	_group: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterOption::Group()" />*/
	group: function (value) {
		if (arguments.length === 1) {
			this._group = value;
			return value;
		} else {
			return this._group;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterOption::Group()" />*/
	,
	_title: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterOption::Title()" />*/
	title: function (value) {
		if (arguments.length === 1) {
			this._title = value;
			return value;
		} else {
			return this._title;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterOption::Title()" />*/
	,
	_resultType: 0,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterResultType Infragistics.SPEvoSearchFilterOption::ResultType()" />*/
	resultType: function (value) {
		if (arguments.length === 1) {
			this._resultType = value;
			return value;
		} else {
			return this._resultType;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterResultType Infragistics.SPEvoSearchFilterOption::ResultType()" />*/
	,
	_modificationDate: 0,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterModificationDate Infragistics.SPEvoSearchFilterOption::ModificationDate()" />*/
	modificationDate: function (value) {
		if (arguments.length === 1) {
			this._modificationDate = value;
			return value;
		} else {
			return this._modificationDate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterModificationDate Infragistics.SPEvoSearchFilterOption::ModificationDate()" />*/
	,
	_providerType: 0,
	/*<BeginProperty Name="Infragistics.CloudProviderType Infragistics.SPEvoSearchFilterOption::ProviderType()" />*/
	providerType: function (value) {
		if (arguments.length === 1) {
			this._providerType = value;
			return value;
		} else {
			return this._providerType;
		}
	}
	/*<EndProperty Name="Infragistics.CloudProviderType Infragistics.SPEvoSearchFilterOption::ProviderType()" />*/
	,
	_providerId: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterOption::ProviderId()" />*/
	providerId: function (value) {
		if (arguments.length === 1) {
			this._providerId = value;
			return value;
		} else {
			return this._providerId;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterOption::ProviderId()" />*/
	,
	_modifiedByValue: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterOption::ModifiedByValue()" />*/
	modifiedByValue: function (value) {
		if (arguments.length === 1) {
			this._modifiedByValue = value;
			return value;
		} else {
			return this._modifiedByValue;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterOption::ModifiedByValue()" />*/
	,
	_keywords: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterOption::Keywords()" />*/
	keywords: function (value) {
		if (arguments.length === 1) {
			this._keywords = value;
			return value;
		} else {
			return this._keywords;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterOption::Keywords()" />*/
	,
	_icon: null,
	/*<BeginProperty Name="Infragistics.PathIcon Infragistics.SPEvoSearchFilterOption::Icon()" />*/
	icon: function (value) {
		if (arguments.length === 1) {
			this._icon = value;
			return value;
		} else {
			return this._icon;
		}
	}
	/*<EndProperty Name="Infragistics.PathIcon Infragistics.SPEvoSearchFilterOption::Icon()" />*/
	,
	_isSelected: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsSelected()" />*/
	isSelected: function (value) {
		if (arguments.length === 1) {
			this._isSelected = value;
			return value;
		} else {
			return this._isSelected;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsSelected()" />*/
	,
	_isEnabled: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsEnabled()" />*/
	isEnabled: function (value) {
		if (arguments.length === 1) {
			this._isEnabled = value;
			return value;
		} else {
			return this._isEnabled;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsEnabled()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterOption::GroupType()" />*/
	groupType: function () {
		return this.group().type();
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterOption::GroupType()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFilterOption::TokenTitle()" />*/
	tokenTitle: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.keywords: return this.keywords();
			case $.ig.SPEvoSearchFilterType.prototype.resultType:
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate:
				return this.title();
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return this.modifiedByValue();
		}
		return "";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFilterOption::TokenTitle()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCurrentValueEmpty()" />*/
	isCurrentValueEmpty: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.location: return this.__commitedProviderType != $.ig.CloudProviderType.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate: return this.modificationDate() != $.ig.SPEvoSearchFilterModificationDate.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.resultType: return this.resultType() != $.ig.SPEvoSearchFilterResultType.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return this.modifiedByValue() != null;
			default: return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCurrentValueEmpty()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCommitedValueEmpty()" />*/
	isCommitedValueEmpty: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.location: return this.__commitedProviderType != $.ig.CloudProviderType.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate: return this.__commitedModificationDate != $.ig.SPEvoSearchFilterModificationDate.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.resultType: return this.__commitedResultType != $.ig.SPEvoSearchFilterResultType.prototype.notSet;
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return this.__commitedAuthorValue != null;
			default: return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCommitedValueEmpty()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCurrentValueDifferentThanCommited()" />*/
	isCurrentValueDifferentThanCommited: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.location: return this.__commitedProviderType != this.providerType();
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate: return this.__commitedModificationDate != this.modificationDate();
			case $.ig.SPEvoSearchFilterType.prototype.resultType: return this.__commitedResultType != this.resultType();
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return this.__commitedAuthorValue != this.modifiedByValue();
			default: return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::IsCurrentValueDifferentThanCommited()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::HasChanges()" />*/
	hasChanges: function () {
		if (this.isSelected() != this.__commitedSelected || this.isEnabled() != this.__commitedEnabled) {
			return true;
		} else if (this.isCurrentValueEmpty() && this.isCommitedValueEmpty()) {
			return false;
		} else {
			return this.isCurrentValueDifferentThanCommited();
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFilterOption::HasChanges()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopyValueToCommited()" />*/
	copyValueToCommited: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.location:
				this.__commitedProviderType = this.providerType();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate:
				this.__commitedModificationDate = this.modificationDate();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.resultType:
				this.__commitedResultType = this.resultType();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy:
				this.__commitedAuthorValue = this.modifiedByValue();
				break;
			default: break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopyValueToCommited()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopyCommitedToValue()" />*/
	copyCommitedToValue: function () {
		switch (this.groupType()) {
			case $.ig.SPEvoSearchFilterType.prototype.location:
				this.__commitedProviderType = this.providerType();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate:
				this.__commitedModificationDate = this.modificationDate();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.resultType:
				this.__commitedResultType = this.resultType();
				break;
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy:
				this.__commitedAuthorValue = this.modifiedByValue();
				break;
			default: break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopyCommitedToValue()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::AcceptChanges()" />*/
	acceptChanges: function () {
		if (!this.isEnabled()) {
			this.isSelected(false);
		}
		this.__commitedSelected = this.isSelected();
		this.__commitedEnabled = this.isEnabled();
		this.copyValueToCommited();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::AcceptChanges()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::DiscardChanges()" />*/
	discardChanges: function () {
		this.isSelected(this.__commitedSelected);
		this.isEnabled(this.__commitedEnabled);
		this.copyCommitedToValue();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::DiscardChanges()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopySelectionStateFrom(Infragistics.SPEvoSearchFilterOption)" />*/
	copySelectionStateFrom: function (option) {
		this.isSelected(option.isSelected());
		this.__commitedSelected = option.__commitedSelected;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterOption::CopySelectionStateFrom(Infragistics.SPEvoSearchFilterOption)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFilterOption', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterOption" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterTokenValue" />*/

$.ig.util.defType('SPEvoSearchFilterTokenValue', 'Object', {
	_filterType: 0,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterTokenValue::FilterType()" />*/
	filterType: function (value) {
		if (arguments.length === 1) {
			this._filterType = value;
			return value;
		} else {
			return this._filterType;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterType Infragistics.SPEvoSearchFilterTokenValue::FilterType()" />*/
	,
	_filtersNames: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterTokenValue::FiltersNames()" />*/
	filtersNames: function (value) {
		if (arguments.length === 1) {
			this._filtersNames = value;
			return value;
		} else {
			return this._filtersNames;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterTokenValue::FiltersNames()" />*/
	,
	init: function (filterType, filtersNames) {
		$.ig.Object.prototype.init.call(this);
		this.filterType(filterType);
		this.filtersNames(filtersNames);
	},
	$type: new $.ig.Type('SPEvoSearchFilterTokenValue', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterTokenValue" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterLocationTokenValue" />*/

$.ig.util.defType('SPEvoSearchFilterLocationTokenValue', 'SPEvoSearchFilterTokenValue', {
	_providers: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterLocationTokenValue::Providers()" />*/
	providers: function (value) {
		if (arguments.length === 1) {
			this._providers = value;
			return value;
		} else {
			return this._providers;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchFilterLocationTokenValue::Providers()" />*/
	,
	init: function (filterType, providers) {
		$.ig.SPEvoSearchFilterTokenValue.prototype.init.call(this, filterType, null);
		this.providers(providers);
	},
	$type: new $.ig.Type('SPEvoSearchFilterLocationTokenValue', $.ig.SPEvoSearchFilterTokenValue.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterLocationTokenValue" />*/

/*<BeginType Name="Infragistics.SPEvoSearchOptions" />*/

$.ig.util.defType('SPEvoSearchOptions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_filters: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchOptions::Filters()" />*/
	filters: function (value) {
		if (arguments.length === 1) {
			this._filters = value;
			return value;
		} else {
			return this._filters;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchOptions::Filters()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::IsValid()" />*/
	isValid: function () {
		return this.hasFilters() && this.hasSelectedFiltersDifferentThanLocation();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::IsValid()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::HasFilters()" />*/
	hasFilters: function () {
		return this.filters() != null && this.filters().length > 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::HasFilters()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::HasSelectedFiltersDifferentThanLocation()" />*/
	hasSelectedFiltersDifferentThanLocation: function () {
		var hasSelected = false;
		for (var i = 0; !hasSelected && i < this.filters().length; i++) {
			var filterGroup = this.filters()[i];
			if (filterGroup.type() != $.ig.SPEvoSearchFilterType.prototype.location) {
				hasSelected = filterGroup.hasSelectedOptions();
			}
		}
		return hasSelected;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchOptions::HasSelectedFiltersDifferentThanLocation()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchOptions::GetSelectedFilters()" />*/
	getSelectedFilters: function () {
		var selectedFilters = new $.ig.Array();
		var count = this.filters().length;
		for (var i = 0; i < count; i++) {
			var filterGroup = this.filters()[i];
			if (filterGroup.hasSelectedOptions()) {
				selectedFilters.add(filterGroup);
			}
		}
		return selectedFilters;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchOptions::GetSelectedFilters()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchOptions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchOptions" />*/

/*<BeginType Name="Infragistics.SPEvoSearchOptionsToSearchQueryMapper" />*/

$.ig.util.defType('SPEvoSearchOptionsToSearchQueryMapper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplySearchOptions(Infragistics.SPEvoSearchOptions, Infragistics.SearchQuery)" />*/
	applySearchOptions: function (searchOptions, searchQuery) {
		var count = searchOptions.filters().length;
		for (var i = 0; i < count; i++) {
			var filterGroup = searchOptions.filters()[i];
			if (filterGroup.hasSelectedOptions()) {
				switch (filterGroup.type()) {
					case $.ig.SPEvoSearchFilterType.prototype.resultType:
						this.applyResultTypeFilterOptions(filterGroup.selectedOptions(), searchQuery);
						break;
					case $.ig.SPEvoSearchFilterType.prototype.modificationDate:
						this.applyModificationDateFilterOptions(filterGroup.selectedOptions(), searchQuery);
						break;
					case $.ig.SPEvoSearchFilterType.prototype.modifiedBy:
						this.applyAuthorFilterOptions(filterGroup.selectedOptions(), searchQuery);
						break;
					case $.ig.SPEvoSearchFilterType.prototype.keywords:
						this.applyKeywordsFilterOptions(filterGroup.selectedOptions(), searchQuery);
						break;
					default: break;
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplySearchOptions(Infragistics.SPEvoSearchOptions, Infragistics.SearchQuery)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyResultTypeFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	applyResultTypeFilterOptions: function (filterOptions, searchQuery) {
		var fileExtensions = new $.ig.Array();
		var fileMimeTypes = new $.ig.Array();
		var count = filterOptions.length;
		for (var i = 0; i < count; i++) {
			var filterOption = filterOptions[i];
			switch (filterOption.resultType()) {
				case $.ig.SPEvoSearchFilterResultType.prototype.documents:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.documentExtensions());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.googleDocMimeTypes());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.documentMimeTypes());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.spreadsheets:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.spreadsheetExtensions());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.googleSheetMimeTypes());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.spreadsheetMimeTypes());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.presentations:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.presentationExtensions());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.googleSlidesMimeTypes());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.presentationMimeTypes());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.pDF:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.pdfExtensions());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.pdfMimeTypes());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.images:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.imageExtensions());
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileMimeTypes, $.ig.CloudFile.prototype.imageMimeTypes());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.visualizations:
					{
						$.ig.ArrayUtility.prototype.addToCPReadOnlyList(fileExtensions, $.ig.CloudFile.prototype.reportPlusExtensions());
						break;
					}
				case $.ig.SPEvoSearchFilterResultType.prototype.sites:
					{
						break;
					}
				default: break;
			}
		}
		searchQuery._fileExtensions = fileExtensions;
		searchQuery._fileMimeTypes = fileMimeTypes;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyResultTypeFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyModificationDateFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	applyModificationDateFilterOptions: function (filterOptions, searchQuery) {
		var filterOption = filterOptions[0];
		var modificationDate = this.getDateForModificationDateFilterValue(filterOption.modificationDate());
		switch (filterOption.modificationDate()) {
			case $.ig.SPEvoSearchFilterModificationDate.prototype.past24Hours:
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastWeek:
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastMonth:
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastSixMonths:
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastYear:
				{
					searchQuery._modifiedSince = $.ig.util.toNullable($.ig.Date.prototype.$type, modificationDate);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.earlier:
				{
					searchQuery._modifiedBefore = $.ig.util.toNullable($.ig.Date.prototype.$type, modificationDate);
					break;
				}
			default: break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyModificationDateFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.SPEvoSearchOptionsToSearchQueryMapper::GetDateForModificationDateFilterValue(Infragistics.SPEvoSearchFilterModificationDate)" />*/
	getDateForModificationDateFilterValue: function (modificationValue) {
		var date = $.ig.DateUtility.prototype.now();
		switch (modificationValue) {
			case $.ig.SPEvoSearchFilterModificationDate.prototype.past24Hours:
				{
					date = $.ig.DateUtility.prototype.addToDate(date, 0, 0, -1, 0, 0);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastWeek:
				{
					date = $.ig.DateUtility.prototype.addToDate(date, 0, 0, -7, 0, 0);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastMonth:
				{
					var month = $.ig.DateUtility.prototype.getMonthForDate(date);
					var year = $.ig.DateUtility.prototype.getYearForDate(date);
					date = $.ig.DateUtility.prototype.createDate(month, 1, year);
					date = $.ig.DateUtility.prototype.addToDate(date, 0, -1, 0, 0, 0);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastSixMonths:
				{
					var month1 = $.ig.DateUtility.prototype.getMonthForDate(date);
					var year1 = $.ig.DateUtility.prototype.getYearForDate(date);
					date = $.ig.DateUtility.prototype.createDate(month1, 1, year1);
					date = $.ig.DateUtility.prototype.addToDate(date, 0, -6, 0, 0, 0);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.pastYear:
				{
					date = $.ig.DateUtility.prototype.addToDate(date, -1, 0, 0, 0, 0);
					break;
				}
			case $.ig.SPEvoSearchFilterModificationDate.prototype.earlier:
				{
					date = $.ig.DateUtility.prototype.addToDate(date, -1, 0, 0, 0, 0);
					break;
				}
			default: break;
		}
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.SPEvoSearchOptionsToSearchQueryMapper::GetDateForModificationDateFilterValue(Infragistics.SPEvoSearchFilterModificationDate)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyAuthorFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	applyAuthorFilterOptions: function (filterOptions, searchQuery) {
		var filterOption = filterOptions[0];
		searchQuery._author = filterOption.modifiedByValue();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyAuthorFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyKeywordsFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	applyKeywordsFilterOptions: function (filterOptions, searchQuery) {
		var filterOption = filterOptions[0];
		searchQuery._text = filterOption.keywords();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchOptionsToSearchQueryMapper::ApplyKeywordsFilterOptions(Infragistics.CPList, Infragistics.SearchQuery)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchOptionsToSearchQueryMapper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchOptionsToSearchQueryMapper" />*/

/*<BeginType Name="Infragistics.SPEvoSearchPresenterModel" />*/

$.ig.util.defType('SPEvoSearchPresenterModel', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchPresenterModel::AvailableProviders()" />*/
	availableProviders: function () {
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		if (userFile == null) {
			return new $.ig.Array();
		}
		var allProviders = userFile.providers();
		var supportedProviders = new $.ig.Array();
		var count = allProviders.length;
		for (var i = 0; i < count; i++) {
			var provider = allProviders[i];
			if ($.ig.SPEvoSearchPresenterModel.prototype.hasSearchCapability(provider) && !provider.isLocal()) {
				supportedProviders.add(provider);
			}
		}
		return supportedProviders;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchPresenterModel::AvailableProviders()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchPresenterModel::HasSearchCapability(Infragistics.ProviderBase)" />*/
	hasSearchCapability: function (provider) {
		var hasSearchCapability = false;
		var searchCapabilities = $.ig.CloudProviderTypeUtility.prototype.getSearchCapabilities(provider.provider());
		hasSearchCapability = searchCapabilities.length > 0 && !$.ig.SPEvoSearchPresenterModel.prototype.isCapabilityIncluded(searchCapabilities, $.ig.SearchCapabilities.prototype.searchUnsupported);
		return hasSearchCapability;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchPresenterModel::HasSearchCapability(Infragistics.ProviderBase)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchPresenterModel::IsCapabilityIncluded(, Infragistics.SearchCapabilities)" />*/
	isCapabilityIncluded: function (capabilites, cap) {
		var count = capabilites.length;
		for (var i = 0; i < count; i++) {
			if (capabilites[i] == cap) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchPresenterModel::IsCapabilityIncluded(, Infragistics.SearchCapabilities)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchPresenterModel', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchPresenterModel" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsSectionInfo" />*/

$.ig.util.defType('SPEvoSearchResultsSectionInfo', 'Object', {
	_sectionIndex: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.SPEvoSearchResultsSectionInfo::SectionIndex()" />*/
	sectionIndex: function (value) {
		if (arguments.length === 1) {
			this._sectionIndex = value;
			return value;
		} else {
			return this._sectionIndex;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.SPEvoSearchResultsSectionInfo::SectionIndex()" />*/
	,
	_providerId: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::ProviderId()" />*/
	providerId: function (value) {
		if (arguments.length === 1) {
			this._providerId = value;
			return value;
		} else {
			return this._providerId;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::ProviderId()" />*/
	,
	_state: 0,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsSectionInfoState Infragistics.SPEvoSearchResultsSectionInfo::State()" />*/
	state: function (value) {
		if (arguments.length === 1) {
			this._state = value;
			return value;
		} else {
			return this._state;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsSectionInfoState Infragistics.SPEvoSearchResultsSectionInfo::State()" />*/
	,
	_data: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.SPEvoSearchResultsSectionInfo::Data()" />*/
	data: function (value) {
		if (arguments.length === 1) {
			this._data = value;
			return value;
		} else {
			return this._data;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.SPEvoSearchResultsSectionInfo::Data()" />*/
	,
	_errorMessage: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::ErrorMessage()" />*/
	errorMessage: function (value) {
		if (arguments.length === 1) {
			this._errorMessage = value;
			return value;
		} else {
			return this._errorMessage;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::ErrorMessage()" />*/
	,
	_isLoadingNextPage: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchResultsSectionInfo::IsLoadingNextPage()" />*/
	isLoadingNextPage: function (value) {
		if (arguments.length === 1) {
			this._isLoadingNextPage = value;
			return value;
		} else {
			return this._isLoadingNextPage;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchResultsSectionInfo::IsLoadingNextPage()" />*/
	,
	_hasMoreItems: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchResultsSectionInfo::HasMoreItems()" />*/
	hasMoreItems: function (value) {
		if (arguments.length === 1) {
			this._hasMoreItems = value;
			return value;
		} else {
			return this._hasMoreItems;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchResultsSectionInfo::HasMoreItems()" />*/
	,
	_warningMessage: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::WarningMessage()" />*/
	warningMessage: function (value) {
		if (arguments.length === 1) {
			this._warningMessage = value;
			return value;
		} else {
			return this._warningMessage;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchResultsSectionInfo::WarningMessage()" />*/
	,
	init: function (initNumber, providerId, state, sectionIndex) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
				case 2:
					this.init2.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.providerId(providerId);
		this.state(state);
		this.sectionIndex(sectionIndex);
	},
	init1: function (initNumber, providerId, state, data, sectionIndex, warningMessage) {
		$.ig.Object.prototype.init.call(this);
		this.providerId(providerId);
		this.state(state);
		this.data(data);
		this.sectionIndex(sectionIndex);
		this.warningMessage(warningMessage);
	},
	init2: function (initNumber, providerId, state, errorMessage, sectionIndex) {
		$.ig.Object.prototype.init.call(this);
		this.providerId(providerId);
		this.state(state);
		this.errorMessage(errorMessage);
		this.sectionIndex(sectionIndex);
	},
	$type: new $.ig.Type('SPEvoSearchResultsSectionInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsSectionInfo" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersDelegate" />*/

$.ig.util.defType('SPEvoSearchFiltersDelegate', 'Object', {
	$type: new $.ig.Type('SPEvoSearchFiltersDelegate', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersDelegate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersPresenter" />*/

$.ig.util.defType('SPEvoSearchFiltersPresenter', 'Object', {
	$type: new $.ig.Type('SPEvoSearchFiltersPresenter', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersPresenter" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersPresenterImpl" />*/

$.ig.util.defType('SPEvoSearchFiltersPresenterImpl', 'Object', {
	__manager: null,
	__filters: null,
	__options: null,
	init: function (manager, options) {
		$.ig.Object.prototype.init.call(this);
		this.__manager = manager;
		this.__options = options;
	},
	_delegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFiltersDelegate Infragistics.SPEvoSearchFiltersPresenterImpl::Delegate()" />*/
	delegate: function (value) {
		if (arguments.length === 1) {
			this._delegate = value;
			return value;
		} else {
			return this._delegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFiltersDelegate Infragistics.SPEvoSearchFiltersPresenterImpl::Delegate()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::isLocalSearch()" />*/
	isLocalSearch: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::isLocalSearch()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::LoadFilters()" />*/
	loadFilters: function () {
		if (this.isLocalSearch()) {
		} else {
			this.__filters = this.__manager.getAllFiltersOnScopes();
		}
		if (this.delegate() != null) {
			this.delegate().setApplyButtonEnabled(false);
			this.delegate().updateSearchFilters();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::LoadFilters()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::AcceptFilterChanges()" />*/
	acceptFilterChanges: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::AcceptFilterChanges()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::DiscardFilterChanges()" />*/
	discardFilterChanges: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::DiscardFilterChanges()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersPresenterImpl::Filters()" />*/
	filters: function () {
		return this.__filters;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersPresenterImpl::Filters()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnAuthorOptionSelectionStateChanged(Infragistics.SPEvoSearchFilterOption)" />*/
	onAuthorOptionSelectionStateChanged: function (authorOption) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnAuthorOptionSelectionStateChanged(Infragistics.SPEvoSearchFilterOption)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnAuthorOptionValueChanged(Infragistics.SPEvoSearchFilterOption, System.String)" />*/
	onAuthorOptionValueChanged: function (authorOption, newValue) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnAuthorOptionValueChanged(Infragistics.SPEvoSearchFilterOption, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnOptionSelectionChange(Infragistics.SPEvoSearchFilterOption)" />*/
	onOptionSelectionChange: function (option) {
		if (option.groupType() == $.ig.SPEvoSearchFilterType.prototype.location) {
			this.__filters = this.__manager.updateFilterOptionsAvailabilityBasedOnSelectedLocations(this.__filters);
		}
		var hasFiltersChanges = this.hasFilterChanges();
		this.delegate().setApplyButtonEnabled(hasFiltersChanges);
		this.delegate().updateSearchFilters();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::OnOptionSelectionChange(Infragistics.SPEvoSearchFilterOption)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::ShouldShowFilterButton()" />*/
	shouldShowFilterButton: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::ShouldShowFilterButton()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::UpdateScopesFilter()" />*/
	updateScopesFilter: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::UpdateScopesFilter()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::HasFilterChanges()" />*/
	hasFilterChanges: function () {
		var hasChanges = false;
		for (var i = 0; !hasChanges && i < this.__filters.length; i++) {
			var filterGroup = this.__filters[i];
			hasChanges = filterGroup.hasChanges();
		}
		return hasChanges;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::HasFilterChanges()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::HasFiltersSelected()" />*/
	hasFiltersSelected: function () {
		var hasSelected = false;
		for (var i = 0; !hasSelected && i < this.__filters.length; i++) {
			var filterGroup = this.__filters[i];
			hasSelected = filterGroup.hasSelectedOptions();
		}
		return hasSelected;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersPresenterImpl::HasFiltersSelected()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::ClearFiltersSelection()" />*/
	clearFiltersSelection: function () {
		var count = this.__filters.length;
		for (var i = 0; i < count; i++) {
			var group = this.__filters[i];
			this.clearGroupSelection(group);
		}
		this.delegate().refreshView();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::ClearFiltersSelection()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::ClearGroupSelection(Infragistics.SPEvoSearchFilterGroup)" />*/
	clearGroupSelection: function (group) {
		if (group.type() == $.ig.SPEvoSearchFilterType.prototype.keywords) {
			var option = group.filterOptions()[0];
			option.keywords(null);
			option.isSelected(false);
		} else if (group.type() == $.ig.SPEvoSearchFilterType.prototype.modifiedBy) {
			var option1 = group.filterOptions()[0];
			option1.modifiedByValue(null);
			option1.isSelected(false);
		} else {
			var items = group.filterOptions();
			var count = items.length;
			for (var i = 0; i < count; i++) {
				var item = items[i];
				item.isSelected(false);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersPresenterImpl::ClearGroupSelection(Infragistics.SPEvoSearchFilterGroup)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFiltersPresenterImpl', $.ig.Object.prototype.$type, [$.ig.SPEvoSearchFiltersPresenter.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersPresenterImpl" />*/

/*<BeginType Name="Infragistics.SPEvoSearchPresenterDelegate" />*/

$.ig.util.defType('SPEvoSearchPresenterDelegate', 'Object', {
	$type: new $.ig.Type('SPEvoSearchPresenterDelegate', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchPresenterDelegate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchPresenter" />*/

$.ig.util.defType('SPEvoSearchPresenter', 'Object', {
	$type: new $.ig.Type('SPEvoSearchPresenter', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchPresenter" />*/

/*<BeginType Name="Infragistics.SPEvoSearchPresenterImpl" />*/

$.ig.util.defType('SPEvoSearchPresenterImpl', 'Object', {
	_delegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchPresenterDelegate Infragistics.SPEvoSearchPresenterImpl::Delegate()" />*/
	delegate: function (value) {
		if (arguments.length === 1) {
			this._delegate = value;
			return value;
		} else {
			return this._delegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchPresenterDelegate Infragistics.SPEvoSearchPresenterImpl::Delegate()" />*/
	,
	__searchOptions: null,
	init: function (options) {
		$.ig.Object.prototype.init.call(this);
		this.__searchOptions = options;
	},
	/*<BeginMethod Name="Infragistics.SPEvoSearchOptions Infragistics.SPEvoSearchPresenterImpl::SearchOptions()" />*/
	searchOptions: function () {
		return this.__searchOptions;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchOptions Infragistics.SPEvoSearchPresenterImpl::SearchOptions()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::SetFilters(Infragistics.CPList)" />*/
	setFilters: function (filters) {
		this.__searchOptions.filters(filters);
		this.updateSearchEnabled();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::SetFilters(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::UpdateSearchEnabled()" />*/
	updateSearchEnabled: function () {
		var isValid = this.__searchOptions.isValid();
		this.delegate().setSearchEnabled(isValid);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::UpdateSearchEnabled()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::OnSearchButtonPressed()" />*/
	onSearchButtonPressed: function () {
		this.triggerSearch();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::OnSearchButtonPressed()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::TriggerSearch()" />*/
	triggerSearch: function () {
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySearch, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionSearchTriggered, "");
		this.delegate().triggerSearch();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::TriggerSearch()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::ViewLoaded()" />*/
	viewLoaded: function () {
		var availableProviders = $.ig.SPEvoSearchPresenterModel.prototype.availableProviders();
		if (availableProviders.length > 0) {
			this.delegate().showInitialState();
		} else {
			this.delegate().showEmptyViewState();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchPresenterImpl::ViewLoaded()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchPresenterImpl', $.ig.Object.prototype.$type, [$.ig.SPEvoSearchPresenter.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSearchPresenterImpl" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsPresenter" />*/

$.ig.util.defType('SPEvoSearchResultsPresenter', 'Object', {
	__manager: null,
	init: function (searchOptions) {
		$.ig.Object.prototype.init.call(this);
		this.__manager = new $.ig.SPEvoSearchFiltersManager();
		this.searchOptions(searchOptions);
		this.__searchOptionsToSearchQueryMapper = new $.ig.SPEvoSearchOptionsToSearchQueryMapper();
	},
	_searchOptions: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchOptions Infragistics.SPEvoSearchResultsPresenter::SearchOptions()" />*/
	searchOptions: function (value) {
		if (arguments.length === 1) {
			this._searchOptions = value;
			return value;
		} else {
			return this._searchOptions;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchOptions Infragistics.SPEvoSearchResultsPresenter::SearchOptions()" />*/
	,
	_delegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsPresenterDelegate Infragistics.SPEvoSearchResultsPresenter::Delegate()" />*/
	delegate: function (value) {
		if (arguments.length === 1) {
			this._delegate = value;
			return value;
		} else {
			return this._delegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsPresenterDelegate Infragistics.SPEvoSearchResultsPresenter::Delegate()" />*/
	,
	__searchResults: null,
	__searchOptionsToSearchQueryMapper: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::InitializeSearchResults(Infragistics.CPList)" />*/
	initializeSearchResults: function (searchableProviders) {
		this.__searchResults = new $.ig.Array();
		var count = searchableProviders.length;
		for (var sectionIndex = 0; sectionIndex < count; sectionIndex++) {
			var provider = searchableProviders[sectionIndex];
			var providerId = provider.uniqueId();
			var state = $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading;
			var sectionInfo = new $.ig.SPEvoSearchResultsSectionInfo(0, providerId, state, sectionIndex);
			this.__searchResults.add(sectionInfo);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::InitializeSearchResults(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::StartSearch()" />*/
	startSearch: function () {
		var selectedProviders = this.getSelectedProviders();
		this.initializeSearchResults(selectedProviders);
		var count = selectedProviders.length;
		for (var sectionIndex = 0; sectionIndex < count; sectionIndex++) {
			var provider = selectedProviders[sectionIndex];
			this.startSearchForProvider(provider, sectionIndex);
		}
		this.refreshView();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::StartSearch()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::StartSearchForProvider(Infragistics.ProviderBase, System.Int32)" />*/
	startSearchForProvider: function (provider, sectionIndex) {
		var searchRequest = this.getSearchRequest(provider, sectionIndex);
		if (searchRequest != null) {
			searchRequest.execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::StartSearchForProvider(Infragistics.ProviderBase, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::GetSearchRequest(Infragistics.ProviderBase, System.Int32)" />*/
	getSearchRequest: function (provider, sectionIndex) {
		if (this.isSharePoint(provider)) {
			return this.getSearchRequestPage(provider, sectionIndex, 0);
		}
		var query = this.createSearchQuery();
		return this.createSearchRequest(provider, sectionIndex, query);
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::GetSearchRequest(Infragistics.ProviderBase, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsSharePoint(Infragistics.ProviderBase)" />*/
	isSharePoint: function (provider) {
		return provider.provider() == $.ig.CloudProviderType.prototype.sharePoint || provider.provider() == $.ig.CloudProviderType.prototype.microsoft || provider.provider() == $.ig.CloudProviderType.prototype.microsoftProvider;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsSharePoint(Infragistics.ProviderBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::GetSearchRequestPage(Infragistics.ProviderBase, System.Int32, System.Int32)" />*/
	getSearchRequestPage: function (provider, sectionIndex, startAt) {
		var query = this.createSharePointSearchQuery();
		query._startAt = startAt;
		query._itemsPerPage = $.ig.SPEvoSearchResultsPresenter.prototype._iTEMS_PER_PAGE;
		return this.createSearchRequest(provider, sectionIndex, query);
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::GetSearchRequestPage(Infragistics.ProviderBase, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.SearchQuery Infragistics.SPEvoSearchResultsPresenter::CreateSearchQuery()" />*/
	createSearchQuery: function () {
		var query = new $.ig.SearchQuery();
		if (this.searchOptions().filters() != null) {
			this.__searchOptionsToSearchQueryMapper.applySearchOptions(this.searchOptions(), query);
		}
		return query;
	}
	/*<EndMethod Name="Infragistics.SearchQuery Infragistics.SPEvoSearchResultsPresenter::CreateSearchQuery()" />*/
	,
	/*<BeginMethod Name="Infragistics.SharePointSearchQuery Infragistics.SPEvoSearchResultsPresenter::CreateSharePointSearchQuery()" />*/
	createSharePointSearchQuery: function () {
		var query = new $.ig.SharePointSearchQuery();
		if (this.searchOptions().filters() != null) {
			this.__searchOptionsToSearchQueryMapper.applySearchOptions(this.searchOptions(), query);
			query._searchSites = this.isSiteResultTypeSelected();
		}
		return query;
	}
	/*<EndMethod Name="Infragistics.SharePointSearchQuery Infragistics.SPEvoSearchResultsPresenter::CreateSharePointSearchQuery()" />*/
	,
	/*<BeginMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::CreateSearchRequest(Infragistics.ProviderBase, System.Int32, Infragistics.SearchQuery)" />*/
	createSearchRequest: function (provider, sectionIndex, query) {
		var $self = this;
		var fileManager = $.ig.CloudProviderTypeUtility.prototype.createFileManagerForProvider(provider);
		var providerId = provider.uniqueId();
		var userIdentifier = $.ig.EMUserFileManager.prototype.getUserFile().identifier();
		var searchRequest = fileManager.searchFilesWithQuery(query, function (files) {
			var sectionData = new $.ig.Array();
			var results = files;
			for (var i = 0; i < results.length; i++) {
				var file = results[i];
				var gFile = fileManager.convertToGenericCloudFile(file, userIdentifier);
				sectionData.add(gFile);
			}
			var state = results.length > 0 ? $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateResults : $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults;
			var warningMessage = $self.__manager.getWarningMessageForProvider(provider.provider(), $self.searchOptions().getSelectedFilters(), query._text);
			var sectionInfo = new $.ig.SPEvoSearchResultsSectionInfo(1, providerId, state, sectionData, sectionIndex, warningMessage);
			sectionInfo.hasMoreItems(results.length == $.ig.SPEvoSearchResultsPresenter.prototype._iTEMS_PER_PAGE);
			$self.updateSearchResultsWithSectionInfo(sectionInfo);
		}, function (e) {
			var sectionInfo;
			if (e.errorCode() == $.ig.CloudError.prototype.errorCannotSearchByEmptyText) {
				var warningMessage = $self.__manager.getWarningMessageForProvider(provider.provider(), $self.searchOptions().getSelectedFilters(), query._text);
				sectionInfo = new $.ig.SPEvoSearchResultsSectionInfo(1, providerId, $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults, new $.ig.Array(), sectionIndex, warningMessage);
			} else {
				sectionInfo = new $.ig.SPEvoSearchResultsSectionInfo(2, providerId, $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError, e.errorMessage(), sectionIndex);
			}
			$self.updateSearchResultsWithSectionInfo(sectionInfo);
		});
		return searchRequest;
	}
	/*<EndMethod Name="Infragistics.Request Infragistics.SPEvoSearchResultsPresenter::CreateSearchRequest(Infragistics.ProviderBase, System.Int32, Infragistics.SearchQuery)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProviders()" />*/
	getSelectedProviders: function () {
		return this.filterProvidersBySelectedLocations();
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProviders()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProvidersTypes()" />*/
	getSelectedProvidersTypes: function () {
		var supportedProviderTypes = new $.ig.Array();
		var supportedProviders = this.getSelectedProviders();
		var count = supportedProviders.length;
		for (var i = 0; i < count; i++) {
			var provider = supportedProviders[i];
			var providerType = provider.provider();
			var providerTypeName = $.ig.CloudProviderTypeUtility.prototype.convertTypeToString(providerType);
			if ($.ig.ArrayUtility.prototype.arrayContains3(providerTypeName, supportedProviderTypes) == -1) {
				supportedProviderTypes.add(providerTypeName);
			}
		}
		return supportedProviderTypes;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProvidersTypes()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::FilterProvidersBySelectedLocations()" />*/
	filterProvidersBySelectedLocations: function () {
		var locationGroup = this.getFilterGroup($.ig.SPEvoSearchFilterType.prototype.location);
		if (locationGroup == null) {
			return $.ig.SPEvoSearchPresenterModel.prototype.availableProviders();
		}
		var selectedLocations = null;
		if (locationGroup.hasSelectedOptions()) {
			selectedLocations = locationGroup.selectedOptions();
		} else if (locationGroup.hasEnabledOptions()) {
			selectedLocations = locationGroup.enabledOptions();
		}
		var filteredProviders = this.getSelectedProvidersFromOptions(selectedLocations);
		return filteredProviders;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::FilterProvidersBySelectedLocations()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchResultsPresenter::GetFilterGroup(Infragistics.SPEvoSearchFilterType)" />*/
	getFilterGroup: function (filterGroupType) {
		var count = this.searchOptions().filters() != null ? this.searchOptions().filters().length : 0;
		for (var i = 0; i < count; i++) {
			var filterGroup = this.searchOptions().filters()[i];
			if (filterGroup.type() == filterGroupType) {
				return filterGroup;
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchResultsPresenter::GetFilterGroup(Infragistics.SPEvoSearchFilterType)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::CreateFiltersTokensValues()" />*/
	createFiltersTokensValues: function () {
		var filters = this.searchOptions().filters();
		var tokensValues = new $.ig.Array();
		for (var i = 0; i < filters.length; i++) {
			var filterGroup = filters[i];
			var selectedOptions = filterGroup.selectedOptions();
			var optionsTitles = new $.ig.Array();
			for (var j = 0; j < selectedOptions.length; j++) {
				var filterOption = selectedOptions[j];
				optionsTitles.add(filterOption.tokenTitle());
			}
			if (selectedOptions.length > 0) {
				var filterTokenValue = this.createTokenValue(filterGroup.type(), optionsTitles);
				tokensValues.add(filterTokenValue);
			}
		}
		return tokensValues;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::CreateFiltersTokensValues()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterTokenValue Infragistics.SPEvoSearchResultsPresenter::CreateTokenValue(Infragistics.SPEvoSearchFilterType, Infragistics.CPList)" />*/
	createTokenValue: function (filterType, titles) {
		var filterTokenValue;
		if (filterType == $.ig.SPEvoSearchFilterType.prototype.location) {
			var providersTitles = this.getSelectedProvidersTypes();
			filterTokenValue = new $.ig.SPEvoSearchFilterLocationTokenValue(filterType, providersTitles);
		} else {
			filterTokenValue = new $.ig.SPEvoSearchFilterTokenValue(filterType, titles);
		}
		return filterTokenValue;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterTokenValue Infragistics.SPEvoSearchResultsPresenter::CreateTokenValue(Infragistics.SPEvoSearchFilterType, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProvidersFromOptions(Infragistics.CPList)" />*/
	getSelectedProvidersFromOptions: function (locationFilterOptions) {
		var filteredProviders = new $.ig.Array();
		var availableProviders = $.ig.SPEvoSearchPresenterModel.prototype.availableProviders();
		var count = availableProviders.length;
		for (var i = 0; i < count; i++) {
			var provider = availableProviders[i];
			var providerType = provider.provider();
			if (this.isProviderSelected(provider, locationFilterOptions)) {
				filteredProviders.add(provider);
			}
		}
		return filteredProviders;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsPresenter::GetSelectedProvidersFromOptions(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsProviderSelected(Infragistics.ProviderBase, Infragistics.CPList)" />*/
	isProviderSelected: function (provider, locationFilterOptions) {
		var count = locationFilterOptions.length;
		for (var i = 0; i < count; i++) {
			var locationOption = locationFilterOptions[i];
			if (locationOption.providerId() == provider.uniqueId()) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsProviderSelected(Infragistics.ProviderBase, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsSiteResultTypeSelected()" />*/
	isSiteResultTypeSelected: function () {
		var resultTypeFilterGroup = this.getFilterGroup($.ig.SPEvoSearchFilterType.prototype.resultType);
		var resultTypeFilterOptions = resultTypeFilterGroup.filterOptions();
		var count = resultTypeFilterOptions.length;
		for (var i = 0; i < count; i++) {
			var filterOption = resultTypeFilterOptions[i];
			if (filterOption.resultType() == $.ig.SPEvoSearchFilterResultType.prototype.sites && filterOption.isSelected()) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchResultsPresenter::IsSiteResultTypeSelected()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::UpdateSearchResultsWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	updateSearchResultsWithSectionInfo: function (sectionInfo) {
		var currentSectionInfo = this.__searchResults[sectionInfo.sectionIndex()];
		if (currentSectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading) {
			this.__searchResults[sectionInfo.sectionIndex()] = sectionInfo;
		} else {
			this.updateSectionInfo(currentSectionInfo, sectionInfo);
		}
		this.refreshView();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::UpdateSearchResultsWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::UpdateSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	updateSectionInfo: function (currentSectionInfo, sectionInfo) {
		if (sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError) {
			currentSectionInfo.state($.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError);
			currentSectionInfo.errorMessage(sectionInfo.errorMessage());
		} else if (sectionInfo.state() == $.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateResults) {
			currentSectionInfo.isLoadingNextPage(false);
			currentSectionInfo.hasMoreItems(sectionInfo.hasMoreItems());
			$.ig.ArrayUtility.prototype.addToCPReadOnlyList(currentSectionInfo.data(), sectionInfo.data());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::UpdateSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo, Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::RefreshView()" />*/
	refreshView: function () {
		this.delegate().updateWithSearchResults(this.__searchResults);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::RefreshView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::FetchNextPageForSection(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	fetchNextPageForSection: function (sectionInfo) {
		sectionInfo.isLoadingNextPage(true);
		this.fetchDataWithSectionInfo(sectionInfo);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::FetchNextPageForSection(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::FetchDataWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	fetchDataWithSectionInfo: function (info) {
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		var provider = userFile.resolveProviderForID(info.providerId());
		var startingIndex = 0;
		if (info.data() != null) {
			startingIndex = info.data().length + 1;
		}
		var searchRequest = this.getSearchRequestPage(provider, info.sectionIndex(), startingIndex);
		if (searchRequest != null) {
			searchRequest.execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::FetchDataWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchResultsSectionInfo Infragistics.SPEvoSearchResultsPresenter::GetSectionInfo(System.Int32)" />*/
	getSectionInfo: function (sectionIndex) {
		var selectedProviders = this.getSelectedProviders();
		return selectedProviders[sectionIndex];
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchResultsSectionInfo Infragistics.SPEvoSearchResultsPresenter::GetSectionInfo(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::RetrySearchWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	retrySearchWithSectionInfo: function (info) {
		this.fetchDataWithSectionInfo(info);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsPresenter::RetrySearchWithSectionInfo(Infragistics.SPEvoSearchResultsSectionInfo)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsPresenter', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsPresenter" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsPresenterDelegate" />*/

$.ig.util.defType('SPEvoSearchResultsPresenterDelegate', 'Object', {
	$type: new $.ig.Type('SPEvoSearchResultsPresenterDelegate', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsPresenterDelegate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterGroupUtility" />*/

$.ig.util.defType('SPEvoSearchFilterGroupUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterGroupUtility::GetGroupWithType(Infragistics.CPList, Infragistics.SPEvoSearchFilterType)" />*/
	getGroupWithType: function (filters, type) {
		for (var i = 0; i < filters.length; i++) {
			if ((filters[i]).type() == type) {
				return filters[i];
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterGroupUtility::GetGroupWithType(Infragistics.CPList, Infragistics.SPEvoSearchFilterType)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterGroupUtility::GetLocationsFilters(Infragistics.CPList)" />*/
	getLocationsFilters: function (allFilters) {
		return $.ig.SPEvoSearchFilterGroupUtility.prototype.getGroupWithType(allFilters, $.ig.SPEvoSearchFilterType.prototype.location);
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFilterGroupUtility::GetLocationsFilters(Infragistics.CPList)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFilterGroupUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterGroupUtility" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersManager" />*/

$.ig.util.defType('SPEvoSearchFiltersManager', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetResultTypeFilters()" />*/
	getResultTypeFilters: function () {
		var resultTypeGroup = new $.ig.SPEvoSearchFilterGroup($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.filterByResultType), $.ig.SPEvoSearchFilterType.prototype.resultType);
		var options = new $.ig.Array();
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.documents), $.ig.EMContentIcons.prototype.icons().getWordIcon(), $.ig.SPEvoSearchFilterResultType.prototype.documents));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.spreadSheets), $.ig.EMContentIcons.prototype.icons().getExcelIcon(), $.ig.SPEvoSearchFilterResultType.prototype.spreadsheets));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.presentations), $.ig.EMContentIcons.prototype.icons().getPowerpointIcon(), $.ig.SPEvoSearchFilterResultType.prototype.presentations));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, "PDF", $.ig.EMContentIcons.prototype.icons().getPdfIcon(), $.ig.SPEvoSearchFilterResultType.prototype.pDF));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.images), $.ig.EMContentIcons.prototype.icons().getImageIcon(), $.ig.SPEvoSearchFilterResultType.prototype.images));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.visualizations), $.ig.EMContentIcons.prototype.icons().getVisualizationsIcon(), $.ig.SPEvoSearchFilterResultType.prototype.visualizations));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.files), $.ig.EMContentIcons.prototype.icons().getFileGenericIcon(), $.ig.SPEvoSearchFilterResultType.prototype.files));
		options.add(new $.ig.SPEvoSearchFilterOption(2, resultTypeGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sites), $.ig.EMContentIcons.prototype.icons().getSharepointIcon(), $.ig.SPEvoSearchFilterResultType.prototype.sites));
		resultTypeGroup.filterOptions(options);
		return resultTypeGroup;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetResultTypeFilters()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetLocationFilters()" />*/
	getLocationFilters: function () {
		var locationsGroup = new $.ig.SPEvoSearchFilterGroup($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.filterByLocation), $.ig.SPEvoSearchFilterType.prototype.location);
		var options = new $.ig.Array();
		var availableProviders = $.ig.SPEvoSearchPresenterModel.prototype.availableProviders();
		for (var i = 0; i < availableProviders.length; i++) {
			var provider = availableProviders[i];
			options.add(new $.ig.SPEvoSearchFilterOption(0, locationsGroup, provider.title(), $.ig.CloudFileUtility.prototype.resolveIconForProvider(provider.provider()), provider.uniqueId(), provider.provider()));
		}
		locationsGroup.filterOptions(options);
		return locationsGroup;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetLocationFilters()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetModificationDateFilters()" />*/
	getModificationDateFilters: function () {
		var dateFiltersGroup = new $.ig.SPEvoSearchFilterGroup($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.filterByModificationDate), $.ig.SPEvoSearchFilterType.prototype.modificationDate);
		var options = new $.ig.Array();
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.past24Hours), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.past24Hours));
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pastWeek), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.pastWeek));
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pastMonth), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.pastMonth));
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pastSixMonths), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.pastSixMonths));
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pastYear), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.pastYear));
		options.add(new $.ig.SPEvoSearchFilterOption(1, dateFiltersGroup, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.earlier), $.ig.EMIcons.prototype.icons().getClockIcon(), $.ig.SPEvoSearchFilterModificationDate.prototype.earlier));
		dateFiltersGroup.filterOptions(options);
		return dateFiltersGroup;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetModificationDateFilters()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetModifiedByFilters()" />*/
	getModifiedByFilters: function () {
		var modifiedByGroup = new $.ig.SPEvoSearchFilterGroup($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.author), $.ig.SPEvoSearchFilterType.prototype.modifiedBy);
		var options = new $.ig.Array();
		options.add(new $.ig.SPEvoSearchFilterOption(3, modifiedByGroup, "Enter author", $.ig.EMIcons.prototype.icons().getUserIcon()));
		modifiedByGroup.filterOptions(options);
		return modifiedByGroup;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetModifiedByFilters()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetKeywordFilters()" />*/
	getKeywordFilters: function () {
		var keywordGroup = new $.ig.SPEvoSearchFilterGroup("Keywords", $.ig.SPEvoSearchFilterType.prototype.keywords);
		var options = new $.ig.Array();
		options.add(new $.ig.SPEvoSearchFilterOption(3, keywordGroup, "Enter Keywords", $.ig.EMIcons.prototype.icons().getSearchIcon()));
		keywordGroup.filterOptions(options);
		return keywordGroup;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetKeywordFilters()" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetScopesFiltersForSites()" />*/
	getScopesFiltersForSites: function () {
		return null;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterGroup Infragistics.SPEvoSearchFiltersManager::GetScopesFiltersForSites()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetAllFiltersOnScopes()" />*/
	getAllFiltersOnScopes: function () {
		var locationFIlters = this.getLocationFilters();
		return this.filtersForSearchOptionsAndLocations(null, locationFIlters);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetAllFiltersOnScopes()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::FiltersForSearchOptionsAndLocations(Infragistics.SPEvoSearchOptions, Infragistics.SPEvoSearchFilterGroup)" />*/
	filtersForSearchOptionsAndLocations: function (searchOptions, locationFilters) {
		var filters = new $.ig.Array();
		var providers;
		if (searchOptions != null) {
			providers = null;
		} else {
			providers = this.getProvidersFromLocationFilters(locationFilters);
			filters.add(this.getKeywordFilters());
			filters.add(locationFilters);
			filters.add(this.getResultTypeFilters());
			filters.add(this.getModificationDateFilters());
			filters.add(this.getModifiedByFilters());
		}
		return this.initializeFilters(filters, providers);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::FiltersForSearchOptionsAndLocations(Infragistics.SPEvoSearchOptions, Infragistics.SPEvoSearchFilterGroup)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetProvidersFromLocationFilters(Infragistics.SPEvoSearchFilterGroup)" />*/
	getProvidersFromLocationFilters: function (locationFilters) {
		var providers = new $.ig.Array();
		for (var i = 0; i < locationFilters.filterOptions().length; i++) {
			providers.add(locationFilters.filterOptions()[i]);
		}
		return providers;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetProvidersFromLocationFilters(Infragistics.SPEvoSearchFilterGroup)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::InitializeFilters(Infragistics.CPList, Infragistics.CPList)" />*/
	initializeFilters: function (filters, providers) {
		var initializedFilters = new $.ig.Array();
		for (var i = 0; i < filters.length; i++) {
			var filterGroup = filters[i];
			if (filterGroup.type() == $.ig.SPEvoSearchFilterType.prototype.location) {
				if (filterGroup.filterOptions().length > 1) {
					initializedFilters.add(filterGroup);
				}
			} else {
				var visibleOptions = new $.ig.Array();
				for (var j = 0; j < filterGroup.filterOptions().length; j++) {
					var option = filterGroup.filterOptions()[j];
					var allowedInAtLeastOne = this.isFilterOptionAllowedAtLeastInOneProvider(option, providers);
					if (allowedInAtLeastOne) {
						visibleOptions.add(option);
					}
				}
				if (visibleOptions.length > 0) {
					filterGroup.filterOptions(visibleOptions);
					initializedFilters.add(filterGroup);
				}
			}
		}
		return initializedFilters;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::InitializeFilters(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterOptionAllowedAtLeastInOneProvider(Infragistics.SPEvoSearchFilterOption, Infragistics.CPList)" />*/
	isFilterOptionAllowedAtLeastInOneProvider: function (option, providers) {
		if (providers.length == 0) {
			return true;
		}
		var allowed = false;
		for (var i = 0; !allowed && i < providers.length; i++) {
			var t = (providers[i]).providerType();
			allowed = this.isFilterOptionAllowedByProvider(option, t);
		}
		return allowed;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterOptionAllowedAtLeastInOneProvider(Infragistics.SPEvoSearchFilterOption, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsCapabilityIncluded(, Infragistics.SearchCapabilities)" />*/
	isCapabilityIncluded: function (capabilites, cap) {
		for (var i = 0; i < capabilites.length; i++) {
			if (capabilites[i] == cap) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsCapabilityIncluded(, Infragistics.SearchCapabilities)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterOptionAllowedByProvider(Infragistics.SPEvoSearchFilterOption, Infragistics.CloudProviderType)" />*/
	isFilterOptionAllowedByProvider: function (filterOption, provider) {
		if (filterOption.groupType() == $.ig.SPEvoSearchFilterType.prototype.resultType) {
			var resultTypeOption = filterOption;
			if (resultTypeOption.resultType() == $.ig.SPEvoSearchFilterResultType.prototype.files) {
				return provider == $.ig.CloudProviderType.prototype.sharePoint;
			} else if (resultTypeOption.resultType() == $.ig.SPEvoSearchFilterResultType.prototype.visualizations) {
				var capabilites = $.ig.CloudProviderTypeUtility.prototype.getSearchCapabilities(provider);
				return this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByFileExtensions);
			} else if (resultTypeOption.resultType() == $.ig.SPEvoSearchFilterResultType.prototype.sites) {
				return provider == $.ig.CloudProviderType.prototype.sharePoint;
			}
		}
		return this.isFilterTypeAllowedByProvider(filterOption.groupType(), provider);
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterOptionAllowedByProvider(Infragistics.SPEvoSearchFilterOption, Infragistics.CloudProviderType)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterTypeAllowedByProvider(Infragistics.SPEvoSearchFilterType, Infragistics.CloudProviderType)" />*/
	isFilterTypeAllowedByProvider: function (t, provider) {
		if (t == $.ig.SPEvoSearchFilterType.prototype.location) {
			return true;
		} else if (provider == $.ig.CloudProviderType.prototype.microsoft || provider == $.ig.CloudProviderType.prototype.sharePoint || provider == $.ig.CloudProviderType.prototype.sharePoint) {
			return true;
		}
		var capabilites = $.ig.CloudProviderTypeUtility.prototype.getSearchCapabilities(provider);
		switch (t) {
			case $.ig.SPEvoSearchFilterType.prototype.keywords: return true;
			case $.ig.SPEvoSearchFilterType.prototype.resultType: return this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByFileExtensions) || this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByMimeTypes);
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate: return this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByModifiedDateTime);
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByAuthor);
			default: return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersManager::IsFilterTypeAllowedByProvider(Infragistics.SPEvoSearchFilterType, Infragistics.CloudProviderType)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::UpdateFilterOptionsAvailabilityBasedOnSelectedLocations(Infragistics.CPList)" />*/
	updateFilterOptionsAvailabilityBasedOnSelectedLocations: function (allFilters) {
		var locationFilterGroup = $.ig.SPEvoSearchFilterGroupUtility.prototype.getLocationsFilters(allFilters);
		var selectedLocationOptions = locationFilterGroup.selectedOptions();
		var selectedProviders = new $.ig.Array();
		for (var i = 0; i < selectedLocationOptions.length; i++) {
			selectedProviders.add(selectedLocationOptions[i]);
		}
		for (var j = 0; j < allFilters.length; j++) {
			var group = allFilters[j];
			if (group.type() != $.ig.SPEvoSearchFilterType.prototype.location) {
				for (var k = 0; k < group.filterOptions().length; k++) {
					var op = group.filterOptions()[k];
					op.isEnabled(this.isFilterOptionAllowedAtLeastInOneProvider(op, selectedProviders));
				}
				var notAllowedProviders = this.getNotAllowedProvidersInFilterType(group.type(), selectedLocationOptions);
				group.disabledByProviders(notAllowedProviders);
			}
		}
		return allFilters;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::UpdateFilterOptionsAvailabilityBasedOnSelectedLocations(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetNotAllowedProvidersInFilterType(Infragistics.SPEvoSearchFilterType, Infragistics.CPList)" />*/
	getNotAllowedProvidersInFilterType: function (type, selectedLocations) {
		var notAllowedProviders = new $.ig.Array();
		for (var i = 0; i < selectedLocations.length; i++) {
			var option = selectedLocations[i];
			var providerId = option.providerType();
			if (!this.isFilterTypeAllowedByProvider(option.groupType(), providerId)) {
				notAllowedProviders.add(option.title());
			}
		}
		return notAllowedProviders;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersManager::GetNotAllowedProvidersInFilterType(Infragistics.SPEvoSearchFilterType, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForProvider(Infragistics.CloudProviderType, Infragistics.CPList, System.String)" />*/
	getWarningMessageForProvider: function (providerType, allFilters, queryString) {
		var allowedFilterOptionCount = 0;
		var notAllowedFilterOptionCount = 0;
		for (var i = 0; i < allFilters.length; i++) {
			var group = allFilters[i];
			if (group.type() != $.ig.SPEvoSearchFilterType.prototype.location && group.type() != $.ig.SPEvoSearchFilterType.prototype.keywords) {
				for (var j = 0; j < group.selectedOptions().length; j++) {
					var option = group.selectedOptions()[j];
					if (this.isFilterOptionAllowedByProvider(option, providerType)) {
						allowedFilterOptionCount++;
					} else {
						notAllowedFilterOptionCount++;
					}
				}
			}
		}
		var message = this.getWarningMessageForOptionsCount(allowedFilterOptionCount, notAllowedFilterOptionCount, queryString);
		if (queryString == null || queryString.length == 0) {
			var emptyTextMessage = this.getWarningMessageForEmptySearchText(providerType);
			if (message.length > 0 && emptyTextMessage.length > 0) {
				message += " ";
			}
			message += emptyTextMessage;
		}
		return message;
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForProvider(Infragistics.CloudProviderType, Infragistics.CPList, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForOptionsCount(System.Int32, System.Int32, System.String)" />*/
	getWarningMessageForOptionsCount: function (allowedFilterOptionCount, notAllowedFilterOptionCount, queryString) {
		var message = "";
		if (notAllowedFilterOptionCount > 0) {
			if (allowedFilterOptionCount > 0) {
				message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cannotApplySomeFilters);
			} else {
				message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cannotApplyAllFilters);
				if (queryString != null && queryString.length > 0) {
					message += " " + $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.showingOnlyKeywordsResults);
				}
			}
		}
		return message;
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForOptionsCount(System.Int32, System.Int32, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForEmptySearchText(Infragistics.CloudProviderType)" />*/
	getWarningMessageForEmptySearchText: function (providerType) {
		var message = "";
		var capabilites = $.ig.CloudProviderTypeUtility.prototype.getSearchCapabilities(providerType);
		var allowSearchByEmptyText;
		if (providerType == $.ig.CloudProviderType.prototype.sharePoint || providerType == $.ig.CloudProviderType.prototype.microsoft) {
			allowSearchByEmptyText = true;
		} else {
			allowSearchByEmptyText = this.isCapabilityIncluded(capabilites, $.ig.SearchCapabilities.prototype.searchByEmptyText);
		}
		if (!allowSearchByEmptyText) {
			message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.specifyKeywordForSearch);
		}
		return message;
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoSearchFiltersManager::GetWarningMessageForEmptySearchText(Infragistics.CloudProviderType)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFiltersManager', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersManager" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsViewController" />*/

$.ig.util.defType('SPEvoSearchResultsViewController', 'SPEvoBaseViewController', {
	__searchResultsView: null,
	__searchOptions: null,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchResultsViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchResultsViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchResultsViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchResultsViewController::HasNavBar()" />*/
	,
	init: function (searchOptions) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__searchOptions = searchOptions;
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.title($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.searchResults));
		var searchResultsPresenter = new $.ig.SPEvoSearchResultsPresenter(this.__searchOptions);
		this.__searchResultsView = new $.ig.SPEvoSearchResultsView(searchResultsPresenter);
		searchResultsPresenter.delegate(this.__searchResultsView);
		searchResultsPresenter.startSearch();
		this.addSubview(this.__searchResultsView);
		this.addRightBarButtonItem($.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		}));
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.searchResultsScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.measureView(this.__searchResultsView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsViewController" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersViewDelegate" />*/

$.ig.util.defType('SPEvoSearchFiltersViewDelegate', 'Object', {
	$type: new $.ig.Type('SPEvoSearchFiltersViewDelegate', null)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersViewDelegate" />*/

/*<BeginType Name="Infragistics.SPEvoSearchViewController" />*/

$.ig.util.defType('SPEvoSearchViewController', 'SPEvoBaseViewController', {
	init: function () {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
	},
	__filtersView: null,
	__filtersPresenter: null,
	__searchPresenter: null,
	__emptyView: null,
	__searchButton: null,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchViewController::HasNavBar()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.title($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.search));
		var doneButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		});
		this.addRightBarButtonItem(doneButton);
		var searchOptions = new $.ig.SPEvoSearchOptions();
		var searchPresenter = new $.ig.SPEvoSearchPresenterImpl(searchOptions);
		searchPresenter.delegate(this);
		this.__searchPresenter = searchPresenter;
		this.__searchPresenter.viewLoaded();
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.searchScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::Close()" />*/
	close: function () {
		if ($.ig.CPPopupManager.prototype.isPopupBeingShown()) {
			$.ig.CPPopupManager.prototype.closeTopMostPopup(true);
		} else if (this.navigationController().presentingViewController() != null) {
			this.navigationController().presentingViewController().dismissViewController(true, null);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::Close()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		if (this.__filtersView != null && this.__searchButton != null) {
			this.__searchButton.calculateSizeToFit();
			var top = 0;
			var searchButtonHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
			var searchButtonWidth = $.ig.truncate(Math.min(w - this._padding * 2, (searchButtonHeight * 5.75)));
			this.__filtersView.setInset(searchButtonHeight + this._padding);
			this.measureView(this.__filtersView, 0, top, w, h);
			this.measureView(this.__searchButton, $.ig.intDivide(w, 2) - $.ig.intDivide(searchButtonWidth, 2), h - searchButtonHeight - $.ig.intDivide(this._padding, 2), searchButtonWidth, searchButtonHeight);
		} else if (this.__emptyView != null) {
			this.measureView(this.__emptyView, 0, 0, w, h);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnSearchButtonPressed()" />*/
	onSearchButtonPressed: function () {
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		if (userFile.providers().length > 0) {
			this.__searchPresenter.onSearchButtonPressed();
			return;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnSearchButtonPressed()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnClearButtonPressed()" />*/
	onClearButtonPressed: function () {
		this.__filtersPresenter.clearFiltersSelection();
		this.onFilterSelectionChange();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnClearButtonPressed()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetSearchEnabled(System.Boolean)" />*/
	setSearchEnabled: function (enabled) {
		if (enabled) {
			this.__searchButton.enable();
			this.__searchButton.showCancelButton(true);
		} else {
			this.__searchButton.disable();
			this.__searchButton.hideCancelButton(true);
		}
		if (this.view().currentHeight() > 0) {
			this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetSearchEnabled(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowInitialState()" />*/
	showInitialState: function () {
		var $self = this;
		this.__searchButton = new $.ig.CPSplitButton("Search", "Clear", function () {
			$self.onSearchButtonPressed();
		}, function () {
			$self.onClearButtonPressed();
		}, $.ig.ThemeManager.prototype.currentTheme().confirmColor());
		this.__searchButton.hideCancelButton(false);
		this.__searchButton.disable();
		var filtersPresenter = new $.ig.SPEvoSearchFiltersPresenterImpl(new $.ig.SPEvoSearchFiltersManager(), new $.ig.SPEvoSearchOptions());
		filtersPresenter.loadFilters();
		this.__filtersView = new $.ig.SPEvoSearchFiltersView(filtersPresenter);
		filtersPresenter.delegate(this.__filtersView);
		this.__filtersPresenter = filtersPresenter;
		this.__filtersView.filtersViewDelegate(this);
		this.addSubview(this.__filtersView);
		this.addSubview(this.__searchButton);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowInitialState()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowEmptyViewState()" />*/
	showEmptyViewState: function () {
		this.__emptyView = new $.ig.SPEvoSearchEmptyView();
		this.addSubview(this.__emptyView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowEmptyViewState()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetFilterButtonVisible(System.Boolean)" />*/
	setFilterButtonVisible: function (visible) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetFilterButtonVisible(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowQuery(System.String)" />*/
	showQuery: function (query) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowQuery(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetViewTitle(System.String)" />*/
	setViewTitle: function (title) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::SetViewTitle(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::TriggerSearch()" />*/
	triggerSearch: function () {
		var vc = new $.ig.SPEvoSearchResultsViewController(this.__searchPresenter.searchOptions());
		this.navigationController().pushViewController(vc, true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::TriggerSearch()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowFilterTokens(Infragistics.CPList)" />*/
	showFilterTokens: function (tokens) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::ShowFilterTokens(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnFilterSelectionChange()" />*/
	onFilterSelectionChange: function () {
		this.__searchPresenter.setFilters(this.__filtersPresenter.filters());
		this.updateClearButton();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::OnFilterSelectionChange()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchViewController::UpdateClearButton()" />*/
	updateClearButton: function () {
		var hasFiltersSelected = this.__filtersPresenter.hasFiltersSelected();
		if (hasFiltersSelected) {
			this.__searchButton.enableCancel();
			this.__searchButton.showCancelButton(true);
		} else {
			this.__searchButton.hideCancelButton(true);
		}
		if (this.view().currentHeight() > 0) {
			this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchViewController::UpdateClearButton()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchViewController', $.ig.SPEvoBaseViewController.prototype.$type, [$.ig.SPEvoSearchFiltersViewDelegate.prototype.$type, $.ig.SPEvoSearchPresenterDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSearchViewController" />*/

/*<BeginType Name="Infragistics.SPEvoSearchEmptyView" />*/

$.ig.util.defType('SPEvoSearchEmptyView', 'CPViewBase', {
	init: function () {
		$.ig.CPViewBase.prototype.init.call(this);
	},
	__emptyTextLabel: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchEmptyView::Setup()" />*/
	setup: function () {
		$.ig.CPViewBase.prototype.setup.call(this);
		this.__emptyTextLabel = new $.ig.CPLabel();
		this.__emptyTextLabel.setTextAlignment($.ig.TextAlignment.prototype.left);
		this.__emptyTextLabel.clipToBounds(true);
		this.__emptyTextLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		this.__emptyTextLabel.setText("You currently have no file providers connected. Add them in your 'content' section to begin searching.");
		this.__emptyTextLabel.setFont(20, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.addSubview(this.__emptyTextLabel);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchEmptyView::Setup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchEmptyView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		this.__emptyTextLabel.calculateSizeToFit();
		var labelWidth = this.__emptyTextLabel.getCalculatedWidth();
		var labelHeight = this.__emptyTextLabel.getCalculatedHeight();
		this.measureView(this.__emptyTextLabel, $.ig.intDivide(w, 2) - $.ig.intDivide(labelWidth, 2), $.ig.intDivide(h, 2) - $.ig.intDivide(labelHeight, 2), labelWidth, labelHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchEmptyView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchEmptyView', $.ig.CPViewBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchEmptyView" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersTokensContainerView" />*/

$.ig.util.defType('SPEvoSearchFiltersTokensContainerView', 'CPScrollView', {
	__tokensViews: null,
	__childrenPanel: null,
	init: function () {
		$.ig.CPScrollView.prototype.init.call(this);
		this.alwaysBounceVertical(false);
		this.clipToBounds(true);
		this.__childrenPanel = new $.ig.CPViewBase();
		this.__tokensViews = new $.ig.Array();
		this.addSubview(this.__childrenPanel);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::Setup()" />*/
	setup: function () {
		$.ig.CPScrollView.prototype.setup.call(this);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::Setup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPScrollView.prototype.sizeChanged.call(this, w, h);
		var spacePerToken = $.ig.truncate((h * 0.1));
		var left = $.ig.truncate((h * 0.34));
		var th = $.ig.truncate((h * 0.44));
		var count = this.__tokensViews.length;
		for (var i = 0; i < count; i++) {
			var tokenView = this.__tokensViews[i];
			tokenView.calculateSizeToFit1(th);
			var tw = tokenView.getCalculatedWidth();
			this.__childrenPanel.measureView(tokenView, left, ($.ig.intDivide(h, 2) - $.ig.intDivide(th, 2)), tw, th);
			left += tw + spacePerToken;
		}
		this.setContentSize(Math.max(left, w), h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::SetFilters(Infragistics.CPList)" />*/
	setFilters: function (filterTokens) {
		var count = filterTokens.length;
		for (var i = 0; i < count; i++) {
			var tokenValue = filterTokens[i];
			var tokenView;
			if (tokenValue.filterType() == $.ig.SPEvoSearchFilterType.prototype.location) {
				tokenView = this.createLocationTokenView(tokenValue);
			} else {
				tokenView = this.createFilterTokenView(tokenValue);
			}
			this.__tokensViews.add(tokenView);
			this.__childrenPanel.addSubview(tokenView);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersTokensContainerView::SetFilters(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateFilterTokenView(Infragistics.SPEvoSearchFilterTokenValue)" />*/
	createFilterTokenView: function (tokenValue) {
		var filterType = tokenValue.filterType();
		var icon = this.getTokenIcon(filterType);
		var title = $.ig.ArrayUtility.prototype.join(tokenValue.filtersNames(), ", ");
		var tokenView = this.createTokenView();
		tokenView.setTitle(title);
		tokenView.addIcon(icon);
		return tokenView;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateFilterTokenView(Infragistics.SPEvoSearchFilterTokenValue)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateLocationTokenView(Infragistics.SPEvoSearchFilterLocationTokenValue)" />*/
	createLocationTokenView: function (tokenValue) {
		var providers = tokenValue.providers();
		var tokenView = this.createTokenView();
		var count = providers.length;
		for (var i = 0; i < count; i++) {
			var providerTypeName = providers[i];
			var providerType = $.ig.CloudProviderTypeUtility.prototype.convertStringToType(providerTypeName);
			var icon = $.ig.CloudFileUtility.prototype.resolveIconForProvider(providerType);
			tokenView.addIcon(icon);
		}
		return tokenView;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateLocationTokenView(Infragistics.SPEvoSearchFilterLocationTokenValue)" />*/
	,
	/*<BeginMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateTokenView()" />*/
	createTokenView: function () {
		var tokenView = new $.ig.SPEvoSearchFilterTokenView();
		tokenView.clipToBounds(true);
		tokenView.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		return tokenView;
	}
	/*<EndMethod Name="Infragistics.SPEvoSearchFilterTokenView Infragistics.SPEvoSearchFiltersTokensContainerView::CreateTokenView()" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIcon Infragistics.SPEvoSearchFiltersTokensContainerView::GetTokenIcon(Infragistics.SPEvoSearchFilterType)" />*/
	getTokenIcon: function (filterType) {
		switch (filterType) {
			case $.ig.SPEvoSearchFilterType.prototype.keywords: return $.ig.EMIcons.prototype.icons().getSearchIcon();
			case $.ig.SPEvoSearchFilterType.prototype.location: return $.ig.EMContentIcons.prototype.icons().getFileGenericIcon();
			case $.ig.SPEvoSearchFilterType.prototype.modificationDate: return $.ig.EMIcons.prototype.icons().getClockIcon();
			case $.ig.SPEvoSearchFilterType.prototype.modifiedBy: return $.ig.EMIcons.prototype.icons().getUserIcon();
			case $.ig.SPEvoSearchFilterType.prototype.resultType: return $.ig.EMContentIcons.prototype.icons().getFileGenericIcon();
		}
		return $.ig.EMContentIcons.prototype.icons().getFileGenericIcon();
	}
	/*<EndMethod Name="Infragistics.PathIcon Infragistics.SPEvoSearchFiltersTokensContainerView::GetTokenIcon(Infragistics.SPEvoSearchFilterType)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFiltersTokensContainerView', $.ig.CPScrollView.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersTokensContainerView" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersView" />*/

$.ig.util.defType('SPEvoSearchFiltersView', 'CPViewBase', {
	__gridView: null,
	init: function (presenter) {
		$.ig.CPViewBase.prototype.init.call(this);
		this.presenter(presenter);
		this.reloadFilters();
	},
	_presenter: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFiltersPresenter Infragistics.SPEvoSearchFiltersView::Presenter()" />*/
	presenter: function (value) {
		if (arguments.length === 1) {
			this._presenter = value;
			return value;
		} else {
			return this._presenter;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFiltersPresenter Infragistics.SPEvoSearchFiltersView::Presenter()" />*/
	,
	_filtersViewDelegate: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFiltersViewDelegate Infragistics.SPEvoSearchFiltersView::FiltersViewDelegate()" />*/
	filtersViewDelegate: function (value) {
		if (arguments.length === 1) {
			this._filtersViewDelegate = value;
			return value;
		} else {
			return this._filtersViewDelegate;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFiltersViewDelegate Infragistics.SPEvoSearchFiltersView::FiltersViewDelegate()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::AddFilterGroup(Infragistics.SPEvoSearchFilterGroup, System.String, System.String, Infragistics.CPList)" />*/
	addFilterGroup: function (filterGroup, filterGroupingLabel, filterGroupIndex, filters) {
		for (var i = 0; i < filterGroup.filterOptions().length; i++) {
			var data = new $.ig.SPEvoSearchFiltersData();
			data.groupingIndex(filterGroupIndex);
			data.groupingLabel(filterGroupingLabel);
			data.filterOption(filterGroup.filterOptions()[i]);
			filters.add(data);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::AddFilterGroup(Infragistics.SPEvoSearchFilterGroup, System.String, System.String, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::Setup()" />*/
	setup: function () {
		var $self = this;
		$.ig.CPViewBase.prototype.setup.call(this);
		var dsh = new $.ig.SPEvoFiltersDataSourceHelper(new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return new $.ig.CPGridViewCheckBoxCell(identifier);
		}));
		dsh._sectionKey = "GroupingIndex";
		dsh._sectionHeaderCellGenerator = function (grid, path) {
			return $self.createSectionCell(grid, path._sectionIndex);
		};
		this.__gridView = new $.ig.CPDynamicColumnGridView(1, dsh);
		this.addSubview(this.__gridView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::Setup()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchFiltersView::CreateSectionCell(Infragistics.CPGridView, System.Int32)" />*/
	createSectionCell: function (grid, section) {
		var cell = grid.dequeueReusableCellWithIdentifier("section");
		if (cell == null) {
			cell = new $.ig.CPGridViewExpandableCell("section");
			cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainBackgroundColor());
			var strongCell = cell;
		}
		var sectionData = this.__gridView.dataSourceHelper().resolveSectionData(section);
		if (sectionData.length > 0) {
			var data = sectionData[0];
			cell.data(data.filterOption().group());
			var headerText = data.groupingLabel();
			var subTitle = "";
			if (data.filterOption().group().disabledByProviders() != null && data.filterOption().group().disabledByProviders().length > 0) {
				subTitle = "( " + $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.filterNotSupportedBy) + headerText + " )";
			}
			cell.subTextLabel().setText(subTitle);
			cell.textLabel().setText(headerText);
			cell.isExpanded(!this.__gridView.dataSourceHelper().isSectionCollapsed(section));
		} else {
			cell.data(null);
			cell.isExpanded(true);
			cell.textLabel().setText("");
		}
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchFiltersView::CreateSectionCell(Infragistics.CPGridView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::ReloadFilters()" />*/
	reloadFilters: function () {
		var list = new $.ig.Array();
		var filters = this.presenter().filters();
		for (var i = 0; i < filters.length; i++) {
			var group = filters[i];
			this.addFilterGroup(group, group.title(), "" + i.toString(), list);
		}
		this.__gridView.setData(list);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::ReloadFilters()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__gridView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var $self = this;
		var data = cell.data();
		if (data.filterOption().group().type() == $.ig.SPEvoSearchFilterType.prototype.modifiedBy) {
			var current = cell;
			var copiedCell = new $.ig.CPGridViewTextBoxCell("x");
			copiedCell.data(data);
			copiedCell.textView().setText(data.filterOption().modifiedByValue());
			this.setupIconCell(copiedCell);
			$.ig.CPPopupManager.prototype.showTextBoxPopup(cell, copiedCell, true, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.author), function (o) {
				data.filterOption().modifiedByValue(o);
				data.filterOption().isSelected((data.filterOption().modifiedByValue() != null && data.filterOption().modifiedByValue().length > 0));
			}, function () {
				$self.notifyOptionChange(data.filterOption());
				$self.__gridView.refreshGrid();
			});
		} else if (data.filterOption().group().type() == $.ig.SPEvoSearchFilterType.prototype.keywords) {
			var current1 = cell;
			var copiedCell1 = new $.ig.CPGridViewTextBoxCell("x");
			copiedCell1.data(data);
			copiedCell1.textView().setText(data.filterOption().keywords());
			this.setupIconCell(copiedCell1);
			$.ig.CPPopupManager.prototype.showTextBoxPopup(cell, copiedCell1, true, "Keywords", function (o) {
				data.filterOption().keywords(o);
				data.filterOption().isSelected((data.filterOption().keywords() != null && data.filterOption().keywords().length > 0));
			}, function () {
				$self.notifyOptionChange(data.filterOption());
				$self.__gridView.refreshGrid();
			});
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return new $.ig.Array();
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchFiltersView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetupIconCell(Infragistics.CPGridViewIconCell)" />*/
	setupIconCell: function (cell) {
		var data = cell.data();
		cell.textLabel().setText(data.filterOption().title());
		cell.setIcon(data.filterOption().icon());
		cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		cell._iconSizeBasedOnTextSize = false;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetupIconCell(Infragistics.CPGridViewIconCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var data = cell.data();
		var cbCell = cell;
		cbCell.checkedStateDelegate(this);
		this.setupIconCell(cbCell);
		if (data.filterOption().group().type() == $.ig.SPEvoSearchFilterType.prototype.modifiedBy) {
			cbCell.editMode($.ig.CPGridViewCheckBoxEditMode.prototype.readOnly);
			if (data.filterOption().modifiedByValue() != null && data.filterOption().modifiedByValue().length > 0) {
				cbCell.textLabel().setText(data.filterOption().modifiedByValue());
			}
		} else if (data.filterOption().group().type() == $.ig.SPEvoSearchFilterType.prototype.keywords) {
			cbCell.editMode($.ig.CPGridViewCheckBoxEditMode.prototype.readOnly);
			if (data.filterOption().keywords() != null && data.filterOption().keywords().length > 0) {
				cbCell.textLabel().setText(data.filterOption().keywords());
			}
		} else {
			cbCell.editMode($.ig.CPGridViewCheckBoxEditMode.prototype.entireCellIsHitArea);
		}
		if (data.filterOption().isEnabled()) {
			cell.enable();
		} else {
			cell.disable();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	cellCheckedStateChanged: function (cell, isChecked) {
		var data = cell.data();
		if (data.filterOption().isEnabled()) {
			data.filterOption().isSelected(isChecked == $.ig.CPCheckedState.prototype.checked);
			if (isChecked == $.ig.CPCheckedState.prototype.checked && data.filterOption().group().type() == $.ig.SPEvoSearchFilterType.prototype.modificationDate) {
				var items = data.filterOption().group().filterOptions();
				var count = items.length;
				for (var i = 0; i < count; i++) {
					var item = items[i];
					if (item.modificationDate() != data.filterOption().modificationDate()) {
						item.isSelected(false);
					}
				}
			}
			this.notifyOptionChange((cell.data()).filterOption());
			this.__gridView.refreshGrid();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetInset(System.Int32)" />*/
	setInset: function (val) {
		this.__gridView._bottomInset = val;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetInset(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPCheckedState Infragistics.SPEvoSearchFiltersView::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	isCellChecked: function (cell) {
		var sectionData = this.__gridView.dataSourceHelper().resolveSectionData(cell._path._sectionIndex);
		var count = sectionData.length;
		var option = (cell.data()).filterOption();
		var isSelected = option.isSelected();
		if (isSelected) {
			return $.ig.CPCheckedState.prototype.checked;
		} else if (option.group().selectedOptions().length > 0) {
			return $.ig.CPCheckedState.prototype.notChecked;
		} else {
			return $.ig.CPCheckedState.prototype.notSet;
		}
	}
	/*<EndMethod Name="Infragistics.CPCheckedState Infragistics.SPEvoSearchFiltersView::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::notifyOptionChange(Infragistics.SPEvoSearchFilterOption)" />*/
	notifyOptionChange: function (option) {
		this.presenter().onOptionSelectionChange(option);
		this.filtersViewDelegate().onFilterSelectionChange();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::notifyOptionChange(Infragistics.SPEvoSearchFilterOption)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetApplyButtonEnabled(System.Boolean)" />*/
	setApplyButtonEnabled: function (enabled) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::SetApplyButtonEnabled(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::UpdateSearchFilters()" />*/
	updateSearchFilters: function () {
		this.__gridView.dataSourceHelper().invalidateData();
		this.__gridView.refreshGrid();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::UpdateSearchFilters()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::RefreshView()" />*/
	refreshView: function () {
		this.__gridView.refreshGrid();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFiltersView::RefreshView()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersView::Infragistics.SPEvoSearchFiltersDelegate.IsViewEmbedded()" />*/
	isViewEmbedded: function () {
		return this.isViewBeingPresented_1();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersView::Infragistics.SPEvoSearchFiltersDelegate.IsViewEmbedded()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersView::Infragistics.SPEvoSearchFiltersDelegate.IsViewBeingPresented()" />*/
	isViewBeingPresented: function () {
		return this.isViewEmbedded_1();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoSearchFiltersView::Infragistics.SPEvoSearchFiltersDelegate.IsViewBeingPresented()" />*/
	,
	_isViewEmbedded: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchFiltersView::IsViewEmbedded()" />*/
	isViewEmbedded_1: function (value) {
		if (arguments.length === 1) {
			this._isViewEmbedded = value;
			return value;
		} else {
			return this._isViewEmbedded;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchFiltersView::IsViewEmbedded()" />*/
	,
	_isViewBeingPresented: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSearchFiltersView::IsViewBeingPresented()" />*/
	isViewBeingPresented_1: function (value) {
		if (arguments.length === 1) {
			this._isViewBeingPresented = value;
			return value;
		} else {
			return this._isViewBeingPresented;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSearchFiltersView::IsViewBeingPresented()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFiltersView', $.ig.CPViewBase.prototype.$type, [$.ig.SPEvoSearchFiltersDelegate.prototype.$type, $.ig.CPGridViewCellSetupDelegate.prototype.$type, $.ig.CPCheckedStateDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersView" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFiltersData" />*/

$.ig.util.defType('SPEvoSearchFiltersData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_filterOption: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchFilterOption Infragistics.SPEvoSearchFiltersData::FilterOption()" />*/
	filterOption: function (value) {
		if (arguments.length === 1) {
			this._filterOption = value;
			return value;
		} else {
			return this._filterOption;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchFilterOption Infragistics.SPEvoSearchFiltersData::FilterOption()" />*/
	,
	_groupingLabel: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFiltersData::GroupingLabel()" />*/
	groupingLabel: function (value) {
		if (arguments.length === 1) {
			this._groupingLabel = value;
			return value;
		} else {
			return this._groupingLabel;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFiltersData::GroupingLabel()" />*/
	,
	_groupingIndex: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSearchFiltersData::GroupingIndex()" />*/
	groupingIndex: function (value) {
		if (arguments.length === 1) {
			this._groupingIndex = value;
			return value;
		} else {
			return this._groupingIndex;
		}
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSearchFiltersData::GroupingIndex()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFiltersData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFiltersData" />*/

/*<BeginType Name="Infragistics.SPEvoFiltersDataSourceHelper" />*/

$.ig.util.defType('SPEvoFiltersDataSourceHelper', 'CPGridViewSingleFieldDynamicColumnDataSourceHelper', {
	init: function (columnDefinition) {
		$.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.init.call(this, 0, columnDefinition);
		this.supportsStretchRows(true);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoFiltersDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	isStretchRow: function (row, section) {
		return row == 0 && section == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoFiltersDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoFiltersDataSourceHelper', $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoFiltersDataSourceHelper" />*/

/*<BeginType Name="Infragistics.SPEvoSearchFilterTokenView" />*/

$.ig.util.defType('SPEvoSearchFilterTokenView', 'CPView', {
	__icons: null,
	__title: null,
	__calcH: 0,
	__calcW: 0,
	init: function () {
		$.ig.CPView.prototype.init.call(this);
		this.__icons = new $.ig.Array();
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::Setup()" />*/
	setup: function () {
		$.ig.CPView.prototype.setup.call(this);
		this.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative($.ig.ColorUtility.prototype.createColor(255, 238, 238, 238)));
		this.__title = new $.ig.CPLabel();
		this.__title.setTextAlignment($.ig.TextAlignment.prototype.center);
		this.__title.setFont($.ig.ThemeManager.prototype.currentTheme().resolveCellFontSize(), $.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.__title.setTextColor($.ig.ColorUtility.prototype.convertToNative($.ig.ThemeManager.prototype.currentTheme().secondaryTitleColor()));
		this.addSubview(this.__title);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::Setup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPView.prototype.sizeChanged.call(this, w, h);
		var iconSize = $.ig.truncate((h * 0.8));
		this.__title.calculateSizeToFit();
		var labelHeight = this.__title.getCalculatedHeight();
		var labelWidth = this.__title.getCalculatedWidth();
		var padding = $.ig.truncate((h * 0.2));
		var count = this.__icons.length;
		for (var i = 0; i < count; i++) {
			var iconView = this.__icons[i];
			this.measureView(iconView, i * (iconSize + padding) + padding, $.ig.intDivide(h, 2) - $.ig.intDivide(iconSize, 2), iconSize, iconSize);
		}
		this.measureView(this.__title, count * (iconSize + padding) + padding, $.ig.intDivide(h, 2) - $.ig.intDivide(labelHeight, 2), labelWidth, labelHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::CalculateSizeToFit(System.Int32)" />*/
	calculateSizeToFit1: function (h) {
		$.ig.CPView.prototype.calculateSizeToFit.call(this);
		var iconSize = $.ig.truncate((h * 0.8));
		var padding = $.ig.truncate((h * 0.2));
		var lw = 0;
		if (this.__title != null) {
			this.__title.calculateSizeToFit();
			lw = this.__title.getCalculatedWidth() + padding;
		}
		this.__calcW = this.__icons.length * (padding + iconSize) + padding + lw;
		this.__calcH = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::CalculateSizeToFit(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoSearchFilterTokenView::GetCalculatedHeight()" />*/
	getCalculatedHeight: function () {
		return this.__calcH;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoSearchFilterTokenView::GetCalculatedHeight()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoSearchFilterTokenView::GetCalculatedWidth()" />*/
	getCalculatedWidth: function () {
		return this.__calcW;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoSearchFilterTokenView::GetCalculatedWidth()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::SetTitle(System.String)" />*/
	setTitle: function (title) {
		this.__title.setText(title);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::SetTitle(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::AddIcon(Infragistics.PathIcon)" />*/
	addIcon: function (icon) {
		var iconView = new $.ig.PathIconView();
		iconView.setIcon(icon);
		iconView._outlineOnly = false;
		this.__icons.add(iconView);
		this.addSubview(iconView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchFilterTokenView::AddIcon(Infragistics.PathIcon)" />*/
	,
	$type: new $.ig.Type('SPEvoSearchFilterTokenView', $.ig.CPView.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSearchFilterTokenView" />*/

/*<BeginType Name="Infragistics.SPEvoSearchResultsView" />*/

$.ig.util.defType('SPEvoSearchResultsView', 'CPViewBase', {
	__gridView: null,
	__filterTokensContainer: null,
	_presenter: null,
	/*<BeginProperty Name="Infragistics.SPEvoSearchResultsPresenter Infragistics.SPEvoSearchResultsView::Presenter()" />*/
	presenter: function (value) {
		if (arguments.length === 1) {
			this._presenter = value;
			return value;
		} else {
			return this._presenter;
		}
	}
	/*<EndProperty Name="Infragistics.SPEvoSearchResultsPresenter Infragistics.SPEvoSearchResultsView::Presenter()" />*/
	,
	init: function (presenter) {
		$.ig.CPViewBase.prototype.init.call(this);
		this.presenter(presenter);
		this.loadSubviews();
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		var dsh = new $.ig.SPEvoSearchResultsDataSourceHelper(new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return new $.ig.CPGridViewIconCell(identifier);
		}));
		dsh.errorCellDelegate(this);
		dsh._sectionKey = "ProviderId";
		dsh.alwaysDisplaySectionHeaders(true);
		dsh._sectionHeaderCellGenerator = function (grid, path) {
			return $self.createSectionHeaderCell(grid, path._sectionIndex);
		};
		dsh.registerActionForFetchNextPage(function (section) {
			$self.presenter().fetchNextPageForSection(section);
		});
		this.__gridView = new $.ig.CPDynamicColumnGridView(1, dsh);
		this.addSubview(this.__gridView);
		this.__filterTokensContainer = new $.ig.SPEvoSearchFiltersTokensContainerView();
		this.addSubview(this.__filterTokensContainer);
		this.loadFilterTokens();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchResultsView::CreateSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	createSectionHeaderCell: function (grid, section) {
		var cell = grid.dequeueReusableCellWithIdentifier("section");
		if (cell == null) {
			cell = new $.ig.CPGridViewExpandableCell("section");
			cell._iconSizeBasedOnTextSize = false;
			cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainBackgroundColor());
			cell.textLabel().setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeMainTitleColor());
		}
		var sectionInfo = this.__gridView.dataSourceHelper().data()[section];
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		var provider = userFile.resolveProviderForID(sectionInfo.providerId());
		var icon = $.ig.CloudFileUtility.prototype.resolveIconForProvider(provider.provider());
		cell.setIcon(icon);
		cell.textLabel().setText(provider.title());
		cell.isExpanded(!this.__gridView.dataSourceHelper().isSectionCollapsed(section));
		cell.data(sectionInfo);
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSearchResultsView::CreateSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		var filterTokenH = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		this.measureView(this.__filterTokensContainer, 0, 0, w, filterTokenH);
		this.measureView(this.__gridView, 0, filterTokenH, w, h - filterTokenH);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::UpdateWithSearchResults(Infragistics.CPList)" />*/
	updateWithSearchResults: function (searchResults) {
		this.__gridView.setData(searchResults);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::UpdateWithSearchResults(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		var gCloudFile = cell.data();
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getContentIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.pinToBoard), cell.data(), function (o) {
			var files = new $.ig.Array();
			files.add(cell.data());
			$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySearch, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinStarted, "");
			$.ig.CloudFileNavigationViewController.prototype.pinFiles(files, cell, function () {
				$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySearch, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinCompleted, "");
			}, $.ig.CPPopupPosition.prototype.left);
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSearchResultsView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var gCloudFile = cell.data();
		$.ig.CloudFileNavigationViewController.prototype.openFile(cell, gCloudFile, null);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySearch, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionOpenFile, "");
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var gCloudFile = cell.data();
		$.ig.CloudFileUtility.prototype.setupCloudFileCell(gCloudFile, cell);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::SearchResultsCellRetryButtonClicked(Infragistics.SPEvoSearchResultsErrorCell)" />*/
	searchResultsCellRetryButtonClicked: function (cell) {
		this.presenter().retrySearchWithSectionInfo(cell.sectionInfo());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::SearchResultsCellRetryButtonClicked(Infragistics.SPEvoSearchResultsErrorCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSearchResultsView::LoadFilterTokens()" />*/
	loadFilterTokens: function () {
		var tokensValues = this.presenter().createFiltersTokensValues();
		this.__filterTokensContainer.setFilters(tokensValues);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSearchResultsView::LoadFilterTokens()" />*/
	,
	$type: new $.ig.Type('SPEvoSearchResultsView', $.ig.CPViewBase.prototype.$type, [$.ig.SPEvoSearchResultsPresenterDelegate.prototype.$type, $.ig.CPGridViewCellSetupDelegate.prototype.$type, $.ig.SPEvoSearchResultsErrorCellDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSearchResultsView" />*/

/*<BeginType Name="Infragistics.SPEvoProviderPopupItem" />*/

$.ig.util.defType('SPEvoProviderPopupItem', 'CPPopupListItem', {
	_subTitle: null,
	init: function (provider, selected, action) {
		$.ig.CPPopupListItem.prototype.init2.call(this, 2, $.ig.CloudFileUtility.prototype.resolveIconForProvider(provider.provider()), 0, provider.title(), selected, provider, action);
		this._subTitle = provider.subTitle();
		this._textAlignment = $.ig.TextAlignment.prototype.left;
	},
	/*<BeginMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.SPEvoProviderPopupItem::CreateNewCell(System.String)" />*/
	createNewCell: function (identifier) {
		return new $.ig.SPEvoProviderPopupCell(identifier);
	}
	/*<EndMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.SPEvoProviderPopupItem::CreateNewCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoProviderPopupItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	calculateSizeToFit: function (measureLabel) {
		var fontSize = $.ig.ThemeManager.prototype.currentTheme().resolveCellFontSize();
		measureLabel.setFont(fontSize, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		measureLabel.setText(this._name);
		measureLabel.calculateSizeToFit();
		var lw1 = measureLabel.getCalculatedWidth();
		measureLabel.setFont($.ig.ThemeManager.prototype.currentTheme().calculateSubLabelFontSize(fontSize), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		measureLabel.setText(this._subTitle);
		measureLabel.calculateSizeToFit();
		var lw2 = measureLabel.getCalculatedWidth();
		this._calculatedHeight = $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
		this._calculatedWidth = (Math.max(lw1, lw2) + this._calculatedHeight * 2);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoProviderPopupItem::CalculateSizeToFit(Infragistics.CPLabel)" />*/
	,
	$type: new $.ig.Type('SPEvoProviderPopupItem', $.ig.CPPopupListItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoProviderPopupItem" />*/

/*<BeginType Name="Infragistics.SPEvoProviderPopupCell" />*/

$.ig.util.defType('SPEvoProviderPopupCell', 'CPPopupListViewCell', {
	__selectedIcon: null,
	init: function (identifier) {
		$.ig.CPPopupListViewCell.prototype.init.call(this, identifier);
		this.__selectedIcon = new $.ig.PathIconView();
		this.__selectedIcon._outlineOnly = false;
		this.__selectedIcon.iconColor($.ig.ColorUtility.prototype.createNativeColor(255, 77, 216, 101));
		this.__selectedIcon.setIcon($.ig.UIPathIcons.prototype.icons().getCheckedIcon());
		this.addSubview(this.__selectedIcon);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoProviderPopupCell::HasRightContent()" />*/
	hasRightContent: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoProviderPopupCell::HasRightContent()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoProviderPopupCell::SupportsSelectedView()" />*/
	supportsSelectedView: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoProviderPopupCell::SupportsSelectedView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoProviderPopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	processItem: function (item) {
		$.ig.CPPopupListViewCell.prototype.processItem.call(this, item);
		var listItem = item;
		this.subTextLabel().setText(listItem._subTitle);
		this.subTextLabel().setTextAlignment(listItem._textAlignment);
		this.__selectedIcon.isHidden(!item._isSelected);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoProviderPopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoProviderPopupCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	layoutRightContentArea: function (x, y, itemSize) {
		this.measureView(this.__selectedIcon, x, y, itemSize, itemSize);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoProviderPopupCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoProviderPopupCell', $.ig.CPPopupListViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoProviderPopupCell" />*/

/*<BeginType Name="Infragistics.SPEvoGoogleAnalyticsContants" />*/

$.ig.util.defType('SPEvoGoogleAnalyticsContants', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('SPEvoGoogleAnalyticsContants', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoGoogleAnalyticsContants" />*/

/*<BeginType Name="Infragistics.SPEvoLocalizationKeys" />*/

$.ig.util.defType('SPEvoLocalizationKeys', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('SPEvoLocalizationKeys', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoLocalizationKeys" />*/

/*<BeginType Name="Infragistics.SPEvoSelectorViewController" />*/

$.ig.util.defType('SPEvoSelectorViewController', 'SPEvoBaseViewController', {
	init: function () {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
	},
	__gridView: null,
	__dsh: null,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSelectorViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSelectorViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoSelectorViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoSelectorViewController::HasNavBar()" />*/
	,
	/*<BeginProperty Name="Infragistics.CPGridView Infragistics.SPEvoSelectorViewController::Grid()" />*/
	grid: function () {
		return this.__gridView;
	}
	/*<EndProperty Name="Infragistics.CPGridView Infragistics.SPEvoSelectorViewController::Grid()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.__gridView = new $.ig.CPGridView();
		this.__gridView._headerHeight = 0;
		this.__gridView._rowSeparatorHeight = 0;
		this.addSubview(this.__gridView);
		this.title(this.selectorTitle());
		this.__dsh = this.createDSH();
		this.__gridView.setDataSource(this.__dsh);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoSelectorViewController::CreateDSH()" />*/
	createDSH: function () {
		var $self = this;
		return new $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper(0, new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return $self.createCell(identifier);
		}));
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoSelectorViewController::CreateDSH()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::SetupNavBarButtons()" />*/
	setupNavBarButtons: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.setupNavBarButtons.call(this);
		this.addRightBarButtonItem($.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		}));
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::SetupNavBarButtons()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSelectorViewController::SelectorTitle()" />*/
	selectorTitle: function () {
		return "";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSelectorViewController::SelectorTitle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::SetData(Infragistics.CPList)" />*/
	setData: function (data) {
		this.__dsh.data(data);
		this.__gridView.updateData(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::SetData(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSelectorViewController::CreateCell(System.String)" />*/
	createCell: function (identifier) {
		var cell = new $.ig.CPGridViewIconCell(identifier);
		cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoSelectorViewController::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.measureView(this.__gridView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoSelectorViewController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoSelectorViewController::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('SPEvoSelectorViewController', $.ig.SPEvoBaseViewController.prototype.$type, [$.ig.CPGridViewCellSetupDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoSelectorViewController" />*/

/*<BeginType Name="Infragistics.SPEvoAddSectionCellAnimator" />*/

$.ig.util.defType('SPEvoAddSectionCellAnimator', 'CPGridViewCellAnimator', {
	__hasAddButton: false,
	init: function (hasAddButton) {
		$.ig.CPGridViewCellAnimator.prototype.init.call(this);
		this.__hasAddButton = hasAddButton;
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::MeasureNewCellToLocation(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	measureNewCellToLocation: function (engine, cell) {
		var lastCol = cell._gridView.getDataSource().getNumberOfColumnsInGrid() - 1;
		var addCell = this.__hasAddButton ? cell._gridView.cellAtPath(new $.ig.CPCellPath(1, 0, 0, lastCol)) : null;
		var x = addCell == null ? cell._gridView.currentWidth() + cell._gridView.getContentOffsetX() : addCell._frameX + $.ig.intDivide(addCell._frameW, 2) + this._differenceInHorizontalScrollPosition * -1;
		engine.measureCell(cell, x, cell._frameY + $.ig.intDivide(cell._frameH, 2), 1, 1);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::MeasureNewCellToLocation(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::AddCellBeingRemoved(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	addCellBeingRemoved: function (engine, cell) {
		$.ig.CPGridViewCellAnimator.prototype.addCellBeingRemoved.call(this, engine, cell);
		if (this._differenceInHorizontalScrollPosition != 0) {
			engine.measureCell(cell, cell._frameX + this._differenceInHorizontalScrollPosition * -1, cell._frameY, cell._frameW, cell._frameH);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::AddCellBeingRemoved(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::AdjustExistingCellBeingLayedOut(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	adjustExistingCellBeingLayedOut: function (engine, cell, prevX, prevY, prevW, prevH) {
		if (this._differenceInHorizontalScrollPosition != 0) {
			engine.measureCell(cell, prevX + this._differenceInHorizontalScrollPosition * -1, prevY, prevW, prevH);
		} else {
			$.ig.CPGridViewCellAnimator.prototype.adjustExistingCellBeingLayedOut.call(this, engine, cell, prevX, prevY, prevW, prevH);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddSectionCellAnimator::AdjustExistingCellBeingLayedOut(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoAddSectionCellAnimator::AdjustHorizontalScrollPosition(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridView, System.Int32)" />*/
	adjustHorizontalScrollPosition: function (engine, grid, prevContentOffsetX) {
		var contentOffset = prevContentOffsetX;
		contentOffset = grid._actualContentWidth - grid.currentWidth() + grid.rightInset();
		grid.scrollTo(contentOffset, grid.getContentOffsetY());
		return contentOffset;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoAddSectionCellAnimator::AdjustHorizontalScrollPosition(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridView, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoAddSectionCellAnimator', $.ig.CPGridViewCellAnimator.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoAddSectionCellAnimator" />*/

/*<BeginType Name="Infragistics.SPEvoRemoveSectionCellAnimator" />*/

$.ig.util.defType('SPEvoRemoveSectionCellAnimator', 'CPGridViewCellAnimator', {
	init: function () {
		$.ig.CPGridViewCellAnimator.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoRemoveSectionCellAnimator::AddCellBeingRemoved(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	addCellBeingRemoved: function (engine, cell) {
		$.ig.CPGridViewCellAnimator.prototype.addCellBeingRemoved.call(this, engine, cell);
		engine.measureCell(cell, cell._frameX + this._differenceInHorizontalScrollPosition * -1, cell._frameY, cell._frameW, cell._frameH);
		cell.storeFrame(cell._frameX + this._differenceInHorizontalScrollPosition * -1, cell._gridView.getContentOffsetY() + cell._gridView.getContentHeight(), cell._frameW, cell._frameH);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoRemoveSectionCellAnimator::AddCellBeingRemoved(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoRemoveSectionCellAnimator::AdjustExistingCellBeingLayedOut(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	adjustExistingCellBeingLayedOut: function (engine, cell, prevX, prevY, prevW, prevH) {
		engine.measureCell(cell, prevX + this._differenceInHorizontalScrollPosition * -1, prevY, prevW, prevH);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoRemoveSectionCellAnimator::AdjustExistingCellBeingLayedOut(Infragistics.CPGridViewLayoutEngine, Infragistics.CPGridViewCellBase, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoRemoveSectionCellAnimator', $.ig.CPGridViewCellAnimator.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoRemoveSectionCellAnimator" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionWidgetHeaderCellBase" />*/

$.ig.util.defType('SPEvoBoardSectionWidgetHeaderCellBase', 'CPGridViewExpandableCell', {
	init: function (identifier) {
		$.ig.CPGridViewExpandableCell.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewExpandableCell.prototype.dataSet.call(this);
		var widget = this.data();
		this.textLabel().setText(widget.title());
		this.setIcon(widget.icon());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::DataSet()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::RenameWidget()" />*/
	renameWidget: function () {
		var $self = this;
		var widget = this.data();
		var title = widget.title();
		if (title == null) {
			title = "";
		}
		$.ig.CPPopupManager.prototype.showTextBoxPopup1(this, widget.icon(), title, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.renameWidget), function (o) {
			$self.titleChanged(o);
		}, function () {
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::RenameWidget()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::TitleChanged(System.String)" />*/
	titleChanged: function (newTitle) {
		var widget = this.data();
		if (widget.title() == null || !widget.title().equals(newTitle)) {
			widget.title(newTitle);
			this.textLabel().setText(newTitle);
			var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.widgetTitleChangedNotificationMessage);
			this.updateBoard(message);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::TitleChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::AskToRemoveWidget()" />*/
	askToRemoveWidget: function () {
		var $self = this;
		var widget = this.data();
		var title = widget.title() == null ? "" : widget.title();
		$.ig.CPPopupManager.prototype.ask(this, "Delete " + title, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.areYouSure), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.del), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cancel), $.ig.ThemeManager.prototype.currentTheme().nativeErrorColor(), widget, function (obj) {
			$self.deleteWidget();
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::AskToRemoveWidget()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::DeleteWidget()" />*/
	deleteWidget: function () {
		var widget = this.data();
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryWidgets, $.ig.EMGoogleAnalyticsConstants.prototype.actionDelete, "Type : " + widget.type());
		widget.section().removeWidet(widget);
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.widgetDeletedNotificationMessage);
		this.updateBoard(message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::DeleteWidget()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::UpdateBoard(System.String)" />*/
	updateBoard: function (message) {
		var widget = this.data();
		if (widget.section() != null) {
			$.ig.EMBoardManager.prototype.updateBoardById(widget.section().boardId(), message);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::UpdateBoard(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getEditIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.renameWidget), null, function (o) {
			$self.renameWidget();
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getTrashIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.deleteWidget), null, function (o) {
			$self.askToRemoveWidget();
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionWidgetHeaderCellBase::ResolvePopupItems()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionWidgetHeaderCellBase', $.ig.CPGridViewExpandableCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionWidgetHeaderCellBase" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionContentWidgetHeaderCell" />*/

$.ig.util.defType('SPEvoBoardSectionContentWidgetHeaderCell', 'SPEvoBoardSectionWidgetHeaderCellBase', {
	init: function (identifier) {
		$.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionContentWidgetHeaderCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		var widget = this.data();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getLinkIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addLink), null, function (o) {
			$self.showAddLink(widget);
			return true;
		}));
		$.ig.ArrayUtility.prototype.addToCPReadOnlyList(items, $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.resolvePopupItems.call(this));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionContentWidgetHeaderCell::ResolvePopupItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionContentWidgetHeaderCell::ShowAddLink(Infragistics.EMBoardContentWidget)" />*/
	showAddLink: function (widget) {
		$.ig.CPPopupManager.prototype.showModalDialog(this, new $.ig.SPEvoAddContentLinkViewController(widget), true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionContentWidgetHeaderCell::ShowAddLink(Infragistics.EMBoardContentWidget)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionContentWidgetHeaderCell', $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionContentWidgetHeaderCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionEmptyWidgetCell" />*/

$.ig.util.defType('SPEvoBoardSectionEmptyWidgetCell', 'CPGridViewCellBase', {
	__emptyView: null,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewCellBase.prototype.init.call(this, identifier);
		this.__emptyView = new $.ig.EMEmptyStateView(function () {
			$self.clicked();
		}, null, null, null);
		this.addSubview(this.__emptyView);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::Clicked()" />*/
	clicked: function () {
		var cell = this._gridView.cellAtPath(new $.ig.CPCellPath(1, $.ig.CPGridView.prototype.cPGRIDVIEWCELL_SECTION_HEADER_ROW_INDEX(), this._path._sectionIndex, 0));
		cell.showPopup(cell.overFlowButton());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::Clicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::SetEmptyState(Infragistics.PathIcon, System.String, System.String)" />*/
	setEmptyState: function (icon, main, sub) {
		this.__emptyView.updateEmptyState(icon, main, sub);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::SetEmptyState(Infragistics.PathIcon, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		this.measureView(this.__emptyView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionEmptyWidgetCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardSectionEmptyWidgetCell::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardSectionEmptyWidgetCell::HandlesUIInteraction()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionEmptyWidgetCell', $.ig.CPGridViewCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionEmptyWidgetCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionGoalsWidgetHeaderCell" />*/

$.ig.util.defType('SPEvoBoardSectionGoalsWidgetHeaderCell', 'SPEvoBoardSectionWidgetHeaderCellBase', {
	init: function (identifier) {
		$.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionGoalsWidgetHeaderCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getPlusIcon(), "Create New Goal (soon)", null, function (o) {
			$.ig.CPPopupManager.prototype.alert($self, "hey! not that soon...", "We're excited about goals too!", "ok", null, null);
			return true;
		}));
		$.ig.ArrayUtility.prototype.addToCPReadOnlyList(items, $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.resolvePopupItems.call(this));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionGoalsWidgetHeaderCell::ResolvePopupItems()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionGoalsWidgetHeaderCell', $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionGoalsWidgetHeaderCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionNotesWidgetHeaderCell" />*/

$.ig.util.defType('SPEvoBoardSectionNotesWidgetHeaderCell', 'SPEvoBoardSectionWidgetHeaderCellBase', {
	init: function (identifier) {
		$.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionNotesWidgetHeaderCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getPlusIcon(), "Create New Note (soon)", null, function (o) {
			$.ig.CPPopupManager.prototype.alert($self, "hey! not that soon...", "We're excited about notes too!", "ok", null, null);
			return true;
		}));
		$.ig.ArrayUtility.prototype.addToCPReadOnlyList(items, $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.resolvePopupItems.call(this));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionNotesWidgetHeaderCell::ResolvePopupItems()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionNotesWidgetHeaderCell', $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionNotesWidgetHeaderCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionTasksWidgetHeaderCell" />*/

$.ig.util.defType('SPEvoBoardSectionTasksWidgetHeaderCell', 'SPEvoBoardSectionWidgetHeaderCellBase', {
	init: function (identifier) {
		$.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionTasksWidgetHeaderCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var items = new $.ig.Array();
		$.ig.ArrayUtility.prototype.addToCPReadOnlyList(items, $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.resolvePopupItems.call(this));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionTasksWidgetHeaderCell::ResolvePopupItems()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionTasksWidgetHeaderCell', $.ig.SPEvoBoardSectionWidgetHeaderCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionTasksWidgetHeaderCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionView" />*/

$.ig.util.defType('SPEvoBoardSectionView', 'CPGridViewCellBase', {
	__gridView: null,
	__header: null,
	__headerSeparator: null,
	__contentView: null,
	__emptyState: null,
	__uid: null,
	__taskWidgetIds: null,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewCellBase.prototype.init.call(this, identifier);
		this.__uid = $.ig.NativeStringUtility.prototype.generateUID();
		this.__taskWidgetIds = new $.ig.Array();
		this.highlightMode($.ig.CPInteractionViewMode.prototype.none);
		$.ig.ThemeManager.prototype.currentTheme().applyButtonShadowToView(this);
		this.__contentView = new $.ig.CPView();
		this.__contentView.clipToBounds(true);
		this.addSubview(this.__contentView);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainBackgroundColor());
		this.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		this.__contentView.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainBackgroundColor());
		this.__contentView.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		if (identifier != null) {
			this.__header = new $.ig.CPGridViewIconCell("");
			this.__header.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
			this.__header.setCursor($.ig.CPCursors.prototype.text);
			this.__header.addClickHandler(function (x, y) {
				$self.headerClicked();
			});
			this.__header.highlightMode($.ig.CPInteractionViewMode.prototype.none);
			this.__header.setOverflowVisiblity(true);
			this.__header._minFontSize = this.__header._maxFontSize = $.ig.ThemeManager.prototype.currentTheme().maxCellFontSize() + 2;
			this.__header.font($.ig.ThemeManager.prototype.currentTheme().boldFont());
			this.__header._overflowClickedAction = function (o) {
				$self.headerOverFlowClicked();
			};
			this.__contentView.addSubview(this.__header);
			this.__headerSeparator = new $.ig.CPViewBase();
			this.__headerSeparator.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainOutlineColor());
			this.__contentView.addSubview(this.__headerSeparator);
			this.__gridView = new $.ig.CPDynamicColumnGridView(1, new $.ig.SPEvoBoardWidgetDataSourceHelper());
			this.__gridView._neverUseSideSpacing = true;
			this.__contentView.addSubview(this.__gridView);
		}
	},
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionView::CreateCell(System.String)" />*/
	createCell: function (identifier) {
		return new $.ig.CPGridViewIconCell(identifier);
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionView::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::HeaderClicked()" />*/
	headerClicked: function () {
		var $self = this;
		var copiedCell = new $.ig.CPGridViewTextBoxCell("x");
		var section = this.data();
		var title = section.title();
		if (title == null) {
			title = "";
		}
		copiedCell.textView().setText(title);
		$.ig.CPPopupManager.prototype.showTextBoxPopup(this.__header, copiedCell, true, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sectionTitle), function (o) {
			$self.sectionTitleChanged(o);
		}, function () {
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::HeaderClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::SectionTitleChanged(System.String)" />*/
	sectionTitleChanged: function (newTitle) {
		var section = this.data();
		if ((section.title() == null && newTitle.length != 0) || (section.title() != null && !section.title().equals(newTitle))) {
			section.title(newTitle);
			this.refreshTitle(section);
			var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sectionTitleChangedNotificationMessage);
			this.updateBoard(message);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::SectionTitleChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::HeaderOverFlowClicked()" />*/
	headerOverFlowClicked: function () {
		this.showPopup(this.__header.overFlowButton());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::HeaderOverFlowClicked()" />*/
	,
	/*<BeginProperty Name="Infragistics.CPViewBase Infragistics.SPEvoBoardSectionView::PopupHightlightView()" />*/
	popupHightlightView: function () {
		return this.__contentView;
	}
	/*<EndProperty Name="Infragistics.CPViewBase Infragistics.SPEvoBoardSectionView::PopupHightlightView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::RefreshTitle(Infragistics.EMBoardSection)" />*/
	refreshTitle: function (section) {
		if (!section.hasTitle()) {
			this.__header.setIcon($.ig.EMIcons.prototype.icons().getEditIcon());
			this.__header.setIconColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
			this.__header.textLabel().setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		} else {
			this.__header.setIcon(null);
			this.__header.textLabel().setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		}
		this.__header.textLabel().setText(section.resolveTitle());
		this.__header.layoutCell();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::RefreshTitle(Infragistics.EMBoardSection)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewCellBase.prototype.dataSet.call(this);
		var section = this.data();
		this.refreshTitle(section);
		if (section.widgets() == null || section.widgets().length == 0) {
			this.ensureEmptyState();
			this.__emptyState.isHidden(false);
		} else {
			if (this.__emptyState != null) {
				this.__emptyState.isHidden(true);
			}
			var count = section.widgets().length;
			for (var i = 0; i < count; i++) {
				var widget = section.widgets()[i];
				if (widget.type().equals($.ig.EMBoardTasksWidget.prototype.typeName)) {
				}
			}
		}
		this.__gridView.setData(section.widgets());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::DataSet()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::TasksReceived(Infragistics.CPList)" />*/
	tasksReceived: function (tasks) {
		this.__gridView.refreshGrid();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::TasksReceived(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::OnDetached()" />*/
	onDetached: function () {
		$.ig.CPGridViewCellBase.prototype.onDetached.call(this);
		var count = this.__taskWidgetIds.length;
		for (var i = 0; i < count; i++) {
			var widgetId = this.__taskWidgetIds[i];
			$.ig.EMTasksManager.prototype.unregisterTasksNofications(this.__uid, widgetId);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::OnDetached()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::EnsureEmptyState()" />*/
	ensureEmptyState: function () {
		var $self = this;
		if (this.__emptyState == null) {
			this.__emptyState = new $.ig.EMEmptyStateView(function () {
				$self.headerOverFlowClicked();
			}, $.ig.EMIcons.prototype.icons().getPlusIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.emptyStateBoardSectionTitle), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.emptyStateBoardSectionSubTitle));
			this.__contentView.addSubview(this.__emptyState);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::EnsureEmptyState()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCellBase.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__contentView, 0, 0, w, h);
		if (this.__header != null) {
			var top = 0;
			var headerHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
			this.__contentView.measureView(this.__header, 0, top, w, headerHeight);
			top += headerHeight;
			var sepHeight = $.ig.NativeUIUtility.prototype.utility().densify(1);
			this.__contentView.measureView(this.__headerSeparator, 0, top, w, sepHeight);
			top += sepHeight;
			this.__contentView.measureView(this.__gridView, 0, top, w, h - top);
			if (this.__emptyState != null) {
				this.measureView(this.__emptyState, 0, top, w, h - top);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardSectionView::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardSectionView::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardSectionView::CellLocationChangedInViewport(System.Double, System.Double, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	cellLocationChangedInViewport: function (xPercent, yPercent, x, y, w, h) {
		var offset = (this._path._columnIndex == 0) ? 0 : $.ig.NativeUIUtility.prototype.utility().densify(3);
		var limit = this._gridView.getContentOffsetX() + this._gridView._columnSpacing + offset;
		if (xPercent < 0) {
			var parent = this.getParent();
			parent.measureView(this, limit, y, w, h);
			return true;
		} else {
			this.bringToFront();
			if (this._path._columnIndex != 0) {
				var parent1 = this.getParent();
				if (x < limit) {
					parent1.measureView(this, limit, y, w, h);
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardSectionView::CellLocationChangedInViewport(System.Double, System.Double, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionView::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getWidgetsIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.manageWidgets), this.data(), function (obj) {
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getContentPinIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addContentWidget), this.data(), function (obj) {
			$self.addNewWidget(obj, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addContentWidget), new $.ig.EMBoardContentWidget(1));
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getTasksIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addTasksWidget), this.data(), function (obj) {
			$self.addNewWidget(obj, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addTasksWidget), new $.ig.EMBoardTasksWidget(1));
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getNotesIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addNotesWidget), this.data(), function (obj) {
			$self.addNewWidget(obj, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addNotesWidget), new $.ig.EMBoardNotesWidget(1));
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getGoalsIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addGoalsWidget), this.data(), function (obj) {
			$self.addNewWidget(obj, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addGoalsWidget), new $.ig.EMBoardGoalsWidget(1));
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getEditIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.rename), this.data(), function (obj) {
			$self.headerClicked();
			return true;
		}));
		var board = this.resolveBoard();
		if (board.sections().length > 1) {
			items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getTrashIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.del), this.data(), function (obj) {
				$self.askToRemoveSection(obj);
				return true;
			}));
		}
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardSectionView::ResolvePopupItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AddNewWidget(Infragistics.EMBoardSection, System.String, Infragistics.EMBoardWidgetBase)" />*/
	addNewWidget: function (section, addWidgetTitle, newWidget) {
		var $self = this;
		if (section.hasWidgetOfType(newWidget.type())) {
			$.ig.CPPopupManager.prototype.showTextBoxPopup2(this, null, null, addWidgetTitle, false, function (o) {
				$self.addWidget(newWidget, o);
			}, function () {
			});
		} else {
			this.addWidget(newWidget, newWidget.defaultTitle());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AddNewWidget(Infragistics.EMBoardSection, System.String, Infragistics.EMBoardWidgetBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.EMBoard Infragistics.SPEvoBoardSectionView::ResolveBoard()" />*/
	resolveBoard: function () {
		return $.ig.EMBoardManager.prototype.resolveBoard((this.data()).boardId());
	}
	/*<EndMethod Name="Infragistics.EMBoard Infragistics.SPEvoBoardSectionView::ResolveBoard()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AddWidget(Infragistics.EMBoardWidgetBase, System.String)" />*/
	addWidget: function (widget, title) {
		if (title != null && title.length > 0) {
			var section = this.data();
			widget.title(title);
			section.addWidget(widget);
			$.ig.SPEvoAnalyticsUtility.prototype.onWidgetCreated(section, widget);
			var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.widgetAddedNotificationMessage);
			this.updateBoard(message);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AddWidget(Infragistics.EMBoardWidgetBase, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AskToRemoveSection(Infragistics.EMBoardSection)" />*/
	askToRemoveSection: function (section) {
		var $self = this;
		var title = section.title() == null ? "" : section.title();
		$.ig.CPPopupManager.prototype.ask(this, "Delete " + title, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.areYouSure), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.del), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cancel), $.ig.ThemeManager.prototype.currentTheme().nativeErrorColor(), section, function (obj) {
			$self.removeSection(obj);
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::AskToRemoveSection(Infragistics.EMBoardSection)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::RemoveSection(Infragistics.EMBoardSection)" />*/
	removeSection: function (section) {
		var $self = this;
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySections, $.ig.EMGoogleAnalyticsConstants.prototype.actionDelete, "");
		var board = this.resolveBoard();
		var index = board.sections().indexOf(section);
		board.removeSection(section);
		if (this._gridView != null) {
			this._gridView.getDataSource().data(board.sections());
			var animator = new $.ig.SPEvoRemoveSectionCellAnimator();
			animator._completionBlock = function () {
				var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sectionDeletedNotificationMessage);
				$self.updateBoard(message);
			};
			this._gridView.removeCell(new $.ig.CPCellPath(1, 0, 0, index), animator);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::RemoveSection(Infragistics.EMBoardSection)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionView::UpdateBoard(System.String)" />*/
	updateBoard: function (message) {
		$.ig.EMBoardManager.prototype.updateBoardById((this.data()).boardId(), message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionView::UpdateBoard(System.String)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionView', $.ig.CPGridViewCellBase.prototype.$type, [$.ig.EMTasksDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionView" />*/

/*<BeginType Name="Infragistics.SPEvoContentWidgetFileCell" />*/

$.ig.util.defType('SPEvoContentWidgetFileCell', 'CPGridViewIconCell', {
	init: function (identifier) {
		$.ig.CPGridViewIconCell.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewIconCell.prototype.dataSet.call(this);
		var item = this.data();
		if (item != null) {
			$.ig.CloudFileUtility.prototype.setupCloudFileCell(item.file(), this);
		}
		this.setOverflowVisiblity(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::DataSet()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetFileCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getUnpinIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.unpinItem), null, function (o) {
			$self.removeItem();
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetFileCell::ResolvePopupItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::RemoveItem()" />*/
	removeItem: function () {
		var item = this.data();
		item._widget.removeItem(item);
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.itemDeletedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoardById(item._widget.section().boardId(), message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::RemoveItem()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::HandleClick(System.Int32, System.Int32)" />*/
	handleClick: function (x, y) {
		$.ig.CPGridViewIconCell.prototype.handleClick.call(this, x, y);
		var item = this.data();
		$.ig.CloudFileNavigationViewController.prototype.openFile(this, item.file(), item._widget.section().boardId());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetFileCell::HandleClick(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoContentWidgetFileCell', $.ig.CPGridViewIconCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoContentWidgetFileCell" />*/

/*<BeginType Name="Infragistics.SPEvoContentWidgetDashboardCell" />*/

$.ig.util.defType('SPEvoContentWidgetDashboardCell', 'RPDashboardSelectorCell', {
	init: function (identifier) {
		$.ig.RPDashboardSelectorCell.prototype.init.call(this, identifier);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::DataSet()" />*/
	dataSet: function () {
		var item = this.data();
		if (item != null) {
			$.ig.CloudFileUtility.prototype.setupCloudFileCell(item.file(), this);
			this.applyIcon(item.file());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::DataSet()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetDashboardCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getUnpinIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.unpinItem), null, function (o) {
			$self.removeItem();
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetDashboardCell::ResolvePopupItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::RemoveItem()" />*/
	removeItem: function () {
		var item = this.data();
		item._widget.removeItem(item);
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.itemDeletedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoardById(item._widget.section().boardId(), message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::RemoveItem()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::HandleClick(System.Int32, System.Int32)" />*/
	handleClick: function (x, y) {
		$.ig.RPDashboardSelectorCell.prototype.handleClick.call(this, x, y);
		var item = this.data();
		$.ig.CloudFileNavigationViewController.prototype.openFile(this, item.file(), item._widget.section().boardId());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetDashboardCell::HandleClick(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoContentWidgetDashboardCell', $.ig.RPDashboardSelectorCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoContentWidgetDashboardCell" />*/

/*<BeginType Name="Infragistics.SPEvoContentWidgetLinkCell" />*/

$.ig.util.defType('SPEvoContentWidgetLinkCell', 'CPGridViewIconCell', {
	init: function (identifier) {
		$.ig.CPGridViewIconCell.prototype.init.call(this, identifier);
		this._iconSizeBasedOnTextSize = false;
		this.setIcon($.ig.EMContentIcons.prototype.icons().getHtmlIcon());
		this.setOverflowVisiblity(true);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewIconCell.prototype.dataSet.call(this);
		var link = this.data();
		this.textLabel().setText(link.title());
		this.subTextLabel().setText(link.domainURL());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::DataSet()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetLinkCell::ResolvePopupItems()" />*/
	resolvePopupItems: function () {
		var $self = this;
		var items = new $.ig.Array();
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getUnpinIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.unpinItem), null, function (o) {
			$self.removeItem();
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoContentWidgetLinkCell::ResolvePopupItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::RemoveItem()" />*/
	removeItem: function () {
		var item = this.data();
		item._widget.removeItem(item);
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.itemDeletedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoardById(item._widget.section().boardId(), message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::RemoveItem()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::HandleClick(System.Int32, System.Int32)" />*/
	handleClick: function (x, y) {
		$.ig.CPGridViewIconCell.prototype.handleClick.call(this, x, y);
		var link = this.data();
		var url = link.uRL();
		window.open(url);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoContentWidgetLinkCell::HandleClick(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoContentWidgetLinkCell', $.ig.CPGridViewIconCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoContentWidgetLinkCell" />*/

/*<BeginType Name="Infragistics.SPEvoTaskDetailsCell" />*/

$.ig.util.defType('SPEvoTaskDetailsCell', 'CPGridViewCellBase', {
	__assignedToLabel: null,
	__dueDateLabel: null,
	__descriptionTextView: null,
	__assignedToDropDown: null,
	__dueDateDropDown: null,
	__descriptionBackgroundView: null,
	_notifyTaskChangedDelegate: null,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewCellBase.prototype.init.call(this, identifier);
		this.__assignedToLabel = this.createLabel($.ig.EMLocalizationKeys.prototype.assignedTo);
		this.__dueDateLabel = this.createLabel($.ig.EMLocalizationKeys.prototype.dueDate);
		this.__assignedToDropDown = this.createDropDownButton(function (x, y) {
			$self.showAssignToPicker();
		});
		this.__dueDateDropDown = this.createDropDownButton(function (x, y) {
		});
		this.__descriptionBackgroundView = new $.ig.CPView();
		this.__descriptionBackgroundView.setBorderColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		this.__descriptionBackgroundView.setBorderWidth($.ig.NativeUIUtility.prototype.utility().densify(1));
		this.addSubview(this.__descriptionBackgroundView);
		this.__descriptionTextView = new $.ig.CPMultilineTextView();
		this.__descriptionTextView.setHintTextColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		this.__descriptionTextView.setHintText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.taskDescriptionHintText));
		this.__descriptionTextView.setFont($.ig.ThemeManager.prototype.currentTheme().subLabelFontSize(), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.addSubview(this.__descriptionTextView);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::ShowAssignToPicker()" />*/
	showAssignToPicker: function () {
		var $self = this;
		var list = new $.ig.Array();
		var task = this.data();
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		var team = userFile.resolveTeamForID(task.teamId());
		if (team == null) {
			list.add(new $.ig.EMTeamMemberPopupItem(userFile.currentUser(), function (o) {
				$self.memberSelected(o);
				return true;
			}));
		} else {
			var members = team.members();
			var count = members.length;
			for (var i = 0; i < count; i++) {
				var member = members[i];
				list.add(new $.ig.EMTeamMemberPopupItem(member, function (o) {
					$self.memberSelected(o);
					return true;
				}));
			}
		}
		$.ig.CPPopupManager.prototype.showList1(this.__assignedToDropDown, list, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::ShowAssignToPicker()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::MemberSelected(Infragistics.EMMember)" />*/
	memberSelected: function (member) {
		var task = this.data();
		task.assignedTo(member);
		this._notifyTaskChangedDelegate.actionOccurred(null, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::MemberSelected(Infragistics.EMMember)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoTaskDetailsCell::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoTaskDetailsCell::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPLabel Infragistics.SPEvoTaskDetailsCell::CreateLabel(System.String)" />*/
	createLabel: function (key) {
		var label = new $.ig.CPLabel();
		label.setText($.ig.NativeEMLocalizeUtil.prototype.localize(key));
		label.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		label.setFont($.ig.ThemeManager.prototype.currentTheme().subLabelFontSize(), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.addSubview(label);
		return label;
	}
	/*<EndMethod Name="Infragistics.CPLabel Infragistics.SPEvoTaskDetailsCell::CreateLabel(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIconLabelButton Infragistics.SPEvoTaskDetailsCell::CreateDropDownButton(Infragistics.PointExecutionBlock)" />*/
	createDropDownButton: function (action) {
		var button = new $.ig.PathIconLabelButton(0, true);
		button.setFont($.ig.ThemeManager.prototype.currentTheme().maxCellFontSize(), $.ig.ThemeManager.prototype.currentTheme().boldFont());
		button.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		button.padding(0);
		button.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		button.addClickHandler(action);
		this.addSubview(button);
		return button;
	}
	/*<EndMethod Name="Infragistics.PathIconLabelButton Infragistics.SPEvoTaskDetailsCell::CreateDropDownButton(Infragistics.PointExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewCellBase.prototype.dataSet.call(this);
		var task = this.data();
		if (task.assignedTo() == null) {
			this.__assignedToDropDown.setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.notAssigned));
		} else {
			this.__assignedToDropDown.setText(task.assignedTo().name());
		}
		if (task.dueDate() == 0) {
			this.__dueDateDropDown.setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.noDueDate));
		} else {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::DataSet()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		this.__assignedToLabel.calculateSizeToFit();
		var lh = this.__assignedToLabel.getCalculatedHeight();
		var alw = this.__assignedToLabel.getCalculatedWidth();
		this.__dueDateLabel.calculateSizeToFit();
		var dlw = this.__dueDateLabel.getCalculatedWidth();
		var dh = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		var iconSize = $.ig.ThemeManager.prototype.currentTheme().resolveIconSizeForSize(dh);
		this.__assignedToDropDown.setIconSize(iconSize);
		this.__dueDateDropDown.setIconSize(iconSize);
		this.__assignedToDropDown.calculateSizeToFit();
		var adw = this.__assignedToDropDown.getCalculatedWidth();
		this.__dueDateDropDown.calculateSizeToFit();
		var ddw = this.__dueDateDropDown.getCalculatedWidth();
		var top = 0;
		this.measureView(this.__assignedToLabel, 0, top, alw, lh);
		this.measureView(this.__dueDateLabel, w - dlw, top, dlw, lh);
		this.measureView(this.__assignedToDropDown, 0, top, adw, dh);
		this.measureView(this.__dueDateDropDown, w - ddw, top, ddw, dh);
		top += dh;
		this.measureView(this.__descriptionBackgroundView, 0, top, w, h - top);
		this.measureView(this.__descriptionTextView, 0, top, w, h - top);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskDetailsCell', $.ig.CPGridViewCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskDetailsCell" />*/

/*<BeginType Name="Infragistics.SPEvoTaskView" />*/

$.ig.util.defType('SPEvoTaskView', 'CPGridViewCellBase', {
	__statusBar: null,
	__overflowButton: null,
	__statePicker: null,
	__header: null,
	__tabbedView: null,
	__activityView: null,
	__detailsView: null,
	__contentView: null,
	init: function (identifier) {
		var $self = this;
		$.ig.CPGridViewCellBase.prototype.init.call(this, identifier);
		this.highlightMode($.ig.CPInteractionViewMode.prototype.none);
		$.ig.ThemeManager.prototype.currentTheme().applyButtonShadowToView(this);
		this.__contentView = new $.ig.CPView();
		this.__contentView.clipToBounds(true);
		this.addSubview(this.__contentView);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		this.__contentView.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__contentView.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		this.__activityView = new $.ig.SPEvoTaskActivityView();
		this.__detailsView = new $.ig.SPEvoTaskDetailsView(this);
		this.__header = new $.ig.CPGridViewIconCell("");
		this.__header.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__header.addClickHandler(function (x, y) {
			$self.headerClicked();
		});
		this.__header.highlightMode($.ig.CPInteractionViewMode.prototype.none);
		this.__header._minFontSize = this.__header._maxFontSize = $.ig.ThemeManager.prototype.currentTheme().maxCellFontSize() + 2;
		this.__header.font($.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.__header.setIcon($.ig.EMIcons.prototype.icons().getEditIcon());
		this.__header.setIconColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		this.__header.setCursor($.ig.CPCursors.prototype.text);
		this.__header.textLabel().setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__contentView.addSubview(this.__header);
		this.__tabbedView = new $.ig.CPTabbedView();
		this.__tabbedView._headerHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		this.__tabbedView.setFont($.ig.ThemeManager.prototype.currentTheme().resolveCellFontSize(), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.__tabbedView.addItem(this.__detailsView, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.details));
		this.__tabbedView.addItem(this.__activityView, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.activity));
		this.__contentView.addSubview(this.__tabbedView);
		this.__statePicker = new $.ig.PathIconLabelButton(0, true);
		this.__statePicker.setOutlineOnly(false);
		this.__statePicker.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__statePicker.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		this.__statePicker.padding($.ig.NativeUIUtility.prototype.utility().densify(2));
		this.__statePicker.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__statePicker.addClickHandler(function (x, y) {
			$self.stateClicked();
		});
		this.__contentView.addSubview(this.__statePicker);
		this.__overflowButton = new $.ig.PathIconLabelButton(1);
		this.__overflowButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__overflowButton.setIcon($.ig.UIPathIcons.prototype.icons().getOverflowIcon());
		this.__contentView.addSubview(this.__overflowButton);
		this.__statusBar = new $.ig.CPViewBase();
		this.__contentView.addSubview(this.__statusBar);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::StateClicked()" />*/
	stateClicked: function () {
		var $self = this;
		var items = new $.ig.Array();
		var action = function (o) {
			$self.stateChanged(o);
			return true;
		};
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateOpen, action));
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateInProgress, action));
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateOnHold, action));
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateBlocked, action));
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateDone, action));
		items.add(this.createStatePopupItem($.ig.EMTask.prototype.eMTaskStateClosed, action));
		$.ig.CPPopupManager.prototype.showList3(this.__statePicker, this.__statePicker, items, $.ig.CPPopupPosition.prototype.auto, null, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::StateClicked()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPPopupListItem Infragistics.SPEvoTaskView::CreateStatePopupItem(System.String, Infragistics.CancellableObjectBlock)" />*/
	createStatePopupItem: function (state, action) {
		return new $.ig.SPEvoTaskStatePopupItem($.ig.EMTask.prototype.iconForTaskState(state), $.ig.EMTask.prototype.colorForTaskState(state), $.ig.NativeEMLocalizeUtil.prototype.localize(state), state, action);
	}
	/*<EndMethod Name="Infragistics.CPPopupListItem Infragistics.SPEvoTaskView::CreateStatePopupItem(System.String, Infragistics.CancellableObjectBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::StateChanged(System.String)" />*/
	stateChanged: function (newState) {
		var task = this.data();
		task.state(newState);
		this.refreshTask();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::StateChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::RefreshTask()" />*/
	refreshTask: function () {
		var task = this.data();
		task.notifyChange();
		this.data(this.data());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::RefreshTask()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::HeaderClicked()" />*/
	headerClicked: function () {
		var $self = this;
		var copiedCell = new $.ig.CPGridViewTextBoxCell("x");
		var task = this.data();
		copiedCell.textView().setText(task.title());
		$.ig.CPPopupManager.prototype.showTextBoxPopup(this.__header, copiedCell, true, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.taskTitle), function (o) {
			$self.taskTitleChanged(o);
		}, function () {
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::HeaderClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::TaskTitleChanged(System.String)" />*/
	taskTitleChanged: function (newTitle) {
		if (newTitle.length > 0) {
			var task = this.data();
			task.title(newTitle);
			this.refreshTask();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::TaskTitleChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewCellBase.prototype.dataSet.call(this);
		this.unregisterTask();
		var task = this.data();
		this.registerTask(task);
		this.__activityView.setTask(task);
		this.__detailsView.setTask(task);
		this.__statePicker.setIcon($.ig.EMTask.prototype.iconForTaskState(task.state()));
		this.__statePicker.update();
		this.__statePicker.setText($.ig.NativeEMLocalizeUtil.prototype.localize(task.state()));
		this.__statusBar.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative($.ig.EMTask.prototype.colorForTaskState(task.state())));
		this.__tabbedView.setActiveColor($.ig.ColorUtility.prototype.convertToNative($.ig.EMTask.prototype.colorForTaskState(task.state())));
		this.__header.textLabel().setText(task.title());
		this.__header.layoutCell();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::DataSet()" />*/
	,
	__taskCallBack: null,
	__prevTaskId: null,
	__taskReference: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::UnregisterTask()" />*/
	unregisterTask: function () {
		if (this.__taskReference != null) {
			$.ig.EMTaskManager.prototype.unregister(this.__prevTaskId, this.__taskReference);
			this.__taskReference = this.__prevTaskId = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::UnregisterTask()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::RegisterTask(Infragistics.EMTask)" />*/
	registerTask: function (task) {
		var $self = this;
		this.__prevTaskId = task.identifier();
		if (this.__taskCallBack == null) {
			this.__taskCallBack = function (o) {
				$self.taskUpdated();
			};
		}
		this.__taskReference = $.ig.EMTaskManager.prototype.register(this.__prevTaskId, this.__taskCallBack);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::RegisterTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::TaskUpdated()" />*/
	taskUpdated: function () {
		this.dataSet();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::TaskUpdated()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::OnDetached()" />*/
	onDetached: function () {
		$.ig.CPGridViewCellBase.prototype.onDetached.call(this);
		this.unregisterTask();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::OnDetached()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCellBase.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__contentView, 0, 0, w, h);
		var padding = $.ig.NativeUIUtility.prototype.utility().densify(10);
		var top = padding;
		var buttonHeight = $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
		var iconSize = $.ig.ThemeManager.prototype.currentTheme().resolveIconSizeForSize(buttonHeight);
		var headerHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		this.measureView(this.__statusBar, 0, -padding, w, padding * 2);
		this.__statePicker.setIconSize(iconSize);
		this.__statePicker.setFont($.ig.ThemeManager.prototype.currentTheme().resolveCellFontSize(), $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.__statePicker.calculateSizeToFit();
		var spw = this.__statePicker.getCalculatedWidth();
		var sph = this.__statePicker.getCalculatedHeight();
		var right = w - buttonHeight;
		this.__overflowButton.setIconSize(iconSize);
		this.measureView(this.__overflowButton, w - buttonHeight, top, buttonHeight, buttonHeight);
		right -= spw;
		this.measureView(this.__statePicker, right, top + $.ig.intDivide(buttonHeight, 2) - $.ig.intDivide(sph, 2), spw, sph);
		top += buttonHeight + padding;
		this.__contentView.measureView(this.__header, 0, top, w, headerHeight);
		top += headerHeight;
		this.__contentView.measureView(this.__tabbedView, 0, top, w, h - top);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoTaskView::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoTaskView::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskView::ActionOccurred(System.Object, System.Object)" />*/
	actionOccurred: function (sender, data) {
		this.refreshTask();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskView::ActionOccurred(System.Object, System.Object)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskView', $.ig.CPGridViewCellBase.prototype.$type, [$.ig.CPObjectDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoTaskView" />*/

/*<BeginType Name="Infragistics.SPEvoTaskStatePopupItem" />*/

$.ig.util.defType('SPEvoTaskStatePopupItem', 'CPPopupListItem', {
	init: function (itemIcon, itemIconColor, itemName, itemTag, actionItem) {
		$.ig.CPPopupListItem.prototype.init1.call(this, 1, itemIcon, itemIconColor, itemName, itemTag, actionItem);
	},
	/*<BeginMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.SPEvoTaskStatePopupItem::CreateNewCell(System.String)" />*/
	createNewCell: function (identifier) {
		return new $.ig.SPEVotaskStatePopupCell(identifier);
	}
	/*<EndMethod Name="Infragistics.CPPopupListViewCellBase Infragistics.SPEvoTaskStatePopupItem::CreateNewCell(System.String)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskStatePopupItem', $.ig.CPPopupListItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskStatePopupItem" />*/

/*<BeginType Name="Infragistics.SPEVotaskStatePopupCell" />*/

$.ig.util.defType('SPEVotaskStatePopupCell', 'CPPopupListViewCell', {
	__bar: null,
	init: function (identifier) {
		$.ig.CPPopupListViewCell.prototype.init.call(this, identifier);
		this.__bar = new $.ig.CPViewBase();
		this.addSubview(this.__bar);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEVotaskStatePopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	processItem: function (i) {
		$.ig.CPPopupListViewCell.prototype.processItem.call(this, i);
		var item = i;
		this.textLabel().setTextColor($.ig.ColorUtility.prototype.convertToNative(item._iconColor));
		this.__bar.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(item._iconColor));
	}
	/*<EndMethod Name="System.Void Infragistics.SPEVotaskStatePopupCell::ProcessItem(Infragistics.CPPopupListItemBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEVotaskStatePopupCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPPopupListViewCell.prototype.sizeChanged.call(this, w, h);
		var statusBarWidth = $.ig.NativeUIUtility.prototype.utility().densify(5);
		this.measureView(this.__bar, 0, 0, statusBarWidth, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEVotaskStatePopupCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEVotaskStatePopupCell', $.ig.CPPopupListViewCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEVotaskStatePopupCell" />*/

/*<BeginType Name="Infragistics.SPEvoTaskWidgetCell" />*/

$.ig.util.defType('SPEvoTaskWidgetCell', 'CPGridViewCheckBoxCell', {
	__expansionIndicator: null,
	__addSubTaskButton: null,
	_addMode: false,
	__statusBar: null,
	_addClickedDelegate: null,
	_expansionChanged: null,
	__inManager: false,
	init: function (identifier, inManager) {
		var $self = this;
		$.ig.CPGridViewCheckBoxCell.prototype.init.call(this, identifier);
		this._iconSizeBasedOnTextSize = false;
		this.__inManager = inManager;
		this.setOverflowVisiblity(true);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__expansionIndicator = new $.ig.PathIconButton(0);
		this.__expansionIndicator.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__expansionIndicator.setIcon($.ig.UIPathIcons.prototype.icons().getChevronUpIcon());
		this.__expansionIndicator.addClickHandler(function (x, y) {
			$self.toggleExpansion();
		});
		this.addSubview(this.__expansionIndicator);
		this.__addSubTaskButton = new $.ig.PathIconButton(0);
		this.__addSubTaskButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__addSubTaskButton.setIcon($.ig.EMIcons.prototype.icons().getAddSubtaskIcon());
		this.__addSubTaskButton.addClickHandler(function (x, y) {
			$self.addSubTask();
		});
		this.addSubview(this.__addSubTaskButton);
		this.__statusBar = new $.ig.CPViewBase();
		this.addSubview(this.__statusBar);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskWidgetCell::Draggable()" />*/
	draggable: function () {
		return this.__inManager;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskWidgetCell::Draggable()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::AddSubTask()" />*/
	addSubTask: function () {
		if (this._addClickedDelegate != null) {
			this._addClickedDelegate.actionOccurred(this, this.data());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::AddSubTask()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::ReorderStart(System.Int32, System.Int32, Infragistics.CPViewBase)" />*/
	reorderStart: function (x, y, reorderHandle) {
		var task = this.data();
		if (!task.isCollapsed()) {
			this.toggleExpansion();
		}
		$.ig.CPGridViewCheckBoxCell.prototype.reorderStart.call(this, x, y, reorderHandle);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::ReorderStart(System.Int32, System.Int32, Infragistics.CPViewBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::ToggleExpansion()" />*/
	toggleExpansion: function () {
		var task = this.data();
		task.isCollapsed(!task.isCollapsed());
		var paths = new $.ig.Array();
		var parentRow = this._path._rowIndex;
		var count = task.subTasks().length;
		for (var i = 0; i < count; i++) {
			paths.add(new $.ig.CPRowPath(parentRow + i + 1, 0));
		}
		this._gridView.getDataSource().invalidateData();
		if (task.isCollapsed()) {
			this._gridView.removeRows(paths, new $.ig.CPGridRowCollapseAnimator(parentRow));
		} else {
			this._gridView.insertRows(paths, new $.ig.CPGridRowExpansionAnimator(parentRow));
		}
		this.__expansionIndicator.setIconRotation(task.isCollapsed() ? 180 : 0, true);
		if (this._expansionChanged != null) {
			this._expansionChanged(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::ToggleExpansion()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskWidgetCell::Clone()" />*/
	clone: function () {
		var clone = new $.ig.SPEvoTaskWidgetCell("clone", true);
		clone.data(this.data());
		return clone;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskWidgetCell::Clone()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::DataSet()" />*/
	dataSet: function () {
		$.ig.CPGridViewCheckBoxCell.prototype.dataSet.call(this);
		this.unregisterTask();
		var task = this.data();
		this.registerTask(task);
		this.textLabel().setText(task.title());
		this.__statusBar.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative($.ig.EMTask.prototype.colorForTaskState(task.state())));
		if (task.subTasks().length > 0) {
			this.__expansionIndicator.isHidden(false);
			this.__expansionIndicator.setIconRotation(task.isCollapsed() ? 180 : 0, false);
		} else {
			this.__expansionIndicator.isHidden(true);
		}
		if (this._addMode) {
			this.__addSubTaskButton.isHidden(task.parentId() != null);
		} else {
			this.__addSubTaskButton.isHidden(true);
		}
		if (task.parentId() != null) {
			this.setIcon($.ig.EMIcons.prototype.icons().getChildIcon());
			this.iconView().isHidden(false);
		} else {
			this.setIcon(null);
			this.iconView().isHidden(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::DataSet()" />*/
	,
	__taskCallBack: null,
	__prevTaskId: null,
	__taskReference: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::UnregisterTask()" />*/
	unregisterTask: function () {
		if (this.__taskReference != null) {
			$.ig.EMTaskManager.prototype.unregister(this.__prevTaskId, this.__taskReference);
			this.__taskReference = this.__prevTaskId = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::UnregisterTask()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::RegisterTask(Infragistics.EMTask)" />*/
	registerTask: function (task) {
		var $self = this;
		this.__prevTaskId = task.identifier();
		if (this.__taskCallBack == null) {
			this.__taskCallBack = function (o) {
				$self.taskUpdated();
			};
		}
		this.__taskReference = $.ig.EMTaskManager.prototype.register(this.__prevTaskId, this.__taskCallBack);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::RegisterTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::TaskUpdated()" />*/
	taskUpdated: function () {
		this.dataSet();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::TaskUpdated()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::OnDetached()" />*/
	onDetached: function () {
		$.ig.CPGridViewCheckBoxCell.prototype.onDetached.call(this);
		this.unregisterTask();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::OnDetached()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::HandleClick(System.Int32, System.Int32)" />*/
	handleClick: function (x, y) {
		$.ig.CPGridViewCheckBoxCell.prototype.handleClick.call(this, x, y);
		if (!this.__inManager) {
			var task = this.data();
			$.ig.CPPopupManager.prototype.showFullScreenModalDialog(this, new $.ig.SPEvoTaskViewerViewController(1, task), true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::HandleClick(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskWidgetCell::HasLeftContent()" />*/
	hasLeftContent: function () {
		return this.numberOfItemsInLeftContentArea() > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskWidgetCell::HasLeftContent()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.SPEvoTaskWidgetCell::NumberOfItemsInLeftContentArea()" />*/
	numberOfItemsInLeftContentArea: function () {
		if (this.data() == null) {
			return 0;
		}
		var task = this.data();
		return task.parentId() != null ? 1 : 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.SPEvoTaskWidgetCell::NumberOfItemsInLeftContentArea()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.SPEvoTaskWidgetCell::NumberOfItemsInRightContentArea()" />*/
	numberOfItemsInRightContentArea: function () {
		if (this.data() == null) {
			return 1;
		}
		var task = this.data();
		return task.subTasks().length > 0 ? 2 : 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.SPEvoTaskWidgetCell::NumberOfItemsInRightContentArea()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCheckBoxCell.prototype.sizeChanged.call(this, w, h);
		var statusBarWidth = $.ig.NativeUIUtility.prototype.utility().densify(5);
		this.measureView(this.__statusBar, 0, 0, statusBarWidth, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	layoutRightContentArea: function (x, y, itemSize) {
		this.__addSubTaskButton.setIconSize(itemSize);
		this.measureView1(this.__addSubTaskButton, this.currentWidth() - this.contentAreaSize(), 0, this.contentAreaSize(), this.contentAreaSize(), 1);
		if ((this.data()).subTasks().length > 0) {
			this.__expansionIndicator.setIconSize(itemSize);
			this.measureView1(this.__expansionIndicator, x - this.padding(), 0, this.contentAreaSize(), this.contentAreaSize(), 1);
			x += itemSize + this.padding();
		}
		if (this._addMode) {
			$.ig.CPGridViewCheckBoxCell.prototype.layoutRightContentArea.call(this, x, y, 0);
		} else {
			$.ig.CPGridViewCheckBoxCell.prototype.layoutRightContentArea.call(this, x, y, itemSize);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::LayoutRightContentArea(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::LayoutLeftContentArea(System.Int32, System.Int32, System.Int32)" />*/
	layoutLeftContentArea: function (x, y, itemSize) {
		$.ig.CPGridViewCheckBoxCell.prototype.layoutLeftContentArea.call(this, x, y, itemSize);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskWidgetCell::LayoutLeftContentArea(System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskWidgetCell', $.ig.CPGridViewCheckBoxCell.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskWidgetCell" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionWidgetColumn" />*/

$.ig.util.defType('SPEvoBoardSectionWidgetColumn', 'CPGridViewColumnDefinition', {
	init: function () {
		$.ig.CPGridViewColumnDefinition.prototype.init.call(this, 1);
	},
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionWidgetColumn::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath, Infragistics.CPGridViewDatasourceHelper)" />*/
	getCell: function (gridView, path, dsh) {
		var widget = dsh.data()[path._sectionIndex];
		var isEmpty = widget.items().length == 0;
		if (isEmpty) {
			var emptyCell = gridView.dequeueReusableCellWithIdentifier("EMPTY");
			if (emptyCell == null) {
				emptyCell = new $.ig.SPEvoBoardSectionEmptyWidgetCell("EMPTY");
			}
			emptyCell.setEmptyState(widget.emptyStateIcon(), widget.emtpyStateTitle(), widget.emtpyStateSubTitle());
			return emptyCell;
		} else {
			var type = widget.type();
			if (type.equals($.ig.EMBoardContentWidget.prototype.typeName)) {
				var content = dsh.resolveDataObjectForRow(path);
				var contentType = content.type();
				var isFileContent = contentType.equals($.ig.EMBoardWidgetContentFile.prototype.typeName);
				var isRPlusContent = false;
				if (isFileContent) {
					isRPlusContent = (content).file().sectionKey().equals($.ig.CloudFile.prototype.typeDashboards);
					if (isRPlusContent) {
						contentType = $.ig.CloudFile.prototype.typeDashboards;
					}
				}
				var contentCell = gridView.dequeueReusableCellWithIdentifier(contentType);
				if (contentCell == null) {
					if (isFileContent) {
						if (isRPlusContent) {
							contentCell = new $.ig.SPEvoContentWidgetDashboardCell(contentType);
						} else {
							contentCell = new $.ig.SPEvoContentWidgetFileCell(contentType);
						}
					} else if (contentType.equals($.ig.EMBoardWidgetContentLink.prototype.typeName)) {
						contentCell = new $.ig.SPEvoContentWidgetLinkCell(contentType);
					}
				}
				contentCell.data(content);
				return contentCell;
			} else if (type.equals($.ig.EMBoardGoalsWidget.prototype.typeName)) {
			} else if (type.equals($.ig.EMBoardTasksWidget.prototype.typeName)) {
				var contentCell1 = gridView.dequeueReusableCellWithIdentifier("task");
				if (contentCell1 == null) {
					contentCell1 = new $.ig.SPEvoTaskWidgetCell("task", false);
				}
				contentCell1.data(dsh.resolveDataObjectForRow(path));
				return contentCell1;
			} else if (type.equals($.ig.EMBoardNotesWidget.prototype.typeName)) {
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionWidgetColumn::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath, Infragistics.CPGridViewDatasourceHelper)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionWidgetColumn', $.ig.CPGridViewColumnDefinition.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionWidgetColumn" />*/

/*<BeginType Name="Infragistics.SPEvoAddItemDataSourceHelper" />*/

$.ig.util.defType('SPEvoAddItemDataSourceHelper', 'CPGridViewSingleFieldMultiColumnDataSourceHelper', {
	__addItemAction: null,
	__addTitle: null,
	init: function (addItemAction, addTitle, columnDefinition) {
		$.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.init.call(this, 0, columnDefinition);
		this.__addItemAction = addItemAction;
		this.__addTitle = addTitle;
		this.supportsStretchRows(true);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoAddItemDataSourceHelper::SupportsAdding()" />*/
	supportsAdding: function () {
		return this.__addItemAction != null;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoAddItemDataSourceHelper::SupportsAdding()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoAddItemDataSourceHelper::GetNumberOfRowsInSection(System.Int32)" />*/
	getNumberOfRowsInSection: function (section) {
		return $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.getNumberOfRowsInSection.call(this, section) + (this.supportsAdding() ? 1 : 0);
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoAddItemDataSourceHelper::GetNumberOfRowsInSection(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoAddItemDataSourceHelper::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	getCell: function (gridView, path) {
		var $self = this;
		if (this.supportsAdding()) {
			var count = this.getNumberOfRowsInSection(path._sectionIndex);
			var actualPath = this.deNormalizePath(path);
			if (actualPath._rowIndex == count - 1) {
				var addCell = gridView.dequeueReusableCellWithIdentifier("AddItemCell");
				if (addCell == null) {
					addCell = new $.ig.CPGridViewIconCell("AddItemCell");
					addCell.textLabel().setText(this.__addTitle);
					addCell.setIcon($.ig.EMIcons.prototype.icons().getPlusIcon());
					var cell = addCell;
					addCell.addClickHandler(function (x, y) {
						$self.addClicked(cell);
					});
				}
				return addCell;
			}
		}
		return $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.getCell.call(this, gridView, path);
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoAddItemDataSourceHelper::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddItemDataSourceHelper::AddClicked(Infragistics.CPGridViewCellBase)" />*/
	addClicked: function (cell) {
		this.__addItemAction(cell);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddItemDataSourceHelper::AddClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('SPEvoAddItemDataSourceHelper', $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoAddItemDataSourceHelper" />*/

/*<BeginType Name="Infragistics.SPEvoBoardNavigatorDataSourceHelper" />*/

$.ig.util.defType('SPEvoBoardNavigatorDataSourceHelper', 'EMTeamNavigatorDataSourceHelper', {
	init: function (includePersonalBoard, setupDelegate) {
		$.ig.EMTeamNavigatorDataSourceHelper.prototype.init.call(this, includePersonalBoard, setupDelegate);
	},
	/*<BeginMethod Name="System.Object Infragistics.SPEvoBoardNavigatorDataSourceHelper::ResolveObject(Infragistics.EMTeam, System.Int32)" />*/
	resolveObject: function (team, rowIndex) {
		return team.boards()[rowIndex];
	}
	/*<EndMethod Name="System.Object Infragistics.SPEvoBoardNavigatorDataSourceHelper::ResolveObject(Infragistics.EMTeam, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardNavigatorDataSourceHelper::RowCountForTeam(Infragistics.EMTeam)" />*/
	rowCountForTeam: function (team) {
		return team.boards().length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardNavigatorDataSourceHelper::RowCountForTeam(Infragistics.EMTeam)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorDataSourceHelper::EMTeamCellCreated(Infragistics.EMTeamCell)" />*/
	eMTeamCellCreated: function (cell) {
		var $self = this;
		$.ig.EMTeamNavigatorDataSourceHelper.prototype.eMTeamCellCreated.call(this, cell);
		if (this._sectionHeaderOverflowAction != null) {
			cell.addAdditionalButton($.ig.EMIcons.prototype.icons().getTasksIcon(), function (o) {
				$self.tasksButtonPressed(o);
			});
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorDataSourceHelper::EMTeamCellCreated(Infragistics.EMTeamCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorDataSourceHelper::TasksButtonPressed(Infragistics.CPCellPath)" />*/
	tasksButtonPressed: function (path) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorDataSourceHelper::TasksButtonPressed(Infragistics.CPCellPath)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardNavigatorDataSourceHelper', $.ig.EMTeamNavigatorDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardNavigatorDataSourceHelper" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionDSH" />*/

$.ig.util.defType('SPEvoBoardSectionDSH', 'CPGridViewSingleRowSingleFieldDataSourceHelper', {
	__cell: null,
	__colWidth: null,
	init: function (columnDefinition, action) {
		$.ig.CPGridViewSingleRowSingleFieldDataSourceHelper.prototype.init.call(this, columnDefinition);
		this.__colWidth = $.ig.CPColumnWidth.prototype.createWithFixedWidth($.ig.intDivide($.ig.ThemeManager.prototype.currentTheme().cellHeight(), 2));
		this.__cell = new $.ig.SPEvoBoardAddSectionButtonView(action);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardSectionDSH::GetNumberOfColumnsInGrid()" />*/
	getNumberOfColumnsInGrid: function () {
		return $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper.prototype.getNumberOfColumnsInGrid.call(this) + 1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardSectionDSH::GetNumberOfColumnsInGrid()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPColumnWidth Infragistics.SPEvoBoardSectionDSH::GetWidthForColumn(System.Int32)" />*/
	getWidthForColumn: function (columnIndex) {
		if (columnIndex == this.getNumberOfColumnsInGrid() - 1) {
			return this.__colWidth;
		}
		return $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper.prototype.getWidthForColumn.call(this, columnIndex);
	}
	/*<EndMethod Name="Infragistics.CPColumnWidth Infragistics.SPEvoBoardSectionDSH::GetWidthForColumn(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionDSH::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	getCell: function (gridView, path) {
		if (path._columnIndex == this.getNumberOfColumnsInGrid() - 1) {
			gridView.dequeueReusableCellWithIdentifier(this.__cell.identifier());
			return this.__cell;
		}
		return $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper.prototype.getCell.call(this, gridView, path);
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardSectionDSH::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionDSH', $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionDSH" />*/

/*<BeginType Name="Infragistics.SPEvoBoardWidgetDataSourceHelper" />*/

$.ig.util.defType('SPEvoBoardWidgetDataSourceHelper', 'CPGridViewSingleFieldDynamicColumnDataSourceHelper', {
	init: function () {
		var $self = this;
		$.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.init.call(this, 0, new $.ig.SPEvoBoardSectionWidgetColumn());
		this.supportsStretchRows(true);
		this.alwaysDisplaySectionHeaders(true);
		this._rowHeightListener = function (r, s) {
			return $self.heightForRow(r, s);
		};
	},
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::HeightForRow(System.Int32, System.Int32)" />*/
	heightForRow: function (row, section) {
		var widget = this.data()[section];
		return widget.items().length == 0 ? $.ig.ThemeManager.prototype.currentTheme().cellHeight() * 5 : $.ig.ThemeManager.prototype.currentTheme().cellHeight();
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::HeightForRow(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardWidgetDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	isStretchRow: function (row, section) {
		var widget = this.data()[section];
		return widget.items().length == 0 || widget.requiresFullRowWhenDisplaying();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardWidgetDataSourceHelper::IsStretchRow(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.SPEvoBoardWidgetDataSourceHelper::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	resolveDataObjectForRow: function (path) {
		if (this.data() == null) {
			return null;
		}
		var widget = this.data()[path._sectionIndex];
		if (widget.items().length == 0) {
			return null;
		}
		if (widget.requiresFullRowWhenDisplaying()) {
			return widget.getItemAtIndex(path._rowIndex);
		} else {
			var actual = this.normalizePath(path);
			return widget.getItemAtIndex(actual._rowIndex);
		}
	}
	/*<EndMethod Name="System.Object Infragistics.SPEvoBoardWidgetDataSourceHelper::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardWidgetDataSourceHelper::InvalidateData()" />*/
	invalidateData: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardWidgetDataSourceHelper::InvalidateData()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::GetNumberOfSectionsInGrid()" />*/
	getNumberOfSectionsInGrid: function () {
		return this.data() == null ? 0 : this.data().length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::GetNumberOfSectionsInGrid()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::ResolveRowCount(System.Int32)" />*/
	resolveRowCount: function (section) {
		var rowCount = 0;
		if (this.data() != null) {
			var widget = this.data()[section];
			if (widget.requiresFullRowWhenDisplaying()) {
				rowCount = widget.totalNumberOfItems() * this._numberOfColumns;
			} else {
				rowCount = widget.totalNumberOfItems();
			}
		}
		if (rowCount == 0) {
			rowCount = 1;
		}
		return rowCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardWidgetDataSourceHelper::ResolveRowCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardWidgetDataSourceHelper::GetSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	getSectionHeaderCell: function (gridView, section) {
		var cell = null;
		if (this.data() != null) {
			var widget = this.data()[section];
			var key = widget.type();
			cell = gridView.dequeueReusableCellWithIdentifier(key);
			if (cell == null) {
				if (key.equals($.ig.EMBoardContentWidget.prototype.typeName)) {
					cell = new $.ig.SPEvoBoardSectionContentWidgetHeaderCell(key);
				} else if (key.equals($.ig.EMBoardGoalsWidget.prototype.typeName)) {
					cell = new $.ig.SPEvoBoardSectionGoalsWidgetHeaderCell(key);
				} else if (key.equals($.ig.EMBoardTasksWidget.prototype.typeName)) {
					cell = new $.ig.SPEvoBoardSectionTasksWidgetHeaderCell(key);
				} else if (key.equals($.ig.EMBoardNotesWidget.prototype.typeName)) {
					cell = new $.ig.SPEvoBoardSectionNotesWidgetHeaderCell(key);
				}
				cell.isExpanded(true);
				cell.setOverflowVisiblity(true);
			} else {
				cell.isExpanded(!this.isSectionCollapsed(section));
			}
			cell.data(this.data()[section]);
		}
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardWidgetDataSourceHelper::GetSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardWidgetDataSourceHelper', $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardWidgetDataSourceHelper" />*/

/*<BeginType Name="Infragistics.SPEvoTaskDSH" />*/

$.ig.util.defType('SPEvoTaskDSH', 'CPGridViewSingleFieldDynamicColumnDataSourceHelper', {
	__task: null,
	__notifyTaskChangedDelegate: null,
	init: function (notifyTaskChangedDelegate) {
		$.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.init.call(this, 0, new $.ig.CPGridViewColumnDefinition(1));
		this.__notifyTaskChangedDelegate = notifyTaskChangedDelegate;
		this.supportsStretchRows(true);
		this.alwaysDisplaySectionHeaders(true);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDSH::SetTask(Infragistics.EMTask)" />*/
	setTask: function (task) {
		var $self = this;
		this.__task = task;
		this._rowHeightListener = function (r, s) {
			return $self.heightForRowInSection(r, s);
		};
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDSH::SetTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::GetNumberOfSectionsInGrid()" />*/
	getNumberOfSectionsInGrid: function () {
		return 5;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::GetNumberOfSectionsInGrid()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::HeightForRowInSection(System.Int32, System.Int32)" />*/
	heightForRowInSection: function (r, s) {
		if (s == 0) {
			return $.ig.NativeUIUtility.prototype.utility().densify(150);
		}
		return $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::HeightForRowInSection(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.SPEvoTaskDSH::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	resolveDataObjectForRow: function (path) {
		return $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.resolveDataObjectForRow.call(this, path);
	}
	/*<EndMethod Name="System.Object Infragistics.SPEvoTaskDSH::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::ResolveRowCount(System.Int32)" />*/
	resolveRowCount: function (section) {
		if (this.__task == null) {
			return 0;
		}
		if (section == 0) {
			return 1 * this._numberOfColumns;
		} else if (section == 1) {
			if (this.__task.parentId() != null) {
				return 0;
			}
			if (this.__task.subTasks().length == 0) {
				return 1 * this._numberOfColumns;
			} else {
				return this.__task.subTasks().length * this._numberOfColumns;
			}
		} else if (section == 2) {
		} else if (section == 3) {
		} else if (section == 4) {
		}
		return 1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskDSH::ResolveRowCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::IsStretchRow(System.Int32, System.Int32)" />*/
	isStretchRow: function (row, section) {
		return (section == 0 || section == 1);
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::IsStretchRow(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskDSH::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	getCell: function (gridView, path) {
		if (path._sectionIndex == 0) {
			var cell = gridView.dequeueReusableCellWithIdentifier("details");
			if (cell == null) {
				cell = new $.ig.SPEvoTaskDetailsCell("details");
			}
			cell._notifyTaskChangedDelegate = this.__notifyTaskChangedDelegate;
			cell.data(this.__task);
			return cell;
		} else if (path._sectionIndex == 1) {
			var cell1 = gridView.dequeueReusableCellWithIdentifier("subtask");
			if (cell1 == null) {
				cell1 = new $.ig.SPEvoTaskWidgetCell("subtask", false);
			}
			if (this.__task.subTasks().length > 0) {
				cell1.data(this.__task.subTasks()[path._rowIndex]);
			}
			return cell1;
		}
		return $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.getCell.call(this, gridView, path);
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskDSH::GetCell(Infragistics.CPGridView, Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::DisplayHeaderForSection(Infragistics.CPGridView, System.Int32)" />*/
	displayHeaderForSection: function (gridView, section) {
		if (section == 1 && this.__task.parentId() != null) {
			return false;
		}
		return section != 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::DisplayHeaderForSection(Infragistics.CPGridView, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDSH::UpdateSectionExpandedState(System.Int32, System.Boolean)" />*/
	updateSectionExpandedState: function (section, isExpanded) {
		if (section == 1) {
			this.__task.areSubtasksExpanded(isExpanded);
		} else if (section == 2) {
			this.__task.areAttachmentsExpanded(isExpanded);
		} else if (section == 3) {
			this.__task.isSubscribeExpanded(isExpanded);
		} else if (section == 4) {
			this.__task.areTagsExpanded(isExpanded);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDSH::UpdateSectionExpandedState(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::IsSectionCollapsed(System.Int32)" />*/
	isSectionCollapsed: function (section) {
		if (section == 0) {
			return false;
		} else if (section == 1) {
			return !this.__task.areSubtasksExpanded();
		} else if (section == 2) {
			return !this.__task.areAttachmentsExpanded();
		} else if (section == 3) {
			return !this.__task.isSubscribeExpanded();
		} else if (section == 4) {
			return !this.__task.areTagsExpanded();
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoTaskDSH::IsSectionCollapsed(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskDSH::GetSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	getSectionHeaderCell: function (gridView, section) {
		var cell = gridView.dequeueReusableCellWithIdentifier("section");
		if (cell == null) {
			cell = new $.ig.CPGridViewExpandableCell("section");
			cell.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
			cell.setIconOutline(true);
		}
		var title = null;
		var icon = null;
		if (section == 1) {
			title = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.subtasks);
			icon = $.ig.EMIcons.prototype.icons().getTasksIcon();
		} else if (section == 2) {
			title = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.attachments);
			icon = $.ig.EMIcons.prototype.icons().getFileIcon();
		} else if (section == 3) {
			title = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.subscribe);
			icon = $.ig.EMIcons.prototype.icons().getEyeIcon();
		} else if (section == 4) {
			title = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.tags);
			icon = $.ig.EMIcons.prototype.icons().getTagIcon();
		}
		cell.isExpanded(!this.isSectionCollapsed(section));
		cell.textLabel().setText(title);
		cell.setIcon(icon);
		cell.data(null);
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskDSH::GetSectionHeaderCell(Infragistics.CPGridView, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskDSH', $.ig.CPGridViewSingleFieldDynamicColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskDSH" />*/

/*<BeginType Name="Infragistics.SPEvoTasksDSH" />*/

$.ig.util.defType('SPEvoTasksDSH', 'CPGridViewSingleFieldMultiColumnDataSourceHelper', {
	init: function (columnDefinition) {
		$.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.init.call(this, 0, columnDefinition);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTasksDSH::ResolveRowCount(System.Int32)" />*/
	resolveRowCount: function (section) {
		return $.ig.EMTask.prototype.resolveTotalNumberOfTasks(this.data());
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTasksDSH::ResolveRowCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.SPEvoTasksDSH::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	resolveDataObjectForRow: function (path) {
		return $.ig.EMTask.prototype.resolveTaskAtOverallIndex(path._rowIndex, this.data());
	}
	/*<EndMethod Name="System.Object Infragistics.SPEvoTasksDSH::ResolveDataObjectForRow(Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPCellPath Infragistics.SPEvoTasksDSH::MoveItem(Infragistics.CPCellPath, Infragistics.CPCellPath)" />*/
	moveItem: function (from, to) {
		var fromTask = this.resolveDataObjectForRow(from);
		var toTask = this.resolveDataObjectForRow(to);
		if (fromTask.parentId() == null && toTask.parentId() == null) {
			var actualFrom = this.data().indexOf(fromTask);
			var actualTo = this.data().indexOf(toTask);
			this.swapData(this.data(), actualFrom, actualTo);
			if (!toTask.isCollapsed()) {
				if (actualFrom < actualTo) {
					to = new $.ig.CPCellPath(1, to._rowIndex + toTask.subTasks().length, to._sectionIndex, 0);
				}
			}
			return to;
		} else if (fromTask.parentId() != null && fromTask.parentId().equals(toTask.parentId())) {
			var count = this.data().length;
			var parentTask = null;
			for (var i = 0; i < count; i++) {
				var task = this.data()[i];
				if (task.identifier() == fromTask.parentId()) {
					parentTask = task;
					break;
				}
			}
			if (parentTask != null) {
				var subTasks = parentTask.subTasks();
				var actualFrom1 = subTasks.indexOf(fromTask);
				var actualTo1 = subTasks.indexOf(toTask);
				this.swapData(subTasks, actualFrom1, actualTo1);
				return to;
			}
		}
		return from;
	}
	/*<EndMethod Name="Infragistics.CPCellPath Infragistics.SPEvoTasksDSH::MoveItem(Infragistics.CPCellPath, Infragistics.CPCellPath)" />*/
	,
	$type: new $.ig.Type('SPEvoTasksDSH', $.ig.CPGridViewSingleFieldMultiColumnDataSourceHelper.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTasksDSH" />*/

/*<BeginType Name="Infragistics.SPEvoBarSelectorBaseViewController" />*/

$.ig.util.defType('SPEvoBarSelectorBaseViewController', 'SPEvoSelectorViewController', {
	__depth: 0,
	__action: null,
	init: function (depth, action) {
		$.ig.SPEvoSelectorViewController.prototype.init.call(this);
		this.__depth = depth;
		this.__action = action;
	},
	/*<BeginProperty Name="Infragistics.SPEvoSelectorDepth Infragistics.SPEvoBarSelectorBaseViewController::Depth()" />*/
	depth: function () {
		return this.__depth;
	}
	/*<EndProperty Name="Infragistics.SPEvoSelectorDepth Infragistics.SPEvoBarSelectorBaseViewController::Depth()" />*/
	,
	/*<BeginProperty Name="Infragistics.DoubleObjectBlock Infragistics.SPEvoBarSelectorBaseViewController::Action()" />*/
	action: function () {
		return this.__action;
	}
	/*<EndProperty Name="Infragistics.DoubleObjectBlock Infragistics.SPEvoBarSelectorBaseViewController::Action()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.SPEvoSelectorViewController.prototype.viewDidLoad.call(this);
		this.grid()._rowHeight = this.grid()._sectionHeaderHeight = $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
		this.grid()._rowSeparatorHeight = $.ig.NativeUIUtility.prototype.utility().densify(1);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::ViewDidLoad()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoBarSelectorBaseViewController::SupportsAdding()" />*/
	supportsAdding: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoBarSelectorBaseViewController::SupportsAdding()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoBarSelectorBaseViewController::AddTitle()" />*/
	addTitle: function () {
		return "";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBarSelectorBaseViewController::AddTitle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::AddClicked(Infragistics.CPGridViewCellBase)" />*/
	addClicked: function (cell) {
		var $self = this;
		$.ig.CPPopupManager.prototype.showTextBoxPopup3(cell, this.addTitle(), function (o) {
			$self.checkItemName(o);
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::AddClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::CheckItemName(System.String)" />*/
	checkItemName: function (name) {
		if (name != null) {
			name = $.ig.NativeStringUtility.prototype.trim(name);
			if (name.length > 0) {
				this.addItem(name);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::CheckItemName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::AddItem(System.String)" />*/
	addItem: function (name) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBarSelectorBaseViewController::AddItem(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoBarSelectorBaseViewController::CreateDSH()" />*/
	createDSH: function () {
		var $self = this;
		return new $.ig.SPEvoAddItemDataSourceHelper(this.supportsAdding() ? function (o) {
			$self.addClicked(o);
		} : null, this.addTitle(), new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			return $self.createCell(identifier);
		}));
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoBarSelectorBaseViewController::CreateDSH()" />*/
	,
	$type: new $.ig.Type('SPEvoBarSelectorBaseViewController', $.ig.SPEvoSelectorViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBarSelectorBaseViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionSelectorViewController" />*/

$.ig.util.defType('SPEvoBoardSectionSelectorViewController', 'SPEvoBarSelectorBaseViewController', {
	__boardId: null,
	init: function (boardId, depth, action) {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.init.call(this, depth, action);
		this.__boardId = boardId;
	},
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardSectionSelectorViewController::SelectorTitle()" />*/
	selectorTitle: function () {
		return "Which Section?";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardSectionSelectorViewController::SelectorTitle()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoBoardSectionSelectorViewController::SupportsAdding()" />*/
	supportsAdding: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoBoardSectionSelectorViewController::SupportsAdding()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.viewDidLoad.call(this);
		$.ig.EMBoardManager.prototype.registerForBoardUpdateNotifications("BoardSectionSelector", this.__boardId, this);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.boardSectionSelectorScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::ViewDidLoad()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardSectionSelectorViewController::AddTitle()" />*/
	addTitle: function () {
		return this.localizeText($.ig.EMLocalizationKeys.prototype.addSection);
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardSectionSelectorViewController::AddTitle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::AddItem(System.String)" />*/
	addItem: function (name) {
		var board = $.ig.EMBoardManager.prototype.resolveBoard(this.__boardId);
		var section = new $.ig.EMBoardSection(1, board.identifier());
		section.title(name);
		board.addSection(section);
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sectionAddedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoard(board, message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::AddItem(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (c) {
		var cell = c;
		var section = cell.data();
		cell.textLabel().setText(section.resolveTitle());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var section = cell.data();
		if (this.depth() == $.ig.SPEvoSelectorDepth.prototype.section) {
			if (this.action() != null) {
				this.action()(section.boardId(), section);
				this.close();
			}
		} else {
			this.navigationController().pushViewController(new $.ig.SPEvoBoardSectionWidgetSelectorViewController(this.__boardId, section.identifier(), this.depth(), this.action()), true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	updatedBoardReceived: function (board) {
		this.setData(board.sections());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionSelectorViewController::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionSelectorViewController', $.ig.SPEvoBarSelectorBaseViewController.prototype.$type, [$.ig.EMBoardDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionSelectorViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSectionWidgetSelectorViewController" />*/

$.ig.util.defType('SPEvoBoardSectionWidgetSelectorViewController', 'SPEvoBarSelectorBaseViewController', {
	__boardId: null,
	__sectionId: null,
	init: function (boardId, sectionId, depth, action) {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.init.call(this, depth, action);
		this.__boardId = boardId;
		this.__sectionId = sectionId;
	},
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardSectionWidgetSelectorViewController::SelectorTitle()" />*/
	selectorTitle: function () {
		return "Select Widget";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardSectionWidgetSelectorViewController::SelectorTitle()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoBoardSectionWidgetSelectorViewController::SupportsAdding()" />*/
	supportsAdding: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoBoardSectionWidgetSelectorViewController::SupportsAdding()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardSectionWidgetSelectorViewController::AddTitle()" />*/
	addTitle: function () {
		return this.localizeText($.ig.EMLocalizationKeys.prototype.addContentWidget);
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardSectionWidgetSelectorViewController::AddTitle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::AddItem(System.String)" />*/
	addItem: function (name) {
		var board = $.ig.EMBoardManager.prototype.resolveBoard(this.__boardId);
		var section = board.getSectionById(this.__sectionId);
		var widget = new $.ig.EMBoardContentWidget(1);
		widget.title(name);
		section.addWidget(widget);
		var message = this.localizeText($.ig.EMLocalizationKeys.prototype.widgetAddedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoardById(section.boardId(), message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::AddItem(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.viewDidLoad.call(this);
		$.ig.EMBoardManager.prototype.registerForBoardUpdateNotifications("BoardWigetSelector", this.__boardId, this);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.boardWidgetSelectorScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (c) {
		var cell = c;
		var widget = cell.data();
		cell.textLabel().setText(widget.title());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.cellClicked.call(this, cell);
		var widget = cell.data();
		if (this.depth() == $.ig.SPEvoSelectorDepth.prototype.contentWidget) {
			if (this.action() != null) {
				this.action()(this.__boardId, widget);
				this.close();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	updatedBoardReceived: function (board) {
		var section = board.getSectionById(this.__sectionId);
		if (section != null) {
			var data = new $.ig.Array();
			var widgets = section.widgets();
			for (var i = 0; i < widgets.length; i++) {
				var widget = widgets[i];
				if (this.depth() == $.ig.SPEvoSelectorDepth.prototype.contentWidget && widget.type().equals($.ig.EMBoardContentWidget.prototype.typeName)) {
					data.add(widget);
				}
			}
			this.setData(data);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSectionWidgetSelectorViewController::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSectionWidgetSelectorViewController', $.ig.SPEvoBarSelectorBaseViewController.prototype.$type, [$.ig.EMBoardDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSectionWidgetSelectorViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardSelectorViewController" />*/

$.ig.util.defType('SPEvoBoardSelectorViewController', 'SPEvoBarSelectorBaseViewController', {
	init: function (depth, action) {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.init.call(this, depth, action);
	},
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoBoardSelectorViewController::CreateDSH()" />*/
	createDSH: function () {
		return new $.ig.SPEvoBoardNavigatorDataSourceHelper(true, this);
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoBoardSelectorViewController::CreateDSH()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSelectorViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.viewDidLoad.call(this);
		this.setData($.ig.EMUserFileManager.prototype.getUserFile().teams());
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.boardSelectorScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSelectorViewController::ViewDidLoad()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardSelectorViewController::SelectorTitle()" />*/
	selectorTitle: function () {
		return "Which Board?";
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardSelectorViewController::SelectorTitle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		$.ig.SPEvoBarSelectorBaseViewController.prototype.cellClicked.call(this, cell);
		var board = cell.data();
		if (this.depth() == $.ig.SPEvoSelectorDepth.prototype.board) {
			if (this.action() != null) {
				this.action()(board.identifier(), board);
				this.close();
			}
		} else {
			this.navigationController().pushViewController(new $.ig.SPEvoBoardSectionSelectorViewController(board.identifier(), this.depth(), this.action()), true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardSelectorViewController::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardSelectorViewController', $.ig.SPEvoBarSelectorBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardSelectorViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardsRootViewController" />*/

$.ig.util.defType('SPEvoBoardsRootViewController', 'EMTeamsRootNavigatorViewController', {
	init: function () {
		$.ig.EMTeamsRootNavigatorViewController.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.SPEvoBoardsRootViewController::ResolveHomePath()" />*/
	resolveHomePath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_HOME;
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoBoardsRootViewController::ResolveHomePath()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPViewController Infragistics.SPEvoBoardsRootViewController::CreateVCToPush(System.String)" />*/
	createVCToPush: function (pathPart) {
		return new $.ig.SPEvoBoardViewController(pathPart);
	}
	/*<EndMethod Name="Infragistics.CPViewController Infragistics.SPEvoBoardsRootViewController::CreateVCToPush(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardsRootViewController::IsValidPathPart(System.String)" />*/
	isValidPathPart: function (pathPart) {
		return $.ig.EMUserFileManager.prototype.getUserFile().isValidBoard(pathPart);
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardsRootViewController::IsValidPathPart(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.EMTeamsNavigatorViewController Infragistics.SPEvoBoardsRootViewController::CreateNavVC()" />*/
	createNavVC: function () {
		return new $.ig.SPEvoBoardsViewController();
	}
	/*<EndMethod Name="Infragistics.EMTeamsNavigatorViewController Infragistics.SPEvoBoardsRootViewController::CreateNavVC()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardsRootViewController::DoesCurrentVCRepresentPathPart(System.String, Infragistics.CPViewController)" />*/
	doesCurrentVCRepresentPathPart: function (pathPart, vc) {
		var boardVc = vc;
		return (boardVc.boardId().equals(pathPart));
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardsRootViewController::DoesCurrentVCRepresentPathPart(System.String, Infragistics.CPViewController)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardsRootViewController', $.ig.EMTeamsRootNavigatorViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardsRootViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardsViewController" />*/

$.ig.util.defType('SPEvoBoardsViewController', 'EMTeamsNavigatorViewController', {
	init: function () {
		$.ig.EMTeamsNavigatorViewController.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.EMTeamNavigatorView Infragistics.SPEvoBoardsViewController::CreateNavigatorView()" />*/
	createNavigatorView: function () {
		return new $.ig.SPEvoBoardNavigatorView(false);
	}
	/*<EndMethod Name="Infragistics.EMTeamNavigatorView Infragistics.SPEvoBoardsViewController::CreateNavigatorView()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardsViewController', $.ig.EMTeamsNavigatorViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardsViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardViewController" />*/

$.ig.util.defType('SPEvoBoardViewController', 'SPEvoBaseViewController', {
	__boardID: null,
	__boardView: null,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoBoardViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoBoardViewController::HasNavBar()" />*/
	,
	init: function (boardId) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__boardID = boardId;
	},
	/*<BeginProperty Name="System.String Infragistics.SPEvoBoardViewController::BoardId()" />*/
	boardId: function () {
		return this.__boardID;
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoBoardViewController::BoardId()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.__boardView = new $.ig.SPEvoBoardView(this.__boardID, function () {
			$self.backAction();
		});
		this.view().addSubview(this.__boardView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardViewController::BackAction()" />*/
	backAction: function () {
		this.close();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardViewController::BackAction()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.view().measureView(this.__boardView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardViewController" />*/

/*<BeginType Name="Infragistics.SPEvoTaskViewerViewController" />*/

$.ig.util.defType('SPEvoTaskViewerViewController', 'SPEvoBaseViewController', {
	__blockingView: null,
	__headerArea: null,
	__backButton: null,
	__listView: null,
	__viewer: null,
	__teamId: null,
	__startTaskId: null,
	__putInAddMode: false,
	__viewerMode: false,
	__editMode: false,
	init: function (initNumber, teamId, putInAddMode) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__teamId = teamId;
		this.__putInAddMode = putInAddMode;
		this.__viewerMode = false;
	},
	init1: function (initNumber, task) {
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__teamId = task.teamId();
		this.__putInAddMode = false;
		this.__viewerMode = true;
		this.__startTaskId = task.identifier();
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::HasNavBar()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::HasTitleIcon()" />*/
	hasTitleIcon: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::HasTitleIcon()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskViewerViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::LoadSubviews()" />*/
	loadSubviews: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.loadSubviews.call(this);
		this.titleIcon($.ig.EMIcons.prototype.icons().getTasksIcon());
		this.title(this.localizeText($.ig.EMLocalizationKeys.prototype.tasks));
		this.addRightBarButtonItem($.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		}));
		this.__viewer = new $.ig.SPEvoTaskViewer();
		this.__viewer._itemSelectedBlock = function (o) {
			$self.viewerSelectionChanged(o);
		};
		this.view().addSubview(this.__viewer);
		this.__listView = new $.ig.SPEvoTasksListView(this.__teamId);
		this.__listView._itemSelectedBlock = function (o) {
			$self.listSelectionChanged(o);
		};
		this.__listView._editModeChanged = function (editMode) {
			$self.editModeChanged(editMode);
		};
		this.view().addSubview(this.__listView);
		this.__headerArea = new $.ig.CPView();
		this.__headerArea.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		$.ig.ThemeManager.prototype.currentTheme().applyBarShadowToView(this.__headerArea);
		this.view().addSubview(this.__headerArea);
		this.__backButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.UIPathIcons.prototype.icons().getBackButtonArrowIcon(), function (x, y) {
			$self.backButtonClicked();
		});
		this.__backButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__headerArea.addSubview(this.__backButton);
		this.__blockingView = new $.ig.CPInteractionView();
		this.__blockingView.isCaptureView(true);
		this.__blockingView.isHidden(true);
		this.__blockingView.highlightMode($.ig.CPInteractionViewMode.prototype.none);
		this.__blockingView.addClickHandler(function (x, y) {
			$self.__listView.exitEditMode();
		});
		this.__blockingView.setBackgroundColor($.ig.ColorUtility.prototype.createNativeColor(210, 0, 0, 0));
		this.view().addSubview(this.__blockingView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::LoadSubviews()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::EditModeChanged(System.Boolean)" />*/
	editModeChanged: function (val) {
		var $self = this;
		this.__editMode = val;
		this.__blockingView.isHidden(!val);
		if ($.ig.EMUtility.prototype.isLargeScreenMode()) {
			this.view().animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
				$self.view().measureView1($self.__blockingView, $self.__viewer.currentX(), $self.__viewer.currentY(), $self.__viewer.currentWidth(), $self.__viewer.currentHeight(), ($self.__editMode ? 1 : 0));
			}, null);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::EditModeChanged(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::BackButtonClicked()" />*/
	backButtonClicked: function () {
		this.updateViewerMode(false);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::BackButtonClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::UpdateViewerMode(System.Boolean)" />*/
	updateViewerMode: function (val) {
		var $self = this;
		this.__viewerMode = val;
		this.view().animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
			$self.layoutSubviews($self.view().currentWidth(), $self.view().currentHeight());
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::UpdateViewerMode(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::ViewerSelectionChanged(Infragistics.EMTask)" />*/
	viewerSelectionChanged: function (task) {
		this.__listView.itemSelected(task);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::ViewerSelectionChanged(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::ListSelectionChanged(Infragistics.EMTask)" />*/
	listSelectionChanged: function (task) {
		if (task.parentId() != null) {
			var parentIndex = $.ig.EMTask.prototype.resolveOverallIndexForTask(task.parentId(), this.__listView.getTasks());
			if (parentIndex != -1) {
				var parentTask = $.ig.EMTask.prototype.resolveTaskAtOverallIndex(parentIndex, this.__listView.getTasks());
				this.__viewer.setTasks(parentTask.subTasks());
			} else {
				this.__viewer.setTasks(new $.ig.Array());
			}
		} else {
			this.__viewer.setTasks(this.__listView.getTasks());
		}
		this.__viewer.itemSelected(task);
		if (!$.ig.EMUtility.prototype.isLargeScreenMode() && !this.__viewerMode) {
			this.updateViewerMode(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::ListSelectionChanged(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::Loaded()" />*/
	loaded: function () {
		$.ig.SPEvoBaseViewController.prototype.loaded.call(this);
		$.ig.ProgressHelper.prototype.showProgress1(this.view());
		$.ig.EMTasksManager.prototype.registerForTasksNotifications("TasksViewer", this.__teamId, this);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::Loaded()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::TasksReceived(Infragistics.CPList)" />*/
	tasksReceived: function (tasks) {
		this.__listView.setTasks(tasks);
		if (this.view().currentWidth() > 0 && this.view().currentHeight() > 0) {
			this.layoutSubviews(this.view().currentWidth(), this.view().currentHeight());
		}
		var selectedTask = this.__startTaskId == null ? this.__viewer._selectedTask : this.__startTaskId;
		this.__startTaskId = null;
		if (selectedTask == null && tasks.length > 0) {
			selectedTask = (tasks[0]).identifier();
		}
		if (selectedTask != null) {
			var index = $.ig.EMTask.prototype.resolveOverallIndexForTask(selectedTask, tasks);
			if (index == -1) {
				index = this.__viewer.resolveCurrentScrolledIndex();
				if (index >= tasks.length) {
					index = tasks.length - 1;
				}
			}
			if (index != -1) {
				var task = $.ig.EMTask.prototype.resolveTaskAtOverallIndex(index, tasks);
				this.listSelectionChanged(task);
				this.viewerSelectionChanged(task);
			}
		}
		$.ig.ProgressHelper.prototype.hideProgress(this.view(), true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::TasksReceived(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		if ($.ig.EMUtility.prototype.isLargeScreenMode()) {
			var sidBarSize = $.ig.truncate(($.ig.ThemeManager.prototype.currentTheme().sideBarSize() * 1.5));
			this.__viewerMode = false;
			this.__headerArea.isHidden(true);
			this.__listView.isHidden(false);
			this.view().measureView(this.__listView, 0, 0, sidBarSize, h);
			this.view().measureView(this.__viewer, sidBarSize, 0, w - sidBarSize, h);
			this.view().measureView1(this.__blockingView, sidBarSize, 0, w - sidBarSize, h, (this.__editMode ? 1 : 0));
		} else {
			this.__headerArea.isHidden(false);
			var headerHeight = $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
			if (this.__viewerMode == true) {
				this.view().measureView(this.__listView, -w, 0, w, h);
				this.view().measureView(this.__headerArea, 0, 0, w, headerHeight);
				this.view().measureView(this.__viewer, 0, headerHeight, w, h - headerHeight);
			} else {
				this.view().measureView(this.__listView, 0, 0, w, h);
				this.view().measureView(this.__headerArea, w, 0, w, headerHeight);
				this.view().measureView(this.__viewer, w, headerHeight, w, h - headerHeight);
			}
			this.__backButton.setIconSize($.ig.ThemeManager.prototype.currentTheme().resolveIconSizeForSize(headerHeight));
			this.view().measureView(this.__backButton, 0, 0, headerHeight, headerHeight);
			this.view().measureView1(this.__blockingView, 0, 0, 0, 0, 0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskViewerViewController', $.ig.SPEvoBaseViewController.prototype.$type, [$.ig.EMTasksDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoTaskViewerViewController" />*/

/*<BeginType Name="Infragistics.SPEvoBoardAddSectionButtonView" />*/

$.ig.util.defType('SPEvoBoardAddSectionButtonView', 'CPGridViewCellBase', {
	__addButton: null,
	__action: null,
	init: function (addAction) {
		var $self = this;
		$.ig.CPGridViewCellBase.prototype.init.call(this, "");
		this.__action = addAction;
		this.__addButton = new $.ig.PathIconButton(0);
		this.__addButton.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__addButton.setIcon($.ig.EMIcons.prototype.icons().getPlusIcon());
		this.__addButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__addButton.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		this.__addButton.addClickHandler(function (x, y) {
			$self.addClicked();
		});
		this.__addButton.clipToBounds(true);
		this.addSubview(this.__addButton);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoBoardAddSectionButtonView::HandlesUIInteraction()" />*/
	handlesUIInteraction: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoBoardAddSectionButtonView::HandlesUIInteraction()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardAddSectionButtonView::AddClicked()" />*/
	addClicked: function () {
		if (this.__action != null) {
			this.__action();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardAddSectionButtonView::AddClicked()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPViewBase Infragistics.SPEvoBoardAddSectionButtonView::CreateLine()" />*/
	createLine: function () {
		var line = new $.ig.CPViewBase();
		line.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		this.addSubview(line);
		return line;
	}
	/*<EndMethod Name="Infragistics.CPViewBase Infragistics.SPEvoBoardAddSectionButtonView::CreateLine()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardAddSectionButtonView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPGridViewCellBase.prototype.sizeChanged.call(this, w, h);
		var padding = $.ig.truncate((w * 0.2));
		var buttonSize = w;
		var buttonTop = $.ig.intDivide(h, 2) - $.ig.intDivide(buttonSize, 2);
		this.measureView(this.__addButton, $.ig.intDivide(w, 2) - $.ig.intDivide(buttonSize, 2), buttonTop, buttonSize, buttonSize);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardAddSectionButtonView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardAddSectionButtonView', $.ig.CPGridViewCellBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardAddSectionButtonView" />*/

/*<BeginType Name="Infragistics.SPEvoBoardNavigatorView" />*/

$.ig.util.defType('SPEvoBoardNavigatorView', 'EMTeamNavigatorView', {
	init: function (isList) {
		$.ig.EMTeamNavigatorView.prototype.init.call(this, isList);
	},
	/*<BeginMethod Name="Infragistics.EMTeamNavigatorDataSourceHelper Infragistics.SPEvoBoardNavigatorView::CreateDSH()" />*/
	createDSH: function () {
		return new $.ig.SPEvoBoardNavigatorDataSourceHelper(false, this);
	}
	/*<EndMethod Name="Infragistics.EMTeamNavigatorDataSourceHelper Infragistics.SPEvoBoardNavigatorView::CreateDSH()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::UpdateNavigation(Infragistics.CPList)" />*/
	updateNavigation: function (parts) {
		this._gridView.deselectAll();
		var root = parts[0];
		if (root.equals($.ig.SPEvoRootViewController.prototype.pATH_TEAMS)) {
			if (parts.length > 1) {
				var pathId = parts[1];
				this.selectBoard(pathId);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::UpdateNavigation(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::SelectBoard(System.String)" />*/
	selectBoard: function (pathId) {
		var userFile = $.ig.EMUserFileManager.prototype.getUserFile();
		if (userFile != null) {
			var teams = userFile.teams();
			var teamCount = teams.length;
			for (var ti = 0; ti < teamCount; ti++) {
				var team = teams[ti];
				var boards = team.boards();
				var count = boards.length;
				for (var i = 0; i < count; i++) {
					var board = boards[i];
					if (board.identifier().equals(pathId)) {
						var path = new $.ig.CPCellPath(1, i, ti, 0);
						this._gridView.selectCellAtPath(path, false);
						if (this._dSH.isSectionCollapsed(path._sectionIndex)) {
							this._dSH.updateSectionExpandedState(path._sectionIndex, true);
							this._gridView.updateData(false);
						}
						break;
					}
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::SelectBoard(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var board = cell.data();
		$.ig.CPNavigatorManager.prototype.navigateTo($.ig.SPEvoRootViewController.prototype.pATH_TEAMS + "/" + board.identifier(), true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AskToArchiveBoard(Infragistics.EMBoard)" />*/
	askToArchiveBoard: function (board) {
		var $self = this;
		var title = board.name();
		$.ig.CPPopupManager.prototype.ask(this, "Archive  " + title, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.areYouSure), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.archive), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cancel), $.ig.ThemeManager.prototype.currentTheme().nativeErrorColor(), board, function (obj) {
			$self.archiveBoard(obj);
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AskToArchiveBoard(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::ArchiveBoard(Infragistics.EMBoard)" />*/
	archiveBoard: function (board) {
		var request = new $.ig.InfragisticsDeleteTeamBoardRequest(board.teamId(), board.identifier(), function (r, result) {
			$.ig.EMUserFileManager.prototype.refreshUserFile();
		}, function (r, e) {
		});
		request.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::ArchiveBoard(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::RenameBoard(Infragistics.EMBoard, Infragistics.CPGridViewTextLabelCell)" />*/
	renameBoard: function (board, cell) {
		var $self = this;
		var tbc = new $.ig.CPGridViewTextBoxCell("x");
		tbc._indent = true;
		tbc.textView().setText(board.name());
		$.ig.CPPopupManager.prototype.showTextBoxPopup(cell, tbc, true, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.renameBoard), function (o) {
			$self.finishRenamingBoard(board, o, cell);
		}, function () {
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::RenameBoard(Infragistics.EMBoard, Infragistics.CPGridViewTextLabelCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::FinishRenamingBoard(Infragistics.EMBoard, System.String, Infragistics.CPGridViewTextLabelCell)" />*/
	finishRenamingBoard: function (board, name, cell) {
		if (name != null && name.length > 0 && !board.name().equals(name)) {
			cell.textLabel().setText(name);
			board.name(name);
			var request = new $.ig.InfragisticsAddOrUpdateBoardRequest(board, function (r, result) {
				$.ig.EMUserFileManager.prototype.refreshUserFile();
				$.ig.EMBoardManager.prototype.refreshBoard(board.identifier());
			}, function (r, e) {
			});
			request.execute();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::FinishRenamingBoard(Infragistics.EMBoard, System.String, Infragistics.CPGridViewTextLabelCell)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::ChatPreview(Infragistics.EMBoard)" />*/
	chatPreview: function (board) {
		var userId = $.ig.EMUserFileManager.prototype.getUserFile().identifier();
		var userName = $.ig.EMUserFileManager.prototype.getUserFile().displayName();
		var boardId = board.identifier();
		var boardName = board.name();
		var url = "/Chat?userId=" + userId + "&userName=" + userName + "&groupId=" + boardId + "&groupName=" + boardName;
		var json = new $.ig.CPJSONObject(1);
		json.setValueForKey("EmbedUrl", url);
		var cloudFile = new $.ig.GenericCloudFile(json);
		var vc = new $.ig.CloudFilePreviewViewController(cloudFile);
		$.ig.CPPopupManager.prototype.showModalDialog(this, vc, false);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::ChatPreview(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoBoardNavigatorView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		var $self = this;
		var list = new $.ig.Array();
		list.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getEditIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.rename), cell.data(), function (o) {
			$self.renameBoard(o, cell);
			return true;
		}));
		list.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getEditIcon(), "Chat (Preview)", cell.data(), function (o) {
			$self.chatPreview(o);
			return true;
		}));
		list.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getArchiveIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.archive), cell.data(), function (o) {
			$self.askToArchiveBoard(o);
			return true;
		}));
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoBoardNavigatorView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AddTeamOverflowItems(Infragistics.EMTeam, Infragistics.CPList)" />*/
	addTeamOverflowItems: function (team, list) {
		var $self = this;
		list.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getPlusIcon(), $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addBoard), team, function (o) {
			$self.addBoardToTeam(o);
			return true;
		}));
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AddTeamOverflowItems(Infragistics.EMTeam, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AddBoardToTeam(Infragistics.EMTeam)" />*/
	addBoardToTeam: function (team) {
		var $self = this;
		var teams = $.ig.EMUserFileManager.prototype.getUserFile().teams();
		var section = teams.indexOf(team);
		var row = team.boards().length;
		var temp = new $.ig.EMBoard(1);
		team.boards().add(temp);
		var newRow = new $.ig.CPCellPath(1, row, section, 0);
		var cells = new $.ig.Array();
		cells.add(newRow);
		cells.add(new $.ig.CPCellPath(1, row, section, $.ig.CPGridView.prototype.cPGRIDVIEWCELL_ROW_SEPARATOR_COLUMN_INDEX()));
		var animator = new $.ig.CPGridViewInsertRowAnimator(newRow);
		animator._completionBlock = function () {
			$self.askForNewBoardName(team, newRow);
		};
		this._gridView.insertCells(cells, animator);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AddBoardToTeam(Infragistics.EMTeam)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AskForNewBoardName(Infragistics.EMTeam, Infragistics.CPCellPath)" />*/
	askForNewBoardName: function (team, path) {
		var $self = this;
		var cell = this._gridView.cellAtPath(path);
		var tbc = new $.ig.CPGridViewTextBoxCell("x");
		tbc._indent = true;
		cell.isHidden(true);
		$.ig.CPPopupManager.prototype.showTextBoxPopup(cell, tbc, false, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addBoard), function (o) {
			$self.finishAddingBoard(team, o, path);
		}, function () {
			if (cell.isHidden() && cell._gridView != null) {
				cell.isHidden(false);
			}
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::AskForNewBoardName(Infragistics.EMTeam, Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::FinishAddingBoard(Infragistics.EMTeam, System.String, Infragistics.CPCellPath)" />*/
	finishAddingBoard: function (team, boardName, path) {
		if (boardName != null && boardName.length > 0) {
			var cell = this._gridView.cellAtPath(path);
			cell.textLabel().setText(boardName);
			var board = cell.data();
			board.name(boardName);
			board.teamId(team.identifier());
			cell.data(board);
			var request = new $.ig.InfragisticsAddOrUpdateBoardRequest(board, function (r, o) {
				$.ig.EMUserFileManager.prototype.refreshUserFile();
				$.ig.CPNavigatorManager.prototype.navigateTo1($.ig.SPEvoRootViewController.prototype.pATH_TEAMS, false, false);
				$.ig.CPNavigatorManager.prototype.pushPathPart(board.identifier(), true);
			}, function (r, e) {
			});
			$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryBoards, $.ig.EMGoogleAnalyticsConstants.prototype.actionCreate, "Id: " + board.identifier() + " , TeamId: " + board.teamId());
			request.execute();
		} else {
			team.boards().removeAt(team.boards().length - 1);
			this._gridView.updateData(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::FinishAddingBoard(Infragistics.EMTeam, System.String, Infragistics.CPCellPath)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardNavigatorView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('SPEvoBoardNavigatorView', $.ig.EMTeamNavigatorView.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoBoardNavigatorView" />*/

/*<BeginType Name="Infragistics.SPEvoBoardView" />*/

$.ig.util.defType('SPEvoBoardView', 'CPViewBase', {
	__headerArea: null,
	__headerSeparator: null,
	__nameLabel: null,
	__gridView: null,
	__dsh: null,
	__board: null,
	__boardId: null,
	__cardSection: null,
	__colWidth: null,
	__padding: 0,
	__backAction: null,
	__backButton: null,
	init: function (boardId, backAction) {
		var $self = this;
		$.ig.CPViewBase.prototype.init.call(this);
		this.__boardId = boardId;
		this.__headerArea = new $.ig.CPView();
		this.__headerArea.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		$.ig.ThemeManager.prototype.currentTheme().applyBarShadowToView(this.__headerArea);
		this.addSubview(this.__headerArea);
		this.__headerSeparator = new $.ig.CPViewBase();
		this.__headerSeparator.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainOutlineColor());
		this.addSubview(this.__headerSeparator);
		this.__nameLabel = new $.ig.CPLabel();
		this.__nameLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.addSubview(this.__nameLabel);
		this.__padding = $.ig.NativeUIUtility.prototype.utility().densify(10);
		this.__cardSection = new $.ig.SPEvoBoardSectionView(null);
		this.__cardSection.isHidden(true);
		this.addSubview(this.__cardSection);
		this.__gridView = new $.ig.CPGridView();
		this.__gridView.isHidden(true);
		this.__gridView._headerHeight = 0;
		this.__gridView.alwaysBounceHorizontal(true);
		this.__gridView._rowSeparatorHeight = 0;
		this.__gridView.alwaysBounceVertical(false);
		this.__gridView.clipToBounds(false);
		this.__gridView._scrollChangedBlock = function (x, y) {
			$self.gridScrollChanged(x, y);
		};
		this.addSubview(this.__gridView);
		var col = new $.ig.CPGridViewColumnDefinition(2, null, function (cellId) {
			return $self.createCell(cellId);
		});
		this.__colWidth = $.ig.CPColumnWidth.prototype.createWithPercentWidth(1);
		col.width(this.__colWidth);
		this.__dsh = new $.ig.SPEvoBoardSectionDSH(col, function () {
			$self.addSection();
		});
		this.__gridView.setDataSource(this.__dsh);
		this.__backAction = backAction;
		if (this.__backAction != null) {
			this.__backButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.UIPathIcons.prototype.icons().getBackButtonArrowIcon(), function (x, y) {
				$self.backClicked();
			});
			this.__backButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
			this.addSubview(this.__backButton);
		}
		$.ig.ProgressHelper.prototype.showProgress1(this);
		$.ig.EMBoardManager.prototype.registerForBoardUpdateNotifications("BoardView", boardId, this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::BackClicked()" />*/
	backClicked: function () {
		this.__backAction();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::BackClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::GridScrollChanged(System.Int32, System.Int32)" />*/
	gridScrollChanged: function (x, y) {
		var threshold = (this.__gridView.resolveActualColumnWith(0, $.ig.CPGridViewFixedColumnDirection.prototype.none) + this.__gridView._columnSpacing) - $.ig.NativeUIUtility.prototype.utility().densify(2);
		this.__cardSection.isHidden((x <= threshold));
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::GridScrollChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardView::CreateCell(System.String)" />*/
	createCell: function (identifier) {
		return new $.ig.SPEvoBoardSectionView(identifier);
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoBoardView::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		var headerHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		var font = null;
		var fontSizePercent = 0.35;
		var hasSep;
		var backButtonHidden = false;
		if ($.ig.EMUtility.prototype.isLargeScreenMode()) {
			backButtonHidden = true;
			this.__headerArea.isHidden(true);
			headerHeight = $.ig.truncate((headerHeight * 1.5));
			font = $.ig.ThemeManager.prototype.currentTheme().lightFont();
			fontSizePercent = 0.45;
			hasSep = true;
			this.__headerSeparator.isHidden(false);
		} else {
			hasSep = false;
			this.__headerSeparator.isHidden(true);
			this.__headerArea.isHidden(false);
			font = $.ig.ThemeManager.prototype.currentTheme().boldFont();
		}
		var headerPadding = $.ig.truncate((headerHeight * 0.25));
		var headerFontSize = $.ig.NativeUIUtility.prototype.utility().dedensify($.ig.truncate((headerHeight * fontSizePercent)));
		this.__nameLabel.setFont(headerFontSize, font);
		this.__nameLabel.calculateSizeToFit();
		var lw = this.__nameLabel.getCalculatedWidth();
		var lh = this.__nameLabel.getCalculatedHeight();
		var left = headerPadding;
		if (this.__backButton != null) {
			this.__backButton.isHidden(backButtonHidden);
			if (!backButtonHidden) {
				this.__backButton.setIconSize($.ig.ThemeManager.prototype.currentTheme().resolveIconSizeForSize(headerHeight));
				this.measureView(this.__backButton, 0, 0, headerHeight, headerHeight);
				left = headerHeight;
			}
		}
		this.measureView(this.__nameLabel, left, $.ig.intDivide(headerHeight, 2) - $.ig.intDivide(lh, 2), lw, lh);
		headerHeight += this.layoutAditionalHeaderContent(w, headerHeight, headerPadding, left + lw);
		this.measureView(this.__headerArea, 0, 0, w, headerHeight);
		var top = headerHeight;
		if (hasSep) {
			var sepSize = $.ig.NativeUIUtility.prototype.utility().densify(1);
			this.measureView(this.__headerSeparator, headerPadding, top, w - headerPadding, sepSize);
			top += sepSize;
		}
		var maxSpacing = $.ig.NativeUIUtility.prototype.utility().densify(20);
		this.__gridView._columnSpacing = $.ig.EMUtility.prototype.isLargeScreenMode() ? maxSpacing : $.ig.truncate(Math.min(w * 0.0125, maxSpacing));
		this.__colWidth._minimumWidth = Math.min(w - this.__gridView._columnSpacing * 2 - $.ig.ThemeManager.prototype.currentTheme().cellHeight(), $.ig.NativeUIUtility.prototype.utility().densify(310));
		top += this.__gridView._columnSpacing;
		var gridHeight = h - top - this.__gridView._columnSpacing;
		this.__gridView._rowHeight = gridHeight;
		this.measureView(this.__gridView, 0, top, w, gridHeight);
		this.layoutCardSection();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoBoardView::LayoutAditionalHeaderContent(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	layoutAditionalHeaderContent: function (w, headerHeight, headerPadding, titleWidth) {
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoBoardView::LayoutAditionalHeaderContent(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::LayoutCardSection()" />*/
	layoutCardSection: function () {
		this.measureView(this.__cardSection, this.__gridView._columnSpacing, this.__gridView.currentY(), this.__gridView.resolveActualColumnWith(0, $.ig.CPGridViewFixedColumnDirection.prototype.none), this.__gridView.currentHeight());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::LayoutCardSection()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	updatedBoardReceived: function (board) {
		this.__board = board;
		this.__dsh.data(board.sections());
		this.__gridView.isHidden(false);
		this.__gridView.updateData(true);
		this.__nameLabel.setText(this.resolveTitle(board));
		if (this.currentWidth() > 0 && this.currentHeight() > 0) {
			this.sizeChanged(this.currentWidth(), this.currentHeight());
		}
		$.ig.ProgressHelper.prototype.hideProgress(this, true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::UpdatedBoardReceived(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoBoardView::ResolveTitle(Infragistics.EMBoard)" />*/
	resolveTitle: function (board) {
		return board.name();
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoBoardView::ResolveTitle(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::UpdateBoard(System.String)" />*/
	updateBoard: function (message) {
		$.ig.EMBoardManager.prototype.updateBoard(this.__board, message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::UpdateBoard(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoBoardView::AddSection()" />*/
	addSection: function () {
		var $self = this;
		var section = new $.ig.EMBoardSection(1, this.__board.identifier());
		this.__board.addSection(section);
		this.__dsh.data(this.__board.sections());
		var animator = new $.ig.SPEvoAddSectionCellAnimator(true);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categorySections, $.ig.EMGoogleAnalyticsConstants.prototype.actionCreate, section.identifier());
		animator._completionBlock = function () {
			var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.sectionAddedNotificationMessage);
			$self.updateBoard(message);
			$self.layoutCardSection();
		};
		this.__gridView.insertCell(new $.ig.CPCellPath(1, 0, 0, this.__board.sections().length - 1), animator);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoBoardView::AddSection()" />*/
	,
	$type: new $.ig.Type('SPEvoBoardView', $.ig.CPViewBase.prototype.$type, [$.ig.EMBoardDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoBoardView" />*/

/*<BeginType Name="Infragistics.SPEvoPersonalBoardView" />*/

$.ig.util.defType('SPEvoPersonalBoardView', 'SPEvoBoardView', {
	__providersWidget: null,
	init: function () {
		$.ig.SPEvoBoardView.prototype.init.call(this, $.ig.EMPersonalBoard.prototype.personalBoardIdentifier(), null);
		this.__providersWidget = new $.ig.SPEvoCloudProvidersListView();
		this.addSubview(this.__providersWidget);
		$.ig.EMUserFileManager.prototype.registerUserFileNotifications("Home", this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoPersonalBoardView::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	updatedUserFileReceived: function (userFile) {
		if (this.currentHeight() > 0 && this.currentWidth() > 0) {
			this.sizeChanged(this.currentWidth(), this.currentHeight());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoPersonalBoardView::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoPersonalBoardView::ResolveTitle(Infragistics.EMBoard)" />*/
	resolveTitle: function (board) {
		return $.ig.EMUserFileManager.prototype.getUserFile().displayName();
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoPersonalBoardView::ResolveTitle(Infragistics.EMBoard)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoPersonalBoardView::LayoutAditionalHeaderContent(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	layoutAditionalHeaderContent: function (w, headerHeight, headerPadding, titleWidth) {
		var providersHeight = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		var providersLimit = (providersHeight * 7) * 1.5;
		var cw = this.__providersWidget.calculateWidth(providersHeight);
		if (w - headerPadding - titleWidth - cw >= 0) {
			this.measureView(this.__providersWidget, w - cw, $.ig.intDivide(headerHeight, 2) - $.ig.intDivide(providersHeight, 2), cw, providersHeight);
		} else {
			this.measureView(this.__providersWidget, 0, headerHeight, w, providersHeight);
			return providersHeight;
		}
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoPersonalBoardView::LayoutAditionalHeaderContent(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoPersonalBoardView', $.ig.SPEvoBoardView.prototype.$type, [$.ig.EMUserFileDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoPersonalBoardView" />*/

/*<BeginType Name="Infragistics.SPEvoTaskActivityView" />*/

$.ig.util.defType('SPEvoTaskActivityView', 'CPViewBase', {
	init: function () {
		$.ig.CPViewBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskActivityView::SetTask(Infragistics.EMTask)" />*/
	setTask: function (task) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskActivityView::SetTask(Infragistics.EMTask)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskActivityView', $.ig.CPViewBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskActivityView" />*/

/*<BeginType Name="Infragistics.SPEvoTaskDetailsView" />*/

$.ig.util.defType('SPEvoTaskDetailsView', 'CPViewBase', {
	__gridView: null,
	init: function (notifyTaskChangedDelegate) {
		$.ig.CPViewBase.prototype.init.call(this);
		this.__gridView = new $.ig.CPDynamicColumnGridView(1, new $.ig.SPEvoTaskDSH(notifyTaskChangedDelegate));
		this.addSubview(this.__gridView);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsView::SetTask(Infragistics.EMTask)" />*/
	setTask: function (task) {
		(this.__gridView.dataSourceHelper()).setTask(task);
		this.__gridView.setData(null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsView::SetTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskDetailsView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		var padding = $.ig.NativeUIUtility.prototype.utility().densify(20);
		this.measureView(this.__gridView, padding, padding, w - padding * 2, h - padding * 2);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskDetailsView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskDetailsView', $.ig.CPViewBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskDetailsView" />*/

/*<BeginType Name="Infragistics.SPEvoTaskViewerBase" />*/

$.ig.util.defType('SPEvoTaskViewerBase', 'CPView', {
	_gridView: null,
	__dsh: null,
	_itemSelectedBlock: null,
	_selectedTask: null,
	init: function () {
		var $self = this;
		$.ig.CPView.prototype.init.call(this);
		this._gridView = new $.ig.CPGridView();
		this._gridView._headerHeight = 0;
		this.setupGrid(this._gridView);
		this.addGridView();
		this.__dsh = this.createDSH(new $.ig.CPGridViewColumnDefinition(2, this, function (cellId) {
			return $self.createCell(cellId);
		}));
		this._gridView.setDataSource(this.__dsh);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::AddGridView()" />*/
	addGridView: function () {
		this.addSubview(this._gridView);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::AddGridView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::ItemSelected(Infragistics.EMTask)" />*/
	itemSelected: function (task) {
		this._selectedTask = task.identifier();
		this.handleSelection(task);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::ItemSelected(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::HandleSelection(Infragistics.EMTask)" />*/
	handleSelection: function (index) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::HandleSelection(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::NotifySelection(Infragistics.EMTask)" />*/
	notifySelection: function (task) {
		if (this._itemSelectedBlock != null) {
			this._itemSelectedBlock(task);
		}
		this._selectedTask = task.identifier();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::NotifySelection(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskViewerBase::CreateCell(System.String)" />*/
	createCell: function (identifier) {
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskViewerBase::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SetupGrid(Infragistics.CPGridView)" />*/
	setupGrid: function (grid) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SetupGrid(Infragistics.CPGridView)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTaskViewerBase::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	createDSH: function (col) {
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTaskViewerBase::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewerBase::GetScrollXPos(System.Int32)" />*/
	getScrollXPos: function (index) {
		if (index == -1) {
			return 0;
		}
		return this._gridView.getXForCell(index);
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewerBase::GetScrollXPos(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewerBase::GetScrollYPos(System.Int32)" />*/
	getScrollYPos: function (index) {
		if (index == -1) {
			return 0;
		}
		return this._gridView.getYForCell(index, 0);
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewerBase::GetScrollYPos(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::ScrollTo(System.Int32, Infragistics.ExecutionBlock)" />*/
	scrollTo: function (index, finished) {
		var x = this.getScrollXPos(index);
		var y = this.getScrollYPos(index);
		var yMaxLimit = this._gridView.getContentHeight() - this._gridView.currentHeight();
		var yMinLimit = -this._gridView.topInset();
		if (y >= yMaxLimit) {
			y = yMaxLimit;
		}
		if (y <= yMinLimit) {
			y = yMinLimit;
		}
		var xMaxLimit = this._gridView.getContentWidth() - this._gridView.currentWidth();
		var xMinLimit = -this._gridView.leftInset();
		if (x >= xMaxLimit) {
			x = xMaxLimit;
		}
		if (x <= xMinLimit) {
			x = xMinLimit;
		}
		this._gridView.scrollTo1(x, y, $.ig.ThemeManager.prototype.currentTheme().animationDuration(), finished);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::ScrollTo(System.Int32, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoTaskViewerBase::GetTasks()" />*/
	getTasks: function () {
		return this._gridView.getDataSource().data();
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoTaskViewerBase::GetTasks()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SetTasks(Infragistics.CPList)" />*/
	setTasks: function (tasks) {
		this.__dsh.data(tasks);
		this._gridView.updateData(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SetTasks(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPView.prototype.sizeChanged.call(this, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoTaskViewerBase::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoTaskViewerBase::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewerBase::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskViewerBase', $.ig.CPView.prototype.$type, [$.ig.CPGridViewCellSetupDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoTaskViewerBase" />*/

/*<BeginType Name="Infragistics.SPEvoTasksListView" />*/

$.ig.util.defType('SPEvoTasksListView', 'SPEvoTaskViewerBase', {
	_editModeChanged: null,
	__selectMode: false,
	__addMode: false,
	__addNewBox: null,
	__addButton: null,
	__collapseAllButton: null,
	__selectButton: null,
	__filterButton: null,
	__dueDateButton: null,
	__assignButton: null,
	__tagButton: null,
	__doneButton: null,
	__cancelButton: null,
	__backButton: null,
	__titleLabel: null,
	__container: null,
	__headerBackground: null,
	__teamId: null,
	__insertHereView: null,
	init: function (teamId) {
		var $self = this;
		$.ig.SPEvoTaskViewerBase.prototype.init.call(this);
		this.__teamId = teamId;
		this.__checkStateLookup = new $.ig.Dictionary(0);
		$.ig.ThemeManager.prototype.currentTheme().applySideBarShadowToView(this);
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__container = new $.ig.CPViewBase();
		this.__container.clipToBounds(true);
		this.addSubview(this.__container);
		this.__container.addSubview(this._gridView);
		this.__headerBackground = new $.ig.CPViewBase();
		this.__headerBackground.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainBackgroundColor());
		this.__container.addSubview(this.__headerBackground);
		this.__addButton = new $.ig.PathIconLabelButton(1);
		this.__addButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__addButton.setIcon($.ig.EMIcons.prototype.icons().getPlusIcon());
		this.__addButton.setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addTasksTitle));
		this.__addButton.addClickHandler(function (x, y) {
			$self.addMode(true);
		});
		this.__container.addSubview(this.__addButton);
		this.__collapseAllButton = this.createButton($.ig.EMIcons.prototype.icons().getCollapseAllIcon(), null);
		this.__collapseAllButton.setOutlineOnly(false);
		this.__filterButton = this.createButton($.ig.EMIcons.prototype.icons().getFilterIcon(), null);
		this.__selectButton = this.createButton($.ig.EMIcons.prototype.icons().getSelectIcon(), function (x, y) {
			$self.selectMode(true);
		});
		this.__dueDateButton = this.createButton($.ig.EMIcons.prototype.icons().getCalendarIcon(), null);
		this.__assignButton = this.createButton($.ig.EMMainNavIcons.prototype.icons().getTeamIcon(), null);
		this.__tagButton = this.createButton($.ig.EMIcons.prototype.icons().getTagIcon(), null);
		this.__doneButton = this.createButton($.ig.UIPathIcons.prototype.icons().getCheckedIcon(), function (x, y) {
			$self.doneClicked();
		});
		this.__doneButton.setOutlineOnly(false);
		this.__doneButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeConfirmColor());
		this.__backButton = this.createButton($.ig.UIPathIcons.prototype.icons().getBackButtonArrowIcon(), function (x, y) {
			$self.doneClicked();
		});
		this.__cancelButton = this.createButton($.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.addMode(false);
		});
		this.__cancelButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeErrorColor());
		this.__addNewBox = new $.ig.CPGridViewTextBoxCell("x");
		this.__addNewBox._iconSizeBasedOnTextSize = false;
		this.__addNewBox.textView().setHintTextColor($.ig.ThemeManager.prototype.currentTheme().nativeSecondaryTitleColor());
		$.ig.ThemeManager.prototype.currentTheme().applyBarShadowToView(this.__addNewBox);
		this.__addNewBox.textView().setHintText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addTasksTitle));
		this.__addNewBox.textView().registerEnterKeyPressed(function () {
			$self.addTask(false);
		});
		this.__addNewBox.textView().registerEscapeKeyPressed(function () {
			$self.addMode(false);
		});
		this.__addNewBox.textView().registerGotFocus(function () {
			$self.addTextViewGotFocus();
		});
		this.__container.addSubview(this.__addNewBox);
		this.__titleLabel = new $.ig.CPLabel();
		this.__titleLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__titleLabel.clipToBounds(true);
		this.__titleLabel.setFont($.ig.ThemeManager.prototype.currentTheme().titleFontSize(), $.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.__container.addSubview(this.__titleLabel);
		this.__insertHereView = new $.ig.SPEvoTaskInsertView();
		this.__insertHereView.isHidden(true);
		this._gridView.addAdorner(this.__insertHereView);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::AddGridView()" />*/
	addGridView: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::AddGridView()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::AddTextViewGotFocus()" />*/
	addTextViewGotFocus: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::AddTextViewGotFocus()" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIconButton Infragistics.SPEvoTasksListView::CreateButton(Infragistics.PathIcon, Infragistics.PointExecutionBlock)" />*/
	createButton: function (icon, action) {
		var b = new $.ig.PathIconButton(0);
		b.setIcon(icon);
		b.addClickHandler(action);
		this.__container.addSubview(b);
		b.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		return b;
	}
	/*<EndMethod Name="Infragistics.PathIconButton Infragistics.SPEvoTasksListView::CreateButton(Infragistics.PathIcon, Infragistics.PointExecutionBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTasksListView::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	createDSH: function (col) {
		return new $.ig.SPEvoTasksDSH(col);
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTasksListView::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::SetupGrid(Infragistics.CPGridView)" />*/
	setupGrid: function (grid) {
		var $self = this;
		grid._rowHeight = $.ig.ThemeManager.prototype.currentTheme().listCellHeight();
		grid._scrollChangedBlock = function (x, y) {
			if ($self.addMode()) {
				$self.updateInsertIndex();
			}
		};
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::SetupGrid(Infragistics.CPGridView)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTasksListView::SelectMode()" />*/
	selectMode: function (value) {
		if (arguments.length === 1) {
			var $self = this;
			if (this.__selectMode != value) {
				this.__checkStateLookup.clear();
				this.__selectMode = value;
				this._gridView.updateData(true);
				this.__titleLabel.setText("Select Tasks");
				this.__container.animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
					$self.sizeChanged($self.currentWidth(), $self.currentHeight());
				}, null);
				this._editModeChanged(value);
			}
			return value;
		} else {
			return this.__selectMode;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTasksListView::SelectMode()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTasksListView::AddMode()" />*/
	addMode: function (value) {
		if (arguments.length === 1) {
			var $self = this;
			if (this.__addMode != value) {
				if (value) {
					this.__addNewTaskInfo = new $.ig.SPEvoAddNewTaskInfo();
					this.__insertHereView.isHidden(false);
					this.__addNewBox.isHidden(false);
					this.__addNewBox.textView().setFocus();
					this.updateInsertIndex();
				} else {
					this.__addNewTaskInfo = null;
					this.__insertHereView.isHidden(true);
					this.__addNewBox.textView().setText("");
					this.__addNewBox.textView().clearFocus();
				}
				this.__addMode = value;
				this._gridView.updateData(true);
				this.__container.animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
					$self.sizeChanged($self.currentWidth(), $self.currentHeight());
				}, function (finished) {
					if (!$self.addMode()) {
						$self.__addNewBox.isHidden(true);
					}
				});
				this._editModeChanged(value);
			}
			return value;
		} else {
			return this.__addMode;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTasksListView::AddMode()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::SetTasks(Infragistics.CPList)" />*/
	setTasks: function (tasks) {
		$.ig.SPEvoTaskViewerBase.prototype.setTasks.call(this, tasks);
		if (this.addMode()) {
			this.updateInsertIndex();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::SetTasks(Infragistics.CPList)" />*/
	,
	__addNewTaskInfo: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::UpdateInsertIndex()" />*/
	updateInsertIndex: function () {
		this.updateInsertIndex1($.ig.EMTask.prototype.resolveTaskForId(this._selectedTask, this._gridView.getDataSource().data()));
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::UpdateInsertIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::UpdateInsertIndex(Infragistics.EMTask)" />*/
	updateInsertIndex1: function (task) {
		this.__addNewTaskInfo._parentTaskId = null;
		this.__addNewTaskInfo._nextTaskId = null;
		if (task != null) {
			var data = this._gridView.getDataSource().data();
			var isSubtask = (task.parentId() != null && task.parentId().length > 0);
			var index = -1;
			if (isSubtask) {
				var parentTask = $.ig.EMTask.prototype.resolveTaskForId(task.parentId(), data);
				if (!parentTask.isCollapsed()) {
					this.__addNewTaskInfo._parentTaskId = task.parentId();
					data = parentTask.subTasks();
				} else {
					index = data.indexOf(parentTask);
					if (index != data.length - 1) {
						task = data[index + 1];
					}
				}
			} else {
				if (this.__addNewTaskInfo._addAsSubTask) {
					this.__addNewTaskInfo._parentTaskId = task.identifier();
					data = task.subTasks();
					if (data.length > 0) {
						index = 0;
						var nextTask = data[index];
						task = nextTask;
					}
				}
			}
			if (data.contains(task)) {
				if (index == -1) {
					index = data.indexOf(task);
				}
				var count = data.length;
				if (index != count - 1) {
					this.__addNewTaskInfo._nextTaskId = task.identifier();
				}
			}
		}
		this.__insertHereView.isSubTask(this.__addNewTaskInfo._parentTaskId != null);
		this.layoutInsertHere();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::UpdateInsertIndex(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTasksListView::ResolveLocationForAddNewTaskInfo()" />*/
	resolveLocationForAddNewTaskInfo: function () {
		var allTasks = this._gridView.getDataSource().data();
		var rowIndex = 0;
		var last = false;
		if (this.__addNewTaskInfo._parentTaskId == null) {
			if (this.__addNewTaskInfo._nextTaskId == null) {
				rowIndex = $.ig.EMTask.prototype.resolveTotalNumberOfTasks(allTasks) - 1;
				last = true;
			} else {
				rowIndex = $.ig.EMTask.prototype.resolveOverallIndexForTask(this.__addNewTaskInfo._nextTaskId, allTasks);
			}
		} else {
			if (this.__addNewTaskInfo._nextTaskId == null) {
				var parentTask = $.ig.EMTask.prototype.resolveTaskForId(this.__addNewTaskInfo._parentTaskId, allTasks);
				var taskId = parentTask.identifier();
				var count = parentTask.subTasks().length;
				if (count > 0) {
					var childTask = parentTask.subTasks()[count - 1];
					taskId = childTask.identifier();
				}
				rowIndex = $.ig.EMTask.prototype.resolveOverallIndexForTask(taskId, allTasks);
				last = true;
			} else {
				rowIndex = $.ig.EMTask.prototype.resolveOverallIndexForTask(this.__addNewTaskInfo._nextTaskId, allTasks);
			}
		}
		var cellTop = this._gridView.getYForCell(rowIndex, 0);
		if (last) {
			cellTop += this._gridView._rowHeight;
		}
		return cellTop;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTasksListView::ResolveLocationForAddNewTaskInfo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::ExitEditMode()" />*/
	exitEditMode: function () {
		this.addMode(false);
		this.selectMode(false);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::ExitEditMode()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoTasksListView::GetAddNewText()" />*/
	getAddNewText: function () {
		var val = this.__addNewBox.textView().getText();
		if (val == null) {
			val = "";
		}
		return $.ig.NativeStringUtility.prototype.trim(val);
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoTasksListView::GetAddNewText()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::AddTask(System.Boolean)" />*/
	addTask: function (closeAfter) {
		var val = this.getAddNewText();
		if (val.length > 0) {
			this.addNewTask(val, closeAfter);
			this.__addNewBox.textView().setText("");
			if (closeAfter) {
				this.addMode(false);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::AddTask(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::TaskMoved(Infragistics.EMTask)" />*/
	taskMoved: function (task) {
		var $self = this;
		this.notifySelection(task);
		var dsh = this._gridView.getDataSource();
		var data = dsh.data();
		if (task.parentId() != null && task.parentId().length > 0) {
			var parentTask = $.ig.EMTask.prototype.resolveTaskForId(task.parentId(), data);
			data = parentTask.subTasks();
		}
		var newIndex = data.indexOf(task);
		if (newIndex < data.length - 1) {
			var nextTask = data[newIndex + 1];
			task.nextTaskId(nextTask.identifier());
		} else {
			task.nextTaskId("LAST");
		}
		var list = new $.ig.Array();
		list.add(task);
		var req = new $.ig.InfragisticsReorderTasksRequest(this.__teamId, list, function (r, o) {
			$self.notifyTaskUpdate("reorder");
		}, function (r, e) {
			$.ig.EMTasksManager.prototype.refresh($self.__teamId);
		});
		req.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::TaskMoved(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::AddNewTask(System.String, System.Boolean)" />*/
	addNewTask: function (title, closeAfter) {
		var $self = this;
		var task = new $.ig.EMTask(1);
		task.identifier($.ig.NativeStringUtility.prototype.generateUID());
		task.title(title);
		task.teamId(this.__teamId);
		task.nextTaskId(this.__addNewTaskInfo._nextTaskId == null ? "LAST" : this.__addNewTaskInfo._nextTaskId);
		task.parentId(this.__addNewTaskInfo._parentTaskId);
		var tasks = new $.ig.Array();
		tasks.add(task);
		var req = new $.ig.InfragisticsInsertTasksRequest(task.teamId(), tasks, function (r, o) {
			$self.notifyTaskUpdate("added");
		}, function (r, e) {
			$.ig.EMTasksManager.prototype.refresh($self.__teamId);
		});
		req.execute();
		var dsh = this._gridView.getDataSource();
		var data = dsh.data();
		var index = -1;
		if (task.parentId() != null && task.parentId().length > 0) {
			var parentTask = $.ig.EMTask.prototype.resolveTaskForId(this.__addNewTaskInfo._parentTaskId, data);
			data = parentTask.subTasks();
		}
		if (this.__addNewTaskInfo._nextTaskId == null) {
			index = data.length;
			data.add(task);
		} else {
			var nextTask = $.ig.EMTask.prototype.resolveTaskForId(this.__addNewTaskInfo._nextTaskId, data);
			index = data.indexOf(nextTask);
			data.insert(index, task);
		}
		dsh.invalidateData();
		if (closeAfter || this.__addNewTaskInfo._nextTaskId == null) {
			this.notifySelection(task);
		}
		this._gridView.updateData(true);
		var overAllIndex = $.ig.EMTask.prototype.resolveOverallIndexForTask(task.identifier(), dsh.data());
		this.scrollTo(overAllIndex, null);
		this.layoutInsertHere();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::AddNewTask(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::NotifyTaskUpdate(System.String)" />*/
	notifyTaskUpdate: function (message) {
		$.ig.EMSocketManager.prototype.sendTaskMessage(this.__teamId, message);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::NotifyTaskUpdate(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::DoneClicked()" />*/
	doneClicked: function () {
		if (this.addMode()) {
			this.addTask(true);
		} else if (this.selectMode()) {
			this.selectMode(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::DoneClicked()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTasksListView::CreateCell(System.String)" />*/
	createCell: function (identifier) {
		var $self = this;
		var cell = new $.ig.SPEvoTaskWidgetCell(identifier, true);
		cell._cellFinishedDragging = function (t, p) {
			$self.taskMoved(t);
		};
		cell._expansionChanged = function (o) {
			$self.animateUpdateInsertIndex();
		};
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTasksListView::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::AnimateUpdateInsertIndex()" />*/
	animateUpdateInsertIndex: function () {
		var $self = this;
		if (this.addMode()) {
			(this.__insertHereView.getParent()).animate($.ig.ThemeManager.prototype.currentTheme().animationDuration(), function () {
				$self.updateInsertIndex();
			}, null);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::AnimateUpdateInsertIndex()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var task = cell.data();
		if (this.addMode()) {
			this.__addNewTaskInfo._addAsSubTask = false;
			this.updateInsertIndex1(task);
		}
		this.notifySelection(task);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::ActionOccurred(System.Object, System.Object)" />*/
	actionOccurred: function (sender, data) {
		var cell = sender;
		var task = cell.data();
		this.notifySelection(task);
		this.__addNewTaskInfo._addAsSubTask = true;
		this.updateInsertIndex1(task);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::ActionOccurred(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (c) {
		var cell = c;
		cell._addMode = this.addMode();
		cell.checkedStateDelegate(this);
		cell._addClickedDelegate = this;
		cell.editMode(this.selectMode() ? $.ig.CPGridViewCheckBoxEditMode.prototype.entireCellIsHitArea : $.ig.CPGridViewCheckBoxEditMode.prototype.none);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::HandleSelection(Infragistics.EMTask)" />*/
	handleSelection: function (task) {
		$.ig.SPEvoTaskViewerBase.prototype.handleSelection.call(this, task);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::HandleSelection(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTasksListView::ResolveIndexForTask(Infragistics.EMTask)" />*/
	resolveIndexForTask: function (task) {
		if (task == null) {
			return -1;
		}
		return $.ig.EMTask.prototype.resolveOverallIndexForTask(task.identifier(), this.getTasks());
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTasksListView::ResolveIndexForTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.SPEvoTaskViewerBase.prototype.sizeChanged.call(this, w, h);
		this.measureView(this.__container, 0, 0, w, h);
		var itemHeight = this._gridView._rowHeight;
		var padding = $.ig.NativeUIUtility.prototype.utility().densify(10);
		var top = padding;
		var iconSize = $.ig.ThemeManager.prototype.currentTheme().resolveIconSizeForSize(itemHeight);
		this.__filterButton.setIconSize(iconSize);
		this.__selectButton.setIconSize(iconSize);
		this.__tagButton.setIconSize(iconSize);
		this.__assignButton.setIconSize(iconSize);
		this.__dueDateButton.setIconSize(iconSize);
		this.__doneButton.setIconSize(iconSize);
		this.__cancelButton.setIconSize(iconSize);
		this.__addButton.setIconSize(iconSize);
		this.__backButton.setIconSize(iconSize);
		this.__collapseAllButton.setIconSize(iconSize);
		this.__addButton.calculateSizeToFit();
		var adw = this.__addButton.getCalculatedWidth();
		this.__titleLabel.calculateSizeToFit();
		var tlh = this.__titleLabel.getCalculatedHeight();
		var tlw = this.__titleLabel.getCalculatedWidth();
		if (this.addMode()) {
			var editWidth = w - padding * 2;
			this.__container.measureView(this.__addNewBox, padding, top, editWidth, itemHeight);
			this.hideMainButtons(w, padding, top, itemHeight);
			this.__container.measureView1(this.__addButton, padding, top, adw, itemHeight, 0);
			top += itemHeight;
			var tagHeight = $.ig.intDivide(itemHeight, 2);
			top += tagHeight;
			var left = 0;
			this.__container.measureView(this.__dueDateButton, left, top, itemHeight, itemHeight);
			left += itemHeight;
			this.__container.measureView(this.__assignButton, left, top, itemHeight, itemHeight);
			left += itemHeight;
			this.__container.measureView(this.__tagButton, left, top, itemHeight, itemHeight);
			var right = w - itemHeight;
			this.__container.measureView(this.__doneButton, right, top, itemHeight, itemHeight);
			right -= itemHeight;
			this.__container.measureView(this.__cancelButton, right, top, itemHeight, itemHeight);
			top += itemHeight;
			this.layoutInsertHere();
		} else if (this.selectMode()) {
			var left1 = 0;
			this.__container.measureView(this.__backButton, left1, top, itemHeight, itemHeight);
			left1 += itemHeight;
			this.__container.measureView1(this.__titleLabel, left1, top + ($.ig.intDivide(itemHeight, 2) - $.ig.intDivide(tlh, 2)), tlw, tlh, 1);
			this.hideMainButtons(w, padding, top, itemHeight);
			this.hideAddRowAdditonalButtons(w, padding, top, itemHeight);
			top += itemHeight;
		} else {
			this.__container.measureView(this.__addNewBox, padding, top, 1, itemHeight);
			this.__container.measureView1(this.__addButton, padding, top, adw, itemHeight, 1);
			var right1 = w - itemHeight;
			this.__container.measureView(this.__filterButton, right1, top, itemHeight, itemHeight);
			right1 -= itemHeight;
			this.__container.measureView(this.__selectButton, right1, top, itemHeight, itemHeight);
			right1 -= itemHeight;
			this.__container.measureView(this.__collapseAllButton, right1, top, itemHeight, itemHeight);
			this.hideAddRowAdditonalButtons(w, padding, top, itemHeight);
			this.__container.measureView1(this.__titleLabel, -padding, top + $.ig.intDivide(itemHeight, 4), 0, itemHeight, 0);
			this.__container.measureView(this.__backButton, -itemHeight, top, itemHeight, itemHeight);
			top += itemHeight;
		}
		this.__container.measureView(this.__headerBackground, 0, 0, w, top);
		this._gridView.clipToBounds(false);
		if (this.addMode()) {
			var ih = this.__insertHereView.resolveHeight();
			top += $.ig.intDivide(ih, 2);
		}
		this.__container.measureView(this._gridView, 0, top, w, h - top);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::HideAddRowAdditonalButtons(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	hideAddRowAdditonalButtons: function (w, padding, top, itemHeight) {
		var notVisLeft = -itemHeight;
		this.__container.measureView(this.__tagButton, notVisLeft, top, itemHeight, itemHeight);
		notVisLeft -= itemHeight;
		this.__container.measureView(this.__assignButton, notVisLeft, top, itemHeight, itemHeight);
		notVisLeft -= itemHeight;
		this.__container.measureView(this.__dueDateButton, notVisLeft, top, itemHeight, itemHeight);
		var notVisRight = w;
		this.__container.measureView(this.__cancelButton, notVisRight, top, itemHeight, itemHeight);
		notVisRight += itemHeight;
		this.__container.measureView(this.__doneButton, notVisRight, top, itemHeight, itemHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::HideAddRowAdditonalButtons(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::LayoutInsertHere()" />*/
	layoutInsertHere: function () {
		var ih = this.__insertHereView.resolveHeight();
		var cellTop = this.resolveLocationForAddNewTaskInfo();
		(this.__insertHereView.getParent()).measureView(this.__insertHereView, 0, cellTop - $.ig.intDivide(ih, 2), this.currentWidth(), ih);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::LayoutInsertHere()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::HideMainButtons(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	hideMainButtons: function (w, padding, top, itemHeight) {
		var notVisLeft = w;
		this.__container.measureView1(this.__addButton, -this.__addButton.currentWidth() - padding, top, this.__addButton.currentWidth(), itemHeight, 0);
		this.__container.measureView(this.__collapseAllButton, notVisLeft, top, itemHeight, itemHeight);
		notVisLeft += itemHeight;
		this.__container.measureView(this.__selectButton, notVisLeft, top, itemHeight, itemHeight);
		notVisLeft += itemHeight;
		this.__container.measureView(this.__filterButton, notVisLeft, top, itemHeight, itemHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::HideMainButtons(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoTasksListView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		var $self = this;
		var items = new $.ig.Array();
		var task = cell.data();
		if (task.parentId() == null) {
			items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getPlusIcon(), "Add SubTask", null, function (o) {
				return true;
			}));
		}
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getTasksIcon(), "Update State", null, function (o) {
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMMainNavIcons.prototype.icons().getTeamIcon(), "Assign", null, function (o) {
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getCalendarIcon(), "Set Due Date", null, function (o) {
			return true;
		}));
		items.add(new $.ig.CPPopupListItem(0, $.ig.EMIcons.prototype.icons().getTrashIcon(), "Delete Task", cell.data(), function (o) {
			$self.deleteTask(o);
			return true;
		}));
		return items;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoTasksListView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::DeleteTask(Infragistics.EMTask)" />*/
	deleteTask: function (task) {
		var $self = this;
		var tasks = new $.ig.Array();
		tasks.add(task);
		var deleteTaskRequuest = new $.ig.InfragisticsDeleteTasksRequest(tasks, function (r, o) {
			$.ig.EMSocketManager.prototype.sendTaskMessage($self.__teamId, "Tasks Deleted");
		}, function (r, e) {
		});
		deleteTaskRequuest.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::DeleteTask(Infragistics.EMTask)" />*/
	,
	__checkStateLookup: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTasksListView::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	cellCheckedStateChanged: function (cell, isSelected) {
		var task = cell.data();
		if (isSelected == $.ig.CPCheckedState.prototype.checked) {
			this.__checkStateLookup.item(task.identifier(), task.identifier());
		} else {
			$.ig.NativeDictionaryUtility.prototype.removeValue(this.__checkStateLookup, task.identifier());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTasksListView::CellCheckedStateChanged(Infragistics.CPGridViewCheckBoxCell, Infragistics.CPCheckedState)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPCheckedState Infragistics.SPEvoTasksListView::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	isCellChecked: function (cell) {
		var task = cell.data();
		return ($.ig.NativeDictionaryUtility.prototype.containsKey(this.__checkStateLookup, task.identifier())) ? $.ig.CPCheckedState.prototype.checked : $.ig.CPCheckedState.prototype.notChecked;
	}
	/*<EndMethod Name="Infragistics.CPCheckedState Infragistics.SPEvoTasksListView::IsCellChecked(Infragistics.CPGridViewCheckBoxCell)" />*/
	,
	$type: new $.ig.Type('SPEvoTasksListView', $.ig.SPEvoTaskViewerBase.prototype.$type, [$.ig.CPCheckedStateDelegate.prototype.$type, $.ig.CPObjectDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoTasksListView" />*/

/*<BeginType Name="Infragistics.SPEvoAddNewTaskInfo" />*/

$.ig.util.defType('SPEvoAddNewTaskInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_nextTaskId: null,
	_parentTaskId: null,
	_addAsSubTask: false,
	$type: new $.ig.Type('SPEvoAddNewTaskInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoAddNewTaskInfo" />*/

/*<BeginType Name="Infragistics.SPEvoTaskInsertView" />*/

$.ig.util.defType('SPEvoTaskInsertView', 'CPViewBase', {
	__label: null,
	__lineLeft: null,
	__lineRigth: null,
	init: function () {
		$.ig.CPViewBase.prototype.init.call(this);
		this.__label = new $.ig.CPLabel();
		this.__label.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeActionColor());
		this.__label.setFont(12, $.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.addSubview(this.__label);
		this.__lineLeft = new $.ig.CPViewBase();
		this.__lineLeft.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeActionColor());
		this.addSubview(this.__lineLeft);
		this.__lineRigth = new $.ig.CPViewBase();
		this.__lineRigth.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeActionColor());
		this.addSubview(this.__lineRigth);
		this.isSubTask(false);
	},
	__subTask: false,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoTaskInsertView::IsSubTask()" />*/
	isSubTask: function (value) {
		if (arguments.length === 1) {
			this.__subTask = value;
			if (this.__subTask) {
				this.__label.setText("Subtask Will be added here");
			} else {
				this.__label.setText("Task Will be added here");
			}
			if (this.currentWidth() > 0 && this.currentHeight() > 0) {
				this.sizeChanged(this.currentWidth(), this.currentHeight());
			}
			return value;
		} else {
			return this.__subTask;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoTaskInsertView::IsSubTask()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskInsertView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		this.__label.calculateSizeToFit();
		var ls = $.ig.NativeUIUtility.prototype.utility().dedensify(1);
		var lw = this.__label.getCalculatedWidth();
		var lh = this.__label.getCalculatedHeight();
		var lx = $.ig.intDivide(w, 2) - $.ig.intDivide(lw, 2);
		this.measureView(this.__label, lx, $.ig.intDivide(h, 2) - $.ig.intDivide(lh, 2), w, h);
		var spacer = $.ig.NativeUIUtility.prototype.utility().densify(2);
		this.measureView(this.__lineLeft, 0, $.ig.intDivide(h, 2) - $.ig.intDivide(ls, 2), lx - spacer, ls);
		this.measureView(this.__lineRigth, lx + lw + spacer, $.ig.intDivide(h, 2) - $.ig.intDivide(ls, 2), w - (lx + lw + spacer), ls);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskInsertView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskInsertView::ResolveHeight()" />*/
	resolveHeight: function () {
		this.__label.calculateSizeToFit();
		return this.__label.getCalculatedHeight();
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskInsertView::ResolveHeight()" />*/
	,
	$type: new $.ig.Type('SPEvoTaskInsertView', $.ig.CPViewBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskInsertView" />*/

/*<BeginType Name="Infragistics.SPEvoTaskViewer" />*/

$.ig.util.defType('SPEvoTaskViewer', 'SPEvoTaskViewerBase', {
	init: function () {
		$.ig.SPEvoTaskViewerBase.prototype.init.call(this);
	},
	__colWidth: null,
	__inset: 0,
	/*<BeginMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTaskViewer::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	createDSH: function (col) {
		this.__colWidth = $.ig.CPColumnWidth.prototype.createWithFixedWidth(1);
		col.width(this.__colWidth);
		return new $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper(col);
	}
	/*<EndMethod Name="Infragistics.CPGridViewDatasourceHelper Infragistics.SPEvoTaskViewer::CreateDSH(Infragistics.CPGridViewColumnDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewer::SetupGrid(Infragistics.CPGridView)" />*/
	setupGrid: function (grid) {
		var $self = this;
		grid.alwaysBounceHorizontal(true);
		grid._rowSeparatorHeight = 0;
		grid.alwaysBounceVertical(false);
		grid.clipToBounds(false);
		grid.setInterceptHorizontalScroll(function (val) {
			return $self.interceptScrollPos(val);
		});
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewer::SetupGrid(Infragistics.CPGridView)" />*/
	,
	__ignoreSelection: false,
	/*<BeginMethod Name="System.Double Infragistics.SPEvoTaskViewer::InterceptScrollPos(System.Double)" />*/
	interceptScrollPos: function (val) {
		var pathForPoint = this._gridView.cellAtPoint($.ig.truncate((val + $.ig.intDivide(this.currentWidth(), 2))), 0);
		if (pathForPoint != null) {
			this.__ignoreSelection = true;
			var task = this.getTasks()[pathForPoint._columnIndex];
			this.notifySelection(task);
			this.__ignoreSelection = false;
			return this.getScrollXPos(pathForPoint._columnIndex);
		}
		return val;
	}
	/*<EndMethod Name="System.Double Infragistics.SPEvoTaskViewer::InterceptScrollPos(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveCurrentScrolledIndex()" />*/
	resolveCurrentScrolledIndex: function () {
		var pathForPoint = this._gridView.cellAtPoint((this._gridView.getContentOffsetX() + $.ig.intDivide(this.currentWidth(), 2)), 0);
		if (pathForPoint == null) {
			return 0;
		}
		return pathForPoint._columnIndex;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveCurrentScrolledIndex()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::GetScrollXPos(System.Int32)" />*/
	getScrollXPos: function (index) {
		return $.ig.SPEvoTaskViewerBase.prototype.getScrollXPos.call(this, index) - this.__inset;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::GetScrollXPos(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskViewer::CreateCell(System.String)" />*/
	createCell: function (identifier) {
		var cell = new $.ig.SPEvoTaskView(identifier);
		return cell;
	}
	/*<EndMethod Name="Infragistics.CPGridViewCellBase Infragistics.SPEvoTaskViewer::CreateCell(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewer::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		this.notifySelection(cell.data());
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewer::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewer::HandleSelection(Infragistics.EMTask)" />*/
	handleSelection: function (task) {
		var index = this.resolveIndexForTask(task);
		if (!this.__ignoreSelection) {
			this.scrollTo(index, null);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewer::HandleSelection(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveIndexForTask(Infragistics.EMTask)" />*/
	resolveIndexForTask: function (task) {
		if (task == null) {
			return -1;
		}
		var tasks = this.getTasks();
		if (tasks.length == 0) {
			return -1;
		}
		return tasks.indexOf(task);
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveIndexForTask(Infragistics.EMTask)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveIndexForTaskId(System.String)" />*/
	resolveIndexForTaskId: function (taskId) {
		if (taskId == null) {
			return -1;
		}
		var tasks = this.getTasks();
		var count = tasks.length;
		if (count == 0) {
			return -1;
		}
		for (var i = 0; i < count; i++) {
			var task = tasks[i];
			if (task.identifier().equals(taskId)) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoTaskViewer::ResolveIndexForTaskId(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoTaskViewer::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		var top = 0;
		var maxSpacing = $.ig.NativeUIUtility.prototype.utility().densify(20);
		this._gridView._columnSpacing = $.ig.EMUtility.prototype.isLargeScreenMode() ? maxSpacing : $.ig.truncate(Math.min(w * 0.0125, maxSpacing));
		var colwidth = Math.min($.ig.NativeUIUtility.prototype.utility().densify(500), w - this._gridView._columnSpacing * 2);
		this.__colWidth._value = colwidth;
		top += this._gridView._columnSpacing;
		var gridHeight = h - top - this._gridView._columnSpacing;
		this._gridView._rowHeight = gridHeight;
		this.__inset = $.ig.intDivide(w, 2) - $.ig.intDivide(colwidth, 2);
		var inset = this.__inset - this._gridView._columnSpacing;
		this._gridView.setInsets(0, inset, 0, inset);
		this.measureView(this._gridView, 0, top, w, gridHeight);
		this._gridView.scrollTo(this.getScrollXPos(this.resolveIndexForTaskId(this._selectedTask)), 0);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoTaskViewer::SizeChanged(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoTaskViewer', $.ig.SPEvoTaskViewerBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoTaskViewer" />*/

/*<BeginType Name="Infragistics.SPEvoHomeViewController" />*/

$.ig.util.defType('SPEvoHomeViewController', 'EMNavigationPageViewController', {
	init: function () {
		$.ig.EMNavigationPageViewController.prototype.init.call(this);
	},
	__selectionManager: null,
	__boardView: null,
	__linkPopup: null,
	__cloudPopup: null,
	__providerPopup: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoHomeViewController::RootPath()" />*/
	rootPath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_HOME;
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoHomeViewController::RootPath()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoHomeViewController::HandleNavigation(Infragistics.CPList)" />*/
	handleNavigation: function (pathParts) {
		$.ig.EMNavigationPageViewController.prototype.handleNavigation.call(this, pathParts);
		var dismissCloudNav = true, dismissLinkNav = true;
		var count = pathParts.length;
		if (count > 1) {
			var root = (pathParts[1]).toLowerCase();
			if (root.equals($.ig.SPEvoHomeViewController.prototype.sPEvoAddProviderPathPart)) {
				var providerName = null;
				if (count > 2) {
					dismissLinkNav = false;
					providerName = pathParts[2];
				}
				$.ig.CPNavigatorManager.prototype.popToRoot(false);
				if (providerName != null) {
					var providerType = $.ig.CloudProviderTypeUtility.prototype.convertStringToType(providerName);
					if (providerType == $.ig.CloudProviderType.prototype.sharePoint) {
						var vc = new $.ig.AddSharePointViewController();
						$.ig.CPPopupManager.prototype.showModalDialog(this.view(), vc, false);
					} else {
						if (providerType == $.ig.CloudProviderType.prototype.microsoftProvider) {
							window.location.href = '/Link/LinkMicrosoft';
						} else if (providerType == $.ig.CloudProviderType.prototype.googleProvider) {
							window.location.href = '/Link/LinkGoogle';
						} else if (providerType == $.ig.CloudProviderType.prototype.box) {
							window.location.href = '/Link/LinkBox';
						} else if (providerType == $.ig.CloudProviderType.prototype.dropbox) {
							window.location.href = '/Link/LinkDropbox';
						}
					}
				}
			} else {
				if (count == 2) {
					if (this.__linkPopup != null && $.ig.CPPopupManager.prototype.isPopupOpen(this.__linkPopup)) {
						$.ig.CPPopupManager.prototype.closePopup(this.__linkPopup, true);
						this.__linkPopup = null;
					}
					var providerIdentifier = pathParts[1];
					var provider = $.ig.EMUserFileManager.prototype.getUserFile().resolveProviderForID(providerIdentifier);
					if (this.__cloudPopup == null) {
						this.__selectionManager = new $.ig.CloudFileSelectionManager($.ig.CloudFileSelectionMode.prototype.optional, $.ig.CloudFileSelectionType.prototype.both, $.ig.CloudFileSelectionAction.prototype.select);
						this.__cloudPopup = $.ig.CPPopupManager.prototype.showModalDialog(this.view(), new $.ig.CloudFileNavigationViewController(0, provider, this.__selectionManager), false);
					}
					dismissCloudNav = false;
				} else {
					$.ig.CPNavigatorManager.prototype.popToRoot(false);
				}
			}
		}
		if (dismissCloudNav && this.__cloudPopup != null) {
			$.ig.CPPopupManager.prototype.closePopup(this.__cloudPopup, true);
			this.__cloudPopup = null;
		}
		if (dismissLinkNav && this.__linkPopup != null) {
			$.ig.CPPopupManager.prototype.closePopup(this.__linkPopup, true);
			this.__linkPopup = null;
		}
		if (this.__cloudPopup != null) {
			$.ig.CPNavigatorManager.prototype.popToRoot(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoHomeViewController::HandleNavigation(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoHomeViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		$.ig.EMNavigationPageViewController.prototype.viewDidLoad.call(this);
		this.__boardView = new $.ig.SPEvoPersonalBoardView();
		this.view().addSubview(this.__boardView);
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerScreen($.ig.SPEvoGoogleAnalyticsContants.prototype.homeScreen);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoHomeViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoHomeViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.EMNavigationPageViewController.prototype.layoutSubviews.call(this, w, h);
		this.view().measureView(this.__boardView, 0, 0, w, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoHomeViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoHomeViewController', $.ig.EMNavigationPageViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoHomeViewController" />*/

/*<BeginType Name="Infragistics.SPEvoCloudProvidersListView" />*/

$.ig.util.defType('SPEvoCloudProvidersListView', 'CPViewBase', {
	__gridView: null,
	__dsh: null,
	__addButton: null,
	init: function () {
		var $self = this;
		$.ig.CPViewBase.prototype.init.call(this);
		this.__addButton = new $.ig.CPGridViewIconCell("self");
		this.__addButton.preferredCursor($.ig.CPCursors.prototype.clickable);
		this.__addButton.setIcon($.ig.EMIcons.prototype.icons().getPlusIcon());
		this.__addButton.highlightMode($.ig.CPInteractionViewMode.prototype.circle);
		this.__addButton.setIconColor($.ig.ThemeManager.prototype.currentTheme().nativeMainTitleColor());
		this.__addButton.addClickHandler(function (x, y) {
			$self.addNewProvider();
		});
		this.addSubview(this.__addButton);
		this.__gridView = new $.ig.CPGridView();
		this.__gridView._headerHeight = 0;
		this.__gridView.alwaysBounceVertical(false);
		this.__gridView._rowSeparatorHeight = 0;
		this.addSubview(this.__gridView);
		this.__dsh = new $.ig.CPGridViewSingleRowSingleFieldDataSourceHelper(new $.ig.CPGridViewColumnDefinition(2, this, function (identifier) {
			var cell = new $.ig.CPGridViewIconCell(identifier);
			cell.preferredCursor($.ig.CPCursors.prototype.clickable);
			return cell;
		}));
		this.__gridView.setDataSource(this.__dsh);
		$.ig.EMUserFileManager.prototype.registerUserFileNotifications("ProvidersList", this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::AddNewProvider()" />*/
	addNewProvider: function () {
		var $self = this;
		var itemBlock = function (o) {
			$self.signInToProvider(o);
			return true;
		};
		var providers = new $.ig.Array();
		providers.add(new $.ig.CPPopupListItem(0, $.ig.CloudFileUtility.prototype.resolveIconForProvider($.ig.CloudProviderType.prototype.googleProvider), $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle($.ig.CloudProviderType.prototype.googleProvider), $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.googleProvider), itemBlock));
		providers.add(new $.ig.CPPopupListItem(0, $.ig.CloudFileUtility.prototype.resolveIconForProvider($.ig.CloudProviderType.prototype.microsoftProvider), $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle($.ig.CloudProviderType.prototype.microsoftProvider), $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.microsoftProvider), itemBlock));
		providers.add(new $.ig.CPPopupListItem(0, $.ig.CloudFileUtility.prototype.resolveIconForProvider($.ig.CloudProviderType.prototype.dropbox), $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle($.ig.CloudProviderType.prototype.dropbox), $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.dropbox), itemBlock));
		providers.add(new $.ig.CPPopupListItem(0, $.ig.CloudFileUtility.prototype.resolveIconForProvider($.ig.CloudProviderType.prototype.box), $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle($.ig.CloudProviderType.prototype.box), $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.box), itemBlock));
		providers.add(new $.ig.CPPopupListItem(0, $.ig.CloudFileUtility.prototype.resolveIconForProvider($.ig.CloudProviderType.prototype.sharePoint), $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle($.ig.CloudProviderType.prototype.sharePoint), $.ig.CloudProviderTypeUtility.prototype.convertTypeToString($.ig.CloudProviderType.prototype.sharePoint), itemBlock));
		$.ig.CPPopupManager.prototype.showList3(this.__addButton, this.__addButton, providers, $.ig.CPPopupPosition.prototype.auto, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.addNewConnection), null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::AddNewProvider()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::SignInToProvider(System.String)" />*/
	signInToProvider: function (provider) {
		$.ig.CPNavigatorManager.prototype.popToRoot(false);
		$.ig.CPNavigatorManager.prototype.pushPathPart($.ig.SPEvoHomeViewController.prototype.sPEvoAddProviderPathPart, false);
		$.ig.CPNavigatorManager.prototype.pushPathPart(provider, true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::SignInToProvider(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	updatedUserFileReceived: function (userFile) {
		$.ig.SPEvoAnalyticsUtility.prototype.userFileUpdated(userFile);
		var lookup = new $.ig.Dictionary(0);
		var items = new $.ig.Array();
		var count = userFile.providers().length;
		for (var i = 0; i < count; i++) {
			var provider = userFile.providers()[i];
			var key = $.ig.CloudProviderTypeUtility.prototype.convertTypeToTitle(provider.provider());
			var cpi = null;
			if ($.ig.NativeDictionaryUtility.prototype.containsKey(lookup, key)) {
				cpi = lookup.item(key);
			} else {
				cpi = new $.ig.CombindedProviderInfo();
				cpi._provider = provider.provider();
				cpi._providers = new $.ig.Array();
				items.add(cpi);
				lookup.item(key, cpi);
			}
			cpi._providers.add(provider);
		}
		this.__dsh.data(items);
		this.__gridView.updateData(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.SPEvoCloudProvidersListView::CalculateWidth(System.Int32)" />*/
	calculateWidth: function (height) {
		var cw = height;
		if (this.__dsh.data() != null) {
			cw += (height * this.__dsh.data().length);
		}
		return cw;
	}
	/*<EndMethod Name="System.Int32 Infragistics.SPEvoCloudProvidersListView::CalculateWidth(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	cellClicked: function (cell) {
		var $self = this;
		var data = cell.data();
		var count = data._providers.length;
		if (count == 1) {
			this.showProvider(cell, data._providers[0]);
		} else {
			var items = new $.ig.Array();
			for (var i = 0; i < count; i++) {
				var provider = data._providers[i];
				if (this.shouldShowProvider(provider)) {
					items.add(new $.ig.SPEvoProviderPopupItem(provider, false, function (o) {
						$self.showProvider(cell, o);
						return true;
					}));
				}
			}
			$.ig.CPPopupManager.prototype.showList3(cell, cell, items, $.ig.CPPopupPosition.prototype.auto, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.selectConnection), null);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::CellClicked(Infragistics.CPGridViewCellBase)" />*/
	,
	__selectionManager: null,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::ShowProvider(Infragistics.CPView, Infragistics.ProviderBase)" />*/
	showProvider: function (sender, provider) {
		var processed = this.processShowProvider(sender, provider);
		if (!processed) {
			this.__selectionManager = new $.ig.CloudFileSelectionManager($.ig.CloudFileSelectionMode.prototype.optional, $.ig.CloudFileSelectionType.prototype.both, $.ig.CloudFileSelectionAction.prototype.select);
			$.ig.CPPopupManager.prototype.showModalDialog(sender, new $.ig.CloudFileNavigationViewController(0, provider, this.__selectionManager), true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::ShowProvider(Infragistics.CPView, Infragistics.ProviderBase)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.SPEvoCloudProvidersListView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	cellResolveOverflowItems: function (cell) {
		return null;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.SPEvoCloudProvidersListView::CellResolveOverflowItems(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	cellDataSet: function (cell) {
		var data = cell.data();
		var iconCell = cell;
		iconCell.setIcon($.ig.CloudFileUtility.prototype.resolveIconForProvider(data._provider));
		cell.highlightMode($.ig.CPInteractionViewMode.prototype.circle);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::CellDataSet(Infragistics.CPGridViewCellBase)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::SizeChanged(System.Int32, System.Int32)" />*/
	sizeChanged: function (w, h) {
		$.ig.CPViewBase.prototype.sizeChanged.call(this, w, h);
		this.__gridView._columnWidth = $.ig.CPColumnWidth.prototype.createWithFixedWidth(h);
		this.__gridView._rowHeight = h;
		this.measureView(this.__gridView, 0, 0, w - h, h);
		this.measureView(this.__addButton, w - h, 0, h, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoCloudProvidersListView::SizeChanged(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoCloudProvidersListView::ShouldShowProvider(Infragistics.ProviderBase)" />*/
	shouldShowProvider: function (provider) {
		return !provider.isLocal();
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoCloudProvidersListView::ShouldShowProvider(Infragistics.ProviderBase)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoCloudProvidersListView::ProcessShowProvider(Infragistics.CPView, Infragistics.ProviderBase)" />*/
	processShowProvider: function (sender, provider) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoCloudProvidersListView::ProcessShowProvider(Infragistics.CPView, Infragistics.ProviderBase)" />*/
	,
	$type: new $.ig.Type('SPEvoCloudProvidersListView', $.ig.CPViewBase.prototype.$type, [$.ig.EMUserFileDelegate.prototype.$type, $.ig.CPGridViewCellSetupDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoCloudProvidersListView" />*/

/*<BeginType Name="Infragistics.CombindedProviderInfo" />*/

$.ig.util.defType('CombindedProviderInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_provider: 0,
	_providers: null,
	$type: new $.ig.Type('CombindedProviderInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CombindedProviderInfo" />*/

/*<BeginType Name="Infragistics.SPEvoAddContentLinkViewController" />*/

$.ig.util.defType('SPEvoAddContentLinkViewController', 'SPEvoBaseViewController', {
	__addLinkButton: null,
	__urlTextBox: null,
	__titleTextBox: null,
	__enabledColor: null,
	__disabledColor: null,
	__widget: null,
	__timerDebounce: null,
	__lastTextLength: 0,
	__request: null,
	__currentTitle: null,
	init: function (widget) {
		this.__enabledColor = new $.ig.Number();
		this.__disabledColor = new $.ig.Number();
		$.ig.SPEvoBaseViewController.prototype.init.call(this);
		this.__widget = widget;
		this.__timerDebounce = new $.ig.CPTimer();
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoAddContentLinkViewController::CustomNavBarExeperience()" />*/
	customNavBarExeperience: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoAddContentLinkViewController::CustomNavBarExeperience()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.SPEvoBaseViewController.prototype.viewDidLoad.call(this);
		this.title(this.localizeText($.ig.EMLocalizationKeys.prototype.addLink));
		this.__urlTextBox = new $.ig.MaterialEditBox(false);
		this.__urlTextBox.setHintText(this.localizeText($.ig.EMLocalizationKeys.prototype.enterUrl));
		this.__urlTextBox.registerTextChanged(function () {
			$self.textChanged();
		});
		this.registerTextBox(this.__urlTextBox.editor());
		this.addSubview(this.__urlTextBox);
		this.__titleTextBox = new $.ig.MaterialEditBox(false);
		this.__titleTextBox.setHintText(this.localizeText($.ig.EMLocalizationKeys.prototype.title));
		this.__titleTextBox.registerTextChanged(function () {
			$self.titleTextChanged();
		});
		this.registerTextBox(this.__titleTextBox.editor());
		this.addSubview(this.__titleTextBox);
		this.__enabledColor = $.ig.ThemeManager.prototype.currentTheme().confirmColor();
		this.__disabledColor = $.ig.ColorUtility.prototype.applyAlphaToColor(150, this.__enabledColor);
		this.__addLinkButton = new $.ig.PathIconLabelButton(1);
		this.__addLinkButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__addLinkButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__addLinkButton.setText(this.localizeText($.ig.EMLocalizationKeys.prototype.pinLink));
		this.__addLinkButton.setTextAlignment($.ig.TextAlignment.prototype.center);
		this.__addLinkButton.setCornerRadius($.ig.ThemeManager.prototype.currentTheme().cornerRadius());
		$.ig.ThemeManager.prototype.currentTheme().applyButtonShadowToView(this.__addLinkButton);
		this.__addLinkButton.addClickHandler(function (x, y) {
			$self.addTeam();
		});
		this.addSubview(this.__addLinkButton);
		var closeButton = $.ig.ThemeManager.prototype.currentTheme().createNavBarButton(null, $.ig.EMIcons.prototype.icons().getCloseIcon(), function (x, y) {
			$self.close();
		});
		this.addRightBarButtonItem(closeButton);
		this.__addLinkButton.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(this.__disabledColor));
		this.__addLinkButton.disable();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::ViewDidLoad()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoAddContentLinkViewController::HasNavBar()" />*/
	hasNavBar: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoAddContentLinkViewController::HasNavBar()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::AddTeam()" />*/
	addTeam: function () {
		var link = new $.ig.EMBoardWidgetContentLink(1);
		link.uRL(this.__urlTextBox.getText());
		link.title(this.__titleTextBox.getText());
		this.__widget.addUrl(this.__urlTextBox.getText(), this.__titleTextBox.getText());
		var message = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.linkAddedNotificationMessage);
		$.ig.EMBoardManager.prototype.updateBoardById(this.__widget.section().boardId(), message);
		this.close();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::AddTeam()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::TextChanged()" />*/
	textChanged: function () {
		var $self = this;
		var url = this.__urlTextBox.getText();
		var pasteDetected = (this.__lastTextLength + 10 < url.length);
		this.__lastTextLength = url.length;
		url = url.toLowerCase();
		if (url.length > 7 && !$.ig.NativeStringUtility.prototype.startsWith(url, "http")) {
			url = "http://" + url;
			this.__urlTextBox.setText(url);
			this.__urlTextBox.moveCaretToTheEnd();
		}
		if ($.ig.NativeRequestUtility.prototype.utility().isValidUrl(url) && !this.__titleTextBox.hasText()) {
			if (this.__request != null) {
				this.__request.cancel();
			}
			this.__timerDebounce.stop();
			if (pasteDetected) {
				this.scrapeUrl(url);
			} else {
				var finalUrl = url;
				this.__timerDebounce.start2(0.75, 0.75, function (percent) {
					if (percent >= 1) {
						$.ig.ProgressHelper.prototype.showProgress1($self.view());
						$self.scrapeUrl(finalUrl);
					}
				});
			}
		}
		this.updateLinkButton();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::TextChanged()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::TitleTextChanged()" />*/
	titleTextChanged: function () {
		this.updateLinkButton();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::TitleTextChanged()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::UpdateLinkButton()" />*/
	updateLinkButton: function () {
		if (this.__urlTextBox.hasText() && this.__titleTextBox.hasText()) {
			this.__addLinkButton.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(this.__enabledColor));
			this.__addLinkButton.enable();
		} else {
			this.__addLinkButton.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(this.__disabledColor));
			this.__addLinkButton.disable();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::UpdateLinkButton()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::ScrapeUrl(System.String)" />*/
	scrapeUrl: function (url) {
		var $self = this;
		if (this.__titleTextBox.hasText()) {
			return;
		}
		this.__request = new $.ig.InfragisticsToolsScraperRequest(url, function (r, o) {
			$.ig.ProgressHelper.prototype.hideProgress($self.view(), true);
			if (o != null) {
				$self.setTitleText((o).resolveStringForKey("title"));
			}
		}, function (r, e) {
			$.ig.ProgressHelper.prototype.hideProgress($self.view(), true);
		});
		this.__request.execute();
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::ScrapeUrl(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::SetTitleText(System.String)" />*/
	setTitleText: function (title) {
		if (this.__currentTitle == null || !this.__currentTitle.equals(title)) {
			this.__currentTitle = title;
			this.__titleTextBox.setText(title);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::SetTitleText(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.SPEvoBaseViewController.prototype.layoutSubviews.call(this, w, h);
		this.__urlTextBox.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.__titleTextBox.setFont(this._smallFontSize, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.__urlTextBox.calculateSizeToFit();
		var tlh = this.__urlTextBox.getCalculatedHeight();
		var top = $.ig.intDivide(h, 2) - $.ig.intDivide((tlh + this._padding + tlh), 2);
		var clw = this._editBoxWidth;
		this.view().measureView(this.__urlTextBox, $.ig.intDivide(w, 2) - $.ig.intDivide(clw, 2), top, clw, tlh);
		top += tlh + this._padding;
		this.view().measureView(this.__titleTextBox, $.ig.intDivide(w, 2) - $.ig.intDivide(clw, 2), top, clw, tlh);
		this.__addLinkButton.setFont(this._mediumFontSize, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		var bh = $.ig.ThemeManager.prototype.currentTheme().cellHeight();
		this.measureView(this.__addLinkButton, $.ig.intDivide(w, 2) - $.ig.intDivide(this._editBoxWidth, 2), h - this._padding - bh, this._editBoxWidth, bh);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAddContentLinkViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoAddContentLinkViewController', $.ig.SPEvoBaseViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoAddContentLinkViewController" />*/

/*<BeginType Name="Infragistics.SPEvoNotificationsViewController" />*/

$.ig.util.defType('SPEvoNotificationsViewController', 'EMNavigationPageViewController', {
	init: function () {
		$.ig.EMNavigationPageViewController.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.SPEvoNotificationsViewController::RootPath()" />*/
	rootPath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_NOTIFICATIONS;
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoNotificationsViewController::RootPath()" />*/
	,
	$type: new $.ig.Type('SPEvoNotificationsViewController', $.ig.EMNavigationPageViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoNotificationsViewController" />*/

/*<BeginType Name="Infragistics.SPEvoSettingsViewController" />*/

$.ig.util.defType('SPEvoSettingsViewController', 'EMNavigationPageViewController', {
	init: function () {
		$.ig.EMNavigationPageViewController.prototype.init.call(this);
	},
	__signOutButton: null,
	/*<BeginProperty Name="System.String Infragistics.SPEvoSettingsViewController::RootPath()" />*/
	rootPath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_SETTINGS;
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoSettingsViewController::RootPath()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSettingsViewController::ViewDidLoad()" />*/
	viewDidLoad: function () {
		var $self = this;
		$.ig.EMNavigationPageViewController.prototype.viewDidLoad.call(this);
		this.__signOutButton = new $.ig.PathIconLabelButton(1);
		this.__signOutButton.setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.signOut));
		this.__signOutButton.setFont(25, $.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.__signOutButton.addClickHandler(function (x, y) {
			$self.askToLogout();
		});
		this.addSubview(this.__signOutButton);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSettingsViewController::ViewDidLoad()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSettingsViewController::AskToLogout()" />*/
	askToLogout: function () {
		var $self = this;
		var signOutText = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.signOut);
		$.ig.CPPopupManager.prototype.ask(this.view(), signOutText, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.areYouSure), signOutText, $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.cancel), $.ig.ThemeManager.prototype.currentTheme().nativeErrorColor(), null, function (o) {
			$self.logout();
		}, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSettingsViewController::AskToLogout()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSettingsViewController::ShowConnections()" />*/
	showConnections: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSettingsViewController::ShowConnections()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSettingsViewController::Logout()" />*/
	logout: function () {
		window.location.href = '/Logout';;
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSettingsViewController::Logout()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSettingsViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	layoutSubviews: function (w, h) {
		$.ig.EMNavigationPageViewController.prototype.layoutSubviews.call(this, w, h);
		this.__signOutButton.calculateSizeToFit();
		var bw1 = this.__signOutButton.getCalculatedWidth();
		var bh = this.__signOutButton.getCalculatedHeight();
		var top = $.ig.intDivide(h, 2) - $.ig.intDivide(bh, 2);
		this.measureView(this.__signOutButton, $.ig.intDivide(w, 2) - $.ig.intDivide(bw1, 2), top, bw1, bh);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSettingsViewController::LayoutSubviews(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSettingsViewController', $.ig.EMNavigationPageViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSettingsViewController" />*/

/*<BeginType Name="Infragistics.SPEvoRootViewController" />*/

$.ig.util.defType('SPEvoRootViewController', 'EMRootViewController', {
	init: function () {
		$.ig.EMRootViewController.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoRootViewController::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	updatedUserFileReceived: function (userFile) {
		$.ig.EMRootViewController.prototype.updatedUserFileReceived.call(this, userFile);
		if (this.shouldCallLocalProvidersSync()) {
			this.syncLocalProviders();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoRootViewController::UpdatedUserFileReceived(Infragistics.EMUserFile)" />*/
	,
	/*<BeginMethod Name="Infragistics.EMNavigationPageViewController Infragistics.SPEvoRootViewController::ResolveHomeViewController()" />*/
	resolveHomeViewController: function () {
		return new $.ig.SPEvoHomeViewController();
	}
	/*<EndMethod Name="Infragistics.EMNavigationPageViewController Infragistics.SPEvoRootViewController::ResolveHomeViewController()" />*/
	,
	/*<BeginMethod Name="Infragistics.ViewControllerBase Infragistics.SPEvoRootViewController::ResolveSearchController()" />*/
	resolveSearchController: function () {
		return new $.ig.SPEvoSearchViewController();
	}
	/*<EndMethod Name="Infragistics.ViewControllerBase Infragistics.SPEvoRootViewController::ResolveSearchController()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPNavigationView Infragistics.SPEvoRootViewController::ResolveSideBarContent()" />*/
	resolveSideBarContent: function () {
		return new $.ig.SPEvoBoardNavigatorView(true);
	}
	/*<EndMethod Name="Infragistics.CPNavigationView Infragistics.SPEvoRootViewController::ResolveSideBarContent()" />*/
	,
	/*<BeginMethod Name="Infragistics.EMNavigationBarItem Infragistics.SPEvoRootViewController::ResolveHomeItem()" />*/
	resolveHomeItem: function () {
		var $self = this;
		var buttons = new $.ig.Array();
		var addTaskButton = new $.ig.PathIconButton(0);
		addTaskButton.setIcon($.ig.EMIcons.prototype.icons().getTasksIcon());
		addTaskButton.setOutlineOnly(false);
		addTaskButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		addTaskButton.addClickHandler(function (x, y) {
			$self.showTaskManager(addTaskButton);
		});
		buttons.add(addTaskButton);
		return new $.ig.EMNavigationBarItem(0, this.localizeText($.ig.EMLocalizationKeys.prototype.myBoard), $.ig.EMMainNavIcons.prototype.icons().getUserIcon(), $.ig.EMMainNavIcons.prototype.icons().getUserActiveIcon(), true, true, $.ig.SPEvoRootViewController.prototype.pATH_HOME, buttons);
	}
	/*<EndMethod Name="Infragistics.EMNavigationBarItem Infragistics.SPEvoRootViewController::ResolveHomeItem()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoRootViewController::ShowTaskManager(Infragistics.CPViewBase)" />*/
	showTaskManager: function (view) {
		$.ig.CPPopupManager.prototype.showFullScreenModalDialog(view, new $.ig.SPEvoTaskViewerViewController(0, $.ig.EMUserFileManager.prototype.getUserFile().identifier(), true), true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoRootViewController::ShowTaskManager(Infragistics.CPViewBase)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SPEvoRootViewController::ResolveRootPath()" />*/
	resolveRootPath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_HOME;
	}
	/*<EndMethod Name="System.String Infragistics.SPEvoRootViewController::ResolveRootPath()" />*/
	,
	/*<BeginMethod Name="Infragistics.EMNavigationPageViewController Infragistics.SPEvoRootViewController::NavigateToRootPageViewController(System.String)" />*/
	navigateToRootPageViewController: function (rootPathPart) {
		if (rootPathPart.equals($.ig.SPEvoRootViewController.prototype.pATH_SETTINGS)) {
			return new $.ig.SPEvoSettingsViewController();
		} else if (rootPathPart.equals($.ig.SPEvoRootViewController.prototype.pATH_WORKSPACES)) {
			return new $.ig.SPEvoWorkspacesViewController();
		} else if (rootPathPart.equals($.ig.SPEvoRootViewController.prototype.pATH_NOTIFICATIONS)) {
			return new $.ig.SPEvoNotificationsViewController();
		} else if (rootPathPart.equals($.ig.SPEvoRootViewController.prototype.pATH_TEAMS)) {
			return new $.ig.SPEvoBoardsRootViewController();
		}
		return new $.ig.SPEvoHomeViewController();
	}
	/*<EndMethod Name="Infragistics.EMNavigationPageViewController Infragistics.SPEvoRootViewController::NavigateToRootPageViewController(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIcon Infragistics.SPEvoRootViewController::ResolveLogoIcon()" />*/
	resolveLogoIcon: function () {
		return $.ig.EMIcons.prototype.icons().getSharePlusTextAndLogoIcon();
	}
	/*<EndMethod Name="Infragistics.PathIcon Infragistics.SPEvoRootViewController::ResolveLogoIcon()" />*/
	,
	/*<BeginMethod Name="Infragistics.PathIcon Infragistics.SPEvoRootViewController::ResolveLogoIconSmall()" />*/
	resolveLogoIconSmall: function () {
		return $.ig.EMIcons.prototype.icons().getShareplusIcon();
	}
	/*<EndMethod Name="Infragistics.PathIcon Infragistics.SPEvoRootViewController::ResolveLogoIconSmall()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.SPEvoRootViewController::ShouldCallLocalProvidersSync()" />*/
	shouldCallLocalProvidersSync: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SPEvoRootViewController::ShouldCallLocalProvidersSync()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoRootViewController::SyncLocalProviders()" />*/
	syncLocalProviders: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoRootViewController::SyncLocalProviders()" />*/
	,
	$type: new $.ig.Type('SPEvoRootViewController', $.ig.EMRootViewController.prototype.$type, [$.ig.EMUserFileDelegate.prototype.$type, $.ig.CPNavigatorDelegate.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SPEvoRootViewController" />*/

/*<BeginType Name="Infragistics.SPEvoWorkspacesViewController" />*/

$.ig.util.defType('SPEvoWorkspacesViewController', 'EMNavigationPageViewController', {
	init: function () {
		$.ig.EMNavigationPageViewController.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.SPEvoWorkspacesViewController::RootPath()" />*/
	rootPath: function () {
		return $.ig.SPEvoRootViewController.prototype.pATH_WORKSPACES;
	}
	/*<EndProperty Name="System.String Infragistics.SPEvoWorkspacesViewController::RootPath()" />*/
	,
	$type: new $.ig.Type('SPEvoWorkspacesViewController', $.ig.EMNavigationPageViewController.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoWorkspacesViewController" />*/

/*<BeginType Name="Infragistics.SPEvoAnalyticsUtility" />*/

$.ig.util.defType('SPEvoAnalyticsUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::InitializeTracking()" />*/
	initializeTracking: function () {
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().initializeTrackingSettings($.ig.SPEvoAnalyticsUtility.prototype._trackingId, $.ig.SPEvoAnalyticsUtility.prototype._dispatchInterval, "SharePlus vNext", "1.0");
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory("App", "Started", "");
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::InitializeTracking()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::UserFileUpdated(Infragistics.EMUserFile)" />*/
	userFileUpdated: function (userFile) {
		if (userFile != null && userFile.identifier() != null) {
			$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().setUserId(userFile.identifier());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::UserFileUpdated(Infragistics.EMUserFile)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::OnWidgetCreated(Infragistics.EMBoardSection, Infragistics.EMBoardWidgetBase)" />*/
	onWidgetCreated: function (section, widget) {
		if ($.ig.SPEvoAnalyticsUtility.prototype.isWidgetTypeAlreadyInSection(section, widget.type())) {
			$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryWidgets, $.ig.SPEvoGoogleAnalyticsContants.prototype.actionRepeatedWidgetTypeInSectionAdded, "Type: " + widget.type());
		}
		$.ig.GoogleAnalyticsHelper.prototype.sharedInstance().registerEventWithCategory($.ig.SPEvoGoogleAnalyticsContants.prototype.categoryWidgets, $.ig.EMGoogleAnalyticsConstants.prototype.actionCreate, "Type: " + widget.type() + ", SectionId: " + section.identifier() + ", SectionNewWidgetCount: " + section.widgets().length);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoAnalyticsUtility::OnWidgetCreated(Infragistics.EMBoardSection, Infragistics.EMBoardWidgetBase)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.SPEvoAnalyticsUtility::IsWidgetTypeAlreadyInSection(Infragistics.EMBoardSection, System.String)" />*/
	isWidgetTypeAlreadyInSection: function (section, widgetType) {
		for (var i = 0; i < section.widgets().length; i++) {
			var widget = section.widgets()[i];
			if (widget.type() == widgetType) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.SPEvoAnalyticsUtility::IsWidgetTypeAlreadyInSection(Infragistics.EMBoardSection, System.String)" />*/
	,
	$type: new $.ig.Type('SPEvoAnalyticsUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoAnalyticsUtility" />*/

/*<BeginType Name="Infragistics.SPSignInManager" />*/

$.ig.util.defType('SPSignInManager', 'EMSignInManager', {
	init: function () {
		$.ig.EMSignInManager.prototype.init.call(this);
		$.ig.SPEvoAnalyticsUtility.prototype.initializeTracking();
	},
	/*<BeginMethod Name="Infragistics.CPViewController Infragistics.SPSignInManager::ResolveRootViewController()" />*/
	resolveRootViewController: function () {
		return createRootVC();
	}
	/*<EndMethod Name="Infragistics.CPViewController Infragistics.SPSignInManager::ResolveRootViewController()" />*/
	,
	$type: new $.ig.Type('SPSignInManager', $.ig.EMSignInManager.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPSignInManager" />*/

/*<BeginType Name="Infragistics.SPEvoSelectorButton" />*/

$.ig.util.defType('SPEvoSelectorButton', 'CPSplitButton', {
	__selectBlock: null,
	__separator: null,
	__itemsCountLabel: null,
	__selectedItemsLabel: null,
	__selectedContainer: null,
	__overFlowButton: null,
	__popupItems: null,
	__itemsCount: 0,
	init: function (cancelBlock, selectBlock, mainAction, popupItems, icon) {
		var $self = this;
		$.ig.CPSplitButton.prototype.init.call(this, "", "Cancel", mainAction, cancelBlock, $.ig.ThemeManager.prototype.currentTheme().confirmColor());
		this.__selectBlock = selectBlock;
		this.__popupItems = popupItems;
		this.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.contentView().setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeItemBackgroundColor());
		this.__separator = new $.ig.CPViewBase();
		this.__separator.setBackgroundColor($.ig.ThemeManager.prototype.currentTheme().nativeMainOutlineColor());
		this.addSubContentView(this.__separator);
		this.__itemsCountLabel = new $.ig.CPLabel();
		this.__itemsCountLabel.setTextAlignment($.ig.TextAlignment.prototype.center);
		this.__itemsCountLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__itemsCountLabel.setText("0");
		this.addSubContentView(this.__itemsCountLabel);
		this.__selectedItemsLabel = new $.ig.CPLabel();
		this.__selectedItemsLabel.setTextAlignment($.ig.TextAlignment.prototype.center);
		this.__selectedItemsLabel.setText($.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.selected));
		this.__selectedItemsLabel.setTextColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.addSubContentView(this.__selectedItemsLabel);
		this.__selectedContainer = new $.ig.CPInteractionView();
		this.addSubContentView(this.__selectedContainer);
		this.__selectedContainer.addClickHandler(function (x, y) {
			if ($self.__selectBlock != null) {
				$self.__selectBlock();
			}
		});
		this.__overFlowButton = new $.ig.PathIconButton(0);
		this.__overFlowButton.setBackgroundColor($.ig.ColorUtility.prototype.convertToNative(0));
		this.__overFlowButton.setIcon($.ig.UIPathIcons.prototype.icons().getOverflowIcon());
		this.__overFlowButton.setOutlineOnly(false);
		this.__overFlowButton.highlightMode($.ig.CPInteractionViewMode.prototype.custom);
		this.__overFlowButton.setColor($.ig.ThemeManager.prototype.currentTheme().nativeItemTitleColor());
		this.__overFlowButton.addClickHandler(function (x, y) {
			$self.overflowClicked();
		});
		this.addSubContentView(this.__overFlowButton);
		this.confirmButton().setIcon(icon);
	},
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorButton::CancelClicked()" />*/
	cancelClicked: function () {
		$.ig.CPSplitButton.prototype.cancelClicked.call(this);
		this.__itemsCount = 0;
		this.__itemsCountLabel.setText("0");
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorButton::CancelClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorButton::LayoutContentArea(System.Single, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	layoutContentArea: function (fontSize, x, y, w, h) {
		var left = x;
		var sw = $.ig.NativeUIUtility.prototype.utility().densify(1);
		this.measureView(this.__separator, left, 0, sw, h);
		var padding = $.ig.truncate((h * 0.3));
		left += sw + padding;
		var cx = left - padding;
		var countLabelFontSize = (fontSize * 1.12);
		this.__itemsCountLabel.setFont(countLabelFontSize, $.ig.ThemeManager.prototype.currentTheme().boldFont());
		this.__itemsCountLabel.calculateSizeToFit();
		var clw = this.__itemsCountLabel.getCalculatedWidth();
		var clh = this.__itemsCountLabel.getCalculatedHeight();
		this.measureContentSubView(this.__itemsCountLabel, left, $.ig.intDivide(h, 2) - $.ig.intDivide(clh, 2), clw, clh);
		padding = $.ig.truncate((h * 0.1));
		left += clw + padding;
		var selectedLabelFontSize = (fontSize * 0.75);
		this.__selectedItemsLabel.setFont(selectedLabelFontSize, $.ig.ThemeManager.prototype.currentTheme().regularFont());
		this.__selectedItemsLabel.calculateSizeToFit();
		var slw = this.__selectedItemsLabel.getCalculatedWidth();
		var slh = this.__selectedItemsLabel.getCalculatedHeight();
		this.measureContentSubView(this.__selectedItemsLabel, left, $.ig.intDivide(h, 2) - $.ig.intDivide(slh, 2), slw, slh);
		var iconSize = $.ig.truncate((h * 0.55));
		this.__overFlowButton.setIconSize(iconSize);
		var ow = h;
		var aw = $.ig.truncate((h * 1.17));
		var right = (this.__itemsCount == 0) ? this.currentWidth() + aw + ow : this.currentWidth();
		right -= aw;
		this.confirmButton().setIconSize(iconSize);
		$.ig.CPSplitButton.prototype.layoutContentArea.call(this, fontSize, right, 0, aw, h);
		right -= ow;
		this.measureContentSubView(this.__overFlowButton, right, 0, ow, h);
		this.measureContentSubView(this.__selectedContainer, cx, 0, right - cx, h);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorButton::LayoutContentArea(System.Single, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorButton::OverflowClicked()" />*/
	overflowClicked: function () {
		var count = this.__popupItems.length;
		for (var i = 0; i < count; i++) {
			var item = this.__popupItems[i];
			item._isSelected = false;
		}
		$.ig.CPPopupManager.prototype.showList3(this.__overFlowButton, this.contentView(), this.__popupItems, $.ig.CPPopupPosition.prototype.above, null, null);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorButton::OverflowClicked()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SPEvoSelectorButton::UpdateItemsCount(System.Int32)" />*/
	updateItemsCount: function (count) {
		var animate = (this.__itemsCount == 0 && count > 0) || (count == 0 && this.__itemsCount > 0);
		this.__itemsCount = count;
		this.__itemsCountLabel.setText(count.toString());
		this.animateSizeChanged(true);
	}
	/*<EndMethod Name="System.Void Infragistics.SPEvoSelectorButton::UpdateItemsCount(System.Int32)" />*/
	,
	$type: new $.ig.Type('SPEvoSelectorButton', $.ig.CPSplitButton.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SPEvoSelectorButton" />*/

var $allResources = {
	getString: function(name) {
		var str = this.stringResources[name];
		if (!str) return null;
		if (arguments.length === 1) return str;
		return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
	},
	getManifestResourceStream: function(name) {
		var str = this.embeddedFiles[name];
		if (!str) return null;
		var data = $.ig.util.b64toUint8Array(str);
		return new $.ig.MemoryStream(2, data);
	},
	stringResources: {
		"test": "test"
	}
};

/*<BeginStatics Name="Infragistics.SPEvoSelectorDepth" />*/

$.ig.SPEvoSelectorDepth.prototype.board = 0;
$.ig.SPEvoSelectorDepth.prototype.team = 1;
$.ig.SPEvoSelectorDepth.prototype.section = 2;
$.ig.SPEvoSelectorDepth.prototype.contentWidget = 3;
/*<EndStatics Name="Infragistics.SPEvoSelectorDepth" />*/

/*<BeginStatics Name="Infragistics.SPEvoSearchResultsSectionInfoState" />*/

$.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateLoading = 0;
$.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateError = 1;
$.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateNoResults = 2;
$.ig.SPEvoSearchResultsSectionInfoState.prototype.searchResultsSectionInfoStateResults = 3;
/*<EndStatics Name="Infragistics.SPEvoSearchResultsSectionInfoState" />*/

/*<BeginStatics Name="Infragistics.SPEvoSearchFilterModificationDate" />*/

$.ig.SPEvoSearchFilterModificationDate.prototype.notSet = 0;
$.ig.SPEvoSearchFilterModificationDate.prototype.past24Hours = 1;
$.ig.SPEvoSearchFilterModificationDate.prototype.pastWeek = 2;
$.ig.SPEvoSearchFilterModificationDate.prototype.pastMonth = 3;
$.ig.SPEvoSearchFilterModificationDate.prototype.pastSixMonths = 4;
$.ig.SPEvoSearchFilterModificationDate.prototype.pastYear = 5;
$.ig.SPEvoSearchFilterModificationDate.prototype.earlier = 6;
/*<EndStatics Name="Infragistics.SPEvoSearchFilterModificationDate" />*/

/*<BeginStatics Name="Infragistics.SPEvoSearchFilterResultType" />*/

$.ig.SPEvoSearchFilterResultType.prototype.notSet = 0;
$.ig.SPEvoSearchFilterResultType.prototype.files = 1;
$.ig.SPEvoSearchFilterResultType.prototype.documents = 2;
$.ig.SPEvoSearchFilterResultType.prototype.spreadsheets = 3;
$.ig.SPEvoSearchFilterResultType.prototype.presentations = 4;
$.ig.SPEvoSearchFilterResultType.prototype.pDF = 5;
$.ig.SPEvoSearchFilterResultType.prototype.images = 6;
$.ig.SPEvoSearchFilterResultType.prototype.visualizations = 7;
$.ig.SPEvoSearchFilterResultType.prototype.sites = 8;
/*<EndStatics Name="Infragistics.SPEvoSearchFilterResultType" />*/

/*<BeginStatics Name="Infragistics.SPEvoSearchFilterType" />*/

$.ig.SPEvoSearchFilterType.prototype.resultType = 0;
$.ig.SPEvoSearchFilterType.prototype.location = 1;
$.ig.SPEvoSearchFilterType.prototype.modificationDate = 2;
$.ig.SPEvoSearchFilterType.prototype.modifiedBy = 3;
$.ig.SPEvoSearchFilterType.prototype.keywords = 4;
/*<EndStatics Name="Infragistics.SPEvoSearchFilterType" />*/

/*<BeginStatics Name="Infragistics.CloudFileSelectionAction" />*/

$.ig.CloudFileSelectionAction.prototype.copy = 0;
$.ig.CloudFileSelectionAction.prototype.move = 1;
$.ig.CloudFileSelectionAction.prototype.select = 2;
/*<EndStatics Name="Infragistics.CloudFileSelectionAction" />*/

/*<BeginStatics Name="Infragistics.CloudFileSelectionType" />*/

$.ig.CloudFileSelectionType.prototype.files = 0;
$.ig.CloudFileSelectionType.prototype.folders = 1;
$.ig.CloudFileSelectionType.prototype.both = 2;
/*<EndStatics Name="Infragistics.CloudFileSelectionType" />*/

/*<BeginStatics Name="Infragistics.CloudFileSelectionMode" />*/

$.ig.CloudFileSelectionMode.prototype.optional = 0;
$.ig.CloudFileSelectionMode.prototype.never = 1;
$.ig.CloudFileSelectionMode.prototype.always = 2;
/*<EndStatics Name="Infragistics.CloudFileSelectionMode" />*/

/*<BeginStatics Name="Infragistics.CloudFileNavigationViewController" />*/

$.ig.CloudFileNavigationViewController.prototype.__downloadRequest = null;
$.ig.CloudFileNavigationViewController.prototype._lastProgressUpdated = 0;
/*<EndStatics Name="Infragistics.CloudFileNavigationViewController" />*/

/*<BeginStatics Name="Infragistics.SPEvoSearchResultsPresenter" />*/

$.ig.SPEvoSearchResultsPresenter.prototype._iTEMS_PER_PAGE = 10;
/*<EndStatics Name="Infragistics.SPEvoSearchResultsPresenter" />*/

/*<BeginStatics Name="Infragistics.SPEvoGoogleAnalyticsContants" />*/

$.ig.SPEvoGoogleAnalyticsContants.prototype.homeScreen = "HomeScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.cloudFileNavigationScreen = "CloudFileNavigatorScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.searchResultsScreen = "SearchResultsScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.searchScreen = "SearchScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.boardSectionSelectorScreen = "BoardSectionSelectorScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.boardWidgetSelectorScreen = "BoardWidgetSelectorScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.boardSelectorScreen = "BoardSelectorScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.createTeamScreen = "CreateTeamScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.addTeamMembersScreen = "AddTeamMembersScreen";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categoryLogin = "Login";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categoryProviders = "Providers";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categoryFileNavigation = "FileNavigation";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categorySearch = "Search";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categoryWidgets = "Widgets";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categorySections = "Sections";
$.ig.SPEvoGoogleAnalyticsContants.prototype.categoryBoards = "Boards";
$.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinStarted = "PinStarted";
$.ig.SPEvoGoogleAnalyticsContants.prototype.actionPinCompleted = "PinCompleted";
$.ig.SPEvoGoogleAnalyticsContants.prototype.actionSearchTriggered = "SearchTriggered";
$.ig.SPEvoGoogleAnalyticsContants.prototype.actionOpenFile = "OpenFile";
$.ig.SPEvoGoogleAnalyticsContants.prototype.actionRepeatedWidgetTypeInSectionAdded = "RepeatedWidgetTypeInSection";
/*<EndStatics Name="Infragistics.SPEvoGoogleAnalyticsContants" />*/

/*<BeginStatics Name="Infragistics.SPEvoHomeViewController" />*/

$.ig.SPEvoHomeViewController.prototype.sPEvoAddProviderPathPart = "addprovider";
/*<EndStatics Name="Infragistics.SPEvoHomeViewController" />*/

/*<BeginStatics Name="Infragistics.SPEvoRootViewController" />*/

$.ig.SPEvoRootViewController.prototype.pATH_HOME = "home";
$.ig.SPEvoRootViewController.prototype.pATH_WORKSPACES = "workspaces";
/*<EndStatics Name="Infragistics.SPEvoRootViewController" />*/

/*<BeginStatics Name="Infragistics.SPEvoAnalyticsUtility" />*/

$.ig.SPEvoAnalyticsUtility.prototype._dispatchInterval = 20;
$.ig.SPEvoAnalyticsUtility.prototype._trackingId = "UA-392932-22";
/*<EndStatics Name="Infragistics.SPEvoAnalyticsUtility" />*/


} (jQuery));

