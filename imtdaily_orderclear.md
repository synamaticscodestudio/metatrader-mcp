# OrderClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderClear | [](imtdaily_orderdelete.md "OrderDelete") [](imtdaily_ordershift.md "OrderShift") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderClear
Clear the list of [orders](trading_order.md "Orders") in a daily report.
C++
MTAPIRES IMTDaily::OrderClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of orders in a daily report.