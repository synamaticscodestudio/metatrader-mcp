# VolumeBuyClients (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeBuyClients | [](imtsummary_positioncoverage.md "PositionCoverage") [](imtsummary_volumebuyclientsext.md "VolumeBuyClientsExt") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeBuyClients
Gets the total volume of client buy positions. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeBuyClients() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeBuyClients()  
---  
Return Value
The total volume of clients' open Buy positions on the symbol (in lots). The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTSummary::VolumeBuyClientsExt](imtsummary_volumebuyclientsext.md "VolumeBuyClientsExt") method.