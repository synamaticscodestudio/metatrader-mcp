# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Symbol | [](imtexecution_flags.md "Flags") [](imtexecution_symbolnew.md "SymbolNew") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Symbol
Gets the symbol name, for which trade execution is performed.
C++
LPCWSTR IMTExecution::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTExecution](imtexecution.md "IMTExecution") object.
To use the line after the object removal (call of [IMTExecution::Release](imtexecution_release.md "Release") method of this object), a copy of it should be created.
IMTExecution::Symbol
Sets the name of the symbol, for which trade execution is performed.
C++
MTAPIRES IMTExecution::Symbol( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Symbol( string symbol // Symbol )  
---  
Parameters
symbol
[in] Name of the symbol, for which trade execution is performed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.