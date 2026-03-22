# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Next | [](imtuserarray_total.md "Total") [](imtuserarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Next
Get a client record object by its position.
C++
IMTUser* IMTUserArray::Next( const UINT pos // The position of a client record ) const  
---  
.NET (Gateway/Manager API)
CIMTUser CIMTUserArray.Next( uint pos // The position of a client record )  
---  
Parameters
pos
[in] Position of a client record in an array, starting with 0.
Return Value
If successful, it returns a pointer to the client position object at the appropriate array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTUserArray::Release](imtuserarray_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.