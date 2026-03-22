# GatewayGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayGet | [](imtreportapi_gatewaynext.md "GatewayNext") [](imtreportapi_gatewaymoduletotal.md "GatewayModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayGet
Get the gateway configuration by the name.
MTAPIRES IMTReportAPI::GatewayGet( LPCWSTR name, // Name of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
Parameters
name
[in] The name of the configuration.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTReportAPI::GatewayCreate](imtreportapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGateway::Name()](imtcongateway_name.md "Name") value is used as the name.