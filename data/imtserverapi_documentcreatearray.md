# DocumentCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentCreateArray | [](imtserverapi_documentcreate.md "DocumentCreate") [](imtserverapi_documentsubscribe.md "DocumentSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentCreateArray
Create an object of the array of documents.
IMTClientArray* IMTServerAPI::DocumentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTDocumentArray](imtdocumentarray.md "IMTDocumentArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDocumentArray::Release](imtdocumentarray_release.md "Release") method of this object.