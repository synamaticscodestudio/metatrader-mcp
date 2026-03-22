# IEVolumeMaxDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IEVolumeMaxDefault | [](imtcongroupsymbol_ievolumemaxext.md "IEVolumeMaxExt") [](imtcongroupsymbol_ievolumemaxextdefault.md "IEVolumeMaxExtDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IEVolumeMaxDefault
Gets the [default](imtconsymbol_volumemax.md "VolumeMax") maximum volume of a trade operation that can be executed in the instant execution mode. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::IEVolumeMaxDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.IEVolumeMaxDefault()  
---  
Python (Manager API)
MTConGroupSymbol.IEVolumeMaxDefault  
---  
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::IEVolumeMaxExtDefault](imtcongroupsymbol_ievolumemaxextdefault.md "IEVolumeMaxExtDefault") method.