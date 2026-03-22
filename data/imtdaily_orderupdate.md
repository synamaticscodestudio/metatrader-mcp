# OrderUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderUpdate | [](imtdaily_orderadd.md "OrderAdd") [](imtdaily_orderdelete.md "OrderDelete") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderUpdate
Modify a [trade order](trading_order.md "Orders") in a daily report by its index.
C++
MTAPIRES IMTDaily::OrderUpdate( const UINT pos, // Position in the list  const IMTOrder* order // An order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderUpdate( uint pos, // Position in the list  CIMTOrder order // Order object )  
---  
Parameters
pos
[in] The position of a trade order in the list, starting with 0.
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.