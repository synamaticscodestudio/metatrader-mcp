# AgentMonthly (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ AgentMonthly | [](imtdaily_agentdaily.md "AgentDaily") [](imtdaily_balanceprevday.md "BalancePrevDay") |
| --- | --- | --- |
| --- | --- |

IMTDaily::AgentMonthly
Get from a daily report the size of agent [commissions](imtconcommission.md "IMTConCommission") charged for a client's trade operations for the current month .
C++
double IMTDaily::AgentMonthly() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.AgentMonthly()  
---  
Return Value
The total amount of agent commissions charged for a client's trade operations for the current month.
IMTDaily::AgentMonthly
Set in a daily report the size of agent [commissions](imtconcommission.md "IMTConCommission") for a client's trade operations for the current month.
C++
MTAPIRES IMTDaily::AgentMonthly( const double agent // Agent commissions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.AgentMonthly( double agent // Agent commissions )  
---  
Parameters
agent
[in] The total amount of agent commissions charged for a client's trade operations for the current month.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.