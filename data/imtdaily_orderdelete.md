# OrderDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderDelete | [](imtdaily_orderupdate.md "OrderUpdate") [](imtdaily_orderclear.md "OrderClear") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderDelete
Delete a [trade order](trading_order.md "Orders") from a daily report by its index.
C++
MTAPIRES IMTDaily::OrderDelete( const UINT pos // Position in the list )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderDelete( uint pos // Position in the list )  
---  
Parameters
pos
[in] The position of a trade order in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.