# GatewayRestart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayRestart | [](imtserverapi_gatewaymodulenext.md "GatewayModuleNext") [](serverapi_config_route.md "Routing") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayRestart
Restart gateways.
MTAPIRES IMTServerAPI::GatewayRestart()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The execution of this command restarts all gateways.