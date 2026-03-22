# SymbolUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolUnsubscribe | [](imtserverapi_symbolsubscribe.md "SymbolSubscribe") [](imtserverapi_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolUnsubscribe
Unsubscribe from events and hooks associated with the configuration of symbols.
MTAPIRES IMTServerAPI::SymbolUnsubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::SymbolSubscribe](imtserverapi_symbolsubscribe.md "SymbolSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.