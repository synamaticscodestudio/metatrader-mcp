# DailyCredit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCredit | [](imtdaily_dailybalance.md "DailyBalance") [](imtdaily_dailycharge.md "DailyCharge") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCredit
Gets the amount of credit given to a client during the reported day.
C++
double IMTDaily::DailyCredit() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCredit()  
---  
Return Value
The amount of credit given to a client during the reported day.
IMTDaily::DailyCredit
Set the amount of credit given to a client during the reported day.
C++
MTAPIRES IMTDaily::DailyCredit( const double comm // Credit for a day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCredit( double comm // Credit for a day )  
---  
Parameters
comm
[in] The amount of credit given to a client during the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.