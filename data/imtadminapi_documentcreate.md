# DocumentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentCreate | [](imtadminapi_clientuserrequest.md "ClientUserRequest") [](imtadminapi_documentcreatearray.md "DocumentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentCreate
Create a document object.
C++
IMTClient* IMTAdminAPI::DocumentCreate()  
---  
.NET
CIMTClient CIMTAdminAPI.DocumentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocument](imtdocument.md "IMTDocument") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocument::Release](imtdocument_release.md "Release") method of this object.