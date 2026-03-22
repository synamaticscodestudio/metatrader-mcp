# CommentGetByDocument (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentGetByDocument | [](imtserverapi_commentgetbyclient.md "CommentGetByClient") [](imtserverapi_attachmentcreate.md "AttachmentCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentGetByClient
Get comments on client documents by position.
MTAPIRES IMTServerAPI::CommentGetByClient( const UINT64 document_id, // Document identifier const UINT position, // Start position const UINT total, // Number IMTCommentArray* comments // Array of documents )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
position
[in] Position in the list of comments, starting with 0. The method returns comments starting with this position.
total
[in] The number of comments which should be received.
comments
[out] An object of an array of comments. The 'comments' object must be previously created using the [IMTServerAPI::CommentCreateArray](imtserverapi_commentcreatearray.md "CommentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.