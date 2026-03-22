# SymbolTotal (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolTotal | [](imtgatewayapi_symboldelete.md "SymbolDelete") [](imtgatewayapi_symbolnext.md "SymbolNext") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolTotal
Get the number of the symbols configurations avaialble for a gateway or a data feed.
C++
UINT IMTGatewayAPI::SymbolTotal()  
---  
.NET
uint CIMTGatewayAPI.SymbolTotal()  
---  
Return Value
The number of configurations, available for a gateway or a data feed.
Note
Available symbols are specified in the "Symbols" tab of a gateway in MetaTrader 5 Administrator. The list does not include the symbols, for which sending of quotes from the gateway is useless:
  * Symbols with the filled [IMTConSymbol::Source](imtconsymbol_source.md "Source") field. Quotes for such symbols are always provided by the source symbol.
  * Symbols with the disabled [IMTConSymbol::EnTickFlags::TICK_REALTIME](imtconsymbol_enum.htm#entickflags) flag. The platform does not receive quotes from gateways and datafeeds for such symbols.

[IMTConGateway::Symbol*](imtcongateway_symboladd.md "SymbolAdd") and [IMTConFeeder::Symbol*](imtconfeeder_symboladd.md "SymbolAdd") methods groups are provided for working with available symbols.