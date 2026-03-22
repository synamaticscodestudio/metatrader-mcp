# SymbolDelete (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolDelete | [](imtgatewayapi_symbolupdate.md "SymbolUpdate") [](imtgatewayapi_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolDelete
Delete a symbol configuration by the index or name.
C++
MTAPIRES IMTGatewayAPI::SymbolDelete( LPCWSTR name // Symbol name )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolDelete( string name // Symbol name )  
---  
Parameters
name
[in] Symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.