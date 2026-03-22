# GatewayParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayParamCreate | [](imtadminapi_gatewaymodulecreate.md "GatewayModuleCreate") [](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayParamCreate
Create an object of the gateway parameter.
C++
IMTConParam* IMTAdminAPI::GatewayParamCreate()  
---  
.NET
CIMTConParam CIMTAdminAPI.GatewayParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.