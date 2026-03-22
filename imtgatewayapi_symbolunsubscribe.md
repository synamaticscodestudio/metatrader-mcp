# SymbolUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolUnsubscribe | [](imtgatewayapi_symbolsubscribe.md "SymbolSubscribe") [](imtgatewayapi_symboladdpreliminary.md "SymbolAddPreliminary") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolUnsubscribe
Unsubscribe from events and hooks associated with the configuration of symbols.
C++
MTAPIRES IMTGatewayAPI::SymbolUnsubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolUnsubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::SymbolSubscribe](imtgatewayapi_symbolsubscribe.md "SymbolSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.