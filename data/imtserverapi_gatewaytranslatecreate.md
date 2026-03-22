# GatewayTranslateCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayTranslateCreate | [](imtserverapi_gatewayparamcreate.md "GatewayParamCreate") [](imtserverapi_gatewaysubscribe.md "GatewaySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayTranslateCreate
Create an object of the parameter for converting the information received by the gateway.
IMTConGatewayTranslate* IMTServerAPI::GatewayTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGatewayTranslate::Release](imtcongatewaytranslate_release.md "Release") method of this object.