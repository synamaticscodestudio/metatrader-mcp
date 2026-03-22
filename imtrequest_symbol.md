# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Symbol | [](imtrequest_group.md "Group") [](imtrequest_symboloriginal.md "SymbolOriginal") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Symbol
Get the symbol, a request for which is received.
C++
LPCWSTR IMTRequest::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with a request symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
IMTRequest::Symbol
Set the symbol of a trade request.
C++
MTAPIRES IMTRequest::Symbol( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Symbol( string symbol // Symbol )  
---  
Parameters
symbol
[in] The symbol of a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.