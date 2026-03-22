# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Shift | [](imtrequestarray_updatecopy.md "UpdateCopy") [](imtrequestarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Shift
Change the position of a trade request in an array.
C++
MTAPIRES IMTRequestArray::Shift( const UINT pos, // Request position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Shift( uint pos, // Request position int shift // Shift )  
---  
Parameters
pos
[in] Position of a trade request in an array, starting with 0.
shift
[in] Shift a trade request relative to its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.