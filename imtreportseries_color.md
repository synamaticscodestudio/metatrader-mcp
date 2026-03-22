# Color (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Color | [](imtreportseries_flags.md "Flags") [](imtreportseries_tooltip.md "Tooltip") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Color
Get the color used for a data series display on a chart.
UINT IMTReportSeries::Color() const  
---  
Return Value
The color used for a data series display on a chart.
IMTReportSeries::Color
Set the color that will be used for a data series display on a chart.
MTAPIRES IMTReportSeries::Color( const UINT color // Color )  
---  
Parameters
color
[in] Data series display color.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.