# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Next | [](imtsummaryarray_total.md "Total") [](imtsummaryarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Next
Gets the summary position record object by its index.
C++
IMTSummary* IMTSummaryArray::Next( const UINT index // Position of the record ) const  
---  
.NET (Gateway/Manager API)
CIMTSummary CIMTSummaryArray.Next( uint index // Position of the record )  
---  
Parameters
index
[in] The position of the record in an array, starting with 0.
Return Value
If successful, it returns a pointer to the summary position record object at the specified position in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTSummary::Release](imtsummary_release.md "Release")) will make the pointer stored within the array object invalid, and its call (including the case of array object deletion) will cause application crash.