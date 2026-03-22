# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Delete | [](imtecnhistorymatchingarray_addcopy.md "AddCopy") [](imtecnhistorymatchingarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Delete
Delete a matching order object by its position.
C++
MTAPIRES IMTECNHistoryMatchingArray::Delete( const UINT pos // order position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Delete( uint pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNHistoryMatching::Release](imtecnhistorymatching.md "IMTECNMatching") method call.