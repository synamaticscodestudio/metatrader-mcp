# ProfitLiabilities (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ ProfitLiabilities | [](imtdaily_profitassets.md "ProfitAssets") [](imtdaily_dailyprofit.md "DailyProfit") |
| --- | --- | --- |
| --- | --- |

IMTDaily::ProfitLiabilities
Get the current amount of client liabilities in a daily report.
C++
double IMTDaily::ProfitLiabilities() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.ProfitLiabilities()  
---  
Return Value
The current amount of client liabilities in a daily report.
Further Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).
IMTDaily::ProfitLiabilities
Set the current amount of client liabilities in a daily report.
C++
MTAPIRES IMTDaily::ProfitLiabilities( const double liabilities // Amount of liabilities )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.ProfitLiabilities( double liabilities // Amount of liabilities )  
---  
Program Parameters
liabilities
[in] The current amount of client liabilities in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Further Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).