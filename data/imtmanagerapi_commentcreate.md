# CommentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentCreate | [](imtmanagerapi_documentrequesthistory.md "DocumentRequestHistory") [](imtmanagerapi_commentcreatearray.md "CommentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentCreate
Create a comment object.
C++
IMTClient* IMTManagerAPI::CommentCreate()  
---  
.NET
CIMTClient CIMTManagerAPI.CommentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTComment](imtcomment.md "IMTComment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTComment::Release](imtcomment_release.md "Release") method of this object.