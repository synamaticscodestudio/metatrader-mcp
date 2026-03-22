# TradeFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TradeFlags | [](imtconsymbol_pricelimitmin.md "PriceLimitMin") [](imtconsymbol_orderflags.md "OrderFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TradeFlags
Get the trade flags of the symbol.
C++
UINT64 IMTConSymbol::TradeFlags() const  
---  
.NET (Gateway/Manager API)
EnTradeFlags CIMTConSymbol.TradeFlags()  
---  
Python (Manager API)
MTConSymbol.TradeFlags  
---  
Return Value
A value of the [IMTConSymbol::EnTradeFlags](imtconsymbol_enum.htm#entradeflags) enumeration.
IMTConSymbol::TradeFlags
Set Get the trade flags of the symbol.
C++
MTAPIRES IMTConSymbol::TradeFlags( const UINT64 flags // Flags of settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TradeFlags( EnTradeFlags flags // Flags of settings )  
---  
Python (Manager API)
MTConSymbol.TradeFlags  
---  
Parameters
flags
[in] To pass the trade flags, the [IMTConSymbol::EnTradeFlags](imtconsymbol_enum.htm#entradeflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.