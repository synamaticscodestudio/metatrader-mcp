# IEVolumeMaxExtDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IEVolumeMaxExtDefault | [](imtcongroupsymbol_ievolumemaxdefault.md "IEVolumeMaxDefault") [](imtcongroupsymbol_ieflags.md "IEFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IEVolumeMaxExtDefault
Gets the [default](imtconsymbol_volumemax.md "VolumeMax") maximum volume of a trade operation which can be executed in the instant execution mode. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT64 IMTConGroupSymbol::IEVolumeMaxExtDefault() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.IEVolumeMaxExtDefault()  
---  
Python (Manager API)
MTConGroupSymbol.IEVolumeMaxExtDefault  
---  
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConGroupSymbol::IEVolumeMaxDefault](imtcongroupsymbol_ievolumemaxdefault.md "IEVolumeMaxDefault") method.