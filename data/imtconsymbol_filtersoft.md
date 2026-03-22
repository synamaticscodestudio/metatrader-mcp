# FilterSoft (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterSoft | [](imtconsymbol_tickbookdepth.md "TickBookDepth") [](imtconsymbol_filtersoftticks.md "FilterSoftTicks") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterSoft
Get the soft level of price filtering.
C++
UINT IMTConSymbol::FilterSoft() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterSoft()  
---  
Python (Manager API)
MTConSymbol.FilterSoft  
---  
Return Value
The soft level of price filtering.
IMTConSymbol::FilterSoft
Set the soft level of price filtering.
C++
MTAPIRES IMTConSymbol::FilterSoft( const UINT filter // Soft filtration level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterSoft( uint filter // Soft filtration level )  
---  
Python (Manager API)
MTConSymbol.FilterSoft  
---  
Parameters
filter
[in] The soft level of price filtering.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.