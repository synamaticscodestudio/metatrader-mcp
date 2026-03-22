# LoginsRangeNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeNext | [](imtconservertrade_loginsrangetotal.md "LoginsRangeTotal") [](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeNext
Get a range of [logins](reference_user.md "Users") by the index.
C++
MTAPIRES IMTConServerTrade::LoginsRangeNext( const UINT pos, // Position of the range IMTConServerRange* range // Range object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeNext( uint pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeNext( pos, # Position of the range range # Range object )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
range
[out] An object of the range. The 'range' object must first be created using the [IMTAdminAPI::NetServerRangeCreate](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the range of logins with a specified index to the range object.