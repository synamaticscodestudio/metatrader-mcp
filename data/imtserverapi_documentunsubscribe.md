# DocumentUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentUnsubscribe | [](imtserverapi_documentsubscribe.md "DocumentSubscribe") [](imtserverapi_documentadd.md "DocumentAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentUnsubscribe
Unsubscribe from the events and hooks associated with changes in the document database.
MTAPIRES IMTServerAPI::DocumentUnsubscribe( IMTDocumentSink* sink // A pointer to the IMTDocumentSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDocumentSink](imtdocumentsink.md "IMTDocumentSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is paired with [IMTServerAPI::DocumentSubscribe](imtserverapi_documentsubscribe.md "DocumentSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.