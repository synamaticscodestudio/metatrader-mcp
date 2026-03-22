# DailyAgent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyAgent | [](imtdaily_dailysocompensationcredit.md "DailySOCompensationCredit") [](imtdaily_dailyinterest.md "DailyInterest") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyAgent
Get the amount of agent [commission](imtconcommission.md "IMTConCommission") charged for a client's trade operations for a reported day.
C++
double IMTDaily::DailyAgent() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyAgent()  
---  
Return Value
The size of agent commissions charged for a client's trade operations for a reported day.
IMTDaily::DailyAgent
Set the amount of agent [commission](imtconcommission.md "IMTConCommission") charged for a client's trade operations for a reported day.
C++
MTAPIRES IMTDaily::DailyAgent( const double comm // Agent commissions for a day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyAgent( double comm // Agent commissions for a day )  
---  
Parameters
comm
[in] The size of agent commissions charged for a client's trade operations for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.