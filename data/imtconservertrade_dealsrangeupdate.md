# DealsRangeUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeUpdate | [](imtconservertrade_dealsrangeadd.md "DealsRangeAdd") [](imtconservertrade_dealsrangedelete.md "DealsRangeDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeUpdate
Update the range of [deals](trading_deal.md "Deals").
C++
MTAPIRES IMTConServerTrade::DealsRangeUpdate( const UINT pos, // Position of the range IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode IMTConServerTrade::DealsRangeUpdate( uint pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade::DealsRangeUpdate( pos, # Position of the range range # Range object )  
---  
Parameters
pos
[in] Position of the range of deals in the list, starting with 0.
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.