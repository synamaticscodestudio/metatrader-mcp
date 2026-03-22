# CommentUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentUpdate | [](imtmanagerapi_commentaddbatcharray.md "CommentAddBatchArray") [](imtmanagerapi_commentupdatebatch.md "CommentUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentUpdate
Change a comment to a document or client.
C++
MTAPIRES IMTManagerAPI::CommentUpdate( IMTComment* comment // comment object )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentUpdate( CIMTComment comment // comment object )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To update a comment to a client, specify the client ID in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient"). To edit a comment to a document, specify appropriate identifiers both in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient") and in [IMTComment::RelatedDocument](imtcomment_relateddocument.md "RelatedDocument").
A comment can only be changed from the applications connected to the trading server, on which the client has been created ([IMTComment::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.