# GatewayModuleGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayModuleGet | [](imtserverapi_gatewaymoduletotal.md "GatewayModuleTotal") [](imtserverapi_gatewaymodulenext.md "GatewayModuleNext") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayModuleGet
Get the gateway module by the name.
MTAPIRES IMTServerAPI::GatewayModuleGet( LPCWSTR name, // Name of the module IMTConGatewayModule* module // Object of the gateway module )  
---  
Parameters
name
[in] The name of the module.
module
[out] The gateway module object. The module object must be first created using the [IMTServerAPI::GatewayModuleCreate](imtserverapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGatewayModule::Name](imtcongatewaymodule_name.md "Name") value is used as the name.