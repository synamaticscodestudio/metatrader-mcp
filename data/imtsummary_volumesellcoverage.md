# VolumeSellCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeSellCoverage | [](imtsummary_volumesellclientsext.md "VolumeSellClientsExt") [](imtsummary_volumesellcoverageext.md "VolumeSellCoverageExt") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeSellCoverage
Gets the total volume of hedging sell positions. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeSellCoverage() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeSellCoverage()  
---  
Return Value
The total volume of open hedging Sell positions on the symbol. The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
Positions of all hedging accounts from all coverage* groups are taken into account.
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTSummary::VolumeSellCoverageExt](imtsummary_volumesellcoverageext.md "VolumeSellCoverageExt") method.