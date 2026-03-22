# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Next | [](imtonlinearray_total.md "Total") [](imtonlinearray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Next
Get connection record object by its position.
C++
IMTOnline* IMTOnlineArray::Next( const UINT pos // Connection record position ) const  
---  
.NET (Gateway/Manager API)
CIMTOnline CIMTOnlineArray.Next( uint pos // Connection record position )  
---  
Parameters
pos
[in] Position of a connection record in an array, starting with 0.
Return Value
If successful, it returns a pointer to the connection record object at the appropriate array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTOnlineArray::Release](imtonlinearray_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.