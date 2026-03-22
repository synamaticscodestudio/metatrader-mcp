# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Detach | [](imtonlinearray_delete.md "Delete") [](imtonlinearray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Detach
Detach connection record object from an array.
C++
IMTOnline* IMTOnlineArray::Detach( const UINT pos // Connection record position ) const  
---  
.NET (Gateway/Manager API)
CIMTOnline CIMTOnlineArray.Detach( uint  pos // Connection record position )  
---  
Parameters
pos
[in] Position of a connection record in an array, starting with 0.
Return Value
Returns a pointer to the detached connection record object.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.