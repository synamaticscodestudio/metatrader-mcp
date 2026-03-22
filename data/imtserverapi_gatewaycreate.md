# GatewayCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayCreate | [](serverapi_config_gateway.md "Gateways") [](imtserverapi_gatewaymodulecreate.md "GatewayModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayCreate
Create an object of the gateway configuration.
IMTConGateway* IMTServerAPI::GatewayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGateway](imtcongateway.md "IMTConGateway") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object.