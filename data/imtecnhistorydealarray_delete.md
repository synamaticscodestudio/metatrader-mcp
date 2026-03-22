# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Delete | [](imtecnhistorydealarray_addcopy.md "AddCopy") [](imtecnhistorydealarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Delete
Delete a deal object by its position.
C++
MTAPIRES IMTECNHistoryDealArray::Delete( const UINT pos // deal position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.Delete( uint pos // deal position )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNHistoryDeal::Release](imtecnhistorydeal_release.md "Release") method call.