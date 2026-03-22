# CommentUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentUnsubscribe | [](imtserverapi_commentsubscribe.md "CommentSubscribe") [](imtserverapi_commentadd.md "CommentAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentUnsubscribe
Unsubscribe from the events and hooks associated with changes in the comment database.
MTAPIRES IMTServerAPI::CommentUnsubscribe( IMTCommentSink* sink // A pointer to the IMTCommentSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTCommentSink](imtcommentsink.md "IMTCommentSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is paired with [IMTServerAPI::CommentSubscribe](imtserverapi_commentsubscribe.md "CommentSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.