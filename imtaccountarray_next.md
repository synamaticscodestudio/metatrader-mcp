# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Next | [](imtaccountarray_total.md "Total") [](imtaccountarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Next
Gets an object of a trading account by position.
C++
IMTAccount* IMTAccountArray::Next( const UINT pos // Position of the trading account ) const  
---  
.NET (Gateway/Manager API)
CIMTAccount CIMTAccountArray.Next( uint pos // Position of the trading account )  
---  
Parameters
pos
[in] Position of the trading account in an array, starting with 0.
Return Value
If successful, it returns a pointer to the client position object at the appropriate array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTAccountArray::Release](imtaccountarray_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.