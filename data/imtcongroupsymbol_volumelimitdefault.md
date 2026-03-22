# VolumeLimitDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ VolumeLimitDefault | [](imtcongroupsymbol_volumelimitext.md "VolumeLimitExt") [](imtcongroupsymbol_volumelimitextdefault.md "VolumeLimitExtDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::VolumeLimitDefault
Gets the default [maximum allowable aggregate volume](imtconsymbol_volumelimit.md "VolumeLimit") of positions and orders in one direction for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::VolumeLimitDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.VolumeLimitDefault()  
---  
Python (Manager API)
MTConGroupSymbol.VolumeLimitDefault  
---  
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::VolumeLimitExtDefault](imtcongroupsymbol_volumelimitextdefault.md "VolumeLimitExtDefault") method.