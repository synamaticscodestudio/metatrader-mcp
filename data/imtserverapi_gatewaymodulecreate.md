# GatewayModuleCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayModuleCreate | [](imtserverapi_gatewaycreate.md "GatewayCreate") [](imtserverapi_gatewayparamcreate.md "GatewayParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayModuleCreate
Create an object of configuration of the gateway module.
IMTConGatewayModule* IMTServerAPI::GatewayModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object.