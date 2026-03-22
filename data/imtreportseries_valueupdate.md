# ValueUpdate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueUpdate | [](imtreportseries_valueadddouble.md "ValueAddDouble") [](imtreportseries_valueupdateint.md "ValueUpdateInt") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueUpdate
Change the value at the indicated series position.
MTAPIRES IMTReportSeries::ValueUpdate( const UINT pos, // Position LPCWSTR value // Value )  
---  
Parameters
pos
[in] Changed value position, starting with 0.
value
[in] Changed value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.