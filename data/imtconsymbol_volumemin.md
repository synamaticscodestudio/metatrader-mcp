# VolumeMin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ VolumeMin | [](imtconsymbol_quotestimeout.md "QuotesTimeout") [](imtconsymbol_volumeminext.md "VolumeMinExt") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::VolumeMin
Gets the minimum volume of trade operations for a symbol.
C++
UINT64 IMTConSymbol::VolumeMin() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSymbol.VolumeMin()  
---  
Python (Manager API)
MTConSymbol.VolumeMin  
---  
Return Value
The minimum volume of trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeMinExt](imtconsymbol_volumeminext.md "VolumeMinExt") method.
IMTConSymbol::VolumeMin
Sets the minimum volume of trade operations for a symbol.
C++
MTAPIRES IMTConSymbol::VolumeMin( const UINT64 volume // Minimum volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.VolumeMin( ulong volume // Minimum volume )  
---  
Python (Manager API)
MTConSymbol.VolumeMin  
---  
Parameters
volume
[in] The minimum volume of trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeMinExt](imtconsymbol_volumeminext.md "VolumeMinExt") method.