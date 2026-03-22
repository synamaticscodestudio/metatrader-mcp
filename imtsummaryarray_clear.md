# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Clear | [](imtsummaryarray_assign.md "Assign") [](imtsummaryarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Clear
Clear an object.
C++
MTAPIRES IMTSummaryArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.