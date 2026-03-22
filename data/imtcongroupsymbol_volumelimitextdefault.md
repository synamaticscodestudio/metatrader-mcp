# VolumeLimitExtDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeLimitExtDefault | [](imtcongroupsymbol_volumelimitdefault.md "VolumeLimitDefault") [](imtcongroupsymbol_marginflags.md "MarginFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeLimitExtDefault
Gets [the default maximum aggregate volume](imtconsymbol_volumelimit.md "VolumeLimit") of positions and orders for a symbol with extended accuracy. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeLimitExtDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeLimitExtDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeLimitExtDefault  
---  
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConGroupSymbol::VolumeLimitDefault](imtcongroupsymbol_volumelimitdefault.md "VolumeLimitDefault") method.