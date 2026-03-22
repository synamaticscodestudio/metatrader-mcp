# GatewayUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Gateways ](serverapi_config_gateway.md "Gateways")/ GatewayUnsubscribe | [](imtserverapi_gatewaysubscribe.md "GatewaySubscribe") [](imtserverapi_gatewayadd.md "GatewayAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GatewayUnsubscribe
Unsubscribe from events and hooks associated with the gateway configuration.
MTAPIRES IMTServerAPI::GatewayUnsubscribe( IMTConGatewaySink* sink // A pointer to the IMTConGatewaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGatewaySink](imtcongatewaysink.md "IMTConGatewaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::GatewaySubscribe](imtserverapi_gatewaysubscribe.md "GatewaySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.