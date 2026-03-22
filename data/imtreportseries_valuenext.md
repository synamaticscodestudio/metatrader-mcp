# ValueNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueNext | [](imtreportseries_valueupdatedouble.md "ValueUpdateDouble") [](imtreportseries_valuenextint.md "ValueNextInt") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueNext
Get the value at the indicated series position.
LPCWSTR IMTReportSeries::ValueNext( const UINT pos // Position ) const  
---  
Parameters
pos
[in] Value position, starting with 0.
Return Value
If successful, it returns a pointer to the string with the value. Otherwise, it returns NULL.