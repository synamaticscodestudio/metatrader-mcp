# OrdersRangeNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeNext | [](imtconservertrade_ordersrangetotal.md "OrdersRangeTotal") [](imtconservertrade_dealsrangeadd.md "DealsRangeAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeNext
Get a range of [orders](trading_order.md "Orders") by the index.
C++
MTAPIRES IMTConServerTrade::OrdersRangeNext( const UINT pos, // Position of the range IMTConServerRange* range // Range object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeNext( uint pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeNext( pos, # Position of the range range # Range object )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
range
[out] An object of the range. The 'range' object must first be created using the [IMTAdminAPI::NetServerRangeCreate](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the range of orders with a specified index to the range object.