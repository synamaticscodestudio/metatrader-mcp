# CommentRequestByDocument (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentRequestByDocument | [](imtmanagerapi_commentrequestbyclient.md "CommentRequestByClient") [](imtmanagerapi_attachmentcreate.md "AttachmentCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentRequestByDocument
Get comments on client documents by position.
C++
MTAPIRES IMTManagerAPI::CommentRequestByDocument( const UINT64 document_id, // document identifier cost UINT position, // initial position const UINT total, // number IMTCommentArray* comments // array of documents )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentRequestByDocument( ulong document_id, // document identifier uint position, // initial position uint total, // number CIMTCommentArray comments // array of documents )  
---  
Parameters
document_id
[in] Document ID ([IMTDocument::RecordID](imtdocument_recordid.md "RecordID")).
position
[in] Position in the list of comments, starting with 0. The method returns comments starting with this position.
total
[in] The number of comments which should be received.
comments
[out] An object of an array of comments. The 'comments' object must be previously created using the [IMTManagerAPI::CommentCreateArray](imtmanagerapi_commentcreatearray.md "CommentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).