# GatewayNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayNext | [](imtserverapi_gatewaytotal.md "GatewayTotal") [](imtserverapi_gatewayget.md "GatewayGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayNext
Get the gateway configuration by the index.
MTAPIRES IMTServerAPI::GatewayNext( const UINT pos, // Position of the configuration IMTConGateway* gateway // Gateway configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
gateway
[out] The gateway configuration object. The gateway object must be first created using the [IMTServerAPI::GatewayCreate](imtserverapi_gatewaycreate.md "GatewayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a gateway with a specified index to the gateway object.