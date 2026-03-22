# DailyCommInstant (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCommInstant | [](imtdaily_dailystorage.md "DailyStorage") [](imtdaily_dailycommround.md "DailyCommRound") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCommInstant
Get the amount of instant [commissions](imtconcommission.md "IMTConCommission") charged to a client during the reported day.
C++
double IMTDaily::DailyCommInstant() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCommInstant()  
---  
Return Value
The amount of instant commissions charged to the client during the reported day.
IMTDaily::DailyCommInstant
Set the amount of instant [commissions](imtconcommission.md "IMTConCommission") charged to a client during the reported day.
C++
MTAPIRES IMTDaily::DailyCommInstant( const double comm // Instant commissions for a day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCommInstant( double comm // Instant commissions for a day )  
---  
Parameters
comm
[in] The amount of instant commissions charged to the client during the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.