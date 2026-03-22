# IEFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IEFlags | [](imtconsymbol_ievolumemaxext.md "IEVolumeMaxExt") [](imtconsymbol_pricesettle.md "PriceSettle") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IEFlags
Get flags for the instant execution mode ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)).
C++
UINT IMTConSymbol::IEFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.IEFlags()  
---  
Python (Manager API)
MTConSymbol.IEFlags  
---  
Return Value
A value from the [IMTConSymbol::EnInstantFlags](imtconsymbol_enum.htm#eninstantflags) enumeration.
IMTConSymbol::IEFlags
Set flags for the instant execution mode ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)).
C++
MTAPIRES IMTConSymbol::IEFlags( const UINT flags // Instant execution flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IEFlags( uint flags // Instant execution flags )  
---  
Python (Manager API)
MTConSymbol.IEFlags  
---  
Parameters
flags
[in] Instant execution flags. They are passed using the [IMTConSymbol::EnInstantFlags](imtconsymbol_enum.htm#eninstantflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.