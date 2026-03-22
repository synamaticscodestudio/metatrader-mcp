# GatewayNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayNext | [](imtadminapi_gatewaytotal.md "GatewayTotal") [](imtadminapi_gatewayget.md "GatewayGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayNext
Get the gateway configuration by the index.
C++
MTAPIRES IMTAdminAPI::GatewayNext( const UINT pos, // Position of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayNext( uint pos, // Position of the configuration CIMTConGateway gateway // Gateway configuration object )  
---  
Python
AdminAPI.GatewayNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTAdminAPI::GatewayCreate](imtadminapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a gateway with a specified index to the gateway object.