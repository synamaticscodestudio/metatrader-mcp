# MarginLeverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ MarginLeverage | [](imtdaily_marginlevel.md "MarginLevel") [](imtdaily_profit.md "Profit") |
| --- | --- | --- |
| --- | --- |

IMTDaily::MarginLeverage
Get the margin leverage of a client in the daily report.
C++
UINT IMTDaily::MarginLeverage() const  
---  
.NET (Gateway/Manager API)
uint CIMTDaily.MarginLeverage()  
---  
Return Value
The margin leverage of a client in the daily report.
IMTDaily::MarginLeverage
Set the margin leverage of a client in the daily report.
C++
MTAPIRES IMTDaily::MarginLeverage( const UINT leverage // Leverage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.MarginLeverage( uint leverage // Leverage )  
---  
Parameters
leverage
[in] The margin leverage of a client in the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.