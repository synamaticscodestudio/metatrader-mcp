# VolumeSellCoverageExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeSellCoverageExt | [](imtsummary_volumesellcoverage.md "VolumeSellCoverage") [](imtsummary_volumenet.md "VolumeNet") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeSellCoverage
Gets the total volume of hedging sell positions, with an extended accuracy. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeSellCoverage() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeSellCoverage()  
---  
Return Value
The total volume of hedging sell positions. The volume is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
Positions on all hedging accounts from all coverage* groups are counted.
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTSummary::VolumeSellCoverage](imtsummary_volumesellcoverage.md "VolumeSellCoverage") method.