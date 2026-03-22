# DocumentRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentRequest | [](imtadminapi_documentdeletebatch.md "DocumentDeleteBatch") [](imtadminapi_documentrequestbyclient.md "DocumentRequestByClient") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentRequest
Get a document by identifier.
C++
MTAPIRES IMTAdminAPI::DocumentRequest( const UINT64 document_id, // identifier IMTDocument* document // document object )  
---  
.NET
MTRetCode IMTAdminAPI::DocumentRequest( ulong document_id, // identifier CIMTDocument document // document object )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
document
[out] Document object. The 'document' object must be previously created using the [IMTAdminAPI::DocumentCreate](imtadminapi_documentcreate.md "DocumentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a document with the specified ID, to the 'document' object.
The method cannot be called from event handlers (any IMT*Sink class methods).