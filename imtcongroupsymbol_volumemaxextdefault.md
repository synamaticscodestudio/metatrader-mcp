# VolumeMaxExtDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeMaxExtDefault | [](imtcongroupsymbol_volumemaxdefault.md "VolumeMaxDefault") [](imtcongroupsymbol_volumestep.md "VolumeStep") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeMaxExtDefault
Gets the default [maximum volume](imtconsymbol_volumemax.md "VolumeMax") of trade operations for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeMaxExtDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeMaxExtDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeMaxExtDefault  
---  
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConGroupSymbol::VolumeMaxDefault](imtcongroupsymbol_volumemaxdefault.md "VolumeMaxDefault") method.