# VolumeMinDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeMinDefault | [](imtcongroupsymbol_volumeminext.md "VolumeMinExt") [](imtcongroupsymbol_volumeminextdefault.md "VolumeMinExtDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeMinDefault
Get the default value of [the minimum volume](imtconsymbol_volumemin.md "VolumeMin") of trade operations for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeMinDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeMinDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeMinDefault  
---  
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeMinExtDefault](imtcongroupsymbol_volumeminextdefault.md "VolumeMinExtDefault") method.