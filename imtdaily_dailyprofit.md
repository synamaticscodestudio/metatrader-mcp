# DailyProfit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyProfit | [](imtdaily_profitliabilities.md "ProfitLiabilities") [](imtdaily_dailybalance.md "DailyBalance") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyProfit
Get the amount of a client's daily profit.
C++
double IMTDaily::DailyProfit() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyProfit()  
---  
Return Value
The amount of a client's daily profit.
IMTDaily::DailyProfit
Set the amount of a client's daily profit.
C++
MTAPIRES IMTDaily::DailyProfit( const double profit // Daily profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyProfit( double profit // Daily profit )  
---  
Parameters
profit
[in] The amount of a client's daily profit.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.