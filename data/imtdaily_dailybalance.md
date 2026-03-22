# DailyBalance (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyBalance | [](imtdaily_dailyprofit.md "DailyProfit") [](imtdaily_dailycredit.md "DailyCredit") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyBalance
Get the amount accrued to a client's balance during the reported day.
C++
double IMTDaily::DailyBalance() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyBalance()  
---  
Return Value
The amount accrued to a client's balance during the reported day.
IMTDaily::DailyBalance
Set the amount accrued to a client's balance during the reported day.
C++
MTAPIRES IMTDaily::DailyBalance( const double balance // Daily balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyBalance( double balance // Daily balance )  
---  
Parameters
balance
[in] The amount accrued to a client's balance during the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.