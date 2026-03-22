# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Enumerations | [](imtreportdashboardwidget.md "IMTReportDashboardWidget") [](imtreportdashboardwidget_assign.md "Assign") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget
The [IMTReportDashboardWidget](imtreportdashboardwidget.md "IMTReportDashboardWidget") interface contains the following enumerations:
  * [IMTReportDashboardWidget::EnWidgetType](imtreportdashboardwidget_enum.htm#enwidgettype)
  * [IMTReportDashboardWidget::EnChartStackType](imtreportdashboardwidget_enum.htm#enchartstacktype)
  * [IMTReportDashboardWidget::EnWidgetFlags](imtreportdashboardwidget_enum.htm#enwidgetflags)
  * [IMTReportDashboardWidget::EnChartValueAxis](imtreportdashboardwidget_enum.htm#enchartvalueaxis)

IMTReportDashboardWidget::EnWidgetType
IMTReportDashboardWidget::EnWidgetType lists the types of widget diagrams and contents:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| WIDGET_TYPE_CHART_BAR | 0 | Histogram. |
| WIDGET_TYPE_CHART_LINE | 1 | Linear diagram. |
| WIDGET_TYPE_CHART_AREA | 2 | Pie chart. |
| WIDGET_TYPE_CHART_PIE | 3 | Concentric diagram. |
| WIDGET_TYPE_CHART_SPLINE | 4 | Spline chart. |
| WIDGET_TYPE_CHART_AREA_SPLINE | 5 | Spline chart with areas. |
| WIDGET_TYPE_CHART_GEO | 6 | Geographical distribution on an interactive map. |
| WIDGET_TYPE_VALUE | 100 | Single value. |
| WIDGET_TYPE_TABLE | 101 | Table. |
| WIDGET_TYPE_HTML | 102 | HTML content. Currently not supported. |
| WIDGET_TYPE_FIRST |  | Enumeration beginning. Corresponds to WIDGET_TYPE_CHART_BAR. |
| WIDGET_TYPE_LAST |  | End of enumeration. Corresponds to WIDGET_TYPE_HTML. |

The enumeration is used in the [IMTReportDashboardWidget::Type](imtreportdashboardwidget_type.md "Type") method.
IMTReportDashboardWidget::EnChartStackType
IMTReportDashboardWidget::EnChartStackType lists accumulation types for widget diagrams:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CHART_STACK_NONE | 0 | Data series are displayed separately |
| CHART_STACK_SIMPLE | 1 | Data series are combined, values are summed up |
| CHART_STACK_ACCUMULATION | 2 | Data series are combined, values are summed up |
| CHART_STACK_NORMALIZED | 3 | Rows are combined, the general contribution of each series to the total value in percentage is shown |
| CHART_STACK_FIRST |  | Enumeration beginning. Corresponds to CHART_STACK_NONE. |
| CHART_STACK_LAST |  | End of enumeration. Corresponds to CHART_STACK_NORMALIZED. |

The enumeration is used in the [IMTReportDashboardWidget::Type](imtreportdashboardwidget_chartstacktype.md "ChartStackType") method.
IMTReportDashboardWidget::EnWidgetFlags
IMTReportDashboardWidget::EnWidgetFlags lists widget display flags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| WIDGET_FLAG_NONE | 0x00000000 | No flags. |
| WIDGET_FLAG_AUTO_WIDTH | 0x00000001 | Widget width is specified automatically according to the [dashboard width](imtreportapi_dashboardwidth.md "DashboardWidth"). |
| WIDGET_FLAG_AUTO_HEIGHT | 0x00000002 | Widget height is specified automatically according to the [dashboard height](imtreportapi_dashboardheight.md "DashboardHeight"). |
| WIDGET_FLAG_AUTO_TOP | 0x00000004 | The dashboard widget is aligned to the the dashboard upper border. |
| WIDGET_FLAG_AUTO_LEFT | 0x00000008 | The dashboard widget is aligned to the the dashboard left border. |
| WIDGET_FLAG_HIDE_ZEROES | 0x00000100 | Zero values are hidden from the dashboard widget. |

The enumeration is used in the [IMTReportDashboardWidget::Flags](imtreportdashboardwidget_flags.md "Flags") method.
IMTReportDashboardWidget::EnChartValueAxis
Chart value axis types are enumerated in IMTReportDashboardWidget::EnChartValueAxis.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CHART_VALUE_AXIS_ABSOLUTE | 0 | Axis with absolute values. |
| CHART_VALUE_AXIS_RELATIVE | 1 | Axis with relative values. |
| CHART_VALUE_AXIS_FIRST |  | Enumeration beginning. Corresponds to CHART_VALUE_AXIS_ABSOLUTE. |
| CHART_VALUE_AXIS_LAST |  | End of enumeration. Corresponds to CHART_VALUE_AXIS_RELATIVE. |

The enumeration is used in the [IMTReportDashboardWidget::ChartValueAxis](imtreportdashboardwidget_chartvalueaxis.md "ChartValueAxis") method.