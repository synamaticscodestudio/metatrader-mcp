# OnSymbolSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ OnSymbolSync | [](imtconsymbolsink_onsymboldelete.md "OnSymbolDelete") [](imtconsymbolsink_hooksymboladd.md "HookSymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::OnSymbolSync
A handler of the event of symbols synchronization.
C++
virtual void IMTConSymbolSink::OnSymbolSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSymbolSink.OnSymbolSync()  
---  
Note
This method is called by the API to notify of synchronization of symbols.
Synchronization of symbol configurations is performed on Access, History, Trade and Backup servers during connection to the main server.