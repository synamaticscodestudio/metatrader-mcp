# GatewayModuleCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayModuleCreate | [](imtreportapi_gatewaycreate.md "GatewayCreate") [](imtreportapi_gatewayparamcreate.md "GatewayParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayModuleCreate
Create an object of configuration of the gateway module.
IMTConGatewayModule* IMTReportAPI::GatewayModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object.