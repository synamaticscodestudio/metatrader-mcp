# NetServerUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerUpdate | [](imtadminapi_netserverrestart.md "NetServerRestart") [](imtadminapi_netserverupdatebatch.md "NetServerUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerUpdate
Add and update a server configuration.
C++
MTAPIRES IMTAdminAPI::NetServerUpdate( IMTConServer* config // Server configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerUpdate( CIMTConServer config // Server configuration object )  
---  
Python
AdminAPI.NetServerUpdate( server # Server configuration object )  
---  
Parameters
config
[in] The server configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.