# TickFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TickFlags | [](imtconsymbol_multiply.md "Multiply") [](imtconsymbol_tickbookdepth.md "TickBookDepth") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TickFlags
Get the settings of working with tick data.
C++
UINT64 IMTConSymbol::TickFlags() const  
---  
.NET (Gateway/Manager API)
EnTickFlags CIMTConSymbol.TickFlags()  
---  
Python (Manager API)
MTConSymbol.TickFlags  
---  
Return Value
To pass the settings, the [IMTConSymbol::EnTickFlags](imtconsymbol_enum.htm#entickflags) enumeration is used.
IMTConSymbol::TickFlags
Set the settings of working with tick data.
C++
MTAPIRES IMTConSymbol::TickFlags( const UINT64 flags // Flags of settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TickFlags( EnTickFlags flags // Flags of settings )  
---  
Python (Manager API)
MTConSymbol.TickFlags  
---  
Parameters
flags
[in] To pass the settings, the [IMTConSymbol::EnTickFlags](imtconsymbol_enum.htm#entickflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.