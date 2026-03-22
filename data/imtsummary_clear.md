# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ Clear | [](imtsummary_assign.md "Assign") [](imtsummary_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTSummary::Clear
Clear an object.
C++
MTAPIRES IMTSummary::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummary.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.