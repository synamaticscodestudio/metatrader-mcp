# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Digits | [](imtexecution_symbolnew.md "SymbolNew") [](imtexecution_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Digits
Get the number of decimal places in the price of a symbol, for which trade execution is performed.
C++
UINT IMTExecution::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.Digits()  
---  
Return Value
The number of decimal places in the price of a symbol, for which trade execution is performed.
IMTExecution::Digits
Set the number of decimal places in the price of a symbol, for which trade execution is performed.
C++
MTAPIRES IMTExecution::Digits( const UINT digits // Decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Digits( uint digits // Decimal places )  
---  
Parameters
digits
[in] The number of decimal places in the price of a symbol, for which trade execution is performed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum number of decimal places is 8.