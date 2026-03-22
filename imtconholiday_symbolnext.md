# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ SymbolNext | [](imtconholiday_symboltotal.md "SymbolTotal") [](imtconholidaysink.md "IMTConHolidaySink") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::SymbolNext
Get [a symbol](config_symbol.md "Symbols") from the list of symbols, to which the holiday applies, based on its index.
C++
LPCWSTR IMTConHoliday::SymbolNext( const UINT pos // Position of the symbol ) const  
---  
.NET (Gateway/Manager API)
string CIMTConHoliday.SymbolNext( uint pos // Position of the symbol )  
---  
Python (Manager API)
MTConHoliday.SymbolNext( pos # Position of the symbol )  
---  
MTConHoliday.SymbolGet()  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the full name of the symbol including the path to it. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConHoliday](imtconholiday.md "IMTConHoliday") object.
To use the string after the object removal (call of the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object), a copy of it should be created.