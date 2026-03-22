# DocumentDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentDelete | [](imtmanagerapi_documentupdatebatcharray.md "DocumentUpdateBatchArray") [](imtmanagerapi_documentdeletebatch.md "DocumentDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentDelete
Delete a document from a client record.
C++
MTAPIRES IMTManagerAPI::DocumentDelete( const UINT64 document_id // document identifier )  
---  
.NET
MTRetCode CIMTManagerAPI.DocumentDelete( ulong document_id // document identifier )  
---  
Parameters
document
[in] The identifier of the document ([IMTDocument::RecordId](imtdocument_recordid.md "RecordID")) to be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A document can only be deleted from the applications connected to the trading server, on which the client has been created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.