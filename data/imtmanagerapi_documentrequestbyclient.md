# DocumentRequestByClient (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentRequestByClient | [](imtmanagerapi_documentrequest.md "DocumentRequest") [](imtmanagerapi_documentrequesthistory.md "DocumentRequestHistory") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentRequestByClient
Get client documents.
C++
MTAPIRES IMTManagerAPI::DocumentRequestByClient( const UINT64 client_id, // client identifier IMTDocumnentArray* documents // array of documents )  
---  
.NET
MTRetCode CIMTManagerAPI.DocumentRequestByClient( ulong client_id, // client identifier CIMTDocumnentArray documents // array of documents )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
documents
[out] An object of an array of documents. The documents object must be previously created using the [IMTManagerAPI::DocumentCreateArray](imtmanagerapi_documentcreatearray.md "DocumentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).