# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Clear | [](imtecnhistorymatchingarray_assign.md "Assign") [](imtecnhistorymatchingarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryMatchingArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.