# ISIN (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ ISIN | [](imtconsymbol_path.md "Path") [](imtconsymbol_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::ISIN
Get the international identification code (ISIN) of the symbol.
C++
LPCWSTR IMTConSymbol::ISIN() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.ISIN()  
---  
Python (Manager API)
MTConSymbol.ISIN  
---  
Return Value
If successful, it returns a pointer to a string with the ISIN. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::ISIN
Set the international identification code (ISIN) of the symbol.
C++
MTAPIRES IMTConSymbol::ISIN( LPCWSTR isin // ISIN )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.ISIN( string isin // ISIN )  
---  
Python (Manager API)
MTConSymbol.ISIN  
---  
Parameters
isin
[in] ISIN.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the ISIN is 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.