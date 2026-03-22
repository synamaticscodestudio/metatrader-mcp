# CommentRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ CommentRequest | [](imtadminapi_commentdeletebatch.md "CommentDeleteBatch") [](imtadminapi_commentrequestbyclient.md "CommentRequestByClient") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommentRequest
Get a comment by identifier.
C++
MTAPIRES IMTAdminAPI::CommentRequest( const UINT64 comment_id, // identifier IMTComment* comment // comment object )  
---  
.NET
MTRetCode CIMTAdminAPI.CommentRequest( ulong comment_id, // identifier CIMTComment comment // Comment object )  
---  
Parameters
comment_id
[in] Comment object ([IMTComment::RecordID](imtcomment_recordid.md "RecordID")).
comment
[out] Comment object. The 'comment' object must be previously created using the [IMTAdminAPI::CommentCreate](imtadminapi_commentcreate.md "CommentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a comment with the specified ID, to the 'comment' object.
The method cannot be called from event handlers (any IMT*Sink class methods).