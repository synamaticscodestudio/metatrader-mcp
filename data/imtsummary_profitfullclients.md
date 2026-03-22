# ProfitFullClients (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitFullClients | [](imtsummary_profitcoverage.md "ProfitCoverage") [](imtsummary_profitfullcoverage.md "ProfitFullCoverage") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitFullClients
Gets the total profit/loss of client positions including swaps and commissions. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitFullClients() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitFullClients()  
---  
Return Value
The total profit (loss) of client positions including swaps and commissions.