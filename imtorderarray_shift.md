# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Shift | [](imtorderarray_updatecopy.md "UpdateCopy") [](imtorderarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Shift
Change the position of an order in an array.
C++
MTAPIRES IMTOrderArray::Shift( const UINT pos, // Position of an order const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Shift( uint pos, // Position of an order int shift // Shift )  
---  
Parameters
pos
[in] Position of an order in an array, starting with 0.
shift
[in] Shift of an oder relative to its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.