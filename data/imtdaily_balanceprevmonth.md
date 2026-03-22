# BalancePrevMonth (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ BalancePrevMonth | [](imtdaily_balanceprevday.md "BalancePrevDay") [](imtdaily_equityprevday.md "EquityPrevDay") |
| --- | --- | --- |
| --- | --- |

IMTDaily::BalancePrevMonth
Get the value of a client's balance as of the end of the previous trading month.
C++
double IMTDaily::BalancePrevMonth() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.BalancePrevMonth()  
---  
Return Value
A client's balance as of the end of the previous trading month.
IMTDaily::BalancePrevMonth
Set the value of a client's balance as of the end of the previous trading month.
C++
MTAPIRES IMTDaily::BalancePrevMonth( const double balance // Balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.BalancePrevMonth( double balance // Balance )  
---  
Parameters
balance
[in] A client's balance as of the end of the previous trading month.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.