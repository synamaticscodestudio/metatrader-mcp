# DocumentCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentCreate | [](imtserverapi_clientuserlogins.md "ClientUserLogins") [](imtserverapi_documentcreatearray.md "DocumentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentCreate
Create a document object.
IMTClient* IMTServerAPI::DocumentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocument](imtdocument.md "IMTDocument") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocument::Release](imtdocument_release.md "Release") method of this object.