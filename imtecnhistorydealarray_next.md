# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Next | [](imtecnhistorydealarray_total.md "Total") [](imtecnhistorydealarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Next
Get a deal object by its position.
C++
IMTECNHistoryDeal* IMTECNHistoryDealArray::Next( const UINT pos // deal position ) const  
---  
.NET (Gateway/Manager API)
CIMTECNHistoryDeal CIMTECNHistoryDealArray.Next( uint  pos // deal position )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
Return Value
If successful, the method returns a pointer to the deal object at the specified position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, if you delete an array object, the returned pointer will become invalid.
The deletion of the returned object (by [IMTECNHistoryDeal::Release](imtecnhistorydeal_release.md "Release") call) will cause the pointer stored inside the array object to become invalid, while the pointer call (including the one used when deleting an array object) will cause the plugin and the server to crash.