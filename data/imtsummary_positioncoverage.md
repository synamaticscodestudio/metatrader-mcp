# PositionCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ PositionCoverage | [](imtsummary_positionclients.md "PositionClients") [](imtsummary_volumebuyclients.md "VolumeBuyClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::PositionCoverage
Gets the number of hedging positions on the selected symbol.
C++
UINT IMTSummary::PositionCoverage() const  
---  
.NET (Gateway/Manager API)
uint CIMTSummary.PositionCoverage()  
---  
Return Value
The number of hedging positions on the selected symbol.
Note
Positions of all hedging accounts from all coverage* groups are taken into account.