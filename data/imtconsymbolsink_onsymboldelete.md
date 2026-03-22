# OnSymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ OnSymbolDelete | [](imtconsymbolsink_onsymbolupdate.md "OnSymbolUpdate") [](imtconsymbolsink_onsymbolsync.md "OnSymbolSync") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::OnSymbolDelete
A handler of the event of symbol removal.
C++
virtual void IMTConSymbolSink::OnSymbolDelete( const IMTConSymbol* config // A pointer to the symbol object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSymbolSink.OnSymbolDelete( CIMTConSymbol config // A symbol object )  
---  
Parameters
config
[in] A pointer to the object of the deleted symbol.
Note
This method is called by the API to notify of a fact that a symbol has been deleted.