# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Next | [](imtcommentarray_total.md "Total") [](imtcommentarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Next
Get a comment object by its position.
C++
IMTComment* IMTCommentArray::Next( const UINT pos // Comment position ) const  
---  
.NET (Gateway/Manager API)
CIMTComment CIMTCommentArray.Next( uint  pos // Comment position )  
---  
Parameters
pos
[in] Comment position in an array, starting with 0.
Return Value
If successful, it returns a pointer to the comment object at the specified position. Otherwise, NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Deletion of the returned object (call of [IMTComment::Release](imtcomment_release.md "Release")) will cause the pointer stored inside the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.