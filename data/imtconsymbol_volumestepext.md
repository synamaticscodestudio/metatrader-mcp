# VolumeStepExt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ VolumeStepExt | [](imtconsymbol_volumestep.md "VolumeStep") [](imtconsymbol_volumelimit.md "VolumeLimit") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::VolumeStepExt
Gets the volume change step allowed for trade operations for the symbol, with extended accuracy.
C++
UINT64 IMTConSymbol::VolumeStepExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSymbol.VolumeStepExt()  
---  
Python (Manager API)
MTConSymbol.VolumeStepExt  
---  
Return Value
Step of volume change for the trading operations for the symbol, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConSymbol::VolumeStep](imtconsymbol_volumestep.md "VolumeStep") method.
IMTConSymbol::VolumeStepExt
Sets the volume change step allowed for trade operations for the symbol, with extended accuracy.
C++
MTAPIRES IMTConSymbol::VolumeStepExt( const UINT64 volume // Volume change step )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.VolumeStepExt( ulong volume // Volume change step )  
---  
Python (Manager API)
MTConSymbol.VolumeStepExt  
---  
Program Parameters
volume
[in] Step of volume change for the trading operations in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConSymbol::VolumeStep](imtconsymbol_volumestep.md "VolumeStep") method.