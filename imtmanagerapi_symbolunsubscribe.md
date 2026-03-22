# SymbolUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolUnsubscribe | [](imtmanagerapi_symbolsubscribe.md "SymbolSubscribe") [](imtmanagerapi_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolUnsubscribe
Unsubscribe from events associated with the configuration of symbols.
C++
MTAPIRES IMTManagerAPI::SymbolUnsubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolUnsubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Python
ManagerAPI.SymbolUnsubscribe( sink // IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is pared to [IMTManagerAPI::SymbolSubscribe](imtmanagerapi_symbolsubscribe.md "SymbolSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.