# SymbolSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolSubscribe | [](imtmanagerapi_symbolsessioncreate.md "SymbolSessionCreate") [](imtmanagerapi_symbolunsubscribe.md "SymbolUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolSubscribe
Subscribe to events associated with the configuration of symbols.
C++
MTAPIRES IMTManagerAPI::SymbolSubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolSubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Python
ManagerAPI.SymbolSubscribe( sink # IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConSymbolSink::OnSymbolSync](imtconsymbolsink_onsymbolsync.md "OnSymbolSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::SymbolUnsubscribe](imtmanagerapi_symbolunsubscribe.md "SymbolUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with symbol configuration changes, the pumping mode [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.