# CommentUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentUpdate | [](imtserverapi_commentadd.md "CommentAdd") [](imtserverapi_commentdelete.md "CommentDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentUpdate
Change a comment to a document or client.
MTAPIRES IMTServerAPI::CommentUpdate( IMTComment* comment, // Comment object const UINT64 author // Author )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
author
[in] The login of the manager account, on whose behalf the comment is being updated. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To update a comment to a client, specify the client ID in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient"). To update a comment to a document, specify appropriate IDs both in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient") and in [IMTComment::RelatedDocument](imtcomment_relateddocument.md "RelatedDocument").
A comment can only be updated from plugins running on the same trade server where the client was created ([IMTDocument::RelatedClient](imtcomment_relatedclient.md "RelatedClient")). For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.