# CommentAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentAdd | [](imtmanagerapi_commentcreatearray.md "CommentCreateArray") [](imtmanagerapi_commentaddbatch.md "CommentAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentAdd
Add a comment to a document or client.
C++
MTAPIRES IMTManagerAPI::CommentAdd( IMTComment* comment // comment object )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentAdd( CIMTComment comment // comment object )  
---  
Parameters
document
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To add a comment to a client, specify the client ID in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient"). To add a comment to a document, specify appropriate identifiers both in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient") and in [IMTComment::RelatedDocument](imtcomment_relateddocument.md "RelatedDocument").
Comments can only be added from the applications connected to the trading server, on which the client has been created ([IMTComment::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.