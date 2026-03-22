# VolumeMaxDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeMaxDefault | [](imtcongroupsymbol_volumemaxext.md "VolumeMaxExt") [](imtcongroupsymbol_volumemaxextdefault.md "VolumeMaxExtDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeMaxDefault
Gets the default value of [the maximum volume](imtconsymbol_volumemax.md "VolumeMax") of trade operations for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeMaxDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeMaxDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeMaxDefault  
---  
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeMaxExtDefault](imtcongroupsymbol_volumemaxextdefault.md "VolumeMaxExtDefault") method.