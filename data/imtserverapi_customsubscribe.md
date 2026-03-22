# CustomSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Custom Functions ](serverapi_custom.md "Custom Functions")/ CustomSubscribe | [](serverapi_custom.md "Custom Functions") [](imtserverapi_customunsubscribe.md "CustomUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CustomSubscribe
Subscribe to events and hooks associated with the execution of custom functions.
MTAPIRES IMTServerAPI::CustomSubscribe( IMTCustomSink* sink // A pointer to the IMTCustomSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTCustomSink](imtcustomsink.md "Custom Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTCustomSink](imtcustomsink.md "Custom Events Interface") interface cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::CustomUnsubscribe](imtserverapi_customunsubscribe.md "CustomUnsubscribe") or until the plugin is deleted.
The method is only used in plugins running on the trade server.