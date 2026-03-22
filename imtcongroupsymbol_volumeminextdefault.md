# VolumeMinExtDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeMinExtDefault | [](imtcongroupsymbol_volumemindefault.md "VolumeMinDefault") [](imtcongroupsymbol_volumemax.md "VolumeMax") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeMinExtDefault
Gets the default [minimum volume](imtconsymbol_volumemin.md "VolumeMin") (with extended accuracy) of trading operations for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeMinExtDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeMinExtDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeMinExtDefault  
---  
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConGroupSymbol::VolumeMinDefault](imtcongroupsymbol_volumemindefault.md "VolumeMinDefault") method.