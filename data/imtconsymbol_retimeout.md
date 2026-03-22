# RETimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ RETimeout | [](imtconsymbol_reflags.md "REFlags") [](imtconsymbol_iecheckmode.md "IECheckMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::RETimeout
Get the time during which the price issued by a dealer in the request execution mode is valid.
C++
UINT IMTConSymbol::RETimeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.RETimeout()  
---  
Python (Manager API)
MTConSymbol.RETimeout  
---  
Return Value
Time in seconds during which the price issued by a dealer in the request execution mode is valid.
IMTConSymbol::RETimeout
Set the time during which the price issued by a dealer in the request execution mode is valid.
C++
MTAPIRES IMTConSymbol::RETimeout( const UINT timeout // Price validity period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.RETimeout( uint timeout // Price validity period )  
---  
Python (Manager API)
MTConSymbol.RETimeout  
---  
Parameters
timeout
[in] Time in seconds during which the price issued by a dealer in the request execution mode is valid.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.