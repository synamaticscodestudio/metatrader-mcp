# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Symbol | [](imtposition_loginset.md "LoginSet") [](imtposition_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Symbol
Get the symbol of a trade position.
C++
LPCWSTR IMTPosition::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTPosition.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with a position symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTPosition](imtposition.md "IMTPosition") object.
To use the string after the object removal (call of the [IMTPosition::Release](imtposition_release.md "Release") method of this object), a copy of it should be created.
IMTPosition::Symbol
Sets the symbol of a trade position.
C++
MTAPIRES IMTPosition::Symbol( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Symbol( string symbol // Symbol )  
---  
Parameters
symbol
[in] The symbol of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.