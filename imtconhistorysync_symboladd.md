# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ SymbolAdd | [](imtconhistorysync_to.md "To") [](imtconhistorysync_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::SymbolAdd
Add a symbol for which history data will be synchronized.
C++
MTAPIRES IMTConHistorySync::SymbolAdd( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.SymbolAdd( string path // Path to the symbol )  
---  
Python (Manager API)
MTConHistorySync.SymbolAdd( path # путь к символу )  
---  
Parameters
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Path](imtconsymbol_path.md "Path") value is used as the path to the symbol.