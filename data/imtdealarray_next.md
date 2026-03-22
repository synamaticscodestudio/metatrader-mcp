# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Next | [](imtdealarray_total.md "Total") [](imtdealarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Next
Get an object of a deal by its position.
C++
IMTDeal* IMTDealArray::Next( const UINT index // Position of a deal ) const  
---  
.NET (Gateway/Manager API)
CIMTDeal CIMTDealArray.Next( uint index // Position of a deal )  
---  
Parameters
index
[in] Position of a deal in an array, starting with 0.
Return Value
If successful, it returns a pointer to the path to the object of a deal at the specified position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTDealArray::Release](imtdealarray_release.md "Release")) will make the pointer stored within the array object invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.