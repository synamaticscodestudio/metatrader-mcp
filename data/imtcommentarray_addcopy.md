# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ AddCopy | [](imtcommentarray_add.md "Add") [](imtcommentarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::AddCopy
Add a copy of a comment object to the end of an array.
C++
MTAPIRES IMTCommentArray::AddCopy( const IMTComment* comment // Comment to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.AddCopy( CIMTComment comment // Comment to be added )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'comment' object and places it at the end of the array.
Unlike [IMTCommetArray::Add(IMTComment* comment)](imtcommentarray_add.md "Add"), this method call does not set any additional conditions for the 'comment' object control, but is more resource-intensive, since an additional object is created.
IMTCommentArray::AddCopy
Add copies of client objects into an array.
C++
MTAPIRES IMTCommentArray::AddCopy( const IMTCommentArray* array // Array of comments to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.AddCopy( CIMTCommentArray  array // Array of comments to be added )  
---  
Parameters
array
[in] Object of the comments array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates copies of comment objects belonging to the 'array' object and inserts them at the end of the current array.
Unlike [IMTCommentArray::Add(IMTCommentArray* array)](imtclientarray_add.md "Add"), this method call does not change the source 'array' object, but is more resource-intensive, since additional objects are created.