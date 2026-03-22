# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Next | [](imtpositionarray_total.md "Total") [](imtpositionarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Next
Get an object of a trade position by the index.
C++
IMTPosition* IMTPositionArray::Next( const UINT index // The index of a trade position ) const  
---  
.NET (Gateway/Manager API)
CIMTPosition CIMTPositionArray.Next( uint index // The index of a trade position )  
---  
Parameters
index
[in] The index of a trade position in an wrray, starting with 0.
Return Value
If successful, it returns a pointer to the path to the object of a position with the specified index in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTPositionArray::Release](imtpositionarray_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.