# International (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ International | [](imtconsymbol_description.md "Description") [](imtconsymbol_category.md "Category") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::International
Get the international name of a symbol.
C++
LPCWSTR IMTConSymbol::International() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.International()  
---  
Python (Manager API)
MTConSymbol.International  
---  
Return Value
If successful, it returns a pointer to a string with the international name of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::International
Set the international name of a symbol.
C++
MTAPIRES IMTConSymbol::International( LPCWSTR intern // International symbol name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.International( string intern // International symbol name )  
---  
Python (Manager API)
MTConSymbol.International  
---  
Parameters
intern
[in] The international symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the international name of a symbol is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.