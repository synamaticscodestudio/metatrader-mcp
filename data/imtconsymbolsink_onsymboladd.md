# OnSymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ OnSymbolAdd | [](imtconsymbolsink.md "IMTConSymbolSink") [](imtconsymbolsink_onsymbolupdate.md "OnSymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::OnSymbolAdd
A handler of the event of adding a new symbol.
C++
virtual void IMTConSymbolSink::OnSymbolAdd( const IMTConSymbol* config // A pointer to the symbol object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSymbolSink.OnSymbolAdd( CIMTConSymbol  config // A symbol object )  
---  
Parameters
config
[in] A pointer to the object of the added symbol.
Note
This method is called by the API to notify that a new symbol has been added.