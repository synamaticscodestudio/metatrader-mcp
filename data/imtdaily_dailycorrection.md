# DailyCorrection (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCorrection | [](imtdaily_dailycharge.md "DailyCharge") [](imtdaily_dailybonus.md "DailyBonus") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCorrection
Get the amount of corrective balance operations for a reported day.
C++
double IMTDaily::DailyCorrection() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCorrection()  
---  
Return Value
The amount of corrective balance operations for a reported day.
IMTDaily::DailyCorrection
Set the amount of corrective balance operations for a reported day.
C++
MTAPIRES IMTDaily::DailyCorrection( const double correction // Corrective operations for a day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCorrection( double correction // Corrective operations for a day )  
---  
Parameters
correction
[in] The amount of corrective balance operations for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.