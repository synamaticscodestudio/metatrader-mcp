# Path (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Path | [](imtcongroupsymbol_default.md "Default") [](imtcongroupsymbol_trademode.md "TradeMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Path
Get the path to [a symbol](config_symbol.md "Symbols") or group of symbols that are subject to the special group settings.
C++
LPCWSTR IMTConGroupSymbol::Path() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroupSymbol.Path()  
---  
Python (Manager API)
MTConGroupSymbol.Path  
---  
Return Value
If successful, it returns a pointer to a string with the path to a symbol or group of symbols. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") object.
To use the string after the object removal (call of the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConGroupSymbol::Path
Set the path to [a symbol](config_symbol.md "Symbols") or group of symbols that are subject to the special group settings.
C++
MTAPIRES IMTConGroupSymbol::Path( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.Path( string path // Path to the symbol )  
---  
Python (Manager API)
MTConGroupSymbol.Path  
---  
Parameters
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Path](imtconsymbol_path.md "Path") value is used as the path to the symbol.