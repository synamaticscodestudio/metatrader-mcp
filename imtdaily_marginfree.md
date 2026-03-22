# MarginFree (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ MarginFree | [](imtdaily_margin.md "Margin") [](imtdaily_marginlevel.md "MarginLevel") |
| --- | --- | --- |
| --- | --- |

IMTDaily::MarginFree
Get a client's free margin in a daily report.
C++
double IMTDaily::MarginFree() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.MarginFree()  
---  
Return Value
A client's free margin in a daily report.
IMTDaily::MarginFree
Set a client's free margin in a daily report.
C++
MTAPIRES IMTDaily::MarginFree( const double margin_free // Free margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.MarginFree( double margin_free // Free margin )  
---  
Parameters
margin_free
[in] A client's free margin in the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.