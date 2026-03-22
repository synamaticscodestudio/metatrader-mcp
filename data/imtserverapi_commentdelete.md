# CommentDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentDelete | [](imtserverapi_commentupdate.md "CommentUpdate") [](imtserverapi_commentget.md "CommentGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentDelete
Delete a comment from a document or client.
MTAPIRES IMTServerAPI::CommentDelete( IMTComment* comment, // Comment object const UINT64 author // Author )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
author
[in] The login of the manager account, on whose behalf the comment is being deleted. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A comment can only be deleted from plugins running on the same trade server where the client was created ([IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient")). For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.