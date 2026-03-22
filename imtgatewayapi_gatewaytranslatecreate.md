# GatewayTranslateCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Gateways ](imtgatewayapi_config_gateway.md "Functions")/ GatewayTranslateCreate | [](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate") [](imtgatewayapi_config_symbol.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayTranslateCreate
Create an object of the parameter for converting the information received by the gateway.
C++
IMTConGatewayTranslate* IMTGatewayAPI::GatewayTranslateCreate()  
---  
.NET
CIMTConGatewayTranslate CIMTGatewayAPI.GatewayTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGatewayTranslate::Release](imtcongatewaytranslate_release.md "Release") method of this object.