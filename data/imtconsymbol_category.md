# Category (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Category | [](imtconsymbol_international.md "International") [](imtconsymbol_exchange.md "Exchange") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Category
Get the symbol category.
C++
LPCWSTR IMTConSymbol::Category() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.Category()  
---  
Python (Manager API)
MTConSymbol.Category  
---  
Return Value
If successful, the method returns a pointer to a string with the symbol category. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the line after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::Category
Set the symbol category.
C++
MTAPIRES IMTConSymbol::Category( LPCWSTR category // Symbol category )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Category( string category // Symbol category )  
---  
Python (Manager API)
MTConSymbol.Category  
---  
Parameters
category
[in] Symbol category.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Categories are intended for additional marking of financial instruments. For example, this can be the market sector to which the symbol belongs: Agriculture, Oil & Gas and others.
The maximum length of a symbol category name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it is cut to this length.