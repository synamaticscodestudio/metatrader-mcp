# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Flags | [](imtreportseries_type.md "Type") [](imtreportseries_color.md "Color") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Flags
Get data series flags.
UINT64 IMTReportSeries::Flags() const  
---  
Return Value
A value of the [IMTReportSeries::EnSeriesFlags](imtreportseries_enum.htm#enseriesflags) enumeration.
IMTReportSeries::Flags
Set data series flags.
MTAPIRES IMTReportSeries::Flags( const UINT64 flags // series flags )  
---  
Parameters
flags
[in] Data series flags. To set the options, the [IMTReportSeries::EnSeriesFlags](imtreportseries_enum.htm#enseriesflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.