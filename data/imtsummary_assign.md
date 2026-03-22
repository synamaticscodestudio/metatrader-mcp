# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ Assign | [](imtsummary_release.md "Release") [](imtsummary_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSummary::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSummary::Assign( const IMTSummary* summary // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummary.Assign( CIMTSummary summary // Source object )  
---  
Parameters
summary
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.