# DocumentGetHistory (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentGetHistory | [](imtserverapi_documentgetbyclient.md "DocumentGetByClient") [](imtserverapi_commentcreate.md "CommentCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentGetHistory
Get the history of client document changes.
MTAPIRES IMTServerAPI::DocumentGetHistory( const UINT64 document_id, // Identifier const UINT64 author, // Author const INT64 from, // Period start const UINT64 to, // Period end IMTClientArray* history // Clients array object )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
author
[in] The login of the manager account by whom the document was changed. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. 
from
[in] The beginning of the period for which you wish to get the history of document changes. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you wish to get the history of document changes. The date is specified in seconds since 01.01.1970.
history
[out] An object of an array of documents. The 'history' object must be previously created using the [IMTServerAPI::DocumentCreateArray](imtserverapi_documentcreatearray.md "DocumentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns an array of document descriptions: all the document states after changes by the specified author in the specified time period.