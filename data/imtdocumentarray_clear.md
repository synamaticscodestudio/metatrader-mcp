# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Clear | [](imtdocumentarray_assign.md "Assign") [](imtdocumentarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Clear
Clear an object.
C++
MTAPIRES IMTDocumentArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.