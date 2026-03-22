# DocumentUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentUpdate | [](imtserverapi_documentadd.md "DocumentAdd") [](imtserverapi_documentdelete.md "DocumentDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentUpdate
Change a document in the client record.
MTAPIRES IMTServerAPI::DocumentUpdate( IMTDocument* document, // Document object const UINT64 author // Author )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
author
[in] The login of the manager account, on whose behalf the document is being updated. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A comment can only be updated from plugins running on the same trade server where the client was created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.