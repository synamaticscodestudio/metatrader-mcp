# GatewayModuleNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayModuleNext | [](imtserverapi_gatewaymoduleget.md "GatewayModuleGet") [](imtserverapi_gatewayrestart.md "GatewayRestart") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayModuleNext
Get the gateway module by the index.
MTAPIRES IMTServerAPI::GatewayModuleNext( const UINT pos, // Position of the module IMTConGatewayModule* module // Object of the gateway module )  
---  
Parameters
pos
[in] Position of the module, starting with 0.
module
[out] The gateway module object. The module object must be first created using the [IMTServerAPI::GatewayModuleCreate](imtserverapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the gateway configuration with a specified index to the module object.