# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Enumerations | [](imtreportchart.md "IMTReportChart") [](imtreportchart_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTReportChart
The [IMTReportChart](imtreportchart.md "IMTReportChart") interface contains the following enumerations:
  * [IMTReportChart::EnChartType](imtreportchart_enum.htm#encharttype)
  * [IMTReportChart::EnChartFlags](imtreportchart_enum.htm#enchartflags)

IMTReportChart::EnChartType
Types of charts are listed in IMTReportChart::EnChartType:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_GRAPH | 0 | Standard chart. |
| TYPE_GRAPH_ACCUMULATION | 1 | Standard accumulated indications chart. |
| TYPE_GRAPH_NORMALIZED | 2 | Standard normalized chart. |
| TYPE_GRAPH_STACKED | 3 | Standard chart with stacking. |
| TYPE_BAR | 100 | Bar graph. |
| TYPE_BAR_ACCUMULATION | 101 | Accumulated indications bar graph. |
| TYPE_BAR_NORMALIZED | 102 | Bar normalized graph. |
| TYPE_BAR_STACKED | 103 | Bar grap with stacking. |
| TYPE_PIE | 200 | Pie chart. |

This enumeration is used in the [IMTReportChart::Type](imtreportchart_type.md "Type") method.
IMTReportChart::EnChartFlags
Types of charts are listed in IMTReportChart::EnChartFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_ACCUMULATED_VALUES | 1 | Show accumlated values. |
| FLAG_SHOW_TABLE | 2 | Show the table with values. |

This enumeration is used in the [IMTReportChart::Flags](imtreportchart_flags.md "Flags") method.