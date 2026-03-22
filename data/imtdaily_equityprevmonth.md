# EquityPrevMonth (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ EquityPrevMonth | [](imtdaily_equityprevday.md "EquityPrevDay") [](imtdaily_margin.md "Margin") |
| --- | --- | --- |
| --- | --- |

IMTDaily::EquityPrevMonth
Get the value of a client's equity as of the end of the previous trading month.
C++
double IMTDaily::EquityPrevMonth() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.EquityPrevMonth()  
---  
Return Value
The value of a client's equity as of the end of the previous trading month.
IMTDaily::EquityPrevMonth
Set the value of a client's equity as of the end of the previous trading month.
C++
MTAPIRES IMTDaily::EquityPrevMonth( const double balance // Equity )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.EquityPrevMonth( double balance // Equity )  
---  
Parameters
balance
[in] A client's equity as of the end of the previous trading month..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.