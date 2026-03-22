# GatewayModuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayModuleCreate | [](imtadminapi_gatewaycreate.md "GatewayCreate") [](imtadminapi_gatewayparamcreate.md "GatewayParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayModuleCreate
Create an object of configuration of the gateway module.
C++
IMTConGatewayModule* IMTAdminAPI::GatewayModuleCreate()  
---  
.NET
CIMTConGatewayModule CIMTAdminAPI.GatewayModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object.