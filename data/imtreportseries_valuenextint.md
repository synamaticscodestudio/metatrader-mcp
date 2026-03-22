# ValueNextInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueNextInt | [](imtreportseries_valuenext.md "ValueNext") [](imtreportseries_valuenextdouble.md "ValueNextDouble") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueNextInt
Get the integer value at the indicated series position.
MTAPIRES IMTReportSeries::ValueNextInt( const UINT pos, // Position INT64& value // Reference to the value ) const  
---  
Parameters
pos
[in] Value position, starting with 0.
value
[out] A reference to the value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
In case a requested value is not an integer figure, the method will return 0.