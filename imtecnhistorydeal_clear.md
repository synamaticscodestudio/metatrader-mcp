# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Clear | [](imtecnhistorydeal_assign.md "Assign") [](imtecnhistorydeal_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Clear
Clear an object.
C++
MTAPIRES IMTECNHistoryDeal::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.