# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Detach | [](imtaccountarray_delete.md "Delete") [](imtaccountarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Detach
Detaches an object of a trading account from an array.
C++
IMTAccount* IMTAccountArray::Detach( const UINT pos // Position of the trading account ) const  
---  
.NET (Gateway/Manager API)
CIMTAccount CIMTAccountArray.Detach( uint pos // Position of the trading account )  
---  
Parameters
pos
[in] Position of the trading account in an array, starting with 0.
Return Value
Returns a pointer to the detached object of the trading account.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.