# FilterSoftTicks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterSoftTicks | [](imtconsymbol_filtersoft.md "FilterSoft") [](imtconsymbol_filterhard.md "FilterHard") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterSoftTicks
Get the current value of the ticks counter for the soft filtering.
C++
UINT IMTConSymbol::FilterSoftTicks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterSoftTicks()  
---  
Python (Manager API)
MTConSymbol.FilterSoftTicks  
---  
Return Value
The current value of the ticks counter for the soft filtering.
IMTConSymbol::FilterSoftTicks
Set the value of the ticks counter for the soft filtering.
C++
MTAPIRES IMTConSymbol::FilterSoftTicks( const UINT ticks // The value of the ticks counter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterSoftTicks( uint ticks // The value of the ticks counter )  
---  
Python (Manager API)
MTConSymbol.FilterSoftTicks  
---  
Parameters
ticks
[in] The value of the ticks counter for the soft filtering.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.