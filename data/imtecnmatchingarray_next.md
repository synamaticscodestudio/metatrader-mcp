# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Next | [](imtecnmatchingarray_total.md "Total") [](imtecnmatchingarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Next
Get a matching order object by its position.
C++
IMTECNMatching* IMTECNMatchingArray::Next( const UINT pos // order position ) const  
---  
.NET (Gateway/Manager API)
CIMTECNMatching CIMTECNMatchingArray.Next( uint  pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
If successful, the method returns a pointer to the order object at the specified array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, if you delete an array object, the returned pointer will become invalid.
The deletion of the returned object (by [IMTECNMatching::Release](imtecnmatching_release.md "Release") call) will cause the pointer stored inside the array object to become invalid, while the pointer call (including the one used when deleting an array object) will cause the plugin and the server to crash.