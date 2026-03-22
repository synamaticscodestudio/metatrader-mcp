# FilterHardTicks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterHardTicks | [](imtconsymbol_filterhard.md "FilterHard") [](imtconsymbol_filterdiscard.md "FilterDiscard") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterHardTicks
Get the current value of the ticks counter for the hard filtering.
C++
UINT IMTConSymbol::FilterHardTicks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterHardTicks()  
---  
Python (Manager API)
MTConSymbol.FilterHardTicks  
---  
Return Value
The current value of the ticks counter for the hard filtering.
IMTConSymbol::FilterHardTicks
Set the value of the ticks counter for the hard filtering.
C++
MTAPIRES IMTConSymbol::FilterHardTicks( const UINT ticks // The value of the ticks counter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterHardTicks( uint ticks // The value of the ticks counter )  
---  
Python (Manager API)
MTConSymbol.FilterHardTicks  
---  
Parameters
ticks
[in] The value of the ticks counter for the hard filtering.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.