# REFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ REFlags | [](imtconsymbol_sessiontradenext.md "SessionTradeNext") [](imtconsymbol_retimeout.md "RETimeout") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::REFlags
Get the flags of request execution ([IMTConSymbol::EXECUTION_REQUEST](imtconsymbol_enum.htm#enexecutionmode)).
C++
UINT IMTConSymbol::REFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.REFlags()  
---  
Python (Manager API)
MTConSymbol.REFlags  
---  
Return Value
A value of the [IMTConSymbol::EnRequestFlags](imtconsymbol_enum.htm#enrequestflags) enumeration.
IMTConSymbol::REFlags
Set the flags of request execution ([IMTConSymbol::EXECUTION_REQUEST](imtconsymbol_enum.htm#enexecutionmode)).
C++
MTAPIRES IMTConSymbol::REFlags( const UINT flags // Flags of request execution )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.REFlags( uint flags // Flags of request execution )  
---  
Python (Manager API)
MTConSymbol.REFlags  
---  
Parameters
flags
[in] The request execution flags. The flags are passed using the [IMTConSymbol::EnRequestFlags](imtconsymbol_enum.htm#enrequestflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.