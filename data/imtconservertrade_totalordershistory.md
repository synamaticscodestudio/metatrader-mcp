# TotalOrdersHistory (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ TotalOrdersHistory | [](imtconservertrade_totalorders.md "TotalOrders") [](imtconservertrade_totalpositions.md "TotalPositions") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::TotalOrdersHistory
Get the total number of [orders](trading_order.md "Orders") in the history on the trade server.
C++
UINT IMTConServerTrade::TotalOrdersHistory() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.TotalOrdersHistory()  
---  
Python (Manager API)
MTConServerTrade.TotalOrdersHistory  
---  
Return Value
The total number of orders in the history.
Note
[Filled, canceled, expired and rejected orders](imtorder_enum.htm#enorderstate) appear in the history of orders.