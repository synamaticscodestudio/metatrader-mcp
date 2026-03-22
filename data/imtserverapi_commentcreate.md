# CommentCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentCreate | [](imtserverapi_documentgethistory.md "DocumentGetHistory") [](imtserverapi_commentcreatearray.md "CommentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentCreate
Create a comment object.
IMTClient* IMTServerAPI::CommentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTComment](imtcomment.md "IMTComment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTComment::Release](imtcomment_release.md "Release") method of this object.