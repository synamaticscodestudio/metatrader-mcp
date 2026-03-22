# VolumeStep (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ VolumeStep | [](imtconsymbol_volumemaxext.md "VolumeMaxExt") [](imtconsymbol_volumestepext.md "VolumeStepExt") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::VolumeStep
Gets the volume change step for trade operations for a symbol.
C++
UINT64 IMTConSymbol::VolumeStep() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSymbol.VolumeStep()  
---  
Python (Manager API)
MTConSymbol.VolumeStep  
---  
Return Value
The volume change step for trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeStepExt](imtconsymbol_volumestepext.md "VolumeStepExt") method.
IMTConSymbol::VolumeStep
Sets the volume change step for trade operations for a symbol.
C++
MTAPIRES IMTConSymbol::VolumeStep( const UINT64 volume // Volume change step )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.VolumeStep( ulong volume // Volume change step )  
---  
Python (Manager API)
MTConSymbol.VolumeStep  
---  
Parameters
volume
[in] The volume change step for trade operations for a symbol in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConSymbol::VolumeStepExt](imtconsymbol_volumestepext.md "VolumeStepExt") method.