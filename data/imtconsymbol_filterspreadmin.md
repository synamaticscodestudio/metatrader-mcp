# FilterSpreadMin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterSpreadMin | [](imtconsymbol_filterspreadmax.md "FilterSpreadMax") [](imtconsymbol_filtergap.md "FilterGap") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterSpreadMin
Get the minimum allowed spread value.
C++
UINT IMTConSymbol::FilterSpreadMin() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterSpreadMin()  
---  
Python (Manager API)
MTConSymbol.FilterSpreadMin  
---  
Return Value
The minimum allowed spread.
IMTConSymbol::FilterSpreadMin
Set the minimum allowed spread value.
C++
MTAPIRES IMTConSymbol::FilterSpreadMin( const UINT spread // The minimum allowed spread )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterSpreadMin( uint spread // The minimum allowed spread )  
---  
Python (Manager API)
MTConSymbol.FilterSpreadMin  
---  
Parameters
spread
[in] The minimum allowed spread.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.