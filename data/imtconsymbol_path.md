# Path (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Path | [](imtconsymbol_symbol.md "Symbol") [](imtconsymbol_isin.md "ISIN") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Path
Get the path to the symbol, including the name of the symbol.
C++
LPCWSTR IMTConSymbol::Path() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Path()  
---  
Python (Manager API)
MTConSymbol.Path  
---  
Return Value
If successful, it returns a pointer to a string with a path to the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::Path
Set the path to the symbol.
C++
MTAPIRES IMTConSymbol::Path( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Path( string path // Path to the symbol )  
---  
Python (Manager API)
MTConSymbol.Path  
---  
Parameters
path
[in] A path to the symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A symbol name should be included into the path to the symbol.
The path length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.