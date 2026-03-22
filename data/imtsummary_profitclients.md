# ProfitClients (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ ProfitClients | [](imtsummary_pricesellcoverage.md "PriceSellCoverage") [](imtsummary_profitcoverage.md "ProfitCoverage") |
| --- | --- | --- |
| --- | --- |

IMTSummary::ProfitClients
Gets the total profit/loss of client positions excluding swaps and commissions. The currency in which the profit is calculated is set using the [IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency") method.
C++
double IMTSummary::ProfitClients() const  
---  
.NET (Gateway/Manager API)
double CIMTSummary.ProfitClients()  
---  
Return Value
The total profit (loss) of client positions excluding swaps and commissions.