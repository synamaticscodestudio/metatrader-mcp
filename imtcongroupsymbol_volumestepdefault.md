# VolumeStepDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeStepDefault | [](imtcongroupsymbol_volumestepext.md "VolumeStepExt") [](imtcongroupsymbol_volumestepextdefault.md "VolumeStepExtDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeStepDefault
Gets the default value of [the volume change step](imtconsymbol_volumestep.md "VolumeStep") for trade operations on a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeStepDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeStepDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeStepDefault  
---  
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeStepExtDefault](imtcongroupsymbol_volumestepextdefault.md "VolumeStepExtDefault") method.