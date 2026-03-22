# OrdersRangeDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeDelete | [](imtconservertrade_ordersrangeupdate.md "OrdersRangeUpdate") [](imtconservertrade_ordersrangeclear.md "OrdersRangeClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeDelete
Delete a range of [orders](trading_order.md "Orders") by the index.
C++
MTAPIRES IMTConServerTrade::OrdersRangeDelete( const UINT pos // Position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeDelete( uint pos // Position of the range )  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeDelete( pos # Position of the range )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.