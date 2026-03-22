# OrderShift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderShift | [](imtdaily_orderclear.md "OrderClear") [](imtdaily_ordertotal.md "OrderTotal") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderShift
Move a [trade order](trading_order.md "Orders") in the list.
C++
MTAPIRES IMTDaily::OrderShift( const UINT pos, // Position in the list const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderShift( uint pos, // Position in the list int shift // Shift )  
---  
Parameters
pos
[in] The position of a trade order in the list, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.