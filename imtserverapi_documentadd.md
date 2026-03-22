# DocumentAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentAdd | [](imtserverapi_documentunsubscribe.md "DocumentUnsubscribe") [](imtserverapi_documentupdate.md "DocumentUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentAdd
Add a document to a client record.
MTAPIRES IMTServerAPI::DocumentAdd( IMTDocument* document, // Document object const UINT64 author // Author )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
author
[in] The login of the manager account, on whose behalf the document is being added. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A comment can only be added from plugins running on the same trade server where the client was created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.