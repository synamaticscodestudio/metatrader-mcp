# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Clear | [](imtecnhistorymatching_assign.md "Assign") [](imtecnhistorymatching_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryMatching::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.