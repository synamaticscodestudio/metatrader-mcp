# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Assign | [](imtreportseries_release.md "Release") [](imtreportseries_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Assign
Assign a passed object to the current one.
MTAPIRES IMTReportSeries::Assign( const IMTReportSeries *series // Source object )  
---  
Parameters
*series
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.