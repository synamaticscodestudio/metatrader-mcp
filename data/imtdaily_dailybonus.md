# DailyBonus (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyBonus | [](imtdaily_dailycorrection.md "DailyCorrection") [](imtdaily_dailystorage.md "DailyStorage") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyBonus
Get the amount of bonuses added to the client's balance for the reported day.
C++
double IMTDaily::DailyBonus() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyBonus()  
---  
Return Value
The amount of bonuses added to the client's balance for the reported day.
IMTDaily::DailyBonus
Set the amount of bonuses added to the client's balance for the reported day.
C++
MTAPIRES IMTDaily::DailyBonus( const double bonus // Bonus for the day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyBonus( double bonus // Bonus for the day )  
---  
Parameters
bonus
[in] the bonuses added to the client's balance for the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.