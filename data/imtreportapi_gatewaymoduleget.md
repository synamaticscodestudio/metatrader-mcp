# GatewayModuleGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayModuleGet | [](imtreportapi_gatewaymoduletotal.md "GatewayModuleTotal") [](imtreportapi_gatewaymodulenext.md "GatewayModuleNext") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayModuleGet
Get the gateway module by the name.
MTAPIRES IMTReportAPI::GatewayModuleGet( LPCWSTR name, // Name of the module IMTConGatewayModule* module // Object of the gateway module )  
---  
Parameters
name
[in] The name of the module.
module
[out] The gateway module object. The module object must be first created using the [IMTReportAPI::GatewayModuleCreate](imtreportapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGatewayModule::Name](imtcongatewaymodule_name.md "Name") value is used as the name.