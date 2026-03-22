# GatewayNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayNext | [](imtreportapi_gatewaytotal.md "GatewayTotal") [](imtreportapi_gatewayget.md "GatewayGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayNext
Get the gateway configuration by the index.
MTAPIRES IMTReportAPI::GatewayNext( const UINT pos, // Position of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTReportAPI::GatewayCreate](imtreportapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a gateway with a specified index to the gateway object.