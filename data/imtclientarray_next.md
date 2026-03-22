# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Next | [](imtclientarray_total.md "Total") [](imtclientarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Next
Get a client object by its position.
C++
IMTClient* IMTClientArray::Next( const UINT pos // Client position ) const  
---  
.NET (Gateway/Manager API)
CIMTClient CIMTClientArray.Next( uint  pos // Client position )  
---  
Parameters
pos
[in] Position of a client in the array, starting with 0.
Return Value
If successful, it returns a pointer to the client object at the specified position. Otherwise, NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Deletion of the returned object (call of [IMTClient::Release](imtclient_release.md "Release")) will cause the pointer stored inside the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.