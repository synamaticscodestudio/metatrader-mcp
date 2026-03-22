# BalancePrevDay (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ BalancePrevDay | [](imtdaily_agentmonthly.md "AgentMonthly") [](imtdaily_balanceprevmonth.md "BalancePrevMonth") |
| --- | --- | --- |
| --- | --- |

IMTDaily::BalancePrevDay
Get the value of a client's balance as of the end of the previous day.
C++
double IMTDaily::BalancePrevDay() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.BalancePrevDay()  
---  
Return Value
A client's balance as of the end of the previous day.
IMTDaily::BalancePrevDay
Set the value of a client's balance as of the end of the previous day.
C++
MTAPIRES IMTDaily::BalancePrevDay( const double balance // Balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.BalancePrevDay( double balance // Balance )  
---  
Parameters
balance
[in] A client's balance as of the end of the previous day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.