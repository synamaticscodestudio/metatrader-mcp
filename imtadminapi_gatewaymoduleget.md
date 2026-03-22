# GatewayModuleGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayModuleGet | [](imtadminapi_gatewaymoduletotal.md "GatewayModuleTotal") [](imtadminapi_gatewaymodulenext.md "GatewayModuleNext") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayModuleGet
Get the gateway module by the name.
C++
MTAPIRES IMTAdminAPI::GatewayModuleGet( LPCWSTR name, // Name of the module IMTConGatewayModule* module // Object of the gateway module )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayModuleGet( string name, // Name of the configuration CIMTConGatewayModule module // Object of the gateway module )  
---  
Python
AdminAPI.GatewayModuleGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the module.
module
[out] The gateway module object. The gateway object must be first created using the [IMTAdminAPI::GatewayModuleCreate](imtadminapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGatewayModule::Name](imtcongatewaymodule_name.md "Name") value is used as the name.