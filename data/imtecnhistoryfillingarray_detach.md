# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ Detach | [](imtecnhistoryfillingarray_delete.md "Delete") [](imtecnhistoryfillingarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::Detach
Detach a filling order object from an array.
C++
IMTECNHistoryFilling* IMTECNHistoryFillingArray::Detach( const UINT pos // order position ) const  
---  
.NET (Gateway/Manager API)
CIMTECNHistoryFilling CIMTECNHistoryFillingArray.Detach( uint pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
Returns a pointer to the detached order object.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.