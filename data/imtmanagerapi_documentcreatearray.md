# DocumentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ DocumentCreateArray | [](imtmanagerapi_documentcreate.md "DocumentCreate") [](imtmanagerapi_documentadd.md "DocumentAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DocumentCreateArray
Create an object of the array of documents.
C++
IMTClientArray* IMTManagerAPI::DocumentCreateArray()  
---  
.NET
CIMTClientArray CIMTManagerAPI.DocumentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocumentArray](imtdocumentarray.md "IMTDocumentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocumentArray::Release](imtdocumentarray_release.md "Release") method of this object.