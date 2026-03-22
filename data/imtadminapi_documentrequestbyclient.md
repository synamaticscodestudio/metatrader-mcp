# DocumentRequestByClient (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentRequestByClient | [](imtadminapi_documentrequest.md "DocumentRequest") [](imtadminapi_documentrequesthistory.md "DocumentRequestHistory") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentRequestByClient
Get client documents.
C++
MTAPIRES IMTAdminAPI::DocumentRequestByClient( const UINT64 client_id, // client identifier IMTDocumnentArray* documents // array of documents )  
---  
.NET
MTRetCode CIMTAdminAPI.DocumentRequestByClient( ulong client_id, // client identifier CIMTDocumnentArray documents // array of documents )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
documents
[out] An object of an array of documents. The documents object must be previously created using the [IMTAdminAPI::DocumentCreateArray](imtadminapi_documentcreatearray.md "DocumentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).