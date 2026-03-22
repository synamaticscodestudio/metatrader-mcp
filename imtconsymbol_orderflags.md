# OrderFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ OrderFlags | [](imtconsymbol_tradeflags.md "TradeFlags") [](imtconsymbol_facevalue.md "FaceValue") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::OrderFlags
Gets the flags of order types allowed for the symbol.
C++
UINT IMTConSymbol::OrderFlags() const  
---  
.NET (Gateway/Manager API)
EnOrderFlags CIMTConSymbol.OrderFlags()  
---  
Python (Manager API)
MTConSymbol.OrderFlags  
---  
Return Value
A value of the [IMTConSymbol::EnOrderFlags](imtconsymbol_enum.htm#enorderflags) enumeration.
IMTConSymbol::OrderFlags
Sets the flags of order types allowed for the symbol.
C++
MTAPIRES IMTConSymbol::OrderFlags( const UINT flags // Order flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.OrderFlags( EnOrderFlags flags // Order flags )  
---  
Python (Manager API)
MTConSymbol.OrderFlags  
---  
Parameters
flags
[in] The flags are passed using the [IMTConSymbol::EnOrderFlags](imtconsymbol_enum.htm#enorderflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.