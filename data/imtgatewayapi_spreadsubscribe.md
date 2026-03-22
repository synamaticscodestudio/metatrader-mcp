# SpreadSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadSubscribe | [](imtgatewayapi_spreadlegcreate.md "SpreadLegCreate") [](imtgatewayapi_spreadunsubscribe.md "SpreadUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadSubscribe
Subscribe to events and hooks associated with the configuration of spreads.
C++
MTAPIRES IMTGatewayAPI::SpreadSubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadSubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface cannot subscribe to an event twice - in this case, [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::SpreadUnsubscribe](imtgatewayapi_spreadunsubscribe.md "SpreadUnsubscribe") or until the plugin is deleted.