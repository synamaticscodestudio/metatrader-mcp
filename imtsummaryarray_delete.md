# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Delete | [](imtsummaryarray_addcopy.md "AddCopy") [](imtsummaryarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Delete
Deletes the summary position record object from the array by its index.
C++
MTAPIRES IMTSummaryArray::Delete( const UINT pos // Position of the record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Delete( uint pos // Position of the record )  
---  
Parameters
pos
[in] Position of the record, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The object to delete will be automatically released by calling the [IMTSummary::Release](imtsummary_release.md "Release") method.