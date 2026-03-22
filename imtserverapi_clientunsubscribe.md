# ClientUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientUnsubscribe | [](imtserverapi_clientsubscribe.md "ClientSubscribe") [](imtserverapi_clientadd.md "ClientAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientUnsubscribe
Unsubscribe from the events and hooks associated with changes in the client base.
MTAPIRES IMTServerAPI::ClientUnsubscribe( IMTClientSink* sink // A pointer to the IMTClientSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTClientSink](imtclientsink.md "IMTClientSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTServerAPI::ClientSubscribe](imtserverapi_clientsubscribe.md "ClientSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.