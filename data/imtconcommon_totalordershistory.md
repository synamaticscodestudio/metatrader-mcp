# TotalOrdersHistory (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ TotalOrdersHistory | [](imtconcommon_totalorders.md "TotalOrders") [](imtconcommon_totalpositions.md "TotalPositions") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::TotalOrdersHistory
Get the total number of [orders](trading_order.md "Orders") in the history in the whole trading platform (on all trade server).
C++
UINT IMTConCommon::TotalOrdersHistory() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.TotalOrdersHistory()  
---  
Python (Manager API)
MTConCommon.TotalOrdersHistory  
---  
Return Value
The total number of orders in the history.
Note
[Filled, canceled, expired and rejected orders](imtorder_enum.htm#enorderstate) appear in the history of orders.