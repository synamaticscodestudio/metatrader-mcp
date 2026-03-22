# OrdersRangeUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeUpdate | [](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd") [](imtconservertrade_ordersrangedelete.md "OrdersRangeDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeUpdate
Update the range of [orders](trading_order.md "Orders").
C++
MTAPIRES IMTConServerTrade::OrdersRangeUpdate( const UINT pos, // Position of the range IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeUpdate( uint  pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeUpdate( pos, # Position of the range range # Range )  
---  
Parameters
pos
[in] Position of the range of orders in the list, starting with 0.
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.