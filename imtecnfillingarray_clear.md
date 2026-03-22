# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ Clear | [](imtecnfillingarray_assign.md "Assign") [](imtecnfillingarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::Clear
Clear an object.
C++
MTAPIRES IMTECNFillingArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.