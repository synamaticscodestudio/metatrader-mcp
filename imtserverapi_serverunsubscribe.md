# ServerUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Server Services ](serverapi_server_services.md "Server Services")/ ServerUnsubscribe | [](imtserverapi_serversubscribe.md "ServerSubscribe") [](serverapi_geo.md "Geo Services") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ServerUnsubscribe
Undubscribe from events associated with server events.
MTAPIRES IMTServerAPI::ServerUnsubscribe( IMTServerSink* sink // A pointer at the IMTServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTServerSink](imtserversink.md "Interface of Server Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::ServerSubscribe](imtserverapi_serversubscribe.md "ServerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.