# AgentDaily (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ AgentDaily | [](imtdaily_commissionmonthly.md "CommissionMonthly") [](imtdaily_agentmonthly.md "AgentMonthly") |
| --- | --- | --- |
| --- | --- |

IMTDaily::AgentDaily
Get the size of agent [commissions](imtconcommission.md "IMTConCommission") charged for a client's trade operations for a day from a daily report.
C++
double IMTDaily::AgentDaily() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.AgentDaily()  
---  
Return Value
The size of agent commissions charged for a client's trade operations for a day, from a daily report.
IMTDaily::AgentDaily
Set the size of agent [commissions](imtconcommission.md "IMTConCommission") for a client's trade operations for a day in a daily report.
C++
MTAPIRES IMTDaily::AgentDaily( const double agent // Agent commissions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.AgentDaily( double agent // Agent commissions )  
---  
Parameters
agent
[in] The size of agent commissions for a client's trade operations for a day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.