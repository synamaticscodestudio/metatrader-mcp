# OrdersRangeAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeAdd | [](imtconservertrade_loginsrangenext.md "LoginsRangeNext") [](imtconservertrade_ordersrangeupdate.md "OrdersRangeUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeAdd
Add a range of [orders](trading_order.md "Orders").
C++
MTAPIRES IMTConServerTrade::OrdersRangeAdd( IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeAdd( CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeAdd( range # Range object )  
---  
Parameters
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.