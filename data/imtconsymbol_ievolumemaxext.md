# IEVolumeMaxExt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IEVolumeMaxExt | [](imtconsymbol_ievolumemax.md "IEVolumeMax") [](imtconsymbol_ieflags.md "IEFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IEVolumeMaxExt
Gets the maximum volume (with extended accuracy) of a trade operation that can be executed in the instant execution mode.
C++
UINT64 IMTConSymbol::IEVolumeMaxExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSymbol.IEVolumeMaxExt()  
---  
Python (Manager API)
MTConSymbol.IEVolumeMaxExt  
---  
Return Value
The maximum volume of a trade operation that can be executed in the instant execution mode, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots). In case this limit is exceeded, trade operations are processed in the manual execution mode.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConSymbol::IEVolumeMax](imtconsymbol_ievolumemax.md "IEVolumeMax") method.
IMTConSymbol::IEVolumeMaxExt
Sets the maximum volume (with extended accuracy) of a trade operation that can be executed in the instant execution mode.
C++
MTAPIRES IMTConSymbol::IEVolumeMaxExt( const UINT64 volume // Maximum volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IEVolumeMaxExt( ulong volume // Maximum volume )  
---  
Python (Manager API)
MTConSymbol.IEVolumeMaxExt  
---  
Program Parameters
volume
[in] The maximum volume of a trade operation that can be executed in the instant execution mode, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots). In case this limit is exceeded, trade operations are processed in the manual execution mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConSymbol::IEVolumeMax](imtconsymbol_ievolumemax.md "IEVolumeMax") method.