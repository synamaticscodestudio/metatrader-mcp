# FilterHard (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterHard | [](imtconsymbol_filtersoftticks.md "FilterSoftTicks") [](imtconsymbol_filterhardticks.md "FilterHardTicks") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterHard
Get the hard level of price filtering.
C++
UINT IMTConSymbol::FilterHard() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterHard()  
---  
Python (Manager API)
MTConSymbol.FilterHard  
---  
Return Value
The hard level of price filtering.
IMTConSymbol::FilterHard
Set the hard level of price filtering.
C++
MTAPIRES IMTConSymbol::FilterHard( const UINT filter // Hard filtration level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterHard( uint filter // Hard filtration level )  
---  
Python (Manager API)
MTConSymbol.FilterHard  
---  
Parameters
filter
[in] The hard level of price filtering.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.