# VolumeBuyClientsExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeBuyClientsExt | [](imtsummary_volumebuyclients.md "VolumeBuyClients") [](imtsummary_volumebuycoverage.md "VolumeBuyCoverage") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeBuyClientsExt
Gets the total volume of client buy positions, with an extended accuracy. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeBuyClientsExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeBuyClientsExt()  
---  
Return Value
The total volume of client buy positions (in lots). The volume is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTSummary::VolumeBuyClients](imtsummary_volumebuyclients.md "VolumeBuyClients") method.