# ValueDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueDelete | [](imtreportseries_valueshift.md "ValueShift") [](imtreportseries_valuedescription.md "ValueDescription") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueDelete
Delete the value at the indicated series position.
MTAPIRES IMTReportSeries::ValueDelete( const UINT pos // Position )  
---  
Parameters
pos
[in] Deleted value position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.