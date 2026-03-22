# CommentUpdateBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ CommentUpdateBatchArray | [](imtadminapi_commentupdatebatch.md "CommentUpdateBatch") [](imtadminapi_commentdelete.md "CommentDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommentUpdateBatchArray
Update a batch of comments to a document or client.
C++
MTAPIRES IMTAdminAPI::CommentUpdateBatchArray( IMTComment** comments, // array of documents const UINT comments_total, // number of documents in the array MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.CommentUpdateBatchArray( CIMTComment[] comments, // array of documents MTRetCode[] retcodes // array of results )  
---  
Parameters
comments
[in] Array of [comment objects](imtcommentarray.md "IMTCommentArray").
comments_total
[in] The number of comments in the 'comments' object.
results
[out] An array with the results of updating of comments. The size of the 'results' array must not be less than that of 'comments'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all the specified comments have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the comments have been updated. Analyze the 'results' array for more details of the execution results. The result of update of each comment from the 'comments' array is added to 'results'. The index of a result corresponds to the index of a comment in the source array.
Note
To update a comment to a client, specify the client ID in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient"). To edit a comment to a document, specify appropriate identifiers both in [IMTComment::RelatedClient](imtcomment_relatedclient.md "RelatedClient") and in [IMTComment::RelatedDocument](imtcomment_relateddocument.md "RelatedDocument").
Comments can only be changed from the applications connected to the trading server, on which the client has been created ([IMTComment::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.