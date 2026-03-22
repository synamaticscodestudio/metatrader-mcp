# DocumentRequestHistory (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentRequestHistory | [](imtmanagerapi_documentrequestbyclient.md "DocumentRequestByClient") [](imtmanagerapi_commentcreate.md "CommentCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentRequestHistory
Get the history of client document changes.
C++
MTAPIRES IMTManagerAPI::DocumentRequestHistory( const UINT64 document_id, // identifier const UINT64 author, // author const INT64 from, // period beginning const UINT64 to, // period end IMTClientArray* history // object of the array of clients )  
---  
.NET
MTRetCode CIMTManagerAPI.DocumentRequestHistory( ulong document_id, // identifier ulong author, // author long from, // period beginning long to, // period end CIMTClientArray history // object of the array of clients )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
author
[in] The login of the manager account by whom the document was changed. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. 
from
[in] The beginning of the period for which you wish to get the history of document changes. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you wish to get the history of document changes. The date is specified in seconds that have elapsed since 01.01.1970.
history
[out] An object of an array of documents. The 'history' object must be previously created using the [IMTServerAPI::DocumentCreateArray](imtserverapi_documentcreatearray.md "DocumentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method returns an array of document descriptions: all the document states after being changed by the specified author, in the specified time period.
The method cannot be called from event handlers (any IMT*Sink class methods).