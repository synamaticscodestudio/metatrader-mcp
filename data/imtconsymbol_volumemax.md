# VolumeMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ VolumeMax | [](imtconsymbol_volumeminext.md "VolumeMinExt") [](imtconsymbol_volumemaxext.md "VolumeMaxExt") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::VolumeMax
Gets the maximum volume of trade operations for a symbol.
C++
UINT64 IMTConSymbol::VolumeMax() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSymbol.VolumeMax()  
---  
Python (Manager API)
MTConSymbol.VolumeMax  
---  
Return Value
The maximum volume of trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeMaxExt](imtconsymbol_volumemaxext.md "VolumeMaxExt") method.
IMTConSymbol::VolumeMax
Sets the maximum volume of trade operations for a symbol.
C++
MTAPIRES IMTConSymbol::VolumeMax( const UINT64 volume // Maximum volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.VolumeMax( ulong volume // Maximum volume )  
---  
Python (Manager API)
MTConSymbol.VolumeMax  
---  
Parameters
volume
[in] The maximum volume of trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeMaxExt](imtconsymbol_volumemaxext.md "VolumeMaxExt") method.