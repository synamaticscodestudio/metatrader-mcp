# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Detach | [](imtclientarray_delete.md "Delete") [](imtclientarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Detach
Detach a client object from an array.
C++
IMTClient* IMTClientArray::Detach( const UINT pos // Client position ) const  
---  
.NET (Gateway/Manager API)
CIMTClient CIMTClientArray.Detach( uint pos // Client position )  
---  
Parameters
pos
[in] Position of a client in the array, starting with 0.
Return Value
Returns a pointer to the detached client object.
Note
This method removes a pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.