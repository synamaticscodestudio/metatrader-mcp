# TotalOrders (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ TotalOrders | [](imtconcommon_totaldeals.md "TotalDeals") [](imtconcommon_totalordershistory.md "TotalOrdersHistory") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::TotalOrders
Get the total number of active [orders](trading_order.md "Orders") placed in the whole trading platform (on all trade servers).
C++
UINT IMTConCommon::TotalOrders() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.TotalOrders()  
---  
Python (Manager API)
MTConCommon.TotalOrders  
---  
Return Value
The total number of orders.
Note
Active orders include all pending orders and the orders awaiting processing (state [placed and started](imtorder_enum.htm#enorderstate)).