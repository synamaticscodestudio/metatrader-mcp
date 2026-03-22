# OrdersRangeClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeClear | [](imtconservertrade_ordersrangedelete.md "OrdersRangeDelete") [](imtconservertrade_ordersrangeshift.md "OrdersRangeShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeClear
Clear the range of [orders](trading_order.md "Orders").
C++
MTAPIRES IMTConServerTrade::OrdersRangeClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeClear()  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of ranges of orders of the server.