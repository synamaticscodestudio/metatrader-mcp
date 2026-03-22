# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Clear | [](imtattachmentarray_assign.md "Assign") [](imtattachmentarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Clear
Clear an object.
C++
MTAPIRES IMTAttachmentArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.