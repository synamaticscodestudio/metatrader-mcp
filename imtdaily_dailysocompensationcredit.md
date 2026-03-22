# DailySOCompensationCredit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailySOCompensationCredit | [](imtdaily_dailysocompensation.md "DailySOCompensation") [](imtdaily_dailyagent.md "DailyAgent") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailySOCompensationCredit
Get the amount of credit funds withdrawn from the account during the reported day as a result of a negative balance compensation operation.
C++
double IMTDaily::DailySOCompensationCredit() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailySOCompensationCredit()  
---  
Return Value
The amount of credit funds withdrawn from the account for the reported day.
Note
Such withdrawal can be performed after compensating a negative balance upon Stop Out, if option [IMTConGroup::TRADEFLAGS_SO_COMPENSATION_CREDIT](imtcongroup_enum.htm#entradeflags) is enabled for the group.
IMTDaily::DailySOCompensationCredit
Set the amount of credit funds withdrawn from the account during the reported day as a result of a negative balance compensation operation.
C++
MTAPIRES IMTDaily::DailySOCompensationCredit( const double compensation // Credit amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailySOCompensationCredit( double compensation // Credit amount )  
---  
Parameters
socompensation
[in] The amount of credit funds withdrawn from the account for the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
Such withdrawal can be performed after compensating a negative balance upon Stop Out, if option [IMTConGroup::TRADEFLAGS_SO_COMPENSATION_CREDIT](imtcongroup_enum.htm#entradeflags) is enabled for the group.