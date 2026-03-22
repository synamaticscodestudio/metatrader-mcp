# SymbolSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolSubscribe | [](imtserverapi_symbolsessioncreate.md "SymbolSessionCreate") [](imtserverapi_symbolunsubscribe.md "SymbolUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolSubscribe
Subscribe to events and hooks associated with the configuration of symbols.
MTAPIRES IMTServerAPI::SymbolSubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::SymbolUnsubscribe](imtserverapi_symbolunsubscribe.md "SymbolUnsubscribe") or until the plugin is deleted.