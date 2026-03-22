# FilterDiscard (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterDiscard | [](imtconsymbol_filterhardticks.md "FilterHardTicks") [](imtconsymbol_filterspreadmax.md "FilterSpreadMax") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterDiscard
Get the discard level of price filtering.
C++
UINT IMTConSymbol::FilterDiscard() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterDiscard()  
---  
Python (Manager API)
MTConSymbol.FilterDiscard  
---  
Return Value
The discard level of price filtering.
IMTConSymbol::FilterDiscard
Set the discard level of price filtering.
C++
MTAPIRES IMTConSymbol::FilterDiscard( const UINT ticks // The discard filtration level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterDiscard( uint ticks // The discard filtration level )  
---  
Python (Manager API)
MTConSymbol.FilterDiscard  
---  
Parameters
ticks
[in] The discard level of price filtering.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.