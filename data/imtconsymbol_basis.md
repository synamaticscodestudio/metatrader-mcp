# Basis (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Basis | [](imtconsymbol_country.md "Country") [](imtconsymbol_source.md "Source") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Basis
Gets the underlying asset of a derivative financial instrument.
C++
LPCWSTR IMTConSymbol::Basis() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Basis()  
---  
Python (Manager API)
MTConSymbol.Basis  
---  
Return Value
If successful, it returns a pointer to a string with the name of the name of the basic asset. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
The name of a symbol that exists in the platform ([IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol")) is specified as the basic asset.
IMTConSymbol::Basis
Sets the underlying asset of a derivative financial instrument.
C++
MTAPIRES IMTConSymbol::Basis( LPCWSTR basis // Symbol name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Basis( string basis // Symbol name )  
---  
Python (Manager API)
MTConSymbol.Basis  
---  
Parameters
basis
[in] A name of the basic symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name of a symbol that exists in the platform ([IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol")) is specified as the basic asset.