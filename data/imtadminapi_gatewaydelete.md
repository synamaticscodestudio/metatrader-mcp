# GatewayDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayDelete | [](imtadminapi_gatewayupdatebatch.md "GatewayUpdateBatch") [](imtadminapi_gatewaydeletebatch.md "GatewayDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayDelete
Delete a gateway configuration by the name.
C++
MTAPIRES IMTAdminAPI::GatewayDelete( LPCWSTR name // Name of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayDelete( string name // Name of the configuration )  
---  
Python
AdminAPI.GatewayDelete( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::GatewayDelete
Delete a gateway configuration by the index.
C++
MTAPIRES IMTAdminAPI::GatewayDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.GatewayDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.