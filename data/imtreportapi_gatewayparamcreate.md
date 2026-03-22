# GatewayParamCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayParamCreate | [](imtreportapi_gatewaymodulecreate.md "GatewayModuleCreate") [](imtreportapi_gatewaytranslatecreate.md "GatewayTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayParamCreate
Create an object of the gateway parameter.
IMTConParam* IMTReportAPI::GatewayParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.