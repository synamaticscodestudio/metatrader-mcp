# MarginFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginFlags | [](imtconsymbol_volumelimitext.md "VolumeLimitExt") [](imtconsymbol_margininitial.md "MarginInitial") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginFlags
Get the additional margin check modes.
C++
UINT IMTConSymbol::MarginFlags() const  
---  
.NET (Gateway/Manager API)
EnMarginFlags CIMTConSymbol.MarginFlags()  
---  
Python (Manager API)
MTConSymbol.MarginFlags  
---  
Return Value
One of the values of the [IMTConSymbol::EnMarginFlags](imtconsymbol_enum.htm#enmarginflags) enumeration.
IMTConSymbol::MarginFlags
Set the additional margin check modes.
C++
MTAPIRES IMTConSymbol::MarginFlags( const UINT mode // Margin checking mode )  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTConSymbol.MarginFlags( EnMarginFlags mode // Margin checking mode )  
---  
Python (Manager API)
MTConSymbol.MarginFlags  
---  
Parameters
mode
[in] Margin checking mode is passed using the [IMTConSymbol::EnMarginFlags](imtconsymbol_enum.htm#enmarginflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.