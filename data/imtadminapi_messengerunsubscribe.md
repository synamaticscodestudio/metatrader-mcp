# MessengerUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerUnsubscribe | [](imtadminapi_messengersubscribe.md "MessengerSubscribe") [](imtadminapi_messengerupdate.md "MessengerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerUnsubscribe
Unsubscribe from events and hooks associated with messenger configurations.
C++
MTAPIRES IMTAdminAPI::MessengerUnsubscribe( IMTConMessengerSink* sink // A pointer to the IMTConMessengerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerUnsubscribe( CIMTConMessengerSink sink // The CIMTConMessengerSink object )  
---  
Python
AdminAPI.MessengerUnsubscribe( sink # IMTConMessengerSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConMessengerSink](imtconmessengersink.md "IMTConMessengerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::MessengerSubscribe](imtserverapi_messengersubscribe.md "MessengerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.