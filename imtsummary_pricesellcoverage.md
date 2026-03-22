# PriceSellCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ PriceSellCoverage | [](imtsummary_pricesellclients.md "PriceSellClients") [](imtsummary_profitclients.md "ProfitClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::PriceSellCoverage
Gets the weighted average open price of hedging Sell positions.
C++
double IMTSummary::PriceSellCoverage() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.PriceSellCoverage()  
---  
Return Value
The weighted average open price of hedging Sell positions.
Note
Positions of all hedging accounts from all coverage* groups are taken into account.