# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Enumerations | [](imtreportseries.md "IMTReportSeries") [](imtreportseries_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTReportSeries](imtreportseries.md "IMTReportSeries")interface contains the following enumerations:
  * [IMTReportSeries::EnSeriesType](imtreportseries_enum.htm#enseriestype)
  * [IMTReportSeries::EnSeriesFlags](imtreportseries_enum.htm#enseriesflags)

IMTReportSeries::EnSeriesType
Types of series (values arrays) for creating charts are listed in IMTReportSeries::EnSeriesType:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_TITLE | 0 | Header values series. The values of that series are used as text labels attached to chart axes. |
| TYPE_LINE | 100 | Series of the values that will be displayed as a line. Applicable for the charts of the [IMTReportChart::TYPE_GRAPH*](imtreportchart_enum.htm#encharttype) type. |
| TYPE_HISTOGRAM | 101 | Series of the values that will be displayed as vertical bars (bar graph). Applicable for the charts of the [IMTReportCHart::TYPE_GRAPH*](imtreportchart_enum.htm#encharttype) type. |
| TYPE_BAR | 102 | Series of the values that will be displayed as horizontal bars (bar graph). Applicable for the charts of the [IMTReportChart::TYPE_BAR*](imtreportchart_enum.htm#encharttype) type. |
| TYPE_AREA | 103 | Series of the values that will be displayed as a colored polygon (area graph). Applicable for the charts of the [IMTReportChart::TYPE_GRAPH*](imtreportchart_enum.htm#encharttype) type. |
| TYPE_PIECE | 104 | The series consisting of one value that will be displayed as a circle sector. Applicable for the charts of the [IMTReportChart::TYPE_PIE*](imtreportchart_enum.htm#encharttype) type. |

This enumeration is used in the [IMTReportSeries::Type](imtreportseries_type.md "Type") method.
IMTReportSeries::EnSeriesFlags
Types of series flags are listed in IMTReportSeries::EnSeriesFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_SHOW_VALUES | 1 | Show a series value on a chart. |

This enumeration is used in the [IMTReportSeries::Flags](imtreportseries_flags.md "Flags") method.