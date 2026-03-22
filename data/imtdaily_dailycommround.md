# DailyCommRound (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCommRound | [](imtdaily_dailycomminstant.md "DailyCommInstant") [](imtdaily_dailycommfee.md "DailyCommFee") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCommRound
Get the amount of turnover [commissions](imtconcommission.md "IMTConCommission") charged to the client for a reported day.
C++
double IMTDaily::DailyCommRound() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCommRound()  
---  
Return Value
The amount of turnover positions charged to the client for a reported day.
IMTDaily::DailyCommRound
Set the amount of turnover [commissions](imtconcommission.md "IMTConCommission") charged to the client for a reported day.
C++
MTAPIRES IMTDaily::DailyCommRound( const double comm // Daily turnover commissions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCommRound( double comm // Daily turnover commissions )  
---  
Parameters
comm
[in] The amount of turnover positions charged to the client for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.