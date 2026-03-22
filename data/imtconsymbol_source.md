# Source (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Source | [](imtconsymbol_basis.md "Basis") [](imtconsymbol_page.md "Page") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Source
Get the name of the source symbol whose quotes should be used for the current financial instrument.
C++
LPCWSTR IMTConSymbol::Source() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Source()  
---  
Python (Manager API)
MTConSymbol.Source  
---  
Return Value
If successful, it returns a pointer to a string with the name of the source symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::Source
Set the name of the source symbol whose quotes should be used for the current financial instrument.
C++
MTAPIRES IMTConSymbol::Source( LPCWSTR source // A name of the source symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Source( string source // A name of the source symbol )  
---  
Python (Manager API)
MTConSymbol.Source  
---  
Parameters
source
[in] Source symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name of a symbol that exists in the platform ([IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol")) is specified as the source.