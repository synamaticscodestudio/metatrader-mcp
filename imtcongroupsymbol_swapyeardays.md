# SwapYearDays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapYearDays | [](imtcongroupsymbol_swap3daydefault.md "Swap3DayDefault") [](imtcongroupsymbol_swapyeardaysdefault.md "SwapYearDaysDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapYearDays
Get the number of days in a year used in calculating [swap percent](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_swaps#percentage) for a given group.
C++
UINT IMTConGroupSymbol::SwapYearDays() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.SwapYearDays()  
---  
Python (Manager API)
MTConGroupSymbol.SwapYearDays  
---  
Return Value
The number of days in a year.
IMTConGroupSymbol::SwapYearDays
Set the number of days in a year used in calculating [swap percent](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_swaps#percentage) for a given group.
C++
MTAPIRES IMTConGroupSymbol::SwapYearDays( const UINT days // Number of days )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapYearDays( uint days // Number of days )  
---  
Python (Manager API)
MTConGroupSymbol.SwapYearDays  
---  
Parameters
days
[in] Number of days in a year.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a relevant error code is returned.