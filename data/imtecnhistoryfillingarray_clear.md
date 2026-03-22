# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ Clear | [](imtecnhistoryfillingarray_assign.md "Assign") [](imtecnhistoryfillingarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryFillingArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFillingArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.