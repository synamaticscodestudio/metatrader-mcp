# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Delete | [](imtecnmatchingarray_addcopy.md "AddCopy") [](imtecnmatchingarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Delete
Delete a matching order object by its position.
C++
MTAPIRES IMTECNMatchingArray::Delete( const UINT pos // order position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Delete( uint pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNMatching::Release](imtecnmatching_release.md "Release") method call.