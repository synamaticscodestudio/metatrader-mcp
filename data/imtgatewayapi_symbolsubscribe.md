# SymbolSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolSubscribe | [](imtgatewayapi_symbolsessioncreate.md "SymbolSessionCreate") [](imtgatewayapi_symbolunsubscribe.md "SymbolUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolSubscribe
Subscribe to events and hooks associated with the configuration of symbols.
C++
MTAPIRES IMTGatewayAPI::SymbolSubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolSubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::SymbolUnsubscribe](imtgatewayapi_symbolunsubscribe.md "SymbolUnsubscribe") or until the plugin is deleted.