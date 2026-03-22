# SymbolNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolNext | [](imtgatewayapi_symboltotal.md "SymbolTotal") [](imtgatewayapi_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolNext
Get the symbol configuration by the index.
C++
MTAPIRES IMTGatewayAPI::SymbolNext( const UINT pos, // Position of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolNext( uint pos, // Position of the configuration CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTGatewayAPI::SymbolCreate](imtgatewayapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies the configuration data of a symbol with a specified index to the symbol object.
To get all symbols available to the gateway, use [IMTGatewayAPI::SymbolTotal](imtgatewayapi_symboltotal.md "SymbolTotal").
Available symbols are specified in the "Symbols" tab of a gateway in MetaTrader 5 Administrator. The list does not include the symbols, for which sending of quotes from the gateway is useless:
  * Symbols with the filled [IMTConSymbol::Source](imtconsymbol_source.md "Source") field. Quotes for such symbols are always provided by the source symbol.
  * Symbols with the disabled [IMTConSymbol::EnTickFlags::TICK_REALTIME](imtconsymbol_enum.htm#entickflags) flag. The platform does not receive quotes from gateways and datafeeds for such symbols.
