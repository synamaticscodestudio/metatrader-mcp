# NetServerRestart (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerRestart | [](imtadminapi_netserverunsubscribe.md "NetServerUnsubscribe") [](imtadminapi_netserverupdate.md "NetServerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerRestart
Restart a server by an ID.
C++
MTAPIRES IMTAdminAPI::NetServerRestart( const UINT64 id // Server ID )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerRestart( ulong id // Server ID )  
---  
Python
AdminAPI.NetServerRestart( id # Server ID )  
---  
Parameters
id
[in] The identifier of the server that should be restarted. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Restart servers only on weekends and holidays or at night when the trading activity is minimal. Restarting the server may take several seconds (up to a minute), during this time connection to the server is impossible.