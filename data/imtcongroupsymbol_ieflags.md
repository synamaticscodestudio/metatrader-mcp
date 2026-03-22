# IEFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IEFlags | [](imtcongroupsymbol_ievolumemaxextdefault.md "IEVolumeMaxExtDefault") [](imtcongroupsymbol_ieflagsdefault.md "IEFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IEFlags
Get flags for the instant execution mode ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)).
C++
UINT IMTConGroupSymbol::IEFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.IEFlags()  
---  
Python (Manager API)
MTConGroupSymbol.IEFlags  
---  
Return Value
A value from the [IMTConSymbol::EnInstantFlags](imtconsymbol_enum.htm#eninstantflags) enumeration.
Note
This method operates with individual symbol settings for groups.
IMTConGroupSymbol::IEFlags
Set flags for the instant execution mode ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)).
C++
MTAPIRES IMTConGroupSymbol::IEFlags( const UINT flags // Instant execution flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.IEFlags( uint flags // Instant execution flags )  
---  
Python (Manager API)
MTConGroupSymbol.IEFlags  
---  
Parameters
flags
[in] Instant execution flags. They are passed using the [IMTConSymbol::EnInstantFlags](imtconsymbol_enum.htm#eninstantflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method operates with individual symbol settings for groups.