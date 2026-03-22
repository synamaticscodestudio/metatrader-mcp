# DocumentGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentGet | [](imtserverapi_documentdelete.md "DocumentDelete") [](imtserverapi_documentgetbyclient.md "DocumentGetByClient") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentGet
Get a document by identifier.
MTAPIRES IMTServerAPI::DocumentGet( const UINT64 document_id, // Identifier IMTDocument* document // Document object )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
document
[out] Document object. The 'document' object must be previously created using the [IMTServerAPI::DocumentCreate](imtserverapi_documentcreate.md "DocumentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of a document with the specified ID, to the 'document' object.