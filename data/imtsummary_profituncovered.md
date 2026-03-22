# ProfitUncovered (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitUncovered | [](imtsummary_profitfullcoverage.md "ProfitFullCoverage") [](imtsummary_profituncoveredfull.md "ProfitUncoveredFull") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitUncovered
Gets the difference between total profit (loss) of client and hedging positions excluding swaps and commissions. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitUncovered() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitUncovered()  
---  
Return Value
The difference between total profit (loss) of client and hedging positions excluding swaps and commissions.