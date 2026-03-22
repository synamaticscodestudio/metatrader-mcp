# ProfitFullCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitFullCoverage | [](imtsummary_profitfullclients.md "ProfitFullClients") [](imtsummary_profituncovered.md "ProfitUncovered") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitFullCoverage
Gets the total profit/loss of hedging positions of all symbols. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitFullCoverage() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitFullCoverage()  
---  
Return Value
The total profit (loss) of hedging positions including swaps and commissions.
Note
Positions of all hedging accounts from all coverage* groups are taken into account.