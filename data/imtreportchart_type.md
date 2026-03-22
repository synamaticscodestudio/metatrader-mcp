# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Type | [](imtreportchart_title.md "Title") [](imtreportchart_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::Type
Get a chart type.
UINT IMTReportChart::Type() const  
---  
Return Value
A value of the [IMTReportChart::EnChartType](imtreportchart_enum.htm#encharttype) enumeration.
IMTReportChart::Type
Set a diagram type.
MTAPIRES IMTReportChart::Type( const UINT type // Type of a diagram )  
---  
Parameters
type
[in] Type of a diagram. To pass the options, the [IMTReportChart::EnChartType](imtreportchart_enum.htm#encharttype) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.