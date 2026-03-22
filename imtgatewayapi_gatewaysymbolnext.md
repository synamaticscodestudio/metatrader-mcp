# GatewaySymbolNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Gateway Symbols ](imtgatewayapi_gateway_symbols.md "Gateway Symbols")/ GatewaySymbolNext | [](imtgatewayapi_gatewaysymboltotal.md "GatewaySymbolTotal") [](imtgatewayapi_gatewaysymbolget.md "GatewaySymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewaySymbolDelete
Gets the description of a symbol available to the gateway, by index.
C++
MTAPIRES IMTGatewayAPI::GatewaySymbolDelete( const UINT pos, // Configuration position IMTConSymbol* symbol // Symbol configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewaySymbolDelete( uint pos, // Configuration position CIMTConSymbol symbol // Symbol configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be previously created using the [IMTGatewayAPI::SymbolCreate](imtgatewayapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method can only be called from gateways.
The method copies the configuration data of the symbol with the specified index to the 'symbol' object.
To get the number of symbols available to the gateway, use [IMTGatewayAPI::GatewaySymbolTotal](imtgatewayapi_gatewaysymboltotal.md "GatewaySymbolTotal").