# Symbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Symbol | [](imtconsymbol_clear.md "Clear") [](imtconsymbol_path.md "Path") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Symbol
Get the symbol name.
C++
LPCWSTR IMTConSymbol::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Symbol()  
---  
Python (Manager API)
MTConSymbol.Symbol  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::Symbol
Set the symbol name.
C++
MTAPIRES IMTConSymbol::Symbol( LPCWSTR symbol // Symbol name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Symbol( string symbol // Symbol name )  
---  
Python (Manager API)
MTConSymbol.Symbol  
---  
Parameters
symbol
[in] Symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the symbol name is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.