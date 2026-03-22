# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Delete | [](imtcommentarray_addcopy.md "AddCopy") [](imtcommentarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Delete
Delete a comment object by its position.
C++
MTAPIRES IMTCommentArray::Delete( const UINT pos // Comment position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Delete( uint pos // Comment position )  
---  
Parameters
pos
[in] Comment position in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by calling the [IMTComment::Release](imtcomment_release.md "Release") method.