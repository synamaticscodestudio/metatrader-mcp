# OrderAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderAdd | [](imtdaily_positionget.md "PositionGet") [](imtdaily_orderupdate.md "OrderUpdate") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderAdd
Add a [trade order](trading_order.md "Orders") to the daily report.
C++
MTAPIRES IMTDaily::OrderAdd( IMTOrder* order // An order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderAdd( CIMTOrder order // An order object )  
---  
Parameters
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.