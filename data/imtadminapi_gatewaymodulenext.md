# GatewayModuleNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayModuleNext | [](imtadminapi_gatewaymoduleget.md "GatewayModuleGet") [](imtadminapi_gatewaypositionrequest.md "GatewayPositionRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayModuleNext
Get the gateway module by the index.
C++
MTAPIRES IMTAdminAPI::GatewayModuleNext( const UINT pos, // Position of the module IMTConGatewayModule* module // Object of the gateway module )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayModuleNext( uint pos, // Position of the module CIMTConGatewayModule module // Object of the gateway module )  
---  
Python
AdminAPI.GatewayModuleNext( pos # Position of the module )  
---  
Parameters
pos
[in] Position of the module, starting with 0.
module
[out] The gateway module object. The gateway object must be first created using the [IMTAdminAPI::GatewayModuleCreate](imtadminapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the gateway configuration with a specified index to the module object.