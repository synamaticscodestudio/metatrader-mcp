# SwapYearDays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapYearDays | [](imtconsymbol_swap3day.md "Swap3Day") [](imtconsymbol_swapflags.md "SwapFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapYearDays
Get the number of days in a year used in calculating [swap percent](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_swaps#percentage).
C++
UINT IMTConSymbol::SwapYearDays() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SwapYearDays()  
---  
Python (Manager API)
MTConSymbol.SwapYearDays  
---  
Return Value
The number of days in a year.
IMTConSymbol::SwapYearDays
Set the number of days in a year used in calculating [swap percent](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_swaps#percentage).
C++
MTAPIRES IMTConSymbol::SwapYearDays( const UINT days // Number of days )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapYearDays( uint days // Number of days )  
---  
Python (Manager API)
MTConSymbol.SwapYearDays  
---  
Parameters
days
[in] Number of days in a year.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a relevant error code is returned.