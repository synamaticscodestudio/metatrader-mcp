# VolumeStep (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeStep | [](imtcongroupsymbol_volumemaxextdefault.md "VolumeMaxExtDefault") [](imtcongroupsymbol_volumestepext.md "VolumeStepExt") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeStep
Gets the step of change of trade operations volume for a symbol for the group.
C++
UINT64 IMTConGroupSymbol::VolumeStep() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeStep()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeStep  
---  
Return Value
The step of change of the volume of trade operations on a symbol for the group in the UINT64 format (one unit is equal to 1/10,000 of a lot).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeStepExt](imtcongroupsymbol_volumestepext.md "VolumeStepExt") method.
IMTConGroupSymbol::VolumeStep
Sets the step of change of trade operations volume for a symbol for the group.
C++
MTAPIRES IMTConGroupSymbol::VolumeStep( const UINT64 volume // Volume change step )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.VolumeStep( ulong volume // Volume change step )  
---  
Python (Manager API)
MTConGroupSymbol.VolumeStep  
---  
Parameters
volume
[in] Change step of the volume of trade operations on a symbol for the group in the UINT64 format (one unit is equal to 1/10,000 of a lot).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeStepExt](imtcongroupsymbol_volumestepext.md "VolumeStepExt") method.