# SymbolUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ SymbolUpdate | [](imtconfeeder_symboladd.md "SymbolAdd") [](imtconfeeder_symbolshift.md "SymbolShift") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::SymbolUpdate
Change [the symbol](config_symbol.md "Symbols") with a specified index, for which the data feed transmits quotes.
C++
MTAPIRES IMTConFeeder::SymbolUpdate( const UINT pos, // Position of the symbol LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.SymbolUpdate( uint pos, // Position of the symbol string path // Path to the symbol )  
---  
Python (Manager API)
MTConFeeder.SymbolUpdate( pos, # Position of the symbol path # Path to the symbol )  
---  
Parameters
pos
[in] Position of the symbol.
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.