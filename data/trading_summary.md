# Summary Positions (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Summary Positions | [](imtexecution_externalretcode.md "ExternalRetcode") [](imtsummary.md "IMTSummary") |
| --- | --- | --- |
| --- | --- |

Summary Positions
The MetaTrader 5 API allows receiving information about clients' summary positions, as well as summary hedging positions.
An important feature of working with summary positions is that they are bound to a certain trade server. Therefore, the application can only receive information about summary positions on the server to which this application is connected.
Hedging positions apply to all accounts in coverage* groups.  
---  
The following summary position interfaces are available:
  * [IMTSummary](imtsummary.md "IMTSummary") An interface describing the summary position record of one symbol.
  * [IMTSummaryArray](imtsummaryarray.md "IMTSummaryArray") An interface for working with the arrays of summary position records.
  * [IMTSummarySink](imtsummarysink.md "IMTSummarySink") An interface for handling events associated with changes in summary positions.

To help you understand the purpose of interfaces intended for working with positions, the below figure shows their compliance with the elements in the MetaTrader 5 Manager:
The following elements are shown above:
  1. Symbol.
  2. The number of [client](imtsummary_positionclients.md "PositionClients") and [hedging](imtsummary_positioncoverage.md "PositionCoverage") positions.
  3. The volume of [client](imtsummary_volumebuyclients.md "VolumeBuyClients") and [hedging](imtsummary_volumebuycoverage.md "VolumeBuyCoverage") Buy positions.
  4. The weighted average price of [client](imtsummary_pricebuyclients.md "PriceBuyClients") and [hedging](imtsummary_pricebuycoverage.md "PriceBuyCoverage") Sell positions.
  5. The volume of [client](imtsummary_volumesellclients.md "VolumeSellClients") and [hedging](imtsummary_volumesellcoverage.md "VolumeSellCoverage") Buy positions.
  6. The weighted average price of [client](imtsummary_pricesellclients.md "PriceSellClients") and [hedging](imtsummary_pricesellcoverage.md "PriceSellCoverage") Sell positions.
  7. The [difference](imtsummary_volumenet.md "VolumeNet") between the volumes of client Buy and Sell positions.
  8. The total profit (loss) of [client](imtsummary_profitclients.md "ProfitClients") and [hedging](imtsummary_profitcoverage.md "ProfitCoverage") positions.
  9. The [difference between total profits](imtsummary_profituncovered.md "ProfitUncovered") (losses) of client and hedging positions.
