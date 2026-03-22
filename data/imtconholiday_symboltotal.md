# SymbolTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ SymbolTotal | [](imtconholiday_symbolclear.md "SymbolClear") [](imtconholiday_symbolnext.md "SymbolNext") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::SymbolTotal
Get the number of [symbols](config_symbol.md "Symbols") in the list of symbols, to which the holiday applies.
C++
UINT IMTConHoliday::SymbolTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.SymbolTotal()  
---  
Python (Manager API)
MTConHoliday.SymbolTotal()  
---  
Return Value
The number of symbol settings to which the holiday applies.