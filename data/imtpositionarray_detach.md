# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Detach | [](imtpositionarray_delete.md "Delete") [](imtpositionarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Detach
Detach an object of a trade position from an array.
C++
IMTPosition* IMTPositionArray::Detach( const UINT pos // Position index )  
---  
.NET (Gateway/Manager API)
CIMTPosition CIMTPositionArray.Detach( uint pos // Position index )  
---  
Parameters
pos
[in] The index of a trade position in an array, starting with 0.
Return Value
Returns a pointer to the detached object of a position.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.