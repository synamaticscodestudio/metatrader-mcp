# GatewayModuleNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayModuleNext | [](imtreportapi_gatewaymoduleget.md "GatewayModuleGet") [](imtreportapi_config_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayModuleNext
Get the gateway module by the index.
MTAPIRES IMTReportAPI::GatewayModuleNext( const UINT pos, // Position of the module IMTConGatewayModule* module // Object of the gateway module configuration )  
---  
Parameters
pos
[in] Position of the module, starting with 0.
module
[out] The gateway module object. The module object must be first created using the [IMTReportAPI::GatewayModuleCreate](imtreportapi_gatewaymodulecreate.md "GatewayModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the gateway configuration with a specified index to the module object.