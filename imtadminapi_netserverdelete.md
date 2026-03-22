# NetServerDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerDelete | [](imtadminapi_netserverupdatebatch.md "NetServerUpdateBatch") [](imtadminapi_netserverdeletebatch.md "NetServerDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerDelete
Delete a server configuration by the index.
C++
MTAPIRES IMTAdminAPI::NetServerDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCodes CIMTAdminAPI.NetServerDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.NetServerDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.