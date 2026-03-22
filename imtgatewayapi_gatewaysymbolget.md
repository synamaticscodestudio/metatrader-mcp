# GatewaySymbolGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Gateway Symbols ](imtgatewayapi_gateway_symbols.md "Gateway Symbols")/ GatewaySymbolGet | [](imtgatewayapi_gatewaysymbolnext.md "GatewaySymbolNext") [](imtgatewayapi_dealing.md "Processing Trade Requests") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewaySymbolDelete
Gets the description of a symbol available to the gateway, by name.
C++
MTAPIRES IMTGatewayAPI::GatewaySymbolDelete( LPCWSTR name, // Configuration name IMTConSymbol* symbol // Symbol configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewaySymbolDelete( string name, // Configuration name CIMTConSymbol symbol // Symbol configuration object )  
---  
Parameters
name
[in] The name of the configuration.
symbol
[out] An object of the symbol configuration. The symbol object must be previously created using the [IMTGatewayAPI::SymbolCreate](imtgatewayapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method can only be called from gateways.