# GatewayUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayUpdate | [](imtadminapi_gatewayrestart.md "GatewayRestart") [](imtadminapi_gatewayupdatebatch.md "GatewayUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayUpdate
Add or update a gateway configuration.
C++
MTAPIRES IMTAdminAPI::GatewayUpdate( IMTConGateway* gateway // Gateway configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayUpdate( CIMTConGateway gateway // Gateway configuration object )  
---  
Python
AdminAPI.GatewayUpdate( gateway # Gateway configuration object )  
---  
Parameters
gateway
[in] The gateway configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.