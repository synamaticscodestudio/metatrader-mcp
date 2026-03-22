# DailyStorage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyStorage | [](imtdaily_dailybonus.md "DailyBonus") [](imtdaily_dailycomminstant.md "DailyCommInstant") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyStorage
Get the amount of swaps charged to a client for a reported day.
C++
double IMTDaily::DailyStorage() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyStorage()  
---  
Return Value
The amount of swaps charged to a client for a reported day.
IMTDaily::DailyStorage
Set the amount of swaps charged to a client for a reported day.
C++
MTAPIRES IMTDaily::DailyStorage( const double storage // Daily swaps )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyStorage( double storage // Daily swaps )  
---  
Parameters
storage
[in] The amount of swaps charged to a client for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.