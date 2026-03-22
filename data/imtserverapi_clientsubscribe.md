# ClientSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientSubscribe | [](imtserverapi_clientcreatearray.md "ClientCreateArray") [](imtserverapi_clientunsubscribe.md "ClientUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientSubscribe
Subscribe to events and hooks associated with changes in the client base.
MTAPIRES IMTServerAPI::ClientSubscribe( IMTClientSink* sink // A pointer to the IMTClientSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTClientSink](imtclientsink.md "IMTClientSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTClientSink](imtclientsink.md "IMTClientSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::ClientUnsubscribe](imtserverapi_clientunsubscribe.md "ClientUnsubscribe") or until the deletion of the plugin.