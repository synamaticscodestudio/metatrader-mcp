# SymbolClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ SymbolClear | [](imtconholiday_symboldelete.md "SymbolDelete") [](imtconholiday_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::SymbolClear
Clear the list of [symbols](config_symbol.md "Symbols") to which the holiday applies.
C++
MTAPIRES IMTConHoliday::SymbolClear() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.SymbolClear()  
---  
Python (Manager API)
MTConHoliday.SymbolClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of holiday symbols.