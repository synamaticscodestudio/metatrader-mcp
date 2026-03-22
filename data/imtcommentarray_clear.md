# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Clear | [](imtcommentarray_assign.md "Assign") [](imtcommentarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Clear
Clear an object.
C++
MTAPIRES IMTCommentArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.