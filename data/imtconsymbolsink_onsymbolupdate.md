# OnSymbolUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ OnSymbolUpdate | [](imtconsymbolsink_onsymboladd.md "OnSymbolAdd") [](imtconsymbolsink_onsymboldelete.md "OnSymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::OnSymbolUpdate
A handler of the event of updating symbol settings.
C++
virtual void IMTConSymbolSink::OnSymbolUpdate( const IMTConSymbol* config // A pointer to the symbol object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSymbolSink.OnSymbolUpdate( CIMTConSymbol config // A symbol object )  
---  
Parameters
config
[in] A pointer to the updated symbol object.
Note
This method is called by the API to notify of change of symbol settings.