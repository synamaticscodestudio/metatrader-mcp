# Spread (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Spread | [](imtconsymbol_expirflags.md "ExpirFlags") [](imtconsymbol_spreadbalance.md "SpreadBalance") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Spread
Get the size of the symbol spread.
C++
UINT IMTConSymbol::Spread() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.Spread()  
---  
Python (Manager API)
MTConSymbol.Spread  
---  
Return Value
Symbol spread size. The 0 value means that the spread is floating.
IMTConSymbol::Spread
Set the size of the symbol spread.
C++
MTAPIRES IMTConSymbol::Spread( const UINT spread // Spread size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Spread( uint spread // Spread size )  
---  
Python (Manager API)
MTConSymbol.Spread  
---  
Parameters
spread
[in] The symbol spread size. The 0 value means that the spread is floating.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.