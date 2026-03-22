# SpreadSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadSubscribe | [](imtserverapi_spreadlegcreate.md "SpreadLegCreate") [](imtserverapi_spreadunsubscribe.md "SpreadUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadSubscribe
Subscribe to events and hooks associated with the configuration of spreads.
MTAPIRES IMTServerAPI::SpreadSubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface cannot subscribe to an event twice - in this case, [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::SpreadUnsubscribe](imtserverapi_spreadunsubscribe.md "SpreadUnsubscribe") or until the plugin is deleted.