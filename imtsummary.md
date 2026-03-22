# IMTSummary (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions")/ IMTSummary | [](trading_summary.md "Summary Positions") [](imtsummary_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTSummary
The IMTSummary class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtsummary_release.md "Release") | Deletes the current object. |
| [Assign](imtsummary_assign.md "Assign") | Assigns a passed object to the current one. |
| [Clear](imtsummary_clear.md "Clear") | Clears an object. |
| [Symbol](imtsummary_symbol.md "Symbol") | Gets the symbol, for which summary positions are calculated. |
| [Digits](imtsummary_digits.md "Digits") | The number of digits in the weighted average prices of client and hedging Buy and Sell positions. |
| [PositionClients](imtsummary_positionclients.md "PositionClients") | Gets the number of open client positions on the selected symbol. |
| [PositionCoverage](imtsummary_positioncoverage.md "PositionCoverage") | Gets the number of hedging positions on the selected symbol. |
| [VolumeBuyClients](imtsummary_volumebuyclients.md "VolumeBuyClients") | Gets the total volume of client buy positions. |
| [VolumeBuyClientsExt](imtsummary_volumebuyclientsext.md "VolumeBuyClientsExt") | Gets the total volume of client buy positions, with an extended accuracy. |
| [VolumeBuyCoverage](imtsummary_volumebuycoverage.md "VolumeBuyCoverage") | Gets the total volume of hedging buy positions. |
| [VolumeBuyCoverageExt](imtsummary_volumebuycoverageext.md "VolumeBuyCoverageExt") | Gets the total volume of client hedging positions, with an extended accuracy. |
| [VolumeSellClients](imtsummary_volumesellclients.md "VolumeSellClients") | Gets the total volume of client sell positions. |
| [VolumeSellClientsExt](imtsummary_volumesellclientsext.md "VolumeSellClientsExt") | Gets the total volume of client sell positions, with an extended accuracy. |
| [VolumeSellCoverage](imtsummary_volumesellcoverage.md "VolumeSellCoverage") | Gets the total volume of hedging sell positions. |
| [VolumeSellCoverageExt](imtsummary_volumesellcoverageext.md "VolumeSellCoverageExt") | Gets the total volume of hedging sell positions, with an extended accuracy. |
| [VolumeNet](imtsummary_volumenet.md "VolumeNet") | Gets the differences (net total) between the volume of clients' Buy and Sell positions, while the appropriate amount on hedge accounts is deducted from the volume of clients' Buy or Sell positions. |
| [PriceBuyClients](imtsummary_pricebuyclients.md "PriceBuyClients") | Gets the weighted average open price of clients' Buy positions. |
| [PriceBuyCoverage](imtsummary_pricebuycoverage.md "PriceBuyCoverage") | Gets the weighted average open price of hedging Buy positions. |
| [PriceSellClients](imtsummary_pricesellclients.md "PriceSellClients") | Gets the weighted average open price of clients' Sell positions. |
| [PriceSellCoverage](imtsummary_pricesellcoverage.md "PriceSellCoverage") | Gets the weighted average open price of hedging Sell positions. |
| [ProfitClients](imtsummary_profitclients.md "ProfitClients") | Gets the total profit/loss of client positions excluding swaps and commissions. |
| [ProfitCoverage](imtsummary_profitcoverage.md "ProfitCoverage") | Gets the total profit/loss of hedging positions excluding swaps and commissions. |
| [ProfitFullClients](imtsummary_profitfullclients.md "ProfitFullClients") | Gets the total profit/loss of client positions including swaps and commissions. |
| [ProfitFullCoverage](imtsummary_profitfullcoverage.md "ProfitFullCoverage") | Gets the total profit/loss of hedging positions of all symbols. |
| [ProfitUncovered](imtsummary_profituncovered.md "ProfitUncovered") | Gets the difference between total profit (loss) of client and hedging positions excluding swaps and commissions. |
| [ProfitUncoveredFull](imtsummary_profituncoveredfull.md "ProfitUncoveredFull") | Gets the difference between total profit (loss) of client and hedging positions including swaps and commissions. |