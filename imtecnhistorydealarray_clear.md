# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Clear | [](imtecnhistorydealarray_assign.md "Assign") [](imtecnhistorydealarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryDealArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.