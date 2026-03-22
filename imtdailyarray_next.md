# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Next | [](imtdailyarray_total.md "Total") [](imtdailyarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Next
Get an object of a daily report by its position.
C++
IMTDaily* IMTDailyArray::Next( const UINT index // Position of a daily report ) const  
---  
.NET (Gateway/Manager API)
CIMTDaily CIMTDailyArray.Next( uint index // Position of a daily report )  
---  
Parameters
index
[in] Position of a daily report in an array, starting with 0.
Return Value
If successful, it returns a pointer to the path to the object of a daily report at the specified position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTDailyArray::Release](imtdailyarray_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.