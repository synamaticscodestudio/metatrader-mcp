# MarginLevel (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ MarginLevel | [](imtdaily_marginfree.md "MarginFree") [](imtdaily_marginleverage.md "MarginLeverage") |
| --- | --- | --- |
| --- | --- |

IMTDaily::MarginLevel
Get a client's margin level in the daily report.
C++
double IMTDaily::MarginLevel() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.MarginLevel()  
---  
Return Value
The margin level of a client in the daily report.
IMTDaily::MarginLevel
Set a client's margin level in the daily report.
C++
MTAPIRES IMTDaily::MarginLevel( const double margin_level // Margin level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.MarginLevel( double margin_level // Margin level )  
---  
Parameters
margin_level
[in] The margin level of a client in the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.