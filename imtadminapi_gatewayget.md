# GatewayGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayGet | [](imtadminapi_gatewaynext.md "GatewayNext") [](imtadminapi_gatewaymoduletotal.md "GatewayModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayGet
Get the gateway configuration by the name.
C++
MTAPIRES IMTAdminAPI::GatewayGet( LPCWSTR name, // Name of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayGet( string name, // Name of the configuration CIMTConGateway gateway // Gateway configuration object )  
---  
Python
AdminAPI.GatewayGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTAdminAPI::GatewayCreate](imtadminapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGateway::Name()](imtcongateway_name.md "Name") value is used as the name.