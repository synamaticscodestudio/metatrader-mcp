# VolumeNet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ VolumeNet | [](imtsummary_volumesellcoverageext.md "VolumeSellCoverageExt") [](imtsummary_pricebuyclients.md "PriceBuyClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::VolumeNet
Gets the differences (net total) between the volume of clients' [Buy](imtsummary_volumebuyclients.md "VolumeBuyClients") and [Sell](imtsummary_volumesellclients.md "VolumeSellClients") positions, while the appropriate amount on hedge accounts is deducted from the volume of clients' Buy or Sell positions ([IMTSummary::VolumeBuyCoverage](imtsummary_volumebuycoverage.md "VolumeBuyCoverage") and [IMTSummary::VolumeSellCoverage](imtsummary_volumesellcoverage.md "VolumeSellCoverage")).
C++
double IMTSummary::VolumeNet() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.VolumeNet()  
---  
Return Value
The difference between clients' Buy and Sell positions after the deduction of appropriate position volumes on hedging accounts.
Note
Hedging positions of all accounts from all coverage* groups are taken into account.