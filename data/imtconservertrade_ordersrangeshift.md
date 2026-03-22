# OrdersRangeShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OrdersRangeShift | [](imtconservertrade_ordersrangeclear.md "OrdersRangeClear") [](imtconservertrade_ordersrangetotal.md "OrdersRangeTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OrdersRangeShift
Move the range of [orders](trading_order.md "Orders") in the list.
C++
MTAPIRES IMTConServerTrade::OrdersRangeShift( const UINT pos, // Position of the range const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OrdersRangeShift( uint pos, // Position of the range int shift // Shift )  
---  
Python (Manager API)
MTConServerTrade.OrdersRangeShift( pos, # Position of the range shift # Shift )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.