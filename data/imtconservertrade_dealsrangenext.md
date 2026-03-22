# DealsRangeNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeNext | [](imtconservertrade_dealsrangetotal.md "DealsRangeTotal") [](imtconservertrade_totalusers.md "TotalUsers") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeNext
Get a range of [deals](trading_deal.md "Deals") by the index.
C++
MTAPIRES IMTConServerTrade::DealsRangeNext( const UINT pos, // Position of the range IMTConServerRange* range // Range object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DealsRangeNext( uint pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.DealsRangeNext( pos, # Position of the range range # Range object )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
range
[out] An object of the range. The 'range' object must first be created using the [IMTAdminAPI::NetServerRangeCreate](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the range of deals with a specified index to the range object.