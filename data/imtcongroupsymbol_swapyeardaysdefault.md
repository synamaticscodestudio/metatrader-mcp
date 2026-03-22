# SwapYearDaysDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapYearDaysDefault | [](imtcongroupsymbol_swapyeardays.md "SwapYearDays") [](imtcongroupsymbol_swapflags.md "SwapFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapYearDaysDefault
Get the default number of days in a year specified for the symbol. For further details please refer to the ["Use of Default methods"](imtcongroupsymbol.htm#default) section.
C++
UINT IMTConGroupSymbol::SwapYearDaysDefault() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.SwapYearDaysDefault()  
---  
Python (Manager API)
MTConGroupSymbol.SwapYearDaysDefault  
---  
Return Value
The number of days in a year.
Note
The number of days in a year is used when calculating [percentage swaps](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_swaps#percentage).