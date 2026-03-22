# ValueNextDouble (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueNextDouble | [](imtreportseries_valuenextint.md "ValueNextInt") [](imtreportseries_valueshift.md "ValueShift") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueNextDouble
Get the value with a floating point at the indicated series position.
MTAPIRES IMTReportSeries::ValueNextDouble( const UINT pos, // Position double& value // Reference to the value ) const  
---  
Parameters
pos
[in] Value position, starting with 0.
value
[out] A reference to the value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
In case a requested value is not a figure with a floating point, the method will return 0.