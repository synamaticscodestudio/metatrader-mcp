# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Detach | [](imtdailyarray_delete.md "Delete") [](imtdailyarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Detach
Detach an object of a daily report from an array.
C++
IMTDaily* IMTDailyArray::Detach( const UINT pos // Position of a daily report )  
---  
.NET (Gateway/Manager API)
CIMTDaily CIMTDailyArray.Detach( uint pos // Position of a daily report )  
---  
Parameters
pos
[in] Position of a daily report in an array, starting with 0.
Return Value
Returns a pointer to the detached object of the daily report.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.