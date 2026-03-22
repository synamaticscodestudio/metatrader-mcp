# DocumentSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentSubscribe | [](imtserverapi_documentcreatearray.md "DocumentCreateArray") [](imtserverapi_documentunsubscribe.md "DocumentUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentSubscribe
Subscribe to events and hooks associated with changes in the document database.
MTAPIRES IMTServerAPI::DocumentSubscribe( IMTDocumentSink* sink // A pointer to the IMTDocumentSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDocumentSink](imtdocumentsink.md "IMTDocumentSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTDocumentSink](imtdocumentsink.md "IMTDocumentSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::DocumentUnsubscribe](imtserverapi_documentunsubscribe.md "DocumentUnsubscribe") or until the deletion of the plugin.