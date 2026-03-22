# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Clear | [](imtecnmatchingarray_assign.md "Assign") [](imtecnmatchingarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Clear
Clear an object.
C++
MTAPIRES IMTECNMatchingArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.