# FilterGap (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FilterGap | [](imtconsymbol_filterspreadmin.md "FilterSpreadMin") [](imtconsymbol_filtergapticks.md "FilterGapTicks") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FilterGap
Get the difference between the previous and the next quote, starting from which a gap is considered to be formed.
C++
UINT IMTConSymbol::FilterGap() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.FilterGap()  
---  
Python (Manager API)
MTConSymbol.FilterGap  
---  
Return Value
The difference between the previous and the next quote, starting from which a gap is considered to be formed.
IMTConSymbol::FilterGap
Set the the difference between the previous and the next quote, starting from which a gap is considered to be formed.
C++
MTAPIRES IMTConSymbol::FilterGap( const UINT ticks  // Gap level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FilterGap( uint ticks // Gap level )  
---  
Python (Manager API)
MTConSymbol.FilterGap  
---  
Parameters
filter
[in] The difference between the previous and the next quote, starting from which a gap is considered to be formed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.