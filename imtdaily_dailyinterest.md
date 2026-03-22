# DailyInterest (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyInterest | [](imtdaily_dailyagent.md "DailyAgent") [](imtdaily_positionadd.md "PositionAdd") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyInterest
Get the amount accrued to a client as part of the annual interest rate for the reported day.
C++
double IMTDaily::DailyInterest() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyInterest()  
---  
Return Value
The amount accrued to a client as part of the annual interest rate for the reported day.
IMTDaily::DailyInterest
Set the amount accrued to a client as part of the annual interest rate for the reported day.
C++
MTAPIRES IMTDaily::DailyInterest( const double interest // Daily charges at an annual interest rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyInterest( double interest // Daily charges at an annual interest rate )  
---  
Parameters
interest
[in] The amount accrued to a client as part of the annual interest rate for the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.