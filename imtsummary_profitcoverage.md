# ProfitCoverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitCoverage | [](imtsummary_profitclients.md "ProfitClients") [](imtsummary_profitfullclients.md "ProfitFullClients") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitCoverage
Gets the total profit/loss of hedging positions excluding swaps and commissions. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitCoverage() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitCoverage()  
---  
Return Value
The total profit (loss) of hedging positions excluding swaps and commissions.
Note
Positions of all hedging accounts from all coverage* groups are taken into account.