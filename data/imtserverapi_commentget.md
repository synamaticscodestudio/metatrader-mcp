# CommentGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentGet | [](imtserverapi_commentdelete.md "CommentDelete") [](imtserverapi_commentgetbyclient.md "CommentGetByClient") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentGet
Get a comment by identifier.
MTAPIRES IMTServerAPI::CommentGet( const UINT64 comment_id, // Identifier IMTComment* comment // Comment object )  
---  
Parameters
comment_id
[in] Comment object ([IMTComment::RecordID](imtcomment_recordid.md "RecordID")).
comment
[out] Comment object. The 'comment' object must be previously created using the [IMTServerAPI::CommentCreate](imtserverapi_commentcreate.md "CommentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of a comment with the specified ID, to the 'comment' object.