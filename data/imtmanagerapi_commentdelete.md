# CommentDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentDelete | [](imtmanagerapi_commentupdatebatcharray.md "CommentUpdateBatchArray") [](imtmanagerapi_commentdeletebatch.md "CommentDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentDelete
Delete a comment from a document or client.
C++
MTAPIRES IMTManagerAPI::CommentDelete( IMTComment* comment // comment object )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentDelete( CIMTComment comment // comment object )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Comments can only be deleted from the applications connected to the trading server, on which the client has been created ([IMTComment::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.