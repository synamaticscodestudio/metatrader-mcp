# CommentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ CommentCreate | [](imtadminapi_documentrequesthistory.md "DocumentRequestHistory") [](imtadminapi_commentcreatearray.md "CommentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommentCreate
Create a comment object.
C++
IMTClient* IMTAdminAPI::CommentCreate()  
---  
.NET
CIMTClient CIMTAdminAPI.CommentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTComment](imtcomment.md "IMTComment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTComment::Release](imtcomment_release.md "Release") method of this object.