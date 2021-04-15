/*!@license
* Infragistics.Web.ClientUI ..\..\..\..\JSNative\infragistics.corecp.js <build_number>
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
"ExecutionBlock:a",
"MulticastDelegate:b",
"Object:c",
"Type:d",
"Boolean:e",
"ValueType:f",
"Void:g",
"IConvertible:h",
"IFormatProvider:i",
"Number:j",
"String:k",
"IComparable:l",
"Number:m",
"IComparable$1:n",
"IEquatable$1:o",
"Number:p",
"Number:q",
"Number:r",
"Number:s",
"NumberStyles:t",
"Enum:u",
"Array:v",
"IList:w",
"ICollection:x",
"IEnumerable:y",
"IEnumerator:z",
"NotSupportedException:aa",
"Error:ab",
"Number:ac",
"String:ad",
"StringComparison:ae",
"RegExp:af",
"CultureInfo:ag",
"DateTimeFormatInfo:ah",
"Calendar:ai",
"Date:aj",
"Number:ak",
"DayOfWeek:al",
"DateTimeKind:am",
"CalendarWeekRule:an",
"NumberFormatInfo:ao",
"CompareInfo:ap",
"CompareOptions:aq",
"IEnumerable$1:ar",
"IEnumerator$1:as",
"IDisposable:at",
"StringSplitOptions:au",
"Number:av",
"Number:aw",
"Number:ax",
"Number:ay",
"Number:az",
"Number:a0",
"Assembly:a1",
"Stream:a2",
"SeekOrigin:a3",
"RuntimeTypeHandle:a4",
"MethodInfo:a5",
"MethodBase:a6",
"MemberInfo:a7",
"ParameterInfo:a8",
"TypeCode:a9",
"ConstructorInfo:ba",
"PropertyInfo:bb",
"IntPtr:bc",
"ErrorBlock:bd",
"CPError:be",
"NativeStringUtility:bf",
"Script:bg",
"Dictionary:bh",
"Dictionary:bi",
"CPStringUtility:bj",
"PointExecutionBlock:bk",
"ExecutionBoolBlock:bl",
"DoubleBoolBlock:bm",
"AnimationTickBlock:bn",
"SizeChangeBlock:bo",
"CancellableObjectBlock:bp",
"ObjectBlock:bq",
"DoubleObjectBlock:br",
"DoubleObjectSingleIntBlock:bs",
"ItemValueChangedBlock:bt",
"UpdateValueBlock:bu",
"IntBlock:bv",
"DateBlock:bw",
"DateRangeBlock:bx",
"NullableDateRangeBlock:by",
"Nullable$1:bz",
"DoubleCPDateTimeBlock:b0",
"CPDateTime:b1",
"NativeDateUtility:b2",
"JSDate:b3",
"DateUtility:b4",
"NativeNullableUtility:b5",
"Array:b6",
"Array:b7",
"CompareCallback:b8",
"Math:b9",
"CPMonthInfo:ca",
"CPDateTimeFormatProvider:cb",
"CPDateTimeBlock:cc",
"StringBlock:cd",
"CancellableStringBlock:ce",
"CancellableStringObjectBlock:cf",
"CancellableObjectStringObjectBlock:cg",
"DoubleStringBlock:ch",
"StringObjectBlock:ci",
"RangeBlock:cj",
"CPRange:ck",
"ListBlock:cl",
"ListStringBlock:cm",
"DictionaryStringBlock:cn",
"DictionaryListStringBlock:co",
"ListBoolBlock:cp",
"StringListCallbackBlock:cq",
"LongForObjectBlock:cr",
"DoubleForObjectBlock:cs",
"StringForObjectBlock:ct",
"ObjectForObjectBlock:cu",
"ObjectBoolBlock:cv",
"CPRegexMatchEvaluator:cw",
"CPRegexMatch:cx",
"CPRegexGroup:cy",
"SizeListenerBlock:cz",
"ObjectExecutionBlock:c0",
"StringExecutionBlock:c1",
"CustomSortComparisonBlock:c2",
"CallbackBlock:c3",
"PointBoolExecutionBlock:c4",
"BoolForObjectBlock:c5",
"FileLoader:c6",
"FileReader:c7",
"JSONObject:c8",
"CPPoint:c9",
"CPSize:da",
"CPRect:db",
"RPStack:dc",
"Array:dd",
"AnimationHelperBase:de",
"Timer:df",
"window:dg",
"Callback:dh",
"CPRegex:di",
"CPWeakObject:dj",
"NativeFileUtility:dk",
"NativeDictionaryUtility:dl",
"NativeJSONUtility:dm",
"JSDictionary:dn",
"NativeLongTermStorageUtility:dp",
"CPJSONObject:dq",
"NativeRandomUtility:dr",
"NativeReflectorUtility:ds",
"NativeSortUtility:dt",
"CPSortConverter:du",
"NativeThreadUtility:dv",
"PlatformInfo:dw",
"PlatformType:dx",
"CPKeyedObject:dy",
"TouchPoints:dz",
"GoogleAnalyticsProperties:d0",
"GoogleAnalyticsActivity:d1",
"BackingStoreActivity:d2",
"ActivityTrackingBackingStore:d3",
"BackingStoreObjectBase:d4",
"ArrayUtility:d5",
"CPMathUtility:d6",
"SimpleIDItemBackingStore:d7",
"AnimationHelperDelegate:d8",
"AnimationHelper:d9",
"AnimationType:ea",
"Orientation:eb",
"CPKeyedNumber:ec",
"CPLayoutParamsBase:ed",
"CPLayoutParams:ee",
"CPLinearGradientBrush:ef",
"CPLongTermMemoryStorageUtility:eg",
"CPMemoryStateManager:eh",
"CPObjectDelegate:ei",
"CPTimer:ej",
"CPDropInfo:ek",
"CPFile:el",
"KeyboardKeys:em",
"LogLevel:en",
"ILogger:eo",
"ILoggerFactory:ep",
"LoggerFactory:eq",
"NOPLoggerFactory:er",
"RandomNumberGenerator:es",
"CPCustomSortPropInfo:et",
"CPObjectPropertySortConverter:eu",
"CPPropertySortConverter:ev",
"CPObjectSortConverter:ew",
"IUndoRedo:ex",
"IUndoRedoTransaction:ey",
"IUndoRedoItem:ez",
"IUndoRedoItemsCollection:e0",
"IUndoRedoTransactionObserver:e1",
"TransactonClosedMetadata:e2",
"UndoRedoItem:e3",
"UndoRedoTransaction:e4",
"Array:e5",
"UndoRedoException:e6",
"UndoRedoStorage:e7",
"UndoRedo:e8",
"ICPViewCore:e9",
"Console:fa",
"GestureState:fb",
"CanvasContext:fc",
"CanvasContext2D:fd",
"CanvasContext:fe",
"TextMetrics:ff",
"ImageData:fg",
"CanvasElement:fh",
"Element:fi",
"ElementAttributeCollection:fj",
"ElementCollection:fk",
"WebStyle:fl",
"ElementNodeType:fm",
"document:fn",
"EventListener:fo",
"IElementEventHandler:fp",
"ElementEventHandler:fq",
"ElementAttribute:fr",
"Gradient:fs"]);
/*<BeginType Name="System.GestureState" />*/

$.ig.util.defType('GestureState', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Possible";
			case 1: return "Began";
			case 2: return "Changed";
			case 3: return "Ended";
			case 4: return "Cancelled";
			case 5: return "Failed";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('GestureState', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="System.GestureState" />*/

/*<BeginType Name="Infragistics.LogLevel" />*/

$.ig.util.defType('LogLevel', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Debug";
			case 1: return "Info";
			case 2: return "Warn";
			case 3: return "Error";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('LogLevel', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LogLevel" />*/

/*<BeginType Name="Infragistics.KeyboardKeys" />*/

$.ig.util.defType('KeyboardKeys', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "None";
			case 1: return "Delete";
			case 2: return "Backspace";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('KeyboardKeys', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.KeyboardKeys" />*/

/*<BeginType Name="Infragistics.PlatformType" />*/

$.ig.util.defType('PlatformType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "iOS";
			case 1: return "WPF";
			case 2: return "Web";
			case 3: return "Mac";
			case 4: return "Android";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('PlatformType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PlatformType" />*/

/*<BeginType Name="Infragistics.Orientation" />*/

$.ig.util.defType('Orientation', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "Horizontal";
			case 1: return "Vertical";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('Orientation', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Orientation" />*/

/*<BeginType Name="Infragistics.AnimationType" />*/

$.ig.util.defType('AnimationType', 'Enum', {
	init: function (v) {
		this._v = v;
	},
	$getName: function (v) {
		switch (v) {
			case 0: return "EaseInEaseOut";
			case 1: return "EaseOut";
			case 2: return "Linear";
			default: return v.toString();
		}
	},
	$value: function () {
		return this._v;
	},
	$type: new $.ig.Type('AnimationType', $.ig.Enum.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AnimationType" />*/

/*<BeginType Name="Infragistics.FileReader" />*/

$.ig.util.defType('FileReader', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_onLoad: null,
	/*<BeginProperty Name="Infragistics.ObjectBlock Infragistics.FileReader::OnLoad()" />*/
	onLoad: function (value) {
		if (arguments.length === 1) {
			this._onLoad = value;
			return value;
		} else {
			return this._onLoad;
		}
	}
	/*<EndProperty Name="Infragistics.ObjectBlock Infragistics.FileReader::OnLoad()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.FileReader::Read(System.Object)" />*/
	read: function (data) {
		var $self = this;
		var fileLoader = new FileReader();
		fileLoader.readAsArrayBuffer(data);
		fileLoader.onload = function (val) {
			var done = val.target.readyState == FileReader.DONE;
			if (done) {
				var result = val.target.result;
				$self.onLoad()(result);
			}
		};
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.FileReader::Read(System.Object)" />*/
	,
	$type: new $.ig.Type('FileReader', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FileReader" />*/

/*<BeginType Name="Infragistics.CPDictionary" />*/

$.ig.util.defType('Dictionary', 'Object', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
	},
	init1: function (initNumber, capacity) {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 Infragistics.CPDictionary::Count()" />*/
	count: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDictionary::Count()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.CPDictionary::Item(System.String)" />*/
	item: function (key, value) {
		if (arguments.length === 2) {
			return value;
		} else {
			return null;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.CPDictionary::Item(System.String)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDictionary::Length()" />*/
	length: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDictionary::Length()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPDictionary::ContainsKey(System.String)" />*/
	containsKey: function (key) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPDictionary::ContainsKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDictionary::AddAll(Infragistics.CPDictionary)" />*/
	addAll: function (other) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPDictionary::AddAll(Infragistics.CPDictionary)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDictionary::Remove(System.String)" />*/
	remove: function (key) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPDictionary::Remove(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDictionary::Clear()" />*/
	clear: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.CPDictionary::Clear()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.CPDictionary::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return null;
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.CPDictionary::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.Dictionary Infragistics.CPDictionary::GetDictionary(System.Object)" />*/
	getDictionary: function (obj) {
		return null;
	}
	/*<EndMethod Name="System.Collections.Dictionary Infragistics.CPDictionary::GetDictionary(System.Object)" />*/
	,
	/*<BeginProperty Name="System.Collections.IEnumerable Infragistics.CPDictionary::Keys()" />*/
	keys: function () {
		return null;
	}
	/*<EndProperty Name="System.Collections.IEnumerable Infragistics.CPDictionary::Keys()" />*/
	,
	/*<BeginProperty Name="System.Collections.IEnumerable Infragistics.CPDictionary::Values()" />*/
	values: function () {
		return null;
	}
	/*<EndProperty Name="System.Collections.IEnumerable Infragistics.CPDictionary::Values()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CPDictionary::Get(System.String)" />*/
	get: function (key) {
		return null;
	}
	/*<EndMethod Name="System.Object Infragistics.CPDictionary::Get(System.String)" />*/
	,
	$type: new $.ig.Type('Dictionary', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CPDictionary" />*/

/*<BeginType Name="Infragistics.CPReadOnlyList" />*/

$.ig.util.defType('Array', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::Add(System.Object)" />*/
	add: function (item) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::Add(System.Object)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPReadOnlyList::Count()" />*/
	length: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPReadOnlyList::Count()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::Clear()" />*/
	clear: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::Clear()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.CPReadOnlyList::GetEnumerator()" />*/
	getEnumerator: function () {
		return null;
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.CPReadOnlyList::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::InsertRange(System.Int32, System.Array)" />*/
	insertRange1: function (index, items) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::InsertRange(System.Int32, System.Array)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::InsertRange(System.Int32, Infragistics.CPList)" />*/
	insertRange: function (index, items) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::InsertRange(System.Int32, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveRange(System.Int32, System.Int32)" />*/
	splice: function (index, count) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::Sort(System.Collections.CompareCallback)" />*/
	sort: function (compareCallback) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::Sort(System.Collections.CompareCallback)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPReadOnlyList::Contains(System.Object)" />*/
	contains: function (val) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPReadOnlyList::Contains(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::Insert(System.Int32, System.Object)" />*/
	insert: function (index, val) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::Insert(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPReadOnlyList::Remove(System.Object)" />*/
	removeItem: function (val) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPReadOnlyList::Remove(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPReadOnlyList::IndexOf(System.Object)" />*/
	indexOf: function (val) {
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPReadOnlyList::IndexOf(System.Object)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.CPReadOnlyList::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			return value;
		} else {
			return null;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.CPReadOnlyList::Item(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPReadOnlyList::IsSynchronized()" />*/
	isSynchronized: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPReadOnlyList::IsSynchronized()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.CPReadOnlyList::SyncRoot()" />*/
	syncRoot: function () {
		return null;
	}
	/*<EndProperty Name="System.Object Infragistics.CPReadOnlyList::SyncRoot()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::CopyTo(System.Array, System.Int32)" />*/
	copyTo: function (array, index) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::CopyTo(Infragistics.CPList, System.Int32)" />*/
	copyTo1: function (array, index) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::CopyTo(Infragistics.CPList, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::Reverse()" />*/
	reverse: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::Reverse()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveAllInList(Infragistics.CPReadOnlyList)" />*/
	removeAllInList: function (toRemove) {
	}
	/*<EndMethod Name="System.Void Infragistics.CPReadOnlyList::RemoveAllInList(Infragistics.CPReadOnlyList)" />*/
	,
	$type: new $.ig.Type('Array', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type, $.ig.ICollection.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CPReadOnlyList" />*/

/*<BeginType Name="Infragistics.CPList" />*/

$.ig.util.defType('Array', 'Array', {
	init: function () {
		$.ig.Array.prototype.init.call(this);
	},
	$type: new $.ig.Type('Array', $.ig.Array.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPList" />*/

/*<BeginType Name="Infragistics.NativePoint" />*/

$.ig.util.defType('CPPoint', 'Object', {
	_x: 0,
	_y: 0,
	init: function (originX, originY) {
		$.ig.Object.prototype.init.call(this);
		this._x = originX;
		this._y = originY;
	},
	$type: new $.ig.Type('CPPoint', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativePoint" />*/

/*<BeginType Name="Infragistics.NativeSize" />*/

$.ig.util.defType('CPSize', 'ValueType', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.ValueType.prototype.init.call(this);
	},
	_width: 0,
	_height: 0,
	init1: function (initNumber, w, h) {
		$.ig.ValueType.prototype.init.call(this);
		this._width = w;
		this._height = h;
	},
	$type: new $.ig.Type('CPSize', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeSize" />*/

/*<BeginType Name="Infragistics.NativeRect" />*/

$.ig.util.defType('CPRect', 'ValueType', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.ValueType.prototype.init.call(this);
	},
	_x: 0,
	_y: 0,
	_width: 0,
	_height: 0,
	init1: function (initNumber, originX, originY, w, h) {
		$.ig.ValueType.prototype.init.call(this);
		if (isNaN(originX)) {
			originX = 0;
		}
		if (isNaN(originY)) {
			originY = 0;
		}
		if (isNaN(w)) {
			w = 1;
		}
		if (isNaN(h)) {
			h = 1;
		}
		this._x = originX;
		this._y = originY;
		this._width = w;
		this._height = h;
	},
	$type: new $.ig.Type('CPRect', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeRect" />*/

/*<BeginType Name="Infragistics.RPStack" />*/

$.ig.util.defType('RPStack', 'Object', {
	__stack: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__stack = new $.ig.Array();
	},
	/*<BeginMethod Name="System.Object Infragistics.RPStack::Pop()" />*/
	pop: function () {
		return this.__stack.pop();
	}
	/*<EndMethod Name="System.Object Infragistics.RPStack::Pop()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RPStack::Push(System.Object)" />*/
	push: function (o) {
		this.__stack.push(o);
	}
	/*<EndMethod Name="System.Void Infragistics.RPStack::Push(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.RPStack::Peek()" />*/
	peek: function () {
		var stack = this.__stack;
		return stack[stack.length - 1];
	}
	/*<EndMethod Name="System.Object Infragistics.RPStack::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.RPStack::Count()" />*/
	count: function () {
		return this.__stack.length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.RPStack::Count()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RPStack::Clear()" />*/
	clear: function () {
		this.__stack.clear();
	}
	/*<EndMethod Name="System.Void Infragistics.RPStack::Clear()" />*/
	,
	$type: new $.ig.Type('RPStack', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RPStack" />*/

/*<BeginType Name="Infragistics.AnimationHelperBase" />*/

$.ig.util.defType('AnimationHelperBase', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Timer Infragistics.AnimationHelperBase::NextTimer()" />*/
	nextTimer: function () {
		var t = new $.ig.Timer();
		t.start(this.tick.runOn(this));
		return t;
	}
	/*<EndMethod Name="System.Timer Infragistics.AnimationHelperBase::NextTimer()" />*/
	,
	/*<BeginMethod Name="System.Timer Infragistics.AnimationHelperBase::NextTimer(System.Double)" />*/
	nextTimer1: function (intervalSeconds) {
		var t = new $.ig.Timer();
		t.start1(this.tick.runOn(this), $.ig.truncate((intervalSeconds * 1000)));
		return t;
	}
	/*<EndMethod Name="System.Timer Infragistics.AnimationHelperBase::NextTimer(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelperBase::Tick()" />*/
	tick: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelperBase::Tick()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.AnimationHelperBase::GetCurrentTime()" />*/
	getCurrentTime: function () {
		return $.ig.NativeDateUtility.prototype.getCurrentTimeInNativeTimeSpan();
	}
	/*<EndMethod Name="System.Double Infragistics.AnimationHelperBase::GetCurrentTime()" />*/
	,
	$type: new $.ig.Type('AnimationHelperBase', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AnimationHelperBase" />*/

/*<BeginType Name="Infragistics.CPRegex" />*/

$.ig.util.defType('CPRegex', 'Object', {
	_regexp: null,
	init: function (pattern) {
		$.ig.Object.prototype.init.call(this);
		this._regexp = new RegExp(pattern, 'g');
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CPRegex::Matches(System.String)" />*/
	matches: function (input) {
		var result = new $.ig.Array();
		this._regexp.lastIndex = 0;
		do {
			var array = this._regexp.exec(input);
			if (array == null) {
				break;
			}
			result.add(this.createMatch(array));
		} while (true);
		return result;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CPRegex::Matches(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPRegex::Replace(System.String, Infragistics.CPRegexMatchEvaluator)" />*/
	replace: function (input, evaluator) {
		var result = "";
		var appendStart = 0;
		this._regexp.lastIndex = 0;
		do {
			var array = this._regexp.exec(input);
			if (array == null) {
				break;
			}
			var match = this.createMatch(array);
			result = result + input.substr(appendStart, match.index() - appendStart);
			var replacement = evaluator(match);
			result = result + replacement;
			appendStart = match.index() + match.value().length;
		} while (true);
		return result + input.substr(appendStart);
	}
	/*<EndMethod Name="System.String Infragistics.CPRegex::Replace(System.String, Infragistics.CPRegexMatchEvaluator)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPRegexMatch Infragistics.CPRegex::CreateMatch(Infragistics.CPList)" />*/
	createMatch: function (matchArray) {
		var groups = new $.ig.Array();
		for (var i = 0; i <= matchArray.length; i++) {
			groups.add(new $.ig.CPRegexGroup(matchArray[i]));
		}
		return new $.ig.CPRegexMatch(matchArray.index, matchArray[0], groups);
	}
	/*<EndMethod Name="Infragistics.CPRegexMatch Infragistics.CPRegex::CreateMatch(Infragistics.CPList)" />*/
	,
	$type: new $.ig.Type('CPRegex', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPRegex" />*/

/*<BeginType Name="Infragistics.CPWeakObject" />*/

$.ig.util.defType('CPWeakObject', 'Object', {
	__obj: null,
	init: function (obj) {
		$.ig.Object.prototype.init.call(this);
		this.__obj = obj;
	},
	/*<BeginProperty Name="System.Object Infragistics.CPWeakObject::Value()" />*/
	value: function () {
		return this.__obj;
	}
	/*<EndProperty Name="System.Object Infragistics.CPWeakObject::Value()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPWeakObject::IsAlive()" />*/
	isAlive: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPWeakObject::IsAlive()" />*/
	,
	$type: new $.ig.Type('CPWeakObject', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPWeakObject" />*/

/*<BeginType Name="Infragistics.NativeFileUtility" />*/

$.ig.util.defType('NativeFileUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int64 Infragistics.NativeFileUtility::GetFileSize(System.String)" />*/
	getFileSize1: function (file) {
		return 0;
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeFileUtility::GetFileSize(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.NativeFileUtility::GetFileSize(System.Object)" />*/
	getFileSize: function (file) {
		return file.size;
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeFileUtility::GetFileSize(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeFileUtility::MoveFile(System.String, System.String)" />*/
	moveFile: function (fromPath, toPath) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeFileUtility::MoveFile(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeFileUtility::CreateUniqueTempDir()" />*/
	createUniqueTempDir: function () {
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.NativeFileUtility::CreateUniqueTempDir()" />*/
	,
	/*<BeginMethod Name="System.Array Infragistics.NativeFileUtility::ReadFile(System.String, System.Int64, System.Int64)" />*/
	readFile1: function (filePath, startPosition, count) {
		return null;
	}
	/*<EndMethod Name="System.Array Infragistics.NativeFileUtility::ReadFile(System.String, System.Int64, System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Array Infragistics.NativeFileUtility::ReadFile(System.String)" />*/
	readFile: function (filePath) {
		return null;
	}
	/*<EndMethod Name="System.Array Infragistics.NativeFileUtility::ReadFile(System.String)" />*/
	,
	$type: new $.ig.Type('NativeFileUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeFileUtility" />*/

/*<BeginType Name="Infragistics.NativeDateUtility" />*/

$.ig.util.defType('NativeDateUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateUtcDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createUtcDateForMonth: function (month, day, year, hour, minute) {
		var date = new Date(Date.UTC(year, month-1, day, hour, minute, 0));
		date.isUtcDate = true;
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateUtcDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateUtcDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createUtcDateForMonth1: function (month, day, year, hour, minute, second) {
		var date = new Date(Date.UTC(year, month-1, day, hour, minute, second));
		date.isUtcDate = true;
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateUtcDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createDateForMonth: function (month, day, year, hour, minute) {
		var date = new Date(year, month - 1, day, hour, minute, 0);
		return (date);
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::CreateDateForMonth(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeDateUtility::GetStringForDate(System.DateTime, System.String, System.Boolean)" />*/
	getStringForDate: function (date, formatString, isUtcDate) {
		if (isUtcDate) {
			date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
		}
		formatString = $.ig.util.replace(formatString, "'", "");
		return $.ig.Date.prototype.toStringFormat(date, formatString, null);
	}
	/*<EndMethod Name="System.String Infragistics.NativeDateUtility::GetStringForDate(System.DateTime, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeDateUtility::IsUtcDate(System.DateTime)" />*/
	isUtcDate: function (date) {
		return date.isUtcDate;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeDateUtility::IsUtcDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertUTCToLocalTime(System.DateTime)" />*/
	convertUTCToLocalTime: function (utcDate) {
		return new Date(utcDate.getTime());
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertUTCToLocalTime(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertLocalTimeToUTC(System.DateTime)" />*/
	convertLocalTimeToUTC: function (local) {
		var date = new Date(local.getTime());
		date.isUtcDate = true;
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertLocalTimeToUTC(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ParseString(System.String, System.String)" />*/
	parseString: function (dateString, format) {
		if (dateString != null) {
			var date = $.ig.Date.prototype.parseExact(dateString, format, $.ig.CultureInfo.prototype.invariantCulture());
			date.isUtcDate = true;
			return date;
		}
		return $.ig.Date.prototype.minValue();
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ParseString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ParseStringAsUTC(System.String, System.String)" />*/
	parseStringAsUTC: function (dateString, format) {
		return $.ig.Date.prototype.minValue();
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ParseStringAsUTC(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::Now()" />*/
	now: function () {
		return $.ig.Date.prototype.now();
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::Now()" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::AddHours(System.Int32)" />*/
	addHours: function (amount) {
		return $.ig.Date.prototype.now();
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::AddHours(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeDateUtility::DateIsNull(System.Nullable)" />*/
	dateIsNull: function (dateTime) {
		return $.ig.util.nullableEquals(dateTime, null);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeDateUtility::DateIsNull(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::AddToUTCDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	addToUTCDate: function (date, years, months, days, hours, minutes, seconds) {
		var month = $.ig.NativeDateUtility.prototype.getMonthForDate(date, true);
		var year = $.ig.NativeDateUtility.prototype.getYearForDate(date, true);
		var day = $.ig.NativeDateUtility.prototype.getDayForDate(date, true);
		var hour = $.ig.NativeDateUtility.prototype.getHourForDate(date, true);
		var minute = $.ig.NativeDateUtility.prototype.getMinuteForDate(date, true);
		return $.ig.NativeDateUtility.prototype.createUtcDateForMonth(month + months, day + days, year + years, hour + hours, minute + minutes);
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::AddToUTCDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::AddToDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	addToDate: function (date, years, months, days, hours, minutes) {
		var month = $.ig.NativeDateUtility.prototype.getMonthForDate(date, false);
		var year = $.ig.NativeDateUtility.prototype.getYearForDate(date, false);
		var day = $.ig.NativeDateUtility.prototype.getDayForDate(date, false);
		var hour = $.ig.NativeDateUtility.prototype.getHourForDate(date, false);
		var minute = $.ig.NativeDateUtility.prototype.getMinuteForDate(date, false);
		return $.ig.NativeDateUtility.prototype.createDateForMonth(month + months, day + days, year + years, hour + hours, minute + minutes);
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::AddToDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayForDate(System.DateTime, System.Boolean)" />*/
	getDayForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCDate();
		} else {
			return date.getDate();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMonthForDate(System.DateTime, System.Boolean)" />*/
	getMonthForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCMonth() + 1;
		} else {
			return date.getMonth() + 1;
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMonthForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetYearForDate(System.DateTime, System.Boolean)" />*/
	getYearForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCFullYear();
		} else {
			return date.getFullYear();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetYearForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetHourForDate(System.DateTime, System.Boolean)" />*/
	getHourForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCHours();
		} else {
			return date.getHours();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetHourForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMinuteForDate(System.DateTime, System.Boolean)" />*/
	getMinuteForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCMinutes();
		} else {
			return date.getMinutes();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMinuteForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMillisecondForDate(System.DateTime, System.Boolean)" />*/
	getMillisecondForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCMilliseconds();
		} else {
			return date.getMilliseconds();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetMillisecondForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetSecondForDate(System.DateTime, System.Boolean)" />*/
	getSecondForDate: function (date, asUtc) {
		if (asUtc) {
			return date.getUTCSeconds();
		} else {
			return date.getSeconds();
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetSecondForDate(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.NativeDateUtility::GetCurrentTimeInSeconds()" />*/
	getCurrentTimeInSeconds: function () {
		var seconds = new Date().getTime() / 1000;
		return seconds;
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeDateUtility::GetCurrentTimeInSeconds()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.NativeDateUtility::GetTicksForDate(System.DateTime)" />*/
	getTicksForDate: function (date) {
		var offset = 0;
		var ms = date.getMilliseconds();
		if (ms > 0) {
			offset += 10000;
		}
		return (date.getTime()) * 10000 + $.ig.DateUtility.prototype.ticksTo1970 + offset;
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeDateUtility::GetTicksForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInSecondsToDate(System.Int64)" />*/
	convertTimeInSecondsToDate: function (timeInSeconds) {
		return new Date(timeInSeconds*1000);
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInSecondsToDate(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInSecondsToUTCDate(System.Int64)" />*/
	convertTimeInSecondsToUTCDate: function (timeInSeconds) {
		var date = new Date(0);
		date.setUTCMilliseconds(timeInSeconds*1000);
		date.isUtcDate = true;
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInSecondsToUTCDate(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.NativeDateUtility::ConvertDateToTimeInSeconds(System.DateTime)" />*/
	convertDateToTimeInSeconds: function (date) {
		return Math.round(date.getTime() / 1000);
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeDateUtility::ConvertDateToTimeInSeconds(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.NativeDateUtility::GetCurrentTimeInNativeTimeSpan()" />*/
	getCurrentTimeInNativeTimeSpan: function () {
		return new Date().getTime();
	}
	/*<EndMethod Name="System.Int64 Infragistics.NativeDateUtility::GetCurrentTimeInNativeTimeSpan()" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInTicksToDate(System.Int64)" />*/
	convertTimeInTicksToDate: function (ticks) {
		ticks -= $.ig.DateUtility.prototype.ticksTo1970;
		return new Date(ticks/10000);
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInTicksToDate(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInTicksToUTCDate(System.Int64)" />*/
	convertTimeInTicksToUTCDate: function (ticks) {
		var date = $.ig.NativeDateUtility.prototype.convertTimeInTicksToDate(ticks);
		date.isUtcDate = true;
		return date;
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeDateUtility::ConvertTimeInTicksToUTCDate(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPMonthInfo Infragistics.NativeDateUtility::ResolveMonthInfo(System.Int32, System.Int32)" />*/
	resolveMonthInfo: function (month, year) {
		var monthInfo = new $.ig.CPMonthInfo();
		monthInfo._numberOfDays = new Date(year, month, 0, 0, 0, 0).getDate();
		monthInfo._month = month;
		monthInfo._year = year;
		var firstDay = $.ig.Date.prototype.fromValues(year, month, 1, 0, 0, 0, 0);
		monthInfo._startDayOfWeek = firstDay.getDay();
		var lastDay = $.ig.Date.prototype.fromValues(year, month, monthInfo._numberOfDays, 0, 0, 0, 0);
		monthInfo._endDayOfWeek = lastDay.getDay();
		return monthInfo;
	}
	/*<EndMethod Name="Infragistics.CPMonthInfo Infragistics.NativeDateUtility::ResolveMonthInfo(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetDaysOfWeekNames()" />*/
	getDaysOfWeekNames: function () {
		if ($.ig.NativeDateUtility.prototype.__dowNames == null) {
			var date = $.ig.NativeDateUtility.prototype.createDateForMonth(3, 25, 2018, 0, 0);
			$.ig.NativeDateUtility.prototype.__dowNames = new $.ig.Array();
			for (var i = 0; i < 7; i++) {
				$.ig.NativeDateUtility.prototype.__dowNames.add(date.toLocaleDateString(navigator.language, { weekday: 'long'}));
				date = $.ig.NativeDateUtility.prototype.addToDate(date, 0, 0, 1, 0, 0);
			}
		}
		return $.ig.NativeDateUtility.prototype.__dowNames;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetDaysOfWeekNames()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetDaysOfWeekShortNames()" />*/
	getDaysOfWeekShortNames: function () {
		if ($.ig.NativeDateUtility.prototype.__dowShortNames == null) {
			var date = $.ig.NativeDateUtility.prototype.createDateForMonth(3, 25, 2018, 0, 0);
			$.ig.NativeDateUtility.prototype.__dowShortNames = new $.ig.Array();
			for (var i = 0; i < 7; i++) {
				$.ig.NativeDateUtility.prototype.__dowShortNames.add(date.toLocaleDateString(navigator.language, { weekday: 'short'}));
				date = $.ig.NativeDateUtility.prototype.addToDate(date, 0, 0, 1, 0, 0);
			}
		}
		return $.ig.NativeDateUtility.prototype.__dowShortNames;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetDaysOfWeekShortNames()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetMonthShortNames()" />*/
	getMonthShortNames: function () {
		if ($.ig.NativeDateUtility.prototype.__monthShortNames == null) {
			$.ig.NativeDateUtility.prototype.__monthShortNames = new $.ig.Array();
			for (var i = 1; i <= 12; i++) {
				var date = $.ig.NativeDateUtility.prototype.createDateForMonth(i, 3, 2018, 0, 0);
				$.ig.NativeDateUtility.prototype.__monthShortNames.add(date.toLocaleDateString(navigator.language, { month: 'short'}));
			}
		}
		return $.ig.NativeDateUtility.prototype.__monthShortNames;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeDateUtility::GetMonthShortNames()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayOfWeek(System.DateTime)" />*/
	getDayOfWeek: function (date) {
		if ($.ig.NativeDateUtility.prototype.isUtcDate(date)) {
			return date.getUTCDay();
		} else {
			return $.ig.NativeDateUtility.prototype.getDayOfWeekLocal(date);
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayOfWeek(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayOfWeekLocal(System.DateTime)" />*/
	getDayOfWeekLocal: function (date) {
		return date.getDay();
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetDayOfWeekLocal(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeDateUtility::GetFirstDayOfWeek()" />*/
	getFirstDayOfWeek: function () {
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeDateUtility::GetFirstDayOfWeek()" />*/
	,
	$type: new $.ig.Type('NativeDateUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeDateUtility" />*/

/*<BeginType Name="Infragistics.NativeDictionaryUtility" />*/

$.ig.util.defType('NativeDictionaryUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.NativeDictionaryUtility::ContainsKey(Infragistics.CPDictionary, System.String)" />*/
	containsKey: function (lookup, key) {
		return lookup.item(key) != null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeDictionaryUtility::ContainsKey(Infragistics.CPDictionary, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeDictionaryUtility::GetKeys(Infragistics.CPDictionary)" />*/
	getKeys: function (lookup) {
		return Object.keys(lookup.proxy);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeDictionaryUtility::GetKeys(Infragistics.CPDictionary)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeDictionaryUtility::RemoveValue(Infragistics.CPDictionary, System.String)" />*/
	removeValue: function (lookup, key) {
		lookup.remove(key);
	}
	/*<EndMethod Name="System.Void Infragistics.NativeDictionaryUtility::RemoveValue(Infragistics.CPDictionary, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.NativeDictionaryUtility::CopyDictionary(Infragistics.CPDictionary)" />*/
	copyDictionary: function (d) {
		var copy = new $.ig.Dictionary(0);
		copy.addAll(d);
		return copy;
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.NativeDictionaryUtility::CopyDictionary(Infragistics.CPDictionary)" />*/
	,
	$type: new $.ig.Type('NativeDictionaryUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeDictionaryUtility" />*/

/*<BeginType Name="Infragistics.NativeJSONUtility" />*/

$.ig.util.defType('NativeJSONUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.NativeJSONUtility::Serialize(System.JSDictionary)" />*/
	serialize: function (json) {
		return JSON.stringify(json);
	}
	/*<EndMethod Name="System.String Infragistics.NativeJSONUtility::Serialize(System.JSDictionary)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeJSONUtility::ContainsKey(System.JSDictionary, System.String)" />*/
	containsKey: function (lookup, key) {
		return lookup[key] != null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeJSONUtility::ContainsKey(System.JSDictionary, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeJSONUtility::GetKeys(System.JSDictionary)" />*/
	getKeys: function (lookup) {
		return Object.keys(lookup);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeJSONUtility::GetKeys(System.JSDictionary)" />*/
	,
	/*<BeginMethod Name="System.JSDictionary Infragistics.NativeJSONUtility::ConvertJsonObjectToDictionary(System.Object)" />*/
	convertJsonObjectToDictionary: function (jsonObject) {
		return jsonObject;
	}
	/*<EndMethod Name="System.JSDictionary Infragistics.NativeJSONUtility::ConvertJsonObjectToDictionary(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeJSONUtility::ConvertJsonArrayToList(System.Object)" />*/
	convertJsonArrayToList: function (jsonArray) {
		if (jsonArray == null) {
			return new $.ig.Array();
		}
		return jsonArray;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeJSONUtility::ConvertJsonArrayToList(System.Object)" />*/
	,
	/*<BeginMethod Name="System.JSDictionary Infragistics.NativeJSONUtility::Deserialize(System.String)" />*/
	deserialize: function (val) {
		try {
			return JSON.parse(val);
		}
		catch (e) {
			return {};
		}
	}
	/*<EndMethod Name="System.JSDictionary Infragistics.NativeJSONUtility::Deserialize(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeJSONUtility::IsJSONNullValue(System.Object)" />*/
	isJSONNullValue: function (value) {
		return value == null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeJSONUtility::IsJSONNullValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeJSONUtility::FindInString(System.String, System.String, System.String)" />*/
	findInString: function (val, start, end) {
		var i = val.indexOf(start, 0);
		if (i >= 0) {
			i += start.length;
			var i2 = val.indexOf(end, i);
			if (i2 == -1) {
				return val.substr(i, val.length - i);
			} else if (i2 == i) {
				return String.empty();
			}
			return val.substr(i, i2 - i);
		}
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.NativeJSONUtility::FindInString(System.String, System.String, System.String)" />*/
	,
	$type: new $.ig.Type('NativeJSONUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeJSONUtility" />*/

/*<BeginType Name="Infragistics.NativeLongTermStorageUtility" />*/

$.ig.util.defType('NativeLongTermStorageUtility', 'Object', {
	__localStorage: null,
	/*<BeginMethod Name="Infragistics.NativeLongTermStorageUtility Infragistics.NativeLongTermStorageUtility::Utility()" />*/
	utility: function () {
		if ($.ig.NativeLongTermStorageUtility.prototype.__utility == null) {
			$.ig.NativeLongTermStorageUtility.prototype.__utility = new $.ig.NativeLongTermStorageUtility();
		}
		return $.ig.NativeLongTermStorageUtility.prototype.__utility;
	}
	/*<EndMethod Name="Infragistics.NativeLongTermStorageUtility Infragistics.NativeLongTermStorageUtility::Utility()" />*/
	,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		var key = $.ig.NativeLongTermStorageUtility.prototype._localStorageKey;
		var storage = localStorage.getItem(key);
		if (storage != null && !storage.equals("")) {
			this.__localStorage = $.ig.CPJSONObject.prototype.createFromString(storage);
		}
		if (this.__localStorage == null) {
			this.__localStorage = new $.ig.CPJSONObject(1);
		}
	},
	/*<BeginMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::UpdateSessionStorage()" />*/
	updateSessionStorage: function () {
		try {
			var key = $.ig.NativeLongTermStorageUtility.prototype._localStorageKey;
			var stateString = $.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.convertToString();
			localStorage.setItem(key, stateString);
		}
		catch (e) {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::UpdateSessionStorage()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::SaveItemForKey(System.String, System.String)" />*/
	saveItemForKey: function (key, item) {
		$.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.setValueForKey(key, item);
		$.ig.NativeLongTermStorageUtility.prototype.updateSessionStorage();
	}
	/*<EndMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::SaveItemForKey(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeLongTermStorageUtility::LoadItemForKey(System.String)" />*/
	loadItemForKey: function (key) {
		if ($.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.containsKey(key)) {
			return $.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.resolveStringForKey(key);
		}
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.NativeLongTermStorageUtility::LoadItemForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::DeleteItemForKey(System.String)" />*/
	deleteItemForKey: function (key) {
		if ($.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.containsKey(key)) {
			$.ig.NativeLongTermStorageUtility.prototype.utility().__localStorage.removeForKey(key);
			$.ig.NativeLongTermStorageUtility.prototype.updateSessionStorage();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.NativeLongTermStorageUtility::DeleteItemForKey(System.String)" />*/
	,
	$type: new $.ig.Type('NativeLongTermStorageUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeLongTermStorageUtility" />*/

/*<BeginType Name="Infragistics.NativeNullableUtility" />*/

$.ig.util.defType('NativeNullableUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullDateTime(System.Nullable)" />*/
	isNullDateTime: function (dateTime) {
		return $.ig.util.nullableEquals(dateTime, null);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullDateTime(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullBool(System.Nullable)" />*/
	isNullBool: function (b) {
		return $.ig.util.nullableEquals(b, null);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullBool(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullInt(System.Nullable)" />*/
	isNullInt: function (i) {
		return $.ig.util.nullableEquals(i, null);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullInt(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullDouble(System.Nullable)" />*/
	isNullDouble: function (d) {
		return $.ig.util.nullableEquals(d, null);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNullDouble(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.NativeNullableUtility::UnwrapDateTime(System.Nullable)" />*/
	unwrapDateTime: function (dateTime) {
		return dateTime.value();
	}
	/*<EndMethod Name="System.DateTime Infragistics.NativeNullableUtility::UnwrapDateTime(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNull(System.Object)" />*/
	isNull: function (value) {
		return value == null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::IsNull(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.NativeNullableUtility::WrapNull(System.Object)" />*/
	wrapNull: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Object Infragistics.NativeNullableUtility::WrapNull(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.NativeNullableUtility::UnwrapNull(System.Object)" />*/
	unwrapNull: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Object Infragistics.NativeNullableUtility::UnwrapNull(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapInt(System.Int32)" />*/
	wrapInt: function (i) {
		return $.ig.util.toNullable($.ig.Number.prototype.$type, i);
	}
	/*<EndMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapInt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.NativeNullableUtility::UnwrapInt(System.Nullable)" />*/
	unwrapInt: function (i) {
		return i.value();
	}
	/*<EndMethod Name="System.Double Infragistics.NativeNullableUtility::UnwrapInt(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapDouble(System.Double)" />*/
	wrapDouble: function (d) {
		return $.ig.util.toNullable(Number, d);
	}
	/*<EndMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.NativeNullableUtility::UnwrapDouble(System.Nullable)" />*/
	unwrapDouble: function (d) {
		return d.value();
	}
	/*<EndMethod Name="System.Double Infragistics.NativeNullableUtility::UnwrapDouble(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapBool(System.Boolean)" />*/
	wrapBool: function (b) {
		return $.ig.util.toNullable($.ig.Boolean.prototype.$type, b);
	}
	/*<EndMethod Name="System.Nullable Infragistics.NativeNullableUtility::WrapBool(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeNullableUtility::UnwrapBool(System.Nullable)" />*/
	unwrapBool: function (b) {
		return b.value();
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeNullableUtility::UnwrapBool(System.Nullable)" />*/
	,
	$type: new $.ig.Type('NativeNullableUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeNullableUtility" />*/

/*<BeginType Name="Infragistics.NativeRandomUtility" />*/

$.ig.util.defType('NativeRandomUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.NativeRandomUtility::Seed(System.Int32)" />*/
	seed: function (seed) {
	}
	/*<EndMethod Name="System.Void Infragistics.NativeRandomUtility::Seed(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeRandomUtility::Next(System.Int32, System.Int32)" />*/
	next: function (min, max) {
		min = $.ig.truncate(Math.ceil(min));
		max = $.ig.truncate(Math.floor(max));
		return $.ig.truncate(Math.floor(Math.random() * (max - min + 1))) + min;
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeRandomUtility::Next(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('NativeRandomUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeRandomUtility" />*/

/*<BeginType Name="Infragistics.NativeReflectorUtility" />*/

$.ig.util.defType('NativeReflectorUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeReflectorUtility::GetPublicPropertyNames(System.Object)" />*/
	getPublicPropertyNames: function (obj) {
		return new $.ig.Array();
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeReflectorUtility::GetPublicPropertyNames(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeReflectorUtility::FixPropertyName(System.String)" />*/
	fixPropertyName: function (propertyName) {
		return $.ig.NativeReflectorUtility.prototype.fixName(propertyName, false);
	}
	/*<EndMethod Name="System.String Infragistics.NativeReflectorUtility::FixPropertyName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeReflectorUtility::FixName(System.String, System.Boolean)" />*/
	fixName: function (propertyName, underscore) {
		var prop = propertyName.substr(0, 1).toLowerCase() + propertyName.substr(1, propertyName.length);
		if (underscore) {
			prop = "_" + prop;
		}
		return prop;
	}
	/*<EndMethod Name="System.String Infragistics.NativeReflectorUtility::FixName(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.NativeReflectorUtility::GetPropertyValue(System.String, System.Object)" />*/
	getPropertyValue: function (propName, obj) {
		if (propName == null) {
			return obj;
		}
		var name = $.ig.NativeReflectorUtility.prototype.fixName(propName, true);
		var val = obj[name];
		if (val == null) {
			name = $.ig.NativeReflectorUtility.prototype.fixName(propName, false);
			val = obj[name]();
		}
		return val;
	}
	/*<EndMethod Name="System.Object Infragistics.NativeReflectorUtility::GetPropertyValue(System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('NativeReflectorUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeReflectorUtility" />*/

/*<BeginType Name="Infragistics.NativeSortUtility" />*/

$.ig.util.defType('NativeSortUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListAlpha(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	sortListAlpha: function (converter, list, ascending) {
		list.sort(function (lhs, rhs) {
			var left = converter.getStringValue(ascending ? lhs : rhs);
			var right = converter.getStringValue(ascending ? rhs : lhs);
			if (left == null) {
				return right == null ? 0 : -1;
			} else if (right == null) {
				return 1;
			} else {
				left = left.toLowerCase();
				right = right.toLowerCase();
				return left.localeCompare(right);
			}
		});
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListAlpha(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListNumericDouble(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	sortListNumericDouble: function (converter, list, ascending) {
		list.sort(function (lhs, rhs) {
			var left = converter.getNumericDoubleValue(ascending ? lhs : rhs);
			var right = converter.getNumericDoubleValue(ascending ? rhs : lhs);
			if (left == 0) {
				if (right == 0) {
					return 0;
				}
				return -1;
			}
			return ((left < right) ? -1 : ((left > right) ? 1 : 0));
		});
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListNumericDouble(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListNumericLong(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	sortListNumericLong: function (converter, list, ascending) {
		list.sort(function (lhs, rhs) {
			var left = converter.getNumericLongValue(ascending ? lhs : rhs);
			var right = converter.getNumericLongValue(ascending ? rhs : lhs);
			if (left == 0) {
				if (right == 0) {
					return 0;
				}
				return -1;
			}
			return ((left < right) ? -1 : ((left > right) ? 1 : 0));
		});
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListNumericLong(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListDate(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean, System.Boolean)" />*/
	sortListDate: function (converter, list, ascending, prioritizeDate) {
		list.sort(function (lhs, rhs) {
			var left = converter.getNumericLongValue(ascending ? lhs : rhs);
			var right = converter.getNumericLongValue(ascending ? rhs : lhs);
			if (prioritizeDate) {
				if (ascending) {
					if (left == 0) {
						return 1;
					} else if (right == 0) {
						return -1;
					}
				} else {
					if (left == 0) {
						return -1;
					} else if (right == 0) {
						return 1;
					}
				}
			} else {
				if (left == 0) {
					if (right == 0) {
						return 0;
					}
					return -1;
				}
			}
			return ((left < right) ? -1 : ((left > right) ? 1 : 0));
		});
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListDate(Infragistics.CPSortConverter, Infragistics.CPList, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListCustom(Infragistics.CPList, Infragistics.CPList, Infragistics.CustomSortComparisonBlock)" />*/
	sortListCustom: function (list, properties, comparisonBlock) {
		list.sort(function (lhs, rhs) {
			return comparisonBlock(lhs, rhs, properties);
		});
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.NativeSortUtility::SortListCustom(Infragistics.CPList, Infragistics.CPList, Infragistics.CustomSortComparisonBlock)" />*/
	,
	$type: new $.ig.Type('NativeSortUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeSortUtility" />*/

/*<BeginType Name="Infragistics.NativeStringUtility" />*/

$.ig.util.defType('NativeStringUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::GenerateUID()" />*/
	generateUID: function () {
		return $.ig.util.createGuid();
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::GenerateUID()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::StartsWith(System.String, System.String)" />*/
	startsWith: function (val, startsWith) {
		return val.startsWith(startsWith);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::StartsWith(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::EndsWith(System.String, System.String)" />*/
	endsWith: function (val, endsWith) {
		return val.endsWith(endsWith);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::EndsWith(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Format(System.String, Infragistics.CPDictionary)" />*/
	format: function (val, replacements) {
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Format(System.String, Infragistics.CPDictionary)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Replace(System.String, System.String, System.String)" />*/
	replace: function (original, oldVal, newVal) {
		return $.ig.util.replace(original, oldVal, newVal);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Replace(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Substring(System.String, System.Int32, System.Int32)" />*/
	substring: function (val, start, length) {
		return val.substr(start, length);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Substring(System.String, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::SubstringToIndex(System.String, System.Int32, System.Int32)" />*/
	substringToIndex: function (val, startIndexInclusive, endIndexExclusive) {
		return val.substr(startIndexInclusive, endIndexExclusive - startIndexInclusive);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::SubstringToIndex(System.String, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::StringContains(System.String, System.String)" />*/
	stringContains: function (val, containsThis) {
		return val.toLowerCase().contains(containsThis.toLowerCase());
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::StringContains(System.String, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.NativeStringUtility::Split(System.String, System.String)" />*/
	split: function (original, splitVal) {
		return original.split(splitVal);
	}
	/*<EndMethod Name=" Infragistics.NativeStringUtility::Split(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::Contains(System.String, System.String)" />*/
	contains: function (val, containsThis) {
		return val.toLowerCase().indexOf(containsThis.toLowerCase()) != -1;
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::Contains(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.NativeStringUtility::ConvertToDouble(System.String)" />*/
	convertToDouble: function (numberVal) {
		return parseFloat(numberVal);
	}
	/*<EndMethod Name="System.Double Infragistics.NativeStringUtility::ConvertToDouble(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeStringUtility::ConvertToInt(System.String, System.Int32)" />*/
	convertToInt: function (numberVal, failValue) {
		return parseInt(numberVal);
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeStringUtility::ConvertToInt(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::ConvertNumberToString(System.Double)" />*/
	convertNumberToString: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::ConvertNumberToString(System.Double)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::ConvertNumberToStringWithFormat(System.Double, System.Int32)" />*/
	convertNumberToStringWithFormat: function (value, decimalPlaces) {
		return value.toFixed(decimalPlaces);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::ConvertNumberToStringWithFormat(System.Double, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::ToString(System.Object)" />*/
	toString1: function (obj) {
		return obj == null ? "" : obj.toString();
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::ToString(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::ToNativeData(System.String)" />*/
	toNativeData: function (value) {
		return value;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::ToNativeData(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::RemoveLastPathComponent(System.String)" />*/
	removeLastPathComponent: function (val) {
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::RemoveLastPathComponent(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Find(System.String, System.String, System.String)" />*/
	find: function (val, start, end) {
		var i = val.indexOf(start, 0);
		if (i >= 0) {
			i += start.length;
			var i2 = val.indexOf(end, i);
			if (i2 == -1) {
				return val.substr(i, val.length - i);
			} else if (i2 == i) {
				return String.empty();
			}
			return val.substr(i, i2 - i);
		}
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Find(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Trim(System.String)" />*/
	trim: function (val) {
		return val.trim([]);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Trim(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidEmailAddress(System.String)" />*/
	isValidEmailAddress: function (s) {
		s = s.toLowerCase();
		var rx = /^(?!\.)("([^"\r\\]|\\["\r\\])*"|([-a-z0-9!#$%&'*+/=?^_`{|}~]|\.(?!\.))*)@(?!\.)[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$/;
		return rx.test(s);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidEmailAddress(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeStringUtility::IndexOf(System.String, System.String)" />*/
	indexOf: function (containingString, containedString) {
		return containingString.indexOf(containedString);
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeStringUtility::IndexOf(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeStringUtility::IndexOf(System.String, System.String, System.Int32)" />*/
	indexOf1: function (containingString, containedString, startIndex) {
		return containingString.indexOf(containedString, startIndex);
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeStringUtility::IndexOf(System.String, System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeStringUtility::LastIndexOf(System.String, System.String)" />*/
	lastIndexOf: function (containingString, containedString) {
		return containingString.lastIndexOf(containedString);
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeStringUtility::LastIndexOf(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::EncodeURIPath(System.String)" />*/
	encodeURIPath: function (slashSeparatedString) {
		return slashSeparatedString;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::EncodeURIPath(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::EncodeURIQueryParam(System.String)" />*/
	encodeURIQueryParam: function (paramNameOrValue) {
		return paramNameOrValue;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::EncodeURIQueryParam(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::URLDecodeString(System.String)" />*/
	uRLDecodeString: function (val) {
		return decodeURIComponent(val);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::URLDecodeString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::RegexMatch(System.String, System.String)" />*/
	regexMatch: function (pattern, input) {
		return new RegExp(pattern).exec(input);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::RegexMatch(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::RegexReplace(System.String, System.String, System.String)" />*/
	regexReplace: function (input, pattern, replacement) {
		return input.replace(new RegExp(pattern, 'g'), replacement);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::RegexReplace(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::PlatformNewLine()" />*/
	platformNewLine: function () {
		return "\n";
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::PlatformNewLine()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsNumeric(System.String)" />*/
	isNumeric: function (value) {
		return !isNaN(value);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsNumeric(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.NativeStringUtility::ParseNumber(System.String)" />*/
	parseNumber: function (s) {
		if ($.ig.NativeStringUtility.prototype.isNumeric(s)) {
			return parseFloat(s);
		}
		return NaN;
	}
	/*<EndMethod Name="System.Double Infragistics.NativeStringUtility::ParseNumber(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::NativeErrorToString(System.Object)" />*/
	nativeErrorToString: function (o) {
		return $.ig.NativeStringUtility.prototype.toString1(o);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::NativeErrorToString(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::NativeErrorMessage(System.Object)" />*/
	nativeErrorMessage: function (o) {
		return $.ig.NativeStringUtility.prototype.toString1(o);
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::NativeErrorMessage(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::GetUrlDomain(System.String)" />*/
	getUrlDomain: function (url) {
		if ($.ig.CPStringUtility.prototype.isBlank(url)) {
			return null;
		}
		return $.ig.util.replace($.ig.util.replace(url, "http://", ""), "https://", "").split(/[/?#]/)[0];
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::GetUrlDomain(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidUrl(System.String)" />*/
	isValidUrl: function (url) {
		var re_weburl_string = "^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:(?:\\.(?:[a-z\\u00\u00071-\\uffff]{2,}))\\.?)?)(?::\\d{2,5})?(?:[/?#]\\S*)?$";
		var re_weburl = new RegExp(re_weburl_string, 'i');;
		return re_weburl.test(url.trim());
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidUrl(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidSimpleUrl(System.String)" />*/
	isValidSimpleUrl: function (url) {
		var re_weburl_string = "/\\b((?:[a-z][\\w-]+:(?:\\/{1,3}|[a-z0-9%])|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:'\".,<>?«»“”‘’]))";
		var re_weburl = new RegExp(re_weburl_string, 'ig');;
		return re_weburl.test(url.trim());
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidSimpleUrl(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidPhoneNumber(System.String)" />*/
	isValidPhoneNumber: function (val) {
		var re_phone_string = "^((([0-9]{3}))|([0-9]{3}))[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4}$";
		var re_phone = new RegExp(re_phone_string, 'img');;
		return re_phone.test(val.trim());
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsValidPhoneNumber(System.String)" />*/
	,
	/*<BeginMethod Name="System.Char Infragistics.NativeStringUtility::CharAt(System.String, System.Int32)" />*/
	charAt: function (s, currentPosition) {
		return s.charAt(currentPosition);
	}
	/*<EndMethod Name="System.Char Infragistics.NativeStringUtility::CharAt(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.UInt16 Infragistics.NativeStringUtility::WideCharAt(System.String, System.Int32)" />*/
	wideCharAt: function (s, currentPosition) {
		return s.charAt(currentPosition).charCodeAt(0);
	}
	/*<EndMethod Name="System.UInt16 Infragistics.NativeStringUtility::WideCharAt(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::CharToString(System.Char)" />*/
	charToString: function (c) {
		return c;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::CharToString(System.Char)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::GetMultibyteCharForString(System.String, System.Int32)" />*/
	getMultibyteCharForString: function (s, i) {
		var splitString = [...s];
		return splitString[i];
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::GetMultibyteCharForString(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.NativeStringUtility::IsCultureInvariantNumber(System.String)" />*/
	isCultureInvariantNumber: function (value) {
		return $.ig.NativeStringUtility.prototype.isNumeric(value);
	}
	/*<EndMethod Name="System.Boolean Infragistics.NativeStringUtility::IsCultureInvariantNumber(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.NativeStringUtility::Localize(System.String, System.String)" />*/
	localize: function (module, val) {
		var text = $.ig[module].strings[val];
		if (text == null) {
			var fallbackStrings = $.ig[module].fallbackStrings;
			text = fallbackStrings != null ? fallbackStrings[val] : null;
			if (text == null) {
				text = val;
			}
		}
		return text;
	}
	/*<EndMethod Name="System.String Infragistics.NativeStringUtility::Localize(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.NativeStringUtility::Compare(System.String, System.String)" />*/
	compare: function (left, right) {
		if (left == null) {
			return right == null ? 0 : -1;
		} else if (right == null) {
			return 1;
		} else {
			left = left.toLowerCase();
			right = right.toLowerCase();
			return left.localeCompare(right);
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.NativeStringUtility::Compare(System.String, System.String)" />*/
	,
	$type: new $.ig.Type('NativeStringUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeStringUtility" />*/

/*<BeginType Name="Infragistics.NativeThreadUtility" />*/

$.ig.util.defType('NativeThreadUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.NativeThreadUtility::ExecuteOnBackgroundThread(System.String, Infragistics.ExecutionBlock)" />*/
	executeOnBackgroundThread: function (name, block) {
		block();
	}
	/*<EndMethod Name="System.Void Infragistics.NativeThreadUtility::ExecuteOnBackgroundThread(System.String, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeThreadUtility::StopAndRemoveThread(System.String)" />*/
	stopAndRemoveThread: function (name) {
	}
	/*<EndMethod Name="System.Void Infragistics.NativeThreadUtility::StopAndRemoveThread(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeThreadUtility::ExecuteOnMainThread(Infragistics.ExecutionBlock)" />*/
	executeOnMainThread: function (block) {
		block();
	}
	/*<EndMethod Name="System.Void Infragistics.NativeThreadUtility::ExecuteOnMainThread(Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeThreadUtility::Sleep(System.Int32)" />*/
	sleep: function (millisecondsTimeout) {
	}
	/*<EndMethod Name="System.Void Infragistics.NativeThreadUtility::Sleep(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NativeThreadUtility::Lock(System.Object, Infragistics.ExecutionBlock)" />*/
	lock: function (lockObject, block) {
		block();
	}
	/*<EndMethod Name="System.Void Infragistics.NativeThreadUtility::Lock(System.Object, Infragistics.ExecutionBlock)" />*/
	,
	$type: new $.ig.Type('NativeThreadUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.NativeThreadUtility" />*/

/*<BeginType Name="Infragistics.PlatformInfo" />*/

$.ig.util.defType('PlatformInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="Infragistics.PlatformType Infragistics.PlatformInfo::Type()" />*/
	type: function () {
		return $.ig.PlatformType.prototype.web;
	}
	/*<EndProperty Name="Infragistics.PlatformType Infragistics.PlatformInfo::Type()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsMouse()" />*/
	supportsMouse: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsMouse()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsCopyImageToClipboard()" />*/
	supportsCopyImageToClipboard: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsCopyImageToClipboard()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsTouch()" />*/
	supportsTouch: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsTouch()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::IsPrimaryInputTouch()" />*/
	isPrimaryInputTouch: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::IsPrimaryInputTouch()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::NeedsEmojiButton()" />*/
	needsEmojiButton: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::NeedsEmojiButton()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.PlatformInfo::PlatformString()" />*/
	platformString: function () {
		return "web";
	}
	/*<EndProperty Name="System.String Infragistics.PlatformInfo::PlatformString()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.PlatformInfo::GetSystemInformation()" />*/
	getSystemInformation: function () {
		return (function () {
			var $ret = new $.ig.Array();
			$ret.add(new $.ig.CPKeyedObject("Platform", "Web"));
			$ret.add(new $.ig.CPKeyedObject("Browser", navigator.userAgent));
			return $ret;
		}());
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.PlatformInfo::GetSystemInformation()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsFileDownload()" />*/
	supportsFileDownload: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.PlatformInfo::SupportsFileDownload()" />*/
	,
	$type: new $.ig.Type('PlatformInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PlatformInfo" />*/

/*<BeginType Name="Infragistics.TouchPoints" />*/

$.ig.util.defType('TouchPoints', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_x: null,
	_y: null,
	$type: new $.ig.Type('TouchPoints', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TouchPoints" />*/

/*<BeginType Name="Infragistics.GoogleAnalyticsProperties" />*/

$.ig.util.defType('GoogleAnalyticsProperties', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_contentType: null,
	_contentLocation: null,
	$type: new $.ig.Type('GoogleAnalyticsProperties', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GoogleAnalyticsProperties" />*/

/*<BeginType Name="Infragistics.GoogleAnalyticsActivity" />*/

$.ig.util.defType('GoogleAnalyticsActivity', 'Object', {
	_googleAnalyticsLabel: null,
	_googleAnalyticsValue: $.ig.util.toNullable($.ig.Number.prototype.$type, null),
	_googleAnalyticsAction: null,
	init: function (label, value, action) {
		$.ig.Object.prototype.init.call(this);
		this._googleAnalyticsLabel = label;
		this._googleAnalyticsValue = value;
		this._googleAnalyticsAction = action;
	},
	$type: new $.ig.Type('GoogleAnalyticsActivity', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GoogleAnalyticsActivity" />*/

/*<BeginType Name="Infragistics.BackingStoreActivity" />*/

$.ig.util.defType('BackingStoreActivity', 'Object', {
	/*<BeginProperty Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::Empty()" />*/
	empty: function () {
		if ($.ig.BackingStoreActivity.prototype.__empty == null) {
			$.ig.BackingStoreActivity.prototype.__empty = new $.ig.BackingStoreActivity(0, null, null);
		}
		return $.ig.BackingStoreActivity.prototype.__empty;
	}
	/*<EndProperty Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::Empty()" />*/
	,
	_googleAnalyticsActivities: null,
	_localizationKey: null,
	_summaryLocalizationKey: null,
	_youSpecificLocalizationKey: null,
	_aboutYouSpecificTextLocalizationKey: null,
	_localizationParams: null,
	_notificationTemplateKey: null,
	_notificationItemID: null,
	_summary: null,
	_noficationTemplateMessageParameters: null,
	_activtyDateValue: 0,
	init: function (initNumber, analyticsLabel, locKey) {
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
		$.ig.Object.prototype.init.call(this);
		this.createAnalyticsLog(analyticsLabel, $.ig.util.toNullable($.ig.Number.prototype.$type, null));
		this._localizationKey = locKey;
	},
	init1: function (initNumber, analyticsLabel, locKey, param1) {
		$.ig.Object.prototype.init.call(this);
		this.createAnalyticsLog(analyticsLabel, $.ig.util.toNullable($.ig.Number.prototype.$type, null));
		this._localizationKey = locKey;
		this._localizationParams = new $.ig.Array();
		if (param1 != null) {
			this._localizationParams.add(param1);
		}
	},
	init2: function (initNumber, analyticsLabel, locKey, param1, param2) {
		$.ig.Object.prototype.init.call(this);
		this.createAnalyticsLog(analyticsLabel, $.ig.util.toNullable($.ig.Number.prototype.$type, null));
		this._localizationKey = locKey;
		this._localizationParams = new $.ig.Array();
		if (param1 != null) {
			this._localizationParams.add(param1);
			if (param2 != null) {
				this._localizationParams.add(param2);
			}
		}
	},
	init3: function (initNumber, analyticsAction, analyticsLabel, locKey, param1, param2) {
		$.ig.Object.prototype.init.call(this);
		this.createAnalyticsLog1(analyticsAction, analyticsLabel, $.ig.util.toNullable($.ig.Number.prototype.$type, null));
		this._localizationKey = locKey;
		this._localizationParams = new $.ig.Array();
		if (param1 != null) {
			this._localizationParams.add(param1);
			if (param2 != null) {
				this._localizationParams.add(param2);
			}
		}
	},
	/*<BeginMethod Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::CreateBackingStoreActivityForAnalytics(Infragistics.CPList, System.String, System.String, System.String)" />*/
	createBackingStoreActivityForAnalytics: function (activities, locKey, param1, param2) {
		var activity = new $.ig.BackingStoreActivity(0, null, locKey);
		activity._googleAnalyticsActivities = activities;
		if (param1 != null) {
			activity._localizationParams = new $.ig.Array();
			activity._localizationParams.add(param1);
			if (param2 != null) {
				activity._localizationParams.add(param2);
			}
		}
		return activity;
	}
	/*<EndMethod Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::CreateBackingStoreActivityForAnalytics(Infragistics.CPList, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BackingStoreActivity::CreateAnalyticsLog(System.String, System.Nullable)" />*/
	createAnalyticsLog: function (analyticsLabel, analyticsValue) {
		this.createAnalyticsLog1(null, analyticsLabel, analyticsValue);
	}
	/*<EndMethod Name="System.Void Infragistics.BackingStoreActivity::CreateAnalyticsLog(System.String, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BackingStoreActivity::CreateAnalyticsLog(System.String, System.String, System.Nullable)" />*/
	createAnalyticsLog1: function (analyticsAction, analyticsLabel, analyticsValue) {
		var log = new $.ig.GoogleAnalyticsActivity(analyticsLabel, analyticsValue, analyticsAction);
		this._googleAnalyticsActivities = new $.ig.Array();
		this._googleAnalyticsActivities.add(log);
	}
	/*<EndMethod Name="System.Void Infragistics.BackingStoreActivity::CreateAnalyticsLog(System.String, System.String, System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::AddNotificationTemplateInfo(Infragistics.BackingStoreActivity, System.String, Infragistics.CPJSONObject)" />*/
	addNotificationTemplateInfo: function (activity, templateKey, messageParams) {
		activity._notificationTemplateKey = templateKey;
		activity._noficationTemplateMessageParameters = messageParams;
		return activity;
	}
	/*<EndMethod Name="Infragistics.BackingStoreActivity Infragistics.BackingStoreActivity::AddNotificationTemplateInfo(Infragistics.BackingStoreActivity, System.String, Infragistics.CPJSONObject)" />*/
	,
	$type: new $.ig.Type('BackingStoreActivity', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BackingStoreActivity" />*/

/*<BeginType Name="Infragistics.CPJSONObject" />*/

$.ig.util.defType('CPJSONObject', 'Object', {
	__dictionary: null,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateFromString(System.String)" />*/
	createFromString: function (value) {
		if (value == null) {
			return null;
		}
		var jsonObj = $.ig.NativeJSONUtility.prototype.deserialize(value);
		if (jsonObj != null) {
			return new $.ig.CPJSONObject(0, jsonObj);
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateFromString(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateFromJSONObject(System.Object)" />*/
	createFromJSONObject: function (value) {
		return new $.ig.CPJSONObject(0, $.ig.NativeJSONUtility.prototype.convertJsonObjectToDictionary(value));
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateFromJSONObject(System.Object)" />*/
	,
	init: function (initNumber, jsonDictionary) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.setJSON(jsonDictionary);
	},
	/*<BeginMethod Name="System.Void Infragistics.CPJSONObject::SetJSON(System.JSDictionary)" />*/
	setJSON: function (jsonDictionary) {
		if (jsonDictionary != null) {
			this.__dictionary = jsonDictionary;
		} else {
			this.__dictionary = {};
		}
		this.jSONSet();
	}
	/*<EndMethod Name="System.Void Infragistics.CPJSONObject::SetJSON(System.JSDictionary)" />*/
	,
	init1: function (initNumber) {
		$.ig.Object.prototype.init.call(this);
		this.setJSON({});
	},
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateNew()" />*/
	createNew: function () {
		return new $.ig.CPJSONObject(1);
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CreateNew()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::Add(System.String, System.Object)" />*/
	add: function (key, val) {
		this.setValueForKey(key, val);
		return this;
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::Add(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CloneJSON()" />*/
	cloneJSON: function () {
		return $.ig.CPJSONObject.prototype.createFromString(this.convertToString());
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::CloneJSON()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CPJSONObject::GetKeys()" />*/
	getKeys: function () {
		return $.ig.NativeJSONUtility.prototype.getKeys(this.__dictionary);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CPJSONObject::GetKeys()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPJSONObject::JSONSet()" />*/
	jSONSet: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.CPJSONObject::JSONSet()" />*/
	,
	/*<BeginMethod Name="System.JSDictionary Infragistics.CPJSONObject::GetStoreJSON()" />*/
	getStoreJSON: function () {
		var json = {};
		json["store"] = this.__dictionary;
		return json;
	}
	/*<EndMethod Name="System.JSDictionary Infragistics.CPJSONObject::GetStoreJSON()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPJSONObject::SetValueForKey(System.String, System.Object)" />*/
	setValueForKey: function (key, value) {
		if (value != null && key != null) {
			this.__dictionary[key] = value;
		} else if (value == null) {
			this.removeForKey(key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPJSONObject::SetValueForKey(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPJSONObject::SetJSONForKey(System.String, Infragistics.CPJSONObject)" />*/
	setJSONForKey: function (key, json) {
		if (json != null && key != null) {
			this.__dictionary[key] = json.__dictionary;
		} else if (json == null) {
			this.removeForKey(key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPJSONObject::SetJSONForKey(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginProperty Name="System.JSDictionary Infragistics.CPJSONObject::JSONObject()" />*/
	jSONObject: function () {
		return this.__dictionary;
	}
	/*<EndProperty Name="System.JSDictionary Infragistics.CPJSONObject::JSONObject()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPJSONObject::RemoveForKey(System.String)" />*/
	removeForKey: function (key) {
		if (key != null && key.length > 0) {
			delete this.__dictionary[key];
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPJSONObject::RemoveForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPJSONObject::ConvertToString()" />*/
	convertToString: function () {
		return $.ig.NativeJSONUtility.prototype.serialize(this.__dictionary);
	}
	/*<EndMethod Name="System.String Infragistics.CPJSONObject::ConvertToString()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CPJSONObject::ResolveObjectForPath(Infragistics.CPList)" />*/
	resolveObjectForPath: function (keyPath) {
		var lookup = this.__dictionary;
		var value = lookup;
		var count = keyPath.length;
		for (var i = 0; i < count; i++) {
			var key = keyPath[i];
			if ($.ig.NativeJSONUtility.prototype.containsKey(lookup, key)) {
				value = lookup[key];
				if (!$.ig.NativeJSONUtility.prototype.isJSONNullValue(value)) {
					if (i < count - 1) {
						if (typeof value === 'string') {
							lookup = $.ig.NativeJSONUtility.prototype.deserialize(value);
						} else {
							lookup = $.ig.NativeJSONUtility.prototype.convertJsonObjectToDictionary(value);
						}
					}
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
		return $.ig.NativeJSONUtility.prototype.isJSONNullValue(value) ? null : value;
	}
	/*<EndMethod Name="System.Object Infragistics.CPJSONObject::ResolveObjectForPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CPJSONObject::ResolveObjectForKey(System.String)" />*/
	resolveObjectForKey: function (key) {
		if ($.ig.NativeJSONUtility.prototype.containsKey(this.__dictionary, key)) {
			var value = this.__dictionary[key];
			return $.ig.NativeJSONUtility.prototype.isJSONNullValue(value) ? null : value;
		}
		return null;
	}
	/*<EndMethod Name="System.Object Infragistics.CPJSONObject::ResolveObjectForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPJSONObject::ContainsKey(System.String)" />*/
	containsKey: function (key) {
		return $.ig.NativeJSONUtility.prototype.containsKey(this.__dictionary, key);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPJSONObject::ContainsKey(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CPJSONObject::ResolveListForKey(System.String)" />*/
	resolveListForKey: function (key) {
		var val = $.ig.NativeJSONUtility.prototype.convertJsonArrayToList(this.resolveObjectForKey(key));
		this.setValueForKey(key, val);
		return val;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CPJSONObject::ResolveListForKey(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CPJSONObject::ResolveListForKeyPath(Infragistics.CPList)" />*/
	resolveListForKeyPath: function (keyPath) {
		return $.ig.NativeJSONUtility.prototype.convertJsonArrayToList(this.resolveObjectForPath(keyPath));
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CPJSONObject::ResolveListForKeyPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::ResolveJSONForKey(System.String)" />*/
	resolveJSONForKey: function (key) {
		return new $.ig.CPJSONObject(0, $.ig.NativeJSONUtility.prototype.convertJsonObjectToDictionary(this.resolveObjectForKey(key)));
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPJSONObject::ResolveJSONForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPJSONObject::ResolveStringForKey(System.String)" />*/
	resolveStringForKey: function (key) {
		var obj = this.resolveObjectForKey(key);
		if (obj != null) {
			if (typeof obj === 'string') {
				return obj;
			}
			return $.ig.NativeStringUtility.prototype.toString1(obj);
		}
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.CPJSONObject::ResolveStringForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPJSONObject::ResolveStringForKeyPath(Infragistics.CPList)" />*/
	resolveStringForKeyPath: function (keyPath) {
		return this.resolveObjectForPath(keyPath);
	}
	/*<EndMethod Name="System.String Infragistics.CPJSONObject::ResolveStringForKeyPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.ColorInt Infragistics.CPJSONObject::ResolveColorIntForKey(System.String)" />*/
	resolveColorIntForKey: function (key) {
		var val = this.resolveObjectForKey(key);
		var convertedVal = this.convertToInt(val);
		return convertedVal;
	}
	/*<EndMethod Name="System.ColorInt Infragistics.CPJSONObject::ResolveColorIntForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPJSONObject::ResolveIntegerForKey(System.String)" />*/
	resolveIntegerForKey: function (key) {
		var val = this.resolveObjectForKey(key);
		var convertedVal = this.convertToInt(val);
		return convertedVal;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPJSONObject::ResolveIntegerForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPJSONObject::ResolveIntegerForKeyPath(Infragistics.CPList)" />*/
	resolveIntegerForKeyPath: function (keyPath) {
		var val = this.resolveObjectForPath(keyPath);
		var convertedVal = this.convertToInt(val);
		return convertedVal;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPJSONObject::ResolveIntegerForKeyPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongForKeyPath(Infragistics.CPList)" />*/
	resolveLongForKeyPath: function (keyPath) {
		var val = this.resolveObjectForPath(keyPath);
		if (val == null) {
			return 0;
		}
		return $.ig.util.getValue(val);
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongForKeyPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.UInt64 Infragistics.CPJSONObject::ResolveULongForKey(System.String)" />*/
	resolveULongForKey: function (key) {
		var val = this.resolveObjectForKey(key);
		if (val == null) {
			return 0;
		}
		return $.ig.util.getValue(val);
	}
	/*<EndMethod Name="System.UInt64 Infragistics.CPJSONObject::ResolveULongForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPJSONObject::ResolveDoubleForKey(System.String)" />*/
	resolveDoubleForKey: function (key) {
		var val = this.resolveObjectForKey(key);
		if (val == null) {
			return 0;
		}
		return val;
	}
	/*<EndMethod Name="System.Double Infragistics.CPJSONObject::ResolveDoubleForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPJSONObject::ResolveDoubleForKeyPath(Infragistics.CPList)" />*/
	resolveDoubleForKeyPath: function (keyPath) {
		var val = this.resolveObjectForPath(keyPath);
		if (val == null) {
			return 0;
		}
		return val;
	}
	/*<EndMethod Name="System.Double Infragistics.CPJSONObject::ResolveDoubleForKeyPath(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongFromObject(System.Object, System.Boolean)" />*/
	resolveLongFromObject: function (val, convertString) {
		if (val == null) {
			return 0;
		}
		if (typeof val === 'number') {
			return $.ig.util.getValue(val);
		}
		return $.ig.util.getValue(val);
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongFromObject(System.Object, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongForKey(System.String)" />*/
	resolveLongForKey: function (key) {
		var val = this.resolveObjectForKey(key);
		return $.ig.CPJSONObject.prototype.resolveLongFromObject(val, true);
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPJSONObject::ResolveLongForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPJSONObject::ResolveBoolForKey(System.String)" />*/
	resolveBoolForKey: function (key) {
		return this.resolveBoolForKey1(key, false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPJSONObject::ResolveBoolForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPJSONObject::ResolveBoolForKey(System.String, System.Boolean)" />*/
	resolveBoolForKey1: function (key, defaultValue) {
		var val = this.resolveObjectForKey(key);
		if (val == null) {
			return defaultValue;
		}
		return val;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPJSONObject::ResolveBoolForKey(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPJSONObject::ConvertToInt(System.Object)" />*/
	convertToInt: function (val) {
		if (val == null) {
			return 0;
		} else if (typeof val === 'string') {
			return $.ig.truncate($.ig.NativeStringUtility.prototype.convertToDouble(val));
		}
		return $.ig.util.getValue(val);
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPJSONObject::ConvertToInt(System.Object)" />*/
	,
	$type: new $.ig.Type('CPJSONObject', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPJSONObject" />*/

/*<BeginType Name="Infragistics.BackingStoreObjectBase" />*/

$.ig.util.defType('BackingStoreObjectBase', 'CPJSONObject', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.CPJSONObject.prototype.init1.call(this, 1);
	},
	init1: function (initNumber, json) {
		$.ig.CPJSONObject.prototype.init1.call(this, 1);
		if (json != null) {
			this.setJSON(json.jSONObject());
		}
	},
	__cacheStore: null,
	/*<BeginMethod Name="System.Void Infragistics.BackingStoreObjectBase::Cache(System.String, System.Object)" />*/
	cache: function (key, obj) {
		if (this.__cacheStore == null) {
			this.__cacheStore = new $.ig.Dictionary(0);
		}
		this.__cacheStore.item(key, obj);
	}
	/*<EndMethod Name="System.Void Infragistics.BackingStoreObjectBase::Cache(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.BackingStoreObjectBase::Uncache(System.String)" />*/
	uncache: function (key) {
		if (this.__cacheStore != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__cacheStore, key)) {
			return this.__cacheStore.item(key);
		}
		return null;
	}
	/*<EndMethod Name="System.Object Infragistics.BackingStoreObjectBase::Uncache(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BackingStoreObjectBase::SetValueForKey(System.String, System.Object)" />*/
	setValueForKey: function (key, value) {
		if (this.__cacheStore != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__cacheStore, key)) {
			$.ig.NativeDictionaryUtility.prototype.removeValue(this.__cacheStore, key);
		}
		$.ig.CPJSONObject.prototype.setValueForKey.call(this, key, value);
	}
	/*<EndMethod Name="System.Void Infragistics.BackingStoreObjectBase::SetValueForKey(System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('BackingStoreObjectBase', $.ig.CPJSONObject.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BackingStoreObjectBase" />*/

/*<BeginType Name="Infragistics.ActivityTrackingBackingStore" />*/

$.ig.util.defType('ActivityTrackingBackingStore', 'BackingStoreObjectBase', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.BackingStoreObjectBase.prototype.init.call(this, 0);
	},
	init1: function (initNumber, json) {
		$.ig.BackingStoreObjectBase.prototype.init1.call(this, 1, json);
	},
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::IdentifierKey()" />*/
	identifierKey: function () {
		return $.ig.ActivityTrackingBackingStore.prototype.iDKey;
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::IdentifierKey()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::AutoGenerateIdentifierIfNull()" />*/
	autoGenerateIdentifierIfNull: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::AutoGenerateIdentifierIfNull()" />*/
	,
	_silentlyUpdateItem: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::SilentlyUpdateItem()" />*/
	silentlyUpdateItem: function (value) {
		if (arguments.length === 1) {
			this._silentlyUpdateItem = value;
			return value;
		} else {
			return this._silentlyUpdateItem;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::SilentlyUpdateItem()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ActivityTrackingBackingStore::ResolveKind()" />*/
	resolveKind: function () {
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.ActivityTrackingBackingStore::ResolveKind()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::Identifier()" />*/
	identifier: function (value) {
		if (arguments.length === 1) {
			this.setValueForKey(this.identifierKey(), value);
			this.identifierChanged();
			return value;
		} else {
			var val = this.resolveStringForKey(this.identifierKey());
			if (val == null && this.autoGenerateIdentifierIfNull()) {
				val = $.ig.NativeStringUtility.prototype.generateUID();
				this.identifier(val);
			}
			return val;
		}
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::Identifier()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CanBeUpdatedPartially()" />*/
	canBeUpdatedPartially: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CanBeUpdatedPartially()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PartialPropertyUpdating(System.String, Infragistics.CPJSONObject)" />*/
	partialPropertyUpdating: function (key, json) {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PartialPropertyUpdating(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::UpdatePartial(Infragistics.CPJSONObject)" />*/
	updatePartial: function (json) {
		var keys = json.getKeys();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			this.partialPropertyUpdating(key, json);
			if (this.collectionPropertyNames().contains(key)) {
				var partialList = json.resolveListForKey(key);
				for (var j = 0; j < partialList.length; j++) {
					var childJson = $.ig.CPJSONObject.prototype.createFromJSONObject(partialList[j]);
					var childId = childJson.resolveStringForKey($.ig.ActivityTrackingBackingStore.prototype.iDKey);
					if (childId != null) {
						if ($.ig.NativeStringUtility.prototype.startsWith(childId, $.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX)) {
							var child = this.resolveChildListItembyId(key, $.ig.NativeStringUtility.prototype.replace(childId, $.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX, ""));
							if (child != null) {
								this.removeChildItemForProperty(key, child, false, null);
								child.unload();
							}
						} else {
							var child1 = this.resolveChildListItembyId(key, childId);
							if (child1 != null) {
								child1.updatePartial(childJson);
							} else {
								child1 = this.createChildItemForProperty(key, childJson);
								if (child1 != null) {
									this.addChildItemForProperty(key, child1, false, null);
								}
							}
							if (child1 != null) {
								var next = child1.nextItemId();
								if (next != null) {
									if (next != $.ig.ActivityTrackingBackingStore.prototype.lASTLINK_ID) {
										this.removeChildItemForProperty(key, child1, false, null);
										var siblingIds = this.resolveChildListIds(key);
										for (var k = 0; k < siblingIds.length; k++) {
											var siblingId = siblingIds[k];
											if (siblingId == next) {
												this.insertChildItemForProperty(key, child1, k, false, null);
												break;
											}
										}
									} else {
										this.removeChildItemForProperty(key, child1, false, null);
										var siblingIds1 = this.resolveChildListIds(key);
										this.insertChildItemForProperty(key, child1, siblingIds1.length, false, null);
									}
									child1.removeForKey($.ig.ActivityTrackingBackingStore.prototype.nEXTLINK_ID);
								}
							}
						}
					}
				}
			} else if (this.__childInfo != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__childInfo, key)) {
				var child2 = this.__childInfo.item(key);
				child2.updatePartial(json.resolveJSONForKey(key));
			} else {
				this.removeCachedVersion(key);
				this.replaceProperty(key, json);
			}
		}
		this.finishedUpdatingPartialForKeys(keys);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::UpdatePartial(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::FinishedUpdatingPartialForKeys(Infragistics.CPList)" />*/
	finishedUpdatingPartialForKeys: function (keys) {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::FinishedUpdatingPartialForKeys(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ReplaceProperty(System.String, Infragistics.CPJSONObject)" />*/
	replaceProperty: function (propertyName, json) {
		var obj = json.resolveObjectForKey(propertyName);
		this.setValueForKey(propertyName, obj);
		if (propertyName != this.identifierKey() && propertyName != this.nameKey()) {
			if (this.__childInfoPendingPartialUpdates == null) {
				this.__childInfoPendingPartialUpdates = new $.ig.Dictionary(0);
			}
			if (!$.ig.NativeDictionaryUtility.prototype.containsKey(this.__childInfoPendingPartialUpdates, propertyName)) {
				this.__childInfoPendingPartialUpdates.item(propertyName, new $.ig.Array());
			}
			var list = this.__childInfoPendingPartialUpdates.item(propertyName);
			list.add(obj);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ReplaceProperty(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveCachedVersion(System.String)" />*/
	removeCachedVersion: function (propName) {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveCachedVersion(System.String)" />*/
	,
	__collectionPropertyNames: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::CollectionPropertyNames()" />*/
	collectionPropertyNames: function () {
		if (this.__collectionPropertyNames == null) {
			this.__collectionPropertyNames = this.registerCollectionProperties();
		}
		return this.__collectionPropertyNames;
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::CollectionPropertyNames()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::RegisterCollectionProperties()" />*/
	registerCollectionProperties: function () {
		return new $.ig.Array();
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::RegisterCollectionProperties()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsCollectionProperty(System.String)" />*/
	isCollectionProperty: function (propName) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsCollectionProperty(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ActivityTrackingBackingStore::GetJSONStringExcludingId()" />*/
	getJSONStringExcludingId: function () {
		var docId = this.identifier();
		this.removeForKey(this.identifierKey());
		var val = this.convertToString();
		this.setValueForKey(this.identifierKey(), docId);
		return val;
	}
	/*<EndMethod Name="System.String Infragistics.ActivityTrackingBackingStore::GetJSONStringExcludingId()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::NameKey()" />*/
	nameKey: function () {
		return $.ig.ActivityTrackingBackingStore.prototype.defaultNameKey;
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::NameKey()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::DefaultName()" />*/
	defaultName: function () {
		return this.resolveStringForKey(this.nameKey());
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::DefaultName()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			var originalBackup = this.originalBackup();
			var oldValue = originalBackup != null ? originalBackup.resolveStringForKey(this.nameKey()) : this.name();
			this.setStringProperty(this.nameKey(), value, this.resolveNameChangedActivity(oldValue, value));
			return value;
		} else {
			var name = this.resolveStringForKey(this.nameKey());
			if (name == null || name.length == 0) {
				return this.defaultName();
			}
			return name;
		}
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::Name()" />*/
	,
	/*<BeginProperty Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::OriginalBackup()" />*/
	originalBackup: function () {
		this.ensureBackup();
		return this.__originalBackup;
	}
	/*<EndProperty Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::OriginalBackup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetNameQuietly(System.String)" />*/
	setNameQuietly: function (name) {
		this.setValueForKey(this.nameKey(), name);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetNameQuietly(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.BackingStoreActivity Infragistics.ActivityTrackingBackingStore::ResolveNameChangedActivity(System.String, System.String)" />*/
	resolveNameChangedActivity: function (oldValue, newValue) {
		return null;
	}
	/*<EndMethod Name="Infragistics.BackingStoreActivity Infragistics.ActivityTrackingBackingStore::ResolveNameChangedActivity(System.String, System.String)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::HasName()" />*/
	hasName: function () {
		var name = this.resolveStringForKey(this.nameKey());
		return (name != null && name.length > 0);
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::HasName()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::IdentifierChanged()" />*/
	identifierChanged: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::IdentifierChanged()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.ActivityTrackingBackingStore::NextItemId()" />*/
	nextItemId: function (value) {
		if (arguments.length === 1) {
			this.setStringProperty($.ig.ActivityTrackingBackingStore.prototype.nEXTLINK_ID, value, null);
			return value;
		} else {
			return this.resolveStringForKey($.ig.ActivityTrackingBackingStore.prototype.nEXTLINK_ID);
		}
	}
	/*<EndProperty Name="System.String Infragistics.ActivityTrackingBackingStore::NextItemId()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetNextItemIdDirectly(System.String)" />*/
	setNextItemIdDirectly: function (value) {
		this.setValueForKey($.ig.ActivityTrackingBackingStore.prototype.nEXTLINK_ID, value);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetNextItemIdDirectly(System.String)" />*/
	,
	_index: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ActivityTrackingBackingStore::Index()" />*/
	index: function (value) {
		if (arguments.length === 1) {
			this._index = value;
			return value;
		} else {
			return this._index;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ActivityTrackingBackingStore::Index()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateNewBackingStoreObject(Infragistics.CPJSONObject)" />*/
	createNewBackingStoreObject: function (json) {
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateNewBackingStoreObject(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateNewBackingStoreObjectWithId(System.String)" />*/
	createNewBackingStoreObjectWithId: function (identifier) {
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateNewBackingStoreObjectWithId(System.String)" />*/
	,
	__ledger: null,
	__originalBackup: null,
	__partialDocumentToUpdate: null,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::EnsureBackup()" />*/
	ensureBackup: function () {
		if (this.__originalBackup == null && this.allowTracking()) {
			this.__ledger = new $.ig.Dictionary(0);
			this.__originalBackup = this.createNewBackingStoreObject($.ig.CPJSONObject.prototype.createFromString(this.convertToString()));
			this.__originalBackup.__isBackup = true;
			this.__partialDocumentToUpdate = this.createNewBackingStoreObjectWithId(this.identifier());
			this.__partialDocumentToUpdate.isPartialDoc(true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::EnsureBackup()" />*/
	,
	__isBackup: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsBackup()" />*/
	isBackup: function () {
		return this.__isBackup;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsBackup()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::TransferLedgerFrom(Infragistics.ActivityTrackingBackingStore)" />*/
	transferLedgerFrom: function (fromObj) {
		this.ensureBackup();
		this.__ledger = fromObj.__ledger;
		this.__partialDocumentToUpdate = fromObj.__partialDocumentToUpdate;
		var keys = this.__partialDocumentToUpdate.getKeys();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (this.collectionPropertyNames().contains(key)) {
				var partialList = this.__partialDocumentToUpdate.resolveListForKey(key);
				for (var j = 0; j < partialList.length; j++) {
					var childJson = $.ig.CPJSONObject.prototype.createFromJSONObject(partialList[j]);
					var childId = childJson.resolveStringForKey($.ig.ActivityTrackingBackingStore.prototype.iDKey);
					if (childId != null) {
						if ($.ig.NativeStringUtility.prototype.startsWith(childId, $.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX)) {
							var child = this.resolveChildListItembyId(key, $.ig.NativeStringUtility.prototype.replace(childId, $.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX, ""));
							if (child != null) {
								this.removeChildItemForProperty(key, child, true, null);
							}
						} else {
							var child1 = this.__partialDocumentToUpdate.resolveChildListItembyId(key, childId);
							if (child1 != null) {
								this.addChildItemForProperty(key, child1, true, null);
							}
						}
					}
				}
			} else {
				this.setValueForKey(key, this.__partialDocumentToUpdate.resolveObjectForKey(key));
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::TransferLedgerFrom(Infragistics.ActivityTrackingBackingStore)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ClearDirtyState()" />*/
	clearDirtyState: function () {
		this.__ledger = null;
		this.__originalBackup = null;
		this.__partialDocumentToUpdate = null;
		if (this.__childCollectionInfo != null) {
			var properties = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
			for (var p = 0; p < properties.length; p++) {
				var property = properties[p];
				var markedForDeletion = this.resolveChildMarkedForDeletionLookup(property);
				if (markedForDeletion != null) {
					var markedForDeletionItems = $.ig.NativeDictionaryUtility.prototype.getKeys(markedForDeletion);
					for (var i = 0; i < markedForDeletionItems.length; i++) {
						var key = markedForDeletionItems[i];
						var child = markedForDeletion.item(key);
						child.unload();
					}
				}
				var childItemids = this.resolveChildListIds(property);
				for (var c = 0; c < childItemids.length; c++) {
					var childId = childItemids[c];
					var child1 = this.resolveChildListItembyId1(property, childId, true);
					if (child1 != null) {
						child1.clearDirtyState();
					}
				}
			}
		}
		if (this.__childInfo != null) {
			var properties1 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childInfo);
			for (var p1 = 0; p1 < properties1.length; p1++) {
				var property1 = properties1[p1];
				var child2 = this.__childInfo.item(property1);
				if (child2 != null) {
					child2.clearDirtyState();
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ClearDirtyState()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::FinishCleanup()" />*/
	finishCleanup: function () {
		if (this.__childCollectionInfo != null) {
			var properties = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
			for (var p = 0; p < properties.length; p++) {
				var property = properties[p];
				var markedForDeletion = this.resolveChildMarkedForDeletionLookup(property);
				if (markedForDeletion != null) {
					markedForDeletion.clear();
				}
				var childItemids = this.resolveChildListIds(property);
				for (var c = 0; c < childItemids.length; c++) {
					var childId = childItemids[c];
					var child = this.resolveChildListItembyId1(property, childId, true);
					if (child != null) {
						child.finishCleanup();
					}
				}
			}
		}
		if (this.__childInfo != null) {
			var properties1 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childInfo);
			for (var p1 = 0; p1 < properties1.length; p1++) {
				var property1 = properties1[p1];
				var child1 = this.__childInfo.item(property1);
				if (child1 != null) {
					child1.finishCleanup();
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::FinishCleanup()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsDirty()" />*/
	isDirty: function () {
		return this.__ledger != null && this.__ledger.count() > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsDirty()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveDocumentWithChanges()" />*/
	resolveDocumentWithChanges: function () {
		return this.resolveDocumentWithChanges1(false);
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveDocumentWithChanges()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveDocumentWithChanges(System.Boolean)" />*/
	resolveDocumentWithChanges1: function (clonePartialDocument) {
		var root = this.partialDocument();
		if (clonePartialDocument) {
			root = this.createNewBackingStoreObject(root.cloneJSON());
		}
		this.updateMetaDataIfNeeded(false);
		var hasChanges = this.isDirty();
		var activityList = null;
		if (root != null) {
			if (hasChanges) {
				this.prepareDocumentWithChanges();
			}
			activityList = new $.ig.Array();
			if (this.__ledger != null) {
				var properties = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__ledger);
				for (var i = 0; i < properties.length; i++) {
					var property = properties[i];
					var activity = this.__ledger.item(property);
					activityList.add(activity);
				}
			}
			if (this.__childCollectionInfo != null) {
				var properties1 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
				for (var p = 0; p < properties1.length; p++) {
					var property1 = properties1[p];
					if (this.collectionSupportsPartialUpdates(property1)) {
						var childItemids = this.resolveChildListIds(property1);
						for (var c = 0; c < childItemids.length; c++) {
							var childId = childItemids[c];
							var newChild = root.resolveChildListItembyId1(property1, childId, true);
							if (newChild == null) {
								var child = this.resolveChildListItembyId1(property1, childId, true);
								if (child != null) {
									var childPartial = child.resolveDocumentWithChanges();
									if (childPartial != null) {
										hasChanges = true;
										root.addChildItemForProperty(property1, childPartial, false, null);
										$.ig.ArrayUtility.prototype.addToCPReadOnlyList(activityList, childPartial.activityList());
									}
								}
							} else {
								newChild.prepareDocumentToBeAdded();
							}
						}
					}
				}
			}
			if (this.__childInfo != null) {
				var properties2 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childInfo);
				for (var p1 = 0; p1 < properties2.length; p1++) {
					var property2 = properties2[p1];
					var child1 = this.__childInfo.item(property2);
					if (child1 != null) {
						var childPartial1 = child1.resolveDocumentWithChanges();
						if (childPartial1 != null) {
							hasChanges = true;
							root.setValueForKey(property2, childPartial1.jSONObject());
							$.ig.ArrayUtility.prototype.addToCPReadOnlyList(activityList, childPartial1.activityList());
						}
					}
				}
			}
		}
		if (hasChanges) {
			root.__activityList = activityList;
			return root;
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveDocumentWithChanges(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PrepareDocumentToBeAdded()" />*/
	prepareDocumentToBeAdded: function () {
		this.updateMetaDataIfNeeded(true);
		this.prepareDocumentWithChanges();
		if (this.__childCollectionInfo != null) {
			var properties = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
			for (var p = 0; p < properties.length; p++) {
				var property = properties[p];
				if (this.collectionSupportsPartialUpdates(property)) {
					var childItemids = this.resolveChildListIds(property);
					for (var c = 0; c < childItemids.length; c++) {
						var childId = childItemids[c];
						var child = this.resolveChildListItembyId1(property, childId, true);
						if (child != null) {
							child.prepareDocumentToBeAdded();
						}
					}
				}
			}
		}
		if (this.__childInfo != null) {
			var properties1 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childInfo);
			for (var p1 = 0; p1 < properties1.length; p1++) {
				var property1 = properties1[p1];
				var child1 = this.__childInfo.item(property1);
				if (child1 != null) {
					child1.prepareDocumentToBeAdded();
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PrepareDocumentToBeAdded()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::UpdateMetaDataIfNeeded(System.Boolean)" />*/
	updateMetaDataIfNeeded: function (isNew) {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::UpdateMetaDataIfNeeded(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PrepareDocumentWithChanges()" />*/
	prepareDocumentWithChanges: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::PrepareDocumentWithChanges()" />*/
	,
	__activityList: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ActivityList()" />*/
	activityList: function () {
		return this.__activityList;
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ActivityList()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CloneObject(System.Boolean)" />*/
	cloneObject: function (newIds) {
		return this.cloneObject1(newIds, null);
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CloneObject(System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CloneObject(System.Boolean, System.String)" />*/
	cloneObject1: function (newIds, startingNewId) {
		var clone = this.createNewBackingStoreObject(this.cloneJSON());
		if (newIds) {
			if (startingNewId != null) {
				clone.identifier(startingNewId);
			} else {
				clone.identifier($.ig.NativeStringUtility.prototype.generateUID());
			}
			if (this.__childCollectionInfo != null) {
				var properties = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
				for (var p = 0; p < properties.length; p++) {
					var property = properties[p];
					clone.clearAllChildrenQuietly(property);
					var childItemids = this.resolveChildListIds(property);
					for (var c = 0; c < childItemids.length; c++) {
						var childId = childItemids[c];
						var child = this.resolveChildListItembyId1(property, childId, true);
						clone.addChildItemForProperty(property, child.cloneObject(true), false, null);
					}
				}
			}
			if (this.__childInfo != null) {
				var properties1 = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childInfo);
				for (var p1 = 0; p1 < properties1.length; p1++) {
					var property1 = properties1[p1];
					var child1 = this.__childInfo.item(property1);
					clone.setValueForKey(property1, child1.cloneObject(true).jSONObject());
				}
			}
		}
		return clone;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CloneObject(System.Boolean, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ClearAllChildrenQuietly(System.String)" />*/
	clearAllChildrenQuietly: function (property) {
		var lookup = this.resolveChildListLookup(property);
		var list = this.resolveChildListIds(property);
		lookup.clear();
		list.clear();
		this.refreshChildListForProperty(property);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ClearAllChildrenQuietly(System.String)" />*/
	,
	/*<BeginProperty Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::PartialDocument()" />*/
	partialDocument: function () {
		if (this.allowTracking()) {
			this.ensureBackup();
			return this.__partialDocumentToUpdate;
		}
		return null;
	}
	/*<EndProperty Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::PartialDocument()" />*/
	,
	_isPartialDoc: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsPartialDoc()" />*/
	isPartialDoc: function (value) {
		if (arguments.length === 1) {
			this._isPartialDoc = value;
			return value;
		} else {
			return this._isPartialDoc;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsPartialDoc()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::AllowTracking()" />*/
	allowTracking: function () {
		return !this.isPartialDoc() && this.canTrack();
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::AllowTracking()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CanTrack()" />*/
	canTrack: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CanTrack()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveFromLedger(System.String)" />*/
	removeFromLedger: function (property) {
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(this.__ledger, property)) {
			$.ig.NativeDictionaryUtility.prototype.removeValue(this.__ledger, property);
			this.__partialDocumentToUpdate.removeForKey(property);
		}
		this.setValueForKey(property, this.__originalBackup.resolveObjectForKey(property));
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveFromLedger(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddToLedger(System.String, System.Object, Infragistics.BackingStoreActivity)" />*/
	addToLedger1: function (property, value, activity) {
		if (activity == null) {
			activity = $.ig.BackingStoreActivity.prototype.empty();
		}
		this.__ledger.item(property, activity);
		if (value != null) {
			this.setValueForKey(property, value);
			this.__partialDocumentToUpdate.setValueForKey(property, value);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddToLedger(System.String, System.Object, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddToLedger(System.String, Infragistics.BackingStoreActivity)" />*/
	addToLedger: function (property, activity) {
		this.ensureBackup();
		this.addToLedger1(property, null, activity);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddToLedger(System.String, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetStringProperty(System.String, System.String, Infragistics.BackingStoreActivity)" />*/
	setStringProperty: function (property, newValue, activity) {
		if (this.allowTracking()) {
			this.ensureBackup();
			var original = this.__originalBackup.resolveStringForKey(property);
			if ($.ig.CPStringUtility.prototype.areStringsEqual(original, newValue)) {
				this.removeFromLedger(property);
			} else {
				this.addToLedger1(property, newValue, activity);
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetStringProperty(System.String, System.String, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetBoolProperty(System.String, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	setBoolProperty: function (property, newValue, activity) {
		if (this.allowTracking()) {
			this.ensureBackup();
			if (this.__originalBackup.containsKey(property) && this.__originalBackup.resolveBoolForKey(property) == newValue) {
				this.removeFromLedger(property);
			} else {
				this.addToLedger1(property, newValue, activity);
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetBoolProperty(System.String, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetColorIntProperty(System.String, System.ColorInt, Infragistics.BackingStoreActivity)" />*/
	setColorIntProperty: function (property, newValue, activity) {
		if (this.allowTracking()) {
			this.ensureBackup();
			if (this.__originalBackup.containsKey(property) && this.__originalBackup.resolveColorIntForKey(property) == newValue) {
				this.removeFromLedger(property);
			} else {
				this.addToLedger1(property, newValue, activity);
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetColorIntProperty(System.String, System.ColorInt, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetLongProperty(System.String, System.Int64, Infragistics.BackingStoreActivity)" />*/
	setLongProperty: function (property, newValue, activity) {
		if (this.allowTracking()) {
			this.ensureBackup();
			if (this.__originalBackup.containsKey(property) && this.__originalBackup.resolveLongForKey(property) == newValue) {
				this.removeFromLedger(property);
			} else {
				this.addToLedger1(property, newValue, activity);
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetLongProperty(System.String, System.Int64, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetIntProperty(System.String, System.Int32, Infragistics.BackingStoreActivity)" />*/
	setIntProperty: function (property, newValue, activity) {
		if (this.allowTracking()) {
			this.ensureBackup();
			if (this.__originalBackup.containsKey(property) && this.__originalBackup.resolveIntegerForKey(property) == newValue) {
				this.removeFromLedger(property);
			} else {
				this.addToLedger1(property, newValue, activity);
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetIntProperty(System.String, System.Int32, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListOfStringsProperty(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity)" />*/
	setListOfStringsProperty: function (property, newValue, activity) {
		this.setListPropertyHelper(property, newValue, activity, "string");
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListOfStringsProperty(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CompareListHelper(Infragistics.CPList, Infragistics.CPList, System.String)" />*/
	compareListHelper: function (oldList, newList, type) {
		if ($.ig.CPStringUtility.prototype.areStringsEqual(type, "string")) {
			return $.ig.ArrayUtility.prototype.compareListOfStrings(oldList, newList);
		} else if ($.ig.CPStringUtility.prototype.areStringsEqual(type, "long")) {
			return $.ig.ArrayUtility.prototype.compareListOfLongs(oldList, newList);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CompareListHelper(Infragistics.CPList, Infragistics.CPList, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListOfLongsProperty(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity)" />*/
	setListOfLongsProperty: function (property, newValue, activity) {
		this.setListPropertyHelper(property, newValue, activity, "long");
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListOfLongsProperty(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListPropertyHelper(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity, System.String)" />*/
	setListPropertyHelper: function (property, newValue, activity, type) {
		if (this.allowTracking()) {
			this.ensureBackup();
			var original = null;
			if (this.__originalBackup.containsKey(property)) {
				original = this.__originalBackup.resolveListForKey(property);
			}
			var remove = $.ig.ActivityTrackingBackingStore.prototype.compareListHelper(original, newValue, type);
			if (remove) {
				this.removeFromLedger(property);
			} else {
				if (newValue.length == 0) {
					this.addToLedger1($.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX + property, "", activity);
					this.setValueForKey(property, newValue);
				} else {
					this.addToLedger1(property, newValue, activity);
				}
			}
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetListPropertyHelper(System.String, Infragistics.CPList, Infragistics.BackingStoreActivity, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetObjectProperty(System.String, System.Object)" />*/
	setObjectProperty: function (property, newValue) {
		if (this.allowTracking()) {
			this.ensureBackup();
			this.addToLedger1(property, newValue, null);
		} else {
			this.setValueForKey(property, newValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SetObjectProperty(System.String, System.Object)" />*/
	,
	__childInfo: null,
	__childInfoPendingPartialUpdates: null,
	/*<BeginMethod Name="System.Object Infragistics.ActivityTrackingBackingStore::ResolveObjectForKey(System.String)" />*/
	resolveObjectForKey: function (key) {
		if (this.__childInfoPendingPartialUpdates != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__childInfoPendingPartialUpdates, key)) {
			$.ig.NativeDictionaryUtility.prototype.removeValue(this.__childInfoPendingPartialUpdates, key);
			if (this.__childInfoPendingPartialUpdates.count() == 0) {
				this.__childInfoPendingPartialUpdates = null;
			}
		}
		return $.ig.BackingStoreObjectBase.prototype.resolveObjectForKey.call(this, key);
	}
	/*<EndMethod Name="System.Object Infragistics.ActivityTrackingBackingStore::ResolveObjectForKey(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.ActivityTrackingBackingStore::ResolveJSONForKey(System.String)" />*/
	resolveJSONForKey: function (key) {
		return $.ig.BackingStoreObjectBase.prototype.resolveJSONForKey.call(this, key);
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.ActivityTrackingBackingStore::ResolveJSONForKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ResolveChildTrackingObject(System.String, Infragistics.ActivityTrackingBackingStore)" />*/
	resolveChildTrackingObject1: function (property, child) {
		if (this.__childInfo == null) {
			this.__childInfo = new $.ig.Dictionary(0);
		}
		var updates = null;
		if (this.__childInfoPendingPartialUpdates != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__childInfoPendingPartialUpdates, property)) {
			updates = this.__childInfoPendingPartialUpdates.item(property);
		}
		child.setJSON(this.resolveJSONForKey(property).jSONObject());
		if (updates != null) {
			for (var i = 0; i < updates.length; i++) {
				child.updatePartial($.ig.CPJSONObject.prototype.createFromJSONObject(updates[i]));
			}
		}
		this.__childInfo.item(property, child);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ResolveChildTrackingObject(System.String, Infragistics.ActivityTrackingBackingStore)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildTrackingObject(System.String)" />*/
	resolveChildTrackingObject: function (property) {
		if (this.__childInfo != null && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__childInfo, property)) {
			return this.__childInfo.item(property);
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildTrackingObject(System.String)" />*/
	,
	__childCollectionInfo: null,
	/*<BeginProperty Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ChildCollections()" />*/
	childCollections: function () {
		return this.__childCollectionInfo;
	}
	/*<EndProperty Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ChildCollections()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateChildItemForProperty(System.String, Infragistics.CPJSONObject)" />*/
	createChildItemForProperty: function (property, store) {
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateChildItemForProperty(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ResolveChildListIds(System.String)" />*/
	resolveChildListIds: function (property) {
		return this.resolveCollectionInfo(property).item("ids");
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ResolveChildListIds(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ResolveChildList(System.String)" />*/
	resolveChildList: function (property) {
		var list = new $.ig.Array();
		var ids = this.resolveChildListIds(property);
		for (var i = 0; i < ids.length; i++) {
			var child = this.resolveChildListItembyId(property, ids[i]);
			list.add(child);
		}
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::ResolveChildList(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveChildListLookup(System.String)" />*/
	resolveChildListLookup: function (property) {
		return this.resolveCollectionInfo(property).item("lookup");
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveChildListLookup(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveChildMarkedForDeletionLookup(System.String)" />*/
	resolveChildMarkedForDeletionLookup: function (property) {
		return this.resolveCollectionInfo(property).item("md");
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveChildMarkedForDeletionLookup(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddCustomChildDataToCustomList(System.String, System.String, System.Object)" />*/
	addCustomChildDataToCustomList: function (property, customListProperty, value) {
		if (value != null) {
			this.getCustomListProperty(property, customListProperty).add(value);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddCustomChildDataToCustomList(System.String, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::GetCustomListProperty(System.String, System.String)" />*/
	getCustomListProperty: function (property, customListProperty) {
		return this.getCustomListProperty1(property, customListProperty, false);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::GetCustomListProperty(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::GetCustomListProperty(System.String, System.String, System.Boolean)" />*/
	getCustomListProperty1: function (property, customListProperty, reset) {
		var collectionInfo = this.resolveCollectionInfo(property);
		var list = null;
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(collectionInfo, customListProperty)) {
			if (reset) {
				list = new $.ig.Array();
				collectionInfo.item(customListProperty, list);
			} else {
				list = collectionInfo.item(customListProperty);
			}
		} else {
			list = new $.ig.Array();
			collectionInfo.item(customListProperty, list);
			var customListProperties = new $.ig.Array();
			customListProperties.add(customListProperty);
			collectionInfo.item("clp", customListProperties);
		}
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ActivityTrackingBackingStore::GetCustomListProperty(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildListItembyId(System.String, System.String)" />*/
	resolveChildListItembyId: function (property, itemId) {
		return this.resolveChildListItembyId1(property, itemId, false);
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildListItembyId(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildListItembyId(System.String, System.String, System.Boolean)" />*/
	resolveChildListItembyId1: function (property, itemId, supportsSimple) {
		var lookup = this.resolveChildListLookup(property);
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(lookup, itemId)) {
			var item = lookup.item(itemId);
			if (!supportsSimple && item.isSimpleObj()) {
				return null;
			}
			return item;
		}
		var markedForDeletion = this.resolveChildMarkedForDeletionLookup(property);
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(markedForDeletion, itemId)) {
			return markedForDeletion.item(itemId);
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::ResolveChildListItembyId(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveCollectionInfo(System.String)" />*/
	resolveCollectionInfo: function (property) {
		this.ensureChildCollection(property);
		return this.__childCollectionInfo.item(property);
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.ActivityTrackingBackingStore::ResolveCollectionInfo(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CollectionSupportsPartialUpdates(System.String)" />*/
	collectionSupportsPartialUpdates: function (property) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::CollectionSupportsPartialUpdates(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::EnsureChildCollection(System.String)" />*/
	ensureChildCollection: function (property) {
		if (this.__childCollectionInfo == null) {
			this.__childCollectionInfo = new $.ig.Dictionary(0);
		}
		if (!$.ig.NativeDictionaryUtility.prototype.containsKey(this.__childCollectionInfo, property)) {
			var collectionInfo = new $.ig.Dictionary(0);
			this.__childCollectionInfo.item(property, collectionInfo);
			var collectionIds = new $.ig.Array();
			var collectionLookup = new $.ig.Dictionary(0);
			collectionInfo.item("ids", collectionIds);
			collectionInfo.item("lookup", collectionLookup);
			collectionInfo.item("md", new $.ig.Dictionary(0));
			if (this.containsKey(property)) {
				var entries = this.resolveListForKey(property);
				var count = entries.length;
				var index = 0;
				for (var i = 0; i < count; i++) {
					var store = $.ig.CPJSONObject.prototype.createFromJSONObject(entries[i]);
					var item = this.createChildItemForProperty(property, store);
					if (item != null) {
						var itemId = item.identifier();
						if (itemId != null) {
							collectionIds.add(itemId);
							collectionLookup.item(itemId, item);
							item.index(index);
							this.childItemAdded(property, item);
							index++;
						}
					}
				}
			}
			if (collectionIds.length == 0) {
				var item1 = this.createDefaultChildItemForProperty(property);
				if (item1 != null) {
					this.addChildItemForProperty(property, item1, true, null);
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::EnsureChildCollection(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateDefaultChildItemForProperty(System.String)" />*/
	createDefaultChildItemForProperty: function (property) {
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.ActivityTrackingBackingStore::CreateDefaultChildItemForProperty(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ChildItemAdded(System.String, Infragistics.ActivityTrackingBackingStore)" />*/
	childItemAdded: function (property, item) {
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::ChildItemAdded(System.String, Infragistics.ActivityTrackingBackingStore)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	addChildItemForProperty: function (property, item, track, activity) {
		this.insertChildItemForProperty(property, item, -1, track, activity);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::AddChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::InsertChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Int32, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	insertChildItemForProperty: function (property, item, index, track, activity) {
		if (item.identifier() == null) {
			item.identifier($.ig.NativeStringUtility.prototype.generateUID());
		}
		var itemId = item.identifier();
		var lookup = this.resolveChildListLookup(property);
		var list = this.resolveChildListIds(property);
		if (!list.contains(itemId)) {
			var isAdd = false;
			if (index < 0) {
				isAdd = true;
				index = list.length;
			}
			lookup.item(itemId, item);
			list.insert(index, itemId);
			if (track && this.allowTracking()) {
				var partialDoc = this.partialDocument();
				partialDoc.addChildItemForProperty(property, item, false, null);
				if (!isAdd) {
					item.nextItemId(this.getNextChildItemLinkIdForIndex(property, index));
				}
				var ledgerId = property + item.identifier();
				this.addToLedger(ledgerId, activity);
			}
		} else {
			lookup.item(itemId, item);
		}
		this.refreshChildListForProperty(property);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::InsertChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Int32, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SwapChildItemForProperty(System.String, System.Int32, System.Int32, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	swapChildItemForProperty: function (property, from, to, track, activity) {
		var list = this.resolveChildListIds(property);
		$.ig.ArrayUtility.prototype.swapData(list, from, to);
		this.refreshChildListForProperty(property);
		if (track && this.allowTracking()) {
			var itemid = list[to];
			var partialDoc = this.partialDocument();
			var updatedItem = new $.ig.SimpleIDItemBackingStore(itemid);
			updatedItem.index(to);
			partialDoc.addChildItemForProperty(property, updatedItem, false, null);
			updatedItem.setNextItemIdDirectly(this.getNextChildItemLinkIdForIndex(property, to));
			var ledgerId = property + itemid;
			this.addToLedger(ledgerId, activity);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::SwapChildItemForProperty(System.String, System.Int32, System.Int32, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ActivityTrackingBackingStore::GetNextChildItemLinkIdForIndex(System.String, System.Int32)" />*/
	getNextChildItemLinkIdForIndex: function (property, index) {
		var list = this.resolveChildListIds(property);
		var nextLinkId = $.ig.ActivityTrackingBackingStore.prototype.lASTLINK_ID;
		if (index < (list.length - 1)) {
			nextLinkId = (list[index + 1]);
		}
		return nextLinkId;
	}
	/*<EndMethod Name="System.String Infragistics.ActivityTrackingBackingStore::GetNextChildItemLinkIdForIndex(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ActivityTrackingBackingStore::IndexOfChildItemForProperty(System.String, System.String)" />*/
	indexOfChildItemForProperty: function (property, itemId) {
		var lookup = this.resolveChildListLookup(property);
		var list = this.resolveChildListIds(property);
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(lookup, itemId)) {
			return list.indexOf(itemId);
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ActivityTrackingBackingStore::IndexOfChildItemForProperty(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	removeChildItemForProperty: function (property, item, track, activity) {
		var itemId = item.identifier();
		var list = this.resolveChildListIds(property);
		var lookup = this.resolveChildListLookup(property);
		list.removeItem(itemId);
		$.ig.NativeDictionaryUtility.prototype.removeValue(lookup, itemId);
		if (track && this.allowTracking()) {
			var deletedItemId = $.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX + itemId;
			var deletedItemsLookup = this.resolveChildMarkedForDeletionLookup(property);
			var partialDoc = this.partialDocument();
			var removePendingAdd = false;
			var ledgerId = property + itemId;
			if (this.isDirty() && $.ig.NativeDictionaryUtility.prototype.containsKey(this.__ledger, ledgerId)) {
				var partialLookup = partialDoc.resolveChildListLookup(property);
				if ($.ig.NativeDictionaryUtility.prototype.containsKey(partialLookup, itemId) && item == partialLookup.item(itemId)) {
					removePendingAdd = true;
				}
			}
			if (removePendingAdd) {
				partialDoc.removeChildItemForProperty(property, item, false, null);
				if (!$.ig.NativeDictionaryUtility.prototype.containsKey(deletedItemsLookup, deletedItemId)) {
					this.removeFromLedger(ledgerId);
				}
			} else {
				deletedItemsLookup.item(deletedItemId, item);
				var deletedItemObj = new $.ig.SimpleIDItemBackingStore(deletedItemId);
				partialDoc.addChildItemForProperty(property, deletedItemObj, false, null);
				this.addToLedger(ledgerId, activity);
			}
		}
		this.refreshChildListForProperty(property);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RemoveChildItemForProperty(System.String, Infragistics.ActivityTrackingBackingStore, System.Boolean, Infragistics.BackingStoreActivity)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RefreshChildListForProperty(System.String)" />*/
	refreshChildListForProperty: function (property) {
		var list = this.resolveChildListIds(property);
		var collectionInfo = this.resolveCollectionInfo(property);
		if ($.ig.NativeDictionaryUtility.prototype.containsKey(collectionInfo, "clp")) {
			var customProperties = collectionInfo.item("clp");
			for (var i = 0; i < customProperties.length; i++) {
				this.getCustomListProperty1(property, customProperties[i], true);
			}
		}
		var itemsStore = new $.ig.Array();
		var count = list.length;
		for (var i1 = 0; i1 < count; i1++) {
			var itemId = list[i1];
			var item = this.resolveChildListItembyId1(property, itemId, true);
			if (item != null) {
				itemsStore.add(item.jSONObject());
				if (!this.isPartialDoc()) {
					item.index(i1);
					this.childItemAdded(property, item);
				}
			}
		}
		this.setValueForKey(property, itemsStore);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::RefreshChildListForProperty(System.String)" />*/
	,
	_wasUnloaded: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::WasUnloaded()" />*/
	wasUnloaded: function (value) {
		if (arguments.length === 1) {
			this._wasUnloaded = value;
			return value;
		} else {
			return this._wasUnloaded;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::WasUnloaded()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::Unload()" />*/
	unload: function () {
		if (this.__childCollectionInfo != null) {
			var keys = $.ig.NativeDictionaryUtility.prototype.getKeys(this.__childCollectionInfo);
			for (var i = 0; i < keys.length; i++) {
				var property = keys[i];
				var childList = this.resolveChildListIds(property);
				for (var j = 0; j < childList.length; j++) {
					var childId = childList[j];
					var child = this.resolveChildListItembyId1(property, childId, true);
					child.unload();
				}
			}
		}
		this.wasUnloaded(true);
	}
	/*<EndMethod Name="System.Void Infragistics.ActivityTrackingBackingStore::Unload()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsSimpleObj()" />*/
	isSimpleObj: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.ActivityTrackingBackingStore::IsSimpleObj()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::HasChildList(System.String)" />*/
	hasChildList: function (property) {
		if (this.childCollections() == null) {
			return false;
		}
		return $.ig.NativeDictionaryUtility.prototype.containsKey(this.childCollections(), property);
	}
	/*<EndMethod Name="System.Boolean Infragistics.ActivityTrackingBackingStore::HasChildList(System.String)" />*/
	,
	$type: new $.ig.Type('ActivityTrackingBackingStore', $.ig.BackingStoreObjectBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ActivityTrackingBackingStore" />*/

/*<BeginType Name="Infragistics.SimpleIDItemBackingStore" />*/

$.ig.util.defType('SimpleIDItemBackingStore', 'ActivityTrackingBackingStore', {
	init: function (identifier) {
		$.ig.ActivityTrackingBackingStore.prototype.init.call(this, 0);
		this.identifier(identifier);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.SimpleIDItemBackingStore::IsSimpleObj()" />*/
	isSimpleObj: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.SimpleIDItemBackingStore::IsSimpleObj()" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.SimpleIDItemBackingStore::CreateNewBackingStoreObject(Infragistics.CPJSONObject)" />*/
	createNewBackingStoreObject: function (json) {
		return null;
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.SimpleIDItemBackingStore::CreateNewBackingStoreObject(Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.SimpleIDItemBackingStore::CreateNewBackingStoreObjectWithId(System.String)" />*/
	createNewBackingStoreObjectWithId: function (identifier) {
		return new $.ig.SimpleIDItemBackingStore(identifier);
	}
	/*<EndMethod Name="Infragistics.ActivityTrackingBackingStore Infragistics.SimpleIDItemBackingStore::CreateNewBackingStoreObjectWithId(System.String)" />*/
	,
	$type: new $.ig.Type('SimpleIDItemBackingStore', $.ig.ActivityTrackingBackingStore.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SimpleIDItemBackingStore" />*/

/*<BeginType Name="Infragistics.AnimationHelperDelegate" />*/

$.ig.util.defType('AnimationHelperDelegate', 'Object', {
	$type: new $.ig.Type('AnimationHelperDelegate', null)
}, true);

/*<EndType Name="Infragistics.AnimationHelperDelegate" />*/

/*<BeginType Name="Infragistics.AnimationHelper" />*/

$.ig.util.defType('AnimationHelper', 'AnimationHelperBase', {
	__percent: 0,
	__startTime: 0,
	__timer: null,
	__currentDuration: 0,
	__isDone: false,
	__animationType: 0,
	__ticks: 0,
	__delegate: null,
	init: function (initNumber, animationDelegate, animationType) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.AnimationHelperBase.prototype.init.call(this);
		this.__delegate = animationDelegate;
		this.__percent = 0;
		this.__animationType = animationType;
	},
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelper::SetAnimationType(Infragistics.AnimationType)" />*/
	setAnimationType: function (at) {
		this.__animationType = at;
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelper::SetAnimationType(Infragistics.AnimationType)" />*/
	,
	init1: function (initNumber, animationDelegate) {
		$.ig.AnimationHelper.prototype.init.call(this, 0, animationDelegate, $.ig.AnimationType.prototype.easeOut);
	},
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelper::Start()" />*/
	start: function () {
		this.__ticks = 0;
		this.__isDone = false;
		this.__currentDuration = this.__delegate.animationDuration();
		this.stop();
		this.__percent = 0;
		this.__startTime = this.getCurrentTime();
		this.__timer = this.nextTimer();
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelper::Start()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelper::StartWhereWeLeftOff()" />*/
	startWhereWeLeftOff: function () {
		this.__ticks = 0;
		this.__isDone = false;
		this.__currentDuration = this.__delegate.animationDuration();
		var bumpTime = this.__currentDuration * ((this.__percent == 0 || this.__percent == 1) ? 0 : (1 - this.__percent));
		if (this.__percent == 1) {
			this.__percent = 0;
		}
		this.stop();
		this.__startTime = this.getCurrentTime();
		this.__startTime -= bumpTime;
		this.__timer = this.nextTimer();
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelper::StartWhereWeLeftOff()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelper::Stop()" />*/
	stop: function () {
		if (this.__timer != null) {
			this.__timer.stop();
			this.__timer = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelper::Stop()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.AnimationHelper::GetValueForCurrentTime(System.Double)" />*/
	getValueForCurrentTime: function (timeElapsed) {
		if (timeElapsed >= this.__currentDuration) {
			return 1;
		}
		if (this.__animationType == $.ig.AnimationType.prototype.easeInEaseOut) {
			var easy_a = -0.75;
			var easy_b = 1.5;
			var easy_k = 1 / ((easy_a * Math.pow(1, 2)) + (easy_b * 1));
			return (1 * easy_k) * ((easy_a * Math.pow(timeElapsed / this.__currentDuration, 2)) + (easy_b * (timeElapsed / this.__currentDuration)));
		} else if (this.__animationType == $.ig.AnimationType.prototype.easeOut) {
			var t = timeElapsed;
			var d = this.__currentDuration;
			return ((t = t / d - 1) * t * t + 1);
		} else if (this.__animationType == $.ig.AnimationType.prototype.linear) {
			return timeElapsed / this.__currentDuration;
		}
		return 1;
	}
	/*<EndMethod Name="System.Double Infragistics.AnimationHelper::GetValueForCurrentTime(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.AnimationHelper::CubicBezier(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	cubicBezier: function (currentTime, p0, p1, p2, p3) {
		var t = currentTime / this.__currentDuration;
		var it = 1 - t;
		var r = (Math.pow(it, 3) * p0) + (3 * Math.pow(it, 2) * t * p1) + (3 * it * Math.pow(t, 2) * p2) + (Math.pow(t, 3) * p3);
		return r;
	}
	/*<EndMethod Name="System.Double Infragistics.AnimationHelper::CubicBezier(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationHelper::Tick()" />*/
	tick: function () {
		if (!this.__isDone) {
			var prev = this.__percent;
			var now = this.getCurrentTime();
			var timeElapsed = now - this.__startTime;
			this.__percent = this.getValueForCurrentTime(timeElapsed);
			if (prev != this.__percent) {
				this.__ticks++;
				this.__delegate.animationTick(this.__percent);
			}
			if (timeElapsed >= this.__currentDuration) {
				this.__isDone = true;
				this.stop();
				this.__delegate.animationFinished();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationHelper::Tick()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.AnimationHelper::Percent()" />*/
	percent: function () {
		return this.__percent;
	}
	/*<EndProperty Name="System.Double Infragistics.AnimationHelper::Percent()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.AnimationHelper::IsCurrentlyAnimating()" />*/
	isCurrentlyAnimating: function () {
		return this.__timer != null;
	}
	/*<EndProperty Name="System.Boolean Infragistics.AnimationHelper::IsCurrentlyAnimating()" />*/
	,
	$type: new $.ig.Type('AnimationHelper', $.ig.AnimationHelperBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AnimationHelper" />*/

/*<BeginType Name="Infragistics.ArrayUtility" />*/

$.ig.util.defType('ArrayUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Int32, )" />*/
	arrayContains1: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Int32, )" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Double, )" />*/
	arrayContains: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Double, )" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Single, )" />*/
	arrayContains3: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Single, )" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.String, )" />*/
	arrayContains4: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::Reverse(Infragistics.CPList)" />*/
	reverse: function (list) {
		for (var i = 0; i < $.ig.intDivide(list.length, 2); i++) {
			var tmp = list[i];
			list[i] = list[list.length - 1 - i];
			list[list.length - 1 - i] = tmp;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::Reverse(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.String, Infragistics.CPList)" />*/
	arrayContains5: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].equals(value)) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.String, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContainsCaseInsensitive(System.String, Infragistics.CPList)" />*/
	arrayContainsCaseInsensitive: function (value, array) {
		var lowerCaseValue = value.toLowerCase();
		for (var i = 0; i < array.length; i++) {
			if ((array[i]).toLowerCase() == lowerCaseValue) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContainsCaseInsensitive(System.String, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Object, Infragistics.CPList)" />*/
	arrayContains2: function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtility::ArrayContains(System.Object, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ArrayUtility::ContainsAll(Infragistics.CPList, Infragistics.CPList)" />*/
	containsAll: function (list, otherList) {
		for (var i = 0; i < otherList.length; i++) {
			if (!list.contains(otherList[i])) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ArrayUtility::ContainsAll(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ArrayUtility::ContainsAny(Infragistics.CPList, Infragistics.CPList)" />*/
	containsAny: function (searchValues, list) {
		for (var i = 0; i < searchValues.length; i++) {
			if ($.ig.ArrayUtility.prototype.arrayContains5(searchValues[i], list) >= 0) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ArrayUtility::ContainsAny(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Int32, )" />*/
	addToArray1: function (value, array) {
		var result = new Array(array.length + 1);
		result[array.length] = value;
		for (var i = 0; i < array.length; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Int32, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::AddToColorArray(System.ColorInt, )" />*/
	addToColorArray: function (value, array) {
		var result = new Array(array.length + 1);
		result[array.length] = value;
		for (var i = 0; i < array.length; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::AddToColorArray(System.ColorInt, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Double, )" />*/
	addToArray: function (value, array) {
		var result = new Array(array.length + 1);
		result[array.length] = value;
		for (var i = 0; i < array.length; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Double, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Single, )" />*/
	addToArray3: function (value, array) {
		var result = new Array(array.length + 1);
		result[array.length] = value;
		for (var i = 0; i < array.length; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Single, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Int32, , System.Int32)" />*/
	addToArray2: function (value, array, index) {
		var result = new Array(array.length + 1);
		result[index] = value;
		for (var i = 0; i < index; i++) {
			result[i] = array[i];
		}
		for (var i1 = index + 1; i1 < result.length; i1++) {
			result[i1] = array[i1 - 1];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::AddToArray(System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::AddToCPReadOnlyList(Infragistics.CPList, Infragistics.CPList)" />*/
	addToCPReadOnlyList: function (to, from) {
		var count = from.length;
		for (var i = 0; i < count; i++) {
			to.add(from[i]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::AddToCPReadOnlyList(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	removeAtIndex: function (index, array) {
		var result = new Array(array.length - 1);
		for (var i = 0; i < index; i++) {
			result[i] = array[i];
		}
		for (var i1 = index; i1 < result.length; i1++) {
			result[i1] = array[i1 + 1];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::RemoveColorIntAtIndex(System.Int32, )" />*/
	removeColorIntAtIndex: function (index, array) {
		var result = new Array(array.length - 1);
		for (var i = 0; i < index; i++) {
			result[i] = array[i];
		}
		for (var i1 = index; i1 < result.length; i1++) {
			result[i1] = array[i1 + 1];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::RemoveColorIntAtIndex(System.Int32, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	removeAtIndex1: function (index, array) {
		var result = new Array(array.length - 1);
		for (var i = 0; i < index; i++) {
			result[i] = array[i];
		}
		for (var i1 = index; i1 < result.length; i1++) {
			result[i1] = array[i1 + 1];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	removeAtIndex2: function (index, array) {
		var result = new Array(array.length - 1);
		for (var i = 0; i < index; i++) {
			result[i] = array[i];
		}
		for (var i1 = index; i1 < result.length; i1++) {
			result[i1] = array[i1 + 1];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::RemoveAtIndex(System.Int32, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CopyIntArray()" />*/
	copyIntArray: function (array) {
		if (array == null) {
			return null;
		}
		var count = array.length;
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CopyIntArray()" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CopyColorArray()" />*/
	copyColorArray: function (array) {
		if (array == null) {
			return null;
		}
		var count = array.length;
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CopyColorArray()" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CopyDoubleArray()" />*/
	copyDoubleArray: function (array) {
		if (array == null) {
			return null;
		}
		var count = array.length;
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CopyDoubleArray()" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CopyLongArray()" />*/
	copyLongArray: function (array) {
		if (array == null) {
			return null;
		}
		var count = array.length;
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CopyLongArray()" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CopyNativeNumberArray()" />*/
	copyNativeNumberArray: function (array) {
		if (array == null) {
			return null;
		}
		var count = array.length;
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = array[i];
		}
		return result;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CopyNativeNumberArray()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ArrayUtility::CopyMutableListOfDoubleArrays(Infragistics.CPList)" />*/
	copyMutableListOfDoubleArrays: function (array) {
		if (array == null) {
			return null;
		}
		var result = new $.ig.Array();
		var count = array.length;
		for (var i = 0; i < count; i++) {
			result.add($.ig.ArrayUtility.prototype.copyDoubleArray(array[i]));
		}
		return result;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ArrayUtility::CopyMutableListOfDoubleArrays(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ArrayUtility::CopyCPList(Infragistics.CPList)" />*/
	copyCPList: function (array) {
		if (array == null) {
			return null;
		}
		var result = new $.ig.Array();
		var count = array.length;
		for (var i = 0; i < count; i++) {
			result.add(array[i]);
		}
		return result;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ArrayUtility::CopyCPList(Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::TransitionDoubleArray(, , System.Double)" />*/
	transitionDoubleArray: function (from, to, percent) {
		if (from == null || to == null) {
			return;
		}
		var count = from.length;
		for (var i = 0; i < count; i++) {
			to[i] = $.ig.CPMathUtility.prototype.transitionDouble(from[i], to[i], percent);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::TransitionDoubleArray(, , System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::TransitionLongArray(, , System.Double)" />*/
	transitionLongArray: function (from, to, percent) {
		if (from == null || to == null) {
			return;
		}
		for (var i = 0; i < to.length; i++) {
			to[i] = $.ig.CPMathUtility.prototype.transitionLong(from[i], to[i], percent);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::TransitionLongArray(, , System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::TransitionNativeNumberArray(, , System.Double)" />*/
	transitionNativeNumberArray: function (from, to, percent) {
		if (from == null || to == null) {
			return;
		}
		var count = from.length;
		for (var i = 0; i < count; i++) {
			to[i] = $.ig.CPMathUtility.prototype.transitionNativeNumber(from[i], to[i], percent);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::TransitionNativeNumberArray(, , System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::TransitionMutableListOfDoubleArrays(Infragistics.CPList, Infragistics.CPList, System.Double)" />*/
	transitionMutableListOfDoubleArrays: function (from, to, percent) {
		if (from == null || to == null) {
			return;
		}
		var count = from.length;
		for (var i = 0; i < count; i++) {
			var f = from[i];
			var t = to[i];
			var fCount = f.length;
			var tCount = t.length;
			if (fCount != tCount) {
				var temp = new Array(tCount);
				for (var j = 0; j < tCount; j++) {
					temp[j] = (j < fCount) ? f[j] : t[j];
				}
				f = temp;
				from[i] = f;
			}
			$.ig.ArrayUtility.prototype.transitionDoubleArray(f, t, percent);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::TransitionMutableListOfDoubleArrays(Infragistics.CPList, Infragistics.CPList, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CreateZeroedDoubleArray(System.Int32)" />*/
	createZeroedDoubleArray: function (size) {
		var values = new Array(size);
		for (var j = 0; j < size; j++) {
			values[j] = 0;
		}
		return values;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CreateZeroedDoubleArray(System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CreateZeroedNativeNumberArray(System.Int32)" />*/
	createZeroedNativeNumberArray: function (size) {
		var values = new Array(size);
		for (var j = 0; j < size; j++) {
			values[j] = 0;
		}
		return values;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CreateZeroedNativeNumberArray(System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CreateZeroedIntArray(System.Int32)" />*/
	createZeroedIntArray: function (size) {
		var values = new Array(size);
		for (var j = 0; j < size; j++) {
			values[j] = 0;
		}
		return values;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CreateZeroedIntArray(System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ArrayUtility::CreateZeroedLongArray(System.Int32)" />*/
	createZeroedLongArray: function (size) {
		var values = new Array(size);
		for (var j = 0; j < size; j++) {
			values[j] = 0;
		}
		return values;
	}
	/*<EndMethod Name=" Infragistics.ArrayUtility::CreateZeroedLongArray(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInNativeNumberArrays(, )" />*/
	convertNansToZeroInNativeNumberArrays: function (array1, array2) {
		if (array1 != null && array2 != null) {
			var count = Math.min(array1.length, array2.length);
			for (var i = 0; i < count; i++) {
				var val1IsNan = $.ig.util.isNaN(array1[i]);
				var val2IsNan = $.ig.util.isNaN(array2[i]);
				if (val1IsNan && !val2IsNan) {
					array1[i] = 0;
				}
				if (!val1IsNan && val2IsNan) {
					array1[i] = NaN;
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInNativeNumberArrays(, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInDoubleArrays(, )" />*/
	convertNansToZeroInDoubleArrays: function (array1, array2) {
		if (array1 != null && array2 != null) {
			var count = Math.min(array1.length, array2.length);
			for (var i = 0; i < count; i++) {
				var val1IsNan = $.ig.util.isNaN(array1[i]);
				var val2IsNan = $.ig.util.isNaN(array2[i]);
				if (val1IsNan && !val2IsNan) {
					array1[i] = 0;
				}
				if (!val1IsNan && val2IsNan) {
					array1[i] = NaN;
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInDoubleArrays(, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInListsOfDouble(Infragistics.CPList, Infragistics.CPList)" />*/
	convertNansToZeroInListsOfDouble: function (list1, list2) {
		if (list1 != null && list2 != null) {
			var count = Math.min(list1.length, list2.length);
			for (var i = 0; i < count; i++) {
				var array1 = list1[i];
				var array2 = list2[i];
				$.ig.ArrayUtility.prototype.convertNansToZeroInDoubleArrays(array1, array2);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::ConvertNansToZeroInListsOfDouble(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ArrayUtility::JoinArray(, System.String)" />*/
	joinArray: function (arr, sep) {
		if (arr == null) {
			return null;
		}
		var arrayLength = arr.length;
		if (arrayLength == 0) {
			return "";
		}
		var str = arr[0];
		for (var i = 1; i < arrayLength; i++) {
			str = str + sep + arr[i];
		}
		return str;
	}
	/*<EndMethod Name="System.String Infragistics.ArrayUtility::JoinArray(, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ArrayUtility::Join(Infragistics.CPReadOnlyList, System.String)" />*/
	join: function (list, sep) {
		if (list == null) {
			return null;
		}
		var str = "";
		var count = list.length;
		for (var i = 0; i < count - 1; i++) {
			str = str + list[i] + sep;
		}
		if (count > 0) {
			str = str + list[count - 1];
		}
		return str;
	}
	/*<EndMethod Name="System.String Infragistics.ArrayUtility::Join(Infragistics.CPReadOnlyList, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ArrayUtility::ToList()" />*/
	toList: function (array) {
		if (array == null) {
			return null;
		}
		var list = new $.ig.Array();
		for (var i = 0; i < array.length; i++) {
			list.add($.ig.NativeNullableUtility.prototype.wrapNull(array[i]));
		}
		return list;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ArrayUtility::ToList()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtility::SwapData(Infragistics.CPList, System.Int32, System.Int32)" />*/
	swapData: function (list, from, to) {
		if (from != to) {
			var obj = list[from];
			list.removeAt(from);
			list.insert(to, obj);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtility::SwapData(Infragistics.CPList, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ArrayUtility::CompareListOfStrings(Infragistics.CPList, Infragistics.CPList)" />*/
	compareListOfStrings: function (original, newValue) {
		var areEqual = false;
		if (original == null && newValue == null) {
			areEqual = true;
		} else if (original != null & newValue != null && original.length == newValue.length) {
			areEqual = true;
			for (var i = 0; i < original.length; i++) {
				var v1 = original[i];
				var v2 = newValue[i];
				if (v1 != v2) {
					areEqual = false;
					break;
				}
			}
		}
		return areEqual;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ArrayUtility::CompareListOfStrings(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ArrayUtility::CompareListOfLongs(Infragistics.CPList, Infragistics.CPList)" />*/
	compareListOfLongs: function (original, newValue) {
		var areEqual = false;
		if (original == null && newValue == null) {
			areEqual = true;
		} else if (original != null & newValue != null && original.length == newValue.length) {
			areEqual = true;
			for (var i = 0; i < original.length; i++) {
				var v1 = $.ig.util.getValue(original[i]);
				var v2 = $.ig.util.getValue(newValue[i]);
				if (v1 != v2) {
					areEqual = false;
					break;
				}
			}
		}
		return areEqual;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ArrayUtility::CompareListOfLongs(Infragistics.CPList, Infragistics.CPList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ArrayUtility::Any(Infragistics.CPList, Infragistics.BoolForObjectBlock)" />*/
	any: function (list, block) {
		if (list == null) {
			return false;
		}
		for (var i = 0; i < list.length; i++) {
			if (block(list[i])) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ArrayUtility::Any(Infragistics.CPList, Infragistics.BoolForObjectBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.ArrayUtility::Map(Infragistics.CPList, Infragistics.ObjectForObjectBlock, System.Boolean)" />*/
	map: function (list, block, skipNulls) {
		if (list == null) {
			return null;
		}
		var result = new $.ig.Array();
		for (var i = 0; i < list.length; i++) {
			var mapped = block(list[i]);
			if (mapped != null || !skipNulls) {
				result.add(mapped);
			}
		}
		return result;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.ArrayUtility::Map(Infragistics.CPList, Infragistics.ObjectForObjectBlock, System.Boolean)" />*/
	,
	$type: new $.ig.Type('ArrayUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ArrayUtility" />*/

/*<BeginType Name="Infragistics.CPDateTimeFormatProvider" />*/

$.ig.util.defType('CPDateTimeFormatProvider', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::SimpleDateFormatString()" />*/
	simpleDateFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::SimpleDateFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortMonthAndDateFormatString()" />*/
	shortMonthAndDateFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortMonthAndDateFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::TimeOnlyFormatString()" />*/
	timeOnlyFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::TimeOnlyFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortDateFormatString()" />*/
	shortDateFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortDateFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortDateAndTimeFormatString()" />*/
	shortDateAndTimeFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortDateAndTimeFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::MonthAndYearFormatString()" />*/
	monthAndYearFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::MonthAndYearFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::MonthNameFormatString()" />*/
	monthNameFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::MonthNameFormatString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortMonthNameFormatString()" />*/
	shortMonthNameFormatString: function () {
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTimeFormatProvider::ShortMonthNameFormatString()" />*/
	,
	$type: new $.ig.Type('CPDateTimeFormatProvider', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPDateTimeFormatProvider" />*/

/*<BeginType Name="Infragistics.CPDateTime" />*/

$.ig.util.defType('CPDateTime', 'Object', {
	/*<BeginMethod Name="System.Void Infragistics.CPDateTime::RegisterDateTimeFormatter(Infragistics.CPDateTimeFormatProvider)" />*/
	registerDateTimeFormatter: function (formatter) {
		$.ig.CPDateTime.prototype.__formatter = formatter;
	}
	/*<EndMethod Name="System.Void Infragistics.CPDateTime::RegisterDateTimeFormatter(Infragistics.CPDateTimeFormatProvider)" />*/
	,
	__date: new Date(),
	__isUTC: false,
	init: function (date, isUTC) {
		$.ig.Object.prototype.init.call(this);
		this.__date = date;
		this.__isUTC = isUTC;
	},
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Create(System.Int32, System.Int32, System.Int32)" />*/
	create: function (month, day, year) {
		return $.ig.CPDateTime.prototype.create1(month, day, year, 0, 0);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Create(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Create(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	create1: function (month, day, year, hour, minute) {
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.createDateForMonth(month, day, year, hour, minute), false);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Create(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateUTC(System.Int32, System.Int32, System.Int32)" />*/
	createUTC: function (month, day, year) {
		return $.ig.CPDateTime.prototype.createUTC1(month, day, year, 0, 0);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateUTC(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateUTC(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createUTC1: function (month, day, year, hour, minute) {
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.createUtcDateForMonth(month, day, year, hour, minute), true);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateUTC(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalSeconds(System.Int64)" />*/
	createFromLocalSeconds: function (timeInSeconds) {
		if (timeInSeconds == 0) {
			return null;
		}
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.convertTimeInSecondsToDate(timeInSeconds), false);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalSeconds(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCSeconds(System.Int64)" />*/
	createFromUTCSeconds: function (timeInSeconds) {
		if (timeInSeconds == 0) {
			return null;
		}
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.convertTimeInSecondsToUTCDate(timeInSeconds), true);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCSeconds(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalTicks(System.Int64)" />*/
	createFromLocalTicks: function (ticks) {
		if (ticks == 0) {
			return null;
		}
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.convertTimeInTicksToDate(ticks), false);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalTicks(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCTicks(System.Int64)" />*/
	createFromUTCTicks: function (ticks) {
		if (ticks == 0) {
			return null;
		}
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.convertTimeInTicksToUTCDate(ticks), true);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCTicks(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalTimeString(System.String, System.String)" />*/
	createFromLocalTimeString: function (val, format) {
		var date = $.ig.NativeDateUtility.prototype.parseString(val, format);
		date = $.ig.NativeDateUtility.prototype.createDateForMonth($.ig.NativeDateUtility.prototype.getMonthForDate(date, true), $.ig.NativeDateUtility.prototype.getDayForDate(date, true), $.ig.NativeDateUtility.prototype.getYearForDate(date, true), $.ig.NativeDateUtility.prototype.getHourForDate(date, true), $.ig.NativeDateUtility.prototype.getMinuteForDate(date, true));
		return new $.ig.CPDateTime(date, false);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromLocalTimeString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCTimeString(System.String, System.String)" />*/
	createFromUTCTimeString: function (val, format) {
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.parseString(val, format), true);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromUTCTimeString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Now()" />*/
	now: function () {
		return new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.now(), false);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Now()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::NowUTC()" />*/
	nowUTC: function () {
		var date = new $.ig.CPDateTime($.ig.NativeDateUtility.prototype.now(), false);
		date.convertToUTC();
		return date;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::NowUTC()" />*/
	,
	/*<BeginProperty Name="System.DateTime Infragistics.CPDateTime::RawDate()" />*/
	rawDate: function () {
		return this.__date;
	}
	/*<EndProperty Name="System.DateTime Infragistics.CPDateTime::RawDate()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Month()" />*/
	month: function () {
		return $.ig.NativeDateUtility.prototype.getMonthForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Month()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Year()" />*/
	year: function () {
		return $.ig.NativeDateUtility.prototype.getYearForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Year()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Day()" />*/
	day: function () {
		return $.ig.NativeDateUtility.prototype.getDayForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Day()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Hour()" />*/
	hour: function () {
		return $.ig.NativeDateUtility.prototype.getHourForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Hour()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Minute()" />*/
	minute: function () {
		return $.ig.NativeDateUtility.prototype.getMinuteForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Minute()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CPDateTime::Milliseconds()" />*/
	milliseconds: function () {
		return $.ig.NativeDateUtility.prototype.getMillisecondForDate(this.__date, this.__isUTC);
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPDateTime::Milliseconds()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.CPDateTime::Ticks()" />*/
	ticks: function () {
		return $.ig.NativeDateUtility.prototype.getTicksForDate(this.__date);
	}
	/*<EndProperty Name="System.Int64 Infragistics.CPDateTime::Ticks()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.CPDateTime::TimeInSeconds()" />*/
	timeInSeconds: function () {
		return $.ig.NativeDateUtility.prototype.convertDateToTimeInSeconds(this.__date);
	}
	/*<EndProperty Name="System.Int64 Infragistics.CPDateTime::TimeInSeconds()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::Format(System.String)" />*/
	format: function (formatString) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(this.__date, formatString, this.__isUTC);
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::Format(System.String)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::SimpleDateString()" />*/
	simpleDateString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.simpleDateFormatString());
		}
		return this.format("MMM dd, yyyy");
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::SimpleDateString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::ShortMonthAndDateString()" />*/
	shortMonthAndDateString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.shortMonthAndDateFormatString());
		}
		return this.format("MMM dd");
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::ShortMonthAndDateString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::TimeOnlyString()" />*/
	timeOnlyString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.timeOnlyFormatString());
		}
		return this.format("h:mm a").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::TimeOnlyString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::ShortDate()" />*/
	shortDate: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.shortDateFormatString());
		}
		return this.format("MM/dd").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::ShortDate()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::ShortDateAndTime()" />*/
	shortDateAndTime: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.shortDateAndTimeFormatString());
		}
		return this.format("MM/dd h:mm a").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::ShortDateAndTime()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::MonthAndYearString()" />*/
	monthAndYearString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.monthAndYearFormatString());
		}
		return this.format("MMMM yyyy").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::MonthAndYearString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::MonthNameString()" />*/
	monthNameString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.monthNameFormatString());
		}
		return this.format("MMMM").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::MonthNameString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::ShortMonthNameString()" />*/
	shortMonthNameString: function () {
		if ($.ig.CPDateTime.prototype.__formatter != null) {
			return this.format($.ig.CPDateTime.prototype.__formatter.shortMonthNameFormatString());
		}
		return this.format("MMM").toUpperCase();
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::ShortMonthNameString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPDateTime::RFC3339String()" />*/
	rFC3339String: function () {
		return this.format($.ig.CPDateTime.prototype.getRFC3339FormatString());
	}
	/*<EndProperty Name="System.String Infragistics.CPDateTime::RFC3339String()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPDateTime::IsUTC()" />*/
	isUTC: function () {
		return this.__isUTC;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPDateTime::IsUTC()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPDateTime::IsLocal()" />*/
	isLocal: function () {
		return !this.__isUTC;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPDateTime::IsLocal()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDateTime::ConvertToLocal()" />*/
	convertToLocal: function () {
		if (this.__isUTC) {
			this.__date = $.ig.NativeDateUtility.prototype.convertUTCToLocalTime(this.__date);
			this.__isUTC = false;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPDateTime::ConvertToLocal()" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.CPDateTime::CloneDateTime(System.DateTime, System.Boolean)" />*/
	cloneDateTime: function (value, isUtc) {
		var year = $.ig.NativeDateUtility.prototype.getYearForDate(value, isUtc);
		var month = $.ig.NativeDateUtility.prototype.getMonthForDate(value, isUtc);
		var day = $.ig.NativeDateUtility.prototype.getDayForDate(value, isUtc);
		var hour = $.ig.NativeDateUtility.prototype.getHourForDate(value, isUtc);
		var minute = $.ig.NativeDateUtility.prototype.getMinuteForDate(value, isUtc);
		if (isUtc) {
			return $.ig.NativeDateUtility.prototype.createUtcDateForMonth(month, day, year, hour, minute);
		} else {
			return $.ig.NativeDateUtility.prototype.createDateForMonth(month, day, year, hour, minute);
		}
	}
	/*<EndMethod Name="System.DateTime Infragistics.CPDateTime::CloneDateTime(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.CPDateTime::ToNullableDateTime(Infragistics.CPDateTime)" />*/
	toNullableDateTime: function (value) {
		if (value == null) {
			return $.ig.util.toNullable($.ig.Date.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.Date.prototype.$type, value.rawDate());
	}
	/*<EndMethod Name="System.Nullable Infragistics.CPDateTime::ToNullableDateTime(Infragistics.CPDateTime)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromNullableDateTime(System.Nullable, System.Boolean, System.Boolean)" />*/
	createFromNullableDateTime: function (value, isUtc, clone) {
		if ($.ig.NativeNullableUtility.prototype.isNullDateTime(value)) {
			return null;
		}
		var raw = $.ig.NativeNullableUtility.prototype.unwrapDateTime(value);
		return $.ig.CPDateTime.prototype.createFromDateTime(raw, isUtc, clone);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromNullableDateTime(System.Nullable, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromDateTime(System.DateTime, System.Boolean, System.Boolean)" />*/
	createFromDateTime: function (value, isUtc, clone) {
		if (clone) {
			value = $.ig.CPDateTime.prototype.cloneDateTime(value, isUtc);
		}
		return new $.ig.CPDateTime(value, isUtc);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CreateFromDateTime(System.DateTime, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPDateTime::ConvertToTimeInSeconds(Infragistics.CPDateTime)" />*/
	convertToTimeInSeconds: function (value) {
		if (value == null) {
			return 0;
		}
		return $.ig.NativeDateUtility.prototype.convertDateToTimeInSeconds(value.rawDate());
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPDateTime::ConvertToTimeInSeconds(Infragistics.CPDateTime)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::EnsureMidnightUTC(Infragistics.CPDateTime, System.Boolean)" />*/
	ensureMidnightUTC: function (date, clone) {
		if (clone) {
			return $.ig.CPDateTime.prototype.cloneAsMidnightUTC(date);
		}
		if (date != null) {
			if (!date.isUTC()) {
				date.convertToUTC();
			}
			date.convertToMidnight();
		}
		return date;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::EnsureMidnightUTC(Infragistics.CPDateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsMidnightUTC(Infragistics.CPDateTime)" />*/
	cloneAsMidnightUTC: function (date) {
		if (date == null) {
			return null;
		}
		var d = null;
		if (date.isUTC()) {
			d = new $.ig.CPDateTime(date.rawDate(), true);
			d.convertToMidnight();
		} else {
			d = new $.ig.CPDateTime(date.rawDate(), false);
			d.convertToUTC();
			d.convertToMidnight();
		}
		return d;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsMidnightUTC(Infragistics.CPDateTime)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsLocal()" />*/
	cloneAsLocal: function () {
		var dt = new $.ig.CPDateTime(this.__date, this.__isUTC);
		dt.convertToLocal();
		return dt;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsLocal()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsUTC()" />*/
	cloneAsUTC: function () {
		var dt = new $.ig.CPDateTime(this.__date, this.__isUTC);
		dt.convertToUTC();
		return dt;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::CloneAsUTC()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDateTime::ConvertToUTC()" />*/
	convertToUTC: function () {
		if (!this.__isUTC) {
			this.__date = $.ig.NativeDateUtility.prototype.convertLocalTimeToUTC(this.__date);
			this.__isUTC = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPDateTime::ConvertToUTC()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDateTime::ConvertToMidnight()" />*/
	convertToMidnight: function () {
		if (this.__isUTC) {
			this.__date = $.ig.NativeDateUtility.prototype.createUtcDateForMonth(this.month(), this.day(), this.year(), 0, 0);
		} else {
			this.__date = $.ig.NativeDateUtility.prototype.createDateForMonth(this.month(), this.day(), this.year(), 0, 0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPDateTime::ConvertToMidnight()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPDateTime::Add(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	add: function (years, months, days, hours, minutes) {
		if (this.__isUTC) {
			this.__date = $.ig.NativeDateUtility.prototype.addToUTCDate(this.__date, years, months, days, hours, minutes, 0);
		} else {
			this.__date = $.ig.NativeDateUtility.prototype.addToDate(this.__date, years, months, days, hours, minutes);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPDateTime::Add(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPDateTime::IsToday()" />*/
	isToday: function () {
		if (this.isLocal()) {
			return this.compareDate($.ig.CPDateTime.prototype.now()) == 0;
		} else {
			return this.compareDate($.ig.CPDateTime.prototype.nowUTC()) == 0;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPDateTime::IsToday()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPDateTime::IsYesterday()" />*/
	isYesterday: function () {
		var yesterday = null;
		if (this.isLocal()) {
			yesterday = $.ig.CPDateTime.prototype.now();
		} else {
			yesterday = $.ig.CPDateTime.prototype.nowUTC();
		}
		yesterday.add(0, 0, -1, 0, 0);
		return this.compareDate(yesterday) == 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPDateTime::IsYesterday()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPDateTime::CompareDate(Infragistics.CPDateTime)" />*/
	compareDate: function (date) {
		var cy = this.year();
		var oy = date.year();
		var cm = this.month();
		var om = date.month();
		var cd = this.day();
		var od = date.day();
		if (cy == oy && cm == om && cd == od) {
			return 0;
		}
		if (cy != oy) {
			return cy < oy ? -1 : 1;
		}
		if (cm != om) {
			return cm < om ? -1 : 1;
		}
		if (cd != od) {
			return cd < od ? -1 : 1;
		}
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPDateTime::CompareDate(Infragistics.CPDateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::GetISO8601BasicFormatString()" />*/
	getISO8601BasicFormatString: function () {
		return "yyyy-MM-dd'T'HH:mm:ss";
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::GetISO8601BasicFormatString()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatString()" />*/
	getRFC3339FormatString: function () {
		return "yyyy-MM-dd'T'HH:mm:ss'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatString()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithTimezone()" />*/
	getRFC3339FormatStringWithTimezone: function () {
		return "yyyy-MM-dd'T'HH:mm:ssK";
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithTimezone()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithtMilliseconds()" />*/
	getRFC3339FormatStringWithtMilliseconds: function () {
		return "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithtMilliseconds()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithtMillisecondsDigits(System.Int32)" />*/
	getRFC3339FormatStringWithtMillisecondsDigits: function (digits) {
		var millisecondsDigits = "";
		for (var i = 0; i < digits; i++) {
			millisecondsDigits = millisecondsDigits + "S";
		}
		return "yyyy-MM-dd'T'HH:mm:ss." + millisecondsDigits + "'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.CPDateTime::GetRFC3339FormatStringWithtMillisecondsDigits(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::GetFirstDayOfWeekDate(Infragistics.CPDateTime, System.Int32)" />*/
	getFirstDayOfWeekDate: function (date, firstDayOfWeek) {
		if (!date.isUTC()) {
			date = $.ig.CPDateTime.prototype.createUTC1(date.month(), date.day(), date.year(), 0, 0);
		}
		var dow = $.ig.NativeDateUtility.prototype.getDayOfWeek(date.rawDate());
		if (dow == firstDayOfWeek) {
			return date;
		}
		var delta = firstDayOfWeek < dow ? dow - firstDayOfWeek : (7 - firstDayOfWeek) + dow;
		var clone = date.clone();
		clone.add(0, 0, delta * -1, 0, 0);
		return clone;
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::GetFirstDayOfWeekDate(Infragistics.CPDateTime, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Clone()" />*/
	clone: function () {
		var raw = this.rawDate();
		var newDate;
		if (this.__isUTC) {
			newDate = $.ig.NativeDateUtility.prototype.createUtcDateForMonth1(this.month(), this.day(), this.year(), this.hour(), this.minute(), 0);
		} else {
			newDate = $.ig.NativeDateUtility.prototype.createDateForMonth(this.month(), this.day(), this.year(), this.hour(), this.minute());
		}
		return new $.ig.CPDateTime(newDate, this.__isUTC);
	}
	/*<EndMethod Name="Infragistics.CPDateTime Infragistics.CPDateTime::Clone()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPDateTime::IsSameAs(Infragistics.CPDateTime, Infragistics.CPDateTime)" />*/
	isSameAs: function (x, y) {
		if (x == null && y == null) {
			return true;
		}
		return $.ig.CPDateTime.prototype.isSameDay(x, y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPDateTime::IsSameAs(Infragistics.CPDateTime, Infragistics.CPDateTime)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPDateTime::IsSameDay(Infragistics.CPDateTime, Infragistics.CPDateTime)" />*/
	isSameDay: function (x, y) {
		if (x == null || y == null) {
			return false;
		}
		if (x.year() != y.year()) {
			return false;
		}
		if (x.month() != y.month()) {
			return false;
		}
		if (x.day() != y.day()) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPDateTime::IsSameDay(Infragistics.CPDateTime, Infragistics.CPDateTime)" />*/
	,
	$type: new $.ig.Type('CPDateTime', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPDateTime" />*/

/*<BeginType Name="Infragistics.CPError" />*/

$.ig.util.defType('CPError', 'Object', {
	_errorCode: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.CPError::ErrorCode()" />*/
	errorCode: function (value) {
		if (arguments.length === 1) {
			this._errorCode = value;
			return value;
		} else {
			return this._errorCode;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPError::ErrorCode()" />*/
	,
	_errorTitle: null,
	/*<BeginProperty Name="System.String Infragistics.CPError::ErrorTitle()" />*/
	errorTitle: function (value) {
		if (arguments.length === 1) {
			this._errorTitle = value;
			return value;
		} else {
			return this._errorTitle;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPError::ErrorTitle()" />*/
	,
	_errorMessage: null,
	/*<BeginProperty Name="System.String Infragistics.CPError::ErrorMessage()" />*/
	errorMessage: function (value) {
		if (arguments.length === 1) {
			this._errorMessage = value;
			return value;
		} else {
			return this._errorMessage;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPError::ErrorMessage()" />*/
	,
	_errorDetail: null,
	/*<BeginProperty Name="System.String Infragistics.CPError::ErrorDetail()" />*/
	errorDetail: function (value) {
		if (arguments.length === 1) {
			this._errorDetail = value;
			return value;
		} else {
			return this._errorDetail;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPError::ErrorDetail()" />*/
	,
	_nativeError: null,
	/*<BeginProperty Name="System.Exception Infragistics.CPError::NativeError()" />*/
	nativeError: function (value) {
		if (arguments.length === 1) {
			this._nativeError = value;
			return value;
		} else {
			return this._nativeError;
		}
	}
	/*<EndProperty Name="System.Exception Infragistics.CPError::NativeError()" />*/
	,
	init: function (initNumber, message, detail, error) {
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
		$.ig.Object.prototype.init.call(this);
		this.errorMessage(message);
		this.errorDetail(detail);
		this.nativeError(error);
		this.errorCode($.ig.CPError.prototype.eRROR_CODE_UNSPECIFIED);
	},
	init1: function (initNumber, title, message) {
		$.ig.Object.prototype.init.call(this);
		this.errorTitle(title);
		this.errorMessage(message);
	},
	init2: function (initNumber, message, error) {
		$.ig.CPError.prototype.init.call(this, 0, message, null, null);
	},
	init3: function (initNumber, message) {
		$.ig.CPError.prototype.init.call(this, 0, message, null, null);
	},
	/*<BeginMethod Name="Infragistics.CPError Infragistics.CPError::CreateError(System.Exception)" />*/
	createError: function (error) {
		return new $.ig.CPError(2, $.ig.NativeStringUtility.prototype.toString1(error), error);
	}
	/*<EndMethod Name="Infragistics.CPError Infragistics.CPError::CreateError(System.Exception)" />*/
	,
	$type: new $.ig.Type('CPError', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPError" />*/

/*<BeginType Name="Infragistics.CPKeyedObject" />*/

$.ig.util.defType('CPKeyedObject', 'Object', {
	init: function (key, val) {
		$.ig.Object.prototype.init.call(this);
		this.key(key);
		this.value(val);
	},
	_key: null,
	/*<BeginProperty Name="System.String Infragistics.CPKeyedObject::Key()" />*/
	key: function (value) {
		if (arguments.length === 1) {
			this._key = value;
			return value;
		} else {
			return this._key;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPKeyedObject::Key()" />*/
	,
	_value: null,
	/*<BeginProperty Name="System.Object Infragistics.CPKeyedObject::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.CPKeyedObject::Value()" />*/
	,
	$type: new $.ig.Type('CPKeyedObject', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPKeyedObject" />*/

/*<BeginType Name="Infragistics.CPKeyedNumber" />*/

$.ig.util.defType('CPKeyedNumber', 'Object', {
	init: function (key, val) {
		$.ig.Object.prototype.init.call(this);
		this.key(key);
		this.value(val);
	},
	_key: null,
	/*<BeginProperty Name="System.String Infragistics.CPKeyedNumber::Key()" />*/
	key: function (value) {
		if (arguments.length === 1) {
			this._key = value;
			return value;
		} else {
			return this._key;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPKeyedNumber::Key()" />*/
	,
	_value: 0,
	/*<BeginProperty Name="System.Int64 Infragistics.CPKeyedNumber::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="System.Int64 Infragistics.CPKeyedNumber::Value()" />*/
	,
	$type: new $.ig.Type('CPKeyedNumber', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPKeyedNumber" />*/

/*<BeginType Name="Infragistics.CPLayoutParamsBase" />*/

$.ig.util.defType('CPLayoutParamsBase', 'Object', {
	init: function (width, height) {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('CPLayoutParamsBase', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPLayoutParamsBase" />*/

/*<BeginType Name="Infragistics.CPLayoutParams" />*/

$.ig.util.defType('CPLayoutParams', 'CPLayoutParamsBase', {
	init: function (initNumber, width, height) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		this.__co = -1;
		this.__cw = -1;
		$.ig.CPLayoutParamsBase.prototype.init.call(this, width, height);
		this.__opacity = 1;
	},
	init1: function (initNumber) {
		this.__co = -1;
		this.__cw = -1;
		$.ig.CPLayoutParamsBase.prototype.init.call(this, 0, 0);
		this.__opacity = 1;
	},
	__x: 0,
	__y: 0,
	__w: 0,
	__h: 0,
	__fx: 0,
	__fy: 0,
	__fw: 0,
	__fh: 0,
	__tx: 0,
	__ty: 0,
	__tw: 0,
	__th: 0,
	__opacity: 0,
	__toOpacity: 0,
	__fromOpacity: 0,
	__isAnimating: false,
	/*<BeginMethod Name="System.Void Infragistics.CPLayoutParams::Set(System.Int32, System.Int32, System.Int32, System.Int32, System.Double)" />*/
	set: function (x, y, w, h, opacity) {
		if (this.__isAnimating) {
			this.__tx = x;
			this.__ty = y;
			this.__tw = w;
			this.__th = h;
			this.__toOpacity = opacity;
		} else {
			this.__x = x;
			this.__y = y;
			this.__w = w;
			this.__h = h;
			this.__opacity = opacity;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPLayoutParams::Set(System.Int32, System.Int32, System.Int32, System.Int32, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLayoutParams::PrepareForAnimation()" />*/
	prepareForAnimation: function () {
		this.__fx = this.__tx = this.__x;
		this.__fy = this.__ty = this.__y;
		this.__fw = this.__tw = this.__w;
		this.__fh = this.__th = this.__h;
		this.__fromOpacity = this.__toOpacity = this.__opacity;
		this.__isAnimating = true;
	}
	/*<EndMethod Name="System.Void Infragistics.CPLayoutParams::PrepareForAnimation()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLayoutParams::FinishedAnimating(System.Boolean)" />*/
	finishedAnimating: function (updateFrame) {
		this.__isAnimating = false;
		if (updateFrame) {
			this.__x = this.__tx;
			this.__y = this.__ty;
			this.__w = this.__tw;
			this.__h = this.__th;
			this.__opacity = this.__toOpacity;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPLayoutParams::FinishedAnimating(System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPLayoutParams::IsAnimating()" />*/
	isAnimating: function () {
		return this.__isAnimating;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPLayoutParams::IsAnimating()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPLayoutParams::GetX(System.Double)" />*/
	getX: function (percent) {
		if (this.__isAnimating) {
			this.__x = this.transition(this.__fx, this.__tx, percent);
		}
		return this.__x;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPLayoutParams::GetX(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::GetXAsDouble(System.Double)" />*/
	getXAsDouble: function (percent) {
		if (this.__isAnimating) {
			this.__x = this.transition(this.__fx, this.__tx, percent);
			return this.transitionDouble(this.__fx, this.__tx, percent);
		}
		return this.__x;
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::GetXAsDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPLayoutParams::GetY(System.Double)" />*/
	getY: function (percent) {
		if (this.__isAnimating) {
			this.__y = this.transition(this.__fy, this.__ty, percent);
		}
		return this.__y;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPLayoutParams::GetY(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::GetYAsDouble(System.Double)" />*/
	getYAsDouble: function (percent) {
		if (this.__isAnimating) {
			this.__y = this.transition(this.__fy, this.__ty, percent);
			return this.transitionDouble(this.__fy, this.__ty, percent);
		}
		return this.__y;
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::GetYAsDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPLayoutParams::GetW(System.Double)" />*/
	getW: function (percent) {
		if (this.__isAnimating) {
			this.__w = this.transition(this.__fw, this.__tw, percent);
		}
		return this.__w;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPLayoutParams::GetW(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::GetWAsDouble(System.Double)" />*/
	getWAsDouble: function (percent) {
		if (this.__isAnimating) {
			this.__w = this.transition(this.__fw, this.__tw, percent);
			return this.transitionDouble(this.__fw, this.__tw, percent);
		}
		return this.__w;
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::GetWAsDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPLayoutParams::GetH(System.Double)" />*/
	getH: function (percent) {
		if (this.__isAnimating) {
			this.__h = this.transition(this.__fh, this.__th, percent);
		}
		return this.__h;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPLayoutParams::GetH(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::GetHAsDouble(System.Double)" />*/
	getHAsDouble: function (percent) {
		if (this.__isAnimating) {
			this.__h = this.transition(this.__fh, this.__th, percent);
			return this.transitionDouble(this.__fh, this.__th, percent);
		}
		return this.__h;
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::GetHAsDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::GetOpacity(System.Double)" />*/
	getOpacity: function (percent) {
		if (this.__isAnimating) {
			this.__opacity = this.transitionDouble(this.__fromOpacity, this.__toOpacity, percent);
		}
		return this.__opacity;
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::GetOpacity(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLayoutParams::TransitionDouble(System.Double, System.Double, System.Double)" />*/
	transitionDouble: function (from, to, percent) {
		return (from + (to - from) * percent);
	}
	/*<EndMethod Name="System.Double Infragistics.CPLayoutParams::TransitionDouble(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPLayoutParams::Transition(System.Int32, System.Int32, System.Double)" />*/
	transition: function (from, to, percent) {
		return $.ig.truncate((from + (to - from) * percent));
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPLayoutParams::Transition(System.Int32, System.Int32, System.Double)" />*/
	,
	__co: 0,
	/*<BeginMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreCurrentOpacity(System.Double)" />*/
	storeCurrentOpacity: function (o) {
		if (o != this.__co) {
			this.__co = o;
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreCurrentOpacity(System.Double)" />*/
	,
	__cw: 0,
	__ch: 0,
	/*<BeginMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreMeasureSize(System.Int32, System.Int32)" />*/
	storeMeasureSize: function (w, h) {
		if (w != this.__cw || h != this.__ch) {
			this.__cw = w;
			this.__ch = h;
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreMeasureSize(System.Int32, System.Int32)" />*/
	,
	__lx: 0,
	__ly: 0,
	__lw: 0,
	__lh: 0,
	/*<BeginMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreLayout(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	storeLayout: function (x, y, w, h) {
		if (x != this.__lx || y != this.__ly || this.__lw != w || this.__lh != h) {
			this.__lx = x;
			this.__ly = y;
			this.__lh = h;
			this.__lw = w;
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPLayoutParams::StoreLayout(System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('CPLayoutParams', $.ig.CPLayoutParamsBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPLayoutParams" />*/

/*<BeginType Name="Infragistics.CPLinearGradientBrush" />*/

$.ig.util.defType('CPLinearGradientBrush', 'Object', {
	_colors: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.CPLinearGradientBrush::Colors()" />*/
	colors: function (value) {
		if (arguments.length === 1) {
			this._colors = value;
			return value;
		} else {
			return this._colors;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.CPLinearGradientBrush::Colors()" />*/
	,
	_stops: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.CPLinearGradientBrush::Stops()" />*/
	stops: function (value) {
		if (arguments.length === 1) {
			this._stops = value;
			return value;
		} else {
			return this._stops;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.CPLinearGradientBrush::Stops()" />*/
	,
	_start: null,
	_end: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('CPLinearGradientBrush', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPLinearGradientBrush" />*/

/*<BeginType Name="Infragistics.CPLongTermMemoryStorageUtility" />*/

$.ig.util.defType('CPLongTermMemoryStorageUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveString(System.String, System.String)" />*/
	saveString: function (key, value) {
		$.ig.NativeLongTermStorageUtility.prototype.saveItemForKey(key, value);
	}
	/*<EndMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPLongTermMemoryStorageUtility::GetString(System.String)" />*/
	getString: function (key) {
		return $.ig.NativeLongTermStorageUtility.prototype.loadItemForKey(key);
	}
	/*<EndMethod Name="System.String Infragistics.CPLongTermMemoryStorageUtility::GetString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveJson(System.String, Infragistics.CPJSONObject)" />*/
	saveJson: function (key, value) {
		$.ig.NativeLongTermStorageUtility.prototype.saveItemForKey(key, value.convertToString());
	}
	/*<EndMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveJson(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPLongTermMemoryStorageUtility::GetJson(System.String)" />*/
	getJson: function (key) {
		var jsonString = $.ig.CPLongTermMemoryStorageUtility.prototype.getString(key);
		if (!$.ig.CPStringUtility.prototype.isNullOrEmpty(jsonString)) {
			return $.ig.CPJSONObject.prototype.createFromString(jsonString);
		}
		return new $.ig.CPJSONObject(1);
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPLongTermMemoryStorageUtility::GetJson(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::RemoveItem(System.String)" />*/
	removeItem: function (key) {
		$.ig.NativeLongTermStorageUtility.prototype.deleteItemForKey(key);
	}
	/*<EndMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::RemoveItem(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveBool(System.String, System.Boolean)" />*/
	saveBool: function (key, value) {
		var strValue = value ? "true" : "false";
		$.ig.NativeLongTermStorageUtility.prototype.saveItemForKey(key, strValue);
	}
	/*<EndMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveBool(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPLongTermMemoryStorageUtility::GetBool(System.String)" />*/
	getBool: function (key) {
		var strValue = $.ig.NativeLongTermStorageUtility.prototype.loadItemForKey(key);
		return strValue != null && strValue == "true";
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPLongTermMemoryStorageUtility::GetBool(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveDouble(System.String, System.Double)" />*/
	saveDouble: function (key, value) {
		var strValue = $.ig.NativeStringUtility.prototype.convertNumberToString(value);
		$.ig.NativeLongTermStorageUtility.prototype.saveItemForKey(key, strValue);
	}
	/*<EndMethod Name="System.Void Infragistics.CPLongTermMemoryStorageUtility::SaveDouble(System.String, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPLongTermMemoryStorageUtility::GetDouble(System.String)" />*/
	getDouble: function (key) {
		var strValue = $.ig.NativeLongTermStorageUtility.prototype.loadItemForKey(key);
		if ($.ig.CPStringUtility.prototype.isNullOrEmpty(strValue)) {
			return 0;
		}
		return $.ig.NativeStringUtility.prototype.parseNumber(strValue);
	}
	/*<EndMethod Name="System.Double Infragistics.CPLongTermMemoryStorageUtility::GetDouble(System.String)" />*/
	,
	$type: new $.ig.Type('CPLongTermMemoryStorageUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPLongTermMemoryStorageUtility" />*/

/*<BeginType Name="Infragistics.CPMathUtility" />*/

$.ig.util.defType('CPMathUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::RectContainsPoint(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	rectContainsPoint: function (x, y, w, h, px, py) {
		if (w < 0 || h < 0) {
			return false;
		}
		if (px < x || py < y) {
			return false;
		}
		w += x;
		h += y;
		return ((w < x || w > px) && (h < y || h > py));
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::RectContainsPoint(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::CircleContainsPoint(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	circleContainsPoint: function (centerX, centerY, radius, hitX, hitY) {
		if ((hitX - centerX) * (hitX - centerX) + (hitY - centerY) * (hitY - centerY) <= radius * radius) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::CircleContainsPoint(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::RectsIntersect(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	rectsIntersect1: function (x1, y1, w1, h1, x2, y2, w2, h2) {
		return (x1 < (x2 + w2) && (x1 + w1) > x2 && y1 < (y2 + h2) && (y1 + h1) > y2);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::RectsIntersect(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::RectsIntersect(Infragistics.NativeRect, Infragistics.NativeRect)" />*/
	rectsIntersect: function (rect1, rect2) {
		return $.ig.CPMathUtility.prototype.rectsIntersect1(rect1._x, rect1._y, rect1._width, rect1._height, rect2._x, rect2._y, rect2._width, rect2._height);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::RectsIntersect(Infragistics.NativeRect, Infragistics.NativeRect)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::ConvertDegreesToRadians(System.Single)" />*/
	convertDegreesToRadians: function (degrees) {
		return degrees * (Math.PI / 180);
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::ConvertDegreesToRadians(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::ConvertRadiansToDegrees(System.Single)" />*/
	convertRadiansToDegrees: function (radians) {
		return radians / (Math.PI / 180);
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::ConvertRadiansToDegrees(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::TranslateX(System.Single, System.Single, System.Single)" />*/
	translateX: function (x, distance, radians) {
		return x + (distance * Math.cos(radians));
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::TranslateX(System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::TranslateY(System.Single, System.Single, System.Single)" />*/
	translateY: function (y, distance, radians) {
		return y + (distance * Math.sin(radians));
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::TranslateY(System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::RotateX(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	rotateX: function (x, y, radians, centerX, centerY) {
		return Math.cos(radians) * (x - centerX) - Math.sin(radians) * (y - centerY) + centerX;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::RotateX(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::RotateY(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	rotateY: function (x, y, radians, centerX, centerY) {
		return Math.sin(radians) * (x - centerX) + Math.cos(radians) * (y - centerY) + centerY;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::RotateY(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::ConvertToLogarithmic(System.Double, System.Single)" />*/
	convertToLogarithmic: function (value, logBase) {
		return value <= 0 ? 0 : Math.log(value) / Math.log(logBase);
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::ConvertToLogarithmic(System.Double, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::MidPointBetween(System.Single, System.Single)" />*/
	midPointBetween: function (p1, p2) {
		return (p1 + p2) / 2;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::MidPointBetween(System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::TransitionNativeNumber(System.Single, System.Single, System.Double)" />*/
	transitionNativeNumber: function (from, to, percent) {
		return (from + (to - from) * percent);
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::TransitionNativeNumber(System.Single, System.Single, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::TransitionDouble(System.Double, System.Double, System.Double)" />*/
	transitionDouble: function (from, to, percent) {
		return (from + (to - from) * percent);
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::TransitionDouble(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPMathUtility::TransitionLong(System.Int64, System.Int64, System.Double)" />*/
	transitionLong: function (from, to, percent) {
		return $.ig.truncate((from + (to - from) * percent));
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPMathUtility::TransitionLong(System.Int64, System.Int64, System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.NativePoint Infragistics.CPMathUtility::TransitionPoint(Infragistics.NativePoint, Infragistics.NativePoint, System.Double)" />*/
	transitionPoint: function (from, to, percent) {
		return new $.ig.CPPoint($.ig.CPMathUtility.prototype.transitionNativeNumber(from._x, to._x, percent), $.ig.CPMathUtility.prototype.transitionNativeNumber(from._y, to._y, percent));
	}
	/*<EndMethod Name="Infragistics.NativePoint Infragistics.CPMathUtility::TransitionPoint(Infragistics.NativePoint, Infragistics.NativePoint, System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.NativeRect Infragistics.CPMathUtility::TransitionRect(Infragistics.NativeRect, Infragistics.NativeRect, System.Double)" />*/
	transitionRect: function (from, to, percent) {
		return new $.ig.CPRect(1, $.ig.CPMathUtility.prototype.transitionNativeNumber(from._x, to._x, percent), $.ig.CPMathUtility.prototype.transitionNativeNumber(from._y, to._y, percent), $.ig.CPMathUtility.prototype.transitionNativeNumber(from._width, to._width, percent), $.ig.CPMathUtility.prototype.transitionNativeNumber(from._height, to._height, percent));
	}
	/*<EndMethod Name="Infragistics.NativeRect Infragistics.CPMathUtility::TransitionRect(Infragistics.NativeRect, Infragistics.NativeRect, System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.NativeSize Infragistics.CPMathUtility::TransitionSize(Infragistics.NativeSize, Infragistics.NativeSize, System.Double)" />*/
	transitionSize: function (from, to, percent) {
		return new $.ig.CPSize(1, $.ig.CPMathUtility.prototype.transitionNativeNumber(from._width, to._width, percent), $.ig.CPMathUtility.prototype.transitionNativeNumber(from._height, to._height, percent));
	}
	/*<EndMethod Name="Infragistics.NativeSize Infragistics.CPMathUtility::TransitionSize(Infragistics.NativeSize, Infragistics.NativeSize, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.CPMathUtility::CalculateRoundRange(System.Double, System.Double, System.Boolean, System.Boolean)" />*/
	calculateRoundRange: function (min, max, fixedMin, fixedMax) {
		return $.ig.CPMathUtility.prototype.calculateRoundRange1(min, max, fixedMin, fixedMax, false, 0);
	}
	/*<EndMethod Name=" Infragistics.CPMathUtility::CalculateRoundRange(System.Double, System.Double, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name=" Infragistics.CPMathUtility::CalculateRoundRange(System.Double, System.Double, System.Boolean, System.Boolean, System.Boolean, System.Single)" />*/
	calculateRoundRange1: function (min, max, fixedMin, fixedMax, isLog, logBase) {
		var result = new Array(2);
		result[0] = min;
		result[1] = max;
		if (min == max) {
			return result;
		}
		if (isLog) {
			if (min != 0) {
				result[0] = Math.floor($.ig.CPMathUtility.prototype.convertToLogarithmic(min, logBase));
			}
			if (max != 0) {
				result[1] = Math.ceil($.ig.CPMathUtility.prototype.convertToLogarithmic(max, logBase));
			}
			return result;
		}
		var exp = $.ig.truncate(Math.floor(Math.log10(Math.abs(max - min))));
		var minIsNegative = min < 0;
		var maxIsNegative = max < 0;
		var roundExp = exp < 0 ? exp + 1 : exp - 1;
		var newMin = Math.abs(min);
		var newMax = Math.abs(max);
		if (min != 0 && !fixedMin) {
			var minExp = $.ig.truncate(Math.floor(Math.log10(newMin)));
			if (minExp < roundExp) {
				if (min > 0) {
					newMin = 0;
				} else {
					newMin = Math.pow(10, roundExp);
				}
			} else {
				newMin = newMin / Math.pow(10, exp);
				var baseMin = $.ig.truncate(newMin);
				if (min > 0) {
					newMin = baseMin + Math.floor((newMin - baseMin) * 10) / 10;
				} else {
					newMin = baseMin + Math.ceil((newMin - baseMin) * 10) / 10;
				}
				newMin = Math.pow(10, exp) * newMin;
			}
		}
		if (max != 0 && !fixedMax) {
			var maxExp = $.ig.truncate(Math.floor(Math.log10(newMax)));
			if (maxExp < roundExp) {
				if (max < 0) {
					newMax = 0;
				} else {
					newMax = Math.pow(10, roundExp);
				}
			} else {
				newMax = newMax / Math.pow(10, exp);
				var baseMax = $.ig.truncate(newMax);
				if (max < 0) {
					newMax = baseMax + Math.floor((newMax - baseMax) * 10) / 10;
				} else {
					newMax = baseMax + Math.ceil((newMax - baseMax) * 10) / 10;
				}
				newMax = Math.pow(10, exp) * newMax;
			}
		}
		result[0] = newMin * (minIsNegative ? -1 : 1);
		result[1] = newMax * (maxIsNegative ? -1 : 1);
		return result;
	}
	/*<EndMethod Name=" Infragistics.CPMathUtility::CalculateRoundRange(System.Double, System.Double, System.Boolean, System.Boolean, System.Boolean, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::NiceNumber(System.Double, System.Boolean, System.Int32, System.Boolean)" />*/
	niceNumber1: function (x, round, decimalPlaces, isStack100) {
		var number = $.ig.CPMathUtility.prototype.niceNumber(x, round);
		var digits = isStack100 ? 2 : decimalPlaces;
		var formattedNumber = Math.pow(10, -digits);
		if (number < 1 && number < formattedNumber) {
			return formattedNumber;
		}
		return number;
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::NiceNumber(System.Double, System.Boolean, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::NiceNumber(System.Double, System.Boolean)" />*/
	niceNumber: function (x, round) {
		if (x <= 0) {
			return 0;
		}
		var exp = $.ig.truncate(Math.floor(Math.log10(x)));
		var f = x / Math.pow(10, exp);
		if (round) {
			var nf = f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10;
			return nf * Math.pow(10, exp);
		} else {
			var nf1 = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
			return nf1 * Math.pow(10, exp);
		}
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::NiceNumber(System.Double, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::CalculateDegree(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	calculateDegree: function (value, min, max, start, span) {
		var percent = (value - min) / (max - min);
		return start + (span * percent);
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::CalculateDegree(System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::IsDegreeWithinRange(System.Single, System.Single, System.Single)" />*/
	isDegreeWithinRange: function (degree, start, end) {
		if ((start <= degree && end >= degree)) {
			return true;
		}
		var normStart = ($.ig.truncate(start) % 360);
		var normEnd = ($.ig.truncate(end) % 360);
		if (normEnd == normStart) {
			return true;
		}
		if (normStart > normEnd) {
			normStart -= 360;
		}
		return (normStart <= degree && normEnd >= degree);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::IsDegreeWithinRange(System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::DistanceFrom90(System.Single)" />*/
	distanceFrom90: function (degrees) {
		var normalized = ($.ig.truncate(degrees) % 360);
		if (normalized > 90 && normalized < 270) {
			return normalized - 90;
		}
		if (normalized >= 270) {
			return (360 - normalized) + 90;
		}
		return 90 - normalized;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::DistanceFrom90(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::DistanceFrom0(System.Single)" />*/
	distanceFrom0: function (degrees) {
		var normalized = ($.ig.truncate(degrees) % 360);
		if (normalized > 180 && normalized <= 360) {
			return 360 - degrees;
		}
		return normalized;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::DistanceFrom0(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.CPMathUtility::FindUmpMostDegree(System.Single, System.Single, System.Single, System.Boolean, System.Boolean)" />*/
	findUmpMostDegree: function (mostDegree, startDegrees, endDegrees, reverseDirection, vertical) {
		if (!$.ig.CPMathUtility.prototype.isDegreeWithinRange(mostDegree, startDegrees, endDegrees)) {
			var startDistance = vertical ? $.ig.CPMathUtility.prototype.distanceFrom90(startDegrees) : $.ig.CPMathUtility.prototype.distanceFrom0(startDegrees);
			var endDistance = vertical ? $.ig.CPMathUtility.prototype.distanceFrom90(endDegrees) : $.ig.CPMathUtility.prototype.distanceFrom90(endDegrees);
			if (startDistance > endDistance) {
				mostDegree = reverseDirection ? endDegrees : startDegrees;
			} else {
				mostDegree = reverseDirection ? startDegrees : endDegrees;
			}
		}
		return mostDegree;
	}
	/*<EndMethod Name="System.Single Infragistics.CPMathUtility::FindUmpMostDegree(System.Single, System.Single, System.Single, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::EaseOutCubic(System.Double)" />*/
	easeOutCubic: function (t) {
		t -= 1;
		var result = t * t * t + 1;
		return (result);
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::EaseOutCubic(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::CalculateDecelerationTime(System.Double, System.Double, System.Double, System.Double)" />*/
	calculateDecelerationTime: function (a, b, c, d) {
		var p1_1 = $.ig.intDivide(-1, 27) - d / 2;
		var p1_2 = $.ig.intDivide(-1, 9);
		var p1 = p1_1 + Math.sqrt(p1_1 * p1_1 + Math.pow(p1_2, 3));
		var p2 = p1_1 - Math.sqrt(p1_1 * p1_1 + Math.pow(p1_2, 3));
		var p1Sign = p1 > 0 ? 1 : -1;
		var p2Sign = p2 > 0 ? 1 : -1;
		var result = p1Sign * Math.pow(Math.abs(p1), $.ig.intDivide(1, 3)) + p2Sign * Math.pow(Math.abs(p2), $.ig.intDivide(1, 3)) - $.ig.intDivide(1, 3);
		return result;
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::CalculateDecelerationTime(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMathUtility::GetLinearSize(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	getLinearSize: function (minUnscaledValue, maxUnscaledValue, smallSize, largeSize, value) {
		var finite = true;
		finite = isFinite(value);
		if (value <= minUnscaledValue || !finite) {
			return smallSize;
		}
		if (value >= maxUnscaledValue) {
			return largeSize;
		}
		var result = smallSize + ((largeSize - smallSize) / (maxUnscaledValue - minUnscaledValue)) * (value - minUnscaledValue);
		return result;
	}
	/*<EndMethod Name="System.Double Infragistics.CPMathUtility::GetLinearSize(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMathUtility::IsObjectEqualToObject(System.Object, System.Object)" />*/
	isObjectEqualToObject: function (obj1, obj2) {
		var isNumber = typeof(obj1) == "number";
		if (isNumber) {
			return obj1 == obj2;
		}
		var areDates = obj1 instanceof Date && obj2 instanceof Date;
		if (areDates) {
			return obj1.getTime() === obj2.getTime();
		}
		if (obj1.equals(obj2)) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMathUtility::IsObjectEqualToObject(System.Object, System.Object)" />*/
	,
	$type: new $.ig.Type('CPMathUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPMathUtility" />*/

/*<BeginType Name="Infragistics.CPMemoryStateManager" />*/

$.ig.util.defType('CPMemoryStateManager', 'Object', {
	__inMemoryState: null,
	__inMemoryNonSessionState: null,
	/*<BeginMethod Name="Infragistics.CPMemoryStateManager Infragistics.CPMemoryStateManager::Manager()" />*/
	manager: function () {
		if ($.ig.CPMemoryStateManager.prototype.__manager == null) {
			$.ig.CPMemoryStateManager.prototype.__manager = new $.ig.CPMemoryStateManager();
		}
		return $.ig.CPMemoryStateManager.prototype.__manager;
	}
	/*<EndMethod Name="Infragistics.CPMemoryStateManager Infragistics.CPMemoryStateManager::Manager()" />*/
	,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		var key = $.ig.CPMemoryStateManager.prototype._sessionKey;
		var storage = sessionStorage.getItem(key);
		if (storage != null && !storage.equals("")) {
			this.__inMemoryState = $.ig.CPJSONObject.prototype.createFromString(storage);
		}
		if (this.__inMemoryState == null) {
			this.__inMemoryState = new $.ig.CPJSONObject(1);
		}
		this.__inMemoryNonSessionState = new $.ig.CPJSONObject(1);
	},
	/*<BeginProperty Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::State()" />*/
	state: function () {
		return $.ig.CPMemoryStateManager.prototype.manager().__inMemoryState;
	}
	/*<EndProperty Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::State()" />*/
	,
	/*<BeginProperty Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::NonSessionState()" />*/
	nonSessionState: function () {
		return $.ig.CPMemoryStateManager.prototype.manager().__inMemoryNonSessionState;
	}
	/*<EndProperty Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::NonSessionState()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMemoryStateManager::UpdateSessionStorage()" />*/
	updateSessionStorage: function () {
		try {
			var key = $.ig.CPMemoryStateManager.prototype._sessionKey;
			var stateString = $.ig.CPMemoryStateManager.prototype.state().convertToString();
			sessionStorage.setItem(key, stateString);
		}
		catch (e) {
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPMemoryStateManager::UpdateSessionStorage()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMemoryStateManager::ContainsKey(System.String)" />*/
	containsKey: function (key) {
		return $.ig.CPMemoryStateManager.prototype.state().containsKey(key) || $.ig.CPMemoryStateManager.prototype.nonSessionState().containsKey(key);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMemoryStateManager::ContainsKey(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMemoryStateManager::SetValue(System.String, System.Object)" />*/
	setValue: function (key, value) {
		$.ig.CPMemoryStateManager.prototype.state().setValueForKey(key, value);
		$.ig.CPMemoryStateManager.prototype.updateSessionStorage();
	}
	/*<EndMethod Name="System.Void Infragistics.CPMemoryStateManager::SetValue(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMemoryStateManager::SetValueNonSession(System.String, System.Object)" />*/
	setValueNonSession: function (key, value) {
		$.ig.CPMemoryStateManager.prototype.nonSessionState().setValueForKey(key, value);
	}
	/*<EndMethod Name="System.Void Infragistics.CPMemoryStateManager::SetValueNonSession(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMemoryStateManager::SetJsonValue(System.String, Infragistics.CPJSONObject)" />*/
	setJsonValue: function (key, value) {
		$.ig.CPMemoryStateManager.prototype.state().setJSONForKey(key, value);
		$.ig.CPMemoryStateManager.prototype.updateSessionStorage();
	}
	/*<EndMethod Name="System.Void Infragistics.CPMemoryStateManager::SetJsonValue(System.String, Infragistics.CPJSONObject)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CPMemoryStateManager::GetValue(System.String)" />*/
	getValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveObjectForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveObjectForKey(key);
	}
	/*<EndMethod Name="System.Object Infragistics.CPMemoryStateManager::GetValue(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPMemoryStateManager::GetStringValue(System.String)" />*/
	getStringValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveStringForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveStringForKey(key);
	}
	/*<EndMethod Name="System.String Infragistics.CPMemoryStateManager::GetStringValue(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPMemoryStateManager::GetBoolValue(System.String)" />*/
	getBoolValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveBoolForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveBoolForKey(key);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPMemoryStateManager::GetBoolValue(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPMemoryStateManager::GetDoubleValue(System.String)" />*/
	getDoubleValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveDoubleForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveDoubleForKey(key);
	}
	/*<EndMethod Name="System.Double Infragistics.CPMemoryStateManager::GetDoubleValue(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.CPMemoryStateManager::GetListValue(System.String)" />*/
	getListValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveListForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveListForKey(key);
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.CPMemoryStateManager::GetListValue(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::GetJsonValue(System.String)" />*/
	getJsonValue: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			return $.ig.CPMemoryStateManager.prototype.state().resolveJSONForKey(key);
		}
		return $.ig.CPMemoryStateManager.prototype.nonSessionState().resolveJSONForKey(key);
	}
	/*<EndMethod Name="Infragistics.CPJSONObject Infragistics.CPMemoryStateManager::GetJsonValue(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMemoryStateManager::Remove(System.String)" />*/
	remove: function (key) {
		if ($.ig.CPMemoryStateManager.prototype.state().containsKey(key)) {
			$.ig.CPMemoryStateManager.prototype.state().removeForKey(key);
		}
		if ($.ig.CPMemoryStateManager.prototype.nonSessionState().containsKey(key)) {
			$.ig.CPMemoryStateManager.prototype.nonSessionState().removeForKey(key);
		}
		$.ig.CPMemoryStateManager.prototype.updateSessionStorage();
	}
	/*<EndMethod Name="System.Void Infragistics.CPMemoryStateManager::Remove(System.String)" />*/
	,
	$type: new $.ig.Type('CPMemoryStateManager', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPMemoryStateManager" />*/

/*<BeginType Name="Infragistics.CPMonthInfo" />*/

$.ig.util.defType('CPMonthInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_numberOfDays: 0,
	_startDayOfWeek: 0,
	_endDayOfWeek: 0,
	_month: 0,
	_year: 0,
	__longName: null,
	__shortName: null,
	__monthAndYear: null,
	/*<BeginProperty Name="System.String Infragistics.CPMonthInfo::MonthAndYearString()" />*/
	monthAndYearString: function () {
		this.ensure();
		return this.__monthAndYear;
	}
	/*<EndProperty Name="System.String Infragistics.CPMonthInfo::MonthAndYearString()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPMonthInfo::Name()" />*/
	name: function () {
		this.ensure();
		return this.__longName;
	}
	/*<EndProperty Name="System.String Infragistics.CPMonthInfo::Name()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.CPMonthInfo::ShortName()" />*/
	shortName: function () {
		this.ensure();
		return this.__shortName;
	}
	/*<EndProperty Name="System.String Infragistics.CPMonthInfo::ShortName()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPMonthInfo::Ensure()" />*/
	ensure: function () {
		if (this.__monthAndYear == null) {
			var d = $.ig.CPDateTime.prototype.create(this._month, 1, this._year);
			this.__monthAndYear = d.monthAndYearString();
			this.__longName = d.monthNameString();
			this.__shortName = d.shortMonthNameString();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPMonthInfo::Ensure()" />*/
	,
	$type: new $.ig.Type('CPMonthInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPMonthInfo" />*/

/*<BeginType Name="Infragistics.CPObjectDelegate" />*/

$.ig.util.defType('CPObjectDelegate', 'Object', {
	$type: new $.ig.Type('CPObjectDelegate', null)
}, true);

/*<EndType Name="Infragistics.CPObjectDelegate" />*/

/*<BeginType Name="Infragistics.CPRange" />*/

$.ig.util.defType('CPRange', 'Object', {
	init: function (loc, len) {
		$.ig.Object.prototype.init.call(this);
		this._location = loc;
		this._length = len;
	},
	_location: 0,
	_length: 0,
	$type: new $.ig.Type('CPRange', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPRange" />*/

/*<BeginType Name="Infragistics.CPRegexGroup" />*/

$.ig.util.defType('CPRegexGroup', 'Object', {
	init: function (value) {
		$.ig.Object.prototype.init.call(this);
		this.value(value);
	},
	_value: null,
	/*<BeginProperty Name="System.String Infragistics.CPRegexGroup::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPRegexGroup::Value()" />*/
	,
	$type: new $.ig.Type('CPRegexGroup', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPRegexGroup" />*/

/*<BeginType Name="Infragistics.CPRegexMatch" />*/

$.ig.util.defType('CPRegexMatch', 'CPRegexGroup', {
	init: function (index, value, groups) {
		$.ig.CPRegexGroup.prototype.init.call(this, value);
		this.index(index);
		this.groups(groups);
	},
	_index: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.CPRegexMatch::Index()" />*/
	index: function (value) {
		if (arguments.length === 1) {
			this._index = value;
			return value;
		} else {
			return this._index;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.CPRegexMatch::Index()" />*/
	,
	_groups: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.CPRegexMatch::Groups()" />*/
	groups: function (value) {
		if (arguments.length === 1) {
			this._groups = value;
			return value;
		} else {
			return this._groups;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.CPRegexMatch::Groups()" />*/
	,
	$type: new $.ig.Type('CPRegexMatch', $.ig.CPRegexGroup.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPRegexMatch" />*/

/*<BeginType Name="Infragistics.CPStringUtility" />*/

$.ig.util.defType('CPStringUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name=" Infragistics.CPStringUtility::SplitString(System.String, )" />*/
	splitString: function (text, delimiters) {
		var delimiter = delimiters[0];
		for (var i = 1; i < delimiters.length; i++) {
			text = $.ig.util.replace(text, delimiters[i], delimiter);
		}
		return $.ig.NativeStringUtility.prototype.split(text, delimiter);
	}
	/*<EndMethod Name=" Infragistics.CPStringUtility::SplitString(System.String, )" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::Substring(System.String, System.Int32)" />*/
	substring: function (text, startIndex) {
		return $.ig.NativeStringUtility.prototype.substring(text, startIndex, text.length - startIndex);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::Substring(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::Substring(System.String, System.Int32, System.Int32)" />*/
	substring1: function (text, startIndex, length) {
		return $.ig.NativeStringUtility.prototype.substring(text, startIndex, length);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::Substring(System.String, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::GenerateUniquieID()" />*/
	generateUniquieID: function () {
		return $.ig.NativeStringUtility.prototype.generateUID();
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::GenerateUniquieID()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPDictionary Infragistics.CPStringUtility::GetQueryParametersDictionary(System.String)" />*/
	getQueryParametersDictionary: function (urlString) {
		var dict = new $.ig.Dictionary(0);
		var queryStart = $.ig.NativeStringUtility.prototype.indexOf(urlString, "?");
		if (queryStart < 0) {
			return dict;
		}
		var fragmentIndex = $.ig.NativeStringUtility.prototype.indexOf(urlString, "#");
		var queryPostIndex = fragmentIndex < 0 ? urlString.length : fragmentIndex;
		var queryStr = $.ig.NativeStringUtility.prototype.substringToIndex(urlString, queryStart + 1, queryPostIndex);
		var parts = $.ig.NativeStringUtility.prototype.split(queryStr, "&");
		for (var i = 0; i < parts.length; i++) {
			var part = parts[i];
			var idxEqual = $.ig.NativeStringUtility.prototype.indexOf(part, "=");
			var name = idxEqual < 0 ? part : $.ig.NativeStringUtility.prototype.substringToIndex(part, 0, idxEqual);
			var value = idxEqual < 0 ? "" : $.ig.NativeStringUtility.prototype.substringToIndex(part, idxEqual + 1, part.length);
			dict.item($.ig.NativeStringUtility.prototype.uRLDecodeString(name), $.ig.NativeStringUtility.prototype.uRLDecodeString(value));
		}
		return dict;
	}
	/*<EndMethod Name="Infragistics.CPDictionary Infragistics.CPStringUtility::GetQueryParametersDictionary(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::GetQueryString(System.String)" />*/
	getQueryString: function (urlString) {
		if (urlString == null) {
			return null;
		}
		var queryStart = $.ig.NativeStringUtility.prototype.indexOf(urlString, "?");
		if (queryStart < 0) {
			return null;
		}
		return $.ig.CPStringUtility.prototype.substring(urlString, queryStart + 1);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::GetQueryString(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::GetURLAuthority(System.String)" />*/
	getURLAuthority: function (urlString) {
		if (urlString == null) {
			return null;
		}
		var separator = "://";
		var start = $.ig.NativeStringUtility.prototype.indexOf(urlString, separator);
		if (start < 0) {
			return null;
		}
		var startIndex = start + separator.length;
		var end = $.ig.NativeStringUtility.prototype.indexOf1(urlString, "/", startIndex);
		return end < 0 ? $.ig.CPStringUtility.prototype.substring(urlString, startIndex) : $.ig.NativeStringUtility.prototype.substringToIndex(urlString, startIndex, end);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::GetURLAuthority(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::GetPathFromURI(System.String)" />*/
	getPathFromURI: function (urlString) {
		if (urlString == null) {
			return null;
		}
		var separator = "://";
		var start = $.ig.NativeStringUtility.prototype.indexOf(urlString, separator);
		if (start < 0) {
			return null;
		}
		var pathStart = $.ig.NativeStringUtility.prototype.indexOf1(urlString, "/", start + separator.length);
		if (pathStart < 0) {
			return null;
		}
		return $.ig.CPStringUtility.prototype.substring(urlString, pathStart);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::GetPathFromURI(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::GetPathFromURL(System.String)" />*/
	getPathFromURL: function (urlString) {
		var protocolLength = ("https://").length;
		var protocolLessUrlString = $.ig.CPStringUtility.prototype.substring(urlString, protocolLength);
		var idxSlash = $.ig.NativeStringUtility.prototype.indexOf(protocolLessUrlString, "/");
		if (idxSlash < 0) {
			return "";
		} else {
			var idxQuestionMark = $.ig.NativeStringUtility.prototype.indexOf(protocolLessUrlString, "?");
			if (idxQuestionMark < 0) {
				return $.ig.CPStringUtility.prototype.substring(protocolLessUrlString, idxSlash);
			} else {
				return $.ig.NativeStringUtility.prototype.substringToIndex(protocolLessUrlString, idxSlash, idxQuestionMark);
			}
		}
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::GetPathFromURL(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::URLByRemovingPath(System.String)" />*/
	uRLByRemovingPath: function (urlString) {
		if (urlString == null) {
			return null;
		}
		var protocolLength = ("https://").length;
		var protocolLessUrlString = $.ig.CPStringUtility.prototype.substring(urlString, protocolLength);
		var idxSlash = $.ig.NativeStringUtility.prototype.indexOf(protocolLessUrlString, "/");
		if (idxSlash < 0) {
			return urlString;
		} else {
			return $.ig.NativeStringUtility.prototype.substring(urlString, 0, idxSlash + protocolLength);
		}
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::URLByRemovingPath(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::IsNumeric(System.String)" />*/
	isNumeric: function (value) {
		return $.ig.NativeStringUtility.prototype.isNumeric(value);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::IsNumeric(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::Repeat(System.String, System.Int32)" />*/
	repeat: function (str, count) {
		var s = "";
		for (var i = 0; i < count; i++) {
			s = s + str;
		}
		return s;
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::Repeat(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::IsNullOrEmpty(System.String)" />*/
	isNullOrEmpty: function (str) {
		return str == null || str.length == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::IsNullOrEmpty(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::IsBlank(System.String)" />*/
	isBlank: function (str) {
		return str == null || $.ig.NativeStringUtility.prototype.trim(str).length == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::IsBlank(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::EnsureSchemeForWWWUrl(System.String)" />*/
	ensureSchemeForWWWUrl: function (url) {
		if ($.ig.CPStringUtility.prototype.isWWWUrlWithNoScheme(url)) {
			url = "http://" + url;
		}
		return url;
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::EnsureSchemeForWWWUrl(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::IsWWWUrlWithNoScheme(System.String)" />*/
	isWWWUrlWithNoScheme: function (url) {
		if ($.ig.CPStringUtility.prototype.isNullOrEmpty(url)) {
			return false;
		}
		url = url.toLowerCase();
		if ($.ig.NativeStringUtility.prototype.startsWith(url, "www.")) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::IsWWWUrlWithNoScheme(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::IsValidEmailAddress(System.String)" />*/
	isValidEmailAddress: function (s) {
		if ($.ig.CPStringUtility.prototype.isNullOrEmpty(s)) {
			return false;
		}
		if ($.ig.NativeStringUtility.prototype.startsWith(s, "@")) {
			return false;
		}
		return $.ig.NativeStringUtility.prototype.isValidEmailAddress(s);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::IsValidEmailAddress(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CPStringUtility::CompareVersionString(System.String, System.String)" />*/
	compareVersionString: function (v1, v2) {
		var comps1 = $.ig.NativeStringUtility.prototype.split(v1, ".");
		var comps2 = $.ig.NativeStringUtility.prototype.split(v2, ".");
		var shorterArrayLength = comps1.length < comps2.length ? comps1.length : comps2.length;
		for (var i = 0; i < shorterArrayLength; i++) {
			var comp1 = comps1[i];
			var intComp1 = $.ig.NativeStringUtility.prototype.convertToInt(comp1, 0);
			var comp2 = comps2[i];
			var intComp2 = $.ig.NativeStringUtility.prototype.convertToInt(comp2, 0);
			if (intComp1 < intComp2) {
				return -1;
			} else if (intComp1 > intComp2) {
				return 1;
			}
		}
		var lengthierArray = comps1.length > comps2.length ? comps1 : comps2;
		for (var i1 = shorterArrayLength; i1 < lengthierArray.length; i1++) {
			var comp = lengthierArray[i1];
			var intComp = $.ig.NativeStringUtility.prototype.convertToInt(comp, 0);
			if (intComp != 0) {
				return lengthierArray == comps2 ? -1 : 1;
			}
		}
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CPStringUtility::CompareVersionString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPStringUtility::AreStringsEqual(System.String, System.String)" />*/
	areStringsEqual: function (val1, val2) {
		if (val1 == null) {
			return val2 == null;
		} else {
			if (val2 != null) {
				return val1.equals(val2);
			}
			return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPStringUtility::AreStringsEqual(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String)" />*/
	updateStringWithParams: function (original, param1) {
		return $.ig.NativeStringUtility.prototype.replace(original, "%1", param1);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String)" />*/
	updateStringWithParams1: function (original, param1, param2) {
		return $.ig.NativeStringUtility.prototype.replace($.ig.CPStringUtility.prototype.updateStringWithParams(original, param1), "%2", param2);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String, System.String)" />*/
	updateStringWithParams2: function (original, param1, param2, param3) {
		return $.ig.NativeStringUtility.prototype.replace($.ig.CPStringUtility.prototype.updateStringWithParams1(original, param1, param2), "%3", param3);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String, System.String, System.String)" />*/
	updateStringWithParams3: function (original, param1, param2, param3, param4) {
		return $.ig.NativeStringUtility.prototype.replace($.ig.CPStringUtility.prototype.updateStringWithParams2(original, param1, param2, param3), "%4", param4);
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::UpdateStringWithParams(System.String, System.String, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::Truncate(System.String, System.Int32, System.Boolean, System.Boolean)" />*/
	truncate: function (value, maxLength, showEllipsis, encloseInQuotationMarks) {
		if ($.ig.CPStringUtility.prototype.isNullOrEmpty(value)) {
			return value;
		}
		var unquoted = null;
		if (value.length <= maxLength) {
			unquoted = value;
		} else {
			unquoted = $.ig.CPStringUtility.prototype.substring1(value, 0, maxLength - 3);
		}
		if (showEllipsis) {
			unquoted = unquoted + "...";
		}
		var retVal = unquoted;
		if (encloseInQuotationMarks) {
			retVal = "\"" + unquoted + "\"";
		}
		return retVal;
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::Truncate(System.String, System.Int32, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CPStringUtility::UpdateCharacterAtIndex(System.String, System.Int32, System.Char)" />*/
	updateCharacterAtIndex: function (val, index, c) {
		var newVal = "";
		if (index > 0) {
			newVal = $.ig.NativeStringUtility.prototype.substring(val, 0, index);
		}
		newVal = newVal + $.ig.NativeStringUtility.prototype.charToString(c);
		var length = val.length;
		if (index < length - 1) {
			newVal = $.ig.NativeStringUtility.prototype.substring(val, index + 1, (length - index) + 1);
		}
		return newVal;
	}
	/*<EndMethod Name="System.String Infragistics.CPStringUtility::UpdateCharacterAtIndex(System.String, System.Int32, System.Char)" />*/
	,
	$type: new $.ig.Type('CPStringUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPStringUtility" />*/

/*<BeginType Name="Infragistics.CPTimer" />*/

$.ig.util.defType('CPTimer', 'AnimationHelperBase', {
	init: function () {
		$.ig.AnimationHelperBase.prototype.init.call(this);
	},
	__timer: null,
	__duration: 0,
	__startTime: 0,
	__callback: null,
	__completeCallback: null,
	__frameCallback: null,
	__repeats: false,
	__ticks: 0,
	__numberOfFrames: 0,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, Infragistics.AnimationTickBlock)" />*/
	start: function (duration, action) {
		this.start2(duration, false, action);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, Infragistics.AnimationTickBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	start1: function (duration, action, timerComplete) {
		this.start3(duration, false, action, timerComplete);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Boolean, Infragistics.AnimationTickBlock)" />*/
	start2: function (duration, repeats, action) {
		this.start3(duration, repeats, action, null);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Boolean, Infragistics.AnimationTickBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::StartAndFireOnce(System.Double, Infragistics.ExecutionBlock)" />*/
	startAndFireOnce: function (interval, action) {
		this.start5(interval, interval, function (t) {
		}, action);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::StartAndFireOnce(System.Double, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::StartUsingFrames(System.Int32, Infragistics.IntBlock, Infragistics.ExecutionBlock)" />*/
	startUsingFrames: function (frameCount, frameBlock, timerComplete) {
		this.__numberOfFrames = frameCount;
		this.__ticks = 0;
		this.stop();
		this.__frameCallback = frameBlock;
		this.__completeCallback = timerComplete;
		this.__startTime = this.getCurrentTime();
		this.__timer = this.nextTimer();
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::StartUsingFrames(System.Int32, Infragistics.IntBlock, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CPTimer::IsActive()" />*/
	isActive: function () {
		return this.__timer != null;
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPTimer::IsActive()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Boolean, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	start3: function (duration, repeats, action, timerComplete) {
		this.__ticks = 0;
		this.stop();
		this.__repeats = repeats;
		this.__duration = duration * 1000;
		this.__callback = action;
		this.__completeCallback = timerComplete;
		this.__startTime = this.getCurrentTime();
		this.__timer = this.nextTimer();
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Boolean, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Double, Infragistics.AnimationTickBlock)" />*/
	start4: function (timeout, interval, action) {
		this.start5(timeout, interval, action, null);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Double, Infragistics.AnimationTickBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Double, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	start5: function (timeout, interval, action, timerComplete) {
		this.__ticks = 0;
		this.stop();
		this.__repeats = false;
		this.__duration = timeout * 1000;
		this.__callback = action;
		this.__completeCallback = timerComplete;
		this.__startTime = this.getCurrentTime();
		this.__timer = this.nextTimer1(interval);
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Start(System.Double, System.Double, Infragistics.AnimationTickBlock, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPTimer::GetNow()" />*/
	getNow: function () {
		return this.getCurrentTime();
	}
	/*<EndMethod Name="System.Double Infragistics.CPTimer::GetNow()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Tick()" />*/
	tick: function () {
		$.ig.AnimationHelperBase.prototype.tick.call(this);
		this.__ticks++;
		if (this.__callback != null && this.__timer != null) {
			var now = this.getCurrentTime();
			var percent = Math.min((now - this.__startTime) / this.__duration, 1);
			this.__callback(percent);
			if (percent == 1) {
				if (this.__completeCallback != null) {
					this.__completeCallback();
				}
				this.stopInternal();
				if (this.__repeats) {
					this.start3(this.__duration / 1000, true, this.__callback, this.__completeCallback);
				} else {
					this.__callback = null;
					this.__completeCallback = null;
				}
			}
		} else if (this.__frameCallback != null && this.__timer != null) {
			if (this.__ticks > this.__numberOfFrames) {
				if (this.__completeCallback != null) {
					this.__completeCallback();
				}
				this.stop();
			} else {
				var frame = this.__ticks - 1;
				this.__frameCallback(frame);
			}
		} else {
			this.stop();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Tick()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::StopInternal()" />*/
	stopInternal: function () {
		if (this.__timer != null) {
			this.__timer.stop();
			this.__timer = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::StopInternal()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CPTimer::Stop()" />*/
	stop: function () {
		this.stopInternal();
		this.__callback = null;
		this.__repeats = false;
	}
	/*<EndMethod Name="System.Void Infragistics.CPTimer::Stop()" />*/
	,
	$type: new $.ig.Type('CPTimer', $.ig.AnimationHelperBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPTimer" />*/

/*<BeginType Name="Infragistics.DateUtility" />*/

$.ig.util.defType('DateUtility', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::CreateDate(System.Int32, System.Int32, System.Int32)" />*/
	createDate: function (month, day, year) {
		return $.ig.NativeDateUtility.prototype.createDateForMonth(month, day, year, 0, 0);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::CreateDate(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::CreateDate(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createDate1: function (month, day, year, hour, minute) {
		return $.ig.NativeDateUtility.prototype.createDateForMonth(month, day, year, hour, minute);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::CreateDate(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::CreateUtcDate(System.Int32, System.Int32, System.Int32)" />*/
	createUtcDate: function (month, day, year) {
		return $.ig.NativeDateUtility.prototype.createUtcDateForMonth(month, day, year, 0, 0);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::CreateUtcDate(System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::CreateUtcDate(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	createUtcDate1: function (month, day, year, hour, minute) {
		return $.ig.NativeDateUtility.prototype.createUtcDateForMonth(month, day, year, hour, minute);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::CreateUtcDate(System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::ConvertDateToISO8601(System.DateTime)" />*/
	convertDateToISO8601: function (date) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, $.ig.DateUtility.prototype.getISO8601BasicFormatString(), false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::ConvertDateToISO8601(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::ConvertDateToDateOnlyISO8601(System.DateTime)" />*/
	convertDateToDateOnlyISO8601: function (date) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, "yyyy-MM-dd", false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::ConvertDateToDateOnlyISO8601(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetISO8601BasicFormatString()" />*/
	getISO8601BasicFormatString: function () {
		return "yyyy-MM-dd'T'HH:mm:ss";
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetISO8601BasicFormatString()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatString()" />*/
	getRFC3339FormatString: function () {
		return "yyyy-MM-dd'T'HH:mm:ss'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatString()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithTimezone()" />*/
	getRFC3339FormatStringWithTimezone: function () {
		return "yyyy-MM-dd'T'HH:mm:ssK";
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithTimezone()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithtMilliseconds()" />*/
	getRFC3339FormatStringWithtMilliseconds: function () {
		return "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithtMilliseconds()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithtMillisecondsDigits(System.Int32)" />*/
	getRFC3339FormatStringWithtMillisecondsDigits: function (digits) {
		var millisecondsDigits = "";
		for (var i = 0; i < digits; i++) {
			millisecondsDigits = millisecondsDigits + "S";
		}
		return "yyyy-MM-dd'T'HH:mm:ss." + millisecondsDigits + "'Z'";
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetRFC3339FormatStringWithtMillisecondsDigits(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::ConvertDateToRFC3339(System.DateTime)" />*/
	convertDateToRFC3339: function (date) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, $.ig.DateUtility.prototype.getRFC3339FormatString(), false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::ConvertDateToRFC3339(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::ConvertDateToRFC3339(System.DateTime, System.Int32)" />*/
	convertDateToRFC33391: function (date, hoursToAdd) {
		var updatedDate = $.ig.NativeDateUtility.prototype.addToDate(date, 0, 0, 0, 1, 0);
		return $.ig.NativeDateUtility.prototype.getStringForDate(updatedDate, $.ig.DateUtility.prototype.getRFC3339FormatString(), false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::ConvertDateToRFC3339(System.DateTime, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::ConvertLocalTimeToUTC(System.DateTime)" />*/
	convertLocalTimeToUTC: function (local) {
		return $.ig.NativeDateUtility.prototype.convertLocalTimeToUTC(local);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::ConvertLocalTimeToUTC(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::Now()" />*/
	now: function () {
		return $.ig.NativeDateUtility.prototype.now();
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::Now()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::FormatDateToRFC3339UTC(System.Nullable)" />*/
	formatDateToRFC3339UTC: function (dateTime) {
		if ($.ig.NativeNullableUtility.prototype.isNullDateTime(dateTime)) {
			return null;
		}
		return $.ig.NativeDateUtility.prototype.getStringForDate(dateTime.value(), $.ig.DateUtility.prototype.getRFC3339FormatString(), false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::FormatDateToRFC3339UTC(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::AddToDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	addToDate: function (date, years, months, days, hours, minutes) {
		return $.ig.NativeDateUtility.prototype.addToDate(date, years, months, days, hours, minutes);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::AddToDate(System.DateTime, System.Int32, System.Int32, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetDayForDate(System.DateTime)" />*/
	getDayForDate: function (date) {
		return $.ig.NativeDateUtility.prototype.getDayForDate(date, false);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetDayForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetMonthForDate(System.DateTime)" />*/
	getMonthForDate: function (date) {
		return $.ig.NativeDateUtility.prototype.getMonthForDate(date, false);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetMonthForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetYearForDate(System.DateTime)" />*/
	getYearForDate: function (date) {
		return $.ig.NativeDateUtility.prototype.getYearForDate(date, false);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetYearForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetHourForDate(System.DateTime)" />*/
	getHourForDate: function (date) {
		return $.ig.NativeDateUtility.prototype.getHourForDate(date, false);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetHourForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetMinuteForDate(System.DateTime)" />*/
	getMinuteForDate: function (date) {
		return $.ig.NativeDateUtility.prototype.getMinuteForDate(date, false);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetMinuteForDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetStringForLocalDate(System.DateTime, System.String)" />*/
	getStringForLocalDate: function (date, format) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, format, false);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetStringForLocalDate(System.DateTime, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetStringForUTCDate(System.DateTime, System.String)" />*/
	getStringForUTCDate: function (date, format) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, format, true);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetStringForUTCDate(System.DateTime, System.String)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::ConvertLocalDateToMidnight(System.DateTime)" />*/
	convertLocalDateToMidnight: function (date) {
		var day = $.ig.DateUtility.prototype.getDayForDate(date);
		var month = $.ig.DateUtility.prototype.getMonthForDate(date);
		var year = $.ig.DateUtility.prototype.getYearForDate(date);
		return $.ig.NativeDateUtility.prototype.createDateForMonth(month, day, year, 0, 0);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::ConvertLocalDateToMidnight(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetSimpleDateString(System.DateTime, System.Boolean)" />*/
	getSimpleDateString: function (date, isUtcDate) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, "MMM dd, yyyy", isUtcDate);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetSimpleDateString(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetShortMonthAndDateString(System.DateTime, System.Boolean)" />*/
	getShortMonthAndDateString: function (date, isUtcDate) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, "MMM dd", isUtcDate);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetShortMonthAndDateString(System.DateTime, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetShortMonthAndDateString(System.DateTime, System.Boolean, System.Boolean)" />*/
	getShortMonthAndDateString1: function (date, includeYearIfDifferentThanThisYear, isUtcDate) {
		if (includeYearIfDifferentThanThisYear) {
			var thisYear = $.ig.DateUtility.prototype.getYearForDate($.ig.DateUtility.prototype.now());
			var dateYear = $.ig.DateUtility.prototype.getYearForDate(date);
			if (thisYear != dateYear) {
				return $.ig.DateUtility.prototype.getSimpleDateString(date, isUtcDate);
			}
		}
		return $.ig.DateUtility.prototype.getShortMonthAndDateString(date, isUtcDate);
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetShortMonthAndDateString(System.DateTime, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetTime(System.DateTime)" />*/
	getTime: function (date) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, "h:mm a", false).toUpperCase();
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetTime(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.DateUtility::GetShortDateAndTime(System.DateTime)" />*/
	getShortDateAndTime: function (date) {
		return $.ig.NativeDateUtility.prototype.getStringForDate(date, "MM/dd h:mm a", false).toUpperCase();
	}
	/*<EndMethod Name="System.String Infragistics.DateUtility::GetShortDateAndTime(System.DateTime)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.DateUtility::DayStrings()" />*/
	dayStrings: function () {
		if ($.ig.DateUtility.prototype.__dayStrings == null) {
			$.ig.DateUtility.prototype.__dayStrings = new $.ig.Array();
			for (var i = 1; i <= 31; i++) {
				$.ig.DateUtility.prototype.__dayStrings.add(i.toString());
			}
		}
		return $.ig.DateUtility.prototype.__dayStrings;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.DateUtility::DayStrings()" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.DateUtility::YearStrings(System.Int32, System.Int32)" />*/
	yearStrings: function (year, numYears) {
		var yearStrings = new $.ig.Array();
		var start = $.ig.truncate((Math.floor(year / 10) * 10));
		for (var i = start; i < start + numYears; i++) {
			yearStrings.add(i.toString());
		}
		return yearStrings;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.DateUtility::YearStrings(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DateUtility::IsToday(System.DateTime)" />*/
	isToday: function (date) {
		var now = $.ig.DateUtility.prototype.now();
		return $.ig.DateUtility.prototype.isSameDay(now, date);
	}
	/*<EndMethod Name="System.Boolean Infragistics.DateUtility::IsToday(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DateUtility::IsYesterday(System.DateTime)" />*/
	isYesterday: function (date) {
		var now = $.ig.DateUtility.prototype.addToDate($.ig.DateUtility.prototype.now(), 0, 0, -1, 0, 0);
		return $.ig.DateUtility.prototype.isSameDay(now, date);
	}
	/*<EndMethod Name="System.Boolean Infragistics.DateUtility::IsYesterday(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DateUtility::IsSameDay(System.DateTime, System.DateTime)" />*/
	isSameDay: function (d1, d2) {
		var todayDay = $.ig.DateUtility.prototype.getDayForDate(d1);
		var todayYear = $.ig.DateUtility.prototype.getYearForDate(d1);
		var todayMOnth = $.ig.DateUtility.prototype.getMonthForDate(d1);
		var day = $.ig.DateUtility.prototype.getDayForDate(d2);
		var year = $.ig.DateUtility.prototype.getYearForDate(d2);
		var month = $.ig.DateUtility.prototype.getMonthForDate(d2);
		return (day == todayDay && year == todayYear && month == todayMOnth);
	}
	/*<EndMethod Name="System.Boolean Infragistics.DateUtility::IsSameDay(System.DateTime, System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetHourAmPm(System.DateTime)" />*/
	getHourAmPm: function (date) {
		var time = $.ig.DateUtility.prototype.getTime(date);
		var delimiters = new Array(1);
		delimiters[0] = ":";
		var hourString = $.ig.CPStringUtility.prototype.splitString(time, delimiters)[0];
		return $.ig.NativeStringUtility.prototype.convertToInt(hourString, 0);
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetHourAmPm(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DateUtility::ConvertSecondsToDays(System.Int64)" />*/
	convertSecondsToDays: function (ticks) {
		return ticks / (60 * 60 * 24);
	}
	/*<EndMethod Name="System.Double Infragistics.DateUtility::ConvertSecondsToDays(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.DateUtility::GetFirstDayOfWeek()" />*/
	getFirstDayOfWeek: function () {
		return $.ig.NativeDateUtility.prototype.getFirstDayOfWeek();
	}
	/*<EndMethod Name="System.Int32 Infragistics.DateUtility::GetFirstDayOfWeek()" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::GetFirstDayOfWeekDate(System.DateTime, System.Int32)" />*/
	getFirstDayOfWeekDate: function (date, firstDayOfWeek) {
		var dow = $.ig.NativeDateUtility.prototype.getDayOfWeek(date);
		if (dow == firstDayOfWeek) {
			return date;
		}
		var delta = firstDayOfWeek < dow ? dow - firstDayOfWeek : (7 - firstDayOfWeek) + dow;
		return $.ig.DateUtility.prototype.addToDate(date, 0, 0, delta * -1, 0, 0);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::GetFirstDayOfWeekDate(System.DateTime, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CPList Infragistics.DateUtility::GetDayOfWeekNames(System.Int32, System.Boolean)" />*/
	getDayOfWeekNames: function (firstDayOfWeek, shortNames) {
		var unordered = shortNames ? $.ig.NativeDateUtility.prototype.getDaysOfWeekShortNames() : $.ig.NativeDateUtility.prototype.getDaysOfWeekNames();
		if (firstDayOfWeek == 0) {
			return unordered;
		}
		var ordered = new $.ig.Array();
		for (var i = firstDayOfWeek; i < 7; i++) {
			ordered.add(unordered[i]);
		}
		for (var i1 = 0; i1 < firstDayOfWeek; i1++) {
			ordered.add(unordered[i1]);
		}
		return ordered;
	}
	/*<EndMethod Name="Infragistics.CPList Infragistics.DateUtility::GetDayOfWeekNames(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.DateUtility::AddHoursToTimeInSeconds(System.Int64, System.Int32)" />*/
	addHoursToTimeInSeconds: function (timeInSeconds, hours) {
		var additionalSeconds = (hours * 60 * 60);
		return timeInSeconds + additionalSeconds;
	}
	/*<EndMethod Name="System.Int64 Infragistics.DateUtility::AddHoursToTimeInSeconds(System.Int64, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::GetMidnightUTCVersionOfLocalDate(System.DateTime)" />*/
	getMidnightUTCVersionOfLocalDate: function (date) {
		return $.ig.NativeDateUtility.prototype.createUtcDateForMonth($.ig.NativeDateUtility.prototype.getMonthForDate(date, false), $.ig.NativeDateUtility.prototype.getDayForDate(date, false), $.ig.NativeDateUtility.prototype.getYearForDate(date, false), 0, 0);
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::GetMidnightUTCVersionOfLocalDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::GetUTCVersionOfLocalDate(System.DateTime)" />*/
	getUTCVersionOfLocalDate: function (date) {
		return $.ig.NativeDateUtility.prototype.createUtcDateForMonth1($.ig.NativeDateUtility.prototype.getMonthForDate(date, false), $.ig.NativeDateUtility.prototype.getDayForDate(date, false), $.ig.NativeDateUtility.prototype.getYearForDate(date, false), $.ig.NativeDateUtility.prototype.getHourForDate(date, false), $.ig.NativeDateUtility.prototype.getMinuteForDate(date, false), $.ig.NativeDateUtility.prototype.getSecondForDate(date, false));
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::GetUTCVersionOfLocalDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.DateTime Infragistics.DateUtility::TreateUTCDateLikeLocalDate(System.DateTime)" />*/
	treateUTCDateLikeLocalDate: function (date) {
		return $.ig.NativeDateUtility.prototype.createDateForMonth($.ig.NativeDateUtility.prototype.getMonthForDate(date, true), $.ig.NativeDateUtility.prototype.getDayForDate(date, true), $.ig.NativeDateUtility.prototype.getYearForDate(date, true), $.ig.NativeDateUtility.prototype.getHourForDate(date, true), $.ig.NativeDateUtility.prototype.getMinuteForDate(date, true));
	}
	/*<EndMethod Name="System.DateTime Infragistics.DateUtility::TreateUTCDateLikeLocalDate(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.DateUtility::TreateNullableUTCDateLikeLocalDate(System.Nullable)" />*/
	treateNullableUTCDateLikeLocalDate: function (wrappedDate) {
		if ($.ig.NativeNullableUtility.prototype.isNullDateTime(wrappedDate)) {
			return wrappedDate;
		}
		var date = $.ig.NativeNullableUtility.prototype.unwrapDateTime(wrappedDate);
		return $.ig.util.toNullable($.ig.Date.prototype.$type, $.ig.DateUtility.prototype.treateUTCDateLikeLocalDate(date));
	}
	/*<EndMethod Name="System.Nullable Infragistics.DateUtility::TreateNullableUTCDateLikeLocalDate(System.Nullable)" />*/
	,
	$type: new $.ig.Type('DateUtility', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DateUtility" />*/

/*<BeginType Name="Infragistics.CPDropInfo" />*/

$.ig.util.defType('CPDropInfo', 'Object', {
	_files: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.CPDropInfo::Files()" />*/
	files: function (value) {
		if (arguments.length === 1) {
			this._files = value;
			return value;
		} else {
			return this._files;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.CPDropInfo::Files()" />*/
	,
	_lockedFiles: null,
	/*<BeginProperty Name="Infragistics.CPList Infragistics.CPDropInfo::LockedFiles()" />*/
	lockedFiles: function (value) {
		if (arguments.length === 1) {
			this._lockedFiles = value;
			return value;
		} else {
			return this._lockedFiles;
		}
	}
	/*<EndProperty Name="Infragistics.CPList Infragistics.CPDropInfo::LockedFiles()" />*/
	,
	_webURL: null,
	/*<BeginProperty Name="System.String Infragistics.CPDropInfo::WebURL()" />*/
	webURL: function (value) {
		if (arguments.length === 1) {
			this._webURL = value;
			return value;
		} else {
			return this._webURL;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPDropInfo::WebURL()" />*/
	,
	_title: null,
	/*<BeginProperty Name="System.String Infragistics.CPDropInfo::Title()" />*/
	title: function (value) {
		if (arguments.length === 1) {
			this._title = value;
			return value;
		} else {
			return this._title;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPDropInfo::Title()" />*/
	,
	init: function (initNumber) {
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
	},
	init1: function (initNumber, files) {
		$.ig.Object.prototype.init.call(this);
		this.files(files);
	},
	init2: function (initNumber, files, lockedFiles) {
		$.ig.Object.prototype.init.call(this);
		this.files(files);
		this.lockedFiles(lockedFiles);
	},
	_dismissPermissionsCheck: false,
	/*<BeginProperty Name="System.Boolean Infragistics.CPDropInfo::DismissPermissionsCheck()" />*/
	dismissPermissionsCheck: function (value) {
		if (arguments.length === 1) {
			this._dismissPermissionsCheck = value;
			return value;
		} else {
			return this._dismissPermissionsCheck;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.CPDropInfo::DismissPermissionsCheck()" />*/
	,
	$type: new $.ig.Type('CPDropInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPDropInfo" />*/

/*<BeginType Name="Infragistics.CPFile" />*/

$.ig.util.defType('CPFile', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_name: null,
	/*<BeginProperty Name="System.String Infragistics.CPFile::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPFile::Name()" />*/
	,
	_path: null,
	/*<BeginProperty Name="System.String Infragistics.CPFile::Path()" />*/
	path: function (value) {
		if (arguments.length === 1) {
			this._path = value;
			return value;
		} else {
			return this._path;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPFile::Path()" />*/
	,
	_mimeType: null,
	/*<BeginProperty Name="System.String Infragistics.CPFile::MimeType()" />*/
	mimeType: function (value) {
		if (arguments.length === 1) {
			this._mimeType = value;
			return value;
		} else {
			return this._mimeType;
		}
	}
	/*<EndProperty Name="System.String Infragistics.CPFile::MimeType()" />*/
	,
	_size: 0,
	/*<BeginProperty Name="System.Int64 Infragistics.CPFile::Size()" />*/
	size: function (value) {
		if (arguments.length === 1) {
			this._size = value;
			return value;
		} else {
			return this._size;
		}
	}
	/*<EndProperty Name="System.Int64 Infragistics.CPFile::Size()" />*/
	,
	_data: null,
	/*<BeginProperty Name="System.Object Infragistics.CPFile::Data()" />*/
	data: function (value) {
		if (arguments.length === 1) {
			this._data = value;
			return value;
		} else {
			return this._data;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.CPFile::Data()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CPFile::IsUploadableImage()" />*/
	isUploadableImage: function () {
		if (this.mimeType() != null) {
			if ($.ig.NativeStringUtility.prototype.startsWith(this.mimeType(), "image")) {
				var uploadableImageExtensions = $.ig.ArrayUtility.prototype.toList([ "jpeg", "jpg", "bmp", "gif", "png" ]);
				for (var i = 0; i < uploadableImageExtensions.length; i++) {
					if ($.ig.NativeStringUtility.prototype.endsWith(this.mimeType(), uploadableImageExtensions[i])) {
						return true;
					}
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CPFile::IsUploadableImage()" />*/
	,
	$type: new $.ig.Type('CPFile', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPFile" />*/

/*<BeginType Name="Infragistics.ILogger" />*/

$.ig.util.defType('ILogger', 'Object', {
	$type: new $.ig.Type('ILogger', null)
}, true);

/*<EndType Name="Infragistics.ILogger" />*/

/*<BeginType Name="Infragistics.ILoggerFactory" />*/

$.ig.util.defType('ILoggerFactory', 'Object', {
	$type: new $.ig.Type('ILoggerFactory', null)
}, true);

/*<EndType Name="Infragistics.ILoggerFactory" />*/

/*<BeginType Name="Infragistics.LoggerFactory" />*/

$.ig.util.defType('LoggerFactory', 'Object', {
	staticInit: function () {
		$.ig.LoggerFactory.prototype.__instance = new $.ig.LoggerFactory();
	},
	/*<BeginProperty Name="Infragistics.LoggerFactory Infragistics.LoggerFactory::Instance()" />*/
	instance: function () {
		return $.ig.LoggerFactory.prototype.__instance;
	}
	/*<EndProperty Name="Infragistics.LoggerFactory Infragistics.LoggerFactory::Instance()" />*/
	,
	__factory: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__factory = new $.ig.NOPLoggerFactory();
	},
	/*<BeginMethod Name="System.Void Infragistics.LoggerFactory::Initialize(Infragistics.ILoggerFactory)" />*/
	initialize: function (factory) {
		this.__factory = factory;
	}
	/*<EndMethod Name="System.Void Infragistics.LoggerFactory::Initialize(Infragistics.ILoggerFactory)" />*/
	,
	/*<BeginMethod Name="Infragistics.ILogger Infragistics.LoggerFactory::GetLogger()" />*/
	getLogger1: function () {
		return this.__factory.getLogger($.ig.LoggerFactory.prototype.gLOBAL_LOGGER_NAME);
	}
	/*<EndMethod Name="Infragistics.ILogger Infragistics.LoggerFactory::GetLogger()" />*/
	,
	/*<BeginMethod Name="Infragistics.ILogger Infragistics.LoggerFactory::GetLogger(System.String)" />*/
	getLogger: function (name) {
		return this.__factory.getLogger(name);
	}
	/*<EndMethod Name="Infragistics.ILogger Infragistics.LoggerFactory::GetLogger(System.String)" />*/
	,
	$type: new $.ig.Type('LoggerFactory', $.ig.Object.prototype.$type, [$.ig.ILoggerFactory.prototype.$type])
}, true);

/*<EndType Name="Infragistics.LoggerFactory" />*/

/*<BeginType Name="Infragistics.NOPLoggerFactory" />*/

$.ig.util.defType('NOPLoggerFactory', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsDebugEnabled()" />*/
	isDebugEnabled: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsDebugEnabled()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsErrorEnabled()" />*/
	isErrorEnabled: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsErrorEnabled()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsWarnEnabled()" />*/
	isWarnEnabled: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsWarnEnabled()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsInfoEnabled()" />*/
	isInfoEnabled: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.NOPLoggerFactory::IsInfoEnabled()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String)" />*/
	debug: function (message) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String, System.Object)" />*/
	debug1: function (message, o) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String, System.Object, System.Object)" />*/
	debug2: function (message, o1, o2) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Debug(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String)" />*/
	error: function (message) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String, System.Object)" />*/
	error1: function (message, o) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String, System.Object, System.Object)" />*/
	error2: function (message, o1, o2) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Error(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.ILogger Infragistics.NOPLoggerFactory::GetLogger(System.String)" />*/
	getLogger: function (name) {
		return this;
	}
	/*<EndMethod Name="Infragistics.ILogger Infragistics.NOPLoggerFactory::GetLogger(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String)" />*/
	info: function (message) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String, System.Object)" />*/
	info1: function (message, o) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String, System.Object, System.Object)" />*/
	info2: function (message, o1, o2) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Info(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Trace(System.String)" />*/
	trace: function (message) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Trace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String)" />*/
	warn: function (message) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String, System.Object)" />*/
	warn1: function (message, o) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String, System.Object, System.Object)" />*/
	warn2: function (message, o1, o2) {
	}
	/*<EndMethod Name="System.Void Infragistics.NOPLoggerFactory::Warn(System.String, System.Object, System.Object)" />*/
	,
	$type: new $.ig.Type('NOPLoggerFactory', $.ig.Object.prototype.$type, [$.ig.ILoggerFactory.prototype.$type, $.ig.ILogger.prototype.$type])
}, true);

/*<EndType Name="Infragistics.NOPLoggerFactory" />*/

/*<BeginType Name="Infragistics.RandomNumberGenerator" />*/

$.ig.util.defType('RandomNumberGenerator', 'Object', {
	__util: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__util = new $.ig.NativeRandomUtility();
	},
	/*<BeginMethod Name="System.Int32 Infragistics.RandomNumberGenerator::Next(System.Int32, System.Int32)" />*/
	next: function (min, max) {
		return this.__util.next(min, max);
	}
	/*<EndMethod Name="System.Int32 Infragistics.RandomNumberGenerator::Next(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('RandomNumberGenerator', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RandomNumberGenerator" />*/

/*<BeginType Name="Infragistics.CPCustomSortPropInfo" />*/

$.ig.util.defType('CPCustomSortPropInfo', 'Object', {
	_property: null,
	_ascending: false,
	init: function (prop, asc) {
		$.ig.Object.prototype.init.call(this);
		this._property = prop;
		this._ascending = asc;
	},
	$type: new $.ig.Type('CPCustomSortPropInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPCustomSortPropInfo" />*/

/*<BeginType Name="Infragistics.CPSortConverter" />*/

$.ig.util.defType('CPSortConverter', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String Infragistics.CPSortConverter::GetStringValue(System.Object)" />*/
	getStringValue: function (obj) {
	}
	/*<EndMethod Name="System.String Infragistics.CPSortConverter::GetStringValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPSortConverter::GetNumericDoubleValue(System.Object)" />*/
	getNumericDoubleValue: function (obj) {
	}
	/*<EndMethod Name="System.Double Infragistics.CPSortConverter::GetNumericDoubleValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPSortConverter::GetNumericLongValue(System.Object)" />*/
	getNumericLongValue: function (obj) {
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPSortConverter::GetNumericLongValue(System.Object)" />*/
	,
	$type: new $.ig.Type('CPSortConverter', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPSortConverter" />*/

/*<BeginType Name="Infragistics.CPPropertySortConverter" />*/

$.ig.util.defType('CPPropertySortConverter', 'CPSortConverter', {
	__propName: null,
	init: function (propName) {
		$.ig.CPSortConverter.prototype.init.call(this);
		this.__propName = propName;
	},
	/*<BeginMethod Name="System.String Infragistics.CPPropertySortConverter::GetStringValue(System.Object)" />*/
	getStringValue: function (obj) {
		return $.ig.NativeReflectorUtility.prototype.getPropertyValue(this.__propName, this.resolveObject(obj));
	}
	/*<EndMethod Name="System.String Infragistics.CPPropertySortConverter::GetStringValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPPropertySortConverter::GetNumericDoubleValue(System.Object)" />*/
	getNumericDoubleValue: function (obj) {
		var value = $.ig.NativeReflectorUtility.prototype.getPropertyValue(this.__propName, this.resolveObject(obj));
		return value == null ? 0 : value;
	}
	/*<EndMethod Name="System.Double Infragistics.CPPropertySortConverter::GetNumericDoubleValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPPropertySortConverter::GetNumericLongValue(System.Object)" />*/
	getNumericLongValue: function (obj) {
		var value = $.ig.NativeReflectorUtility.prototype.getPropertyValue(this.__propName, this.resolveObject(obj));
		return value == null ? 0 : $.ig.util.getValue(value);
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPPropertySortConverter::GetNumericLongValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CPPropertySortConverter::ResolveObject(System.Object)" />*/
	resolveObject: function (obj) {
		return obj;
	}
	/*<EndMethod Name="System.Object Infragistics.CPPropertySortConverter::ResolveObject(System.Object)" />*/
	,
	$type: new $.ig.Type('CPPropertySortConverter', $.ig.CPSortConverter.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPPropertySortConverter" />*/

/*<BeginType Name="Infragistics.CPObjectPropertySortConverter" />*/

$.ig.util.defType('CPObjectPropertySortConverter', 'CPPropertySortConverter', {
	__method: null,
	init: function (propName, method) {
		$.ig.CPPropertySortConverter.prototype.init.call(this, propName);
		this.__method = method;
	},
	/*<BeginMethod Name="System.Object Infragistics.CPObjectPropertySortConverter::ResolveObject(System.Object)" />*/
	resolveObject: function (obj) {
		return this.__method(obj);
	}
	/*<EndMethod Name="System.Object Infragistics.CPObjectPropertySortConverter::ResolveObject(System.Object)" />*/
	,
	$type: new $.ig.Type('CPObjectPropertySortConverter', $.ig.CPPropertySortConverter.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPObjectPropertySortConverter" />*/

/*<BeginType Name="Infragistics.CPObjectSortConverter" />*/

$.ig.util.defType('CPObjectSortConverter', 'CPSortConverter', {
	__stringFromObj: null,
	__longForObj: null,
	__doubleForObj: null,
	init: function (stringFromObj, longForObj, doubleForObj) {
		$.ig.CPSortConverter.prototype.init.call(this);
		this.__stringFromObj = stringFromObj;
		this.__longForObj = longForObj;
		this.__doubleForObj = doubleForObj;
	},
	/*<BeginMethod Name="System.String Infragistics.CPObjectSortConverter::GetStringValue(System.Object)" />*/
	getStringValue: function (obj) {
		return this.__stringFromObj(obj);
	}
	/*<EndMethod Name="System.String Infragistics.CPObjectSortConverter::GetStringValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CPObjectSortConverter::GetNumericDoubleValue(System.Object)" />*/
	getNumericDoubleValue: function (obj) {
		return this.__doubleForObj(obj);
	}
	/*<EndMethod Name="System.Double Infragistics.CPObjectSortConverter::GetNumericDoubleValue(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.CPObjectSortConverter::GetNumericLongValue(System.Object)" />*/
	getNumericLongValue: function (obj) {
		return this.__longForObj(obj);
	}
	/*<EndMethod Name="System.Int64 Infragistics.CPObjectSortConverter::GetNumericLongValue(System.Object)" />*/
	,
	$type: new $.ig.Type('CPObjectSortConverter', $.ig.CPSortConverter.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CPObjectSortConverter" />*/

/*<BeginType Name="Infragistics.IUndoRedo" />*/

$.ig.util.defType('IUndoRedo', 'Object', {
	$type: new $.ig.Type('IUndoRedo', null)
}, true);

/*<EndType Name="Infragistics.IUndoRedo" />*/

/*<BeginType Name="Infragistics.IUndoRedoItem" />*/

$.ig.util.defType('IUndoRedoItem', 'Object', {
	$type: new $.ig.Type('IUndoRedoItem', null)
}, true);

/*<EndType Name="Infragistics.IUndoRedoItem" />*/

/*<BeginType Name="Infragistics.IUndoRedoTransaction" />*/

$.ig.util.defType('IUndoRedoTransaction', 'Object', {
	$type: new $.ig.Type('IUndoRedoTransaction', null, [$.ig.IUndoRedoItem.prototype.$type])
}, true);

/*<EndType Name="Infragistics.IUndoRedoTransaction" />*/

/*<BeginType Name="Infragistics.IUndoRedoItemsCollection" />*/

$.ig.util.defType('IUndoRedoItemsCollection', 'Object', {
	$type: new $.ig.Type('IUndoRedoItemsCollection', null)
}, true);

/*<EndType Name="Infragistics.IUndoRedoItemsCollection" />*/

/*<BeginType Name="Infragistics.IUndoRedoTransactionObserver" />*/

$.ig.util.defType('IUndoRedoTransactionObserver', 'Object', {
	$type: new $.ig.Type('IUndoRedoTransactionObserver', null)
}, true);

/*<EndType Name="Infragistics.IUndoRedoTransactionObserver" />*/

/*<BeginType Name="Infragistics.UndoRedoItem" />*/

$.ig.util.defType('UndoRedoItem', 'Object', {
	_undoAction: null,
	/*<BeginProperty Name="Infragistics.ExecutionBlock Infragistics.UndoRedoItem::UndoAction()" />*/
	undoAction: function (value) {
		if (arguments.length === 1) {
			this._undoAction = value;
			return value;
		} else {
			return this._undoAction;
		}
	}
	/*<EndProperty Name="Infragistics.ExecutionBlock Infragistics.UndoRedoItem::UndoAction()" />*/
	,
	_redoAction: null,
	/*<BeginProperty Name="Infragistics.ExecutionBlock Infragistics.UndoRedoItem::RedoAction()" />*/
	redoAction: function (value) {
		if (arguments.length === 1) {
			this._redoAction = value;
			return value;
		} else {
			return this._redoAction;
		}
	}
	/*<EndProperty Name="Infragistics.ExecutionBlock Infragistics.UndoRedoItem::RedoAction()" />*/
	,
	init: function (undo, redo) {
		$.ig.Object.prototype.init.call(this);
		this.undoAction(undo);
		this.redoAction(redo);
	},
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoItem::ExecuteRedo()" />*/
	executeRedo: function () {
		if (this.redoAction() != null) {
			this.redoAction()();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoItem::ExecuteRedo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoItem::ExecuteUndo()" />*/
	executeUndo: function () {
		if (this.undoAction() != null) {
			this.undoAction()();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoItem::ExecuteUndo()" />*/
	,
	$type: new $.ig.Type('UndoRedoItem', $.ig.Object.prototype.$type, [$.ig.IUndoRedoItem.prototype.$type])
}, true);

/*<EndType Name="Infragistics.UndoRedoItem" />*/

/*<BeginType Name="Infragistics.TransactonClosedMetadata" />*/

$.ig.util.defType('TransactonClosedMetadata', 'Object', {
	_commited: false,
	/*<BeginProperty Name="System.Boolean Infragistics.TransactonClosedMetadata::Commited()" />*/
	commited: function (value) {
		if (arguments.length === 1) {
			this._commited = value;
			return value;
		} else {
			return this._commited;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.TransactonClosedMetadata::Commited()" />*/
	,
	init: function (commited) {
		$.ig.Object.prototype.init.call(this);
		this.commited(commited);
	},
	$type: new $.ig.Type('TransactonClosedMetadata', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.TransactonClosedMetadata" />*/

/*<BeginType Name="Infragistics.UndoRedoTransaction" />*/

$.ig.util.defType('UndoRedoTransaction', 'Object', {
	_items: null,
	/*<BeginProperty Name="System.Collections.ArrayList Infragistics.UndoRedoTransaction::Items()" />*/
	items: function (value) {
		if (arguments.length === 1) {
			this._items = value;
			return value;
		} else {
			return this._items;
		}
	}
	/*<EndProperty Name="System.Collections.ArrayList Infragistics.UndoRedoTransaction::Items()" />*/
	,
	_parentUndoRedoItems: null,
	/*<BeginProperty Name="Infragistics.IUndoRedoItemsCollection Infragistics.UndoRedoTransaction::ParentUndoRedoItems()" />*/
	parentUndoRedoItems: function (value) {
		if (arguments.length === 1) {
			this._parentUndoRedoItems = value;
			return value;
		} else {
			return this._parentUndoRedoItems;
		}
	}
	/*<EndProperty Name="Infragistics.IUndoRedoItemsCollection Infragistics.UndoRedoTransaction::ParentUndoRedoItems()" />*/
	,
	init: function (transactionName, parentUndoRedoItems) {
		$.ig.Object.prototype.init.call(this);
		this.items(new $.ig.Array());
		this.transactionName(transactionName);
		this.parentUndoRedoItems(parentUndoRedoItems);
	},
	_isClosed: false,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedoTransaction::IsClosed()" />*/
	isClosed: function (value) {
		if (arguments.length === 1) {
			this._isClosed = value;
			return value;
		} else {
			return this._isClosed;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedoTransaction::IsClosed()" />*/
	,
	_transactionName: null,
	/*<BeginProperty Name="System.String Infragistics.UndoRedoTransaction::TransactionName()" />*/
	transactionName: function (value) {
		if (arguments.length === 1) {
			this._transactionName = value;
			return value;
		} else {
			return this._transactionName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.UndoRedoTransaction::TransactionName()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::AddUndoRedo(Infragistics.IUndoRedoItem)" />*/
	addUndoRedo: function (undoRedoItem) {
		this.items().add(undoRedoItem);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::AddUndoRedo(Infragistics.IUndoRedoItem)" />*/
	,
	__observer: null,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::RegisterObserver(Infragistics.IUndoRedoTransactionObserver)" />*/
	registerObserver: function (observer) {
		this.__observer = observer;
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::RegisterObserver(Infragistics.IUndoRedoTransactionObserver)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::Commit()" />*/
	commit: function () {
		this.verifyCanCommit();
		this.addToParentUndoRedoItems();
		this.closeTransaction(true);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::Commit()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::Rollback()" />*/
	rollback: function () {
		this.verifyCanRollback();
		this.undoChanges();
		this.clearUndoRedoItems();
		this.closeTransaction(false);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::Rollback()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::ExecuteUndo()" />*/
	executeUndo: function () {
		this.undoChanges();
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::ExecuteUndo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::ExecuteRedo()" />*/
	executeRedo: function () {
		for (var i = 0; i < this.items().length; i++) {
			var undoRedoItem = this.items()[i];
			undoRedoItem.executeRedo();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::ExecuteRedo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::AddToParentUndoRedoItems()" />*/
	addToParentUndoRedoItems: function () {
		if (this.items().length > 0) {
			this.parentUndoRedoItems().addUndoRedo(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::AddToParentUndoRedoItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::UndoChanges()" />*/
	undoChanges: function () {
		for (var i = this.items().length - 1; i >= 0; i--) {
			var undoRedoItem = this.items()[i];
			undoRedoItem.executeUndo();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::UndoChanges()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::CloseTransaction(System.Boolean)" />*/
	closeTransaction: function (isCommited) {
		this.isClosed(true);
		if (this.__observer != null) {
			this.__observer.transactionClosed(this, new $.ig.TransactonClosedMetadata(isCommited));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::CloseTransaction(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::ClearUndoRedoItems()" />*/
	clearUndoRedoItems: function () {
		this.items().clear();
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::ClearUndoRedoItems()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::VerifyCanRollback()" />*/
	verifyCanRollback: function () {
		if (this.isClosed()) {
			throw new $.ig.UndoRedoException("Cannot rollback closed transaction: '" + this.transactionName() + "'");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::VerifyCanRollback()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoTransaction::VerifyCanCommit()" />*/
	verifyCanCommit: function () {
		if (this.isClosed()) {
			throw new $.ig.UndoRedoException("Cannot commit closed transaction: '" + this.transactionName() + "'");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoTransaction::VerifyCanCommit()" />*/
	,
	$type: new $.ig.Type('UndoRedoTransaction', $.ig.Object.prototype.$type, [$.ig.IUndoRedoTransaction.prototype.$type, $.ig.IUndoRedoItemsCollection.prototype.$type])
}, true);

/*<EndType Name="Infragistics.UndoRedoTransaction" />*/

/*<BeginType Name="Infragistics.UndoRedoStorage" />*/

$.ig.util.defType('UndoRedoStorage', 'Object', {
	_undoRedo: null,
	/*<BeginProperty Name="Infragistics.UndoRedo Infragistics.UndoRedoStorage::UndoRedo()" />*/
	undoRedo: function (value) {
		if (arguments.length === 1) {
			this._undoRedo = value;
			return value;
		} else {
			return this._undoRedo;
		}
	}
	/*<EndProperty Name="Infragistics.UndoRedo Infragistics.UndoRedoStorage::UndoRedo()" />*/
	,
	init: function (undoRedo) {
		$.ig.Object.prototype.init.call(this);
		this.undoRedo(undoRedo);
	},
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoStorage::AddUndoRedo(Infragistics.IUndoRedoItem)" />*/
	addUndoRedo: function (item) {
		this.undoRedo().addItemToUndoStack(item);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoStorage::AddUndoRedo(Infragistics.IUndoRedoItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedoStorage::Rollback()" />*/
	rollback: function () {
		this.undoRedo().isRollback(true);
		this.undoRedo().isRollback(false);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedoStorage::Rollback()" />*/
	,
	$type: new $.ig.Type('UndoRedoStorage', $.ig.Object.prototype.$type, [$.ig.IUndoRedoItemsCollection.prototype.$type])
}, true);

/*<EndType Name="Infragistics.UndoRedoStorage" />*/

/*<BeginType Name="Infragistics.UndoRedo" />*/

$.ig.util.defType('UndoRedo', 'Object', {
	_transactionsStack: null,
	/*<BeginProperty Name="Infragistics.RPStack Infragistics.UndoRedo::TransactionsStack()" />*/
	transactionsStack: function (value) {
		if (arguments.length === 1) {
			this._transactionsStack = value;
			return value;
		} else {
			return this._transactionsStack;
		}
	}
	/*<EndProperty Name="Infragistics.RPStack Infragistics.UndoRedo::TransactionsStack()" />*/
	,
	_undoStack: null,
	/*<BeginProperty Name="Infragistics.RPStack Infragistics.UndoRedo::UndoStack()" />*/
	undoStack: function (value) {
		if (arguments.length === 1) {
			this._undoStack = value;
			return value;
		} else {
			return this._undoStack;
		}
	}
	/*<EndProperty Name="Infragistics.RPStack Infragistics.UndoRedo::UndoStack()" />*/
	,
	_redoStack: null,
	/*<BeginProperty Name="Infragistics.RPStack Infragistics.UndoRedo::RedoStack()" />*/
	redoStack: function (value) {
		if (arguments.length === 1) {
			this._redoStack = value;
			return value;
		} else {
			return this._redoStack;
		}
	}
	/*<EndProperty Name="Infragistics.RPStack Infragistics.UndoRedo::RedoStack()" />*/
	,
	/*<BeginProperty Name="Infragistics.UndoRedoTransaction Infragistics.UndoRedo::CurrentTransactionInternal()" />*/
	currentTransactionInternal: function () {
		return this.getCurrentTransactionImpl();
	}
	/*<EndProperty Name="Infragistics.UndoRedoTransaction Infragistics.UndoRedo::CurrentTransactionInternal()" />*/
	,
	/*<BeginMethod Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::GetCurrentTransactionImpl()" />*/
	getCurrentTransactionImpl: function () {
		if (this.transactionsStack().count() == 0) {
			return null;
		}
		var tr = this.transactionsStack().pop();
		this.transactionsStack().push(tr);
		return tr;
	}
	/*<EndMethod Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::GetCurrentTransactionImpl()" />*/
	,
	/*<BeginMethod Name="Infragistics.IUndoRedo Infragistics.UndoRedo::Create()" />*/
	create: function () {
		return new $.ig.UndoRedo();
	}
	/*<EndMethod Name="Infragistics.IUndoRedo Infragistics.UndoRedo::Create()" />*/
	,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.undoStack(new $.ig.RPStack());
		this.redoStack(new $.ig.RPStack());
		this.transactionsStack(new $.ig.RPStack());
	},
	/*<BeginProperty Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::CurrentTransaction()" />*/
	currentTransaction: function () {
		return this.getCurrentTransactionImpl();
	}
	/*<EndProperty Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::CurrentTransaction()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedo::CanUndo()" />*/
	canUndo: function () {
		return this.currentTransaction() == null && this.undoStack().count() > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedo::CanUndo()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedo::CanRedo()" />*/
	canRedo: function () {
		return this.currentTransaction() == null && this.redoStack().count() > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedo::CanRedo()" />*/
	,
	_isUndo: false,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedo::IsUndo()" />*/
	isUndo: function (value) {
		if (arguments.length === 1) {
			this._isUndo = value;
			return value;
		} else {
			return this._isUndo;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedo::IsUndo()" />*/
	,
	_isRedo: false,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedo::IsRedo()" />*/
	isRedo: function (value) {
		if (arguments.length === 1) {
			this._isRedo = value;
			return value;
		} else {
			return this._isRedo;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedo::IsRedo()" />*/
	,
	_isRollback: false,
	/*<BeginProperty Name="System.Boolean Infragistics.UndoRedo::IsRollback()" />*/
	isRollback: function (value) {
		if (arguments.length === 1) {
			this._isRollback = value;
			return value;
		} else {
			return this._isRollback;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.UndoRedo::IsRollback()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::AddUndoRedo(Infragistics.ExecutionBlock, Infragistics.ExecutionBlock)" />*/
	addUndoRedo: function (undo, redo) {
		if (this.isUndo() || this.isRedo()) {
			return;
		}
		var item = new $.ig.UndoRedoItem(undo, redo);
		this.addUndoRedoItem(item);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::AddUndoRedo(Infragistics.ExecutionBlock, Infragistics.ExecutionBlock)" />*/
	,
	/*<BeginMethod Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::BeginTransaction(System.String)" />*/
	beginTransaction: function (transactionName) {
		var transactionItemsStorage = this.getUndoRedoTransactionStorage();
		var tr = new $.ig.UndoRedoTransaction(transactionName, transactionItemsStorage);
		tr.registerObserver(this);
		this.transactionsStack().push(tr);
		return tr;
	}
	/*<EndMethod Name="Infragistics.IUndoRedoTransaction Infragistics.UndoRedo::BeginTransaction(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::Undo()" />*/
	undo: function () {
		if (this.currentTransaction() != null) {
			throw new $.ig.UndoRedoException("Cannot perform Undo with opened transaction: '" + this.currentTransaction().transactionName() + "'");
		}
		if (this.canUndo()) {
			this.isUndo(true);
			var item = this.undoStack().pop();
			item.executeUndo();
			this.redoStack().push(item);
			this.isUndo(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::Undo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::Redo()" />*/
	redo: function () {
		if (this.currentTransaction() != null) {
			throw new $.ig.UndoRedoException("Cannot perform Redo with opened transaction: '" + this.currentTransaction().transactionName() + "'");
		}
		if (this.canRedo()) {
			this.isRedo(true);
			var item = this.redoStack().pop();
			item.executeRedo();
			this.undoStack().push(item);
			this.isRedo(false);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::Redo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::AddUndoRedoItem(Infragistics.IUndoRedoItem)" />*/
	addUndoRedoItem: function (item) {
		if (this.currentTransactionInternal() != null) {
			this.currentTransactionInternal().addUndoRedo(item);
		} else {
			this.addItemToUndoStack(item);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::AddUndoRedoItem(Infragistics.IUndoRedoItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::AddItemToUndoStack(Infragistics.IUndoRedoItem)" />*/
	addItemToUndoStack: function (item) {
		this.redoStack().clear();
		this.undoStack().push(item);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::AddItemToUndoStack(Infragistics.IUndoRedoItem)" />*/
	,
	/*<BeginMethod Name="Infragistics.IUndoRedoItemsCollection Infragistics.UndoRedo::GetUndoRedoTransactionStorage()" />*/
	getUndoRedoTransactionStorage: function () {
		if (this.currentTransactionInternal() != null) {
			return this.currentTransactionInternal();
		}
		return new $.ig.UndoRedoStorage(this);
	}
	/*<EndMethod Name="Infragistics.IUndoRedoItemsCollection Infragistics.UndoRedo::GetUndoRedoTransactionStorage()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::TransactionClosedImpl(Infragistics.IUndoRedoTransaction, Infragistics.TransactonClosedMetadata)" />*/
	transactionClosedImpl: function (closedTransaction, e) {
		while (this.transactionsStack().count() > 0) {
			var tr = this.transactionsStack().pop();
			if (tr.equals(closedTransaction)) {
				break;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::TransactionClosedImpl(Infragistics.IUndoRedoTransaction, Infragistics.TransactonClosedMetadata)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.UndoRedo::Infragistics.IUndoRedoTransactionObserver.TransactionClosed(Infragistics.IUndoRedoTransaction, Infragistics.TransactonClosedMetadata)" />*/
	transactionClosed: function (tr, args) {
		this.transactionClosedImpl(tr, args);
	}
	/*<EndMethod Name="System.Void Infragistics.UndoRedo::Infragistics.IUndoRedoTransactionObserver.TransactionClosed(Infragistics.IUndoRedoTransaction, Infragistics.TransactonClosedMetadata)" />*/
	,
	$type: new $.ig.Type('UndoRedo', $.ig.Object.prototype.$type, [$.ig.IUndoRedo.prototype.$type, $.ig.IUndoRedoTransactionObserver.prototype.$type])
}, true);

/*<EndType Name="Infragistics.UndoRedo" />*/

/*<BeginType Name="Infragistics.UndoRedoException" />*/

$.ig.util.defType('UndoRedoException', 'Error', {
	_errorMessage: null,
	/*<BeginProperty Name="System.String Infragistics.UndoRedoException::ErrorMessage()" />*/
	errorMessage: function (value) {
		if (arguments.length === 1) {
			this._errorMessage = value;
			return value;
		} else {
			return this._errorMessage;
		}
	}
	/*<EndProperty Name="System.String Infragistics.UndoRedoException::ErrorMessage()" />*/
	,
	init: function (message) {
		$.ig.Error.prototype.init.call(this, 0);
		this.errorMessage(message);
	},
	$type: new $.ig.Type('UndoRedoException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="Infragistics.UndoRedoException" />*/

/*<BeginType Name="Infragistics.ICPViewCore" />*/

$.ig.util.defType('ICPViewCore', 'Object', {
	$type: new $.ig.Type('ICPViewCore', null)
}, true);

/*<EndType Name="Infragistics.ICPViewCore" />*/

/*<BeginType Name="System.Timer" />*/

$.ig.util.defType('Timer', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	__timerId: 0,
	/*<BeginMethod Name="System.Void System.Timer::Stop()" />*/
	stop: function () {
		window.clearInterval(this.__timerId);
	}
	/*<EndMethod Name="System.Void System.Timer::Stop()" />*/
	,
	/*<BeginMethod Name="System.Void System.Timer::Start(System.Html.Callback)" />*/
	start: function (callback) {
		this.__timerId = window.setInterval(callback, 16);
	}
	/*<EndMethod Name="System.Void System.Timer::Start(System.Html.Callback)" />*/
	,
	/*<BeginMethod Name="System.Void System.Timer::Start(System.Html.Callback, System.Int32)" />*/
	start1: function (callback, milliseconds) {
		this.__timerId = window.setInterval(callback, milliseconds);
	}
	/*<EndMethod Name="System.Void System.Timer::Start(System.Html.Callback, System.Int32)" />*/
	,
	$type: new $.ig.Type('Timer', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Timer" />*/

/*<BeginStatics Name="System.GestureState" />*/

$.ig.GestureState.prototype.possible = 0;
$.ig.GestureState.prototype.began = 1;
$.ig.GestureState.prototype.changed = 2;
$.ig.GestureState.prototype.ended = 3;
$.ig.GestureState.prototype.cancelled = 4;
$.ig.GestureState.prototype.failed = 5;
/*<EndStatics Name="System.GestureState" />*/

/*<BeginStatics Name="Infragistics.LogLevel" />*/

$.ig.LogLevel.prototype.debug = 0;
$.ig.LogLevel.prototype.info = 1;
$.ig.LogLevel.prototype.warn = 2;
$.ig.LogLevel.prototype.error = 3;
/*<EndStatics Name="Infragistics.LogLevel" />*/

/*<BeginStatics Name="Infragistics.KeyboardKeys" />*/

$.ig.KeyboardKeys.prototype.none = 0;
$.ig.KeyboardKeys.prototype.del = 1;
$.ig.KeyboardKeys.prototype.backspace = 2;
/*<EndStatics Name="Infragistics.KeyboardKeys" />*/

/*<BeginStatics Name="Infragistics.PlatformType" />*/

$.ig.PlatformType.prototype.iOS = 0;
$.ig.PlatformType.prototype.wPF = 1;
$.ig.PlatformType.prototype.web = 2;
$.ig.PlatformType.prototype.mac = 3;
$.ig.PlatformType.prototype.android = 4;
/*<EndStatics Name="Infragistics.PlatformType" />*/

/*<BeginStatics Name="Infragistics.Orientation" />*/

$.ig.Orientation.prototype.horizontal = 0;
$.ig.Orientation.prototype.vertical = 1;
/*<EndStatics Name="Infragistics.Orientation" />*/

/*<BeginStatics Name="Infragistics.AnimationType" />*/

$.ig.AnimationType.prototype.easeInEaseOut = 0;
$.ig.AnimationType.prototype.easeOut = 1;
$.ig.AnimationType.prototype.linear = 2;
/*<EndStatics Name="Infragistics.AnimationType" />*/

/*<BeginStatics Name="Infragistics.NativeDateUtility" />*/

$.ig.NativeDateUtility.prototype.__dowNames = null;
$.ig.NativeDateUtility.prototype.__dowShortNames = null;
$.ig.NativeDateUtility.prototype.__monthShortNames = null;
/*<EndStatics Name="Infragistics.NativeDateUtility" />*/

/*<BeginStatics Name="Infragistics.NativeLongTermStorageUtility" />*/

$.ig.NativeLongTermStorageUtility.prototype.__utility = null;
$.ig.NativeLongTermStorageUtility.prototype._localStorageKey = "IG_LocalStorageManager";
/*<EndStatics Name="Infragistics.NativeLongTermStorageUtility" />*/

/*<BeginStatics Name="Infragistics.BackingStoreActivity" />*/

$.ig.BackingStoreActivity.prototype.localizationParameterMemberPrefix = "member:";
$.ig.BackingStoreActivity.prototype.localizationParameterLocKeyPrefix = "[LOC]";
$.ig.BackingStoreActivity.prototype.localizationParameterDatePlaceHolder = "[DATE]";
$.ig.BackingStoreActivity.prototype.__empty = null;
/*<EndStatics Name="Infragistics.BackingStoreActivity" />*/

/*<BeginStatics Name="Infragistics.ActivityTrackingBackingStore" />*/

$.ig.ActivityTrackingBackingStore.prototype.iDKey = "id";
$.ig.ActivityTrackingBackingStore.prototype.dELETE_PREFIX = "#delete#";
$.ig.ActivityTrackingBackingStore.prototype.nEXTLINK_ID = "nextLinkId";
$.ig.ActivityTrackingBackingStore.prototype.lASTLINK_ID = "LAST";
$.ig.ActivityTrackingBackingStore.prototype.defaultNameKey = "name";
/*<EndStatics Name="Infragistics.ActivityTrackingBackingStore" />*/

/*<BeginStatics Name="Infragistics.CPDateTime" />*/

$.ig.CPDateTime.prototype.__formatter = null;
/*<EndStatics Name="Infragistics.CPDateTime" />*/

/*<BeginStatics Name="Infragistics.CPError" />*/

$.ig.CPError.prototype.eRROR_CODE_UNSPECIFIED = -1;
$.ig.CPError.prototype.eRROR_CODE_CANCELED = -2;
/*<EndStatics Name="Infragistics.CPError" />*/

/*<BeginStatics Name="Infragistics.CPMemoryStateManager" />*/

$.ig.CPMemoryStateManager.prototype.__manager = null;
$.ig.CPMemoryStateManager.prototype._sessionKey = "IG_MemoryManager";
/*<EndStatics Name="Infragistics.CPMemoryStateManager" />*/

/*<BeginStatics Name="Infragistics.DateUtility" />*/

$.ig.DateUtility.prototype.ticksTo1970 = 6.21355968E+17;
$.ig.DateUtility.prototype.__dayStrings = null;
/*<EndStatics Name="Infragistics.DateUtility" />*/

/*<BeginStatics Name="Infragistics.LoggerFactory" />*/

$.ig.LoggerFactory.prototype.gLOBAL_LOGGER_NAME = "Global";
$.ig.LoggerFactory.prototype.__instance = null;
if ($.ig.LoggerFactory.prototype.staticInit && !$.ig.LoggerFactory.prototype.loggerFactoryStaticInitCalled) { $.ig.LoggerFactory.prototype.staticInit(); $.ig.LoggerFactory.prototype.loggerFactoryStaticInitCalled = true; }
/*<EndStatics Name="Infragistics.LoggerFactory" />*/


} (jQuery));

