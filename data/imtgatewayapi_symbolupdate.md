# SymbolUpdate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolUpdate | [](imtgatewayapi_symboladdpreliminary.md "SymbolAddPreliminary") [](imtgatewayapi_symboldelete.md "SymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolUpdate
Add or update a symbol configuration.
C++
MTAPIRES IMTGatewayAPI::SymbolUpdate( IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolUpdate( CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method can only be called after receiving the [IMTGatewaySink::OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized") notification for the main trade server. Otherwise, the call will return the [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") error.
If a symbol participates in translation settings as a recipient ([IMTConGatewayTranslate::Symbol](imtcongatewaytranslate_symbol.md "Symbol")), the [IMTConSymbol::Path](imtconsymbol_path.md "Path") parameter cannot be changed for it. If you try to change, SymbolUpdate will return MT_RET_OK, but the field value will not change.
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the name of the symbol [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConSymbolSink::OnSymbolUpdate](imtconsymbolsink_onsymbolupdate.md "OnSymbolUpdate") notification method is not called.
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.