# GatewayGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayGet | [](imtserverapi_gatewaynext.md "GatewayNext") [](imtserverapi_gatewaymoduletotal.md "GatewayModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayGet
Get the gateway configuration by the name.
MTAPIRES IMTServerAPI::GatewayGet( LPCWSTR name, // Name of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
Parameters
name
[in] The name of the configuration.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTServerAPI::GatewayCreate](imtserverapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGateway::Name](imtcongateway_name.md "Name") value is used as the name.