# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Type | [](imtreportseries_title.md "Title") [](imtreportseries_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Type
Get a data series type.
UINT IMTReportSeries::Type() const  
---  
Return Value
A value of the [IMTReportSeries::EnSeriesType](imtreportseries_enum.htm#enseriestype) enumeration.
IMTReportSeries::Type
Set data series type.
MTAPIRES IMTReportSeries::Type( const UINT type // Series type )  
---  
Parameters
type
[in] Data series type. To set the options, the [IMTReportSeries::EnSeriesType](imtreportseries_enum.htm#enseriestype) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.