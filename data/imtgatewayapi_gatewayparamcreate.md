# GatewayParamCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Gateways ](imtgatewayapi_config_gateway.md "Functions")/ GatewayParamCreate | [](imtgatewayapi_gatewaycreate.md "GatewayCreate") [](imtgatewayapi_gatewaytranslatecreate.md "GatewayTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayParamCreate
Create an object of the gateway parameter.
C++
IMTConParam* IMTGatewayAPI::GatewayParamCreate()  
---  
.NET
CIMTConParam CIMTGatewayAPI.GatewayParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.