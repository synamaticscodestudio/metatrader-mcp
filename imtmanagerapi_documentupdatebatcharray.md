# DocumentUpdateBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentUpdateBatchArray | [](imtmanagerapi_documentupdatebatch.md "DocumentUpdateBatch") [](imtmanagerapi_documentdelete.md "DocumentDelete") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentUpdateBatchArray
Change a document in the client record.
C++
MTAPIRES IMTManagerAPI::DocumentUpdateBatchArray( IMTDocument** documents, // array documents const UINT documents_total, // number of documents in the array MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.DocumentUpdateBatchArray( CIMTDocument[] documents, // array of documents MTRetCode[] retcodes // array of results )  
---  
Parameters
documents
[in] Array of [document objects](imtdocument.md "IMTDocument").
documents_total
[in] The number of documents in the 'documents' array.
results
[out] An array with the document changing results. The size of the 'results' array must not be less than that of 'documents'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all the specified documents have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the documents have been updated. Analyze the 'results' array for more details of the execution results. The result of update of each document from the 'documents' array is added to 'results'. The index of a result corresponds to the index of a document in the source array.
Note
A document can only be changed from the applications connected to the trading server, on which the client has been created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.