# GatewaySymbolAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Gateway Symbols ](imtgatewayapi_gateway_symbols.md "Gateway Symbols")/ GatewaySymbolAdd | [](imtgatewayapi_gateway_symbols.md "Gateway Symbols") [](imtgatewayapi_gatewaysymboldelete.md "GatewaySymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewaySymbolAdd
Adds a new symbol to the list of symbols available to the gateway.
C++
MTAPIRES IMTGatewayAPI::GatewaySymbolAdd( IMTConSymbol* symbol // Symbol configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewaySymbolAdd( CIMTConSymbol symbol // Symbol configuration object )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method can only be called from gateways.
When calling the method, a check is made whether the record already exists. If the record exists, it is updated, otherwise a new one is added. The key field based on which the check is performed is the symbol name [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol"). If an attempt is performed to add a completely identical record, nothing changes.
Before adding, the record correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.