# SymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ SymbolDelete | [](imtconholiday_symbolshift.md "SymbolShift") [](imtconholiday_symbolclear.md "SymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::SymbolDelete
Delete a [symbol](config_symbol.md "Symbols") from the list of symbols, to which the holiday applies.
C++
MTAPIRES IMTConHoliday::SymbolDelete( const UINT pos // Position of the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.SymbolDelete( uint pos // Position of the symbol )  
---  
Python (Manager API)
MTConHoliday.SymbolDelete( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.