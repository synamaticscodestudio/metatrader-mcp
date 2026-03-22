# MessengerSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerSubscribe | [](imtadminapi_messengertemplatecreate.md "MessengerTemplateCreate") [](imtadminapi_messengerunsubscribe.md "MessengerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerSubscribe
Subscribe to events and hooks associated with messenger configurations.
C++
MTAPIRES IMTAdminAPI::MessengerSubscribe( IMTConMessengerSink* sink // A pointer to the IMTConMessengerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerSubscribe( CIMTConMessengerSink sink // The CIMTConMessengerSink object )  
---  
Python
AdminAPI.MessengerSubscribe( sink # IMTConMessengerSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
To receive [IMTConMessengerSink::OnMessengerSync](imtconmessengersink_onmessengersync.md "OnMessengerSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::MessengerUnsubscribe](imtserverapi_messengerunsubscribe.md "MessengerUnsubscribe") or until the plugin is deleted.