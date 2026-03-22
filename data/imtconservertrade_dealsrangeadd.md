# DealsRangeAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeAdd | [](imtconservertrade_ordersrangenext.md "OrdersRangeNext") [](imtconservertrade_dealsrangeupdate.md "DealsRangeUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeAdd
Add a range of [deals](trading_deal.md "Deals").
C++
MTAPIRES IMTConServerTrade::DealsRangeAdd( IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DealsRangeAdd( CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.DealsRangeAdd( range # Range object )  
---  
Parameters
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.