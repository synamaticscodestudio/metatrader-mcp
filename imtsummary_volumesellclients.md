# VolumeSellClients (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeSellClients | [](imtsummary_volumebuycoverageext.md "VolumeBuyCoverageExt") [](imtsummary_volumesellclientsext.md "VolumeSellClientsExt") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeSellClients
Gets the total volume of client sell positions. The volume of open positions of the [selected symbol](imtsummary_symbol.md "Symbol") is counted.
C++
UINT64 IMTSummary::VolumeSellClients() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSummary.VolumeSellClients()  
---  
Return Value
The total volume of clients' open Sell positions on the symbol. The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTSummary::VolumeSellClientsExt](imtsummary_volumesellclientsext.md "VolumeSellClientsExt") method.