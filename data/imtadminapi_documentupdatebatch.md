# DocumentUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentUpdateBatch | [](imtadminapi_documentupdate.md "DocumentUpdate") [](imtadminapi_documentupdatebatcharray.md "DocumentUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentUpdateBatch
Change a document in the client record.
C++
MTAPIRES IMTAdminAPI::DocumentUpdateBatch( IMTDocumentArray* documents, // array of documents MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.DocumentUpdateBatch( CIMTDocumentArray documents, // array of documents MTRetCode[] retcodes // array of results )  
---  
Parameters
documents
[in] [Document array object](imtdocumentarray.md "IMTDocumentArray").
results
[out] An array with the document changing results. The size of the 'results' array must not be less than that of 'documents'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all the specified documents have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the documents have been updated. Analyze the 'results' array for more details of the execution results. The result of update of each document from the 'documents' array is added to 'results'. The index of a result corresponds to the index of a document in the source array.
Note
A document can only be changed from the applications connected to the trading server, on which the client has been created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.