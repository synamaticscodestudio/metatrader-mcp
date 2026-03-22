# NetServerSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerSubscribe | [](imtgatewayapi_netserverrangecreate.md "NetServerRangeCreate") [](imtgatewayapi_netserverunsubscribe.md "NetServerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerSubscribe
Subscribe to events associated with the configuration of the platform components.
C++
MTAPIRES IMTGatewayAPI::NetServerSubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.NetServerSubscribe( CIMTConServerSink sink // CIMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConServerSink](imtconserversink.md "IMTConServerSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::NetServerUnsubscribe](imtgatewayapi_netserverunsubscribe.md "NetServerUnsubscribe").