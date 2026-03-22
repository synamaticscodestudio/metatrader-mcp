# SymbolSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolSubscribe | [](imtadminapi_symbolsessioncreate.md "SymbolSessionCreate") [](imtadminapi_symbolunsubscribe.md "SymbolUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolSubscribe
Subscribe to events associated with the configuration of symbols.
C++
MTAPIRES IMTAdminAPI::SymbolSubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolSubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Python
AdminAPI.SymbolSubscribe( sink # IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConSymbolSink::OnSymbolSync](imtconsymbolsink_onsymbolsync.md "OnSymbolSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::SymbolUnsubscribe](imtadminapi_symbolunsubscribe.md "SymbolUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.