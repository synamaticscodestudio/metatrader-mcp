# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Clear | [](imtecnhistoryfilling_assign.md "Assign") [](imtecnhistoryfilling_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryFilling::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.