# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Shift | [](imtdealarray_updatecopy.md "UpdateCopy") [](imtdealarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Shift
Change the position of a deal in an array.
C++
MTAPIRES IMTDealArray::Shift( const UINT pos, // Position of a deal const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Shift( uint pos, // Position of a deal int shift // Shift )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
shift
[in] Shift of a rule relative to its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.