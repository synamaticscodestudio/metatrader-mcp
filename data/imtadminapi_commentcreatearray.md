# CommentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ CommentCreateArray | [](imtadminapi_commentcreate.md "CommentCreate") [](imtadminapi_commentadd.md "CommentAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommentCreateArray
Create an object of the array of comments.
C++
IMTClientArray* IMTAdminAPI::CommentCreateArray()  
---  
.NET
CIMTClientArray CIMTAdminAPI.CommentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTCommentArray](imtcommentarray.md "IMTCommentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTCommentArray::Release](imtcommentarray_release.md "Release") method of this object.