# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Detach | [](imtsummaryarray_delete.md "Delete") [](imtsummaryarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Detach
Detaches the summary position record object from the array.
C++
IMTSummary* IMTSummaryArray::Detach( const UINT pos // Position of the record )  
---  
.NET (Gateway/Manager API)
CIMTSummary CIMTSummaryArray.Detach( uint pos // Position of the record )  
---  
Parameters
pos
[in] The position of a record in an array, starting with 0.
Return Value
Returns a pointer to the detached object of the [summary position record](imtsummary.md "IMTSummary").
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.