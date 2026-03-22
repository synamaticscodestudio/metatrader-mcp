# NetServerUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerUnsubscribe | [](imtgatewayapi_netserversubscribe.md "NetServerSubscribe") [](imtgatewayapi_netservertotal.md "NetServerTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerUnsubscribe
Unsubscribe from events associated with the configuration of the platform components.
C++
MTAPIRES IMTGatewayAPI::NetServerUnsubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.NetServerUnsubscribe( CIMTConServerSink sink // CIMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is pared to [IMTGatewayAPI::NetServerSubscribe](imtgatewayapi_netserversubscribe.md "NetServerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.