# CommentDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentDeleteBatch | [](imtmanagerapi_commentdelete.md "CommentDelete") [](imtmanagerapi_commentrequest.md "CommentRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentDeleteBatch
Delete a batch of comments from a document or client.
C++
MTAPIRES IMTManagerAPI::CommentDeleteBatch( const UINT64* comment_ids, // document identifiers const UINT comment_ids_total, // number of documents MTAPIRES* results // results )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentDeleteBatch( ulong[] comment_ids, // document identifiers MTRetCode[] retcodes // results )  
---  
Parameters
comment_ids
[in] The identifiers of the documents ([IMTDocument::RecordId](imtdocument_recordid.md "RecordID")) to be deleted.
comment_ids_total
[in] The number of identifiers in the comment_ids array.
results
[out] An array with document deletion results. The size of the 'results' array must not be less than that of 'comment_ids'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified documents have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the documents have been deleted. Analyze the 'results' array for more details of the execution results. The result of deletion of each document from the 'comment_ids' array is added to 'results'. The index of a result corresponds to the index of a document in the source array.
Note
Comments can only be deleted from the applications connected to the trading server, on which the client has been created ([IMTComment::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.