# SymbolUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolUnsubscribe | [](imtadminapi_symbolsubscribe.md "SymbolSubscribe") [](imtadminapi_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolUnsubscribe
Unsubscribe from events associated with the configuration of symbols.
C++
MTAPIRES IMTAdminAPI::SymbolUnsubscribe( IMTConSymbolSink* sink // A pointer to the IMTConSymbolSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolUnsubscribe( CIMTConSymbolSink sink // CIMTConSymbolSink object )  
---  
Python
AdminAPI.SymbolUnsubscribe( sink # IMTConSymbolSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::SymbolSubscribe](imtadminapi_symbolsubscribe.md "SymbolSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.