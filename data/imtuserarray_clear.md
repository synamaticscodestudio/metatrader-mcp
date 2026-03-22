# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Clear | [](imtuserarray_assign.md "Assign") [](imtuserarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Clear
Clear an object.
C++
MTAPIRES IMTUserArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.