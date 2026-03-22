# SymbolNew (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ SymbolNew | [](imtexecution_symbol.md "Symbol") [](imtexecution_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTExecution::SymbolNew
Getting the name of a new symbol where position is relocated.
C++
LPCWSTR IMTExecution::SymbolNew() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.SymbolNew()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTExecution](imtexecution.md "IMTExecution") object.
To use the line after the object removal (call of [IMTExecution::Release](imtexecution_release.md "Release") method of this object), a copy of it should be created.
This field is used when relocating a position with a calculated price to a new symbol with the same underlying asset. You can find more details about the process in the description of the appropriate trade execution type [IMTExecution::TE_EOS_TRANSFER](imtexecution_enum.htm#entradeexecutions). 
IMTExecution::SymbolNew
Setting the name of a new symbol where position is relocated.
C++
MTAPIRES IMTExecution::SymbolNew( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.SymbolNew( string symbol // Symbol )  
---  
Parameters
symbol
[in] Name of the symbol, for which trade execution is performed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.
This field is used when relocating a position with a calculated price to a new symbol with the same underlying asset. You can find more details about the process in the description of the appropriate trade execution type [IMTExecution::TE_EOS_TRANSFER](imtexecution_enum.htm#entradeexecutions). 