# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Description | [](imtconsymbol_isin.md "ISIN") [](imtconsymbol_international.md "International") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Description
Get the description of a symbol.
C++
LPCWSTR IMTConSymbol::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Description()  
---  
Python (Manager API)
MTConSymbol.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of a symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::Description
Set the description of a symbol.
C++
MTAPIRES IMTConSymbol::Description( LPCWSTR descr // Description of a symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Description( string descr // Description of a symbol )  
---  
Python (Manager API)
MTConSymbol.Description  
---  
Parameters
descr
[in] The symbol description.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of symbol description is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.