# ValueUpdateDouble (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueUpdateDouble | [](imtreportseries_valueupdateint.md "ValueUpdateInt") [](imtreportseries_valuenext.md "ValueNext") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueUpdateDouble
Change the value with a floating point at the indicated series position.
MTAPIRES IMTReportSeries::ValueUpdateDouble( const UINT pos, // Position const double value // Value )  
---  
Parameters
pos
[in] Changed value position, starting with 0.
value
[in] Changed value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.