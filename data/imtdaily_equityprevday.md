# EquityPrevDay (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ EquityPrevDay | [](imtdaily_balanceprevmonth.md "BalancePrevMonth") [](imtdaily_equityprevmonth.md "EquityPrevMonth") |
| --- | --- | --- |
| --- | --- |

IMTDaily::EquityPrevDay
Get the value of a client's equity as of the end of the previous day.
C++
double IMTDaily::EquityPrevDay() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.EquityPrevDay()  
---  
Return Value
A client's equity as of the end of the previous day.
IMTDaily::EquityPrevDay
Set the value of a client's equity as of the end of the previous day.
C++
MTAPIRES IMTDaily::EquityPrevDay( const double balance Equity )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.EquityPrevDay( double balance Equity )  
---  
Parameters
balance
[in] The client's equity as of the end of the previous day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.