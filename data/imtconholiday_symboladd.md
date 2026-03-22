# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ SymbolAdd | [](imtconholiday_worktominutes.md "WorkToMinutes") [](imtconholiday_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::SymbolAdd
Add [a symbol](config_symbol.md "Symbols"), to which the holiday will apply.
C++
MTAPIRES IMTConHoliday::SymbolAdd( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.SymbolAdd( string path // Path to the symbol )  
---  
Python (Manager API)
MTConHoliday.SymbolAdd( path # Path to the symbol )  
---  
Parameters
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
[IMTConSymbol::Path](imtconsymbol_path.md "Path") value is used as the path to the symbol.