# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ UpdateCopy | [](imtcommentarray_update.md "Update") [](imtcommentarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::UpdateCopy
Change a comment at the specified position of an array by copying the parameters of a passed comment object.
C++
MTAPIRES IMTCommentArray::UpdateCopy( const UINT  pos, // Position const IMTComment* comment // Comment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.UpdateCopy( uint  pos, // Position CIMTComment comment // Comment object )  
---  
Parameters
pos
[in] Comment position in an array, starting with 0.
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method copies the 'comment' object parameters to the comment object at the specified position in the array.
Unlike the [IMTCommentArray::Update](imtcommentarray_update.md "Update") method, this method call does not set any additional conditions for the control of the 'comment' object, but is more resource-intensive, since an additional object is created.