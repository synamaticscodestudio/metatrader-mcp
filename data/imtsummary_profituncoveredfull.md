# ProfitUncoveredFull (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitUncoveredFull | [](imtsummary_profituncovered.md "ProfitUncovered") [](imtsummaryarray.md "IMTSummaryArray") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitUncoveredFull
Gets the difference between total profit (loss) of client and hedging positions including swaps and commissions. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitUncoveredFull() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitUncoveredFull()  
---  
Return Value
The difference between total profit (loss) of client and hedging positions including swaps and commissions.