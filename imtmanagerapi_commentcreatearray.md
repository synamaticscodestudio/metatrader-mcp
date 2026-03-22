# CommentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentCreateArray | [](imtmanagerapi_commentcreate.md "CommentCreate") [](imtmanagerapi_commentadd.md "CommentAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentCreateArray
Create an object of the array of comments.
C++
IMTClientArray* IMTManagerAPI::CommentCreateArray()  
---  
.NET
CIMTClientArray CIMTManagerAPI.CommentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTCommentArray](imtcommentarray.md "IMTCommentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTCommentArray::Release](imtcommentarray_release.md "Release") method of this object.