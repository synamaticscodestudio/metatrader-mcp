# DocumentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentCreateArray | [](imtadminapi_documentcreate.md "DocumentCreate") [](imtadminapi_documentadd.md "DocumentAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentCreateArray
Create an object of the array of documents.
C++
IMTClientArray* IMTAdminAPI::DocumentCreateArray()  
---  
.NET
CIMTClientArray CIMTAdminAPI.DocumentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocumentArray](imtdocumentarray.md "IMTDocumentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocumentArray::Release](imtdocumentarray_release.md "Release") method of this object.