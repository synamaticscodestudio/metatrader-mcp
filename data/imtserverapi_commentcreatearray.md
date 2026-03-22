# CommentCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentCreateArray | [](imtserverapi_commentcreate.md "CommentCreate") [](imtserverapi_commentsubscribe.md "CommentSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentCreateArray
Create an object of the array of comments.
IMTClientArray* IMTServerAPI::CommentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTCommentArray](imtcommentarray.md "IMTCommentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTCommentArray::Release](imtcommentarray_release.md "Release") method of this object.