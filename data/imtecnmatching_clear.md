# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Clear | [](imtecnmatching_assign.md "Assign") [](imtecnmatching_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Clear
Clear an object.
C++
MTAPIRES IMTECNMatching::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.