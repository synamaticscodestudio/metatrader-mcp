# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ SymbolNext | [](imtconfeeder_symboltotal.md "SymbolTotal") [](imtconfeeder_translateadd.md "TranslateAdd") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::SymbolNext
Get [a symbol](config_symbol.md "Symbols") from the data feed list by the index.
C++
LPCWSTR IMTConFeeder::SymbolNext( const UINT pos // Position of the symbol ) const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.SymbolNext( uint  pos // Position of the symbol )  
---  
Python (Manager API)
MTConFeeder.SymbolNext( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of a symbol in the list of a data feed, starting with 0.
Return Value
The path to the symbol in a specified position in the list of symbols for which data are provided by the data feed.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.