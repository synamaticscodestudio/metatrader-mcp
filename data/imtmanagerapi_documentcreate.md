# DocumentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentCreate | [](imtmanagerapi_clientuserrequest.md "ClientUserRequest") [](imtmanagerapi_documentcreatearray.md "DocumentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentCreate
Create a document object.
C++
IMTClient* IMTManagerAPI::DocumentCreate()  
---  
.NET
CIMTClient CIMTManagerAPI.DocumentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocument](imtdocument.md "IMTDocument") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocument::Release](imtdocument_release.md "Release") method of this object.