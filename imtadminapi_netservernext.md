# NetServerNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerNext | [](imtadminapi_netservertotal.md "NetServerTotal") [](imtadminapi_netserverget.md "NetServerGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerNext
Get a server configuration by the index.
C++
MTAPIRES IMTAdminAPI::NetServerNext( const UINT pos, // Position of the configuration IMTConServer* config // Configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerNext( uint  pos, // Position of the configuration CIMTConServer config // Configuration object )  
---  
Python
AdminAPI.NetServerNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] The server configuration object. The config object must first be created using the [IMTAdminAPI::NetServerCreate](imtadminapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a server with a specified index to the config object.