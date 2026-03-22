# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ SymbolAdd | [](imtconfeeder_parameterget.md "ParameterGet") [](imtconfeeder_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::SymbolAdd
Add a [symbol](config_symbol.md "Symbols"), for which the data feed will transmit quotes.
C++
MTAPIRES IMTConFeeder::SymbolAdd( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.SymbolAdd( string path // Path to the symbol )  
---  
Python (Manager API)
MTConFeeder.SymbolAdd( path # Path to the symbol )  
---  
Parameters
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.