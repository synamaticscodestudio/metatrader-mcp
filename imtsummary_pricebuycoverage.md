# PriceBuyCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ PriceBuyCoverage | [](imtsummary_pricebuyclients.md "PriceBuyClients") [](imtsummary_pricesellclients.md "PriceSellClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::PriceBuyCoverage
Gets the weighted average open price of hedging Buy positions.
C++
double IMTSummary::PriceBuyCoverage() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.PriceBuyCoverage()  
---  
Return Value
The weighted average open price of hedging Buy positions.
Note
Positions of all hedging accounts from all coverage* groups are taken into account.