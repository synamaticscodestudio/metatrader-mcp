# VolumeSellClientsExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeSellClientsExt | [](imtsummary_volumesellclients.md "VolumeSellClients") [](imtsummary_volumesellcoverage.md "VolumeSellCoverage") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeSellClientsExt
Gets the total volume of client sell positions, with an extended accuracy. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeSellClientsExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeSellClientsExt()  
---  
Return Value
The total volume of client sell positions. The volume is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTSummary::VolumeSellClients](imtsummary_volumesellclients.md "VolumeSellClients") method.