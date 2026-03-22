# GatewayParamCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayParamCreate | [](imtserverapi_gatewaymodulecreate.md "GatewayModuleCreate") [](imtserverapi_gatewaytranslatecreate.md "GatewayTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayParamCreate
Create an object of the gateway parameter.
IMTConParam* IMTServerAPI::GatewayParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.