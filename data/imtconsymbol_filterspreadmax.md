# FilterSpreadMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterSpreadMax | [](imtconsymbol_filterdiscard.md "FilterDiscard") [](imtconsymbol_filterspreadmin.md "FilterSpreadMin") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterSpreadMax
Get the maximum allowed spread value.
C++
UINT IMTConSymbol::FilterSpreadMax() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterSpreadMax()  
---  
Python (Manager API)
MTConSymbol.FilterSpreadMax  
---  
Return Value
The maximum allowed spread value.
IMTConSymbol::FilterSpreadMax
Set the maximum allowed spread value.
C++
MTAPIRES IMTConSymbol::FilterSpreadMax( const UINT spread // The maximum allowed spread )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterSpreadMax( uint spread // The maximum allowed spread )  
---  
Python (Manager API)
MTConSymbol.FilterSpreadMax  
---  
Parameters
spread
[in] The maximum allowed spread.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.