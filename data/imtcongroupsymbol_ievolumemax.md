# IEVolumeMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IEVolumeMax | [](imtcongroupsymbol_iesliplosingdefault.md "IESlipLosingDefault") [](imtcongroupsymbol_ievolumemaxext.md "IEVolumeMaxExt") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IEVolumeMax
Gets the maximum volume of a trade operation that can be executed in the instant execution mode.
C++
UINT64 IMTConGroupSymbol::IEVolumeMax() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroupSymbol.IEVolumeMax()  
---  
Python (Manager API)
MTConGroupSymbol.IEVolumeMax  
---  
Return Value
The maximum volume of a trade operation that can be executed in the instant execution mode in the UINT64 format (one unit is equal to 1/10,000 of a lot). In case this limit is exceeded, trade operations are processed in the manual execution mode.
Note
This method operates with individual symbol settings for groups.
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::IEVolumeMaxExt](imtcongroupsymbol_ievolumemaxext.md "IEVolumeMaxExt") method.
IMTConGroupSymbol::IEVolumeMax
Sets the maximum volume of a trade operation that can be executed in the instant execution mode.
C++
MTAPIRES IMTConGroupSymbol::IEVolumeMax( const UINT64 volume // Maximum volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.IEVolumeMax( ulong volume // Maximum volume )  
---  
Python (Manager API)
MTConGroupSymbol.IEVolumeMax  
---  
Parameters
volume
[in] The maximum volume of a trade operation that can be executed in the instant execution mode in the UINT64 format (one unit is equal to 1/10,000 of a lot). In case this limit is exceeded, trade operations are processed in the manual execution mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method operates with individual symbol settings for groups.
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConGroupSymbol::IEVolumeMaxExt](imtcongroupsymbol_ievolumemaxext.md "IEVolumeMaxExt") method.