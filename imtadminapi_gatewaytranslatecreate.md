# GatewayTranslateCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayTranslateCreate | [](imtadminapi_gatewayparamcreate.md "GatewayParamCreate") [](imtadminapi_gatewaysubscribe.md "GatewaySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayTranslateCreate
Create an object of the parameter for converting the information received by the gateway.
C++
IMTConGatewayTranslate* IMTAdminAPI::GatewayTranslateCreate()  
---  
.NET
CIMTConGatewayTranslate CIMTAdminAPI.GatewayTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGatewayTranslate::Release](imtcongatewaytranslate_release.md "Release") method of this object.