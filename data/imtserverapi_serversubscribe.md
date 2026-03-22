# ServerSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Server Services ](serverapi_server_services.md "Server Services")/ ServerSubscribe | [](imtserverapi_serverrestartremote.md "ServerRestartRemote") [](imtserverapi_serverunsubscribe.md "ServerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ServerSubscribe
Subscribe to events associated with server events.
MTAPIRES IMTServerAPI::ServerSubscribe( IMTServerSink* sink // A pointer at the IMTServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTServerSink](imtserversink.md "Interface of Server Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTServerSink](imtserversink.md "Interface of Server Events") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::ServerUnsubscribe](imtserverapi_serverunsubscribe.md "ServerUnsubscribe") or until the plugin is deleted.