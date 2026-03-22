# GatewaySymbolDelete (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Gateway Symbols ](imtgatewayapi_gateway_symbols.md "Gateway Symbols")/ GatewaySymbolDelete | [](imtgatewayapi_gatewaysymboladd.md "GatewaySymbolAdd") [](imtgatewayapi_gatewaysymbolclear.md "GatewaySymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewaySymbolDelete
Deletes a symbol from the list available to the gateway (by name).
C++
MTAPIRES IMTGatewayAPI::GatewaySymbolDelete( LPCWSTR name // Symbol name )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewaySymbolDelete( string name // Symbol name )  
---  
Parameters
name
[in] Symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method can only be called from gateways.
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.