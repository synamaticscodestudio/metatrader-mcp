# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Next | [](imtrequestarray_total.md "Total") [](imtrequestarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Next
Get a trade request by its index.
C++
IMTRequest* IMTRequestArray::Next( const UINT index // Position of a trade request ) const  
---  
.NET (Gateway/Manager API)
CIMTRequest CIMTRequestArray.Next( uint index // Position of a trade request )  
---  
Parameters
index
[in] Position of a trade request in an array, starting with 0.
Return Value
If successful, it returns a pointer to the path to the object of a request with the specified index in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTRequestArray::Release](imtrequestarray_release.md "Release")) will male the pointer stored within the array object invalid, and its call (including deletion of the array object) will cause the crash of the plugin and the server.