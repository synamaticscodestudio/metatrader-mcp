# TotalOrders (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ TotalOrders | [](imtconservertrade_totaldeals.md "TotalDeals") [](imtconservertrade_totalordershistory.md "TotalOrdersHistory") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::TotalOrders
Get the total number of active [orders](trading_order.md "Orders") placed on the trade server.
C++
UINT IMTConServerTrade::TotalOrders() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.TotalOrders()  
---  
Python (Manager API)
MTConServerTrade.TotalOrders  
---  
Return Value
The total number of orders.
Note
Active orders include all pending orders and the orders awaiting processing (state [placed and started](imtorder_enum.htm#enorderstate)).