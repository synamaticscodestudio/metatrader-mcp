# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Assign | [](imtsummaryarray_release.md "Release") [](imtsummaryarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSummaryArray::Assign( const IMTSummaryArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Assign( CIMTSummaryArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.