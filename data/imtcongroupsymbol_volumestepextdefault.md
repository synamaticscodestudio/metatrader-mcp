# VolumeStepExtDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeStepExtDefault | [](imtcongroupsymbol_volumestepdefault.md "VolumeStepDefault") [](imtcongroupsymbol_volumelimit.md "VolumeLimit") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeStepExtDefault
Gets the default value of the [volume change step](imtconsymbol_volumestep.md "VolumeStep") (with extended accuracy) for trade operations for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeStepExtDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeStepExtDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeStepExtDefault  
---  
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConGroupSymbol::VolumeStepDefault](imtcongroupsymbol_volumestepdefault.md "VolumeStepDefault") method.