# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ Digits | [](imtsummary_symbol.md "Symbol") [](imtsummary_positionclients.md "PositionClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::Digits
Gets the number of digits in the weighted average prices of [client](imtsummary_pricebuyclients.md "PriceBuyClients") and [hedging](imtsummary_pricebuycoverage.md "PriceBuyCoverage") Buy and Sell positions.
C++
UINT IMTSummary::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTSummary.Digits()  
---  
Return Value
The number of digits in the weighted average prices of client and hedging Buy and Sell positions.