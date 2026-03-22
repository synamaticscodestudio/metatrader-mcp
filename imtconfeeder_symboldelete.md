# SymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ SymbolDelete | [](imtconfeeder_symbolshift.md "SymbolShift") [](imtconfeeder_symbolclear.md "SymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::SymbolDelete
Remove [a symbol](config_symbol.md "Symbols") from the data feed list by the index.
C++
MTAPIRES IMTConFeeder::SymbolDelete( const UINT pos // Position of the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.SymbolDelete( uint pos // Position of the symbol )  
---  
Python (Manager API)
MTConFeeder.SymbolDelete( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.