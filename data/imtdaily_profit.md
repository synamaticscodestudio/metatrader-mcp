# Profit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Profit | [](imtdaily_marginleverage.md "MarginLeverage") [](imtdaily_profitstorage.md "ProfitStorage") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Profit
Get the size of the current profit for all open positions of a client in a daily report.
C++
double IMTDaily::Profit() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.Profit()  
---  
Return Value
The size of the current profit for all open positions of a client in a daily report.
IMTDaily::Profit
Set the size of the current profit for all open positions of a client in a daily report.
C++
MTAPIRES IMTDaily::Profit( const double profit // Profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Profit( double profit // Profit )  
---  
Parameters
profit
[in] The size of the current profit for all open positions of a client in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.