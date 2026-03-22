# DocumentRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentRequest | [](imtmanagerapi_documentdeletebatch.md "DocumentDeleteBatch") [](imtmanagerapi_documentrequestbyclient.md "DocumentRequestByClient") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentRequest
Get a document by identifier.
C++
MTAPIRES IMTManagerAPI::DocumentRequest( const UINT64 document_id, // identifier IMTDocument* document // document object )  
---  
.NET
MTRetCode IMTManagerAPI::DocumentRequest( ulong document_id, // identifier CIMTDocument document // document object )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
document
[out] Document object. The 'document' object must be previously created using the [IMTManagerAPI::DocumentCreate](imtmanagerapi_documentcreate.md "DocumentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a document with the specified ID, to the 'document' object.
The method cannot be called from event handlers (any IMT*Sink class methods).