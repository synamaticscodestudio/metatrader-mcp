# ValueShift (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ ValueShift | [](imtreportseries_valuenextdouble.md "ValueNextDouble") [](imtreportseries_valuedelete.md "ValueDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::ValueShift
Shift a value in a series.
MTAPIRES IMTReportSeries::ValueShift( const UINT pos, // Position const int shift // Shift )  
---  
Parameters
pos
[in] Shifted value position, starting with 0.
shift
Shift from its current position. A negative value means the shift to the top, a positive value - to the series end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.