# MessengerSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerSubscribe | [](imtserverapi_messengertemplatecreate.md "MessengerTemplateCreate") [](imtserverapi_messengerunsubscribe.md "MessengerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerSubscribe
Subscribe to events and hooks associated with messenger configurations.
MTAPIRES IMTServerAPI::MessengerSubscribe( IMTConMessengerSink* sink // A pointer to the IMTConMessengerSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::MessengerUnsubscribe](imtserverapi_messengerunsubscribe.md "MessengerUnsubscribe") or until the plugin is deleted.