# MessengerUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerUnsubscribe | [](imtserverapi_messengersubscribe.md "MessengerSubscribe") [](imtserverapi_messengeradd.md "MessengerAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerUnsubscribe
Unsubscribe from events and hooks associated with messenger configurations.
MTAPIRES IMTServerAPI::MessengerUnsubscribe( IMTConMessengerSink* sink // A pointer to the IMTConMessengerSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::MessengerSubscribe](imtserverapi_messengersubscribe.md "MessengerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.