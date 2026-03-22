# ProfitEquity (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ ProfitEquity | [](imtdaily_profitcommission.md "ProfitCommission") [](imtdaily_profitassets.md "ProfitAssets") |
| --- | --- | --- |
| --- | --- |

IMTDaily::ProfitEquity
Get the amount of the current floating equity of a client in a daily report.
C++
double IMTDaily::ProfitEquity() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.ProfitEquity()  
---  
Return Value
The amount of a client's floating equity in a daily report.
IMTDaily::ProfitEquity
Set the amount of the current floating equity of a client in a daily report.
C++
MTAPIRES IMTDaily::ProfitEquity( const double equity // Equity )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.ProfitEquity( double equity // Equity )  
---  
Parameters
equity
[in] The amount of the current floating equity of a client in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.