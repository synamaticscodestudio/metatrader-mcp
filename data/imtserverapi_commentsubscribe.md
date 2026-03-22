# CommentSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentSubscribe | [](imtserverapi_commentcreatearray.md "CommentCreateArray") [](imtserverapi_commentunsubscribe.md "CommentUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentSubscribe
Subscribe to events and hooks associated with changes in the comment database.
MTAPIRES IMTServerAPI::CommentSubscribe( IMTCommentSink* sink // A pointer to the IMTCommentSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTCommentSink](imtcommentsink.md "IMTCommentSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTCommentSink](imtcommentsink.md "IMTCommentSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::CommentUnsubscribe](imtserverapi_commentunsubscribe.md "CommentUnsubscribe") or until the deletion of the plugin.