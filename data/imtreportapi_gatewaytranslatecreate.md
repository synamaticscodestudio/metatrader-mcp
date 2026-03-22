# GatewayTranslateCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayTranslateCreate | [](imtreportapi_gatewayparamcreate.md "GatewayParamCreate") [](imtreportapi_gatewaytotal.md "GatewayTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayTranslateCreate
Create an object of the parameter for converting the information received by the gateway.
IMTConGatewayTranslate* IMTReportAPI::GatewayTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGatewayTranslate::Release](imtcongatewaytranslate_release.md "Release") method of this object.