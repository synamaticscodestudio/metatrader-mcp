# DailySOCompensation (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailySOCompensation | [](imtdaily_dailytaxes.md "DailyTaxes") [](imtdaily_dailysocompensationcredit.md "DailySOCompensationCredit") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailySOCompensation
Get the amount of [negative balance compensation](imtdeal_enum.htm#endealaction) accrued to the client for a reported day.
C++
double IMTDaily::DailySOCompensation() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailySOCompensation()  
---  
Return Value
The amount of negative balance compensation accrued to the client for a reported day.
IMTDaily::DailySOCompensation
Set the amount of [negative balance compensation](imtdeal_enum.htm#endealaction) accrued to the client for a reported day.
C++
MTAPIRES IMTDaily::DailySOCompensation( const double socompensation // daily compensation )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailySOCompensation( double socompensation // daily compensation )  
---  
Parameters
socompensation
[in] The amount of negative balance compensation accrued to the client for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.