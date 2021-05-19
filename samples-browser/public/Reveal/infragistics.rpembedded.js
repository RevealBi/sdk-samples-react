var RevealApi = (function (exports) {
    'use strict';

    /**
     * @enum
     */

    (function (RVDateFilterType) {
        /**No filter defined, all time is included */
        RVDateFilterType["AllTime"] = "allTime";
        /**Custom range, an instance of $.ig.RVDateRange must be set in the range property. */
        RVDateFilterType["CustomRange"] = "customRange";
        /**Last 7 days*/
        RVDateFilterType["LastWeek"] = "lastWeek";
        /**Last 30 days*/
        RVDateFilterType["LastMonth"] = "lastMonth";
        /**Last 365 days*/
        RVDateFilterType["LastYear"] = "lastYear";
        /**From Jan 1st this year to today*/
        RVDateFilterType["YearToDate"] = "yearToDate";
        /**From the first day of the current quarter*/
        RVDateFilterType["QuarterToDate"] = "quarterToDate";
        /**From the first day of the current month*/
        RVDateFilterType["MonthToDate"] = "monthToDate";
        /**Yesterday*/
        RVDateFilterType["Yesterday"] = "yesterday";
        /**Today*/
        RVDateFilterType["Today"] = "today";
        /**This month, including the rest of it*/
        RVDateFilterType["ThisMonth"] = "thisMonth";
        /**This quarter, including the rest of it*/
        RVDateFilterType["ThisQuarter"] = "thisQuarter";
        /**This year, including the rest of it. From Jan 1st to Dec 31st of the current year*/
        RVDateFilterType["ThisYear"] = "thisYear";
        /**The previous month*/
        RVDateFilterType["PreviousMonth"] = "previousMonth";
        /**The previous quarter*/
        RVDateFilterType["PreviousQuarter"] = "previousQuarter";
        /**The previous year*/
        RVDateFilterType["PreviousYear"] = "previousYear";
        /**The next month*/
        RVDateFilterType["NextMonth"] = "nextMonth";
        /**The next quarter*/
        RVDateFilterType["NextQuarter"] = "nextQuarter";
        /**The next year*/
        RVDateFilterType["NextYear"] = "nextYear";
        /**The last 12 complete months*/
        RVDateFilterType["TrailingTwelveMonths"] = "trailingTwelveMonths";
    })(exports.RVDateFilterType || (exports.RVDateFilterType = {}));

    /**
     * @class
     * @classdesc Class used to represent a date range for filtering.
     * @hideconstructor
     */
    class RVDateRange {
        constructor(from, to) {
            /**
             * The beginning of the range.
             * @name $.ig.RVDateRange#from
             * @type {Date}
             */
            this.from = from;
            /**
             * The end of the range.
             * @name $.ig.RVDateRange#to
             * @type {Date}
             */
            this.to = to;
        }
    }

    class FiltersUtility {
        static convertRuleType(rule) {
            switch (rule) {
                case $.ig.DashboardDateRuleType.prototype.allTime:
                case $.ig.DashboardDateRuleType.prototype.none:
                    return exports.RVDateFilterType.AllTime;
                case $.ig.DashboardDateRuleType.prototype.customRange:
                    return exports.RVDateFilterType.CustomRange;
                case $.ig.DashboardDateRuleType.prototype.lastMonth:
                    return exports.RVDateFilterType.LastMonth;
                case $.ig.DashboardDateRuleType.prototype.lastWeek:
                    return exports.RVDateFilterType.LastWeek;
                case $.ig.DashboardDateRuleType.prototype.lastYear:
                    return exports.RVDateFilterType.LastYear;
                case $.ig.DashboardDateRuleType.prototype.monthToDate:
                    return exports.RVDateFilterType.MonthToDate;
                case $.ig.DashboardDateRuleType.prototype.nextMonth:
                    return exports.RVDateFilterType.NextMonth;
                case $.ig.DashboardDateRuleType.prototype.nextQuarter:
                    return exports.RVDateFilterType.NextQuarter;
                case $.ig.DashboardDateRuleType.prototype.nextYear:
                    return exports.RVDateFilterType.NextYear;
                case $.ig.DashboardDateRuleType.prototype.previousMonth:
                    return exports.RVDateFilterType.PreviousMonth;
                case $.ig.DashboardDateRuleType.prototype.previousQuarter:
                    return exports.RVDateFilterType.PreviousQuarter;
                case $.ig.DashboardDateRuleType.prototype.previousYear:
                    return exports.RVDateFilterType.PreviousYear;
                case $.ig.DashboardDateRuleType.prototype.quarterToDate:
                    return exports.RVDateFilterType.QuarterToDate;
                case $.ig.DashboardDateRuleType.prototype.thisMonth:
                    return exports.RVDateFilterType.ThisMonth;
                case $.ig.DashboardDateRuleType.prototype.thisQuarter:
                    return exports.RVDateFilterType.ThisQuarter;
                case $.ig.DashboardDateRuleType.prototype.thisYear:
                    return exports.RVDateFilterType.ThisYear;
                case $.ig.DashboardDateRuleType.prototype.today:
                    return exports.RVDateFilterType.Today;
                case $.ig.DashboardDateRuleType.prototype.trailingTwelveMonths:
                    return exports.RVDateFilterType.TrailingTwelveMonths;
                case $.ig.DashboardDateRuleType.prototype.yearToDate:
                    return exports.RVDateFilterType.YearToDate;
                case $.ig.DashboardDateRuleType.prototype.yesterday:
                    return exports.RVDateFilterType.Yesterday;
                default:
                    return exports.RVDateFilterType.AllTime;
            }
        }
        static convertCustomRange(range) {
            if (!range) {
                return null;
            }
            return new RVDateRange(range.from(), range.to());
        }
        static convertRVDateFilterType(filterType) {
            switch (filterType) {
                case exports.RVDateFilterType.AllTime:
                    return $.ig.DashboardDateRuleType.prototype.allTime;
                case exports.RVDateFilterType.CustomRange:
                    return $.ig.DashboardDateRuleType.prototype.customRange;
                case exports.RVDateFilterType.LastMonth:
                    return $.ig.DashboardDateRuleType.prototype.lastMonth;
                case exports.RVDateFilterType.LastWeek:
                    return $.ig.DashboardDateRuleType.prototype.lastWeek;
                case exports.RVDateFilterType.LastYear:
                    return $.ig.DashboardDateRuleType.prototype.lastYear;
                case exports.RVDateFilterType.MonthToDate:
                    return $.ig.DashboardDateRuleType.prototype.monthToDate;
                case exports.RVDateFilterType.NextMonth:
                    return $.ig.DashboardDateRuleType.prototype.nextMonth;
                case exports.RVDateFilterType.NextQuarter:
                    return $.ig.DashboardDateRuleType.prototype.nextQuarter;
                case exports.RVDateFilterType.NextYear:
                    return $.ig.DashboardDateRuleType.prototype.nextYear;
                case exports.RVDateFilterType.PreviousMonth:
                    return $.ig.DashboardDateRuleType.prototype.previousMonth;
                case exports.RVDateFilterType.PreviousQuarter:
                    return $.ig.DashboardDateRuleType.prototype.previousQuarter;
                case exports.RVDateFilterType.PreviousYear:
                    return $.ig.DashboardDateRuleType.prototype.previousYear;
                case exports.RVDateFilterType.QuarterToDate:
                    return $.ig.DashboardDateRuleType.prototype.quarterToDate;
                case exports.RVDateFilterType.ThisMonth:
                    return $.ig.DashboardDateRuleType.prototype.thisMonth;
                case exports.RVDateFilterType.ThisQuarter:
                    return $.ig.DashboardDateRuleType.prototype.thisQuarter;
                case exports.RVDateFilterType.ThisYear:
                    return $.ig.DashboardDateRuleType.prototype.thisYear;
                case exports.RVDateFilterType.Today:
                    return $.ig.DashboardDateRuleType.prototype.today;
                case exports.RVDateFilterType.TrailingTwelveMonths:
                    return $.ig.DashboardDateRuleType.prototype.trailingTwelveMonths;
                case exports.RVDateFilterType.YearToDate:
                    return $.ig.DashboardDateRuleType.prototype.yearToDate;
                case exports.RVDateFilterType.Yesterday:
                    return $.ig.DashboardDateRuleType.prototype.yesterday;
                default:
                    return $.ig.DashboardDateRuleType.prototype.allTime;
            }
        }
        static convertRVDateRange(range) {
            if (range == null) {
                return null;
            }
            var dashboardRange = new $.ig.DateRange(0);
            dashboardRange.from($.ig.util.toNullable($.ig.Date.prototype.$type, range.from));
            dashboardRange.to($.ig.util.toNullable($.ig.Date.prototype.$type, range.to));
            return dashboardRange;
        }
        static extractSelectedValuesForFilter(gf) {
            var selectedItems = gf.selectedItems();
            var keyFieldName = FiltersUtility.getSelectedFieldName(gf);
            if (keyFieldName == null) {
                return [];
            }
            var values = new Array();
            for (var i = 0; i < selectedItems.length; i++) {
                var item = selectedItems[i];
                var fieldValues = item.fieldValues();
                if (fieldValues.containsKey(keyFieldName)) {
                    values.push(fieldValues.getObjectValue(keyFieldName));
                }
            }
            return values;
        }
        static getSelectedFieldName(filter) {
            if ($.ig.util.cast($.ig.TabularGlobalFilter.prototype.$type, filter) !== null) {
                return filter.selectedFieldName();
            }
            else if ($.ig.util.cast($.ig.XmlaGlobalFilter.prototype.$type, filter) !== null) {
                return "MEMBER_CAPTION";
            }
            else {
                return null;
            }
        }
        static findFilterById(filters, id) {
            for (var i = 0; i < filters.length; i++) {
                if (filters[i].id == id) {
                    return filters[i];
                }
            }
            return null;
        }
    }

    /**
     * @class
     * @classdesc Class representing a possible value for a dashboard filter, retrieved from {@link $.ig.RevealUtility.getFilterValues}
     * @hideconstructor
     * @see $.ig.RevealUtility#getFilterValues
     */
    class RVFilterValue {
        constructor(value, label) {
            /**
             * The dictionary with all values associated to this filter value, this object needs to be used when setting selected values for the filter.
             * @name $.ig.RVFilterValue#value
             * @type {object}
             */
            this.value = value;
            /**
             * The label used to show this value to the user.
             * @name $.ig.RVFilterValue#label
             * @type {string}
             */
            this.label = label;
        }
    }

    /**
     * @class
     * @classdesc Class used to represent a dashboard filter.
     * @hideconstructor
     */
    class RVDashboardFilter {
        constructor(filterModel) {
            this._filterModel = null;
            this._selectedValues = new Array();
            this._filterModel = filterModel;
            this._selectedValues = FiltersUtility.extractSelectedValuesForFilter(filterModel);
        }
        /**
         * The ID of the filter.
         * @returns {string} the ID of the date filter
         */
        get id() {
            return this._filterModel.id();
        }
        /**
         * The title of the filter.
         * @returns {string} the title of the filter.
         */
        get title() {
            return this._filterModel.title();
        }
        get selectedValues() {
            return this._selectedValues;
        }
        set selectedValues(v) {
            this._selectedValues = v;
            if (this._dashboard) {
                this._dashboard._notifyViewsThatFilterSelectedValuesChanged(null);
            }
        }
        getFilterValues(callback, errorCallback) {
            $.ig.FiltersUtility.prototype.utility().getGlobalFilterData(this._dashboard._dashboardModel, this._dashboard._dashboardModel.globalFilters(), this._filterModel, null, null, null, function (result) {
                var values = result.values();
                var rvValues = [];
                for (var i = 0; i < values.length; i++) {
                    var gfValue = values[i];
                    var rvValue = new RVFilterValue(gfValue.values().getValuesDictionary(), gfValue.label());
                    rvValues.push(rvValue);
                }
                callback(rvValues);
            }, function (error) {
                console.log(error.errorMessage());
                errorCallback(error.errorMessage());
            });
        }
    }

    /**
     * @enum
     */
    var RVChartType;
    (function (RVChartType) {
        RVChartType["Pivot"] = "Pivot";
        RVChartType["Grid"] = "Grid";
        RVChartType["AreaChart"] = "AreaChart";
        RVChartType["BarChart"] = "BarChart";
        RVChartType["BubbleChart"] = "BubbleChart";
        RVChartType["CandlestickChart"] = "CandlestickChart";
        RVChartType["ColumnChart"] = "ColumnChart";
        RVChartType["ComboChart"] = "ComboChart";
        RVChartType["DoughnutChart"] = "DoughnutChart";
        RVChartType["FunnelChart"] = "FunnelChart";
        RVChartType["LineChart"] = "LineChart";
        RVChartType["OHLC_Chart"] = "OHLC_Chart";
        RVChartType["PieChart"] = "PieChart";
        RVChartType["RadialLineChart"] = "RadialLineChart";
        RVChartType["ScatterChart"] = "ScatterChart";
        RVChartType["SplineChart"] = "SplineChart";
        RVChartType["SplineAreaChart"] = "SplineAreaChart";
        RVChartType["StackedAreaChart"] = "StackedAreaChart";
        RVChartType["StackedBarChart"] = "StackedBarChart";
        RVChartType["StackedColumnChart"] = "StackedColumnChart";
        RVChartType["StepAreaChart"] = "StepAreaChart";
        RVChartType["StepLineChart"] = "StepLineChart";
        RVChartType["RadialGauge"] = "RadialGauge";
        RVChartType["BulletGraph"] = "BulletGraph";
        RVChartType["LinearGauge"] = "LinearGauge";
        RVChartType["LabelGauge"] = "LabelGauge";
        RVChartType["TreeMap"] = "TreeMap";
        RVChartType["Image"] = "Image";
        RVChartType["DIY"] = "DIY";
        RVChartType["TextView"] = "TextView";
        RVChartType["Indicator"] = "Indicator";
        RVChartType["IndicatorTarget"] = "IndicatorTarget";
        RVChartType["Sparkline"] = "Sparkline";
        RVChartType["TextBox"] = "TextBox";
        RVChartType["Choropleth"] = "Choropleth";
        RVChartType["ScatterMap"] = "ScatterMap";
        RVChartType["TimeSeriesChart"] = "TimeSeriesChart";
    })(RVChartType || (RVChartType = {}));

    class RVChartTypeHelper {
        static toVisualizationType(chartType) {
            switch (chartType) {
                case RVChartType.AreaChart:
                    return $.ig.VisualizationType.prototype.areaChart;
                case RVChartType.BarChart:
                    return $.ig.VisualizationType.prototype.barChart;
                case RVChartType.BubbleChart:
                    return $.ig.VisualizationType.prototype.bubbleChart;
                case RVChartType.BulletGraph:
                    return $.ig.VisualizationType.prototype.bulletGraph;
                case RVChartType.CandlestickChart:
                    return $.ig.VisualizationType.prototype.candlestickChart;
                case RVChartType.Choropleth:
                    return $.ig.VisualizationType.prototype.choroplethMap;
                case RVChartType.ColumnChart:
                    return $.ig.VisualizationType.prototype.columnChart;
                case RVChartType.ComboChart:
                    return $.ig.VisualizationType.prototype.compositeChart;
                case RVChartType.DIY:
                    return $.ig.VisualizationType.prototype.jSExtension;
                case RVChartType.DoughnutChart:
                    return $.ig.VisualizationType.prototype.doughnutChart;
                case RVChartType.FunnelChart:
                    return $.ig.VisualizationType.prototype.funnelChart;
                case RVChartType.Grid:
                    return $.ig.VisualizationType.prototype.grid;
                case RVChartType.Image:
                    return $.ig.VisualizationType.prototype.image;
                case RVChartType.Indicator:
                    return $.ig.VisualizationType.prototype.indicator;
                case RVChartType.IndicatorTarget:
                    return $.ig.VisualizationType.prototype.indicatorTarget;
                case RVChartType.LabelGauge:
                    return $.ig.VisualizationType.prototype.labelGauge;
                case RVChartType.LinearGauge:
                    return $.ig.VisualizationType.prototype.linearGauge;
                case RVChartType.LineChart:
                    return $.ig.VisualizationType.prototype.lineChart;
                case RVChartType.OHLC_Chart:
                    return $.ig.VisualizationType.prototype.oHLC_Chart;
                case RVChartType.PieChart:
                    return $.ig.VisualizationType.prototype.pieChart;
                case RVChartType.Pivot:
                    return $.ig.VisualizationType.prototype.pivot;
                case RVChartType.RadialGauge:
                    return $.ig.VisualizationType.prototype.radialGauge;
                case RVChartType.RadialLineChart:
                    return $.ig.VisualizationType.prototype.radialLineChart;
                case RVChartType.ScatterChart:
                    return $.ig.VisualizationType.prototype.scatterChart;
                case RVChartType.ScatterMap:
                    return $.ig.VisualizationType.prototype.scatterMap;
                case RVChartType.Sparkline:
                    return $.ig.VisualizationType.prototype.sparkline;
                case RVChartType.SplineAreaChart:
                    return $.ig.VisualizationType.prototype.splineAreaChart;
                case RVChartType.SplineChart:
                    return $.ig.VisualizationType.prototype.splineChart;
                case RVChartType.StackedAreaChart:
                    return $.ig.VisualizationType.prototype.stackedAreaChart;
                case RVChartType.StackedBarChart:
                    return $.ig.VisualizationType.prototype.stackedBarChart;
                case RVChartType.StackedColumnChart:
                    return $.ig.VisualizationType.prototype.stackedColumnChart;
                case RVChartType.StepAreaChart:
                    return $.ig.VisualizationType.prototype.stepAreaChart;
                case RVChartType.StepLineChart:
                    return $.ig.VisualizationType.prototype.stepLineChart;
                case RVChartType.TextBox:
                    return $.ig.VisualizationType.prototype.textBox;
                case RVChartType.TextView:
                    return $.ig.VisualizationType.prototype.singleRow;
                case RVChartType.TreeMap:
                    return $.ig.VisualizationType.prototype.treeMap;
                case RVChartType.TimeSeriesChart:
                    return $.ig.VisualizationType.prototype.timeSeriesChart;
                default:
                    return $.ig.VisualizationType.prototype.pivot;
            }
        }
        static toChartType(vizType) {
            switch (vizType) {
                case $.ig.VisualizationType.prototype.areaChart:
                    return RVChartType.AreaChart;
                case $.ig.VisualizationType.prototype.barChart:
                    return RVChartType.BarChart;
                case $.ig.VisualizationType.prototype.bubbleChart:
                    return RVChartType.BubbleChart;
                case $.ig.VisualizationType.prototype.bulletGraph:
                    return RVChartType.BulletGraph;
                case $.ig.VisualizationType.prototype.candlestickChart:
                    return RVChartType.CandlestickChart;
                case $.ig.VisualizationType.prototype.choroplethMap:
                    return RVChartType.Choropleth;
                case $.ig.VisualizationType.prototype.columnChart:
                    return RVChartType.ColumnChart;
                case $.ig.VisualizationType.prototype.compositeChart:
                    return RVChartType.ComboChart;
                case $.ig.VisualizationType.prototype.doughnutChart:
                    return RVChartType.DoughnutChart;
                case $.ig.VisualizationType.prototype.funnelChart:
                    return RVChartType.FunnelChart;
                case $.ig.VisualizationType.prototype.grid:
                    return RVChartType.Grid;
                case $.ig.VisualizationType.prototype.image:
                    return RVChartType.Image;
                case $.ig.VisualizationType.prototype.indicator:
                    return RVChartType.Indicator;
                case $.ig.VisualizationType.prototype.indicatorTarget:
                    return RVChartType.IndicatorTarget;
                case $.ig.VisualizationType.prototype.jSExtension:
                    return RVChartType.DIY;
                case $.ig.VisualizationType.prototype.labelGauge:
                    return RVChartType.LabelGauge;
                case $.ig.VisualizationType.prototype.linearGauge:
                    return RVChartType.LinearGauge;
                case $.ig.VisualizationType.prototype.lineChart:
                    return RVChartType.LineChart;
                case $.ig.VisualizationType.prototype.oHLC_Chart:
                    return RVChartType.OHLC_Chart;
                case $.ig.VisualizationType.prototype.pieChart:
                    return RVChartType.PieChart;
                case $.ig.VisualizationType.prototype.radialGauge:
                    return RVChartType.RadialGauge;
                case $.ig.VisualizationType.prototype.radialLineChart:
                    return RVChartType.RadialLineChart;
                case $.ig.VisualizationType.prototype.scatterChart:
                    return RVChartType.ScatterChart;
                case $.ig.VisualizationType.prototype.scatterMap:
                    return RVChartType.ScatterMap;
                case $.ig.VisualizationType.prototype.singleRow:
                    return RVChartType.TextView;
                case $.ig.VisualizationType.prototype.sparkline:
                    return RVChartType.Sparkline;
                case $.ig.VisualizationType.prototype.splineAreaChart:
                    return RVChartType.SplineAreaChart;
                case $.ig.VisualizationType.prototype.splineChart:
                    return RVChartType.SplineChart;
                case $.ig.VisualizationType.prototype.stackedAreaChart:
                    return RVChartType.StackedAreaChart;
                case $.ig.VisualizationType.prototype.stackedBarChart:
                    return RVChartType.StackedBarChart;
                case $.ig.VisualizationType.prototype.stackedColumnChart:
                    return RVChartType.StackedColumnChart;
                case $.ig.VisualizationType.stepAreaChart:
                    return RVChartType.StepAreaChart;
                case $.ig.VisualizationType.prototype.stepLineChart:
                    return RVChartType.StepLineChart;
                case $.ig.VisualizationType.prototype.textBox:
                    return RVChartType.TextBox;
                case $.ig.VisualizationType.prototype.treeMap:
                    return RVChartType.TreeMap;
                case $.ig.VisualizationType.prototype.timeSeriesChart:
                    return RVChartType.TimeSeriesChart;
                case $.ig.VisualizationType.prototype.rawData:
                case $.ig.VisualizationType.prototype.polarLineChart:
                case $.ig.VisualizationType.prototype.heatMap:
                case $.ig.VisualizationType.prototype.map:
                case $.ig.VisualizationType.prototype.scriptPython:
                case $.ig.VisualizationType.prototype.scriptR:
                case $.ig.VisualizationType.prototype.pivot:
                default:
                    return RVChartType.Pivot;
            }
        }
    }

    /**
     * @class
     * @classdesc The class representing a visualization (widget) in the dashboard model.
     * @hideconstructor
     */
    class RVVisualization {
        constructor(widgetModel) {
            this._widgetModel = null;
            this._widgetModel = widgetModel;
        }
        /**
         * The ID of the visualization
         * @returns {string} The ID of the visualization
         */
        get id() {
            return this._widgetModel.id();
        }
        /**
         * The title of the visualization
         * @returns {string} The title of the visualization
         */
        get title() {
            return this._widgetModel.title();
        }
        get chartType() {
            return RVChartTypeHelper.toChartType($.ig.VisualizationHelper.prototype.resolveType(this._widgetModel.visualizationSettings()));
        }
    }

    /**
     * @class
     * @classdesc Class representing the optional date filter defined in a dashboard model.
     * @hideconstructor
     */
    class RVDateDashboardFilter {
        constructor(filterType, range, filterModel) {
            this._dashboard = null;
            this._range = null;
            if (filterModel) {
                this._filterModel = filterModel;
                this._dateFilterType = FiltersUtility.convertRuleType(filterModel.ruleType());
                this._range = FiltersUtility.convertCustomRange(filterModel.customDateRange());
            }
            else if (filterType != null) {
                this._dateFilterType = filterType;
                if (filterType == exports.RVDateFilterType.CustomRange && range == null) {
                    return;
                }
                this._range = range;
                this._filterModel = new $.ig.DateGlobalFilter(0);
                this._filterModel.id("_date");
                this._filterModel.ruleType(FiltersUtility.convertRVDateFilterType(filterType));
                if (range !== undefined) {
                    this._filterModel.customDateRange(FiltersUtility.convertRVDateRange(range));
                }
            }
        }
        /**
         * The type of date filter, like YearToDate, MonthToDate, CustomRange, etc.
         * @name $.ig.RVDateDashboardFilter#dateFilterType
         * @type {$.ig.RVDateFilterType}
         */
        get dateFilterType() {
            return this._dateFilterType;
        }
        /**
         * The custom date range used for filtering, only valid when filterType is CustomRange
         * @name $.ig.RVDateDashboardFilter#range
         * @type {$.ig.RVDateRange}
         */
        get range() {
            return this._range;
        }
    }

    /**
     * @class
     * @classdesc Utility class used to load dashboards.
     * @hideconstructor
     */
    class RevealUtility {
        /**
         * Loads the dashboard with the given ID from the standard endpoint in the server.
         * @param {string} dashboardId The ID of the dashboard to open, this ID will be received in the server: IRevealSdkContext.GetDashboardAsync
         * @param {function} onSuccess A callback that will receive an instance of $.ig.RVDashboard class if the loading was successful.
         * @param {function} onError A callback with the error message if the loading operation failed.
         */
        static loadDashboard(dashboardId, onSuccess, onError) {
            if (dashboardId != null) {
                var getDashboardRequest = $.ig.ReportPlusWebSdkRequest.prototype.getDashboard(dashboardId, function (_req, res) {
                    var dashboard = new $.ig.DashboardDocument(1, res);
                    var rvDashboard = RVDashboard._create(dashboard, dashboardId);
                    onSuccess(rvDashboard);
                }, function (_req, err) {
                    var errorMessage = err.errorMessage();
                    console.error(errorMessage);
                    onError(errorMessage);
                });
                getDashboardRequest.execute();
            }
            else {
                onSuccess(RVDashboard._create(new $.ig.DashboardDocument(0), "New dashboard"));
            }
        }
        /**
         * Loads a dashboard from the Blob object with the contents of a .rdash file.
         * @param {Blob} blob The Blob object containing the binary contents of the dashboard in rdash file format.
         * @param {function} onSuccess A callback that will receive an instance of $.ig.RVDashboard class if the loading was successful.
         * @param {function} onError A callback with the error message if the loading operation failed.
         */
        static loadDashboardFromContainer(blob, onSuccess, onError) {
            var cpfile = new $.ig.CPFile();
            cpfile.data(blob);
            $.ig.ReportPlusWebSdkRequest.prototype
                .readDashboardDocument(cpfile, function (dashboardDoc) {
                onSuccess(RVDashboard._create(dashboardDoc, "some dashboard name")); //TODO - kk - what should be the id when loading from blob?
            }, function (_r, error) {
                onError(error);
            })
                .execute();
        }
        /**
         * Generates a new universal identifier.
         * @returns a generated UID
         */
        static generateUID() {
            return $.ig.NativeStringUtility.prototype.generateUID();
        }
        // /**
        //  * Method used to get the possible values for a given filter.
        //  * For a Country filter, this will return the list of all countries, not only the selected ones.
        //  * You can use this method to create your own UI to select filter values.
        //  * @param {$.ig.RVDashboard} dashboard The dashboard object obtained with {@link $.ig.RevealUtility.loadDashboard}
        //  * @param {$.ig.RVDashboardFilter} filter The filter to return the values for, a member of the collection {@link $.ig.RVDashboard#filters},
        //  * might be obtained also using {@link $.ig.RVDashboard#getFilterByTitle} or {@link $.ig.RVDashboard#getFilterById}
        //  * @param {function} callback Callback function that will be invoked with a list of {@link $.ig.RVFilterValue} objects representing the list of available values for the given filter.
        //  * @param {function} errorCallback Callback function with the errorMessage if the request failed.
        //  */
        // static getFilterValues(
        //   dashboard: RVDashboard,
        //   filter: RVDashboardFilter,
        //   callback: (values: RVFilterValue[]) => void,
        //   errorCallback: (msg: string) => void
        // ) {
        //   $.ig.FiltersUtility.prototype.utility().getGlobalFilterData(
        //     dashboard._dashboardModel,
        //     dashboard._dashboardModel.globalFilters(),
        //     filter._filterModel,
        //     null,
        //     null,
        //     null,
        //     function (result: any) {
        //       var values = result.values();
        //       var rvValues = [];
        //       for (var i = 0; i < values.length; i++) {
        //         var gfValue = values[i];
        //         var rvValue = new RVFilterValue(
        //           gfValue.values().getValuesDictionary(),
        //           gfValue.label()
        //         );
        //         rvValues.push(rvValue);
        //       }
        //       callback(rvValues);
        //     },
        //     function (error: any) {
        //       console.log(error.errorMessage());
        //       errorCallback(error.errorMessage());
        //     }
        //   );
        // }
        static _isObject(a) {
            return !!a && a.constructor === Object;
        }
        static _listContains(list, value) {
            var count = list.length;
            for (var i = 0; i < count; i++) {
                var v = list[i];
                if (v == value) {
                    return true;
                }
            }
            return false;
        }
        static _forAllElements(list, pos, eachBlock, endBlock) {
            if (pos < list.length) {
                eachBlock(list[pos], function () {
                    RevealUtility._forAllElements(list, pos + 1, eachBlock, endBlock);
                });
            }
            else {
                endBlock();
            }
        }
        static _transformToWrappers(revealDsObj) {
            var dss = revealDsObj.dataSources();
            var dsis = revealDsObj.dataSourceItems();
            var newdss = [];
            var newdsis = [];
            if (dss != null) {
                dss.forEach((v) => {
                    newdss.push(this._convertDataSource(v));
                });
            }
            if (dsis != null) {
                dsis.forEach((v) => {
                    newdsis.push(this._convertDataSourceItem(v));
                });
            }
            revealDsObj.dataSources(newdss);
            revealDsObj.dataSourceItems(newdsis);
            return revealDsObj;
        }
        static _convertDataSource(ds) {
            if (ds._type) { //json with internal data source
                return $.ig.BaseDataSource.prototype.fromJson(ds);
            }
            return ds._getWrapper();
        }
        static _convertDataSourceItem(dsItem) {
            if (dsItem._type) { //json with internal data source item
                return $.ig.BaseDataSourceItem.prototype.fromJson(dsItem);
            }
            return dsItem._getWrapper();
        }
    }

    class SdkDocumentDelegate {
        constructor(dashboard) {
            this._dashboard = dashboard;
        }
        widgetAdded(widget, index) {
            this._dashboard._widgetAdded(widget, index);
        }
        titleUpdated(newTitle) {
            this._dashboard._titleUpdated(newTitle);
        }
        widgetDeleted(index) {
            this._dashboard._widgetDeleted(index);
        }
        widgetMoved(from, to) {
            this._dashboard._widgetMoved(from, to);
        }
        widgetUpdated(widget) {
            this._dashboard._widgetUpdated(widget);
        }
        dashboardFilterUpdated(filter, index) {
            this._dashboard._filterUpdated(filter, index);
        }
        dashboardFilterDeleted(filter, index) {
            this._dashboard._filterDeleted(filter, index);
        }
        dashboardFilterAdded(filter, index) {
            this._dashboard._filterAdded(filter, index);
        }
        dashboardDocumentChanged(newDashboard) {
            this._dashboard._loadDashboardDocument(newDashboard);
        }
        dashboardDocumentHasChangesModified(hasPendingChanges) {
            this._dashboard._hasPendingChangesModified(hasPendingChanges);
        }
    }

    class FiltersArray extends Array {
        /**
         * Gets the first filter with the given title.
         *
         * @param {string} title The title of the filter to search for.
         * @returns {$.ig.RVDashboardFilter} The first filter with the given title (case sensitive), null if there's no filter with that title.
         */
        getByTitle(title) {
            var count = this.length;
            for (var i = 0; i < count; i++) {
                var filter = this[i];
                if (filter.title == title) {
                    return filter;
                }
            }
            return null;
        }
        /**
         * Gets the filter with the given ID.
         *
         * @param {string} id The ID of the filter to search for.
         * @returns {$.ig.RVDashboardFilter} The filter with the given ID (case sensitive), null if there's no filter with that ID.
         */
        getById(id) {
            var count = this.length;
            for (var i = 0; i < count; i++) {
                var filter = this[i];
                if (filter.id == id) {
                    return filter;
                }
            }
            return null;
        }
    }

    class VisualizationsArray extends Array {
        /**
         * Gets the first visualization with the given title.
         *
         * @param {string} title The title of the widget to search for.
         * @returns {$.ig.RVVisualization} The first visualization with the given title (case sensitive), null if there's no visualization with that title.
         */
        getByTitle(title) {
            var count = this.length;
            for (var i = 0; i < count; i++) {
                var viz = this[i];
                if (viz.title == title) {
                    return viz;
                }
            }
            return null;
        }
        /**
         * Gets the visualization with the given ID.
         *
         * @param {string} id The ID of the widget to search for.
         * @returns {$.ig.RVVisualization} The visualization with the given ID (case sensitive), null if there's no visualization with that ID.
         */
        getById(id) {
            var count = this.length;
            for (var i = 0; i < count; i++) {
                var viz = this[i];
                if (viz.id == id) {
                    return viz;
                }
            }
            return null;
        }
    }

    /**
     * @class
     * @classdesc The class representing a Dashboard model. To get an instance of this class, use {@link RVDashboard.loadDashboard} method.
     * @hideconstructor
     */
    class RVDashboard {
        constructor() {
            this._dashboardModel = null;
            this._filters = new FiltersArray();
            this._visualizations = new VisualizationsArray();
            this._dateFilter = null;
            this._subscribedViews = new Set();
            this._title = "";
            /**
             * This event is triggered when the the title of the dashboard is changed
             * was added/removed or updated.
             */
            this.onTitleChanged = null;
            /**
             * This event is triggered when the list of visualizations has changed because a visualization
             * was added/removed or updated.
             */
            this.onVisualizationsChanged = null;
            /**
             * This event is triggered when the list of filters has changed because a filter
             * was added or removed.
             */
            this.onFiltersChanged = null;
            /**
             * This event is triggered when the date filter was modified.
             */
            this.onDateFilterChanged = null;
            /**
             * This event is triggered when the hasPendingChanges flag has changed its value.
             */
            this.onHasPendingChangesChanged = null;
            this._dashboardModel = new $.ig.DashboardDocument(0);
            this._dashboardModel.useAutoLayout(true);
            this._loadVisualizations();
            this._loadFilters();
            this._delegate = new SdkDocumentDelegate(this);
            this._hasPendingChanges = false;
            this._dashboardId = "New Dashboard";
        }
        static loadDashboard(dashboardId, onSuccess, onError) {
            RevealUtility.loadDashboard(dashboardId, onSuccess, onError);
        }
        static loadDashboardAsync(dashboardId) {
            return new Promise((resolve, reject) => {
                RevealUtility.loadDashboard(dashboardId, (dashboard) => {
                    resolve(dashboard);
                }, (error) => {
                    reject(error);
                });
            });
        }
        static loadDashboardFromContainer(blob, onSuccess, onError) {
            RevealUtility.loadDashboardFromContainer(blob, onSuccess, onError);
        }
        static _create(dashboardModel, dashboardId) {
            var newDashboard = new RVDashboard();
            newDashboard._loadDashboardDocument(dashboardModel);
            newDashboard._dashboardId = dashboardId;
            return newDashboard;
        }
        _loadFilters() {
            var globalFilters = this._dashboardModel.globalFilters();
            var count = globalFilters.length;
            for (var i = 0; i < count; i++) {
                var gf = globalFilters[i];
                if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, gf) !== null) {
                    this._dateFilter = new RVDateDashboardFilter(null, null, gf);
                    this._dateFilter._dashboard = this;
                }
                else {
                    var rvFilter = this._getRVFilter(gf);
                    this._filters.push(rvFilter);
                }
            }
        }
        _getRVFilter(gf) {
            var rvFilter = new RVDashboardFilter(gf);
            rvFilter._dashboard = this;
            return rvFilter;
        }
        _loadVisualizations() {
            var widgets = this._dashboardModel.widgets();
            var count = widgets.length;
            this._visualizations = new VisualizationsArray();
            for (var i = 0; i < count; i++) {
                var widget = widgets[i];
                this._visualizations.push(new RVVisualization(widget));
            }
        }
        /**
         * The list of visualizations in the dashboard.
         * @returns {$.ig.RVVisualization[]} the list of visualizations in the dashboard.
         */
        get visualizations() {
            return this._visualizations.slice();
        }
        /**
         * The list of filters in the dashboard. Dashboard filters can be used to apply filters to multiple widgets at the same time.
         * @returns {$.ig.RVDashboardFilter[]} the list of filters in the dashboard.
         * */
        get filters() {
            return this._filters.slice();
        }
        /**
         * The date global filter configured in this dashboard, null if no date filter is configured.
         * @returns {$.ig.RVDateDashboardFilter} the list of filters in the dashboard.
         * */
        get dateFilter() {
            return this._dateFilter;
        }
        set dateFilter(v) {
            if (this._dateFilter == null && v == null) {
                return;
            }
            if (this._dateFilter != null && v != null) {
                this._dateFilter = v;
                this._notifyViewsThatDateFilterChanged(null);
            }
            else {
                var errorMessage = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.dateFilterSettingAttemptExceptionSDK);
                throw Error(errorMessage);
            }
        }
        get hasPendingChanges() {
            return this._hasPendingChanges;
        }
        /**
         * The name or title of the dashboard
         * @returns {string} the name or title of the dashboard
         * */
        get title() {
            if (this._title === "") {
                this._title = this._dashboardModel.title();
            }
            return this._title;
        }
        _subscribeDashboardView(view) {
            if (view != null) {
                view.addDocumentDelegate(this._delegate);
            }
        }
        _unsubscribeDashboardView(view) {
            if (view != null) {
                view.removeDocumentDelegate(this._delegate);
            }
        }
        _visualizationsChanged() {
            if (this.onVisualizationsChanged) {
                this.onVisualizationsChanged([...this._visualizations]);
            }
        }
        _titleChanged(newTitle) {
            if (this.onTitleChanged) {
                this.onTitleChanged(newTitle);
            }
        }
        _dateFilterChanged() {
            if (this.onDateFilterChanged) {
                this.onDateFilterChanged(this.dateFilter);
            }
        }
        _filtersChanged() {
            if (this.onFiltersChanged) {
                this.onFiltersChanged([...this._filters]);
            }
        }
        _hasPendingChangesChanged() {
            if (this.onHasPendingChangesChanged) {
                this.onHasPendingChangesChanged(this._hasPendingChanges);
            }
        }
        _widgetAdded(widget, index) {
            if (index >= 0 && index <= this._visualizations.length) {
                this._visualizations.splice(index, 0, new RVVisualization(widget));
                this._visualizationsChanged();
            }
        }
        _titleUpdated(newTitle) {
            this._title = newTitle;
            this._titleChanged(newTitle);
        }
        _widgetDeleted(index) {
            if (index >= 0 && index < this._visualizations.length) {
                this._visualizations.splice(index, 1);
                this._visualizationsChanged();
            }
        }
        _widgetMoved(from, to) {
            if (from >= 0 &&
                from < this._visualizations.length &&
                to >= 0 &&
                to < this._visualizations.length) {
                var w = this._visualizations[from];
                this._visualizations.splice(from, 1);
                this._visualizations.splice(to, 0, w);
                this._visualizationsChanged();
            }
        }
        _widgetUpdated(widget) {
            var index = -1;
            var count = this._visualizations.length;
            for (var i = 0; i < count; i++) {
                var viz = this._visualizations[i];
                if (viz.id == widget.id()) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this._visualizations[index] = new RVVisualization(widget);
                this._visualizationsChanged();
            }
        }
        _filterAdded(filter, index) {
            if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, filter) !== null) {
                this._dateFilter = new RVDateDashboardFilter(null, null, filter);
                this._dateFilterChanged();
            }
            else if ($.ig.util.cast($.ig.DataSourceBasedGlobalFilter.prototype.$type, filter) !== null) {
                this._filters.push(this._getRVFilter(filter));
                this._filtersChanged();
            }
        }
        _filterUpdated(filter, index) {
            if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, filter) !== null) {
                this._dateFilter = new RVDateDashboardFilter(null, null, filter);
                this._dateFilterChanged();
            }
            else if ($.ig.util.cast($.ig.DataSourceBasedGlobalFilter.prototype.$type, filter) !== null) {
                var actualIndex = this._getFilterIndex(filter);
                if (actualIndex >= 0) {
                    this._filters[filter] = this._getRVFilter(filter);
                    this._filtersChanged();
                }
            }
        }
        _getFilterIndex(filter) {
            var count = this._filters.length;
            for (var i = 0; i < count; i++) {
                if (this._filters[i].id == filter.id()) {
                    return i;
                }
            }
            return -1;
        }
        _filterDeleted(filter, index) {
            if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, filter) !== null) {
                this._dateFilter = null;
                this._dateFilterChanged();
            }
            else if ($.ig.util.cast($.ig.DataSourceBasedGlobalFilter.prototype.$type, filter) !== null) {
                var actualIndex = this._getFilterIndex(filter);
                if (actualIndex >= 0) {
                    this._filters.splice(actualIndex, 1);
                    this._filtersChanged();
                }
            }
        }
        _hasPendingChangesModified(hasPendingChanges) {
            if (this._hasPendingChanges == hasPendingChanges) {
                return;
            }
            this._hasPendingChanges = hasPendingChanges;
            this._hasPendingChangesChanged();
        }
        _loadDashboardModel(newDashboard) {
            this._dashboardModel = newDashboard;
            this._loadVisualizations();
            this._loadFilters();
        }
        _loadDashboardDocument(newDashboard) {
            this._loadDashboardModel(newDashboard);
            this._visualizationsChanged();
            this._filtersChanged();
            this._dateFilterChanged();
            if (this._hasPendingChanges) {
                this._hasPendingChanges = false;
                this._hasPendingChangesChanged();
            }
        }
        _subscribeView(revealView) {
            if (this._subscribedViews.has(revealView) == false) {
                this._subscribedViews.add(revealView);
            }
        }
        _unsubscribeView(revealView) {
            if (this._subscribedViews.has(revealView) == false) {
                this._subscribedViews.delete(revealView);
            }
        }
        _updateFilterSelectedValues(filter, selectedValues) {
            this._notifyViewsThatFilterSelectedValuesChanged(null);
        }
        _notifyViewsThatFilterSelectedValuesChanged(revealView) {
            var filters = this._filters;
            this._subscribedViews.forEach((view1, view2) => {
                if (view1 == revealView) {
                    return;
                }
                filters.forEach((filter1, filter2) => {
                    view1._setFilterSelectedValues(filter1, filter1.selectedValues);
                });
            });
        }
        _notifyViewsThatDateFilterChanged(revealView) {
            this._subscribedViews.forEach((view1, view2) => {
                if (this._dateFilter == null || view1 === revealView) {
                    return;
                }
                view1._setDateFilter(this._dateFilter);
            });
        }
        _userFilterChanged(revealView, filterModel) {
            var filter = FiltersUtility.findFilterById(this._filters, filterModel.id());
            if (filter) {
                filter._selectedValues = FiltersUtility.extractSelectedValuesForFilter(filterModel);
                this._notifyViewsThatFilterSelectedValuesChanged(revealView);
            }
        }
        _userDateFilterChanged(revealView, dateFilter) {
            this._dateFilter = dateFilter;
            this._notifyViewsThatDateFilterChanged(revealView);
        }
    }

    /**
     * @class
     * @classdesc Class representing a cell in the visualization data, includes column name, value and formatted value.
     * @hideconstructor
     * @see $.ig.RevealView~onVisualizationDataPointClicked
     */
    class RVCell {
        constructor() {
            /**
             * The name of the column this cell belongs to.
             * @name $.ig.RVCell#columnName
             * @type {string}
             */
            this.columnName = null;
            /**
             * The label of the column this cell belongs to.
             * @name $.ig.RVCell#columnLabel
             * @type {string}
             */
            this.columnLabel = null;
            /**
             * The value of the cell.
             * @name $.ig.RVCell#value
             * @type {object}
             */
            this.value = null;
            /**
             * The formatted value of the cell.
             * @name $.ig.RVCell#formattedValue
             * @type {string}
             */
            this.formattedValue = null;
        }
    }

    /**
     * @class
     * @classdesc The class contains custom theme settings.
     */
    class RVConditionalFormatting {
        constructor() {
            /**
             * Conditional formatting color for HI values
             * @name $.ig.RVConditionalFormatting#hiColor
             * @type {string}
             * */
            this.hiColor = "";
            /**
             * Conditional formatting color for MID values
             * @name $.ig.RVConditionalFormatting#midColor
             * @type {string}
             * */
            this.midColor = "";
            /**
             * Conditional formatting color for LOW values
             * @name $.ig.RVConditionalFormatting#lowColor
             * @type {string}
             * */
            this.lowColor = "";
            /**
             * Conditional formatting color when NO VALUE
             * @name $.ig.RVConditionalFormatting#noneColor
             * @type {string}
             * */
            this.noneColor = "";
        }
    }

    // import $ from "jquery";
    /**
     * @class
     * @classdesc  The class contains current theme settings.
     * After applying changes RevealView.UpdateRevealTheme function must be called
     * and changes will be taken for those dashboard rendered after this call.
     */
    class RevealTheme {
        constructor() {
            this.isDark = false;
            this.isOceanBased = false;
            /**
             * The list of chart colors. This color palette could have any number of elements.
             * Once the list is finished, Reveal will start auto generating shade of these colors.
             * @name $.ig.RevealTheme#chartColors
             * @type {Array}
             * */
            this.chartColors = [];
            /**
             * Conditional Formatting set of colors HI, MID, LOW and NONE values.
             * @name $.ig.RevealTheme#conditionalFormatting
             * @type {$.ig.RVConditionalFormatting}
             * */
            this.conditionalFormatting = new RVConditionalFormatting();
            /**
             * Highlighting color that is used on specific scenarios for dashboards (forecast and outliers).
             * @name $.ig.RevealTheme#highlightColor
             * @type {string}
             * */
            this.highlightColor = "";
            /**
             * Font family used for regular font style
             * @name $.ig.RevealTheme#regularFont
             * @type {string}
             * */
            this.regularFont = "";
            /**
             * Font family used for medium font style
             * @name $.ig.RevealTheme#mediumFont
             * @type {string}
             * */
            this.mediumFont = "";
            /**
             * Font family used for bold font style
             * @name $.ig.RevealTheme#boldFont
             * @type {string}
             * */
            this.boldFont = "";
            /**
             * Font color
             * @name $.ig.RevealTheme#fontColor
             * @type {string}
             * */
            this.fontColor = "";
            /**
             * Main background color
             * @name $.ig.RevealTheme#dashboardBackgroundColor
             * @type {string}
             * */
            this.dashboardBackgroundColor = "";
            /**
             * Visualizations, modals, list-items... secondary background color
             * @name $.ig.RevealTheme#visualizationBackgroundColor
             * @type {string}
             * */
            this.visualizationBackgroundColor = "";
            /**
             * Accent color
             * @name $.ig.RevealTheme#accentColor
             * @type {string}
             * */
            this.accentColor = "";
            /**
             * Rounded corners in buttons, tooltips, containers, visualizations, etc.
             * If false, squared corners will be shown
             * @name $.ig.RevealTheme#useRoundedCorners
             * @type {Boolean}
             * */
            this.useRoundedCorners = false;
            this.isDark = false;
            this.isOceanBased = false;
            this.initTheme(this.isDark, this.isOceanBased);
        }
        clone() {
            var newTheme = new RevealTheme();
            newTheme.chartColors = [...this.chartColors];
            newTheme.conditionalFormatting = new RVConditionalFormatting();
            newTheme.conditionalFormatting.hiColor = this.conditionalFormatting.hiColor;
            newTheme.conditionalFormatting.lowColor = this.conditionalFormatting.lowColor;
            newTheme.conditionalFormatting.midColor = this.conditionalFormatting.midColor;
            newTheme.conditionalFormatting.noneColor = this.conditionalFormatting.noneColor;
            newTheme.highlightColor = this.highlightColor;
            newTheme.regularFont = this.regularFont;
            newTheme.mediumFont = this.mediumFont;
            newTheme.boldFont = this.boldFont;
            newTheme.fontColor = this.fontColor;
            newTheme.accentColor = this.accentColor;
            newTheme.dashboardBackgroundColor = this.dashboardBackgroundColor;
            newTheme.visualizationBackgroundColor = this.visualizationBackgroundColor;
            newTheme.useRoundedCorners = this.useRoundedCorners;
            return newTheme;
        }
        initTheme(isDark, isOceanBased) {
            this.isDark = isDark;
            this.isOceanBased = isOceanBased;
            var currentDashboardTheme = this.isOceanBased
                ? RevealTheme._oceanTheme
                : RevealTheme._mountainTheme;
            this.chartColors = [];
            for (var i = 0; i < currentDashboardTheme.chartColors().length; i++) {
                this.chartColors.push($.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.chartColors()[i]));
            }
            this.conditionalFormatting.lowColor = $.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.cFLowColor());
            this.conditionalFormatting.midColor = $.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.cFMidColor());
            this.conditionalFormatting.hiColor = $.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.cFHiColor());
            this.conditionalFormatting.noneColor = $.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.cFNoneColor());
            this.highlightColor = $.ig.ColorUtility.prototype.convertToNative(currentDashboardTheme.highlightColor());
            let appTheme = this.isDark
                ? $.ig.ThemeManager.prototype.resolveThemeFromName($.ig.ThemeManager.prototype.darkTheme)
                : $.ig.ThemeManager.prototype.resolveThemeFromName($.ig.ThemeManager.prototype.lightTheme);
            this.regularFont = appTheme.regularFont();
            this.mediumFont = appTheme.mediumFont();
            this.boldFont = appTheme.boldFont();
            this.fontColor = appTheme.foregroundColor().$native();
            this.dashboardBackgroundColor = appTheme.mainBackgroundColor().$native();
            this.visualizationBackgroundColor = appTheme
                .itemBackgroundColor()
                .$native();
            this.accentColor = appTheme.accentColor().$native();
            this.useRoundedCorners = appTheme.supportsCornerRadius();
        }
        static initialize() {
            RevealTheme._oceanTheme = $.ig.DashboardThemeManager.prototype.getTheme($.ig.DashboardThemeManager.prototype.builtInThemeId2);
            RevealTheme._mountainTheme = $.ig.DashboardThemeManager.prototype.getTheme($.ig.DashboardThemeManager.prototype.builtInThemeId1);
        }
    }
    RevealTheme.initialize();
    /**
     * @class
     * @classdesc Dark version of the Mountain theme
     * @hideconstructor
     */
    class MountainDarkTheme extends RevealTheme {
        constructor() {
            super();
            this.isDark = true;
            this.isOceanBased = false;
            this.initTheme(this.isDark, this.isOceanBased);
        }
    }
    /**
     * @class
     * @classdesc Light version of the Mountain theme
     * @hideconstructor
     */
    class MountainLightTheme extends RevealTheme {
        constructor() {
            super();
            this.initTheme(false, false);
        }
    }
    /**
     * @class
     * @classdesc Dark version of the Ocean theme
     * @hideconstructor
     */
    class OceanLightTheme extends RevealTheme {
        constructor() {
            super();
            this.initTheme(false, true);
        }
    }
    /**
     * @class
     * @classdesc Light version of the Ocean theme
     * @hideconstructor
     */
    class OceanDarkTheme extends RevealTheme {
        constructor() {
            super();
            this.initTheme(true, true);
        }
    }

    /**
     * @class
     * @classdesc  This class is used to specify settings for visualizations like Choropleth or Scatter Map.
     */
    class VisualizationsConfiguration {
        constructor() {
            this._mapVisualizations = new MapVisualizationsConfiguration();
            this._scatterMapVisualizations = null;
        }
        /**
         * The maps configuration used by Choropleth and Scatter Map visualizations.
         * @memberof $.ig.VisualizationsConfiguration
         */
        get maps() {
            return this._mapVisualizations;
        }
        /**
         * The configuration used by Scatter Map visualizations
         */
        get scatterMaps() {
            return this._scatterMapVisualizations;
        }
        set scatterMaps(scatterMapVizConfig) {
            this._scatterMapVisualizations = scatterMapVizConfig;
        }
    }
    class MapVisualizationsConfiguration {
        constructor() {
            this._shapeFilesUrl = "https://dl.infragistics.com/xplatform/reveal/v1.0.0.0/";
        }
        get shapeFilesUrl() {
            return this._shapeFilesUrl;
        }
        set shapeFilesUrl(url) {
            this._shapeFilesUrl = url;
        }
    }
    class ScatterMapVisualizationsConfiguration {
        constructor(mapImageryType, token) {
            this._mapImageryType = mapImageryType;
            this._mapImageryProviderToken = token;
        }
        get mapImageryType() {
            return this._mapImageryType;
        }
        get mapImageryProviderToken() {
            return this._mapImageryProviderToken;
        }
    }
    var RVMapImageryType;
    (function (RVMapImageryType) {
        RVMapImageryType["Esri"] = "Esri";
        RVMapImageryType["Bing"] = "Bing";
        RVMapImageryType["MapBox"] = "MapBox";
    })(RVMapImageryType || (RVMapImageryType = {}));

    /**
     * @class
     * @classdesc  This class is used to specify global settings for the SDK.
     */
    class RevealSdkSettings {
        static get theme() {
            return RevealView.getCurrentTheme();
        }
        static set theme(theme) {
            RevealView.updateRevealTheme(theme);
        }
        static setBaseUrl(base) {
            if (base.toLowerCase().startsWith("https://") ||
                base.toLowerCase().startsWith("http://")) {
                window.IGAppBaseURL = base;
            }
            else {
                window.IGAppBase = base;
            }
        }
        /**
         * Specifies a dom element that could host few invisible helper span elements, which are used
         * by the RevealView to measure text sizes.
         * If no dom element is set the RevealView would add these helper spans to the element
         * where a dashboard is rendered. This would work fine as long as you need a single RevealView
         * instance rendered at a given moment.
         * In case you need to have multiple instances rendered simultaneously you will need to set
         * a selector, pointing to an element in dom where these helper span elements will be created.
         * @param {any} selector that references to an element that could host these helper objects.
         */
        static set measuringHostElement(selector) {
            RevealSdkSettings._measuringHostElement = selector;
            $.ig.JSHelperUtility.prototype.registerRootElement(selector);
        }
        static get measuringHostElement() {
            return RevealSdkSettings._measuringHostElement;
        }
        static setAdditionalHeadersProvider(provider) {
            window.IGAppExtraHeadersProvider = provider;
        }
        static get shapeFilesUrl() {
            return RevealSdkSettings.visualizations.maps.shapeFilesUrl;
        }
        static set shapeFilesUrl(url) {
            RevealSdkSettings.visualizations.maps.shapeFilesUrl = url;
        }
        static get visualizations() {
            return RevealSdkSettings._visualizations;
        }
    }
    RevealSdkSettings._measuringHostElement = null;
    RevealSdkSettings._visualizations = new VisualizationsConfiguration();

    /**
     * @enum
     * Provides information about where data sources are being requested, one of visualization, dashboard filter or data blending
     */

    (function (RVDataSourcesRequestedTriggerType) {
        /**Visualization */
        RVDataSourcesRequestedTriggerType["Visualization"] = "visualization";
        /**Dashboard Filter */
        RVDataSourcesRequestedTriggerType["DashboardFilter"] = "dashboardFilter";
        /**Data Blending*/
        RVDataSourcesRequestedTriggerType["DataBlending"] = "dataBlending";
    })(exports.RVDataSourcesRequestedTriggerType || (exports.RVDataSourcesRequestedTriggerType = {}));

    class SdkApp {
        constructor(revealView) {
            this.sdkView = revealView;
        }
        getPersonalTeam() {
            return "";
        }
        showSelectDatasourcesScreen(relativeView, navController, dashboard, dataSourceItemSelected, preselectedDatasourceId, selectedDatasourceItem, mode, trigger, providerValidatorBlock, continueBlock) {
            var sdkApp = this;
            var showBlock = function (rvDataSources) {
                var vc = new $.ig.SdkSelectExistingDatasourceViewController(dashboard, rvDataSources, dataSourceItemSelected, preselectedDatasourceId, selectedDatasourceItem, mode);
                vc.providerValidatorBlock(providerValidatorBlock);
                if (navController != null) {
                    navController.pushViewController(vc, true);
                    continueBlock(null);
                }
                else {
                    var popupId = $.ig.CPPopupManager.prototype.showTallScreenModalDialog(relativeView, vc, true);
                    continueBlock(popupId);
                }
            };
            if (sdkApp.sdkView.onDataSourcesRequested != null) {
                sdkApp.sdkView.onDataSourcesRequested(function (revealDsObj) {
                    revealDsObj = RevealUtility._transformToWrappers(revealDsObj);
                    var revealDatasources = revealDsObj.getInternal();
                    showBlock(revealDatasources);
                }, SdkApp._convertDataSourcesSelectedTrigger(trigger));
            }
            else {
                showBlock(null);
            }
            return null;
        }
    }
    SdkApp._convertDataSourcesSelectedTrigger = function (trigger) {
        switch (trigger) {
            case $.ig.DataSourceSelectorTriggerType.prototype.widget:
                return exports.RVDataSourcesRequestedTriggerType.Visualization;
            case $.ig.DataSourceSelectorTriggerType.prototype.dashboardFilter:
                return exports.RVDataSourcesRequestedTriggerType.DashboardFilter;
            case $.ig.DataSourceSelectorTriggerType.prototype.dataBlending:
                return exports.RVDataSourcesRequestedTriggerType.DataBlending;
            default:
                return exports.RVDataSourcesRequestedTriggerType.Visualization;
        }
    };

    /**
     * @class
     * @classdesc Class representing the event arguments visualizationEditorClosing event
     * @hideconstructor
     * @see $.ig.RevealView~VisualizationEditorClosingArgs
     */
    class VisualizationEditorClosingArgs {
        constructor(visualization, isNewVisualization) {
            this.visualization = visualization;
            this.isNewVisualization = isNewVisualization;
            this.resetVisualization = false;
            this.cancel = false;
        }
    }

    /**
     * @class $.ig.VisualizationEditorClosedEventArgs
     * @classdesc The type of the event arguments of the onVisualizationEditorClosed event.
     * @hideconstructor
     */
    class VisualizationEditorClosedEventArgs {
        constructor(visualization, isNewVisualization, isCancelled) {
            this.visualization = visualization;
            this.isCancelled = isCancelled;
            this.isNewVisualization = isNewVisualization;
        }
    }

    /**
     * @class
     * @classdesc Class representing the event arguments visualizationEditorOpening event
     * @hideconstructor
     * @see $.ig.RevealView~VisualizationEditorOpeningArgs
     */
    class VisualizationEditorOpeningArgs {
        constructor(visualization, isNewVisualization) {
            this.visualization = visualization;
            this.isNewVisualization = isNewVisualization;
            this.cancel = false;
        }
    }

    /**
     * @class $.ig.VisualizationEditorOpenedEventArgs
     * @classdesc The type of the event arguments of the onVisualizationEditorOpened event.
     * @hideconstructor
     */
    class VisualizationEditorOpenedEventArgs {
        constructor(visualization, isNewVisualization) {
            /**
             *  The visualization being edited.
             *  @name $.ig.VisualizationEditorClosedEventArgs#visualization
             *  @type {$.ig.RVVisualization}
             */
            this.visualization = visualization;
            /**
             * This property is true if it is a new visualization that is being created.
             * @name $.ig.VisualizationEditorClosedEventArgs#isNewVisualization
             * @type {boolean}
             */
            this.isNewVisualization = isNewVisualization;
        }
    }

    class SdkDelegate {
        constructor(revealView) {
            this.revealView = revealView;
        }
        canDashboardViewEditDashboard() {
            return this.revealView.canEdit;
        }
        isInExportMode() {
            return false;
        }
        canSaveAs() {
            return this.revealView.canSaveAs;
        }
        showRefresh() {
            return this.revealView.showRefresh;
        }
        canDashboardViewAddVisualization() {
            return this.revealView.canAddVisualization;
        }
        showChangeVisualization() {
            return this.revealView.showChangeVisualization;
        }
        showStatisticalFunctions() {
            return this.revealView.showStatisticalFunctions;
        }
        isMinimizeEnabled() {
            return !this.revealView.singleVisualizationMode;
        }
        showExportImage() {
            return this.revealView.showExportImage;
        }
        addWidgetTriggered() {
            var revealView = this.revealView;
            var sdkDelegate = this;
            if (revealView.onDataSourcesRequested != null) {
                revealView.onDataSourcesRequested(function (revealDsObj) {
                    revealDsObj = RevealUtility._transformToWrappers(revealDsObj);
                    var revealDatasources = revealDsObj.getInternal();
                    sdkDelegate.addWidgetTriggeredContinuation(revealDatasources);
                }, exports.RVDataSourcesRequestedTriggerType.Visualization);
            }
            else {
                sdkDelegate.addWidgetTriggeredContinuation(null);
            }
        }
        addWidgetTriggeredContinuation(revealDatasources) {
            var revealView = this.revealView;
            var addWidgetPopupId;
            var success = function (dsiInfo) {
                $.ig.CPPopupManager.prototype.closePopup(addWidgetPopupId, true);
                $.ig.RPDatasourceHelper.prototype.addNewDataSources(revealView._dashboardModel, dsiInfo);
                revealView._dashboardView.createWidget(dsiInfo);
            };
            if ($.ig.SdkUtility.prototype.isSingleInMemoryItem(revealDatasources) && revealDatasources != null) {
                var dsiInfo = new $.ig.SelectedDataSourceItemInfo();
                dsiInfo.dataSourceItem(revealDatasources.dataSourceItems()[0]);
                dsiInfo.dataSource($.ig.DashboardModelUtils.prototype.getInMemoryDataSource());
                $.ig.RPDatasourceHelper.prototype.addNewDataSources(revealView._dashboardModel, dsiInfo);
                revealView._dashboardView.createWidget(dsiInfo);
            }
            else {
                var vc = new $.ig.SdkSelectExistingDatasourceViewController(revealView._dashboardModel, revealDatasources, success, null, $.ig.DataSourceSelectorMode.prototype.add);
                addWidgetPopupId = $.ig.CPPopupManager.prototype.showTallScreenModalDialog(revealView._dashboardView, vc, true);
            }
        }
        showExportToPowerpoint() {
            return this.revealView.showExportToPowerpoint;
        }
        showExportToPDF() {
            return this.revealView.showExportToPDF;
        }
        showExportToExcel() {
            return this.revealView.showExportToExcel;
        }
        showInteractions() {
            return false;
        }
        showDataBlending() {
            return this.revealView.showDataBlending;
        }
        showMachineLearningModelsIntegration() {
            return this.revealView.showMachineLearningModelsIntegration;
        }
        showMenu() {
            return this.revealView.showMenu;
        }
        canShareDashboard() {
            return false;
        }
        createdFromFile() {
            return false;
        }
        showGlobalFilters() {
            return this.revealView.showFilters;
        }
        showChangeDataSource() {
            return this.revealView.showChangeDataSource;
        }
        showEditDataSource() {
            return this.revealView.showEditDataSource;
        }
        showChangeTheme() {
            return false;
        }
        dashboardViewSaveDashboard(dashboardView, dashboard, saveAs) {
            this.revealView._dashboardViewSaveDashboard(dashboardView, dashboard, saveAs);
        }
        promptForUnsavedChanges(dashboardView, dashboard) {
            dashboardView.discardChanges(); //TODO - kk - add DashboardViewPromptForUnsavedChanges method to the revealView
        }
        getDashboardPermission() {
            return $.ig.ReportPlusSharePermission.prototype.editShare;
        }
        closeDashboardView() { }
        viewTriggeredExportImage1(view, image, title, width, height) {
            var revealView = this.revealView;
            var success = null;
            if (revealView.onImageExported != null) {
                success = function (element) {
                    if (revealView.onImageExported) {
                        revealView.onImageExported(element);
                    }
                };
            }
            var vc = new $.ig.SdkExportImageViewController(view, image, title, width, height, success);
            $.ig.CPPopupManager.prototype.showLargeScreenModalDialog(view, vc, true);
        }
        viewTriggeredExportDashboardData(view, dashboardData) {
            var vc = null;
            if (dashboardData
                .format()
                .equals($.ig.EngineConstants.prototype.exportFormatExcel)) {
                vc = new $.ig.SdkExportExcelViewController(view, dashboardData);
            }
            else if (dashboardData
                .format()
                .equals($.ig.EngineConstants.prototype.exportFormatPowerPoint)) {
                vc = new $.ig.SdkExportPowerPointViewController(view, dashboardData, null);
            }
            else {
                vc = new $.ig.SdkExportPDFViewController(view, dashboardData, null);
            }
            $.ig.CPPopupManager.prototype.showLargeScreenModalDialog(view, vc, true);
        }
        launchExportImageOnStartUp() {
            return false;
        }
        maximizedWidgetChanged() {
            if (this.revealView.onMaximizedVisualizationChanged) {
                this.revealView.onMaximizedVisualizationChanged();
            }
        }
        widgetEditorOpening(isNewVisualization, widget) {
            var revealView = this.revealView;
            var args = new VisualizationEditorOpeningArgs(new RVVisualization(widget), isNewVisualization);
            if (revealView.onVisualizationEditorOpening) {
                revealView.onVisualizationEditorOpening(args);
            }
            var result = new $.ig.WidgetEditorOpeningAction(args.cancel);
            return result;
        }
        widgetEditorOpened(isNewVisualization, widget) {
            var revealView = this.revealView;
            if (revealView.onVisualizationEditorOpened) {
                var args = new VisualizationEditorOpenedEventArgs(new RVVisualization(widget), isNewVisualization);
                revealView.onVisualizationEditorOpened(args);
            }
        }
        widgetEditorClosing(isNewVisualization, widget) {
            var revealView = this.revealView;
            var args = new VisualizationEditorClosingArgs(new RVVisualization(widget), isNewVisualization);
            if (revealView.onVisualizationEditorClosing) {
                revealView.onVisualizationEditorClosing(args);
            }
            var result = new $.ig.WidgetEditorClosingAction(args.cancel, args.resetVisualization);
            return result;
        }
        widgetEditorClosed(isNewVisualization, widget, changesApplied) {
            var revealView = this.revealView;
            if (revealView.onVisualizationEditorClosed) {
                var args = new VisualizationEditorClosedEventArgs(new RVVisualization(widget), isNewVisualization, !changesApplied);
                revealView.onVisualizationEditorClosed(args);
            }
        }
        closeCurrentDashboardLink() {
            var revealView = this.revealView;
            var state = revealView._navigationMgr.goBack();
            revealView.dashboard = state.settings();
            revealView.maximizedVisualization = state._maximizedWidget;
            revealView.startInEditMode = false;
            revealView._loadDashboard();
        }
        updateUrl() { }
        //TODO - kk - do we really need this?
        triggerWidgetDataSourceSelection() {
            //TODO - kk - should probably raise some notification for the hosting app.
        }
        hoverTooltipsEnabled() {
            return this.revealView.hoverTooltipsEnabled;
        }
        crosshairsEnabled() {
            return this.revealView.crosshairsEnabled;
        }
        canAddCalculatedFields() {
            return this.revealView.canAddCalculatedFields;
        }
        canAddPostCalculatedFields() {
            return this.revealView.canAddPostCalculatedFields;
        }
        canAddDashboardFilter() {
            return this.revealView.canAddDashboardFilter;
        }
        canAddDateFilter() {
            return this.revealView.canAddDateFilter;
        }
        canCopyVisualization() {
            return this.revealView.canCopyVisualization;
        }
        canDuplicateVisualization() {
            return this.revealView.canDuplicateVisualization;
        }
        getMapImageryType() {
            var scatterSettings = RevealSdkSettings.visualizations.scatterMaps;
            if (scatterSettings == null) {
                return $.ig.MapImageryType.prototype.none;
            }
            switch (scatterSettings.mapImageryType) {
                case RVMapImageryType.Bing:
                    return $.ig.MapImageryType.prototype.bing;
                case RVMapImageryType.Esri:
                    return $.ig.MapImageryType.prototype.esri;
                case RVMapImageryType.MapBox:
                    return $.ig.MapImageryType.prototype.mapBox;
            }
            return $.ig.MapImageryType.prototype.none;
        }
        getMapImageryProviderToken() {
            var scatterSettings = RevealSdkSettings.visualizations.scatterMaps;
            if (scatterSettings == null) {
                return "";
            }
            return scatterSettings.mapImageryProviderToken;
        }
        isDashboardLinkingEditorEnabled() {
            return false;
        }
        dashboardFiltersUpdated(filters) {
            var count = filters.length;
            if (this.revealView.dashboard == null) {
                return;
            }
            for (var i = 0; i < count; i++) {
                var filter = filters[i];
                if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, filter) != null) {
                    this.revealView.dashboard._userDateFilterChanged(this.revealView, new RVDateDashboardFilter(null, null, filter));
                }
                else {
                    this.revealView.dashboard._userFilterChanged(this.revealView, filter);
                }
            }
        }
    }

    /**
     * @class $.ig.DashboardSaveEventArgs
     * @classdesc The class used as the argument to the onSave event.
     * @hideconstructor
     */
    class DashboardSaveEventArgs {
        constructor(saveAs, name, revealView, dashboardId) {
            /**
             *  The name of the dashboard being saved, that could have been modified by the end user by editing the title.
             *  @name $.ig.DashboardSaveEventArgs#name
             *  @type {string}
             */
            this.name = "";
            this._saveAs = saveAs;
            this._isNew = dashboardId == null;
            /**
             * The name of the dashboard being saved.
             * @name $.ig.DashboardSaveEventArgs#name
             * @type {string}
             */
            this.name = name;
            this.dashboardId = saveAs ? null : dashboardId;
            this._revealView = revealView;
        }
        /**
         *  A flag indicating if this event was originated by a 'save' (false) or 'save as' (true) operation.
         *  @name $.ig.DashboardSaveEventArgs#saveAs
         *  @type {boolean}
         */
        get saveAs() {
            return this._saveAs;
        }
        /**
         * A flag indicating if this event was originated by saving a newly created dashboard, it will be false
         * when saving or "saving as" an existing dashboard.
         *  @name $.ig.DashboardSaveEventArgs#isNew
         *  @type {boolean}
         */
        get isNew() {
            return this._isNew;
        }
        /**
         * Serializes the current dashboard to the '.rdash' file format, using the current name.
         * @param {(blob: Blob) => void} callback  This is the callback function used to receive the serialized dashboard
         * @param {(string) => void} errorCallback  This is the callback function invoked when an error occurs
         * @returns {Blob} A Blob object with the contents of the dashboard in '.rdash' file format.
         */
        serialize(callback, errorCallback) {
            return this._revealView.serialize(callback, errorCallback);
        }
        /**
         * Serializes the current dashboard to the '.rdash' file format with the name provided.
         * @param {string} newName The new name for the dashboard.
         * @param {(blob: Blob) => void} callback This is the callback function used to receive the serialized dashboard
         * @param {(string) => void} errorCallback This is the callback function invoked when an error occurs
         * @returns {Blob} A Blob object with the contents of the dashboard in '.rdash' file format.
         */
        serializeWithNewName(newName, callback, errorCallback) {
            return this._revealView.serializeWithNewName(newName, callback, errorCallback);
        }
        /**
         * Notifies the Reveal SDK the save operation has finished and it should switch to view mode.
         * When using server side saving and for a new dashboard or for the "save as" operation it expects:
         *  - name to be set to the name entered by the end user, that value will be set as the title for the displayed dashboard.
         *  - dashboardId to be set to the assigned id, this value will be used for subsequent save operations, name will be used as the ID if dashboardId is not set.
         */
        saveFinished() {
            if (this._revealView.serverSideSave) {
                this._revealView._sendServerSideSaveRequest(this.name, this.dashboardId);
            }
            else {
                return this._revealView._dashboardSaveFinished(this.name, this.dashboardId);
            }
        }
    }

    /**
     * @class $.ig.ChartInteractionEventArgs
     * @classdesc The class used as the argument to the onTooltipShowing event.
     * @hideconstructor
     */
    class ChartInteractionEventArgs {
        constructor(visualization, cell, cells) {
            /**
             *  The visualization for which a tooltip is about to be shown.
             *  @name $.ig.ChartInteractionEventArgs#visualization
             *  @type {$.ig.RVVisualization}
             */
            this.visualization = visualization;
            /**
             * The name of the dashboard being saved.
             * @name $.ig.ChartInteractionEventArgs#cell
             * @type {$.ig.RVCell}
             */
            this.cell = cell;
            /**
             * The name of the dashboard being saved.
             * @name $.ig.ChartInteractionEventArgs#cell
             * @type {$.ig.RVCell[]}
             */
            this.row = cells;
            /**
             * A flag which if set to true will disable the rendering of the tooltip.
             * @name $.ig.ChartInteractionEventArgs#cancel
             * @type {boolean} Cancel
             */
            this.cancel = false;
        }
    }

    /**
     * Used to create a new instance of $.ig.RevealView class.
     * @class
     * @classdesc The main class used to render a dashboard in your application, it also allows the edition of existing dashboards or the creation from scratch.
     * @constructor $.ig.RevealView
     * @param {string} selector that references the HTML element to attach the view to, like a div.
     * @see $.ig.RevealSettings
     */
    class RevealView {
        //#endregion
        constructor(selector) {
            this._dashboard = null;
            this._selector = "";
            this._canEdit = true;
            this._startInEditMode = false;
            this._canAddVisualization = true;
            this._showMenu = true;
            this._showFilters = true;
            this._singleVisualizationMode = false;
            this._canSaveAs = true;
            this._showRefresh = true;
            this._showChangeVisualization = true;
            this._showStatisticalFunctions = true;
            this._showExportImage = true;
            this._showExportToExcel = true;
            this._showExportToPDF = true;
            this._showExportToPowerpoint = true;
            this._startWithNewVisualization = false;
            this._serverSideSave = true;
            this._showChangeDataSource = true;
            this._showMachineLearningModelsIntegration = false;
            this._showDataBlending = true;
            this._crosshairsEnabled = false;
            this._hoverTooltipsEnabled = true;
            this._canAddCalculatedFields = true;
            this._canAddDashboardFilter = true;
            this._canAddDateFilter = true;
            this._canAddPostCalculatedFields = true;
            this._canCopyVisualization = true;
            this._canDuplicateVisualization = true;
            this._showEditDataSource = true;
            //#endregion Private Methods
            //#region Public Events
            /**
             * This event is triggered whenever the end user clicks 'Save' or 'Save As', if this event is set in $.ig.RevealView then the callback server side
             * (IRevealSdkContext.SaveDashboardAsync) will not be called, and the application is supposed to handle how the dashboard is saved,
             * for example by implementing its own controller server side.
             * @type {$.ig.RevealView~onSave}
             * @example
             * revealView.onSave = function (rv, saveEvent) {
             *    if (saveEvent.saveAs) {
             *        var newName = prompt("Save as", dashboardId);
             *	      if (!newName) return;
             *            saveEvent.serializeWithNewName(newName,
             *                function (b) {
             *                    saveDashboard(newName, b, saveEvent);
             *            });
             *        } else {
             *            saveEvent.serialize(
             *                function (b) {
             *                    saveDashboard(dashboardId, b, saveEvent);
             *                });
             *        }
             * };
             */
            this.onSave = null;
            /**
             * This event is triggered whenever the end user maximizes or minimizes a visualization.
             * If the action is to maximize the visualization the title of the maximized visualization can be retrieved via the maximizedVisualization
             * property of the revealView object.
             * @type {$.ig.RevealView~onMaximizedVisualizationChanged}
             * @example
             * revealView.onMaximizedVisualizationChanged = function () {
             *     maximizedVisualization = revealView.maximizedVisualization();
             *     msg = "";
             *     if (maximizedVisualization != null) {
             *         msg = maximizedVisualization.title();
             *     } else {
             *          msg = "no current maximized widget";
             *     }
             *     console.log("Maximized widget changed! " + msg);
             * };
             */
            this.onMaximizedVisualizationChanged = null;
            /**
             * This event is triggered whenever the end user clicks on a data point over a maximized visualization and not in edit mode.
             * You get the visualization object($.ig.RVVisualization), actual cell of the click ($.ig.RVCell), and an array of cells($.ig.RVCell) representing the row of the click.
             * @type {$.ig.RevealView~onVisualizationDataPointClicked}
             *
             * @example
             * revealView.onVisualizationDataPointClicked = function (widget, cell, row) {
             *   console.log("Widget Data Point Clicked");
             *   console.log(widget.title());
             *   console.log(cell.columnLabel);
             *   console.log(cell.value);
             *   console.log(cell.formattedValue);
             *   console.log("First cell in the row has label:" + row[0].columnLabel)
             *}
             */
            this.onVisualizationDataPointClicked = null;
            /**
             * This event is triggered whenever the end user clicks on the 'Add visualization' button.
             * You can create custom datasources to replace the default/existing ones.
             * The argument is a callback function you're supposed to call and pass your custom collection of datasources which the end user will see.
             * @type {$.ig.RevealView~onDataSourcesRequested}
             *
             * @example
             * revealView.onDataSourcesRequested = function (callback, trigger) {
             *     if(trigger == $.ig.RVDataSourcesRequestedTriggerType.Visualization){
             *         var inMemoryDSI = new $.ig.RVInMemoryDataSourceItem("employees");
             *         inMemoryDSI.title("My InMemory Title");
             *         inMemoryDSI.description("My InMemory Description");
             *
             *         var sqlDs = new $.ig.RVSqlServerDataSource();
             *         sqlDs.title("Clients");
             *         sqlDs.id("SqlDataSource1");
             *         sqlDs.host("db.mycompany.local");
             *         sqlDs.port(1433);
             *         sqlDs.database("Invoices");
             *
             *         callback(new $.ig.RevealDataSources([sqlDs], [inMemoryDSI], true));
             *     }
             * };
             */
            this.onDataSourcesRequested = null;
            /**
             * Event fired when the user hovers over a visualization and a tooltip is about to showup.
             * @type {$.ig.RevealView~onTooltipShowing}
             *
             * @example
             * revealView.onTooltipShowing = function (args) {
             *{
             *    var vizTitle = args.Visualization.Title;
             *    if(vizTitle == "noNeedForTooltipsHere")
             *    {
             *        args.Cancel = true;
             *    }
             *}
             */
            this.onTooltipShowing = null;
            /**
             * This event is triggered whenever the end user clicks the 'Export Image' button in the 'Export Image' popup after annotating the screenshot (optional).
             * Note: By default, exporting of an image is not active in the web version of the SDK. If you want to use this feature you're supposed to install NuGet package
             * 'CefSharp.OffScreen' (>= 63.0.3).
             * @type {$.ig.RevealView~onImageExported}
             * @example
             * revealView.onImageExported = function (img) {
             *   console.log(img);
             * };
             */
            this.onImageExported = null; //TODO - check this later(should probably be of type Element)
            /**
             * This event is triggered by the $.ig.RevealView object whenever the end-user tries to follow a link to dashboard (only if the link was link to dashboard).
             * @type {$.ig.RevealView~onVisualizationLinkingDashboard}
             * @example
             * revealView.onVisualizationLinkingDashboard = function (title, url, callback) {
             *     console.log("Link followed - " + title);
             *     console.log("Url - " + url);
             *
             *     var dashboardId = "Environment"
             *     callback(dashboardId);
             * };
             */
            this.onVisualizationLinkingDashboard = null;
            /**
             * This event is triggered whenever the end user is trying to open the editor for a visualization.
             * Using the args parameter you could check if this is a brand new visualization or the user is trying to edit an existing one.
             * You could also cancel the process of entering the editor by setting args.cancel to true.
             * @type {$.ig.RevealView~onVisualizationEditorClosing}
             *
             * @example
             * revealView.onVisualizationEditorOpening = function (args) {
             *     if(args.isNewVisualization == false){ //the user is trying to edit an existing visualization
                        args.cancel = true; //Prevent it
             *     }
             * };
             */
            this.onVisualizationEditorOpening = null; //TODO - add types later
            /**
            * Event triggered when the visualization editor was opened.
            * Using the args parameter you could check if this is a brand new visualization or the user is editing an existing one.
            * @type {$.ig.RevealView~onVisualizationEditorOpened}
            *
            * @example
            * revealView.onVisualizationEditorClosed = function (args) {
            *     if(args.isNewVisualization == false) { //the user is editing an existing visualization
            *     }
            * };
            */
            this.onVisualizationEditorOpened = null; //TODO - add types later
            /**
           * This event is triggered whenever the end user clicks after editing/creating a visualization clicks on the  cancel("x") button.
           * Using the args parameter you could check if this is a brand new visualization or the user is editing an existing one.
           * You could also cancel the process of exiting edit mode by setting args.cancel to true.
           * @type {$.ig.RevealView~onVisualizationEditorClosing}
           *
           * @example
           * revealView.onVisualizationEditorClosing = function (args) {
           *     if(args.isNewVisualization == false){ //the user is editing
                      args.resetVisualization = true; //Puts the widget to the state when it was when the user started editing it
           *     }
           * };
           */
            this.onVisualizationEditorClosing = null; //TODO - add types later
            /**
             * Event triggered when the visualization editor was closed.
             * Using the args parameter you could check if this is a brand new visualization or the user edited an existing one.
             * isCancelled flag can be used to know if the user applied the changes or discarded them, isCancelled is true when the changes were discarded.
             * @type {$.ig.RevealView~onVisualizationEditorClosed}
             *
             * @example
             * revealView.onVisualizationEditorClosed = function (args) {
             *     if(args.isNewVisualization == false) { //the user edited
             *     }
             * };
             */
            this.onVisualizationEditorClosed = null; //TODO - add types later
            //#endregion Public Events
            //#region Public Methods
            this.revealViewForDashboardBlob = function (b, selector, successCallback, errorCallback) {
                $.ig.RevealUtility.loadDashboardFromContainer(b, function (dashboard) {
                    var revealView = new RevealView(selector);
                    revealView.dashboard = dashboard;
                    successCallback(revealView);
                }, errorCallback);
            };
            this._navigationMgr = new $.ig.SdkNavigationManager();
            this._selector = selector;
            this._dashboardModel = null;
            this._applyingParameters = false;
            this._serverSideSave = true;
            this._sdkDelegate = new SdkDelegate(this);
            this._appInstanceId = $.ig.RPAppUtility.prototype
                .utility()
                .registerSDKAppInstance(new SdkApp(this));
            if (!selector || !$(selector)[0]) {
                throw new Error("RevealView should be initialized with a DOM element selector");
            }
            //if there is not selector provided to render the measuring spans, use the selector for this particular instance.
            if (RevealSdkSettings.measuringHostElement == null) {
                $.ig.JSHelperUtility.prototype.registerRootElement(selector);
            }
            setTimeout(() => {
                if (this.dashboard == null) {
                    this.dashboard = new RVDashboard();
                }
            }, 10);
            //this.dashboard = new RVDashboard();
            this._availableCharTypes = Object.keys(RVChartType).map((k) => k);
        }
        //#region Private Methods
        _presentRevealView() {
            var r = $(this._selector);
            var revealView = this;
            if (r[0].firstChild) {
                r[0].removeChild(r[0].firstChild);
            }
            if (r[0].firstChild) {
                r[0].insertBefore(revealView._dashboardView._element[0], r[0].firstChild);
            }
            else {
                r[0].appendChild(revealView._dashboardView._element[0]);
            }
            window.onresize = function () {
                revealView.updateSize();
            };
            revealView.updateSize();
            revealView._dashboardView.isEditting(revealView.startInEditMode);
            if (revealView._dashboardView.isEditting() &&
                revealView.startWithNewVisualization) {
                setTimeout(function () {
                    revealView._sdkDelegate.addWidgetTriggered();
                });
            }
        }
        _dashboardLoaded(dashboard) {
            var revealView = this;
            if (dashboard == null) {
                var newDashboard = new $.ig.DashboardDocument(0);
                newDashboard.useAutoLayout(true);
                dashboard = RVDashboard._create(newDashboard, "New dashboard"); //TODO - review this - what should be the id of new dashboard or loaded from blob
            }
            if (this._dashboard != null) {
                this._dashboard._unsubscribeDashboardView(this._dashboardView);
            }
            this._dashboard = dashboard;
            this._setDashModel(dashboard._dashboardModel);
            // Needs to be done because of native functionality
            // One particular case this is needed is for drilling when editing a just created visualization
            revealView._dashboardModel.tags(dashboard._dashboardId);
            var needsToBePresented = false;
            if (revealView._dashboardView == null) {
                revealView._dashboardView = new $.ig.DashboardView();
                revealView._dashboardView.clipToBounds(true);
                needsToBePresented = true;
            }
            else {
                revealView._dashboardView.closeDashboard();
            }
            revealView._dashboardView._delegate = this._sdkDelegate;
            revealView._dashboardView._navigationDelegate = this._sdkDelegate;
            revealView._dashboardView._linkingDelegate = this._sdkDelegate;
            this._dashboard._subscribeDashboardView(this._dashboardView);
            revealView._dashboardView._widgetLinkingBlock = function (actionObj, categoryValue, callback) {
                if (revealView.onVisualizationLinkingDashboard) {
                    revealView.onVisualizationLinkingDashboard(actionObj.title(), actionObj.url(), function (targeDashboardId) {
                        RevealUtility.loadDashboard(targeDashboardId, function (targetDashboard) {
                            revealView._navigationMgr.pushCurrentState(null, revealView.dashboard, null, revealView.maximizedVisualization);
                            callback(targetDashboard._dashboardModel, function (params) {
                                revealView.dashboard = targetDashboard;
                                revealView._dashboardView.setDashboardParamaters(params);
                                revealView._loadDashboard();
                            });
                        }, function (err) {
                            var errorMessage = err.errorMessage();
                            console.error(errorMessage);
                        });
                    });
                    return true;
                }
                return false;
            };
            revealView._applyRevealViewParameters(() => {
                if (revealView.maximizedVisualization != null ||
                    revealView.singleVisualizationMode) {
                    var parameters = new $.ig.DashboardViewParameters();
                    if (revealView.maximizedVisualization != null) {
                        parameters._maximizedWidgetId = revealView.maximizedVisualization.id;
                    }
                    else if (revealView._dashboardModel.widgets().length > 0) {
                        parameters._maximizedWidgetId = revealView._dashboardModel
                            .widgets()[0]
                            .id();
                    }
                    parameters._globalFiltersSelectedItems = {};
                    revealView._dashboardView.setDashboardParamaters(parameters);
                }
                revealView._dashboardView.setDashboard(revealView._dashboardModel);
                //revealView._dashboardView.hideEmptyState();
                if (needsToBePresented) {
                    revealView._presentRevealView();
                }
                if (revealView._navigationMgr.canGoBack()) {
                    revealView._dashboardView.enableLinkingBack();
                }
            });
        }
        _setDashModel(model) {
            this._dashboardModel = model;
            this._dashboardModel._appInstanceId = this._appInstanceId;
        }
        _applyRevealViewParameters(done) {
            if (!this._applyingParameters) {
                this._applyingParameters = true;
                var revealView = this;
                this._updateGlobalFiltersValues(function () {
                    revealView._addListeners();
                    revealView._applyingParameters = false;
                    done();
                });
            }
        }
        _updateGlobalFiltersValues(onComplete) {
            var revealView = this;
            var globalFilters = this._dashboardModel.globalFilters();
            RevealUtility._forAllElements(globalFilters, 0, function (globalFilter, callback) {
                if (revealView.dashboard == null) {
                    return;
                }
                if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, globalFilter) !== null) {
                    if (revealView.dashboard.dateFilter) {
                        var dateFilter = revealView.dashboard.dateFilter;
                        globalFilter._ruleType = dateFilter._filterModel._ruleType;
                        globalFilter._customDateRange =
                            dateFilter._filterModel._customDateRange;
                    }
                    callback();
                }
                else {
                    var filter = FiltersUtility.findFilterById(revealView.dashboard.filters, globalFilter.id());
                    if (!filter) {
                        callback();
                    }
                    else {
                        if (filter.selectedValues.length == 0) {
                            callback();
                            return;
                        }
                        revealView._updateFilterSelectedValues(globalFilter, filter.selectedValues, callback);
                    }
                }
            }, onComplete);
        }
        _addListeners() {
            var revealView = this;
            var dashView = this._dashboardView;
            dashView._widgetClickedBlock = function (w, c, r) {
                if (revealView.onVisualizationDataPointClicked) {
                    var args = revealView._prepareDatePointClickedAndTooltipShowingEventargs(w, c, r);
                    if (revealView.onVisualizationDataPointClicked != null) {
                        revealView.onVisualizationDataPointClicked(args.visualization, args.cell, args.row);
                    }
                }
            };
            dashView._tooltipShowingBlock = function (widget, cell, row) {
                if (revealView.onTooltipShowing) {
                    var args = revealView._prepareDatePointClickedAndTooltipShowingEventargs(widget, cell, row);
                    revealView.onTooltipShowing(args);
                    return !args.cancel;
                }
                return true;
            };
        }
        _updateFilterSelectedValues(globalFilter, sdkSelectedValues, callback) {
            var revealView = this;
            globalFilter = $.ig.DashboardDocumentUtils.prototype.getGlobalFilter(this._dashboardModel, globalFilter.id()); //get the right reference to update
            if (globalFilter == null) {
                return;
            }
            var keyField = FiltersUtility.getSelectedFieldName(globalFilter);
            var requiredFields = $.ig.DashboardDocumentUtils.prototype.getGlobalFilterRequiredFields(this._dashboardModel, globalFilter.id());
            if (this._requiresFilterAvailableValues(requiredFields, sdkSelectedValues)) {
                var globalFilters = revealView._dashboardModel.globalFilters();
                $.ig.FiltersUtility.prototype.utility().getGlobalFilterData(revealView._dashboardModel, globalFilters, globalFilter, null, null, null, function (result) {
                    var values = result.values();
                    var valueCount = values.length;
                    var selectedItems = [];
                    for (var i = 0; i < valueCount; i++) {
                        var value = values[i];
                        var key = value.values().getObjectValue(keyField);
                        if (key == null) {
                            continue;
                        }
                        if (RevealUtility._listContains(sdkSelectedValues, key)) {
                            var si = new $.ig.GlobalFilterSelectedItem();
                            si._fieldValues = value.values();
                            selectedItems.push(si);
                            if (sdkSelectedValues.length == selectedItems.length) {
                                break; //all items added, stop iterating
                            }
                        }
                    }
                    globalFilter._selectedItems = selectedItems;
                    callback();
                }, function (error) {
                    console.log(error.errorMessage());
                    callback();
                });
            }
            else {
                var selectedItems = [];
                for (var j = 0; j < sdkSelectedValues.length; j++) {
                    var item = new $.ig.GlobalFilterSelectedItem();
                    var sdkValue = sdkSelectedValues[j];
                    if (RevealUtility._isObject(sdkValue)) {
                        item._fieldValues.copyValues(sdkValue);
                    }
                    else {
                        item._fieldValues.setObjectValue(keyField, sdkValue);
                    }
                    selectedItems.push(item);
                }
                globalFilter._selectedItems = selectedItems;
                callback();
            }
        }
        _requiresFilterAvailableValues(requiredFields, selectedValues) {
            if (requiredFields.length == 1) {
                return false; //we don't need available values, the label is also used for binding
            }
            else if (selectedValues.length == 0) {
                return false; //empty selection, we don't need available values
            }
            else if (RevealUtility._isObject(selectedValues[0])) {
                return false; //selected values contains the whole dictionary, no need for available values
            }
            else {
                //selected values are labels but we need other fields (like id's) for binding
                //we need available values to get the values for remaining fields.
                return true;
            }
        }
        _loadDashboard() {
            var revealView = this;
            if (!revealView.dashboard) {
                return;
            }
            this._dashboardLoaded(revealView.dashboard);
        }
        _dashboardViewSaveDashboard(dashboardView, dashboard, saveAs) {
            var _a;
            var revealView = this;
            var title = dashboard.title();
            var dashboardId = (_a = revealView === null || revealView === void 0 ? void 0 : revealView.dashboard) === null || _a === void 0 ? void 0 : _a._dashboardId;
            if (dashboardId == "New Dashboard") {
                dashboardId = null;
            }
            dashboard.saveToBackingStore(); // needed to sync backing store (json) with the model.
            if (revealView.onSave) {
                revealView.onSave(revealView, new DashboardSaveEventArgs(saveAs, title, revealView, dashboardId));
            }
            else { // saveAs & client-side save scenarios need to pass through the onSave event.
                if (!saveAs && this.serverSideSave) {
                    this._sendServerSideSaveRequest(title, dashboardId);
                    this._dashboardView.dashboardSaved();
                }
            }
        }
        _prepareDatePointClickedAndTooltipShowingEventargs(w, c, r) {
            var visualization = new RVVisualization(w);
            var cell = new RVCell();
            cell.columnName = c.columnName();
            cell.columnLabel = c.columnLabel();
            cell.value = c.value();
             c.formattedValue();
            var row = [];
            for (var i = 0; i < r.length; i++) {
                var cell1 = new $.ig.RVCell();
                cell1.columnName = r[i].columnName();
                cell1.columnLabel = r[i].columnLabel();
                cell1.value = r[i].value();
                cell1.formattedValue = r[i].formattedValue();
                row.push(cell1);
            }
            return new ChartInteractionEventArgs(visualization, cell, row);
        }
        /**
         * Sets the selected values for the given filter
         *
         * @param {$.ig.RVDashboardFilter} filter The filter to set the selection to. It might be obtained from dashboard.filters()[index] or dashboard.getFilterByTitle(title)
         * @param {object[]} selectedValues The array of selected values containing the new selection for the filter, like ['United States', 'France'].
         * @see $.ig.RVDashboard#filters
         * @see $.ig.RVDashboard#getFilterByTitle
         */
        _setFilterSelectedValues(filter, selectedValues) {
            var globalFilter = filter._filterModel;
            if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, globalFilter) !=
                null) {
                return;
            }
            var revealView = this;
            revealView._updateFilterSelectedValues(globalFilter, selectedValues, function () {
                revealView._dashboardView.updateGlobalFilters();
                var connectedWidgets = $.ig.FiltersUtility.prototype
                    .utility()
                    .getConnectedWidgetsForFilter(globalFilter, revealView._dashboardModel);
                revealView._dashboardView.updateWidgetData(connectedWidgets);
            });
        }
        _setDateFilter(dateFilter) {
            var globalFilters = this._dashboardModel.globalFilters();
            var count = globalFilters.length;
            var targetFilter = null;
            for (var i = 0; i < count; i++) {
                var gf = globalFilters[i];
                var df = $.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, gf);
                if (df !== null) {
                    targetFilter = df;
                    break;
                }
                else {
                    continue;
                }
            }
            targetFilter.ruleType(dateFilter._filterModel.ruleType());
            targetFilter.customDateRange(dateFilter._filterModel.customDateRange());
            this._dashboardView.updateGlobalFilters();
            var connectedWidgets = $.ig.FiltersUtility.prototype
                .utility()
                .getConnectedWidgetsForFilter(targetFilter, this._dashboardModel);
            this._dashboardView.updateWidgetData(connectedWidgets);
            // if (revealView.dashboard?._dateFilter != null) {
            //   revealView.dashboard._dateFilter = dateFilter;
            // }
        }
        _sendServerSideSaveRequest(name, dashboardId) {
            var _a;
            let toSaveId = (dashboardId == null || dashboardId == "") ? name : dashboardId;
            var revealView = this;
            revealView._dashboardView.setHeaderTitle(name);
            if (revealView.serverSideSave) {
                var saveRequest = $.ig.ReportPlusWebSdkRequest.prototype.uploadDashboard(name, toSaveId, (_a = this.dashboard) === null || _a === void 0 ? void 0 : _a._dashboardModel, null, function (req, res) {
                    if (revealView.dashboard != null) {
                        revealView.dashboard._dashboardId = toSaveId;
                    }
                    revealView._dashboardView.dashboardSaved();
                }, function (req, err) {
                    console.log(err.errorMessage());
                });
                saveRequest.execute();
            }
        }
        _dashboardSaveFinished(name, dashboardId) {
            let savedId = (dashboardId == null || dashboardId == "") ? name : dashboardId;
            var revealView = this;
            revealView._dashboardView.setHeaderTitle(name);
            if (revealView.dashboard != null) {
                revealView.dashboard._dashboardId = savedId;
            }
            revealView._dashboardView.dashboardSaved();
        }
        /**
         * This method is used to indicate the size of the container has changed and $.ig.RevealView must re-layout its contents.
         */
        updateSize() {
            var revealView = this;
            if (revealView && revealView._dashboardView) {
                var dashboardView = revealView._dashboardView;
                var r = $(revealView._selector);
                var container = r[0];
                if (container == null) {
                    return;
                }
                var rect = container.getBoundingClientRect();
                //we use divs with position=absolute, absolute position is relative to the closest
                //positioned ancestor (basically the closest ancestor using a non static position).
                //see here: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#absolute_positioning
                //and here: https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
                //when the container is non-static, we force left/top to be zero as we want to use all space 
                //assigned to the container, this sounds like the safest approach
                //when the container is not positioned, we should be using offsetLeft/offsetTop that are supposed
                //to return the offset relative to the positioned ancestor, we should never be using rect.left/rect.top
                //as that's the position in the viewport, so with any ancestor using relative or absolute position
                //that would be wrong.
                //but for backward compatibility I'm not changing that and leaving rect.left/rect.top, which means it's wrong
                //and the workaround is to set the container to position=relative.
                if (window.getComputedStyle(container, null).position != "static") {
                    dashboardView.setFrame(0, 0, rect.width, rect.height);
                }
                else {
                    //here we should be passing container.offsetLeft/container.offsetTop instead of rect.left/rect.top
                    //maybe we should add a flag for that
                    dashboardView.setFrame(rect.left, rect.top, rect.width, rect.height);
                }
            }
        }
        /**
         * Used to maximize a visualization once the Reveal View was initialized and rendered. It might be used to sync the currently displayed visualization with
         * a feature in the containing app, like displaying 'Sales by Country' along a Sales report.
         * @param {$.ig.RVVisualization} visualization the visualization to be maximized, an object obtained from the dashboard with methods like
         * visualizations()[index] or getVisualizationByTitle(title).
         * @returns {boolean} true if the given visualization was found in the dashboard and maximized properly, false otherwise.
         * @see $.ig.RVDashboard#getVisualizationByTitle
         * @see $.ig.RVDashboard#visualizations
         */
        maximizeVisualization(visualization) {
            if (!visualization) {
                return false;
            }
            var index = $.ig.DashboardDocumentUtils.prototype.getWidgetIndexById(this._dashboardModel, visualization.id);
            if (index < 0) {
                return false;
            }
            this._dashboardView.maximizeWidgetAtIndex(index);
            return true;
        }
        /**
         * Used to restore the currently maximized visualization to the original state, so the whole dashboard is visible.
         * @returns {boolean} true if there was a maximized visualization, which was minimized, false otherwise.
         * */
        minimizeVisualization() {
            if (this._dashboardView._maximizedWidgetIndex < 0 ||
                this.singleVisualizationMode) {
                return false;
            }
            this._dashboardView.maximizeWidgetAtIndex(-1);
            return true;
        }
        /**
         * Sets the date filter in the current dashboard, please note the dashboard must be defined with a date filter, if not this method will be ignored.
         * @param {$.ig.RVDateDashboardFilter} filter the new date filter to set in the dashboard model.
         * @see $.ig.RVDashboard#dateFilter
         */
        setDateFilter(filter) {
            var globalFilter = filter._filterModel;
            if ($.ig.util.cast($.ig.DateGlobalFilter.prototype.$type, globalFilter) ==
                null) {
                return;
            }
            var revealView = this;
            if (revealView.dashboard == null) {
                return;
            }
            var dashboardDateFilter = revealView.dashboard.dateFilter;
            if (dashboardDateFilter == null) {
                return;
            }
            var targetFilter = dashboardDateFilter._filterModel;
            targetFilter.ruleType(globalFilter.ruleType());
            targetFilter.customDateRange(globalFilter.customDateRange());
            revealView._dashboardView.updateGlobalFilters();
            var connectedWidgets = $.ig.FiltersUtility.prototype
                .utility()
                .getConnectedWidgetsForFilter(targetFilter, revealView._dashboardModel);
            revealView._dashboardView.updateWidgetData(connectedWidgets);
        }
        /**
         * Method used to programmatically refresh the dashboard data, equivalent to execute the 'Refresh' action in the dashboard menu.
         */
        refreshDashboardData() {
            var revealView = this;
            revealView._dashboardView.refresh();
        }
        /**
        * Makes sure the current theme specified in RevealSdkSettings.Theme is applied.
        * This involve re-loading of the currently displayed dashboard so any state like pending edits, maximized visualization, filters selection changes will be reset and lost.
        */
        refreshTheme() {
            this.dashboard = this.dashboard;
        }
        /**
         * This event is triggered whenever the end user clicks 'Save' or 'Save As'
         * @callback $.ig.RevealView~onSave
         * @param {$.ig.RevealView} revealView The $.ig.RevealView object that triggered the event.
         * @param {$.ig.DashboardSaveEventArgs} args An instance of DashboardSaveEventArgs that can be used to get information about the dashboard being saved and to get the binary contents of it.
         */
        maximizedWidgetChanged() {
            if (this.onMaximizedVisualizationChanged) {
                this.onMaximizedVisualizationChanged();
            }
        }
        /**
         * Creates a screenshot of the revealView.
         * Note: By default, exporting of an image is not active in the web version of the SDK.If you want to use this feature you're supposed to install NuGet package
         * 'CefSharp.OffScreen'(>= 63.0.3).
         * @param {gotImageCallback} gotImageCallback - A callback that will be invoked when the image is ready. The image will be passed as a param to the callback.
         * @example
         * revealView.toImage(function (img) {
         *     img.removeAttribute("style");
         *     body.innerHTML = "";
         *     body.appendChild(img);
         * });
         */
        toImage(gotImageCallback) {
            var view = this._dashboardView;
            if (view === null) {
                gotImageCallback(null);
                return;
            }
            view.exportImageWithCallback(gotImageCallback);
        }
        //TODO - add JSDoc
        serialize(callback, errorCallback) {
            $.ig.ReportPlusWebSdkRequest.prototype
                .createRDash(this._dashboardModel, function (blob) {
                callback(blob);
            }, function (r, error) {
                errorCallback(error);
            })
                .execute();
        }
        //TODO - add JSDoc
        serializeWithNewName(name, callback, errorCallback) {
            this._dashboardView.setHeaderTitle(name);
            this.serialize(callback, errorCallback);
        }
        /**
         * Overrides built in Reveal Theme settings. This method will not affect RevealView instances already rendered.
         * @param {$.ig.RevealTheme} theme object containing theme settings to override
         */
        static updateRevealTheme(theme) {
            if (theme == null) {
                var errorMessage = $.ig.NativeEMLocalizeUtil.prototype.localize($.ig.EMLocalizationKeys.prototype.nullThemePassedExceptionSDK);
                throw Error(errorMessage);
            }
            var currentMainDashboardTheme = $.ig.DashboardThemeManager.prototype.getTheme(theme.isOceanBased
                ? $.ig.DashboardThemeManager.prototype.builtInThemeId2
                : $.ig.DashboardThemeManager.prototype.builtInThemeId1);
            var newDashboardTheme = new $.ig.DashboardTheme(currentMainDashboardTheme.cloneJSON());
            newDashboardTheme.setValueForKey("Name", "Custom SDK Theme");
            newDashboardTheme.setValueForKey("Id", "Custom SDK Theme");
            //Chart colors
            if (theme.chartColors != null && theme.chartColors.length > 0) {
                var chartColors = [];
                for (var i = 0; i < theme.chartColors.length; i++) {
                    chartColors.push($.ig.ColorUtility.prototype.convertNativeToRGBHexString(theme.chartColors[i]));
                }
                newDashboardTheme.setValueForKey("ChartColors", chartColors);
            }
            //Conditional Colors
            var cf = theme.conditionalFormatting;
            if (cf.lowColor != null) {
                newDashboardTheme.setValueForKey("CFLowColor", $.ig.ColorUtility.prototype.convertNativeToRGBHexString(cf.lowColor));
            }
            if (cf.midColor != null) {
                newDashboardTheme.setValueForKey("CFMidColor", $.ig.ColorUtility.prototype.convertNativeToRGBHexString(cf.midColor));
            }
            if (cf.hiColor != null) {
                newDashboardTheme.setValueForKey("CFHiColor", $.ig.ColorUtility.prototype.convertNativeToRGBHexString(cf.hiColor));
            }
            if (cf.noneColor != null) {
                newDashboardTheme.setValueForKey("CFNoneColor", $.ig.ColorUtility.prototype.convertNativeToRGBHexString(cf.noneColor));
            }
            //HighlightColor
            if (theme.highlightColor != null) {
                newDashboardTheme.setValueForKey("HighlightColor", $.ig.ColorUtility.prototype.convertNativeToRGBHexString(theme.highlightColor));
            }
            $.ig.DashboardThemeManager.prototype.overrideDashboardThemes([
                newDashboardTheme,
            ]);
            var foregroundColor = theme.fontColor != null
                ? new $.ig.CPThemeColor(0, $.ig.ColorUtility.prototype.convertToInt(theme.fontColor))
                : null;
            var accentColor = theme.accentColor != null
                ? new $.ig.CPThemeColorSet(0, $.ig.ColorUtility.prototype.convertToInt(theme.accentColor))
                : null;
            var mainBackgroundColor = theme.dashboardBackgroundColor != null
                ? new $.ig.CPThemeColor(0, $.ig.ColorUtility.prototype.convertToInt(theme.dashboardBackgroundColor))
                : null;
            var itemBackgroundColor = theme.visualizationBackgroundColor != null
                ? new $.ig.CPThemeColor(0, $.ig.ColorUtility.prototype.convertToInt(theme.visualizationBackgroundColor))
                : null;
            $.ig.SdkUtility.prototype.applyThemeSettings(theme.useRoundedCorners, accentColor, mainBackgroundColor, itemBackgroundColor, foregroundColor, theme.regularFont, theme.mediumFont, theme.boldFont, theme.isDark);
            RevealView._currentTheme = theme;
        }
        /**
         * Set the chart settings
         */
        setVisualizationChartSettings(visualization, chartSettings) {
            if (chartSettings == null) {
                return;
            }
            var widget = visualization._widgetModel;
            var widgetSettings = widget.visualizationSettings();
            if ($.ig.util.cast($.ig.ChartVisualizationSettings.prototype.$type, widgetSettings) !== null) {
                if (chartSettings.leftAxisMinValue !== undefined) {
                    widgetSettings.leftAxisMinValue($.ig.util.toNullable(Number, chartSettings.leftAxisMinValue));
                }
                if (chartSettings.leftAxisMaxValue !== undefined) {
                    widgetSettings.leftAxisMaxValue($.ig.util.toNullable(Number, chartSettings.leftAxisMaxValue));
                }
                if (chartSettings.rightAxisMinValue !== undefined) {
                    widgetSettings.rightAxisMinValue($.ig.util.toNullable(Number, chartSettings.rightAxisMinValue));
                }
                if (chartSettings.rightAxisMaxValue !== undefined) {
                    widgetSettings.rightAxisMaxValue($.ig.util.toNullable(Number, chartSettings.rightAxisMaxValue));
                }
                if (this._dashboardView != null) {
                    this._dashboardView.updateWidgetVisualizationSettings(widget);
                }
            }
        }
        //#endregion Public Methods
        //#region Properties
        /**
         * @returns {$.ig.RVVisualization} the maximized visualization object if any, null if no visualization is maximized
         * */
        get maximizedVisualization() {
            if (this.dashboard == null) {
                return null;
            }
            var index = this._dashboardView._maximizedWidgetIndex;
            var visualizations = this.dashboard.visualizations;
            if (index < 0 || index >= visualizations.length) {
                return null;
            }
            else {
                return visualizations[index];
            }
        }
        set maximizedVisualization(viz) {
            if (viz == null) {
                this.minimizeVisualization();
            }
            else {
                this.maximizeVisualization(viz);
            }
        }
        /**
         * @memberof $.ig.RevealView
         * @public
         * @member {$.ig.RVDashboard} dashboard
         */
        get dashboard() {
            return this._dashboard;
        }
        set dashboard(dashboard) {
            var _a, _b;
            (_a = this._dashboard) === null || _a === void 0 ? void 0 : _a._unsubscribeView(this);
            this._dashboard = dashboard;
            (_b = this._dashboardView) === null || _b === void 0 ? void 0 : _b.closeDashboard();
            this._dashboardView = null;
            dashboard === null || dashboard === void 0 ? void 0 : dashboard._subscribeView(this);
            this._dashboardLoaded(this._dashboard);
        }
        /**
         * A flag indicating if the user can switch to edit mode or not, defaults to true.
         * @memberof $.ig.RevealView
         * @public
         * @member {boolean} dashboard
         * @default true
         */
        get canEdit() {
            return this._canEdit;
        }
        set canEdit(canEdit) {
            var _a;
            this._canEdit = canEdit;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanEdit(canEdit);
        }
        /**
         * A flag indicating the view should start in edit mode instead of the default view mode, defaults to false.
         * @name $.ig.RevealSettings#startInEditMode
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default false
         */
        get startInEditMode() {
            return this._startInEditMode;
        }
        set startInEditMode(startInEditMode) {
            this._startInEditMode = startInEditMode;
        }
        /**
         * A flag that indicates if new visualizations can be added when the dashboard is edited
         * @name $.ig.RevealView#canAddVisualization
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canAddVisualization() {
            return this._canAddVisualization;
        }
        set canAddVisualization(canAddVisualization) {
            var _a;
            this._canAddVisualization = canAddVisualization;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanAddVisualization(canAddVisualization);
        }
        /**
         * A flag indicating if new (calculated) fields can be added to the list of fields.
         * @name $.ig.RevealView#canAddCalculatedFields
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canAddCalculatedFields() {
            return this._canAddCalculatedFields;
        }
        set canAddCalculatedFields(v) {
            var _a;
            this._canAddCalculatedFields = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanAddCalculatedFields(v);
        }
        /**
         * A flag indicating if the f(x) option in numeric values sections (like "Values") should be displayed or not.
         * @name $.ig.RevealView#canAddPostCalculatedFields
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canAddPostCalculatedFields() {
            return this._canAddPostCalculatedFields;
        }
        set canAddPostCalculatedFields(v) {
            var _a;
            this._canAddPostCalculatedFields = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanAddPostCalculatedFields(v);
        }
        /**
         * A flag that indicates if the end user will be allowed to create dashboard filters.
         * @name $.ig.RevealView#canAddDashboardFilter
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canAddDashboardFilter() {
            return this._canAddDashboardFilter;
        }
        set canAddDashboardFilter(v) {
            this._canAddDashboardFilter = v;
            this === null || this === void 0 ? void 0 : this._dashboardView.__globalFiltersGrid.updateGrid();
        }
        /**
         * A flag that indicates if the end user will be allowed to create date filter.
         * @name $.ig.RevealView#canAddDateFilter
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canAddDateFilter() {
            return this._canAddDateFilter;
        }
        set canAddDateFilter(v) {
            this._canAddDateFilter = v;
            this === null || this === void 0 ? void 0 : this._dashboardView.__globalFiltersGrid.updateGrid();
        }
        /**
         * A flag that indicates if the "Copy" option is available in the menu for a visualization.
         * @name $.ig.RevealView#canCopyVisualization
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canCopyVisualization() {
            return this._canCopyVisualization;
        }
        set canCopyVisualization(v) {
            var _a;
            this._canCopyVisualization = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanCopyVisualization(v);
        }
        /**
         * A flag that indicates if the "Duplicate" option is available in the menu for a visualization.
         * @name $.ig.RevealView#canDuplicateVisualization
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get canDuplicateVisualization() {
            return this._canDuplicateVisualization;
        }
        set canDuplicateVisualization(v) {
            var _a;
            this._canDuplicateVisualization = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setCanDuplicateVisualization(v);
        }
        //TODO - kk - review this api help gen after the refactoring is done.
        /**
         * A flag that allows the dashboard filters panel to be hidden. This is useful if you want to limit the selected
         * values for the filters to the initial selection specified in $.ig.RevealSettings.
         * Once the $.ig.RevealView object is created and rendered you can use $.ig.RevealView.setFilterSelectedValues to change
         * the selection for a given filter, so you can keep the selected values synced with your app.
         * @name $.ig.RevealView#showMenu
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get showFilters() {
            return this._showFilters;
        }
        set showFilters(v) {
            var _a;
            this._showFilters = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowGlobalFilters(v);
        }
        /**
         * A flag that allows the dashboard filters panel to be hidden. This is useful if you want to limit the selected
         * values for the filters to the initial selection specified in $.ig.RevealSettings.
         * Once the $.ig.RevealView object is created and rendered you can use $.ig.RevealView.setFilterSelectedValues to change
         * the selection for a given filter, so you can keep the selected values synced with your app.
         * @name $.ig.RevealView#showMenu
         * @memberof $.ig.RevealView
         * @type {boolean}
         * @default true
         */
        get singleVisualizationMode() {
            return this._singleVisualizationMode;
        }
        set singleVisualizationMode(v) {
            var _a;
            this._singleVisualizationMode = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setSingleVisualizationMode(v);
        }
        //TODO - kk - add api docs for the props bellow
        get canSaveAs() {
            return this._canSaveAs;
        }
        set canSaveAs(v) {
            this._canSaveAs = v;
            let dbView = this._dashboardView;
            if (dbView) {
                dbView.setCanSaveAs(v);
            }
        }
        get showRefresh() {
            return this._showRefresh;
        }
        set showRefresh(v) {
            var _a;
            this._showRefresh = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowRefresh(v);
        }
        get canDashboardViewAddVisualization() {
            return this._canAddVisualization;
        }
        set canDashboardViewAddVisualization(v) {
            this._canAddVisualization = v;
        }
        get showChangeVisualization() {
            return this._showChangeVisualization;
        }
        set showChangeVisualization(v) {
            this._showChangeVisualization = v;
        }
        get showStatisticalFunctions() {
            return this._showStatisticalFunctions;
        }
        set showStatisticalFunctions(v) {
            this._showStatisticalFunctions = v;
        }
        get showExportImage() {
            return this._showExportImage;
        }
        set showExportImage(v) {
            var _a;
            this._showExportImage = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowExportImage(v);
        }
        get showExportToExcel() {
            return this._showExportToExcel;
        }
        set showExportToExcel(v) {
            var _a;
            this._showExportToExcel = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowExportToExcel(v);
        }
        get showExportToPowerpoint() {
            return this._showExportToPowerpoint;
        }
        set showExportToPowerpoint(v) {
            var _a;
            this._showExportToPowerpoint = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowExportToPowerpoint(v);
        }
        get showExportToPDF() {
            return this._showExportToPDF;
        }
        set showExportToPDF(v) {
            var _a;
            this._showExportToPDF = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowExportToPDF(v);
        }
        get startWithNewVisualization() {
            return this._startWithNewVisualization;
        }
        set startWithNewVisualization(v) {
            this._showExportToPowerpoint = v;
        }
        get showChangeDataSource() {
            return this._showChangeDataSource;
        }
        set showChangeDataSource(v) {
            this._showChangeDataSource = v;
        }
        get showEditDataSource() {
            return this._showEditDataSource;
        }
        set showEditDataSource(v) {
            this._showEditDataSource = v;
        }
        get showMachineLearningModelsIntegration() {
            return this._showMachineLearningModelsIntegration;
        }
        set showMachineLearningModelsIntegration(v) {
            var _a;
            this._showMachineLearningModelsIntegration = v;
            //TODO - address this or remove it
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowMachineLearningModelsIntegration(v);
        }
        get showDataBlending() {
            return this._showDataBlending;
        }
        set showDataBlending(showDataBlending) {
            this._showDataBlending = showDataBlending;
        }
        get showMenu() {
            return this._showMenu;
        }
        set showMenu(v) {
            var _a;
            this._showMenu = v;
            (_a = this._dashboardView) === null || _a === void 0 ? void 0 : _a.setShowMenu(v);
        }
        get hoverTooltipsEnabled() {
            return this._hoverTooltipsEnabled;
        }
        set hoverTooltipsEnabled(v) {
            this._hoverTooltipsEnabled = v;
            //TODO - implement runtime update
        }
        get crosshairsEnabled() {
            return this._crosshairsEnabled;
        }
        set crosshairsEnabled(v) {
            this._crosshairsEnabled = v;
            //TODO - implement runtime update
        }
        get serverSideSave() {
            return this._serverSideSave;
        }
        set serverSideSave(v) {
            this._serverSideSave = v;
        }
        get availableChartTypes() {
            return this._availableCharTypes.slice();
        }
        set availableChartTypes(v) {
            this._availableCharTypes = v;
            if (v == null) {
                this._dashboardView.setVisualizationTypes(null);
            }
            else {
                var list = [];
                var count = v.length;
                for (var i = 0; i < count; i++) {
                    list.push($.ig.VisualizationHelper.prototype.uniqueIdentifier(RVChartTypeHelper.toVisualizationType(v[i])));
                }
                this._dashboardView.setVisualizationTypes(list);
            }
        }
    }
    //#region Private Fields
    RevealView._currentTheme = null;
    /**
     * Returns the currently applied theme.
     * @returns {$.ig.RevealTheme} theme object containing current theme settings
     */
    RevealView.getCurrentTheme = function () {
        if (RevealView._currentTheme == null) {
            RevealView._currentTheme = new RevealTheme();
        }
        return RevealView._currentTheme;
    };

    /**
     * Used to create a new instance of $.ig.RevealDashboardThumbnailView class.
     * @class
     * @classdesc The main class used to render the thumbnail for a dashboard in your application.
     * @constructor $.ig.RevealDashboardThumbnailView
     * @param {string} selector that references the HTML element to attach the view to, like a div.
     * @see $.ig.RevealSettings
     */
    class RevealDashboardThumbnailView {
        //#endregion
        constructor(selector) {
            this._selector = "";
            if (!selector || !$(selector)[0]) {
                throw new Error("RevealDashboardThumbnailView should be initialized with a DOM element selector");
            }
            this._selector = selector;
            //if there is not selector provided to render the measuring spans, use the selecor for this particular instance.
            if (RevealSdkSettings.measuringHostElement == null) {
                $.ig.JSHelperUtility.prototype.registerRootElement(selector);
            }
        }
        //#region Properties
        get dashboardInfo() {
            return this._dashboardInfo;
        }
        set dashboardInfo(i) {
            this._dashboardInfo = i;
            this._updateThumbnail();
        }
        //#endregion Properties
        //#region Public Methods
        updateSize() {
            var revealThumbnailView = this;
            if (revealThumbnailView && revealThumbnailView._thumbnailView) {
                var thumbnailView = revealThumbnailView._thumbnailView;
                var r = $(revealThumbnailView._selector);
                var container = r[0];
                if (container == null) {
                    return;
                }
                var rect = container.getBoundingClientRect();
                //take a look at the comment at RevealView.updateSize before modifying this.
                if (window.getComputedStyle(container, null).position != "static") {
                    thumbnailView.setFrame(0, 0, rect.width, rect.height);
                }
                else {
                    thumbnailView.setFrame(rect.left, rect.top, rect.width, rect.height);
                }
            }
        }
        //#endregion Public Methods
        //#region Private Methods
        _presentThumbnailView() {
            var r = $(this._selector);
            var revealThumbnailView = this;
            if (r[0].firstChild) {
                r[0].removeChild(r[0].firstChild);
            }
            if (r[0].firstChild) {
                r[0].insertBefore(revealThumbnailView._thumbnailView._element[0], r[0].firstChild);
            }
            else {
                r[0].appendChild(revealThumbnailView._thumbnailView._element[0]);
            }
            window.onresize = function () {
                revealThumbnailView.updateSize();
            };
            revealThumbnailView.updateSize();
        }
        _updateThumbnail() {
            this._thumbnailView = new $.ig.RPRoundedDynamicThumbnail();
            this._thumbnailView.setModel(null, this._dashboardInfo == null ? new $.ig.DashboardDocument() : new $.ig.DashboardDocument(1, $.ig.CPJSONObject.prototype.createFromJSONObject(this._dashboardInfo)));
            this._presentThumbnailView();
        }
    }

    /**
     * @class
     * @classdesc The class representing the chart settings for a visualization.
     * @hideconstructor
     */
    class RVChartSettings {
        constructor() {
            /**
             * Minimum value for left axis.
             * @name $.ig.RVChartSettings#leftAxisMinValue
             * @type {double}
             */
            this.leftAxisMinValue = null;
            /**
             * Maximum value for left axis.
             * @name $.ig.RVChartSettings#leftAxisMaxValue
             * @type {double}
             */
            this.leftAxisMaxValue = null;
            /**
             * Minimum value for right axis (if present).
             * @name $.ig.RVChartSettings#rightAxisMinValue
             * @type {double}
             */
            this.rightAxisMinValue = null;
            /**
             * Maximum value for right axis (if present).
             * @name $.ig.RVChartSettings#rightAxisMaxValue
             * @type {double}
             */
            this.rightAxisMaxValue = null;
        }
    }

    /**
     * @hidden
     */
    class RVDashboardDataSource {
        constructor() {
            this._id = null;
            this._title = null;
            this._subtitle = null;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get title() {
            return this._title;
        }
        set title(value) {
            this._title = value;
        }
        get subtitle() {
            return this._subtitle;
        }
        set subtitle(value) {
            this._subtitle = value;
        }
        _createWrapperInstance() {
            return eval(`new $.ig.${this.getType()}Internal();`);
        }
        _getWrapper() {
            let wrapper = this._createWrapperInstance();
            wrapper.id(this.id);
            wrapper.title(this.title);
            wrapper.subtitle(this.subtitle);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVLocalFileDataSource extends RVDashboardDataSource {
        getType() {
            return "RVLocalFileDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVDataSourceItem {
        constructor(dataSource) {
            this._title = null;
            this._subtitle = null;
            this._id = null;
            this._description = null;
            this._dataSource = dataSource;
        }
        get title() {
            return this._title;
        }
        set title(value) {
            this._title = value;
        }
        get subtitle() {
            return this._subtitle;
        }
        set subtitle(value) {
            this._subtitle = value;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(value) {
            this._dataSource = value;
        }
        _createWrapperInstance(isResourceBased = false) {
            if (isResourceBased) {
                return eval(`new $.ig.${this.getType()}Internal(this.resourceItem._getWrapper());`);
            }
            return eval(`new $.ig.${this.getType()}Internal(this.dataSource._getWrapper());`);
        }
        _getWrapper(isResourceBased = false) {
            let wrapper = this._createWrapperInstance(isResourceBased);
            wrapper.id(this.id);
            wrapper.title(this.title);
            wrapper.description(this.description);
            wrapper.subtitle(this.subtitle);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVLocalFileDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVLocalFileDataSource());
            this._uri = null;
        }
        get uri() {
            return this._uri;
        }
        set uri(value) {
            this._uri = value;
        }
        getType() {
            return "RVLocalFileDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.uri(this.uri);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVExcelDataSource extends RVDashboardDataSource {
        getType() {
            return "RVExcelDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVResourceBasedDataSourceItem extends RVDataSourceItem {
        constructor(dataSource, resourceItem) {
            super(dataSource);
            this._resourceItem = null;
            this.resourceItem = resourceItem;
        }
        get resourceItem() {
            return this._resourceItem;
        }
        set resourceItem(value) {
            this._resourceItem = value;
        }
        _getWrapper() {
            return super._getWrapper(true);
        }
    }

    /**
     * @hidden
     */
    class RVExcelDataSourceItem extends RVResourceBasedDataSourceItem {
        constructor(resourceItem) {
            super(new RVExcelDataSource(), resourceItem);
            this._sheet = null;
            this._range = null;
            this._namedRange = null;
            this._pivotTable = null;
            this._firstRowContainsLabels = false;
            this.firstRowContainsLabels = true;
        }
        get sheet() {
            return this._sheet;
        }
        set sheet(value) {
            this._sheet = value;
        }
        get range() {
            return this._range;
        }
        set range(value) {
            this._range = value;
        }
        get namedRange() {
            return this._namedRange;
        }
        set namedRange(value) {
            this._namedRange = value;
        }
        get pivotTable() {
            return this._pivotTable;
        }
        set pivotTable(value) {
            this._pivotTable = value;
        }
        get firstRowContainsLabels() {
            return this._firstRowContainsLabels;
        }
        set firstRowContainsLabels(value) {
            this._firstRowContainsLabels = value;
        }
        getType() {
            return "RVExcelDataSourceItem";
        }
        _getWrapper() {
            var _a;
            var wrapper = super._getWrapper();
            wrapper.firstRowContainsLabels(this.firstRowContainsLabels);
            wrapper.sheet(this.sheet);
            wrapper.namedRange(this.namedRange);
            wrapper.pivotTable(this.pivotTable);
            wrapper.range((_a = this.range) === null || _a === void 0 ? void 0 : _a._getWrapper());
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVExcelRange {
        constructor(locX, locY, lenX, lenY) {
            this._locationX = 0;
            this._locationY = 0;
            this._lengthX = 0;
            this._lengthY = 0;
            this._locationX = locX;
            this._locationY = locY;
            this._lengthX = lenX;
            this._lengthY = lenY;
        }
        get locationX() {
            return this._locationX;
        }
        get locationY() {
            return this._locationY;
        }
        get lengthX() {
            return this._lengthX;
        }
        get lengthY() {
            return this._lengthY;
        }
        _getWrapper() {
            let wrapper = new $.ig.RVExcelRangeInternal();
            wrapper.locationX(this.locationX);
            wrapper.locationY(this.locationY);
            wrapper.lengthX(this.lengthX);
            wrapper.lengthY(this.lengthY);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlBasedDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._host = null;
            this._port = 0;
        }
        get host() {
            return this._host;
        }
        set host(value) {
            this._host = value;
        }
        get port() {
            return this._port;
        }
        set port(value) {
            this._port = value;
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.host(this.host);
            wrapper.port(this.port);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlPDSDataSource extends RVSqlBasedDataSource {
        constructor() {
            super();
            this._processDataOnServerDefaultValue = false;
            this._processDataOnServerReadOnly = false;
            this.processDataOnServerDefaultValue = true;
        }
        get processDataOnServerDefaultValue() {
            return this._processDataOnServerDefaultValue;
        }
        set processDataOnServerDefaultValue(value) {
            this._processDataOnServerDefaultValue = value;
        }
        get processDataOnServerReadOnly() {
            return this._processDataOnServerReadOnly;
        }
        set processDataOnServerReadOnly(value) {
            this._processDataOnServerReadOnly = value;
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.processDataOnServerDefaultValue(this.processDataOnServerDefaultValue);
            wrapper.processDataOnServerReadOnly(this.processDataOnServerReadOnly);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlServerDataSource extends RVSqlPDSDataSource {
        constructor() {
            super();
            this._database = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        getType() {
            return "RVSqlServerDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.database(this.database);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlBasedDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._database = null;
            this._table = null;
            this._customQuery = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        get table() {
            return this._table;
        }
        set table(value) {
            this._table = value;
        }
        get customQuery() {
            return this._customQuery;
        }
        set customQuery(value) {
            this._customQuery = value;
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.database(this.database);
            wrapper.table(this.table);
            wrapper.customQuery(this.customQuery);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlPDSDataSourceItem extends RVSqlBasedDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._processDataOnServer = false;
            this.processDataOnServer = true;
        }
        get processDataOnServer() {
            return this._processDataOnServer;
        }
        set processDataOnServer(value) {
            this._processDataOnServer = value;
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.processDataOnServer(this.processDataOnServer);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSqlServerDataSourceItem extends RVSqlPDSDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._schema = null;
            this._procedure = null;
            this._procedureParameters = null;
            this.database = dataSource.database;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        get procedure() {
            return this._procedure;
        }
        set procedure(value) {
            this._procedure = value;
        }
        get procedureParameters() {
            return this._procedureParameters;
        }
        set procedureParameters(value) {
            this._procedureParameters = value;
        }
        getType() {
            return "RVSqlServerDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.schema(this.schema);
            wrapper.procedure(this.procedure);
            wrapper.procedureParameters(this.procedureParameters);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVWebResourceDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
            this._useAnonymousAuthentication = false;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get useAnonymousAuthentication() {
            return this._useAnonymousAuthentication;
        }
        set useAnonymousAuthentication(value) {
            this._useAnonymousAuthentication = value;
        }
        getType() {
            return "RVWebResourceDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.useAnonymousAuthentication(this.useAnonymousAuthentication);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVWebResourceDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._url = null;
            this.url = dataSource.url;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVWebResourceDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.url(this.url);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVCsvDataSource extends RVDashboardDataSource {
        getType() {
            return "RVCsvDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVCsvDataSourceItem extends RVResourceBasedDataSourceItem {
        constructor(resourceItem) {
            super(new RVCsvDataSource(), resourceItem);
            this._dateFormat = null;
            this._encoding = null;
            this._separator = null;
        }
        get dateFormat() {
            return this._dateFormat;
        }
        set dateFormat(value) {
            this._dateFormat = value;
        }
        get encoding() {
            return this._encoding;
        }
        set encoding(value) {
            this._encoding = value;
        }
        get separator() {
            return this._separator;
        }
        set separator(value) {
            this._separator = value;
        }
        getType() {
            return "RVCsvDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.dateFormat(this.dateFormat);
            wrapper.separator(this.separator);
            wrapper.encoding(this.encoding);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVMySqlDataSource extends RVSqlPDSDataSource {
        constructor() {
            super();
            this._database = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        getType() {
            return "RVMySqlDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.database(this.database);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVMySqlDataSourceItem extends RVSqlPDSDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
        }
        getType() {
            return "RVMySqlDataSourceItem";
        }
    }

    /**
     * @hidden
     */
    class RVAthenaDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._region = null;
            this._dataCatalog = null;
            this._database = null;
            this._workgroup = null;
            this._outputLocation = null;
        }
        get region() {
            return this._region;
        }
        set region(value) {
            this._region = value;
        }
        get dataCatalog() {
            return this._dataCatalog;
        }
        set dataCatalog(value) {
            this._dataCatalog = value;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        get workgroup() {
            return this._workgroup;
        }
        set workgroup(value) {
            this._workgroup = value;
        }
        get outputLocation() {
            return this._outputLocation;
        }
        set outputLocation(value) {
            this._outputLocation = value;
        }
        getType() {
            return "RVAthenaDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.database(this.database);
            wrapper.dataCatalog(this.dataCatalog);
            wrapper.outputLocation(this.outputLocation);
            wrapper.region(this.region);
            wrapper.workgroup(this.workgroup);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAthenaDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._table = null;
        }
        get table() {
            return this._table;
        }
        set table(value) {
            this._table = value;
        }
        getType() {
            return "RVAthenaDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.table(this.table);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVS3DataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._path = null;
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        getType() {
            return "RVS3DataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.path(this.path);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVS3DataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._region = null;
        }
        get region() {
            return this._region;
        }
        set region(value) {
            this._region = value;
        }
        getType() {
            return "RVS3DataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.region(this.region);
            return wrapper;
        }
    }

    class RVQuickBooksDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._entity = null;
        }
        get entity() {
            return this._entity;
        }
        set entity(v) {
            this._entity = v;
        }
        getType() {
            return "RVQuickBooksDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.entity(this.entity);
            return wrapper;
        }
    }

    class RVQuickBooksDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._realmId = null;
        }
        get realmId() {
            return this._realmId;
        }
        set realmId(v) {
            this._realmId = v;
        }
        getType() {
            return "RVQuickBooksDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.realmId(this.realmId);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVInMemoryDataSource extends RVDashboardDataSource {
        getType() {
            return "RVInMemoryDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVInMemoryDataSourceItem extends RVDataSourceItem {
        constructor(datasetId) {
            super(new RVInMemoryDataSource());
            this._datasetId = datasetId;
            this.id = datasetId;
        }
        get datasetId() {
            return this._datasetId;
        }
        set datasetId(value) {
            this._datasetId = value;
        }
        getType() {
            return "RVInMemoryDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.datasetId(this.datasetId);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVPostgresDataSource extends RVSqlPDSDataSource {
        constructor() {
            super(...arguments);
            this._database = null;
            this._schema = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        getType() {
            return "RVPostgresDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.database(this.database);
            wrapper.schema(this.schema);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVPostgresDataSourceItem extends RVSqlPDSDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._schema = null;
            this._functionName = null;
            this._functionParameters = null;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        get functionName() {
            return this._functionName;
        }
        set functionName(value) {
            this._functionName = value;
        }
        get functionParameters() {
            return this._functionParameters;
        }
        set functionParameters(value) {
            this._functionParameters = value;
        }
        getType() {
            return "RVPostgresDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.schema(this.schema);
            wrapper.functionName(this.functionName);
            wrapper.functionParameters(this.functionParameters);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVRedshiftDataSource extends RVSqlBasedDataSource {
        constructor() {
            super(...arguments);
            this._database = null;
            this._schema = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        getType() {
            return "RVRedshiftDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.database(this.database);
            wrapper.schema(this.schema);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVRedshiftDataSourceItem extends RVSqlBasedDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._schema = null;
            this._functionName = null;
            this._functionParameters = null;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        get functionName() {
            return this._functionName;
        }
        set functionName(value) {
            this._functionName = value;
        }
        get functionParameters() {
            return this._functionParameters;
        }
        set functionParameters(value) {
            this._functionParameters = value;
        }
        getType() {
            return "RVRedshiftDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.schema(this.schema);
            wrapper.functionName(this.functionName);
            wrapper.functionParameters(this.functionParameters);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVReportingServicesDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
            this._path = null;
            this._serverMode = null;
            this._serverVersion = null;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get serverMode() {
            return this._serverMode;
        }
        set serverMode(value) {
            this._serverMode = value;
        }
        get serverVersion() {
            return this._serverVersion;
        }
        set serverVersion(value) {
            this._serverVersion = value;
        }
        getType() {
            return "RVReportingServicesDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.path(this.path);
            wrapper.serverMode(this.serverMode);
            wrapper.serverVersion(this.serverVersion);
            return wrapper;
        }
    }

    /**
     * Render mode for Reporting Services data source item, see [[RVReportingServicesDataSourceItem.renderMode]] property.
     */
    (function (RVReportingServicesRenderMode) {
        /**
         * Report mode, it means the report will be exported to PDF and rendered that way
         */
        RVReportingServicesRenderMode[RVReportingServicesRenderMode["Report"] = 0] = "Report";
        /**
         * Data mode, it means the report will be exported to CSV and that data will be used as regular input data.
         */
        RVReportingServicesRenderMode[RVReportingServicesRenderMode["Data"] = 1] = "Data";
    })(exports.RVReportingServicesRenderMode || (exports.RVReportingServicesRenderMode = {}));

    /**
     * @hidden
     */
    class RVReportingServicesDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._path = null;
            this._dynamic = null;
            this._renderMode = 0;
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get dynamic() {
            return this._dynamic;
        }
        set dynamic(value) {
            this._dynamic = value;
        }
        get renderMode() {
            return this._renderMode;
        }
        set renderMode(value) {
            this._renderMode = value;
        }
        getType() {
            return "RVReportingServicesDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.path(this.path);
            wrapper.dynamic(this.dynamic);
            wrapper.renderMode(this.renderMode == exports.RVReportingServicesRenderMode.Report ? 0 : 1);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAnalysisServicesDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._catalog = null;
        }
        get catalog() {
            return this._catalog;
        }
        set catalog(value) {
            this._catalog = value;
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.catalog(this.catalog);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAzureAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
        constructor() {
            super(...arguments);
            this._serverUrl = null;
        }
        get serverUrl() {
            return this._serverUrl;
        }
        set serverUrl(value) {
            this._serverUrl = value;
        }
        getType() {
            return "RVAzureAnalysisServicesDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.serverUrl(this.serverUrl);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVHttpAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVHttpAnalysisServicesDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.url(this.url);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVNativeAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
        constructor() {
            super(...arguments);
            this._host = null;
            this._port = 0;
        }
        get host() {
            return this._host;
        }
        set host(value) {
            this._host = value;
        }
        get port() {
            return this._port;
        }
        set port(value) {
            this._port = value;
        }
        getType() {
            return "RVNativeAnalysisServicesDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.host(this.host);
            wrapper.port(this.port);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAnalysisServicesDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._catalog = null;
            this._cube = null;
        }
        get catalog() {
            return this._catalog;
        }
        set catalog(value) {
            this._catalog = value;
        }
        get cube() {
            return this._cube;
        }
        set cube(value) {
            this._cube = value;
        }
        getType() {
            return "RVAnalysisServicesDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.catalog(this.catalog);
            wrapper.cube(this.cube);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAzureSqlDataSource extends RVSqlServerDataSource {
        getType() {
            return "RVAzureSqlDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVAzureSqlDataSourceItem extends RVSqlServerDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
        }
        getType() {
            return "RVAzureSqlDataSourceItem";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVAzureSynapseDataSourceItem extends RVSqlServerDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
        }
        getType() {
            return "RVAzureSynapseDataSourceItem";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVAzureSynapseDataSource extends RVSqlServerDataSource {
        getType() {
            return "RVAzureSynapseDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVBigQueryDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._projectId = null;
        }
        get projectId() {
            return this._projectId;
        }
        set projectId(value) {
            this._projectId = value;
        }
        getType() {
            return "RVBigQueryDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.projectId(this.projectId);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVBigQueryDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._projectId = null;
            this._datasetId = null;
            this._table = null;
        }
        get projectId() {
            return this._projectId;
        }
        set projectId(value) {
            this._projectId = value;
        }
        get datasetId() {
            return this._datasetId;
        }
        set datasetId(value) {
            this._datasetId = value;
        }
        get table() {
            return this._table;
        }
        set table(value) {
            this._table = value;
        }
        getType() {
            return "RVBigQueryDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.projectId(this.projectId);
            wrapper.datasetId(this.datasetId);
            wrapper.table(this.table);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVJsonDataSource extends RVDashboardDataSource {
        getType() {
            return "RVJsonDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVJsonDataSourceItem extends RVResourceBasedDataSourceItem {
        constructor(resourceItem) {
            super(new RVJsonDataSource(), resourceItem);
            this._config = null;
        }
        get config() {
            return this._config;
        }
        set config(value) {
            this._config = value;
        }
        getType() {
            return "RVJsonDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.config(this.config);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVRESTDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
            this._useAnonymousAuthentication = false;
            this._method = null;
            this._contentType = null;
            this._body = null;
            this._headers = null;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get useAnonymousAuthentication() {
            return this._useAnonymousAuthentication;
        }
        set useAnonymousAuthentication(value) {
            this._useAnonymousAuthentication = value;
        }
        get method() {
            return this._method;
        }
        set method(value) {
            this._method = value;
        }
        get contentType() {
            return this._contentType;
        }
        set contentType(value) {
            this._contentType = value;
        }
        get body() {
            return this._body;
        }
        set body(value) {
            this._body = value;
        }
        get headers() {
            return this._headers;
        }
        set headers(value) {
            this._headers = value;
        }
        getType() {
            return "RVRESTDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.method(this.method);
            wrapper.contentType(this.contentType);
            wrapper.body(this.body);
            wrapper.useAnonymousAuthentication(this.useAnonymousAuthentication);
            wrapper.headers(this.headers);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVRESTDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._parameters = null;
            this._url = null;
            this.url = dataSource.url;
        }
        get parameters() {
            return this._parameters;
        }
        set parameters(value) {
            this._parameters = value;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVRESTDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.parameters(this.parameters);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVBoxDataSource extends RVDashboardDataSource {
        getType() {
            return "RVBoxDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVBoxDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVBoxDataSource());
            this._identifier = null;
        }
        get identifier() {
            return this._identifier;
        }
        set identifier(value) {
            this._identifier = value;
        }
        getType() {
            return "RVBoxDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.identifier(this.identifier);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVDropboxDataSource extends RVDashboardDataSource {
        getType() {
            return "RVDropboxDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVDropboxDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVDropboxDataSource());
            this._path = null;
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        getType() {
            return "RVDropboxDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.path(this.path);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVOneDriveDataSource extends RVDashboardDataSource {
        getType() {
            return "RVOneDriveDataSource";
        }
    }

    /**
     * @hidden
     */
    class RVOneDriveDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVOneDriveDataSource());
            this._identifier = null;
        }
        get identifier() {
            return this._identifier;
        }
        set identifier(value) {
            this._identifier = value;
        }
        getType() {
            return "RVOneDriveDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.identifier(this.identifier);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVDynamicsCrmDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVDynamicsCrmDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.url(this.url);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVDynamicsCrmDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._organization = null;
            this._entity = null;
            this._customQuery = null;
        }
        get organization() {
            return this._organization;
        }
        set organization(value) {
            this._organization = value;
        }
        get entity() {
            return this._entity;
        }
        set entity(value) {
            this._entity = value;
        }
        get customQuery() {
            return this._customQuery;
        }
        set customQuery(value) {
            this._customQuery = value;
        }
        getType() {
            return "RVDynamicsCrmDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.organization(this.organization);
            wrapper.entity(this.entity);
            wrapper.customQuery(this.customQuery);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVODataDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._url = null;
            this.url = dataSource.url;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVODataDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVODataDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
            this._useAnonymousAuthentication = false;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get useAnonymousAuthentication() {
            return this._useAnonymousAuthentication;
        }
        set useAnonymousAuthentication(value) {
            this._useAnonymousAuthentication = value;
        }
        getType() {
            return "RVODataDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.useAnonymousAuthentication(this.useAnonymousAuthentication);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVGoogleDriveDataSource extends RVDashboardDataSource {
        getType() {
            return "RVGoogleDriveDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVGoogleDriveDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVGoogleDriveDataSource());
            this._identifier = null;
        }
        get identifier() {
            return this._identifier;
        }
        set identifier(value) {
            this._identifier = value;
        }
        getType() {
            return "RVGoogleDriveDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.identifier(this.identifier);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVGoogleSheetDataSource extends RVExcelDataSource {
        getType() {
            return "RVGoogleSheetDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVGoogleSheetDataSourceItem extends RVExcelDataSourceItem {
        constructor(resourceItem) {
            super(resourceItem);
            this.dataSource = new RVGoogleSheetDataSource();
        }
        getType() {
            return "RVGoogleSheetDataSourceItem";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVGoogleAnalyticsDataSource extends RVDashboardDataSource {
        getType() {
            return "RVGoogleAnalyticsDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * Google Analytics resource type.
     */
    (function (RVGoogleAnalyticsResourceType) {
        /**
         * Type used to get analytics data.
         */
        RVGoogleAnalyticsResourceType[RVGoogleAnalyticsResourceType["Report"] = 0] = "Report";
        /**
         * Type used to get the list of profiles in the account, usually used in a dashboard filter.
         */
        RVGoogleAnalyticsResourceType[RVGoogleAnalyticsResourceType["Profiles"] = 1] = "Profiles";
    })(exports.RVGoogleAnalyticsResourceType || (exports.RVGoogleAnalyticsResourceType = {}));

    /**
     * @hidden
     */
    class RVGoogleAnalyticsDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVGoogleAnalyticsDataSource());
            this._resource = 0;
            this._identifiers = null;
            this._startDate = null;
            this._endDate = null;
            this._metrics = null;
            this._dimensions = null;
            this._segment = null;
            this._filters = null;
        }
        get resource() {
            return this._resource;
        }
        set resource(value) {
            this._resource = value;
        }
        get identifiers() {
            return this._identifiers;
        }
        set identifiers(value) {
            this._identifiers = value;
        }
        get startDate() {
            return this._startDate;
        }
        set startDate(value) {
            this._startDate = value;
        }
        get endDate() {
            return this._endDate;
        }
        set endDate(value) {
            this._endDate = value;
        }
        get metrics() {
            return this._metrics;
        }
        set metrics(value) {
            this._metrics = value;
        }
        get dimensions() {
            return this._dimensions;
        }
        set dimensions(value) {
            this._dimensions = value;
        }
        get segment() {
            return this._segment;
        }
        set segment(value) {
            this._segment = value;
        }
        get filters() {
            return this._filters;
        }
        set filters(value) {
            this._filters = value;
        }
        getType() {
            return "RVGoogleAnalyticsDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.resource(this.resource == exports.RVGoogleAnalyticsResourceType.Report ? 0 : 1);
            wrapper.identifiers(this.identifiers);
            wrapper.metrics(this.metrics);
            wrapper.dimensions(this.dimensions);
            wrapper.segment(this.segment);
            wrapper.filters(this.filters);
            wrapper.startDate(this.startDate);
            wrapper.endDate(this.endDate);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVHubspotDataSource extends RVDashboardDataSource {
        getType() {
            return "RVHubspotDataSource";
        }
        _getWrapper() {
            return super._getWrapper();
        }
    }

    /**
     * @hidden
     */
    class RVHubspotDataSourceItem extends RVDataSourceItem {
        constructor() {
            super(new RVHubspotDataSource());
            this._entity = null;
            this._startDate = null;
            this._endDate = null;
        }
        get entity() {
            return this._entity;
        }
        set entity(value) {
            this._entity = value;
        }
        get startDate() {
            return this._startDate;
        }
        set startDate(value) {
            this._startDate = value;
        }
        get endDate() {
            return this._endDate;
        }
        set endDate(value) {
            this._endDate = value;
        }
        getType() {
            return "RVHubspotDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.entity(this.entity);
            wrapper.startDate(this.startDate);
            wrapper.endDate(this.endDate);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVMarketoDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._url = null;
            this._entity = null;
            this._startDate = null;
            this._endDate = null;
            this.url = dataSource.url;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get entity() {
            return this._entity;
        }
        set entity(value) {
            this._entity = value;
        }
        get startDate() {
            return this._startDate;
        }
        set startDate(value) {
            this._startDate = value;
        }
        get endDate() {
            return this._endDate;
        }
        set endDate(value) {
            this._endDate = value;
        }
        getType() {
            return "RVMarketoDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.entity(this.entity);
            wrapper.startDate(this.startDate);
            wrapper.endDate(this.endDate);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVMarketoDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        getType() {
            return "RVMarketoDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.url(this.url);
            return wrapper;
        }
    }

    /**
     * SharePoint authentication methods
     */
    (function (RVSharePointAuthenticationMethod) {
        /**
         * Windows (NT) authentication
         */
        RVSharePointAuthenticationMethod[RVSharePointAuthenticationMethod["Windows"] = 0] = "Windows";
        /**
         * Forms based authentication
         */
        RVSharePointAuthenticationMethod[RVSharePointAuthenticationMethod["Form"] = 1] = "Form";
        /**
         * Office 365 authentication
         */
        RVSharePointAuthenticationMethod[RVSharePointAuthenticationMethod["Office365"] = 2] = "Office365";
        /**
         * Web based login authentication
         */
        RVSharePointAuthenticationMethod[RVSharePointAuthenticationMethod["WebLogin"] = 3] = "WebLogin";
    })(exports.RVSharePointAuthenticationMethod || (exports.RVSharePointAuthenticationMethod = {}));

    /**
     * @hidden
     */
    class RVSharePointDataSource extends RVDashboardDataSource {
        constructor() {
            super(...arguments);
            this._url = null;
            this._authenticationMethod = 0;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get authenticationMethod() {
            return this._authenticationMethod;
        }
        set authenticationMethod(value) {
            this._authenticationMethod = value;
        }
        getType() {
            return "RVSharePointDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.url(this.url);
            wrapper.authenticationMethod(this._convertAuthenticationMethod(this.authenticationMethod));
            return wrapper;
        }
        _convertAuthenticationMethod(authMethod) {
            let result = null;
            switch (authMethod) {
                case exports.RVSharePointAuthenticationMethod.Form:
                    result = $.ig.RVSharePointAuthenticationMethodInternal.prototype.form;
                    break;
                case exports.RVSharePointAuthenticationMethod.Office365:
                    result = $.ig.RVSharePointAuthenticationMethodInternal.prototype.office365;
                    break;
                case exports.RVSharePointAuthenticationMethod.WebLogin:
                    result = $.ig.RVSharePointAuthenticationMethodInternal.prototype.webLogin;
                    break;
                case exports.RVSharePointAuthenticationMethod.Windows:
                    result = $.ig.RVSharePointAuthenticationMethodInternal.prototype.windows;
                    break;
            }
            return result;
        }
    }

    /**
     * @hidden
     */
    class RVBaseSharePointDataSourceItem extends RVDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
        }
    }

    /**
     * @hidden
     */
    class RVSharePointListDataSourceItem extends RVBaseSharePointDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._webUrl = null;
            this._listUrl = null;
            this._listName = null;
            this._isLibrary = false;
            this._view = null;
        }
        get webUrl() {
            return this._webUrl;
        }
        set webUrl(value) {
            this._webUrl = value;
        }
        get listUrl() {
            return this._listUrl;
        }
        set listUrl(value) {
            this._listUrl = value;
        }
        get listName() {
            return this._listName;
        }
        set listName(value) {
            this._listName = value;
        }
        get isLibrary() {
            return this._isLibrary;
        }
        set isLibrary(value) {
            this._isLibrary = value;
        }
        get view() {
            return this._view;
        }
        set view(value) {
            this._view = value;
        }
        getType() {
            return "RVSharePointListDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.webUrl(this.webUrl);
            wrapper.listUrl(this.listUrl);
            wrapper.listName(this.listName);
            wrapper.isLibrary(this.isLibrary);
            wrapper.view(this.view);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSharePointListItemDataSourceItem extends RVBaseSharePointDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._webUrl = null;
            this._listName = null;
            this._listItemId = null;
            this._listItemUrl = null;
            this._isFolder = false;
            this._assetContentType = null;
            this._folderRelativePath = null;
        }
        get webUrl() {
            return this._webUrl;
        }
        set webUrl(value) {
            this._webUrl = value;
        }
        get listName() {
            return this._listName;
        }
        set listName(value) {
            this._listName = value;
        }
        get listItemId() {
            return this._listItemId;
        }
        set listItemId(value) {
            this._listItemId = value;
        }
        get listItemUrl() {
            return this._listItemUrl;
        }
        set listItemUrl(value) {
            this._listItemUrl = value;
        }
        get isFolder() {
            return this._isFolder;
        }
        set isFolder(value) {
            this._isFolder = value;
        }
        get assetContentType() {
            return this._assetContentType;
        }
        set assetContentType(value) {
            this._assetContentType = value;
        }
        get folderRelativePath() {
            return this._folderRelativePath;
        }
        set folderRelativePath(value) {
            this._folderRelativePath = value;
        }
        getType() {
            return "RVSharePointListItemDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.webUrl(this.webUrl);
            wrapper.listName(this.listName);
            wrapper.listItemId(this.listItemId);
            wrapper.listItemUrl(this.listItemUrl);
            wrapper.isFolder(this.isFolder);
            wrapper.assetContentType(this.assetContentType);
            wrapper.folderRelativePath(this.folderRelativePath);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSharePointPeopleDataSourceItem extends RVBaseSharePointDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._userId = null;
        }
        get userId() {
            return this._userId;
        }
        set userId(value) {
            this._userId = value;
        }
        getType() {
            return "RVSharePointPeopleDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.userId(this.userId);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSharePointSiteDataSourceItem extends RVBaseSharePointDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._webUrl = null;
        }
        get webUrl() {
            return this._webUrl;
        }
        set webUrl(value) {
            this._webUrl = value;
        }
        getType() {
            return "RVSharePointSiteDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.webUrl(this.webUrl);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVOracleDataSource extends RVSqlBasedDataSource {
        constructor() {
            super(...arguments);
            this._database = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        getType() {
            return "RVOracleDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.database(this.database);
            return wrapper;
        }
    }

    class RVOracleSIDDataSource extends RVOracleDataSource {
        constructor() {
            super(...arguments);
            this._sID = null;
        }
        get sID() {
            return this._sID;
        }
        set sID(value) {
            this._sID = value;
        }
        getType() {
            return "RVOracleSIDDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.sID(this.sID);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVOracleServiceDataSource extends RVOracleDataSource {
        constructor() {
            super(...arguments);
            this._service = null;
        }
        get service() {
            return this._service;
        }
        set service(value) {
            this._service = value;
        }
        getType() {
            return "RVOracleServiceDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.service(this.service);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVOracleDataSourceItem extends RVSqlBasedDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
        }
        getType() {
            return "RVOracleDataSourceItem";
        }
    }

    /**
     * @hidden
     */
    class RVSyBaseDataSourceItem extends RVSqlBasedDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._schema = null;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        getType() {
            return "RVSyBaseDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.schema(this.schema);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSyBaseDataSource extends RVSqlBasedDataSource {
        constructor() {
            super(...arguments);
            this._database = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        getType() {
            return "RVSyBaseDataSource";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.database(this.database);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSnowflakeDataSourceItem extends RVSqlPDSDataSourceItem {
        constructor(dataSource) {
            super(dataSource);
            this._schema = null;
            this.database = dataSource.database;
        }
        get schema() {
            return this._schema;
        }
        set schema(value) {
            this._schema = value;
        }
        getType() {
            return "RVSnowflakeDataSourceItem";
        }
        _getWrapper() {
            let wrapper = super._getWrapper();
            wrapper.schema(this.schema);
            return wrapper;
        }
    }

    /**
     * @hidden
     */
    class RVSnowflakeDataSource extends RVSqlPDSDataSource {
        constructor() {
            super();
            this._database = null;
        }
        get database() {
            return this._database;
        }
        set database(value) {
            this._database = value;
        }
        getType() {
            return "RVSnowflakeDataSource";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.database(this.database);
            return wrapper;
        }
    }

    function addLocalizationSupport() {
        // Support function //
        var currentScriptPath = (function () {
            var scripts = document.getElementsByTagName("script");
            var currentScriptTag = scripts[scripts.length - 1]; // Yes, we're assuming this js was loaded by the last <script src=> tag that was processed by the browser, this won't work if using defer or async.
            if (currentScriptTag == null)
                return null;
            var lastSlash = currentScriptTag.src.lastIndexOf("/");
            return lastSlash < 0
                ? ""
                : currentScriptTag.src.substring(0, lastSlash + 1);
        })();
        if (currentScriptPath == null)
            return;
        (function saveFallbackStrings() {
            for (var prop in $.ig) {
                let propVal = $.ig[prop];
                if (typeof propVal === "object") {
                    var strings = propVal.strings;
                    if (strings != null) {
                        propVal.fallbackStrings = strings;
                    }
                }
            }
        })();
        // Load the language for the current locale //
        //
        var supportedLocales = [
            "de",
            "es",
            "fr",
            "it",
            "ja",
            "ko",
            "ms",
            "nl",
            "pt",
            "ru",
            "zh-cn",
            "zh-tw",
        ];
        let fileMappings = { "zh-cn": "zh-Hans", "zh-tw": "zh-Hant" };
        let locale = window["INFRAGISTICS_COMPONENTS_LANGUAGE"] ||
            (navigator.languages
                ? navigator.languages[0]
                : navigator.language || navigator.userLanguage); // If this turns out to be an unsupported locale, we'll default to EN.
        if (locale == null)
            return;
        //
        locale = locale.toLowerCase();
        if (!supportedLocales.includes(locale)) {
            locale = locale.split("-")[0]; // go from 'zh-cn' to 'zh', or from 'zh-cn-more-more' also to 'zh'. TODO consider case when this has more than two components.
            if (!supportedLocales.includes(locale))
                return;
        }
        let file = currentScriptPath +
            "infragistics.langpack." +
            (fileMappings[locale] || locale) +
            ".js";
        document.write("<script src='" + file + "' type='text/javascript'></script>");
        //External libs localization
        $.ig.Date.prototype.dayJSLoadLocaleFile(locale);
    }

    /**
     * @hidden
     */
    class RVLocalFileDataSourceItem$1 extends RVDataSourceItem {
        constructor() {
            super(new RVLocalFileDataSource());
            this._uri = null;
        }
        get uri() {
            return this._uri;
        }
        set uri(value) {
            this._uri = value;
        }
        getType() {
            return "RVLocalFileDataSourceItem";
        }
        _getWrapper() {
            var wrapper = super._getWrapper();
            wrapper.uri(this.uri);
            return wrapper;
        }
    }

    //Root level imports
    exports.VisualizationEditorOpeningArgs = VisualizationEditorOpeningArgs;
    exports.VisualizationEditorClosingArgs = VisualizationEditorClosingArgs;
    exports.DashboardSaveEventArgs = DashboardSaveEventArgs;
    exports.RVDateFilterType = exports.RVDateFilterType;
    exports.FiltersArray = FiltersArray;
    exports.ChartInteractionEventArgs = ChartInteractionEventArgs;
    exports.VisualizationEditorOpenedEventArgs = VisualizationEditorOpenedEventArgs;
    exports.RVDataSourcesRequestedTriggerType = exports.RVDataSourcesRequestedTriggerType;
    exports.MountainDarkTheme = MountainDarkTheme;
    exports.MountainLightTheme = MountainLightTheme;
    exports.OceanDarkTheme = OceanDarkTheme;
    exports.OceanLightTheme = OceanLightTheme;
    exports.RVCell = RVCell;
    exports.RVChartSettings = RVChartSettings;
    exports.RVConditionalFormatting = RVConditionalFormatting;
    exports.RVDashboard = RVDashboard;
    exports.RVDashboardFilter = RVDashboardFilter;
    exports.RVDateDashboardFilter = RVDateDashboardFilter;
    exports.RVDateRange = RVDateRange;
    exports.RVFilterValue = RVFilterValue;
    exports.RVVisualization = RVVisualization;
    exports.RevealTheme = RevealTheme;
    exports.RevealUtility = RevealUtility;
    exports.RevealView = RevealView;
    exports.RevealDashboardThumbnailView = RevealDashboardThumbnailView;
    exports.RVChartType = RVChartType;
    exports.RevealSdkSettings = RevealSdkSettings;
    // exports.SdkApp = SdkApp;
    exports.ARVLocalFileDataSource = RVLocalFileDataSource;
    exports.VisualizationsConfiguration = VisualizationsConfiguration;
    exports.MapVisualizationsConfiguration = MapVisualizationsConfiguration;
    exports.ScatterMapVisualizationsConfiguration = ScatterMapVisualizationsConfiguration;
    exports.RVMapImageryType = RVMapImageryType;
    exports.RVLocalFileDataSource = RVLocalFileDataSource;
    exports.RVLocalFileDataSourceItem = RVLocalFileDataSourceItem;
    exports.RVExcelDataSource = RVExcelDataSource;
    exports.RVExcelDataSourceItem = RVExcelDataSourceItem;
    exports.RVExcelRange = RVExcelRange;
    exports.RVSqlServerDataSource = RVSqlServerDataSource;
    exports.RVSqlServerDataSourceItem = RVSqlServerDataSourceItem;
    exports.RVWebResourceDataSource = RVWebResourceDataSource;
    exports.RVWebResourceDataSourceItem = RVWebResourceDataSourceItem;
    exports.RVCsvDataSource = RVCsvDataSource;
    exports.RVCsvDataSourceItem = RVCsvDataSourceItem;
    exports.RVMySqlDataSource = RVMySqlDataSource;
    exports.RVMySqlDataSourceItem = RVMySqlDataSourceItem;
    exports.RVAthenaDataSource = RVAthenaDataSource;
    exports.RVAthenaDataSourceItem = RVAthenaDataSourceItem;
    exports.RVS3DataSource = RVS3DataSource;
    exports.RVS3DataSourceItem = RVS3DataSourceItem;
    exports.RVQuickBooksDataSource = RVQuickBooksDataSource;
    exports.RVQuickBooksDataSourceItem = RVQuickBooksDataSourceItem;
    exports.RVInMemoryDataSource = RVInMemoryDataSource;
    exports.RVInMemoryDataSourceItem = RVInMemoryDataSourceItem;
    exports.RVPostgresDataSource = RVPostgresDataSource;
    exports.RVPostgresDataSourceItem = RVPostgresDataSourceItem;
    exports.RVRedshiftDataSource = RVRedshiftDataSource;
    exports.RVRedshiftDataSourceItem = RVRedshiftDataSourceItem;
    exports.RVReportingServicesDataSource = RVReportingServicesDataSource;
    exports.RVReportingServicesDataSourceItem = RVReportingServicesDataSourceItem;
    exports.RVReportingServicesRenderMode = exports.RVReportingServicesRenderMode;
    exports.RVAzureAnalysisServicesDataSource = RVAzureAnalysisServicesDataSource;
    exports.RVHttpAnalysisServicesDataSource = RVHttpAnalysisServicesDataSource;
    exports.RVNativeAnalysisServicesDataSource = RVNativeAnalysisServicesDataSource;
    exports.RVAnalysisServicesDataSourceItem = RVAnalysisServicesDataSourceItem;
    exports.RVAzureSqlDataSource = RVAzureSqlDataSource;
    exports.RVAzureSqlDataSourceItem = RVAzureSqlDataSourceItem;
    exports.RVAzureSynapseDataSource = RVAzureSynapseDataSource;
    exports.RVAzureSynapseDataSourceItem = RVAzureSynapseDataSourceItem;
    exports.RVBigQueryDataSource = RVBigQueryDataSource;
    exports.RVBigQueryDataSourceItem = RVBigQueryDataSourceItem;
    exports.RVRESTDataSource = RVRESTDataSource;
    exports.RVRESTDataSourceItem = RVRESTDataSourceItem;
    exports.RVJsonDataSource = RVJsonDataSource;
    exports.RVJsonDataSourceItem = RVJsonDataSourceItem;
    exports.RVBoxDataSource = RVBoxDataSource;
    exports.RVBoxDataSourceItem = RVBoxDataSourceItem;
    exports.RVDropboxDataSource = RVDropboxDataSource;
    exports.RVDropboxDataSourceItem = RVDropboxDataSourceItem;
    exports.RVOneDriveDataSource = RVOneDriveDataSource;
    exports.RVOneDriveDataSourceItem = RVOneDriveDataSourceItem;
    exports.RVDynamicsCrmDataSource = RVDynamicsCrmDataSource;
    exports.RVDynamicsCrmDataSourceItem = RVDynamicsCrmDataSourceItem;
    exports.RVODataDataSource = RVODataDataSource;
    exports.RVODataDataSourceItem = RVODataDataSourceItem;
    exports.RVGoogleDriveDataSource = RVGoogleDriveDataSource;
    exports.RVGoogleDriveDataSourceItem = RVGoogleDriveDataSourceItem;
    exports.RVGoogleSheetDataSource = RVGoogleSheetDataSource;
    exports.RVGoogleSheetDataSourceItem = RVGoogleSheetDataSourceItem;
    exports.RVGoogleAnalyticsDataSource = RVGoogleAnalyticsDataSource;
    exports.RVGoogleAnalyticsDataSourceItem = RVGoogleAnalyticsDataSourceItem;
    exports.RVGoogleAnalyticsResourceType = exports.RVGoogleAnalyticsResourceType;
    exports.RVHubspotDataSource = RVHubspotDataSource;
    exports.RVHubspotDataSourceItem = RVHubspotDataSourceItem;
    exports.RVMarketoDataSource = RVMarketoDataSource;
    exports.RVMarketoDataSourceItem = RVMarketoDataSourceItem;
    exports.RVSharePointDataSource = RVSharePointDataSource;
    exports.RVSharePointAuthenticationMethod = exports.RVSharePointAuthenticationMethod;
    exports.RVSharePointListDataSourceItem = RVSharePointListDataSourceItem;
    exports.RVSharePointListItemDataSourceItem = RVSharePointListItemDataSourceItem;
    exports.RVSharePointPeopleDataSourceItem = RVSharePointPeopleDataSourceItem;
    exports.RVSharePointSiteDataSourceItem = RVSharePointSiteDataSourceItem;
    exports.RVOracleDataSource = RVOracleDataSource;
    exports.RVOracleDataSourceItem = RVOracleDataSourceItem;
    exports.RVOracleServiceDataSource = RVOracleServiceDataSource;
    exports.RVOracleSIDDataSource = RVOracleSIDDataSource;
    exports.RVSyBaseDataSource = RVSyBaseDataSource;
    exports.RVSyBaseDataSourceItem = RVSyBaseDataSourceItem;
    exports.RVSnowflakeDataSource = RVSnowflakeDataSource;
    exports.RVSnowflakeDataSourceItem = RVSnowflakeDataSourceItem;
    $.ig = Object.assign($.ig, exports);
    $.ig.EMUtility.setSignInManager = new $.ig.RevealSdkSignInManager($.ig.EMProductType.prototype.reportPlus);
    $.ig.CPKeyboardEventManager.prototype.registerNewListenerLayer();
    $.ig.EMUtility.prototype.setSignInManager(new $.ig.RevealSdkSignInManager($.ig.EMProductType.prototype.reportPlus));
    igWeb.ModuleManager.register(igWeb.IgcDataChartCategoryModule, igWeb.IgcLegendModule, igWeb.IgcDataChartInteractivityModule, igWeb.IgcDataChartExtendedAxesModule, igWeb.IgcDataChartAnnotationModule, igWeb.IgcDataChartCategoryTrendLineModule, igWeb.IgcGeographicMapModule, igWeb.IgcTreemapModule, igWeb.IgcNumberAbbreviatorModule);
    addLocalizationSupport();

    exports.ChartInteractionEventArgs = ChartInteractionEventArgs;
    exports.DashboardSaveEventArgs = DashboardSaveEventArgs;
    exports.FiltersArray = FiltersArray;
    exports.MountainDarkTheme = MountainDarkTheme;
    exports.MountainLightTheme = MountainLightTheme;
    exports.OceanDarkTheme = OceanDarkTheme;
    exports.OceanLightTheme = OceanLightTheme;
    exports.RVAnalysisServicesDataSourceItem = RVAnalysisServicesDataSourceItem;
    exports.RVAthenaDataSource = RVAthenaDataSource;
    exports.RVAthenaDataSourceItem = RVAthenaDataSourceItem;
    exports.RVAzureAnalysisServicesDataSource = RVAzureAnalysisServicesDataSource;
    exports.RVAzureSqlDataSource = RVAzureSqlDataSource;
    exports.RVAzureSqlDataSourceItem = RVAzureSqlDataSourceItem;
    exports.RVAzureSynapseDataSource = RVAzureSynapseDataSource;
    exports.RVAzureSynapseDataSourceItem = RVAzureSynapseDataSourceItem;
    exports.RVBigQueryDataSource = RVBigQueryDataSource;
    exports.RVBigQueryDataSourceItem = RVBigQueryDataSourceItem;
    exports.RVBoxDataSource = RVBoxDataSource;
    exports.RVBoxDataSourceItem = RVBoxDataSourceItem;
    exports.RVCell = RVCell;
    exports.RVChartSettings = RVChartSettings;
    exports.RVConditionalFormatting = RVConditionalFormatting;
    exports.RVCsvDataSource = RVCsvDataSource;
    exports.RVCsvDataSourceItem = RVCsvDataSourceItem;
    exports.RVDashboard = RVDashboard;
    exports.RVDashboardFilter = RVDashboardFilter;
    exports.RVDateDashboardFilter = RVDateDashboardFilter;
    exports.RVDateRange = RVDateRange;
    exports.RVDropboxDataSource = RVDropboxDataSource;
    exports.RVDropboxDataSourceItem = RVDropboxDataSourceItem;
    exports.RVDynamicsCrmDataSource = RVDynamicsCrmDataSource;
    exports.RVDynamicsCrmDataSourceItem = RVDynamicsCrmDataSourceItem;
    exports.RVFilterValue = RVFilterValue;
    exports.RVGoogleAnalyticsDataSource = RVGoogleAnalyticsDataSource;
    exports.RVGoogleAnalyticsDataSourceItem = RVGoogleAnalyticsDataSourceItem;
    exports.RVGoogleDriveDataSource = RVGoogleDriveDataSource;
    exports.RVGoogleDriveDataSourceItem = RVGoogleDriveDataSourceItem;
    exports.RVGoogleSheetDataSource = RVGoogleSheetDataSource;
    exports.RVGoogleSheetDataSourceItem = RVGoogleSheetDataSourceItem;
    exports.RVHttpAnalysisServicesDataSource = RVHttpAnalysisServicesDataSource;
    exports.RVHubspotDataSource = RVHubspotDataSource;
    exports.RVHubspotDataSourceItem = RVHubspotDataSourceItem;
    exports.RVInMemoryDataSource = RVInMemoryDataSource;
    exports.RVInMemoryDataSourceItem = RVInMemoryDataSourceItem;
    exports.RVJsonDataSource = RVJsonDataSource;
    exports.RVJsonDataSourceItem = RVJsonDataSourceItem;
    exports.RVLocalFileDataSource = RVLocalFileDataSource;
    exports.RVLocalFileDataSourceItem = RVLocalFileDataSourceItem$1;
    exports.RVMarketoDataSource = RVMarketoDataSource;
    exports.RVMarketoDataSourceItem = RVMarketoDataSourceItem;
    exports.RVMySqlDataSource = RVMySqlDataSource;
    exports.RVMySqlDataSourceItem = RVMySqlDataSourceItem;
    exports.RVNativeAnalysisServicesDataSource = RVNativeAnalysisServicesDataSource;
    exports.RVODataDataSource = RVODataDataSource;
    exports.RVODataDataSourceItem = RVODataDataSourceItem;
    exports.RVOneDriveDataSource = RVOneDriveDataSource;
    exports.RVOneDriveDataSourceItem = RVOneDriveDataSourceItem;
    exports.RVOracleDataSource = RVOracleDataSource;
    exports.RVOracleDataSourceItem = RVOracleDataSourceItem;
    exports.RVOracleSIDDataSource = RVOracleSIDDataSource;
    exports.RVOracleServiceDataSource = RVOracleServiceDataSource;
    exports.RVPostgresDataSource = RVPostgresDataSource;
    exports.RVPostgresDataSourceItem = RVPostgresDataSourceItem;
    exports.RVQuickBooksDataSource = RVQuickBooksDataSource;
    exports.RVQuickBooksDataSourceItem = RVQuickBooksDataSourceItem;
    exports.RVRESTDataSource = RVRESTDataSource;
    exports.RVRESTDataSourceItem = RVRESTDataSourceItem;
    exports.RVRedshiftDataSource = RVRedshiftDataSource;
    exports.RVRedshiftDataSourceItem = RVRedshiftDataSourceItem;
    exports.RVReportingServicesDataSource = RVReportingServicesDataSource;
    exports.RVReportingServicesDataSourceItem = RVReportingServicesDataSourceItem;
    exports.RVS3DataSource = RVS3DataSource;
    exports.RVS3DataSourceItem = RVS3DataSourceItem;
    exports.RVSharePointDataSource = RVSharePointDataSource;
    exports.RVSharePointListDataSourceItem = RVSharePointListDataSourceItem;
    exports.RVSharePointListItemDataSourceItem = RVSharePointListItemDataSourceItem;
    exports.RVSharePointPeopleDataSourceItem = RVSharePointPeopleDataSourceItem;
    exports.RVSharePointSiteDataSourceItem = RVSharePointSiteDataSourceItem;
    exports.RVSnowflakeDataSource = RVSnowflakeDataSource;
    exports.RVSnowflakeDataSourceItem = RVSnowflakeDataSourceItem;
    exports.RVSqlServerDataSource = RVSqlServerDataSource;
    exports.RVSqlServerDataSourceItem = RVSqlServerDataSourceItem;
    exports.RVSyBaseDataSource = RVSyBaseDataSource;
    exports.RVSyBaseDataSourceItem = RVSyBaseDataSourceItem;
    exports.RVVisualization = RVVisualization;
    exports.RVWebResourceDataSource = RVWebResourceDataSource;
    exports.RVWebResourceDataSourceItem = RVWebResourceDataSourceItem;
    exports.RevealDashboardThumbnailView = RevealDashboardThumbnailView;
    exports.RevealSdkSettings = RevealSdkSettings;
    exports.RevealTheme = RevealTheme;
    exports.RevealUtility = RevealUtility;
    exports.RevealView = RevealView;
    exports.VisualizationEditorClosedEventArgs = VisualizationEditorClosedEventArgs;
    exports.VisualizationEditorClosingArgs = VisualizationEditorClosingArgs;
    exports.VisualizationEditorOpenedEventArgs = VisualizationEditorOpenedEventArgs;
    exports.VisualizationEditorOpeningArgs = VisualizationEditorOpeningArgs;

    return exports;

}({}));
//# sourceMappingURL=infragistics.rpembedded.js.map
