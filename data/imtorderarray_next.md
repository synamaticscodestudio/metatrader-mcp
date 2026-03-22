# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Next | [](imtorderarray_total.md "Total") [](imtorderarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Next
Get an object of a trade order by its position.
C++
IMTOrder* IMTOrderArray::Next( const UINT pos // Position of an order ) const  
---  
.NET (Gateway/Manager API)
CIMTOrder CIMTOrderArray.Next( uint  pos // Position of an order )  
---  
Parameters
pos
[in] Position of an order in an array, starting with 0.
Return Value
If successful, it returns a pointer to the path to the object of a trade order at the specified position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Due to the removal of the returned object (by calling [IMTOrderArray::Release](imtorderarray_release.md "Release")), the pointer stored within the array will become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.